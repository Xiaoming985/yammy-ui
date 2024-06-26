import{d as I,c as z,n as N,o as _,h as M,l as g,p as $,y as E,A as C,B as F,ah as H,ai as j,b as p,z as T,G as B,r as A,t as L,C as O,H as V,T as Y,aj as v,ak as h,al as D,am as S}from"./framework.f76c85bf.js";const q=(e,t)=>{if(e.install=s=>{for(const o of[e,...Object.values(t??{})])s.component(o.name,o)},t)for(const[s,o]of Object.entries(t))e[s]=o;return e},P=(e,t)=>(e.install=s=>{e._context=s._context,s.config.globalProperties[t]=e},e),w=["success","info","warning","error"],U={duration:{type:Number,default:3e3},message:{type:[String,Object,Function]},dangerouslyUseHTMLString:{type:Boolean,default:!1},icon:{type:String,default:""},id:{type:String,default:""},onClose:{type:Function,required:!1},closeable:{type:Boolean,default:!1},type:{type:String,values:w,default:"info"},offset:{type:Number,default:20},zIndex:{type:Number,default:0},grouping:{type:Boolean,default:!1},repeatNum:{type:Number,default:1},center:{type:Boolean,default:!1}},G={name:"YumIcon"},J=I({...G,props:{name:{type:String,default:""}},setup(e){return(t,s)=>(_(),z("i",{class:N(`yum-icon-${e.name}`)},null,2))}}),x=q(J),K=["id"],Q={class:"yum-message__content"},R=I({__name:"message",props:U,emits:["destroy","close"],setup(e,{emit:t}){const s=e,o={info:"details",success:"check_circle",error:"close_circle",warning:"warn"};let l=M(!1);const r=()=>l.value=!1,n=()=>{t("close")},c=g(()=>{const{type:u}=s;return o[u]});let i=null;const m=()=>{s.duration>0&&(i=setTimeout(()=>{l.value=!1},s.duration))},f=()=>{clearTimeout(Number(i))};$(()=>{l.value=!0,m()});let d=g(()=>({top:`${s.offset}px`,zIndex:s.zIndex}));const k=g(()=>["yum-message--"+s.type,s.center?"is-center":""]);return E(()=>{f()}),(u,b)=>(_(),C(Y,{name:"yum-message-fade",onBeforeLeave:n,onAfterLeave:b[0]||(b[0]=se=>u.$emit("destroy"))},{default:F(()=>[H(T("div",{id:u.id,class:N(["yum-message",k.value]),style:V(p(d)),onMouseenter:f,onMouseleave:m},[B(p(x),{name:c.value,class:"yum-message__icon"},null,8,["name"]),A(u.$slots,"default",{},()=>[T("span",Q,L(u.message),1)]),u.closeable?(_(),C(p(x),{key:0,name:"close",class:"yum-message__close-btn",onClick:r})):O("",!0)],46,K),[[j,p(l)]])]),_:3}))}});let W=1,a=[],X=2e3;const y=function(e={},t){(v(e)||h(e))&&(e={message:e});const s=`message_${W++}`;let o=20;a.forEach(f=>{var d;o+=((d=f.el)==null?void 0:d.offsetHeight)+16});const l=e.onClose,r={...e,zIndex:X++,id:s,offset:o,onClose:()=>{Z(s,l)}},n=r.message,c=B(R,r,D(n)?{default:n}:h(n)?{default:()=>n}:null);c.props.onDestroy=()=>{S(null,i)};const i=document.createElement("div");S(c,i);let m=document.body;return v(e.appendTo)?m=document.querySelector(e.appendTo):e.appendTo&&e.appendTo instanceof Element&&(m=e.appendTo),m.appendChild(i.firstElementChild),a.push(c),{close:()=>c.component.proxy.visible=!1}};w.forEach(e=>{y[e]=(t={},s)=>{(v(t)||h(t))&&(t={message:t}),y({...t,type:e})}});function Z(e,t){var r;const s=a.findIndex(n=>n.props.id===e);if(s===-1)return;const o=a[s];t&&t(o),a.splice(s,1);const l=o.el.offsetHeight;for(let n=s;n<a.length;n++){const c=parseInt((r=a[n].el)==null?void 0:r.style.top)-l+-16;a[n].component.props.offset=c}}function ee(){for(let e=a.length-1;e>=0;e--){const t=a[e].component;(t==null?void 0:t.proxy).close()}}y.closeAll=ee;const ne=P(y,"$message");export{U as M,ne as Y,x as a,w as m,q as w};
