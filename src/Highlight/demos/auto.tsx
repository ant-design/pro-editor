/**
 * title: 自动根据当前主题判断
 * description: 默认开启 `auto`，会根据当前主题自动判断
 */

import { Highlight } from '@ant-design/pro-editor';

export default () => (
  <Highlight language="java">
    {`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`}
  </Highlight>
);
