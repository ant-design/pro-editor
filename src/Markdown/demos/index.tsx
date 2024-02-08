/**
 * title: 自定义操作
 * description: 可以通过自己传入 components 等 `React-Markdown` 的 Props 来进行自定义，多余的会透传过去。
 */
import { Markdown } from '@ant-design/pro-editor';

import { content } from './data';

export default () => {
  return <Markdown>{content}</Markdown>;
};
