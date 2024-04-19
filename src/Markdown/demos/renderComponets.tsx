import { Markdown } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { memo } from 'react';

export default () => {
  return (
    <Markdown
      components={{
        a: memo((props) => (
          <Button
            onClick={() => {
              console.log(props.href);
            }}
          >
            该链接不允许点击跳转！{props.href}
          </Button>
        )),
      }}
    >
      {`
This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>
`}
    </Markdown>
  );
};
