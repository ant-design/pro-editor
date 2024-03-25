"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[7439],{77443:function(ln,f,n){n.r(f);var S=n(20821),h=n(1305),F=n(11527);f.default=function(){return(0,F.jsx)(S.Z,{children:h.KW})}},7421:function(ln,f,n){n.r(f);var S=n(20821),h=n(5018),F=n(1305),X=n(11527);f.default=function(){return(0,X.jsx)(S.Z,{rehypePlugins:[h.Z],children:F.HA})}},37086:function(ln,f,n){n.r(f);var S=n(20821),h=n(1305),F=n(11527);f.default=function(){return(0,F.jsx)(S.Z,{children:h.kQ})}},38297:function(ln,f,n){n.d(f,{Z:function(){return q}});var S=n(26068),h=n.n(S),F=n(67825),X=n.n(F),en=n(86865),I=n(27850),z=n(45130),R=n(53649),O=n.n(R),D=n(60414),G,H,Z,$=(0,D.kc)(function(L,o){var M=L.token,A=L.css,Y=L.cx,V=L.prefixCls,tn=o.size,sn=o.className,on="".concat(V,"-").concat(M.editorPrefix,"-icon"),s=typeof tn=="number"?A(G||(G=O()([`
          width: `,`px !important;
          height: `,`px !important;
        `])),tn,tn):"",C=A(H||(H=O()([`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: `,` !important;
    }

    &:active {
      scale: 0.8;
      color: `,`;
    }

    transition: color 600ms `,", scale 400ms ",`,
      background-color 100ms `,`;
  `])),M.colorText,M.colorText,M.motionEaseOut,M.motionEaseOut,M.motionEaseOut);return{container:Y(on,C,s,sn),tooltip:A(Z||(Z=O()([`
      pointer-events: none;
    `])))}}),c=n(11527),j=["placement","title","icon","cursor","onClick","className","arrow","size","tooltipDelay"],u=function(o){var M=o.placement,A=o.title,Y=o.icon,V=o.cursor,tn=o.onClick,sn=o.className,on=o.arrow,s=on===void 0?!1:on,C=o.size,g=C===void 0?"default":C,k=o.tooltipDelay,P=k===void 0?.5:k,B=X()(o,j),b=$({size:g}),T=b.styles,N=b.cx,E=(0,c.jsx)(en.ZP,h()(h()({icon:Y,className:N(T.container,sn),type:"text",style:{cursor:V},size:typeof g=="number"||g==="default"?"middle":g},B),{},{onClick:tn}));return(0,c.jsx)(c.Fragment,{children:A?(0,c.jsx)(I.Z,{arrow:s,overlayClassName:T.tooltip,title:A,mouseEnterDelay:P,placement:M,children:E}):E})},nn=function(o){var M=o||{},A=M.size,Y=$({size:A}),V=Y.theme;return(0,c.jsx)(z.iV,{componentToken:{Button:{colorText:V.colorTextTertiary,colorBgTextHover:V.colorFillSecondary,colorBgTextActive:V.colorFill}},children:(0,c.jsx)(u,h()({},o))})},q=nn},74963:function(ln,f,n){var S=n(38297);f.ZP=S.Z},54011:function(ln,f,n){n.d(f,{y:function(){return cn}});var S=n(26068),h=n.n(S),F=n(45130),X=n(66009),en=n(82187),I=n.n(en),z=n(50959),R=n(48305),O=n.n(R),D=n(85659),G=n(52639),H=n(90943),Z=n.n(H),$=n(53649),c=n.n($),j=n(60414),u=n(56468),nn,q,L=(0,j.kc)(function(r,i){var p=r.css,e=r.token,y=r.prefixCls,m=r.cx,v=i.theme,a="".concat(y,"-").concat(e.editorPrefix,"-highlight"),x=(0,u.p)(v==="dark"),U=x.colorFillTertiary,Q=x.colorText;return{copy:m("".concat(a,"-copy"),p(nn||(nn=c()([`
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
      `])),U)),copyIcon:m("".concat(a,"-copy-icon"),p(q||(q=c()([`
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
      `])),Q))}}),o=n(11527),M=function(i){var p=i.content,e=i.onCopy,y=i.theme,m=y===void 0?"light":y,v=i.style,a=(0,z.useState)(),x=O()(a,2),U=x[0],Q=x[1],an=L({theme:m}),dn=an.styles;(0,z.useEffect)(function(){return function(){window.clearTimeout(U)}});var xn=(0,z.useState)(!1),mn=O()(xn,2),gn=mn[0],pn=mn[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(Z(),{text:p&&p.length?p:"",onCopy:function(){pn(!0);var fn=window.setTimeout(function(){pn(!1)},2e3);Q(fn),e&&e(p)},children:(0,o.jsxs)("button",{type:"button",disabled:gn,className:dn.copy,style:v,children:[(0,o.jsx)(D.Z,{className:I()(dn.copyIcon,{scoll:gn})}),(0,o.jsx)(G.Z,{className:dn.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},A=M,Y=n(96433),V=n(59084),tn=n(22305),sn=n.n(tn),on,s,C,g=(0,j.kc)(function(r,i){var p=r.cx,e=r.css,y=r.token,m=r.prefixCls,v=i.theme,a="".concat(m,"-").concat(y.editorPrefix,"-highlight"),x=(0,u.p)(v==="dark"),U=x.colorFillTertiary,Q=x.colorText,an=x.colorTextSecondary,dn=sn()(U).mix(sn()(v==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:p("".concat(a,"-tag-small"),e(on||(on=c()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:p(e(s||(s=c()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),dn,y.fontFamilyCode,an)),tag:p("".concat(a,"-tag"),e(C||(C=c()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),Q,y.borderRadius,Q,y.colorFill))}}),k=function(i){var p=i||{},e=p.children,y=p.size,m=y===void 0?"default":y,v=p.theme,a=v===void 0?"light":v,x=g({theme:a}),U=x.styles,Q=x.cx;return(0,o.jsx)(V.Z,{bordered:!1,className:Q(U.tag,U.lang,m==="small"&&U.small),children:e})},P=k,B=n(31759),b=n.n(B),T=function(i,p){var e=(0,z.useRef)();function y(m,v){return Object.keys(m).forEach(function(a){b()(m[a])==="object"&&m[a].handle?v.addEventListener(a,m[a].handle,m[a].options):v.addEventListener(a,m[a])}),function(){Object.keys(m).forEach(function(a){b()(m[a])==="object"&&m[a].handle?v.removeEventListener(a,m[a].handle,m[a].options):v.removeEventListener(a,m[a])})}}return(0,z.useEffect)(function(){if(i.current)return y({keydown:function(v){var a=window.getSelection();if((v.ctrlKey||v.metaKey)&&v.code==="KeyA"&&e.current&&i.current){var x=document.createRange();x.selectNodeContents(i.current),a.removeAllRanges(),a.addRange(x),v.preventDefault()}(v.ctrlKey||v.metaKey)&&v.code==="KeyC"&&e.current&&i.current&&p&&a&&p(a.toString())},focus:function(){e.current=!0},blur:function(){e.current=!1}},i.current)},[i.current,i]),null},N,E,K=(0,j.kc)(function(r,i){var p=r.css,e=r.cx,y=r.token,m=r.prefixCls,v=i.theme,a=i.type,x="".concat(m,"-").concat(y==null?void 0:y.editorPrefix,"-highlight"),U=(0,u.p)(v==="dark"),Q=U.colorFillTertiary,an=p(N||(N=c()([`
      background-color: `,`;
    `])),a==="block"?Q:"transparent");return{container:e("".concat(x,"-container"),an,p(E||(E=c()([`
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
        `])),y.borderRadius,y.motionEaseOut,x,x,a==="pure"?0:"16px 24px"))}}),J=n(80170),_=(0,z.memo)(function(r){var i=r.children,p=r.style,e=r.className,y=r.lineNumber,m=y===void 0?!1:y,v=r.copyable,a=v===void 0?!0:v,x=r.theme,U=x===void 0?J.ly:x,Q=r.language,an=Q===void 0?"tsx":Q,dn=r.showLanguage,xn=dn===void 0?!0:dn,mn=r.type,gn=mn===void 0?"block":mn,pn=r.onCopy,jn=(0,X.r)(),fn=jn.appearance,l=fn==="dark"?"dark":"light",d=U===J.ly?l:U,W=K({theme:d,type:gn}),t=W.styles,w=(0,z.createRef)();return T(w,pn),(0,o.jsxs)("div",{ref:w,tabIndex:-1,style:p,className:I()(t.container,e),children:[a&&(0,o.jsx)(A,{onCopy:pn,theme:d,content:i}),xn&&an&&(0,o.jsx)(P,{theme:d,children:an.toLowerCase()}),(0,o.jsx)(Y.Z,{lineNumber:m,language:an,theme:d,children:i})]})}),cn=function(i){return(0,o.jsx)(F.iV,{children:(0,o.jsx)(_,h()({},i))})}},1305:function(ln,f,n){n.d(f,{HA:function(){return h},KW:function(){return F},kQ:function(){return S}});var S=`# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

