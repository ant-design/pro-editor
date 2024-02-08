/**
 * title: 展示代码块行号
 * description: 你可以通过 `lineNumber` 指定是否需要展示代码块行号
 */

import { Highlight } from '@ant-design/pro-editor';

export default () => (
  <Highlight
    lineNumber={true}
    onCopy={(children) => {
      console.log('复制代码', children);
    }}
    language="java"
  >
    {`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`}
  </Highlight>
);
