"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[5514],{8775:function(r,t,n){n.r(t),n.d(t,{demos:function(){return x}});var l=n(90228),a=n.n(l),m=n(87999),c=n.n(m),d=n(75271),v=n(17062),I=n(10549),_=n(94283),x={"actionicon-demo-basic":{component:d.memo(d.lazy(function(){return n.e(9468).then(n.bind(n,31780))})),asset:{type:"BLOCK",id:"actionicon-demo-basic",refAtomIds:["ActionIcon"],dependencies:{"index.tsx":{type:"FILE",value:n(56890).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"\u57FA\u7840\u793A\u4F8B",description:"icon \u8BBE\u7F6E\u52A8\u4F5C\u56FE\u6807, title \u8BBE\u7F6E\u52A8\u4F5C\u8BF4\u660E"},context:{"@ant-design/icons":v,"@ant-design/pro-editor":I},renderOpts:{compile:function(){var i=c()(a()().mark(function s(){var o,p=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6495).then(n.bind(n,86495));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,p));case 3:case"end":return e.stop()}},s)}));function u(){return i.apply(this,arguments)}return u}()}},"actionicon-demo-preset":{component:d.memo(d.lazy(function(){return n.e(9468).then(n.bind(n,69637))})),asset:{type:"BLOCK",id:"actionicon-demo-preset",refAtomIds:["ActionIcon"],dependencies:{"index.tsx":{type:"FILE",value:n(32238).Z},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"},antd:{type:"NPM",value:"5.12.8"}},entry:"index.tsx",title:"\u9884\u8BBE\u52A8\u4F5C",description:"\u6211\u4EEC\u9884\u8BBE\u4E86\u4E00\u4E9B\u7F16\u8F91\u5668\u5E38\u7528\u52A8\u4F5C\u56FE\u6807\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u65B0\u589E"},context:{"@ant-design/pro-editor":I,antd:_},renderOpts:{compile:function(){var i=c()(a()().mark(function s(){var o,p=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6495).then(n.bind(n,86495));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,p));case 3:case"end":return e.stop()}},s)}));function u(){return i.apply(this,arguments)}return u}()}}}},23982:function(r,t,n){n.r(t),n.d(t,{texts:function(){return l}});const l=[{value:"\u5BF9 antd Button \u7684\u5C01\u88C5\uFF0C\u8BA9\u56FE\u6807\u5177\u5907\u6309\u94AE\u52A8\u4F5C\u7684\u54CD\u5E94\u5F0F\u6548\u679C\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"cursor",paraId:1,tocIndex:4},{value:"\u9F20\u6807\u7C7B\u578B",paraId:1,tocIndex:4},{value:"CSSProperties['cursor']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"title",paraId:1,tocIndex:4},{value:"\u52A8\u4F5C\u63D0\u793A",paraId:1,tocIndex:4},{value:"TooltipProps['title']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"placement",paraId:1,tocIndex:4},{value:"\u63D0\u793A\u4F4D\u7F6E",paraId:1,tocIndex:4},{value:"TooltipProps['placement']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"icon",paraId:1,tocIndex:4},{value:"\u56FE\u6807",paraId:1,tocIndex:4},{value:"ButtonProps['icon']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"onClick",paraId:1,tocIndex:4},{value:"\u70B9\u51FB\u56DE\u8C03",paraId:1,tocIndex:4},{value:"ButtonProps['onClick']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"size",paraId:1,tocIndex:4},{value:"\u56FE\u6807\u5C3A\u5BF8",paraId:1,tocIndex:4},{value:"'default' | 'large' |'small' | number",paraId:1,tocIndex:4},{value:"small",paraId:1,tocIndex:4},{value:"\u5176\u4ED6 API \u53C2\u8003 antd Button Props .",paraId:2,tocIndex:4}]},56890:function(r,t){t.Z=`import { SmileOutlined } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';

export default () => (
  <ActionIcon
    title={'\u529F\u80FD\u6309\u94AE\u7684\u8BF4\u660E'}
    icon={<SmileOutlined />}
    onClick={() => {
      alert('\u89E6\u53D1\u52A8\u4F5C');
    }}
  />
);
`},32238:function(r,t){t.Z=`import { CollapseAction, DeleteAction, EditAction, HandleAction } from '@ant-design/pro-editor';
import { Space } from 'antd';

export default () => (
  <Space>
    <DeleteAction title="\u5220\u9664\u6309\u94AE" />
    <EditAction title="\u7F16\u8F91\u6309\u94AE" />
    <HandleAction title="\u62D6\u52A8\u6309\u94AE" />
    <CollapseAction title="\u6536\u8D77\u6309\u94AE" />
  </Space>
);
`}}]);