The point of reference-style links is not that they\u2019re easier to write. The point is that with reference-style links, your document source is vastly more readable. Compare the above examples: using reference-style links, the paragraph itself is only 81 characters long; with inline-style links, it\u2019s 176 characters; and as raw \`HTML\`, it\u2019s 234 characters. In the raw \`HTML\`, there\u2019s more markup than there is text.

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

an example | *an example* | **an example**

---

1. Bird
1. McHale
1. Parish
    1. Bird
    1. McHale
        1. Parish

---

- Red
- Green
- Blue
    - Red
    - Green
        - Blue

---

This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>


| title | title | title |
| --- | --- | --- |
| content | content | content |


\`\`\`bash
$ pnpm install
\`\`\`

\`\`\`html
<html lang="en">
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
</html>
\`\`\`


\`\`\`javascript
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useDropNodeOnCanvas } from './useDropNodeOnCanvas';
\`\`\`

---

\u4EE5\u4E0B\u662F\u4E00\u6BB5Markdown\u683C\u5F0F\u7684LaTeX\u6570\u5B66\u516C\u5F0F\uFF1A

\u6211\u662F\u4E00\u4E2A\u884C\u5185\u516C\u5F0F\uFF1A$E=mc^2$

\u6211\u662F\u4E00\u4E2A\u72EC\u7ACB\u516C\u5F0F\uFF1A
$$
\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\ldots + x_n
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u5206\u5F0F\u7684\u516C\u5F0F\uFF1A
$$
\\frac{{n!}}{{k!(n-k)!}} = \\binom{n}{k}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u4E0A\u4E0B\u6807\u7684\u516C\u5F0F\uFF1A
$$
x^{2} + y^{2} = r^{2}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u79EF\u5206\u7B26\u53F7\u7684\u516C\u5F0F\uFF1A
$$
\\int_{a}^{b} f(x) \\, dx
$$
`,h=`
<html lang="en">
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
</html>
`,F=`
\`\`\`bash
$ pnpm install
\`\`\`


\`\`\`javascript
import { Collapse, Divider, Typography } from 'antd';
import { CSSProperties, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { PluggableList } from 'react-markdown/lib/react-markdown';
import { withProvider } from '..';
import { Code } from './CodeBlock';
import { useStyles } from './style';

export interface MarkdownProps {
  children: string;
  /**
   * @description ClassName
   */
  className?: string;
  onDoubleClick?: () => void;
  style?: CSSProperties;
  rehypePlugins?: PluggableList;
  remarkPlugins?: PluggableList;
}

const MemoHr = memo((props) => (
  <Divider style={{ marginBottom: '1em', marginTop: 0 }} {...props} />
));
const MemoDetails = memo((props) => <Collapse style={{ marginBottom: '1em' }} {...props} />);
const MemoImage = memo((props) => <img {...props} />);
const MemoAlink = memo((props) => <Typography.Link {...props} />);

const Markdown = memo<MarkdownProps>(
  ({
    children,
    className,
    style,
    onDoubleClick,
    rehypePlugins: outRehypePlugins,
    remarkPlugins: outRemarkPlugins,
    ...rest
  }) => {
    const { styles } = useStyles();
    const components: any = {
      details: MemoDetails,
      hr: MemoHr,
      a: MemoAlink,
      img: MemoImage,
      pre: Code,
    };

    const rehypePlugins = [rehypeKatex, ...(outRehypePlugins || [])];
    const remarkPlugins = [remarkGfm, remarkMath, ...(outRemarkPlugins || [])];

    return (
      <Typography className={className} onDoubleClick={onDoubleClick} style={style}>
        <ReactMarkdown
          className={styles.markdown}
          components={components}
          rehypePlugins={rehypePlugins as PluggableList}
          remarkPlugins={remarkPlugins as PluggableList}
          {...rest}
        >
          {children}
        </ReactMarkdown>
      </Typography>
    );
  },
);

export default withProvider(Markdown) as React.FC<MarkdownProps>;

\`\`\`
`},20821:function(ln,f,n){n.d(f,{Z:function(){return fn}});var S=n(15558),h=n.n(S),F=n(67825),X=n.n(F),en=n(26068),I=n.n(en),z=n(32923),R=n(50719),O=n(31342),D=n(50959),G=n(3366),H=n(38495),Z=n(77959),$=n(40020),c=n(45130),j=n(53649),u=n.n(j),nn=n(3741),q=n(39826),L=n(48305),o=n.n(L),M=n(237),A=n(53637),Y=n(19379),V=n(50078),tn=n(54011),sn=n(38297),on=n(53940),s=n(86865),C=n(82187),g=n.n(C),k=n(33743),P=n(60414),B,b,T,N,E,K,J,_,cn,r,i,p=(0,P.kc)(function(l){var d=l.css,W=l.cx,t=l.token,w=l.prefixCls,rn="".concat(w,"-").concat(t==null?void 0:t.editorPrefix,"-markdown");return{container:d(B||(B=u()([`
      :not(:last-child) {
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
      }
    `]))),highlight:d(b||(b=u()([`
      pre {
        padding: 12px !important;
      }
    `]))),markdown:d(T||(T=u()([`
      color: `,`;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin-block-start: 0;
        margin-block-end: 0;

        font-size: 14px;
        line-height: 1.8;
        color: `,`;
        word-break: break-all;
        word-wrap: break-word;

        + * {
          margin-block-end: 0.5em;
        }
      }

      > *:last-child {
        margin-bottom: 0 !important;
      }

      blockquote {
        margin: 16px 0;
        padding: 0 12px;

        p {
          font-style: italic;
          color: `,`;
        }
      }

      p:not(:last-child) {
        margin-bottom: 1em;
      }

      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;
        border-radius: `,`px;

        > code {
          padding: 0 !important;
          border: none !important;
        }
      }

      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        font-size: `,`px;
        border-radius: `,`px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding: 8px;

        border: 1px solid `,`;
        border-radius: `,`px;

        code {
          display: inline-flex;
        }
      }

      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
      }

      thead {
        tr {
          th {
            background: `,`;

            &:first-child {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
            }

            &:last-child {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
        }
      }

      > ol > li::marker {
        color: `,` !important;
      }

      > ul > li {
        line-height: 1.8;
        list-style-type: disc;

        &::marker {
          color: `,` !important;
        }
      }

      ol,
      ul {
        > li::marker {
          color: `,`;
        }
      }

      details {
        margin-bottom: 1em;
        padding: 12px 16px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        transition: all 400ms `,`;
      }

      details[open] {
        summary {
          padding-bottom: 12px;
          border-bottom: 1px solid `,`;
        }
      }
    `])),t.colorText,t.colorText,t.colorTextDescription,t.colorLink,t.colorLinkHover,t.colorLinkActive,t.borderRadius,t.fontSizeSM,t.borderRadiusSM,t.colorBorderSecondary,t.borderRadius,t.colorFillTertiary,t.borderRadius,t.borderRadius,t.borderRadius,t.borderRadius,t.colorPrimary,t.colorPrimary,t.colorTextDescription,t.colorFillTertiary,t.colorBorderSecondary,t.borderRadiusLG,t.motionEaseOut,t.colorBorder),wrapper:W(d(N||(N=u()([`
        background-color: `,`;
        border-radius: `,`px;
      `])),t.colorFillTertiary,t.borderRadius)),highlighter:d(E||(E=u()([`
      max-height: 400px;
      overflow: auto;
    `]))),header:W("".concat(rn,"-header"),d(K||(K=u()([`
        padding: 4px 8px;
        width: auto !important; // override self width
      `]))),d(J||(J=u()([`
        .`,`-btn {
          &:hover {
            color: `,` !important;
          }
        }
      `])),rn,t.colorTextSecondary)),copy:d(_||(_=u()([`
      background-color: transparent;
      position: inherit;
      width: 30px;
      padding-left: 6px;
    `]))),select:d(cn||(cn=u()([`
      min-width: 100px;
      .`,`-select-selector {
        padding-inline-end: 4px !important;
      }
      .`,`-select-selection-overflow-item-suffix {
        .`,`-select-selection-search {
          display: none;
        }
      }
    `])),w,w,w),trigger:d(r||(r=u()([`
      min-width: 100px;
      display: flex;
      justify-content: center;
      span {
        font-family: `,` !important;
      }
    `])),t.fontFamilyCode),lang:W(d(i||(i=u()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;

        font-family: `,`;
        color: `,`;

        transition: opacity 0.1s;
      `])),t.fontFamilyCode,t.colorTextSecondary))}}),e=n(11527),y=V.W.map(function(l){return{label:l,value:l.toLowerCase()}}),m=(0,D.memo)(function(l){var d=l||{},W=d.children,t=d.language,w=t===void 0?"markdown":t,rn=d.className,vn=d.style,un=(0,D.useState)(!0),hn=o()(un,2),Cn=hn[0],Tn=hn[1],En=(0,D.useState)(w),Pn=o()(En,2),bn=Pn[0],Sn=Pn[1],On=p(),yn=On.styles,Mn=(0,D.useMemo)(function(){return(0,e.jsx)(tn.y,{language:bn==null?void 0:bn.toLowerCase(),copyable:!1,showLanguage:!1,type:"block",children:W})},[bn,W]);return(0,e.jsxs)("div",{className:g()(yn.wrapper,rn),style:vn,children:[(0,e.jsxs)(k.D,{align:"center",className:yn.header,horizontal:!0,justify:"space-between",children:[(0,e.jsx)(sn.Z,{icon:Cn?(0,e.jsx)(A.Z,{size:14}):(0,e.jsx)(Y.Z,{size:14}),onClick:function(){return Tn(!Cn)},size:24}),(0,e.jsx)(on.P,{bordered:!1,className:yn.select,onSelect:Sn,mode:"tags",options:y,tagRender:function(Ln){return(0,e.jsx)("div",{className:yn.trigger,children:(0,e.jsx)(s.ZP,{type:"text",size:"small",children:Ln.label})})},showSearch:!0,size:"small",suffixIcon:!1,value:[bn.toLowerCase()]}),(0,e.jsx)(M.Z,{className:yn.copy,content:W})]}),(0,e.jsx)("div",{className:yn.highlighter,children:Cn?Mn:null})]})}),v=m,a,x,U=(0,q.kc)(function(l){var d=l.css;return{container:d(a||(a=u()([`
    :not(:last-child) {
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  `]))),highlight:d(x||(x=u()([`
    pre {
      padding: 12px !important;
    }
  `])))}}),Q=function(d){var W=/\n/g,t=d.match(W);return t?t.length:1},an=(0,D.memo)(function(l){var d=U(),W=d.styles,t=d.cx;if(l.children[0]){var w=l.children[0].props,rn=w.children,vn=w.className;if(rn){var un=Array.isArray(rn)?rn[0]:rn,hn=(vn==null?void 0:vn.replace("language-",""))||"txt";return Q(un)===1&&un.length<=60?(0,e.jsx)(nn.p,{className:t(W.container),style:{display:"flex"},"data-code-type":"highlighter",language:hn,symbol:"",type:"block",children:un}):(0,e.jsx)(v,{className:t(W.container,W.highlight),language:hn,children:un})}}}),dn=["children","className","style","onDoubleClick","rehypePlugins","remarkPlugins"],xn=(0,D.memo)(function(l){return(0,e.jsx)(z.Z,I()({style:{marginBottom:"1em",marginTop:0}},l))}),mn=(0,D.memo)(function(l){return(0,e.jsx)(R.Z,I()({style:{marginBottom:"1em"}},l))}),gn=(0,D.memo)(function(l){return(0,e.jsx)("img",I()({},l))}),pn=(0,D.memo)(function(l){return(0,e.jsx)(O.Z.Link,I()({},l))}),jn=(0,D.memo)(function(l){var d=l.children,W=l.className,t=l.style,w=l.onDoubleClick,rn=l.rehypePlugins,vn=l.remarkPlugins,un=X()(l,dn),hn=p(),Cn=hn.styles,Tn={details:mn,hr:xn,a:pn,img:gn,pre:an},En=[H.Z].concat(h()(rn||[])),Pn=[[Z.Z,{singleTilde:!1}],$.Z].concat(h()(vn||[]));return(0,e.jsx)(O.Z,{className:W,onDoubleClick:w,style:t,children:(0,e.jsx)(G.D,I()(I()({className:Cn.markdown,components:Tn,rehypePlugins:En,remarkPlugins:Pn},un),{},{children:d}))})}),fn=(0,c.nh)(jn)},3741:function(ln,f,n){n.d(f,{p:function(){return on}});var S=n(26068),h=n.n(S),F=n(67825),X=n.n(F),en=n(96433),I=n(237),z=n(48305),R=n.n(z),O=n(50959),D=n(53649),G=n.n(D),H=n(60414),Z,$=(0,H.kc)(function(s,C){var g,k,P=s.css,B=s.token,b=s.isDarkMode,T=C.offset,N=C.outside,E=C.size,K=((g=T==null?void 0:T.x)!==null&&g!==void 0?g:0)+"px",J=((k=T==null?void 0:T.y)!==null&&k!==void 0?k:0)+"px",_=N?"0":".1",cn=E+"px";return P(Z||(Z=G()([`
      pointer-events: none;

      position: absolute;
      z-index: 1;
      inset: 0;

      opacity: `,`;
      background: radial-gradient(
        `," circle at "," ",`,
        `,`,
        `,`
      );
      border-radius: inherit;

      transition: all 0.2s;
    `])),_,cn,K,J,b?B.colorText:"#fff",b?"transparent":B.colorTextQuaternary)}),c=n(11527),j=["className","size"],u=function(){var C=(0,O.useState)(),g=R()(C,2),k=g[0],P=g[1],B=(0,O.useState)(!0),b=R()(B,2),T=b[0],N=b[1],E=(0,O.useRef)();return(0,O.useEffect)(function(){if(E.current&&E.current.parentElement){var K=E.current.parentElement,J=function(r){var i=K.getBoundingClientRect();P({x:r.clientX-i.x,y:r.clientY-i.y}),N(!1)},_=function(){N(!0)};return K.addEventListener("mousemove",J),K.addEventListener("mouseleave",_),function(){K.removeEventListener("mousemove",J),K.removeEventListener("mouseleave",_)}}},[]),[k,T,E]},nn=(0,O.memo)(function(s){var C=s.className,g=s.size,k=g===void 0?64:g,P=X()(s,j),B=u(),b=R()(B,3),T=b[0],N=b[1],E=b[2],K=$({offset:T,outside:N,size:k}),J=K.styles,_=K.cx;return(0,c.jsx)("div",h()({className:_(J,C),ref:E},P))}),q=nn,L=n(45130),o=n(66009),M,A,Y,V=(0,H.kc)(function(s,C){var g=s.css,k=s.cx,P=s.token,B=s.prefixCls,b=C.type,T=g(M||(M=G()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),b==="block"?P.colorFillTertiary:"transparent",b==="block"?"transparent":P.colorBorder),N="".concat(B,"-").concat(P==null?void 0:P.editorPrefix),E="".concat(N,"-snippet");return{container:k("".concat(E,"-container"),T,g(A||(A=G()([`
        position: relative;
        overflow: hidden;
        display: inline-flex;
        gap: 8px;
        align-items: center;
        max-width: 100%;
        height: 38px;
        padding: 0 8px 0 12px;

        border-radius: `,`px;

        transition: background-color 100ms `,`;

        &:hover {
          background-color: `,`;
        }

        pre {
          overflow-x: auto !important;
          overflow-y: hidden !important;
          display: flex;
          align-items: center;

          width: 100%;
          height: 36px !important;
          margin: 0 !important;

          line-height: 1;

          background: none !important;
        }

        code[class*='language-'] {
          background: none !important;
        }
      `])),P.borderRadius,P.motionEaseOut,P.colorFillTertiary)),highlighter:k("".concat(E,"-highlighter"),g(Y||(Y=G()([`
        position: relative;
        overflow: hidden;
        flex: 1;
      `]))))}}),tn=["symbol","language","children","copyable","type","spotlight","className"],sn=(0,O.memo)(function(s){var C=s.symbol,g=C===void 0?"$":C,k=s.language,P=k===void 0?"tsx":k,B=s.children,b=s.copyable,T=b===void 0?!0:b,N=s.type,E=N===void 0?"ghost":N,K=s.spotlight,J=s.className,_=X()(s,tn),cn=(0,o.r)(),r=cn.isDarkMode,i=V({type:E}),p=i.styles,e=i.cx;return(0,c.jsxs)("div",h()(h()({className:e(p.container,J)},_),{},{children:[K&&(0,c.jsx)(q,{}),(0,c.jsx)("div",{className:p.highlighter,children:(0,c.jsx)(en.Z,{language:P,theme:r?"dark":"light",children:g?[g,B].join(" "):B})}),T&&(0,c.jsx)(I.Z,{content:B})]}))}),on=function(C){return(0,c.jsx)(L.iV,{children:(0,c.jsx)(sn,h()({},C))})}},53940:function(ln,f,n){n.d(f,{P:function(){return G}});var S=n(26068),h=n.n(S),F=n(53649),X=n.n(F),en=n(46545),I=n(39826),z=n(45130),R=n(11527),O,D=(0,I.kc)(function(H){var Z=H.css,$=H.stylish,c=H.prefixCls,j="".concat(c,"-select"),u=":not(.".concat(j,"-disabled):not(.").concat(j,"-customize-input)");return Z(O||(O=X()([`
    &.`,` {
      &-multiple:not(&-customize-input) &.`,`-selector {
        `,`;
      }

      &`,` {
        &:hover {
          .`,`-selector {
            border-color: transparent;
            `,`;
          }
        }
      }

      &-focused`,` {
        &:hover {
          .`,`-selector {
            `,`;
          }
        }

        .`,`-selector {
          `,`;
        }
      }
    }

    .`,` {
      &-arrow {
        top: 13px;
        right: 8px;
        width: 10px;
        height: 10px;
        font-size: 10px;
      }
    }
  `])),j,j,$.controlContainer,u,j,$.controlContainer,u,j,$.controlContainerFocused,j,$.controlContainerFocused,j)}),G=function(Z){var $=D(),c=$.styles,j=$.cx;return(0,R.jsx)(z.iV,{children:(0,R.jsx)(en.Z,h()(h()({},Z),{},{className:j(c,Z.className)}))})}},237:function(ln,f,n){n.d(f,{Z:function(){return j}});var S=n(26068),h=n.n(S),F=n(67825),X=n.n(F),en=n(85659),I=n(874),z=n.n(I),R=n(50959),O=n(74963),D=n(48305),G=n.n(D),H=function(){var nn=(0,R.useState)(!1),q=G()(nn,2),L=q[0],o=q[1];(0,R.useEffect)(function(){if(L){var A=setTimeout(function(){o(!1)},2e3);return function(){clearTimeout(A)}}},[L]);var M=(0,R.useCallback)(function(){return o(!0)},[]);return(0,R.useMemo)(function(){return{copied:L,setCopied:M}},[L])},Z=n(11527),$=["content","className","placement"],c=(0,R.memo)(function(u){var nn=u.content,q=u.className,L=u.placement,o=L===void 0?"right":L,M=X()(u,$),A=H(),Y=A.copied,V=A.setCopied;return(0,Z.jsx)(O.ZP,h()(h()({},M),{},{className:q,icon:(0,Z.jsx)(en.Z,{size:12}),onClick:function(){z()(nn),V()},placement:o,title:Y?"\u2705 Success":"Copy"}))}),j=c}}]);
