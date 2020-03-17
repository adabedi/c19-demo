(this["webpackJsonpc19-demo"]=this["webpackJsonpc19-demo"]||[]).push([[0],{120:function(e,t,n){e.exports=n(150)},125:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=(n(125),n(195)),i=n(9),s=Object(a.createContext)({}),u=function(e){var t=e.children,n=Object(a.useState)({loading:!0,data:null}),o=Object(i.a)(n,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){l({loading:!1,data:JSON.parse(window.localStorage.getItem("authData"))})}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("authData",JSON.stringify(c.data))}),[c.data]),r.a.createElement(s.Provider,{value:{auth:c,setAuthData:function(e){l({data:e})}}},t)},m=n(59),p=n(48),d=n(46),f=function(e){var t=e.component,n=Object(d.a)(e,["component"]),o=Object(a.useContext)(s).auth;return o.loading?r.a.createElement(p.b,Object.assign({},n,{render:function(){return r.a.createElement("p",null,"Loading...")}})):r.a.createElement(p.b,Object.assign({},n,{render:function(e){return o.data?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/welcome"})}}))},b=n(35),E=n(192),h=n(187),g=n(75),v=n(197),O=n(16),j=n(184),y=n(101),C=n(95),S=n.n(C),w=n(43),A=n(198),k=function(e){var t=e.label,n=e.name,a=e.endAdornment,o=Object(d.a)(e,["label","name","endAdornment"]);return r.a.createElement(v.a,{m:1},r.a.createElement(A.a,Object.assign({label:t,readOnly:!0,variant:"outlined",style:{width:"100%"},autoComplete:"off",name:n,InputProps:Object(w.a)({},o.InputProps,{endAdornment:a})},o)))},_=Object(y.a)((function(e){return{button:{margin:e.spacing(1)}}})),D=function(e){var t=e.control,n=e.name,o=void 0===n?"other_symptomps":n,c=(e.watch,e.register,Object(a.useState)(0)),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(a.useState)(null),p=Object(i.a)(m,2),d=p[0],f=p[1],E=_(),h=function(e){var n=[];return Array.apply(void 0,Object(O.a)(Array(e))).map((function(e,a){return n.push(r.a.createElement(b.a,{as:r.a.createElement(k,{label:"Other Symptomps"}),control:t,name:"".concat(o,"[").concat(a,"]")}))})),f(n)};return r.a.createElement(r.a.Fragment,null,d,r.a.createElement(j.a,{color:"primary",size:"small",className:E.button,startIcon:r.a.createElement(S.a,null),onClick:function(e){return function(e){e.preventDefault(),u(s+1),h(s+1)}(e)}},"Add Other Symptomps"))},N=n(151),T=Object(N.a)((function(){return{contained:{backgroundColor:"#007E3A",color:"#fff"}}}))(j.a),I=function(e){var t=e.children,n=Object(d.a)(e,["children"]);return(r.a.createElement(T,Object.assign({variant:"contained"},n),t))},x=n(153),q=Object(N.a)((function(){return{root:{backgroundColor:"lightgrey"}}}))(x.a),F=function(e){var t=e.nhsNo;return r.a.createElement(q,{square:!0,elevation:0},r.a.createElement(v.a,{p:1},r.a.createElement(g.a,{variant:"subtitle1",component:"div"},r.a.createElement(v.a,{component:"div",display:"inline",fontWeight:"fontWeightBold"},"nhsNo:"),t)))},L=n(185),M=n(200),P=n(204),R=n(182),B=n(205),W=function(e){var t=e.children;return r.a.createElement(v.a,{m:1},r.a.createElement("span",{style:{color:"red"}},t))},z=function(e){var t=e.value,n=e.label,a=e.size,o=void 0===a?"small":a;return r.a.createElement(L.a,{value:t,control:r.a.createElement(M.a,{size:o,color:"primary"}),label:n})},J=function(e){var t=e.choices,n=e.label,o=e.name,c=e.size,l=e.defaultValue,s=e.control,u=e.errors,m=Object(a.useState)({value:""}),p=Object(i.a)(m,2),d=p[0],f=p[1];return r.a.createElement(b.a,{as:r.a.createElement(v.a,{p:1,m:1},r.a.createElement(P.a,{component:"fieldset"},r.a.createElement(R.a,{component:"legend"},n),r.a.createElement(B.a,{value:d,onChange:function(e){return t=e.target.value,void f(t);var t}},r.a.createElement(h.a,{container:!0,direction:"row"},t&&t.map((function(e){return r.a.createElement(v.a,{mr:6},r.a.createElement(z,{size:c,value:e.id,label:e.name}))}))),r.a.createElement(W,null,u&&u["".concat(o)]&&"This field is required")))),control:s,rules:{required:!0},name:o,defaultValue:l})},V=n(11),G=n(191),U=n(5),Y=n(189),H=n(190),K=n(188),$=n(201),Q=n(186),X=n(96),Z=n.n(X),ee=r.a.forwardRef((function(e,t){return r.a.createElement(K.a,Object.assign({direction:"up",ref:t},e))})),te=Object(U.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},subtitle:{margin:0,paddingTop:0,paddingLeft:e.spacing(4)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,a=(e.onClose,Object(d.a)(e,["children","classes","onClose"]));return r.a.createElement(Y.a,Object.assign({disableTypography:!0,className:n.root},a),r.a.createElement(v.a,{mr:2,ml:2},r.a.createElement(g.a,{variant:"h5"},t)))})),ne=Object(U.a)((function(e){return{root:{padding:e.spacing(2),marginTop:e.spacing(6)}}}))(H.a),ae=function(e){var t=e.title,n=e.children,a=e.open,o=e.openAction,c=e.handleClose;return r.a.createElement(r.a.Fragment,null,o,r.a.createElement($.a,{fullScreen:!0,open:a,onClose:c,TransitionComponent:ee},r.a.createElement(te,{onClose:function(){return c()}},c&&r.a.createElement(Q.a,{edge:"start",color:"inherit",onClick:c,"aria-label":"close"},r.a.createElement(Z.a,null)),t),r.a.createElement(ne,null,n)))},re=n(97),oe=n.n(re),ce=function(e){var t=e.label,n=void 0===t?"Temperature":t,o=e.placeholder,c=void 0===o?"Temperature":o,l=e.required,s=void 0===l||l,u=e.register,m=e.errors,p=e.name,d=Object(a.useState)(!1),f=Object(i.a)(d,2),b=f[0],E=f[1],g=Object(a.useState)({firstColumn:"36",pointer:".",secondColumn:"6"}),O=Object(i.a)(g,2),j=O[0],y=O[1],C=Object(a.useState)(null),S=Object(i.a)(C,2),k=S[0],_=S[1],D=function(e){e.preventDefault(),E(!0)},N=function(){_(j),E(!1)};return r.a.createElement(ae,{title:"Add Temperature",open:b,handleClose:function(){return E(!1)},handleOpen:N,openAction:r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{name:p,label:n,placeholder:c,value:k?k.firstColumn+k.pointer+k.secondColumn:"",inputRef:u({required:s}),onClick:function(e){return D(e)},onTouchEnd:function(e){return D(e)},onKeyUp:function(){return D()},variant:"outlined",style:{width:"100%"},autoComplete:"off",InputProps:{readOnly:!0,endAdornment:r.a.createElement(G.a,{position:"end"},r.a.createElement("span",null,"\u2103"))}}),r.a.createElement(W,null,m&&m.body_temperature_degrees_C&&"This field is required"))},r.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:6},r.a.createElement(h.a,{item:!0},r.a.createElement(v.a,{width:200},r.a.createElement(oe.a,{optionGroups:{firstColumn:["35","36","37","38","39","40","41"],pointer:["."],secondColumn:["0","1","2","3","4","5","6","7","8","9"]},valueGroups:j,onChange:function(e,t){return function(e,t){y(Object(w.a)({},j,Object(V.a)({},e,t))),_(Object(w.a)({},j,Object(V.a)({},e,t)))}(e,t)}}))),r.a.createElement(h.a,{item:!0},r.a.createElement(I,{type:"button",onClick:N},"Confirm Temperature"))))},le=n(68),ie=n(20),se=n(196),ue=function(e){var t=e.label,n=void 0===t?"Date symptomps first apeared":t,o=e.placeholder,c=void 0===o?"Date symptomps first apeared":o,l=e.required,s=void 0===l||l,u=e.register,m=e.errors,p=e.name,d=Object(a.useState)(null),f=Object(i.a)(d,2),b=f[0],E=f[1],h=Object(a.useState)(!1),g=Object(i.a)(h,2),v=g[0],O=g[1],j=function(e){e.preventDefault(),O(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{utils:le.a},r.a.createElement(se.a,{emptyLabel:"",maxDate:new Date,format:"dd-MM-yyyy",value:b,onChange:E,onClick:function(e){return j(e)},onClose:function(){return O(!1)},onAccept:function(){return O(!1)},open:v,fullWidth:!0,TextFieldComponent:function(e){return function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{name:p,label:n,placeholder:c,value:e.value,inputRef:u({required:s}),onClick:function(e){return j(e)},onTouchEnd:function(e){return j(e)},onKeyUp:function(){return j()},variant:"outlined",style:{width:"100%"},autoComplete:"off",InputProps:{readOnly:!0}}),r.a.createElement(W,null,m&&m.date_of_onset&&"This field is required"))}(e)}})))},me=Object(E.a)((function(e){return{root:{height:"100vh",backgroundColor:"#9FC9D9"}}})),pe=function(e){var t=e.history,n=Object(b.b)(),o=n.handleSubmit,c=n.errors,l=n.control,i=Object(a.useContext)(s).setAuthData,u=me();return r.a.createElement("form",{id:"login",onSubmit:o((function(e){i(e.nhsNo),t.replace("/")}))},r.a.createElement(h.a,{className:u.root,container:!0,direction:"column",justify:"center",alignItems:"center",spacing:6},r.a.createElement(h.a,{item:!0,spacing:0},r.a.createElement(g.a,{style:{color:"#58585A"},align:"center",variant:"h2",component:"h1"},"COVID-19"),r.a.createElement(g.a,{style:{color:"#58585A"},align:"center",variant:"h2",component:"h1"},"Assessmen")),r.a.createElement(h.a,{item:!0},r.a.createElement(v.a,{width:300},r.a.createElement(b.a,{as:r.a.createElement(k,{type:"number",fullWidth:!0,label:"Enter NHS Number"}),control:l,rules:{required:!0},name:"nhsNo"}),c.nhhsNo&&r.a.createElement("span",null,"This field is required"))),r.a.createElement(h.a,{item:!0},r.a.createElement(I,{type:"submit",form:"login"},"Create New Assessment"))))},de=n(194),fe=n(70),be=n(193),Ee=function(e){var t=e.disabled,n=e.form,a=Object(fe.a)(),o=Object(O.a)(a.breakpoints.keys).reverse().reduce((function(e,t){var n=Object(be.a)(a.breakpoints.only(t));return!e&&n?t:e}),null)||"xs";return"lg"===o||"xl"===o||"xl"===o?r.a.createElement(v.a,{m:1},r.a.createElement(I,{form:n,type:"submit",disabled:t},"Finish assessment")):r.a.createElement("div",{style:{position:"fixed",right:0,bottom:0,left:0,zIndex:100,backgroundColor:"#efefef",textAlign:"center",paddingTop:5}},r.a.createElement(I,{form:n,type:"submit",disabled:t},"Finish assessment"))},he=[{id:"present",name:"Yes"},{id:"unknown",name:"No"}],ge={SYMPTOMPS:[{name:"cough_presence",choices:he,label:"Does the patient have a cough?"},{name:"fever_presence",choices:he,label:"Does the patient have a fever?"},{name:"difficulty_breathing_presence",choices:he,label:"Does the patient have a difficulty breathing?"},{name:"sore_throat_presence",choices:he,label:"Does the patient have a sore throat?"}],LABEL_ASSESSMENT:"COVID- 19 Assessment"},ve=n(13),Oe=n.n(ve),je=n(28),ye=n(98),Ce=n.n(ye),Se="useApiRequest/",we="".concat(Se,"FETCHING"),Ae="".concat(Se,"SUCCESS"),ke="".concat(Se,"ERROR"),_e={status:null,response:null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,a=t.response;t.exception;switch(n){case we:return Object(w.a)({},_e,{status:we});case Ae:return Object(w.a)({},e,{status:Ae,response:a});case ke:return Object(w.a)({},e,{status:ke,response:a});default:return e}},Ne=function(){return{type:we}},Te=function(e){return{type:Ae,response:e}},Ie=function(e){return{type:ke,response:e}},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.verb,r=void 0===n?"get":n,o=t.params,c=void 0===o?{}:o,l=Object(a.useReducer)(De,_e),s=Object(i.a)(l,2),u=s[0],m=s[1],p=Object(a.useCallback)(Object(je.a)(Oe.a.mark((function t(){var n;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(Ne()),t.prev=1,t.next=4,Ce.a[r](e,c);case 4:n=t.sent,m(Te(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),m(Ie(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[e,r,c]);return[u,p]},qe=function(){var e,t,n=Object(a.useContext)(s),o=n.auth,c=n.setAuthData,l=Object(b.b)(),u=l.handleSubmit,m=l.control,p=l.errors,d=l.register,f=l.watch,E=l.setError,O=Object(a.useState)({}),j=Object(i.a)(O,2),y=j[0],C=j[1],S=Object(a.useState)(!1),w=Object(i.a)(S,2),A=w[0],k=w[1],_=xe("https://jsonplaceholder.typicode.com/users/",{verb:"get",params:y}),N=Object(i.a)(_,2),T=N[0],x=T.status,q=T.response,L=N[1];return r.a.createElement(r.a.Fragment,null,x===Ae&&r.a.createElement(ae,{open:A,title:"Result and recommendation"},r.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:6},r.a.createElement(h.a,{item:!0},q.result),r.a.createElement(h.a,{item:!0},r.a.createElement(I,{type:"button",onClick:function(){return c(null)}},"Create New Assasment")))),x===we&&r.a.createElement("div",null,"Loading..."),x===ke&&r.a.createElement(W,null,JSON.stringify(q)),r.a.createElement("form",{id:"patient-monitoring",onSubmit:u((function(e){var t=Object.keys(e).filter((function(t){return"present"===e[t]})).length>0?"present":"unknown",n=e.other_symptomps?e.other_symptomps.filter((function(e){return void 0!==e})):[],a=Object.assign(e,{first_symptoms_presence:t,other_symptomps:n});C(a),L(),k(!0)}))},r.a.createElement(h.a,{style:{marginBottom:45},container:!0,direction:"column",xs:!0},r.a.createElement(v.a,{mt:2,mr:2,ml:1},r.a.createElement(g.a,{variant:"h5",component:"h1"},ge.LABEL_ASSESSMENT),r.a.createElement(de.a,null)),r.a.createElement(v.a,{mt:1,mr:1,ml:1},r.a.createElement(F,{nhsNo:o.data})),r.a.createElement(v.a,null,r.a.createElement(v.a,{m:1},r.a.createElement(g.a,{variant:"h6",component:"h2"},"Patient Symptomps")),ge.SYMPTOMPS.map((function(e){var t=e.name,n=e.choices,a=e.label;return r.a.createElement(J,{control:m,name:t,choices:n,label:a,errors:p})}))),r.a.createElement(v.a,{m:1},r.a.createElement(D,{control:m,register:d,watch:f})),r.a.createElement(v.a,{m:1},r.a.createElement(ce,(e={control:m,errors:p,register:d,required:!0,setError:E},Object(V.a)(e,"control",m),Object(V.a)(e,"name","body_temperature_degrees_C"),e))),r.a.createElement(v.a,{m:1},r.a.createElement(ue,(t={control:m,errors:p,register:d,required:!0},Object(V.a)(t,"control",m),Object(V.a)(t,"name","date_of_onset"),t))))),r.a.createElement(Ee,{form:"patient-monitoring"}))},Fe=n(202),Le=n(199);function Me(e){return r.a.createElement(Le.a,Object.assign({elevation:6,variant:"filled"},e))}var Pe=function(){var e=r.a.useState(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],o=function(){return a(!1)};return r.a.createElement(Fe.a,{open:n,onClose:o,anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(Me,{onClose:o,severity:"warning"},"Wipe screen before use"))},Re=Object(E.a)((function(e){return{root:{height:"100vh",backgroundColor:"#9FC9D9"}}})),Be=function(){var e=Re();return r.a.createElement(h.a,{className:e.root,container:!0,direction:"column",justify:"center",alignItems:"center",spacing:6},r.a.createElement(Pe,null),r.a.createElement(h.a,{item:!0,spacing:0},r.a.createElement(g.a,{style:{color:"#58585A"},align:"center",variant:"h2",component:"h1"},"COVID-19"),r.a.createElement(g.a,{style:{color:"#58585A"},align:"center",variant:"h2",component:"h1"},"Assessmen")),r.a.createElement(h.a,{item:!0,spacing:0},r.a.createElement(g.a,{style:{color:"#58585A"},align:"center",variant:"body1",component:"p"},"App created in association with... (Lorem ipsum)")),r.a.createElement(m.b,{to:"/sign-in"},"Let's start"))},We=function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/welcome",component:Be}),r.a.createElement(p.b,{path:"/sign-in",component:pe}),r.a.createElement(f,{path:"/",component:qe})))},ze=n(99),Je=Object(ze.a)({typography:{fontFamily:["Istok Web","sans-serif"].join(","),subtitle1:{color:"grey"}},overrides:{MuiInputBase:{root:{backgroundColor:"#fff"}},MuiOutlinedInput:{root:{borderRadius:8}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(u,null,r.a.createElement(l.a,{theme:Je},r.a.createElement(ie.a,{utils:le.a},r.a.createElement(We,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.f7f721e3.chunk.js.map