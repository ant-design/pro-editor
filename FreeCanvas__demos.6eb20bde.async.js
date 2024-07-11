(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[7673],{89025:function(d,l,t){"use strict";t.r(l);var e=t(38457),v=t(57820),i=t(52676);l.default=function(){return(0,i.jsx)("div",{style:{height:"100vh"},children:(0,i.jsx)(e.Z,{extraControlBtns:[(0,i.jsx)(v.ZP,{children:"\u81EA\u5B9A\u4E49"},"extra")],children:(0,i.jsx)(v.ZP,{children:"\u6309\u94AE"})})})}},38457:function(d,l,t){"use strict";t.d(l,{Z:function(){return w}});var e=t(3079),v=t(51926),i=t(53649),f=t.n(i),T=t(53131),C,g,O,y=(0,T.kc)(function(r){var o=r.css;return{canvas:o(C||(C=f()([`
    height: 100%;
  `]))),control:o(g||(g=f()([`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 100;
  `]))),flow:o(O||(O=f()([`
    .react-flow {
      &__attribution {
        display: none;
      }

      &__pane,
      &__node {
        cursor: auto;
      }
    }
  `])))}}),n=t(52676),B=function(o){var a=o.data,c=y(),u=c.styles;return(0,n.jsx)("div",{className:u.canvas,children:a})},A=B,M=t(61247),V=t(10216),z=t(47690),P=t(50518),x=t(57820),D=t(94456),F=t(68084),I=t(84240),S=t(5899),L=t.n(S),Z=t(75271),K=t(55471),R=(0,Z.memo)(function(){var r=(0,e._K)(),o=(0,e.Sj)(),a=o.zoom,c=function(){a===1?r.zoomTo(.5):r.zoomTo(1)};return(0,n.jsx)(P.Z,{title:a===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,n.jsxs)(x.ZP,{onClick:c,style:{width:64},children:[Math.round(a*100),"%"]})})}),U=(0,Z.memo)(function(r){var o=r.viewport,a=r.extraBtns,c=a===void 0?[]:a,u=(0,I.Fg)(),s=(0,e._K)(),m=function(){s.zoomIn()},p=function(){s.zoomOut()},h=function(){s.fitView()};return(0,Z.useEffect)(function(){L()(s.getViewport(),o)||s.setViewport(o)},[o]),(0,n.jsx)(D.ZP,{theme:{token:{colorBgContainer:u.colorBgElevated}},children:(0,n.jsx)(K.Z,{padding:8,children:(0,n.jsxs)(F.Z,{children:[(0,n.jsx)(x.ZP,{icon:(0,n.jsx)(M.Z,{}),onClick:p}),(0,n.jsx)(R,{}),(0,n.jsx)(x.ZP,{icon:(0,n.jsx)(V.Z,{}),onClick:m}),(0,n.jsx)(P.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,n.jsx)(x.ZP,{icon:(0,n.jsx)(z.Z,{}),onClick:h})}),c]})})})}),W=U,H=t(2313),$={artboard:A},N=function(o){var a=o.children,c=o.viewport,u=o.defaultViewport,s=o.onViewportChange,m=o.control,p=m===void 0?!0:m,h=o.extraControlBtns,j=h===void 0?[]:h,b=y(),E=b.styles;return(0,n.jsx)(e.tV,{children:(0,n.jsxs)(e.x$,{minZoom:.25,maxZoom:4,nodes:[{id:"artboard",type:"artboard",data:a,draggable:!1,connectable:!1,position:{x:0,y:0}}],defaultViewport:u,onMove:function(Q,G){s==null||s(G)},nodeTypes:$,fitView:!0,onlyRenderVisibleElements:!0,panOnScroll:!0,className:E.flow,panOnDrag:!1,zoomOnScroll:!1,children:[p&&(0,n.jsx)("div",{className:E.control,children:(0,n.jsx)(W,{viewport:c,extraBtns:j})}),(0,n.jsx)(v.A,{color:"#aaa",gap:16,style:{zIndex:-1}})]})})},w=N},53131:function(d,l,t){"use strict";t.d(l,{f6:function(){return f},kc:function(){return i}});var e=t(4690),v=(0,e.F)({customToken:{editorPrefix:"editor"}}),i=v.createStyles,f=v.ThemeProvider},53649:function(d){function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}d.exports=l,d.exports.__esModule=!0,d.exports.default=d.exports}}]);
