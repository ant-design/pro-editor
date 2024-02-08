/**
 * title: 关闭 shiki
 * description: 默认开启 `shiki`渲染，在弱网或无网络情况下可以设置 `shiki=false` 关闭
 */

import { Highlight } from '@ant-design/pro-editor';

export default () => (
  <Highlight language="java" shiki={false}>
    {`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`}
  </Highlight>
);
