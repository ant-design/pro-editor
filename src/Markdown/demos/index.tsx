import { Markdown } from '@ant-design/pro-editor';

import { content } from './data';

export default () => {
  return (
    <Markdown
      highlight={{
        containerWrapper: true,
      }}
    >
      {content}
    </Markdown>
  );
};
