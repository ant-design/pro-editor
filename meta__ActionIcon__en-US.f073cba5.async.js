"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[3770],{30055:function(r,t,e){e.r(t),e.d(t,{demos:function(){return f}});var i=e(90228),a=e.n(i),I=e(87999),u=e.n(I),d=e(75271),v=e(17062),m=e(10549),_=e(94283),f={"actionicon-demo-basic":{component:d.memo(d.lazy(function(){return e.e(9468).then(e.bind(e,31780))})),asset:{type:"BLOCK",id:"actionicon-demo-basic",refAtomIds:["ActionIcon"],dependencies:{"index.tsx":{type:"FILE",value:e(56890).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"Basic Example",description:"icon sets the action icon, title sets the action description"},context:{"@ant-design/icons":v,"@ant-design/pro-editor":m},renderOpts:{compile:function(){var l=u()(a()().mark(function c(){var o,p=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6495).then(e.bind(e,86495));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,p));case 3:case"end":return n.stop()}},c)}));function s(){return l.apply(this,arguments)}return s}()}},"actionicon-demo-preset":{component:d.memo(d.lazy(function(){return e.e(9468).then(e.bind(e,69637))})),asset:{type:"BLOCK",id:"actionicon-demo-preset",refAtomIds:["ActionIcon"],dependencies:{"index.tsx":{type:"FILE",value:e(32238).Z},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"},antd:{type:"NPM",value:"5.12.8"}},entry:"index.tsx",title:"Predefined Actions",description:"We have predefined some commonly used editor action icons, which can be added as needed"},context:{"@ant-design/pro-editor":m,antd:_},renderOpts:{compile:function(){var l=u()(a()().mark(function c(){var o,p=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6495).then(e.bind(e,86495));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,p));case 3:case"end":return n.stop()}},c)}));function s(){return l.apply(this,arguments)}return s}()}}}},4196:function(r,t,e){e.r(t),e.d(t,{texts:function(){return i}});const i=[{value:"A wrapper for antd Button that makes the icon responsive to button actions.",paraId:0,tocIndex:0},{value:"Parameter",paraId:1,tocIndex:4},{value:"Description",paraId:1,tocIndex:4},{value:"Type",paraId:1,tocIndex:4},{value:"Default",paraId:1,tocIndex:4},{value:"cursor",paraId:1,tocIndex:4},{value:"Mouse type",paraId:1,tocIndex:4},{value:"CSSProperties['cursor']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"title",paraId:1,tocIndex:4},{value:"Action hint",paraId:1,tocIndex:4},{value:"TooltipProps['title']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"placement",paraId:1,tocIndex:4},{value:"Hint position",paraId:1,tocIndex:4},{value:"TooltipProps['placement']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"icon",paraId:1,tocIndex:4},{value:"Icon",paraId:1,tocIndex:4},{value:"ButtonProps['icon']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"onClick",paraId:1,tocIndex:4},{value:"Click callback",paraId:1,tocIndex:4},{value:"ButtonProps['onClick']",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"size",paraId:1,tocIndex:4},{value:"Icon size",paraId:1,tocIndex:4},{value:"'default' | 'large' |'small' | number",paraId:1,tocIndex:4},{value:"small",paraId:1,tocIndex:4},{value:"For other API references, please refer to antd Button Props.",paraId:2,tocIndex:4}]},56890:function(r,t){t.Z=`import { SmileOutlined } from '@ant-design/icons';
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
