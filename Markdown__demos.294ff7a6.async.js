"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[7439],{8228:function(on,g,n){n.r(g);var j=n(21664),p=n(21590),D=n(52676);g.default=function(){return(0,D.jsx)(j.Z,{children:p.KW})}},17890:function(on,g,n){n.r(g);var j=n(21664),p=n(5018),D=n(21590),z=n(52676);g.default=function(){return(0,z.jsx)(j.Z,{rehypePlugins:[p.Z],children:D.HA})}},94006:function(on,g,n){n.r(g);var j=n(21664),p=n(21590),D=n(52676);g.default=function(){return(0,D.jsx)(j.Z,{children:p.kQ})}},75122:function(on,g,n){n.r(g);var j=n(21664),p=n(57820),D=n(75271),z=n(52676);g.default=function(){return(0,z.jsx)(j.Z,{components:{a:(0,D.memo)(function(Y){return(0,z.jsxs)(p.ZP,{onClick:function(){console.log(Y.href)},children:["\u8BE5\u94FE\u63A5\u4E0D\u5141\u8BB8\u70B9\u51FB\u8DF3\u8F6C\uFF01",Y.href]})})},children:`
This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>
`})}},56487:function(on,g,n){n.d(g,{Z:function(){return _}});var j=n(26068),p=n.n(j),D=n(67825),z=n.n(D),Y=n(57820),k=n(50518),K=n(38720),I=n(53649),M=n.n(I),A=n(53131),V,U,W,$=(0,A.kc)(function(L,o){var S=L.token,B=L.css,J=L.cx,Q=L.prefixCls,en=o.size,sn=o.className,an="".concat(Q,"-").concat(S.editorPrefix,"-icon"),s=typeof en=="number"?B(V||(V=M()([`
          width: `,`px !important;
          height: `,`px !important;
        `])),en,en):"",C=B(U||(U=M()([`
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
  `])),S.colorText,S.colorText,S.motionEaseOut,S.motionEaseOut,S.motionEaseOut);return{container:J(an,C,s,sn),tooltip:B(W||(W=M()([`
      pointer-events: none;
    `])))}}),c=n(52676),E=["placement","title","icon","cursor","onClick","className","arrow","size","tooltipDelay"],u=function(o){var S=o.placement,B=o.title,J=o.icon,Q=o.cursor,en=o.onClick,sn=o.className,an=o.arrow,s=an===void 0?!1:an,C=o.size,y=C===void 0?"default":C,F=o.tooltipDelay,P=F===void 0?.5:F,N=z()(o,E),b=$({size:y}),T=b.styles,R=b.cx,O=(0,c.jsx)(Y.ZP,p()(p()({icon:J,className:R(T.container,sn),type:"text",style:{cursor:Q},size:typeof y=="number"||y==="default"?"middle":y},N),{},{onClick:en}));return(0,c.jsx)(c.Fragment,{children:B?(0,c.jsx)(k.Z,{arrow:s,overlayClassName:T.tooltip,title:B,mouseEnterDelay:P,placement:S,children:O}):O})},tn=function(o){var S=o||{},B=S.size,J=$({size:B}),Q=J.theme;return(0,c.jsx)(K.iV,{componentToken:{Button:{colorText:Q.colorTextTertiary,colorBgTextHover:Q.colorFillSecondary,colorBgTextActive:Q.colorFill}},children:(0,c.jsx)(u,p()({},o))})},_=tn},93312:function(on,g,n){var j=n(56487);g.ZP=j.Z},40375:function(on,g,n){n.d(g,{y:function(){return cn}});var j=n(26068),p=n.n(j),D=n(38720),z=n(42249),Y=n(82187),k=n.n(Y),K=n(75271),I=n(48305),M=n.n(I),A=n(91626),V=n(16466),U=n(58226),W=n.n(U),$=n(53649),c=n.n($),E=n(53131),u=n(26270),tn,_,L=(0,E.kc)(function(r,i){var v=r.css,e=r.token,f=r.prefixCls,m=r.cx,h=i.theme,a="".concat(f,"-").concat(e.editorPrefix,"-highlight"),x=(0,u.p)(h==="dark"),G=x.colorFillTertiary,X=x.colorText;return{copy:m("".concat(a,"-copy"),v(tn||(tn=c()([`
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
      `])),G)),copyIcon:m("".concat(a,"-copy-icon"),v(_||(_=c()([`
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
      `])),X))}}),o=n(52676),S=function(i){var v=i.content,e=i.onCopy,f=i.theme,m=f===void 0?"light":f,h=i.style,a=(0,K.useState)(),x=M()(a,2),G=x[0],X=x[1],rn=L({theme:m}),dn=rn.styles;(0,K.useEffect)(function(){return function(){window.clearTimeout(G)}});var xn=(0,K.useState)(!1),mn=M()(xn,2),yn=mn[0],pn=mn[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(W(),{text:v&&v.length?v:"",onCopy:function(){pn(!0);var Cn=window.setTimeout(function(){pn(!1)},2e3);X(Cn),e&&e(v)},children:(0,o.jsxs)("button",{type:"button",disabled:yn,className:dn.copy,style:h,children:[(0,o.jsx)(A.Z,{className:k()(dn.copyIcon,{scoll:yn})}),(0,o.jsx)(V.Z,{className:dn.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},B=S,J=n(48149),Q=n(29055),en=n(22305),sn=n.n(en),an,s,C,y=(0,E.kc)(function(r,i){var v=r.cx,e=r.css,f=r.token,m=r.prefixCls,h=i.theme,a="".concat(m,"-").concat(f.editorPrefix,"-highlight"),x=(0,u.p)(h==="dark"),G=x.colorFillTertiary,X=x.colorText,rn=x.colorTextSecondary,dn=sn()(G).mix(sn()(h==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:v("".concat(a,"-tag-small"),e(an||(an=c()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:v(e(s||(s=c()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),dn,f.fontFamilyCode,rn)),tag:v("".concat(a,"-tag"),e(C||(C=c()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),X,f.borderRadius,X,f.colorFill))}}),F=function(i){var v=i||{},e=v.children,f=v.size,m=f===void 0?"default":f,h=v.theme,a=h===void 0?"light":h,x=y({theme:a}),G=x.styles,X=x.cx;return(0,o.jsx)(Q.Z,{bordered:!1,className:X(G.tag,G.lang,m==="small"&&G.small),children:e})},P=F,N=n(31759),b=n.n(N),T=function(i,v){var e=(0,K.useRef)();function f(m,h){return Object.keys(m).forEach(function(a){b()(m[a])==="object"&&m[a].handle?h.addEventListener(a,m[a].handle,m[a].options):h.addEventListener(a,m[a])}),function(){Object.keys(m).forEach(function(a){b()(m[a])==="object"&&m[a].handle?h.removeEventListener(a,m[a].handle,m[a].options):h.removeEventListener(a,m[a])})}}return(0,K.useEffect)(function(){if(i.current)return f({keydown:function(h){var a=window.getSelection();if((h.ctrlKey||h.metaKey)&&h.code==="KeyA"&&e.current&&i.current){var x=document.createRange();x.selectNodeContents(i.current),a.removeAllRanges(),a.addRange(x),h.preventDefault()}(h.ctrlKey||h.metaKey)&&h.code==="KeyC"&&e.current&&i.current&&v&&a&&v(a.toString())},focus:function(){e.current=!0},blur:function(){e.current=!1}},i.current)},[i.current,i]),null},R,O,Z=(0,E.kc)(function(r,i){var v=r.css,e=r.cx,f=r.token,m=r.prefixCls,h=i.theme,a=i.type,x="".concat(m,"-").concat(f==null?void 0:f.editorPrefix,"-highlight"),G=(0,u.p)(h==="dark"),X=G.colorFillTertiary,rn=v(R||(R=c()([`
      background-color: `,`;
    `])),a==="block"?X:"transparent");return{container:e("".concat(x,"-container"),rn,v(O||(O=c()([`
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
        `])),f.borderRadius,f.motionEaseOut,x,x,a==="pure"?0:"16px 24px"))}}),w=n(37726),nn=(0,K.memo)(function(r){var i=r.children,v=r.style,e=r.className,f=r.lineNumber,m=f===void 0?!1:f,h=r.copyable,a=h===void 0?!0:h,x=r.theme,G=x===void 0?w.ly:x,X=r.language,rn=X===void 0?"tsx":X,dn=r.showLanguage,xn=dn===void 0?!0:dn,mn=r.type,yn=mn===void 0?"block":mn,pn=r.onCopy,jn=(0,z.r)(),Cn=jn.appearance,l=Cn==="dark"?"dark":"light",d=G===w.ly?l:G,H=Z({theme:d,type:yn}),t=H.styles,q=(0,K.createRef)();return T(q,pn),(0,o.jsxs)("div",{ref:q,tabIndex:-1,style:v,className:k()(t.container,e),children:[a&&(0,o.jsx)(B,{onCopy:pn,theme:d,content:i}),xn&&rn&&(0,o.jsx)(P,{theme:d,children:rn.toLowerCase()}),(0,o.jsx)(J.Z,{lineNumber:m,language:rn,theme:d,children:i})]})}),cn=function(i){return(0,o.jsx)(D.iV,{children:(0,o.jsx)(nn,p()({},i))})}},21590:function(on,g,n){n.d(g,{HA:function(){return p},KW:function(){return D},kQ:function(){return j}});var j=`# This is an H1
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
`,p=`
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
`,D=`
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
`},21664:function(on,g,n){n.d(g,{Z:function(){return Cn}});var j=n(15558),p=n.n(j),D=n(67825),z=n.n(D),Y=n(26068),k=n.n(Y),K=n(95095),I=n(43776),M=n(19334),A=n(75271),V=n(228),U=n(83175),W=n(77959),$=n(40020),c=n(38720),E=n(53649),u=n.n(E),tn=n(51445),_=n(84240),L=n(48305),o=n.n(L),S=n(51918),B=n(39187),J=n(61895),Q=n(98136),en=n(40375),sn=n(56487),an=n(90417),s=n(57820),C=n(82187),y=n.n(C),F=n(90142),P=n(53131),N,b,T,R,O,Z,w,nn,cn,r,i,v=(0,P.kc)(function(l){var d=l.css,H=l.cx,t=l.token,q=l.prefixCls,ln="".concat(q,"-").concat(t==null?void 0:t.editorPrefix,"-markdown");return{container:d(N||(N=u()([`
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
    `])),t.colorText,t.colorText,t.colorTextDescription,t.colorLink,t.colorLinkHover,t.colorLinkActive,t.borderRadius,t.fontSizeSM,t.borderRadiusSM,t.colorBorderSecondary,t.borderRadius,t.colorFillTertiary,t.borderRadius,t.borderRadius,t.borderRadius,t.borderRadius,t.colorPrimary,t.colorPrimary,t.colorTextDescription,t.colorFillTertiary,t.colorBorderSecondary,t.borderRadiusLG,t.motionEaseOut,t.colorBorder),wrapper:H(d(R||(R=u()([`
        background-color: `,`;
        border-radius: `,`px;
      `])),t.colorFillTertiary,t.borderRadius)),highlighter:d(O||(O=u()([`
      max-height: 400px;
      overflow: auto;
    `]))),header:H("".concat(ln,"-header"),d(Z||(Z=u()([`
        padding: 4px 8px;
        width: auto !important; // override self width
      `]))),d(w||(w=u()([`
        .`,`-btn {
          &:hover {
            color: `,` !important;
          }
        }
      `])),ln,t.colorTextSecondary)),copy:d(nn||(nn=u()([`
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
    `])),q,q,q),trigger:d(r||(r=u()([`
      min-width: 100px;
      display: flex;
      justify-content: center;
      span {
        font-family: `,` !important;
      }
    `])),t.fontFamilyCode),lang:H(d(i||(i=u()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;

        font-family: `,`;
        color: `,`;

        transition: opacity 0.1s;
      `])),t.fontFamilyCode,t.colorTextSecondary))}}),e=n(52676),f=Q.W.map(function(l){return{label:l,value:l.toLowerCase()}}),m=(0,A.memo)(function(l){var d=l||{},H=d.children,t=d.language,q=t===void 0?"markdown":t,ln=d.className,vn=d.style,un=(0,A.useState)(!0),hn=o()(un,2),bn=hn[0],Pn=hn[1],Tn=(0,A.useState)(q),En=o()(Tn,2),gn=En[0],On=En[1],Dn=v(),fn=Dn.styles,Mn=(0,A.useMemo)(function(){return(0,e.jsx)(en.y,{language:gn==null?void 0:gn.toLowerCase(),copyable:!1,showLanguage:!1,type:"block",children:H})},[gn,H]);return(0,e.jsxs)("div",{className:y()(fn.wrapper,ln),style:vn,children:[(0,e.jsxs)(F.D,{align:"center",className:fn.header,horizontal:!0,justify:"space-between",children:[(0,e.jsx)(sn.Z,{icon:bn?(0,e.jsx)(B.Z,{size:14}):(0,e.jsx)(J.Z,{size:14}),onClick:function(){return Pn(!bn)},size:24}),(0,e.jsx)(an.P,{bordered:!1,className:fn.select,onSelect:On,mode:"tags",options:f,tagRender:function(An){return(0,e.jsx)("div",{className:fn.trigger,children:(0,e.jsx)(s.ZP,{type:"text",size:"small",children:An.label})})},showSearch:!0,size:"small",suffixIcon:!1,value:[gn.toLowerCase()]}),(0,e.jsx)(S.Z,{className:fn.copy,content:H})]}),(0,e.jsx)("div",{className:fn.highlighter,children:bn?Mn:null})]})}),h=m,a,x,G=(0,_.kc)(function(l){var d=l.css;return{container:d(a||(a=u()([`
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
  `])))}}),X=function(d){var H=/\n/g,t=d.match(H);return t?t.length:1},rn=(0,A.memo)(function(l){var d=G(),H=d.styles,t=d.cx;if(l.children[0]){var q=l.children[0].props,ln=q.children,vn=q.className;if(ln){var un=Array.isArray(ln)?ln[0]:ln,hn=(vn==null?void 0:vn.replace("language-",""))||"txt";return X(un)===1&&un.length<=60?(0,e.jsx)(tn.p,{className:t(H.container),style:{display:"flex"},"data-code-type":"highlighter",language:hn,symbol:"",type:"block",children:un}):(0,e.jsx)(h,{className:t(H.container,H.highlight),language:hn,children:un})}}}),dn=["children","className","style","onDoubleClick","rehypePlugins","remarkPlugins","components"],xn=(0,A.memo)(function(l){return(0,e.jsx)(K.Z,k()({style:{marginBottom:"1em",marginTop:0}},l))}),mn=(0,A.memo)(function(l){return(0,e.jsx)(I.Z,k()({style:{marginBottom:"1em"}},l))}),yn=(0,A.memo)(function(l){return(0,e.jsx)("img",k()({},l))}),pn=(0,A.memo)(function(l){return(0,e.jsx)(M.Z.Link,k()({},l))}),jn=(0,A.memo)(function(l){var d=l.children,H=l.className,t=l.style,q=l.onDoubleClick,ln=l.rehypePlugins,vn=l.remarkPlugins,un=l.components,hn=z()(l,dn),bn=v(),Pn=bn.styles,Tn=k()({details:mn,hr:xn,a:pn,img:yn,pre:rn},un),En=[U.Z].concat(p()(ln||[])),gn=[[W.Z,{singleTilde:!1}],$.Z].concat(p()(vn||[]));return(0,e.jsx)(M.Z,{className:H,onDoubleClick:q,style:t,children:(0,e.jsx)(V.D,k()(k()({className:Pn.markdown,components:Tn,rehypePlugins:En,remarkPlugins:gn},hn),{},{children:d}))})}),Cn=(0,c.nh)(jn)},51445:function(on,g,n){n.d(g,{p:function(){return an}});var j=n(26068),p=n.n(j),D=n(67825),z=n.n(D),Y=n(48149),k=n(51918),K=n(48305),I=n.n(K),M=n(75271),A=n(53649),V=n.n(A),U=n(53131),W,$=(0,U.kc)(function(s,C){var y,F,P=s.css,N=s.token,b=s.isDarkMode,T=C.offset,R=C.outside,O=C.size,Z=((y=T==null?void 0:T.x)!==null&&y!==void 0?y:0)+"px",w=((F=T==null?void 0:T.y)!==null&&F!==void 0?F:0)+"px",nn=R?"0":".1",cn=O+"px";return P(W||(W=V()([`
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
    `])),nn,cn,Z,w,b?N.colorText:"#fff",b?"transparent":N.colorTextQuaternary)}),c=n(52676),E=["className","size"],u=function(){var C=(0,M.useState)(),y=I()(C,2),F=y[0],P=y[1],N=(0,M.useState)(!0),b=I()(N,2),T=b[0],R=b[1],O=(0,M.useRef)();return(0,M.useEffect)(function(){if(O.current&&O.current.parentElement){var Z=O.current.parentElement,w=function(r){var i=Z.getBoundingClientRect();P({x:r.clientX-i.x,y:r.clientY-i.y}),R(!1)},nn=function(){R(!0)};return Z.addEventListener("mousemove",w),Z.addEventListener("mouseleave",nn),function(){Z.removeEventListener("mousemove",w),Z.removeEventListener("mouseleave",nn)}}},[]),[F,T,O]},tn=(0,M.memo)(function(s){var C=s.className,y=s.size,F=y===void 0?64:y,P=z()(s,E),N=u(),b=I()(N,3),T=b[0],R=b[1],O=b[2],Z=$({offset:T,outside:R,size:F}),w=Z.styles,nn=Z.cx;return(0,c.jsx)("div",p()({className:nn(w,C),ref:O},P))}),_=tn,L=n(38720),o=n(42249),S,B,J,Q=(0,U.kc)(function(s,C){var y=s.css,F=s.cx,P=s.token,N=s.prefixCls,b=C.type,T=y(S||(S=V()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),b==="block"?P.colorFillTertiary:"transparent",b==="block"?"transparent":P.colorBorder),R="".concat(N,"-").concat(P==null?void 0:P.editorPrefix),O="".concat(R,"-snippet");return{container:F("".concat(O,"-container"),T,y(B||(B=V()([`
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
      `])),P.borderRadius,P.motionEaseOut,P.colorFillTertiary)),highlighter:F("".concat(O,"-highlighter"),y(J||(J=V()([`
        position: relative;
        overflow: hidden;
        flex: 1;
      `]))))}}),en=["symbol","language","children","copyable","type","spotlight","className"],sn=(0,M.memo)(function(s){var C=s.symbol,y=C===void 0?"$":C,F=s.language,P=F===void 0?"tsx":F,N=s.children,b=s.copyable,T=b===void 0?!0:b,R=s.type,O=R===void 0?"ghost":R,Z=s.spotlight,w=s.className,nn=z()(s,en),cn=(0,o.r)(),r=cn.isDarkMode,i=Q({type:O}),v=i.styles,e=i.cx;return(0,c.jsxs)("div",p()(p()({className:e(v.container,w)},nn),{},{children:[Z&&(0,c.jsx)(_,{}),(0,c.jsx)("div",{className:v.highlighter,children:(0,c.jsx)(Y.Z,{language:P,theme:r?"dark":"light",children:y?[y,N].join(" "):N})}),T&&(0,c.jsx)(k.Z,{content:N})]}))}),an=function(C){return(0,c.jsx)(L.iV,{children:(0,c.jsx)(sn,p()({},C))})}},90417:function(on,g,n){n.d(g,{P:function(){return V}});var j=n(26068),p=n.n(j),D=n(53649),z=n.n(D),Y=n(71843),k=n(84240),K=n(38720),I=n(52676),M,A=(0,k.kc)(function(U){var W=U.css,$=U.stylish,c=U.prefixCls,E="".concat(c,"-select"),u=":not(.".concat(E,"-disabled):not(.").concat(E,"-customize-input)");return W(M||(M=z()([`
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
  `])),E,E,$.controlContainer,u,E,$.controlContainer,u,E,$.controlContainerFocused,E,$.controlContainerFocused,E)}),V=function(W){var $=A(),c=$.styles,E=$.cx;return(0,I.jsx)(K.iV,{children:(0,I.jsx)(Y.Z,p()(p()({},W),{},{className:E(c,W.className)}))})}},51918:function(on,g,n){n.d(g,{Z:function(){return E}});var j=n(26068),p=n.n(j),D=n(67825),z=n.n(D),Y=n(91626),k=n(874),K=n.n(k),I=n(75271),M=n(93312),A=n(48305),V=n.n(A),U=function(){var tn=(0,I.useState)(!1),_=V()(tn,2),L=_[0],o=_[1];(0,I.useEffect)(function(){if(L){var B=setTimeout(function(){o(!1)},2e3);return function(){clearTimeout(B)}}},[L]);var S=(0,I.useCallback)(function(){return o(!0)},[]);return(0,I.useMemo)(function(){return{copied:L,setCopied:S}},[L])},W=n(52676),$=["content","className","placement"],c=(0,I.memo)(function(u){var tn=u.content,_=u.className,L=u.placement,o=L===void 0?"right":L,S=z()(u,$),B=U(),J=B.copied,Q=B.setCopied;return(0,W.jsx)(M.ZP,p()(p()({},S),{},{className:_,icon:(0,W.jsx)(Y.Z,{size:12}),onClick:function(){K()(tn),Q()},placement:o,title:J?"\u2705 Success":"Copy"}))}),E=c}}]);
