"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[7214],{63728:function(C,o,e){e.d(o,{a:function(){return t}});var p=e(75271),t=function(i){return function(x,y){var Q=(0,p.useRef)(!1);i(function(){return function(){Q.current=!1}},[]),i(function(){if(!Q.current)Q.current=!0;else return x()},y)}},z=null},54538:function(C,o,e){var p=e(25862),t=e(75271),z=e(8891),i=e(22742);function x(y,Q,m){var l=(0,p.CR)((0,t.useState)({}),2),n=l[0],b=l[1],U=(0,z.Z)(function(){b({})},m).run;(0,t.useEffect)(function(){return U()},Q),(0,i.Z)(y,[n])}o.Z=x},22742:function(C,o,e){var p=e(75271),t=e(63728);o.Z=(0,t.a)(p.useEffect)},36736:function(C,o,e){e.d(o,{F:function(){return i}});var p=e(35992),t=e(75601),z=e(75271),i=function(){var y=t.ZP.useBreakpoint();return(0,z.useMemo)(function(){return(0,p.f)(y)},[y])}},21788:function(C,o,e){e.r(o),e.d(o,{default:function(){return G}});var p=e(3334),t=e(43467),z=e(3341),i=e.n(z),x=e(75271),y=e(32041),Q=e(51151),m=e(97978),l=e(89597),n=e(52676),b=["children"];function U(k,W){var O=Object.keys(k);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(k);W&&(P=P.filter(function(K){return Object.getOwnPropertyDescriptor(k,K).enumerable})),O.push.apply(O,P)}return O}function I(k){for(var W=1;W<arguments.length;W++){var O=arguments[W]!=null?arguments[W]:{};W%2?U(Object(O),!0).forEach(function(P){(0,y.Z)(k,P,O[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(O)):U(Object(O)).forEach(function(P){Object.defineProperty(k,P,Object.getOwnPropertyDescriptor(O,P))})}return k}var M=function(k){var W=k.children,O=(0,Q.Z)(k,b);return(0,n.jsx)(l.f,I(I({},O),{},{children:(0,n.jsx)(m.Z,{children:W})}))},f=e(45222),j=e(54538),d=e(91369),L=["setLoading"],S=["setLoading"],B=typeof window!="undefined",a={},V=function(W,O){(0,x.useEffect)(function(){x.startTransition(function(){W()})},O)},Y=function(W,O){(0,j.Z)(function(){W()},O,{wait:32,maxWait:96})},re=typeof x.startTransition=="function"?V:Y,ne=function(W,O,P){var K=(0,d.AC)(),de=P||function(ue,ge){return K.setState((0,y.Z)({},ue,ge))};!B&&!a[W]&&(de(W,O),a[W]=!0),re(function(){de(W,O)},[O])},_={"zh-CN":"\u9996\u9875","en-US":"Home"},T=function(W){return{title:_[W],link:"/",activePath:"/"}},c=(0,x.memo)(function(){var k=(0,t.WF)(),W=(0,t.tx)(),O=(0,t.eL)(),P=(0,t.zh)(),K=(0,t.OK)(),de=(0,t.TH)(),ue=(0,t.bU)(),ge=(0,d.AC)();return ne("siteData",k,function(){var me=k.setLoading,ke=(0,Q.Z)(k,L),ye=ge.getState(),xe=ye.siteData,we=xe.setLoading,Me=(0,Q.Z)(xe,S);i()(ke,Me)||ge.setState({siteData:k})}),ne("sidebar",W),ne("routeMeta",O),ne("location",de),ne("tabMeta",P),ne("locale",ue),ne("navData",K,function(){var me=k.themeConfig.hideHomeNav?K:[T(ue.id)].concat((0,f.Z)(K));ge.setState({navData:me})}),null}),N=e(36736),X=e(90142),oe=e(55471),ce=e(93793),ie=e(39155),he=e(33130),ve=e(7342),fe=e(90208),E=e(60009),Z=e(16969),h=e(33631),w=e(7519),D=e(88829),s=e(84240),v,F,J,ae=(0,s.kc)(function(k,W){var O=k.css,P=k.cx,K=k.responsive,de=k.token,ue=W.hideToc,ge=W.hideSidebar;return{layout:O(v||(v=(0,D.Z)([`
      background-color: `,`;
      background-image: linear-gradient(
        180deg,
        `,` 0%,
        rgba(255, 255, 255, 0) 10%
      );
      display: grid;
      grid-template-columns: `,"px 1fr ",`;
      grid-template-rows: `,`px auto 1fr auto;
      grid-template-areas:
        'head head head'
        '`," title ",`'
        '`," main ",`'
        '`,` footer footer';
      min-height: 100vh;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),de.colorBgLayout,de.colorBgContainer,de.sidebarWidth,ue?"":"".concat(de.tocWidth+24,"px"),de.headerHeight,ge?"title":"sidebar",ue?"title":".",ge?"main":"sidebar",ue?"main":"toc",ge?"footer":"sidebar",K.mobile),toc:O(F||(F=(0,D.Z)([`
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),de.tocWidth,K.mobile,de.headerHeight+1,de.colorTextDescription),content:P(O(J||(J=(0,D.Z)([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),O(K({desktop:{maxWidth:de.contentMaxWidth},mobile:{margin:0}})))}}),H=(0,x.memo)(function(){var k=(0,t.pC)(),W=(0,N.F)(),O=W.mobile,P=(0,d.HX)(function(we){return we.routeMeta.frontmatter},i()),K=(0,d.HX)(Z.Y),de=(0,d.HX)(h.TG),ue=(0,d.HX)(function(we){return(0,w.TL)(we).length===0}),ge=P.sidebar===!1,me=P.toc===!1||ue,ke=ae({hideToc:me,hideSidebar:ge}),ye=ke.styles,xe=ke.theme;return(0,n.jsxs)("div",{className:ye.layout,children:[(0,n.jsx)(t.ql,{children:P.title&&(0,n.jsxs)("title",{children:[P.title," - ",de]})}),(0,n.jsx)(he.Z,{}),me?null:(0,n.jsx)(fe.Z,{}),O||ge?null:(0,n.jsx)(ve.Z,{}),K?(0,n.jsx)(X.D,{style:{gridArea:"title",paddingBlock:O?24:void 0},children:(0,n.jsx)(oe.Z,{children:(0,n.jsx)(X.D,{style:{maxWidth:xe.contentMaxWidth,width:"100%"},children:(0,n.jsx)(X.D,{style:{paddingBlock:0,paddingInline:O?16:48},children:(0,n.jsx)(E.Z,{})})})})}):null,(0,n.jsx)(X.D,{style:{zIndex:10,gridArea:"main",margin:O?0:24,marginBottom:O?0:48},children:(0,n.jsx)(oe.Z,{width:"100%",children:(0,n.jsx)(X.D,{className:ye.content,children:(0,n.jsx)(X.D,{horizontal:!0,children:(0,n.jsx)(ce.Z,{children:k})})})})}),(0,n.jsx)(ie.Z,{})]})}),$=H,R=e(90712),q=e(98034),ee=e(24427),le,se=(0,s.kc)(function(k){var W=k.token,O=k.prefixCls,P=k.css,K=k.cx,de="".concat(O,"-home-contents");return{container:K(de,P(le||(le=(0,D.Z)([`
        width: 100%;
        max-width: `,`px;
        padding: 0 16px;
        box-sizing: border-box;
      `])),W.contentMaxWidth))}}),pe=(0,x.memo)(function(){var k=(0,d.HX)(h.TG),W=(0,t.pC)(),O=(0,d.HX)(ee.b0),P=se(),K=P.styles;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.ql,{children:(0,n.jsx)("title",{children:k})}),(0,n.jsxs)(X.D,{align:"center",gap:80,children:[(0,n.jsx)(he.Z,{}),(0,n.jsx)(q.Z,{}),(0,n.jsx)(R.Z,{}),O&&(0,n.jsx)("div",{className:K.container,children:W}),(0,n.jsx)(ie.Z,{})]})]})}),be=pe,Ae=e(90978),u,r=(0,s.vJ)(u||(u=(0,D.Z)([`
  body {
    margin: 0;
    padding: 0;
    background-color: `,`;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }

  /* \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u6837\u5F0F */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: transparent; // \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u80CC\u666F\u8272

    &-thumb {
      background-color: `,`; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u80CC\u666F\u8272
      border-radius: 4px; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u5706\u89D2\u534A\u5F84
    }

    &-corner {
      display: none;
    }
  }
`])),function(k){return k.theme.colorBgLayout},function(k){var W=k.theme;return W.colorFill}),g=(0,x.memo)(function(){var k=(0,t.YB)(),W=(0,t.TH)(),O=W.hash,P=(0,d.HX)(function(ue){return ue.routeMeta.frontmatter}),K=(0,d.HX)(ee.D$),de=(0,d.HX)(function(ue){return ue.siteData.loading});return(0,x.useEffect)(function(){var ue=O.replace("#","");ue&&setTimeout(function(){var ge=document.getElementById(decodeURIComponent(ue));ge&&(ge.scrollIntoView(),window.scrollBy({top:-80}))},1)},[de,O]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ql,{children:[(0,n.jsx)("html",{lang:k.locale.replace(/-.+$/,"")}),P.title&&(0,n.jsx)("meta",{property:"og:title",content:P.title}),P.description&&(0,n.jsx)("meta",{name:"description",content:P.description}),P.description&&(0,n.jsx)("meta",{property:"og:description",content:P.description}),P.keywords&&(0,n.jsx)("meta",{name:"keywords",content:P.keywords.join(",")}),P.keywords&&(0,n.jsx)("meta",{property:"og:keywords",content:P.keywords.join(",")})]}),K?(0,n.jsx)(be,{}):(0,n.jsx)($,{})]})});e.g.__ANTD_CACHE__=p.Y.cache;var A=function(W){var O=W.children,P=(0,d.HX)(Ae.H,i());return(0,n.jsx)(M,{cache:p.Y.cache,token:P,children:O})},te=(0,x.memo)(function(k){var W=k.initState;return(0,n.jsxs)(d.zt,{createStore:function(){return(0,d.MT)(W)},children:[(0,n.jsx)(c,{}),(0,n.jsxs)(A,{children:[(0,n.jsx)(r,{}),(0,n.jsx)(g,{})]})]})}),G=function(){var k=(0,t.WF)(),W=(0,t.tx)(),O=(0,t.eL)(),P=(0,t.zh)(),K=(0,t.OK)(),de=(0,t.TH)(),ue=(0,t.bU)(),ge=(0,x.useMemo)(function(){return{siteData:k,navData:K,locale:ue,location:de,routeMeta:O,tabMeta:P,sidebar:W}},[]);return(0,n.jsx)(te,{initState:ge})}},1639:function(C,o,e){e.d(o,{Z:function(){return D}});var p=e(32041),t=e(75271),z=e(97049),i=e(90327),x=e(5402),y=e(95095),Q=e(68084),m=e(36736),l=e(90142),n=e(16466),b=e(50518),U=e(874),I=e.n(U),M=e(32288),f=e(35475),j=e(11751),d=e(88829),L=e(84240),S,B=(0,L.kc)(function(s){var v=s.css,F=s.token;return v(S||(S=(0,d.Z)([`
      cursor: pointer;
      &:hover {
        background: `,`;
        border-radius: 4px;
      }
      pre {
        background: none !important;
        padding: 2px 8px !important;
        margin: 0;
      }
      code[class*='language-'] {
        background: none !important;
      }
    `])),F.colorFillSecondary)}),a=e(52676),V=function(v){var F=v.children,J=B(),ae=J.styles,H=J.theme,$=(0,m.F)(),R=$.mobile,q=(0,j.M)(),ee=q.copied,le=q.setCopied;return(0,a.jsx)(b.Z,{placement:R?void 0:"right",title:ee?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{style:{color:H.colorSuccess}})," \u590D\u5236\u6210\u529F"]}):"\u590D\u5236",children:(0,a.jsx)("div",{className:ae,onClick:function(){I()(F),le()},children:(0,a.jsx)(M.oP,{background:!1,type:"prism",copyable:!1,syntaxThemes:{prism:{dark:f.YC,light:f.vs}},language:"js",children:F})})})},Y=V,re,ne,_,T,c,N=(0,L.kc)(function(s){var v=s.css,F=s.token,J=s.responsive,ae=s.stylish;return{title:v(re||(re=(0,d.Z)([`
    font-family: monospace;
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),J.mobile),label:v(ne||(ne=(0,d.Z)([`
    width: 80px;
  `]))),desc:v(_||(_=(0,d.Z)([`
    font-size: `,`px;
    line-height: `,`px;
  `])),F.fontSizeLG,F.lineHeightLG),text:v(T||(T=(0,d.Z)([`
    `,`
  `])),ae.clickableText),meta:v(c||(c=(0,d.Z)([""])))}}),X=(0,t.memo)(function(s){var v=s.title,F=s.componentName,J=s.description,ae=s.defaultImport,H=s.pkg,$=s.sourceUrl,R=s.docUrl,q=s.serviceList,ee=q===void 0?[]:q,le=N(),se=le.styles,pe=(0,m.F)(),be=pe.mobile,Ae=[$&&{icon:(0,a.jsx)(z.Z,{}),children:"\u67E5\u770B\u6E90\u7801",url:$},R&&{icon:(0,a.jsx)(i.Z,{}),children:"\u7F16\u8F91\u6587\u6863",url:R}].filter(function(r){return r}),u=ae?"import ".concat(F," from '").concat(H,"';"):"import { ".concat(F," } from '").concat(H,"';");return(0,a.jsxs)(l.D,{children:[(0,a.jsx)(x.Z.Title,{className:se.title,children:v}),J&&(0,a.jsx)("div",{children:(0,a.jsx)(x.Z.Text,{type:"secondary",className:se.desc,children:J})}),(0,a.jsxs)(l.D,{style:{marginTop:16},gap:be?16:24,children:[(0,a.jsxs)(l.D,{horizontal:!be,gap:be?12:0,children:[(0,a.jsx)(x.Z.Text,{className:se.label,type:"secondary",style:{display:"flex",alignItems:"center"},children:"\u5F15\u5165\u65B9\u6CD5"}),(0,a.jsx)(Y,{children:u})]}),(0,a.jsx)(y.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,a.jsxs)(l.D,{horizontal:!be,gap:be?24:0,distribution:"space-between",children:[(0,a.jsx)(Q.Z,{split:(0,a.jsx)(y.Z,{type:"vertical"}),wrap:!0,children:ee.map(function(r){return(0,a.jsx)("a",{href:r.url,target:"_blank",rel:"noreferrer",title:r.label,children:(0,a.jsxs)(l.D,{horizontal:!0,align:"center",gap:8,className:se.text,children:[(0,a.jsx)(a.Fragment,{children:r.icon}),(0,a.jsx)(a.Fragment,{children:r.children})]})},r.label)})}),(0,a.jsx)(Q.Z,{split:(0,a.jsx)(y.Z,{type:"vertical"}),className:se.meta,children:Ae.map(function(r){return(0,a.jsx)("a",{href:r.url,target:"_blank",rel:"noreferrer",children:(0,a.jsxs)(l.D,{horizontal:!0,align:"center",gap:8,className:se.text,children:[(0,a.jsx)(a.Fragment,{children:r.icon}),(0,a.jsx)(a.Fragment,{children:r.children})]})},r.url)})})]})]})]})}),oe=e(91369),ce=e(16969),ie=(0,t.memo)(function(){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"64 64 896 896",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z"})})}),he=(0,t.memo)(function(){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),ve=(0,t.memo)(function(){return(0,a.jsx)("svg",{width:"14px",height:"14px",viewBox:"0 0 14 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,a.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),fe=(0,t.memo)(function(){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 108 108",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"main",children:[(0,a.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,a.jsx)("path",{fill:"url(#main)",d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),E=(0,t.memo)(function(){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})});function Z(s,v){var F=Object.keys(s);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(s);v&&(J=J.filter(function(ae){return Object.getOwnPropertyDescriptor(s,ae).enumerable})),F.push.apply(F,J)}return F}function h(s){for(var v=1;v<arguments.length;v++){var F=arguments[v]!=null?arguments[v]:{};v%2?Z(Object(F),!0).forEach(function(J){(0,p.Z)(s,J,F[J])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(F)):Z(Object(F)).forEach(function(J){Object.defineProperty(s,J,Object.getOwnPropertyDescriptor(F,J))})}return s}var w=(0,t.memo)(function(){var s=(0,oe.HX)(ce.U),v=s.pkg,F=(0,t.useMemo)(function(){return[{label:"NPM",icon:(0,a.jsx)(ve,{}),children:"NPM",url:"https://www.npmjs.com/package/".concat(v)},{label:"\u9884\u89C8\u4EA7\u7269",icon:(0,a.jsx)(E,{}),children:"UNPKG",url:"https://unpkg.com/browse/".concat(v,"/")},{label:"\u67E5\u9605\u4EA7\u7269\u4F53\u79EF",icon:(0,a.jsx)(ie,{}),children:"BundlePhobia",url:"https://bundlephobia.com/package/".concat(v)},{label:"\u67E5\u9605\u5B89\u88C5\u5305\u4F53\u79EF",icon:(0,a.jsx)(fe,{}),children:"PackagePhobia",url:"https://packagephobia.com/result?p=".concat(v)},{label:"\u5206\u6790\u4F9D\u8D56\u56FE",icon:(0,a.jsx)(he,{}),children:"Anvaka Graph",url:"https://npm.anvaka.com/#/view/2d/".concat(v)}]},[v]);return(0,a.jsx)(X,h({serviceList:F},s))}),D=w},33782:function(C,o,e){e.d(o,{Z:function(){return I}});var p=e(80652),t=e(36736),z=e(75271),i=e(90142),x=e(4278),y=e(91369),Q=e(88829),m=e(84240),l,n=(0,m.kc)(function(M){var f=M.token,j=M.responsive,d=M.isDarkMode,L=M.css;return{content:L(l||(l=(0,Q.Z)([`
    min-height: 400px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;

    padding: 24px 48px;
    border-radius: 10px;
    background-color: `,`;
    box-shadow: `,`;

    &:has([data-page-tabs='true']) {
      padding-top: 8px;
    }

    `,` {
      padding: 8px 16px;
      border-radius: 0;
    }

    .markdown {
      color: `,`;

      h1,
      h2,
      h3 {
        color: `,`;
      }
      p {
        line-height: 1.8;
      }

      // hyperlink
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

        opacity: `,`;
      }

      > [data-code-type='highlighter'] {
        pre {
          margin: 8px 0 !important;
        }
      }
      // inline code
      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        //FIXME: \u7B49\u4E0B\u4E00\u7248 token \u4F18\u5316\u5347\u7EA7
        color: `,`;
        background: `,`;
        border-radius: 4px;
      }

      // pre tag
      pre {
        font-size: 14px;
        padding-left: 24px;
        padding-right: 24px;
      }

      // table
      table {
        width: 100%;
        border-spacing: 1px;
      }

      th {
        background: `,`;
      }

      tr {
      }
      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
        border-bottom: 1px solid `,`;
      }

      // blockquote
      blockquote {
        font-style: italic;

        margin: 16px 0;
        padding: 0 12px;
        color: `,`;
        border-left: 3px solid `,`;
      }

      // list
      ul li {
        line-height: 1.8;
      }

      // anchor of headings
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          margin-inline-start: -24px;
          color: `,`;
          // hide phantom blank node
          font-size: 0;
          text-align: right;
          line-height: inherit;

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            content: '#';
            color: `,`;
            font-size: 20px;
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    }
  `])),f.colorBgContainer,f.boxShadowTertiary,j.mobile,d?f.colorTextSecondary:f.colorText,f.colorText,f.colorLink,f.colorLinkHover,f.colorLinkActive,d?.8:1,d?f["cyan-7"]:f.colorPrimaryText,d?f["cyan-1"]:f.colorPrimaryBg,f.colorFillTertiary,f.colorBorderSecondary,f.colorTextDescription,f.colorBorder,f.colorText,f.colorTextTertiary)}}),b=e(52676),U=function(f){var j=f.children,d=(0,y.HX)(function(Y){return Y.siteData.loading}),L=n(),S=L.styles,B=L.cx,a=(0,t.F)(),V=a.mobile;return(0,b.jsxs)(i.D,{width:"100%",gap:V?0:24,children:[(0,b.jsxs)("div",{className:B("dumi-antd-style-content",S.content),children:[(0,b.jsx)(p.Z,{active:!0,paragraph:!0,loading:d}),(0,b.jsx)("div",{style:{display:d?"none":void 0},children:j})]}),(0,b.jsx)(x.Z,{})]})},I=(0,z.memo)(U)},64645:function(C,o,e){e.d(o,{Z:function(){return ne}});var p=e(32041),t=e(36736),z=e(3341),i=e.n(z),x=e(75271),y=e(90142),Q=e(91369),m=e(7519),l=e(96629),n=e(6650),b=e(43467),U=e(88829),I=e(84240),M,f,j,d,L=(0,I.kc)(function(_){var T=_.token,c=_.css;return{container:c(M||(M=(0,U.Z)([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),T.colorBgContainer,T.colorFillTertiary),nav:c(f||(f=(0,U.Z)([`
    color: `,`;
    font-size: 12px;
  `])),T.colorTextTertiary),title:c(j||(j=(0,U.Z)([`
    font-size: 16px;
  `]))),alignmentEnd:c(d||(d=(0,U.Z)([`
    justify-content: flex-end;
  `])))}}),S=e(52676),B=function(T){var c=T.title,N=T.link,X=T.type,oe=L(),ce=oe.styles,ie=oe.cx,he=(0,b.YB)(),ve=(0,x.useMemo)(function(){switch(X){case"prev":return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(l.Z,{})," ",he.formatMessage({id:"content.footer.actions.previous"})]});case"next":return(0,S.jsxs)(S.Fragment,{children:[he.formatMessage({id:"content.footer.actions.next"})," ",(0,S.jsx)(n.Z,{})]})}},[X]);return(0,S.jsx)(b.rU,{to:N,children:(0,S.jsxs)(y.D,{className:ce.container,gap:8,children:[(0,S.jsx)(y.D,{horizontal:!0,gap:4,className:ie(ce.nav,X==="next"&&ce.alignmentEnd),children:ve}),(0,S.jsx)(y.D,{horizontal:!0,className:ie(ce.title,X==="next"&&ce.alignmentEnd),children:c})]})})},a=(0,x.memo)(B);function V(_,T){var c=Object.keys(_);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(_);T&&(N=N.filter(function(X){return Object.getOwnPropertyDescriptor(_,X).enumerable})),c.push.apply(c,N)}return c}function Y(_){for(var T=1;T<arguments.length;T++){var c=arguments[T]!=null?arguments[T]:{};T%2?V(Object(c),!0).forEach(function(N){(0,p.Z)(_,N,c[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(c)):V(Object(c)).forEach(function(N){Object.defineProperty(_,N,Object.getOwnPropertyDescriptor(c,N))})}return _}var re=function(){var T=(0,Q.HX)(m.e9,i()),c=T.prev,N=T.next,X=(0,t.F)(),oe=X.mobile;return(0,S.jsxs)(y.D,{horizontal:!oe,gap:oe?12:0,distribution:"space-between",style:{margin:oe?12:0},children:[c?(0,S.jsx)(a,Y({type:"prev"},c)):(0,S.jsx)("div",{}),N?(0,S.jsx)(a,Y({type:"next"},N)):(0,S.jsx)("div",{})]})},ne=(0,x.memo)(re)},59824:function(C,o,e){e.d(o,{Z:function(){return fe}});var p=e(13712),t=e(32041),z=e(6650),i=e(29055),x=e(43467),y=e(55471),Q=e(90142),m=e(88829),l=e(84240),n=e(44006),b,U,I,M,f,j,d,L,S,B,a=(0,l.kc)(function(E,Z){var h=E.token,w=E.prefixCls,D=E.responsive,s=E.css,v=E.stylish,F=E.isDarkMode,J=E.cx,ae=Z.rowNum,H=Z.hasLink,$="".concat(w,"-features"),R="".concat($,"-cover"),q="".concat($,"-description"),ee="".concat($,"-title"),le="".concat($,"-img"),se=20,pe=function(u){return s(b||(b=(0,m.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),u,u,u*(22/24))},be=s(U||(U=(0,m.Z)([`
      transition: all `," ",`;
    `])),h.motionDurationSlow,h.motionEaseInOutCirc);return{cell:s(I||(I=(0,m.Z)([`
        overflow: hidden;
      `]))),container:s(M||(M=(0,m.Z)([`
        `,`;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,`,
          `,`
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,`,
            `,`
          );

          box-shadow: inset 0 0 0 1px `,", ",`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),be,h.colorFillContent,h.colorFillQuaternary,(0,n.$n)(.5,h.colorFillContent),(0,n.$n)(.5,h.colorFillQuaternary),h.colorBorder,h.boxShadowSecondary,R,se*ae,le,pe(100),q,ee,H?14:20),title:J(ee,be,s(f||(f=(0,m.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),h.lineHeightHeading3,h.colorText)),desc:J(q,be,s(j||(j=(0,m.Z)([`
          color: `,`;

          pointer-events: none;
          quotient {
            color: `,`;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,`;
            }
          }
        `])),h.colorTextSecondary,h.colorTextDescription,F?h.colorPrimary:h.colorPrimaryBgHover)),imgContainer:J(R,be,s(d||(d=(0,m.Z)([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,", ",`);
          }

          &[image-style='light'] {
            background: `,`;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,`,
              `,` 50%,
              `,`
            );
          }
        `])),h.colorFillContent,pe(24),h.gradientColor1,h.gradientColor2,h.colorBgContainer,(0,n.m4)(h.gradientColor2,.3),(0,n.m4)(h.gradientColor2,.3),(0,n.m4)(h.gradientColor1,.3))),img:J(le,be,s(L||(L=(0,m.Z)([`
          `,`;
          color: `,`;
        `])),pe(20),h.colorWhite)),link:s(S||(S=(0,m.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),be,v.resetLinkColor,h.colorTextDescription,h.colorPrimaryHover),blur:s(B||(B=(0,m.Z)([`
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,`;
        scale: 2;
        opacity: `,`;
        `,` {
          display: none;
        }
      `])),v.heroBlurBall,F?.05:.08,D.mobile)}}),V=e(52676),Y=function(Z){var h=Z.image,w=Z.className,D=Z.title,s=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return h.startsWith("http")||s.test(h)?(0,V.jsx)("img",{className:w,src:h,alt:D}):(0,V.jsx)(y.Z,{className:w,children:h})},re=function(Z){var h=Z.imageType,w=Z.row,D=Z.column,s=Z.hero,v=Z.description,F=Z.image,J=Z.title,ae=Z.link,H=Z.imageStyle,$=Z.openExternal,R=w||7,q=a({rowNum:R,hasLink:!!ae}),ee=q.styles,le=q.theme;return(0,V.jsxs)("div",{className:ee.container,style:{gridRow:"span ".concat(R),gridColumn:"span ".concat(D||1),cursor:ae?"pointer":"default"},onClick:function(){ae&&($?window.open(ae):x.m8.push(ae))},children:[(0,V.jsxs)("div",{className:ee.cell,children:[F&&(0,V.jsx)(y.Z,{"image-style":h,className:ee.imgContainer,style:H,children:(0,V.jsx)(Y,{className:ee.img,image:F,title:J})}),J&&(0,V.jsxs)(Q.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:ee.title,children:[J,h==="soon"?(0,V.jsx)(i.Z,{color:le.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),v&&(0,V.jsx)("p",{dangerouslySetInnerHTML:{__html:v},className:ee.desc}),ae&&(0,V.jsx)("div",{className:ee.link,children:(0,V.jsxs)(x.rU,{to:ae,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,V.jsx)(z.Z,{})]})})]}),s&&(0,V.jsx)("div",{className:ee.blur})]})},ne=re,_,T,c=(0,l.kc)(function(E){var Z=E.token,h=E.prefixCls,w=E.responsive,D=E.css,s=E.cx,v="".concat(h,"-features");return{container:s(v,D(_||(_=(0,m.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),Z.contentMaxWidth,w({mobile:D(T||(T=(0,m.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function N(E,Z){var h=Object.keys(E);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(E);Z&&(w=w.filter(function(D){return Object.getOwnPropertyDescriptor(E,D).enumerable})),h.push.apply(h,w)}return h}function X(E){for(var Z=1;Z<arguments.length;Z++){var h=arguments[Z]!=null?arguments[Z]:{};Z%2?N(Object(h),!0).forEach(function(w){(0,t.Z)(E,w,h[w])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(h)):N(Object(h)).forEach(function(w){Object.defineProperty(E,w,Object.getOwnPropertyDescriptor(h,w))})}return E}var oe=function(Z){var h=Z.items,w=Z.style,D=c(),s=D.styles;return h!=null&&h.length?(0,V.jsx)("div",{className:s.container,style:w,children:h.map(function(v){return(0,V.jsx)(ne,X({},v),v.title)})}):null},ce=oe,ie=e(91369),he=e(24427),ve=function(){var Z=(0,ie.HX)(he.SL,p.shallow);return Z!=null&&Z.length?(0,V.jsx)(ce,{items:Z,style:{margin:"0 16px"}}):null},fe=ve},32640:function(C,o,e){e.d(o,{Z:function(){return Z}});var p=e(95095),t=e(36736),z=e(55471),i=e(90142),x=e(12027),y=e(32041),Q=e(51151),m=e(75271),l=e(82187),n=e.n(l),b=function(w){var D=w.prefixCls,s=w.icon,v=w.title,F=w.items,J=F===void 0?[]:F,ae=w.style,H=w.className;return m.createElement("div",{className:n()("".concat(D,"-column"),H),style:ae},(v||s)&&m.createElement("h2",null,s&&m.createElement("span",{className:"".concat(D,"-column-icon")},s),v),J.map(function($,R){var q=$.LinkComponent||"a";return m.createElement("div",{className:n()("".concat(D,"-item"),$.className),style:$.style,key:R},m.createElement(q,{href:$.url,to:typeof q!="string"?$.url:void 0,target:$.openExternal?"_blank":void 0,rel:$.openExternal?"noopener noreferrer":void 0},$.icon&&m.createElement("span",{className:"".concat(D,"-item-icon")},$.icon),$.title),$.description&&m.createElement(m.Fragment,null,m.createElement("span",{className:"".concat(D,"-item-separator")},"-"),m.createElement("span",{className:"".concat(D,"-item-description")},$.description)))}))},U=b,I=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],M=function(w){var D=w.prefixCls,s=D===void 0?"rc-footer":D,v=w.className,F=w.style,J=w.bottom,ae=w.columns,H=w.maxColumnsPerRow,$=w.backgroundColor,R=w.columnLayout,q=w.theme,ee=q===void 0?"dark":q,le=(0,Q.Z)(w,I),se=n()("".concat(s),v,(0,y.Z)({},"".concat(s,"-").concat(ee),!!ee)),pe=typeof H=="number"&&H>0;return m.createElement("footer",(0,x.Z)((0,x.Z)({},le),{},{className:se,style:(0,x.Z)((0,x.Z)({},F),{},{backgroundColor:$})}),m.createElement("section",{className:"".concat(s,"-container")},ae&&ae.length>0&&m.createElement("section",{className:"".concat(s,"-columns"),style:{justifyContent:R,flexWrap:pe?"wrap":void 0}},ae.map(function(be,Ae){var u=be.title,r=be.icon,g=be.style,A=be.className,te=be.items,G=te===void 0?[]:te,k=(0,x.Z)({},g);return pe&&(k.flex="0 0 ".concat(100/(H+1)+.1,"%")),m.createElement(U,{key:Ae,prefixCls:s,title:u,icon:r,items:G,style:k,className:A})}))),J&&m.createElement("section",{className:"".concat(s,"-bottom")},m.createElement("div",{className:"".concat(s,"-bottom-container")},J)))},f=M,j=e(88829),d=e(84240),L,S,B=(0,d.kc)(function(h,w){var D=h.css,s=h.responsive,v=h.token,F="rc-footer";return{container:D(L||(L=(0,j.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),v.colorSplit,v.colorTextDescription,s.mobile),footer:D(S||(S=(0,j.Z)([`
      color: `,`;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: `,`;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          h2 {
            position: relative;
            margin: 0 auto;
            color: `,`;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),v.colorTextSecondary,v.colorBgLayout,F,v.colorTextTertiary,v.colorLinkHover,F,v.contentMaxWidth,w?"0":"60px 0 20px",v.colorText,w?"transparent":v.colorBorderSecondary,s.mobile,F)}}),a=e(52676),V=function(w){var D=w.columns,s=w.bottom,v=w.theme,F=!D||(D==null?void 0:D.length)===0,J=B(F),ae=J.styles;return(0,a.jsx)("div",{className:ae.container,children:(0,a.jsx)(f,{theme:v,className:ae.footer,columns:D,bottom:s})})},Y=V,re=e(91369),ne=e(33631),_=e(55711),T=e(36116),c=e(93848),N=e(46532),X=e(49732),oe=e(17750),ce=e(43467),ie=function(w){var D=w.github,s={title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Umi",description:"React \u5E94\u7528\u5F00\u53D1\u6846\u67B6",url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:"\u5FAE\u524D\u7AEF\u6846\u67B6",url:"https://qiankun.umijs.org",openExternal:!0}]},v={title:"\u793E\u533A",items:[{icon:(0,a.jsx)(_.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,a.jsx)(T.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"Ant Design \u8BED\u96C0\u4E13\u680F",url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,a.jsx)(c.Z,{style:{color:"#056de8"}}),title:"Ant Design \u77E5\u4E4E\u4E13\u680F",url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,a.jsx)(c.Z,{style:{color:"#056de8"}}),title:"\u4F53\u9A8C\u79D1\u6280\u4E13\u680F",url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:"SEE Conf-\u8682\u8681\u4F53\u9A8C\u79D1\u6280\u5927\u4F1A",url:"https://seeconf.antfin.com/",openExternal:!0}]},F={icon:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"\u66F4\u591A\u4EA7\u54C1",items:[{icon:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"\u8BED\u96C0",url:"https://yuque.com",description:"\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177",openExternal:!0},{icon:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:"\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",openExternal:!0},{icon:(0,a.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6",openExternal:!0},{icon:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch \u5DE5\u5177\u96C6",url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"\u8682\u8681\u4F53\u9A8C\u79D1\u6280",url:"https://xtech.antfin.com/",openExternal:!0}]},J={title:"\u5E2E\u52A9",items:[D?{icon:(0,a.jsx)(N.Z,{}),title:"GitHub",url:D,openExternal:!0}:void 0,{icon:(0,a.jsx)(X.Z,{}),title:"\u66F4\u65B0\u65E5\u5FD7",url:"/changelog",LinkComponent:ce.rU},D?{icon:(0,a.jsx)(oe.Z,{}),title:"\u8BA8\u8BBA",url:"".concat(D,"/issues"),openExternal:!0}:void 0].filter(Boolean)};return[s,v,J,F]},he,ve,fe=(0,d.kc)(function(h){var w=h.css,D=h.responsive,s=h.token,v="rc-footer";return{container:w(he||(he=(0,j.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),s.colorSplit,s.colorTextDescription,D.mobile),footer:w(ve||(ve=(0,j.Z)([`
      color: `,`;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: 60px 0 20px;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          //margin-bottom: 60px;

          h2 {
            position: relative;
            margin: 0 auto;
            color: `,`;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),s.colorTextSecondary,s.colorBgLayout,v,s.colorTextTertiary,s.colorLinkHover,v,s.contentMaxWidth,s.colorText,s.colorBorderSecondary,D.mobile,v)}}),E=function(){var w=(0,re.HX)(function(se){return se.siteData}),D=w.themeConfig,s=w.pkg,v=(0,re.HX)(ne.BB),F=fe(),J=F.styles,ae=F.theme,H=(0,t.F)(),$=H.mobile;if(!D.footer)return null;var R=D.footerConfig,q=R!=null&&R.columns?R.columns:ie({github:v||s.homepage}),ee=(R==null?void 0:R.bottom)||D.footer,le=(R==null?void 0:R.copyright)||"Copyright \xA9 2022-".concat(new Date().getFullYear());return(0,a.jsx)(Y,{theme:(R==null?void 0:R.theme)||ae.appearance,columns:q,bottom:$?(0,a.jsxs)(z.Z,{className:J.container,children:[le,(0,a.jsx)(i.D,{align:"center",horizontal:!0,dangerouslySetInnerHTML:{__html:ee}})]}):(0,a.jsxs)(z.Z,{horizontal:!0,children:[le,(0,a.jsx)(p.Z,{type:"vertical"}),(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:ee}})]})})},Z=E},98865:function(C,o,e){e.d(o,{Z:function(){return H}});var p=e(17789),t=e(75271),z=e(90142),i=e(71271),x=e(67743),y=e(11729),Q=e(69260),m=e(79229),l=e(73467),n=e(43467),b=e(3341),U=e.n(b),I=e(32699),M=e(55471),f=e(91369),j=e(7519),d=e(88829),L=e(84240),S=e(44006),B,a,V,Y,re,ne,_,T=(0,L.kc)(function($){var R=$.token,q=$.prefixCls,ee=$.cx,le=$.css,se=6;return{rect:le(B||(B=(0,d.Z)([`
      background: `,`;

      width: 100%;
    `])),(0,S.m4)(R.colorBgContainer,.8)),icon:ee("site-burger-icon",le(a||(a=(0,d.Z)([`
        position: relative;

        &,
        &::before,
        &::after {
          display: inline-block;
          height: 2px;
          background: `,`;

          width: 16px;

          transition: all 150ms ease;
        }

        &::before,
        &::after {
          position: absolute;
          left: 0;

          content: '';
        }

        &::before {
          top: `,`px;
        }

        &::after {
          top: -`,`px;
        }
      `])),R.colorTextSecondary,se,se)),active:le(V||(V=(0,d.Z)([`
      &::before,
      &::after {
        background: `,`;
      }
      & {
        background: transparent;
      }

      &::before {
        top: 0;
        transform: rotate(-135deg);
      }

      &::after {
        top: 0;
        transform: rotate(135deg);
      }
    `])),R.colorText),container:le(Y||(Y=(0,d.Z)([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),R.controlHeight,R.controlHeight,R.borderRadius),drawerRoot:le(re||(re=(0,d.Z)([`
      top: `,`px;

      :focus-visible {
        outline: none;
      }

      .`,`-drawer {
        &-mask {
          background: transparent;
          backdrop-filter: blur(7px);
          background: `,`;
        }

        &-content-wrapper {
          box-shadow: none;
        }
      }
    `])),R.headerHeight+1,q,(0,S.m4)(R.colorBgBase,.5)),drawer:le(ne||(ne=(0,d.Z)([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),q,q),menu:le(_||(_=(0,d.Z)([`
      background: transparent;
      border-inline-end: transparent !important;

      > .`,"-menu-item-only-child,.",`-menu-submenu-title {
        background: `,`;
        border-radius: 0;
        margin: 0;
        width: 100%;
        &:active {
          margin-inline: 4px;
          border-radius: `,`px;
        }
      }

      .`,"-menu-sub.",`-menu-inline {
        //background: transparent !important;
        background: `,` !important;
      }
    `])),q,q,(0,S.m4)(R.colorBgContainer,.8),R.borderRadius,q,q,(0,S.m4)(R.colorBgContainer,.2))}}),c=e(52676),N=function(){var R=(0,t.useState)(!1),q=(0,p.Z)(R,2),ee=q[0],le=q[1],se=T(),pe=se.styles,be=se.cx,Ae=(0,f.HX)(function(A){return A.navData},U()),u=(0,f.HX)(function(A){return A.sidebar},U()),r=(0,f.HX)(j.K1),g=(0,f.HX)(function(A){return A.location.pathname});return(0,c.jsxs)(M.Z,{className:pe.container,onClick:function(){le(!ee)},children:[(0,c.jsx)("div",{className:be(pe.icon,ee?pe.active:"")}),(0,c.jsxs)(m.Z,{open:ee,placement:"left",closeIcon:null,rootClassName:pe.drawerRoot,className:pe.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,c.jsx)("div",{style:{height:24},className:pe.rect}),(0,c.jsx)(l.Z,{mode:"inline",selectedKeys:(0,I.uniq)([r,"s-".concat(g)]),openKeys:[r],className:pe.menu,items:Ae.map(function(A){return{label:(0,c.jsx)(n.rU,{to:A.link,children:A.title}),key:A.activePath||A.link,children:(A.activePath||A.link)===r&&(u==null?void 0:u.map(function(te){return!te.link&&{label:te.title,type:"group",children:te.children.map(function(G){return{label:(0,c.jsx)(n.rU,{to:G.link,onClick:function(){le(!1)},children:G.title}),key:"s-".concat(G.link)}})}}))}})}),(0,c.jsx)("div",{style:{flex:1},className:pe.rect})]})]})},X=N,oe=e(97049),ce=e(50518),ie=e(57820),he=e(33631),ve=function(){var R=(0,f.HX)(he.BB);return R?(0,c.jsx)(ce.Z,{arrow:!1,title:"Github",children:(0,c.jsx)("a",{href:R,target:"_blank",rel:"noreferrer",children:(0,c.jsx)(ie.ZP,{icon:(0,c.jsx)(oe.Z,{})})})}):null},fe=(0,t.memo)(ve),E=e(46677),Z=e(36736),h=e(35427),w,D,s,v,F=(0,L.kc)(function($){var R=$.css,q=$.responsive,ee=$.token;return{header:R(w||(w=(0,d.Z)([`
    top: 0;
    position: sticky;
    background-color: transparent;
    backdrop-filter: blur(6px);
    z-index: `,`;
    border-bottom: 1px solid `,`;

    grid-area: head;
    align-self: stretch;

    `,` {
      background: `,`;
    }
  `])),ee.zIndexPopupBase-50,ee.colorSplit,q.mobile,ee.colorBgContainer),content:R(D||(D=(0,d.Z)([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),q.mobile),left:R(s||(s=(0,d.Z)([""]))),right:R(v||(v=(0,d.Z)([`
    flex: 1;
    display: flex;
    justify-content: space-between;

    &-aside {
      display: flex;
      align-items: center;

      `,` {
        margin: 8px 16px;
        padding-top: 24px;
        justify-content: center;
        border-top: 1px solid `,`;
      }
    }
  `])),q.mobile,ee.colorBorder)}}),J=function(){var R=(0,f.HX)(function(pe){return pe.siteData.themeConfig.prefersColor.switch}),q=(0,h.f)(function(pe){return pe.themeMode}),ee=(0,n.OI)(),le=(0,p.Z)(ee,3),se=le[2];return(0,t.useEffect)(function(){return se(q)},[q]),R?(0,c.jsx)(E.Z,{value:q,onChange:function(be){h.f.setState({themeMode:be})}}):null},ae=function(){var R=(0,f.HX)(function(pe){return!!pe.routeMeta.frontmatter}),q=(0,Z.F)(),ee=q.mobile,le=F(),se=le.styles;return R?(0,c.jsx)("div",{className:se.header,children:(0,c.jsx)(z.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:se.content,children:ee?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(z.D,{children:(0,c.jsx)(X,{})}),(0,c.jsx)(z.D,{horizontal:!0,className:se.left,children:(0,c.jsx)(x.Z,{})}),(0,c.jsx)(z.D,{children:(0,c.jsx)(J,{})})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(z.D,{horizontal:!0,className:se.left,children:(0,c.jsx)(x.Z,{})}),(0,c.jsx)(z.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,c.jsx)(y.Z,{})}),(0,c.jsxs)("section",{className:se.right,children:[(0,c.jsx)("div",{}),(0,c.jsxs)(z.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,c.jsx)(Q.ZP,{}),(0,c.jsx)(i.Z,{}),(0,c.jsx)(fe,{}),(0,c.jsx)(J,{})]})]})]})})}):null},H=(0,t.memo)(ae)},11645:function(C,o,e){e.d(o,{Z:function(){return _}});var p=e(94456),t=e(57820),z=e(43467),i=e(90142),x=e(55471),y=e(88829),Q=e(84240),m,l=(0,Q.kc)(function(T){var c=T.css,N=T.stylish;return{button:c(m||(m=(0,y.Z)([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),N.heroButtonGradient,N.heroGradientFlow)}}),n=e(52676),b=function(c){var N=c.children,X=l(),oe=X.styles;return(0,n.jsx)(t.ZP,{size:"large",shape:"round",type:"primary",className:oe.button,children:N})},U=b,I,M,f,j,d,L,S,B=(0,Q.kc)(function(T){var c=T.css,N=T.responsive,X=T.token,oe=T.stylish,ce=T.isDarkMode;return{container:c(I||(I=(0,y.Z)([`
    position: relative;
    text-align: center;
    box-sizing: border-box;

    + * {
      position: relative;
    }

    > p {
      margin: 32px;
      color: `,`;
      font-size: 20px;
      line-height: 1.6;

      `,`
    }
  `])),X.colorTextSecondary,N({mobile:{fontSize:16}})),titleContainer:c(M||(M=(0,y.Z)([`
    position: relative;
  `]))),title:c(f||(f=(0,y.Z)([`
    font-size: 68px;
    z-index: 10;
    color: transparent;
    margin: 0;
    font-family: AliPuHui, `,`;

    `,`

    b {
      position: relative;
      z-index: 5;
      `,`;
      `,`

      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `])),X.fontFamily,N({mobile:{fontSize:40}}),oe.heroGradient,oe.heroGradientFlow),titleShadow:c(j||(j=(0,y.Z)([`
    position: absolute;
    z-index: 0;
    color: `,`;

    top: 0;
    left: 0;
    font-size: 68px;
    font-family: AliPuHui, `,`;
    font-weight: bold;
    `,`

    `,`

    b {
      color: transparent;
    }
  `])),ce?X.colorWhite:X.colorTextBase,X.fontFamily,N({mobile:{fontSize:40}}),oe.heroTextShadow),desc:c(d||(d=(0,y.Z)([`
    font-size: `,`px;
    color: `,`;

    `,` {
      font-size: `,`px;
      margin: 24px 16px;
    }
  `])),X.fontSizeHeading3,X.colorTextSecondary,N.mobile,X.fontSizeHeading5),actions:c(L||(L=(0,y.Z)([`
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,`
  `])),N({mobile:{marginTop:24}})),canvas:c(S||(S=(0,y.Z)([`
    z-index: 10;
    pointer-events: none;
    position: absolute;
    top: -250px;
    left: 50%;
    transform: translateX(-50%) scale(1.5);
    width: 600px;
    height: 400px;
    opacity: 0.2;
    `,`

    `,` {
      width: 200px;
      height: 300px;
    }
  `])),oe.heroBlurBall,N.mobile)}}),a=function(c){var N=c.title,X=c.description,oe=c.actions,ce=B(),ie=ce.styles,he=ce.cx;return(0,n.jsxs)(i.D,{horizontal:!0,distribution:"center",className:ie.container,children:[(0,n.jsx)("div",{className:ie.canvas}),(0,n.jsxs)(x.Z,{children:[N&&(0,n.jsxs)("div",{className:ie.titleContainer,children:[(0,n.jsx)("h1",{className:ie.title,dangerouslySetInnerHTML:{__html:N}}),(0,n.jsx)("div",{className:he(ie.titleShadow),dangerouslySetInnerHTML:{__html:N}})]}),X&&(0,n.jsx)("p",{className:ie.desc,dangerouslySetInnerHTML:{__html:X}}),!!(oe!=null&&oe.length)&&(0,n.jsx)(p.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,n.jsx)(i.D,{horizontal:!0,gap:24,className:ie.actions,children:oe.map(function(ve,fe){var E=ve.text,Z=ve.link,h=ve.openExternal,w=/^(https?:)?\/\//i.test(Z),D=fe===0?(0,n.jsx)(U,{children:E}):(0,n.jsx)(t.ZP,{size:"large",shape:"round",type:"default",children:E});return w?(0,n.jsx)("a",{href:Z,target:"_blank",rel:"noopener noreferrer",children:D},"".concat(E,"-").concat(fe)):(0,n.jsx)(z.rU,{to:Z,target:h?"_blank":void 0,rel:"noreferrer",children:D},E)})})})]})]})},V=a,Y=e(91369),re=e(24427),ne=function(){var c=(0,Y.HX)(re.aH),N=(0,Y.HX)(re.S2),X=(0,Y.HX)(re.Vd);return(0,n.jsx)(V,{title:c,actions:X,description:N})},_=ne},1068:function(C,o,e){var p=e(17789),t=e(57820),z=e(43467),i=e(75271),x=e(72014),y=e(91369),Q=e(52676);function m(I){var M=I.pathname,f=I.current,j=I.target,d="base"in f?M.replace(f.base.replace(/\/$/,""),"")||"/":M.replace(new RegExp("".concat(f.suffix,"$")),"");return"base"in j?"".concat(j.base.replace(/\/$/,"")).concat(d).replace(/([^/])\/$/,"$1"):"".concat(d).concat(j.suffix)}var l={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},n={"zh-CN":"\u4E2D","en-US":"EN"},b=function(M){var f=M.locale,j=M.current,d=(0,z.TH)(),L=d.pathname,S=(0,i.useState)(function(){return m({pathname:L,current:j,target:f})}),B=(0,p.Z)(S,2),a=B[0],V=B[1];return(0,i.useEffect)(function(){V(m({pathname:L,current:j,target:f}))},[L,j.id,f.id]),(0,Q.jsx)(z.rU,{to:a,children:(0,Q.jsx)(t.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:n[f.id]})})},U=function(){var M=(0,y.HX)(function(j){return j.siteData.locales}),f=(0,y.HX)(function(j){return j.locale});return M.length<=1?null:M.length>2?(0,Q.jsx)(x.Z,{value:M.findIndex(function(j){return j.id===f.id}),onChange:function(d){console.log(m({pathname:location.pathname,current:f,target:M[d]})),z.m8.push(m({pathname:location.pathname,current:f,target:M[d]}))},options:M.map(function(j){return{value:j.id,label:n[j.id]}}),renderItem:function(d,L){return"".concat(l[M[L].id]," ").concat(M[L].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,Q.jsx)(b,{locale:M.find(function(j){var d=j.id;return d!==f.id}),current:f})};o.Z=(0,i.memo)(U)},93362:function(C,o,e){e.d(o,{Z:function(){return L}});var p=e(43467),t=e(3341),z=e.n(t),i=e(75271),x=e(13712),y=e(91369),Q=e(16969),m=e(7519),l=e(90978),n=e(33631),b={apiHeader:Q.U,flattenSidebar:m.gt,token:l.H,logo:n.c1},U=e(88829),I=e(84240),M,f=(0,I.kc)(function(S){var B=S.css,a=S.responsive,V=S.token;return B(M||(M=(0,U.Z)([`
    display: inline-flex;
    align-items: center;
    font-family: AliPuHui, `,`;
    color: `,`;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;

    `,` {
      font-size: 18px;
    }
  `])),V.fontFamily,V.colorText,a.mobile)}),j=e(52676),d=function(){var B=(0,y.HX)(function(N){return N.siteData.themeConfig},z()),a=(0,y.HX)(function(N){return N.locale},z()),V=(0,y.HX)(b.logo,x.shallow),Y=f(),re=Y.styles,ne=Y.cx,_=B.name,T=B.hideNameOnHeader,c=T===void 0?!1:T;return B&&(0,j.jsxs)(p.rU,{className:ne(re),to:"base"in a?a.base:"/",children:[!!V&&(0,j.jsx)("img",{src:V,alt:B.name,height:32}),!c&&_]})},L=(0,i.memo)(d)},74873:function(C,o,e){e.d(o,{Z:function(){return j}});var p=e(88829),t=e(3630),z=e(84240),i=e(43467),x=e(75271),y=function(){return x.createElement(x.Fragment,null)},Q=y,m=e(13712),l=e(91369),n=e(7519),b=e(52676),U,I,M=(0,z.kc)(function(d){var L=d.css,S=d.responsive,B=d.token,a=d.stylish,V=d.prefixCls,Y=".".concat(V,"-tabs"),re=16,ne=6;return{tabs:L(U||(U=(0,p.Z)([`
      `,"-tab + ",`-tab {
        margin: `,`px 4px !important;
        padding: 0 12px !important;
      }

      `,`-tab {
        color: `,`;
        transition: background-color 100ms ease-out;

        &:first-child {
          margin: `,"px 4px ",`px 0;
          padding: `,`px 12px !important;
        }

        &:hover {
          color: `,` !important;
          background: `,`;
          border-radius: `,`px;
        }
      }

      `,`-nav {
        margin-bottom: 0;
      }

      `,` {
        display: none;
      }
    `])),Y,Y,re,Y,B.colorTextSecondary,re,re,ne,B.colorText,B.colorFillTertiary,B.borderRadius,Y,S.mobile),link:L(I||(I=(0,p.Z)([`
      `,`
    `])),a.resetLinkColor)}}),f=function(){var L=M(),S=L.styles,B=/^(\w+:)\/\/|^(mailto|tel):/,a=(0,l.HX)(function(Y){return Y.navData},m.shallow),V=(0,l.HX)(n.K1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.Z,{onChange:function(re){var ne,_=(ne=a.find(function(T){return T.activePath===re||T.link===re}))===null||ne===void 0?void 0:ne.link;!_||B.test(_)||i.m8.push(_)},activeKey:V,className:S.tabs,items:a.map(function(Y){return{label:B.test(Y.link||"")?(0,b.jsx)("a",{href:Y.link,className:S.link,target:"_blank",rel:"noreferrer",children:Y.title}):(0,b.jsx)(i.rU,{className:S.link,to:Y.link,children:Y.title}),key:Y.activePath||Y.link}})}),(0,b.jsx)(Q,{})]})},j=(0,x.memo)(f)},28684:function(C,o,e){e.d(o,{ZP:function(){return Ae}});var p=e(17789),t=e(62565),z=e(43467),i=e(75271),x=Object.defineProperty,y=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,l=(u,r,g)=>r in u?x(u,r,{enumerable:!0,configurable:!0,writable:!0,value:g}):u[r]=g,n=(u,r)=>{for(var g in r||(r={}))Q.call(r,g)&&l(u,g,r[g]);if(y)for(var g of y(r))m.call(r,g)&&l(u,g,r[g]);return u};const b=u=>i.createElement("svg",n({viewBox:"0 0 1024 1024"},u),i.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var U="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=",I=function(u,r,g,A){function te(G){return G instanceof g?G:new g(function(k){k(G)})}return new(g||(g=Promise))(function(G,k){function W(K){try{P(A.next(K))}catch(de){k(de)}}function O(K){try{P(A.throw(K))}catch(de){k(de)}}function P(K){K.done?G(K.value):te(K.value).then(W,O)}P((A=A.apply(u,r||[])).next())})};function M(u){let r=0,g=0,A=u;do r+=A.offsetTop||0,g+=A.offsetLeft||0,A=A.offsetParent;while(A);return{top:r,left:g}}class f{constructor(r){this.element=r}getHorizontalScroll(){return this.element.scrollLeft}getVerticalScroll(){return this.element.scrollTop}getMaxHorizontalScroll(){return this.element.scrollWidth-this.element.clientWidth}getMaxVerticalScroll(){return this.element.scrollHeight-this.element.clientHeight}getHorizontalElementScrollOffset(r,g){return M(r).left-M(g).left}getVerticalElementScrollOffset(r,g){return M(r).top-M(g).top}scrollTo(r,g){this.element.scrollLeft=r,this.element.scrollTop=g}}class j{constructor(){this.element=window}getHorizontalScroll(){return window.scrollX||document.documentElement.scrollLeft}getVerticalScroll(){return window.scrollY||document.documentElement.scrollTop}getMaxHorizontalScroll(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth}getMaxVerticalScroll(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight}getHorizontalElementScrollOffset(r){return(window.scrollX||document.documentElement.scrollLeft)+r.getBoundingClientRect().left}getVerticalElementScrollOffset(r){return(window.scrollY||document.documentElement.scrollTop)+r.getBoundingClientRect().top}scrollTo(r,g){window.scrollTo(r,g)}}const d={elements:[],cancelMethods:[],add:(u,r)=>{d.elements.push(u),d.cancelMethods.push(r)},remove:(u,r)=>{const g=d.elements.indexOf(u);g>-1&&(r&&d.cancelMethods[g](),d.elements.splice(g,1),d.cancelMethods.splice(g,1))}},L=typeof window!="undefined",S={cancelOnUserAction:!0,easing:u=>--u*u*u+1,elementToScroll:L?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function B(u,r={}){return I(this,void 0,void 0,function*(){if(L){if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."}else return new Promise(je=>{je(!1)});let g,A,te,G=Object.assign(Object.assign({},S),r);const k=G.elementToScroll===window,W=!!G.elementToScroll.nodeName;if(!k&&!W)throw"Element to scroll needs to be either window or DOM element.";const O=k?document.documentElement:G.elementToScroll;getComputedStyle(O).getPropertyValue("scroll-behavior")==="smooth"&&console.warn(`${O.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);const K=k?new j:new f(G.elementToScroll);if(u instanceof Element){if(te=u,W&&(!G.elementToScroll.contains(te)||G.elementToScroll.isSameNode(te)))throw"options.elementToScroll has to be a parent of scrollToElement";g=K.getHorizontalElementScrollOffset(te,G.elementToScroll),A=K.getVerticalElementScrollOffset(te,G.elementToScroll)}else if(typeof u=="number")g=K.getHorizontalScroll(),A=u;else if(Array.isArray(u)&&u.length===2)g=u[0]===null?K.getHorizontalScroll():u[0],A=u[1]===null?K.getVerticalScroll():u[1];else throw`Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;g+=G.horizontalOffset,A+=G.verticalOffset;const de=K.getMaxHorizontalScroll(),ue=K.getHorizontalScroll();g>de&&(g=de);const ge=g-ue,me=K.getMaxVerticalScroll(),ke=K.getVerticalScroll();A>me&&(A=me);const ye=A-ke,xe=Math.abs(Math.round(ge/1e3*G.speed)),we=Math.abs(Math.round(ye/1e3*G.speed));let Me=xe>we?xe:we;return Me<G.minDuration?Me=G.minDuration:Me>G.maxDuration&&(Me=G.maxDuration),new Promise((je,Te)=>{ge===0&&ye===0&&je(!0),d.remove(K.element,!0);let Se;const He=()=>{Ee(),cancelAnimationFrame(Se),je(!1)};d.add(K.element,He);const Ce=ze=>ze.preventDefault(),Oe=G.cancelOnUserAction?He:Ce,De=G.cancelOnUserAction?{passive:!0}:{passive:!1},Be=["wheel","touchstart","keydown","mousedown"],Ee=()=>{Be.forEach(ze=>{K.element.removeEventListener(ze,Oe,De)})};Be.forEach(ze=>{K.element.addEventListener(ze,Oe,De)});const We=Date.now(),Fe=()=>{var ze=Date.now()-We,Le=ze/Me;const Re=Math.round(ue+ge*G.easing(Le)),Pe=Math.round(ke+ye*G.easing(Le));ze<Me&&(Re!==g||Pe!==A)?(K.scrollTo(Re,Pe),Se=requestAnimationFrame(Fe)):(K.scrollTo(g,A),cancelAnimationFrame(Se),Ee(),d.remove(K.element,!1),je(!0))};Se=requestAnimationFrame(Fe)})})}var a=B;function V(u,r){return T(u)||_(u,r)||re(u,r)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(u,r){if(u){if(typeof u=="string")return ne(u,r);var g=Object.prototype.toString.call(u).slice(8,-1);if(g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set")return Array.from(u);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return ne(u,r)}}function ne(u,r){(r==null||r>u.length)&&(r=u.length);for(var g=0,A=new Array(r);g<r;g++)A[g]=u[g];return A}function _(u,r){var g=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var A,te,G,k,W=[],O=!0,P=!1;try{if(G=(g=g.call(u)).next,r===0){if(Object(g)!==g)return;O=!1}else for(;!(O=(A=G.call(g)).done)&&(W.push(A.value),W.length!==r);O=!0);}catch(K){P=!0,te=K}finally{try{if(!O&&g.return!=null&&(k=g.return(),Object(k)!==k))return}finally{if(P)throw te}}return W}}function T(u){if(Array.isArray(u))return u}var c=function(){return i.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),i.createElement("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),i.createElement("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"}))},N=function(){return i.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"}))},X=function(){return i.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"}))},oe=function(){return i.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"}))},ce={title:c,page:N,content:X,demo:oe},ie=function(r){return i.createElement(i.Fragment,null,r.texts.map(function(g,A){return i.createElement(i.Fragment,{key:A},g.highlighted?i.createElement("mark",null,g.text):g.text)}))},he=function(r){var g=(0,i.useCallback)(function(){var W=0,O=[];return r.forEach(function(P){P.title&&O.push({type:"title",value:{title:P.title}}),P.hints.forEach(function(K){O.push({type:"hint",activeIndex:W++,value:K})})}),[O,W]},[r]),A=(0,i.useState)(g),te=V(A,2),G=te[0],k=te[1];return(0,i.useEffect)(function(){k(g)},[r]),G},ve=function(r){var g=he(r.data),A=V(g,2),te=A[0],G=A[1],k=(0,i.useState)(-1),W=V(k,2),O=W[0],P=W[1],K=(0,z.TH)(),de=K.pathname,ue=function(ke){var ye;(ye=r.onItemSelect)===null||ye===void 0||ye.call(r,ke);var xe=new URL(ke==null?void 0:ke.link,location.origin);(xe==null?void 0:xe.pathname)===de&&!xe.hash&&setTimeout(function(){a(0,{maxDuration:300})},1)};(0,i.useEffect)(function(){var me=function(ye){if(ye.key==="ArrowDown")P((O+1)%G);else if(ye.key==="ArrowUp")P((O+G-1)%G);else if(ye.key==="Enter"&&O>=0){var xe=te.find(function(we){return we.type==="hint"&&we.activeIndex===O}).value;z.m8.push(xe.link),ue==null||ue(xe),document.activeElement.blur()}["Escape","Enter"].includes(ye.key)&&P(-1)};return document.addEventListener("keydown",me),function(){return document.removeEventListener("keydown",me)}});var ge=null;return r.loading?ge=i.createElement("div",{className:"dumi-default-search-empty"},i.createElement(b,null),i.createElement(z._H,{id:"search.loading"})):r.data.length?ge=i.createElement("dl",null,te.map(function(me,ke){return me.type==="title"?i.createElement("dt",{key:String(ke)},me.value.title):i.createElement("dd",{key:String(ke)},i.createElement(z.rU,{to:me.value.link,"data-active":O===me.activeIndex||void 0,onClick:function(){return ue==null?void 0:ue(me.value)}},i.createElement(ce[me.value.type]),i.createElement("h4",null,i.createElement(ie,{texts:me.value.highlightTitleTexts})),i.createElement("p",null,i.createElement(ie,{texts:me.value.highlightTexts}))))})):ge=i.createElement("div",{className:"dumi-default-search-empty"},i.createElement(b,null),i.createElement(z._H,{id:"search.not.found"})),i.createElement("div",{className:"dumi-default-search-result",onMouseEnter:function(){return P(-1)},onMouseDownCapture:function(ke){return ke.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()}},ge)},fe=ve,E=e(52676),Z=(0,i.forwardRef)(function(u,r){var g=(0,z.YB)(),A=(0,i.useRef)(!1),te=(0,i.useRef)(null);return(0,i.useImperativeHandle)(r,function(){return te.current}),(0,E.jsx)("input",{className:u.className,onCompositionStart:function(){return A.current=!0},onCompositionEnd:function(k){A.current=!1,u.onChange(k.currentTarget.value)},onFocus:u.onFocus,onBlur:u.onBlur,onKeyDown:function(k){["ArrowDown","ArrowUp"].includes(k.key)&&k.preventDefault(),k.key==="Escape"&&!A.current&&k.currentTarget.blur()},onChange:function(k){setTimeout(function(){A.current||u.onChange(k.target.value)},1)},placeholder:g.formatMessage({id:"header.search.placeholder"}),ref:te})}),h=e(88829),w=e(84240),D,s,v,F=(0,w.kc)(function(u){var r=u.token,g=u.css;return{modal:g(D||(D=(0,h.Z)([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:g(s||(s=(0,h.Z)([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),r.colorBgMask),content:g(v||(v=(0,h.Z)([`
      position: absolute;
      top: 60px;
      background-color: `,`;
      width: 500px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: inset 1px 1px 0 0 hsla(0deg, 0%, 100%, 50%), 0 3px 8px 0 #555a64;
      border-radius: 8px;
      max-height: calc(100% - 120px);
      display: flex;
      flex-direction: column;
    `])),r.colorBgElevated)}}),J=function(r){var g=F(),A=g.styles;return(0,i.useEffect)(function(){if(r.visible)document.body.style.overflow="hidden";else{var te;document.body.style.overflow="",(te=r.onClose)===null||te===void 0||te.call(r)}},[r.visible]),r.visible?(0,E.jsxs)("div",{className:A.modal,children:[(0,E.jsx)("div",{className:A.mask,onClick:r.onMaskClick}),(0,E.jsx)("div",{className:A.content,children:r.children})]}):null},ae,H,$,R,q,ee=(0,w.kc)(function(u){var r=u.token,g=u.responsive,A=u.css,te=u.cx;return{container:A(ae||(ae=(0,h.Z)([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),g.mobile),shortcut:te("site-header-shortcut",A(H||(H=(0,h.Z)([`
        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        display: inline-block;
        padding: 4px 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        background-color: `,`;
        border-radius: 11px;
        border: 1px solid `,`;
        transform: translateY(-50%);
        transition: all 0.3s;
        pointer-events: none;

        `,` {
          display: none;
        }
      `])),r.colorTextDescription,r.colorFillSecondary,r.colorBorderSecondary,g.mobile)),popover:A($||($=(0,h.Z)([`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;
      display: flex;
      flex-direction: column;
      width: 540px;
      max-height: 460px;
      margin-top: 18px;
      background-color: `,`;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 20%);

      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        inset-inline-end: 100px;
        display: inline-block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
      }

      > section {
        flex: 1;
        min-height: 60px;
        overflow: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        border-radius: inherit;
      }
    `])),r.colorBgElevated),svg:te(A(R||(R=(0,h.Z)([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),r.colorTextPlaceholder)),input:A(q||(q=(0,h.Z)([`
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;
      color: `,`;
      font-size: 14px;
      border: 1px solid `,`;
      border-radius: 20px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.3s;
      background-color: transparent;

      &:focus {
        border-color: `,`;
        background: `,`;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }

      &::-webkit-input-placeholder {
        color: `,`;
      }
    `])),r.controlHeightLG,r.colorTextSecondary,r.colorBorder,r.colorBorderSecondary,r.colorBgElevated,r.colorTextPlaceholder)}}),le,se=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(le=navigator)===null||le===void 0?void 0:le.platform:""),pe=function(r){return["TEXTAREA","INPUT"].includes(r.tagName)||r.contentEditable==="true"},be=function(){var r=ee(),g=r.styles,A=(0,i.useState)(!1),te=(0,p.Z)(A,2),G=te[0],k=te[1],W=(0,i.useRef)(null),O=(0,i.useRef)(null),P=(0,i.useState)("\u2318"),K=(0,p.Z)(P,2),de=K[0],ue=K[1],ge=(0,z.OO)(),me=ge.keywords,ke=ge.setKeywords,ye=ge.result,xe=ge.loading,we=(0,i.useState)(!1),Me=(0,p.Z)(we,2),je=Me[0],Te=Me[1];return(0,i.useEffect)(function(){se||ue("Ctrl");var Se=function(Ce){if(((se?Ce.metaKey:Ce.ctrlKey)&&Ce.key==="k"||Ce.key==="/"&&!pe(Ce.target))&&(Ce.preventDefault(),W.current)){var Oe=W.current.getBoundingClientRect(),De=Oe.top,Be=Oe.bottom,Ee=Oe.left,We=Oe.right,Fe=De>=0&&Ee>=0&&Be<=window.innerHeight&&We<=window.innerWidth;Fe?W.current.focus():(ke(""),Te(!0),setTimeout(function(){var ze;(ze=O.current)===null||ze===void 0||ze.focus()}))}Ce.key==="Escape"&&(Ce.preventDefault(),Te(!1))};return document.addEventListener("keydown",Se),function(){return document.removeEventListener("keydown",Se)}},[]),(0,E.jsxs)("div",{className:g.container,children:[(0,E.jsx)(t.Z,{className:g.svg}),(0,E.jsx)(Z,{onFocus:function(){return k(!0)},onBlur:function(){setTimeout(function(){k(!1)},1)},onChange:function(He){return ke(He)},ref:W,className:g.input}),(0,E.jsxs)("span",{className:g.shortcut,children:[de," K"]}),me.trim()&&G&&(ye.length||!xe)&&!je&&(0,E.jsx)("div",{className:g.popover,children:(0,E.jsx)("section",{children:(0,E.jsx)(fe,{data:ye,loading:xe})})}),(0,E.jsxs)(J,{visible:je,onMaskClick:function(){Te(!1)},onClose:function(){return ke("")},children:[(0,E.jsxs)("div",{style:{position:"relative"},children:[(0,E.jsx)(t.Z,{className:g.svg}),(0,E.jsx)(Z,{className:g.input,onFocus:function(){return k(!0)},onBlur:function(){setTimeout(function(){k(!1)},1)},onChange:function(He){return ke(He)},ref:O})]}),(0,E.jsx)(fe,{data:ye,loading:xe,onItemSelect:function(){Te(!1)}})]})]})},Ae=be},60057:function(C,o,e){e.d(o,{Z:function(){return U}});var p=e(43467),t=e(3341),z=e.n(t),i=e(75271),x=e(91369),y=e(88829),Q=e(84240),m,l=(0,Q.kc)(function(I){var M=I.css,f=I.token;return{sidebar:M(m||(m=(0,y.Z)([`
    grid-area: sidebar;
    overflow: auto;
    position: sticky;
    top: `,`px;
    max-height: calc(100vh - `,`px);
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 24px;
    padding-inline: 16px;
    border-right: 1px solid `,`;

    > dl {
      margin: 0;
      padding: 0;
      line-height: 1;

      > dt {
        margin: 8px 0;
        color: `,`;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
      }

      > dd {
        margin: 0;
        padding: 2px 0;

        > a {
          padding: 6px 12px;
          border-radius: 6px;
          display: block;
          font-size: `,`px;
          line-height: `,`;
          text-decoration: none;
          transition: all 0.1s;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          color: `,`;

          &:hover {
            color: `,`;
            background: `,`;
          }

          &.active {
            color: `,`;
            background: `,`;

            &:hover {
              color: `,`;
              background: `,`;
            }
          }
        }
      }

      // divider line & gap
      + dl {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px dashed `,`;
      }
    }
  `])),f.headerHeight,f.headerHeight,f.colorSplit,f.colorText,f.fontSize,f.lineHeight,f.colorTextSecondary,f.colorText,f.colorFillTertiary,f.colorPrimaryText,f.colorPrimaryBg,f.colorPrimaryTextHover,f.colorPrimaryBgHover,f.colorBorder)}}),n=e(52676),b=function(){var M=(0,x.HX)(function(L){return L.sidebar},z()),f=l(),j=f.styles,d=!M||M.length===0;return d?null:(0,n.jsx)("div",{className:j.sidebar,children:M.map(function(L,S){return(0,n.jsxs)("dl",{children:[L.title&&(0,n.jsx)("dt",{children:L.title}),L.children.map(function(B){return(0,n.jsx)("dd",{children:(0,n.jsx)(p.OL,{to:B.link,title:B.title,end:!0,children:B.title})},B.link)})]},String(S))})})},U=(0,i.memo)(b)},48725:function(C,o,e){e.d(o,{Z:function(){return _}});var p=e(3341),t=e.n(p),z=e(75271),i=e(17789),x=e(21052),y=e(66101),Q=e(94456),m=e(43776),l=e(83728),n=e(36736),b=e(84240),U=e(65720),I=e(88829),M=e(44006),f,j,d,L,S=(0,b.kc)(function(T){var c=T.token,N=T.stylish,X=T.prefixCls,oe=T.responsive,ce=T.css,ie=36;return{container:ce(f||(f=(0,I.Z)([`
      grid-area: toc;
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;
      z-index: 10;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),c.tocWidth,oe.mobile,c.headerHeight+1,c.colorTextDescription),mobileCtn:ce(j||(j=(0,I.Z)([`
      position: sticky;
      top: `,`px;

      height: `,`px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,`;
    `])),c.headerHeight+1,ie,(0,M.m4)(c.colorBgContainer,.8)),expand:ce(d||(d=(0,I.Z)([`
      backdrop-filter: blur(6px);
      border-radius: 0;
      border-bottom: 1px solid `,`;

      box-shadow: `,`;
      width: 100%;
      z-index: 201;
      background: `,`;

      .`,`-collapse-header {
        padding: 8px 16px !important;
      }
    `])),c.colorSplit,c.boxShadowSecondary,(0,M.m4)(c.colorBgContainer,.8),X),anchor:ce(L||(L=(0,I.Z)([`
      `,`
    `])),N.blur)}}),B=e(52676),a=(0,z.memo)(function(T){var c=T.items,N=T.activeKey,X=T.onChange,oe=(0,U.Z)("",{value:N,onChange:X}),ce=(0,i.Z)(oe,2),ie=ce[0],he=ce[1],ve=S(),fe=ve.styles,E=(0,n.F)(),Z=E.mobile,h=(0,b.Fg)(),w=c.find(function(s){return s.id===ie}),D=(0,z.useMemo)(function(){return c.map(function(s){var v;return{href:"#".concat(s.id),title:s.title,key:s.id,children:(v=s.children)===null||v===void 0?void 0:v.map(function(F){return{href:"#".concat(F.id),title:F==null?void 0:F.title,key:F.id}})}})},[c]);return((c==null?void 0:c.length)===0?null:Z?(0,B.jsx)(Q.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,B.jsx)("div",{className:fe.mobileCtn,children:(0,B.jsx)(m.Z,{bordered:!1,ghost:!0,expandIconPosition:"end",expandIcon:function(v){var F=v.isActive;return F?(0,B.jsx)(x.Z,{}):(0,B.jsx)(y.Z,{})},className:fe.expand,children:(0,B.jsx)(m.Z.Panel,{forceRender:!0,header:w?w.title:"\u76EE\u5F55",children:(0,B.jsx)(Q.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,B.jsx)(l.Z,{onChange:function(v){he(v.replace("#",""))},targetOffset:h.headerHeight+12,items:D})})},"toc")})})}):(0,B.jsxs)("div",{className:fe.container,children:[(0,B.jsx)("h4",{children:"Table of Contents"}),(0,B.jsx)(l.Z,{items:D,className:fe.anchor,targetOffset:h.headerHeight+12})]}))||null}),V=a,Y=e(91369),re=e(7519),ne=(0,z.memo)(function(){var T=(0,Y.HX)(re.TL,t());return(0,B.jsx)(V,{items:T})}),_=ne},16969:function(C,o,e){e.d(o,{U:function(){return Q},Y:function(){return x}});var p=e(45222),t=e(32699),z=e.n(t),i=e(33631),x=function(l){var n,b=l.routeMeta.frontmatter;if(l.siteData.themeConfig.apiHeader===!1||b.apiHeader===!1)return!1;if(b.apiHeader)return!0;var U=["/api","/components"].concat((0,p.Z)(((n=l.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return U.some(function(I){return l.location.pathname.startsWith(I)})};function y(m,l){var n={camel:function(){return(0,t.camelCase)(m)},pascal:function(){return(0,t.upperFirst)((0,t.camelCase)(m))},kebab:function(){return(0,t.kebabCase)(m)},snake:function(){return(0,t.snakeCase)(m)},default:function(){return m}};return(n[l]||n.default)()}var Q=function(l){var n,b,U,I,M,f,j,d,L=(0,i.BB)(l),S=((n=l.routeMeta)===null||n===void 0?void 0:n.frontmatter)||{},B=(b=l.locale)===null||b===void 0?void 0:b.id,a=function(fe){if(L)return fe.replace("{github}",L).replace("{atomId}",S.atomId||"").replace(/\{atomId\.([^}]+)}/g,function(E,Z){return y(S.atomId||"",Z)}).replace("{title}",S.title).replace("{locale}",B)},V=function(fe){return fe===!1?!1:typeof fe=="string"},Y=((U=l.siteData)===null||U===void 0||(U=U.themeConfig)===null||U===void 0?void 0:U.apiHeader)||{},re=Y.pkg,ne=re===void 0?(I=l.siteData)===null||I===void 0||(I=I.pkg)===null||I===void 0?void 0:I.name:re,_=Y.sourceUrl,T=Y.docUrl,c=((M=S.apiHeader)===null||M===void 0?void 0:M.pkg)||ne,N=S.atomId||S.title,X=((f=S.apiHeader)===null||f===void 0?void 0:f.defaultImport)||!1,oe=((j=S.apiHeader)===null||j===void 0?void 0:j.sourceUrl)||_,ce=V(oe)?a(oe):void 0,ie=((d=S.apiHeader)===null||d===void 0?void 0:d.docUrl)||T,he=V(ie)?a(ie):void 0;return{title:S.title,description:S.description,pkg:c,defaultImport:X,componentName:N,sourceUrl:ce,docUrl:he}}},24427:function(C,o,e){e.d(o,{D$:function(){return p},S2:function(){return x},SL:function(){return Q},Vd:function(){return y},aH:function(){return i},b0:function(){return t}});var p=function(l){return!!l.routeMeta.frontmatter.hero},t=function(l){var n,b;return!!((n=l.routeMeta.frontmatter.hero)!==null&&n!==void 0&&n.showCustomContent)||!!((b=l.siteData.themeConfig.hero)!==null&&b!==void 0&&b.showCustomContent)},z=function(l,n){if(n)return n[l.locale.id]?n[l.locale.id]:n},i=function(l){var n,b;return((n=l.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((b=z(l,l.siteData.themeConfig.hero))===null||b===void 0?void 0:b.title)||z(l,l.siteData.themeConfig.title)||l.siteData.themeConfig.name},x=function(l){var n,b;return((n=l.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((b=z(l,l.siteData.themeConfig.hero))===null||b===void 0?void 0:b.description)||z(l,l.siteData.themeConfig.description)},y=function(l){var n,b;return((n=l.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((b=z(l,l.siteData.themeConfig.hero))===null||b===void 0?void 0:b.actions)||z(l,l.siteData.themeConfig.actions)},Q=function(l){var n;return p(l)?((n=z(l,l.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||z(l,l.siteData.themeConfig.features)||l.routeMeta.frontmatter.features||[]:[]}},7519:function(C,o,e){e.d(o,{K1:function(){return i},TL:function(){return x},e9:function(){return Q},gt:function(){return y}});var p=e(32041);function t(m,l){var n=Object.keys(m);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(m);l&&(b=b.filter(function(U){return Object.getOwnPropertyDescriptor(m,U).enumerable})),n.push.apply(n,b)}return n}function z(m){for(var l=1;l<arguments.length;l++){var n=arguments[l]!=null?arguments[l]:{};l%2?t(Object(n),!0).forEach(function(b){(0,p.Z)(m,b,n[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(b){Object.defineProperty(m,b,Object.getOwnPropertyDescriptor(n,b))})}return m}var i=function(l){if(l.location.pathname==="/")return"/";var n=l.navData.filter(function(b){return b.link!=="/"}).find(function(b){return l.location.pathname.startsWith(b.activePath||b.link)});return(n==null?void 0:n.activePath)||(n==null?void 0:n.link)||""},x=function(l){var n,b,U=l.routeMeta,I=U.toc,M=U.frontmatter;return(n=l.tabMeta)!==null&&n!==void 0&&n.toc&&(I=l.tabMeta.toc),(b=l.tabMeta)!==null&&b!==void 0&&b.frontmatter&&(M=l.tabMeta.frontmatter),I.reduce(function(f,j){var d=function(B){if(!M.tocDepth||typeof M.tocDepth=="number"&&M.tocDepth>B-1)return!0};if(j.depth===2&&d(2))f.push(z({},j));else if(j.depth===3&&d(3)){var L=f[f.length-1];L&&(L.children=L.children||[],L.children.push(z({},j)))}return f},[])},y=function(l){var n;return((n=l.sidebar)===null||n===void 0?void 0:n.map(function(b){return b.children}).flat())||[]},Q=function(l){var n=y(l),b=l.location.pathname,U=n.findIndex(function(I){return I.link===b});return{prev:n[U-1],currentIndex:U,next:n[U+1]}}},33631:function(C,o,e){e.d(o,{BB:function(){return t},TG:function(){return p},c1:function(){return z}});var p=function(x){return x.siteData.themeConfig.name},t=function(x){var y,Q;return((y=x.siteData.themeConfig)===null||y===void 0||(y=y.socialLinks)===null||y===void 0?void 0:y.github)||((Q=x.siteData.themeConfig)===null||Q===void 0?void 0:Q.github)},z=function(x){var y=x.siteData.themeConfig.logo;return y?(y.startsWith("http"),y):y||""}},90978:function(C,o,e){e.d(o,{H:function(){return z}});var p=e(32699),t=e.n(p),z=function(x){var y=x.routeMeta.frontmatter;return(0,p.merge)({},y.token,x.siteData.themeConfig.siteToken)}},56816:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2b2b2b",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#d4d0ab"},prolog:{color:"#d4d0ab"},doctype:{color:"#d4d0ab"},cdata:{color:"#d4d0ab"},punctuation:{color:"#fefefe"},property:{color:"#ffa07a"},tag:{color:"#ffa07a"},constant:{color:"#ffa07a"},symbol:{color:"#ffa07a"},deleted:{color:"#ffa07a"},boolean:{color:"#00e0e0"},number:{color:"#00e0e0"},selector:{color:"#abe338"},"attr-name":{color:"#abe338"},string:{color:"#abe338"},char:{color:"#abe338"},builtin:{color:"#abe338"},inserted:{color:"#abe338"},operator:{color:"#00e0e0"},entity:{color:"#00e0e0",cursor:"help"},url:{color:"#00e0e0"},".language-css .token.string":{color:"#00e0e0"},".style .token.string":{color:"#00e0e0"},variable:{color:"#00e0e0"},atrule:{color:"#ffd700"},"attr-value":{color:"#ffd700"},function:{color:"#ffd700"},keyword:{color:"#00e0e0"},regex:{color:"#ffd700"},important:{color:"#ffd700",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},32820:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},79819:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#f5f7ff",color:"#5e6687"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#f5f7ff",color:"#5e6687",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"]::selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#dfe2f1"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#898ea4"},prolog:{color:"#898ea4"},doctype:{color:"#898ea4"},cdata:{color:"#898ea4"},punctuation:{color:"#5e6687"},namespace:{Opacity:".7"},operator:{color:"#c76b29"},boolean:{color:"#c76b29"},number:{color:"#c76b29"},property:{color:"#c08b30"},tag:{color:"#3d8fd1"},string:{color:"#22a2c9"},selector:{color:"#6679cc"},"attr-name":{color:"#c76b29"},entity:{color:"#22a2c9",cursor:"help"},url:{color:"#22a2c9"},".language-css .token.string":{color:"#22a2c9"},".style .token.string":{color:"#22a2c9"},"attr-value":{color:"#ac9739"},keyword:{color:"#ac9739"},control:{color:"#ac9739"},directive:{color:"#ac9739"},unit:{color:"#ac9739"},statement:{color:"#22a2c9"},regex:{color:"#22a2c9"},atrule:{color:"#22a2c9"},placeholder:{color:"#3d8fd1"},variable:{color:"#3d8fd1"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #202746",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#c94922"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:"0.4em solid #c94922",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#dfe2f1"},".line-numbers .line-numbers-rows > span:before":{color:"#979db4"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"}};o.default=e},26714:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#fff",textShadow:"0 1px 1px #000",fontFamily:'Menlo, Monaco, "Courier New", monospace',direction:"ltr",textAlign:"left",wordSpacing:"normal",whiteSpace:"pre",wordWrap:"normal",lineHeight:"1.4",background:"none",border:"0",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",textShadow:"0 1px 1px #000",fontFamily:'Menlo, Monaco, "Courier New", monospace',direction:"ltr",textAlign:"left",wordSpacing:"normal",whiteSpace:"pre",wordWrap:"normal",lineHeight:"1.4",background:"#222",border:"0",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"15px",margin:"1em 0",overflow:"auto",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},'pre[class*="language-"] code':{float:"left",padding:"0 15px 0 0"},':not(pre) > code[class*="language-"]':{background:"#222",padding:"5px 10px",lineHeight:"1",MozBorderRadius:"3px",WebkitBorderRadius:"3px",borderRadius:"3px"},comment:{color:"#797979"},prolog:{color:"#797979"},doctype:{color:"#797979"},cdata:{color:"#797979"},selector:{color:"#fff"},operator:{color:"#fff"},punctuation:{color:"#fff"},namespace:{Opacity:".7"},tag:{color:"#ffd893"},boolean:{color:"#ffd893"},atrule:{color:"#B0C975"},"attr-value":{color:"#B0C975"},hex:{color:"#B0C975"},string:{color:"#B0C975"},property:{color:"#c27628"},entity:{color:"#c27628",cursor:"help"},url:{color:"#c27628"},"attr-name":{color:"#c27628"},keyword:{color:"#c27628"},regex:{color:"#9B71C6"},function:{color:"#e5a638"},constant:{color:"#e5a638"},variable:{color:"#fdfba8"},number:{color:"#8799B0"},important:{color:"#E45734"},deliminator:{color:"#E45734"},".line-highlight.line-highlight":{background:"rgba(255, 255, 255, .2)"},".line-highlight.line-highlight:before":{top:".3em",backgroundColor:"rgba(255, 255, 255, .3)",color:"#fff",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},".line-highlight.line-highlight[data-end]:after":{top:".3em",backgroundColor:"rgba(255, 255, 255, .3)",color:"#fff",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},".line-numbers .line-numbers-rows > span":{borderRight:"3px #d9d336 solid"}};o.default=e},82720:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#111b27",background:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#111b27",background:"#e3eaf2",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{background:"#8da1b9"},'pre[class*="language-"] ::-moz-selection':{background:"#8da1b9"},'code[class*="language-"]::-moz-selection':{background:"#8da1b9"},'code[class*="language-"] ::-moz-selection':{background:"#8da1b9"},'pre[class*="language-"]::selection':{background:"#8da1b9"},'pre[class*="language-"] ::selection':{background:"#8da1b9"},'code[class*="language-"]::selection':{background:"#8da1b9"},'code[class*="language-"] ::selection':{background:"#8da1b9"},':not(pre) > code[class*="language-"]':{background:"#e3eaf2",padding:"0.1em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#3c526d"},prolog:{color:"#3c526d"},doctype:{color:"#3c526d"},cdata:{color:"#3c526d"},punctuation:{color:"#111b27"},"delimiter.important":{color:"#006d6d",fontWeight:"inherit"},"selector.parent":{color:"#006d6d"},tag:{color:"#006d6d"},"tag.punctuation":{color:"#006d6d"},"attr-name":{color:"#755f00"},boolean:{color:"#755f00"},"boolean.important":{color:"#755f00"},number:{color:"#755f00"},constant:{color:"#755f00"},"selector.attribute":{color:"#755f00"},"class-name":{color:"#005a8e"},key:{color:"#005a8e"},parameter:{color:"#005a8e"},property:{color:"#005a8e"},"property-access":{color:"#005a8e"},variable:{color:"#005a8e"},"attr-value":{color:"#116b00"},inserted:{color:"#116b00"},color:{color:"#116b00"},"selector.value":{color:"#116b00"},string:{color:"#116b00"},"string.url-link":{color:"#116b00"},builtin:{color:"#af00af"},"keyword-array":{color:"#af00af"},package:{color:"#af00af"},regex:{color:"#af00af"},function:{color:"#7c00aa"},"selector.class":{color:"#7c00aa"},"selector.id":{color:"#7c00aa"},"atrule.rule":{color:"#a04900"},combinator:{color:"#a04900"},keyword:{color:"#a04900"},operator:{color:"#a04900"},"pseudo-class":{color:"#a04900"},"pseudo-element":{color:"#a04900"},selector:{color:"#a04900"},unit:{color:"#a04900"},deleted:{color:"#c22f2e"},important:{color:"#c22f2e",fontWeight:"bold"},"keyword-this":{color:"#005a8e",fontWeight:"bold"},this:{color:"#005a8e",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},entity:{cursor:"help"},".language-markdown .token.title":{color:"#005a8e",fontWeight:"bold"},".language-markdown .token.title .token.punctuation":{color:"#005a8e",fontWeight:"bold"},".language-markdown .token.blockquote.punctuation":{color:"#af00af"},".language-markdown .token.code":{color:"#006d6d"},".language-markdown .token.hr.punctuation":{color:"#005a8e"},".language-markdown .token.url > .token.content":{color:"#116b00"},".language-markdown .token.url-link":{color:"#755f00"},".language-markdown .token.list.punctuation":{color:"#af00af"},".language-markdown .token.table-header":{color:"#111b27"},".language-json .token.operator":{color:"#111b27"},".language-scss .token.variable":{color:"#006d6d"},"token.tab:not(:empty):before":{color:"#3c526d"},"token.cr:before":{color:"#3c526d"},"token.lf:before":{color:"#3c526d"},"token.space:before":{color:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{color:"#e3eaf2",background:"#005a8e"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{color:"#e3eaf2",background:"#005a8e"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{color:"#e3eaf2",background:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{color:"#e3eaf2",background:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{color:"#e3eaf2",background:"#3c526d"},".line-highlight.line-highlight":{background:"linear-gradient(to right, #8da1b92f 70%, #8da1b925)"},".line-highlight.line-highlight:before":{backgroundColor:"#3c526d",color:"#e3eaf2",boxShadow:"0 1px #8da1b9"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"#3c526d",color:"#e3eaf2",boxShadow:"0 1px #8da1b9"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"#3c526d1f"},".line-numbers.line-numbers .line-numbers-rows":{borderRight:"1px solid #8da1b97a",background:"#d0dae77a"},".line-numbers .line-numbers-rows > span:before":{color:"#3c526dda"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"#7c00aa"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"#7c00aa"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"#7c00aa"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"#c22f2e1f"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"#c22f2e1f"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"#116b001f"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"#116b001f"},".command-line .command-line-prompt":{borderRight:"1px solid #8da1b97a"},".command-line .command-line-prompt > span:before":{color:"#3c526dda"}};o.default=e},47083:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#e3eaf2",background:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#e3eaf2",background:"#111b27",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{background:"#3c526d"},'pre[class*="language-"] ::-moz-selection':{background:"#3c526d"},'code[class*="language-"]::-moz-selection':{background:"#3c526d"},'code[class*="language-"] ::-moz-selection':{background:"#3c526d"},'pre[class*="language-"]::selection':{background:"#3c526d"},'pre[class*="language-"] ::selection':{background:"#3c526d"},'code[class*="language-"]::selection':{background:"#3c526d"},'code[class*="language-"] ::selection':{background:"#3c526d"},':not(pre) > code[class*="language-"]':{background:"#111b27",padding:"0.1em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#8da1b9"},prolog:{color:"#8da1b9"},doctype:{color:"#8da1b9"},cdata:{color:"#8da1b9"},punctuation:{color:"#e3eaf2"},"delimiter.important":{color:"#66cccc",fontWeight:"inherit"},"selector.parent":{color:"#66cccc"},tag:{color:"#66cccc"},"tag.punctuation":{color:"#66cccc"},"attr-name":{color:"#e6d37a"},boolean:{color:"#e6d37a"},"boolean.important":{color:"#e6d37a"},number:{color:"#e6d37a"},constant:{color:"#e6d37a"},"selector.attribute":{color:"#e6d37a"},"class-name":{color:"#6cb8e6"},key:{color:"#6cb8e6"},parameter:{color:"#6cb8e6"},property:{color:"#6cb8e6"},"property-access":{color:"#6cb8e6"},variable:{color:"#6cb8e6"},"attr-value":{color:"#91d076"},inserted:{color:"#91d076"},color:{color:"#91d076"},"selector.value":{color:"#91d076"},string:{color:"#91d076"},"string.url-link":{color:"#91d076"},builtin:{color:"#f4adf4"},"keyword-array":{color:"#f4adf4"},package:{color:"#f4adf4"},regex:{color:"#f4adf4"},function:{color:"#c699e3"},"selector.class":{color:"#c699e3"},"selector.id":{color:"#c699e3"},"atrule.rule":{color:"#e9ae7e"},combinator:{color:"#e9ae7e"},keyword:{color:"#e9ae7e"},operator:{color:"#e9ae7e"},"pseudo-class":{color:"#e9ae7e"},"pseudo-element":{color:"#e9ae7e"},selector:{color:"#e9ae7e"},unit:{color:"#e9ae7e"},deleted:{color:"#cd6660"},important:{color:"#cd6660",fontWeight:"bold"},"keyword-this":{color:"#6cb8e6",fontWeight:"bold"},this:{color:"#6cb8e6",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},entity:{cursor:"help"},".language-markdown .token.title":{color:"#6cb8e6",fontWeight:"bold"},".language-markdown .token.title .token.punctuation":{color:"#6cb8e6",fontWeight:"bold"},".language-markdown .token.blockquote.punctuation":{color:"#f4adf4"},".language-markdown .token.code":{color:"#66cccc"},".language-markdown .token.hr.punctuation":{color:"#6cb8e6"},".language-markdown .token.url .token.content":{color:"#91d076"},".language-markdown .token.url-link":{color:"#e6d37a"},".language-markdown .token.list.punctuation":{color:"#f4adf4"},".language-markdown .token.table-header":{color:"#e3eaf2"},".language-json .token.operator":{color:"#e3eaf2"},".language-scss .token.variable":{color:"#66cccc"},"token.tab:not(:empty):before":{color:"#8da1b9"},"token.cr:before":{color:"#8da1b9"},"token.lf:before":{color:"#8da1b9"},"token.space:before":{color:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{color:"#111b27",background:"#6cb8e6"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{color:"#111b27",background:"#6cb8e6"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{color:"#111b27",background:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{color:"#111b27",background:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{color:"#111b27",background:"#8da1b9"},".line-highlight.line-highlight":{background:"linear-gradient(to right, #3c526d5f 70%, #3c526d55)"},".line-highlight.line-highlight:before":{backgroundColor:"#8da1b9",color:"#111b27",boxShadow:"0 1px #3c526d"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"#8da1b9",color:"#111b27",boxShadow:"0 1px #3c526d"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"#8da1b918"},".line-numbers.line-numbers .line-numbers-rows":{borderRight:"1px solid #0b121b",background:"#0b121b7a"},".line-numbers .line-numbers-rows > span:before":{color:"#8da1b9da"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"#c699e3"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"#c699e3"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"#c699e3"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"#cd66601f"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"#cd66601f"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"#91d0761f"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"#91d0761f"},".command-line .command-line-prompt":{borderRight:"1px solid #0b121b"},".command-line .command-line-prompt > span:before":{color:"#8da1b9da"}};o.default=e},15110:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0 0 0 #358ccb, 0 0 0 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local",margin:".5em 0",padding:"0 1em"},'pre[class*="language-"] > code':{display:"block"},':not(pre) > code[class*="language-"]':{position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:".7"}};o.default=e},92825:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",maxHeight:"inherit",height:"inherit",padding:"0 1em",display:"block",overflow:"auto"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",margin:".5em 0",overflow:"visible",padding:"1px",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em"},'pre[class*="language-"] > code':{position:"relative",zIndex:"1",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em",position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal"},'pre[class*="language-"]:before':{content:"''",display:"block",position:"absolute",bottom:"0.75em",left:"0.18em",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(-2deg)",MozTransform:"rotate(-2deg)",msTransform:"rotate(-2deg)",OTransform:"rotate(-2deg)",transform:"rotate(-2deg)"},'pre[class*="language-"]:after':{content:"''",display:"block",position:"absolute",bottom:"0.75em",left:"auto",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)",right:"0.75em"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:".7"},'pre[class*="language-"].line-numbers.line-numbers':{paddingLeft:"0"},'pre[class*="language-"].line-numbers.line-numbers code':{paddingLeft:"3.8em"},'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows':{left:"0"},'pre[class*="language-"][data-line]':{paddingTop:"0",paddingBottom:"0",paddingLeft:"0"},"pre[data-line] code":{position:"relative",paddingLeft:"4em"},"pre .line-highlight":{marginTop:"0"}};o.default=e},12022:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag.punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value.punctuation":{color:"#a5c261"},"attr-value.punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}};o.default=e},21678:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"white",background:"none",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",background:"hsl(30, 20%, 25%)",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:".3em solid hsl(30, 20%, 40%)",borderRadius:".5em",boxShadow:"1px 1px .5em black inset"},':not(pre) > code[class*="language-"]':{background:"hsl(30, 20%, 25%)",padding:".15em .2em .05em",borderRadius:".3em",border:".13em solid hsl(30, 20%, 40%)",boxShadow:"1px 1px .3em -.1em black inset",whiteSpace:"normal"},comment:{color:"hsl(30, 20%, 50%)"},prolog:{color:"hsl(30, 20%, 50%)"},doctype:{color:"hsl(30, 20%, 50%)"},cdata:{color:"hsl(30, 20%, 50%)"},punctuation:{Opacity:".7"},namespace:{Opacity:".7"},property:{color:"hsl(350, 40%, 70%)"},tag:{color:"hsl(350, 40%, 70%)"},boolean:{color:"hsl(350, 40%, 70%)"},number:{color:"hsl(350, 40%, 70%)"},constant:{color:"hsl(350, 40%, 70%)"},symbol:{color:"hsl(350, 40%, 70%)"},selector:{color:"hsl(75, 70%, 60%)"},"attr-name":{color:"hsl(75, 70%, 60%)"},string:{color:"hsl(75, 70%, 60%)"},char:{color:"hsl(75, 70%, 60%)"},builtin:{color:"hsl(75, 70%, 60%)"},inserted:{color:"hsl(75, 70%, 60%)"},operator:{color:"hsl(40, 90%, 60%)"},entity:{color:"hsl(40, 90%, 60%)",cursor:"help"},url:{color:"hsl(40, 90%, 60%)"},".language-css .token.string":{color:"hsl(40, 90%, 60%)"},".style .token.string":{color:"hsl(40, 90%, 60%)"},variable:{color:"hsl(40, 90%, 60%)"},atrule:{color:"hsl(350, 40%, 70%)"},"attr-value":{color:"hsl(350, 40%, 70%)"},keyword:{color:"hsl(350, 40%, 70%)"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},deleted:{color:"red"}};o.default=e},93487:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#282a36",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#282a36",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#6272a4"},prolog:{color:"#6272a4"},doctype:{color:"#6272a4"},cdata:{color:"#6272a4"},punctuation:{color:"#f8f8f2"},".namespace":{Opacity:".7"},property:{color:"#ff79c6"},tag:{color:"#ff79c6"},constant:{color:"#ff79c6"},symbol:{color:"#ff79c6"},deleted:{color:"#ff79c6"},boolean:{color:"#bd93f9"},number:{color:"#bd93f9"},selector:{color:"#50fa7b"},"attr-name":{color:"#50fa7b"},string:{color:"#50fa7b"},char:{color:"#50fa7b"},builtin:{color:"#50fa7b"},inserted:{color:"#50fa7b"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#f1fa8c"},"attr-value":{color:"#f1fa8c"},function:{color:"#f1fa8c"},"class-name":{color:"#f1fa8c"},keyword:{color:"#8be9fd"},regex:{color:"#ffb86c"},important:{color:"#ffb86c",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},39946:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#6c6783"},prolog:{color:"#6c6783"},doctype:{color:"#6c6783"},cdata:{color:"#6c6783"},punctuation:{color:"#6c6783"},namespace:{Opacity:".7"},tag:{color:"#e09142"},operator:{color:"#e09142"},number:{color:"#e09142"},property:{color:"#9a86fd"},function:{color:"#9a86fd"},"tag-id":{color:"#eeebff"},selector:{color:"#eeebff"},"atrule-id":{color:"#eeebff"},"code.language-javascript":{color:"#c4b9fe"},"attr-name":{color:"#c4b9fe"},"code.language-css":{color:"#ffcc99"},"code.language-scss":{color:"#ffcc99"},boolean:{color:"#ffcc99"},string:{color:"#ffcc99"},entity:{color:"#ffcc99",cursor:"help"},url:{color:"#ffcc99"},".language-css .token.string":{color:"#ffcc99"},".language-scss .token.string":{color:"#ffcc99"},".style .token.string":{color:"#ffcc99"},"attr-value":{color:"#ffcc99"},keyword:{color:"#ffcc99"},control:{color:"#ffcc99"},directive:{color:"#ffcc99"},unit:{color:"#ffcc99"},statement:{color:"#ffcc99"},regex:{color:"#ffcc99"},atrule:{color:"#ffcc99"},placeholder:{color:"#ffcc99"},variable:{color:"#ffcc99"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #eeebff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#c4b9fe"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #8a75f5",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#2c2937"},".line-numbers .line-numbers-rows > span:before":{color:"#3c3949"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"}};o.default=e},94146:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#322d29",color:"#88786d"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#322d29",color:"#88786d",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"]::selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#6f5849"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#6a5f58"},prolog:{color:"#6a5f58"},doctype:{color:"#6a5f58"},cdata:{color:"#6a5f58"},punctuation:{color:"#6a5f58"},namespace:{Opacity:".7"},tag:{color:"#bfa05a"},operator:{color:"#bfa05a"},number:{color:"#bfa05a"},property:{color:"#88786d"},function:{color:"#88786d"},"tag-id":{color:"#fff3eb"},selector:{color:"#fff3eb"},"atrule-id":{color:"#fff3eb"},"code.language-javascript":{color:"#a48774"},"attr-name":{color:"#a48774"},"code.language-css":{color:"#fcc440"},"code.language-scss":{color:"#fcc440"},boolean:{color:"#fcc440"},string:{color:"#fcc440"},entity:{color:"#fcc440",cursor:"help"},url:{color:"#fcc440"},".language-css .token.string":{color:"#fcc440"},".language-scss .token.string":{color:"#fcc440"},".style .token.string":{color:"#fcc440"},"attr-value":{color:"#fcc440"},keyword:{color:"#fcc440"},control:{color:"#fcc440"},directive:{color:"#fcc440"},unit:{color:"#fcc440"},statement:{color:"#fcc440"},regex:{color:"#fcc440"},atrule:{color:"#fcc440"},placeholder:{color:"#fcc440"},variable:{color:"#fcc440"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #fff3eb",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#a48774"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #816d5f",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#35302b"},".line-numbers .line-numbers-rows > span:before":{color:"#46403d"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"}};o.default=e},86384:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2d2a",color:"#687d68"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2d2a",color:"#687d68",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#435643"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#435643"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#435643"},'code[class*="language-"]::selection':{textShadow:"none",background:"#435643"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#435643"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#535f53"},prolog:{color:"#535f53"},doctype:{color:"#535f53"},cdata:{color:"#535f53"},punctuation:{color:"#535f53"},namespace:{Opacity:".7"},tag:{color:"#a2b34d"},operator:{color:"#a2b34d"},number:{color:"#a2b34d"},property:{color:"#687d68"},function:{color:"#687d68"},"tag-id":{color:"#f0fff0"},selector:{color:"#f0fff0"},"atrule-id":{color:"#f0fff0"},"code.language-javascript":{color:"#b3d6b3"},"attr-name":{color:"#b3d6b3"},"code.language-css":{color:"#e5fb79"},"code.language-scss":{color:"#e5fb79"},boolean:{color:"#e5fb79"},string:{color:"#e5fb79"},entity:{color:"#e5fb79",cursor:"help"},url:{color:"#e5fb79"},".language-css .token.string":{color:"#e5fb79"},".language-scss .token.string":{color:"#e5fb79"},".style .token.string":{color:"#e5fb79"},"attr-value":{color:"#e5fb79"},keyword:{color:"#e5fb79"},control:{color:"#e5fb79"},directive:{color:"#e5fb79"},unit:{color:"#e5fb79"},statement:{color:"#e5fb79"},regex:{color:"#e5fb79"},atrule:{color:"#e5fb79"},placeholder:{color:"#e5fb79"},variable:{color:"#e5fb79"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #f0fff0",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#b3d6b3"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #5c705c",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#2c302c"},".line-numbers .line-numbers-rows > span:before":{color:"#3b423b"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"}};o.default=e},44338:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#b6ad9a"},prolog:{color:"#b6ad9a"},doctype:{color:"#b6ad9a"},cdata:{color:"#b6ad9a"},punctuation:{color:"#b6ad9a"},namespace:{Opacity:".7"},tag:{color:"#063289"},operator:{color:"#063289"},number:{color:"#063289"},property:{color:"#b29762"},function:{color:"#b29762"},"tag-id":{color:"#2d2006"},selector:{color:"#2d2006"},"atrule-id":{color:"#2d2006"},"code.language-javascript":{color:"#896724"},"attr-name":{color:"#896724"},"code.language-css":{color:"#728fcb"},"code.language-scss":{color:"#728fcb"},boolean:{color:"#728fcb"},string:{color:"#728fcb"},entity:{color:"#728fcb",cursor:"help"},url:{color:"#728fcb"},".language-css .token.string":{color:"#728fcb"},".language-scss .token.string":{color:"#728fcb"},".style .token.string":{color:"#728fcb"},"attr-value":{color:"#728fcb"},keyword:{color:"#728fcb"},control:{color:"#728fcb"},directive:{color:"#728fcb"},unit:{color:"#728fcb"},statement:{color:"#728fcb"},regex:{color:"#728fcb"},atrule:{color:"#728fcb"},placeholder:{color:"#93abdc"},variable:{color:"#93abdc"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #2d2006",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#896724"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #896724",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#ece8de"},".line-numbers .line-numbers-rows > span:before":{color:"#cdc4b1"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"}};o.default=e},14633:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#1d262f",color:"#57718e"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#1d262f",color:"#57718e",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"]::selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#004a9e"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#4a5f78"},prolog:{color:"#4a5f78"},doctype:{color:"#4a5f78"},cdata:{color:"#4a5f78"},punctuation:{color:"#4a5f78"},namespace:{Opacity:".7"},tag:{color:"#0aa370"},operator:{color:"#0aa370"},number:{color:"#0aa370"},property:{color:"#57718e"},function:{color:"#57718e"},"tag-id":{color:"#ebf4ff"},selector:{color:"#ebf4ff"},"atrule-id":{color:"#ebf4ff"},"code.language-javascript":{color:"#7eb6f6"},"attr-name":{color:"#7eb6f6"},"code.language-css":{color:"#47ebb4"},"code.language-scss":{color:"#47ebb4"},boolean:{color:"#47ebb4"},string:{color:"#47ebb4"},entity:{color:"#47ebb4",cursor:"help"},url:{color:"#47ebb4"},".language-css .token.string":{color:"#47ebb4"},".language-scss .token.string":{color:"#47ebb4"},".style .token.string":{color:"#47ebb4"},"attr-value":{color:"#47ebb4"},keyword:{color:"#47ebb4"},control:{color:"#47ebb4"},directive:{color:"#47ebb4"},unit:{color:"#47ebb4"},statement:{color:"#47ebb4"},regex:{color:"#47ebb4"},atrule:{color:"#47ebb4"},placeholder:{color:"#47ebb4"},variable:{color:"#47ebb4"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #ebf4ff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#7eb6f6"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #34659d",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#1f2932"},".line-numbers .line-numbers-rows > span:before":{color:"#2c3847"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"}};o.default=e},93262:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#24242e",color:"#767693"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#24242e",color:"#767693",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"]::selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#5151e6"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#5b5b76"},prolog:{color:"#5b5b76"},doctype:{color:"#5b5b76"},cdata:{color:"#5b5b76"},punctuation:{color:"#5b5b76"},namespace:{Opacity:".7"},tag:{color:"#dd672c"},operator:{color:"#dd672c"},number:{color:"#dd672c"},property:{color:"#767693"},function:{color:"#767693"},"tag-id":{color:"#ebebff"},selector:{color:"#ebebff"},"atrule-id":{color:"#ebebff"},"code.language-javascript":{color:"#aaaaca"},"attr-name":{color:"#aaaaca"},"code.language-css":{color:"#fe8c52"},"code.language-scss":{color:"#fe8c52"},boolean:{color:"#fe8c52"},string:{color:"#fe8c52"},entity:{color:"#fe8c52",cursor:"help"},url:{color:"#fe8c52"},".language-css .token.string":{color:"#fe8c52"},".language-scss .token.string":{color:"#fe8c52"},".style .token.string":{color:"#fe8c52"},"attr-value":{color:"#fe8c52"},keyword:{color:"#fe8c52"},control:{color:"#fe8c52"},directive:{color:"#fe8c52"},unit:{color:"#fe8c52"},statement:{color:"#fe8c52"},regex:{color:"#fe8c52"},atrule:{color:"#fe8c52"},placeholder:{color:"#fe8c52"},variable:{color:"#fe8c52"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #ebebff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#aaaaca"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #7676f4",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#262631"},".line-numbers .line-numbers-rows > span:before":{color:"#393949"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"}};o.default=e},84917:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"black",color:"white",boxShadow:"-.3em 0 0 .3em black, .3em 0 0 .3em black"},'pre[class*="language-"]':{fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:".4em .8em",margin:".5em 0",overflow:"auto",background:`url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>')`,backgroundSize:"1em 1em"},':not(pre) > code[class*="language-"]':{padding:".2em",borderRadius:".3em",boxShadow:"none",whiteSpace:"normal"},comment:{color:"#aaa"},prolog:{color:"#aaa"},doctype:{color:"#aaa"},cdata:{color:"#aaa"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#0cf"},tag:{color:"#0cf"},boolean:{color:"#0cf"},number:{color:"#0cf"},constant:{color:"#0cf"},symbol:{color:"#0cf"},selector:{color:"yellow"},"attr-name":{color:"yellow"},string:{color:"yellow"},char:{color:"yellow"},builtin:{color:"yellow"},operator:{color:"yellowgreen"},entity:{color:"yellowgreen",cursor:"help"},url:{color:"yellowgreen"},".language-css .token.string":{color:"yellowgreen"},variable:{color:"yellowgreen"},inserted:{color:"yellowgreen"},atrule:{color:"deeppink"},"attr-value":{color:"deeppink"},keyword:{color:"deeppink"},regex:{color:"orange"},important:{color:"orange",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},deleted:{color:"red"},"pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix)":{backgroundColor:"rgba(255, 0, 0, .3)",display:"inline"},"pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix)":{backgroundColor:"rgba(255, 0, 0, .3)",display:"inline"},"pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix)":{backgroundColor:"rgba(0, 255, 128, .3)",display:"inline"},"pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix)":{backgroundColor:"rgba(0, 255, 128, .3)",display:"inline"}};o.default=e},90887:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:"1px solid #dddddd",backgroundColor:"white"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{background:"#b3d4fc"},'pre[class*="language-"]::selection':{background:"#b3d4fc"},'pre[class*="language-"] ::selection':{background:"#b3d4fc"},'code[class*="language-"]::selection':{background:"#b3d4fc"},'code[class*="language-"] ::selection':{background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{padding:".2em",paddingTop:"1px",paddingBottom:"1px",background:"#f8f8f8",border:"1px solid #dddddd"},comment:{color:"#999988",fontStyle:"italic"},prolog:{color:"#999988",fontStyle:"italic"},doctype:{color:"#999988",fontStyle:"italic"},cdata:{color:"#999988",fontStyle:"italic"},namespace:{Opacity:".7"},string:{color:"#e3116c"},"attr-value":{color:"#e3116c"},punctuation:{color:"#393A34"},operator:{color:"#393A34"},entity:{color:"#36acaa"},url:{color:"#36acaa"},symbol:{color:"#36acaa"},number:{color:"#36acaa"},boolean:{color:"#36acaa"},variable:{color:"#36acaa"},constant:{color:"#36acaa"},property:{color:"#36acaa"},regex:{color:"#36acaa"},inserted:{color:"#36acaa"},atrule:{color:"#00a4db"},keyword:{color:"#00a4db"},"attr-name":{color:"#00a4db"},".language-autohotkey .token.selector":{color:"#00a4db"},function:{color:"#9a050f",fontWeight:"bold"},deleted:{color:"#9a050f"},".language-autohotkey .token.tag":{color:"#9a050f"},tag:{color:"#00009f"},selector:{color:"#00009f"},".language-autohotkey .token.keyword":{color:"#00009f"},important:{fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},99295:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#ebdbb2",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ebdbb2",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#1d2021"},'pre[class*="language-"]::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"] ::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"]::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"] ::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"]::selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"] ::selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"]::selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"] ::selection':{color:"#fbf1c7",background:"#7c6f64"},':not(pre) > code[class*="language-"]':{background:"#1d2021",padding:"0.1em",borderRadius:"0.3em"},comment:{color:"#a89984"},prolog:{color:"#a89984"},cdata:{color:"#a89984"},delimiter:{color:"#fb4934"},boolean:{color:"#fb4934"},keyword:{color:"#fb4934"},selector:{color:"#fb4934"},important:{color:"#fb4934"},atrule:{color:"#fb4934"},operator:{color:"#a89984"},punctuation:{color:"#a89984"},"attr-name":{color:"#a89984"},tag:{color:"#fabd2f"},"tag.punctuation":{color:"#fabd2f"},doctype:{color:"#fabd2f"},builtin:{color:"#fabd2f"},entity:{color:"#d3869b"},number:{color:"#d3869b"},symbol:{color:"#d3869b"},property:{color:"#fb4934"},constant:{color:"#fb4934"},variable:{color:"#fb4934"},string:{color:"#b8bb26"},char:{color:"#b8bb26"},"attr-value":{color:"#a89984"},"attr-value.punctuation":{color:"#a89984"},url:{color:"#b8bb26",textDecoration:"underline"},function:{color:"#fabd2f"},regex:{background:"#b8bb26"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#a89984"},deleted:{background:"#fb4934"}};o.default=e},83324:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#3c3836",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#3c3836",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#f9f5d7"},'pre[class*="language-"]::-moz-selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"] ::-moz-selection':{color:"#282828",background:"#a89984"},'code[class*="language-"]::-moz-selection':{color:"#282828",background:"#a89984"},'code[class*="language-"] ::-moz-selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"]::selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"] ::selection':{color:"#282828",background:"#a89984"},'code[class*="language-"]::selection':{color:"#282828",background:"#a89984"},'code[class*="language-"] ::selection':{color:"#282828",background:"#a89984"},':not(pre) > code[class*="language-"]':{background:"#f9f5d7",padding:"0.1em",borderRadius:"0.3em"},comment:{color:"#7c6f64"},prolog:{color:"#7c6f64"},cdata:{color:"#7c6f64"},delimiter:{color:"#9d0006"},boolean:{color:"#9d0006"},keyword:{color:"#9d0006"},selector:{color:"#9d0006"},important:{color:"#9d0006"},atrule:{color:"#9d0006"},operator:{color:"#7c6f64"},punctuation:{color:"#7c6f64"},"attr-name":{color:"#7c6f64"},tag:{color:"#b57614"},"tag.punctuation":{color:"#b57614"},doctype:{color:"#b57614"},builtin:{color:"#b57614"},entity:{color:"#8f3f71"},number:{color:"#8f3f71"},symbol:{color:"#8f3f71"},property:{color:"#9d0006"},constant:{color:"#9d0006"},variable:{color:"#9d0006"},string:{color:"#797403"},char:{color:"#797403"},"attr-value":{color:"#7c6f64"},"attr-value.punctuation":{color:"#7c6f64"},url:{color:"#797403",textDecoration:"underline"},function:{color:"#b57614"},regex:{background:"#797403"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#7c6f64"},deleted:{background:"#9d0006"}};o.default=e},85603:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={"code[class*='language-']":{color:"#d6e7ff",background:"#030314",textShadow:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:"1em",lineHeight:"1.5",letterSpacing:".2px",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",textAlign:"left",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},"pre[class*='language-']":{color:"#d6e7ff",background:"#030314",textShadow:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:"1em",lineHeight:"1.5",letterSpacing:".2px",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",textAlign:"left",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",border:"1px solid #2a4555",borderRadius:"5px",padding:"1.5em 1em",margin:"1em 0",overflow:"auto"},"pre[class*='language-']::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-'] ::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-']::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-'] ::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-']::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-'] ::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-']::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-'] ::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},":not(pre) > code[class*='language-']":{color:"#f0f6f6",background:"#2a4555",padding:"0.2em 0.3em",borderRadius:"0.2em",boxDecorationBreak:"clone"},comment:{color:"#446e69"},prolog:{color:"#446e69"},doctype:{color:"#446e69"},cdata:{color:"#446e69"},punctuation:{color:"#d6b007"},property:{color:"#d6e7ff"},tag:{color:"#d6e7ff"},boolean:{color:"#d6e7ff"},number:{color:"#d6e7ff"},constant:{color:"#d6e7ff"},symbol:{color:"#d6e7ff"},deleted:{color:"#d6e7ff"},selector:{color:"#e60067"},"attr-name":{color:"#e60067"},builtin:{color:"#e60067"},inserted:{color:"#e60067"},string:{color:"#49c6ec"},char:{color:"#49c6ec"},operator:{color:"#ec8e01",background:"transparent"},entity:{color:"#ec8e01",background:"transparent"},url:{color:"#ec8e01",background:"transparent"},".language-css .token.string":{color:"#ec8e01",background:"transparent"},".style .token.string":{color:"#ec8e01",background:"transparent"},atrule:{color:"#0fe468"},"attr-value":{color:"#0fe468"},keyword:{color:"#0fe468"},function:{color:"#78f3e9"},"class-name":{color:"#78f3e9"},regex:{color:"#d6e7ff"},important:{color:"#d6e7ff"},variable:{color:"#d6e7ff"}};o.default=e},19764:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{fontFamily:'"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',fontSize:"16px",lineHeight:"1.375",direction:"ltr",textAlign:"left",wordSpacing:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",background:"#322931",color:"#b9b5b8"},'pre[class*="language-"]':{fontFamily:'"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',fontSize:"16px",lineHeight:"1.375",direction:"ltr",textAlign:"left",wordSpacing:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",background:"#322931",color:"#b9b5b8",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#797379"},prolog:{color:"#797379"},doctype:{color:"#797379"},cdata:{color:"#797379"},punctuation:{color:"#b9b5b8"},".namespace":{Opacity:".7"},null:{color:"#fd8b19"},operator:{color:"#fd8b19"},boolean:{color:"#fd8b19"},number:{color:"#fd8b19"},property:{color:"#fdcc59"},tag:{color:"#1290bf"},string:{color:"#149b93"},selector:{color:"#c85e7c"},"attr-name":{color:"#fd8b19"},entity:{color:"#149b93",cursor:"help"},url:{color:"#149b93"},".language-css .token.string":{color:"#149b93"},".style .token.string":{color:"#149b93"},"attr-value":{color:"#8fc13e"},keyword:{color:"#8fc13e"},control:{color:"#8fc13e"},directive:{color:"#8fc13e"},unit:{color:"#8fc13e"},statement:{color:"#149b93"},regex:{color:"#149b93"},atrule:{color:"#149b93"},placeholder:{color:"#1290bf"},variable:{color:"#1290bf"},important:{color:"#dd464c",fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid red",OutlineOffset:".4em"}};o.default=e},35475:function(C,o,e){var p,t=e(50827);p={value:!0},p={enumerable:!0,get:function(){return b.default}},p={enumerable:!0,get:function(){return U.default}},p={enumerable:!0,get:function(){return I.default}},p={enumerable:!0,get:function(){return M.default}},p={enumerable:!0,get:function(){return f.default}},p={enumerable:!0,get:function(){return j.default}},p={enumerable:!0,get:function(){return z.default}},p={enumerable:!0,get:function(){return d.default}},p={enumerable:!0,get:function(){return L.default}},p={enumerable:!0,get:function(){return i.default}},p={enumerable:!0,get:function(){return S.default}},p={enumerable:!0,get:function(){return B.default}},p={enumerable:!0,get:function(){return a.default}},p={enumerable:!0,get:function(){return V.default}},p={enumerable:!0,get:function(){return Y.default}},p={enumerable:!0,get:function(){return re.default}},p={enumerable:!0,get:function(){return ne.default}},p={enumerable:!0,get:function(){return x.default}},p={enumerable:!0,get:function(){return _.default}},p={enumerable:!0,get:function(){return T.default}},p={enumerable:!0,get:function(){return c.default}},p={enumerable:!0,get:function(){return N.default}},p={enumerable:!0,get:function(){return X.default}},p={enumerable:!0,get:function(){return oe.default}},p={enumerable:!0,get:function(){return ce.default}},p={enumerable:!0,get:function(){return ie.default}},p={enumerable:!0,get:function(){return he.default}},p={enumerable:!0,get:function(){return ve.default}},p={enumerable:!0,get:function(){return fe.default}},p={enumerable:!0,get:function(){return y.default}},p={enumerable:!0,get:function(){return E.default}},p={enumerable:!0,get:function(){return Z.default}},p={enumerable:!0,get:function(){return h.default}},p={enumerable:!0,get:function(){return n.default}},p={enumerable:!0,get:function(){return w.default}},p={enumerable:!0,get:function(){return D.default}},p={enumerable:!0,get:function(){return Q.default}},p={enumerable:!0,get:function(){return s.default}},p={enumerable:!0,get:function(){return m.default}},p={enumerable:!0,get:function(){return l.default}},Object.defineProperty(o,"vs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(o,"YC",{enumerable:!0,get:function(){return F.default}}),p={enumerable:!0,get:function(){return J.default}},p={enumerable:!0,get:function(){return ae.default}};var z=t(e(92825)),i=t(e(21678)),x=t(e(84917)),y=t(e(63437)),Q=t(e(64773)),m=t(e(38527)),l=t(e(35711)),n=t(e(51921)),b=t(e(56816)),U=t(e(32820)),I=t(e(79819)),M=t(e(26714)),f=t(e(82720)),j=t(e(47083)),d=t(e(15110)),L=t(e(12022)),S=t(e(93487)),B=t(e(39946)),a=t(e(94146)),V=t(e(86384)),Y=t(e(44338)),re=t(e(14633)),ne=t(e(93262)),_=t(e(90887)),T=t(e(99295)),c=t(e(83324)),N=t(e(85603)),X=t(e(19764)),oe=t(e(77227)),ce=t(e(53902)),ie=t(e(71511)),he=t(e(93854)),ve=t(e(79932)),fe=t(e(10123)),E=t(e(80656)),Z=t(e(10794)),h=t(e(2403)),w=t(e(88771)),D=t(e(99154)),s=t(e(42669)),v=t(e(76916)),F=t(e(61029)),J=t(e(57250)),ae=t(e(35341))},77227:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#263E52",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#263E52",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#5c98cd"},prolog:{color:"#5c98cd"},doctype:{color:"#5c98cd"},cdata:{color:"#5c98cd"},punctuation:{color:"#f8f8f2"},".namespace":{Opacity:".7"},property:{color:"#F05E5D"},tag:{color:"#F05E5D"},constant:{color:"#F05E5D"},symbol:{color:"#F05E5D"},deleted:{color:"#F05E5D"},boolean:{color:"#BC94F9"},number:{color:"#BC94F9"},selector:{color:"#FCFCD6"},"attr-name":{color:"#FCFCD6"},string:{color:"#FCFCD6"},char:{color:"#FCFCD6"},builtin:{color:"#FCFCD6"},inserted:{color:"#FCFCD6"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#66D8EF"},"attr-value":{color:"#66D8EF"},function:{color:"#66D8EF"},"class-name":{color:"#66D8EF"},keyword:{color:"#6EB26E"},regex:{color:"#F05E5D"},important:{color:"#F05E5D",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},53902:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#eee",background:"#2f2f2f",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#eee",background:"#2f2f2f",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#363636"},'pre[class*="language-"]::-moz-selection':{background:"#363636"},'code[class*="language-"] ::-moz-selection':{background:"#363636"},'pre[class*="language-"] ::-moz-selection':{background:"#363636"},'code[class*="language-"]::selection':{background:"#363636"},'pre[class*="language-"]::selection':{background:"#363636"},'code[class*="language-"] ::selection':{background:"#363636"},'pre[class*="language-"] ::selection':{background:"#363636"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#fd9170"},".language-sass > code":{color:"#fd9170"},".language-scss > code":{color:"#fd9170"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#c792ea"},"attr-name":{color:"#ffcb6b"},"attr-value":{color:"#a5e844"},attribute:{color:"#a5e844"},boolean:{color:"#c792ea"},builtin:{color:"#ffcb6b"},cdata:{color:"#80cbc4"},char:{color:"#80cbc4"},class:{color:"#ffcb6b"},"class-name":{color:"#f2ff00"},comment:{color:"#616161"},constant:{color:"#c792ea"},deleted:{color:"#ff6666"},doctype:{color:"#616161"},entity:{color:"#ff6666"},function:{color:"#c792ea"},hexcode:{color:"#f2ff00"},id:{color:"#c792ea",fontWeight:"bold"},important:{color:"#c792ea",fontWeight:"bold"},inserted:{color:"#80cbc4"},keyword:{color:"#c792ea"},number:{color:"#fd9170"},operator:{color:"#89ddff"},prolog:{color:"#616161"},property:{color:"#80cbc4"},"pseudo-class":{color:"#a5e844"},"pseudo-element":{color:"#a5e844"},punctuation:{color:"#89ddff"},regex:{color:"#f2ff00"},selector:{color:"#ff6666"},string:{color:"#a5e844"},symbol:{color:"#c792ea"},tag:{color:"#ff6666"},unit:{color:"#fd9170"},url:{color:"#ff6666"},variable:{color:"#ff6666"}};o.default=e},71511:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#90a4ae",background:"#fafafa",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#90a4ae",background:"#fafafa",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"]::-moz-selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"] ::-moz-selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"] ::-moz-selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"]::selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"]::selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"] ::selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"] ::selection':{background:"#cceae7",color:"#263238"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#f76d47"},".language-sass > code":{color:"#f76d47"},".language-scss > code":{color:"#f76d47"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#7c4dff"},"attr-name":{color:"#39adb5"},"attr-value":{color:"#f6a434"},attribute:{color:"#f6a434"},boolean:{color:"#7c4dff"},builtin:{color:"#39adb5"},cdata:{color:"#39adb5"},char:{color:"#39adb5"},class:{color:"#39adb5"},"class-name":{color:"#6182b8"},comment:{color:"#aabfc9"},constant:{color:"#7c4dff"},deleted:{color:"#e53935"},doctype:{color:"#aabfc9"},entity:{color:"#e53935"},function:{color:"#7c4dff"},hexcode:{color:"#f76d47"},id:{color:"#7c4dff",fontWeight:"bold"},important:{color:"#7c4dff",fontWeight:"bold"},inserted:{color:"#39adb5"},keyword:{color:"#7c4dff"},number:{color:"#f76d47"},operator:{color:"#39adb5"},prolog:{color:"#aabfc9"},property:{color:"#39adb5"},"pseudo-class":{color:"#f6a434"},"pseudo-element":{color:"#f6a434"},punctuation:{color:"#39adb5"},regex:{color:"#6182b8"},selector:{color:"#e53935"},string:{color:"#f6a434"},symbol:{color:"#7c4dff"},tag:{color:"#e53935"},unit:{color:"#f76d47"},url:{color:"#e53935"},variable:{color:"#e53935"}};o.default=e},93854:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#c3cee3",background:"#263238",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#c3cee3",background:"#263238",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#363636"},'pre[class*="language-"]::-moz-selection':{background:"#363636"},'code[class*="language-"] ::-moz-selection':{background:"#363636"},'pre[class*="language-"] ::-moz-selection':{background:"#363636"},'code[class*="language-"]::selection':{background:"#363636"},'pre[class*="language-"]::selection':{background:"#363636"},'code[class*="language-"] ::selection':{background:"#363636"},'pre[class*="language-"] ::selection':{background:"#363636"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#fd9170"},".language-sass > code":{color:"#fd9170"},".language-scss > code":{color:"#fd9170"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#c792ea"},"attr-name":{color:"#ffcb6b"},"attr-value":{color:"#c3e88d"},attribute:{color:"#c3e88d"},boolean:{color:"#c792ea"},builtin:{color:"#ffcb6b"},cdata:{color:"#80cbc4"},char:{color:"#80cbc4"},class:{color:"#ffcb6b"},"class-name":{color:"#f2ff00"},color:{color:"#f2ff00"},comment:{color:"#546e7a"},constant:{color:"#c792ea"},deleted:{color:"#f07178"},doctype:{color:"#546e7a"},entity:{color:"#f07178"},function:{color:"#c792ea"},hexcode:{color:"#f2ff00"},id:{color:"#c792ea",fontWeight:"bold"},important:{color:"#c792ea",fontWeight:"bold"},inserted:{color:"#80cbc4"},keyword:{color:"#c792ea",fontStyle:"italic"},number:{color:"#fd9170"},operator:{color:"#89ddff"},prolog:{color:"#546e7a"},property:{color:"#80cbc4"},"pseudo-class":{color:"#c3e88d"},"pseudo-element":{color:"#c3e88d"},punctuation:{color:"#89ddff"},regex:{color:"#f2ff00"},selector:{color:"#f07178"},string:{color:"#c3e88d"},symbol:{color:"#c792ea"},tag:{color:"#f07178"},unit:{color:"#f07178"},url:{color:"#fd9170"},variable:{color:"#f07178"}};o.default=e},79932:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#d6deeb",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",fontSize:"1em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",fontSize:"1em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#011627"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},':not(pre) > code[class*="language-"]':{color:"white",background:"#011627",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"rgb(99, 119, 119)",fontStyle:"italic"},prolog:{color:"rgb(99, 119, 119)",fontStyle:"italic"},cdata:{color:"rgb(99, 119, 119)",fontStyle:"italic"},punctuation:{color:"rgb(199, 146, 234)"},".namespace":{color:"rgb(178, 204, 214)"},deleted:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"},symbol:{color:"rgb(128, 203, 196)"},property:{color:"rgb(128, 203, 196)"},tag:{color:"rgb(127, 219, 202)"},operator:{color:"rgb(127, 219, 202)"},keyword:{color:"rgb(127, 219, 202)"},boolean:{color:"rgb(255, 88, 116)"},number:{color:"rgb(247, 140, 108)"},constant:{color:"rgb(130, 170, 255)"},function:{color:"rgb(130, 170, 255)"},builtin:{color:"rgb(130, 170, 255)"},char:{color:"rgb(130, 170, 255)"},selector:{color:"rgb(199, 146, 234)",fontStyle:"italic"},doctype:{color:"rgb(199, 146, 234)",fontStyle:"italic"},"attr-name":{color:"rgb(173, 219, 103)",fontStyle:"italic"},inserted:{color:"rgb(173, 219, 103)",fontStyle:"italic"},string:{color:"rgb(173, 219, 103)"},url:{color:"rgb(173, 219, 103)"},entity:{color:"rgb(173, 219, 103)"},".language-css .token.string":{color:"rgb(173, 219, 103)"},".style .token.string":{color:"rgb(173, 219, 103)"},"class-name":{color:"rgb(255, 203, 139)"},atrule:{color:"rgb(255, 203, 139)"},"attr-value":{color:"rgb(255, 203, 139)"},regex:{color:"rgb(214, 222, 235)"},important:{color:"rgb(214, 222, 235)",fontWeight:"bold"},variable:{color:"rgb(214, 222, 235)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},10123:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:`"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2E3440",fontFamily:`"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2E3440",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#636f88"},prolog:{color:"#636f88"},doctype:{color:"#636f88"},cdata:{color:"#636f88"},punctuation:{color:"#81A1C1"},".namespace":{Opacity:".7"},property:{color:"#81A1C1"},tag:{color:"#81A1C1"},constant:{color:"#81A1C1"},symbol:{color:"#81A1C1"},deleted:{color:"#81A1C1"},number:{color:"#B48EAD"},boolean:{color:"#81A1C1"},selector:{color:"#A3BE8C"},"attr-name":{color:"#A3BE8C"},string:{color:"#A3BE8C"},char:{color:"#A3BE8C"},builtin:{color:"#A3BE8C"},inserted:{color:"#A3BE8C"},operator:{color:"#81A1C1"},entity:{color:"#81A1C1",cursor:"help"},url:{color:"#81A1C1"},".language-css .token.string":{color:"#81A1C1"},".style .token.string":{color:"#81A1C1"},variable:{color:"#81A1C1"},atrule:{color:"#88C0D0"},"attr-value":{color:"#88C0D0"},function:{color:"#88C0D0"},"class-name":{color:"#88C0D0"},keyword:{color:"#81A1C1"},regex:{color:"#EBCB8B"},important:{color:"#EBCB8B",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},63437:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#272822",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#272822",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#8292a2"},prolog:{color:"#8292a2"},doctype:{color:"#8292a2"},cdata:{color:"#8292a2"},punctuation:{color:"#f8f8f2"},namespace:{Opacity:".7"},property:{color:"#f92672"},tag:{color:"#f92672"},constant:{color:"#f92672"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},boolean:{color:"#ae81ff"},number:{color:"#ae81ff"},selector:{color:"#a6e22e"},"attr-name":{color:"#a6e22e"},string:{color:"#a6e22e"},char:{color:"#a6e22e"},builtin:{color:"#a6e22e"},inserted:{color:"#a6e22e"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#e6db74"},"attr-value":{color:"#e6db74"},function:{color:"#e6db74"},"class-name":{color:"#e6db74"},keyword:{color:"#66d9ef"},regex:{color:"#fd971f"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},80656:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"]::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},prolog:{color:"hsl(220, 10%, 40%)"},cdata:{color:"hsl(220, 10%, 40%)"},doctype:{color:"hsl(220, 14%, 71%)"},punctuation:{color:"hsl(220, 14%, 71%)"},entity:{color:"hsl(220, 14%, 71%)",cursor:"help"},"attr-name":{color:"hsl(29, 54%, 61%)"},"class-name":{color:"hsl(29, 54%, 61%)"},boolean:{color:"hsl(29, 54%, 61%)"},constant:{color:"hsl(29, 54%, 61%)"},number:{color:"hsl(29, 54%, 61%)"},atrule:{color:"hsl(29, 54%, 61%)"},keyword:{color:"hsl(286, 60%, 67%)"},property:{color:"hsl(355, 65%, 65%)"},tag:{color:"hsl(355, 65%, 65%)"},symbol:{color:"hsl(355, 65%, 65%)"},deleted:{color:"hsl(355, 65%, 65%)"},important:{color:"hsl(355, 65%, 65%)"},selector:{color:"hsl(95, 38%, 62%)"},string:{color:"hsl(95, 38%, 62%)"},char:{color:"hsl(95, 38%, 62%)"},builtin:{color:"hsl(95, 38%, 62%)"},inserted:{color:"hsl(95, 38%, 62%)"},regex:{color:"hsl(95, 38%, 62%)"},"attr-value":{color:"hsl(95, 38%, 62%)"},"attr-value > .token.punctuation":{color:"hsl(95, 38%, 62%)"},variable:{color:"hsl(207, 82%, 66%)"},operator:{color:"hsl(207, 82%, 66%)"},function:{color:"hsl(207, 82%, 66%)"},url:{color:"hsl(187, 47%, 55%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(220, 14%, 71%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(220, 14%, 71%)"},".language-css .token.selector":{color:"hsl(355, 65%, 65%)"},".language-css .token.property":{color:"hsl(220, 14%, 71%)"},".language-css .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.string.url":{color:"hsl(95, 38%, 62%)"},".language-css .token.important":{color:"hsl(286, 60%, 67%)"},".language-css .token.atrule .token.rule":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.operator":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(5, 48%, 51%)"},".language-json .token.operator":{color:"hsl(220, 14%, 71%)"},".language-json .token.null.keyword":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.url":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.operator":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.content":{color:"hsl(207, 82%, 66%)"},".language-markdown .token.url > .token.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.url-reference.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(95, 38%, 62%)"},".language-markdown .token.bold .token.content":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.italic .token.content":{color:"hsl(286, 60%, 67%)"},".language-markdown .token.strike .token.content":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.list.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(355, 65%, 65%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.cr:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.lf:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.space:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},".line-highlight.line-highlight":{background:"hsla(220, 100%, 80%, 0.04)"},".line-highlight.line-highlight:before":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(220, 100%, 80%, 0.04)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".command-line .command-line-prompt":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(220, 14%, 45%)"},".command-line .command-line-prompt > span:before":{color:"hsl(220, 14%, 45%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(286, 60%, 67%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(224, 13%, 17%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(224, 13%, 17%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(224, 13%, 17%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(224, 13%, 17%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(219, 13%, 22%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(220, 14%, 71%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(220, 14%, 71%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(220, 14%, 71%)"}};o.default=e},10794:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"]::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},prolog:{color:"hsl(230, 4%, 64%)"},cdata:{color:"hsl(230, 4%, 64%)"},doctype:{color:"hsl(230, 8%, 24%)"},punctuation:{color:"hsl(230, 8%, 24%)"},entity:{color:"hsl(230, 8%, 24%)",cursor:"help"},"attr-name":{color:"hsl(35, 99%, 36%)"},"class-name":{color:"hsl(35, 99%, 36%)"},boolean:{color:"hsl(35, 99%, 36%)"},constant:{color:"hsl(35, 99%, 36%)"},number:{color:"hsl(35, 99%, 36%)"},atrule:{color:"hsl(35, 99%, 36%)"},keyword:{color:"hsl(301, 63%, 40%)"},property:{color:"hsl(5, 74%, 59%)"},tag:{color:"hsl(5, 74%, 59%)"},symbol:{color:"hsl(5, 74%, 59%)"},deleted:{color:"hsl(5, 74%, 59%)"},important:{color:"hsl(5, 74%, 59%)"},selector:{color:"hsl(119, 34%, 47%)"},string:{color:"hsl(119, 34%, 47%)"},char:{color:"hsl(119, 34%, 47%)"},builtin:{color:"hsl(119, 34%, 47%)"},inserted:{color:"hsl(119, 34%, 47%)"},regex:{color:"hsl(119, 34%, 47%)"},"attr-value":{color:"hsl(119, 34%, 47%)"},"attr-value > .token.punctuation":{color:"hsl(119, 34%, 47%)"},variable:{color:"hsl(221, 87%, 60%)"},operator:{color:"hsl(221, 87%, 60%)"},function:{color:"hsl(221, 87%, 60%)"},url:{color:"hsl(198, 99%, 37%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(230, 8%, 24%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(230, 8%, 24%)"},".language-css .token.selector":{color:"hsl(5, 74%, 59%)"},".language-css .token.property":{color:"hsl(230, 8%, 24%)"},".language-css .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.string.url":{color:"hsl(119, 34%, 47%)"},".language-css .token.important":{color:"hsl(301, 63%, 40%)"},".language-css .token.atrule .token.rule":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.operator":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(344, 84%, 43%)"},".language-json .token.operator":{color:"hsl(230, 8%, 24%)"},".language-json .token.null.keyword":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.url":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.operator":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.content":{color:"hsl(221, 87%, 60%)"},".language-markdown .token.url > .token.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.url-reference.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(119, 34%, 47%)"},".language-markdown .token.bold .token.content":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.italic .token.content":{color:"hsl(301, 63%, 40%)"},".language-markdown .token.strike .token.content":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.list.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(5, 74%, 59%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.cr:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.lf:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.space:before":{color:"hsla(230, 8%, 24%, 0.2)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},".line-highlight.line-highlight":{background:"hsla(230, 8%, 24%, 0.05)"},".line-highlight.line-highlight:before":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(230, 8%, 24%, 0.05)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".command-line .command-line-prompt":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(230, 1%, 62%)"},".command-line .command-line-prompt > span:before":{color:"hsl(230, 1%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(301, 63%, 40%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(0, 0, 95%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(0, 0, 95%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(0, 0, 95%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(0, 0, 95%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(0, 0%, 100%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(230, 8%, 24%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(230, 8%, 24%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(230, 8%, 24%)"}};o.default=e},2403:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"15px",lineHeight:"1.5",color:"#dccf8f",textShadow:"0"},'pre[class*="language-"]':{MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"15px",lineHeight:"1.5",color:"#DCCF8F",textShadow:"0",borderRadius:"5px",border:"1px solid #000",background:"#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",padding:"12px",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{borderRadius:"5px",border:"1px solid #000",color:"#DCCF8F",background:"#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",padding:"2px 6px"},namespace:{Opacity:".7"},comment:{color:"#586e75",fontStyle:"italic"},prolog:{color:"#586e75",fontStyle:"italic"},doctype:{color:"#586e75",fontStyle:"italic"},cdata:{color:"#586e75",fontStyle:"italic"},number:{color:"#b89859"},string:{color:"#468966"},char:{color:"#468966"},builtin:{color:"#468966"},inserted:{color:"#468966"},"attr-name":{color:"#b89859"},operator:{color:"#dccf8f"},entity:{color:"#dccf8f",cursor:"help"},url:{color:"#dccf8f"},".language-css .token.string":{color:"#dccf8f"},".style .token.string":{color:"#dccf8f"},selector:{color:"#859900"},regex:{color:"#859900"},atrule:{color:"#cb4b16"},keyword:{color:"#cb4b16"},"attr-value":{color:"#468966"},function:{color:"#b58900"},variable:{color:"#b58900"},placeholder:{color:"#b58900"},property:{color:"#b89859"},tag:{color:"#ffb03b"},boolean:{color:"#b89859"},constant:{color:"#b89859"},symbol:{color:"#b89859"},important:{color:"#dc322f"},statement:{color:"#dc322f"},deleted:{color:"#dc322f"},punctuation:{color:"#dccf8f"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},51921:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},88771:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={"code[class*='language-']":{color:"#9efeff",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",fontFamily:"'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontWeight:"400",fontSize:"17px",lineHeight:"25px",letterSpacing:"0.5px",textShadow:"0 1px #222245"},"pre[class*='language-']":{color:"#9efeff",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",fontFamily:"'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontWeight:"400",fontSize:"17px",lineHeight:"25px",letterSpacing:"0.5px",textShadow:"0 1px #222245",padding:"2em",margin:"0.5em 0",overflow:"auto",background:"#1e1e3f"},"pre[class*='language-']::-moz-selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-'] ::-moz-selection":{color:"inherit",background:"#a599e9"},"code[class*='language-']::-moz-selection":{color:"inherit",background:"#a599e9"},"code[class*='language-'] ::-moz-selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-']::selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-'] ::selection":{color:"inherit",background:"#a599e9"},"code[class*='language-']::selection":{color:"inherit",background:"#a599e9"},"code[class*='language-'] ::selection":{color:"inherit",background:"#a599e9"},":not(pre) > code[class*='language-']":{background:"#1e1e3f",padding:"0.1em",borderRadius:"0.3em"},"":{fontWeight:"400"},comment:{color:"#b362ff"},prolog:{color:"#b362ff"},cdata:{color:"#b362ff"},delimiter:{color:"#ff9d00"},keyword:{color:"#ff9d00"},selector:{color:"#ff9d00"},important:{color:"#ff9d00"},atrule:{color:"#ff9d00"},operator:{color:"rgb(255, 180, 84)",background:"none"},"attr-name":{color:"rgb(255, 180, 84)"},punctuation:{color:"#ffffff"},boolean:{color:"rgb(255, 98, 140)"},tag:{color:"rgb(255, 157, 0)"},"tag.punctuation":{color:"rgb(255, 157, 0)"},doctype:{color:"rgb(255, 157, 0)"},builtin:{color:"rgb(255, 157, 0)"},entity:{color:"#6897bb",background:"none"},symbol:{color:"#6897bb"},number:{color:"#ff628c"},property:{color:"#ff628c"},constant:{color:"#ff628c"},variable:{color:"#ff628c"},string:{color:"#a5ff90"},char:{color:"#a5ff90"},"attr-value":{color:"#a5c261"},"attr-value.punctuation":{color:"#a5c261"},"attr-value.punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline",background:"none"},function:{color:"rgb(250, 208, 0)"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#00ff00"},deleted:{background:"#ff000d"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"},"class-name":{color:"#fb94ff"},".language-css .token.string":{background:"none"},".style .token.string":{background:"none"},".line-highlight.line-highlight":{marginTop:"36px",background:"linear-gradient(to right, rgba(179, 98, 255, 0.17), transparent)"},".line-highlight.line-highlight:before":{content:"''"},".line-highlight.line-highlight[data-end]:after":{content:"''"}};o.default=e},99154:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#839496",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#839496",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#002b36"},':not(pre) > code[class*="language-"]':{background:"#002b36",padding:".1em",borderRadius:".3em"},comment:{color:"#586e75"},prolog:{color:"#586e75"},doctype:{color:"#586e75"},cdata:{color:"#586e75"},punctuation:{color:"#93a1a1"},".namespace":{Opacity:".7"},property:{color:"#268bd2"},keyword:{color:"#268bd2"},tag:{color:"#268bd2"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#b58900"},constant:{color:"#b58900"},symbol:{color:"#dc322f"},deleted:{color:"#dc322f"},number:{color:"#859900"},selector:{color:"#859900"},"attr-name":{color:"#859900"},string:{color:"#859900"},char:{color:"#859900"},builtin:{color:"#859900"},inserted:{color:"#859900"},variable:{color:"#268bd2"},operator:{color:"#EDEDED"},function:{color:"#268bd2"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"}};o.default=e},64773:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#657b83",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#657b83",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",backgroundColor:"#fdf6e3"},'pre[class*="language-"]::-moz-selection':{background:"#073642"},'pre[class*="language-"] ::-moz-selection':{background:"#073642"},'code[class*="language-"]::-moz-selection':{background:"#073642"},'code[class*="language-"] ::-moz-selection':{background:"#073642"},'pre[class*="language-"]::selection':{background:"#073642"},'pre[class*="language-"] ::selection':{background:"#073642"},'code[class*="language-"]::selection':{background:"#073642"},'code[class*="language-"] ::selection':{background:"#073642"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdf6e3",padding:".1em",borderRadius:".3em"},comment:{color:"#93a1a1"},prolog:{color:"#93a1a1"},doctype:{color:"#93a1a1"},cdata:{color:"#93a1a1"},punctuation:{color:"#586e75"},namespace:{Opacity:".7"},property:{color:"#268bd2"},tag:{color:"#268bd2"},boolean:{color:"#268bd2"},number:{color:"#268bd2"},constant:{color:"#268bd2"},symbol:{color:"#268bd2"},deleted:{color:"#268bd2"},selector:{color:"#2aa198"},"attr-name":{color:"#2aa198"},string:{color:"#2aa198"},char:{color:"#2aa198"},builtin:{color:"#2aa198"},url:{color:"#2aa198"},inserted:{color:"#2aa198"},entity:{color:"#657b83",background:"#eee8d5",cursor:"help"},atrule:{color:"#859900"},"attr-value":{color:"#859900"},keyword:{color:"#859900"},function:{color:"#b58900"},"class-name":{color:"#b58900"},regex:{color:"#cb4b16"},important:{color:"#cb4b16",fontWeight:"bold"},variable:{color:"#cb4b16"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e},42669:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",backgroundColor:"transparent !important",backgroundImage:"linear-gradient(to bottom, #2a2139 75%, #34294f)"},':not(pre) > code[class*="language-"]':{backgroundColor:"transparent !important",backgroundImage:"linear-gradient(to bottom, #2a2139 75%, #34294f)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#8e8e8e"},"block-comment":{color:"#8e8e8e"},prolog:{color:"#8e8e8e"},doctype:{color:"#8e8e8e"},cdata:{color:"#8e8e8e"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},number:{color:"#e2777a"},unit:{color:"#e2777a"},hexcode:{color:"#e2777a"},deleted:{color:"#e2777a"},property:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"},selector:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"},"function-name":{color:"#6196cc"},boolean:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},"selector.id":{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},function:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},"class-name":{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"},constant:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},symbol:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},important:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",fontWeight:"bold"},atrule:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},keyword:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},"selector.class":{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},builtin:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},string:{color:"#f87c32"},char:{color:"#f87c32"},"attr-value":{color:"#f87c32"},regex:{color:"#f87c32"},variable:{color:"#f87c32"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}};o.default=e},38527:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#ccc",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ccc",background:"#2d2d2d",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{background:"#2d2d2d",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#999"},"block-comment":{color:"#999"},prolog:{color:"#999"},doctype:{color:"#999"},cdata:{color:"#999"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},deleted:{color:"#e2777a"},"function-name":{color:"#6196cc"},boolean:{color:"#f08d49"},number:{color:"#f08d49"},function:{color:"#f08d49"},property:{color:"#f8c555"},"class-name":{color:"#f8c555"},constant:{color:"#f8c555"},symbol:{color:"#f8c555"},selector:{color:"#cc99cd"},important:{color:"#cc99cd",fontWeight:"bold"},atrule:{color:"#cc99cd"},keyword:{color:"#cc99cd"},builtin:{color:"#cc99cd"},string:{color:"#7ec699"},char:{color:"#7ec699"},"attr-value":{color:"#7ec699"},regex:{color:"#7ec699"},variable:{color:"#7ec699"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}};o.default=e},35711:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"white",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",textShadow:"0 -.1em .2em black",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",background:"hsl(0, 0%, 8%)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",textShadow:"0 -.1em .2em black",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",borderRadius:".5em",border:".3em solid hsl(0, 0%, 33%)",boxShadow:"1px 1px .5em black inset",margin:".5em 0",overflow:"auto",padding:"1em"},':not(pre) > code[class*="language-"]':{background:"hsl(0, 0%, 8%)",borderRadius:".3em",border:".13em solid hsl(0, 0%, 33%)",boxShadow:"1px 1px .3em -.1em black inset",padding:".15em .2em .05em",whiteSpace:"normal"},'pre[class*="language-"]::-moz-selection':{background:"hsla(0, 0%, 93%, 0.15)",textShadow:"none"},'pre[class*="language-"]::selection':{background:"hsla(0, 0%, 93%, 0.15)",textShadow:"none"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"]::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},comment:{color:"hsl(0, 0%, 47%)"},prolog:{color:"hsl(0, 0%, 47%)"},doctype:{color:"hsl(0, 0%, 47%)"},cdata:{color:"hsl(0, 0%, 47%)"},punctuation:{Opacity:".7"},namespace:{Opacity:".7"},tag:{color:"hsl(14, 58%, 55%)"},boolean:{color:"hsl(14, 58%, 55%)"},number:{color:"hsl(14, 58%, 55%)"},deleted:{color:"hsl(14, 58%, 55%)"},keyword:{color:"hsl(53, 89%, 79%)"},property:{color:"hsl(53, 89%, 79%)"},selector:{color:"hsl(53, 89%, 79%)"},constant:{color:"hsl(53, 89%, 79%)"},symbol:{color:"hsl(53, 89%, 79%)"},builtin:{color:"hsl(53, 89%, 79%)"},"attr-name":{color:"hsl(76, 21%, 52%)"},"attr-value":{color:"hsl(76, 21%, 52%)"},string:{color:"hsl(76, 21%, 52%)"},char:{color:"hsl(76, 21%, 52%)"},operator:{color:"hsl(76, 21%, 52%)"},entity:{color:"hsl(76, 21%, 52%)",cursor:"help"},url:{color:"hsl(76, 21%, 52%)"},".language-css .token.string":{color:"hsl(76, 21%, 52%)"},".style .token.string":{color:"hsl(76, 21%, 52%)"},variable:{color:"hsl(76, 21%, 52%)"},inserted:{color:"hsl(76, 21%, 52%)"},atrule:{color:"hsl(218, 22%, 55%)"},regex:{color:"hsl(42, 75%, 65%)"},important:{color:"hsl(42, 75%, 65%)",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},".language-markup .token.tag":{color:"hsl(33, 33%, 52%)"},".language-markup .token.attr-name":{color:"hsl(33, 33%, 52%)"},".language-markup .token.punctuation":{color:"hsl(33, 33%, 52%)"},"":{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",borderBottom:"1px dashed hsl(0, 0%, 33%)",borderTop:"1px dashed hsl(0, 0%, 33%)",marginTop:"0.75em",zIndex:"0"},".line-highlight.line-highlight:before":{backgroundColor:"hsl(215, 15%, 59%)",color:"hsl(24, 20%, 95%)"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"hsl(215, 15%, 59%)",color:"hsl(24, 20%, 95%)"}};o.default=e},76916:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:"1px solid #dddddd",backgroundColor:"white"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{background:"#C1DEF1"},'pre[class*="language-"] ::-moz-selection':{background:"#C1DEF1"},'code[class*="language-"]::-moz-selection':{background:"#C1DEF1"},'code[class*="language-"] ::-moz-selection':{background:"#C1DEF1"},'pre[class*="language-"]::selection':{background:"#C1DEF1"},'pre[class*="language-"] ::selection':{background:"#C1DEF1"},'code[class*="language-"]::selection':{background:"#C1DEF1"},'code[class*="language-"] ::selection':{background:"#C1DEF1"},':not(pre) > code[class*="language-"]':{padding:".2em",paddingTop:"1px",paddingBottom:"1px",background:"#f8f8f8",border:"1px solid #dddddd"},comment:{color:"#008000",fontStyle:"italic"},prolog:{color:"#008000",fontStyle:"italic"},doctype:{color:"#008000",fontStyle:"italic"},cdata:{color:"#008000",fontStyle:"italic"},namespace:{Opacity:".7"},string:{color:"#A31515"},punctuation:{color:"#393A34"},operator:{color:"#393A34"},url:{color:"#36acaa"},symbol:{color:"#36acaa"},number:{color:"#36acaa"},boolean:{color:"#36acaa"},variable:{color:"#36acaa"},constant:{color:"#36acaa"},inserted:{color:"#36acaa"},atrule:{color:"#0000ff"},keyword:{color:"#0000ff"},"attr-value":{color:"#0000ff"},".language-autohotkey .token.selector":{color:"#0000ff"},".language-json .token.boolean":{color:"#0000ff"},".language-json .token.number":{color:"#0000ff"},'code[class*="language-css"]':{color:"#0000ff"},function:{color:"#393A34"},deleted:{color:"#9a050f"},".language-autohotkey .token.tag":{color:"#9a050f"},selector:{color:"#800000"},".language-autohotkey .token.keyword":{color:"#00009f"},important:{color:"#e90",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},"class-name":{color:"#2B91AF"},".language-json .token.property":{color:"#2B91AF"},tag:{color:"#800000"},"attr-name":{color:"#ff0000"},property:{color:"#ff0000"},regex:{color:"#ff0000"},entity:{color:"#ff0000"},"directive.tag.tag":{background:"#ffff00",color:"#393A34"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#a5a5a5"},".line-numbers .line-numbers-rows > span:before":{color:"#2B91AF"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"}};o.default=e},61029:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};o.default=e},57250:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordWrap:"normal",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"14px",color:"#76d9e6",textShadow:"none"},'pre[class*="language-"]':{MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordWrap:"normal",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"14px",color:"#76d9e6",textShadow:"none",background:"#2a2a2a",padding:"15px",borderRadius:"4px",border:"1px solid #e1e1e8",overflow:"auto",position:"relative"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{background:"#2a2a2a",padding:"0.15em 0.2em 0.05em",borderRadius:".3em",border:"0.13em solid #7a6652",boxShadow:"1px 1px 0.3em -0.1em #000 inset"},'pre[class*="language-"] code':{whiteSpace:"pre",display:"block"},namespace:{Opacity:".7"},comment:{color:"#6f705e"},prolog:{color:"#6f705e"},doctype:{color:"#6f705e"},cdata:{color:"#6f705e"},operator:{color:"#a77afe"},boolean:{color:"#a77afe"},number:{color:"#a77afe"},"attr-name":{color:"#e6d06c"},string:{color:"#e6d06c"},entity:{color:"#e6d06c",cursor:"help"},url:{color:"#e6d06c"},".language-css .token.string":{color:"#e6d06c"},".style .token.string":{color:"#e6d06c"},selector:{color:"#a6e22d"},inserted:{color:"#a6e22d"},atrule:{color:"#ef3b7d"},"attr-value":{color:"#ef3b7d"},keyword:{color:"#ef3b7d"},important:{color:"#ef3b7d",fontWeight:"bold"},deleted:{color:"#ef3b7d"},regex:{color:"#76d9e6"},statement:{color:"#76d9e6",fontWeight:"bold"},placeholder:{color:"#fff"},variable:{color:"#fff"},bold:{fontWeight:"bold"},punctuation:{color:"#bebec5"},italic:{fontStyle:"italic"},"code.language-markup":{color:"#f9f9f9"},"code.language-markup .token.tag":{color:"#ef3b7d"},"code.language-markup .token.attr-name":{color:"#a6e22d"},"code.language-markup .token.attr-value":{color:"#e6d06c"},"code.language-markup .token.style":{color:"#76d9e6"},"code.language-markup .token.script":{color:"#76d9e6"},"code.language-markup .token.script .token.keyword":{color:"#76d9e6"},".line-highlight.line-highlight":{padding:"0",background:"rgba(255, 255, 255, 0.08)"},".line-highlight.line-highlight:before":{padding:"0.2em 0.5em",backgroundColor:"rgba(255, 255, 255, 0.4)",color:"black",height:"1em",lineHeight:"1em",boxShadow:"0 1px 1px rgba(255, 255, 255, 0.7)"},".line-highlight.line-highlight[data-end]:after":{padding:"0.2em 0.5em",backgroundColor:"rgba(255, 255, 255, 0.4)",color:"black",height:"1em",lineHeight:"1em",boxShadow:"0 1px 1px rgba(255, 255, 255, 0.7)"}};o.default=e},35341:function(C,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={'code[class*="language-"]':{color:"#22da17",fontFamily:"monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",lineHeight:"25px",fontSize:"18px",margin:"5px 0"},'pre[class*="language-"]':{color:"white",fontFamily:"monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",lineHeight:"25px",fontSize:"18px",margin:"0.5em 0",background:"#0a143c",padding:"1em",overflow:"auto"},'pre[class*="language-"] *':{fontFamily:"monospace"},':not(pre) > code[class*="language-"]':{color:"white",background:"#0a143c",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},comment:{color:"rgb(99, 119, 119)",fontStyle:"italic"},prolog:{color:"rgb(99, 119, 119)",fontStyle:"italic"},cdata:{color:"rgb(99, 119, 119)",fontStyle:"italic"},punctuation:{color:"rgb(199, 146, 234)"},".namespace":{color:"rgb(178, 204, 214)"},deleted:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"},symbol:{color:"rgb(128, 203, 196)"},property:{color:"rgb(128, 203, 196)"},tag:{color:"rgb(127, 219, 202)"},operator:{color:"rgb(127, 219, 202)"},keyword:{color:"rgb(127, 219, 202)"},boolean:{color:"rgb(255, 88, 116)"},number:{color:"rgb(247, 140, 108)"},constant:{color:"rgb(34 183 199)"},function:{color:"rgb(34 183 199)"},builtin:{color:"rgb(34 183 199)"},char:{color:"rgb(34 183 199)"},selector:{color:"rgb(199, 146, 234)",fontStyle:"italic"},doctype:{color:"rgb(199, 146, 234)",fontStyle:"italic"},"attr-name":{color:"rgb(173, 219, 103)",fontStyle:"italic"},inserted:{color:"rgb(173, 219, 103)",fontStyle:"italic"},string:{color:"rgb(173, 219, 103)"},url:{color:"rgb(173, 219, 103)"},entity:{color:"rgb(173, 219, 103)"},".language-css .token.string":{color:"rgb(173, 219, 103)"},".style .token.string":{color:"rgb(173, 219, 103)"},"class-name":{color:"rgb(255, 203, 139)"},atrule:{color:"rgb(255, 203, 139)"},"attr-value":{color:"rgb(255, 203, 139)"},regex:{color:"rgb(214, 222, 235)"},important:{color:"rgb(214, 222, 235)",fontWeight:"bold"},variable:{color:"rgb(214, 222, 235)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};o.default=e}}]);
