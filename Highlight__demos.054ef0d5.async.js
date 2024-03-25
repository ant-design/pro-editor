"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[4941],{66924:function(P,m,n){n.r(m);var v=n(54011),p=n(11527);m.default=function(){return(0,p.jsx)(v.y,{language:"java",children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},42442:function(P,m,n){n.r(m);var v=n(54011),p=n(11527);m.default=function(){return(0,p.jsx)(v.y,{language:"java",theme:"dark",onCopy:function(f){console.log("\u590D\u5236\u4EE3\u7801",f)},children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},7318:function(P,m,n){n.r(m);var v=n(54011),p=n(11527);m.default=function(){return(0,p.jsx)(v.y,{lineNumber:!0,onCopy:function(f){console.log("\u590D\u5236\u4EE3\u7801",f)},language:"java",children:`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }`})}},52985:function(P,m,n){n.r(m),n.d(m,{default:function(){return E}});var v=n(48305),p=n.n(v),D=n(54011),f=n(46545),Y=n(41812),S=n(50959),x=[{language:"bash",text:"Bash",code:`#!/bin/bash

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
    </html>`}],N=x,u=n(11527),F="typescript",R="light",L="false",k="block",b=f.Z.Option,E=function(){var O=(0,S.useState)(R),A=p()(O,2),M=A[0],H=A[1],G=(0,S.useState)(F),d=p()(G,2),K=d[0],J=d[1],X=(0,S.useState)(k),U=p()(X,2),Q=U[0],z=U[1],$=(0,S.useState)(L),w=p()($,2),W=w[0],q=w[1],_=N.find(function(y){return y.language===K}).code||"";return(0,u.jsxs)("div",{children:[(0,u.jsxs)(Y.Z,{children:["\u8BED\u8A00\u9009\u62E9:",(0,u.jsx)(f.Z,{defaultValue:F,style:{width:120},onChange:function(T){return J(T)},children:N.map(function(y){return(0,u.jsx)(b,{value:y.language,children:y.text},y.language)})}),"\u4E3B\u9898\u9009\u62E9:",(0,u.jsxs)(f.Z,{defaultValue:R,style:{width:120},onChange:function(T){return H(T)},children:[(0,u.jsx)(b,{value:"light",children:"\u4EAE\u8272\u4E3B\u9898"}),(0,u.jsx)(b,{value:"dark",children:"\u6697\u8272\u4E3B\u9898"})]}),"\u5C55\u793A\u884C\u53F7:",(0,u.jsxs)(f.Z,{defaultValue:L,style:{width:120},onChange:function(T){return q(T)},children:[(0,u.jsx)(b,{value:"false",children:"\u4E0D\u5C55\u793A"}),(0,u.jsx)(b,{value:"true",children:"\u5C55\u793A"})]}),"\u5C55\u793A\u7C7B\u578B:",(0,u.jsxs)(f.Z,{defaultValue:k,style:{width:120},onChange:function(T){return z(T)},children:[(0,u.jsx)(b,{value:"block",children:"block"}),(0,u.jsx)(b,{value:"pure",children:"pure"})]})]}),(0,u.jsx)("div",{style:{height:400,width:"100%",overflowY:"scroll",marginBlockStart:"16px"},children:(0,u.jsx)(D.y,{language:K,theme:M,lineNumber:W!==L,type:Q,children:_})})]})}},54011:function(P,m,n){n.d(m,{y:function(){return gn}});var v=n(26068),p=n.n(v),D=n(45130),f=n(66009),Y=n(82187),S=n.n(Y),x=n(50959),N=n(48305),u=n.n(N),F=n(85659),R=n(52639),L=n(90943),k=n.n(L),b=n(53649),E=n.n(b),O=n(60414),A=n(56468),M,H,G=(0,O.kc)(function(t,r){var i=t.css,c=t.token,l=t.prefixCls,a=t.cx,o=r.theme,e="".concat(l,"-").concat(c.editorPrefix,"-highlight"),s=(0,A.p)(o==="dark"),g=s.colorFillTertiary,h=s.colorText;return{copy:a("".concat(e,"-copy"),i(M||(M=E()([`
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
      `])),g)),copyIcon:a("".concat(e,"-copy-icon"),i(H||(H=E()([`
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
      `])),h))}}),d=n(11527),K=function(r){var i=r.content,c=r.onCopy,l=r.theme,a=l===void 0?"light":l,o=r.style,e=(0,x.useState)(),s=u()(e,2),g=s[0],h=s[1],j=G({theme:a}),C=j.styles;(0,x.useEffect)(function(){return function(){window.clearTimeout(g)}});var nn=(0,x.useState)(!1),I=u()(nn,2),Z=I[0],B=I[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(k(),{text:i&&i.length?i:"",onCopy:function(){B(!0);var en=window.setTimeout(function(){B(!1)},2e3);h(en),c&&c(i)},children:(0,d.jsxs)("button",{type:"button",disabled:Z,className:C.copy,style:o,children:[(0,d.jsx)(F.Z,{className:S()(C.copyIcon,{scoll:Z})}),(0,d.jsx)(R.Z,{className:C.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},J=K,X=n(96433),U=n(59084),Q=n(22305),z=n.n(Q),$,w,W,q=(0,O.kc)(function(t,r){var i=t.cx,c=t.css,l=t.token,a=t.prefixCls,o=r.theme,e="".concat(a,"-").concat(l.editorPrefix,"-highlight"),s=(0,A.p)(o==="dark"),g=s.colorFillTertiary,h=s.colorText,j=s.colorTextSecondary,C=z()(g).mix(z()(o==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:i("".concat(e,"-tag-small"),c($||($=E()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:i(c(w||(w=E()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),C,l.fontFamilyCode,j)),tag:i("".concat(e,"-tag"),c(W||(W=E()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),h,l.borderRadius,h,l.colorFill))}}),_=function(r){var i=r||{},c=i.children,l=i.size,a=l===void 0?"default":l,o=i.theme,e=o===void 0?"light":o,s=q({theme:e}),g=s.styles,h=s.cx;return(0,d.jsx)(U.Z,{bordered:!1,className:h(g.tag,g.lang,a==="small"&&g.small),children:c})},y=_,T=n(31759),tn=n.n(T),cn=function(r,i){var c=(0,x.useRef)();function l(a,o){return Object.keys(a).forEach(function(e){tn()(a[e])==="object"&&a[e].handle?o.addEventListener(e,a[e].handle,a[e].options):o.addEventListener(e,a[e])}),function(){Object.keys(a).forEach(function(e){tn()(a[e])==="object"&&a[e].handle?o.removeEventListener(e,a[e].handle,a[e].options):o.removeEventListener(e,a[e])})}}return(0,x.useEffect)(function(){if(r.current)return l({keydown:function(o){var e=window.getSelection();if((o.ctrlKey||o.metaKey)&&o.code==="KeyA"&&c.current&&r.current){var s=document.createRange();s.selectNodeContents(r.current),e.removeAllRanges(),e.addRange(s),o.preventDefault()}(o.ctrlKey||o.metaKey)&&o.code==="KeyC"&&c.current&&r.current&&i&&e&&i(e.toString())},focus:function(){c.current=!0},blur:function(){c.current=!1}},r.current)},[r.current,r]),null},an,on,un=(0,O.kc)(function(t,r){var i=t.css,c=t.cx,l=t.token,a=t.prefixCls,o=r.theme,e=r.type,s="".concat(a,"-").concat(l==null?void 0:l.editorPrefix,"-highlight"),g=(0,A.p)(o==="dark"),h=g.colorFillTertiary,j=i(an||(an=E()([`
      background-color: `,`;
    `])),e==="block"?h:"transparent");return{container:c("".concat(s,"-container"),j,i(on||(on=E()([`
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
        `])),l.borderRadius,l.motionEaseOut,s,s,e==="pure"?0:"16px 24px"))}}),rn=n(80170),dn=(0,x.memo)(function(t){var r=t.children,i=t.style,c=t.className,l=t.lineNumber,a=l===void 0?!1:l,o=t.copyable,e=o===void 0?!0:o,s=t.theme,g=s===void 0?rn.ly:s,h=t.language,j=h===void 0?"tsx":h,C=t.showLanguage,nn=C===void 0?!0:C,I=t.type,Z=I===void 0?"block":I,B=t.onCopy,ln=(0,f.r)(),en=ln.appearance,mn=en==="dark"?"dark":"light",V=g===rn.ly?mn:g,hn=un({theme:V,type:Z}),pn=hn.styles,sn=(0,x.createRef)();return cn(sn,B),(0,d.jsxs)("div",{ref:sn,tabIndex:-1,style:i,className:S()(pn.container,c),children:[e&&(0,d.jsx)(J,{onCopy:B,theme:V,content:r}),nn&&j&&(0,d.jsx)(y,{theme:V,children:j.toLowerCase()}),(0,d.jsx)(X.Z,{lineNumber:a,language:j,theme:V,children:r})]})}),gn=function(r){return(0,d.jsx)(D.iV,{children:(0,d.jsx)(dn,p()({},r))})}}}]);
