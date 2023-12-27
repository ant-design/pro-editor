---
title: FieldTitle 字段标题
group: 基础组件
---

# FieldTitle 字段标题

## 何时使用

为不同的字段类型配置字段图标以及字段标题。

## 代码演示

### 字段标题列表

<code src="./demos/basic.tsx" ></code>

### 配置展示

<code src="./demos/description.tsx" ></code>

## API

| 参数            | 说明      | 类型                      | 默认值 |
| :------------ | :------ | :---------------------- | :-- |
| type          | 字段类型    | 参考 `FieldIcon` 字段类型类型枚举 | -   |
| isParentArray | 父级是否是数组 | boolean                 | -   |
| title         | 字段标题    | `React.ReactNode`       | -   |
| description   | 标题右侧描述  | `React.ReactNode`       | -   |
