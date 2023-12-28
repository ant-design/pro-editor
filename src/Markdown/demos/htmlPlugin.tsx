import { Markdown } from '@ant-design/pro-editor';
import rehypeRaw from 'rehype-raw';
import { htmlContent } from './data';

export default () => {
  return <Markdown rehypePlugins={[rehypeRaw]}>{htmlContent}</Markdown>;
};
