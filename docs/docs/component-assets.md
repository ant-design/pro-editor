---
title: 装配器组件元数据模型
group: 基础框架

nav:
  title: 文档
  order: 1
  path: /docs
---

# 复杂组件的元数据

### 木偶模型

高代码（props）和 低代码（配置器）的关系不是简单的一一映射，而是一种有机的组织形态，我们把它称为——木偶模型。 props 就像是木偶的线，而配置器就是木偶的控制器，它们的关系如下图所示：

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/300581/1649307170711-163ca277-379b-4d0e-9275-4c1dec8b927d.png#clientId=u9be76583-a829-4&errorMessage=unknown%20error&from=paste&height=879&id=uc066e0b3&name=image.png&originHeight=1758&originWidth=1790&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1045479&status=error&style=none&taskId=uf95a9025-c783-4348-8b4e-51c051d655e&title=&width=895)

一个对于配置器来说好用的结构，大概率和组件的 props 不是一一对应的。因此我们会专门为配置器设计一层独立的数据模型，我们称之为 config。

## 元数据模型

我们把代码的属性叫 props，然后把配置器的属性叫 config，提供配置器属性定义的描述叫 schema。 那么他们之间的关系如下图所示：

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/300581/1651817228823-95efe899-e41c-401d-83c1-2f0b0c819cac.png#clientId=u0442a73b-1706-4&errorMessage=unknown%20error&from=paste&height=1586&id=ucc9441c6&name=image.png&originHeight=3172&originWidth=4840&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3172487&status=error&style=none&taskId=u1b30c32b-4da4-44f8-8a38-b38efcbee51&title=&width=2420) <a name="pCzZe"></a>

- Schema（config）： 一份给到配置器的编辑器元数据
- Emmiter（config -> props）：将配置器转为代码属性
- Parser（props -> config）：将 props 解析为 config

基于这样一种数据模型，我们就能在理论上实现代码到装配器的双向转换。

### Model 结构

反映上述元数据模型的代码声明如下：

```typescript
const model: Model<Config, Props> = {
  key: '',
  schema: (config: Config, store: ProEditorStore): Schema => {},
  parser: (props: Props): Config => {},
  emitter: (config: Config, env: EmmiterEnv): Props => {},
};
```

## ComponentAssets

上述 Model 反映了组件数据流转的生命周期，接下来介绍组件资产元数据的描述模型 ComponentAssets。

```typescript
export const tableAssetParams = {
  id: 'table',
  // ...

  //  输入模型
  models: [tableModel, dataModel, toolbarModel],
};
```
