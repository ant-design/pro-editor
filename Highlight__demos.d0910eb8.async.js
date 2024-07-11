"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[4941],{62565:function(M,g,n){n.d(g,{Z:function(){return P}});var l=n(13238),p=n(75271),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},b=C,D=n(18769),y=function(k,R){return p.createElement(D.Z,(0,l.Z)({},k,{ref:R,icon:b}))},v=p.forwardRef(y),P=v},80739:function(M,g,n){n.r(g);var l=n(40375),p=n(52676);g.default=function(){return(0,p.jsx)(l.y,{language:"java",children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},61041:function(M,g,n){n.r(g);var l=n(40375),p=n(52676);g.default=function(){return(0,p.jsx)(l.y,{language:"java",theme:"dark",onCopy:function(b){console.log("\u590D\u5236\u4EE3\u7801",b)},children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},6758:function(M,g,n){n.r(g);var l=n(40375),p=n(52676);g.default=function(){return(0,p.jsx)(l.y,{lineNumber:!0,onCopy:function(b){console.log("\u590D\u5236\u4EE3\u7801",b)},language:"java",children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},31612:function(M,g,n){n.r(g),n.d(g,{default:function(){return w}});var l=n(48305),p=n.n(l),C=n(40375),b=n(71843),D=n(68084),y=n(75271),v=[{language:"bash",text:"Bash",code:`#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \\\\/" > text.txt

`},{language:"css",text:"Css",code:`@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`},{language:"java",text:"Java",code:`/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}`},{language:"javascript",text:"Javascript",code:`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`},{language:"json",text:"Json",code:`[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]`},{language:"jsx",text:"Jsx",code:`import React from 'react';
import { Button, Tag, Space } from 'antd';
import { ProList } from '@ant-design/pro-components';

