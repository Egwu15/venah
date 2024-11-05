import{r as v,j as s,U as y,W as Ee,a as le}from"./app-DcHGyOYU.js";import{A as me}from"./ApplicationLogo-DwEA0fUL.js";const Ne="/build/assets/x-BsBoh4zJ.png",je="/build/assets/linkden-CFL8ZcHv.png",Te="/build/assets/instagram-D0i5yZWv.png";function Ie({nextPage:e,data:t,setCheckedItems:n}){const a=v.useCallback(r=>{const{name:d,checked:o}=r.target;let c=[];if(c=t.checkedItems,o&&!t.checkedItems.includes(d)){c.push(d),n("checkedItems",c);return}const l=t.checkedItems.indexOf(d);l!==-1&&(c.splice(l,1),n("checkedItems",c))},[]);return s.jsxs("div",{children:[s.jsx("h1",{className:"text-black text-3xl font-bold font-header md:text-4xl ",children:"Lets Talk"}),s.jsx("h1",{className:"text-black text-3xl font-bold font-header md:text-4xl",children:"What would you like to do?"}),s.jsxs("div",{className:"form-control items-start",children:[s.jsxs("label",{className:"label cursor-pointer ",children:[s.jsx("input",{type:"checkbox",name:"Brand Design",onChange:a,checked:Array.isArray(t.checkedItems)&&t.checkedItems.includes("Brand Design"),className:"checkbox rounded-sm bg-transparent outline border-black outline-1 outline-black [--chkbg:theme(colors.black)] [--chkfg:black]"}),s.jsx("span",{className:"label-text pl-4 text-[#020306] text-2xl",children:"Brand Design"})]}),s.jsxs("label",{className:"label cursor-pointer ",children:[s.jsx("input",{type:"checkbox",checked:Array.isArray(t.checkedItems)&&t.checkedItems.includes("Product Design"),name:"Product Design",onChange:a,className:"checkbox rounded-sm bg-transparent outline border-black outline-1 outline-black [--chkbg:theme(colors.black)] [--chkfg:black]"}),s.jsx("span",{className:"label-text pl-4 text-[#020306] text-2xl",children:"Product Design"})]}),s.jsxs("label",{className:"label cursor-pointer ",children:[s.jsx("input",{type:"checkbox",name:"Web & Mobile Development",onChange:a,checked:Array.isArray(t.checkedItems)&&t.checkedItems.includes("Web & Mobile Development"),className:"checkbox rounded-sm bg-transparent outline border-black outline-1 outline-black [--chkbg:theme(colors.black)] [--chkfg:black]"}),s.jsx("span",{className:"label-text pl-4 text-[#020306] text-2xl",children:"Web & Mobile Development"})]})]}),s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{className:"btn rounded-full px-7 text-white text-xl font-semibold font-header",onClick:()=>e(r=>r+1),children:"Next"})})]})}function ie(){return s.jsx("div",{className:"w-full",children:s.jsx("progress",{className:"progress max-w-lg bg-black",value:"0",max:"100"})})}function pe(){return s.jsx("div",{className:"w-full",children:s.jsx("progress",{className:"progress max-w-lg",value:"100",max:"100"})})}function Ce({back:e,setData:t,data:n,next:a}){const[r,d]=v.useState({name:"",email:"",company:""}),o=()=>{let l=!0,E={};document.getElementById("name").value.trim()||(l=!1,E.name="Name is required");const p=document.getElementById("email").value;return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p)||(l=!1,E.email="Invalid email address"),d(E),l},c=l=>{l.preventDefault(),o()&&(a(),console.log())};return s.jsxs("form",{children:[s.jsx("h1",{className:"text-black text-3xl font-bold font-header md:text-3xl",children:"What would you like to do?"}),s.jsxs("div",{className:"py-10",children:[s.jsx("input",{id:"name",type:"text",placeholder:"Your name",value:n.name,onChange:l=>t("name",l.target.value),className:"pl-0 input bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"}),r.name&&s.jsx("p",{className:"text-red-500 mt-2",children:r.name})]}),s.jsxs("div",{className:"pb-10",children:[s.jsx("input",{id:"email",type:"text",placeholder:"Your email address",onChange:l=>t("email",l.target.value),value:n.email,className:"pl-0 input bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"}),r.email&&s.jsx("p",{className:"text-red-500 mt-2",children:r.email})]}),s.jsx("input",{id:"companyName",type:"text",placeholder:"Company name",onChange:l=>t("company",l.target.value),value:n.company,className:"pl-0 input bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"}),s.jsxs("div",{className:"pt-20 flex justify-between",children:[s.jsx("button",{onClick:()=>e(),className:"btn btn-outline border-black text-black rounded-full px-7 text-lg hover:bg-black hover:text-white font-semibold font-header",children:"Back"}),s.jsx("button",{onClick:c,className:"btn rounded-full px-7 text-lg text-white hover:bg-transparent hover:text-black font-semibold font-header",children:"Next"})]})]})}function we({back:e,next:t,data:n,setData:a}){return s.jsxs("form",{children:[s.jsx("h1",{className:"text-black text-3xl font-bold font-header md:text-3xl",children:"Tell us about your project"}),s.jsx("div",{className:"py-10",children:s.jsx("textarea",{type:"text",placeholder:"A short summary of what you want",value:n.aboutBusiness,onChange:r=>a("aboutBusiness",r.currentTarget.value),required:!0,className:"pl-0 textarea textarea-bordered bg-transparent  border-b-black rounded-none w-full focus:border-b-black focus:outline-none focus:border-b text-3xl text-black"})}),s.jsxs("div",{className:"pt-20 flex justify-between",children:[s.jsx("button",{onClick:()=>e(),className:"btn btn-outline border-black text-black rounded-full px-7 text-lg hover:bg-black hover:text-white font-semibold font-header",children:"Back"}),s.jsx("button",{onClick:t,className:"btn rounded-full px-7 text-lg text-white hover:bg-transparent hover:text-black font-semibold font-header",children:"Next"})]})]})}function xe(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=xe(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function H(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=xe(e))&&(a&&(a+=" "),a+=t);return a}const J=e=>typeof e=="number"&&!isNaN(e),q=e=>typeof e=="string",L=e=>typeof e=="function",se=e=>q(e)||L(e)?e:null,de=e=>v.isValidElement(e)||q(e)||L(e)||J(e);function _e(e,t,n){n===void 0&&(n=300);const{scrollHeight:a,style:r}=e;requestAnimationFrame(()=>{r.minHeight="initial",r.height=a+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)})})}function oe(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:r=!0,collapseDuration:d=300}=e;return function(o){let{children:c,position:l,preventExitTransition:E,done:p,nodeRef:j,isIn:T,playToast:C}=o;const x=a?`${t}--${l}`:t,f=a?`${n}--${l}`:n,N=v.useRef(0);return v.useLayoutEffect(()=>{const h=j.current,m=x.split(" "),i=g=>{g.target===j.current&&(C(),h.removeEventListener("animationend",i),h.removeEventListener("animationcancel",i),N.current===0&&g.type!=="animationcancel"&&h.classList.remove(...m))};h.classList.add(...m),h.addEventListener("animationend",i),h.addEventListener("animationcancel",i)},[]),v.useEffect(()=>{const h=j.current,m=()=>{h.removeEventListener("animationend",m),r?_e(h,p,d):p()};T||(E?m():(N.current=1,h.className+=` ${f}`,h.addEventListener("animationend",m)))},[T]),y.createElement(y.Fragment,null,c)}}function fe(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const w=new Map;let K=[];const ue=new Set,Le=e=>ue.forEach(t=>t(e)),ge=()=>w.size>0;function be(e,t){var n;if(t)return!((n=w.get(t))==null||!n.isToastActive(e));let a=!1;return w.forEach(r=>{r.isToastActive(e)&&(a=!0)}),a}function ye(e,t){de(e)&&(ge()||K.push({content:e,options:t}),w.forEach(n=>{n.buildToast(e,t)}))}function he(e,t){w.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function Ae(e){const{subscribe:t,getSnapshot:n,setProps:a}=v.useRef(function(d){const o=d.containerId||1;return{subscribe(c){const l=function(p,j,T){let C=1,x=0,f=[],N=[],h=[],m=j;const i=new Map,g=new Set,$=()=>{h=Array.from(i.values()),g.forEach(u=>u())},M=u=>{N=u==null?[]:N.filter(k=>k!==u),$()},I=u=>{const{toastId:k,onOpen:_,updateId:S,children:O}=u.props,X=S==null;u.staleId&&i.delete(u.staleId),i.set(k,u),N=[...N,u.props.toastId].filter(z=>z!==u.staleId),$(),T(fe(u,X?"added":"updated")),X&&L(_)&&_(v.isValidElement(O)&&O.props)};return{id:p,props:m,observe:u=>(g.add(u),()=>g.delete(u)),toggle:(u,k)=>{i.forEach(_=>{k!=null&&k!==_.props.toastId||L(_.toggle)&&_.toggle(u)})},removeToast:M,toasts:i,clearQueue:()=>{x-=f.length,f=[]},buildToast:(u,k)=>{if((B=>{let{containerId:A,toastId:P,updateId:D}=B;const V=A?A!==p:p!==1,G=i.has(P)&&D==null;return V||G})(k))return;const{toastId:_,updateId:S,data:O,staleId:X,delay:z}=k,Y=()=>{M(_)},ee=S==null;ee&&x++;const R={...m,style:m.toastStyle,key:C++,...Object.fromEntries(Object.entries(k).filter(B=>{let[A,P]=B;return P!=null})),toastId:_,updateId:S,data:O,closeToast:Y,isIn:!1,className:se(k.className||m.toastClassName),bodyClassName:se(k.bodyClassName||m.bodyClassName),progressClassName:se(k.progressClassName||m.progressClassName),autoClose:!k.isLoading&&(F=k.autoClose,Q=m.autoClose,F===!1||J(F)&&F>0?F:Q),deleteToast(){const B=i.get(_),{onClose:A,children:P}=B.props;L(A)&&A(v.isValidElement(P)&&P.props),T(fe(B,"removed")),i.delete(_),x--,x<0&&(x=0),f.length>0?I(f.shift()):$()}};var F,Q;R.closeButton=m.closeButton,k.closeButton===!1||de(k.closeButton)?R.closeButton=k.closeButton:k.closeButton===!0&&(R.closeButton=!de(m.closeButton)||m.closeButton);let U=u;v.isValidElement(u)&&!q(u.type)?U=v.cloneElement(u,{closeToast:Y,toastProps:R,data:O}):L(u)&&(U=u({closeToast:Y,toastProps:R,data:O}));const W={content:U,props:R,staleId:X};m.limit&&m.limit>0&&x>m.limit&&ee?f.push(W):J(z)?setTimeout(()=>{I(W)},z):I(W)},setProps(u){m=u},setToggle:(u,k)=>{i.get(u).toggle=k},isToastActive:u=>N.some(k=>k===u),getSnapshot:()=>h}}(o,d,Le);w.set(o,l);const E=l.observe(c);return K.forEach(p=>ye(p.content,p.options)),K=[],()=>{E(),w.delete(o)}},setProps(c){var l;(l=w.get(o))==null||l.setProps(c)},getSnapshot(){var c;return(c=w.get(o))==null?void 0:c.getSnapshot()}}}(e)).current;a(e);const r=v.useSyncExternalStore(t,n,n);return{getToastToRender:function(d){if(!r)return[];const o=new Map;return e.newestOnTop&&r.reverse(),r.forEach(c=>{const{position:l}=c.props;o.has(l)||o.set(l,[]),o.get(l).push(c)}),Array.from(o,c=>d(c[0],c[1]))},isToastActive:be,count:r==null?void 0:r.length}}function Pe(e){const[t,n]=v.useState(!1),[a,r]=v.useState(!1),d=v.useRef(null),o=v.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:l,closeToast:E,onClick:p,closeOnClick:j}=e;var T,C;function x(){n(!0)}function f(){n(!1)}function N(i){const g=d.current;o.canDrag&&g&&(o.didMove=!0,t&&f(),o.delta=e.draggableDirection==="x"?i.clientX-o.start:i.clientY-o.start,o.start!==i.clientX&&(o.canCloseOnClick=!1),g.style.transform=`translate3d(${e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,g.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function h(){document.removeEventListener("pointermove",N),document.removeEventListener("pointerup",h);const i=d.current;if(o.canDrag&&o.didMove&&i){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return r(!0),e.closeToast(),void e.collapseAll();i.style.transition="transform 0.2s, opacity 0.2s",i.style.removeProperty("transform"),i.style.removeProperty("opacity")}}(C=w.get((T={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||C.setToggle(T.id,T.fn),v.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||f(),window.addEventListener("focus",x),window.addEventListener("blur",f),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",f)}},[e.pauseOnFocusLoss]);const m={onPointerDown:function(i){if(e.draggable===!0||e.draggable===i.pointerType){o.didMove=!1,document.addEventListener("pointermove",N),document.addEventListener("pointerup",h);const g=d.current;o.canCloseOnClick=!0,o.canDrag=!0,g.style.transition="none",e.draggableDirection==="x"?(o.start=i.clientX,o.removalDistance=g.offsetWidth*(e.draggablePercent/100)):(o.start=i.clientY,o.removalDistance=g.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(i){const{top:g,bottom:$,left:M,right:I}=d.current.getBoundingClientRect();i.nativeEvent.type!=="touchend"&&e.pauseOnHover&&i.clientX>=M&&i.clientX<=I&&i.clientY>=g&&i.clientY<=$?f():x()}};return c&&l&&(m.onMouseEnter=f,e.stacked||(m.onMouseLeave=x)),j&&(m.onClick=i=>{p&&p(i),o.canCloseOnClick&&E()}),{playToast:x,pauseToast:f,isRunning:t,preventExitTransition:a,toastRef:d,eventHandlers:m}}function $e(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:d,className:o,style:c,controlledProgress:l,progress:E,rtl:p,isIn:j,theme:T}=e;const C=d||l&&E===0,x={...c,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};l&&(x.transform=`scaleX(${E})`);const f=H("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${T}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),N=L(o)?o({rtl:p,type:r,defaultClassName:f}):H(f,o),h={[l&&E>=1?"onTransitionEnd":"onAnimationEnd"]:l&&E<1?null:()=>{j&&a()}};return y.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":C},y.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${T} Toastify__progress-bar--${r}`}),y.createElement("div",{role:"progressbar","aria-hidden":C?"true":"false","aria-label":"notification timer",className:N,style:x,...h}))}let Be=1;const ve=()=>""+Be++;function De(e){return e&&(q(e.toastId)||J(e.toastId))?e.toastId:ve()}function Z(e,t){return ye(e,t),t.toastId}function ae(e,t){return{...t,type:t&&t.type||e,toastId:De(t)}}function te(e){return(t,n)=>Z(t,ae(e,n))}function b(e,t){return Z(e,ae("default",t))}b.loading=(e,t)=>Z(e,ae("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),b.promise=function(e,t,n){let a,{pending:r,error:d,success:o}=t;r&&(a=q(r)?b.loading(r,n):b.loading(r.render,{...n,...r}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(p,j,T)=>{if(j==null)return void b.dismiss(a);const C={type:p,...c,...n,data:T},x=q(j)?{render:j}:j;return a?b.update(a,{...C,...x}):b(x.render,{...C,...x}),T},E=L(e)?e():e;return E.then(p=>l("success",o,p)).catch(p=>l("error",d,p)),E},b.success=te("success"),b.info=te("info"),b.error=te("error"),b.warning=te("warning"),b.warn=b.warning,b.dark=(e,t)=>Z(e,ae("default",{theme:"dark",...t})),b.dismiss=function(e){(function(t){var n;if(ge()){if(t==null||q(n=t)||J(n))w.forEach(a=>{a.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const a=w.get(t.containerId);a?a.removeToast(t.id):w.forEach(r=>{r.removeToast(t.id)})}}else K=K.filter(a=>t!=null&&a.options.toastId!==t)})(e)},b.clearWaitingQueue=function(e){e===void 0&&(e={}),w.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},b.isActive=be,b.update=function(e,t){t===void 0&&(t={});const n=((a,r)=>{var d;let{containerId:o}=r;return(d=w.get(o||1))==null?void 0:d.toasts.get(a)})(e,t);if(n){const{props:a,content:r}=n,d={delay:100,...a,...t,toastId:t.toastId||e,updateId:ve()};d.toastId!==e&&(d.staleId=e);const o=d.render||r;delete d.render,Z(o,d)}},b.done=e=>{b.update(e,{progress:1})},b.onChange=function(e){return ue.add(e),()=>{ue.delete(e)}},b.play=e=>he(!0,e),b.pause=e=>he(!1,e);const Me=typeof window<"u"?v.useLayoutEffect:v.useEffect,ne=e=>{let{theme:t,type:n,isLoading:a,...r}=e;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},ce={info:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(ne,{...e},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}},Se=e=>{const{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r,playToast:d}=Pe(e),{closeButton:o,children:c,autoClose:l,onClick:E,type:p,hideProgressBar:j,closeToast:T,transition:C,position:x,className:f,style:N,bodyClassName:h,bodyStyle:m,progressClassName:i,progressStyle:g,updateId:$,role:M,progress:I,rtl:u,toastId:k,deleteToast:_,isIn:S,isLoading:O,closeOnClick:X,theme:z}=e,Y=H("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":u},{"Toastify__toast--close-on-click":X}),ee=L(f)?f({rtl:u,position:x,type:p,defaultClassName:Y}):H(Y,f),R=function(W){let{theme:B,type:A,isLoading:P,icon:D}=W,V=null;const G={theme:B,type:A};return D===!1||(L(D)?V=D({...G,isLoading:P}):v.isValidElement(D)?V=v.cloneElement(D,G):P?V=ce.spinner():(ke=>ke in ce)(A)&&(V=ce[A](G))),V}(e),F=!!I||!l,Q={closeToast:T,type:p,theme:z};let U=null;return o===!1||(U=L(o)?o(Q):v.isValidElement(o)?v.cloneElement(o,Q):function(W){let{closeToast:B,theme:A,ariaLabel:P="close"}=W;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${A}`,type:"button",onClick:D=>{D.stopPropagation(),B(D)},"aria-label":P},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Q)),y.createElement(C,{isIn:S,done:_,position:x,preventExitTransition:n,nodeRef:a,playToast:d},y.createElement("div",{id:k,onClick:E,"data-in":S,className:ee,...r,style:N,ref:a},y.createElement("div",{...S&&{role:M},className:L(h)?h({type:p}):H("Toastify__toast-body",h),style:m},R!=null&&y.createElement("div",{className:H("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},R),y.createElement("div",null,c)),U,y.createElement($e,{...$&&!F?{key:`pb-${$}`}:{},rtl:u,theme:z,delay:l,isRunning:t,isIn:S,closeToast:T,hide:j,type:p,style:g,className:i,controlledProgress:F,progress:I||0})))},re=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Re=oe(re("bounce",!0));oe(re("slide",!0));oe(re("zoom"));oe(re("flip"));const Oe={position:"top-right",transition:Re,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function ze(e){let t={...Oe,...e};const n=e.stacked,[a,r]=v.useState(!0),d=v.useRef(null),{getToastToRender:o,isToastActive:c,count:l}=Ae(t),{className:E,style:p,rtl:j,containerId:T}=t;function C(f){const N=H("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":j});return L(E)?E({position:f,rtl:j,defaultClassName:N}):H(N,se(E))}function x(){n&&(r(!0),b.play())}return Me(()=>{if(n){var f;const N=d.current.querySelectorAll('[data-in="true"]'),h=12,m=(f=t.position)==null?void 0:f.includes("top");let i=0,g=0;Array.from(N).reverse().forEach(($,M)=>{const I=$;I.classList.add("Toastify__toast--stacked"),M>0&&(I.dataset.collapsed=`${a}`),I.dataset.pos||(I.dataset.pos=m?"top":"bot");const u=i*(a?.2:1)+(a?0:h*M);I.style.setProperty("--y",`${m?u:-1*u}px`),I.style.setProperty("--g",`${h}`),I.style.setProperty("--s",""+(1-(a?g:0))),i+=I.offsetHeight,g+=.025})}},[a,l,n]),y.createElement("div",{ref:d,className:"Toastify",id:T,onMouseEnter:()=>{n&&(r(!1),b.pause())},onMouseLeave:x},o((f,N)=>{const h=N.length?{...p}:{...p,pointerEvents:"none"};return y.createElement("div",{className:C(f),style:h,key:`container-${f}`},N.map(m=>{let{content:i,props:g}=m;return y.createElement(Se,{...g,stacked:n,collapseAll:x,isIn:c(g.toastId,g.containerId),style:g.style,key:`toast-${g.key}`},i)}))}))}function Fe(){const[e,t]=v.useState(1),{data:n,setData:a,post:r,reset:d}=Ee({name:"",email:"",company:"",checkedItems:[],aboutBusiness:""}),o=c=>{c.preventDefault(),r("contact/create",{preserveScroll:!0,onSuccess:l=>{d(),t(1),b.success("Message sent")},onError:l=>b.error("unable to send message")})};return s.jsxs("div",{className:"card-body bg-[#F4E8D7] w-full max-w-lg rounded-md text-start mt-12 md:mt-0",children:[s.jsxs("div",{className:"flex justify-between gap-2",children:[s.jsx(ie,{}),e>1?s.jsx(ie,{}):s.jsx(pe,{}),e>2?s.jsx(ie,{}):s.jsx(pe,{})]}),e===1&&s.jsx(Ie,{nextPage:t,data:n,setCheckedItems:a}),e===2&&s.jsx(Ce,{back:()=>t(c=>c-1),setData:a,data:n,next:()=>t(c=>c+1)}),e===3&&s.jsx(we,{back:()=>t(c=>c-1),data:n,setData:a,next:o})]})}function Ve({children:e,headerColor:t="bg-gray-100",logoVariant:n="white"}){return s.jsxs("div",{className:`flex flex-col items-center  pt-6 sm:justify-center sm:pt-0 ${t} `,children:[s.jsx(ze,{}),s.jsxs("div",{className:"mt-6 w-full overflow-hidden px-6 py-4 shadow-md sm:max-w-md md:max-w-[50%] rounded-full bg-[#1D1E20] flex justify-between items-center",children:[s.jsx(le,{href:"/",children:n==="white"?s.jsx(me,{className:"h-20 w-20 fill-current text-black"}):"Add black Logo here"}),s.jsx(le,{href:"#aboutUs",children:s.jsx("h2",{className:"text-white",children:"About Us"})}),s.jsx(le,{href:"#ourWork",children:s.jsx("button",{className:"bg-white px-3 py-2 rounded-full text-black font-header font-semibold",children:"Explore our work"})})]}),s.jsx("div",{className:"mt-6 w-full overflow-hidden py-4 shadow-md ",children:e}),s.jsxs("footer",{id:"talk",className:"text-center py-20  mx-auto px-6 w-full text-white bg-[#020306]",children:[s.jsxs("div",{className:"md:flex md:px-20",children:[s.jsx("h1",{className:" font-bold md:text-6xl font-header text-start text-5xl w-full",children:"Ready to shape the future of the world?"}),s.jsx(Fe,{})]}),s.jsx("hr",{className:"md:mx-20 mt-20 mb-16"}),s.jsxs("div",{className:"md:flex justify-between items-center md:mx-20",children:[s.jsxs("div",{children:[s.jsx(me,{}),s.jsx("p",{className:"text-xl text-start",children:"Shaping the future of products."})]}),s.jsx("p",{className:" mt-6 text-xl text-start",children:"@2023 Venah All Rights Reserved"}),s.jsxs("div",{className:"flex gap-4 justify-center mt-2 md:mt-0",children:[s.jsx("img",{src:je,alt:"linkden"}),s.jsx("img",{src:Ne,alt:"x"}),s.jsx("img",{src:Te,alt:"instagram"})]})]})]})]})}export{Ve as G};
