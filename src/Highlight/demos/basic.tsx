/**
 * title: 指定语言和主题
 * description: 你可以通过 `language` 指定语言高亮，通过 `theme` 指定高亮主题
 */

import { Highlight } from '@ant-design/pro-editor';

export default () => (
  <Highlight
    language="java"
    theme="dark"
    onCopy={(children) => {
      console.log('复制代码', children);
    }}
  >
    {`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`}
  </Highlight>
);