const dataSource = [
  {
    name: '\u8BED\u96C0\u7684\u5929\u7A7A',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: '\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'ProEditor',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">Ant Design</Tag>
              <Tag color="#5BD8A6">ProEditor</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"markdown",text:"Markdown",code:`# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`},{language:"python",text:"Python",code:`@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`},{language:"sql",text:"Sql",code:`CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`},{language:"tsx",text:"Tsx",code:`import React from 'react';
import { Button, Tag, Space } from 'antd';
import { ProList } from '@ant-design/pro-components';

const dataSource = [
  {
    name: '\u8BED\u96C0\u7684\u5929\u7A7A',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: '\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'ProEditor',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList<any>
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record: any) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">Ant Design</Tag>
              <Tag color="#5BD8A6">ProEditor</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"typescript",text:"Typescript",code:`class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`},{language:"xml",text:"Xml",code:`<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
<\/script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`},{language:"yaml",text:"Yaml",code:`---
# comment
string_1: "Bar"
string_2: 'bar'
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
  "

ansible_variables: "foo {{variable}}"

array_nested:
- a
- b: 1
  c: 2
- b
- comment`},{language:"html",text:"Html",code:`<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Html Dom Render</title>
    </head>
    <body>
    <div>Custom Html Dom Render</div>
    <ul>
        <li>Ant Desgin</li>
        <li>Ant Desgin Pro</li>
        <li>Ant Desgin Pro Components</li>
    </ul>

    </body>
    </html>`}],P=v,h=n(52676),k="typescript",R="light",H="false",J="block",I=b.Z.Option,w=function(){var K=(0,y.useState)(R),x=p()(K,2),L=x[0],j=x[1],d=(0,y.useState)(k),s=p()(d,2),m=s[0],U=s[1],$=(0,y.useState)(J),Z=p()($,2),nn=Z[0],X=Z[1],Q=(0,y.useState)(H),z=p()(Q,2),q=z[0],en=z[1],tn=P.find(function(A){return A.language===m}).code||"";return(0,h.jsxs)("div",{children:[(0,h.jsxs)(D.Z,{children:["\u8BED\u8A00\u9009\u62E9:",(0,h.jsx)(b.Z,{defaultValue:k,style:{width:120},onChange:function(N){return U(N)},children:P.map(function(A){return(0,h.jsx)(I,{value:A.language,children:A.text},A.language)})}),"\u4E3B\u9898\u9009\u62E9:",(0,h.jsxs)(b.Z,{defaultValue:R,style:{width:120},onChange:function(N){return j(N)},children:[(0,h.jsx)(I,{value:"light",children:"\u4EAE\u8272\u4E3B\u9898"}),(0,h.jsx)(I,{value:"dark",children:"\u6697\u8272\u4E3B\u9898"})]}),"\u5C55\u793A\u884C\u53F7:",(0,h.jsxs)(b.Z,{defaultValue:H,style:{width:120},onChange:function(N){return en(N)},children:[(0,h.jsx)(I,{value:"false",children:"\u4E0D\u5C55\u793A"}),(0,h.jsx)(I,{value:"true",children:"\u5C55\u793A"})]}),"\u5C55\u793A\u7C7B\u578B:",(0,h.jsxs)(b.Z,{defaultValue:J,style:{width:120},onChange:function(N){return X(N)},children:[(0,h.jsx)(I,{value:"block",children:"block"}),(0,h.jsx)(I,{value:"pure",children:"pure"})]})]}),(0,h.jsx)("div",{style:{height:400,width:"100%",overflowY:"scroll",marginBlockStart:"16px"},children:(0,h.jsx)(C.y,{language:m,theme:L,lineNumber:q!==H,type:nn,children:tn})})]})}},40375:function(M,g,n){n.d(g,{y:function(){return cn}});var l=n(26068),p=n.n(l),C=n(38720),b=n(42249),D=n(82187),y=n.n(D),v=n(75271),P=n(48305),h=n.n(P),k=n(91626),R=n(16466),H=n(58226),J=n.n(H),I=n(53649),w=n.n(I),K=n(53131),x=n(26270),L,j,d=(0,K.kc)(function(t,r){var a=t.css,f=t.token,u=t.prefixCls,o=t.cx,i=r.theme,e="".concat(u,"-").concat(f.editorPrefix,"-highlight"),c=(0,x.p)(i==="dark"),E=c.colorFillTertiary,S=c.colorText;return{copy:o("".concat(e,"-copy"),a(L||(L=w()([`
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        width: 16px;
        height: 16px;
        padding: 0;
        overflow: hidden;
        border: 0;
        outline: none;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;
        background-color: `,`;

        &:hover {
          opacity: 0.8;
        }
      `])),E)),copyIcon:o("".concat(e,"-copy-icon"),a(j||(j=w()([`
        width: 16px;
        color: `,`;
        height: 16px;
        font-size: 16px;

        @keyframes copy-button-trans {
          0% {
            margin-top: 0;
            opacity: 0.8;
          }
          10% {
            margin-top: -16px;
            opacity: 0.8;
          }
          90% {
            margin-top: -16px;
            opacity: 0.8;
          }
          100% {
            margin-top: 0;
            opacity: 0.8;
          }
        }

        &.scoll {
          animation: copy-button-trans 2s;
          animation-play-state: running;
        }
      `])),S))}}),s=n(52676),m=function(r){var a=r.content,f=r.onCopy,u=r.theme,o=u===void 0?"light":u,i=r.style,e=(0,v.useState)(),c=h()(e,2),E=c[0],S=c[1],T=d({theme:o}),O=T.styles;(0,v.useEffect)(function(){return function(){window.clearTimeout(E)}});var G=(0,v.useState)(!1),B=h()(G,2),F=B[0],Y=B[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(J(),{text:a&&a.length?a:"",onCopy:function(){Y(!0);var un=window.setTimeout(function(){Y(!1)},2e3);S(un),f&&f(a)},children:(0,s.jsxs)("button",{type:"button",disabled:F,className:O.copy,style:i,children:[(0,s.jsx)(k.Z,{className:y()(O.copyIcon,{scoll:F})}),(0,s.jsx)(R.Z,{className:O.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},U=m,$=n(48149),Z=n(29055),nn=n(22305),X=n.n(nn),Q,z,q,en=(0,K.kc)(function(t,r){var a=t.cx,f=t.css,u=t.token,o=t.prefixCls,i=r.theme,e="".concat(o,"-").concat(u.editorPrefix,"-highlight"),c=(0,x.p)(i==="dark"),E=c.colorFillTertiary,S=c.colorText,T=c.colorTextSecondary,O=X()(E).mix(X()(i==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:a("".concat(e,"-tag-small"),f(Q||(Q=w()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:a(f(z||(z=w()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),O,u.fontFamilyCode,T)),tag:a("".concat(e,"-tag"),f(q||(q=w()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),S,u.borderRadius,S,u.colorFill))}}),tn=function(r){var a=r||{},f=a.children,u=a.size,o=u===void 0?"default":u,i=a.theme,e=i===void 0?"light":i,c=en({theme:e}),E=c.styles,S=c.cx;return(0,s.jsx)(Z.Z,{bordered:!1,className:S(E.tag,E.lang,o==="small"&&E.small),children:f})},A=tn,N=n(31759),_=n.n(N),ln=function(r,a){var f=(0,v.useRef)();function u(o,i){return Object.keys(o).forEach(function(e){_()(o[e])==="object"&&o[e].handle?i.addEventListener(e,o[e].handle,o[e].options):i.addEventListener(e,o[e])}),function(){Object.keys(o).forEach(function(e){_()(o[e])==="object"&&o[e].handle?i.removeEventListener(e,o[e].handle,o[e].options):i.removeEventListener(e,o[e])})}}return(0,v.useEffect)(function(){if(r.current)return u({keydown:function(i){var e=window.getSelection();if((i.ctrlKey||i.metaKey)&&i.code==="KeyA"&&f.current&&r.current){var c=document.createRange();c.selectNodeContents(r.current),e.removeAllRanges(),e.addRange(c),i.preventDefault()}(i.ctrlKey||i.metaKey)&&i.code==="KeyC"&&f.current&&r.current&&a&&e&&a(e.toString())},focus:function(){f.current=!0},blur:function(){f.current=!1}},r.current)},[r.current,r]),null},V,W,on=(0,K.kc)(function(t,r){var a=t.css,f=t.cx,u=t.token,o=t.prefixCls,i=r.theme,e=r.type,c="".concat(o,"-").concat(u==null?void 0:u.editorPrefix,"-highlight"),E=(0,x.p)(i==="dark"),S=E.colorFillTertiary,T=a(V||(V=w()([`
      background-color: `,`;
    `])),e==="block"?S:"transparent");return{container:f("".concat(c,"-container"),T,a(W||(W=w()([`
          position: relative;
          margin: 0;
          border-radius: `,`px;
          transition: background-color 100ms `,`;

          :not(:hover) {
            .`,`-copy {
              visibility: hidden;
              opacity: 0;
            }

            .`,`-tag {
              visibility: hidden;
              opacity: 0;
            }
          }

          pre {
            margin: 0 !important;
            padding: `,` !important;
            background: none !important;
          }

          code {
            background: transparent !important;
          }
        `])),u.borderRadius,u.motionEaseOut,c,c,e==="pure"?0:"16px 24px"))}}),an=n(37726),sn=(0,v.memo)(function(t){var r=t.children,a=t.style,f=t.className,u=t.lineNumber,o=u===void 0?!1:u,i=t.copyable,e=i===void 0?!0:i,c=t.theme,E=c===void 0?an.ly:c,S=t.language,T=S===void 0?"tsx":S,O=t.showLanguage,G=O===void 0?!0:O,B=t.type,F=B===void 0?"block":B,Y=t.onCopy,dn=(0,b.r)(),un=dn.appearance,gn=un==="dark"?"dark":"light",rn=E===an.ly?gn:E,pn=on({theme:rn,type:F}),hn=pn.styles,mn=(0,v.createRef)();return ln(mn,Y),(0,s.jsxs)("div",{ref:mn,tabIndex:-1,style:a,className:y()(hn.container,f),children:[e&&(0,s.jsx)(U,{onCopy:Y,theme:rn,content:r}),G&&T&&(0,s.jsx)(A,{theme:rn,children:T.toLowerCase()}),(0,s.jsx)($.Z,{lineNumber:o,language:T,theme:rn,children:r})]})}),cn=function(r){return(0,s.jsx)(C.iV,{children:(0,s.jsx)(sn,p()({},r))})}},97085:function(M,g,n){n.d(g,{T:function(){return p},n:function(){return l}});function l(C){return["small","middle","large"].includes(C)}function p(C){return C?typeof C=="number"&&!Number.isNaN(C):!1}},30002:function(M,g,n){n.d(g,{F:function(){return D},Z:function(){return b}});var l=n(82187),p=n.n(l);const C=null;function b(y,v,P){return p()({[`${y}-status-success`]:v==="success",[`${y}-status-warning`]:v==="warning",[`${y}-status-error`]:v==="error",[`${y}-status-validating`]:v==="validating",[`${y}-has-feedback`]:P})}const D=(y,v)=>v||y},68084:function(M,g,n){n.d(g,{Z:function(){return K}});var l=n(75271),p=n(82187),C=n.n(p),b=n(22615),D=n(97085),y=n(41044),v=n(63424);const P=l.createContext({latestIndex:0}),h=P.Provider;var R=x=>{let{className:L,index:j,children:d,split:s,style:m}=x;const{latestIndex:U}=l.useContext(P);return d==null?null:l.createElement(l.Fragment,null,l.createElement("div",{className:L,style:m},d),j<U&&s&&l.createElement("span",{className:`${L}-split`},s))},H=n(1285),J=function(x,L){var j={};for(var d in x)Object.prototype.hasOwnProperty.call(x,d)&&L.indexOf(d)<0&&(j[d]=x[d]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,d=Object.getOwnPropertySymbols(x);s<d.length;s++)L.indexOf(d[s])<0&&Object.prototype.propertyIsEnumerable.call(x,d[s])&&(j[d[s]]=x[d[s]]);return j};const w=l.forwardRef((x,L)=>{var j,d;const{getPrefixCls:s,space:m,direction:U}=l.useContext(y.E_),{size:$=(m==null?void 0:m.size)||"small",align:Z,className:nn,rootClassName:X,children:Q,direction:z="horizontal",prefixCls:q,split:en,style:tn,wrap:A=!1,classNames:N,styles:_}=x,ln=J(x,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[V,W]=Array.isArray($)?$:[$,$],on=(0,D.n)(W),an=(0,D.n)(V),sn=(0,D.T)(W),cn=(0,D.T)(V),t=(0,b.Z)(Q,{keepEmpty:!0}),r=Z===void 0&&z==="horizontal"?"center":Z,a=s("space",q),[f,u,o]=(0,H.Z)(a),i=C()(a,m==null?void 0:m.className,u,`${a}-${z}`,{[`${a}-rtl`]:U==="rtl",[`${a}-align-${r}`]:r,[`${a}-gap-row-${W}`]:on,[`${a}-gap-col-${V}`]:an},nn,X,o),e=C()(`${a}-item`,(j=N==null?void 0:N.item)!==null&&j!==void 0?j:(d=m==null?void 0:m.classNames)===null||d===void 0?void 0:d.item);let c=0;const E=t.map((O,G)=>{var B,F;O!=null&&(c=G);const Y=O&&O.key||`${e}-${G}`;return l.createElement(R,{className:e,key:Y,index:G,split:en,style:(B=_==null?void 0:_.item)!==null&&B!==void 0?B:(F=m==null?void 0:m.styles)===null||F===void 0?void 0:F.item},O)}),S=l.useMemo(()=>({latestIndex:c}),[c]);if(t.length===0)return null;const T={};return A&&(T.flexWrap="wrap"),!an&&cn&&(T.columnGap=V),!on&&sn&&(T.rowGap=W),f(l.createElement("div",Object.assign({ref:L,className:i,style:Object.assign(Object.assign(Object.assign({},T),m==null?void 0:m.style),tn)},ln),l.createElement(h,{value:S},E)))});w.Compact=v.ZP;var K=w}}]);
