---
title: ProEditor 数据流架构
group: 基础框架
---

# 适配多人协同模式的数据流架构

在多人协同中，我们根据数据的用途可以划分出两大类数据模型：

1. **文件数据**：唯一性数据实例（ N 个人看到的都是同一份文件数据）
2. **界面视图**：每个人默认看到自己的视图，但当用户选择跟随其他人时，视图完全 follow 对方的视图）

## ProEditor 容器数据流架构

ProEditor 的数据流包含两类：

- 容器类，有且仅有一个： `ProEditorStore` ;
- 组件类，视根据未来的扩展情况进行扩张，目前有 `ProTableStore`、`ProLayoutStore`，后续可能为会扩展 `ProFromStore`、`ProChartStore` 等；

容器类 Store 只存放 Editor 相关状态，例如：

- 开发者 / 设计师模式；
- 画布 / 代码的切换；
- 当前画布交互的激活信息；
- 当前加载的 ComponentAsset 实例；
- ...

组件类 Store 会包含具体的组件配置，例如：

- 组件配置信息；
- 组件面板切换的 tabs；
- 预览器折叠状态；
- ...

这样拆分的目的就是将关注点进行分离，进而方便未来的扩展。

## 数据流流转模式

数据流连接方式，分别从容器层和组件层进行说明。

### 容器层

容器层核心的作用是调度组件层数据与外部数据源的通信。

由于 ProEditor 本身是一个组件，因此它必须同时支持受控模式与非受控模式，这对于数据流的架构就带来了很大的挑战。

由于编辑器的信息处理较为复杂，非受控模式下，数据全部由组件自行处理是没有问题。但是一旦到了受控模式，内部状态和外部状态应该如何同步才能保证数据的一致性，并让组件消费者使用上做到较为灵活，便是一件很头疼的问题。

像 `ProTableStore` 里的 columns 数据有 20+ 的 dispatch 方法， 如果这些方法如果直接暴露给组件外部消费的开发者，外部开发者怕是要炸。

在之前的踩坑过程中，如果使用 useEffect 监听外部变化 setState 进来，内部 state 变化时 onChange 出去，非常容易造成重复渲染的死循环，这对于开发者的心智负担极重。

下面的代码在较为简单的场景下可以适用，但是在我们有 10+ 操作方法，并且需要使用 reducer 的情况下，数据流的处理就会变成一团乱麻。

```tsx | pure
import { useEffect, useState } from 'react';

const useStore = (value, onChange) => {
  const [innerValue, setValue] = useState('');

  useEffect(() => {
    setValue(value);
  }, [value]);

  const innerSetState = (value) => {
    setValue(value);

    onChange(value);
  };
};
```

因此，从最终的开发上，采用以内部数据源作为 SoT ，将外部的数据源根据情况同步进内部数据源，实现状态管理。

具体的开发策略为：

1. 首先和正常开发一样，在 Wrapper 创建一个顶层数据源，下发给子组件；
2. 将组件本身作为一个非受控组件进行开发（App），不考虑任何外部受控值；
3. 使用 `StoreUpdater` 组件作为**胶水层**隔离内部应用（`App`）与 外部数据源（`config`、`onConfigChange`、`defaultConfig`等）；
4. 根据情况在 `store` 中确定需要数据交互的方法、对象，在`internalUpdate`方法中加入`OnChange`，用`syncOutSource`方法同步外部数据源到内部；

```tsx | pure
export const Container: FC = (props) => {
  const {
    config,
    onConfigChange,
    defaultConfig,

    ...res
  } = props;

  return (
    <Wrapper>
      <App {...res} />
      <StoreUpdater config={config} defaultConfig={defaultConfig} onConfigChange={onConfigChange} />
    </Wrapper>
  );
};
```
