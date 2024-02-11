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
