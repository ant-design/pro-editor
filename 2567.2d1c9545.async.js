"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[2567],{8882:function(st,D,t){t.d(D,{W:function(){return l}});var x=t(26068),a=t.n(x),A=t(21759),u=t(56487),I=t(38720),S=t(95095),R=t(62039),E=t(53649),b=t.n(E),M=t(53131),W,j,y,B=(0,M.kc)(function(o,e){var i=o.token,r=o.css,s=o.cx,h=o.prefixCls,v=e.type,z=e.direction,C=r(W||(W=b()([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),v==="block"?i.colorFillTertiary:i.colorFillQuaternary,v==="block"?"transparent":i.colorBorder),P="".concat(h,"-").concat(i.editorPrefix,"-action-group");return{content:s("".concat(P,"-content"),r(j||(j=b()([`
        `,`;
        width: fit-content;
        padding: `,"px ",`px;
        display: flex;
        flex-direction: `,`;
        border-radius: `,`px;
        align-items: center;
      `])),v!=="pure"&&C,i.padding/8,i.padding/8,z,i.borderRadius)),button:s("".concat(P,"-action-btn"),r(y||(y=b()([`
        box-shadow: none;
        border: none;
        background-color: transparent;
        &:hover {
          color: `,` !important;
        }
      `])),i.colorIconHover))}}),d=t(52676),X=function(e){var i=e.type,r=i===void 0?"block":i,s=e.direction,h=s===void 0?"row":s,v=e.size,z=e.className,C=e.style,P=e.render,N=e.dropdownMenu,Q=e.items,Z=Q===void 0?[]:Q,w=e.onClick,tt=w===void 0?function(){}:w,F=e.dropdownProps,ot=e.dropdownMenuTrigger,nt=B({direction:h,type:r}),J=nt.styles,ut=nt.cx,rt=function(){var vt=(0,d.jsx)(d.Fragment,{children:Z.map(function(f,ht){return(f==null?void 0:f.type)==="divider"?(0,d.jsx)(S.Z,{type:h==="row"?"vertical":"horizontal",style:{margin:"".concat(h==="row"?"0 4px":"4px 0")}},"action-divider-".concat(ht)):(0,d.jsx)(u.Z,a()(a()({title:f==null?void 0:f.label,size:v},f),{},{onClick:function(){f!=null&&f.onClick&&(f==null||f.onClick()),tt(f==null?void 0:f.key)}}),"action-btn-".concat(ht))})});return P?P(Z,N):vt};return(0,d.jsxs)("div",{className:ut(J.content,z),style:C,children:[(0,d.jsx)(rt,{}),N&&(0,d.jsx)(R.Z,a()(a()({trigger:["click"]},F),{},{menu:{items:N.map(function(G){return G!=null&&G.type?G:a()(a()({},G),{},{icon:G.icon})})},children:ot||(0,d.jsx)(u.Z,{icon:(0,d.jsx)(A.Z,{}),size:v},"more")}))]})},l=function(e){return(0,d.jsx)(I.iV,{children:(0,d.jsx)(X,a()({},e))})}},56487:function(st,D,t){t.d(D,{Z:function(){return e}});var x=t(26068),a=t.n(x),A=t(67825),u=t.n(A),I=t(57820),S=t(50518),R=t(38720),E=t(53649),b=t.n(E),M=t(53131),W,j,y,B=(0,M.kc)(function(i,r){var s=i.token,h=i.css,v=i.cx,z=i.prefixCls,C=r.size,P=r.className,N="".concat(z,"-").concat(s.editorPrefix,"-icon"),Q=typeof C=="number"?h(W||(W=b()([`
          width: `,`px !important;
          height: `,`px !important;
        `])),C,C):"",Z=h(j||(j=b()([`
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
  `])),s.colorText,s.colorText,s.motionEaseOut,s.motionEaseOut,s.motionEaseOut);return{container:v(N,Z,Q,P),tooltip:h(y||(y=b()([`
      pointer-events: none;
    `])))}}),d=t(52676),X=["placement","title","icon","cursor","onClick","className","arrow","size","tooltipDelay"],l=function(r){var s=r.placement,h=r.title,v=r.icon,z=r.cursor,C=r.onClick,P=r.className,N=r.arrow,Q=N===void 0?!1:N,Z=r.size,w=Z===void 0?"default":Z,tt=r.tooltipDelay,F=tt===void 0?.5:tt,ot=u()(r,X),nt=B({size:w}),J=nt.styles,ut=nt.cx,rt=(0,d.jsx)(I.ZP,a()(a()({icon:v,className:ut(J.container,P),type:"text",style:{cursor:z},size:typeof w=="number"||w==="default"?"middle":w},ot),{},{onClick:C}));return(0,d.jsx)(d.Fragment,{children:h?(0,d.jsx)(S.Z,{arrow:Q,overlayClassName:J.tooltip,title:h,mouseEnterDelay:F,placement:s,children:rt}):rt})},o=function(r){var s=r||{},h=s.size,v=B({size:h}),z=v.theme;return(0,d.jsx)(R.iV,{componentToken:{Button:{colorText:z.colorTextTertiary,colorBgTextHover:z.colorFillSecondary,colorBgTextActive:z.colorFill}},children:(0,d.jsx)(l,a()({},r))})},e=o},38720:function(st,D,t){t.d(D,{iV:function(){return d},nh:function(){return X}});var x=t(26068),a=t.n(x),A=t(94456),u=t(90167),I=t(42249),S=t(75246),R=function(o,e){var i=S.Z.darkAlgorithm(o,e);return a()(a()({},i),{},{colorBgLayout:"#20252b",colorBgContainer:"#282c34",colorBgElevated:"#32363e"})},E=function(o){var e={algorithm:[S.Z.compactAlgorithm]};return o==="dark"&&e.algorithm.push(R),e},b=t(53131),M=function(){return{focusedOutlineColor:"#4c9ffe",colorTypeBoolean:"#D8C152",colorTypeNumber:"#5295C4",colorTypeString:"#149E6D",colorTypeBoolArray:"#D8C152",colorTypeNumberArray:"#239BEF",colorTypeStringArray:"#62AE8D"}},W=M({}),j=t(89460),y=t(52676),B=function(o){var e=(0,u.S)(),i=E(o),r={colorBgContainer:e==null?void 0:e.colorFillQuaternary,colorBorder:"transparent",controlOutline:"transparent"};return i.components={Input:r,InputNumber:r,Select:r,Tree:{colorBgContainer:"transparent"},TreeSelect:r},i},d=function(o){var e=o.children,i=o.componentToken,r=(0,I.r)(),s=r.appearance,h=r.themeMode,v=B(s);return v.components=a()(a()({},v.components),i),(0,y.jsx)(A.ZP,{theme:v,children:(0,y.jsx)(b.f6,{appearance:s,themeMode:h,theme:E,customToken:M,customStylish:j.X,children:e})})},X=function(o){return function(e){return(0,y.jsx)(d,{children:(0,y.jsx)(o,a()({},e))})}}},1704:function(st,D,t){t.d(D,{_:function(){return zt}});var x=t(75271),a=t(38720),A=t(26068),u=t.n(A),I=t(82092),S=t.n(I),R=t(48305),E=t.n(R),b=t(36658),M=t(55471),W=t(65720),j=t(39187),y=t(32683),B=t(43648),d=t(61895),X=t(53649),l=t.n(X),o=t(53131),e,i,r,s,h,v,z,C,P,N,Q,Z,w,tt=(0,o.kc)(function(n){var g=n.token,p=n.css,c=n.cx,Y=n.prefixCls,m="".concat(Y,"-").concat(g==null?void 0:g.editorPrefix,"-draggable-panel"),T=p(e||(e=l()([`
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
  `])),g.colorPrimary),L=p(i||(i=l()([`
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
  `])),g.colorBgElevated,g.colorTextTertiary,g.colorBorder,g.colorTextSecondary,g.colorFillQuaternary),k=17,O=40,H=16;return{container:c(m,p(r||(r=l()([`
        flex-shrink: 0;
        position: relative;
        border: 0 solid `,`;

        &:hover {
          .`,`-toggle {
            opacity: 1;
          }
        }
      `])),g.colorSplit,m)),toggleLeft:c("".concat(m,"-toggle"),"".concat(m,"-toggle-left"),L,p(s||(s=l()([`
        width: `,`px;
        height: `,`px;
        left: -`,`px;
        top: 50%;
        margin-top: -20px;
        border-radius: 4px 0 0 4px;
        border-right-width: 0;
      `])),H,O,k)),toggleRight:c("".concat(m,"-toggle"),"".concat(m,"-toggle-right"),L,p(h||(h=l()([`
        width: `,`px;
        height: `,`px;
        right: -`,`px;
        top: 50%;
        margin-top: -20px;
        border-radius: 0 4px 4px 0;
        border-left-width: 0;
      `])),H,O,k)),toggleTop:c("".concat(m,"-toggle"),"".concat(m,"-toggle-top"),L,p(v||(v=l()([`
        height: `,`px;
        width: `,`px;
        top: -`,`px;
        left: 50%;
        margin-left: -20px;
        border-radius: 4px 4px 0 0;
        border-bottom-width: 0;
      `])),H,O,k)),toggleBottom:c("".concat(m,"-toggle"),"".concat(m,"-toggle-bottom"),L,p(z||(z=l()([`
        height: 16px;
        width: `,`px;
        bottom: -`,`px;
        left: 50%;
        margin-left: -20px;
        border-radius: 0 0 4px 4px;
        border-top-width: 0;
      `])),O,k)),fixed:c("".concat(m,"-fixed"),p(C||(C=l()([`
        background: `,`;
        overflow: hidden;
      `])),g.colorBgContainer)),float:c("".concat(m,"-float"),p(P||(P=l()([`
        overflow: hidden;
        border-radius: 8px;
        background: `,`;
        box-shadow: `,`;
        z-index: 2000;
      `])),g.colorBgElevated,g.boxShadowSecondary)),leftHandle:c(p(N||(N=l()([`
        `,`;

        &::before {
          left: 50%;
          width: 2px;
          height: 100%;
        }
      `])),T),"".concat(m,"-left-handle")),rightHandle:c(p(Q||(Q=l()([`
        `,`;
        &::before {
          right: 50%;
          width: 2px;
          height: 100%;
        }
      `])),T),"".concat(m,"-right-handle")),topHandle:c("".concat(m,"-top-handle"),p(Z||(Z=l()([`
        `,`;

        &::before {
          top: 50%;
          height: 2px;
          width: 100%;
        }
      `])),T)),bottomHandle:c("".concat(m,"-bottom-handle"),p(w||(w=l()([`
        `,`;

        &::before {
          bottom: 50%;
          height: 2px;
          width: 100%;
        }
      `])),T))}}),F=t(52676),ot=150,nt=400,J=function(g){switch(g){case"bottom":return"top";case"top":return"bottom";case"right":return"left";case"left":return"right"}},ut=(0,x.memo)(function(n){var g=n.children,p=n.placement,c=p===void 0?"right":p,Y=n.resize,m=n.style,T=n.size,L=n.defaultSize,k=n.minWidth,O=n.minHeight,H=n.maxHeight,at=n.maxWidth,K=n.onSizeChange,q=n.onSizeDragging,_=n.expandable,et=_===void 0?!0:_,V=n.isExpand,it=n.onExpandChange,$=n.className,lt=c==="top"||c==="bottom",ct=tt(),U=ct.styles,gt=ct.cx,xt=(0,W.Z)(!0,{value:V,onChange:it}),ft=E()(xt,2),dt=ft[0],pt=ft[1],yt=Y!==!1&&dt,Ct=(0,x.useMemo)(function(){return yt?S()({},J(c),U["".concat(J(c),"Handle")]):{}},[yt,c]),Pt=u()(S()({top:!1,bottom:!1,right:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},J(c),!0),Y),Ot=(0,x.useMemo)(function(){return lt?u()({width:"100%",height:ot},L):u()({width:nt,height:"100%"},L)},[lt]),Ht=dt?{minWidth:typeof k=="number"?Math.max(k,0):280,minHeight:typeof O=="number"?Math.max(O,0):void 0,maxHeight:typeof H=="number"?Math.max(H,0):void 0,maxWidth:typeof at=="number"?Math.max(at,0):void 0,defaultSize:Ot,size:T||{height:"auto"},style:m}:{minWidth:0,minHeight:0,size:{width:0,height:0}},St=(0,x.useMemo)(function(){switch(c){case"top":return{className:"Bottom",Arrow:j.Z};case"bottom":return{className:"Top",Arrow:y.Z};case"right":return{className:"Left",Arrow:B.Z};case"left":return{className:"Right",Arrow:d.Z}}},[U,c]),Dt=St.Arrow,Tt=St.className;return(0,F.jsxs)("div",{className:gt(U.container,$),style:S()({},"border".concat(Tt,"Width"),1),children:[et&&(0,F.jsx)(M.Z,{className:gt(U["toggle".concat(Tt)]),onClick:function(){pt(!dt)},style:{opacity:dt?void 0:1},children:(0,F.jsx)(Dt,{rotate:dt?180:0})}),(0,F.jsx)(b.e,u()(u()({},Ht),{},{className:U.fixed,enable:yt?Pt:void 0,handleClasses:Ct,onResizeStop:function(At,Et,mt,bt){K==null||K(bt,{width:mt.style.width,height:mt.style.height})},onResize:function(At,Et,mt,bt){q==null||q(bt,{width:mt.style.width,height:mt.style.height})},children:g}))]})}),rt=t(51244),G=300,vt=400,f=(0,x.memo)(function(n){var g=n.children,p=n.direction,c=n.resize,Y=n.style,m=n.position,T=n.onPositionChange,L=n.size,k=n.defaultSize,O=n.defaultPosition,H=n.minWidth,at=H===void 0?280:H,K=n.minHeight,q=K===void 0?200:K,_=n.maxHeight,et=n.maxWidth,V=n.canResizing,it=tt(),$=it.styles,lt=(0,x.useMemo)(function(){return V?{right:$.rightHandle,left:$.leftHandle,top:$.topHandle,bottom:$.bottomHandle}:{}},[V,p]),ct=(0,x.useMemo)(function(){return V?c:u()({top:!0,bottom:!0,right:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},c)},[V,c]),U=u()({width:vt,height:G},k),gt=u()({x:100,y:100},O),xt={minWidth:Math.max(at,0),minHeight:Math.max(q,0),maxHeight:_?Math.max(_,0):void 0,maxWidth:et?Math.max(et,0):void 0,defaultSize:U,size:L,style:Y};return(0,F.jsx)(rt.s,u()(u()({position:m,resizeHandleClasses:lt,default:u()(u()({},gt),U),onDragStop:function(dt,pt){T==null||T({x:pt.x,y:pt.y})},bound:"parent",enableResizing:ct},xt),{},{className:$.float,children:g}))}),ht=(0,x.memo)(function(n){var g=n.children,p=n.className,c=n.mode,Y=n.placement,m=n.resize,T=n.style,L=n.position,k=n.onPositionChange,O=n.size,H=n.defaultSize,at=n.defaultPosition,K=n.minWidth,q=n.minHeight,_=n.maxHeight,et=n.maxWidth,V=n.onSizeChange,it=n.onSizeDragging,$=n.expandable,lt=$===void 0?!0:$,ct=n.isExpand,U=n.onExpandChange;switch(c){case"fixed":default:return(0,F.jsx)(ut,{size:O,defaultSize:H,onSizeDragging:it,onSizeChange:V,minHeight:q,minWidth:K,maxHeight:_,maxWidth:et,resize:m,onExpandChange:U,expandable:lt,isExpand:ct,className:p,placement:Y,style:T,children:g});case"float":return(0,F.jsx)(f,{defaultPosition:at,position:L,onPositionChange:k,minHeight:q,minWidth:K,maxHeight:_,maxWidth:et,defaultSize:H,size:O,onSizeDragging:it,onSizeChange:V,resize:m,canResizing:m!==!1,className:p,style:T,children:g})}}),zt=(0,a.nh)(ht)},53131:function(st,D,t){t.d(D,{f6:function(){return u},kc:function(){return A}});var x=t(4690),a=(0,x.F)({customToken:{editorPrefix:"editor"}}),A=a.createStyles,u=a.ThemeProvider},89460:function(st,D,t){t.d(D,{X:function(){return d}});var x=t(53649),a=t.n(x),A=t(44006),u,I,S,R,E,b,M,W,j,y,B,d=function(l){var o=l.token,e=l.css,i=e(u||(u=a()([`
    cursor: pointer;
    transition: 150ms background-color ease-in-out;
    &:hover {
      background: `,`;
    }
  `])),o.colorFillQuaternary),r=e(I||(I=a()([`
    color: `,`;
    background-color: `,`;
    border-color: transparent;
  `])),o.colorText,o.colorFillTertiary),s=e(S||(S=a()([`
    color: `,` !important;
    background-color: `,` !important;
    border-color: `,` !important;
    box-shadow: none;
  `])),o.colorText,o.colorFillQuaternary,o.colorPrimary),h=e(R||(R=a()([`
    color: `,`;
    background: `,`;
    border-color: transparent;
  `])),o.colorTextSecondary,o.colorFillQuaternary);return{defaultButton:e(E||(E=a()([`
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
    `])),h,o.colorText,o.colorFillSecondary,h,o.colorPrimary),textInfo:e(b||(b=a()([`
      color: `,`;
      &:hover {
        color: `,`;
      }
    `])),o.colorTextSecondary,o.colorText),textDefault:e(M||(M=a()([`
      color: `,`;
    `])),o.colorTextSecondary),containerBgHover:e(W||(W=a()([`
      cursor: pointer;
      transition: 150ms background-color ease-in-out;

      &:hover {
        background: `,`;
      }
    `])),o.colorFillQuaternary),containerBgL2:e(j||(j=a()([`
      `,`;
      border-radius: 4px;
      background: `,`;

      &:hover {
        background: `,`;
      }
    `])),i,o.colorFillQuaternary,o.colorFillTertiary),controlContainerFocused:s,controlContainer:e(y||(y=a()([`
      &:hover {
        `,`
      }
      &:focus {
        `,`
      }
    `])),r,s),backgroundBlur:e(B||(B=a()([`
      background: `,`;
      backdrop-filter: blur(10px);
    `])),(0,A.DZ)(.4)(o.colorBgElevated))}}}}]);
