"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[2433],{44944:function(at,g,t){t.r(g),t.d(g,{default:function(){return f}});var P=t(48305),c=t.n(P),S=t(20658),x=t(75271),y=[{label:"index",value:"index"},{label:"indexBorder",value:"indexBorder"},{label:"digit",value:"digit"},{label:"password",value:"password"},{label:"money",value:"money"},{label:"text",value:"text"},{label:"textarea",value:"textarea"},{label:"date",value:"date"},{label:"option",value:"option"},{label:"dateTime",value:"dateTime"},{label:"dateWeek",value:"dateWeek"},{label:"dateMonth",value:"dateMonth"},{label:"dateQuarter",value:"dateQuarter"},{label:"dateYear",value:"dateYear"},{label:"dateRange",value:"dateRange"},{label:"dateTimeRange",value:"dateTimeRange"},{label:"time",value:"time"},{label:"timeRange",value:"timeRange"},{label:"select",value:"select"},{label:"checkbox",value:"checkbox"},{label:"rate",value:"rate"},{label:"radio",value:"radio"},{label:"radioButton",value:"radioButton"},{label:"progress",value:"progress"},{label:"percent",value:"percent"},{label:"second",value:"second"},{label:"avatar",value:"avatar"},{label:"code",value:"code"},{label:"switch",value:"switch"},{label:"fromNow",value:"fromNow"},{label:"image",value:"image"},{label:"jsonCode",value:"jsonCode"},{label:"color",value:"color"}],L=t(52676),n=[{title:"Index",valueType:"indexBorder",dataIndex:"index"},{title:"Enterprise",valueType:"text",dataIndex:"name"},{title:"Company",valueType:"text",dataIndex:"authCompany"}],I=[{title:"Title",dataIndex:"title",type:"input"},{title:"ValueType",dataIndex:"valueType",type:"select",options:y},{title:"DataIndex",dataIndex:"dataIndex",type:"select"}],f=function(){var h=(0,x.useState)(n),m=c()(h,2),d=m[0],p=m[1];return(0,L.jsx)(S.Z,{columns:I,value:d,onChange:function(i){p(i),console.log("onChange",i)}})}},37361:function(at,g,t){t.r(g),t.d(g,{default:function(){return Dt}});var P=t(65697),c=(0,P.k)(),S=c.Provider,x=c.useStore,y=c.useStoreApi,L=t(26068),n=t.n(L),I=t(3341),f=t.n(I),h=t(64494),m=t(45001),d=t(72266),p=t.n(d),E=t(48305),i=t.n(E),r=t(62657),C=t.n(r),$=t(21742),v=t.n($),j=t(83136),M=t.n(j),K=t(17069),G=t.n(K),dt=t(25298),mt=t.n(dt),Pt=t(82092),H=t.n(Pt),xt=t(75652),ft=G()(function b(s){mt()(this,b),H()(this,"type",void 0),H()(this,"name",void 0),H()(this,"timestamp",void 0),this.type=s.type,this.name=s.name,this.timestamp=s.timestamp}),ot=function(b){v()(o,b);var s=M()(o);function o(D){var a;return mt()(this,o),a=s.call(this,D),H()(C()(a),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),H()(C()(a),"undoManager",void 0),H()(C()(a),"updateHistoryData",function(l){var O=a.getMap(a._internalHistoryKey);Object.entries(l).forEach(function(N){var U=i()(N,2),Z=U[0],W=U[1];O.set(Z,W)})}),H()(C()(a),"recordHistoryData",function(l,O){a.transact(function(){a.updateHistoryData(l)},new ft(O))}),H()(C()(a),"getHistoryMap",function(){return a.getMap(a._internalHistoryKey)}),H()(C()(a),"getHistoryJSON",function(){var l=a.getMap(a._internalHistoryKey);return l.toJSON()}),H()(C()(a),"redo",function(){return a.undoManager.redo()}),H()(C()(a),"undo",function(){return a.undoManager.undo()}),a.undoManager=new xt.H6(a.getHistoryMap(),{trackedOrigins:new Set([ft])}),a.undoManager.on("stack-item-added",function(l){l.stackItem.meta.set("timestamp",l.origin.timestamp),l.stackItem.meta.set("type",l.origin.type),l.stackItem.meta.set("name",l.origin.name)}),a}return G()(o)}(xt.QW),J=function(s,o){var D={config:null,onConfigChange:null,props:{},yjsDoc:new ot};return n()(n()({},D),{},{resetConfig:function(){s({config:D.config,props:D.props})},internalUpdateConfig:function(l,O,N){var U=o(),Z=U.onConfigChange,W=U.configToProps,it=N?l:n()(n()({},o().config),l);s({config:it},!1,O),Z==null||Z({config:it,props:W==null?void 0:W(it)})},exportConfig:function(){var l=document.createElement("a");l.download="pro-edior-config.json",l.style.display="none";var O=new Blob([JSON.stringify(o().config)]);l.href=URL.createObjectURL(O),document.body.appendChild(l),l.click(),document.body.removeChild(l)},setConfig:function(l){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!f()(l,o().config)){var N=O.replace,U=O.recordHistory,Z=O.name,W=O.type,it=O.trigger;o().internalUpdateConfig(l,{type:"setConfig/".concat(it||"unknown"),payload:{config:l,options:O}},N);var rt=p()({},{recordHistory:!0},{recordHistory:U,name:Z,type:W});rt.recordHistory&&o().yjsDoc.recordHistoryData({config:l},n()(n()({},rt),{},{timestamp:Date.now()}))}}})},k=function(s){return s.map(function(o){return{name:o.meta.get("name"),timestamp:o.meta.get("timestamp"),type:o.meta.get("type")}})},V=function(s,o){return{undoStack:function(){return k(o().yjsDoc.undoManager.undoStack)},redoStack:function(){return k(o().yjsDoc.undoManager.redoStack)},undoLength:function(){return o().yjsDoc.undoManager.undoStack.length},redoLength:function(){return o().yjsDoc.undoManager.redoStack.length},undo:function(){var a=o(),l=a.yjsDoc,O=a.internalUpdateConfig,N=l.undo(),U=l.getHistoryJSON(),Z=U.config;O(Z,{type:"history/undo",payload:N},!0)},redo:function(){var a=o(),l=a.yjsDoc,O=a.internalUpdateConfig,N=l.redo(),U=l.getHistoryJSON(),Z=U.config;O(Z,{type:"history/redo",payload:N},!0)}}},lt=function(){return n()(n()({},V.apply(void 0,arguments)),J.apply(void 0,arguments))},w=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=(0,h.v)(s!==!1),D=s===!1?void 0:s===!0?{name:"ProEditorStore"}:s;return(0,m.F)()(o(lt,D),f())},nt=t(18846),q=t(75271),ut=t(32249),st=t(98922),Q=(0,q.memo)(function(b){var s=b.store,o=s.getState(),D=o.proEditor;if(!D)throw Error("please wrapper your zustand store with proEditorMiddleware");try{y()}catch(Y){throw Error("Please wrap your App with <ProEditorProvider/>")}var a=y(),l=a.getState(),O=l.yjsDoc,N=l.setConfig,U=D.options.name,Z=function(){return D.options.partialize(s.getState())},W=function(){var Et,At=Z();return f()(At,(Et=a.getState().config)===null||Et===void 0?void 0:Et[U])},it=Z(),rt=(0,ut.N)(a);rt("config",H()({},U,it),[it],function(Y){W()||((0,st.S)(a,Y,!1,{type:"\u2935\uFE0F syncData from ".concat(U),payload:{config:it,name:U}}),O.updateHistoryData(Y))}),rt("onConfigChange",function(Y){var Et=Y.config[U],At=Z();f()(At,Et)||s.setState(Et,!1,{type:"ProEditor/updateByRedoOrUndo",payload:Et})},[]);var St=(0,q.useCallback)(function(){W()||N.apply(void 0,arguments)},[]);return(0,q.useEffect)(function(){s.setState((0,nt.Uy)(function(Y){Y.proEditor.__INTERNAL_SET_CONFIG__NOT_USE_IT=St}),!1,"injectProEditor")},[]),null}),_=Q,T=t(52676),It=function(s){var o=s.children,D=s.devtoolOptions,a=s.store,l=!0,O=(0,T.jsxs)(T.Fragment,{children:[o,a==null?void 0:a.map(function(N,U){return(0,T.jsx)(_,{store:N},"".concat(N.name,"-").concat(U))})]});try{y()}catch(N){l=!1}return l?O:(0,T.jsx)(S,{createStore:function(){return w(D)},children:O})},Mt=t(95095),Ot=t(77475),Tt=t(57820),Bt=t(3630),Lt=t(84240),jt=t(90142),e=t(80979),u=t(67511),A=t(86475),B=function(){var s=y(),o=s.getState(),D=o.undoStack,a=o.undoLength,l=o.redoLength,O=o.redoStack,N=o.setConfig,U=o.exportConfig,Z=o.resetConfig,W=o.undo,it=o.redo,rt=(0,A.Z)(function(){return s.getState().config}),St=(0,A.Z)(function(){return s.getState().props});return(0,q.useMemo)(function(){return{getConfig:rt,setConfig:N,exportConfig:U,resetConfig:Z,undo:W,redo:it,undoStack:D,redoStack:O,undoLength:a,redoLength:l,getProps:St}},[])},R=t(91976),F=function(){var s,o,D=B(),a=D.undo,l=D.redo,O=D.undoStack,N=D.redoStack,U=O(),Z=N(),W=U.at(-1);return(0,T.jsxs)(jt.D,{padding:12,gap:8,children:[(0,T.jsxs)(jt.D,{horizontal:!0,gap:8,children:[(0,T.jsx)(R.Z,{count:U.length,children:(0,T.jsx)(Tt.ZP,{icon:(0,T.jsx)(e.Z,{}),onClick:a,disabled:U.length===0,children:"\u64A4\u9500"})}),(0,T.jsx)(R.Z,{count:Z.length,children:(0,T.jsx)(Tt.ZP,{icon:(0,T.jsx)(u.Z,{}),onClick:l,disabled:Z.length===0,children:"\u91CD\u505A"})})]}),(0,T.jsxs)(jt.D,{children:["\u4E0A\u6B21\u64CD\u4F5C\u65F6\u95F4:",W?new Date(W.timestamp).toLocaleTimeString():"-"]}),(0,T.jsxs)(jt.D,{children:["\u4E0A\u6B21\u64CD\u4F5C\u540D\u79F0:",(s=W==null?void 0:W.name)!==null&&s!==void 0?s:"-"]})," ",(0,T.jsxs)(jt.D,{children:["\u4E0A\u6B21\u64CD\u4F5C\u7C7B\u578B:",(o=W==null?void 0:W.type)!==null&&o!==void 0?o:"-"]})]})},X=F,gt=function(s,o){return function(D,a,l){var O,N=(O=o.partialize)!==null&&O!==void 0?O:function(rt){return rt},U=o.name,Z=function(St){var Y=N(a()),Et=a(),At=Et.proEditor;At.__INTERNAL_SET_CONFIG__NOT_USE_IT(H()({},U,Y),n()({trigger:"proEditorMiddleware"},St))},W=l.setState;l.setState=function(rt,St,Y){W(rt,St,Y),Z(Y||{})};var it=s(function(rt,St,Y){D(rt,St,Y),Z(Y||{})},a,l);return n()(n()({},it),{},{proEditor:{options:n()(n()({},o),{},{partialize:N})}})}},ct=gt,pt=t(89590),tt=t(49047),yt=function(s,o){return{tabs:"1",switchTabs:function(a){s({tabs:a})},plusWithoutHistory:function(){s(function(a){return n()(n()({},a),{},{data:a.data+2})},!1,{type:"plusWithoutHistory",recordHistory:!1})},plus:function(){var a=o().data+1;s({data:a},!1,{type:"plus",payload:a,name:"+1"})},data:3}},z="redo-demo-app",ht={name:z,partialize:function(s){return{data:s.data}}},vt=(0,pt.Ue)()((0,tt.mW)(ct((0,tt.XR)(yt),ht),{name:z}));vt.subscribe(function(b){return b.data},console.log);var et=function(){var s=vt(),o=s.data,D=s.plus,a=s.tabs,l=s.switchTabs,O=s.plusWithoutHistory,N=(0,Lt.Fg)();return(0,T.jsxs)(jt.D,{padding:16,style:{background:N.colorBgLayout},children:[(0,T.jsx)(X,{}),(0,T.jsx)(Mt.Z,{}),(0,T.jsxs)(jt.D,{gap:12,children:[(0,T.jsxs)(Ot.Z,{title:"\u5386\u53F2\u8BB0\u5F55\u91CC\u7684\u6570\u636E",children:[(0,T.jsx)(Tt.ZP,{onClick:D,children:"+1"}),(0,T.jsxs)("div",{children:["data: ",o]})]}),(0,T.jsx)(Ot.Z,{title:"\u4E0D\u5728\u5386\u53F2\u8BB0\u5F55\u91CC\u7684\u6570\u636E",children:(0,T.jsxs)("div",{children:[(0,T.jsx)(Bt.Z,{activeKey:a,onChange:l,items:[{key:"1",label:"\u6570\u636E"},{key:"2",label:"\u914D\u7F6E"}]}),(0,T.jsx)("div",{children:"\u4E0B\u9762\u7684 +2 \u53EF\u4F7F\u5F97 \u5728\u5386\u53F2\u8BB0\u5F55\u5916\u6DFB\u52A0\u8BA9 data +2 "}),(0,T.jsx)(Tt.ZP,{onClick:O,children:"+2"})]})})]})]})},Ct=et,Dt=function(){return(0,T.jsx)(It,{devtoolOptions:{name:"redo-pro-editor-store"},store:[vt],children:(0,T.jsx)(Ct,{})})}},28800:function(at,g,t){t.r(g),t.d(g,{default:function(){return ft}});var P=t(48305),c=t.n(P),S=t(60212),x=t(95095),y=t(67685),L=t(57820),n=t(75271),I=t(16263),f=t(86323),h=t(26916),m=t(91540),d=t(52676),p=function(J){var k=J.open,V=J.onCreate,lt=J.onCancel,w=f.Z.useForm(),nt=c()(w,1),q=nt[0];return(0,d.jsx)(h.Z,{open:k,title:"Join Session",okText:"Join",onCancel:lt,onOk:function(){q.validateFields().then(function(st){var Q=st.color,_=st.name;q.resetFields();var T=typeof Q=="string"?Q:Q==null?void 0:Q.toHexString();V({color:T,name:_})}).catch(function(st){console.log("Validate Failed:",st)})},children:(0,d.jsxs)(f.Z,{form:q,layout:"vertical",name:"form_in_modal",initialValues:{color:"#1677FF"},children:[(0,d.jsx)(f.Z.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please input your name"}],children:(0,d.jsx)(y.Z,{})}),(0,d.jsx)(f.Z.Item,{name:"color",label:"Color",rules:[{required:!0,message:"Please select your color"}],children:(0,d.jsx)(m.Z,{format:"hex"})})]})})},E=t(26068),i=t.n(E),r=t(76289),C=t(3341),$=t.n(C),v=t(75652),j=t(65697),M=t(45001),K=new v.QW,G=function(){return(0,M.F)((0,r.Z)(K,"shared",function(J){return{count:0,text:"",users:[],increment:function(){return J(function(V){return i()(i()({},V),{},{count:V.count+1})})},updateText:function(V){return J(function(lt){return i()(i()({},lt),{},{text:V})})}}}),$())},dt=(0,j.k)(),mt=dt.useStore,Pt=dt.Provider,H=(0,n.memo)(function(){var ot=mt(function(w){return{count:w.count,increment:w.increment,updateText:w.updateText,text:w.text}}),J=ot.count,k=ot.increment,V=ot.updateText,lt=ot.text;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x.Z,{}),(0,d.jsx)(y.Z,{value:lt,onChange:function(nt){V(nt.target.value)}}),(0,d.jsx)(x.Z,{}),(0,d.jsxs)("p",{children:["Count: ",J]}),(0,d.jsx)(L.ZP,{onClick:k,children:"To the Moon!"})]})}),xt=function(){var J=(0,n.useState)(null),k=c()(J,2),V=k[0],lt=k[1],w=(0,n.useState)(!1),nt=c()(w,2),q=nt[0],ut=nt[1],st=function(_){lt(_),ut(!1)};return(0,d.jsxs)(Pt,{createStore:G,children:[V?null:(0,d.jsx)(L.ZP,{type:"primary",onClick:function(){ut(!0)},children:"Join"}),(0,d.jsx)(p,{open:q,onCreate:st,onCancel:function(){ut(!1)}}),V?(0,d.jsx)(S.Z,{provider:new I.x$("test-room",K),user:V}):null,(0,d.jsx)(H,{})]})},ft=(0,n.memo)(xt)},42330:function(at,g,t){t.r(g);var P=t(49806),c=t(68084),S=t(52676);g.default=function(){return(0,S.jsxs)(c.Z,{direction:"vertical",children:["Input",(0,S.jsxs)(c.Z,{direction:"vertical",children:[(0,S.jsx)(P.I,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",onChange:function(y){console.log(y)}}),(0,S.jsx)(P.I,{value:"\u5305\u542B\u6709\u6587\u672C"})]})]})}},92013:function(at,g,t){t.r(g),t.d(g,{default:function(){return v}});var P=t(26068),c=t.n(P),S=t(48305),x=t.n(S),y=t(67825),L=t.n(y),n=t(53649),I=t.n(n),f=t(32526),h=t(75271),m=t(38720),d=t(53131),p=t(52676),E=["className","value","onValueChanging","onChange","defaultValue","onFocus","onBlur","onPressEnter"],i,r=(0,d.kc)(function(j){var M=j.stylish,K=j.css,G=j.token,dt=j.prefixCls;return K(i||(i=I()([`
      `,`

      .`,`-input-number-group-addon {
        padding: 0 4px;
        color: `,`;
        background: `,`;
        border-color: transparent;
      }
    `])),M.controlContainer,dt,G.colorTextTertiary,G.colorFillQuaternary)}),C=function(M){var K=M.className,G=M.value,dt=M.onValueChanging,mt=M.onChange,Pt=M.defaultValue,H=M.onFocus,xt=M.onBlur,ft=M.onPressEnter,ot=L()(M,E),J=r(),k=J.styles,V=J.cx,lt=(0,h.useState)(Pt||G),w=x()(lt,2),nt=w[0],q=w[1],ut=(0,h.useRef)(Pt);(0,h.useEffect)(function(){typeof G!="undefined"&&q(G)},[G]);var st=function(){nt!==ut.current&&(mt==null||mt(nt),ut.current=nt)};return(0,p.jsx)(m.iV,{children:(0,p.jsx)(f.Z,c()(c()({size:"middle"},ot),{},{value:nt,onFocus:function(_){H==null||H(_)},onBlur:function(_){st(),xt==null||xt(_)},onChange:function(_){q(_),dt==null||dt(_)},onPressEnter:function(_){st(),ft==null||ft(_)},className:V(k,K)}))})},$=t(68084),v=function(){return(0,p.jsxs)($.Z,{direction:"vertical",children:["InputNumber",(0,p.jsxs)($.Z,{direction:"vertical",children:[(0,p.jsx)(C,{size:"large",defaultValue:100,addonAfter:"\u5217"}),(0,p.jsx)(C,{defaultValue:100,onChange:function(M){console.log(M)},addonAfter:"\u5217"}),(0,p.jsx)(C,{size:"small",defaultValue:100,addonAfter:"\u5217"})]})]})}},85140:function(at,g,t){t.r(g),t.d(g,{default:function(){return $}});var P=t(48305),c=t.n(P),S=t(26068),x=t.n(S),y=t(53649),L=t.n(y),n=t(1415),I=t(38720),f=t(53131),h=t(52676),m,d=(0,f.kc)(function(v){var j=v.token,M=v.css,K=v.prefixCls;return M(m||(m=L()([`
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
  `])),K,j.colorTextTertiary,j.colorTextSecondary,K,j.colorText,j.colorText,K)}),p=function(j){var M=d(),K=M.styles,G=M.cx;return(0,h.jsx)(I.iV,{children:(0,h.jsx)(n.Z,x()(x()({},j),{},{className:G(j.className,K)}))})},E=t(95095),i=t(75271),r=function(v){return v[v.canvas=0]="canvas",v[v.code=1]="code",v}(r||{}),C=[{label:"\u753B\u5E03",value:r.canvas},{label:"\u4EE3\u7801",value:r.code}],$=function(){var v=(0,i.useState)(r.canvas),j=c()(v,2),M=j[0],K=j[1];return(0,h.jsxs)("div",{children:[(0,h.jsx)(p,{value:M,options:C,onChange:K}),M===r.canvas&&(0,h.jsx)("div",{children:"canvas"}),M===r.code&&(0,h.jsx)("div",{children:"code"}),(0,h.jsx)(E.Z,{}),(0,h.jsx)(p,{size:"small",value:M,options:C,onChange:K}),M===r.canvas&&(0,h.jsx)("div",{children:"canvas"}),M===r.code&&(0,h.jsx)("div",{children:"code"})]})}},28592:function(at,g,t){t.r(g);var P=t(90417),c=t(77475),S=t(90142),x=t(52676);g.default=function(){return(0,x.jsx)(c.Z,{title:"Select",children:(0,x.jsxs)(S.D,{gap:12,children:[(0,x.jsxs)(S.D,{horizontal:!0,gap:16,children:["\u9ED8\u8BA4",(0,x.jsx)(P.P,{placeholder:"\u8BF7\u8F93\u5165",style:{width:120}}),(0,x.jsx)(P.P,{value:"123",style:{width:120}})]}),(0,x.jsxs)(S.D,{horizontal:!0,gap:16,children:["\u5C0F\u5C3A\u5BF8",(0,x.jsx)(P.P,{size:"small",placeholder:"\u8BF7\u8F93\u5165",style:{width:120}}),(0,x.jsx)(P.P,{size:"small",value:"123",style:{width:120}})]})]})})}},20816:function(at,g,t){t.r(g),t.d(g,{default:function(){return E}});var P=t(26068),c=t.n(P),S=t(53649),x=t.n(S),y=t(3630),L=t(38720),n=t(53131),I=t(52676),f,h=(0,n.kc)(function(i){var r=i.token,C=i.prefixCls,$=i.css,v=i.stylish,j=".".concat(C,"-tabs");return{cls:$(f||(f=x()([`
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
    `])),j,j,j,r.colorTextSecondary,r.colorText,r.colorFillTertiary,j,j,v.backgroundBlur,j,54)}}),m=function(r){var C=h(),$=C.styles,v=C.cx;return(0,I.jsx)(L.iV,{children:(0,I.jsx)(y.Z,c()(c()({},r),{},{className:v(r.className,$.cls)}))})},d=function(r){console.log(r)},p=function(){return(0,I.jsx)(m,{defaultActiveKey:"1",onChange:d,items:[{label:"Tab 1",key:"1",children:"Content of Tab Pane 1"},{label:"Tab 2",key:"2",children:"Content of Tab Pane 2"},{label:"Tab 3",key:"3",children:"Content of Tab Pane 3"}]})},E=p},11171:function(at,g,t){t.r(g),t.d(g,{default:function(){return f}});var P=t(26068),c=t.n(P),S=t(17539),x=t(38720),y=t(52676),L=function(m){return(0,y.jsx)(x.iV,{children:(0,y.jsx)(S.Z,c()({},m))})};L.TreeNode=S.Z.TreeNode;var n=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:(0,y.jsx)("span",{style:{color:"#1890ff"},children:"sss"}),key:"0-0-1-0"}]}]}],I=function(){var m=function(E,i){console.log("selected",E,i)},d=function(E,i){console.log("onCheck",E,i)};return(0,y.jsx)(L,{checkable:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultSelectedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],onSelect:m,onCheck:d,treeData:n})},f=I},59873:function(at,g,t){t.r(g),t.d(g,{default:function(){return d}});var P=t(48305),c=t.n(P),S=t(26068),x=t.n(S),y=t(28331),L=t(38720),n=t(52676),I=function(E){return(0,n.jsx)(L.iV,{children:(0,n.jsx)(y.Z,x()({},E))})};I.TreeNode=y.Z.TreeNode;var f=t(75271),h=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:(0,n.jsx)("b",{style:{color:"#08c"},children:"leaf3"})}]}]}],m=function(){var E=(0,f.useState)(void 0),i=c()(E,2),r=i[0],C=i[1],$=function(j){C(j)};return(0,n.jsx)(I,{showSearch:!0,style:{width:"100%"},value:r,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:$,treeData:h})},d=m},11962:function(at,g,t){var P=t(26458),c=t(50518),S=t(91976),x=t(22305),y=t.n(x),L=t(75271),n=t(52676),I=(0,L.memo)(function(f){var h=f.name,m=f.color,d=f.onClick,p=f.active,E=f.current,i=f.following;if(!h)return(0,n.jsx)(P.C,{});var r=y()(m);return(0,n.jsx)(c.Z,{title:h,showArrow:!1,children:(0,n.jsxs)(P.C,{shape:"circle",style:{background:m,outline:i?"2px solid ".concat(m):"",color:r.isLight()?"black":"inherit",zIndex:i?1e3:p?100:0,filter:p?"none":"grayscale(80%)",overflow:"initial",cursor:E?"inherit":"pointer"},onClick:d,children:[h.slice(0,1),(0,n.jsx)(S.Z,{status:p?"success":"default",color:p?void 0:"#d9d9d9",style:{position:"absolute",left:11,top:11}})]})})});g.Z=I},95413:function(at,g,t){t.d(g,{Z:function(){return E}});var P=t(53649),c=t.n(P),S=t(22305),x=t.n(S),y=t(75271),L=t(53131),n=t(52676),I=(0,y.memo)(function(i){var r=i.color;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"24",children:(0,n.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,n.jsx)("path",{fill:r,d:"M19.208 10.282 2.007 2.269l4.068 18.916.066-.1a29.368 29.368 0 0 1 13.067-10.803Z"}),(0,n.jsx)("path",{stroke:"#FFF",strokeWidth:"1.5",d:"m19.483 10.954.758-.32a.365.365 0 0 0 .013-.666l-.747-.347-18.246-8.5a.143.143 0 0 0-.2.16L5.375 21.34l.18.833a.357.357 0 0 0 .645.123l.469-.704 2.458-3.694a14.326 14.326 0 0 1 6.374-5.27l3.982-1.674Z"})]})})}),f=I,h,m,d=(0,L.kc)(function(i){var r=i.css;return{container:r(h||(h=c()([`
    position: fixed;

    z-index: 5000;
  `]))),name:r(m||(m=c()([`
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
  `])))}}),p=(0,y.memo)(function(i){var r=i.position,C=i.color,$=i.name,v=d(),j=v.styles;return(0,n.jsxs)("div",{className:j.container,style:{top:r.y,left:r.x},children:[(0,n.jsx)(f,{color:C}),(0,n.jsx)("div",{className:j.name,style:{backgroundColor:C,color:x()(C).isLight()?"black":"white"},children:$})]})}),E=p},60212:function(at,g,t){var P=t(26068),c=t.n(P),S=t(11962),x=t(75271),y=t(95413),L=t(52676),n=(0,x.lazy)(function(){return Promise.all([t.e(9199),t.e(7690)]).then(t.bind(t,57690))}),I=function(h){return(0,L.jsx)(x.Suspense,{children:(0,L.jsx)(n,c()({},h))})};I.Cursor=y.Z,I.Avatar=S.Z,g.Z=I},20658:function(at,g,t){t.d(g,{Z:function(){return jt}});var P=t(26068),c=t.n(P),S=t(67825),x=t.n(S),y=t(38720),L=t(18374),n=t(75271),I=t(82092),f=t.n(I),h=t(53649),m=t.n(h),d=t(49202),p=t(56522),E=t(84240),i=t(82187),r=t.n(i),C=t(90142),$=t(49806),v=t(52676),j,M=(0,E.kc)(function(e){var u=e.css,A=e.cx,B=e.prefixCls,R=e.token,F="".concat(B,"-").concat(R.editorPrefix,"-content");return{input:A("".concat(F,"-tem"),u(j||(j=m()([`
        padding-left: 13px;
      `]))))}}),K=(0,n.memo)(function(e){var u=e.dataIndex,A=e.placeholder,B=e.value,R=e.index,F=e.style,X=e.dragging,gt=e.creatorButtonProps,ct=(0,d.t)(),pt=(0,n.useRef)(null),tt=M(),yt=tt.styles;(0,n.useEffect)(function(){X&&pt.current.blur()},[X]);var z=function(et){var Ct=ct.getIdByIndex(et);return"column-list-".concat(et,"-").concat(Ct)},ht=function(){var et=ct.getValue()||[];if(R+1===et.length&&gt!==!1){var Ct=gt.record;ct.addItem(Ct(et.length))}setTimeout(function(){var Dt=document.getElementById(z(R+1));Dt==null||Dt.focus()},0)};return(0,v.jsx)($.I,{size:"small",ref:pt,value:B,style:F,id:z(R),placeholder:A||"\u8BF7\u8F93\u5165",className:yt.input,onPressEnter:function(){ht()},onChange:function(et){ct.updateItem(f()({},u,et),R)}})}),G=K,dt=t(71843),mt,Pt=(0,E.kc)(function(e){var u=e.prefixCls,A=e.token,B=e.css,R=e.cx,F="".concat(u,"-").concat(A.editorPrefix,"-content");return{select:R("".concat(F,"-tem"),B(mt||(mt=m()([`
        .`,`-select-selector {
          padding-left: 13px;
        }
      `])),u))}}),H=(0,n.memo)(function(e){var u=e.dataIndex,A=e.value,B=e.index,R=e.style,F=e.options,X=e.placeholder,gt=(0,d.t)(),ct=Pt(),pt=ct.styles;return(0,v.jsx)(dt.Z,{size:"small",style:R,options:F,className:pt.select,value:A,onClear:function(){gt.updateItem(f()({},u,null),B)},placeholder:X||"\u8BF7\u9009\u62E9",onChange:function(yt){gt.updateItem(f()({},u,yt),B)}})}),xt=H,ft,ot,J,k,V,lt=(0,E.kc)(function(e){var u=e.css,A=e.cx,B=e.token,R=e.prefixCls,F="".concat(R,"-").concat(B.editorPrefix,"-item");return{item:A(F,u(ft||(ft=m()([`
        position: relative;
        width: 100%;

        &:hover .`,`-actions {
          opacity: 1;
        }
      `])),F)),content:A("".concat(F,"-content"),u(ot||(ot=m()([`
        flex: 1;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `])))),actions:A("".concat(F,"-actions"),u(J||(J=m()([`
        z-index: 10;
        color: hsla(0, 0, 0, 0.45);
        opacity: 0;
      `])))),handle:A("".concat(F,"-handle"),u(k||(k=m()([`
        position: absolute;
        left: 0;
      `])))),actionsRight:A("".concat(F,"-actions-right"),u(V||(V=m()([`
        position: absolute;
        top: 1px;
        right: 1px;
        align-self: flex-end;
        overflow: hidden;
        border-radius: 1px;
        // \u91C7\u7528\u80CC\u666F\u6A21\u7CCA\u6765\u89E3\u51B3\u591A\u79CD\u80CC\u666F\u8272\u4E0B\u8986\u76D6\u5185\u5BB9\u7684\u95EE\u9898 TODO\uFF1AFireFox \u517C\u5BB9
        backdrop-filter: blur(5px);
        //background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, @bg-2 10%, @bg-2 100%);
      `]))))}}),w=(0,n.memo)(function(e){var u=e.item,A=e.index,B=e.columns,R=e.listeners,F=e.actions,X=e.hideRemove,gt=e.dragging,ct=e.creatorButtonProps,pt=lt(),tt=pt.styles,yt=(0,d.t)();return(0,v.jsxs)(C.D,{className:tt.item,direction:"horizontal",align:"center",children:[(0,v.jsx)(p.Ag,c()({className:r()(tt.actions,tt.handle),tabIndex:-1,cursor:"grab",style:{width:14,height:24},"data-cypress":"draggable-handle"},R)),(0,v.jsx)(C.D,{horizontal:!0,gap:4,width:"100%",className:tt.content,children:B.map(function(z,ht){var vt={flex:1,maxWidth:"".concat(100/B.length,"%")},et={dataIndex:z.dataIndex,value:u[z.dataIndex],id:u.id,index:A,dragging:gt,style:vt,placeholder:z.placeholder,creatorButtonProps:ct};switch(z.type){default:case"input":return(0,v.jsx)(G,c()({},et),"".concat(u==null?void 0:u.dataIndex,"-").concat(ht));case"select":return(0,v.jsx)(xt,c()({options:z.options},et),"".concat(u==null?void 0:u.dataIndex,"-").concat(ht));case"custom":var Ct=z.render;return Ct?(0,v.jsx)(Ct,c()({item:u,column:z,onChange:function(b){yt.updateItem(f()({},z.dataIndex,b),A)}},et),"".concat(u==null?void 0:u.dataIndex,"-").concat(ht)):"\u6682\u65E0\u5B9E\u73B0"}})}),(0,v.jsxs)(C.D,{className:r()(tt.actions,tt.actionsRight),direction:"horizontal",align:"center",children:[F,X?null:(0,v.jsx)(p.sL,{tabIndex:-1,onClick:function(){yt.removeItem(A)},style:{height:22}})]})]})}),nt=w,q,ut,st=(0,E.kc)(function(e){var u=e.token,A=e.css,B=e.cx,R=e.prefixCls,F="".concat(R,"-").concat(u==null?void 0:u.editorPrefix,"-column-list");return{content:B("".concat(F,"-content"),A(q||(q=m()([`
        flex: 1;
        width: 100%;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `])))),header:B("".concat(F,"-header"),A(ut||(ut=m()([`
        color: `,`;
        padding-left: 8px;
      `])),u.colorTextTertiary))}}),Q=(0,n.memo)(function(e){var u=e.columns,A=st(),B=A.styles,R=A.cx;return(0,v.jsx)(C.D,{horizontal:!0,align:"center",gap:4,children:u.map(function(F,X){return(0,v.jsx)("div",{className:R(B.content,B.header),children:F.title},"".concat(F.dataIndex,"-").concat(X))})})}),_=t(53131),T=t(89460),It,Mt,Ot,Tt=(0,_.kc)(function(e){var u=e.token,A=e.css,B=e.cx,R=e.prefixCls,F=(0,T.X)(e),X="".concat(R,"-").concat(u==null?void 0:u.editorPrefix,"-column-list");return{content:B("".concat(X,"-content"),A(It||(It=m()([`
        flex: 1;
        width: 100%;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `])))),header:B("".concat(X,"-header"),A(Mt||(Mt=m()([`
        color: `,`;
      `])),u.colorTextTertiary)),btnAdd:B("".concat(X,"-btn-add"),A(Ot||(Ot=m()([`
        height: 24px;
        padding-block: 2px;
        margin-top: `,`px;
      `])),u.marginXXS),F.defaultButton)}}),Bt=["className","columns","actions","hideRemove","creatorButtonProps"],Lt=(0,n.forwardRef)(function(e,u){var A=e.className,B=e.columns,R=e.actions,F=e.hideRemove,X=e.creatorButtonProps,gt=x()(e,Bt),ct=Tt(),pt=ct.cx,tt=X===!1?!1:c()({position:"bottom",record:function(){return{}}},X),yt=(0,n.useCallback)(function(z,ht){var vt=ht.index,et=ht.listeners,Ct=ht.dragging;return(0,v.jsx)(nt,{columns:B,item:z,dragging:Ct,listeners:et,index:vt,actions:typeof R=="function"?R(z,vt):R,creatorButtonProps:tt,hideRemove:F})},[B]);return(0,v.jsx)(y.iV,{children:(0,v.jsx)(L.c,c()({ref:u,renderItem:yt,renderHeader:function(){return(0,v.jsx)(Q,{columns:B})},className:pt(A),creatorButtonProps:tt},gt))})}),jt=Lt},90417:function(at,g,t){t.d(g,{P:function(){return m}});var P=t(26068),c=t.n(P),S=t(53649),x=t.n(S),y=t(71843),L=t(84240),n=t(38720),I=t(52676),f,h=(0,L.kc)(function(d){var p=d.css,E=d.stylish,i=d.prefixCls,r="".concat(i,"-select"),C=":not(.".concat(r,"-disabled):not(.").concat(r,"-customize-input)");return p(f||(f=x()([`
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
  `])),r,r,E.controlContainer,C,r,E.controlContainer,C,r,E.controlContainerFocused,r,E.controlContainerFocused,r)}),m=function(p){var E=h(),i=E.styles,r=E.cx;return(0,I.jsx)(n.iV,{children:(0,I.jsx)(y.Z,c()(c()({},p),{},{className:r(i,p.className)}))})}}}]);
