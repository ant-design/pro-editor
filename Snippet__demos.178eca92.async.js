(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[8859],{115:function(x,d,t){"use strict";t.r(d);var g=t(51445),a=t(52676);d.default=function(){return(0,a.jsx)(g.p,{language:"sh",children:"pnpm install @ant-design/pro-chat"})}},37830:function(x,d,t){"use strict";t.r(d);var g=t(51445),a=t(52676);d.default=function(){return(0,a.jsx)(g.p,{language:"sh",spotlight:!0,children:"pnpm install @ant-design/pro-chat"})}},56487:function(x,d,t){"use strict";t.d(d,{Z:function(){return B}});var g=t(26068),a=t.n(g),y=t(67825),h=t.n(y),C=t(57820),T=t(50518),M=t(38720),j=t(53649),P=t.n(j),K=t(53131),N,$,A,R=(0,K.kc)(function(v,n){var c=v.token,p=v.css,z=v.cx,b=v.prefixCls,L=n.size,k=n.className,F="".concat(b,"-").concat(c.editorPrefix,"-icon"),e=typeof L=="number"?p(N||(N=P()([`
          width: `,`px !important;
          height: `,`px !important;
        `])),L,L):"",r=p($||($=P()([`
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
  `])),c.colorText,c.colorText,c.motionEaseOut,c.motionEaseOut,c.motionEaseOut);return{container:z(F,r,e,k),tooltip:p(A||(A=P()([`
      pointer-events: none;
    `])))}}),l=t(52676),U=["placement","title","icon","cursor","onClick","className","arrow","size","tooltipDelay"],D=function(n){var c=n.placement,p=n.title,z=n.icon,b=n.cursor,L=n.onClick,k=n.className,F=n.arrow,e=F===void 0?!1:F,r=n.size,o=r===void 0?"default":r,f=n.tooltipDelay,s=f===void 0?.5:f,O=h()(n,U),i=R({size:o}),u=i.styles,S=i.cx,m=(0,l.jsx)(C.ZP,a()(a()({icon:z,className:S(u.container,k),type:"text",style:{cursor:b},size:typeof o=="number"||o==="default"?"middle":o},O),{},{onClick:L}));return(0,l.jsx)(l.Fragment,{children:p?(0,l.jsx)(T.Z,{arrow:e,overlayClassName:u.tooltip,title:p,mouseEnterDelay:s,placement:c,children:m}):m})},Z=function(n){var c=n||{},p=c.size,z=R({size:p}),b=z.theme;return(0,l.jsx)(M.iV,{componentToken:{Button:{colorText:b.colorTextTertiary,colorBgTextHover:b.colorFillSecondary,colorBgTextActive:b.colorFill}},children:(0,l.jsx)(D,a()({},n))})},B=Z},93312:function(x,d,t){"use strict";var g=t(56487);d.ZP=g.Z},51445:function(x,d,t){"use strict";t.d(d,{p:function(){return F}});var g=t(26068),a=t.n(g),y=t(67825),h=t.n(y),C=t(48149),T=t(51918),M=t(48305),j=t.n(M),P=t(75271),K=t(53649),N=t.n(K),$=t(53131),A,R=(0,$.kc)(function(e,r){var o,f,s=e.css,O=e.token,i=e.isDarkMode,u=r.offset,S=r.outside,m=r.size,E=((o=u==null?void 0:u.x)!==null&&o!==void 0?o:0)+"px",I=((f=u==null?void 0:u.y)!==null&&f!==void 0?f:0)+"px",W=S?"0":".1",H=m+"px";return s(A||(A=N()([`
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
    `])),W,H,E,I,i?O.colorText:"#fff",i?"transparent":O.colorTextQuaternary)}),l=t(52676),U=["className","size"],D=function(){var r=(0,P.useState)(),o=j()(r,2),f=o[0],s=o[1],O=(0,P.useState)(!0),i=j()(O,2),u=i[0],S=i[1],m=(0,P.useRef)();return(0,P.useEffect)(function(){if(m.current&&m.current.parentElement){var E=m.current.parentElement,I=function(X){var V=E.getBoundingClientRect();s({x:X.clientX-V.x,y:X.clientY-V.y}),S(!1)},W=function(){S(!0)};return E.addEventListener("mousemove",I),E.addEventListener("mouseleave",W),function(){E.removeEventListener("mousemove",I),E.removeEventListener("mouseleave",W)}}},[]),[f,u,m]},Z=(0,P.memo)(function(e){var r=e.className,o=e.size,f=o===void 0?64:o,s=h()(e,U),O=D(),i=j()(O,3),u=i[0],S=i[1],m=i[2],E=R({offset:u,outside:S,size:f}),I=E.styles,W=E.cx;return(0,l.jsx)("div",a()({className:W(I,r),ref:m},s))}),B=Z,v=t(38720),n=t(42249),c,p,z,b=(0,$.kc)(function(e,r){var o=e.css,f=e.cx,s=e.token,O=e.prefixCls,i=r.type,u=o(c||(c=N()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),i==="block"?s.colorFillTertiary:"transparent",i==="block"?"transparent":s.colorBorder),S="".concat(O,"-").concat(s==null?void 0:s.editorPrefix),m="".concat(S,"-snippet");return{container:f("".concat(m,"-container"),u,o(p||(p=N()([`
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
      `])),s.borderRadius,s.motionEaseOut,s.colorFillTertiary)),highlighter:f("".concat(m,"-highlighter"),o(z||(z=N()([`
        position: relative;
        overflow: hidden;
        flex: 1;
      `]))))}}),L=["symbol","language","children","copyable","type","spotlight","className"],k=(0,P.memo)(function(e){var r=e.symbol,o=r===void 0?"$":r,f=e.language,s=f===void 0?"tsx":f,O=e.children,i=e.copyable,u=i===void 0?!0:i,S=e.type,m=S===void 0?"ghost":S,E=e.spotlight,I=e.className,W=h()(e,L),H=(0,n.r)(),X=H.isDarkMode,V=b({type:m}),Y=V.styles,Q=V.cx;return(0,l.jsxs)("div",a()(a()({className:Q(Y.container,I)},W),{},{children:[E&&(0,l.jsx)(B,{}),(0,l.jsx)("div",{className:Y.highlighter,children:(0,l.jsx)(C.Z,{language:s,theme:X?"dark":"light",children:o?[o,O].join(" "):O})}),u&&(0,l.jsx)(T.Z,{content:O})]}))}),F=function(r){return(0,l.jsx)(v.iV,{children:(0,l.jsx)(k,a()({},r))})}},51918:function(x,d,t){"use strict";t.d(d,{Z:function(){return U}});var g=t(26068),a=t.n(g),y=t(67825),h=t.n(y),C=t(91626),T=t(874),M=t.n(T),j=t(75271),P=t(93312),K=t(48305),N=t.n(K),$=function(){var Z=(0,j.useState)(!1),B=N()(Z,2),v=B[0],n=B[1];(0,j.useEffect)(function(){if(v){var p=setTimeout(function(){n(!1)},2e3);return function(){clearTimeout(p)}}},[v]);var c=(0,j.useCallback)(function(){return n(!0)},[]);return(0,j.useMemo)(function(){return{copied:v,setCopied:c}},[v])},A=t(52676),R=["content","className","placement"],l=(0,j.memo)(function(D){var Z=D.content,B=D.className,v=D.placement,n=v===void 0?"right":v,c=h()(D,R),p=$(),z=p.copied,b=p.setCopied;return(0,A.jsx)(P.ZP,a()(a()({},c),{},{className:B,icon:(0,A.jsx)(C.Z,{size:12}),onClick:function(){M()(Z),b()},placement:n,title:z?"\u2705 Success":"Copy"}))}),U=l},67825:function(x,d,t){var g=t(64382);function a(y,h){if(y==null)return{};var C=g(y,h),T,M;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(y);for(M=0;M<j.length;M++)T=j[M],!(h.indexOf(T)>=0)&&Object.prototype.propertyIsEnumerable.call(y,T)&&(C[T]=y[T])}return C}x.exports=a,x.exports.__esModule=!0,x.exports.default=x.exports},64382:function(x){function d(t,g){if(t==null)return{};var a={},y=Object.keys(t),h,C;for(C=0;C<y.length;C++)h=y[C],!(g.indexOf(h)>=0)&&(a[h]=t[h]);return a}x.exports=d,x.exports.__esModule=!0,x.exports.default=x.exports}}]);
