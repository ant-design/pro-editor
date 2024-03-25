(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[8859],{11144:function(a,l,t){"use strict";t.r(l);var s=t(3741),r=t(11527);l.default=function(){return(0,r.jsx)(s.p,{language:"sh",children:"pnpm install @ant-design/pro-chat"})}},42327:function(a,l,t){"use strict";t.r(l);var s=t(3741),r=t(11527);l.default=function(){return(0,r.jsx)(s.p,{language:"sh",spotlight:!0,children:"pnpm install @ant-design/pro-chat"})}},38297:function(a,l,t){"use strict";t.d(l,{Z:function(){return B}});var s=t(26068),r=t.n(s),y=t(67825),h=t.n(y),C=t(86865),E=t(27850),z=t(45130),j=t(53649),P=t.n(j),K=t(60414),N,$,A,R=(0,K.kc)(function(f,n){var v=f.token,m=f.css,M=f.cx,b=f.prefixCls,L=n.size,k=n.className,F="".concat(b,"-").concat(v.editorPrefix,"-icon"),e=typeof L=="number"?m(N||(N=P()([`
          width: `,`px !important;
          height: `,`px !important;
        `])),L,L):"",i=m($||($=P()([`
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
  `])),v.colorText,v.colorText,v.motionEaseOut,v.motionEaseOut,v.motionEaseOut);return{container:M(F,i,e,k),tooltip:m(A||(A=P()([`
      pointer-events: none;
    `])))}}),d=t(11527),U=["placement","title","icon","cursor","onClick","className","arrow","size","tooltipDelay"],D=function(n){var v=n.placement,m=n.title,M=n.icon,b=n.cursor,L=n.onClick,k=n.className,F=n.arrow,e=F===void 0?!1:F,i=n.size,o=i===void 0?"default":i,x=n.tooltipDelay,c=x===void 0?.5:x,O=h()(n,U),u=R({size:o}),p=u.styles,S=u.cx,g=(0,d.jsx)(C.ZP,r()(r()({icon:M,className:S(p.container,k),type:"text",style:{cursor:b},size:typeof o=="number"||o==="default"?"middle":o},O),{},{onClick:L}));return(0,d.jsx)(d.Fragment,{children:m?(0,d.jsx)(E.Z,{arrow:e,overlayClassName:p.tooltip,title:m,mouseEnterDelay:c,placement:v,children:g}):g})},Z=function(n){var v=n||{},m=v.size,M=R({size:m}),b=M.theme;return(0,d.jsx)(z.iV,{componentToken:{Button:{colorText:b.colorTextTertiary,colorBgTextHover:b.colorFillSecondary,colorBgTextActive:b.colorFill}},children:(0,d.jsx)(D,r()({},n))})},B=Z},74963:function(a,l,t){"use strict";var s=t(38297);l.ZP=s.Z},3741:function(a,l,t){"use strict";t.d(l,{p:function(){return F}});var s=t(26068),r=t.n(s),y=t(67825),h=t.n(y),C=t(96433),E=t(237),z=t(48305),j=t.n(z),P=t(50959),K=t(53649),N=t.n(K),$=t(60414),A,R=(0,$.kc)(function(e,i){var o,x,c=e.css,O=e.token,u=e.isDarkMode,p=i.offset,S=i.outside,g=i.size,T=((o=p==null?void 0:p.x)!==null&&o!==void 0?o:0)+"px",I=((x=p==null?void 0:p.y)!==null&&x!==void 0?x:0)+"px",W=S?"0":".1",H=g+"px";return c(A||(A=N()([`
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
    `])),W,H,T,I,u?O.colorText:"#fff",u?"transparent":O.colorTextQuaternary)}),d=t(11527),U=["className","size"],D=function(){var i=(0,P.useState)(),o=j()(i,2),x=o[0],c=o[1],O=(0,P.useState)(!0),u=j()(O,2),p=u[0],S=u[1],g=(0,P.useRef)();return(0,P.useEffect)(function(){if(g.current&&g.current.parentElement){var T=g.current.parentElement,I=function(X){var V=T.getBoundingClientRect();c({x:X.clientX-V.x,y:X.clientY-V.y}),S(!1)},W=function(){S(!0)};return T.addEventListener("mousemove",I),T.addEventListener("mouseleave",W),function(){T.removeEventListener("mousemove",I),T.removeEventListener("mouseleave",W)}}},[]),[x,p,g]},Z=(0,P.memo)(function(e){var i=e.className,o=e.size,x=o===void 0?64:o,c=h()(e,U),O=D(),u=j()(O,3),p=u[0],S=u[1],g=u[2],T=R({offset:p,outside:S,size:x}),I=T.styles,W=T.cx;return(0,d.jsx)("div",r()({className:W(I,i),ref:g},c))}),B=Z,f=t(45130),n=t(66009),v,m,M,b=(0,$.kc)(function(e,i){var o=e.css,x=e.cx,c=e.token,O=e.prefixCls,u=i.type,p=o(v||(v=N()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),u==="block"?c.colorFillTertiary:"transparent",u==="block"?"transparent":c.colorBorder),S="".concat(O,"-").concat(c==null?void 0:c.editorPrefix),g="".concat(S,"-snippet");return{container:x("".concat(g,"-container"),p,o(m||(m=N()([`
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
      `])),c.borderRadius,c.motionEaseOut,c.colorFillTertiary)),highlighter:x("".concat(g,"-highlighter"),o(M||(M=N()([`
        position: relative;
        overflow: hidden;
        flex: 1;
      `]))))}}),L=["symbol","language","children","copyable","type","spotlight","className"],k=(0,P.memo)(function(e){var i=e.symbol,o=i===void 0?"$":i,x=e.language,c=x===void 0?"tsx":x,O=e.children,u=e.copyable,p=u===void 0?!0:u,S=e.type,g=S===void 0?"ghost":S,T=e.spotlight,I=e.className,W=h()(e,L),H=(0,n.r)(),X=H.isDarkMode,V=b({type:g}),Y=V.styles,Q=V.cx;return(0,d.jsxs)("div",r()(r()({className:Q(Y.container,I)},W),{},{children:[T&&(0,d.jsx)(B,{}),(0,d.jsx)("div",{className:Y.highlighter,children:(0,d.jsx)(C.Z,{language:c,theme:X?"dark":"light",children:o?[o,O].join(" "):O})}),p&&(0,d.jsx)(E.Z,{content:O})]}))}),F=function(i){return(0,d.jsx)(f.iV,{children:(0,d.jsx)(k,r()({},i))})}},237:function(a,l,t){"use strict";t.d(l,{Z:function(){return U}});var s=t(26068),r=t.n(s),y=t(67825),h=t.n(y),C=t(85659),E=t(874),z=t.n(E),j=t(50959),P=t(74963),K=t(48305),N=t.n(K),$=function(){var Z=(0,j.useState)(!1),B=N()(Z,2),f=B[0],n=B[1];(0,j.useEffect)(function(){if(f){var m=setTimeout(function(){n(!1)},2e3);return function(){clearTimeout(m)}}},[f]);var v=(0,j.useCallback)(function(){return n(!0)},[]);return(0,j.useMemo)(function(){return{copied:f,setCopied:v}},[f])},A=t(11527),R=["content","className","placement"],d=(0,j.memo)(function(D){var Z=D.content,B=D.className,f=D.placement,n=f===void 0?"right":f,v=h()(D,R),m=$(),M=m.copied,b=m.setCopied;return(0,A.jsx)(P.ZP,r()(r()({},v),{},{className:B,icon:(0,A.jsx)(C.Z,{size:12}),onClick:function(){z()(Z),b()},placement:n,title:M?"\u2705 Success":"Copy"}))}),U=d},67825:function(a,l,t){var s=t(64382);function r(y,h){if(y==null)return{};var C=s(y,h),E,z;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(y);for(z=0;z<j.length;z++)E=j[z],!(h.indexOf(E)>=0)&&Object.prototype.propertyIsEnumerable.call(y,E)&&(C[E]=y[E])}return C}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},64382:function(a){function l(t,s){if(t==null)return{};var r={},y=Object.keys(t),h,C;for(C=0;C<y.length;C++)h=y[C],!(s.indexOf(h)>=0)&&(r[h]=t[h]);return r}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},53649:function(a){function l(t,s){return s||(s=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(s)}}))}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
