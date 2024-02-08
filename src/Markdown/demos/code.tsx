/**
 * title: 代码渲染
 * description: Markdown 内置 `Highlight` 代码渲染
 */
import { Markdown } from '@ant-design/pro-editor';
import { codeContent } from './data';

export default () => {
  return <Markdown>{codeContent}</Markdown>;
};
