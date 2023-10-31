/**
 * title: wrapper used
 */

import { Highlight } from '@ant-design/pro-editor';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Highlight
      language="java"
      theme="dark"
      containerWrapper
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
    <Highlight
      language="java"
      theme="light"
      containerWrapper
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
  </Space>
);
