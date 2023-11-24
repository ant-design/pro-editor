---
title: C2D2C Helper Functions
group:
  title: Utility
  order: 99
---

# generateJSXCode

This method is used to concatenate component attribute configurations to generate JSX code.

```jsx | pure
import { generateJSXCode } from '@ant-design/pro-editor';

const config = {
  children: 'Default Button',
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

Result:

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
  Default Button
</Button>
```
