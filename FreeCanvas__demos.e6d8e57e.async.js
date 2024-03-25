"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[7673],{91951:function(C,v,n){n.r(v);var a=n(6283),i=n(86865),l=n(11527);v.default=function(){return(0,l.jsx)("div",{style:{height:"100vh"},children:(0,l.jsx)(a.Z,{extraControlBtns:[(0,l.jsx)(i.ZP,{children:"\u81EA\u5B9A\u4E49"},"extra")],children:(0,l.jsx)(i.ZP,{children:"\u6309\u94AE"})})})}},6283:function(C,v,n){n.d(v,{Z:function(){return w}});var a=n(76660),i=n(42125),l=n(53649),u=n.n(l),B=n(60414),g,y,O,p=(0,B.kc)(function(r){var o=r.css;return{canvas:o(g||(g=u()([`
    height: 100%;
  `]))),control:o(y||(y=u()([`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 100;
  `]))),flow:o(O||(O=u()([`
    .react-flow {
      &__attribution {
        display: none;
      }

      &__pane,
      &__node {
        cursor: auto;
      }
    }
  `])))}}),t=n(11527),T=function(o){var e=o.data,d=p(),c=d.styles;return(0,t.jsx)("div",{className:c.canvas,children:e})},A=T,M=n(26610),V=n(98794),z=n(792),E=n(27850),m=n(86865),D=n(38751),F=n(41812),I=n(39826),S=n(5899),K=n.n(S),j=n(50959),L=n(67269),R=(0,j.memo)(function(){var r=(0,a._K)(),o=(0,a.Sj)(),e=o.zoom,d=function(){e===1?r.zoomTo(.5):r.zoomTo(1)};return(0,t.jsx)(E.Z,{title:e===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,t.jsxs)(m.ZP,{onClick:d,style:{width:64},children:[Math.round(e*100),"%"]})})}),U=(0,j.memo)(function(r){var o=r.viewport,e=r.extraBtns,d=e===void 0?[]:e,c=(0,I.Fg)(),s=(0,a._K)(),h=function(){s.zoomIn()},Z=function(){s.zoomOut()},x=function(){s.fitView()};return(0,j.useEffect)(function(){K()(s.getViewport(),o)||s.setViewport(o)},[o]),(0,t.jsx)(D.ZP,{theme:{token:{colorBgContainer:c.colorBgElevated}},children:(0,t.jsx)(L.Z,{padding:8,children:(0,t.jsxs)(F.Z,{children:[(0,t.jsx)(m.ZP,{icon:(0,t.jsx)(M.Z,{}),onClick:Z}),(0,t.jsx)(R,{}),(0,t.jsx)(m.ZP,{icon:(0,t.jsx)(V.Z,{}),onClick:h}),(0,t.jsx)(E.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,t.jsx)(m.ZP,{icon:(0,t.jsx)(z.Z,{}),onClick:x})}),d]})})})}),W=U,J=n(14069),$={artboard:A},N=function(o){var e=o.children,d=o.viewport,c=o.defaultViewport,s=o.onViewportChange,h=o.control,Z=h===void 0?!0:h,x=o.extraControlBtns,f=x===void 0?[]:x,G=p(),P=G.styles;return(0,t.jsx)(a.tV,{children:(0,t.jsxs)(a.x$,{minZoom:.25,maxZoom:4,nodes:[{id:"artboard",type:"artboard",data:e,draggable:!1,connectable:!1,position:{x:0,y:0}}],defaultViewport:c,onMove:function(X,H){s==null||s(H)},nodeTypes:$,fitView:!0,onlyRenderVisibleElements:!0,panOnScroll:!0,className:P.flow,panOnDrag:!1,zoomOnScroll:!1,children:[Z&&(0,t.jsx)("div",{className:P.control,children:(0,t.jsx)(W,{viewport:d,extraBtns:f})}),(0,t.jsx)(i.A,{color:"#aaa",gap:16,style:{zIndex:-1}})]})})},w=N},60414:function(C,v,n){n.d(v,{f6:function(){return u},kc:function(){return l}});var a=n(96077),i=(0,a.F)({customToken:{editorPrefix:"editor"}}),l=i.createStyles,u=i.ThemeProvider}}]);
