(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[549],{69549:function(ye,D,e){"use strict";e.d(D,{W:function(){return P}});var s=e(26068),n=e.n(s),m=e(56108),j=e(59285),y=e(96206),S=e(95095),r=e(54959),C=e(53649),p=e.n(C),O=e(69866),A,K,L,B=(0,O.kc)(function(x,o){var t=x.token,l=x.css,I=x.cx,u=x.prefixCls,$=o.type,_=o.direction,U=l(A||(A=p()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),$==="block"?t.colorFillTertiary:t.colorFillQuaternary,$==="block"?"transparent":t.colorBorder),R="".concat(u,"-").concat(t.editorPrefix,"-action-group");return{content:I("".concat(R,"-content"),l(K||(K=p()([`
        `,`;
        width: fit-content;
        padding: `,"px ",`px;
        display: flex;
        flex-direction: `,`;
        border-radius: `,`px;
        align-items: center;
      `])),$!=="pure"&&U,t.padding/8,t.padding/8,_,t.borderRadius)),button:I("".concat(R,"-action-btn"),l(L||(L=p()([`
        box-shadow: none;
        border: none;
        background-color: transparent;
        &:hover {
          color: `,` !important;
        }
      `])),t.colorIconHover))}}),v=e(52676),c=function(o){var t=o.type,l=t===void 0?"block":t,I=o.direction,u=I===void 0?"row":I,$=o.size,_=o.className,U=o.style,R=o.render,f=o.dropdownMenu,g=o.items,a=g===void 0?[]:g,W=o.onClick,d=W===void 0?function(){}:W,M=o.dropdownProps,E=o.dropdownMenuTrigger,T=B({direction:u,type:l}),z=T.styles,J=T.cx,Y=function(){var de=(0,v.jsx)(v.Fragment,{children:a.map(function(w,V){return(w==null?void 0:w.type)==="divider"?(0,v.jsx)(S.Z,{type:u==="row"?"vertical":"horizontal",style:{margin:"".concat(u==="row"?"0 4px":"4px 0")}},"action-divider-".concat(V)):(0,v.jsx)(j.Z,n()(n()({title:w==null?void 0:w.label,size:$},w),{},{onClick:function(){w!=null&&w.onClick&&(w==null||w.onClick()),d(w==null?void 0:w.key)}}),"action-btn-".concat(V))})});return R?R(a,f):de};return(0,v.jsxs)("div",{className:J(z.content,_),style:U,children:[(0,v.jsx)(Y,{}),f&&(0,v.jsx)(r.Z,n()(n()({trigger:["click"]},M),{},{menu:{items:f.map(function(G){return G!=null&&G.type?G:n()(n()({},G),{},{icon:G.icon})})},children:E||(0,v.jsx)(j.Z,{icon:(0,v.jsx)(m.Z,{}),size:$},"more")}))]})},P=function(o){return(0,v.jsx)(y.iV,{children:(0,v.jsx)(c,n()({},o))})}},59285:function(ye,D,e){"use strict";e.d(D,{Z:function(){return o}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(57820),S=e(50518),r=e(96206),C=e(53649),p=e.n(C),O=e(69866),A,K,L,B=(0,O.kc)(function(t,l){var I=t.token,u=t.css,$=t.cx,_=t.prefixCls,U=l.size,R=l.className,f="".concat(_,"-").concat(I.editorPrefix,"-icon"),g=typeof U=="number"?u(A||(A=p()([`
          width: `,`px !important;
          height: `,`px !important;
        `])),U,U):"",a=u(K||(K=p()([`
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
  `])),I.colorText,I.colorText,I.motionEaseOut,I.motionEaseOut,I.motionEaseOut);return{container:$(f,a,g,R),tooltip:u(L||(L=p()([`
      pointer-events: none;
    `])))}}),v=e(52676),c=["placement","title","icon","cursor","onClick","className","arrow","size","tooltipDelay"],P=function(l){var I=l.placement,u=l.title,$=l.icon,_=l.cursor,U=l.onClick,R=l.className,f=l.arrow,g=f===void 0?!1:f,a=l.size,W=a===void 0?"default":a,d=l.tooltipDelay,M=d===void 0?.5:d,E=j()(l,c),T=B({size:W}),z=T.styles,J=T.cx,Y=(0,v.jsx)(y.ZP,n()(n()({icon:$,className:J(z.container,R),type:"text",style:{cursor:_},size:typeof W=="number"||W==="default"?"middle":W},E),{},{onClick:U}));return(0,v.jsx)(v.Fragment,{children:u?(0,v.jsx)(S.Z,{arrow:g,overlayClassName:z.tooltip,title:u,mouseEnterDelay:M,placement:I,children:Y}):Y})},x=function(l){var I=l||{},u=I.size,$=B({size:u}),_=$.theme;return(0,v.jsx)(r.iV,{componentToken:{Button:{colorText:_.colorTextTertiary,colorBgTextHover:_.colorFillSecondary,colorBgTextActive:_.colorFill}},children:(0,v.jsx)(P,n()({},l))})},o=x},97853:function(ye,D,e){"use strict";e.d(D,{Ag:function(){return O},i1:function(){return K},lb:function(){return p},sL:function(){return A}});var s=e(26068),n=e.n(s),m=e(5075),j=e(84009),y=e(59285),S=e(52676),r=(0,S.jsx)("svg",{viewBox:"0 0 20 20",width:"16",fill:"currentColor",children:(0,S.jsx)("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})}),C=(0,S.jsx)("svg",{width:"10",viewBox:"0 0 70 41",fill:"currentColor",children:(0,S.jsx)("path",{d:"M30.76 39.2402C31.885 40.3638 33.41 40.995 35 40.995C36.59 40.995 38.115 40.3638 39.24 39.2402L68.24 10.2402C69.2998 9.10284 69.8768 7.59846 69.8494 6.04406C69.822 4.48965 69.1923 3.00657 68.093 1.90726C66.9937 0.807959 65.5106 0.178263 63.9562 0.150837C62.4018 0.123411 60.8974 0.700397 59.76 1.76024L35 26.5102L10.24 1.76024C9.10259 0.700397 7.59822 0.123411 6.04381 0.150837C4.4894 0.178263 3.00632 0.807959 1.90702 1.90726C0.807714 3.00657 0.178019 4.48965 0.150593 6.04406C0.123167 7.59846 0.700153 9.10284 1.75999 10.2402L30.76 39.2402Z"})}),p=function(B){return(0,S.jsx)(y.Z,n()({icon:C},B))},O=function(B){return(0,S.jsx)(y.Z,n()({icon:r},B))},A=function(B){return(0,S.jsx)(y.Z,n()({icon:(0,S.jsx)(m.Z,{})},B))},K=function(B){return(0,S.jsx)(y.Z,n()({icon:(0,S.jsx)(j.Z,{})},B))}},88167:function(ye,D,e){"use strict";e.d(D,{A:function(){return s.Z},Ag:function(){return n.Ag},i1:function(){return n.i1},lb:function(){return n.lb},sL:function(){return n.sL}});var s=e(59285),n=e(97853);D.ZP=s.Z},14632:function(ye,D,e){"use strict";var s=e(26458),n=e(50518),m=e(91976),j=e(22305),y=e.n(j),S=e(75271),r=e(52676),C=(0,S.memo)(function(p){var O=p.name,A=p.color,K=p.onClick,L=p.active,B=p.current,v=p.following;if(!O)return(0,r.jsx)(s.C,{});var c=y()(A);return(0,r.jsx)(n.Z,{title:O,showArrow:!1,children:(0,r.jsxs)(s.C,{shape:"circle",style:{background:A,outline:v?"2px solid ".concat(A):"",color:c.isLight()?"black":"inherit",zIndex:v?1e3:L?100:0,filter:L?"none":"grayscale(80%)",overflow:"initial",cursor:B?"inherit":"pointer"},onClick:K,children:[O.slice(0,1),(0,r.jsx)(m.Z,{status:L?"success":"default",color:L?void 0:"#d9d9d9",style:{position:"absolute",left:11,top:11}})]})})});D.Z=C},58591:function(ye,D,e){"use strict";e.d(D,{Z:function(){return B}});var s=e(53649),n=e.n(s),m=e(22305),j=e.n(m),y=e(75271),S=e(69866),r=e(52676),C=(0,y.memo)(function(v){var c=v.color;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"24",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("path",{fill:c,d:"M19.208 10.282 2.007 2.269l4.068 18.916.066-.1a29.368 29.368 0 0 1 13.067-10.803Z"}),(0,r.jsx)("path",{stroke:"#FFF",strokeWidth:"1.5",d:"m19.483 10.954.758-.32a.365.365 0 0 0 .013-.666l-.747-.347-18.246-8.5a.143.143 0 0 0-.2.16L5.375 21.34l.18.833a.357.357 0 0 0 .645.123l.469-.704 2.458-3.694a14.326 14.326 0 0 1 6.374-5.27l3.982-1.674Z"})]})})}),p=C,O,A,K=(0,S.kc)(function(v){var c=v.css;return{container:c(O||(O=n()([`
    position: fixed;

    z-index: 5000;
  `]))),name:c(A||(A=n()([`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 12px;
    max-width: 96px;
    padding: 2px 12px;
    border-radius: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `])))}}),L=(0,y.memo)(function(v){var c=v.position,P=v.color,x=v.name,o=K(),t=o.styles;return(0,r.jsxs)("div",{className:t.container,style:{top:c.y,left:c.x},children:[(0,r.jsx)(p,{color:P}),(0,r.jsx)("div",{className:t.name,style:{backgroundColor:P,color:j()(P).isLight()?"black":"white"},children:x})]})}),B=L},23412:function(ye,D,e){"use strict";var s=e(26068),n=e.n(s),m=e(14632),j=e(75271),y=e(58591),S=e(52676),r=(0,j.lazy)(function(){return e.e(4124).then(e.bind(e,44124))}),C=function(O){return(0,S.jsx)(j.Suspense,{children:(0,S.jsx)(r,n()({},O))})};C.Cursor=y.Z,C.Avatar=m.Z,D.Z=C},73885:function(ye,D,e){"use strict";e.d(D,{Z:function(){return q}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(96206),S=e(93729),r=e(75271),C=e(82092),p=e.n(C),O=e(53649),A=e.n(O),K=e(30436),L=e(97853),B=e(14909),v=e(82187),c=e.n(v),P=e(90142),x=e(66434),o=e(52676),t,l=(0,B.kc)(function(N){var H=N.css,X=N.cx,ae=N.prefixCls,te=N.token,fe="".concat(ae,"-").concat(te.editorPrefix,"-content");return{input:X("".concat(fe,"-tem"),H(t||(t=A()([`
        padding-left: 13px;
      `]))))}}),I=(0,r.memo)(function(N){var H=N.dataIndex,X=N.placeholder,ae=N.value,te=N.index,fe=N.style,Ce=N.dragging,Be=N.creatorButtonProps,Ue=(0,K.t)(),je=(0,r.useRef)(null),Oe=l(),Qe=Oe.styles;(0,r.useEffect)(function(){Ce&&je.current.blur()},[Ce]);var ve=function(ce){var Xe=Ue.getIdByIndex(ce);return"column-list-".concat(ce,"-").concat(Xe)},_e=function(){var ce=Ue.getValue()||[];if(te+1===ce.length&&Be!==!1){var Xe=Be.record;Ue.addItem(Xe(ce.length))}setTimeout(function(){var Ve=document.getElementById(ve(te+1));Ve==null||Ve.focus()},0)};return(0,o.jsx)(x.I,{size:"small",ref:je,value:ae,style:fe,id:ve(te),placeholder:X||"\u8BF7\u8F93\u5165",className:Qe.input,onPressEnter:function(){_e()},onChange:function(ce){Ue.updateItem(p()({},H,ce),te)}})}),u=I,$=e(71843),_,U=(0,B.kc)(function(N){var H=N.prefixCls,X=N.token,ae=N.css,te=N.cx,fe="".concat(H,"-").concat(X.editorPrefix,"-content");return{select:te("".concat(fe,"-tem"),ae(_||(_=A()([`
        .`,`-select-selector {
          padding-left: 13px;
        }
      `])),H))}}),R=(0,r.memo)(function(N){var H=N.dataIndex,X=N.value,ae=N.index,te=N.style,fe=N.options,Ce=N.placeholder,Be=(0,K.t)(),Ue=U(),je=Ue.styles;return(0,o.jsx)($.default,{size:"small",style:te,options:fe,className:je.select,value:X,onClear:function(){Be.updateItem(p()({},H,null),ae)},placeholder:Ce||"\u8BF7\u9009\u62E9",onChange:function(Qe){Be.updateItem(p()({},H,Qe),ae)}})}),f=R,g,a,W,d,M,E=(0,B.kc)(function(N){var H=N.css,X=N.cx,ae=N.token,te=N.prefixCls,fe="".concat(te,"-").concat(ae.editorPrefix,"-item");return{item:X(fe,H(g||(g=A()([`
        position: relative;
        width: 100%;

        &:hover .`,`-actions {
          opacity: 1;
        }
      `])),fe)),content:X("".concat(fe,"-content"),H(a||(a=A()([`
        flex: 1;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `])))),actions:X("".concat(fe,"-actions"),H(W||(W=A()([`
        z-index: 10;
        color: hsla(0, 0, 0, 0.45);
        opacity: 0;
      `])))),handle:X("".concat(fe,"-handle"),H(d||(d=A()([`
        position: absolute;
        left: 0;
      `])))),actionsRight:X("".concat(fe,"-actions-right"),H(M||(M=A()([`
        position: absolute;
        top: 1px;
        right: 1px;
        align-self: flex-end;
        overflow: hidden;
        border-radius: 1px;
        // \u91C7\u7528\u80CC\u666F\u6A21\u7CCA\u6765\u89E3\u51B3\u591A\u79CD\u80CC\u666F\u8272\u4E0B\u8986\u76D6\u5185\u5BB9\u7684\u95EE\u9898 TODO\uFF1AFireFox \u517C\u5BB9
        backdrop-filter: blur(5px);
        //background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, @bg-2 10%, @bg-2 100%);
      `]))))}}),T=(0,r.memo)(function(N){var H=N.item,X=N.index,ae=N.columns,te=N.listeners,fe=N.actions,Ce=N.hideRemove,Be=N.dragging,Ue=N.creatorButtonProps,je=E(),Oe=je.styles,Qe=(0,K.t)();return(0,o.jsxs)(P.D,{className:Oe.item,direction:"horizontal",align:"center",children:[(0,o.jsx)(L.Ag,n()({className:c()(Oe.actions,Oe.handle),tabIndex:-1,cursor:"grab",style:{width:14,height:24},"data-cypress":"draggable-handle"},te)),(0,o.jsx)(P.D,{horizontal:!0,gap:4,width:"100%",className:Oe.content,children:ae.map(function(ve,_e){var Re={flex:1,maxWidth:"".concat(100/ae.length,"%")},ce={dataIndex:ve.dataIndex,value:H[ve.dataIndex],id:H.id,index:X,dragging:Be,style:Re,placeholder:ve.placeholder,creatorButtonProps:Ue};switch(ve.type){default:case"input":return(0,o.jsx)(u,n()({},ce),"".concat(H==null?void 0:H.dataIndex,"-").concat(_e));case"select":return(0,o.jsx)(f,n()({options:ve.options},ce),"".concat(H==null?void 0:H.dataIndex,"-").concat(_e));case"custom":var Xe=ve.render;return Xe?(0,o.jsx)(Xe,n()({item:H,column:ve,onChange:function(Ye){Qe.updateItem(p()({},ve.dataIndex,Ye),X)}},ce),"".concat(H==null?void 0:H.dataIndex,"-").concat(_e)):"\u6682\u65E0\u5B9E\u73B0"}})}),(0,o.jsxs)(P.D,{className:c()(Oe.actions,Oe.actionsRight),direction:"horizontal",align:"center",children:[fe,Ce?null:(0,o.jsx)(L.sL,{tabIndex:-1,onClick:function(){Qe.removeItem(X)},style:{height:22}})]})]})}),z=T,J,Y,G=(0,B.kc)(function(N){var H=N.token,X=N.css,ae=N.cx,te=N.prefixCls,fe="".concat(te,"-").concat(H==null?void 0:H.editorPrefix,"-column-list");return{content:ae("".concat(fe,"-content"),X(J||(J=A()([`
        flex: 1;
        width: 100%;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `])))),header:ae("".concat(fe,"-header"),X(Y||(Y=A()([`
        color: `,`;
        padding-left: 8px;
      `])),H.colorTextTertiary))}}),de=(0,r.memo)(function(N){var H=N.columns,X=G(),ae=X.styles,te=X.cx;return(0,o.jsx)(P.D,{horizontal:!0,align:"center",gap:4,children:H.map(function(fe,Ce){return(0,o.jsx)("div",{className:te(ae.content,ae.header),children:fe.title},"".concat(fe.dataIndex,"-").concat(Ce))})})}),w=e(69866),V=e(23711),ie,b,i,h=(0,w.kc)(function(N){var H=N.token,X=N.css,ae=N.cx,te=N.prefixCls,fe=(0,V.X)(N),Ce="".concat(te,"-").concat(H==null?void 0:H.editorPrefix,"-column-list");return{content:ae("".concat(Ce,"-content"),X(ie||(ie=A()([`
        flex: 1;
        width: 100%;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `])))),header:ae("".concat(Ce,"-header"),X(b||(b=A()([`
        color: `,`;
      `])),H.colorTextTertiary)),btnAdd:ae("".concat(Ce,"-btn-add"),X(i||(i=A()([`
        height: 24px;
        padding-block: 2px;
        margin-top: `,`px;
      `])),H.marginXXS),fe.defaultButton)}}),F=["className","columns","actions","hideRemove","creatorButtonProps"],k=(0,r.forwardRef)(function(N,H){var X=N.className,ae=N.columns,te=N.actions,fe=N.hideRemove,Ce=N.creatorButtonProps,Be=j()(N,F),Ue=h(),je=Ue.cx,Oe=Ce===!1?!1:n()({position:"bottom",record:function(){return{}}},Ce),Qe=(0,r.useCallback)(function(ve,_e){var Re=_e.index,ce=_e.listeners,Xe=_e.dragging;return(0,o.jsx)(z,{columns:ae,item:ve,dragging:Xe,listeners:ce,index:Re,actions:typeof te=="function"?te(ve,Re):te,creatorButtonProps:Oe,hideRemove:fe})},[ae]);return(0,o.jsx)(y.iV,{children:(0,o.jsx)(S.c,n()({ref:H,renderItem:Qe,renderHeader:function(){return(0,o.jsx)(de,{columns:ae})},className:je(X),creatorButtonProps:Oe},Be))})}),q=k},16432:function(ye,D,e){"use strict";e.d(D,{T:function(){return s.Z}});var s=e(73885)},77093:function(ye,D,e){"use strict";e.d(D,{J:function(){return L}});var s=e(26068),n=e.n(s),m=e(25298),j=e.n(m),y=e(17069),S=e.n(y),r=e(82092),C=e.n(r),p=e(7447),O=e(37733),A=e(42750),K=e(52676),L=function(){function B(v){var c=this,P,x;j()(this,B),C()(this,"id",void 0),C()(this,"Component",void 0),C()(this,"ConfigPanel",void 0),C()(this,"CanvasStarter",void 0),C()(this,"DesignController",void 0),C()(this,"DevelopController",void 0),C()(this,"AssetProvider",void 0),C()(this,"ErrorBoundary",function(u){var $=u.children;return(0,K.jsx)(K.Fragment,{children:$})}),C()(this,"rules",void 0),C()(this,"models",void 0),C()(this,"defaultConfig",void 0),C()(this,"componentStore",void 0),C()(this,"componentStoreApi",void 0),C()(this,"configSelector",void 0),C()(this,"setConfig",void 0),C()(this,"codeEmitter",void 0),C()(this,"isStarterMode",function(){return!1}),C()(this,"generateProps",function(u){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O.r.Runtime,_={};return Object.keys(u).forEach(function(U){c.models.forEach(function(R){if(R.key===U){var f=R.emitter(u,$);Object.assign(_,f)}})}),_}),this.id=v.id,this.models=v.models,v.defaultConfig&&(this.defaultConfig=v.defaultConfig);var o=(0,A.F)(v.createStore,v.storeOptions),t=o.createStore,l=o.Provider,I=o.useStoreApi;this.componentStore=t(),this.componentStoreApi=I,this.AssetProvider=l,this.configSelector=((P=v.storeOptions)===null||P===void 0?void 0:P.getConfig)||function(u){return JSON.parse(JSON.stringify(u))},this.setConfig=((x=v.storeOptions)===null||x===void 0?void 0:x.setConfig)||function(u,$){return $(u)},this.rules=v.ui.rules,this.Component=v.ui.Component,this.ConfigPanel=v.ui.ConfigPanel,this.CanvasStarter=v.ui.CanvasStarter,this.DesignController=v.ui.DesignController,this.DevelopController=v.ui.DevelopController,v.ui.ErrorBoundary&&(this.ErrorBoundary=v.ui.ErrorBoundary),v.ui.isStarterMode&&(this.isStarterMode=v.ui.isStarterMode),this.codeEmitter=v.codeEmitter}return S()(B,[{key:"generateCode",value:function(c){if(!this.codeEmitter)throw Error("\u6682\u672A\u5B9E\u73B0 generateCode \u65B9\u6CD5\uFF0C\u8BF7\u5728\u521D\u59CB\u5316\u65F6\u4F20\u5165 codeEmitter");if(!c)return"\u6682\u65E0\u751F\u6210\u4EE3\u7801";var P=this.generateProps(c,O.r.Code);return this.codeEmitter(c,P)}},{key:"getDefaultConfig",value:function(c){var P={};return this.models.forEach(function(x){if(x.schema){var o=x.schema(c),t=(0,p.NM)(o);Object.assign(P,C()({},x.key,t))}}),n()(n()({},P),this.defaultConfig)}},{key:"registerConfigPanel",value:function(c){this.ConfigPanel=c}}]),B}()},83998:function(ye,D,e){"use strict";e.r(D),e.d(D,{ComponentAsset:function(){return s.J},createTestAssetStore:function(){return n.i},createUseAssetStore:function(){return m.I}});var s=e(77093),n=e(34484),m=e(42750),j=e(81359),y={};for(var S in j)["default","createTestAssetStore","createUseAssetStore","ComponentAsset"].indexOf(S)<0&&(y[S]=function(r){return j[r]}.bind(0,S));e.d(D,y)},42750:function(ye,D,e){"use strict";e.d(D,{F:function(){return O},I:function(){return A}});var s=e(3341),n=e.n(s),m=e(97412),j=e(24140),y=e(79258),S=(0,m.k)(),r=S.Provider,C=S.useStore,p=S.useStoreApi,O=function(L,B){var v=function(){var P=(B==null?void 0:B.devtools)===!1?{}:(B==null?void 0:B.devtools)===!0?{name:"ProEditor-AssetStore"}:B==null?void 0:B.devtools,x=(0,j.v)((B==null?void 0:B.devtools)!==!1);return(0,y.createWithEqualityFn)()(x(L,P),n())};return{Provider:r,createStore:v,useStoreApi:p}},A=function(){return{useStore:C,useStoreApi:p,AssetProvider:r}}},34484:function(ye,D,e){"use strict";e.d(D,{i:function(){return S}});var s=e(26068),n=e.n(s),m=e(3341),j=e.n(m),y=e(79258),S=function(C){var p=(0,y.createWithEqualityFn)(function(v,c){return{config:null,setConfig:function(x){v({config:n()(n()({},c().config),x)})},getConfig:function(){return c().config}}},j()),O=(0,y.createWithEqualityFn)(C,j()),A=p.getState(),K=A.getConfig,L=A.setConfig,B=function(){O.setState({getConfig:K,setConfig:L}),p.subscribe(function(c){var P=c.config;O.setState(P)})};return{useAssetStore:O,init:B,useEditorStore:p}}},37733:function(ye,D,e){"use strict";e.d(D,{r:function(){return s}});var s=function(n){return n.Runtime="runtime",n.Code="code",n}({})},81359:function(ye,D,e){"use strict";e.r(D),e.d(D,{EmitterEnv:function(){return j.r}});var s=e(67574),n=e.n(s),p={};for(var m in s)m!=="default"&&(p[m]=function(O){return s[O]}.bind(0,m));e.d(D,p);var j=e(37733),y=e(50677),S=e.n(y),p={};for(var m in y)["default","EmitterEnv"].indexOf(m)<0&&(p[m]=function(A){return y[A]}.bind(0,m));e.d(D,p);var r=e(8801),C=e.n(r),p={};for(var m in r)["default","EmitterEnv"].indexOf(m)<0&&(p[m]=function(A){return r[A]}.bind(0,m));e.d(D,p)},50677:function(){},8801:function(){},96206:function(ye,D,e){"use strict";e.d(D,{Yd:function(){return A},iV:function(){return K},nh:function(){return L}});var s=e(26068),n=e.n(s),m=e(94456),j=e(24939),y=e(15130),S=e(86861),r=e(69866),C=e(18970),p=e(23711),O=e(52676),A=function(v){var c=(0,j.S)(),P=(0,S.H)(v),x={colorBgContainer:c==null?void 0:c.colorFillQuaternary,colorBorder:"transparent",controlOutline:"transparent"};return P.components={Input:x,InputNumber:x,Select:x,Tree:{colorBgContainer:"transparent"},TreeSelect:x},P},K=function(v){var c=v.children,P=v.componentToken,x=(0,y.r)(),o=x.appearance,t=x.themeMode,l=A(o);return l.components=n()(n()({},l.components),P),(0,O.jsx)(m.ZP,{theme:l,children:(0,O.jsx)(r.f6,{appearance:o,themeMode:t,theme:S.H,customToken:C.z,customStylish:p.X,children:c})})},L=function(v){return function(c){return(0,O.jsx)(K,{children:(0,O.jsx)(v,n()({},c))})}}},6137:function(ye,D,e){"use strict";e.d(D,{Z:function(){return b}});var s=e(26068),n=e.n(s),m=e(48305),j=e.n(m),y=e(67825),S=e.n(y),r=e(37187),C=e(9585),p=e(38531),O=e(95095),A=e(75271),K=e(96206),L=e(82092),B=e.n(L),v=e(90142),c=e(52676),P=2.2,x="13px",o=function(){return(0,c.jsx)("svg",{fill:"none",height:x,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:P,viewBox:"0 0 24 24",width:x,xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"})})},t=function(){return(0,c.jsx)("svg",{className:"lucide lucide-chevron-up",fill:"none",height:x,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:P,viewBox:"0 0 24 24",width:x,xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("polyline",{points:"18 15 12 9 6 15"})})},l=function(){return(0,c.jsx)("svg",{className:"lucide lucide-chevron-up",fill:"none",height:x,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:P,viewBox:"0 0 24 24",width:x,xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"})})},I=function(){return(0,c.jsxs)("svg",{className:"lucide lucide-chevron-up",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",height:x,strokeWidth:P,width:x,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{d:"M3 3h6l6 18h6"}),(0,c.jsx)("path",{d:"M14 3h7"})]})},u=function(h){var F=h.className;return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:x,width:x,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:P,strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-right ".concat(F),children:(0,c.jsx)("polyline",{points:"9 18 15 12 9 6"})})},$=e(53649),_=e.n($),U=e(69866),R,f,g,a,W,d=(0,U.kc)(function(i){var h=i.css,F=i.cx,k=i.token,q=i.prefixCls,N="".concat(q,"-").concat(k.editorPrefix,"-context-menu"),H=h(R||(R=_()([`
    font-weight: bold;
    color: `,`;
    background: `,`;
    &:hover {
      color: `,`;
      background: `,`;
    }
  `])),k.colorPrimaryText,k.colorPrimaryBg,k.colorPrimaryTextHover,k.colorPrimaryBgHover);return{item:F("".concat(N,"-item"),h(f||(f=_()([`
        all: unset;

        user-select: none;
        scroll-margin: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        box-sizing: inherit;
        width: 100%;
        padding: 12px 10px;

        font-family: `,`;
        font-weight: normal;
        line-height: 1;
        color: `,`;

        background: transparent;
        border-radius: 5px;
        &:hover {
          background: `,`;
        }
      `])),k.fontFamily,k.colorText,k.colorFillTertiary)),selected:F("".concat(N,"-item-selected"),H),active:F("".concat(N,"-item-active"),h(g||(g=_()([`
        background: `,`;
      `])),k.colorFillTertiary)),arrow:h(a||(a=_()([`
      color: `,`;
    `])),k.colorTextTertiary),kbd:h(W||(W=_()([`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 18px;
      height: 20px;

      font-family: `,`;
      font-size: 14px;
      color: `,`;

      border-radius: 2px;
    `])),k.fontFamily,k.colorTextQuaternary)}}),M=["label","icon","disabled","nested","shortcut","active","selected"],E={meta:(0,c.jsx)(o,{}),control:(0,c.jsx)(t,{}),shift:(0,c.jsx)(l,{}),alt:(0,c.jsx)(I,{}),enter:"\u21B5"},T={meta:"meta",command:"meta",cmd:"meta",ctl:"control",control:"control",shift:"shift",alt:"alt"},z=(0,A.forwardRef)(function(i,h){var F=i.label,k=i.icon,q=i.disabled,N=i.nested,H=i.shortcut,X=i.active,ae=i.selected,te=S()(i,M),fe=d(),Ce=fe.styles,Be=fe.cx;return(0,c.jsxs)("button",n()(n()({type:"button"},te),{},{className:Be(Ce.item,B()(B()({},Ce.selected,ae),Ce.active,X)),disabled:q,ref:h,role:"menuitem",children:[(0,c.jsxs)(v.D,{gap:8,horizontal:!0,children:[k&&(0,c.jsx)("span",{children:k}),F]}),N?(0,c.jsx)("span",{"aria-hidden":!0,children:(0,c.jsx)(u,{className:Ce.arrow})}):H?(0,c.jsx)(v.D,{align:"center",horizontal:!0,children:H.map(function(Ue){var je=T[Ue.toLowerCase()];return(0,c.jsx)("kbd",{className:Ce.kbd,children:je?E[je]:Ue.toUpperCase()},Ue)})}):null]}))}),J=z,Y,G,de=(0,U.kc)(function(i){var h=i.css,F=i.cx,k=i.token,q=i.prefixCls,N="".concat(q,"-").concat(k.editorPrefix,"-context-menu");return{container:F(N,h(Y||(Y=_()([`
        all: unset;
        user-select: none;
        scrollbar-width: none;

        overflow-y: auto;
        overscroll-behavior: contain;

        box-sizing: border-box;
        width: 200px;
        padding: 5px;

        font-size: `,`px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 8px;
        outline: 0;
        box-shadow: `,`;

        &::-webkit-scrollbar {
          display: none;
        }
      `])),k.fontSize,k.colorBgContainer,k.colorBorder,k.boxShadowSecondary)),button:F("".concat(N,"-button"),h(G||(G=_()([`
        all: unset;

        cursor: default;
        user-select: none;

        padding: 12px 10px;

        font-size: `,`px;
        line-height: 1;
        color: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        -webkit-tap-highlight-color: transparent;

        &:hover {
          background: `,`;
          border-color: transparent;
        }

        &:focus-visible {
          border-color: `,`;
          box-shadow: 0 0 0 2px `,`;
        }
      `])),k.fontSize,k.colorText,k.colorBgContainer,k.colorBorder,k.borderRadius,k.colorPrimaryBg,k.colorPrimary,k.colorPrimaryBg))}}),w=["items","label","container"],V=(0,A.forwardRef)(function(i,h){var F=i.items,k=i.label,q=i.container,N=S()(i,w),H=de(),X=H.styles,ae=(0,A.useState)(!1),te=j()(ae,2),fe=te[0],Ce=te[1],Be=(0,A.useState)(null),Ue=j()(Be,2),je=Ue[0],Oe=Ue[1],Qe=(0,A.useState)(!1),ve=j()(Qe,2),_e=ve[0],Re=ve[1],ce=(0,A.useRef)([]),Xe=(0,A.useRef)(F.map(function(me){return me.label})),Ve=(0,A.useRef)(!1),Ye=(0,r.ay)(),ge=(0,r.jV)(),he=(0,r.Zm)(),pe=he!==null,Le=(0,r.YF)({nodeId:ge,open:fe,onOpenChange:Ce,placement:pe?"right-start":"bottom-start",middleware:[(0,C.cv)({mainAxis:pe?0:4,alignmentAxis:pe?-4:0}),(0,C.RR)(),(0,C.uY)()],whileElementsMounted:p.Me}),Ae=Le.refs,Ne=Le.context,Q=Le.floatingStyles,ne=(0,r.XI)(Ne,{enabled:pe&&_e,delay:{open:75},handleClose:(0,r.xp)({blockPointerEvents:!0})}),be=(0,r.eS)(Ne,{event:"mousedown",toggle:!pe||!_e,ignoreMouse:pe}),Se=(0,r.qs)(Ne,{role:"menu"}),Pe=(0,r.bQ)(Ne),Te=(0,r.c0)(Ne,{listRef:ce,activeIndex:je,nested:pe,onNavigate:Oe}),we=(0,r.ox)(Ne,{enabled:fe,listRef:Xe,onMatch:fe?Oe:void 0,activeIndex:je}),We=(0,r.NI)([ne,be,Se,Pe,Te,we]),He=We.getReferenceProps,Ze=We.getFloatingProps,Ke=We.getItemProps;(0,A.useEffect)(function(){if(!Ye)return;function me(){Ce(!1)}function ue(re){re.nodeId!==ge&&re.parentId===he&&Ce(!1)}return Ye.events.on("click",me),Ye.events.on("menuopen",ue),function(){Ye.events.off("click",me),Ye.events.off("menuopen",ue)}},[Ye,ge,he]),(0,A.useEffect)(function(){fe&&Ye&&Ye.events.emit("menuopen",{parentId:he,nodeId:ge})},[Ye,fe,ge,he]),(0,A.useEffect)(function(){function me(re){var le=re.pointerType;le!=="touch"&&Re(!0)}function ue(){Re(!1)}return window.addEventListener("pointermove",me,{once:!0,capture:!0}),window.addEventListener("keydown",ue,!0),function(){window.removeEventListener("pointermove",me,{capture:!0}),window.removeEventListener("keydown",ue,!0)}},[_e]),(0,A.useEffect)(function(){var me;function ue(le){le.preventDefault(),Ae.setPositionReference({getBoundingClientRect:function(){return{width:0,height:0,x:le.clientX,y:le.clientY,top:le.clientY,right:le.clientX,bottom:le.clientY,left:le.clientX}}}),Ce(!0),clearTimeout(me),Ve.current=!1,me=window.setTimeout(function(){Ve.current=!0},300)}function re(){Ve.current&&Ce(!1)}return document.addEventListener("contextmenu",ue),document.addEventListener("mouseup",re),function(){document.removeEventListener("contextmenu",ue),document.removeEventListener("mouseup",re),clearTimeout(me)}},[Ae,q]);var De=(0,A.useCallback)(function(me,ue){if("type"in me&&me.type==="divider")return(0,c.jsx)(O.Z,{style:{margin:"4px 12px",minWidth:"auto",width:"auto"}});var re=me,le=n()({label:re.label,key:re.key,icon:re.icon,shortcut:re.shortcut,active:je===ue},Ke({ref:function(Z){ce.current[ue]=Z},onClick:function(){var Z;(Z=re.onClick)===null||Z===void 0||Z.call(re),Ce(!1)},onMouseUp:function(){var Z;(Z=re.onClick)===null||Z===void 0||Z.call(re),Ce(!1)}}));return"children"in me?(0,c.jsx)(V,n()(n()({},le),{},{items:me.children})):(0,c.jsx)(J,n()({},le))},[je]),ee=(0,r.qq)([Ae.setReference,h]);return(0,c.jsxs)(r.mN,{id:ge,children:[k?(0,c.jsx)(J,n()(n()({label:k,nested:pe,ref:ee,role:pe?"menuitem":"menu"},N),He({onClick:function(ue){ue.stopPropagation()}}))):null,(0,c.jsx)(r.ll,{children:fe&&(0,c.jsx)(r.wD,{context:Ne,initialFocus:pe?-1:0,modal:!1,returnFocus:!pe,children:(0,c.jsx)("div",n()(n()({className:X.container,ref:Ae.setFloating,style:Q},Ze()),{},{children:F==null?void 0:F.map(De)}))})})]})}),ie=(0,A.forwardRef)(function(i,h){return(0,c.jsx)(K.iV,{children:(0,c.jsx)(r.RB,{children:(0,c.jsx)(V,n()(n()({},i),{},{ref:h}))})})}),b=ie},82138:function(ye,D,e){"use strict";e.d(D,{_:function(){return ie}});var s=e(75271),n=e(96206),m=e(26068),j=e.n(m),y=e(82092),S=e.n(y),r=e(48305),C=e.n(r),p=e(74473),O=e(55471),A=e(65720),K=e(93823),L=e(16794),B=e(84342),v=e(64203),c=e(53649),P=e.n(c),x=e(69866),o,t,l,I,u,$,_,U,R,f,g,a,W,d=(0,x.kc)(function(b){var i=b.token,h=b.css,F=b.cx,k=b.prefixCls,q="".concat(k,"-").concat(i==null?void 0:i.editorPrefix,"-draggable-panel"),N=h(o||(o=P()([`
    position: relative;
    &::before {
      position: absolute;
      z-index: 50;
      transition: all 0.3s ease-in-out;
      content: '';
    }

    &:hover,
    &:active {
      &::before {
        background: `,`;
      }
    }
  `])),i.colorPrimary),H=h(t||(t=P()([`
    position: absolute;
    opacity: 0;
    z-index: 1001;
    transition: opacity 0.1s;

    border-radius: 4px;
    cursor: pointer;
    background: `,`;
    border-width: 1px;
    border-style: solid;
    color: `,`;
    border-color: `,`;

    &:hover {
      color: `,`;
      background: `,`;
    }
  `])),i.colorBgElevated,i.colorTextTertiary,i.colorBorder,i.colorTextSecondary,i.colorFillQuaternary),X=17,ae=40,te=16;return{container:F(q,h(l||(l=P()([`
        flex-shrink: 0;
        position: relative;
        border: 0 solid `,`;

        &:hover {
          .`,`-toggle {
            opacity: 1;
          }
        }
      `])),i.colorSplit,q)),toggleLeft:F("".concat(q,"-toggle"),"".concat(q,"-toggle-left"),H,h(I||(I=P()([`
        width: `,`px;
        height: `,`px;
        left: -`,`px;
        top: 50%;
        margin-top: -20px;
        border-radius: 4px 0 0 4px;
        border-right-width: 0;
      `])),te,ae,X)),toggleRight:F("".concat(q,"-toggle"),"".concat(q,"-toggle-right"),H,h(u||(u=P()([`
        width: `,`px;
        height: `,`px;
        right: -`,`px;
        top: 50%;
        margin-top: -20px;
        border-radius: 0 4px 4px 0;
        border-left-width: 0;
      `])),te,ae,X)),toggleTop:F("".concat(q,"-toggle"),"".concat(q,"-toggle-top"),H,h($||($=P()([`
        height: `,`px;
        width: `,`px;
        top: -`,`px;
        left: 50%;
        margin-left: -20px;
        border-radius: 4px 4px 0 0;
        border-bottom-width: 0;
      `])),te,ae,X)),toggleBottom:F("".concat(q,"-toggle"),"".concat(q,"-toggle-bottom"),H,h(_||(_=P()([`
        height: 16px;
        width: `,`px;
        bottom: -`,`px;
        left: 50%;
        margin-left: -20px;
        border-radius: 0 0 4px 4px;
        border-top-width: 0;
      `])),ae,X)),fixed:F("".concat(q,"-fixed"),h(U||(U=P()([`
        background: `,`;
        overflow: hidden;
      `])),i.colorBgContainer)),float:F("".concat(q,"-float"),h(R||(R=P()([`
        overflow: hidden;
        border-radius: 8px;
        background: `,`;
        box-shadow: `,`;
        z-index: 2000;
      `])),i.colorBgElevated,i.boxShadowSecondary)),leftHandle:F(h(f||(f=P()([`
        `,`;

        &::before {
          left: 50%;
          width: 2px;
          height: 100%;
        }
      `])),N),"".concat(q,"-left-handle")),rightHandle:F(h(g||(g=P()([`
        `,`;
        &::before {
          right: 50%;
          width: 2px;
          height: 100%;
        }
      `])),N),"".concat(q,"-right-handle")),topHandle:F("".concat(q,"-top-handle"),h(a||(a=P()([`
        `,`;

        &::before {
          top: 50%;
          height: 2px;
          width: 100%;
        }
      `])),N)),bottomHandle:F("".concat(q,"-bottom-handle"),h(W||(W=P()([`
        `,`;

        &::before {
          bottom: 50%;
          height: 2px;
          width: 100%;
        }
      `])),N))}}),M=e(52676),E=150,T=400,z=function(i){switch(i){case"bottom":return"top";case"top":return"bottom";case"right":return"left";case"left":return"right"}},J=(0,s.memo)(function(b){var i=b.children,h=b.placement,F=h===void 0?"right":h,k=b.resize,q=b.style,N=b.size,H=b.defaultSize,X=b.minWidth,ae=b.minHeight,te=b.maxHeight,fe=b.maxWidth,Ce=b.onSizeChange,Be=b.onSizeDragging,Ue=b.expandable,je=Ue===void 0?!0:Ue,Oe=b.isExpand,Qe=b.onExpandChange,ve=b.className,_e=F==="top"||F==="bottom",Re=d(),ce=Re.styles,Xe=Re.cx,Ve=(0,A.Z)(!0,{value:Oe,onChange:Qe}),Ye=C()(Ve,2),ge=Ye[0],he=Ye[1],pe=k!==!1&&ge,Le=(0,s.useMemo)(function(){return pe?S()({},z(F),ce["".concat(z(F),"Handle")]):{}},[pe,F]),Ae=j()(S()({top:!1,bottom:!1,right:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},z(F),!0),k),Ne=(0,s.useMemo)(function(){return _e?j()({width:"100%",height:E},H):j()({width:T,height:"100%"},H)},[_e]),Q=ge?{minWidth:typeof X=="number"?Math.max(X,0):280,minHeight:typeof ae=="number"?Math.max(ae,0):void 0,maxHeight:typeof te=="number"?Math.max(te,0):void 0,maxWidth:typeof fe=="number"?Math.max(fe,0):void 0,defaultSize:Ne,size:N||{height:"auto"},style:q}:{minWidth:0,minHeight:0,size:{width:0,height:0}},ne=(0,s.useMemo)(function(){switch(F){case"top":return{className:"Bottom",Arrow:K.Z};case"bottom":return{className:"Top",Arrow:L.Z};case"right":return{className:"Left",Arrow:B.Z};case"left":return{className:"Right",Arrow:v.Z}}},[ce,F]),be=ne.Arrow,Se=ne.className;return(0,M.jsxs)("div",{className:Xe(ce.container,ve),style:S()({},"border".concat(Se,"Width"),1),children:[je&&(0,M.jsx)(O.Z,{className:Xe(ce["toggle".concat(Se)]),onClick:function(){he(!ge)},style:{opacity:ge?void 0:1},children:(0,M.jsx)(be,{rotate:ge?180:0})}),(0,M.jsx)(p.e,j()(j()({},Q),{},{className:ce.fixed,enable:pe?Ae:void 0,handleClasses:Le,onResizeStop:function(Te,we,We,He){Ce==null||Ce(He,{width:We.style.width,height:We.style.height})},onResize:function(Te,we,We,He){Be==null||Be(He,{width:We.style.width,height:We.style.height})},children:i}))]})}),Y=e(85413),G=300,de=400,w=(0,s.memo)(function(b){var i=b.children,h=b.direction,F=b.resize,k=b.style,q=b.position,N=b.onPositionChange,H=b.size,X=b.defaultSize,ae=b.defaultPosition,te=b.minWidth,fe=te===void 0?280:te,Ce=b.minHeight,Be=Ce===void 0?200:Ce,Ue=b.maxHeight,je=b.maxWidth,Oe=b.canResizing,Qe=d(),ve=Qe.styles,_e=(0,s.useMemo)(function(){return Oe?{right:ve.rightHandle,left:ve.leftHandle,top:ve.topHandle,bottom:ve.bottomHandle}:{}},[Oe,h]),Re=(0,s.useMemo)(function(){return Oe?F:j()({top:!0,bottom:!0,right:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},F)},[Oe,F]),ce=j()({width:de,height:G},X),Xe=j()({x:100,y:100},ae),Ve={minWidth:Math.max(fe,0),minHeight:Math.max(Be,0),maxHeight:Ue?Math.max(Ue,0):void 0,maxWidth:je?Math.max(je,0):void 0,defaultSize:ce,size:H,style:k};return(0,M.jsx)(Y.s,j()(j()({position:q,resizeHandleClasses:_e,default:j()(j()({},Xe),ce),onDragStop:function(ge,he){N==null||N({x:he.x,y:he.y})},bound:"parent",enableResizing:Re},Ve),{},{className:ve.float,children:i}))}),V=(0,s.memo)(function(b){var i=b.children,h=b.className,F=b.mode,k=b.placement,q=b.resize,N=b.style,H=b.position,X=b.onPositionChange,ae=b.size,te=b.defaultSize,fe=b.defaultPosition,Ce=b.minWidth,Be=b.minHeight,Ue=b.maxHeight,je=b.maxWidth,Oe=b.onSizeChange,Qe=b.onSizeDragging,ve=b.expandable,_e=ve===void 0?!0:ve,Re=b.isExpand,ce=b.onExpandChange;switch(F){case"fixed":default:return(0,M.jsx)(J,{size:ae,defaultSize:te,onSizeDragging:Qe,onSizeChange:Oe,minHeight:Be,minWidth:Ce,maxHeight:Ue,maxWidth:je,resize:q,onExpandChange:ce,expandable:_e,isExpand:Re,className:h,placement:k,style:N,children:i});case"float":return(0,M.jsx)(w,{defaultPosition:fe,position:H,onPositionChange:X,minHeight:Be,minWidth:Ce,maxHeight:Ue,maxWidth:je,defaultSize:te,size:ae,onSizeDragging:Qe,onSizeChange:Oe,resize:q,canResizing:q!==!1,className:h,style:N,children:i})}}),ie=(0,n.nh)(V)},1495:function(ye,D,e){"use strict";e.d(D,{R:function(){return s._}});var s=e(82138)},76004:function(ye,D,e){"use strict";e.r(D),e.d(D,{default:function(){return $}});var s=e(25298),n=e.n(s),m=e(17069),j=e.n(m),y=e(62657),S=e.n(y),r=e(21742),C=e.n(r),p=e(83136),O=e.n(p),A=e(82092),K=e.n(A),L=e(5402),B=e(4401),v=e(68084),c=e(57820),P=e(15258),x=e(82901),o=e(75271),t=e(90142),l=e(52676),I=L.Z.Title,u=L.Z.Text,$=function(_){C()(R,_);var U=O()(R);function R(){var f;n()(this,R);for(var g=arguments.length,a=new Array(g),W=0;W<g;W++)a[W]=arguments[W];return f=U.call.apply(U,[this].concat(a)),K()(S()(f),"state",{error:void 0,info:{componentStack:""}}),K()(S()(f),"errorInfo",function(){var d,M=f.state,E=M.error,T=M.info;return(0,l.jsxs)(t.D,{style:{width:800,background:"rgba(0,0,0,0.02)",padding:"24px 40px"},gap:12,children:[(0,l.jsx)("div",{children:(0,l.jsxs)(u,{children:["\u9519\u8BEF\u4FE1\u606F\uFF1A",E==null?void 0:E.toString()]})}),(0,l.jsx)(t.D,{children:(d=T==null?void 0:T.componentStack.split(`
`).map(function(z,J){return(0,l.jsx)("div",{style:{textAlign:"left",fontSize:10},children:(0,l.jsx)(u,{type:"secondary",children:z})},z+J)}))!==null&&d!==void 0?d:null})]})}),K()(S()(f),"prodInfo",function(){var d=f.props.onExportConfig;return(0,l.jsxs)(t.D,{align:"center",children:[(0,l.jsx)(B.Z,{image:(0,l.jsx)("div",{style:{fontSize:80,lineHeight:1},children:"\u{1F914}"}),description:(0,l.jsxs)(t.D,{gap:16,children:[(0,l.jsx)(I,{level:5,children:" \u7EC4\u4EF6\u6E32\u67D3\u4F3C\u4E4E\u51FA\u4E86\u70B9\u5C0F\u95EE\u9898 "}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{type:"secondary",children:"\u4E0D\u8FC7\u522B\u62C5\u5FC3\uFF0C\u4F60\u7684\u6570\u636E\u90FD\u8FD8\u5728\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5BFC\u51FA\u6570\u636E\u540E\u91CD\u8BD5"}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{style:{marginTop:8},children:(0,l.jsx)(u,{type:"secondary",children:"\u5982\u91CD\u8BD5\u540E\u4ECD\u7136\u5B58\u5728\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u4EBA\u5458"})})]})]}),children:(0,l.jsx)("div",{children:(0,l.jsxs)(v.Z,{children:[(0,l.jsx)(c.ZP,{type:"primary",onClick:d,children:"\u5BFC\u51FA\u914D\u7F6E"}),(0,l.jsx)(c.ZP,{onClick:function(){P.ZP.success("\u5DF2\u63D0\u4EA4Bug")},children:"\u63D0\u4EA4Bug"})]})})}),(0,l.jsx)("div",{style:{marginTop:24},children:f.errorInfo()})]})}),f}return j()(R,[{key:"componentDidCatch",value:function(g,a){this.setState({error:g,info:a})}},{key:"render",value:function(){var g=this.props,a=g.children,W=g.onRetry,d=g.showDev,M=d===void 0?!1:d,E=this.state,T=E.error,z=E.info;if(T){var J;return(0,l.jsx)(t.D,{style:{padding:24},children:M?(0,l.jsx)(x.Z,{type:"error",message:T.toString(),showIcon:!0,description:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{overflow:"auto",maxHeight:"calc(100vh - 200px)"},children:(J=z==null?void 0:z.componentStack.split(`
`).map(function(Y,G){return(0,l.jsx)("div",{style:{textAlign:"left",fontSize:10},children:(0,l.jsx)(u,{type:"secondary",children:Y})},Y+G)}))!==null&&J!==void 0?J:null}),(0,l.jsx)("div",{style:{marginTop:24},children:(0,l.jsx)(c.ZP,{type:"primary",onClick:W,children:"\u91CD\u8BD5"})})]})}):this.prodInfo()})}return(0,l.jsx)(l.Fragment,{children:a})}}]),R}(o.Component)},87795:function(ye,D,e){"use strict";e.d(D,{Z:function(){return W}});var s=e(94640),n=e(50803),m=e(53649),j=e.n(m),y=e(69866),S,r,C,p=(0,y.kc)(function(d){var M=d.css;return{canvas:M(S||(S=j()([`
    height: 100%;
  `]))),control:M(r||(r=j()([`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 100;
  `]))),flow:M(C||(C=j()([`
    .react-flow {
      &__attribution {
        display: none;
      }

      &__pane,
      &__node {
        cursor: auto;
      }
    }
  `])))}}),O=e(52676),A=function(M){var E=M.data,T=p(),z=T.styles;return(0,O.jsx)("div",{className:z.canvas,children:E})},K=A,L=e(91970),B=e(81347),v=e(68666),c=e(50518),P=e(57820),x=e(94456),o=e(68084),t=e(14909),l=e(5899),I=e.n(l),u=e(75271),$=e(55471),_=(0,u.memo)(function(){var d=(0,s._K)(),M=(0,s.Sj)(),E=M.zoom,T=function(){E===1?d.zoomTo(.5):d.zoomTo(1)};return(0,O.jsx)(c.Z,{title:E===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,O.jsxs)(P.ZP,{onClick:T,style:{width:64},children:[Math.round(E*100),"%"]})})}),U=(0,u.memo)(function(d){var M=d.viewport,E=d.extraBtns,T=E===void 0?[]:E,z=(0,t.Fg)(),J=(0,s._K)(),Y=function(){J.zoomIn()},G=function(){J.zoomOut()},de=function(){J.fitView()};return(0,u.useEffect)(function(){I()(J.getViewport(),M)||J.setViewport(M)},[M]),(0,O.jsx)(x.ZP,{theme:{token:{colorBgContainer:z.colorBgElevated}},children:(0,O.jsx)($.Z,{padding:8,children:(0,O.jsxs)(o.Z,{children:[(0,O.jsx)(P.ZP,{icon:(0,O.jsx)(L.Z,{}),onClick:G}),(0,O.jsx)(_,{}),(0,O.jsx)(P.ZP,{icon:(0,O.jsx)(B.Z,{}),onClick:Y}),(0,O.jsx)(c.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,O.jsx)(P.ZP,{icon:(0,O.jsx)(v.Z,{}),onClick:de})}),T]})})})}),R=U,f=e(95846),g={artboard:K},a=function(M){var E=M.children,T=M.viewport,z=M.defaultViewport,J=M.onViewportChange,Y=M.control,G=Y===void 0?!0:Y,de=M.extraControlBtns,w=de===void 0?[]:de,V=p(),ie=V.styles;return(0,O.jsx)(s.tV,{children:(0,O.jsxs)(s.x$,{minZoom:.25,maxZoom:4,nodes:[{id:"artboard",type:"artboard",data:E,draggable:!1,connectable:!1,position:{x:0,y:0}}],defaultViewport:z,onMove:function(i,h){J==null||J(h)},nodeTypes:g,fitView:!0,onlyRenderVisibleElements:!0,panOnScroll:!0,className:ie.flow,panOnDrag:!1,zoomOnScroll:!1,children:[G&&(0,O.jsx)("div",{className:ie.control,children:(0,O.jsx)(R,{viewport:T,extraBtns:w})}),(0,O.jsx)(n.A,{color:"#aaa",gap:16,style:{zIndex:-1}})]})})},W=a},48392:function(ye,D,e){"use strict";e.d(D,{Z:function(){return o}});var s=e(84026),n=e(87080),m=e(82187),j=e.n(m),y=e(75271),S=e(55471),r=e(42623),C=e(53649),p=e.n(C),O=e(69866),A=e(975),K,L,B,v,c=(0,O.kc)(function(t,l){var I=t.css,u=t.cx,$=t.token,_=t.prefixCls,U=l.lineNumber,R=l.theme,f="".concat(_,"-").concat($.editorPrefix,"-highlight"),g=(0,A.p)(R==="dark"),a=g.colorTextTertiary,W=I(K||(K=p()([`
    code {
      counter-reset: step;
      counter-increment: step 0;
    }

    code .line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-align: right;
      color: rgba(115, 138, 148, 0.4);
      user-select: none;
    }
  `])));return{shiki:u("".concat(f,"-shiki"),I(L||(L=p()([`
        .shiki {
          overflow-x: scroll;
          background: none !important;
          `,`
        }
      `])),U?W:"")),loading:u(I(B||(B=p()([`
      color: `,`;
    `])),a)),center:u(I(v||(v=p()([`
        backdrop-filter: saturate(180%) blur(10px);
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        height: 36px;
        padding: 0 8px;

        font-family: `,`;
        color: `,`;

        border-radius: `,`;
      `])),$.fontFamilyCode,a,$.borderRadius))}}),P=e(52676),x=(0,y.memo)(function(t){var l=t.children,I=t.lineNumber,u=I===void 0?!1:I,$=t.theme,_=$===void 0?s.qx:$,U=t.language,R=c({lineNumber:u,theme:_}),f=R.styles,g=(0,r.Y)(U,_),a=g.renderShiki,W=g.loading;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:j()(f.shiki),dangerouslySetInnerHTML:{__html:a(l)||""}}),W?(0,P.jsx)(S.Z,{className:f.center,gap:8,horizontal:!0,children:(0,P.jsx)(n.Z,{spin:!0,className:f.loading})}):null]})}),o=x},42623:function(ye,D,e){"use strict";e.d(D,{W:function(){return L},Y:function(){return B}});var s=e(90228),n=e.n(s),m=e(87999),j=e.n(m),y=e(48305),S=e.n(y),r=e(90795),C=e.n(r),p=e(75271),O=e(59570),A=e(975),K=function(c){var P=(0,A.p)(c),x=P.type,o=P.colorBlue,t=P.colorGreen,l=P.colorOrange,I=P.colorRed,u=P.colorText,$=P.colorTextSecondary,_=P.colorTextTertiary;return{name:x,type:x,semanticHighlighting:!0,semanticTokenColors:{enumMember:{foreground:o},"variable.constant":{foreground:t},"variable.defaultLibrary":{foreground:I},"variable:dart":{foreground:t},"property:dart":{foreground:t},"annotation:dart":{foreground:t},"parameter.label:dart":{foreground:_},macro:{foreground:t},tomlArrayKey:{foreground:I}},tokenColors:[{scope:"meta.embedded",settings:{foreground:_}},{name:"unison punctuation",scope:"punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",settings:{foreground:u}},{name:"haskell variable generic-type",scope:"variable.other.generic-type.haskell",settings:{foreground:o}},{name:"haskell storage type",scope:"storage.type.haskell",settings:{foreground:t}},{name:"support.variable.magic.python",scope:"support.variable.magic.python",settings:{foreground:u}},{name:"punctuation.separator.parameters.python",scope:"punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",settings:{foreground:_}},{name:"variable.parameter.function.language.special.self.python",scope:"variable.parameter.function.language.special.self.python",settings:{foreground:I}},{name:"variable.parameter.function.language.special.cls.python",scope:"variable.parameter.function.language.special.cls.python",settings:{foreground:I}},{name:"storage.modifier.lifetime.rust",scope:"storage.modifier.lifetime.rust",settings:{foreground:_}},{name:"support.function.std.rust",scope:"support.function.std.rust",settings:{foreground:l}},{name:"entity.name.lifetime.rust",scope:"entity.name.lifetime.rust",settings:{foreground:I}},{name:"variable.language.rust",scope:"variable.language.rust",settings:{foreground:u}},{name:"support.constant.edge",scope:"support.constant.edge",settings:{foreground:o}},{name:"regexp constant character-class",scope:"constant.other.character-class.regexp",settings:{foreground:u}},{name:"keyword.operator",scope:["keyword.operator.word"],settings:{foreground:o}},{name:"regexp operator.quantifier",scope:"keyword.operator.quantifier.regexp",settings:{foreground:t}},{name:"Text",scope:"variable.parameter.function",settings:{foreground:_}},{name:"Comment Markup Link",scope:"comment markup.link",settings:{foreground:_}},{name:"markup diff",scope:"markup.changed.diff",settings:{foreground:I}},{name:"diff",scope:"meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",settings:{foreground:l}},{name:"inserted.diff",scope:"markup.inserted.diff",settings:{foreground:t}},{name:"deleted.diff",scope:"markup.deleted.diff",settings:{foreground:u}},{name:"c++ function",scope:"meta.function.c,meta.function.cpp",settings:{foreground:u}},{name:"c++ block",scope:"punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",settings:{foreground:_}},{name:"js/ts punctuation separator key-value",scope:"punctuation.separator.key-value",settings:{foreground:_}},{name:"js/ts import keyword",scope:"keyword.operator.expression.import",settings:{foreground:l}},{name:"math js/ts",scope:"support.constant.math",settings:{foreground:I}},{name:"math property js/ts",scope:"support.constant.property.math",settings:{foreground:t}},{name:"js/ts variable.other.constant",scope:"variable.other.constant",settings:{foreground:I}},{name:"java type",scope:["storage.type.annotation.java","storage.type.object.array.java"],settings:{foreground:I}},{name:"java source",scope:"source.java",settings:{foreground:u}},{name:"java modifier.import",scope:"punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",settings:{foreground:_}},{name:"java modifier.import",scope:"meta.method.java",settings:{foreground:l}},{name:"java modifier.import",scope:"storage.modifier.import.java,storage.type.java,storage.type.generic.java",settings:{foreground:I}},{name:"java instanceof",scope:"keyword.operator.instanceof.java",settings:{foreground:o}},{name:"java variable.name",scope:"meta.definition.variable.name.java",settings:{foreground:u}},{name:"operator logical",scope:"keyword.operator.logical",settings:{foreground:o}},{name:"operator bitwise",scope:"keyword.operator.bitwise",settings:{foreground:o}},{name:"operator channel",scope:"keyword.operator.channel",settings:{foreground:o}},{name:"support.constant.property-value.scss",scope:"support.constant.property-value.scss,support.constant.property-value.css",settings:{foreground:t}},{name:"CSS/SCSS/LESS Operators",scope:"keyword.operator.css,keyword.operator.scss,keyword.operator.less",settings:{foreground:o}},{name:"css color standard name",scope:"support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",settings:{foreground:t}},{name:"css comma",scope:"punctuation.separator.list.comma.css",settings:{foreground:_}},{name:"css attribute-name.id",scope:"support.constant.color.w3c-standard-color-name.css",settings:{foreground:t}},{name:"css property-name",scope:"support.type.vendored.property-name.css",settings:{foreground:o}},{name:"js/ts module",scope:"support.module.node,support.type.object.module,support.module.node",settings:{foreground:I}},{name:"entity.name.type.module",scope:"entity.name.type.module",settings:{foreground:I}},{name:"js variable readwrite",scope:"variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",settings:{foreground:u}},{name:"js/ts json",scope:"support.constant.json",settings:{foreground:t}},{name:"js/ts Keyword",scope:["keyword.operator.expression.instanceof","keyword.operator.new","keyword.operator.ternary","keyword.operator.optional","keyword.operator.expression.keyof"],settings:{foreground:o}},{name:"js/ts console",scope:"support.type.object.console",settings:{foreground:u}},{name:"js/ts support.variable.property.process",scope:"support.variable.property.process",settings:{foreground:t}},{name:"js console function",scope:"entity.name.function,support.function.console",settings:{foreground:l}},{name:"keyword.operator.misc.rust",scope:"keyword.operator.misc.rust",settings:{foreground:_}},{name:"keyword.operator.sigil.rust",scope:"keyword.operator.sigil.rust",settings:{foreground:o}},{name:"operator",scope:"keyword.operator.delete",settings:{foreground:o}},{name:"js dom",scope:"support.type.object.dom",settings:{foreground:o}},{name:"js dom variable",scope:"support.variable.dom,support.variable.property.dom",settings:{foreground:u}},{name:"keyword.operator",scope:"keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",settings:{foreground:o}},{name:"C operator assignment",scope:"keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",settings:{foreground:o}},{name:"Punctuation",scope:"punctuation.separator.delimiter",settings:{foreground:_}},{name:"Other punctuation .c",scope:"punctuation.separator.c,punctuation.separator.cpp",settings:{foreground:o}},{name:"C type posix-reserved",scope:"support.type.posix-reserved.c,support.type.posix-reserved.cpp",settings:{foreground:o}},{name:"keyword.operator.sizeof.c",scope:"keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",settings:{foreground:o}},{name:"python parameter",scope:"variable.parameter.function.language.python",settings:{foreground:t}},{name:"python type",scope:"support.type.python",settings:{foreground:o}},{name:"python logical",scope:"keyword.operator.logical.python",settings:{foreground:o}},{name:"pyCs",scope:"variable.parameter.function.python",settings:{foreground:t}},{name:"python block",scope:"punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",settings:{foreground:_}},{name:"python function-call.generic",scope:"meta.function-call.generic.python",settings:{foreground:l}},{name:"python placeholder reset to normal string",scope:"constant.character.format.placeholder.other.python",settings:{foreground:t}},{name:"Operators",scope:"keyword.operator",settings:{foreground:_}},{name:"Compound Assignment Operators",scope:"keyword.operator.assignment.compound",settings:{foreground:o}},{name:"Compound Assignment Operators js/ts",scope:"keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",settings:{foreground:o}},{name:"Keywords",scope:"keyword",settings:{foreground:o}},{name:"Namespaces",scope:"entity.name.namespace",settings:{foreground:I}},{name:"Variables",scope:"variable",settings:{foreground:u}},{name:"Variables",scope:"variable.c",settings:{foreground:_}},{name:"Language variables",scope:"variable.language",settings:{foreground:I}},{name:"Java Variables",scope:"token.variable.parameter.java",settings:{foreground:_}},{name:"Java Imports",scope:"import.storage.java",settings:{foreground:I}},{name:"Packages",scope:"token.package.keyword",settings:{foreground:o}},{name:"Packages",scope:"token.package",settings:{foreground:_}},{name:"Functions",scope:["entity.name.function","meta.require","support.function.any-method","variable.function"],settings:{foreground:l}},{name:"Classes",scope:"entity.name.type.namespace",settings:{foreground:I}},{name:"Classes",scope:"support.class, entity.name.type.class",settings:{foreground:I}},{name:"Class name",scope:"entity.name.class.identifier.namespace.type",settings:{foreground:I}},{name:"Class name",scope:["entity.name.class","variable.other.class.js","variable.other.class.ts"],settings:{foreground:I}},{name:"Class name php",scope:"variable.other.class.php",settings:{foreground:u}},{name:"Type Name",scope:"entity.name.type",settings:{foreground:I}},{name:"Keyword Control",scope:"keyword.control",settings:{foreground:o}},{name:"Control Elements",scope:"control.elements, keyword.operator.less",settings:{foreground:t}},{name:"Methods",scope:"keyword.other.special-method",settings:{foreground:l}},{name:"Storage",scope:"storage",settings:{foreground:o}},{name:"Storage JS TS",scope:"token.storage",settings:{foreground:o}},{name:"Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",scope:"keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",settings:{foreground:o}},{name:"Java Storage",scope:"token.storage.type.java",settings:{foreground:I}},{name:"Support",scope:"support.function",settings:{foreground:o}},{name:"Support type",scope:"support.type.property-name",settings:{foreground:_}},{name:"[VSCODE-CUSTOM] toml support",scope:"support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",settings:{foreground:u}},{name:"Support type",scope:"support.constant.property-value",settings:{foreground:_}},{name:"Support type",scope:"support.constant.font-name",settings:{foreground:t}},{name:"Meta tag",scope:"meta.tag",settings:{foreground:_}},{name:"Strings",scope:"string",settings:{foreground:t}},{name:"Constant other symbol",scope:"constant.other.symbol",settings:{foreground:o}},{name:"Integers",scope:"constant.numeric",settings:{foreground:t}},{name:"Constants",scope:"constant",settings:{foreground:t}},{name:"Constants",scope:"punctuation.definition.constant",settings:{foreground:t}},{name:"Tags",scope:"entity.name.tag",settings:{foreground:u}},{name:"Attributes",scope:"entity.other.attribute-name",settings:{foreground:t}},{name:"Attribute IDs",scope:"entity.other.attribute-name.id",settings:{foreground:l}},{name:"Attribute class",scope:"entity.other.attribute-name.class.css",settings:{foreground:t}},{name:"Selector",scope:"meta.selector",settings:{foreground:o}},{name:"Headings",scope:"markup.heading",settings:{foreground:u}},{name:"Headings",scope:"markup.heading punctuation.definition.heading, entity.name.section",settings:{foreground:l}},{name:"Units",scope:"keyword.other.unit",settings:{foreground:u}},{name:"Bold",scope:"markup.bold,todo.bold",settings:{foreground:t}},{name:"Bold",scope:"punctuation.definition.bold",settings:{foreground:I}},{name:"markup Italic",scope:"markup.italic, punctuation.definition.italic,todo.emphasis",settings:{foreground:o}},{name:"emphasis md",scope:"emphasis md",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown headings",scope:"entity.name.section.markdown",settings:{foreground:u}},{name:"[VSCODE-CUSTOM] Markdown heading Punctuation Definition",scope:"punctuation.definition.heading.markdown",settings:{foreground:u}},{name:"punctuation.definition.list.begin.markdown",scope:"punctuation.definition.list.begin.markdown",settings:{foreground:I}},{name:"[VSCODE-CUSTOM] Markdown heading setext",scope:"markup.heading.setext",settings:{foreground:_}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",scope:"punctuation.definition.bold.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw",scope:"markup.inline.raw.string.markdown",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Markdown Inline Raw punctuation",scope:"punctuation.definition.raw.markdown",settings:{foreground:I}},{name:"[VSCODE-CUSTOM] Markdown List Punctuation Definition",scope:"punctuation.definition.list.markdown",settings:{foreground:I}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition String",scope:["punctuation.definition.string.begin.markdown","punctuation.definition.string.end.markdown","punctuation.definition.metadata.markdown"],settings:{foreground:u}},{name:"beginning.punctuation.definition.list.markdown",scope:["beginning.punctuation.definition.list.markdown"],settings:{foreground:u}},{name:"[VSCODE-CUSTOM] Markdown Punctuation Definition Link",scope:"punctuation.definition.metadata.markdown",settings:{foreground:u}},{name:"[VSCODE-CUSTOM] Markdown Underline Link/Image",scope:"markup.underline.link.markdown,markup.underline.link.image.markdown",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Markdown Link Title/Description",scope:"string.other.link.title.markdown,string.other.link.description.markdown",settings:{foreground:l}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw",scope:"markup.raw.monospace.asciidoc",settings:{foreground:t}},{name:"[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",scope:"punctuation.definition.asciidoc",settings:{foreground:I}},{name:"[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",scope:"markup.list.asciidoc",settings:{foreground:I}},{name:"[VSCODE-CUSTOM] Asciidoc underline link",scope:"markup.link.asciidoc,markup.other.url.asciidoc",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] Asciidoc link name",scope:"string.unquoted.asciidoc,markup.other.url.asciidoc",settings:{foreground:l}},{name:"Regular Expressions",scope:"string.regexp",settings:{foreground:o}},{name:"Embedded",scope:"punctuation.section.embedded, variable.interpolation",settings:{foreground:u}},{name:"Embedded",scope:"punctuation.section.embedded.begin,punctuation.section.embedded.end",settings:{foreground:o}},{name:"illegal",scope:"invalid.illegal",settings:{foreground:u}},{name:"illegal",scope:"invalid.illegal.bad-ampersand.html",settings:{foreground:_}},{scope:"invalid.illegal.unrecognized-tag.html",settings:{foreground:u}},{name:"Broken",scope:"invalid.broken",settings:{foreground:u}},{name:"Deprecated",scope:"invalid.deprecated",settings:{foreground:u}},{name:"html Deprecated",scope:"invalid.deprecated.entity.other.attribute-name.html",settings:{foreground:t}},{name:"Unimplemented",scope:"invalid.unimplemented",settings:{foreground:u}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json",scope:"source.json meta.structure.dictionary.json > string.quoted.json",settings:{foreground:u}},{name:"Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",scope:"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",settings:{foreground:u}},{name:"Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",scope:"source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",settings:{foreground:t}},{name:"Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",scope:"source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",settings:{foreground:o}},{name:"[VSCODE-CUSTOM] JSON Property Name",scope:"support.type.property-name.json",settings:{foreground:u}},{name:"[VSCODE-CUSTOM] JSON Punctuation for Property Name",scope:"support.type.property-name.json punctuation",settings:{foreground:u}},{name:"laravel blade tag",scope:"text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",settings:{foreground:o}},{name:"laravel blade @",scope:"text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",settings:{foreground:o}},{name:"use statement for other classes",scope:"support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",settings:{foreground:I}},{name:"error suppression",scope:"keyword.operator.error-control.php",settings:{foreground:o}},{name:"php instanceof",scope:"keyword.operator.type.php",settings:{foreground:o}},{name:"style double quoted array index normal begin",scope:"punctuation.section.array.begin.php",settings:{foreground:_}},{name:"style double quoted array index normal end",scope:"punctuation.section.array.end.php",settings:{foreground:_}},{name:"php illegal.non-null-typehinted",scope:"invalid.illegal.non-null-typehinted.php",settings:{foreground:I}},{name:"php types",scope:"storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",settings:{foreground:I}},{name:"php call-function",scope:"meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",settings:{foreground:l}},{name:"php function-resets",scope:"punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",settings:{foreground:_}},{name:"support php constants",scope:"support.constant.core.rust",settings:{foreground:t}},{name:"support php constants",scope:"support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",settings:{foreground:t}},{name:"php goto",scope:"entity.name.goto-label.php,support.other.php",settings:{foreground:l}},{name:"php logical/bitwise operator",scope:"keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",settings:{foreground:o}},{name:"php regexp operator",scope:"keyword.operator.regexp.php",settings:{foreground:o}},{name:"php comparison",scope:"keyword.operator.comparison.php",settings:{foreground:o}},{name:"php heredoc/nowdoc",scope:"keyword.operator.heredoc.php,keyword.operator.nowdoc.php",settings:{foreground:o}},{name:"python function decorator @",scope:"meta.function.decorator.python",settings:{foreground:l}},{name:"python function support",scope:"support.token.decorator.python,meta.function.decorator.identifier.python",settings:{foreground:o}},{name:"parameter function js/ts",scope:"function.parameter",settings:{foreground:_}},{name:"brace function",scope:"function.brace",settings:{foreground:_}},{name:"parameter function ruby cs",scope:"function.parameter.ruby, function.parameter.cs",settings:{foreground:_}},{name:"constant.language.symbol.ruby",scope:"constant.language.symbol.ruby",settings:{foreground:o}},{name:"constant.language.symbol.hashkey.ruby",scope:"constant.language.symbol.hashkey.ruby",settings:{foreground:o}},{name:"rgb-value",scope:"rgb-value",settings:{foreground:o}},{name:"rgb value",scope:"inline-color-decoration rgb-value",settings:{foreground:t}},{name:"rgb value less",scope:"less rgb-value",settings:{foreground:t}},{name:"sass selector",scope:"selector.sass",settings:{foreground:u}},{name:"ts primitive/builtin types",scope:"support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",settings:{foreground:I}},{name:"block scope",scope:"block.scope.end,block.scope.begin",settings:{foreground:_}},{name:"cs storage type",scope:"storage.type.cs",settings:{foreground:I}},{name:"cs local variable",scope:"entity.name.variable.local.cs",settings:{foreground:u}},{scope:"token.info-token",settings:{foreground:l}},{scope:"token.warn-token",settings:{foreground:t}},{scope:"token.error-token",settings:{foreground:I}},{scope:"token.debug-token",settings:{foreground:o}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:o}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:_}},{name:"Import module JS",scope:["keyword.operator.module"],settings:{foreground:o}},{name:"js Flowtype",scope:["support.type.type.flowtype"],settings:{foreground:l}},{name:"js Flow",scope:["support.type.primitive"],settings:{foreground:I}},{name:"js class prop",scope:["meta.property.object"],settings:{foreground:u}},{name:"js func parameter",scope:["variable.parameter.function.js"],settings:{foreground:u}},{name:"js template literals begin",scope:["keyword.other.template.begin"],settings:{foreground:t}},{name:"js template literals end",scope:["keyword.other.template.end"],settings:{foreground:t}},{name:"js template literals variable braces begin",scope:["keyword.other.substitution.begin"],settings:{foreground:t}},{name:"js template literals variable braces end",scope:["keyword.other.substitution.end"],settings:{foreground:t}},{name:"js operator.assignment",scope:["keyword.operator.assignment"],settings:{foreground:o}},{name:"go operator",scope:["keyword.operator.assignment.go"],settings:{foreground:I}},{name:"go operator",scope:["keyword.operator.arithmetic.go","keyword.operator.address.go"],settings:{foreground:o}},{name:"Go package name",scope:["entity.name.package.go"],settings:{foreground:I}},{name:"elm prelude",scope:["support.type.prelude.elm"],settings:{foreground:o}},{name:"elm constant",scope:["support.constant.elm"],settings:{foreground:t}},{name:"template literal",scope:["punctuation.quasi.element"],settings:{foreground:o}},{name:"html/pug (jade) escaped characters and entities",scope:["constant.character.entity"],settings:{foreground:u}},{name:"styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",scope:["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],settings:{foreground:o}},{name:"Clojure globals",scope:["entity.global.clojure"],settings:{foreground:I}},{name:"Clojure symbols",scope:["meta.symbol.clojure"],settings:{foreground:u}},{name:"Clojure constants",scope:["constant.keyword.clojure"],settings:{foreground:o}},{name:"CoffeeScript Function Argument",scope:["meta.arguments.coffee","variable.parameter.function.coffee"],settings:{foreground:u}},{name:"Ini Default Text",scope:["source.ini"],settings:{foreground:t}},{name:"Makefile prerequisities",scope:["meta.scope.prerequisites.makefile"],settings:{foreground:u}},{name:"Makefile text colour",scope:["source.makefile"],settings:{foreground:I}},{name:"Groovy import names",scope:["storage.modifier.import.groovy"],settings:{foreground:I}},{name:"Groovy Methods",scope:["meta.method.groovy"],settings:{foreground:l}},{name:"Groovy Variables",scope:["meta.definition.variable.name.groovy"],settings:{foreground:u}},{name:"Groovy Inheritance",scope:["meta.definition.class.inherited.classes.groovy"],settings:{foreground:t}},{name:"HLSL Semantic",scope:["support.variable.semantic.hlsl"],settings:{foreground:I}},{name:"HLSL Types",scope:["support.type.texture.hlsl","support.type.sampler.hlsl","support.type.object.hlsl","support.type.object.rw.hlsl","support.type.fx.hlsl","support.type.object.hlsl"],settings:{foreground:o}},{name:"SQL Variables",scope:["text.variable","text.bracketed"],settings:{foreground:u}},{name:"types",scope:["support.type.swift","support.type.vb.asp"],settings:{foreground:I}},{name:"heading 1, keyword",scope:["entity.name.function.xi"],settings:{foreground:I}},{name:"heading 2, callable",scope:["entity.name.class.xi"],settings:{foreground:o}},{name:"heading 3, property",scope:["constant.character.character-class.regexp.xi"],settings:{foreground:u}},{name:"heading 4, type, class, interface",scope:["constant.regexp.xi"],settings:{foreground:o}},{name:"heading 5, enums, preprocessor, constant, decorator",scope:["keyword.control.xi"],settings:{foreground:o}},{name:"heading 6, number",scope:["invalid.xi"],settings:{foreground:_}},{name:"string",scope:["beginning.punctuation.definition.quote.markdown.xi"],settings:{foreground:t}},{name:"comments",scope:["beginning.punctuation.definition.list.markdown.xi"],settings:{foreground:_}},{name:"link",scope:["constant.character.xi"],settings:{foreground:l}},{name:"accent",scope:["accent.xi"],settings:{foreground:l}},{name:"wikiword",scope:["wikiword.xi"],settings:{foreground:t}},{name:"language operators like '+', '-' etc",scope:["constant.other.color.rgb-value.xi"],settings:{foreground:u}},{name:"elements to dim",scope:["punctuation.definition.tag.xi"],settings:{foreground:_}},{name:"C++/C#",scope:["entity.name.label.cs","entity.name.scope-resolution.function.call","entity.name.scope-resolution.function.definition"],settings:{foreground:I}},{name:"Markdown underscore-style headers",scope:["entity.name.label.cs","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],settings:{foreground:u}},{name:"meta.brace.square",scope:[" meta.brace.square"],settings:{foreground:_}},{name:"Comments",scope:"comment, punctuation.definition.comment",settings:{foreground:_,fontStyle:"italic"}},{name:"[VSCODE-CUSTOM] Markdown Quote",scope:"markup.quote.markdown",settings:{foreground:_}},{name:"punctuation.definition.block.sequence.item.yaml",scope:"punctuation.definition.block.sequence.item.yaml",settings:{foreground:_}},{scope:["constant.language.symbol.elixir","constant.language.symbol.double-quoted.elixir"],settings:{foreground:o}},{scope:["entity.name.variable.parameter.cs"],settings:{foreground:I}},{scope:["entity.name.variable.field.cs"],settings:{foreground:u}},{name:"Deleted",scope:"markup.deleted",settings:{foreground:u}},{name:"Inserted",scope:"markup.inserted",settings:{foreground:t}},{name:"Underline",scope:"markup.underline",settings:{fontStyle:"underline"}},{name:"punctuation.section.embedded.begin.php",scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:I}},{name:"support.other.namespace.php",scope:["support.other.namespace.php"],settings:{foreground:_}},{name:"variable.other.object",scope:["variable.other.object"],settings:{foreground:I}},{name:"variable.other.constant.property",scope:["variable.other.constant.property"],settings:{foreground:u}},{name:"entity.other.inherited-class",scope:["entity.other.inherited-class"],settings:{foreground:I}},{name:"c variable readwrite",scope:"variable.other.readwrite.c",settings:{foreground:u}},{name:"php scope",scope:"entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",settings:{foreground:_}},{name:"Assembly",scope:["constant.numeric.decimal.asm.x86_64"],settings:{foreground:o}},{scope:["support.other.parenthesis.regexp"],settings:{foreground:t}},{scope:["constant.character.escape"],settings:{foreground:o}},{scope:["string.regexp"],settings:{foreground:u}},{scope:["log.info"],settings:{foreground:t}},{scope:["log.warning"],settings:{foreground:I}},{scope:["log.error"],settings:{foreground:u}},{name:"js/ts italic",scope:"entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",settings:{fontStyle:"italic"}},{name:"comment",scope:"comment.line.double-slash,comment.block.documentation",settings:{fontStyle:"italic"}},{name:"Python Keyword Control",scope:"keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",settings:{fontStyle:"italic"}},{name:"markup.italic.markdown",scope:"markup.italic.markdown",settings:{fontStyle:"italic"}}],colors:{"editor.foreground":$}}},L=["javascript","typescript","css","json","markdown","xml","html","yaml","tsx","jsx","java","python","sql","bash","sh","vue","vue-html"],B=function(c,P){var x=(0,p.useState)(null),o=S()(x,2),t=o[0],l=o[1],I=function(){var $=j()(n()().mark(function _(){var U;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,O.FP)({langs:L,themes:[K(!0),K(!1)]});case 2:U=f.sent,l(U);case 4:case"end":return f.stop()}},_)}));return function(){return $.apply(this,arguments)}}();(0,p.useEffect)(function(){I()},[]);var u=function(_){if(t&&t.getLoadedLanguages().includes(c)){var U=t==null?void 0:t.codeToHtml(_,{lang:c,theme:P});return C().sanitize(U)}else return C().sanitize("<pre><code>".concat(_,"</code></pre>"))};return{loading:!t,renderShiki:u}}},74914:function(ye,D,e){"use strict";e.d(D,{W:function(){return J.W},y:function(){return ie}});var s=e(26068),n=e.n(s),m=e(96206),j=e(15130),y=e(82187),S=e.n(y),r=e(75271),C=e(48305),p=e.n(C),O=e(96860),A=e(18233),K=e(58226),L=e.n(K),B=e(53649),v=e.n(B),c=e(69866),P=e(975),x,o,t=(0,c.kc)(function(b,i){var h=b.css,F=b.token,k=b.prefixCls,q=b.cx,N=i.theme,H="".concat(k,"-").concat(F.editorPrefix,"-highlight"),X=(0,P.p)(N==="dark"),ae=X.colorFillTertiary,te=X.colorText;return{copy:q("".concat(H,"-copy"),h(x||(x=v()([`
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
      `])),ae)),copyIcon:q("".concat(H,"-copy-icon"),h(o||(o=v()([`
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
      `])),te))}}),l=e(52676),I=function(i){var h=i.content,F=i.onCopy,k=i.theme,q=k===void 0?"light":k,N=i.style,H=(0,r.useState)(),X=p()(H,2),ae=X[0],te=X[1],fe=t({theme:q}),Ce=fe.styles;(0,r.useEffect)(function(){return function(){window.clearTimeout(ae)}});var Be=(0,r.useState)(!1),Ue=p()(Be,2),je=Ue[0],Oe=Ue[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(L(),{text:h&&h.length?h:"",onCopy:function(){Oe(!0);var ve=window.setTimeout(function(){Oe(!1)},2e3);te(ve),F&&F(h)},children:(0,l.jsxs)("button",{type:"button",disabled:je,className:Ce.copy,style:N,children:[(0,l.jsx)(O.Z,{className:S()(Ce.copyIcon,{scoll:je})}),(0,l.jsx)(A.Z,{className:Ce.copyIcon,style:{color:"rgb(63,177,99)"}})]})})})},u=I,$=e(48392),_=e(29055),U=e(22305),R=e.n(U),f,g,a,W=(0,c.kc)(function(b,i){var h=b.cx,F=b.css,k=b.token,q=b.prefixCls,N=i.theme,H="".concat(q,"-").concat(k.editorPrefix,"-highlight"),X=(0,P.p)(N==="dark"),ae=X.colorFillTertiary,te=X.colorText,fe=X.colorTextSecondary,Ce=R()(ae).mix(R()(N==="dark"?"white":"black"),.03).alpha(.9).hsl().string();return{small:h("".concat(H,"-tag-small"),F(f||(f=v()([`
        padding: 2px 6px;
        line-height: 1;
      `])))),lang:h(F(g||(g=v()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: `,`;
        font-family: `,`;
        color: `,`;
        transition: opacity 0.1s;
      `])),Ce,k.fontFamilyCode,fe)),tag:h("".concat(H,"-tag"),F(a||(a=v()([`
        color: `,` !important;
        border-radius: `,`px;
        P &:hover {
          color: `,`;
          background: `,`;
        }
      `])),te,k.borderRadius,te,k.colorFill))}}),d=function(i){var h=i||{},F=h.children,k=h.size,q=k===void 0?"default":k,N=h.theme,H=N===void 0?"light":N,X=W({theme:H}),ae=X.styles,te=X.cx;return(0,l.jsx)(_.Z,{bordered:!1,className:te(ae.tag,ae.lang,q==="small"&&ae.small),children:F})},M=d,E=e(31759),T=e.n(E),z=function(i,h){var F=(0,r.useRef)();function k(q,N){return Object.keys(q).forEach(function(H){T()(q[H])==="object"&&q[H].handle?N.addEventListener(H,q[H].handle,q[H].options):N.addEventListener(H,q[H])}),function(){Object.keys(q).forEach(function(H){T()(q[H])==="object"&&q[H].handle?N.removeEventListener(H,q[H].handle,q[H].options):N.removeEventListener(H,q[H])})}}return(0,r.useEffect)(function(){if(i.current)return k({keydown:function(N){var H=window.getSelection();if((N.ctrlKey||N.metaKey)&&N.code==="KeyA"&&F.current&&i.current){var X=document.createRange();X.selectNodeContents(i.current),H.removeAllRanges(),H.addRange(X),N.preventDefault()}(N.ctrlKey||N.metaKey)&&N.code==="KeyC"&&F.current&&i.current&&h&&H&&h(H.toString())},focus:function(){F.current=!0},blur:function(){F.current=!1}},i.current)},[i.current,i]),null},J=e(42623),Y,G,de=(0,c.kc)(function(b,i){var h=b.css,F=b.cx,k=b.token,q=b.prefixCls,N=i.theme,H=i.type,X="".concat(q,"-").concat(k==null?void 0:k.editorPrefix,"-highlight"),ae=(0,P.p)(N==="dark"),te=ae.colorFillTertiary,fe=h(Y||(Y=v()([`
      background-color: `,`;
    `])),H==="block"?te:"transparent");return{container:F("".concat(X,"-container"),fe,h(G||(G=v()([`
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
        `])),k.borderRadius,k.motionEaseOut,X,X,H==="pure"?0:"16px 24px"))}}),w=e(84026),V=(0,r.memo)(function(b){var i=b.children,h=b.style,F=b.className,k=b.lineNumber,q=k===void 0?!1:k,N=b.copyable,H=N===void 0?!0:N,X=b.theme,ae=X===void 0?w.ly:X,te=b.language,fe=te===void 0?"tsx":te,Ce=b.showLanguage,Be=Ce===void 0?!0:Ce,Ue=b.type,je=Ue===void 0?"block":Ue,Oe=b.onCopy,Qe=(0,j.r)(),ve=Qe.appearance,_e=ve==="dark"?"dark":"light",Re=ae===w.ly?_e:ae,ce=de({theme:Re,type:je}),Xe=ce.styles,Ve=(0,r.createRef)();return z(Ve,Oe),(0,l.jsxs)("div",{ref:Ve,tabIndex:-1,style:h,className:S()(Xe.container,F),children:[H&&(0,l.jsx)(u,{onCopy:Oe,theme:Re,content:i}),Be&&fe&&(0,l.jsx)(M,{theme:Re,children:fe.toLowerCase()}),(0,l.jsx)($.Z,{lineNumber:q,language:fe,theme:Re,children:i})]})}),ie=function(i){return(0,l.jsx)(m.iV,{children:(0,l.jsx)(V,n()({},i))})}},975:function(ye,D,e){"use strict";e.d(D,{p:function(){return n}});var s={red:{light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"],dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"]},volcano:{light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"],dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"]},orange:{light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"],dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"]},gold:{light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"],dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"]},yellow:{light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"],dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"]},lime:{light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"],dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"]},green:{light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"],dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"]},cyan:{light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"],dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"]},blue:{light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"],dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"]},geekblue:{light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"],dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"]},purple:{light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"],dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"]},magenta:{light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"],dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"]},gray:{light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"],dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"]},bnw:{light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"],dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"]}},n=function(j){var y=j?"dark":"light",S=s.gray[y][11],r=j?s.gray[y][9]:s.gray[y][10],C=j?s.gray[y][6]:s.gray[y][7],p=j?"#2b303b":"#fafafa",O=j?s.red[y][9]:s.volcano[y][9],A=j?s.gold[y][9]:s.orange[y][9],K=j?s.lime[y][9]:s.green[y][9],L=j?s.blue[y][9]:s.geekblue[y][9];return{type:y,colorText:S,colorTextSecondary:r,colorTextTertiary:C,colorRed:O,colorOrange:A,colorGreen:K,colorBlue:L,colorFillTertiary:p}}},84026:function(ye,D,e){"use strict";e.d(D,{ly:function(){return m},qx:function(){return n}});var s="dark",n="light",m="auto",j=function(){for(var r=arguments.length,C=new Array(r),p=0;p<r;p++)C[p]=arguments[p];return C},y=j(s,n,m)},66917:function(ye,D,e){"use strict";e.d(D,{Z:function(){return Ke}});var s=e(26068),n=e.n(s),m=e(75271),j=e(90762),y=e(53649),S=e.n(y),r=e(88167),C=e(24939),p=e(14909),O=e(3341),A=e.n(O),K=e(24140),L=e(97412),B=e(79258),v=e(90228),c=e.n(v),P=e(87999),x=e.n(P),o=e(18846),t=function(ee){var me=/<symbol id="((?:\w|-)*)"/g;return Array.from(ee.matchAll(me)).map(function(ue){return ue[1]})},l=function(ee,me){return me===0?0:ee.length<=me+1?me-1:me},I=e(81593),u={open:!1,showForm:!1,panelTabKey:"antd",filterKeywords:"",antdIconList:I.A,icon:null,iconfontScripts:[],outsourceIconfontScripts:void 0,onIconfontScriptsChange:null,iconfontIconList:[],onIconChange:null},$=function(ee,me){return n()(n()({},u),{},{resetIcon:function(){ee({icon:null})},togglePanel:function(){ee(function(re){return n()(n()({},re),{},{open:!re.open})})},selectIcon:function(re){var le,Fe;ee({icon:re,open:!1,filterKeywords:void 0},!1,"\u9009\u62E9 Icon"),(le=(Fe=me()).onIconChange)===null||le===void 0||le.call(Fe,re)},addScript:function(re){var le=me(),Fe=le.selectScript,Z=le.iconfontScripts,oe=le.updateScripts;ee({showForm:!1}),oe((0,o.ZP)(Z,function(se){se.find(function(Ee){return Ee.url===re.url})||se.push(re)})),Fe(re.url)},updateScripts:function(re){var le=me(),Fe=le.onIconfontScriptsChange,Z=le.iconfontScripts;A()(Z,re)||(ee({iconfontScripts:re}),Fe==null||Fe(re))},toggleForm:function(re){ee(function(le){return n()(n()({},le),{},{showForm:typeof re=="undefined"?!le.showForm:re})})},selectScript:function(){var ue=x()(c()().mark(function le(Fe){var Z,oe,se,Ee,Ie,xe;return c()().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:if(Z=me(),oe=Z.onActiveIconfontScriptChange,oe==null||oe(Fe),Fe){Me.next=5;break}return ee({activeIconfontScript:"",iconfontIconList:[]}),Me.abrupt("return");case 5:return se=me().iconfontScripts.find(function(ze){return ze.url===Fe}),Me.next=8,fetch(Fe);case 8:return Ee=Me.sent,Me.next=11,Ee.text();case 11:Ie=Me.sent,xe=t(Ie),ee({activeIconfontScript:Fe,showForm:!1,iconfontIconList:xe.map(function(ze){return{type:"iconfont",componentName:se.name,scriptUrl:Fe,props:{type:ze}}})});case 14:case"end":return Me.stop()}},le)}));function re(le){return ue.apply(this,arguments)}return re}(),removeScripts:function(re){var le,Fe=me(),Z=Fe.iconfontScripts,oe=Fe.selectScript,se=Fe.updateScripts,Ee=Z.filter(function(Me){return Me.url!==re}),Ie=Z.findIndex(function(Me){return Me.url===re}),xe=l(Ee,Ie),ke=(le=Ee[xe])===null||le===void 0?void 0:le.url;se(Ee),oe(ke)}})},_=$,U=function(ee){return(0,B.createWithEqualityFn)()((0,K.v)(ee)(_,{name:"IconPicker"}),A())},R=(0,L.k)(),f=R.Provider,g=R.useStore,a=R.useStoreApi,W=e(17470),d=e(52676),M,E=function(){var ee=(0,C.S)(),me=g(),ue=me.icon,re=me.togglePanel,le=(0,d.jsx)("div",{className:(0,p.cx)((0,p.iv)(M||(M=S()([`
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: `,`;
      `])),ee.colorFillContent))});return(0,d.jsx)(r.ZP,{onClick:re,icon:ue?(0,d.jsx)(W.Z,n()({},ue)):le})},T=E,z=e(33009),J=e(57820),Y=e(1415),G=e(62978),de=e(90142),w=e(69866),V=function(ee){switch(ee.type){case"antd":case"custom":return ee.componentName;case"iconfont":return ee.props.type}},ie,b=(0,w.kc)(function(De){var ee=De.token,me=De.css;return me(ie||(ie=S()([`
      height: 48px;
      width: 100%;
      overflow: hidden;

      box-shadow: 1px 0 0 0 `,", 0 1px 0 0 ",`,
        1px 1px 0 0 `,", 1px 0 0 0 ",` inset,
        0 1px 0 0 `,` inset;
      background: `,`;

      cursor: pointer;

      font-size: 18px;
      color: `,`;

      &:hover {
        border: 1px solid `,`;
        box-shadow: none;
      }

      &:active {
        z-index: 5;
        border: 1px solid `,`;
        border-radius: 2px;
        box-shadow: 0 1px 2px `,`;
      }
    `])),ee.colorBorderSecondary,ee.colorBorderSecondary,ee.colorBorderSecondary,ee.colorBorderSecondary,ee.colorBorderSecondary,ee.colorBgContainer,ee.colorTextSecondary,ee.colorBorder,ee.colorPrimary,ee.colorPrimary)}),i=function(ee){var me=ee.icon,ue=g(function(Z){return Z.selectIcon}),re=b(),le=re.styles,Fe=re.cx;return(0,d.jsx)(de.D,{className:Fe("icon-box",le),title:V(me),align:"center",distribution:"center",onClick:function(){ue(me)},children:(0,d.jsx)(W.Z,n()({},me))})},h=(0,m.memo)(i),F=function(ee){return!ee.iconfontScripts||ee.iconfontScripts.length===0},k=function(ee){return ee.panelTabKey==="iconfont"?ee.iconfontIconList:ee.antdIconList},q=function(ee){var me=k(ee);return!me||me.length===0},N=function(ee){var me=k(ee),ue=ee.filterKeywords;return me.filter(function(re){if(!ue)return!0;switch(re.type){case"antd":case"custom":return re.componentName.toLowerCase().includes(ue.toLowerCase());case"iconfont":return re.props.type.toLowerCase().includes(ue.toLowerCase())}})},H=function(ee){return!ee.outsourceIconfontScripts||!!ee.onIconfontScriptsChange},X,ae=(0,w.kc)(function(De){var ee=De.css;return ee(X||(X=S()([`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    `])))}),te=function(){var ee=g(N),me=ae(),ue=me.styles;return(0,d.jsx)("div",{className:ue,children:ee.map(function(re){return(0,d.jsx)(h,{icon:re},V(re))})})},fe=(0,m.memo)(te),Ce=e(67685),Be,Ue=function(){var ee=(0,C.S)(),me=g(),ue=me.filterKeywords,re=a();return(0,d.jsx)(Ce.Z,{placeholder:"\u8F93\u5165\u56FE\u6807\u540D\u79F0\u8FDB\u884C\u641C\u7D22...",allowClear:!0,value:ue,onChange:function(Fe){re.setState({filterKeywords:Fe.target.value})},bordered:!1,className:(0,p.cx)((0,p.iv)(Be||(Be=S()([`
        border-radius: 0;
        border-bottom: 1px solid `,` !important;
        &:hover {
          border-bottom: 1px solid `,` !important;
        }
      `])),ee.colorBorderSecondary,ee.colorBorder))})},je=(0,m.memo)(Ue),Oe=e(16794),Qe=e(81347),ve=e(29055),_e,Re,ce,Xe=(0,w.kc)(function(De){var ee=De.token,me=De.css,ue=De.prefixCls;return{add:me(_e||(_e=S()([`
    border: none;
    cursor: pointer;
    margin-right: 0;
  `]))),tag:me(Re||(Re=S()([`
    border: none;
    transition: none;
    cursor: pointer;
  `]))),checked:me(ce||(ce=S()([`
    background: `,`;
    color: `,`;
    .`,`-tag-close-icon {
      color: `,`;
    }
  `])),ee.colorPrimary,ee.colorTextLightSolid,ue,ee.colorTextLightSolid)}}),Ve=e(96206),Ye=e(86323),ge,he=function(){var ee=g(),me=ee.addScript,ue=(0,C.S)();return(0,d.jsx)(de.D,{className:(0,p.cx)((0,p.iv)(ge||(ge=S()([`
        padding: 8px;
        border-radius: 8px;
        background: `,`;
        .ant-form-item {
          margin-bottom: 8px;
        }
      `])),ue.colorFillQuaternary)),children:(0,d.jsxs)(Ye.Z,{size:"small",onFinish:function(le){me(le)},labelCol:{span:6},wrapperCol:{span:18},children:[(0,d.jsx)(Ye.Z.Item,{name:"url",required:!0,label:"\u94FE\u63A5",getValueFromEvent:function(le){return le.target.value},children:(0,d.jsx)(Ce.Z,{placeholder:"iconfont js\u94FE\u63A5"})}),(0,d.jsx)(Ye.Z.Item,{name:"name",required:!0,label:"\u6807\u9898",getValueFromEvent:function(le){return le.target.value},initialValue:"Iconfont",children:(0,d.jsx)(Ce.Z,{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),(0,d.jsx)(Ye.Z.Item,{wrapperCol:{offset:6,span:18},style:{marginBottom:0},children:(0,d.jsx)(J.ZP,{htmlType:"submit",type:"primary",children:"\u6DFB\u52A0"})})]})})},pe=(0,Ve.nh)(he),Le=(0,m.memo)(function(){var De=Xe(),ee=De.styles,me=De.cx,ue=g(),re=ue.iconfontScripts,le=ue.showForm,Fe=ue.activeIconfontScript,Z=ue.removeScripts,oe=ue.selectScript,se=ue.toggleForm,Ee=g(F),Ie=g(H);return Ee?le?(0,d.jsx)(pe,{}):(0,d.jsx)(G.ZP,{status:"info",style:{padding:0,paddingTop:8},subTitle:"\u6682\u672A\u6DFB\u52A0\u56FE\u6807\u5E93\uFF0C\u8BF7\u5148\u6DFB\u52A0 Iconfont \u56FE\u6807\u5E93",extra:(0,d.jsx)(de.D,{children:(0,d.jsx)(J.ZP,{size:"small",onClick:function(){return se(!0)},type:"primary",children:"\u7ACB\u5373\u6DFB\u52A0"})})}):(0,d.jsxs)(de.D,{gap:8,children:[(0,d.jsxs)(de.D,{gap:4,horizontal:!0,children:[Ie?le?(0,d.jsx)(r.ZP,{size:20,onClick:function(){return se(!1)},icon:(0,d.jsx)(Oe.Z,{})}):(0,d.jsxs)(ve.Z,{className:ee.add,onClick:function(){se(!0)},children:[(0,d.jsx)(Qe.Z,{})," \u6DFB\u52A0"]}):null,(0,d.jsx)(de.D,{horizontal:!0,children:re.map(function(xe){var ke=xe.url===Fe;return(0,d.jsx)(ve.Z,{closable:Ie,onClose:function(){Z(xe.url)},onClick:function(){oe(ke?"":xe.url)},className:me(ee.tag,ke?ee.checked:""),children:xe.name},xe.url)})})]}),le&&(0,d.jsx)(pe,{})]})}),Ae=Le,Ne=e(16665),Q,ne=function(ee){return{panelTabKey:ee.panelTabKey,icon:ee.icon,resetIcon:ee.resetIcon}},be=function(){var ee=g(ne,Ne.shallow),me=ee.panelTabKey,ue=ee.icon,re=ee.resetIcon,le=(0,C.S)(),Fe=a(),Z=g(q),oe=g(F);return(0,d.jsxs)(de.D,{width:216,gap:12,style:{maxHeight:400},children:[ue?(0,d.jsxs)(de.D,{distribution:"space-between",horizontal:!0,align:"center",children:[(0,d.jsxs)(de.D,{horizontal:!0,align:"center",gap:8,children:[(0,d.jsx)(W.Z,n()({},ue)),(0,d.jsx)("div",{children:V(ue)})]}),(0,d.jsx)(J.ZP,{size:"small",type:"link",onClick:re,children:"\u79FB\u9664"})]}):void 0,(0,d.jsx)(Y.Z,{options:[{label:"Ant Design",value:"antd",icon:(0,d.jsx)(z.Z,{})},{label:"Iconfont",value:"iconfont"}],value:me,onChange:function(Ee){Fe.setState({panelTabKey:Ee})},block:!0}),me==="iconfont"?(0,d.jsx)(Ae,{}):null,Z?oe?null:(0,d.jsx)(G.ZP,{status:"info",style:{padding:0,paddingTop:8},subTitle:"\u6682\u672A\u9009\u62E9\u56FE\u6807\u5E93\uFF0C\u8BF7\u9009\u62E9\u56FE\u6807\u5E93"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(je,{}),(0,d.jsx)(de.D,{className:(0,p.cx)((0,p.iv)(Q||(Q=S()([`
              overflow-y: scroll;
              border: 1px solid `,`;
              border-left: 0;
              padding-top: -1px;
            `])),le.colorBorderSecondary)),children:(0,d.jsx)(fe,{})})]})]})},Se=be,Pe=function(){var ee=g(function(ue){return ue.open}),me=a();return(0,d.jsx)(j.Z,{onOpenChange:function(re){me.setState({open:re})},placement:"bottomLeft",showArrow:!1,open:ee,trigger:"click",content:(0,d.jsx)(Se,{}),children:(0,d.jsx)(T,{})})},Te=Pe,we=e(99166),We=function(ee){var me=ee.icon,ue=ee.defaultIcon,re=ee.iconfontScripts,le=ee.defaultIconfontScripts,Fe=ee.onIconChange,Z=ee.onIconfontScriptsChange,oe=ee.activeIconfontScript,se=ee.defaultActiveIconfontScript,Ee=ee.onActiveIconfontScriptChange,Ie=a(),xe=(0,we.N)(Ie);return xe("icon",ue,[]),xe("icon",me),xe("onIconChange",Fe),xe("iconfontScripts",re,[re],function(){Ie.setState({iconfontScripts:re,outsourceIconfontScripts:re})}),xe("iconfontScripts",le,[]),xe("onIconfontScriptsChange",Z),xe("activeIconfontScript",oe,[oe],function(ke){var Me=ke.activeIconfontScript;Ie.getState().selectScript(Me)}),xe("activeIconfontScript",se,[],function(ke){var Me=ke.activeIconfontScript;Ie.getState().selectScript(Me)}),xe("onActiveIconfontScriptChange",Ee),null},He=We,Ze=function(ee){return(0,d.jsx)(Ve.iV,{children:(0,d.jsxs)(f,{createStore:U,children:[(0,d.jsx)(Te,{}),(0,d.jsx)(He,n()({},ee))]})})},Ke=(0,m.memo)(Ze)},81593:function(ye,D,e){"use strict";e.d(D,{A:function(){return m}});var s=e(17062),n=Object.keys(s).filter(function(j){return j.endsWith("Outlined")||j.endsWith("Filled")}),m=n.map(function(j){return{type:"antd",componentName:j}});D.Z=s},17470:function(ye,D,e){"use strict";e.d(D,{Z:function(){return K}});var s=e(26068),n=e.n(s),m=e(75271),j=e(81593),y=e(48305),S=e.n(y),r={},C=function(B){Object.entries(B).forEach(function(v){var c=S()(v,2),P=c[0],x=c[1];r[P]||(r[P]=x)})},p=e(52676),O=(0,m.memo)(function(L){var B=L.type,v=L.componentName,c=L.props,P=L.scriptUrl;switch(B){case"custom":var x=r[v];return(0,p.jsx)(x,n()({},c));case"antd":var o=j.Z[v];return(0,p.jsx)(o,n()({},c));case"iconfont":var t=j.Z.createFromIconfontCN({scriptUrl:P});return(0,p.jsx)(t,n()({},c))}}),A=O;A.registerCustomIcon=C;var K=A},25509:function(ye,D,e){"use strict";e.r(D),e.d(D,{IconPicker:function(){return s.Z},IconRender:function(){return n.Z}});var s=e(66917),n=e(17470),m=e(39997),j=e.n(m),y={};for(var S in m)["default","IconRender","IconPicker"].indexOf(S)<0&&(y[S]=function(r){return m[r]}.bind(0,S));e.d(D,y)},39997:function(){},80794:function(ye,D,e){"use strict";e.d(D,{W:function(){return U}});var s=e(75271),n=e(48305),m=e.n(n),j=function(f){if(f){if(typeof f=="string"){var g=document.querySelector(f);if(g)return g}if(f instanceof HTMLElement)return f;if(typeof f=="function")return f()}return document},y=function(f,g,a){return f instanceof Array?{register:function(){f.forEach(function(d){d.addEventListener(g,a)})},unRegister:function(){f.forEach(function(d){d.removeEventListener(g,a)})}}:{register:function(){return f.addEventListener(g,a)},unRegister:function(){return f.removeEventListener(g,a)}}},S=function(f){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"data-uxid",a=document.createElement("div");return a.setAttribute(g,f),document.body.appendChild(a),a},r=function(f){var g=(0,s.useState)(),a=m()(g,2),W=a[0],d=a[1];return(0,s.useEffect)(function(){d(j(f))},[]),W},C=function(f){var g=f.interactModel,a=f.container,W=f.dispatchStatus,d=f.disabled,M=function(Y){W({type:"handleContainerClick",target:Y.target})},E=function(Y){Y.stopPropagation(),W({type:"handleClick",target:Y.target})},T=function(Y){W({type:"handleHover",target:Y.target,action:"hover"})},z=function(){W({type:"handleHover",action:"unhover"})};return(0,s.useEffect)(function(){if(!d&&g.totalValidElements!==0){var J=g.getInteractListeners({click:E,hover:{onHoverStart:T,onHoverEnd:z}});return J.register(),function(){J.unRegister()}}},[d,g.totalValidElements]),(0,s.useEffect)(function(){if(!d&&a){var J=y(a,"click",M),Y=J.unRegister,G=J.register;return G(),function(){Y()}}},[d,a]),{onClick:E}},p=e(26068),O=e.n(p),A=e(25298),K=e.n(A),L=e(17069),B=e.n(L),v=e(82092),c=e.n(v),P=e(5899),x=e.n(P),o=["data-uxid","data-testid"],t=function(){function R(f){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;K()(this,R),c()(this,"rules",void 0),c()(this,"models",void 0),c()(this,"container",void 0),c()(this,"initListener",function(a,W,d){return a instanceof Array?{register:function(){a.forEach(function(E){E.addEventListener(W,d)})},unRegister:function(){a.forEach(function(E){E.removeEventListener(W,d)})}}:{register:function(){return a.addEventListener(W,d)},unRegister:function(){return a.removeEventListener(W,d)}}}),this.rules=f,this.container=g,this.initModels()}return B()(R,[{key:"totalValidElements",get:function(){return this.getMatchedElements().length}},{key:"initModels",value:function(){var g=this;this.models=this.rules.map(function(a){return O()(O()({},a),{},{elements:R.getValidElements(a,g.container),containerMatched:g.isMatchContainer(a)})})}},{key:"getRuleAndIndexByElement",value:function(g){var a=-1,W=this.models.findIndex(function(M){var E=M.elements.findIndex(function(T){return x()(T,g)});return E>-1&&(a=E),E>-1}),d=this.rules[W];if(d)return{index:a,rule:d};if(g.parentElement)return this.getRuleAndIndexByElement(g.parentElement)}},{key:"getHoverElements",value:function(){return this.getMatchedElements("hover")}},{key:"getClickElements",value:function(){return this.getMatchedElements("click")}},{key:"getMatchedElements",value:function(g){return this.models.filter(function(a){return g?a.actions.includes(g):a}).map(function(a){return a.elements}).flat().filter(function(a){return a})}},{key:"getElementByStatus",value:function(g){var a,W=(a=g.currentNode)!==null&&a!==void 0?a:g.activeNode;if(W){var d=W.rule,M=W.index,E=this.models.find(function(T){return T.id===d.id&&T.actions.includes(g.action)});if(E)return E.elements[M]}}},{key:"isMatchContainer",value:function(g){return x()(this.container,document)?!1:g.selectors.some(function(a){var W=R.querySelector(a);return W.length>0})}},{key:"getClickListeners",value:function(g){var a=this.getClickElements();return this.initListener(a,"click",g)}},{key:"getHoverListeners",value:function(g,a){var W=this.getHoverElements(),d=this.initListener(W,"mouseenter",g),M=this.initListener(W,"mouseleave",a);return{register:function(){d.register(),M.register()},unRegister:function(){d.unRegister(),M.unRegister()}}}},{key:"getInteractListeners",value:function(g){var a=g.click,W=g.hover,d=this.getClickListeners(a),M=this.getHoverListeners(W.onHoverStart,W.onHoverEnd);return{register:function(){d.register(),M.register()},unRegister:function(){d.unRegister(),M.unRegister()}}}}],[{key:"getValidElements",value:function(g){var a=this,W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;return g.selectors.map(function(d){return a.querySelector(d,W)}).map(function(d){return Array.from(d.values())}).flat()}},{key:"querySelector",value:function(g){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,W=0,d=o;W<d.length;W++){var M=d[W],E=a.querySelectorAll("[".concat(M,'="').concat(g,'"]'));if(E.length>0)return E}return a.querySelectorAll(g)}}]),R}(),l=function(f){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,a=(0,s.useRef)(new t(f,g));return(0,s.useEffect)(function(){a.current.initModels()}),(0,s.useEffect)(function(){a.current=new t(f,g)},[f,g]),a.current},I=function(f){var g,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},W=function(J,Y){var G,de=(G=a==null?void 0:a.value)!==null&&G!==void 0?G:J;switch(Y.type){case"handleContainerClick":return{status:"unSelected",action:"click"};case"handleClick":var w=f.getRuleAndIndexByElement(Y.target),V=de&&!!de.activeNode;return de&&x()(w,de.activeNode)?{status:V?"unSelected":"selected",action:"click",currentNode:V?void 0:w,activeNode:V?void 0:w}:{status:"selected",currentNode:w,activeNode:w,action:"click"};case"handleHover":var ie=Y.target&&f.getRuleAndIndexByElement(Y.target);return O()(O()({},de),{},{status:Y.action,action:"hover",currentNode:ie});default:return de}},d=(0,s.useReducer)(W,a==null?void 0:a.value),M=m()(d,2),E=M[0],T=M[1];return(0,s.useEffect)(function(){a!=null&&a.onChange&&a.onChange(E)},[E]),{status:(g=a==null?void 0:a.value)!==null&&g!==void 0?g:E,dispatchStatus:T}},u=e(69866),$=(0,u.kc)(function(R){var f=R.token,g=R.prefixCls,a="".concat(g,"-").concat(f.editorPrefix,"-context-canvas");return{componentPrefix:a}}),_=function(){var f=$(),g=f.styles,a=(0,s.useRef)(),W=(0,s.useRef)(),d=function(){return!!a.current},M=function(V,ie){V&&V.classList.add("".concat(g.componentPrefix,"-").concat(ie))},E=function(V,ie){V&&V.classList.remove("".concat(g.componentPrefix,"-").concat(ie))},T=function(V){E(a.current,V),E(W.current,V)},z=function(V){a.current=V,M(V,"click"),E(V,"hover")},J=function(V){E(V,"click"),E(V,"hover"),x()(V,a.current)&&(a.current=null)},Y=function(){E(a.current,"click"),E(a.current,"hover"),a.current=null},G=function(V){M(V,"hover"),W.current=V},de=function(){T("hover"),W.current=null};return{renderSelected:z,renderUnselected:J,renderHover:G,renderUnHover:de,renderUnselectedAll:Y,currentSelectedElementRef:a,isSelected:d}},U=function(f){var g=f.rules,a=f.status,W=f.onStatusChange,d=f.getContainer,M=f.disabled,E=_(),T=r(d),z=l(g,T),J=I(z,{value:a,onChange:W}),Y=J.status,G=J.dispatchStatus,de=function(b){if(!b){E.renderUnselectedAll();return}var i=z.getElementByStatus(b);switch(b.status){case"selected":E.renderUnselectedAll(),E.renderSelected(i);break;case"unSelected":{i?E.renderUnselected(i):E.renderUnselectedAll();break}case"hover":E.renderHover(i);break;case"unhover":E.renderUnHover();break}};(0,s.useEffect)(function(){de(Y)},[Y]);var w=C({container:T,interactModel:z,dispatchStatus:G,disabled:M}),V=w.onClick;return{onClick:V}}},4686:function(ye,D,e){"use strict";e.r(D);var s=e(96206),n=e(80794),m=e(10231),j=e(52676),y=e(76957),S=e.n(y),r={};for(var C in y)C!=="default"&&(r[C]=function(O){return y[O]}.bind(0,C));e.d(D,r);var p=function(A){return(0,m.X)(),(0,n.W)(A),(0,j.jsx)(j.Fragment,{children:A.children})};D.default=(0,s.nh)(p)},10231:function(ye,D,e){"use strict";e.d(D,{X:function(){return r}});var s=e(53649),n=e.n(s),m=e(36529),j=e(69866),y=e(14909),S,r=(0,j.kc)(function(C){var p=C.token,O=C.prefixCls;return(0,y.hi)(S||(S=n()([`
    .`,"-",`-context-canvas {
      &-hover {
        position: relative;
        transition: opacity 0.5s ease-in !important;

        &::after {
          // \u56FA\u5B9A\u4F4D\u7F6E
          position: absolute;
          top: 0;
          left: 0;


          z-index: 100;

          // \u4FDD\u8BC1\u548C \u7236\u5BB9\u5668\u4E00\u6837\u5927\u5C0F
          display: block;
          width: 100% !important;
          height: 100% !important;

          // \u63A7\u5236\u9009\u4E2D\u6837\u5F0F
          background: `,` !important;
          border-radius: 4px !important;
          // \u4FDD\u8BC1\u53EF\u89C1
          visibility: visible !important;
          cursor: pointer;
          content: '';
        }
      }

      &-click {
        position: relative;
        overflow: visible !important;

        &::after {
          // \u56FA\u5B9A\u4F4D\u7F6E
          position: absolute;
          top: 0;
          left: 0;

          z-index: 100;

          // \u4FDD\u8BC1\u548C \u7236\u5BB9\u5668\u4E00\u6837\u5927\u5C0F
          display: block;
          width: 100% !important;
          height: 100% !important;

          // \u63A7\u5236\u9009\u4E2D\u6837\u5F0F
          background: `,` !important;
          border: 2px solid `,` !important;
          border-radius: 4px !important;
          box-shadow: `,` !important;
          // \u4FDD\u8BC1\u53EF\u89C1
          visibility: visible !important;
          cursor: pointer;
          content: '';
        }
      }
    }`])),O,p.editorPrefix,p.colorFillQuaternary,(0,m.DZ)(.8,p.colorPrimary),p.colorPrimary,p.boxShadowSecondary),{}})},76957:function(){},48145:function(ye,D,e){"use strict";e.d(D,{A:function(){return ie}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(96206),S=e(88167),r=e(38725),C=e(54959),p=e(66851),O=e(53649),A=e.n(O),K=e(69866),L,B,v,c,P,x,o,t,l,I,u,$,_,U,R,f,g=(0,K.kc)(function(b,i){var h=b.css,F=b.token,k=b.cx,q=b.prefixCls,N=i.themeType,H="".concat(q,"-").concat(F==null?void 0:F.editorPrefix),X="".concat(H,"-layout"),ae=h(L||(L=A()([`
    background-color: `,`;
    border: 1px solid
      `,`;
  `])),N==="block"?F.colorFillTertiary:N==="pure"?"transparent":F.colorFillQuaternary,N==="block"||N==="pure"?"transparent":F.colorBorder),te=h(N==="pure"?B||(B=A()([`
          border-radius: 0px;
          background-color: transparent;
          margin: 0px;
        `])):v||(v=A()([""])));return{layout:k(X,h(c||(c=A()([`
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        background-color: `,`;
        overflow: hidden;
        border-radius: `,`px;
        font-size: `,`px;

        .`,`-draggable-panel {
          border: none;
        }
      `])),F.colorBgContainer,F.borderRadius,F.fontSizeSM,H),te),header:k("".concat(X,"-header"),h(P||(P=A()([`
        box-sizing: border-box;
        height: 48px;
        min-height: 48px;
        border-radius: `,`px;
        background-color: `,`;
        margin: `,`px;
      `])),F.borderRadius,F.colorFillQuaternary,F.margin/4),ae,te),footer:k("".concat(X,"-footer"),h(x||(x=A()([`
        height: 36px;
        box-sizing: border-box;
        margin: `,`px;
        border-radius: `,`px;
        background-color: `,`;
      `])),F.margin/4,F.borderRadius,F.colorFillQuaternary),ae,te),flexContainer:k("".concat(X,"-flex-container"),h(o||(o=A()([`
        padding: `,`px;
        position: relative;
      `])),F.margin/2+2)),centerPannel:k("".concat(X,"-center-pannel"),h(t||(t=A()([`
        flex: 1;
      `])))),container:k("".concat(X,"-container"),h(l||(l=A()([`
        flex: 1;
        display: flex;
        clear: both;
      `])))),pannel:k("".concat(X,"-pannel"),h(I||(I=A()([`
        border-radius: `,`px;
        box-sizing: border-box;
        background-color: `,`;
        margin: `,`px;
        height: calc(100% - `,`px);
        padding: `,`px;
      `])),F.borderRadius,F.colorFillQuaternary,F.margin/4,N==="pure"?0:F.margin/2,F.margin/2+2),ae,te),leftPannel:k("".concat(X,"-left-pannel"),h(u||(u=A()([""])))),rightPannel:k("".concat(X,"-right-pannel"),h($||($=A()([""])))),tip:k("".concat(X,"-tip"),h(_||(_=A()([`
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      `])))),headerAndFooterCenterChildren:k("headerAndFooterCenterChildren",h(U||(U=A()([`
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `])))),headerAndFooterIcon:k("headerAndFooterIcon",h(R||(R=A()([`
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 50px;
      `])))),headerAndFooterExtra:k("headerAndFooterExtra",h(f||(f=A()([`
        min-width: 50px;
      `]))))}}),a=e(52676),W=function(b){return b.header="header",b.footer="footer",b}(W||{}),d=function(i){var h=i||{},F=h.children,k=h.render,q=h.hide,N=q===void 0?!1:q,H=h.flex,X=H===void 0?{justify:"space-between",align:"center",className:""}:H,ae=h.type,te=ae===void 0?"header":ae,fe=h.extra,Ce=h.iconConfig,Be=Ce===void 0?{icon:(0,a.jsx)(r.Z,{}),dropdown:void 0,title:"",render:k}:Ce,Ue=h.themeType,je=h.style,Oe=je===void 0?{}:je,Qe=h.className,ve=g({themeType:Ue}),_e=ve.styles,Re=ve.cx;if(N)return null;if(k)return k(i);var ce=function(){if(Be===!1)return null;var Ve=Be||{},Ye=Ve.icon,ge=Ve.dropdown,he=Ve.title,pe=Ve.render;if(!ge)return(0,a.jsxs)("div",{className:_e.headerAndFooterIcon,children:[(0,a.jsx)(S.ZP,{icon:Ye}),he]});var Le=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C.Z,n()(n()({trigger:["click"],placement:te===W.header?"bottomLeft":"topLeft"},Be.dropdown),{},{children:(0,a.jsx)(S.ZP,{icon:Ye})})),he]});return pe?pe(Be,Le):Le};return(0,a.jsxs)(p.Z,n()(n()({},X),{},{className:Re(te===W.header?_e.header:_e.footer,_e.flexContainer,X==null?void 0:X.className,Qe),style:Oe,children:[(0,a.jsx)("div",{className:_e.headerAndFooterCenterChildren,children:F}),(0,a.jsx)("div",{className:_e.headerAndFooterIcon,children:(0,a.jsx)(ce,{})}),fe&&(0,a.jsx)("div",{className:_e.headerAndFooterExtra,children:fe})]}),te===W.header?"editor-layout-header":"editor-layout-footer")},M=e(48305),E=e.n(M),T=e(90142),z=["type","pannels","themeType","headerandfooter"],J=function(i){var h=i.type,F=i.pannels,k=i.themeType,q=i.headerandfooter,N=j()(i,z),H=g({themeType:k}),X=H.styles,ae=E()(F,4),te=ae[0],fe=ae[1],Ce=ae[2],Be=ae[3],Ue=E()(q,2),je=Ue[0],Oe=Ue[1];return h==="Left&Right"?(0,a.jsxs)(T.D,n()(n()({className:X.layout},N),{},{children:[je,(0,a.jsxs)(p.Z,{className:X.container,children:[te,(0,a.jsxs)(p.Z,{vertical:!0,flex:1,children:[Be,Ce]}),fe]}),Oe]})):h==="LeftFull"?(0,a.jsxs)(T.D,n()(n()({className:X.layout},N),{},{children:[je,(0,a.jsxs)(p.Z,{className:X.container,children:[te,(0,a.jsxs)(p.Z,{vertical:!0,flex:1,children:[(0,a.jsxs)(p.Z,{flex:1,children:[Be,fe]}),Ce]})]}),Oe]})):h==="RightFull"?(0,a.jsxs)(T.D,n()(n()({className:X.layout},N),{},{children:[je,(0,a.jsxs)(p.Z,{className:X.container,children:[(0,a.jsxs)(p.Z,{vertical:!0,flex:1,children:[(0,a.jsxs)(p.Z,{flex:1,children:[te,Be]}),Ce]}),fe]}),Oe]})):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(T.D,n()(n()({className:X.layout},N),{},{children:[je,(0,a.jsxs)(p.Z,{className:X.container,children:[te,Be,fe]}),Ce,Oe]}))})},Y=e(82138),G=["children","className","style","minHeight","minWidth","index","themeType"],de=function(i){var h=i||{},F=h.children,k=F===void 0?"":F,q=h.className,N=h.style,H=h.minHeight,X=H===void 0?100:H,ae=h.minWidth,te=ae===void 0?100:ae,fe=h.index,Ce=fe===void 0?0:fe,Be=h.themeType,Ue=j()(h,G),je=g({themeType:Be}),Oe=je.styles,Qe=je.cx,ve=function(Ve){switch(["left","right","bottom","center"][Ve]){case"left":return{placement:"left",className:Oe.leftPannel,maxWidth:500,defaultSize:{width:"200"}};case"right":return{placement:"right",className:Oe.rightPannel,maxWidth:500,defaultSize:{width:"200"}};case"bottom":return{placement:"bottom",maxHeight:400,defaultSize:{height:"100"}};case"center":return!1;default:return!1}},_e=ve(Ce);if(!_e)return(0,a.jsx)("div",{className:Qe(Oe.pannel,Oe.centerPannel),style:N,children:(0,a.jsx)("div",{className:Qe(q),children:k})});var Re=_e.placement,ce=_e.className;return(0,a.jsx)(Y._,n()(n()(n()({expandable:!1,style:{border:"none"},placement:Re,minHeight:X,minWidth:te},_e),Ue),{},{children:(0,a.jsx)("div",{className:Qe(Oe.pannel,ce,q),style:N,children:k})}))},w=["header","footer","leftPannel","rightPannel","bottomPannel","centerPannel","type","themeType"],V=function(i){var h=i.header,F=i.footer,k=i.leftPannel,q=i.rightPannel,N=i.bottomPannel,H=i.centerPannel,X=i.type,ae=X===void 0?"Bottom":X,te=i.themeType,fe=te===void 0?"block":te,Ce=j()(i,w),Be=[k,q,N,H].map(function(je,Oe){return je===!1?null:(0,a.jsx)(de,n()(n()({},je),{},{index:Oe,themeType:(je==null?void 0:je.themeType)||fe}),"pannel"+Oe)}),Ue=[h,F].map(function(je,Oe){return je===!1?null:(0,a.jsx)(d,n()(n()({},je),{},{type:Oe===0?"header":"footer",themeType:(je==null?void 0:je.themeType)||fe}),Oe)});return(0,a.jsx)(J,n()({pannels:Be,headerandfooter:Ue,themeType:fe,type:ae},Ce))},ie=(0,y.nh)(V)},78135:function(ye,D,e){"use strict";e.d(D,{Z:function(){return Qe}});var s=e(15558),n=e.n(s),m=e(67825),j=e.n(m),y=e(26068),S=e.n(y),r=e(95095),C=e(43776),p=e(5402),O=e(75271),A=e(79387),K=e(83175),L=e(77959),B=e(40020),v=e(96206),c=e(53649),P=e.n(c),x=e(36953),o=e(14909),t=e(48305),l=e.n(t),I=e(79745),u=e(93823),$=e(64203),_=e(42623),U=e(74914),R=e(59285),f=e(67073),g=e(57820),a=e(82187),W=e.n(a),d=e(90142),M=e(69866),E,T,z,J,Y,G,de,w,V,ie,b,i=(0,M.kc)(function(ve){var _e=ve.css,Re=ve.cx,ce=ve.token,Xe=ve.prefixCls,Ve="".concat(Xe,"-").concat(ce==null?void 0:ce.editorPrefix,"-markdown");return{container:_e(E||(E=P()([`
      :not(:last-child) {
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
      }
    `]))),highlight:_e(T||(T=P()([`
      pre {
        padding: 12px !important;
      }
    `]))),markdown:_e(z||(z=P()([`
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
    `])),ce.colorText,ce.colorText,ce.colorTextDescription,ce.colorLink,ce.colorLinkHover,ce.colorLinkActive,ce.borderRadius,ce.fontSizeSM,ce.borderRadiusSM,ce.colorBorderSecondary,ce.borderRadius,ce.colorFillTertiary,ce.borderRadius,ce.borderRadius,ce.borderRadius,ce.borderRadius,ce.colorPrimary,ce.colorPrimary,ce.colorTextDescription,ce.colorFillTertiary,ce.colorBorderSecondary,ce.borderRadiusLG,ce.motionEaseOut,ce.colorBorder),wrapper:Re(_e(J||(J=P()([`
        background-color: `,`;
        border-radius: `,`px;
      `])),ce.colorFillTertiary,ce.borderRadius)),highlighter:_e(Y||(Y=P()([`
      max-height: 400px;
      overflow: auto;
    `]))),header:Re("".concat(Ve,"-header"),_e(G||(G=P()([`
        padding: 4px 8px;
        width: auto !important; // override self width
      `]))),_e(de||(de=P()([`
        .`,`-btn {
          &:hover {
            color: `,` !important;
          }
        }
      `])),Ve,ce.colorTextSecondary)),copy:_e(w||(w=P()([`
      background-color: transparent;
      position: inherit;
      width: 30px;
      padding-left: 6px;
    `]))),select:_e(V||(V=P()([`
      min-width: 100px;
      .`,`-select-selector {
        padding-inline-end: 4px !important;
      }
      .`,`-select-selection-overflow-item-suffix {
        .`,`-select-selection-search {
          display: none;
        }
      }
    `])),Xe,Xe,Xe),trigger:_e(ie||(ie=P()([`
      min-width: 100px;
      display: flex;
      justify-content: center;
      span {
        font-family: `,` !important;
      }
    `])),ce.fontFamilyCode),lang:Re(_e(b||(b=P()([`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;

        font-family: `,`;
        color: `,`;

        transition: opacity 0.1s;
      `])),ce.fontFamilyCode,ce.colorTextSecondary))}}),h=e(52676),F=_.W.map(function(ve){return{label:ve,value:ve.toLowerCase()}}),k=(0,O.memo)(function(ve){var _e=ve||{},Re=_e.children,ce=_e.language,Xe=ce===void 0?"markdown":ce,Ve=_e.className,Ye=_e.style,ge=(0,O.useState)(!0),he=l()(ge,2),pe=he[0],Le=he[1],Ae=(0,O.useState)(Xe),Ne=l()(Ae,2),Q=Ne[0],ne=Ne[1],be=i(),Se=be.styles,Pe=(0,O.useMemo)(function(){return(0,h.jsx)(U.y,{language:Q==null?void 0:Q.toLowerCase(),copyable:!1,showLanguage:!1,type:"block",children:Re})},[Q,Re]);return(0,h.jsxs)("div",{className:W()(Se.wrapper,Ve),style:Ye,children:[(0,h.jsxs)(d.D,{align:"center",className:Se.header,horizontal:!0,justify:"space-between",children:[(0,h.jsx)(R.Z,{icon:pe?(0,h.jsx)(u.Z,{size:14}):(0,h.jsx)($.Z,{size:14}),onClick:function(){return Le(!pe)},size:24}),(0,h.jsx)(f.P,{bordered:!1,className:Se.select,onSelect:ne,mode:"tags",options:F,tagRender:function(we){return(0,h.jsx)("div",{className:Se.trigger,children:(0,h.jsx)(g.ZP,{type:"text",size:"small",children:we.label})})},showSearch:!0,size:"small",suffixIcon:!1,value:[Q.toLowerCase()]}),(0,h.jsx)(I.Z,{className:Se.copy,content:Re})]}),(0,h.jsx)("div",{className:Se.highlighter,children:pe?Pe:null})]})}),q=k,N,H,X=(0,o.kc)(function(ve){var _e=ve.css;return{container:_e(N||(N=P()([`
    :not(:last-child) {
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  `]))),highlight:_e(H||(H=P()([`
    pre {
      padding: 12px !important;
    }
  `])))}}),ae=function(_e){var Re=/\n/g,ce=_e.match(Re);return ce?ce.length:1},te=(0,O.memo)(function(ve){var _e=X(),Re=_e.styles,ce=_e.cx;if(ve.children[0]){var Xe=ve.children[0].props,Ve=Xe.children,Ye=Xe.className;if(Ve){var ge=Array.isArray(Ve)?Ve[0]:Ve,he=(Ye==null?void 0:Ye.replace("language-",""))||"txt";return ae(ge)===1&&ge.length<=60?(0,h.jsx)(x.p,{className:ce(Re.container),style:{display:"flex"},"data-code-type":"highlighter",language:he,symbol:"",type:"block",children:ge}):(0,h.jsx)(q,{className:ce(Re.container,Re.highlight),language:he,children:ge})}}}),fe=["children","className","style","onDoubleClick","rehypePlugins","remarkPlugins","components"],Ce=(0,O.memo)(function(ve){return(0,h.jsx)(r.Z,S()({style:{marginBottom:"1em",marginTop:0}},ve))}),Be=(0,O.memo)(function(ve){return(0,h.jsx)(C.Z,S()({style:{marginBottom:"1em"}},ve))}),Ue=(0,O.memo)(function(ve){return(0,h.jsx)("img",S()({},ve))}),je=(0,O.memo)(function(ve){return(0,h.jsx)(p.Z.Link,S()({},ve))}),Oe=(0,O.memo)(function(ve){var _e=ve.children,Re=ve.className,ce=ve.style,Xe=ve.onDoubleClick,Ve=ve.rehypePlugins,Ye=ve.remarkPlugins,ge=ve.components,he=j()(ve,fe),pe=i(),Le=pe.styles,Ae=S()({details:Be,hr:Ce,a:je,img:Ue,pre:te},ge),Ne=[K.Z].concat(n()(Ve||[])),Q=[[L.Z,{singleTilde:!1}],B.Z].concat(n()(Ye||[]));return(0,h.jsx)(p.Z,{className:Re,onDoubleClick:Xe,style:ce,children:(0,h.jsx)(A.D,S()(S()({className:Le.markdown,components:Ae,rehypePlugins:Ne,remarkPlugins:Q},he),{},{children:_e}))})}),Qe=(0,v.nh)(Oe)},38960:function(ye,D,e){"use strict";e.d(D,{y:function(){return G},Z:function(){return de}});var s=e(41003),n=e(26068),m=e.n(n),j=e(3341),y=e.n(j),S=e(24140),r=e(79258),C=e(72266),p=e.n(C),O={assetAwareness:{},onAssetAwarenessChange:null,editorAwareness:{panelPosition:{x:0,y:0},panelSize:{width:340},panelExpand:!0,viewport:{x:0,y:0,zoom:1}},onEditorAwarenessChange:null},A=function(V,ie){return m()(m()({},O),{},{internalUpdateAssetAwareness:function(i){var h=ie(),F=h.onAssetAwarenessChange,k=h.assetAwareness,q=m()(m()({},k),i);V({assetAwareness:q},!1,{type:"\u{1F579}\u5185\u90E8\u66F4\u65B0\uFF1AassetAwareness",payload:i}),F==null||F(q)},internalUpdateEditorAwareness:function(i){var h=ie(),F=h.onEditorAwarenessChange,k=h.editorAwareness,q=p()({},k,i);V({editorAwareness:q},!1,{type:"\u{1F579}\u5185\u90E8\u66F4\u65B0\uFF1AeditorAwareness",payload:i}),F==null||F(q)}})},K={interaction:{},onInteractionChange:null,enableCanvasInteraction:!0},L=function(V,ie){return m()(m()({},K),{},{internalUpdateCanvasInteract:function(i,h){var F=ie(),k=F.onInteractionChange;V({interaction:i},!1,{type:(h==null?void 0:h.type)||"\u{1F579}\u5185\u90E8\u66F4\u65B0\uFF1Ainteraction"}),k==null||k(i)},toggleCanvasInteraction:function(){var i=ie(),h=i.enableCanvasInteraction;V({enableCanvasInteraction:!h})},deselectCanvas:function(){var i=ie(),h=i.internalUpdateCanvasInteract;h({status:"unSelected"})},setCanvasInteraction:function(i){ie().internalUpdateCanvasInteract(i,{name:"updateCanvasInteraction \u89E6\u53D1"})},setViewport:function(i){var h=ie(),F=h.internalUpdateEditorAwareness,k=h.editorAwareness;F({viewport:m()(m()({},k.viewport),i)})}})},B=e(48305),v=e.n(B),c=e(62657),P=e.n(c),x=e(21742),o=e.n(x),t=e(83136),l=e.n(t),I=e(17069),u=e.n(I),$=e(25298),_=e.n($),U=e(82092),R=e.n(U),f=e(24505),g=u()(function w(V){_()(this,w),R()(this,"type",void 0),R()(this,"name",void 0),R()(this,"timestamp",void 0),this.type=V.type,this.name=V.name,this.timestamp=V.timestamp}),a=function(w){o()(ie,w);var V=l()(ie);function ie(b){var i;return _()(this,ie),i=V.call(this,b),R()(P()(i),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),R()(P()(i),"undoManager",void 0),R()(P()(i),"updateHistoryData",function(h){var F=i.getMap(i._internalHistoryKey);Object.entries(h).forEach(function(k){var q=v()(k,2),N=q[0],H=q[1];F.set(N,H)})}),R()(P()(i),"recordHistoryData",function(h,F){i.transact(function(){i.updateHistoryData(h)},new g(F))}),R()(P()(i),"getHistoryMap",function(){return i.getMap(i._internalHistoryKey)}),R()(P()(i),"getHistoryJSON",function(){var h=i.getMap(i._internalHistoryKey);return h.toJSON()}),R()(P()(i),"redo",function(){return i.undoManager.redo()}),R()(P()(i),"undo",function(){return i.undoManager.undo()}),i.undoManager=new f.UndoManager(i.getHistoryMap(),{trackedOrigins:new Set([g])}),i}return u()(ie)}(f.Doc),W=function(V,ie){var b={componentAsset:null,config:null,onConfigChange:null,props:{},yjsDoc:new a},i=b.yjsDoc.undoManager.undoStack.length,h=b.yjsDoc.undoManager.redoStack.length;return m()(m()({},b),{},{undoLength:i,redoLength:h,resetConfig:function(){V({config:b.config,props:b.props})},internalUpdateConfig:function(k,q,N){var H=ie(),X=H.onConfigChange,ae=H.componentAsset,te=N?k:m()(m()({},ie().config),k);V({config:te},!1,q),X==null||X({config:te,props:ae==null?void 0:ae.generateProps(te),isEmpty:ae==null?void 0:ae.isStarterMode(te)})},exportConfig:function(){var k=document.createElement("a");k.download="pro-edior-config.json",k.style.display="none";var q=new Blob([JSON.stringify(ie().config)]);k.href=URL.createObjectURL(q),document.body.appendChild(k),k.click(),document.body.removeChild(k)},setConfig:function(k){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=q.replace,H=q.recordHistory;ie().internalUpdateConfig(k,{type:"\u8C03\u7528 updateConfig \u66F4\u65B0",payload:k},N);var X=p()({},{recordHistory:!0},{recordHistory:H});X.recordHistory&&ie().yjsDoc.recordHistoryData({config:k},m()(m()({},X.payload),{},{timestamp:Date.now()}))}})},d=e(31759),M=e.n(d),E=function(V,ie){return{updatePanelPosition:function(i){var h=ie(),F=h.editorAwareness;ie().internalUpdateEditorAwareness({panelPosition:m()(m()({},F.panelPosition),i)})},updatePanelSize:function(i){ie().internalUpdateEditorAwareness({panelSize:i})},togglePanelExpand:function(i){var h=ie(),F=h.internalUpdateEditorAwareness,k=h.editorAwareness;M()(i)===void 0?F({panelExpand:!k.panelExpand}):F({panelExpand:i})}}},T=e(30890),z=function(){return m()(m()(m()(m()(m()({},T.Hr.apply(void 0,arguments)),W.apply(void 0,arguments)),L.apply(void 0,arguments)),E.apply(void 0,arguments)),A.apply(void 0,arguments))},J=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,ie=(0,S.v)(V!==!1),b=V===!1?void 0:V===!0?{name:"ProBuilderStore"}:V;return(0,r.createWithEqualityFn)()(ie(z,b),y())},Y=e(52676),G=function(V){var ie=V.children,b=V.devtoolOptions,i=!0,h=(0,Y.jsx)(Y.Fragment,{children:ie});try{(0,s.AC)()}catch(F){i=!1}return i?h:(0,Y.jsx)(s.zt,{createStore:function(){return J(b)},children:h})},de=G},19750:function(ye,D,e){"use strict";e.d(D,{R:function(){return Fe}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(96206),S=e(97978),r=e(75271),C=e(75451),p=e(48305),O=e.n(p),A=e(16665),K=e(41003),L=function(){var oe=(0,K.oR)(function(xe){return[xe.undo,xe.redo]},A.shallow),se=O()(oe,2),Ee=se[0],Ie=se[1];(0,C.y1)("meta+z",function(xe){xe.preventDefault(),Ee()}),(0,C.y1)("meta+shift+z",function(xe){xe.preventDefault(),Ie()})},B=e(76004),v=e(53649),c=e.n(v),P=e(4401),x=e(55471),o=e(69866),t=e(52676),l,I=(0,o.kc)(function(Z){var oe=Z.token,se=Z.css,Ee=Z.cx,Ie=Z.prefixCls,xe="".concat(Ie,"-").concat(oe.editorPrefix,"-pro-builder");return{cls:Ee("".concat(xe,"-empty"),se(l||(l=c()([`
        height: 100%;
        background: `,`;
      `])),oe.colorBgLayout))}}),u=(0,r.memo)(function(){var Z=I(),oe=Z.styles;return(0,t.jsx)(x.Z,{className:oe.cls,children:(0,t.jsx)(P.Z,{description:"\u672A\u627E\u5230 ComponentAsset\uFF0C\u8BF7\u5728 props \u4E2D\u4F20\u5165 ComponentAsset"})})}),$=u,_=e(3341),U=e.n(_),R=e(2121),f=e(95430),g=(0,r.memo)(function(){var Z=(0,f.P)(),oe=(0,K.oR)(function(Ge){return[Ge.componentAsset.componentStoreApi,Ge.componentAsset.configSelector,Ge.componentAsset.setConfig,Ge.config]},A.shallow),se=O()(oe,4),Ee=se[0],Ie=se[1],xe=se[2],ke=se[3],Me=Ee();(0,r.useEffect)(function(){(0,R.S)(Me,Z,!1,{type:"\u23EC \u6CE8\u5165 editor \u65B9\u6CD5",payload:Object.keys(Z)})},[]);var ze=(0,K.oR)(function(Ge){var qe;return Ge.componentAsset.defaultConfig?qe=Ge.componentAsset.defaultConfig:Ge.componentAsset.configSelector?qe=Ge.componentAsset.configSelector(Ge.componentAsset.getDefaultConfig(Ge.mode)):qe=Ge.componentAsset.getDefaultConfig(Ge.mode),qe},U()),$e=(0,K.AC)();return(0,r.useEffect)(function(){if(!ke){var Ge={config:ze};(0,R.S)($e,Ge,!1,{type:"\u23EC \u6CE8\u5165\u521D\u59CB\u5316 config",payload:Ge}),$e.getState().yjsDoc.updateHistoryData(Ge),xe(ze,function(qe){(0,R.S)(Me,qe,!1,{type:"\u{1F504} \u521D\u59CB\u5316\u72B6\u6001",payload:qe})})}},[ze]),(0,r.useEffect)(function(){if(ke){var Ge=Ie(Me.getState());if(U()(Ge,ke))return;xe(ke,function(qe){(0,R.S)(Me,qe,!1,{type:"\u{1F504} \u540C\u6B65 Editor \u72B6\u6001",payload:qe})})}},[ke]),null}),a=g,W=e(82138),d=(0,r.memo)(function(){var Z=(0,K.oR)(function($e){return[$e.editorAwareness.panelSize.width,$e.updatePanelPosition,$e.updatePanelSize,$e.togglePanelExpand,$e.componentAsset,$e.editorAwareness.panelExpand]},A.shallow),oe=O()(Z,6),se=oe[0],Ee=oe[1],Ie=oe[2],xe=oe[3],ke=oe[4],Me=oe[5],ze=(0,K.oR)(function($e){return $e.editorAwareness.panelPosition},U());return(0,t.jsx)(W._,{isExpand:Me,style:{display:"flex",flexDirection:"column"},position:ze,onPositionChange:Ee,onSizeDragging:function(Ge,qe){qe.width&&Ie({width:typeof qe.width=="string"?parseInt(qe.width):qe.width})},onExpandChange:xe,minWidth:340,size:{width:se,height:"100%"},children:(0,t.jsx)(ke.ConfigPanel,{})})}),M=d,E=e(68084),T=e(90142),z,J,Y,G=(0,o.kc)(function(Z){var oe=Z.token,se=Z.css,Ee=Z.cx,Ie=Z.prefixCls,xe="".concat(Ie,"-").concat(oe.editorPrefix,"-pro-builder-navbar");return{container:Ee(xe,se(z||(z=c()([`
        background-color: `,`;
      `])),oe.colorBgContainer)),logo:Ee("".concat(xe,"-logo"),se(J||(J=c()([`
        font-size: 16px;
      `])))),img:Ee("".concat(xe,"-logo-img"),se(Y||(Y=c()([`
        height: 24px;
      `]))))}}),de=(0,r.memo)(function(Z){var oe=Z.logo,se=G(),Ee=se.styles,Ie=(0,t.jsxs)(E.Z,{children:[(0,t.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",alt:"ProBuilder",className:Ee.img}),(0,t.jsx)("div",{style:{fontSize:16},children:"ProBuilder"})]});return(0,t.jsx)(T.D,{horizontal:!0,align:"center",height:46,padding:"0 24px",distribution:"space-between",className:Ee.container,children:(0,t.jsx)("div",{className:Ee.logo,children:oe!=null?oe:Ie})})}),w=de,V=e(91823),ie=e(4314),b=e(99126),i=e(2886),h=e(50518),F=e(57820),k=e(87795),q=e(91261),N=e(94456),H=e(14909),X=e(4686),ae=e(15721),te=(0,r.memo)(function(){var Z=(0,H.Fg)(),oe="".concat(Z.prefixCls,"-").concat(Z.editorPrefix,"-pro-builder-canvas"),se=(0,K.oR)(function(Je){return[Je.interaction,Je.enableCanvasInteraction,Je.componentAsset,Je.internalUpdateCanvasInteract]},A.shallow),Ee=O()(se,4),Ie=Ee[0],xe=Ee[1],ke=Ee[2],Me=Ee[3],ze=(0,r.useRef)(),$e=(0,q.Z)(ze),Ge=(0,ae.x)(),qe=Ge.updateEditorAwareness;return(0,r.useEffect)(function(){qe({componentSizeOnCanvas:$e})},[$e]),(0,t.jsx)(X.default,{disabled:!xe,status:Ie,rules:ke.rules,getContainer:"#".concat(oe),onStatusChange:Me,children:(0,t.jsx)("div",{id:"".concat(oe),ref:ze,className:"".concat(oe,"-component"),children:(0,t.jsx)(N.ZP,{prefixCls:"canvas",children:(0,t.jsx)(ke.Component,{})})})})}),fe=te,Ce=(0,r.memo)(function(){var Z=(0,K.oR)(function(Je){return[Je.editorAwareness.viewport,Je.componentAsset,Je.enableCanvasInteraction,Je.toggleCanvasInteraction,Je.internalUpdateEditorAwareness,Je.redo,Je.undo,Je.redoStack().length>0,Je.undoStack().length>0]},A.shallow),oe=O()(Z,9),se=oe[0],Ee=oe[1],Ie=oe[2],xe=oe[3],ke=oe[4],Me=oe[5],ze=oe[6],$e=oe[7],Ge=oe[8],qe=Ee.ErrorBoundary;return(0,t.jsx)(qe,{children:(0,t.jsx)(k.Z,{viewport:se,onViewportChange:function(en){ke({viewport:en})},extraControlBtns:[(0,t.jsx)(h.Z,{title:"\u753B\u5E03\u4EA4\u4E92\uFF1A\u5DF2".concat(Ie?"\u542F\u7528":"\u7981\u7528"),children:(0,t.jsx)(F.ZP,{icon:Ie?(0,t.jsx)(V.Z,{}):(0,t.jsx)(ie.Z,{}),onClick:xe})},"interaction"),(0,t.jsxs)(F.ZP.Group,{children:[(0,t.jsx)(h.Z,{title:"\u64A4\u9500",children:(0,t.jsx)(F.ZP,{icon:(0,t.jsx)(b.Z,{}),onClick:ze,disabled:!Ge})}),(0,t.jsx)(h.Z,{title:"\u91CD\u505A",children:(0,t.jsx)(F.ZP,{icon:(0,t.jsx)(i.Z,{}),onClick:Me,disabled:!$e})})]},"undo-redo")],children:(0,t.jsx)(fe,{})})})}),Be=Ce,Ue=e(93823),je=e(64203),Oe=e(74914),Qe,ve,_e,Re,ce,Xe=(0,o.kc)(function(Z){var oe=Z.token,se=Z.stylish,Ee=Z.css;return{container:Ee(Qe||(Qe=c()([`
      border-top: 1px solid `,`;
      display: flex;
      flex-direction: column;
    `])),oe.colorBorder),header:Ee(ve||(ve=c()([`
      background: `,`;
      cursor: pointer;
    `])),oe.colorBgContainer),collapse:Ee(_e||(_e=c()([`
      background: `,`;
      &:hover {
        background: `,`;
      }
    `])),oe.colorFillQuaternary,oe.colorFillTertiary),headerTitle:Ee(Re||(Re=c()([`
      `,`
      `,`;

      padding: 2px 8px;

      color: `,`;
      border-radius: `,`px;
    `])),se.containerBgHover,se.textInfo,oe.colorTextSecondary,oe.borderRadius),code:Ee(ce||(ce=c()([`
      background: `,`;
      height: 100%;
    `])),oe.colorFillQuaternary)}}),Ve=36,Ye=(0,r.memo)(function(Z){var oe=(0,K.oR)(function(an){return[an.config,an.componentAsset]},A.shallow),se=O()(oe,2),Ee=se[0],Ie=se[1],xe=Xe(),ke=xe.styles,Me=xe.cx,ze=(0,r.useState)(!0),$e=O()(ze,2),Ge=$e[0],qe=$e[1],Je=(0,r.useState)(220),en=O()(Je,2),rn=en[0],on=en[1],sn=Z.onCopy,tn=(0,H.Fg)(),nn=tn.isDarkMode,ln=Ie.generateCode(Ee);return(0,t.jsxs)(W._,{onSizeChange:function(dn){on(rn+dn.height)},placement:"bottom",size:{height:Ge?rn:Ve},minHeight:Ve,className:ke.container,expandable:!1,children:[(0,t.jsxs)(T.D,{padding:"6px 8px",horizontal:!0,distribution:"space-between",align:"center",className:Me(ke.header,Ge?"":ke.collapse),onClick:function(){return qe(!Ge)},children:[(0,t.jsxs)(T.D,{horizontal:!0,gap:12,className:ke.headerTitle,children:[Ge?(0,t.jsx)(Ue.Z,{}):(0,t.jsx)(je.Z,{}),"\u4EE3\u7801\u751F\u6210"]}),(0,t.jsx)(T.D,{horizontal:!0,gap:8,onClick:function(dn){dn.stopPropagation()}})]}),(0,t.jsx)(T.D,{className:ke.code,children:(0,t.jsx)(Oe.y,{theme:nn?"dark":"light",lineNumber:!0,language:"tsx",onCopy:sn,showLanguage:!1,style:{height:"100%",overflow:"auto"},children:ln})})]})}),ge=Ye,he=e(87386),pe=(0,r.memo)(function(){var Z=(0,K.oR)(function(Ee){return Ee.componentAsset}),oe=(0,K.oR)(he.x),se=oe?Z.DesignController:Z.DevelopController;return se?(0,t.jsx)(se,{}):null}),Le,Ae,Ne=(0,o.kc)(function(Z){var oe=Z.token,se=Z.css,Ee=Z.cx;return{container:Ee(se(Le||(Le=c()([`
      height: 100%;
    `])))),default:Ee(se(Ae||(Ae=c()([`
      padding: `,`px;

      color: `,`;
    `])),oe.paddingLG,oe.colorTextTertiary))}}),Q=(0,r.memo)(function(){var Z=(0,K.oR)(function(xe){return[xe.componentAsset]},A.shallow),oe=O()(Z,1),se=oe[0],Ee=Ne(),Ie=Ee.styles;return(0,t.jsx)(x.Z,{className:Ie.container,children:se.CanvasStarter?(0,t.jsx)(se.CanvasStarter,{}):(0,t.jsx)(P.Z,{image:(0,t.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/rxat8ds3j/empty.svg"}),imageStyle:{height:210,marginBottom:32},className:Ie.default,description:"\u6682\u65E0\u914D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u4ECE\u53F3\u4FA7\u9762\u677F\u5F00\u59CB\u7F16\u8F91"})})}),ne=Q,be,Se=(0,o.kc)(function(Z){var oe=Z.token,se=Z.css,Ee=Z.cx,Ie=Z.prefixCls,xe="".concat(Ie,"-").concat(oe.editorPrefix,"-pro-builder-stage");return{container:Ee("".concat(xe,"-container"),se(be||(be=c()([`
        overflow: auto;
      `]))))}}),Pe=(0,r.memo)(function(Z){var oe=Z.hideNavbar,se=Z.onCopy,Ee=(0,K.oR)(function(Me){return Me.componentAsset.componentStore(function(ze){return Me.componentAsset.isStarterMode(ze)})}),Ie=(0,K.oR)(he.x),xe=Se(),ke=xe.styles;return(0,t.jsx)("div",{className:ke.container,style:{height:oe?"100%":"calc(100% - 46px)"},children:(0,t.jsxs)(T.D,{height:"100%",children:[Ee?(0,t.jsx)(ne,{}):(0,t.jsx)(Be,{}),(0,t.jsx)(pe,{}),Ie?null:(0,t.jsx)(ge,{onCopy:se})]})})}),Te=Pe,we,We,He,Ze=(0,o.kc)(function(Z){var oe=Z.token,se=Z.css,Ee=Z.cx,Ie=Z.prefixCls,xe="".concat(Ie,"-").concat(oe.editorPrefix,"-pro-builder");return{app:se(we||(we=c()([`
      height: 100%;
    `]))),main:Ee("".concat(xe,"-main"),se(We||(We=c()([`
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        position: relative;
        background-color: `,`;
      `])),oe.colorBgLayout)),left:Ee("".concat(xe,"-left"),se(He||(He=c()([`
        flex-grow: 1;
      `]))))}}),Ke=(0,r.memo)(function(Z){var oe=Z.logo,se=Z.hideNavbar,Ee=se===void 0?!0:se,Ie=Z.style,xe=Z.ErrorBoundary,ke=xe===void 0?B.default:xe,Me=Z.onCopy,ze=(0,K.oR)(function(nn){return[nn.exportConfig,nn.componentAsset,nn.editorAwareness.panelSize.width,nn.editorAwareness.panelExpand]},A.shallow),$e=O()(ze,4),Ge=$e[0],qe=$e[1],Je=$e[2],en=$e[3],rn=Ze(),on=rn.styles;if(L(),!qe)return(0,t.jsx)($,{});var sn=qe.AssetProvider,tn=(0,t.jsxs)("div",{className:on.main,style:Ie,children:[(0,t.jsxs)("div",{className:on.left,style:{maxWidth:en?"calc(100vw - ".concat(Je,"px)"):"100vw"},children:[Ee?null:(0,t.jsx)(w,{logo:oe}),(0,t.jsx)(Te,{hideNavbar:Ee,onCopy:Me})]}),(0,t.jsx)(M,{})]});return(0,t.jsx)(ke,{onExportConfig:Ge,children:(0,t.jsxs)(sn,{createStore:function(){return qe.componentStore},children:[tn,(0,t.jsx)(a,{})]})})}),De=Ke,ee=e(38960),me=e(99166),ue=(0,r.memo)(function(Z){var oe=Z.config,se=Z.onConfigChange,Ee=Z.componentAsset,Ie=Z.mode,xe=Z.onCanvasError,ke=Z.assetAwareness,Me=Z.onAssetAwarenessChange,ze=Z.editorAwareness,$e=Z.onEditorAwarenessChange,Ge=Z.editorRef,qe=(0,K.AC)(),Je=(0,me.N)(qe),en=qe.getState(),rn=en.yjsDoc,on=function(nn,ln){Je(nn,ln,[ln],function(an){U()(ln,qe.getState()[nn])||((0,R.S)(qe,an,!1,{type:"\u{1F4F6} useUpdateWithYjs / ".concat(nn),payload:ln}),rn.updateHistoryData(an))})};Je("mode",Ie),Je("assetAwareness",ke),Je("editorAwareness",ze),on("config",oe),Je("componentAsset",Ee,[]),Je("onAssetAwarenessChange",Me,[]),Je("onEditorAwarenessChange",$e,[]),Je("onConfigChange",se,[]),Je("onCanvasError",xe,[]);var sn=(0,f.P)();return(0,r.useImperativeHandle)(Ge,function(){return sn}),null}),re=ue,le=["style","__EDITOR_STORE_DEVTOOLS__","editorRef"],Fe=(0,r.memo)(function(Z){var oe=Z.style,se=Z.__EDITOR_STORE_DEVTOOLS__,Ee=Z.editorRef,Ie=j()(Z,le),xe=Ze(),ke=xe.styles;return(0,t.jsx)(C.NL,{initiallyActiveScopes:["pro-builder"],children:(0,t.jsxs)(ee.Z,{devtoolOptions:se,children:[(0,t.jsx)(y.iV,{children:(0,t.jsx)(S.Z,{className:ke.app,style:oe,children:(0,t.jsx)(De,n()({},Ie))})}),(0,t.jsx)(re,n()({editorRef:Ee},Ie))]})})})},15721:function(ye,D,e){"use strict";e.d(D,{x:function(){return j}});var s=e(8891),n=e(75271),m=e(41003),j=function(){var S=(0,m.oR)(function(p){return p.internalUpdateEditorAwareness}),r=(0,s.Z)(S,{wait:100}),C=r.run;return(0,n.useMemo)(function(){return{updateEditorAwareness:C}},[])}},95430:function(ye,D,e){"use strict";e.d(D,{P:function(){return j}});var s=e(86475),n=e(75271),m=e(41003),j=function(){var S=(0,m.AC)(),r=S.getState(),C=r.deselectCanvas,p=r.undoStack,O=r.redoStack,A=r.setConfig,K=r.exportConfig,L=r.setViewport,B=r.resetConfig,v=r.undo,c=r.redo,P=r.setCanvasInteraction,x=r.togglePanelExpand,o=(0,s.Z)(function(){return S.getState().editorAwareness.viewport}),t=(0,s.Z)(function(){return S.getState().editorAwareness}),l=(0,s.Z)(function(){return S.getState().config}),I=(0,s.Z)(function(){return S.getState().props}),u=(0,s.Z)(function(){return S.getState().interaction});return(0,n.useMemo)(function(){return{getConfig:l,setConfig:A,exportConfig:K,resetConfig:B,getViewport:o,setViewport:L,getCanvasInteraction:u,setCanvasInteraction:P,deselectCanvas:C,undo:v,redo:c,undoStack:p,redoStack:O,getProps:I,getEditorAwareness:t,togglePanelExpand:x}},[])}},84246:function(ye,D,e){"use strict";e.d(D,{je:function(){return p.je},Rp:function(){return s.R},yy:function(){return n.y},BD:function(){return O.t},Vy:function(){return y},W5:function(){return S},PO:function(){return C.P},lB:function(){return j.oR},xd:function(){return r.x}});var s=e(19750),n=e(38960),m=e(75271),j=e(41003),y=function(){var K=(0,j.oR)(function(B){return B.assetAwareness}),L=(0,j.oR)(function(B){return B.internalUpdateAssetAwareness});return(0,m.useMemo)(function(){return[K,L]},[K])},S=function(){var K=(0,j.oR)(function(B){return B.interaction}),L=(0,j.oR)(function(B){return B.internalUpdateCanvasInteract});return(0,m.useMemo)(function(){return[K,L]},[K])},r=e(15721),C=e(95430),p=e(30890),O=e(87386)},41003:function(ye,D,e){"use strict";e.d(D,{AC:function(){return y},oR:function(){return j},zt:function(){return m}});var s=e(97412),n=(0,s.k)(),m=n.Provider,j=n.useStore,y=n.useStoreApi},87386:function(ye,D,e){"use strict";e.d(D,{t:function(){return n},x:function(){return s}});var s=function(j){return j.mode==="design"},n={isDesignMode:s}},30890:function(ye,D,e){"use strict";e.d(D,{Hr:function(){return S},je:function(){return j}});var s=e(26068),n=e.n(s),m=function(r){return r[r.canvas=0]="canvas",r[r.code=1]="code",r}({}),j=function(r){return r.Design="design",r.Develop="develop",r}({}),y={mode:j.Develop},S=function(C,p){return n()(n()({},y),{},{undoStack:function(){return p().yjsDoc.undoManager.undoStack},redoStack:function(){return p().yjsDoc.undoManager.redoStack},undo:function(){var A=p(),K=A.yjsDoc,L=A.internalUpdateConfig,B=K.undo(),v=K.getHistoryJSON(),c=v.config;L(c,{type:"history/undo",payload:B},!0)},redo:function(){var A=p(),K=A.yjsDoc,L=A.internalUpdateConfig,B=K.redo(),v=K.getHistoryJSON(),c=v.config;L(c,{type:"history/redo",payload:B},!0)}})}},99064:function(ye,D,e){"use strict";e.d(D,{w:function(){return G}});var s=e(49791),n=e(26068),m=e.n(n),j=e(3341),y=e.n(j),S=e(24140),r=e(79258),C=e(72266),p=e.n(C),O=e(48305),A=e.n(O),K=e(62657),L=e.n(K),B=e(21742),v=e.n(B),c=e(83136),P=e.n(c),x=e(17069),o=e.n(x),t=e(25298),l=e.n(t),I=e(82092),u=e.n(I),$=e(24505),_=o()(function de(w){l()(this,de),u()(this,"type",void 0),u()(this,"name",void 0),u()(this,"timestamp",void 0),this.type=w.type,this.name=w.name,this.timestamp=w.timestamp}),U=function(de){v()(V,de);var w=P()(V);function V(ie){var b;return l()(this,V),b=w.call(this,ie),u()(L()(b),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),u()(L()(b),"undoManager",void 0),u()(L()(b),"updateHistoryData",function(i){var h=b.getMap(b._internalHistoryKey);Object.entries(i).forEach(function(F){var k=A()(F,2),q=k[0],N=k[1];h.set(q,N)})}),u()(L()(b),"recordHistoryData",function(i,h){b.transact(function(){b.updateHistoryData(i)},new _(h))}),u()(L()(b),"getHistoryMap",function(){return b.getMap(b._internalHistoryKey)}),u()(L()(b),"getHistoryJSON",function(){var i=b.getMap(b._internalHistoryKey);return i.toJSON()}),u()(L()(b),"redo",function(){return b.undoManager.redo()}),u()(L()(b),"undo",function(){return b.undoManager.undo()}),b.undoManager=new $.UndoManager(b.getHistoryMap(),{trackedOrigins:new Set([_])}),b.undoManager.on("stack-item-added",function(i){i.stackItem.meta.set("timestamp",i.origin.timestamp),i.stackItem.meta.set("type",i.origin.type),i.stackItem.meta.set("name",i.origin.name)}),b}return o()(V)}($.Doc),R=function(w,V){var ie={config:null,onConfigChange:null,props:{},yjsDoc:new U};return m()(m()({},ie),{},{resetConfig:function(){w({config:ie.config,props:ie.props})},internalUpdateConfig:function(i,h,F){var k=V(),q=k.onConfigChange,N=k.configToProps,H=F?i:m()(m()({},V().config),i);w({config:H},!1,h),q==null||q({config:H,props:N==null?void 0:N(H)})},exportConfig:function(){var i=document.createElement("a");i.download="pro-edior-config.json",i.style.display="none";var h=new Blob([JSON.stringify(V().config)]);i.href=URL.createObjectURL(h),document.body.appendChild(i),i.click(),document.body.removeChild(i)},setConfig:function(i){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!y()(i,V().config)){var F=h.replace,k=h.recordHistory,q=h.name,N=h.type,H=h.trigger;V().internalUpdateConfig(i,{type:"setConfig/".concat(H||"unknown"),payload:{config:i,options:h}},F);var X=p()({},{recordHistory:!0},{recordHistory:k,name:q,type:N});X.recordHistory&&V().yjsDoc.recordHistoryData({config:i},m()(m()({},X),{},{timestamp:Date.now()}))}}})},f=function(w){return w.map(function(V){return{name:V.meta.get("name"),timestamp:V.meta.get("timestamp"),type:V.meta.get("type")}})},g=function(w,V){return{undoStack:function(){return f(V().yjsDoc.undoManager.undoStack)},redoStack:function(){return f(V().yjsDoc.undoManager.redoStack)},undoLength:function(){return V().yjsDoc.undoManager.undoStack.length},redoLength:function(){return V().yjsDoc.undoManager.redoStack.length},undo:function(){var b=V(),i=b.yjsDoc,h=b.internalUpdateConfig,F=i.undo(),k=i.getHistoryJSON(),q=k.config;h(q,{type:"history/undo",payload:F},!0)},redo:function(){var b=V(),i=b.yjsDoc,h=b.internalUpdateConfig,F=i.redo(),k=i.getHistoryJSON(),q=k.config;h(q,{type:"history/redo",payload:F},!0)}}},a=function(){return m()(m()({},g.apply(void 0,arguments)),R.apply(void 0,arguments))},W=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,V=(0,S.v)(w!==!1),ie=w===!1?void 0:w===!0?{name:"ProEditorStore"}:w;return(0,r.createWithEqualityFn)()(V(a,ie),y())},d=e(18846),M=e(75271),E=e(99166),T=e(2121),z=(0,M.memo)(function(de){var w=de.store,V=w.getState(),ie=V.proEditor;if(!ie)throw Error("please wrapper your zustand store with proEditorMiddleware");try{(0,s.AC)()}catch(te){throw Error("Please wrap your App with <ProEditorProvider/>")}var b=(0,s.AC)(),i=b.getState(),h=i.yjsDoc,F=i.setConfig,k=ie.options.name,q=function(){return ie.options.partialize(w.getState())},N=function(){var fe,Ce=q();return y()(Ce,(fe=b.getState().config)===null||fe===void 0?void 0:fe[k])},H=q(),X=(0,E.N)(b);X("config",u()({},k,H),[H],function(te){N()||((0,T.S)(b,te,!1,{type:"\u2935\uFE0F syncData from ".concat(k),payload:{config:H,name:k}}),h.updateHistoryData(te))}),X("onConfigChange",function(te){var fe=te.config[k],Ce=q();y()(Ce,fe)||w.setState(fe,!1,{type:"ProEditor/updateByRedoOrUndo",payload:fe})},[]);var ae=(0,M.useCallback)(function(){N()||F.apply(void 0,arguments)},[]);return(0,M.useEffect)(function(){w.setState((0,d.Uy)(function(te){te.proEditor.__INTERNAL_SET_CONFIG__NOT_USE_IT=ae}),!1,"injectProEditor")},[]),null}),J=z,Y=e(52676),G=function(w){var V=w.children,ie=w.devtoolOptions,b=w.store,i=!0,h=(0,Y.jsxs)(Y.Fragment,{children:[V,b==null?void 0:b.map(function(F,k){return(0,Y.jsx)(J,{store:F},"".concat(F.name,"-").concat(k))})]});try{(0,s.AC)()}catch(F){i=!1}return i?h:(0,Y.jsx)(s.zt,{createStore:function(){return W(ie)},children:h})}},98336:function(ye,D,e){"use strict";e.d(D,{E:function(){return j}});var s=e(86475),n=e(75271),m=e(49791),j=function(){var S=(0,m.AC)(),r=S.getState(),C=r.undoStack,p=r.undoLength,O=r.redoLength,A=r.redoStack,K=r.setConfig,L=r.exportConfig,B=r.resetConfig,v=r.undo,c=r.redo,P=(0,s.Z)(function(){return S.getState().config}),x=(0,s.Z)(function(){return S.getState().props});return(0,n.useMemo)(function(){return{getConfig:P,setConfig:K,exportConfig:L,resetConfig:B,undo:v,redo:c,undoStack:C,redoStack:A,undoLength:p,redoLength:O,getProps:x}},[])}},5:function(ye,D,e){"use strict";e.d(D,{w8:function(){return s.w},lm:function(){return m.l},E2:function(){return n.E}});var s=e(99064),n=e(98336),m=e(56621)},56621:function(ye,D,e){"use strict";e.d(D,{l:function(){return S}});var s=e(26068),n=e.n(s),m=e(82092),j=e.n(m),y=function(C,p){return function(O,A,K){var L,B=(L=p.partialize)!==null&&L!==void 0?L:function(o){return o},v=p.name,c=function(t){var l=B(A()),I=A(),u=I.proEditor;u.__INTERNAL_SET_CONFIG__NOT_USE_IT(j()({},v,l),n()({trigger:"proEditorMiddleware"},t))},P=K.setState;K.setState=function(o,t,l){P(o,t,l),c(l||{})};var x=C(function(o,t,l){O(o,t,l),c(l||{})},A,K);return n()(n()({},x),{},{proEditor:{options:n()(n()({},p),{},{partialize:B})}})}},S=y},49791:function(ye,D,e){"use strict";e.d(D,{AC:function(){return y},zt:function(){return m}});var s=e(97412),n=(0,s.k)(),m=n.Provider,j=n.useStore,y=n.useStoreApi},36953:function(ye,D,e){"use strict";e.d(D,{p:function(){return f}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(48392),S=e(79745),r=e(48305),C=e.n(r),p=e(75271),O=e(53649),A=e.n(O),K=e(69866),L,B=(0,K.kc)(function(g,a){var W,d,M=g.css,E=g.token,T=g.isDarkMode,z=a.offset,J=a.outside,Y=a.size,G=((W=z==null?void 0:z.x)!==null&&W!==void 0?W:0)+"px",de=((d=z==null?void 0:z.y)!==null&&d!==void 0?d:0)+"px",w=J?"0":".1",V=Y+"px";return M(L||(L=A()([`
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
    `])),w,V,G,de,T?E.colorText:"#fff",T?"transparent":E.colorTextQuaternary)}),v=e(52676),c=["className","size"],P=function(){var a=(0,p.useState)(),W=C()(a,2),d=W[0],M=W[1],E=(0,p.useState)(!0),T=C()(E,2),z=T[0],J=T[1],Y=(0,p.useRef)();return(0,p.useEffect)(function(){if(Y.current&&Y.current.parentElement){var G=Y.current.parentElement,de=function(ie){var b=G.getBoundingClientRect();M({x:ie.clientX-b.x,y:ie.clientY-b.y}),J(!1)},w=function(){J(!0)};return G.addEventListener("mousemove",de),G.addEventListener("mouseleave",w),function(){G.removeEventListener("mousemove",de),G.removeEventListener("mouseleave",w)}}},[]),[d,z,Y]},x=(0,p.memo)(function(g){var a=g.className,W=g.size,d=W===void 0?64:W,M=j()(g,c),E=P(),T=C()(E,3),z=T[0],J=T[1],Y=T[2],G=B({offset:z,outside:J,size:d}),de=G.styles,w=G.cx;return(0,v.jsx)("div",n()({className:w(de,a),ref:Y},M))}),o=x,t=e(96206),l=e(15130),I,u,$,_=(0,K.kc)(function(g,a){var W=g.css,d=g.cx,M=g.token,E=g.prefixCls,T=a.type,z=W(I||(I=A()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),T==="block"?M.colorFillTertiary:"transparent",T==="block"?"transparent":M.colorBorder),J="".concat(E,"-").concat(M==null?void 0:M.editorPrefix),Y="".concat(J,"-snippet");return{container:d("".concat(Y,"-container"),z,W(u||(u=A()([`
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
      `])),M.borderRadius,M.motionEaseOut,M.colorFillTertiary)),highlighter:d("".concat(Y,"-highlighter"),W($||($=A()([`
        position: relative;
        overflow: hidden;
        flex: 1;
      `]))))}}),U=["symbol","language","children","copyable","type","spotlight","className"],R=(0,p.memo)(function(g){var a=g.symbol,W=a===void 0?"$":a,d=g.language,M=d===void 0?"tsx":d,E=g.children,T=g.copyable,z=T===void 0?!0:T,J=g.type,Y=J===void 0?"ghost":J,G=g.spotlight,de=g.className,w=j()(g,U),V=(0,l.r)(),ie=V.isDarkMode,b=_({type:Y}),i=b.styles,h=b.cx;return(0,v.jsxs)("div",n()(n()({className:h(i.container,de)},w),{},{children:[G&&(0,v.jsx)(o,{}),(0,v.jsx)("div",{className:i.highlighter,children:(0,v.jsx)(y.Z,{language:M,theme:ie?"dark":"light",children:W?[W,E].join(" "):E})}),z&&(0,v.jsx)(S.Z,{content:E})]}))}),f=function(a){return(0,v.jsx)(t.iV,{children:(0,v.jsx)(R,n()({},a))})}},33043:function(ye,D,e){"use strict";e.d(D,{j:function(){return m}});var s=e(6751),n=e(52676),m=function(y){var S=y.children,r=y.showDevtools,C=!0,p=(0,n.jsx)(n.Fragment,{children:S});try{(0,s.AC)()}catch(O){C=!1}return C?p:(0,n.jsx)(s.zt,{createStore:function(){return(0,s.MT)(r)},children:p})}},93729:function(ye,D,e){"use strict";e.d(D,{c:function(){return Ne},j:function(){return Ve.j}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(75271),S=e(96206),r=e(82937),C=e(30967),p=e(25013),O=e(77848),A=e(90142),K=e(16665),L=e(14909),B=e(82092),v=e.n(B),c=e(24939),P=e(82187),x=e.n(P),o=e(97853),t=e(53649),l=e.n(t),I=e(69866),u,$,_,U,R,f,g,a,W,d,M="0 0 0 calc(1px / var(--scale-x, 1)) rgba(0, 0, 0, 0.05)",E="0 1px calc(3px / var(--scale-x, 1)) 0 rgba(0, 0, 0, 0.15)",T="".concat(M," ").concat(E),z=(0,L.F4)(u||(u=l()([`
	0% {
		box-shadow: var(--box-shadow);
		transform: scale(1);
	}
	100% {
		box-shadow: var(--box-shadow-picked-up);
		transform: scale(var(--scale));
	}
`]))),J=(0,L.F4)($||($=l()([`
	0% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
	}
`]))),Y=(0,I.kc)(function(Q){var ne=Q.css,be=Q.cx,Se=Q.token,Pe=Q.prefixCls,Te="".concat(Pe,"-").concat(Se.editorPrefix,"-sortable-list");return{tokenPrefixCls:Te,item:be("".concat(Pe,"-item"),ne(_||(_=l()([`
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 1px 0;
        color: `,`;
        font-size: 12px;
        white-space: nowrap;
        list-style: none;
        border-radius: 4px;
        outline: none;
        transform: scale(var(--scale, 1));
        transform-origin: 50% 50%;
        transition: box-shadow 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
        -webkit-tap-highlight-color: transparent;

        &:focus-visible {
          box-shadow: 0 0 4px 1px #4c9ffe, `,`;
        }

        &:not(.`,`-item-withHandle) {
          cursor: grab;
          -webkit-user-select: none;
          user-select: none;
          touch-action: none;
        }

        &-dragging:not(.`,`-item-dragOverlay) {
          z-index: 0;
          opacity: var(--dragging-opacity, 0.5);

          &:focus {
            box-shadow: `,`;
          }
        }
      `])),Se.colorTextSecondary,T,Te,Te,T)),disabled:be("".concat(Pe,"-item-disabled"),ne(U||(U=l()([`
        color: #999;
        background-color: #f1f1f1;
        cursor: not-allowed;
        &:focus {
          box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1), `,`;
        }
      `])),T)),dragOverlay:be("".concat(Pe,"-item-dragOverlay"),ne(R||(R=l()([`
        padding: 4px 0;
        background-color: `,`;
        border: none;
        box-shadow: var(--box-shadow-picked-up);
        transform: scale(var(--scale));
        cursor: inherit;
        opacity: 1;

        /* box-shadow: 0 0px 6px 2px @focused-outline-color; */
        animation: `,` 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
      `])),Se.colorBgElevated,z)),wrapper:be("".concat(Pe,"-item-wrapper"),ne(f||(f=l()([`
        display: flex;
        box-sizing: border-box;
        transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)
          scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1));
        transform-origin: 0 0;
        touch-action: manipulation;

        &:not(:last-child) {
          margin-bottom: 2px;
        }
      `])))),wrapperFadeIn:be("".concat(Pe,"-item-wrapper-fadeIn"),ne(g||(g=l()([`
        animation: `,` 500ms ease;
      `])),J)),wrapperdragOverlay:be("".concat(Pe,"-item-wrapper-dragOverlay"),ne(a||(a=l()([`
        --scale: 1.05;
        --box-shadow: `,`;
        --box-shadow-picked-up: `,`, -1px 0 15px 0 rgba(82, 82, 82, 0.01),
          0 15px 15px 0 rgba(82, 82, 82, 0.25);

        z-index: 999;
      `])),T,M)),actions:be("".concat(Pe,"-item-actions"),ne(W||(W=l()([`
        z-index: 10;
        color: hsla(0, 0, 0, 0.45);
        opacity: 0;
      `])))),content:be("".concat(Pe,"-item-content"),ne(d||(d=l()([`
        position: relative;
        width: 100%;
        height: 24px;
        border-radius: 2px;
        min-width: 48px;

        &:hover .`,`-item-actions {
          opacity: 1;
        }
      `])),Pe))}}),G=e(52676),de=["color","dragOverlay","dragging","disabled","fadeIn","handle","index","listeners","onRemove","item","renderItem","renderContent","hideRemove","sorting","style","actions","transition","transform","id","className"],w=(0,y.memo)((0,y.forwardRef)(function(Q,ne){var be=Q.color,Se=Q.dragOverlay,Pe=Q.dragging,Te=Q.disabled,we=Q.fadeIn,We=Q.handle,He=Q.index,Ze=Q.listeners,Ke=Q.onRemove,De=Q.item,ee=Q.renderItem,me=Q.renderContent,ue=Q.hideRemove,re=ue===void 0?!1:ue,le=Q.sorting,Fe=Q.style,Z=Q.actions,oe=Q.transition,se=Q.transform,Ee=Q.id,Ie=Q.className,xe=j()(Q,de),ke=(0,c.S)(),Me=Y(),ze=Me.styles,$e=x()("".concat(ze.tokenPrefixCls,"-item"));return(0,y.useEffect)(function(){if(Se)return document.body.style.cursor="grabbing",function(){document.body.style.cursor=""}},[Se]),(0,G.jsx)("li",{className:x()(ze.wrapper,Ie,v()(v()(v()({},ze.wrapperFadeIn,we),"".concat($e,"-wrapper-sorting"),le),ze.wrapperdragOverlay,Se)),style:{transition:oe,"--translate-x":se?"".concat(Math.round(se.x),"px"):void 0,"--translate-y":se?"".concat(Math.round(se.y),"px"):void 0,"--scale-x":se!=null&&se.scaleX?"".concat(se.scaleX):void 0,"--scale-y":se!=null&&se.scaleY?"".concat(se.scaleY):void 0,"--index":He,"--color":be},"data-testid":"list-item",ref:ne,children:(0,G.jsx)("div",n()(n()(n()({className:x()(ze.item,v()(v()(v()(v()(v()({},"".concat($e,"-dragging"),Pe),"".concat($e,"-withHandle"),We),ze.dragOverlay,Se),ze.disabled,Te),"".concat($e,"-discolorabled"),be)),style:n()(n()({},Fe),{},{backgroundColor:ke.colorBgContainer}),"data-cypress":"draggable-item"},We?void 0:Ze),xe),{},{tabIndex:We?void 0:0,children:ee?ee(De,{dragOverlay:!!Se,dragging:!!Pe,sorting:!!le,index:He,fadeIn:!!we,listeners:Ze,ref:ne,style:Fe,transform:se,transition:oe}):(0,G.jsxs)(A.D,{className:ze.content,direction:"horizontal",align:"center",children:[We?(0,G.jsx)(o.Ag,n()({tabIndex:-1,className:x()(ze.actions),cursor:"grab","data-cypress":"draggable-handle",style:{width:14,height:24}},Ze)):null,(0,G.jsx)(A.D,{flex:1,style:{paddingLeft:4},children:me?me(De,He):(0,G.jsx)("div",{children:typeof De=="string"?De:He})}),(0,G.jsxs)(A.D,{className:x()(ze.actions),direction:"horizontal",align:"center",children:[typeof Z=="function"?Z(De,He):Z,re?null:(0,G.jsx)(o.sL,{tabIndex:-1,onClick:Ke,style:{height:22}})]})]})}))},Ee)})),V=w,ie=e(5899),b=e.n(ie),i=e(6751),h=e(53815),F=function(ne){return{activeId:ne.activeId,handle:ne.handle,hideRemove:ne.hideRemove,renderItem:ne.renderItem,renderContent:ne.renderContent,getItemStyles:ne.getItemStyles}},k=function(){var ne=(0,i.oR)(F,K.shallow),be=ne.activeId,Se=ne.renderItem,Pe=ne.handle,Te=ne.hideRemove,we=ne.getItemStyles,We=ne.renderContent,He=(0,i.oR)(function(De){return De.value},b()),Ze=(0,i.oR)(function(De){return De.keyManager},b()),Ke=(0,h._z)(Ze,be);return(0,G.jsx)(r.y9,{adjustScale:!1,dropAnimation:n()(n()({},r.RJ),{},{sideEffects:(0,r.Ai)({styles:{active:{opacity:"0.5"}}})}),children:be?(0,G.jsx)(V,{id:be,dragOverlay:!0,index:Ke,item:He[Ke],renderItem:Se,renderContent:We,style:we({id:be,index:Ke,isSorting:!0,isDragging:!0,overIndex:-1,isDragOverlay:!0}),hideRemove:Te,handle:Pe}):null})},q=(0,y.memo)(k),N=e(4401),H=(0,I.kc)(function(Q,ne){var be=Q.css,Se=Q.token,Pe=Q.cx,Te=Q.prefixCls,we=ne.horizontal,We="".concat(Te,"-").concat(Se.editorPrefix,"-sortable-list");return{container:Pe("".concat(We,"-container"),be({listStyle:"none",display:"grid",gridAutoRows:"max-content",gridGap:"2px",gridTemplateColumns:"repeat(var(--columns, 1), 1fr)",width:"100%",margin:"0",padding:"0",borderRadius:"4px",transition:"background-color 350ms ease",gridAutoFlow:we?"column":void 0}))}}),X=(0,y.forwardRef)(function(Q,ne){var be=Q.children,Se=Q.columns,Pe=Se===void 0?1:Se,Te=Q.horizontal,we=Q.style,We=Q.className,He=H({horizontal:Te}),Ze=He.styles,Ke=x()(Ze.container,We);return(0,G.jsx)("ul",{ref:ne,style:n()(n()({},we),{},{"--columns":Pe}),className:Ke,children:be})}),ae=X;function te(Q){var ne=Q.disabled,be=Q.id,Se=Q.index,Pe=Q.onRemove,Te=Q.useDragOverlay,we=Te===void 0?!0:Te,We=Q.handle,He=We===void 0?!0:We,Ze=Q.getItemStyles,Ke=Q.renderItem,De=Q.renderContent,ee=Q.item,me=Q.actions,ue=Q.hideRemove,re=ue===void 0?!1:ue,le=(0,O.nB)({id:be,disabled:ne}),Fe=le.attributes,Z=le.isDragging,oe=le.isSorting,se=le.listeners,Ee=le.overIndex,Ie=le.setNodeRef,xe=le.transform,ke=le.transition;return(0,G.jsx)(V,n()({ref:Ie,id:be,item:ee,handle:He,disabled:ne,dragging:Z,sorting:oe,hideRemove:re,actions:me,index:Se,onRemove:Pe?function(){return Pe(Se)}:void 0,transform:xe,transition:!we&&Z?"none":ke,renderItem:Ke,renderContent:De,style:Ze({index:Se,id:be,isDragging:Z,isSorting:oe,overIndex:Ee,isDragOverlay:!1}),listeners:se,"data-index":Se,"data-id":be,dragOverlay:!we&&Z},Fe),be)}var fe=e(81347),Ce=e(57820),Be=e(23711),Ue,je=(0,I.kc)(function(Q){var ne=Q.token,be=Q.css,Se=Q.cx,Pe=Q.prefixCls,Te=(0,Be.X)(Q),we=Pe;return{btnAdd:Se("".concat(we,"-btn-add"),be(Ue||(Ue=l()([`
        height: 24px;
        padding-block: 2px;
        margin-top: `,`px;
        margin-bottom: `,`px;
      `])),ne.marginXXS,ne.marginXXS),Te.defaultButton)}}),Oe=function(ne){return{renderItem:ne.renderItem,renderContent:ne.renderContent,renderEmpty:ne.renderEmpty,getItemStyles:ne.getItemStyles,keyManager:ne.keyManager,actions:ne.actions,hideRemove:ne.hideRemove,handle:ne.handle,creatorButtonProps:ne.creatorButtonProps,dispatchListData:ne.dispatchListData}},Qe=function(){var ne=(0,i.oR)(Oe,K.shallow),be=ne.dispatchListData,Se=ne.renderItem,Pe=ne.renderContent,Te=ne.renderEmpty,we=ne.creatorButtonProps,We=we===void 0?!1:we,He=ne.hideRemove,Ze=ne.handle,Ke=ne.keyManager,De=ne.getItemStyles,ee=ne.actions,me=je(),ue=me.styles,re=(0,i.oR)(function(ke){return ke.value},b()),le=We||{},Fe=le.record,Z=le.creatorButtonText,oe=Z===void 0?"\u6DFB\u52A0\u4E00\u5217":Z,se=le.position,Ee=se===void 0?"bottom":se,Ie=le.style,xe=function(Me){var ze=Me.empty,$e=ze===void 0?!1:ze;return(0,G.jsx)(Ce.ZP,{block:!$e,size:"small",style:$e?null:Ie,className:ue.btnAdd,onClick:function(){be({type:"addItem",item:Fe(re.length)})},icon:(0,G.jsx)(fe.Z,{}),children:oe})};return Array.isArray(re)&&re.length===0?Te?Te():(0,G.jsx)(N.Z,{image:N.Z.PRESENTED_IMAGE_SIMPLE,description:"\u6682\u65E0\u6570\u636E",children:We!==!1?(0,G.jsx)(xe,{empty:!0}):null}):(0,G.jsxs)(G.Fragment,{children:[We!==!1&&Ee==="top"?(0,G.jsx)(xe,{}):null,(0,G.jsx)(ae,{children:re.map(function(ke,Me){return(0,G.jsx)(te,{id:Ke[Me],item:ke,index:Me,actions:ee,hideRemove:He,handle:Ze,renderItem:Se,renderContent:Pe,getItemStyles:De,onRemove:function(){return be({type:"removeItem",index:Me})},useDragOverlay:!0},Ke[Me])})}),We!==!1&&Ee==="bottom"?(0,G.jsx)(xe,{}):null]})},ve=(0,y.memo)(Qe),_e={strategy:r.uN.Always},Re=function(ne){return{handleDragStart:ne.handleDragStart,handleDragCancel:ne.handleDragCancel,handleDragEnd:ne.handleDragEnd,keyManager:ne.keyManager,renderHeader:ne.renderHeader}},ce=function(ne){var be=ne.className,Se=ne.style,Pe=(0,i.oR)(Re,K.shallow),Te=Pe.handleDragStart,we=Pe.handleDragCancel,We=Pe.handleDragEnd,He=Pe.keyManager,Ze=Pe.renderHeader,Ke=(0,r.Dy)((0,r.VT)(r.MA),(0,r.VT)(r.LO),(0,r.VT)(r.Lg,{coordinateGetter:O.is})),De=(0,y.useMemo)(function(){return(0,C.createPortal)((0,G.jsx)(q,{}),document.body)},[]);return(0,G.jsx)(A.D,{className:(0,L.cx)(be),style:Se,children:(0,G.jsx)(r.LB,{sensors:Ke,collisionDetection:r.pE,onDragStart:Te,onDragEnd:We,measuring:{droppable:_e},onDragCancel:we,modifiers:[p.DL,p.hg],children:(0,G.jsxs)(O.Fo,{items:He,strategy:O.qw,children:[Ze==null?void 0:Ze(),(0,G.jsx)(ve,{}),De]})})})},Xe=ce,Ve=e(33043),Ye=e(18846),ge=e(99166),he=e(30436),pe=(0,y.forwardRef)(function(Q,ne){var be=Q.initialValues,Se=Q.value,Pe=Q.actions,Te=Q.onChange,we=Q.renderItem,We=Q.renderContent,He=Q.renderEmpty,Ze=Q.renderHeader,Ke=Q.getItemStyles,De=Q.creatorButtonProps,ee=Q.hideRemove,me=Q.handle,ue=(0,i.AC)(),re=(0,ge.N)(ue),le=function(oe,se){var Ee=ue.getState(),Ie=Ee.keyManager,xe=oe[se]||[],ke=(0,Ye.Uy)(Ie,function(Me){return xe.forEach(function(ze,$e){var Ge=Me[$e];Ge===void 0&&(Me[$e]=(0,h.Fs)($e))}),Me});ue.setState({keyManager:ke,value:xe})};re("initialValues",be,[],function(Z){le(Z,"initialValues")}),re("value",Se,[Se],function(Z){le(Z,"value")}),re("actions",Pe),re("onChange",Te),re("renderItem",we),re("renderContent",We),re("renderEmpty",He),re("renderHeader",Ze),re("getItemStyles",Ke),re("creatorButtonProps",De),re("hideRemove",ee),re("handle",me);var Fe=(0,he.t)();return(0,y.useImperativeHandle)(ne,function(){return Fe}),null}),Le=pe,Ae=["SHOW_STORE_IN_DEVTOOLS","className","style"],Ne=(0,y.memo)((0,y.forwardRef)(function(Q,ne){var be=Q.SHOW_STORE_IN_DEVTOOLS,Se=Q.className,Pe=Q.style,Te=j()(Q,Ae);return(0,G.jsx)(S.iV,{children:(0,G.jsxs)(Ve.j,{showDevtools:be,children:[(0,G.jsx)(Xe,{style:Pe,className:Se}),(0,G.jsx)(Le,n()(n()({},Te),{},{ref:ne}))]})})}))},30436:function(ye,D,e){"use strict";e.d(D,{t:function(){return m}});var s=e(86475),n=e(6751),m=function(){var y=(0,n.AC)(),S=(0,s.Z)(function(){return y.getState().activeId}),r=(0,s.Z)(function(K){var L=y.getState(),B=L.keyManager,v=B[K]||null;return v}),C=(0,s.Z)(function(){return y.getState().value}),p=function(L,B){return y.getState().dispatchListData({type:"addItem",item:L,index:B})},O=function(L){return y.getState().dispatchListData({type:"removeItem",index:L})},A=function(L,B){return y.getState().dispatchListData({type:"updateItem",item:L,index:B})};return{getActiveId:S,getValue:C,addItem:p,removeItem:O,getIdByIndex:r,updateItem:A}}},98547:function(ye,D,e){"use strict";e.d(D,{cm:function(){return s.c},jW:function(){return s.j},tL:function(){return n.t}});var s=e(93729),n=e(30436)},6751:function(ye,D,e){"use strict";e.d(D,{zt:function(){return $},MT:function(){return t},oR:function(){return I},AC:function(){return u}});var s=e(3341),n=e.n(s),m=e(24140),j=e(97412),y=e(79258),S=e(26068),r=e.n(S),C=e(5899),p=e.n(C),O=e(53815),A={activeId:null,value:[],keyManager:[],hideRemove:!1,handle:!0,onChange:void 0,renderItem:void 0,actions:[],getItemStyles:function(){return{}}},K=e(77848),L=e(18846),B=function(U,R){switch(R.type){case"moveItem":var f=R.activeIndex,g=R.overIndex;return f===g||f<0||f>=U.length||g<0||g>=U.length?void 0:(0,L.Uy)(U,function(M){var E=(0,K.Rp)(M,f,g);return E});case"removeItem":var a=new Set(Array.isArray(R.index)?R.index:[R.index]);return a.size<=0?void 0:(0,L.Uy)(U,function(M){var E=M.filter(function(T,z){return!a.has(z)});return E});case"addItem":var W=R.index,d=W===void 0?U.length:W;return(0,L.Uy)(U,function(M){return M.splice(d,0,(0,O.Fs)(d)),M});case"updateItem":return(0,L.Uy)(U,function(M){return M})}},v=e(72266),c=e.n(v),P=function(U,R){switch(R.type){case"moveItem":var f=R.activeIndex,g=R.overIndex;return f===g||f<0||f>=U.length||g<0||g>=U.length?void 0:(0,L.Uy)(U,function(E){var T=(0,K.Rp)(E,f,g);return T});case"removeItem":var a=new Set(Array.isArray(R.index)?R.index:[R.index]);return a.size<=0?void 0:(0,L.Uy)(U,function(E){var T=E.filter(function(z,J){return!a.has(J)});return T});case"addItem":var W=R.item,d=R.index,M=d===void 0?U.length:d;return(0,L.Uy)(U,function(E){return E.splice(M,0,W),E});case"updateItem":return(0,L.Uy)(U,function(E){var T=R.item,z=R.index;return E[z]=c()(E[z],T),E})}},x=function(U,R){return r()(r()({},A),{},{handleDragStart:function(g){var a=g.active.id;a&&U({activeId:a})},handleDragEnd:function(g){var a=g.over,W=g.active,d=R(),M=d.dispatchListData,E=d.keyManager;if(a){var T=(0,O._z)(E,W.id),z=(0,O._z)(E,a.id);M({type:"moveItem",activeIndex:T,overIndex:z})}U({activeId:null})},handleDragCancel:function(){U({activeId:null})},dispatchListData:function(g){var a=R(),W=a.value,d=a.keyManager,M=a.onChange,E=P(W,g),T=B(d,g);if(E){if(p()(W,E))return;U({value:E,keyManager:T}),M&&M(E,g)}}})},o=x,t=function(U){return(0,y.createWithEqualityFn)((0,m.v)(U)(o,{name:"SortableList"}),n())},l=(0,j.k)(),I=l.useStore,u=l.useStoreApi,$=l.Provider},53815:function(ye,D,e){"use strict";e.d(D,{Fs:function(){return B},_z:function(){return L}});var s=e(48305),n=e.n(s),m=e(15558),j=e.n(m),y=e(5899),S=e.n(y),r=e(88955),C=e(75271),p=function(c){return c};function O(v){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:p;return _toConsumableArray(new Array(v)).map(function(P,x){return c(x)})}function A(v,c,P){var x=v.length;if(c<0||c>=x||P<0||P>=x)return v;var o=v[c],t=c-P;return t>0?[].concat(_toConsumableArray(v.slice(0,P)),[o],_toConsumableArray(v.slice(P,c)),_toConsumableArray(v.slice(c+1,x))):t<0?[].concat(_toConsumableArray(v.slice(0,c)),_toConsumableArray(v.slice(c+1,P+1)),[o],_toConsumableArray(v.slice(P+1,x))):v}var K=function(c){var P=useState(c),x=_slicedToArray(P,2),o=x[0],t=x[1];return useEffect(function(){isEqual(c,o)||t(c)},[c]),[o,t]},L=function(c,P){return P?c.findIndex(function(x){return x===P}):-1},B=function(c){return(0,r.x0)()}},5418:function(ye,D,e){"use strict";e.d(D,{$:function(){return Ye},x:function(){return ve}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(75271),S=e(96206),r=e(48305),C=e.n(r),p=e(82937),O=e(77848),A=e(3341),K=e.n(A),L=e(30967),B=e(90142),v=e(16665),c=e(68951),P=[p.g4.Down,p.g4.Right,p.g4.Up,p.g4.Left],x=[p.g4.Left,p.g4.Right],o=function(he,pe,Le){return function(Ae,Ne){var Q=Ne.currentCoordinates,ne=Ne.context,be=ne.active,Se=ne.over,Pe=ne.collisionRect,Te=ne.droppableRects,we=ne.droppableContainers;if(P.includes(Ae.code)){if(!be||!Pe)return;Ae.preventDefault();var We=he.current,He=We.items,Ze=We.offset;if(x.includes(Ae.code)&&Se!==null&&Se!==void 0&&Se.id){var Ke=(0,c.Vh)(He,be.id,Se.id,Ze,Le),De=Ke.depth,ee=Ke.maxDepth,me=Ke.minDepth;switch(Ae.code){case p.g4.Left:if(De>me)return n()(n()({},Q),{},{x:Q.x-Le});break;case p.g4.Right:if(De<ee)return n()(n()({},Q),{},{x:Q.x+Le});break}return}var ue=[];we.forEach(function(Je){if(!(Je!=null&&Je.disabled||Je.id===(Se==null?void 0:Se.id))){var en=Te.get(Je.id);if(en)switch(Ae.code){case p.g4.Down:Pe.top<en.top&&ue.push(Je);break;case p.g4.Up:Pe.top>en.top&&ue.push(Je);break}}});var re=(0,p.ey)({active:be,collisionRect:Pe,pointerCoordinates:null,droppableRects:Te,droppableContainers:ue}),le=(0,p._8)(re,"id");if(le===(Se==null?void 0:Se.id)&&re.length>1&&(le=re[1].id),le&&Se!==null&&Se!==void 0&&Se.id){var Fe=Te.get(be.id),Z=Te.get(le),oe=we.get(le);if(Fe&&Z&&oe){var se=He.findIndex(function(Je){var en=Je.id;return en===le}),Ee=He[se],Ie=He.findIndex(function(Je){var en=Je.id;return en===be.id}),xe=He[Ie];if(Ee&&xe){var ke=(0,c.Vh)(He,be.id,le,(Ee.depth-xe.depth)*Le,Le),Me=ke.depth,ze=se>Ie,$e=ze?1:-1,Ge=pe?(Pe.height-Fe.height)/2:0,qe={x:Z.left+Me*Le,y:Z.top+$e*Ge};return qe}}}}}},t=e(38883),l=e(75743),I=e(78434),u=e(53649),$=e.n(u),_=e(7065),U=e(69866),R=e(97853),f=e(52676),g=["childCount","clone","depth","disableSelection","collapsed","indentationWidth","onCollapse","onRemove","style","id","showExtra","hideRemove","node","virtualStyle"],a,W,d,M,E,T=(0,U.kc)(function(ge,he){var pe=ge.css,Le=ge.cx,Ae=ge.prefixCls,Ne=ge.token,Q=he.collapsed,ne="".concat(Ae,"-").concat(Ne.editorPrefix,"-sortable-tree"),be="".concat(ne,"-node");return{componentPrefix:ne,container:Le(be,"".concat(be,"-indicator"),pe(a||(a=$()([`
          margin-bottom: 4px;
          padding-left: 12px;

          &:hover {
            .`,"-handle, .",`-remove {
              opacity: 1;
            }
          }
        `])),be,be)),deleteAction:Le("".concat(be,"-remove"),pe(W||(W=$()([`
          opacity: 0;
        `])))),collapseAction:pe(d||(d=$()([`
        svg {
          transform: `,`;
          transition: transform 250ms ease;
        }
      `])),Q?"rotate(-90deg)":""),extra:Le("".concat(be,"-extra"),pe(M||(M=$()([`
          margin-bottom: 8px;
        `])))),handle:pe(E||(E=$()([`
        position: absolute;
        left: -13px;
        opacity: 0;
      `])))}}),z=function(he){var pe=he.isSorting,Le=he.wasDragging;return!(pe||Le)},J=(0,y.memo)(function(ge){var he=ge.childCount,pe=ge.clone,Le=ge.depth,Ae=ge.disableSelection,Ne=Ae===void 0?c.gO:Ae,Q=ge.collapsed,ne=ge.indentationWidth,be=ge.onCollapse,Se=ge.onRemove,Pe=ge.style,Te=ge.id,we=ge.showExtra,We=ge.hideRemove,He=ge.node,Ze=ge.virtualStyle,Ke=j()(ge,g),De=T({collapsed:Q}),ee=De.styles,me=De.cx,ue="".concat(ee.componentPrefix,"-node"),re=(0,t.oR)(function(tn){return[tn.indentationWidth,tn.selectedIds.includes(Te),tn.renderContent,tn.renderExtra,tn.withKeyboardSelectNode,tn.deselectedAll,tn.disableDrag]},v.shallow),le=C()(re,7),Fe=le[0],Z=le[1],oe=le[2],se=le[3],Ee=le[4],Ie=le[5],xe=le[6],ke=we&&!pe,Me=(0,y.useRef)(document.getElementsByClassName(ee.componentPrefix).item(0)),ze=(0,O.nB)({id:Te,animateLayoutChanges:z}),$e=ze.isDragging,Ge=ze.isSorting,qe=ze.listeners,Je=ze.attributes,en=ze.setDraggableNodeRef,rn=ze.setDroppableNodeRef,on=ze.transform,sn=ze.transition;return(0,_.Z)(function(){Ie()},[Me]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("li",n()(n()({ref:rn,className:me(ee.container,pe&&"".concat(ue,"-clone"),$e&&"".concat(ue,"-ghost"),Z&&!pe&&"".concat(ue,"-selected"),Ne&&"disableSelection"),style:n()({pointerEvents:Ge?"none":void 0,"--spacing":"".concat(Fe*Le+(xe?0:13),"px"),transform:I.ux.Translate.toString(on),transition:sn},Ze),onClick:function(nn){Ee(nn,Te)}},Ke),{},{children:[(0,f.jsxs)("div",{className:"".concat(ue,"-body"),ref:en,style:Pe,children:[xe?null:(0,f.jsx)(R.Ag,n()(n()(n()({},qe),Je),{},{className:me("".concat(ue,"-handle"),pe?void 0:ee.handle),style:{width:12}})),be&&(0,f.jsx)(R.lb,{onClick:function(nn){nn.stopPropagation(),be()},className:ee.collapseAction}),(0,f.jsx)("span",{className:"".concat(ue,"-content"),children:oe?(0,f.jsx)(oe,n()({},He)):Te}),!We&&!pe&&Se&&(0,f.jsx)(R.sL,{onClick:Se,title:"\u5220\u9664\u6B64\u9879",className:ee.deleteAction}),pe&&he&&he>1?(0,f.jsx)("span",{className:"".concat(ue,"-count"),children:he}):null]}),ke?(0,f.jsx)("div",{className:ee.extra,children:se&&(0,f.jsx)(se,n()({},He))}):null]}))})}),Y=J,G={keyframes:function(he){var pe=he.transform;return[{opacity:1,transform:I.ux.Transform.toString(pe.initial)},{opacity:0,transform:I.ux.Transform.toString(n()(n()({},pe.final),{},{x:pe.final.x+5,y:pe.final.y+5}))}]},easing:"ease-out",sideEffects:function(he){var pe=he.active;pe.node.animate([{opacity:0},{opacity:1}],{duration:p.RJ.duration,easing:p.RJ.easing})}},de=function(he){var pe=he.transform;return n()(n()({},pe),{},{x:pe.x+20,y:pe.y-10})},w=function(){var he=(0,t.oR)(function(be){return[be.activeId,be.treeData,be.indentationWidth,be.getActiveNode]},v.shallow),pe=C()(he,4),Le=pe[0],Ae=pe[1],Ne=pe[2],Q=pe[3],ne=Q();return(0,f.jsx)(p.y9,{dropAnimation:G,modifiers:[de],children:Le&&ne?(0,f.jsx)(Y,{id:Le,depth:ne.depth,clone:!0,childCount:(0,c.gT)(Ae,Le)+1,node:ne,indentationWidth:Ne}):null})},V=(0,y.memo)(w),ie=e(23711),b=e(14909),i=e(86475),h=e(5899),F=e.n(h),k=e(73128),q=e(89022),N=e(81347),H=e(57820),X,ae=(0,y.memo)(function(ge){var he=ge.node,pe=ge.virtualStyle,Le=(0,t.oR)(function(Ze){return[Ze.activeId,Ze.indentationWidth,Ze.dispatchTreeData,Ze.hideRemove]},v.shallow),Ae=C()(Le,4),Ne=Ae[0],Q=Ae[1],ne=Ae[2],be=Ae[3],Se=(0,t.oR)(l.Xd,v.shallow),Pe=he.id,Te=he.children,we=he.collapsed,We=he.depth,He=(0,i.Z)(function(){return ne({type:"removeNode",id:Pe})});return(0,f.jsx)(Y,{id:Pe,collapsed:!!(we&&Te.length),indentationWidth:Q,depth:Pe===Ne&&Se?Se.depth:We,hideRemove:be,showExtra:he.showExtra,onCollapse:Te.length?function(){return ne({type:"toggleCollapse",id:Pe})}:void 0,node:he,virtualStyle:pe,onRemove:He})},F()),te=(0,U.kc)(function(ge){var he=ge.token,pe=ge.css,Le=ge.prefixCls,Ae=(0,ie.X)(ge),Ne=Le;return{btnAdd:(0,b.cx)("".concat(Ne,"-btn-add"),pe(X||(X=$()([`
        height: 24px;
        padding-block: 2px;
        margin-top: `,`px;
      `])),he.marginXXS),Ae.defaultButton)}}),fe=(0,y.memo)(function(){var ge=(0,t.oR)(function(Ze){return[Ze.dispatchTreeData,Ze.hideAdd,Ze.virtual]},v.shallow),he=C()(ge,3),pe=he[0],Le=he[1],Ae=he[2],Ne=(0,t.oR)(l.QU,F()),Q=te(),ne=Q.styles,be=Ae||{},Se=be.height,Pe=Se===void 0?800:Se,Te=be.itemHeight,we=Te===void 0?function(){return 36}:Te,We=be.width,He=We===void 0?"100%":We;return(0,f.jsxs)(f.Fragment,{children:[Ae?(0,f.jsx)(k.S_,{itemCount:Ne.length,height:Pe,itemSize:we,itemData:Ne,width:He,children:function(Ke){var De=Ke.index,ee=Ke.data,me=Ke.style,ue=ee[De];return(0,f.jsx)(ae,{node:ue,virtualStyle:me},ue.id)}}):(0,f.jsx)(f.Fragment,{children:Ne.map(function(Ze){return(0,f.jsx)(ae,{node:Ze},Ze.id)})}),Le?null:(0,f.jsx)(H.ZP,{block:!0,size:"small",className:ne.btnAdd,onClick:function(){var Ke=Ne.length+1;pe({type:"addNode",node:{id:(0,q.i)(Ke.toString())}})},icon:(0,f.jsx)(N.Z,{}),children:"\u6DFB\u52A0\u4E00\u9879"})]})}),Ce=fe,Be,Ue=(0,U.kc)(function(ge){var he=ge.css,pe=ge.token,Le=ge.prefixCls,Ae="".concat(Le,"-").concat(pe.editorPrefix,"-sortable-tree");return he(Be||(Be=$()([`
    & .`,`-node {
      box-sizing: border-box;
      padding-left: var(--spacing);
      list-style: none;
    }

    .`,`-node {
      &-clone {
        display: inline-block;
        padding: 0;
        padding-top: 5px;
        padding-left: 10px;
        pointer-events: none;

        .`,`-node-body {
          padding-right: 24px;
          background-color: `,`;
          border: 1px solid #dedede;
          border-radius: 4px;
          box-shadow: 0 15px 15px 0 rgba(34, 33, 81, 0.1);
        }
      }

      &:hover {
        .`,`-node-handle {
          opacity: 1;
        }
      }

      &-ghost {
        &.`,`-node-indicator {
          position: relative;
          z-index: 1;
          margin-bottom: -1px;
          opacity: 1;

          .`,`-node-body {
            position: relative;
            height: 4px;
            padding: 0;
            background-color: #56a1f8;
            border-color: #1677ff;

            &::before {
              position: absolute;
              top: -4px;
              left: -8px;
              display: block;
              width: 12px;
              height: 12px;
              background-color: #fff;
              border: 1px solid #1677ff;
              border-radius: 50%;
              content: '';
            }

            > * {
              height: 0;

              /* Items are hidden using height and opacity to retain focus */
              opacity: 0;
            }
          }
        }

        &:not(.`,`-node-indicator) {
          opacity: 0.5;
        }

        .`,`-node-body > * {
          background-color: transparent;
          box-shadow: none;
        }
      }

      &-selected {
        .`,`-node-body {
          // \u6682\u65F6\u5148\u4E0D\u5B9E\u73B0\u9009\u4E2D\u6548\u679C
          // background-color: `,`;
          // outline: 1px solid `,`;
        }
      }

      &-body {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 2px;
        background-color: `,`;
        border-radius: 4px;
      }

      &-content {
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &-count {
        position: absolute;
        top: -10px;
        right: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        background-color: #1677ff;
        border-radius: 50%;
      }
    }

    .disableSelection,
    .clone {
      .`,"-node-content, .",`-node-count {
        user-select: none;
      }
    }
  `])),Ae,Ae,Ae,pe.colorBgContainer,Ae,Ae,Ae,Ae,Ae,Ae,pe.colorPrimaryBg,pe.colorPrimary,pe.colorFillQuaternary,Ae,Ae)}),je={droppable:{strategy:p.uN.Always}},Oe=(0,y.memo)(function(ge){var he=ge.className,pe=ge.rootClassName,Le=ge.style,Ae=(0,t.oR)(function(Z){return[Z.offsetLeft,Z.handleDragStart,Z.handleDragCancel,Z.handleDragEnd,Z.handleDragMove,Z.indentationWidth,Z.handleDragOver]},v.shallow),Ne=C()(Ae,7),Q=Ne[0],ne=Ne[1],be=Ne[2],Se=Ne[3],Pe=Ne[4],Te=Ne[5],we=Ne[6],We=Ue(),He=We.styles,Ze=We.cx,Ke=(0,t.oR)(l.QU,K()),De=(0,y.useRef)({items:Ke,offset:Q});(0,y.useEffect)(function(){De.current={items:Ke,offset:Q}},[Ke,Q]);var ee=(0,y.useState)(function(){return o(De,!0,Te)}),me=C()(ee,1),ue=me[0],re=(0,p.Dy)((0,p.VT)(p.we),(0,p.VT)(p.Lg,{coordinateGetter:ue})),le=(0,t.oR)(l.No,K()),Fe=(0,y.useMemo)(function(){return(0,L.createPortal)((0,f.jsx)(B.D,{className:Ze(pe,He),children:(0,f.jsx)(V,{})}),document.body)},[]);return(0,f.jsx)(B.D,{className:Ze(he,pe,He),style:Le,children:(0,f.jsx)(p.LB,{sensors:re,collisionDetection:p.pE,measuring:je,onDragStart:ne,onDragMove:Pe,onDragOver:we,onDragEnd:Se,onDragCancel:be,children:(0,f.jsx)(O.Fo,{items:le,strategy:O.qw,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ce,{}),Fe]})})})})}),Qe=Oe,ve=function(he){var pe=he.children,Le=he.showDevtools,Ae=!0,Ne=(0,f.jsx)(f.Fragment,{children:pe});try{(0,t.AC)()}catch(Q){Ae=!1}return Ae?Ne:(0,f.jsx)(t.zt,{createStore:function(){return(0,t.MT)(Le)},children:Ne})},_e=e(99166),Re=e(29843),ce=function(he){var pe=he.defaultTreeData,Le=he.treeData,Ae=he.onTreeDataChange,Ne=he.onSelectedIdsChange,Q=he.renderContent,ne=he.renderExtra,be=he.ref,Se=he.hideRemove,Pe=he.hideAdd,Te=he.indentationWidth,we=he.disableDrag,We=he.sortableRule,He=he.virtual,Ze=(0,t.AC)(),Ke=(0,_e.N)(Ze);Ke("treeData",pe,[]),Ke("treeData",Le),Ke("renderContent",Q),Ke("renderExtra",ne),Ke("onTreeDataChange",Ae),Ke("indentationWidth",Te),Ke("hideAdd",Pe),Ke("hideRemove",Se),Ke("virtual",He),Ke("disableDrag",we),Ke("sortableRule",We),Ke("onSelectedIdsChange",Ne);var De=(0,Re.g)();return(0,y.useImperativeHandle)(be,function(){return De}),null},Xe=ce,Ve=["SHOW_STORE_IN_DEVTOOLS","className","style"],Ye=(0,y.memo)(function(ge){var he=ge.SHOW_STORE_IN_DEVTOOLS,pe=ge.className,Le=ge.style,Ae=j()(ge,Ve);return(0,f.jsx)(S.iV,{children:(0,f.jsxs)(ve,{showDevtools:he,children:[(0,f.jsx)(Qe,{style:Le,className:pe}),(0,f.jsx)(Xe,n()({},Ae))]})})})},29843:function(ye,D,e){"use strict";e.d(D,{g:function(){return y}});var s=e(86475),n=e(75271),m=e(38883),j=e(75743),y=function(){var r=(0,m.AC)(),C=r.getState(),p=C.dispatchTreeData,O=C.removeNode,A=C.addNode,K=C.toggleNode,L=C.updateNodeContent,B=C.toggleExtraVisible,v=C.deselectedAll,c=C.selectedNode,P=(0,s.Z)(function(){return r.getState().activeId}),x=(0,s.Z)(function(){return r.getState().treeData}),o=(0,s.Z)(function(){return(0,j.QU)(r.getState())}),t=(0,s.Z)(function(){return r.getState().selectedIds});return(0,n.useMemo)(function(){return{dispatchTreeData:p,toggleExtraVisible:B,removeNode:O,deselectedAll:v,addNode:A,selectedNode:c,toggleNode:K,updateNodeContent:L,getActiveId:P,getTreeData:x,getFlattenData:o,getSelectedIds:t}},[])}},59278:function(ye,D,e){"use strict";e.d(D,{$t:function(){return s.$},g2:function(){return n.g},xN:function(){return s.x}});var s=e(5418),n=e(29843)},38883:function(ye,D,e){"use strict";e.d(D,{zt:function(){return g},MT:function(){return _},oR:function(){return R},AC:function(){return f}});var s=e(3341),n=e.n(s),m=e(24140),j=e(97412),y=e(79258),S=e(26068),r=e.n(S),C={offsetLeft:0,overId:null,activeId:null,currentPosition:null},p=r()({indentationWidth:24,treeData:[],selectedIds:[],renderContent:void 0,renderExtra:void 0,hideAdd:!1,virtual:!1,disableDrag:!1,hideRemove:!1},C),O=e(77848),A=e(18846),K=e(72266),L=e.n(K),B=e(63402),v=function(W,d){switch(d.type){case"toggleCollapse":return(0,B.Hn)(W,d.id,"collapsed",function(M){return!M});case"toggleExtraVisible":return(0,B.Hn)(W,d.id,"showExtra",function(M){return!M});case"moveNode":return(0,A.Uy)(W,function(M){var E=d.activeId,T=d.projected,z=d.targetId,J=(0,B.fK)(M),Y=J.findIndex(function(V){var ie=V.id;return ie===z}),G=J.findIndex(function(V){var ie=V.id;return ie===E}),de=J[G];J[G]=r()(r()({},de),{},{depth:T.depth,parentId:T.parentId});var w=(0,O.Rp)(J,G,Y);return(0,B.fX)(w)});case"removeNode":return(0,B.ZF)(W,d.id);case"addNode":return(0,A.Uy)(W,function(M){d.index||M.push(r()({id:d.node.id,children:[]},d.node))});case"updateNodeContent":return(0,B.Hn)(W,d.id,"content",function(M){return L()(M,d.content)})}},c=function(W,d){return{internalUpdateTreeData:function(E,T){var z=d(),J=z.onTreeDataChange,Y=z.treeData;n()(E,Y)||(W({treeData:E}),J==null||J(E,T))},dispatchTreeData:function(E){var T=d(),z=T.internalUpdateTreeData,J=T.treeData,Y=v(J,E);z(Y,E)},addNode:function(E,T){d().dispatchTreeData({type:"addNode",node:E,index:T})},removeNode:function(E){d().dispatchTreeData({type:"removeNode",id:E})},updateNodeContent:function(E,T){d().dispatchTreeData({type:"updateNodeContent",content:T,id:E})},toggleExtraVisible:function(E){d().dispatchTreeData({type:"toggleExtraVisible",id:E})}}},P=e(68951),x=e(75743),o=function(W,d){return{getActiveNode:function(){var E=d(),T=E.activeId,z=E.treeData;return T?(0,P.j5)(z,T).find(function(J){var Y=J.id;return Y===T}):null},resetState:function(){W(r()({},C)),document.body.style.setProperty("cursor","")},handleDragStart:function(E){var T=E.active.id;W({activeId:T,overId:T});var z=d().getActiveNode();z&&W({currentPosition:{parentId:z.parentId,overId:T}}),document.body.style.setProperty("cursor","move")},handleDragMove:function(E){var T=E.delta;W({offsetLeft:T.x})},handleDragOver:function(E){var T,z=E.over;W({overId:(T=z==null?void 0:z.id)!==null&&T!==void 0?T:null})},handleDragEnd:function(E){var T=E.active,z=E.over,J=d(),Y=J.resetState,G=J.dispatchTreeData,de=J.sortableRule,w=(0,x.QU)(d()),V=w.find(function(h){return h.id===T.id}),ie=w.find(function(h){return h.id===z.id}),b=(0,x.Xd)(d()),i=!de||(de==null?void 0:de({activeNode:V,targetNode:ie,projected:b}));b&&z&&i&&G({type:"moveNode",projected:b,activeId:T.id,targetId:z.id}),Y()},handleDragCancel:function(){d().resetState()}}},t=e(15558),l=e.n(t),I=function(W,d){return{updateSelectedIds:function(E){var T,z;W({selectedIds:E}),(T=(z=d()).onSelectedIdsChange)===null||T===void 0||T.call(z,E)},toggleNode:function(E){var T=d(),z=T.selectedIds;W((0,A.ZP)(function(J){z.includes(E)?J.selectedIds=z.filter(function(Y){return Y!==E}):J.selectedIds.push(E)}))},withKeyboardSelectNode:function(E,T){var z=d(),J=z.multiSelectNode,Y=z.rowSelectNode,G=z.selectedNode;if(E.metaKey){J(T);return}if(E.shiftKey){Y(T);return}G(T)},rowSelectNode:function(E){var T=d(),z=T.selectedIds,J=T.updateSelectedIds;if(z.length===0){J([E]);return}var Y=(0,x.QU)(d()),G=Y.findIndex(function(V){return V.id===E}),de=Y.findIndex(function(V){return V.id===z[0]});if(z.length===1){var w=z;de===G?w=[]:de>G?w=Y.slice(G,de+1).map(function(V){return V.id}):w=Y.slice(de,G+1).map(function(V){return V.id}),J(w)}},selectedNode:function(E){var T=d(),z=T.selectedIds,J=T.updateSelectedIds;z!=null&&z.includes(E)?J([]):J([E])},deselectedAll:function(){var E=d(),T=E.updateSelectedIds;T([])},multiSelectNode:function(E){var T=d(),z=T.selectedIds,J=T.updateSelectedIds;z!=null&&z.includes(E)?J((0,A.ZP)(z,function(Y){Y.splice(Y.indexOf(E),1)})):J([].concat(l()(z),[E]))}}},u=function(){return r()(r()(r()(r()({},p),o.apply(void 0,arguments)),I.apply(void 0,arguments)),c.apply(void 0,arguments))},$=u,_=function(W){return(0,y.createWithEqualityFn)((0,m.v)(W)($,{name:"SortableTree"}),n())},U=(0,j.k)(),R=U.useStore,f=U.useStoreApi,g=U.Provider},75743:function(ye,D,e){"use strict";e.d(D,{No:function(){return m},QU:function(){return n},Xd:function(){return j}});var s=e(68951),n=function(S){return(0,s.j5)(S.treeData,S.activeId)},m=function(S){return n(S).map(function(r){var C=r.id;return C})},j=function(S){var r=S.activeId,C=S.overId,p=S.offsetLeft,O=S.indentationWidth;return r&&C?(0,s.Vh)(n(S),r,C,p,O):null}},63402:function(ye,D,e){"use strict";e.d(D,{Hn:function(){return o},ZF:function(){return x},fK:function(){return v},fX:function(){return c}});var s=e(335),n=e.n(s),m=e(67825),j=e.n(m),y=e(82092),S=e.n(y),r=e(26068),C=e.n(r),p=e(15558),O=e.n(p),A=e(18846),K=["depth","index"],L=["parentId"],B=function t(l){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return l.reduce(function($,_,U){return[].concat(O()($),[C()(C()({},_),{},{parentId:I,depth:u,index:U})],O()(t(_.children,_.id,u+1)))},[])},v=function(l){return B(l)};function c(t){var l={id:"root",children:[]},I=S()({},l.id,l),u=t.map(function(T){var z,J=T.depth,Y=T.index,G=j()(T,K);return C()(C()({},G),{},{parentId:(z=G.parentId)!==null&&z!==void 0?z:void 0,children:[]})}),$=n()(u),_;try{for($.s();!(_=$.n()).done;){var U,R,f=_.value,g=f.id,a=f.children,W=(U=f.parentId)!==null&&U!==void 0?U:l.id,d=(R=I[W])!==null&&R!==void 0?R:P(u,W);I[g]={id:g,children:a};var M=f.parentId,E=j()(f,L);d.children.push(E)}}catch(T){$.e(T)}finally{$.f()}return l.children}function P(t,l){return t.find(function(I){var u=I.id;return u===l})}function x(t,l){var I=[],u=n()(t),$;try{for(u.s();!($=u.n()).done;){var _=$.value;_=Object.assign({},_),_.id!==l&&(_.children.length&&(_.children=x(_.children,l)),I.push(_))}}catch(U){u.e(U)}finally{u.f()}return I}var o=function t(l,I,u,$){return(0,A.Uy)(l,function(_){var U=n()(_),R;try{for(U.s();!(R=U.n()).done;){var f=R.value;if(f.id===I){f[u]=$(f[u]);continue}f.children.length&&(f.children=t(f.children,I,u,$))}}catch(g){U.e(g)}finally{U.f()}})}},68951:function(ye,D,e){"use strict";e.d(D,{Vh:function(){return O},gO:function(){return C},gT:function(){return v},j5:function(){return P}});var s=e(15558),n=e.n(s),m=e(335),j=e.n(m),y=e(77848),S=e(63402),r,C=typeof navigator=="undefined"?!1:/iPad|iPhone|iPod/.test((r=navigator)===null||r===void 0?void 0:r.platform);function p(x,o){return Math.round(x/o)}function O(x,o,t,l,I){var u=x.findIndex(function(T){var z=T.id;return z===t}),$=x.findIndex(function(T){var z=T.id;return z===o}),_=x[$],U=(0,y.Rp)(x,$,u),R=U[u-1],f=U[u+1],g=p(l,I),a=_.depth+g,W=A({previousItem:R}),d=K({nextItem:f}),M=a;return a>=W?M=W:a<d&&(M=d),{depth:M,maxDepth:W,minDepth:d,parentId:E()};function E(){var T;if(M===0||!R)return null;if(M===R.depth)return R.parentId;if(M>R.depth)return R.id;var z=(T=U.slice(0,u).reverse().find(function(J){return J.depth===M}))===null||T===void 0?void 0:T.parentId;return z!=null?z:null}}function A(x){var o=x.previousItem;return o?o.depth+1:0}function K(x){var o=x.nextItem;return o?o.depth:0}function L(x,o){var t=j()(x),l;try{for(t.s();!(l=t.n()).done;){var I=l.value,u=I.id,$=I.children;if(u===o)return I;if($.length){var _=L($,o);if(_)return _}}}catch(U){t.e(U)}finally{t.f()}}function B(x){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return x.reduce(function(t,l){var I=l.children;return I.length?B(I,t+1):t+1},o)}function v(x,o){var t=L(x,o);return t?B(t.children):0}function c(x,o){var t=n()(o);return x.filter(function(l){return l.parentId&&t.includes(l.parentId)?(l.children.length&&t.push(l.id),!1):!0})}var P=function(o,t){var l=(0,S.fK)(o),I=l.reduce(function(u,$){var _=$.children,U=$.collapsed,R=$.id;return U&&_.length?[].concat(n()(u),[R]):u},[]);return c(l,t?[t].concat(n()(I)):I)}},66434:function(ye,D,e){"use strict";e.d(D,{I:function(){return P}});var s=e(26068),n=e.n(s),m=e(48305),j=e.n(m),y=e(67825),S=e.n(y),r=e(53649),C=e.n(r),p=e(67685),O=e(75271),A=e(96206),K=e(69866),L=e(52676),B=["className","defaultValue","onChange","value","onCompositionStart","onCompositionEnd","onBlur","onFocus","onValueChanging"],v,c=(0,K.kc)(function(x){var o=x.stylish,t=x.css;return t(v||(v=C()([`
    `,`
  `])),o.controlContainer)}),P=(0,O.forwardRef)(function(x,o){var t=x.className,l=x.defaultValue,I=x.onChange,u=x.value,$=x.onCompositionStart,_=x.onCompositionEnd,U=x.onBlur,R=x.onFocus,f=x.onValueChanging,g=S()(x,B),a=c(),W=a.styles,d=a.cx,M=(0,O.useRef)(!1),E=(0,O.useState)(u!=null?u:l),T=j()(E,2),z=T[0],J=T[1],Y=(0,O.useRef)(l||u);(0,O.useEffect)(function(){typeof u!="undefined"&&J(u)},[u]);var G=function(){z!==Y.current&&(I==null||I(z),Y.current=z)};return(0,L.jsx)(A.iV,{children:(0,L.jsx)(p.Z,n()(n()({},g),{},{ref:o,className:d(W,t),value:z,onChange:function(w){J(w.target.value),f==null||f(w.target.value)},onFocus:function(w){R==null||R(w)},onBlur:function(w){G(),U==null||U(w)},onPressEnter:function(w){var V;M.current||(G(),(V=g.onPressEnter)===null||V===void 0||V.call(g,w))},onCompositionStart:function(w){M.current=!0,$==null||$(w)},onCompositionEnd:function(w){M.current=!1,_==null||_(w)}}))})})},74105:function(ye,D,e){"use strict";e.d(D,{R:function(){return P}});var s=e(26068),n=e.n(s),m=e(48305),j=e.n(m),y=e(67825),S=e.n(y),r=e(53649),C=e.n(r),p=e(32526),O=e(75271),A=e(96206),K=e(69866),L=e(52676),B=["className","value","onValueChanging","onChange","defaultValue","onFocus","onBlur","onPressEnter"],v,c=(0,K.kc)(function(x){var o=x.stylish,t=x.css,l=x.token,I=x.prefixCls;return t(v||(v=C()([`
      `,`

      .`,`-input-number-group-addon {
        padding: 0 4px;
        color: `,`;
        background: `,`;
        border-color: transparent;
      }
    `])),o.controlContainer,I,l.colorTextTertiary,l.colorFillQuaternary)}),P=function(o){var t=o.className,l=o.value,I=o.onValueChanging,u=o.onChange,$=o.defaultValue,_=o.onFocus,U=o.onBlur,R=o.onPressEnter,f=S()(o,B),g=c(),a=g.styles,W=g.cx,d=(0,O.useState)($||l),M=j()(d,2),E=M[0],T=M[1],z=(0,O.useRef)($);(0,O.useEffect)(function(){typeof l!="undefined"&&T(l)},[l]);var J=function(){E!==z.current&&(u==null||u(E),z.current=E)};return(0,L.jsx)(A.iV,{children:(0,L.jsx)(p.Z,n()(n()({size:"middle"},f),{},{value:E,onFocus:function(G){_==null||_(G)},onBlur:function(G){J(),U==null||U(G)},onChange:function(G){T(G),I==null||I(G)},onPressEnter:function(G){J(),R==null||R(G)},className:W(a,t)}))})}},62428:function(ye,D,e){"use strict";e.d(D,{r:function(){return A}});var s=e(26068),n=e.n(s),m=e(53649),j=e.n(m),y=e(1415),S=e(96206),r=e(69866),C=e(52676),p,O=(0,r.kc)(function(K){var L=K.token,B=K.css,v=K.prefixCls;return B(p||(p=j()([`
    padding: 4px;

    .`,`-segmented-item {
      margin-right: 4px;
      color: `,`;
      border-radius: 2px;

      &:hover {
        color: `,`;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .`,`-segmented-item-selected {
      color: `,`;

      &:hover {
        color: `,`;
      }
    }

    .`,`-segmented-item-label {
      min-height: auto;
      padding: 2px 7px;
      line-height: unset;
    }
  `])),v,L.colorTextTertiary,L.colorTextSecondary,v,L.colorText,L.colorText,v)}),A=function(L){var B=O(),v=B.styles,c=B.cx;return(0,C.jsx)(S.iV,{children:(0,C.jsx)(y.Z,n()(n()({},L),{},{className:c(L.className,v)}))})}},67073:function(ye,D,e){"use strict";e.d(D,{P:function(){return A}});var s=e(26068),n=e.n(s),m=e(53649),j=e.n(m),y=e(71843),S=e(14909),r=e(96206),C=e(52676),p,O=(0,S.kc)(function(K){var L=K.css,B=K.stylish,v=K.prefixCls,c="".concat(v,"-select"),P=":not(.".concat(c,"-disabled):not(.").concat(c,"-customize-input)");return L(p||(p=j()([`
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
  `])),c,c,B.controlContainer,P,c,B.controlContainer,P,c,B.controlContainerFocused,c,B.controlContainerFocused,c)}),A=function(L){var B=O(),v=B.styles,c=B.cx;return(0,C.jsx)(r.iV,{children:(0,C.jsx)(y.default,n()(n()({},L),{},{className:c(v,L.className)}))})}},53716:function(ye,D,e){"use strict";e.d(D,{m:function(){return A}});var s=e(26068),n=e.n(s),m=e(53649),j=e.n(m),y=e(3630),S=e(96206),r=e(69866),C=e(52676),p,O=(0,r.kc)(function(K){var L=K.token,B=K.prefixCls,v=K.css,c=K.stylish,P=".".concat(B,"-tabs");return{cls:v(p||(p=j()([`
      `,"-tab + ",`-tab {
        margin: 8px 4px !important;
        padding: 0 12px !important;
      }

      `,`-tab {
        color: `,`;
        transition: background-color 150ms ease-out;

        &:first-child {
          margin: 8px 4px 8px 0;
          padding: 4px 12px !important;
        }

        &:hover {
          color: `,` !important;
          background: `,`;
          border-radius: 4px;
        }
      }

      `,`-nav {
        height: 46px;
        padding: 0 12px;
        padding-right: 8px !important;
      }

      // blur \u6548\u679C
      position: relative;
      height: 100%;

      `,`-nav {
        position: absolute !important;
        z-index: 10;
        width: 100%;

        `,`
      }

      `,`-content-holder {
        // 46px \u662F tab \u7684\u9AD8\u5EA6 12px \u662F\u5408\u7406\u5185\u90E8\u95F4\u8DDD
        padding-top: `,`px;
        overflow-y: auto;
      }
    `])),P,P,P,L.colorTextSecondary,L.colorText,L.colorFillTertiary,P,P,c.backgroundBlur,P,54)}}),A=function(L){var B=O(),v=B.styles,c=B.cx;return(0,C.jsx)(S.iV,{children:(0,C.jsx)(y.Z,n()(n()({},L),{},{className:c(L.className,v.cls)}))})}},11190:function(ye,D,e){"use strict";e.d(D,{m:function(){return S}});var s=e(26068),n=e.n(s),m=e(17539),j=e(96206),y=e(52676),S=function(C){return(0,y.jsx)(j.iV,{children:(0,y.jsx)(m.Z,n()({},C))})};S.TreeNode=m.Z.TreeNode},20252:function(ye,D,e){"use strict";e.d(D,{m:function(){return S}});var s=e(26068),n=e.n(s),m=e(28331),j=e(96206),y=e(52676),S=function(C){return(0,y.jsx)(j.iV,{children:(0,y.jsx)(m.Z,n()({},C))})};S.TreeNode=m.Z.TreeNode},96051:function(ye,D,e){"use strict";e.d(D,{Ar:function(){return O.Z},II:function(){return K.I},Lt:function(){return C.Z},Mt:function(){return r.default},Ph:function(){return v.P},Rn:function(){return L.R},XZ:function(){return y.Z},Zb:function(){return m.Z},aG:function(){return s.Z},l0:function(){return p.Z},mP:function(){return x.m},mQ:function(){return c.m},mp:function(){return P.m},rg:function(){return B.r},v2:function(){return A.Z},vT:function(){return j.Z},zH:function(){return S.Z},zx:function(){return n.ZP}});var s=e(7181),n=e(57820),m=e(77475),j=e(26577),y=e(85102),S=e(91540),r=e(91804),C=e(54959),p=e(86323),O=e(84651),A=e(73467),K=e(66434),L=e(74105),B=e(62428),v=e(67073),c=e(53716),P=e(11190),x=e(20252)},79745:function(ye,D,e){"use strict";e.d(D,{Z:function(){return c}});var s=e(26068),n=e.n(s),m=e(67825),j=e.n(m),y=e(96860),S=e(874),r=e.n(S),C=e(75271),p=e(88167),O=e(48305),A=e.n(O),K=function(){var x=(0,C.useState)(!1),o=A()(x,2),t=o[0],l=o[1];(0,C.useEffect)(function(){if(t){var u=setTimeout(function(){l(!1)},2e3);return function(){clearTimeout(u)}}},[t]);var I=(0,C.useCallback)(function(){return l(!0)},[]);return(0,C.useMemo)(function(){return{copied:t,setCopied:I}},[t])},L=e(52676),B=["content","className","placement"],v=(0,C.memo)(function(P){var x=P.content,o=P.className,t=P.placement,l=t===void 0?"right":t,I=j()(P,B),u=K(),$=u.copied,_=u.setCopied;return(0,L.jsx)(p.ZP,n()(n()({},I),{},{className:o,icon:(0,L.jsx)(y.Z,{size:12}),onClick:function(){r()(x),_()},placement:l,title:$?"\u2705 Success":"Copy"}))}),c=v},10549:function(ye,D,e){"use strict";e.r(D),e.d(D,{ActionGroup:function(){return n.W},ActionIcon:function(){return m.A},Awareness:function(){return j.Z},Breadcrumb:function(){return u.aG},Button:function(){return u.zx},Card:function(){return u.Zb},Cascader:function(){return u.vT},Checkbox:function(){return u.XZ},CollapseAction:function(){return m.lb},ColorPicker:function(){return u.zH},ColumnList:function(){return y.T},ConfigProvider:function(){return C.iV},ContextMenu:function(){return p.Z},DatePicker:function(){return u.Mt},DeleteAction:function(){return m.sL},DraggablePanel:function(){return O.R},Dropdown:function(){return u.Lt},EditAction:function(){return m.i1},EditorLayout:function(){return c.A},EditorMode:function(){return x.je},ErrorBoundary:function(){return A.default},Form:function(){return u.l0},FreeCanvas:function(){return K.Z},HIGHLIGHT_LANGUAGES:function(){return L.W},HandleAction:function(){return m.Ag},Highlight:function(){return L.y},Input:function(){return u.II},InputNumber:function(){return u.Rn},Layout:function(){return u.Ar},Markdown:function(){return P.Z},Menu:function(){return u.v2},ProBuilder:function(){return x.Rp},ProBuilderProvider:function(){return x.yy},ProEditorProvider:function(){return o.w8},Segmented:function(){return u.rg},Select:function(){return u.Ph},Snippet:function(){return t.p},SortableList:function(){return l.cm},SortableListProvider:function(){return l.jW},SortableTree:function(){return I.$t},SortableTreeProvider:function(){return I.xN},Tabs:function(){return u.mQ},ThemeProvider:function(){return $.f6},Tree:function(){return u.mp},TreeSelect:function(){return u.mP},createGlobalStyle:function(){return $.vJ},createPropString:function(){return R.yn},createStudioAntdTheme:function(){return $.Hk},createStyles:function(){return $.kc},css:function(){return $.iv},cx:function(){return $.cx},genUniqueId:function(){return R.iu},generateImportCode:function(){return R.Yl},generateJSXCode:function(){return R.vq},getDefaultValueFromSchema:function(){return R.NM},getDiffPropsWithSchema:function(){return R.$1},getStudioStylish:function(){return $.Xz},getStudioToken:function(){return $.zK},getSymbolMasterNameFromProps:function(){return R.AG},injectGlobal:function(){return $.hi},keyframes:function(){return $.F4},proBuilderSelectors:function(){return x.BD},proEditorMiddleware:function(){return o.lm},studioDarkAlgorithm:function(){return $.qf},themeToken:function(){return $.Ug},useAssetAwareness:function(){return x.Vy},useCanvasInteraction:function(){return x.W5},useProBuilder:function(){return x.PO},useProBuilderStore:function(){return x.lB},useProEditor:function(){return o.E2},useSortableList:function(){return l.tL},useSortableTree:function(){return I.g2},useStudioAntdTheme:function(){return C.Yd},useToken:function(){return $.dQ},useUpdateEditorAwareness:function(){return x.xd},withProvider:function(){return C.nh},yjsMiddleware:function(){return s.Z}});var s=e(2195),n=e(69549),m=e(88167),j=e(23412),y=e(16432),S=e(83998),U={};for(var r in S)["default","yjsMiddleware","ActionGroup","Awareness","ContextMenu","ErrorBoundary","FreeCanvas","EditorLayout","Markdown","ActionIcon","CollapseAction","DeleteAction","EditAction","HandleAction","ColumnList"].indexOf(r)<0&&(U[r]=function(f){return S[f]}.bind(0,r));e.d(D,U);var C=e(96206),p=e(6137),O=e(1495),A=e(76004),K=e(87795),L=e(74914),B=e(25509),U={};for(var r in B)["default","yjsMiddleware","ActionGroup","Awareness","ContextMenu","ErrorBoundary","FreeCanvas","EditorLayout","Markdown","ActionIcon","CollapseAction","DeleteAction","EditAction","HandleAction","ColumnList","ComponentAsset","createTestAssetStore","createUseAssetStore","ConfigProvider","useStudioAntdTheme","withProvider","DraggablePanel","HIGHLIGHT_LANGUAGES","Highlight"].indexOf(r)<0&&(U[r]=function(g){return B[g]}.bind(0,r));e.d(D,U);var v=e(4686),U={};for(var r in v)["default","yjsMiddleware","ActionGroup","Awareness","ContextMenu","ErrorBoundary","FreeCanvas","EditorLayout","Markdown","ActionIcon","CollapseAction","DeleteAction","EditAction","HandleAction","ColumnList","ComponentAsset","createTestAssetStore","createUseAssetStore","ConfigProvider","useStudioAntdTheme","withProvider","DraggablePanel","HIGHLIGHT_LANGUAGES","Highlight","IconPicker","IconRender"].indexOf(r)<0&&(U[r]=function(g){return v[g]}.bind(0,r));e.d(D,U);var c=e(48145),P=e(78135),x=e(84246),o=e(5),t=e(36953),l=e(98547),I=e(59278),u=e(96051),$=e(69866),_=e(22080),U={};for(var r in _)["default","yjsMiddleware","ActionGroup","Awareness","ContextMenu","ErrorBoundary","FreeCanvas","EditorLayout","Markdown","ActionIcon","CollapseAction","DeleteAction","EditAction","HandleAction","ColumnList","ComponentAsset","createTestAssetStore","createUseAssetStore","ConfigProvider","useStudioAntdTheme","withProvider","DraggablePanel","HIGHLIGHT_LANGUAGES","Highlight","IconPicker","IconRender","EditorMode","ProBuilder","ProBuilderProvider","proBuilderSelectors","useAssetAwareness","useCanvasInteraction","useProBuilder","useProBuilderStore","useUpdateEditorAwareness","ProEditorProvider","proEditorMiddleware","useProEditor","Snippet","SortableList","SortableListProvider","useSortableList","SortableTree","SortableTreeProvider","useSortableTree","Breadcrumb","Button","Card","Cascader","Checkbox","ColorPicker","DatePicker","Dropdown","Form","Input","InputNumber","Layout","Menu","Segmented","Select","Tabs","Tree","TreeSelect","ThemeProvider","createGlobalStyle","createStudioAntdTheme","createStyles","css","cx","getStudioStylish","getStudioToken","injectGlobal","keyframes","studioDarkAlgorithm","themeToken","useToken"].indexOf(r)<0&&(U[r]=function(g){return _[g]}.bind(0,r));e.d(D,U);var R=e(50463)},69866:function(ye,D,e){"use strict";e.d(D,{f6:function(){return O},vJ:function(){return n.vJ},Hk:function(){return j.H},kc:function(){return p},iv:function(){return n.iv},cx:function(){return n.cx},Xz:function(){return S.X},zK:function(){return r.z},hi:function(){return n.hi},F4:function(){return n.F4},qf:function(){return y.q},Ug:function(){return r.U},dQ:function(){return m.S}});var s=e(51760),n=e(14909),m=e(24939),j=e(86861),y=e(44569),S=e(23711),r=e(18970),C=(0,s.F)({customToken:{editorPrefix:"editor"}}),p=C.createStyles,O=C.ThemeProvider},86861:function(ye,D,e){"use strict";e.d(D,{H:function(){return m}});var s=e(75246),n=e(44569),m=function(y){var S={algorithm:[s.Z.compactAlgorithm]};return y==="dark"&&S.algorithm.push(n.q),S}},44569:function(ye,D,e){"use strict";e.d(D,{q:function(){return j}});var s=e(26068),n=e.n(s),m=e(75246),j=function(S,r){var C=m.Z.darkAlgorithm(S,r);return n()(n()({},C),{},{colorBgLayout:"#20252b",colorBgContainer:"#282c34",colorBgElevated:"#32363e"})}},23711:function(ye,D,e){"use strict";e.d(D,{X:function(){return v}});var s=e(53649),n=e.n(s),m=e(36529),j,y,S,r,C,p,O,A,K,L,B,v=function(P){var x=P.token,o=P.css,t=o(j||(j=n()([`
    cursor: pointer;
    transition: 150ms background-color ease-in-out;
    &:hover {
      background: `,`;
    }
  `])),x.colorFillQuaternary),l=o(y||(y=n()([`
    color: `,`;
    background-color: `,`;
    border-color: transparent;
  `])),x.colorText,x.colorFillTertiary),I=o(S||(S=n()([`
    color: `,` !important;
    background-color: `,` !important;
    border-color: `,` !important;
    box-shadow: none;
  `])),x.colorText,x.colorFillQuaternary,x.colorPrimary),u=o(r||(r=n()([`
    color: `,`;
    background: `,`;
    border-color: transparent;
  `])),x.colorTextSecondary,x.colorFillQuaternary);return{defaultButton:o(C||(C=n()([`
      `,`;

      &:hover {
        color: `,` !important;
        background: `,` !important;
        border-color: transparent !important;
      }
      &:focus {
        `,`;
        border-color: `,` !important;
      }
    `])),u,x.colorText,x.colorFillSecondary,u,x.colorPrimary),textInfo:o(p||(p=n()([`
      color: `,`;
      &:hover {
        color: `,`;
      }
    `])),x.colorTextSecondary,x.colorText),textDefault:o(O||(O=n()([`
      color: `,`;
    `])),x.colorTextSecondary),containerBgHover:o(A||(A=n()([`
      cursor: pointer;
      transition: 150ms background-color ease-in-out;

      &:hover {
        background: `,`;
      }
    `])),x.colorFillQuaternary),containerBgL2:o(K||(K=n()([`
      `,`;
      border-radius: 4px;
      background: `,`;

      &:hover {
        background: `,`;
      }
    `])),t,x.colorFillQuaternary,x.colorFillTertiary),controlContainerFocused:I,controlContainer:o(L||(L=n()([`
      &:hover {
        `,`
      }
      &:focus {
        `,`
      }
    `])),l,I),backgroundBlur:o(B||(B=n()([`
      background: `,`;
      backdrop-filter: blur(10px);
    `])),(0,m.DZ)(.4)(x.colorBgElevated))}}},18970:function(ye,D,e){"use strict";e.d(D,{U:function(){return n},z:function(){return s}});var s=function(){return{focusedOutlineColor:"#4c9ffe",colorTypeBoolean:"#D8C152",colorTypeNumber:"#5295C4",colorTypeString:"#149E6D",colorTypeBoolArray:"#D8C152",colorTypeNumberArray:"#239BEF",colorTypeStringArray:"#62AE8D"}},n=s({})},88987:function(){},42678:function(ye,D,e){"use strict";e.d(D,{n:function(){return j},u:function(){return m}});var s=e(82092),n=e.n(s),m=function(y){return y.type="type",y.content="content",y.function="function",y.style="style",y.status="status",y.bind="bind",y.table="table",y.customStyle="customStyle",y}({}),j=n()(n()(n()(n()(n()(n()(n()({},m.type,{title:"\u7C7B\u578B",defaultActive:!0}),m.content,{title:"\u5185\u5BB9\u4E0E\u529F\u80FD",defaultActive:!0}),m.style,{title:"\u6837\u5F0F",defaultActive:!0}),m.status,{title:"\u72B6\u6001",defaultActive:!0}),m.bind,{title:"\u5206\u9875\u5B57\u6BB5\u7ED1\u5B9A",defaultActive:!0}),m.table,{title:"\u8868\u683C\u8981\u7D20",defaultActive:!0}),m.customStyle,{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F",defaultActive:!0})},22080:function(ye,D,e){"use strict";e.r(D),e.d(D,{CategoryMap:function(){return j.u},configCategoryMap:function(){return j.n}});var s=e(88987),n=e.n(s),r={};for(var m in s)m!=="default"&&(r[m]=function(C){return s[C]}.bind(0,m));e.d(D,r);var j=e(42678),y=e(67574),S=e.n(y),r={};for(var m in y)["default","CategoryMap","configCategoryMap"].indexOf(m)<0&&(r[m]=function(p){return y[p]}.bind(0,m));e.d(D,r)},67574:function(){},89022:function(ye,D,e){"use strict";e.d(D,{i:function(){return s}});var s=function(m){return"".concat(m).concat(Math.round(Math.random()*1e3).toString(16))}},7447:function(ye,D,e){"use strict";e.d(D,{$1:function(){return x},AG:function(){return o},NM:function(){return P},Yl:function(){return t},vq:function(){return I},yn:function(){return l}});var s=e(31759),n=e.n(s),m=e(48305),j=e.n(m),y=e(4293),S=e.n(y),r=e(5899),C=e.n(r),p=e(67032),O=e.n(p),A=e(52041),K=e.n(A),L=e(66157),B=e.n(L),v=e(98162),c=e.n(v),P=function(_){return _.type==="object"?_.properties?Object.fromEntries(Object.entries(_.properties).map(function(U){var R=j()(U,2),f=R[0],g=R[1];return[f,g.default]})):void 0:_.type==="null"?null:_.default},x=function(_,U){if(!U)return _;var R=P(U);if(!R)return _;var f=Object.entries(_).filter(function(g){var a=j()(g,2),W=a[0],d=a[1],M=R[W];return typeof R[W]=="undefined"?!0:!C()(M,d)});return Object.fromEntries(f)},o=function(_,U,R,f){var g=x(R,f),a=function d(M,E){return Object.entries(M).map(function(T){var z=j()(T,2),J=z[0],Y=z[1];return Y instanceof Array?"".concat(J,"=[").concat(Y.map(function(G){return"{".concat(d(G),"}")}).join(","),"]"):K()(Y)?d(Y,J):O()(Y)?"":"".concat(E?"".concat(E,"."):"").concat(J,"=").concat(Y)}).filter(function(T){return T}).join(",")},W=a(g);return"".concat(_.replace("/","-"),"/").concat(U,"/").concat(W)},t=function(_,U){return"import { ".concat(c()(U).join(", ")," } from '").concat(_,"';")},l=function(_,U){switch(n()(U)){case"undefined":return"";case"object":if(U instanceof Array)return"".concat(_,"={").concat(JSON.stringify(U),"}");var R=B()(U,O());if(Object.values(R).length===0)return"";var f=function(){return U.$$__type?u(U):JSON.stringify(R,null)};return"".concat(_,"={").concat(f(),"}");case"boolean":return U?"".concat(_):"".concat(_,"={").concat(U,"}");case"number":return"".concat(_,"={").concat(U,"}");case"string":return S()(U)?"":"".concat(_,'="').concat(U,'"');case"function":return"".concat(_,"={").concat(U.toString(),"}");case"symbol":return"".concat(_,"={Symbol.for('").concat(U.description,"')}")}},I=function(_,U){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:l;if(!U)return"<".concat(_," />");var f=!U.children,g=Object.entries(U).filter(function(a){return f?a:a[0]!=="children"}).map(function(a){return R(a[0],a[1])}).filter(function(a){return a}).join(" ");return f?"<".concat(_," ").concat(g,"/>"):"<".concat(_," ").concat(g,">").concat(u(U.children),"</").concat(_,">")},u=function(_){if(typeof _=="string")return _;var U=function(f){var g=f.$$__type,a=f.$$__body;switch(g){case"element":return I(a.componentName,a.props)}};return _ instanceof Array?_.map(U).join(`
`):U(_)}},50463:function(ye,D,e){"use strict";e.d(D,{$1:function(){return n.$1},AG:function(){return n.AG},NM:function(){return n.NM},Yl:function(){return n.Yl},iu:function(){return s.i},vq:function(){return n.vq},yn:function(){return n.yn}});var s=e(89022),n=e(7447)}}]);
