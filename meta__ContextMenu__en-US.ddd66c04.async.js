"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[2853],{91317:function(d,n,e){e.r(n),e.d(n,{demos:function(){return p}});var t=e(90228),o=e.n(t),l=e(87999),i=e.n(l),r=e(75271),I=e(17062),c=e(10549),p={"contextmenu-demo-demos":{component:r.memo(r.lazy(function(){return e.e(2965).then(e.bind(e,64040))})),asset:{type:"BLOCK",id:"contextmenu-demo-demos",refAtomIds:["ContextMenu"],dependencies:{"index.tsx":{type:"FILE",value:e(29311).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"Right click menu",description:"Right click the screen"},context:{"@ant-design/icons":I,"@ant-design/pro-editor":c},renderOpts:{compile:function(){var m=i()(o()().mark(function v(){var u,x=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(6495).then(e.bind(e,86495));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,x));case 3:case"end":return a.stop()}},v)}));function s(){return m.apply(this,arguments)}return s}()}}}},20460:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Display a context menu that can be triggered by right-clicking or long-pressing, and can be operated with the keyboard.",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:3},{value:"Type",paraId:1,tocIndex:3},{value:"Description",paraId:1,tocIndex:3},{value:"container",paraId:1,tocIndex:3},{value:"HTMLElement",paraId:1,tocIndex:3},{value:"The container element for the context menu",paraId:1,tocIndex:3},{value:"items",paraId:1,tocIndex:3},{value:"MenuItemType[]",paraId:1,tocIndex:3},{value:"The menu items for the context menu",paraId:1,tocIndex:3},{value:"label",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"The label for the context menu",paraId:1,tocIndex:3},{value:"The type of menu item, which can be a general menu item, sub-menu, or menu divider.",paraId:2,tocIndex:4},{value:`export type MenuItemType = GeneralItemType | SubMenuType | MenuDividerType;
`,paraId:3,tocIndex:4},{value:"Type of general menu item.",paraId:4,tocIndex:5},{value:"Property",paraId:5,tocIndex:5},{value:"Type",paraId:5,tocIndex:5},{value:"Description",paraId:5,tocIndex:5},{value:"key",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"The unique identifier of the menu item",paraId:5,tocIndex:5},{value:"label",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"The text label of the menu item",paraId:5,tocIndex:5},{value:"icon",paraId:5,tocIndex:5},{value:"ReactNode",paraId:5,tocIndex:5},{value:"The icon of the menu item",paraId:5,tocIndex:5},{value:"onClick",paraId:5,tocIndex:5},{value:"() => void",paraId:5,tocIndex:5},{value:"The callback function for the click event of the menu item",paraId:5,tocIndex:5},{value:"danger",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"Whether it is a dangerous operation",paraId:5,tocIndex:5},{value:"disabled",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"Whether it is disabled",paraId:5,tocIndex:5},{value:"shortcut",paraId:5,tocIndex:5},{value:"('meta' | 'control' | 'shift' | 'alt' | string)[]",paraId:5,tocIndex:5},{value:"Keyboard shortcuts",paraId:5,tocIndex:5},{value:"Type of sub-menu.",paraId:6,tocIndex:6},{value:"Property",paraId:7,tocIndex:6},{value:"Type",paraId:7,tocIndex:6},{value:"Description",paraId:7,tocIndex:6},{value:"key",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"The unique identifier of the menu item",paraId:7,tocIndex:6},{value:"label",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"The text label of the menu item",paraId:7,tocIndex:6},{value:"icon",paraId:7,tocIndex:6},{value:"ReactNode",paraId:7,tocIndex:6},{value:"The icon of the menu item",paraId:7,tocIndex:6},{value:"onClick",paraId:7,tocIndex:6},{value:"() => void",paraId:7,tocIndex:6},{value:"The callback function for the click event of the menu item",paraId:7,tocIndex:6},{value:"children",paraId:7,tocIndex:6},{value:"MenuItemType[]",paraId:7,tocIndex:6},{value:"The sub-menu items of the sub-menu",paraId:7,tocIndex:6},{value:"Type of menu divider.",paraId:8,tocIndex:7},{value:"Property",paraId:9,tocIndex:7},{value:"Type",paraId:9,tocIndex:7},{value:"Description",paraId:9,tocIndex:7},{value:"dashed",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"Whether the style of the menu divider is dashed",paraId:9,tocIndex:7},{value:"type",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"The type of the menu divider, fixed as 'divider'",paraId:9,tocIndex:7}]},29311:function(d,n){n.Z=`import { CopyOutlined, ExpandOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { ContextMenu } from '@ant-design/pro-editor';

export default () => {
  return (
    <ContextMenu
      items={[
        {
          key: 'copy',
          label: '\u590D\u5236',
          icon: <CopyOutlined />,
          shortcut: ['meta', 'C'],
        },
        {
          key: 'selectAll',
          label: '\u9009\u62E9\u5168\u90E8',
          icon: <ExpandOutlined width={'1em'} height={'1em'} />,
          shortcut: ['meta', 'A'],
        },
        { label: '\u653E\u5927', key: 'zoomIn', icon: <ZoomInOutlined /> },
        { label: '\u7F29\u5C0F', key: 'zoomOut', icon: <ZoomOutOutlined /> },
        {
          label: '\u6700\u8FD1\u6253\u5F00\u7684\u6587\u4EF6...',
          key: 'recent',
          children: [
            { key: '1', label: '\u6587\u4EF61' },
            { key: '2', label: '\u6587\u4EF62' },
          ],
        },
      ]}
    />
  );
};
`}}]);
