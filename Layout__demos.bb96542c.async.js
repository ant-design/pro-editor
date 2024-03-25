"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[52],{33815:function(w,_,e){e.r(_);var x=e(26068),t=e.n(x),R=e(54197),f=e(496),A=e(86865),b=e(41812),I=e(95986),g=e(11527);_.default=function(){return(0,g.jsx)(R.A,{style:{maxWidth:"100%",height:"600px"},header:t()(t()({},I.D.header),{},{children:(0,g.jsx)(f.I,{addonBefore:"Options",placeholder:"Search For Some Little Options",style:{width:250}}),extra:(0,g.jsxs)(b.Z,{children:[(0,g.jsx)(A.ZP,{type:"primary",children:"Save"}),(0,g.jsx)(A.ZP,{type:"dashed",children:"Export"})]})}),footer:t()({},I.D.footer),leftPannel:{children:(0,g.jsx)("div",{children:"Left Pannel"})}})}},44939:function(w,_,e){e.r(_),e.d(_,{default:function(){return M}});var x=e(26068),t=e.n(x),R=e(48305),f=e.n(R),A=e(68233),b=e(79617),I=e(30475),g=e(25426),m=e(42314),D=e(91785),r=e(54197),$=e(38297),j=e(496),a=e(86865),S=e(40384),q=e(90380),H=e(41812),u=e(33777),V=e(32923),J=e(95986),Q=e(15558),te=e.n(Q),K=e(53649),Z=e.n(K),G=e(75826),oe=e(22423),re=e(74629),y=e(39826),U=e(50959),n=e(11527),ee,de,ae,ie,X,ne=8,se="https://randomuser.me/api/?results=".concat(ne,"&inc=name,gender,email,nat,picture&noinfo"),Y={ListClassName:(0,y.cx)((0,y.iv)(ee||(ee=Z()([`
    overflow: scroll;
  `])))),ListItemClassName:(0,y.cx)((0,y.iv)(de||(de=Z()([`
    cursor: pointer;
    padding: 0px 10px !important;
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 10px;
    :hover {
      background-color: #e3e3e3;
    }
  `])))),SubTitle:(0,y.cx)((0,y.iv)(ae||(ae=Z()([`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `])))),ItemTitle:(0,y.cx)((0,y.iv)(ie||(ie=Z()([`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 -4px 0;
  `])))),avatar:(0,y.cx)((0,y.iv)(X||(X=Z()([`
    height: 40px;
    width: 40px;
  `]))))},_e=function(){var ue=(0,U.useState)(!0),O=f()(ue,2),d=O[0],o=O[1],l=(0,U.useState)(!1),s=f()(l,2),T=s[0],h=s[1],B=(0,U.useState)([]),i=f()(B,2),E=i[0],v=i[1],C=(0,U.useState)([]),W=f()(C,2),L=W[0],F=W[1];(0,U.useEffect)(function(){fetch(se).then(function(N){return N.json()}).then(function(N){o(!1),v(N.results),F(N.results)})},[]);var c=function(){h(!0),F(E.concat(te()(new Array(ne)).map(function(){return{loading:!0,name:{},picture:{}}}))),fetch(se).then(function(z){return z.json()}).then(function(z){var P=E.concat(z.results);v(P),F(P),h(!1),window.dispatchEvent(new Event("resize"))})},p=!d&&!T?(0,n.jsx)("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:(0,n.jsx)(a.ZP,{onClick:c,children:"loading more"})}):null;return(0,n.jsx)("div",{style:{height:"540px",overflow:"scroll"},children:(0,n.jsx)(G.Z,{className:Y.ListClassName,loading:d,itemLayout:"horizontal",loadMore:p,dataSource:L,renderItem:function(z){var P;return(0,n.jsx)(G.Z.Item,{extra:(0,n.jsx)("div",{children:"12.31"}),className:Y.ListItemClassName,children:(0,n.jsx)(oe.Z,{avatar:!0,title:!1,loading:z.loading,active:!0,children:(0,n.jsx)(G.Z.Item.Meta,{avatar:(0,n.jsx)(re.C,{src:z.picture.large,className:Y.avatar}),title:(0,n.jsx)("div",{className:Y.ItemTitle,children:(P=z.name)===null||P===void 0?void 0:P.last}),description:(0,n.jsx)("div",{className:Y.SubTitle,children:"Hello! nice to meet to u ~"})})})})}})})},k=_e,M=function(){var le=S.ZP.useMessage(),ue=f()(le,2),O=ue[0],d=ue[1],o=function(){return(0,n.jsx)(D.W,{type:"pure",items:[{icon:(0,n.jsx)(A.Z,{style:{color:"rgb(206,68,61)",fontSize:"10px"}}),size:18,onClick:function(){O.info("\u6B63\u5728\u5173\u95ED\u7A0B\u5E8F ing\uFF01")},label:"\u5173\u95ED\u7A0B\u5E8F"},{icon:(0,n.jsx)(b.Z,{style:{color:"rgb(280,135,53)",fontSize:"10px"}}),size:18,label:"\u5173\u95ED\u7A0B\u5E8F"},{icon:(0,n.jsx)(I.Z,{style:{color:"rgb(96,185,56)",fontSize:"10px"}}),size:18,label:"\u8BE6\u7EC6\u63D0\u793A"}]})};return(0,n.jsxs)(n.Fragment,{children:[d,(0,n.jsx)(r.A,{style:{maxWidth:"100%",height:"600px",border:"1px solid #e3e3e3",boxShadow:"0 0 10px 5px rgba(0, 0, 0, 0.1)"},header:t()(t()({},J.D.header),{},{style:{backgroundColor:"rgba(32,121,242,0.05)"},themeType:"pure",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(q.Z,{trigger:["click"],menu:{items:[{label:"Julie Nolke",key:"1"},{label:"Bill Jhon",key:"2"},{icon:"",label:"Mike Jhonson",key:"3"}]},children:(0,n.jsx)($.Z,{icon:(0,n.jsx)(g.Z,{}),title:"\u6700\u8FD1\u4F7F\u7528"})}),(0,n.jsx)(j.I,{placeholder:"Search For Some Dialog",style:{width:250}})]}),extra:(0,n.jsxs)(H.Z,{children:[(0,n.jsx)(a.ZP,{type:"primary",children:"Save"}),(0,n.jsx)(a.ZP,{type:"dashed",children:(0,n.jsx)(m.Z,{})})]}),iconConfig:t()(t()({},J.D.header.iconConfig),{},{title:"\u9753\u4ED4/\u59B9",icon:(0,n.jsx)(u.Z,{preview:!1,width:26,style:{borderRadius:"50%"},src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}),render:function(s,T){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{}),T,(0,n.jsx)(V.Z,{type:"vertical"}),"\u{1F604} \u5929\u9009\u4E4B\u5B50"]})}})}),type:"LeftFull",footer:!1,rightPannel:!1,leftPannel:{style:{padding:"0px"},children:(0,n.jsx)(k,{})}})]})}},96844:function(w,_,e){e.r(_);var x=e(54197),t=e(11527);_.default=function(){return(0,t.jsx)(x.A,{style:{maxWidth:"100%",height:"600px"},header:!1,leftPannel:!1})}},39260:function(w,_,e){e.r(_);var x=e(54197),t=e(11527);_.default=function(){return(0,t.jsx)(x.A,{style:{maxWidth:"100%",height:"600px"},header:!1,footer:!1,leftPannel:{children:(0,t.jsx)("div",{children:"Left Pannel"})}})}},56521:function(w,_,e){e.r(_);var x=e(26068),t=e.n(x),R=e(48305),f=e.n(R),A=e(54197),b=e(496),I=e(41812),g=e(15834),m=e(50959),D=e(95986),r=e(11527);_.default=function(){var $=(0,m.useState)("ghost"),j=f()($,2),a=j[0],S=j[1],q=(0,m.useState)({}),H=f()(q,2),u=H[0],V=H[1];return(0,r.jsxs)(I.Z,{direction:"vertical",style:{maxWidth:"100%"},children:[(0,r.jsx)(g.Z,{options:["ghost","block","pure"],value:a,onChange:function(Q){Q.toString()==="pure"?V({backgroundColor:"rgba(200,200,200,0.3)",border:"1px solid #1890ff"}):V({}),S(Q.toString())}}),(0,r.jsx)(A.A,{style:{maxWidth:"100%",height:"600px"},header:t()(t()({},D.D.header),{},{style:u,children:(0,r.jsx)(b.I,{addonBefore:"Options",placeholder:"Search For Some Options",style:{width:250}})}),themeType:a,footer:t()(t()({},D.D.footer),{},{children:(0,r.jsx)("div",{children:"Footer"})}),centerPannel:{style:u,children:(0,r.jsx)("div",{children:"Center Pannel"})},rightPannel:{style:u,children:(0,r.jsx)("div",{children:"right Pannel"})},bottomPannel:{style:u,children:(0,r.jsx)("div",{children:"Bottom Pannel"})},leftPannel:{style:u,children:(0,r.jsx)("div",{children:"Left Pannel"})}})]})}},52098:function(w,_,e){e.r(_);var x=e(26068),t=e.n(x),R=e(48305),f=e.n(R),A=e(54197),b=e(496),I=e(41812),g=e(15834),m=e(50959),D=e(95986),r=e(11527);_.default=function(){var $=(0,m.useState)("Bottom"),j=f()($,2),a=j[0],S=j[1];return(0,r.jsxs)(I.Z,{direction:"vertical",style:{maxWidth:"100%"},children:[(0,r.jsx)(g.Z,{options:["Left&Right","LeftFull","RightFull","Bottom"],value:a,onChange:function(H){return S(H.toString())}}),(0,r.jsx)(A.A,{style:{maxWidth:"100%",height:"600px"},header:t()(t()({},D.D.header),{},{children:(0,r.jsx)(b.I,{addonBefore:"Options",placeholder:"Search For Some Options",style:{width:250}})}),type:a,footer:t()(t()({},D.D.footer),{},{children:(0,r.jsx)("div",{children:"Footer"})}),leftPannel:{children:(0,r.jsx)("div",{children:"Left Pannel"})}})]})}},74963:function(w,_,e){var x=e(38297);_.ZP=x.Z},95986:function(w,_,e){e.d(_,{D:function(){return S}});var x=e(8324),t=e(36177),R=e(91546),f=e(47371),A=e(62118),b=e(41553),I=e(32478),g=e(81935),m=e(87374),D=e(41471),r=e(14574),$=e(41812),j=e(59084),a=e(11527),S={header:{iconConfig:{icon:(0,a.jsx)(x.Z,{}),title:"EditorLayout",dropdown:{menu:{items:[{key:"1",label:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pro-editor.antdigital.dev/",children:"\u5173\u4E8E Ant Desgin Pro Editor"})},{key:"2",label:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u5168\u90E8\u663E\u793A"}),icon:(0,a.jsx)(t.Z,{}),disabled:!0},{key:"github",label:(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/pro-editor",children:"GitHub"}),icon:(0,a.jsx)(R.Z,{})}]}}}},footer:{extra:(0,a.jsxs)($.Z,{size:[0,8],wrap:!0,children:[(0,a.jsx)(j.Z,{icon:(0,a.jsx)(f.Z,{}),color:"#55acee",children:"Twitter"}),(0,a.jsx)(j.Z,{icon:(0,a.jsx)(A.Z,{}),color:"#cd201f",children:"Youtube"}),(0,a.jsx)(j.Z,{icon:(0,a.jsx)(b.Z,{}),color:"#3b5999",children:"Facebook"}),(0,a.jsx)(j.Z,{icon:(0,a.jsx)(I.Z,{}),color:"#55acee",children:"LinkedIn"})]}),iconConfig:{icon:(0,a.jsx)(g.Z,{}),dropdown:{menu:{items:[{key:"1",label:"Build with Android",icon:(0,a.jsx)(m.Z,{})},{key:"2",label:"Run in Chrome",icon:(0,a.jsx)(D.Z,{})},{key:"github",label:"CodeSandBox",icon:(0,a.jsx)(r.Z,{})}]}}}}}},54197:function(w,_,e){e.d(_,{A:function(){return ue}});var x=e(26068),t=e.n(x),R=e(67825),f=e.n(R),A=e(45130),b=e(74963),I=e(8324),g=e(90380),m=e(44220),D=e(53649),r=e.n(D),$=e(60414),j,a,S,q,H,u,V,J,Q,te,K,Z,G,oe,re,y,U=(0,$.kc)(function(O,d){var o=O.css,l=O.token,s=O.cx,T=O.prefixCls,h=d.themeType,B="".concat(T,"-").concat(l==null?void 0:l.editorPrefix),i="".concat(B,"-layout"),E=o(j||(j=r()([`
    background-color: `,`;
    border: 1px solid
      `,`;
  `])),h==="block"?l.colorFillTertiary:h==="pure"?"transparent":l.colorFillQuaternary,h==="block"||h==="pure"?"transparent":l.colorBorder),v=o(h==="pure"?a||(a=r()([`
          border-radius: 0px;
          background-color: transparent;
          margin: 0px;
        `])):S||(S=r()([""])));return{layout:s(i,o(q||(q=r()([`
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
      `])),l.colorBgContainer,l.borderRadius,l.fontSizeSM,B),v),header:s("".concat(i,"-header"),o(H||(H=r()([`
        box-sizing: border-box;
        height: 48px;
        min-height: 48px;
        border-radius: `,`px;
        background-color: `,`;
        margin: `,`px;
      `])),l.borderRadius,l.colorFillQuaternary,l.margin/4),E,v),footer:s("".concat(i,"-footer"),o(u||(u=r()([`
        height: 36px;
        box-sizing: border-box;
        margin: `,`px;
        border-radius: `,`px;
        background-color: `,`;
      `])),l.margin/4,l.borderRadius,l.colorFillQuaternary),E,v),flexContainer:s("".concat(i,"-flex-container"),o(V||(V=r()([`
        padding: `,`px;
        position: relative;
      `])),l.margin/2+2)),centerPannel:s("".concat(i,"-center-pannel"),o(J||(J=r()([`
        flex: 1;
      `])))),container:s("".concat(i,"-container"),o(Q||(Q=r()([`
        flex: 1;
        display: flex;
        clear: both;
      `])))),pannel:s("".concat(i,"-pannel"),o(te||(te=r()([`
        border-radius: `,`px;
        box-sizing: border-box;
        background-color: `,`;
        margin: `,`px;
        height: calc(100% - `,`px);
        padding: `,`px;
      `])),l.borderRadius,l.colorFillQuaternary,l.margin/4,h==="pure"?0:l.margin/2,l.margin/2+2),E,v),leftPannel:s("".concat(i,"-left-pannel"),o(K||(K=r()([""])))),rightPannel:s("".concat(i,"-right-pannel"),o(Z||(Z=r()([""])))),tip:s("".concat(i,"-tip"),o(G||(G=r()([`
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      `])))),headerAndFooterCenterChildren:s("headerAndFooterCenterChildren",o(oe||(oe=r()([`
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `])))),headerAndFooterIcon:s("headerAndFooterIcon",o(re||(re=r()([`
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 50px;
      `])))),headerAndFooterExtra:s("headerAndFooterExtra",o(y||(y=r()([`
        min-width: 50px;
      `]))))}}),n=e(11527),ee=function(O){return O.header="header",O.footer="footer",O}(ee||{}),de=function(d){var o=d||{},l=o.children,s=o.render,T=o.hide,h=T===void 0?!1:T,B=o.flex,i=B===void 0?{justify:"space-between",align:"center",className:""}:B,E=o.type,v=E===void 0?"header":E,C=o.extra,W=o.iconConfig,L=W===void 0?{icon:(0,n.jsx)(I.Z,{}),dropdown:void 0,title:"",render:s}:W,F=o.themeType,c=o.style,p=c===void 0?{}:c,N=o.className,z=U({themeType:F}),P=z.styles,me=z.cx;if(h)return null;if(s)return s(d);var he=function(){if(L===!1)return null;var ce=L||{},ve=ce.icon,Pe=ce.dropdown,fe=ce.title,pe=ce.render;if(!Pe)return(0,n.jsxs)("div",{className:P.headerAndFooterIcon,children:[(0,n.jsx)(b.ZP,{icon:ve}),fe]});var xe=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.Z,t()(t()({trigger:["click"],placement:v===ee.header?"bottomLeft":"topLeft"},L.dropdown),{},{children:(0,n.jsx)(b.ZP,{icon:ve})})),fe]});return pe?pe(L,xe):xe};return(0,n.jsxs)(m.Z,t()(t()({},i),{},{className:me(v===ee.header?P.header:P.footer,P.flexContainer,i==null?void 0:i.className,N),style:p,children:[(0,n.jsx)("div",{className:P.headerAndFooterCenterChildren,children:l}),(0,n.jsx)("div",{className:P.headerAndFooterIcon,children:(0,n.jsx)(he,{})}),C&&(0,n.jsx)("div",{className:P.headerAndFooterExtra,children:C})]}),v===ee.header?"editor-layout-header":"editor-layout-footer")},ae=e(48305),ie=e.n(ae),X=e(33743),ne=["type","pannels","themeType","headerandfooter"],se=function(d){var o=d.type,l=d.pannels,s=d.themeType,T=d.headerandfooter,h=f()(d,ne),B=U({themeType:s}),i=B.styles,E=ie()(l,4),v=E[0],C=E[1],W=E[2],L=E[3],F=ie()(T,2),c=F[0],p=F[1];return o==="Left&Right"?(0,n.jsxs)(X.D,t()(t()({className:i.layout},h),{},{children:[c,(0,n.jsxs)(m.Z,{className:i.container,children:[v,(0,n.jsxs)(m.Z,{vertical:!0,flex:1,children:[L,W]}),C]}),p]})):o==="LeftFull"?(0,n.jsxs)(X.D,t()(t()({className:i.layout},h),{},{children:[c,(0,n.jsxs)(m.Z,{className:i.container,children:[v,(0,n.jsxs)(m.Z,{vertical:!0,flex:1,children:[(0,n.jsxs)(m.Z,{flex:1,children:[L,C]}),W]})]}),p]})):o==="RightFull"?(0,n.jsxs)(X.D,t()(t()({className:i.layout},h),{},{children:[c,(0,n.jsxs)(m.Z,{className:i.container,children:[(0,n.jsxs)(m.Z,{vertical:!0,flex:1,children:[(0,n.jsxs)(m.Z,{flex:1,children:[v,L]}),W]}),C]}),p]})):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(X.D,t()(t()({className:i.layout},h),{},{children:[c,(0,n.jsxs)(m.Z,{className:i.container,children:[v,L,C]}),W,p]}))})},Y=e(89197),_e=["children","className","style","minHeight","minWidth","index","themeType"],k=function(d){var o=d||{},l=o.children,s=l===void 0?"":l,T=o.className,h=o.style,B=o.minHeight,i=B===void 0?100:B,E=o.minWidth,v=E===void 0?100:E,C=o.index,W=C===void 0?0:C,L=o.themeType,F=f()(o,_e),c=U({themeType:L}),p=c.styles,N=c.cx,z=function(ce){switch(["left","right","bottom","center"][ce]){case"left":return{placement:"left",className:p.leftPannel,maxWidth:500,defaultSize:{width:"200"}};case"right":return{placement:"right",className:p.rightPannel,maxWidth:500,defaultSize:{width:"200"}};case"bottom":return{placement:"bottom",maxHeight:400,defaultSize:{height:"100"}};case"center":return!1;default:return!1}},P=z(W);if(!P)return(0,n.jsx)("div",{className:N(p.pannel,p.centerPannel),style:h,children:(0,n.jsx)("div",{className:N(T),children:s})});var me=P.placement,he=P.className;return(0,n.jsx)(Y._,t()(t()(t()({expandable:!1,style:{border:"none"},placement:me,minHeight:i,minWidth:v},P),F),{},{children:(0,n.jsx)("div",{className:N(p.pannel,he,T),style:h,children:s})}))},M=["header","footer","leftPannel","rightPannel","bottomPannel","centerPannel","type","themeType"],le=function(d){var o=d.header,l=d.footer,s=d.leftPannel,T=d.rightPannel,h=d.bottomPannel,B=d.centerPannel,i=d.type,E=i===void 0?"Bottom":i,v=d.themeType,C=v===void 0?"block":v,W=f()(d,M),L=[s,T,h,B].map(function(c,p){return c===!1?null:(0,n.jsx)(k,t()(t()({},c),{},{index:p,themeType:(c==null?void 0:c.themeType)||C}),"pannel"+p)}),F=[o,l].map(function(c,p){return c===!1?null:(0,n.jsx)(de,t()(t()({},c),{},{type:p===0?"header":"footer",themeType:(c==null?void 0:c.themeType)||C}),p)});return(0,n.jsx)(se,t()({pannels:L,headerandfooter:F,themeType:C,type:E},W))},ue=(0,A.nh)(le)},496:function(w,_,e){e.d(_,{I:function(){return H}});var x=e(26068),t=e.n(x),R=e(48305),f=e.n(R),A=e(67825),b=e.n(A),I=e(53649),g=e.n(I),m=e(21713),D=e(50959),r=e(45130),$=e(60414),j=e(11527),a=["className","defaultValue","onChange","value","onCompositionStart","onCompositionEnd","onBlur","onFocus","onValueChanging"],S,q=(0,$.kc)(function(u){var V=u.stylish,J=u.css;return J(S||(S=g()([`
    `,`
  `])),V.controlContainer)}),H=(0,D.forwardRef)(function(u,V){var J=u.className,Q=u.defaultValue,te=u.onChange,K=u.value,Z=u.onCompositionStart,G=u.onCompositionEnd,oe=u.onBlur,re=u.onFocus,y=u.onValueChanging,U=b()(u,a),n=q(),ee=n.styles,de=n.cx,ae=(0,D.useRef)(!1),ie=(0,D.useState)(K!=null?K:Q),X=f()(ie,2),ne=X[0],se=X[1],Y=(0,D.useRef)(Q||K);(0,D.useEffect)(function(){typeof K!="undefined"&&se(K)},[K]);var _e=function(){ne!==Y.current&&(te==null||te(ne),Y.current=ne)};return(0,j.jsx)(r.iV,{children:(0,j.jsx)(m.Z,t()(t()({},U),{},{ref:V,className:de(ee,J),value:ne,onChange:function(M){se(M.target.value),y==null||y(M.target.value)},onFocus:function(M){re==null||re(M)},onBlur:function(M){_e(),oe==null||oe(M)},onPressEnter:function(M){var le;ae.current||(_e(),(le=U.onPressEnter)===null||le===void 0||le.call(U,M))},onCompositionStart:function(M){ae.current=!0,Z==null||Z(M)},onCompositionEnd:function(M){ae.current=!1,G==null||G(M)}}))})})}}]);
