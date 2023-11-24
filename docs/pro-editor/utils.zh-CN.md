---
title: C2D2C 辅助函数
group:
  title: 工具类库
  order: 99
---

# generateJSXCode

该方法用于将组件属性配置拼接生成 jsx 代码。

```jsx | pure
import { generateJSXCode } from '@ant-design/pro-editor';

const config = {
  children: '默认按钮',
  target: '_blank',
  type: 'default',
  htmlType: 'button',
  danger: false,
  icon: '',
  size: 'middle',
  loading: true,
  disabled: false,
  ghost: false,
  block: false,
};

const code = generateJSXCode('Button', config);
```

结果为:

```jsx | pure
<Button
  target="_blank"
  type="default"
  htmlType="button"
  danger={false}
  size="middle"
  loading
  disabled={false}
  ghost={false}
  block={false}
>
  默认按钮
</Button>
```
