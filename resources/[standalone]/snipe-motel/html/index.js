const lu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};lu();function qe(){}const cu=i=>i;function uo(i,e){for(const t in e)i[t]=e[t];return i}function ic(i){return i()}function Vo(){return Object.create(null)}function Qt(i){i.forEach(ic)}function zr(i){return typeof i=="function"}function tt(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function uu(i){return Object.keys(i).length===0}function So(i,...e){if(i==null)return qe;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Eo(i){let e;return So(i,t=>e=t)(),e}function Ce(i,e,t){i.$$.on_destroy.push(So(e,t))}function Fn(i,e,t,n){if(i){const r=rc(i,e,t,n);return i[0](r)}}function rc(i,e,t,n){return i[1]&&n?uo(t.ctx.slice(),i[1](n(e))):t.ctx}function zn(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Nn(i,e,t,n,r,s){if(r){const o=rc(e,t,n,s);i.p(o,r)}}function On(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function fu(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function Ho(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function Wo(i){return i??""}function Ln(i,e,t){return i.set(t),e}function hu(i){return i&&zr(i.destroy)?i.destroy:qe}const sc=typeof window<"u";let du=sc?()=>window.performance.now():()=>Date.now(),To=sc?i=>requestAnimationFrame(i):qe;const Ui=new Set;function oc(i){Ui.forEach(e=>{e.c(i)||(Ui.delete(e),e.f())}),Ui.size!==0&&To(oc)}function pu(i){let e;return Ui.size===0&&To(oc),{promise:new Promise(t=>{Ui.add(e={c:i,f:t})}),abort(){Ui.delete(e)}}}function te(i,e){i.appendChild(e)}function ac(i){if(!i)return document;const e=i.getRootNode?i.getRootNode():i.ownerDocument;return e&&e.host?e:i.ownerDocument}function mu(i){const e=de("style");return gu(ac(i),e),e.sheet}function gu(i,e){return te(i.head||i,e),e.sheet}function be(i,e,t){i.insertBefore(e,t||null)}function ge(i){i.parentNode&&i.parentNode.removeChild(i)}function $i(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function de(i){return document.createElement(i)}function jn(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Ze(i){return document.createTextNode(i)}function Re(){return Ze(" ")}function vi(){return Ze("")}function et(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function H(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function _u(i){return Array.from(i.childNodes)}function lt(i,e){e=""+e,i.data!==e&&(i.data=e)}function jo(i,e){i.value=e??""}function ji(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function lc(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(i,t,n,e),r}const us=new Map;let fs=0;function vu(i){let e=5381,t=i.length;for(;t--;)e=(e<<5)-e^i.charCodeAt(t);return e>>>0}function xu(i,e){const t={stylesheet:mu(e),rules:{}};return us.set(i,t),t}function Xo(i,e,t,n,r,s,o,a=0){const l=16.666/n;let c=`{
`;for(let p=0;p<=1;p+=l){const g=e+(t-e)*s(p);c+=p*100+`%{${o(g,1-g)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${vu(u)}_${a}`,f=ac(i),{stylesheet:m,rules:_}=us.get(f)||xu(f,i);_[h]||(_[h]=!0,m.insertRule(`@keyframes ${h} ${u}`,m.cssRules.length));const d=i.style.animation||"";return i.style.animation=`${d?`${d}, `:""}${h} ${n}ms linear ${r}ms 1 both`,fs+=1,h}function bu(i,e){const t=(i.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=t.length-n.length;r&&(i.style.animation=n.join(", "),fs-=r,fs||yu())}function yu(){To(()=>{fs||(us.forEach(i=>{const{ownerNode:e}=i.stylesheet;e&&ge(e)}),us.clear())})}let Ar;function wr(i){Ar=i}function er(){if(!Ar)throw new Error("Function called outside component initialization");return Ar}function Kn(i){er().$$.on_mount.push(i)}function Ke(i){er().$$.on_destroy.push(i)}function tr(){const i=er();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const s=lc(e,t,{cancelable:n});return r.slice().forEach(o=>{o.call(i,s)}),!s.defaultPrevented}return!0}}function an(i,e){return er().$$.context.set(i,e),e}function yn(i){return er().$$.context.get(i)}function Xi(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Fi=[],pi=[];let ki=[];const fo=[],cc=Promise.resolve();let ho=!1;function uc(){ho||(ho=!0,cc.then(fc))}function Cr(){return uc(),cc}function Lr(i){ki.push(i)}function ps(i){fo.push(i)}const Cs=new Set;let xi=0;function fc(){if(xi!==0)return;const i=Ar;do{try{for(;xi<Fi.length;){const e=Fi[xi];xi++,wr(e),Mu(e.$$)}}catch(e){throw Fi.length=0,xi=0,e}for(wr(null),Fi.length=0,xi=0;pi.length;)pi.pop()();for(let e=0;e<ki.length;e+=1){const t=ki[e];Cs.has(t)||(Cs.add(t),t())}ki.length=0}while(Fi.length);for(;fo.length;)fo.pop()();ho=!1,Cs.clear(),wr(i)}function Mu(i){if(i.fragment!==null){i.update(),Qt(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Lr)}}function wu(i){const e=[],t=[];ki.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),ki=e}let ar;function Su(){return ar||(ar=Promise.resolve(),ar.then(()=>{ar=null})),ar}function Ls(i,e,t){i.dispatchEvent(lc(`${e?"intro":"outro"}${t}`))}const as=new Set;let Dn;function Nt(){Dn={r:0,c:[],p:Dn}}function Ot(){Dn.r||Qt(Dn.c),Dn=Dn.p}function ne(i,e){i&&i.i&&(as.delete(i),i.i(e))}function ae(i,e,t,n){if(i&&i.o){if(as.has(i))return;as.add(i),Dn.c.push(()=>{as.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}const Eu={duration:0};function qo(i,e,t,n){const r={direction:"both"};let s=e(i,t,r),o=n?0:1,a=null,l=null,c=null;function u(){c&&bu(i,c)}function h(m,_){const d=m.b-o;return _*=Math.abs(d),{a:o,b:m.b,d,duration:_,start:m.start,end:m.start+_,group:m.group}}function f(m){const{delay:_=0,duration:d=300,easing:p=cu,tick:g=qe,css:b}=s||Eu,x={start:du()+_,b:m};m||(x.group=Dn,Dn.r+=1),a||l?l=x:(b&&(u(),c=Xo(i,o,m,d,_,p,b)),m&&g(0,1),a=h(x,d),Lr(()=>Ls(i,m,"start")),pu(y=>{if(l&&y>l.start&&(a=h(l,d),l=null,Ls(i,a.b,"start"),b&&(u(),c=Xo(i,o,a.b,a.duration,0,p,s.css))),a){if(y>=a.end)g(o=a.b,1-o),Ls(i,a.b,"end"),l||(a.b?u():--a.group.r||Qt(a.group.c)),a=null;else if(y>=a.start){const E=y-a.start;o=a.a+a.d*p(E/a.duration),g(o,1-o)}}return!!(a||l)}))}return{run(m){zr(s)?Su().then(()=>{s=s(r),f(m)}):f(m)},end(){u(),a=l=null}}}function ms(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function Ge(i){i&&i.c()}function Ne(i,e,t,n){const{fragment:r,after_update:s}=i.$$;r&&r.m(e,t),n||Lr(()=>{const o=i.$$.on_mount.map(ic).filter(zr);i.$$.on_destroy?i.$$.on_destroy.push(...o):Qt(o),i.$$.on_mount=[]}),s.forEach(Lr)}function Oe(i,e){const t=i.$$;t.fragment!==null&&(wu(t.after_update),Qt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Tu(i,e){i.$$.dirty[0]===-1&&(Fi.push(i),uc(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function rt(i,e,t,n,r,s,o,a=[-1]){const l=Ar;wr(i);const c=i.$$={fragment:null,ctx:[],props:s,update:qe,not_equal:r,bound:Vo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Vo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(h,f,...m)=>{const _=m.length?m[0]:f;return c.ctx&&r(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),u&&Tu(i,h)),f}):[],c.update(),u=!0,Qt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=_u(e.target);c.fragment&&c.fragment.l(h),h.forEach(ge)}else c.fragment&&c.fragment.c();e.intro&&ne(i.$$.fragment),Ne(i,e.target,e.anchor,e.customElement),fc()}wr(l)}class st{$destroy(){Oe(this,1),this.$destroy=qe}$on(e,t){if(!zr(t))return qe;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!uu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bi=[];function Sr(i,e){return{subscribe:je(i,e).subscribe}}function je(i,e=qe){let t;const n=new Set;function r(a){if(tt(i,a)&&(i=a,t)){const l=!bi.length;for(const c of n)c[1](),bi.push(c,i);if(l){for(let c=0;c<bi.length;c+=2)bi[c][0](bi[c+1]);bi.length=0}}}function s(a){r(a(i))}function o(a,l=qe){const c=[a,l];return n.add(c),n.size===1&&(t=e(r)||qe),a(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function Au(i,e,t){const n=!Array.isArray(i),r=n?[i]:i,s=e.length<2;return Sr(t,o=>{let a=!1;const l=[];let c=0,u=qe;const h=()=>{if(c)return;u();const m=e(n?l[0]:l,o);s?o(m):u=zr(m)?m:qe},f=r.map((m,_)=>So(m,d=>{l[_]=d,c&=~(1<<_),a&&h()},()=>{c|=1<<_}));return a=!0,h(),function(){Qt(f),u(),a=!1}})}async function un(i,e={}){const t={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},n="snipe-motel";try{return await(await fetch(`https://${n}/${i}`,t)).json()}catch{}}const Cu=()=>{const i={showKeypad:je(!1)};return{...i,...{closeKeypadUi(){i.showKeypad.set(!1),un("closeKeypad")},showKeypadUi(){i.showKeypad.set(!0)}}}},Pr=Cu(),Lu=()=>{const i={showFurniture:je(!1),furnitureData:je({}),showFurniturePlacement:je(!1),furniturePlacementData:je({})};return{...i,...{closeFurnitureUi(){i.showFurniture.set(!1),i.furnitureData.set({}),un("closeFurniture")},closeFurnitureUiWithoutCallback(){i.showFurniture.set(!1),i.furnitureData.set({})},showFurnitureUi(t){i.showFurniture.set(!0),i.furnitureData.set(t)},showFurniturePlacementUi(t){i.showFurniturePlacement.set(!0),i.furniturePlacementData.set(t)},closeFurniturePlacementUi(){i.showFurniturePlacement.set(!1),i.furniturePlacementData.set({})}}}},en=Lu(),Pu=()=>{const i={showElevator:je(!1),elevatorData:je({})};return{...i,...{closeElevatorUi(){i.showElevator.set(!1),i.elevatorData.set({}),un("closeElevator")},showElevatorUi(t){i.showElevator.set(!0),i.elevatorData.set(t)}}}},mi=Pu();let Du="snipe-motel";async function qi(i,e={},t){const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},r=window.GetParentResourceName?window.GetParentResourceName():Du;return await(await fetch(`https://${r}/${i}`,n)).json()}function lr(i){return{x:i.x,y:i.z,z:-i.y}}function hc(i){return{x:i.x,y:-i.z,z:i.y}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="150",Ru=0,Yo=1,Iu=2,dc=1,pc=2,vr=3,qn=0,Zt=1,Rn=2,Xn=0,Bi=1,Zo=2,Qo=3,Ko=4,Fu=5,zi=100,zu=101,Nu=102,Jo=103,$o=104,Ou=200,Uu=201,ku=202,Bu=203,mc=204,gc=205,Gu=206,Vu=207,Hu=208,Wu=209,ju=210,Xu=0,qu=1,Yu=2,po=3,Zu=4,Qu=5,Ku=6,Ju=7,_c=0,$u=1,ef=2,xn=0,tf=1,nf=2,rf=3,vc=4,sf=5,xc=300,Yi=301,Zi=302,mo=303,go=304,gs=306,_o=1e3,ln=1001,vo=1002,It=1003,ea=1004,Ps=1005,$t=1006,of=1007,Dr=1008,gi=1009,af=1010,lf=1011,bc=1012,cf=1013,fi=1014,hi=1015,Rr=1016,uf=1017,ff=1018,Gi=1020,hf=1021,cn=1023,df=1024,pf=1025,di=1026,Qi=1027,mf=1028,gf=1029,_f=1030,vf=1031,xf=1033,Ds=33776,Rs=33777,Is=33778,Fs=33779,ta=35840,na=35841,ia=35842,ra=35843,bf=36196,sa=37492,oa=37496,aa=37808,la=37809,ca=37810,ua=37811,fa=37812,ha=37813,da=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,ba=37821,zs=36492,yf=36283,ya=36284,Ma=36285,wa=36286,Yn=3e3,Je=3001,Mf=3200,wf=3201,yc=0,Sf=1,gn="srgb",Ir="srgb-linear",Mc="display-p3",Ns=7680,Ef=519,Sa=35044,Ea="300 es",xo=1035;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ta=1234567;const Er=Math.PI/180,hs=180/Math.PI;function ir(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function Co(i,e){return(i%e+e)%e}function Tf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Af(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function Cf(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function Lf(i,e=1){return e-Math.abs(Co(i,e*2)-e)}function Pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function If(i,e){return i+Math.random()*(e-i)}function Ff(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(Ta=i);let e=Ta+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nf(i){return i*Er}function Of(i){return i*hs}function bo(i){return(i&i-1)===0&&i!==0}function Uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const si={DEG2RAD:Er,RAD2DEG:hs,generateUUID:ir,clamp:Vt,euclideanModulo:Co,mapLinear:Tf,inverseLerp:Af,lerp:Tr,damp:Cf,pingpong:Lf,smoothstep:Pf,smootherstep:Df,randInt:Rf,randFloat:If,randFloatSpread:Ff,seededRandom:zf,degToRad:Nf,radToDeg:Of,isPowerOfTwo:bo,ceilPowerOfTwo:Uf,floorPowerOfTwo:wc,setQuaternionFromProperEuler:kf,normalize:Bt,denormalize:xr};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],d=r[0],p=r[3],g=r[6],b=r[1],x=r[4],y=r[7],E=r[2],S=r[5],C=r[8];return s[0]=o*d+a*b+l*E,s[3]=o*p+a*x+l*S,s[6]=o*g+a*y+l*C,s[1]=c*d+u*b+h*E,s[4]=c*p+u*x+h*S,s[7]=c*g+u*y+h*C,s[2]=f*d+m*b+_*E,s[5]=f*p+m*x+_*S,s[8]=f*g+m*y+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*h+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=h*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=f*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Os.makeScale(e,t)),this}rotate(e){return this.premultiply(Os.makeRotation(-e)),this}translate(e,t){return this.premultiply(Os.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new zt;function Sc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class Ft{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==_){let p=1-a;const g=l*f+c*m+u*_+h*d,b=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),S=Math.atan2(E,g*b);p=Math.sin(p*S)/E,a=Math.sin(a*S)/E}const y=a*b;if(l=l*p+f*y,c=c*p+m*y,u=u*p+_*y,h=h*p+d*y,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new I,Aa=new Ft;function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bf=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Gf=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Wn=new I;function Vf(i){return i.convertSRGBToLinear(),Wn.set(i.r,i.g,i.b).applyMatrix3(Gf),i.setRGB(Wn.x,Wn.y,Wn.z)}function Hf(i){return Wn.set(i.r,i.g,i.b).applyMatrix3(Bf),i.setRGB(Wn.x,Wn.y,Wn.z).convertLinearToSRGB()}const Wf={[Ir]:i=>i,[gn]:i=>i.convertSRGBToLinear(),[Mc]:Vf},jf={[Ir]:i=>i,[gn]:i=>i.convertLinearToSRGB(),[Mc]:Hf},Dt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ir},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Wf[e],r=jf[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let yi;class Ec{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=Fr("canvas")),yi.width=e.width,yi.height=e.height;const n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Tc{constructor(e=null){this.isSource=!0,this.uuid=ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bs(r[o].image)):s.push(Bs(r[o]))}else s=Bs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xf=0;class Ht extends nr{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=ln,r=ln,s=$t,o=Dr,a=cn,l=gi,c=Ht.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ir(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=xc;Ht.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,E=(g+1)/2,S=(u+f)/4,C=(h+d)/4,v=(_+p)/4;return x>y&&x>E?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=S/n,s=C/n):y>E?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=S/r,s=v/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=C/s,r=v/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zn extends nr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ht(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$t,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ac extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qf extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ti.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ti)}else n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox),Gs.applyMatrix4(e.matrixWorld),this.union(Gs);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Or.subVectors(this.max,cr),Mi.subVectors(e.a,cr),wi.subVectors(e.b,cr),Si.subVectors(e.c,cr),Un.subVectors(wi,Mi),kn.subVectors(Si,wi),ni.subVectors(Mi,Si);let t=[0,-Un.z,Un.y,0,-kn.z,kn.y,0,-ni.z,ni.y,Un.z,0,-Un.x,kn.z,0,-kn.x,ni.z,0,-ni.x,-Un.y,Un.x,0,-kn.y,kn.x,0,-ni.y,ni.x,0];return!Vs(t,Mi,wi,Si,Or)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,Mi,wi,Si,Or))?!1:(Ur.crossVectors(Un,kn),t=[Ur.x,Ur.y,Ur.z],Vs(t,Mi,wi,Si,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new I,new I,new I,new I,new I,new I,new I,new I],ti=new I,Gs=new Nr,Mi=new I,wi=new I,Si=new I,Un=new I,kn=new I,ni=new I,cr=new I,Or=new I,Ur=new I,ii=new I;function Vs(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ii.fromArray(i,s);const a=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yf=new Nr,ur=new I,Hs=new I;class _s{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Hs)),this.expandByPoint(ur.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new I,Ws=new I,kr=new I,Bn=new I,js=new I,Br=new I,Xs=new I;class Lo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ws.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Ws);const s=e.distanceTo(t)*.5,o=-this.direction.dot(kr),a=Bn.dot(this.direction),l=-Bn.dot(kr),c=Bn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const d=1/u;h*=d,f*=d,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ws).addScaledVector(kr,f),m}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),r=En.dot(En)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,r,s){js.subVectors(t,e),Br.subVectors(n,e),Xs.crossVectors(js,Br);let o=this.direction.dot(Xs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=a*this.direction.dot(Br.crossVectors(Bn,Br));if(l<0)return null;const c=a*this.direction.dot(js.cross(Bn));if(c<0||l+c>o)return null;const u=-a*Bn.dot(Xs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f+d*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,d=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Qf)}lookAt(e,t,n){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Gn.crossVectors(n,Xt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Gn.crossVectors(n,Xt)),Gn.normalize(),Gr.crossVectors(Xt,Gn),r[0]=Gn.x,r[4]=Gr.x,r[8]=Xt.x,r[1]=Gn.y,r[5]=Gr.y,r[9]=Xt.y,r[2]=Gn.z,r[6]=Gr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],d=n[6],p=n[10],g=n[14],b=n[3],x=n[7],y=n[11],E=n[15],S=r[0],C=r[4],v=r[8],M=r[12],A=r[1],D=r[5],G=r[9],P=r[13],z=r[2],k=r[6],Q=r[10],R=r[14],V=r[3],Y=r[7],J=r[11],fe=r[15];return s[0]=o*S+a*A+l*z+c*V,s[4]=o*C+a*D+l*k+c*Y,s[8]=o*v+a*G+l*Q+c*J,s[12]=o*M+a*P+l*R+c*fe,s[1]=u*S+h*A+f*z+m*V,s[5]=u*C+h*D+f*k+m*Y,s[9]=u*v+h*G+f*Q+m*J,s[13]=u*M+h*P+f*R+m*fe,s[2]=_*S+d*A+p*z+g*V,s[6]=_*C+d*D+p*k+g*Y,s[10]=_*v+d*G+p*Q+g*J,s[14]=_*M+d*P+p*R+g*fe,s[3]=b*S+x*A+y*z+E*V,s[7]=b*C+x*D+y*k+E*Y,s[11]=b*v+x*G+y*Q+E*J,s[15]=b*M+x*P+y*R+E*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*m-n*l*m)+d*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+g*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],b=h*p*c-d*f*c+d*l*m-a*p*m-h*l*g+a*f*g,x=_*f*c-u*p*c-_*l*m+o*p*m+u*l*g-o*f*g,y=u*d*c-_*h*c+_*a*m-o*d*m-u*a*g+o*h*g,E=_*h*l-u*d*l-_*a*f+o*d*f+u*a*p-o*h*p,S=t*b+n*x+r*y+s*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return e[0]=b*C,e[1]=(d*f*s-h*p*s-d*r*m+n*p*m+h*r*g-n*f*g)*C,e[2]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*g+n*l*g)*C,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*m-n*l*m)*C,e[4]=x*C,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*g+t*f*g)*C,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*g-t*l*g)*C,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*C,e[8]=y*C,e[9]=(_*h*s-u*d*s-_*n*m+t*d*m+u*n*g-t*h*g)*C,e[10]=(o*d*s-_*a*s+_*n*c-t*d*c-o*n*g+t*a*g)*C,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*C,e[12]=E*C,e[13]=(u*d*r-_*h*r+_*n*f-t*d*f-u*n*p+t*h*p)*C,e[14]=(_*a*r-o*d*r-_*n*l+t*d*l+o*n*p-t*a*p)*C,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,_=s*h,d=o*u,p=o*h,g=a*h,b=l*c,x=l*u,y=l*h,E=n.x,S=n.y,C=n.z;return r[0]=(1-(d+g))*E,r[1]=(m+y)*E,r[2]=(_-x)*E,r[3]=0,r[4]=(m-y)*S,r[5]=(1-(f+g))*S,r[6]=(p+b)*S,r[7]=0,r[8]=(_+x)*C,r[9]=(p-b)*C,r[10]=(1-(f+d))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const o=Ei.set(r[4],r[5],r[6]).length(),a=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/s,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new I,rn=new ut,Zf=new I(0,0,0),Qf=new I(1,1,1),Gn=new I,Gr=new I,Xt=new I,Ca=new ut,La=new Ft;class _i{constructor(e=0,t=0,n=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kf=0;const Pa=new I,Ti=new Ft,Tn=new ut,Vr=new I,fr=new I,Jf=new I,$f=new Ft,Da=new I(1,0,0),Ra=new I(0,1,0),Ia=new I(0,0,1),eh={type:"added"},Fa={type:"removed"};class gt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new I,t=new _i,n=new Ft,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new zt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Da,e)}rotateY(e){return this.rotateOnAxis(Ra,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Da,e)}translateY(e){return this.translateOnAxis(Ra,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(fr,Vr,this.up):Tn.lookAt(Vr,fr,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Fa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new I(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new I,An=new I,qs=new I,Cn=new I,Ai=new I,Ci=new I,za=new I,Ys=new I,Zs=new I,Qs=new I;class Pn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){sn.subVectors(r,t),An.subVectors(n,t),qs.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(An),l=sn.dot(qs),c=An.dot(An),u=An.dot(qs),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Cn),l.set(0,0),l.addScaledVector(s,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l}static isFrontFacing(e,t,n,r){return sn.subVectors(n,t),An.subVectors(e,t),sn.cross(An).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Pn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ai.subVectors(r,n),Ci.subVectors(s,n),Ys.subVectors(e,n);const l=Ai.dot(Ys),c=Ci.dot(Ys);if(l<=0&&c<=0)return t.copy(n);Zs.subVectors(e,r);const u=Ai.dot(Zs),h=Ci.dot(Zs);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ai,o);Qs.subVectors(e,s);const m=Ai.dot(Qs),_=Ci.dot(Qs);if(_>=0&&m<=_)return t.copy(s);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ci,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return za.subVectors(s,r),a=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(za,a);const g=1/(p+d+f);return o=d*g,a=f*g,t.copy(n).addScaledVector(Ai,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let th=0;class rr extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Bi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Dt.workingColorSpace){if(e=Co(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ks(o,s,e+1/3),this.g=Ks(o,s,e),this.b=Ks(o,s,e-1/3)}return Dt.toWorkingColorSpace(this,r),this}setStyle(e,t=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Dt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Dt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Dt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Dt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=Cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Dt.fromWorkingColorSpace(Et.copy(this),e),Vt(Et.r*255,0,255)<<16^Vt(Et.g*255,0,255)<<8^Vt(Et.b*255,0,255)<<0}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=gn){Dt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(Hr);const n=Tr(on.h,Hr.h,t),r=Tr(on.s,Hr.s,t),s=Tr(on.l,Hr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ye;Ye.NAMES=Cc;class vs extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new I,Wr=new Ve;class bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lc extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pc extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nh=0;const Jt=new ut,Js=new gt,Li=new I,qt=new Nr,hr=new Nr,Mt=new I;class Ut extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Pc:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(qt.min,hr.min),qt.expandByPoint(Mt),Mt.addVectors(qt.max,hr.max),qt.expandByPoint(Mt)):(qt.expandByPoint(hr.min),qt.expandByPoint(hr.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),Mt.add(Li)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new I,u[A]=new I;const h=new I,f=new I,m=new I,_=new Ve,d=new Ve,p=new Ve,g=new I,b=new I;function x(A,D,G){h.fromArray(r,A*3),f.fromArray(r,D*3),m.fromArray(r,G*3),_.fromArray(o,A*2),d.fromArray(o,D*2),p.fromArray(o,G*2),f.sub(h),m.sub(h),d.sub(_),p.sub(_);const P=1/(d.x*p.y-p.x*d.y);!isFinite(P)||(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(P),b.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(P),c[A].add(g),c[D].add(g),c[G].add(g),u[A].add(b),u[D].add(b),u[G].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,D=y.length;A<D;++A){const G=y[A],P=G.start,z=G.count;for(let k=P,Q=P+z;k<Q;k+=3)x(n[k+0],n[k+1],n[k+2])}const E=new I,S=new I,C=new I,v=new I;function M(A){C.fromArray(s,A*3),v.copy(C);const D=c[A];E.copy(D),E.sub(C.multiplyScalar(C.dot(D))).normalize(),S.crossVectors(v,D);const P=S.dot(u[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=P}for(let A=0,D=y.length;A<D;++A){const G=y[A],P=G.start,z=G.count;for(let k=P,Q=P+z;k<Q;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let g=0;g<u;g++)f[_++]=c[m++]}return new bn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new ut,pn=new Lo,jr=new _s,Oa=new I,dr=new I,pr=new I,mr=new I,$s=new I,Xr=new I,qr=new Ve,Yr=new Ve,Zr=new Ve,eo=new I,Qr=new I;class le extends gt{constructor(e=new Ut,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&($s.fromBufferAttribute(h,e),o?Xr.addScaledVector($s,u):Xr.addScaledVector($s.sub(t),u))}t.add(Xr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),pn.copy(e.ray).recast(e.near),jr.containsPoint(pn.origin)===!1&&(pn.intersectSphere(jr,Oa)===null||pn.origin.distanceToSquared(Oa)>(e.far-e.near)**2))||(Na.copy(s).invert(),pn.copy(e.ray).applyMatrix4(Na),n.boundingBox!==null&&pn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){const d=h[m],p=r[d.materialIndex],g=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=g,y=b;x<y;x+=3){const E=a.getX(x),S=a.getX(x+1),C=a.getX(x+2);o=Kr(this,p,e,pn,c,u,E,S,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let d=m,p=_;d<p;d+=3){const g=a.getX(d),b=a.getX(d+1),x=a.getX(d+2);o=Kr(this,r,e,pn,c,u,g,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){const d=h[m],p=r[d.materialIndex],g=Math.max(d.start,f.start),b=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=g,y=b;x<y;x+=3){const E=x,S=x+1,C=x+2;o=Kr(this,p,e,pn,c,u,E,S,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let d=m,p=_;d<p;d+=3){const g=d,b=d+1,x=d+2;o=Kr(this,r,e,pn,c,u,g,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function ih(i,e,t,n,r,s,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===qn,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:i}}function Kr(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,dr),i.getVertexPosition(a,pr),i.getVertexPosition(l,mr);const c=ih(i,e,t,n,dr,pr,mr,eo);if(c){r&&(qr.fromBufferAttribute(r,o),Yr.fromBufferAttribute(r,a),Zr.fromBufferAttribute(r,l),c.uv=Pn.getUV(eo,dr,pr,mr,qr,Yr,Zr,new Ve)),s&&(qr.fromBufferAttribute(s,o),Yr.fromBufferAttribute(s,a),Zr.fromBufferAttribute(s,l),c.uv2=Pn.getUV(eo,dr,pr,mr,qr,Yr,Zr,new Ve));const u={a:o,b:a,c:l,normal:new I,materialIndex:0};Pn.getNormal(dr,pr,mr,u.normal),c.face=u}return c}class ht extends Ut{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function _(d,p,g,b,x,y,E,S,C,v,M){const A=y/C,D=E/v,G=y/2,P=E/2,z=S/2,k=C+1,Q=v+1;let R=0,V=0;const Y=new I;for(let J=0;J<Q;J++){const fe=J*D-P;for(let B=0;B<k;B++){const K=B*A-G;Y[d]=K*b,Y[p]=fe*x,Y[g]=z,c.push(Y.x,Y.y,Y.z),Y[d]=0,Y[p]=0,Y[g]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(B/C),h.push(1-J/v),R+=1}}for(let J=0;J<v;J++)for(let fe=0;fe<C;fe++){const B=f+fe+k*J,K=f+fe+k*(J+1),se=f+(fe+1)+k*(J+1),O=f+(fe+1)+k*J;l.push(B,K,O),l.push(K,se,O),V+=6}a.addGroup(m,V,M),m+=V,f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Ki(i[t]);for(const r in n)e[r]=n[r]}return e}function rh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dc(i){return i.getRenderTarget()===null&&i.outputEncoding===Je?gn:Ir}const Rc={clone:Ki,merge:Rt};var sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ic extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends Ic{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Di=1;class ah extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Yt(Pi,Di,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Yt(Pi,Di,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Yt(Pi,Di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Yt(Pi,Di,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Yt(Pi,Di,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Yt(Pi,Di,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=xn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Fc extends Ht{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ht(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Xn});s.uniforms.tEquirect.value=t;const o=new le(r,s),a=t.minFilter;return t.minFilter===Dr&&(t.minFilter=$t),new ah(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const to=new I,ch=new I,uh=new zt;class oi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=to.subVectors(n,t).cross(ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(to),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uh.getNormalMatrix(e),r=this.coplanarPoint(to).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new _s,Jr=new I;class Do{constructor(e=new oi,t=new oi,n=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],_=n[10],d=n[11],p=n[12],g=n[13],b=n[14],x=n[15];return t[0].setComponents(a-r,h-l,d-f,x-p).normalize(),t[1].setComponents(a+r,h+l,d+f,x+p).normalize(),t[2].setComponents(a+s,h+c,d+m,x+g).normalize(),t[3].setComponents(a-s,h-c,d-m,x-g).normalize(),t[4].setComponents(a-o,h-u,d-_,x-b).normalize(),t[5].setComponents(a+o,h+u,d+_,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class xs extends Ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<u;g++){const b=g*f-o;for(let x=0;x<c;x++){const y=x*h-s;_.push(y,-b,0),d.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const x=b+c*g,y=b+c*(g+1),E=b+1+c*(g+1),S=b+1+c*g;m.push(x,y,S),m.push(y,E,S)}this.setIndex(m),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh="vec3 transformed = vec3( position );",xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ih=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,td=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Td=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ip=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,rp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,op=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:hh,alphamap_pars_fragment:dh,alphatest_fragment:ph,alphatest_pars_fragment:mh,aomap_fragment:gh,aomap_pars_fragment:_h,begin_vertex:vh,beginnormal_vertex:xh,bsdfs:bh,iridescence_fragment:yh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:Eh,clipping_planes_vertex:Th,color_fragment:Ah,color_pars_fragment:Ch,color_pars_vertex:Lh,color_vertex:Ph,common:Dh,cube_uv_reflection_fragment:Rh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Fh,displacementmap_vertex:zh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Oh,encodings_fragment:Uh,encodings_pars_fragment:kh,envmap_fragment:Bh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:Vh,envmap_pars_vertex:Hh,envmap_physical_pars_fragment:td,envmap_vertex:Wh,fog_vertex:jh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_fragment:Qh,lightmap_pars_fragment:Kh,lights_lambert_fragment:Jh,lights_lambert_pars_fragment:$h,lights_pars_begin:ed,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:rd,lights_phong_pars_fragment:sd,lights_physical_fragment:od,lights_physical_pars_fragment:ad,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:ud,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:dd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:_d,map_particle_pars_fragment:vd,metalnessmap_fragment:xd,metalnessmap_pars_fragment:bd,morphcolor_vertex:yd,morphnormal_vertex:Md,morphtarget_pars_vertex:wd,morphtarget_vertex:Sd,normal_fragment_begin:Ed,normal_fragment_maps:Td,normal_pars_fragment:Ad,normal_pars_vertex:Cd,normal_vertex:Ld,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Dd,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Fd,output_fragment:zd,packing:Nd,premultiplied_alpha_fragment:Od,project_vertex:Ud,dithering_fragment:kd,dithering_pars_fragment:Bd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Hd,shadowmap_pars_vertex:Wd,shadowmap_vertex:jd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Qd,specularmap_fragment:Kd,specularmap_pars_fragment:Jd,tonemapping_fragment:$d,tonemapping_pars_fragment:ep,transmission_fragment:tp,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:rp,uv_vertex:sp,uv2_pars_fragment:op,uv2_pars_vertex:ap,uv2_vertex:lp,worldpos_vertex:cp,background_vert:up,background_frag:fp,backgroundCube_vert:hp,backgroundCube_frag:dp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:vp,distanceRGBA_frag:xp,equirect_vert:bp,equirect_frag:yp,linedashed_vert:Mp,linedashed_frag:wp,meshbasic_vert:Sp,meshbasic_frag:Ep,meshlambert_vert:Tp,meshlambert_frag:Ap,meshmatcap_vert:Cp,meshmatcap_frag:Lp,meshnormal_vert:Pp,meshnormal_frag:Dp,meshphong_vert:Rp,meshphong_frag:Ip,meshphysical_vert:Fp,meshphysical_frag:zp,meshtoon_vert:Np,meshtoon_frag:Op,points_vert:Up,points_frag:kp,shadow_vert:Bp,shadow_frag:Gp,sprite_vert:Vp,sprite_frag:Hp},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},_n={basic:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Rt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Rt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Rt([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Rt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Rt([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Rt([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Rt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Rt([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};_n.physical={uniforms:Rt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const $r={r:0,b:0,g:0};function Wp(i,e,t,n,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(p,g){let b=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x));const y=i.xr,E=y.getSession&&y.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===gs)?(u===void 0&&(u=new le(new ht(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ki(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=x.encoding!==Je,(h!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new le(new xs(2,2),new In({name:"BackgroundMaterial",uniforms:Ki(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,g){p.getRGB($r,Dc(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:_}}function jp(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(z,k,Q,R,V){let Y=!1;if(o){const J=d(R,Q,k);c!==J&&(c=J,m(c.object)),Y=g(z,R,Q,V),Y&&b(z,R,Q,V)}else{const J=k.wireframe===!0;(c.geometry!==R.id||c.program!==Q.id||c.wireframe!==J)&&(c.geometry=R.id,c.program=Q.id,c.wireframe=J,Y=!0)}V!==null&&t.update(V,34963),(Y||u)&&(u=!1,v(z,k,Q,R),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function d(z,k,Q){const R=Q.wireframe===!0;let V=a[z.id];V===void 0&&(V={},a[z.id]=V);let Y=V[k.id];Y===void 0&&(Y={},V[k.id]=Y);let J=Y[R];return J===void 0&&(J=p(f()),Y[R]=J),J}function p(z){const k=[],Q=[],R=[];for(let V=0;V<r;V++)k[V]=0,Q[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:R,object:z,attributes:{},index:null}}function g(z,k,Q,R){const V=c.attributes,Y=k.attributes;let J=0;const fe=Q.getAttributes();for(const B in fe)if(fe[B].location>=0){const se=V[B];let O=Y[B];if(O===void 0&&(B==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),B==="instanceColor"&&z.instanceColor&&(O=z.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;J++}return c.attributesNum!==J||c.index!==R}function b(z,k,Q,R){const V={},Y=k.attributes;let J=0;const fe=Q.getAttributes();for(const B in fe)if(fe[B].location>=0){let se=Y[B];se===void 0&&(B==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),B==="instanceColor"&&z.instanceColor&&(se=z.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),V[B]=O,J++}c.attributes=V,c.attributesNum=J,c.index=R}function x(){const z=c.newAttributes;for(let k=0,Q=z.length;k<Q;k++)z[k]=0}function y(z){E(z,0)}function E(z,k){const Q=c.newAttributes,R=c.enabledAttributes,V=c.attributeDivisors;Q[z]=1,R[z]===0&&(i.enableVertexAttribArray(z),R[z]=1),V[z]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,k),V[z]=k)}function S(){const z=c.newAttributes,k=c.enabledAttributes;for(let Q=0,R=k.length;Q<R;Q++)k[Q]!==z[Q]&&(i.disableVertexAttribArray(Q),k[Q]=0)}function C(z,k,Q,R,V,Y){n.isWebGL2===!0&&(Q===5124||Q===5125)?i.vertexAttribIPointer(z,k,Q,V,Y):i.vertexAttribPointer(z,k,Q,R,V,Y)}function v(z,k,Q,R){if(n.isWebGL2===!1&&(z.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=R.attributes,Y=Q.getAttributes(),J=k.defaultAttributeValues;for(const fe in Y){const B=Y[fe];if(B.location>=0){let K=V[fe];if(K===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),K!==void 0){const se=K.normalized,O=K.itemSize,pe=t.get(K);if(pe===void 0)continue;const $=pe.buffer,_e=pe.type,ve=pe.bytesPerElement;if(K.isInterleavedBufferAttribute){const Ee=K.data,Ie=Ee.stride,ze=K.offset;if(Ee.isInstancedInterleavedBuffer){for(let Xe=0;Xe<B.locationSize;Xe++)E(B.location+Xe,Ee.meshPerAttribute);z.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Xe=0;Xe<B.locationSize;Xe++)y(B.location+Xe);i.bindBuffer(34962,$);for(let Xe=0;Xe<B.locationSize;Xe++)C(B.location+Xe,O/B.locationSize,_e,se,Ie*ve,(ze+O/B.locationSize*Xe)*ve)}else{if(K.isInstancedBufferAttribute){for(let Ee=0;Ee<B.locationSize;Ee++)E(B.location+Ee,K.meshPerAttribute);z.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)y(B.location+Ee);i.bindBuffer(34962,$);for(let Ee=0;Ee<B.locationSize;Ee++)C(B.location+Ee,O/B.locationSize,_e,se,O*ve,O/B.locationSize*Ee*ve)}}else if(J!==void 0){const se=J[fe];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(B.location,se);break;case 3:i.vertexAttrib3fv(B.location,se);break;case 4:i.vertexAttrib4fv(B.location,se);break;default:i.vertexAttrib1fv(B.location,se)}}}}S()}function M(){G();for(const z in a){const k=a[z];for(const Q in k){const R=k[Q];for(const V in R)_(R[V].object),delete R[V];delete k[Q]}delete a[z]}}function A(z){if(a[z.id]===void 0)return;const k=a[z.id];for(const Q in k){const R=k[Q];for(const V in R)_(R[V].object),delete R[V];delete k[Q]}delete a[z.id]}function D(z){for(const k in a){const Q=a[k];if(Q[z.id]===void 0)continue;const R=Q[z.id];for(const V in R)_(R[V].object),delete R[V];delete Q[z.id]}}function G(){P(),u=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:y,disableUnusedAttributes:S}}function Xp(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function qp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),_=i.getParameter(34076),d=i.getParameter(34921),p=i.getParameter(36347),g=i.getParameter(36348),b=i.getParameter(36349),x=f>0,y=o||e.has("OES_texture_float"),E=x&&y,S=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:S}}function Yp(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new oi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const b=s?0:n,x=b*4;let y=g.clippingState||null;l.value=y,y=u(_,f,x,m);for(let E=0;E!==x;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=m;x!==d;++x,y+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Zp(i){let e=new WeakMap;function t(o,a){return a===mo?o.mapping=Yi:a===go&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===mo||a===go)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lh(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Nc extends Ic{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,Ua=[.125,.215,.35,.446,.526,.582],ci=20,no=new Nc,ka=new Ye;let io=null;const ai=(1+Math.sqrt(5))/2,Ii=1/ai,Ba=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ai,Ii),new I(0,ai,-Ii),new I(Ii,0,ai),new I(-Ii,0,ai),new I(ai,Ii,0),new I(-ai,Ii,0)];class Ga{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){io=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io),e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Rr,format:cn,encoding:Yn,depthBuffer:!1},r=Va(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(s)),this._blurMaterial=Kp(s,e,t)}return r}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,n,r){const a=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ka),u.toneMapping=xn,u.autoClear=!1;const m=new vs({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new le(new ht,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(ka),d=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;es(r,b*x,g>2?x:0,x,x),u.setRenderTarget(r),d&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Yi||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,no)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ba[(r-1)%Ba.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new le(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ci-1),d=s/_,p=isFinite(s)?1+Math.floor(u*d):ci;p>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const g=[];let b=0;for(let C=0;C<ci;++C){const v=C/d,M=Math.exp(-v*v/2);g.push(M),C===0?b+=M:C<p&&(b+=2*M)}for(let C=0;C<g.length;C++)g[C]=g[C]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const y=this._sizeLods[r],E=3*y*(r>x-Ni?r-x+Ni:0),S=4*(this._cubeSize-y);es(t,E,S,3*y,2*y),l.setRenderTarget(t),l.render(h,no)}}function Qp(i){const e=[],t=[],n=[];let r=i;const s=i-Ni+1+Ua.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ni?l=Ua[o-i+Ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,d=3,p=2,g=1,b=new Float32Array(d*_*m),x=new Float32Array(p*_*m),y=new Float32Array(g*_*m);for(let S=0;S<m;S++){const C=S%3*2/3-1,v=S>2?0:-1,M=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];b.set(M,d*_*S),x.set(f,p*_*S);const A=[S,S,S,S,S,S];y.set(A,g*_*S)}const E=new Ut;E.setAttribute("position",new bn(b,d)),E.setAttribute("uv",new bn(x,p)),E.setAttribute("faceIndex",new bn(y,g)),e.push(E),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Va(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Kp(i,e,t){const n=new Float32Array(ci),r=new I(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ha(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Wa(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===mo||l===go,u=l===Yi||l===Zi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ga(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Ga(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $p(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function em(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let x=0,y=b.length;x<y;x+=3){const E=b[x+0],S=b[x+1],C=b[x+2];f.push(E,S,S,C,C,E)}}else{const b=_.array;d=_.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const E=x+0,S=x+1,C=x+2;f.push(E,S,S,C,C,E)}}const p=new(Sc(f)?Pc:Lc)(f,1);p.version=d;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function tm(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let d,p;if(r)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function nm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function im(i,e){return i[0]-e[0]}function rm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sm(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let d=s.get(u);if(d===void 0||d.count!==_){let z=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();const b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let v=0;b===!0&&(v=1),x===!0&&(v=2),y===!0&&(v=3);let M=u.attributes.position.count*v,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*A*4*_),G=new Ac(D,M,A,_);G.type=hi,G.needsUpdate=!0;const P=v*4;for(let k=0;k<_;k++){const Q=E[k],R=S[k],V=C[k],Y=M*A*4*k;for(let J=0;J<Q.count;J++){const fe=J*P;b===!0&&(o.fromBufferAttribute(Q,J),D[Y+fe+0]=o.x,D[Y+fe+1]=o.y,D[Y+fe+2]=o.z,D[Y+fe+3]=0),x===!0&&(o.fromBufferAttribute(R,J),D[Y+fe+4]=o.x,D[Y+fe+5]=o.y,D[Y+fe+6]=o.z,D[Y+fe+7]=0),y===!0&&(o.fromBufferAttribute(V,J),D[Y+fe+8]=o.x,D[Y+fe+9]=o.y,D[Y+fe+10]=o.z,D[Y+fe+11]=V.itemSize===4?o.w:1)}}d={count:_,texture:G,size:new Ve(M,A)},s.set(u,d),u.addEventListener("dispose",z)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const g=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const m=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<m;x++){const y=_[x];y[0]=x,y[1]=f[x]}_.sort(rm);for(let x=0;x<8;x++)x<m&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(im);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const y=a[x],E=y[0],S=y[1];E!==Number.MAX_SAFE_INTEGER&&S?(d&&u.getAttribute("morphTarget"+x)!==d[E]&&u.setAttribute("morphTarget"+x,d[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),r[x]=S,g+=S):(d&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const b=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function om(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Oc=new Ht,Uc=new Ac,kc=new qf,Bc=new Fc,ja=[],Xa=[],qa=new Float32Array(16),Ya=new Float32Array(9),Za=new Float32Array(4);function sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bs(i,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Za.set(n),i.uniformMatrix2fv(this.addr,!1,Za),vt(t,n)}}function hm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ya.set(n),i.uniformMatrix3fv(this.addr,!1,Ya),vt(t,n)}}function dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;qa.set(n),i.uniformMatrix4fv(this.addr,!1,qa),vt(t,n)}}function pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Mm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Oc,r)}function wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kc,r)}function Sm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bc,r)}function Em(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Uc,r)}function Tm(i){switch(i){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return fm;case 35675:return hm;case 35676:return dm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return xm;case 36295:return bm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}function Am(i,e){i.uniform1fv(this.addr,e)}function Cm(i,e){const t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Lm(i,e){const t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Pm(i,e){const t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Dm(i,e){const t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rm(i,e){const t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Im(i,e){const t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fm(i,e){i.uniform1iv(this.addr,e)}function zm(i,e){i.uniform2iv(this.addr,e)}function Nm(i,e){i.uniform3iv(this.addr,e)}function Om(i,e){i.uniform4iv(this.addr,e)}function Um(i,e){i.uniform1uiv(this.addr,e)}function km(i,e){i.uniform2uiv(this.addr,e)}function Bm(i,e){i.uniform3uiv(this.addr,e)}function Gm(i,e){i.uniform4uiv(this.addr,e)}function Vm(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oc,s[o])}function Hm(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||kc,s[o])}function Wm(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bc,s[o])}function jm(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uc,s[o])}function Xm(i){switch(i){case 5126:return Am;case 35664:return Cm;case 35665:return Lm;case 35666:return Pm;case 35674:return Dm;case 35675:return Rm;case 35676:return Im;case 5124:case 35670:return Fm;case 35667:case 35671:return zm;case 35668:case 35672:return Nm;case 35669:case 35673:return Om;case 5125:return Um;case 36294:return km;case 36295:return Bm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return jm}}class qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Tm(t.type)}}class Ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Xm(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Qa(i,e){i.seq.push(e),i.map[e.id]=e}function Qm(i,e,t){const n=i.name,r=n.length;for(ro.lastIndex=0;;){const s=ro.exec(n),o=ro.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qa(t,c===void 0?new qm(a,i,e):new Ym(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Zm(a),Qa(t,h)),t=h}}}class ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Qm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Km=0;function Jm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $m(i){switch(i){case Yn:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Ja(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jm(i.getShaderSource(e),o)}else return r}function eg(i,e){const t=$m(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tg(i,e){let t;switch(e){case tf:t="Linear";break;case nf:t="Reinhard";break;case rf:t="OptimizedCineon";break;case vc:t="ACESFilmic";break;case sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ng(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function ig(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rg(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function br(i){return i!==""}function $a(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(sg,og)}function og(i,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yo(t)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(i){return i.replace(ag,lg)}function lg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function ug(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function hg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case $u:e="ENVMAP_BLENDING_MIX";break;case ef:e="ENVMAP_BLENDING_ADD";break}return e}function dg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cg(t),c=ug(t),u=fg(t),h=hg(t),f=dg(t),m=t.isWebGL2?"":ng(t),_=ig(s),d=r.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(br).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(br).join(`
`),g.length>0&&(g+=`
`)):(p=[nl(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),g=[m,nl(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==xn?tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,eg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=yo(o),o=$a(o,t),o=el(o,t),a=yo(a),a=$a(a,t),a=el(a,t),o=tl(o),a=tl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=b+p+o,y=b+g+a,E=Ka(r,35633,x),S=Ka(r,35632,y);if(r.attachShader(d,E),r.attachShader(d,S),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(d).trim(),A=r.getShaderInfoLog(E).trim(),D=r.getShaderInfoLog(S).trim();let G=!0,P=!0;if(r.getProgramParameter(d,35714)===!1){G=!1;const z=Ja(r,E,"vertex"),k=Ja(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+M+`
`+z+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||D==="")&&(P=!1);P&&(this.diagnostics={runnable:G,programLog:M,vertexShader:{log:A,prefix:p},fragmentShader:{log:D,prefix:g}})}r.deleteShader(E),r.deleteShader(S);let C;this.getUniforms=function(){return C===void 0&&(C=new ls(r,d)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=rg(r,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Km++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=S,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _g(e),t.set(e,n)),n}}class _g{constructor(e){this.id=mg++,this.code=e,this.usedTimes=0}}function vg(i,e,t,n,r,s,o){const a=new Po,l=new gg,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,M,A,D,G){const P=D.fog,z=G.geometry,k=v.isMeshStandardMaterial?D.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),R=!!Q&&Q.mapping===gs?Q.image.height:null,V=_[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,J=Y!==void 0?Y.length:0;let fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let B,K,se,O;if(V){const Ie=_n[V];B=Ie.vertexShader,K=Ie.fragmentShader}else B=v.vertexShader,K=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),O=l.getFragmentShaderID(v);const pe=i.getRenderTarget(),$=v.alphaTest>0,_e=v.clearcoat>0,ve=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:B,fragmentShader:K,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:O,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:f,outputEncoding:pe===null?i.outputEncoding:pe.isXRRenderTarget===!0?pe.texture.encoding:Yn,map:!!v.map,matcap:!!v.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:R,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Sf,tangentSpaceNormalMap:v.normalMapType===yc,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Je,clearcoat:_e,clearcoatMap:_e&&!!v.clearcoatMap,clearcoatRoughnessMap:_e&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!v.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!v.iridescenceMap,iridescenceThicknessMap:ve&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Bi,alphaMap:!!v.alphaMap,alphaTest:$,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!z.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:xn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Zt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)M.push(A),M.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(g(M,v),b(M,v),M.push(i.outputEncoding)),M.push(v.customProgramCacheKey),M.join()}function g(v,M){v.push(M.precision),v.push(M.outputEncoding),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.combine),v.push(M.vertexUvs),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function b(v,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),v.push(a.mask)}function x(v){const M=_[v.type];let A;if(M){const D=_n[M];A=Rc.clone(D.uniforms)}else A=v.uniforms;return A}function y(v,M){let A;for(let D=0,G=c.length;D<G;D++){const P=c[D];if(P.cacheKey===M){A=P,++A.usedTimes;break}}return A===void 0&&(A=new pg(i,M,v,s),c.push(A)),A}function E(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:C}}function xg(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function il(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,_,d,p){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:d,group:p},i[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=d,g.group=p),e++,g}function a(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||bg),n.length>1&&n.sort(f||il),r.length>1&&r.sort(f||il)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function yg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new rl,i.set(n,[o])):r>=s.length?(o=new rl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ye};break;case"SpotLight":t={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function wg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sg=0;function Eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tg(i,e){const t=new Mg,n=wg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new ut,a=new ut;function l(u,h){let f=0,m=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let d=0,p=0,g=0,b=0,x=0,y=0,E=0,S=0,C=0,v=0;u.sort(Eg);const M=h===!0?Math.PI:1;for(let D=0,G=u.length;D<G;D++){const P=u[D],z=P.color,k=P.intensity,Q=P.distance,R=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*k*M,m+=z.g*k*M,_+=z.b*k*M;else if(P.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],k);else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const Y=P.shadow,J=n.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.directionalShadow[d]=J,r.directionalShadowMap[d]=R,r.directionalShadowMatrix[d]=P.shadow.matrix,y++}r.directional[d]=V,d++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(k*M),V.distance=Q,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[g]=V;const Y=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&v++),r.spotLightMatrix[g]=Y.matrix,P.castShadow){const J=n.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.spotShadow[g]=J,r.spotShadowMap[g]=R,S++}g++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[b]=V,b++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*M),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,J=n.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=R,r.pointShadowMatrix[p]=P.shadow.matrix,E++}r.point[p]=V,p++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(k*M),V.groundColor.copy(P.groundColor).multiplyScalar(k*M),r.hemi[x]=V,x++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==d||A.pointLength!==p||A.spotLength!==g||A.rectAreaLength!==b||A.hemiLength!==x||A.numDirectionalShadows!==y||A.numPointShadows!==E||A.numSpotShadows!==S||A.numSpotMaps!==C)&&(r.directional.length=d,r.spot.length=g,r.rectArea.length=b,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=S+C-v,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=v,A.directionalLength=d,A.pointLength=p,A.spotLength=g,A.rectAreaLength=b,A.hemiLength=x,A.numDirectionalShadows=y,A.numPointShadows=E,A.numSpotShadows=S,A.numSpotMaps=C,r.version=Sg++)}function c(u,h){let f=0,m=0,_=0,d=0,p=0;const g=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const y=u[b];if(y.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(y.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),_++}else if(y.isRectAreaLight){const E=r.rectArea[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function sl(i,e){const t=new Tg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ag(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new sl(i,e),t.set(s,[l])):o>=a.length?(l=new sl(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cg extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lg extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rg(i,e,t){let n=new Do;const r=new Ve,s=new Ve,o=new wt,a=new Cg({depthPacking:wf}),l=new Lg,c={},u=t.maxTextureSize,h={[qn]:Zt,[Zt]:qn,[Rn]:Rn},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Pg,fragmentShader:Dg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ut;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new le(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc,this.render=function(y,E,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const C=i.getRenderTarget(),v=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Xn),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let D=0,G=y.length;D<G;D++){const P=y[D],z=P.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const k=z.getFrameExtents();if(r.multiply(k),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,z.mapSize.y=s.y)),z.map===null){const R=this.type!==vr?{minFilter:It,magFilter:It}:{};z.map=new Zn(r.x,r.y,R),z.map.texture.name=P.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const Q=z.getViewportCount();for(let R=0;R<Q;R++){const V=z.getViewport(R);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),A.viewport(o),z.updateMatrices(P,R),n=z.getFrustum(),x(E,S,z.camera,P,this.type)}z.isPointLightShadow!==!0&&this.type===vr&&g(z,S),z.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(C,v,M)};function g(y,E){const S=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zn(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(E,null,S,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(E,null,S,m,d,null)}function b(y,E,S,C,v,M){let A=null;const D=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=A.uuid,P=E.uuid;let z=c[G];z===void 0&&(z={},c[G]=z);let k=z[P];k===void 0&&(k=A.clone(),z[P]=k),A=k}return A.visible=E.visible,A.wireframe=E.wireframe,M===vr?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:h[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(S.matrixWorld),A.nearDistance=C,A.farDistance=v),A}function x(y,E,S,C,v){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===vr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const D=e.update(y),G=y.material;if(Array.isArray(G)){const P=D.groups;for(let z=0,k=P.length;z<k;z++){const Q=P[z],R=G[Q.materialIndex];if(R&&R.visible){const V=b(y,R,C,S.near,S.far,v);i.renderBufferDirect(S,null,D,V,y,Q)}}}else if(G.visible){const P=b(y,G,C,S.near,S.far,v);i.renderBufferDirect(S,null,D,P,y,null)}}const A=y.children;for(let D=0,G=A.length;D<G;D++)x(A[D],E,S,C,v)}}function Ig(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const j=new wt;let ee=null;const ue=new wt(0,0,0,0);return{setMask:function(me){ee!==me&&!F&&(i.colorMask(me,me,me,me),ee=me)},setLocked:function(me){F=me},setClear:function(me,$e,bt,Lt,hn){hn===!0&&(me*=Lt,$e*=Lt,bt*=Lt),j.set(me,$e,bt,Lt),ue.equals(j)===!1&&(i.clearColor(me,$e,bt,Lt),ue.copy(j))},reset:function(){F=!1,ee=null,ue.set(-1,0,0,0)}}}function s(){let F=!1,j=null,ee=null,ue=null;return{setTest:function(me){me?$(2929):_e(2929)},setMask:function(me){j!==me&&!F&&(i.depthMask(me),j=me)},setFunc:function(me){if(ee!==me){switch(me){case Xu:i.depthFunc(512);break;case qu:i.depthFunc(519);break;case Yu:i.depthFunc(513);break;case po:i.depthFunc(515);break;case Zu:i.depthFunc(514);break;case Qu:i.depthFunc(518);break;case Ku:i.depthFunc(516);break;case Ju:i.depthFunc(517);break;default:i.depthFunc(515)}ee=me}},setLocked:function(me){F=me},setClear:function(me){ue!==me&&(i.clearDepth(me),ue=me)},reset:function(){F=!1,j=null,ee=null,ue=null}}}function o(){let F=!1,j=null,ee=null,ue=null,me=null,$e=null,bt=null,Lt=null,hn=null;return{setTest:function(ft){F||(ft?$(2960):_e(2960))},setMask:function(ft){j!==ft&&!F&&(i.stencilMask(ft),j=ft)},setFunc:function(ft,Kt,dn){(ee!==ft||ue!==Kt||me!==dn)&&(i.stencilFunc(ft,Kt,dn),ee=ft,ue=Kt,me=dn)},setOp:function(ft,Kt,dn){($e!==ft||bt!==Kt||Lt!==dn)&&(i.stencilOp(ft,Kt,dn),$e=ft,bt=Kt,Lt=dn)},setLocked:function(ft){F=ft},setClear:function(ft){hn!==ft&&(i.clearStencil(ft),hn=ft)},reset:function(){F=!1,j=null,ee=null,ue=null,me=null,$e=null,bt=null,Lt=null,hn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,d=[],p=null,g=!1,b=null,x=null,y=null,E=null,S=null,C=null,v=null,M=!1,A=null,D=null,G=null,P=null,z=null;const k=i.getParameter(35661);let Q=!1,R=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(V)[1]),Q=R>=1):V.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Q=R>=2);let Y=null,J={};const fe=i.getParameter(3088),B=i.getParameter(2978),K=new wt().fromArray(fe),se=new wt().fromArray(B);function O(F,j,ee){const ue=new Uint8Array(4),me=i.createTexture();i.bindTexture(F,me),i.texParameteri(F,10241,9728),i.texParameteri(F,10240,9728);for(let $e=0;$e<ee;$e++)i.texImage2D(j+$e,0,6408,1,1,0,6408,5121,ue);return me}const pe={};pe[3553]=O(3553,3553,1),pe[34067]=O(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(2929),l.setFunc(po),kt(!1),Ct(Yo),$(2884),At(Xn);function $(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function _e(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function ve(F,j){return m[F]!==j?(i.bindFramebuffer(F,j),m[F]=j,n&&(F===36009&&(m[36160]=j),F===36160&&(m[36009]=j)),!0):!1}function Ee(F,j){let ee=d,ue=!1;if(F)if(ee=_.get(j),ee===void 0&&(ee=[],_.set(j,ee)),F.isWebGLMultipleRenderTargets){const me=F.texture;if(ee.length!==me.length||ee[0]!==36064){for(let $e=0,bt=me.length;$e<bt;$e++)ee[$e]=36064+$e;ee.length=me.length,ue=!0}}else ee[0]!==36064&&(ee[0]=36064,ue=!0);else ee[0]!==1029&&(ee[0]=1029,ue=!0);ue&&(t.isWebGL2?i.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ie(F){return p!==F?(i.useProgram(F),p=F,!0):!1}const ze={[zi]:32774,[zu]:32778,[Nu]:32779};if(n)ze[Jo]=32775,ze[$o]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(ze[Jo]=F.MIN_EXT,ze[$o]=F.MAX_EXT)}const Xe={[Ou]:0,[Uu]:1,[ku]:768,[mc]:770,[ju]:776,[Hu]:774,[Gu]:772,[Bu]:769,[gc]:771,[Wu]:775,[Vu]:773};function At(F,j,ee,ue,me,$e,bt,Lt){if(F===Xn){g===!0&&(_e(3042),g=!1);return}if(g===!1&&($(3042),g=!0),F!==Fu){if(F!==b||Lt!==M){if((x!==zi||S!==zi)&&(i.blendEquation(32774),x=zi,S=zi),Lt)switch(F){case Bi:i.blendFuncSeparate(1,771,1,771);break;case Zo:i.blendFunc(1,1);break;case Qo:i.blendFuncSeparate(0,769,0,1);break;case Ko:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bi:i.blendFuncSeparate(770,771,1,771);break;case Zo:i.blendFunc(770,1);break;case Qo:i.blendFuncSeparate(0,769,0,1);break;case Ko:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,E=null,C=null,v=null,b=F,M=Lt}return}me=me||j,$e=$e||ee,bt=bt||ue,(j!==x||me!==S)&&(i.blendEquationSeparate(ze[j],ze[me]),x=j,S=me),(ee!==y||ue!==E||$e!==C||bt!==v)&&(i.blendFuncSeparate(Xe[ee],Xe[ue],Xe[$e],Xe[bt]),y=ee,E=ue,C=$e,v=bt),b=F,M=!1}function tn(F,j){F.side===Rn?_e(2884):$(2884);let ee=F.side===Zt;j&&(ee=!ee),kt(ee),F.blending===Bi&&F.transparent===!1?At(Xn):At(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const ue=F.stencilWrite;c.setTest(ue),ue&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?$(32926):_e(32926)}function kt(F){A!==F&&(F?i.frontFace(2304):i.frontFace(2305),A=F)}function Ct(F){F!==Ru?($(2884),F!==D&&(F===Yo?i.cullFace(1029):F===Iu?i.cullFace(1028):i.cullFace(1032))):_e(2884),D=F}function ct(F){F!==G&&(Q&&i.lineWidth(F),G=F)}function ot(F,j,ee){F?($(32823),(P!==j||z!==ee)&&(i.polygonOffset(j,ee),P=j,z=ee)):_e(32823)}function fn(F){F?$(3089):_e(3089)}function nn(F){F===void 0&&(F=33984+k-1),Y!==F&&(i.activeTexture(F),Y=F)}function L(F,j,ee){ee===void 0&&(Y===null?ee=33984+k-1:ee=Y);let ue=J[ee];ue===void 0&&(ue={type:void 0,texture:void 0},J[ee]=ue),(ue.type!==F||ue.texture!==j)&&(Y!==ee&&(i.activeTexture(ee),Y=ee),i.bindTexture(F,j||pe[F]),ue.type=F,ue.texture=j)}function w(){const F=J[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(F){K.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function ye(F){se.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),se.copy(F))}function He(F,j){let ee=h.get(j);ee===void 0&&(ee=new WeakMap,h.set(j,ee));let ue=ee.get(F);ue===void 0&&(ue=i.getUniformBlockIndex(j,F.name),ee.set(F,ue))}function at(F,j){const ue=h.get(j).get(F);u.get(j)!==ue&&(i.uniformBlockBinding(j,ue,F.__bindingPointIndex),u.set(j,ue))}function xt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Y=null,J={},m={},_=new WeakMap,d=[],p=null,g=!1,b=null,x=null,y=null,E=null,S=null,C=null,v=null,M=!1,A=null,D=null,G=null,P=null,z=null,K.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$,disable:_e,bindFramebuffer:ve,drawBuffers:Ee,useProgram:Ie,setBlending:At,setMaterial:tn,setFlipSided:kt,setCullFace:Ct,setLineWidth:ct,setPolygonOffset:ot,setScissorTest:fn,activeTexture:nn,bindTexture:L,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:ie,texImage2D:xe,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:at,texStorage2D:Z,texStorage3D:Te,texSubImage2D:re,texSubImage3D:ce,compressedTexSubImage2D:Me,compressedTexSubImage3D:he,scissor:Se,viewport:ye,reset:xt}}function Fg(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,w){return g?new OffscreenCanvas(L,w):Fr("canvas")}function x(L,w,X,ie){let re=1;if((L.width>ie||L.height>ie)&&(re=ie/Math.max(L.width,L.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ce=w?wc:Math.floor,Me=ce(re*L.width),he=ce(re*L.height);d===void 0&&(d=b(Me,he));const Z=X?b(Me,he):d;return Z.width=Me,Z.height=he,Z.getContext("2d").drawImage(L,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Me+"x"+he+")."),Z}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return bo(L.width)&&bo(L.height)}function E(L){return a?!1:L.wrapS!==ln||L.wrapT!==ln||L.minFilter!==It&&L.minFilter!==$t}function S(L,w){return L.generateMipmaps&&w&&L.minFilter!==It&&L.minFilter!==$t}function C(L){i.generateMipmap(L)}function v(L,w,X,ie,re=!1){if(a===!1)return w;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=w;return w===6403&&(X===5126&&(ce=33326),X===5131&&(ce=33325),X===5121&&(ce=33321)),w===33319&&(X===5126&&(ce=33328),X===5131&&(ce=33327),X===5121&&(ce=33323)),w===6408&&(X===5126&&(ce=34836),X===5131&&(ce=34842),X===5121&&(ce=ie===Je&&re===!1?35907:32856),X===32819&&(ce=32854),X===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function M(L,w,X){return S(L,X)===!0||L.isFramebufferTexture&&L.minFilter!==It&&L.minFilter!==$t?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function A(L){return L===It||L===ea||L===Ps?9728:9729}function D(L){const w=L.target;w.removeEventListener("dispose",D),P(w),w.isVideoTexture&&_.delete(w)}function G(L){const w=L.target;w.removeEventListener("dispose",G),k(w)}function P(L){const w=n.get(L);if(w.__webglInit===void 0)return;const X=L.source,ie=p.get(X);if(ie){const re=ie[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&z(L),Object.keys(ie).length===0&&p.delete(X)}n.remove(L)}function z(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const X=L.source,ie=p.get(X);delete ie[w.__cacheKey],o.memory.textures--}function k(L){const w=L.texture,X=n.get(L),ie=n.get(w);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)i.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(i.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let re=0,ce=w.length;re<ce;re++){const Me=n.get(w[re]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(L)}let Q=0;function R(){Q=0}function V(){const L=Q;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Q+=1,L}function Y(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.encoding),w.join()}function J(L,w){const X=n.get(L);if(L.isVideoTexture&&fn(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(X,L,w);return}}t.bindTexture(3553,X.__webglTexture,33984+w)}function fe(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){_e(X,L,w);return}t.bindTexture(35866,X.__webglTexture,33984+w)}function B(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){_e(X,L,w);return}t.bindTexture(32879,X.__webglTexture,33984+w)}function K(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ve(X,L,w);return}t.bindTexture(34067,X.__webglTexture,33984+w)}const se={[_o]:10497,[ln]:33071,[vo]:33648},O={[It]:9728,[ea]:9984,[Ps]:9986,[$t]:9729,[of]:9985,[Dr]:9987};function pe(L,w,X){if(X?(i.texParameteri(L,10242,se[w.wrapS]),i.texParameteri(L,10243,se[w.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,se[w.wrapR]),i.texParameteri(L,10240,O[w.magFilter]),i.texParameteri(L,10241,O[w.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(w.wrapS!==ln||w.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,A(w.magFilter)),i.texParameteri(L,10241,A(w.minFilter)),w.minFilter!==It&&w.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===It||w.minFilter!==Ps&&w.minFilter!==Dr||w.type===hi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Rr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function $(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",D));const ie=w.source;let re=p.get(ie);re===void 0&&(re={},p.set(ie,re));const ce=Y(w);if(ce!==L.__cacheKey){re[ce]===void 0&&(re[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[ce].usedTimes++;const Me=re[L.__cacheKey];Me!==void 0&&(re[L.__cacheKey].usedTimes--,Me.usedTimes===0&&z(w)),L.__cacheKey=ce,L.__webglTexture=re[ce].texture}return X}function _e(L,w,X){let ie=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=35866),w.isData3DTexture&&(ie=32879);const re=$(L,w),ce=w.source;t.bindTexture(ie,L.__webglTexture,33984+X);const Me=n.get(ce);if(ce.version!==Me.__version||re===!0){t.activeTexture(33984+X),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const he=E(w)&&y(w.image)===!1;let Z=x(w.image,he,!1,u);Z=nn(w,Z);const Te=y(Z)||a,xe=s.convert(w.format,w.encoding);let Ae=s.convert(w.type),Se=v(w.internalFormat,xe,Ae,w.encoding,w.isVideoTexture);pe(ie,w,Te);let ye;const He=w.mipmaps,at=a&&w.isVideoTexture!==!0,xt=Me.__version===void 0||re===!0,F=M(w,Z,Te);if(w.isDepthTexture)Se=6402,a?w.type===hi?Se=36012:w.type===fi?Se=33190:w.type===Gi?Se=35056:Se=33189:w.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===di&&Se===6402&&w.type!==bc&&w.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=fi,Ae=s.convert(w.type)),w.format===Qi&&Se===6402&&(Se=34041,w.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Gi,Ae=s.convert(w.type))),xt&&(at?t.texStorage2D(3553,1,Se,Z.width,Z.height):t.texImage2D(3553,0,Se,Z.width,Z.height,0,xe,Ae,null));else if(w.isDataTexture)if(He.length>0&&Te){at&&xt&&t.texStorage2D(3553,F,Se,He[0].width,He[0].height);for(let j=0,ee=He.length;j<ee;j++)ye=He[j],at?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,xe,Ae,ye.data):t.texImage2D(3553,j,Se,ye.width,ye.height,0,xe,Ae,ye.data);w.generateMipmaps=!1}else at?(xt&&t.texStorage2D(3553,F,Se,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,xe,Ae,Z.data)):t.texImage2D(3553,0,Se,Z.width,Z.height,0,xe,Ae,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&xt&&t.texStorage3D(35866,F,Se,He[0].width,He[0].height,Z.depth);for(let j=0,ee=He.length;j<ee;j++)ye=He[j],w.format!==cn?xe!==null?at?t.compressedTexSubImage3D(35866,j,0,0,0,ye.width,ye.height,Z.depth,xe,ye.data,0,0):t.compressedTexImage3D(35866,j,Se,ye.width,ye.height,Z.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(35866,j,0,0,0,ye.width,ye.height,Z.depth,xe,Ae,ye.data):t.texImage3D(35866,j,Se,ye.width,ye.height,Z.depth,0,xe,Ae,ye.data)}else{at&&xt&&t.texStorage2D(3553,F,Se,He[0].width,He[0].height);for(let j=0,ee=He.length;j<ee;j++)ye=He[j],w.format!==cn?xe!==null?at?t.compressedTexSubImage2D(3553,j,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(3553,j,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,xe,Ae,ye.data):t.texImage2D(3553,j,Se,ye.width,ye.height,0,xe,Ae,ye.data)}else if(w.isDataArrayTexture)at?(xt&&t.texStorage3D(35866,F,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,xe,Ae,Z.data)):t.texImage3D(35866,0,Se,Z.width,Z.height,Z.depth,0,xe,Ae,Z.data);else if(w.isData3DTexture)at?(xt&&t.texStorage3D(32879,F,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,xe,Ae,Z.data)):t.texImage3D(32879,0,Se,Z.width,Z.height,Z.depth,0,xe,Ae,Z.data);else if(w.isFramebufferTexture){if(xt)if(at)t.texStorage2D(3553,F,Se,Z.width,Z.height);else{let j=Z.width,ee=Z.height;for(let ue=0;ue<F;ue++)t.texImage2D(3553,ue,Se,j,ee,0,xe,Ae,null),j>>=1,ee>>=1}}else if(He.length>0&&Te){at&&xt&&t.texStorage2D(3553,F,Se,He[0].width,He[0].height);for(let j=0,ee=He.length;j<ee;j++)ye=He[j],at?t.texSubImage2D(3553,j,0,0,xe,Ae,ye):t.texImage2D(3553,j,Se,xe,Ae,ye);w.generateMipmaps=!1}else at?(xt&&t.texStorage2D(3553,F,Se,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,xe,Ae,Z)):t.texImage2D(3553,0,Se,xe,Ae,Z);S(w,Te)&&C(ie),Me.__version=ce.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ve(L,w,X){if(w.image.length!==6)return;const ie=$(L,w),re=w.source;t.bindTexture(34067,L.__webglTexture,33984+X);const ce=n.get(re);if(re.version!==ce.__version||ie===!0){t.activeTexture(33984+X),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let j=0;j<6;j++)!Me&&!he?Z[j]=x(w.image[j],!1,!0,c):Z[j]=he?w.image[j].image:w.image[j],Z[j]=nn(w,Z[j]);const Te=Z[0],xe=y(Te)||a,Ae=s.convert(w.format,w.encoding),Se=s.convert(w.type),ye=v(w.internalFormat,Ae,Se,w.encoding),He=a&&w.isVideoTexture!==!0,at=ce.__version===void 0||ie===!0;let xt=M(w,Te,xe);pe(34067,w,xe);let F;if(Me){He&&at&&t.texStorage2D(34067,xt,ye,Te.width,Te.height);for(let j=0;j<6;j++){F=Z[j].mipmaps;for(let ee=0;ee<F.length;ee++){const ue=F[ee];w.format!==cn?Ae!==null?He?t.compressedTexSubImage2D(34069+j,ee,0,0,ue.width,ue.height,Ae,ue.data):t.compressedTexImage2D(34069+j,ee,ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+j,ee,0,0,ue.width,ue.height,Ae,Se,ue.data):t.texImage2D(34069+j,ee,ye,ue.width,ue.height,0,Ae,Se,ue.data)}}}else{F=w.mipmaps,He&&at&&(F.length>0&&xt++,t.texStorage2D(34067,xt,ye,Z[0].width,Z[0].height));for(let j=0;j<6;j++)if(he){He?t.texSubImage2D(34069+j,0,0,0,Z[j].width,Z[j].height,Ae,Se,Z[j].data):t.texImage2D(34069+j,0,ye,Z[j].width,Z[j].height,0,Ae,Se,Z[j].data);for(let ee=0;ee<F.length;ee++){const me=F[ee].image[j].image;He?t.texSubImage2D(34069+j,ee+1,0,0,me.width,me.height,Ae,Se,me.data):t.texImage2D(34069+j,ee+1,ye,me.width,me.height,0,Ae,Se,me.data)}}else{He?t.texSubImage2D(34069+j,0,0,0,Ae,Se,Z[j]):t.texImage2D(34069+j,0,ye,Ae,Se,Z[j]);for(let ee=0;ee<F.length;ee++){const ue=F[ee];He?t.texSubImage2D(34069+j,ee+1,0,0,Ae,Se,ue.image[j]):t.texImage2D(34069+j,ee+1,ye,Ae,Se,ue.image[j])}}}S(w,xe)&&C(34067),ce.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ee(L,w,X,ie,re){const ce=s.convert(X.format,X.encoding),Me=s.convert(X.type),he=v(X.internalFormat,ce,Me,X.encoding);n.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,he,w.width,w.height,w.depth,0,ce,Me,null):t.texImage2D(re,0,he,w.width,w.height,0,ce,Me,null)),t.bindFramebuffer(36160,L),ot(w)?f.framebufferTexture2DMultisampleEXT(36160,ie,re,n.get(X).__webglTexture,0,ct(w)):(re===3553||re>=34069&&re<=34074)&&i.framebufferTexture2D(36160,ie,re,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(L,w,X){if(i.bindRenderbuffer(36161,L),w.depthBuffer&&!w.stencilBuffer){let ie=33189;if(X||ot(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===hi?ie=36012:re.type===fi&&(ie=33190));const ce=ct(w);ot(w)?f.renderbufferStorageMultisampleEXT(36161,ce,ie,w.width,w.height):i.renderbufferStorageMultisample(36161,ce,ie,w.width,w.height)}else i.renderbufferStorage(36161,ie,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(w.depthBuffer&&w.stencilBuffer){const ie=ct(w);X&&ot(w)===!1?i.renderbufferStorageMultisample(36161,ie,35056,w.width,w.height):ot(w)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ie.length;re++){const ce=ie[re],Me=s.convert(ce.format,ce.encoding),he=s.convert(ce.type),Z=v(ce.internalFormat,Me,he,ce.encoding),Te=ct(w);X&&ot(w)===!1?i.renderbufferStorageMultisample(36161,Te,Z,w.width,w.height):ot(w)?f.renderbufferStorageMultisampleEXT(36161,Te,Z,w.width,w.height):i.renderbufferStorage(36161,Z,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function ze(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const ie=n.get(w.depthTexture).__webglTexture,re=ct(w);if(w.depthTexture.format===di)ot(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,re):i.framebufferTexture2D(36160,36096,3553,ie,0);else if(w.depthTexture.format===Qi)ot(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,re):i.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const w=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ze(w.__webglFramebuffer,L)}else if(X){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ie(w.__webglDepthbuffer[ie],L,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Ie(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function At(L,w,X){const ie=n.get(L);w!==void 0&&Ee(ie.__webglFramebuffer,L,L.texture,36064,3553),X!==void 0&&Xe(L)}function tn(L){const w=L.texture,X=n.get(L),ie=n.get(w);L.addEventListener("dispose",G),L.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=w.version,o.memory.textures++);const re=L.isWebGLCubeRenderTarget===!0,ce=L.isWebGLMultipleRenderTargets===!0,Me=y(L)||a;if(re){X.__webglFramebuffer=[];for(let he=0;he<6;he++)X.__webglFramebuffer[he]=i.createFramebuffer()}else{if(X.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const he=L.texture;for(let Z=0,Te=he.length;Z<Te;Z++){const xe=n.get(he[Z]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&ot(L)===!1){const he=ce?w:[w];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let Z=0;Z<he.length;Z++){const Te=he[Z];X.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(36161,X.__webglColorRenderbuffer[Z]);const xe=s.convert(Te.format,Te.encoding),Ae=s.convert(Te.type),Se=v(Te.internalFormat,xe,Ae,Te.encoding,L.isXRRenderTarget===!0),ye=ct(L);i.renderbufferStorageMultisample(36161,ye,Se,L.width,L.height),i.framebufferRenderbuffer(36160,36064+Z,36161,X.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ie.__webglTexture),pe(34067,w,Me);for(let he=0;he<6;he++)Ee(X.__webglFramebuffer[he],L,w,36064,34069+he);S(w,Me)&&C(34067),t.unbindTexture()}else if(ce){const he=L.texture;for(let Z=0,Te=he.length;Z<Te;Z++){const xe=he[Z],Ae=n.get(xe);t.bindTexture(3553,Ae.__webglTexture),pe(3553,xe,Me),Ee(X.__webglFramebuffer,L,xe,36064+Z,3553),S(xe,Me)&&C(3553)}t.unbindTexture()}else{let he=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?he=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),pe(he,w,Me),Ee(X.__webglFramebuffer,L,w,36064,he),S(w,Me)&&C(he),t.unbindTexture()}L.depthBuffer&&Xe(L)}function kt(L){const w=y(L)||a,X=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ie=0,re=X.length;ie<re;ie++){const ce=X[ie];if(S(ce,w)){const Me=L.isWebGLCubeRenderTarget?34067:3553,he=n.get(ce).__webglTexture;t.bindTexture(Me,he),C(Me),t.unbindTexture()}}}function Ct(L){if(a&&L.samples>0&&ot(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],X=L.width,ie=L.height;let re=16384;const ce=[],Me=L.stencilBuffer?33306:36096,he=n.get(L),Z=L.isWebGLMultipleRenderTargets===!0;if(Z)for(let Te=0;Te<w.length;Te++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){ce.push(36064+Te),L.depthBuffer&&ce.push(Me);const xe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(xe===!1&&(L.depthBuffer&&(re|=256),L.stencilBuffer&&(re|=1024)),Z&&i.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[Te]),xe===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),Z){const Ae=n.get(w[Te]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ae,0)}i.blitFramebuffer(0,0,X,ie,0,0,X,ie,re,9728),m&&i.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let Te=0;Te<w.length;Te++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Te,36161,he.__webglColorRenderbuffer[Te]);const xe=n.get(w[Te]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Te,3553,xe,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function ct(L){return Math.min(h,L.samples)}function ot(L){const w=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function fn(L){const w=o.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function nn(L,w){const X=L.encoding,ie=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===xo||X!==Yn&&(X===Je?a===!1?e.has("EXT_sRGB")===!0&&ie===cn?(L.format=xo,L.minFilter=$t,L.generateMipmaps=!1):w=Ec.sRGBToLinear(w):(ie!==cn||re!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),w}this.allocateTextureUnit=V,this.resetTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=fe,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=At,this.setupRenderTarget=tn,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ot}function zg(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===gi)return 5121;if(s===uf)return 32819;if(s===ff)return 32820;if(s===af)return 5120;if(s===lf)return 5122;if(s===bc)return 5123;if(s===cf)return 5124;if(s===fi)return 5125;if(s===hi)return 5126;if(s===Rr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hf)return 6406;if(s===cn)return 6408;if(s===df)return 6409;if(s===pf)return 6410;if(s===di)return 6402;if(s===Qi)return 34041;if(s===xo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===mf)return 6403;if(s===gf)return 36244;if(s===_f)return 33319;if(s===vf)return 33320;if(s===xf)return 36249;if(s===Ds||s===Rs||s===Is||s===Fs)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ds)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ds)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ta||s===na||s===ia||s===ra)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ta)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===na)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ra)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sa||s===oa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sa)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===oa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===aa||s===la||s===ca||s===ua||s===fa||s===ha||s===da||s===pa||s===ma||s===ga||s===_a||s===va||s===xa||s===ba)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===aa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===la)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ca)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ua)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ha)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===da)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ma)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ga)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_a)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===va)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ba)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zs)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yf||s===ya||s===Ma||s===wa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===zs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ya)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Ng extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Og={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),g=this._getHandJoint(c,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ug extends Ht{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:di,u!==di&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===di&&(n=fi),n===void 0&&u===Qi&&(n=Gi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1}}class kg extends nr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const d=t.getContextAttributes();let p=null,g=null;const b=[],x=[],y=new Set,E=new Map,S=new Yt;S.layers.enable(1),S.viewport=new wt;const C=new Yt;C.layers.enable(2),C.viewport=new wt;const v=[S,C],M=new Ng;M.layers.enable(1),M.layers.enable(2);let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=b[B];return K===void 0&&(K=new so,b[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=b[B];return K===void 0&&(K=new so,b[B]=K),K.getGripSpace()},this.getHand=function(B){let K=b[B];return K===void 0&&(K=new so,b[B]=K),K.getHandSpace()};function G(B){const K=x.indexOf(B.inputSource);if(K===-1)return;const se=b[K];se!==void 0&&se.dispatchEvent({type:B.type,data:B.inputSource})}function P(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",z);for(let B=0;B<b.length;B++){const K=x[B];K!==null&&(x[B]=null,b[B].disconnect(K))}A=null,D=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,g=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",P),r.addEventListener("inputsourceschange",z),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),g=new Zn(m.framebufferWidth,m.framebufferHeight,{format:cn,type:gi,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let K=null,se=null,O=null;d.depth&&(O=d.stencil?35056:33190,K=d.stencil?Qi:di,se=d.stencil?Gi:fi);const pe={colorFormat:32856,depthFormat:O,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),g=new Zn(f.textureWidth,f.textureHeight,{format:cn,type:gi,depthTexture:new Ug(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const $=e.properties.get(g);$.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(B){for(let K=0;K<B.removed.length;K++){const se=B.removed[K],O=x.indexOf(se);O>=0&&(x[O]=null,b[O].disconnect(se))}for(let K=0;K<B.added.length;K++){const se=B.added[K];let O=x.indexOf(se);if(O===-1){for(let $=0;$<b.length;$++)if($>=x.length){x.push(se),O=$;break}else if(x[$]===null){x[$]=se,O=$;break}if(O===-1)break}const pe=b[O];pe&&pe.connect(se)}}const k=new I,Q=new I;function R(B,K,se){k.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(se.matrixWorld);const O=k.distanceTo(Q),pe=K.projectionMatrix.elements,$=se.projectionMatrix.elements,_e=pe[14]/(pe[10]-1),ve=pe[14]/(pe[10]+1),Ee=(pe[9]+1)/pe[5],Ie=(pe[9]-1)/pe[5],ze=(pe[8]-1)/pe[0],Xe=($[8]+1)/$[0],At=_e*ze,tn=_e*Xe,kt=O/(-ze+Xe),Ct=kt*-ze;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ct),B.translateZ(kt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ct=_e+kt,ot=ve+kt,fn=At-Ct,nn=tn+(O-Ct),L=Ee*ve/ot*ct,w=Ie*ve/ot*ct;B.projectionMatrix.makePerspective(fn,nn,L,w,ct,ot)}function V(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.near=C.near=S.near=B.near,M.far=C.far=S.far=B.far,(A!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,D=M.far);const K=B.parent,se=M.cameras;V(M,K);for(let pe=0;pe<se.length;pe++)V(se[pe],K);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),B.matrix.copy(M.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const O=B.children;for(let pe=0,$=O.length;pe<$;pe++)O[pe].updateMatrixWorld(!0);se.length===2?R(M,S,C):M.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return y};let Y=null;function J(B,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let O=!1;se.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let pe=0;pe<se.length;pe++){const $=se[pe];let _e=null;if(m!==null)_e=m.getViewport($);else{const Ee=h.getViewSubImage(f,$);_e=Ee.viewport,pe===0&&(e.setRenderTargetTextures(g,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(g))}let ve=v[pe];ve===void 0&&(ve=new Yt,ve.layers.enable(pe),ve.viewport=new wt,v[pe]=ve),ve.matrix.fromArray($.transform.matrix),ve.projectionMatrix.fromArray($.projectionMatrix),ve.viewport.set(_e.x,_e.y,_e.width,_e.height),pe===0&&M.matrix.copy(ve.matrix),O===!0&&M.cameras.push(ve)}}for(let se=0;se<b.length;se++){const O=x[se],pe=b[se];O!==null&&pe!==void 0&&pe.update(O,K,c||o)}if(Y&&Y(B,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let se=null;for(const O of y)K.detectedPlanes.has(O)||(se===null&&(se=[]),se.push(O));if(se!==null)for(const O of se)y.delete(O),E.delete(O),n.dispatchEvent({type:"planeremoved",data:O});for(const O of K.detectedPlanes)if(!y.has(O))y.add(O),E.set(O,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:O});else{const pe=E.get(O);O.lastChangedTime>pe&&(E.set(O,O.lastChangedTime),n.dispatchEvent({type:"planechanged",data:O}))}}_=null}const fe=new zc;fe.setAnimationLoop(J),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}}function Bg(i,e){function t(d,p){p.color.getRGB(d.fogColor.value,Dc(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,g,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,x)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,b):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Zt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Zt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Zt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Gg(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,x){const y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=r[b.id];y===void 0&&(_(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(b,E);const S=e.render.frame;s[b.id]!==S&&(f(b),s[b.id]=S)}function u(b){const x=h();b.__bindingPointIndex=x;const y=i.createBuffer(),E=b.__size,S=b.usage;return i.bindBuffer(35345,y),i.bufferData(35345,E,S),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],y=b.uniforms,E=b.__cache;i.bindBuffer(35345,x);for(let S=0,C=y.length;S<C;S++){const v=y[S];if(m(v,S,E)===!0){const M=v.__offset,A=Array.isArray(v.value)?v.value:[v.value];let D=0;for(let G=0;G<A.length;G++){const P=A[G],z=d(P);typeof P=="number"?(v.__data[0]=P,i.bufferSubData(35345,M+D,v.__data)):P.isMatrix3?(v.__data[0]=P.elements[0],v.__data[1]=P.elements[1],v.__data[2]=P.elements[2],v.__data[3]=P.elements[0],v.__data[4]=P.elements[3],v.__data[5]=P.elements[4],v.__data[6]=P.elements[5],v.__data[7]=P.elements[0],v.__data[8]=P.elements[6],v.__data[9]=P.elements[7],v.__data[10]=P.elements[8],v.__data[11]=P.elements[0]):(P.toArray(v.__data,D),D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,M,v.__data)}}i.bindBuffer(35345,null)}function m(b,x,y){const E=b.value;if(y[x]===void 0){if(typeof E=="number")y[x]=E;else{const S=Array.isArray(E)?E:[E],C=[];for(let v=0;v<S.length;v++)C.push(S[v].clone());y[x]=C}return!0}else if(typeof E=="number"){if(y[x]!==E)return y[x]=E,!0}else{const S=Array.isArray(y[x])?y[x]:[y[x]],C=Array.isArray(E)?E:[E];for(let v=0;v<S.length;v++){const M=S[v];if(M.equals(C[v])===!1)return M.copy(C[v]),!0}}return!1}function _(b){const x=b.uniforms;let y=0;const E=16;let S=0;for(let C=0,v=x.length;C<v;C++){const M=x[C],A={boundary:0,storage:0},D=Array.isArray(M.value)?M.value:[M.value];for(let G=0,P=D.length;G<P;G++){const z=D[G],k=d(z);A.boundary+=k.boundary,A.storage+=k.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,C>0){S=y%E;const G=E-S;S!==0&&G-A.boundary<0&&(y+=E-S,M.__offset=y)}y+=A.storage}return S=y%E,S>0&&(y+=E-S),b.__size=y,b.__cache={},this}function d(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}function Vg(){const i=Fr("canvas");return i.style.display="block",i}function Io(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Vg(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yn,this.useLegacyLights=!0,this.toneMapping=xn,this.toneMappingExposure=1;const d=this;let p=!1,g=0,b=0,x=null,y=-1,E=null;const S=new wt,C=new wt;let v=null,M=e.width,A=e.height,D=1,G=null,P=null;const z=new wt(0,0,M,A),k=new wt(0,0,M,A);let Q=!1;const R=new Do;let V=!1,Y=!1,J=null;const fe=new ut,B=new I,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return x===null?D:1}let O=t;function pe(T,U){for(let W=0;W<T.length;W++){const N=T[W],q=e.getContext(N,U);if(q!==null)return q}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ao}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",ye,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&U.shift(),O=pe(U,T),O===null)throw pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,_e,ve,Ee,Ie,ze,Xe,At,tn,kt,Ct,ct,ot,fn,nn,L,w,X,ie,re,ce,Me,he,Z;function Te(){$=new $p(O),_e=new qp(O,$,i),$.init(_e),Me=new zg(O,$,_e),ve=new Ig(O,$,_e),Ee=new nm,Ie=new xg,ze=new Fg(O,$,ve,Ie,_e,Me,Ee),Xe=new Zp(d),At=new Jp(d),tn=new fh(O,_e),he=new jp(O,$,tn,_e),kt=new em(O,tn,Ee,he),Ct=new om(O,kt,tn,Ee),ie=new sm(O,_e,ze),L=new Yp(Ie),ct=new vg(d,Xe,At,$,_e,he,L),ot=new Bg(d,Ie),fn=new yg,nn=new Ag($,_e),X=new Wp(d,Xe,At,ve,Ct,u,o),w=new Rg(d,Ct,_e),Z=new Gg(O,Ee,_e,ve),re=new Xp(O,$,Ee,_e),ce=new tm(O,$,Ee,_e),Ee.programs=ct.programs,d.capabilities=_e,d.extensions=$,d.properties=Ie,d.renderLists=fn,d.shadowMap=w,d.state=ve,d.info=Ee}Te();const xe=new kg(d,O);this.xr=xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(M,A,!1))},this.getSize=function(T){return T.set(M,A)},this.setSize=function(T,U,W=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=T,A=U,e.width=Math.floor(T*D),e.height=Math.floor(U*D),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(M*D,A*D).floor()},this.setDrawingBufferSize=function(T,U,W){M=T,A=U,D=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,U,W,N){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,U,W,N),ve.viewport(S.copy(z).multiplyScalar(D).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,U,W,N){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,U,W,N),ve.scissor(C.copy(k).multiplyScalar(D).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){ve.setScissorTest(Q=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(T=!0,U=!0,W=!0){let N=0;T&&(N|=16384),U&&(N|=256),W&&(N|=1024),O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),fn.dispose(),nn.dispose(),Ie.dispose(),Xe.dispose(),At.dispose(),Ct.dispose(),he.dispose(),Z.dispose(),ct.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ee),xe.removeEventListener("sessionend",ue),J&&(J.dispose(),J=null),me.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ee.autoReset,U=w.enabled,W=w.autoUpdate,N=w.needsUpdate,q=w.type;Te(),Ee.autoReset=T,w.enabled=U,w.autoUpdate=W,w.needsUpdate=N,w.type=q}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function He(T){const U=T.target;U.removeEventListener("dispose",He),at(U)}function at(T){xt(T),Ie.remove(T)}function xt(T){const U=Ie.get(T).programs;U!==void 0&&(U.forEach(function(W){ct.releaseProgram(W)}),T.isShaderMaterial&&ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,N,q,we){U===null&&(U=K);const Le=q.isMesh&&q.matrixWorld.determinant()<0,De=ru(T,U,W,N,q);ve.setMaterial(N,Le);let Fe=W.index,We=1;N.wireframe===!0&&(Fe=kt.getWireframeAttribute(W),We=2);const Ue=W.drawRange,ke=W.attributes.position;let dt=Ue.start*We,Wt=(Ue.start+Ue.count)*We;we!==null&&(dt=Math.max(dt,we.start*We),Wt=Math.min(Wt,(we.start+we.count)*We)),Fe!==null?(dt=Math.max(dt,0),Wt=Math.min(Wt,Fe.count)):ke!=null&&(dt=Math.max(dt,0),Wt=Math.min(Wt,ke.count));const wn=Wt-dt;if(wn<0||wn===1/0)return;he.setup(q,N,De,W,Fe);let Jn,pt=re;if(Fe!==null&&(Jn=tn.get(Fe),pt=ce,pt.setIndex(Jn)),q.isMesh)N.wireframe===!0?(ve.setLineWidth(N.wireframeLinewidth*se()),pt.setMode(1)):pt.setMode(4);else if(q.isLine){let Be=N.linewidth;Be===void 0&&(Be=1),ve.setLineWidth(Be*se()),q.isLineSegments?pt.setMode(1):q.isLineLoop?pt.setMode(2):pt.setMode(3)}else q.isPoints?pt.setMode(0):q.isSprite&&pt.setMode(4);if(q.isInstancedMesh)pt.renderInstances(dt,wn,q.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ss=Math.min(W.instanceCount,Be);pt.renderInstances(dt,wn,Ss)}else pt.render(dt,wn)},this.compile=function(T,U){function W(N,q,we){N.transparent===!0&&N.side===Rn&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,Kt(N,q,we),N.side=qn,N.needsUpdate=!0,Kt(N,q,we),N.side=Rn):Kt(N,q,we)}f=nn.get(T),f.init(),_.push(f),T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(d.useLegacyLights),T.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let we=0;we<q.length;we++){const Le=q[we];W(Le,T,N)}else W(q,T,N)}),_.pop(),f=null};let F=null;function j(T){F&&F(T)}function ee(){me.stop()}function ue(){me.start()}const me=new zc;me.setAnimationLoop(j),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(T){F=T,xe.setAnimationLoop(T),T===null?me.stop():me.start()},xe.addEventListener("sessionstart",ee),xe.addEventListener("sessionend",ue),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(U),U=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,U,x),f=nn.get(T,_.length),f.init(),_.push(f),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),R.setFromProjectionMatrix(fe),Y=this.localClippingEnabled,V=L.init(this.clippingPlanes,Y),h=fn.get(T,m.length),h.init(),m.push(h),$e(T,U,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(G,P),V===!0&&L.beginShadows();const W=f.state.shadowsArray;if(w.render(W,T,U),V===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(h,T),f.setupLights(d.useLegacyLights),U.isArrayCamera){const N=U.cameras;for(let q=0,we=N.length;q<we;q++){const Le=N[q];bt(h,T,Le,Le.viewport)}}else bt(h,T,U);x!==null&&(ze.updateMultisampleRenderTarget(x),ze.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(d,T,U),he.resetDefaultState(),y=-1,E=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function $e(T,U,W,N){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||R.intersectsSprite(T)){N&&B.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Le=Ct.update(T),De=T.material;De.visible&&h.push(T,Le,De,W,B.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ee.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ee.render.frame),!T.frustumCulled||R.intersectsObject(T))){N&&B.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Le=Ct.update(T),De=T.material;if(Array.isArray(De)){const Fe=Le.groups;for(let We=0,Ue=Fe.length;We<Ue;We++){const ke=Fe[We],dt=De[ke.materialIndex];dt&&dt.visible&&h.push(T,Le,dt,W,B.z,ke)}}else De.visible&&h.push(T,Le,De,W,B.z,null)}}const we=T.children;for(let Le=0,De=we.length;Le<De;Le++)$e(we[Le],U,W,N)}function bt(T,U,W,N){const q=T.opaque,we=T.transmissive,Le=T.transparent;f.setupLightsView(W),V===!0&&L.setGlobalState(d.clippingPlanes,W),we.length>0&&Lt(q,U,W),N&&ve.viewport(S.copy(N)),q.length>0&&hn(q,U,W),we.length>0&&hn(we,U,W),Le.length>0&&hn(Le,U,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Lt(T,U,W){const N=_e.isWebGL2;J===null&&(J=new Zn(1024,1024,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Rr:gi,minFilter:Dr,samples:N&&s===!0?4:0}));const q=d.getRenderTarget();d.setRenderTarget(J),d.clear();const we=d.toneMapping;d.toneMapping=xn,hn(T,U,W),d.toneMapping=we,ze.updateMultisampleRenderTarget(J),ze.updateRenderTargetMipmap(J),d.setRenderTarget(q)}function hn(T,U,W){const N=U.isScene===!0?U.overrideMaterial:null;for(let q=0,we=T.length;q<we;q++){const Le=T[q],De=Le.object,Fe=Le.geometry,We=N===null?Le.material:N,Ue=Le.group;De.layers.test(W.layers)&&ft(De,U,W,Fe,We,Ue)}}function ft(T,U,W,N,q,we){T.onBeforeRender(d,U,W,N,q,we),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(d,U,W,N,T,we),q.transparent===!0&&q.side===Rn&&q.forceSinglePass===!1?(q.side=Zt,q.needsUpdate=!0,d.renderBufferDirect(W,U,N,q,T,we),q.side=qn,q.needsUpdate=!0,d.renderBufferDirect(W,U,N,q,T,we),q.side=Rn):d.renderBufferDirect(W,U,N,q,T,we),T.onAfterRender(d,U,W,N,q,we)}function Kt(T,U,W){U.isScene!==!0&&(U=K);const N=Ie.get(T),q=f.state.lights,we=f.state.shadowsArray,Le=q.state.version,De=ct.getParameters(T,q.state,we,U,W),Fe=ct.getProgramCacheKey(De);let We=N.programs;N.environment=T.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(T.isMeshStandardMaterial?At:Xe).get(T.envMap||N.environment),We===void 0&&(T.addEventListener("dispose",He),We=new Map,N.programs=We);let Ue=We.get(Fe);if(Ue!==void 0){if(N.currentProgram===Ue&&N.lightsStateVersion===Le)return dn(T,De),Ue}else De.uniforms=ct.getUniforms(T),T.onBuild(W,De,d),T.onBeforeCompile(De,d),Ue=ct.acquireProgram(De,Fe),We.set(Fe,Ue),N.uniforms=De.uniforms;const ke=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=L.uniform),dn(T,De),N.needsLights=ou(T),N.lightsStateVersion=Le,N.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMap.value=q.state.directionalShadowMap,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotShadowMap.value=q.state.spotShadowMap,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMap.value=q.state.pointShadowMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix);const dt=Ue.getUniforms(),Wt=ls.seqWithValue(dt.seq,ke);return N.currentProgram=Ue,N.uniformsList=Wt,Ue}function dn(T,U){const W=Ie.get(T);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function ru(T,U,W,N,q){U.isScene!==!0&&(U=K),ze.resetTextureUnits();const we=U.fog,Le=N.isMeshStandardMaterial?U.environment:null,De=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Yn,Fe=(N.isMeshStandardMaterial?At:Xe).get(N.envMap||Le),We=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!N.normalMap&&!!W.attributes.tangent,ke=!!W.morphAttributes.position,dt=!!W.morphAttributes.normal,Wt=!!W.morphAttributes.color,wn=N.toneMapped?d.toneMapping:xn,Jn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=Jn!==void 0?Jn.length:0,Be=Ie.get(N),Ss=f.state.lights;if(V===!0&&(Y===!0||T!==E)){const jt=T===E&&N.id===y;L.setState(N,T,jt)}let yt=!1;N.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ss.state.version||Be.outputEncoding!==De||q.isInstancedMesh&&Be.instancing===!1||!q.isInstancedMesh&&Be.instancing===!0||q.isSkinnedMesh&&Be.skinning===!1||!q.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Fe||N.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==L.numPlanes||Be.numIntersection!==L.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==Ue||Be.morphTargets!==ke||Be.morphNormals!==dt||Be.morphColors!==Wt||Be.toneMapping!==wn||_e.isWebGL2===!0&&Be.morphTargetsCount!==pt)&&(yt=!0):(yt=!0,Be.__version=N.version);let $n=Be.currentProgram;yt===!0&&($n=Kt(N,U,q));let Bo=!1,or=!1,Es=!1;const Pt=$n.getUniforms(),ei=Be.uniforms;if(ve.useProgram($n.program)&&(Bo=!0,or=!0,Es=!0),N.id!==y&&(y=N.id,or=!0),Bo||E!==T){if(Pt.setValue(O,"projectionMatrix",T.projectionMatrix),_e.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),E!==T&&(E=T,or=!0,Es=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const jt=Pt.map.cameraPosition;jt!==void 0&&jt.setValue(O,B.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&Pt.setValue(O,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Pt.setOptional(O,q,"bindMatrix"),Pt.setOptional(O,q,"bindMatrixInverse");const jt=q.skeleton;jt&&(_e.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Pt.setValue(O,"boneTexture",jt.boneTexture,ze),Pt.setValue(O,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ts=W.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0&&_e.isWebGL2===!0)&&ie.update(q,W,$n),(or||Be.receiveShadow!==q.receiveShadow)&&(Be.receiveShadow=q.receiveShadow,Pt.setValue(O,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(ei.envMap.value=Fe,ei.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),or&&(Pt.setValue(O,"toneMappingExposure",d.toneMappingExposure),Be.needsLights&&su(ei,Es),we&&N.fog===!0&&ot.refreshFogUniforms(ei,we),ot.refreshMaterialUniforms(ei,N,D,A,J),ls.upload(O,Be.uniformsList,ei,ze)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ls.upload(O,Be.uniformsList,ei,ze),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Pt.setValue(O,"center",q.center),Pt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Pt.setValue(O,"normalMatrix",q.normalMatrix),Pt.setValue(O,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const jt=N.uniformsGroups;for(let As=0,au=jt.length;As<au;As++)if(_e.isWebGL2){const Go=jt[As];Z.update(Go,$n),Z.bind(Go,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function su(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,U,W){Ie.get(T.texture).__webglTexture=U,Ie.get(T.depthTexture).__webglTexture=W;const N=Ie.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const W=Ie.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){x=T,g=U,b=W;let N=!0,q=null,we=!1,Le=!1;if(T){const Fe=Ie.get(T);Fe.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),N=!1):Fe.__webglFramebuffer===void 0?ze.setupRenderTarget(T):Fe.__hasExternalTextures&&ze.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Le=!0);const Ue=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Ue[U],we=!0):_e.isWebGL2&&T.samples>0&&ze.useMultisampledRTT(T)===!1?q=Ie.get(T).__webglMultisampledFramebuffer:q=Ue,S.copy(T.viewport),C.copy(T.scissor),v=T.scissorTest}else S.copy(z).multiplyScalar(D).floor(),C.copy(k).multiplyScalar(D).floor(),v=Q;if(ve.bindFramebuffer(36160,q)&&_e.drawBuffers&&N&&ve.drawBuffers(T,q),ve.viewport(S),ve.scissor(C),ve.setScissorTest(v),we){const Fe=Ie.get(T.texture);O.framebufferTexture2D(36160,36064,34069+U,Fe.__webglTexture,W)}else if(Le){const Fe=Ie.get(T.texture),We=U||0;O.framebufferTextureLayer(36160,36064,Fe.__webglTexture,W||0,We)}y=-1},this.readRenderTargetPixels=function(T,U,W,N,q,we,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){ve.bindFramebuffer(36160,De);try{const Fe=T.texture,We=Fe.format,Ue=Fe.type;if(We!==cn&&Me.convert(We)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ue===Rr&&($.has("EXT_color_buffer_half_float")||_e.isWebGL2&&$.has("EXT_color_buffer_float"));if(Ue!==gi&&Me.convert(Ue)!==O.getParameter(35738)&&!(Ue===hi&&(_e.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-N&&W>=0&&W<=T.height-q&&O.readPixels(U,W,N,q,Me.convert(We),Me.convert(Ue),we)}finally{const Fe=x!==null?Ie.get(x).__webglFramebuffer:null;ve.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(T,U,W=0){const N=Math.pow(2,-W),q=Math.floor(U.image.width*N),we=Math.floor(U.image.height*N);ze.setTexture2D(U,0),O.copyTexSubImage2D(3553,W,0,0,T.x,T.y,q,we),ve.unbindTexture()},this.copyTextureToTexture=function(T,U,W,N=0){const q=U.image.width,we=U.image.height,Le=Me.convert(W.format),De=Me.convert(W.type);ze.setTexture2D(W,0),O.pixelStorei(37440,W.flipY),O.pixelStorei(37441,W.premultiplyAlpha),O.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?O.texSubImage2D(3553,N,T.x,T.y,q,we,Le,De,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(3553,N,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Le,U.mipmaps[0].data):O.texSubImage2D(3553,N,T.x,T.y,Le,De,U.image),N===0&&W.generateMipmaps&&O.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W,N,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,Le=T.max.y-T.min.y+1,De=T.max.z-T.min.z+1,Fe=Me.convert(N.format),We=Me.convert(N.type);let Ue;if(N.isData3DTexture)ze.setTexture3D(N,0),Ue=32879;else if(N.isDataArrayTexture)ze.setTexture2DArray(N,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,N.flipY),O.pixelStorei(37441,N.premultiplyAlpha),O.pixelStorei(3317,N.unpackAlignment);const ke=O.getParameter(3314),dt=O.getParameter(32878),Wt=O.getParameter(3316),wn=O.getParameter(3315),Jn=O.getParameter(32877),pt=W.isCompressedTexture?W.mipmaps[0]:W.image;O.pixelStorei(3314,pt.width),O.pixelStorei(32878,pt.height),O.pixelStorei(3316,T.min.x),O.pixelStorei(3315,T.min.y),O.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(Ue,q,U.x,U.y,U.z,we,Le,De,Fe,We,pt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ue,q,U.x,U.y,U.z,we,Le,De,Fe,pt.data)):O.texSubImage3D(Ue,q,U.x,U.y,U.z,we,Le,De,Fe,We,pt),O.pixelStorei(3314,ke),O.pixelStorei(32878,dt),O.pixelStorei(3316,Wt),O.pixelStorei(3315,wn),O.pixelStorei(32877,Jn),q===0&&N.generateMipmaps&&O.generateMipmap(Ue),ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){g=0,b=0,x=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Io.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class Hg extends Io{}Hg.prototype.isWebGL1Renderer=!0;class Wg extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gc extends rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ol=new I,al=new I,ll=new ut,oo=new Lo,ns=new _s;class Vn extends gt{constructor(e=new Ut,t=new Gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ol.fromBufferAttribute(t,r-1),al.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ol.distanceTo(al);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;ll.copy(r).invert(),oo.copy(e.ray).applyMatrix4(ll);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const g=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=g,y=b-1;x<y;x+=m){const E=_.getX(x),S=_.getX(x+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,S),oo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=g,y=b-1;x<y;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),oo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Tt extends Ut{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let _=0;const d=[],p=n/2;let g=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(m,2));function b(){const y=new I,E=new I;let S=0;const C=(t-e)/n;for(let v=0;v<=s;v++){const M=[],A=v/s,D=A*(t-e)+e;for(let G=0;G<=r;G++){const P=G/r,z=P*l+a,k=Math.sin(z),Q=Math.cos(z);E.x=D*k,E.y=-A*n+p,E.z=D*Q,h.push(E.x,E.y,E.z),y.set(k,C,Q).normalize(),f.push(y.x,y.y,y.z),m.push(P,1-A),M.push(_++)}d.push(M)}for(let v=0;v<r;v++)for(let M=0;M<s;M++){const A=d[M][v],D=d[M+1][v],G=d[M+1][v+1],P=d[M][v+1];u.push(A,D,P),u.push(D,G,P),S+=6}c.addGroup(g,S,0),g+=S}function x(y){const E=_,S=new Ve,C=new I;let v=0;const M=y===!0?e:t,A=y===!0?1:-1;for(let G=1;G<=r;G++)h.push(0,p*A,0),f.push(0,A,0),m.push(.5,.5),_++;const D=_;for(let G=0;G<=r;G++){const z=G/r*l+a,k=Math.cos(z),Q=Math.sin(z);C.x=M*Q,C.y=p*A,C.z=M*k,h.push(C.x,C.y,C.z),f.push(0,A,0),S.x=k*.5+.5,S.y=Q*.5*A+.5,m.push(S.x,S.y),_++}for(let G=0;G<r;G++){const P=E+G,z=D+G;y===!0?u.push(z,z+1,P):u.push(z+1,z,P),v+=3}c.addGroup(g,v,y===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fo extends Ut{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const x=new I,y=new I,E=new I;for(let S=0;S<t.length;S+=3)m(t[S+0],x),m(t[S+1],y),m(t[S+2],E),l(x,y,E,b)}function l(b,x,y,E){const S=E+1,C=[];for(let v=0;v<=S;v++){C[v]=[];const M=b.clone().lerp(y,v/S),A=x.clone().lerp(y,v/S),D=S-v;for(let G=0;G<=D;G++)G===0&&v===S?C[v][G]=M:C[v][G]=M.clone().lerp(A,G/D)}for(let v=0;v<S;v++)for(let M=0;M<2*(S-v)-1;M++){const A=Math.floor(M/2);M%2===0?(f(C[v][A+1]),f(C[v+1][A]),f(C[v][A])):(f(C[v][A+1]),f(C[v+1][A+1]),f(C[v+1][A]))}}function c(b){const x=new I;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(b),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const b=new I;for(let x=0;x<s.length;x+=3){b.x=s[x+0],b.y=s[x+1],b.z=s[x+2];const y=p(b)/2/Math.PI+.5,E=g(b)/Math.PI+.5;o.push(y,1-E)}_(),h()}function h(){for(let b=0;b<o.length;b+=6){const x=o[b+0],y=o[b+2],E=o[b+4],S=Math.max(x,y,E),C=Math.min(x,y,E);S>.9&&C<.1&&(x<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),E<.2&&(o[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function m(b,x){const y=b*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const b=new I,x=new I,y=new I,E=new I,S=new Ve,C=new Ve,v=new Ve;for(let M=0,A=0;M<s.length;M+=9,A+=6){b.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),S.set(o[A+0],o[A+1]),C.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),E.copy(b).add(x).add(y).divideScalar(3);const D=p(E);d(S,A+0,b,D),d(C,A+2,x,D),d(v,A+4,y,D)}}function d(b,x,y,E){E<0&&b.x===1&&(o[x]=b.x-1),y.x===0&&y.z===0&&(o[x]=E/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.vertices,e.indices,e.radius,e.details)}}class Oi extends Fo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oi(e.radius,e.detail)}}class zo extends Ut{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,m=[],_=[],d=[],p=[];for(let g=0;g<=n;g++){const b=[],x=g/n;let y=0;g==0&&o==0?y=.5/t:g==n&&l==Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const S=E/t;h.x=-e*Math.cos(r+S*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+S*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(S+y,1-x),b.push(c++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){const x=u[g][b+1],y=u[g][b],E=u[g+1][b],S=u[g+1][b+1];(g!==0||o>0)&&m.push(x,y,S),(g!==n-1||l<Math.PI)&&m.push(y,E,S)}this.setIndex(m),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ui extends Ut{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new I,h=new I,f=new I;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const d=_/r*s,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(d),h.y=(e+t*Math.cos(p))*Math.sin(d),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(d),u.y=e*Math.sin(d),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const d=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,g=(r+1)*(m-1)+_,b=(r+1)*m+_;o.push(d,p,b),o.push(p,g,b)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jg extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const cl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Xg{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Vc=new Xg;class Hc{constructor(e){this.manager=e!==void 0?e:Vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class qg extends Hc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=cl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Fr("img");function l(){u(),cl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ul extends Hc{constructor(e){super(e)}load(e,t,n,r){const s=new Ht,o=new qg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Wc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fl(){return(typeof performance>"u"?Date:performance).now()}class jc{constructor(e,t,n=0,r=1/0){this.ray=new Lo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mo(e,this,n,t),n.sort(hl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Mo(e[r],this,n,t);return n.sort(hl),n}}function hl(i,e){return i.distance-e.distance}function Mo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Mo(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);const Yg=()=>{const i={show:je(!1),cameraPosition:je({x:0,y:0,z:1}),cameraLookAt:je({x:0,y:0,z:10}),objectPosition:je({x:0,y:0,z:10}),objectEuler:je(new _i(0,0,0,"ZXY")),entity:je(0)};return{...i,...{setupModel(t){i.cameraPosition.set(lr(t.cameraPosition)),i.cameraLookAt.set(lr(t.cameraLookAt)),i.objectPosition.set(lr(t.objectPosition)),i.objectEuler.set(new _i(si.degToRad(t.objectRotation.x),si.degToRad(t.objectRotation.z),si.degToRad(t.objectRotation.y),"YZX")),i.show.set(!0),i.entity.set(t.entity)},updateCamera(t){i.cameraPosition.set(lr(t.cameraPosition)),i.cameraLookAt.set(lr(t.cameraLookAt))},updateCameraPosition(t){i.cameraPosition.set(t.cameraPosition)},updateCameraLookAt(t){i.cameraLookAt.set(t.cameraLookAt)},sendMovementUpdate(t){qi("moveObject",t)},sendRotationUpdate(t){const n=hc(t);qi("rotateObject",{x:si.radToDeg(n.x).toFixed(2),y:si.radToDeg(n.y).toFixed(2),z:si.radToDeg(n.z).toFixed(2)})}}}},Hi=Yg();function Zg(){function i(e){switch(e.data.action){case"openElevator":mi.showElevatorUi(e.data.data);break;case"closeElevator":case"closeKeypad":case"closeFurniture":case"closeFurniturePlacement":mi.closeElevatorUi(),en.closeFurnitureUi(),en.closeFurniturePlacementUi(),Pr.closeKeypadUi();break;case"openKeypad":Pr.showKeypadUi();break;case"openFurniture":en.showFurnitureUi(e.data.data);break;case"openFurniturePlacement":en.showFurniturePlacementUi(e.data.data);break;case"setupModel":Hi.show.set(!0),Hi.setupModel(e.data.data);break;case"updateCamera":Hi.updateCamera(e.data.data);break}}Kn(()=>window.addEventListener("message",i)),Ke(()=>window.removeEventListener("message",i))}const Qg=await fetch("config.json").then(i=>i.json()).catch(i=>console.log(i)),Kg=await fetch(`locales/${Qg.lang}.json`).then(i=>i.json()).catch(i=>console.log(i)),Jg=()=>{const i={locales:Sr(Kg),signature:Sr(["M","a","d","e"," ","W","i","t","h"," ","\u{1F5A4}"," ","B","y"," ","S","n","i","p","e"," ","A","n","d"," ","A","c","e"," "].join("")),isDev:Sr(!1)},e={sortNumerically(t,n,r){return r==="desc"?t.sort((s,o)=>o[n]-s[n]):t.sort((s,o)=>s[n]-o[n])},sortItemsBasedOnSelections(t){let n=t.filter(s=>s.selected),r=t.filter(s=>!s.selected);return[...n,...r]},upperCaseFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)},filterItems(t,n){return n.filter(r=>!t.includes(r.id))},filterArrayByGivenObjectKey(t,n,r){return t.filter(s=>s[n]===r)},toggleToolTip(t){const n=document.getElementById(t);n.style.visibility=n.style.visibility==="visible"?"hidden":"visible"},removeItemFromArray(t,n){const r=t.indexOf(n);return r>-1&&t.splice(r,1),t},removeObjectFromArrayOfObjects(t,n,r){const s=e.getIndexOfItemFromGivenArrayByKey(t,n,r);return s>-1&&t.splice(s,1),t},getIndexOfItemFromGivenArrayByKey(t,n,r){const o=t.map((a,l)=>{if(a[n]===r)return l}).filter(a=>a!==void 0);return o.length<1?-1:o[0]},convertNumberToString(t){return t.toLocaleString()},splitarrayInEqualChunks(t,n){let r=[];for(let s=n;s>0;s--)r.push(t.splice(0,Math.ceil(t.length/s)));return r},handleKeyUp(t){t.key=="Escape"&&(mi.closeElevatorUi(),Pr.closeKeypadUi(),en.closeFurniturePlacementUi(),en.closeFurnitureUi())},copyToClipboard(t){const n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)},convertVwToPx(t){return window.innerWidth*t/100},convertPxToVw(t){return 100*t/window.innerWidth}};return{...i,...e}},Qn=Jg();function $g(i){let e,t,n,r,s,o;return{c(){e=de("div"),t=de("p"),n=Ze(i[0]),r=Re(),s=de("p"),o=Ze(i[1]),H(t,"class","title"),H(s,"class","data"),H(e,"id",i[2]),H(e,"class","elevator-tooltip-wrapper"),ji(e,"margin-top",i[3])},m(a,l){be(a,e,l),te(e,t),te(t,n),te(e,r),te(e,s),te(s,o)},p(a,[l]){l&1&&lt(n,a[0]),l&2&&lt(o,a[1]),l&4&&H(e,"id",a[2]),l&8&&ji(e,"margin-top",a[3])},i:qe,o:qe,d(a){a&&ge(e)}}}function e_(i,e,t){let{title:n,data:r,id:s,marginTop:o}=e;return i.$$set=a=>{"title"in a&&t(0,n=a.title),"data"in a&&t(1,r=a.data),"id"in a&&t(2,s=a.id),"marginTop"in a&&t(3,o=a.marginTop)},[n,r,s,o]}class t_ extends st{constructor(e){super(),rt(this,e,e_,$g,tt,{title:0,data:1,id:2,marginTop:3})}}function dl(i,e,t){const n=i.slice();return n[13]=e[t],n}function pl(i){let e,t,n=i[13].floorNumber+"",r,s,o,a,l;function c(){return i[9](i[13])}function u(){return i[10](i[13])}function h(){return i[11](i[13])}return{c(){e=de("div"),t=de("p"),r=Ze(n),s=Re(),H(t,"class","floor-number"),H(e,"id","elevator-btn-"+i[13].floorNumber),H(e,"class",o="button "+(i[13].floorNumber===i[2].currentFloor?"button-disabled":""))},m(f,m){be(f,e,m),te(e,t),te(t,r),te(e,s),a||(l=[et(e,"mouseenter",c),et(e,"mouseleave",u),et(e,"click",h)],a=!0)},p(f,m){i=f,m&4&&o!==(o="button "+(i[13].floorNumber===i[2].currentFloor?"button-disabled":""))&&H(e,"class",o)},d(f){f&&ge(e),a=!1,Qt(l)}}}function n_(i){let e,t,n,r,s=i[2].currentFloor+"",o,a,l,c,u,h,f=i[5],m=[];for(let _=0;_<f.length;_+=1)m[_]=pl(dl(i,f,_));return u=new t_({props:{id:i[6],title:"Floor "+i[0].floorNumber,data:i[0].floorRooms,marginTop:i[1]}}),{c(){e=de("div"),t=de("div"),n=de("div"),r=de("p"),o=Ze(s),a=Re(),l=de("div");for(let _=0;_<m.length;_+=1)m[_].c();c=Re(),Ge(u.$$.fragment),H(r,"class","floor-number-text"),H(n,"class","current-floor-box"),H(t,"class","current-floor-wrapper"),H(l,"class","buttons-wrapper"),H(e,"class","elevator-main-base")},m(_,d){be(_,e,d),te(e,t),te(t,n),te(n,r),te(r,o),te(e,a),te(e,l);for(let p=0;p<m.length;p+=1)m[p]&&m[p].m(l,null);be(_,c,d),Ne(u,_,d),h=!0},p(_,[d]){if((!h||d&4)&&s!==(s=_[2].currentFloor+"")&&lt(o,s),d&420){f=_[5];let g;for(g=0;g<f.length;g+=1){const b=dl(_,f,g);m[g]?m[g].p(b,d):(m[g]=pl(b),m[g].c(),m[g].m(l,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=f.length}const p={};d&1&&(p.title="Floor "+_[0].floorNumber),d&1&&(p.data=_[0].floorRooms),d&2&&(p.marginTop=_[1]),u.$set(p)},i(_){h||(ne(u.$$.fragment,_),h=!0)},o(_){ae(u.$$.fragment,_),h=!1},d(_){_&&ge(e),$i(m,_),_&&ge(c),Oe(u,_)}}}function i_(i,e,t){let n,r,{elevatorData:s}=mi;Ce(i,s,p=>t(2,r=p));let{isDev:o}=Qn;Ce(i,o,p=>t(12,n=p));let a=[...r.floorInfo].reverse(),l={},c="elevator-btn-tooltip",u="0";function h(p,g){if(p.floorNumber!==r.currentFloor){if(g==="enter"){t(0,l=p);const b=document.getElementById("elevator-btn-"+p.floorNumber);t(1,u=b.offsetTop-60+"px")}else t(0,l={}),t(1,u="0");Qn.toggleToolTip(c)}}async function f(p){n||(mi.closeElevatorUi(),await un("elevator:selectFloor",{selectedFloorNumber:p}))}return[l,u,r,s,o,a,c,h,f,p=>h(p,"enter"),p=>h(p,"leave"),p=>f(p.floorNumber)]}class r_ extends st{constructor(e){super(),rt(this,e,i_,n_,tt,{})}}const Ji=je([]);var s_={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},o_=s_,a_={prefix:"fas",iconName:"circle-minus",icon:[512,512,["minus-circle"],"f056","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},ml=a_,l_={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},c_=l_,gl={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},u_={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},f_={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},_l={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},vl={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};const is=parseFloat;function ds(i,e=";"){let t;if(Array.isArray(i))t=i.filter(n=>n);else{t=[];for(const n in i)i[n]&&t.push(`${n}:${i[n]}`)}return t.join(e)}function h_(i,e,t,n){let r,s;const o="1em";let a,l,c,u="-.125em";const h="visible";return n&&(c="center",s="1.25em"),t&&(r=t),e&&(e=="lg"?(l="1.33333em",a=".75em",u="-.225em"):e=="xs"?l=".75em":e=="sm"?l=".875em":l=e.replace("x","em")),ds([ds({float:r,width:s,height:o,"line-height":a,"font-size":l,"text-align":c,"vertical-align":u,"transform-origin":"center",overflow:h}),i])}function d_(i,e,t,n,r,s=1,o="",a=""){let l=1,c=1;return r&&(r=="horizontal"?l=-1:r=="vertical"?c=-1:l=c=-1),ds([`translate(${is(e)*s}${o},${is(t)*s}${o})`,`scale(${l*is(i)},${c*is(i)})`,n&&`rotate(${n}${a})`]," ")}function xl(i){let e,t,n,r,s,o,a;function l(h,f){return typeof h[7][4]=="string"?m_:p_}let c=l(i),u=c(i);return{c(){e=jn("svg"),t=jn("g"),n=jn("g"),u.c(),H(n,"transform",i[10]),H(t,"transform",r=`translate(${i[7][0]/2} ${i[7][1]/2})`),H(t,"transform-origin",s=`${i[7][0]/4} 0`),H(e,"id",i[0]),H(e,"class",o=Wo(i[8])+" svelte-1cj2gr0"),H(e,"style",i[9]),H(e,"viewBox",a=`0 0 ${i[7][0]} ${i[7][1]}`),H(e,"aria-hidden","true"),H(e,"role","img"),H(e,"xmlns","http://www.w3.org/2000/svg")},m(h,f){be(h,e,f),te(e,t),te(t,n),u.m(n,null)},p(h,f){c===(c=l(h))&&u?u.p(h,f):(u.d(1),u=c(h),u&&(u.c(),u.m(n,null))),f&1024&&H(n,"transform",h[10]),f&128&&r!==(r=`translate(${h[7][0]/2} ${h[7][1]/2})`)&&H(t,"transform",r),f&128&&s!==(s=`${h[7][0]/4} 0`)&&H(t,"transform-origin",s),f&1&&H(e,"id",h[0]),f&256&&o!==(o=Wo(h[8])+" svelte-1cj2gr0")&&H(e,"class",o),f&512&&H(e,"style",h[9]),f&128&&a!==(a=`0 0 ${h[7][0]} ${h[7][1]}`)&&H(e,"viewBox",a)},d(h){h&&ge(e),u.d()}}}function p_(i){let e,t,n,r,s,o,a,l,c,u;return{c(){e=jn("path"),o=jn("path"),H(e,"d",t=i[7][4][0]),H(e,"fill",n=i[3]||i[1]||"currentColor"),H(e,"fill-opacity",r=i[6]!=!1?i[4]:i[5]),H(e,"transform",s=`translate(${i[7][0]/-2} ${i[7][1]/-2})`),H(o,"d",a=i[7][4][1]),H(o,"fill",l=i[2]||i[1]||"currentColor"),H(o,"fill-opacity",c=i[6]!=!1?i[5]:i[4]),H(o,"transform",u=`translate(${i[7][0]/-2} ${i[7][1]/-2})`)},m(h,f){be(h,e,f),be(h,o,f)},p(h,f){f&128&&t!==(t=h[7][4][0])&&H(e,"d",t),f&10&&n!==(n=h[3]||h[1]||"currentColor")&&H(e,"fill",n),f&112&&r!==(r=h[6]!=!1?h[4]:h[5])&&H(e,"fill-opacity",r),f&128&&s!==(s=`translate(${h[7][0]/-2} ${h[7][1]/-2})`)&&H(e,"transform",s),f&128&&a!==(a=h[7][4][1])&&H(o,"d",a),f&6&&l!==(l=h[2]||h[1]||"currentColor")&&H(o,"fill",l),f&112&&c!==(c=h[6]!=!1?h[5]:h[4])&&H(o,"fill-opacity",c),f&128&&u!==(u=`translate(${h[7][0]/-2} ${h[7][1]/-2})`)&&H(o,"transform",u)},d(h){h&&ge(e),h&&ge(o)}}}function m_(i){let e,t,n,r;return{c(){e=jn("path"),H(e,"d",t=i[7][4]),H(e,"fill",n=i[1]||i[2]||"currentColor"),H(e,"transform",r=`translate(${i[7][0]/-2} ${i[7][1]/-2})`)},m(s,o){be(s,e,o)},p(s,o){o&128&&t!==(t=s[7][4])&&H(e,"d",t),o&6&&n!==(n=s[1]||s[2]||"currentColor")&&H(e,"fill",n),o&128&&r!==(r=`translate(${s[7][0]/-2} ${s[7][1]/-2})`)&&H(e,"transform",r)},d(s){s&&ge(e)}}}function g_(i){let e,t=i[7][4]&&xl(i);return{c(){t&&t.c(),e=vi()},m(n,r){t&&t.m(n,r),be(n,e,r)},p(n,[r]){n[7][4]?t?t.p(n,r):(t=xl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:qe,o:qe,d(n){t&&t.d(n),n&&ge(e)}}}function __(i,e,t){let{class:n=""}=e,{id:r=""}=e,{style:s=""}=e,{icon:o}=e,{size:a=""}=e,{color:l=""}=e,{fw:c=!1}=e,{pull:u=""}=e,{scale:h=1}=e,{translateX:f=0}=e,{translateY:m=0}=e,{rotate:_=""}=e,{flip:d=!1}=e,{spin:p=!1}=e,{pulse:g=!1}=e,{primaryColor:b=""}=e,{secondaryColor:x=""}=e,{primaryOpacity:y=1}=e,{secondaryOpacity:E=.4}=e,{swapOpacity:S=!1}=e,C,v,M,A;return i.$$set=D=>{"class"in D&&t(11,n=D.class),"id"in D&&t(0,r=D.id),"style"in D&&t(12,s=D.style),"icon"in D&&t(13,o=D.icon),"size"in D&&t(14,a=D.size),"color"in D&&t(1,l=D.color),"fw"in D&&t(15,c=D.fw),"pull"in D&&t(16,u=D.pull),"scale"in D&&t(17,h=D.scale),"translateX"in D&&t(18,f=D.translateX),"translateY"in D&&t(19,m=D.translateY),"rotate"in D&&t(20,_=D.rotate),"flip"in D&&t(21,d=D.flip),"spin"in D&&t(22,p=D.spin),"pulse"in D&&t(23,g=D.pulse),"primaryColor"in D&&t(2,b=D.primaryColor),"secondaryColor"in D&&t(3,x=D.secondaryColor),"primaryOpacity"in D&&t(4,y=D.primaryOpacity),"secondaryOpacity"in D&&t(5,E=D.secondaryOpacity),"swapOpacity"in D&&t(6,S=D.swapOpacity)},i.$$.update=()=>{i.$$.dirty&8192&&t(7,C=o&&o.icon||[0,0,"",[],""]),i.$$.dirty&12584960&&t(8,v=ds([n,"svelte-fa",p&&"spin",g&&"pulse"]," ")),i.$$.dirty&118784&&t(9,M=h_(s,a,u,c)),i.$$.dirty&4063232&&t(10,A=d_(h,f,m,_,d,512))},[r,l,b,x,y,E,S,C,v,M,A,n,s,o,a,c,u,h,f,m,_,d,p,g]}class Wi extends st{constructor(e){super(),rt(this,e,__,g_,tt,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}function v_(i){let e,t,n,r,s,o;return{c(){e=de("div"),t=de("div"),n=jn("svg"),r=jn("circle"),H(r,"class","path svelte-199546m"),H(r,"cx",i[1]),H(r,"cy",i[1]),H(r,"r",i[2]),H(r,"fill","none"),H(r,"stroke-width","2"),H(r,"stroke-miterlimit","10"),H(n,"class","circular svelte-199546m"),H(n,"viewBox","25 25 50 50"),H(t,"id",s="loader-"+i[0]),H(t,"class","loader svelte-199546m"),H(e,"id",o="spinner-"+i[0])},m(a,l){be(a,e,l),te(e,t),te(t,n),te(n,r)},p(a,[l]){l&2&&H(r,"cx",a[1]),l&2&&H(r,"cy",a[1]),l&4&&H(r,"r",a[2]),l&1&&s!==(s="loader-"+a[0])&&H(t,"id",s),l&1&&o!==(o="spinner-"+a[0])&&H(e,"id",o)},i:qe,o:qe,d(a){a&&ge(e)}}}function x_(i,e,t){let{idValue:n}=e,{width:r="3vw",marginLeft:s="auto",marginRight:o="auto",marginTop:a="auto",marginBottom:l="auto"}=e,{cxy:c="50",r:u="20"}=e;return Kn(()=>{const h=document.getElementById("loader-"+n);r.trim()!==""&&(h.style.width=r);const f=document.getElementById("spinner-"+n);l.trim()!==""&&(f.style.marginBottom=l),a.trim()!==""&&(f.style.marginTop=a),s.trim()!==""&&(f.style.marginLeft=s),o.trim()!==""&&(f.style.marginRight=o)}),i.$$set=h=>{"idValue"in h&&t(0,n=h.idValue),"width"in h&&t(3,r=h.width),"marginLeft"in h&&t(4,s=h.marginLeft),"marginRight"in h&&t(5,o=h.marginRight),"marginTop"in h&&t(6,a=h.marginTop),"marginBottom"in h&&t(7,l=h.marginBottom),"cxy"in h&&t(1,c=h.cxy),"r"in h&&t(2,u=h.r)},[n,c,u,r,s,o,a,l]}class No extends st{constructor(e){super(),rt(this,e,x_,v_,tt,{idValue:0,width:3,marginLeft:4,marginRight:5,marginTop:6,marginBottom:7,cxy:1,r:2})}}function b_(i){let e,t=i[3].delete_placement_confirmation+"",n,r,s,o,a=i[3].cancel_btn+"",l,c,u,h=i[3].confirm_btn+"",f,m,_,d,p,g;return{c(){e=de("p"),n=Ze(t),r=Re(),s=de("div"),o=de("button"),l=Ze(a),c=Re(),u=de("button"),f=Ze(h),m=Re(),_=de("p"),d=Ze(i[1]),H(o,"class","cancel-link svelte-11wnlkd"),H(u,"class","confirm-button svelte-11wnlkd"),H(s,"class","button-wrapper svelte-11wnlkd"),H(_,"class","error-message svelte-11wnlkd")},m(b,x){be(b,e,x),te(e,n),be(b,r,x),be(b,s,x),te(s,o),te(o,l),te(s,c),te(s,u),te(u,f),be(b,m,x),be(b,_,x),te(_,d),p||(g=[et(o,"click",i[6]),et(u,"click",i[7])],p=!0)},p(b,x){x&8&&t!==(t=b[3].delete_placement_confirmation+"")&&lt(n,t),x&8&&a!==(a=b[3].cancel_btn+"")&&lt(l,a),x&8&&h!==(h=b[3].confirm_btn+"")&&lt(f,h),x&2&&lt(d,b[1])},i:qe,o:qe,d(b){b&&ge(e),b&&ge(r),b&&ge(s),b&&ge(m),b&&ge(_),p=!1,Qt(g)}}}function y_(i){let e,t;return e=new No({props:{idValue:"delete-item-modal-loading",marginTop:"-1vw"}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p:qe,i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function M_(i){let e,t,n,r,s,o,a,l,c,u,h=i[0].name+"",f,m,_=i[0].id+"",d,p,g,b,x,y,E,S,C;a=new Wi({props:{icon:u_}});const v=[y_,b_],M=[];function A(D,G){return D[2]?0:1}return x=A(i),y=M[x]=v[x](i),{c(){e=de("div"),t=de("div"),n=de("div"),r=de("div"),s=de("div"),o=de("div"),Ge(a.$$.fragment),l=Re(),c=de("p"),u=Ze("Delete "),f=Ze(h),m=Ze(" ("),d=Ze(_),p=Ze(")"),g=Re(),b=de("div"),y.c(),H(o,"class","close-icon svelte-11wnlkd"),H(c,"class","title svelte-11wnlkd"),H(s,"class","modal-header svelte-11wnlkd"),H(b,"class","modal-body svelte-11wnlkd"),H(r,"class","modal-body-wrapper  svelte-11wnlkd"),H(n,"class","modal-content svelte-11wnlkd"),H(t,"class","modal-dialog svelte-11wnlkd"),H(e,"class","modal svelte-11wnlkd")},m(D,G){be(D,e,G),te(e,t),te(t,n),te(n,r),te(r,s),te(s,o),Ne(a,o,null),te(s,l),te(s,c),te(c,u),te(c,f),te(c,m),te(c,d),te(c,p),te(r,g),te(r,b),M[x].m(b,null),E=!0,S||(C=et(o,"click",i[6]),S=!0)},p(D,[G]){(!E||G&1)&&h!==(h=D[0].name+"")&&lt(f,h),(!E||G&1)&&_!==(_=D[0].id+"")&&lt(d,_);let P=x;x=A(D),x===P?M[x].p(D,G):(Nt(),ae(M[P],1,1,()=>{M[P]=null}),Ot(),y=M[x],y?y.p(D,G):(y=M[x]=v[x](D),y.c()),ne(y,1),y.m(b,null))},i(D){E||(ne(a.$$.fragment,D),ne(y),E=!0)},o(D){ae(a.$$.fragment,D),ae(y),E=!1},d(D){D&&ge(e),Oe(a),M[x].d(),S=!1,C()}}}function w_(i,e,t){let n,r;const s=tr();let{item:o,existingFurnitureList:a}=e,{locales:l,isDev:c}=Qn;Ce(i,l,d=>t(3,r=d)),Ce(i,c,d=>t(10,n=d));let u="",h=a,f=!1;function m(){f||s("cancel-link-clicked")}async function _(){t(2,f=!0);let d="";n?(d="Error Message",d="ok"):d=await un("furniture:deleteItem",o),d==="ok"?(h=a.filter(p=>p.id!==o.id),Ji.set(h),s("item-deleted")):t(1,u=d),t(2,f=!1)}return i.$$set=d=>{"item"in d&&t(0,o=d.item),"existingFurnitureList"in d&&t(8,a=d.existingFurnitureList)},[o,u,f,r,l,c,m,_,a]}class S_ extends st{constructor(e){super(),rt(this,e,w_,M_,tt,{item:0,existingFurnitureList:8})}}function bl(i,e,t){const n=i.slice();return n[13]=e[t],n}function E_(i){let e,t=i[1].no_items_found+"",n;return{c(){e=de("p"),n=Ze(t),H(e,"class","no-items-found")},m(r,s){be(r,e,s),te(e,n)},p(r,s){s&2&&t!==(t=r[1].no_items_found+"")&&lt(n,t)},i:qe,o:qe,d(r){r&&ge(e)}}}function T_(i){let e,t,n=i[0],r=[];for(let o=0;o<n.length;o+=1)r[o]=yl(bl(i,n,o));const s=o=>ae(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=vi()},m(o,a){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(o,a);be(o,e,a),t=!0},p(o,a){if(a&113){n=o[0];let l;for(l=0;l<n.length;l+=1){const c=bl(o,n,l);r[l]?(r[l].p(c,a),ne(r[l],1)):(r[l]=yl(c),r[l].c(),ne(r[l],1),r[l].m(e.parentNode,e))}for(Nt(),l=n.length;l<r.length;l+=1)s(l);Ot()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ne(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)ae(r[a]);t=!1},d(o){$i(r,o),o&&ge(e)}}}function yl(i){let e,t,n=i[13].name+"",r,s,o,a,l,c,u,h,f,m,_,d,p,g,b,x;l=new Wi({props:{icon:f_}});function y(){return i[7](i[13])}h=new Wi({props:{icon:c_}});function E(){return i[8](i[13])}_=new Wi({props:{icon:o_}});function S(){return i[9](i[13])}return{c(){e=de("div"),t=de("p"),r=Ze(n),s=Re(),o=de("div"),a=de("div"),Ge(l.$$.fragment),c=Re(),u=de("div"),Ge(h.$$.fragment),f=Re(),m=de("div"),Ge(_.$$.fragment),d=Re(),H(t,"class","name"),H(a,"class","eye-icon"),H(u,"class","edit-icon"),H(m,"class","delete-icon"),H(o,"class","action-items"),H(e,"class","item-row"),H(e,"id",p=i[13].id)},m(C,v){be(C,e,v),te(e,t),te(t,r),te(e,s),te(e,o),te(o,a),Ne(l,a,null),te(o,c),te(o,u),Ne(h,u,null),te(o,f),te(o,m),Ne(_,m,null),te(e,d),g=!0,b||(x=[et(a,"click",y),et(u,"click",E),et(m,"click",S)],b=!0)},p(C,v){i=C,(!g||v&1)&&n!==(n=i[13].name+"")&&lt(r,n),(!g||v&1&&p!==(p=i[13].id))&&H(e,"id",p)},i(C){g||(ne(l.$$.fragment,C),ne(h.$$.fragment,C),ne(_.$$.fragment,C),g=!0)},o(C){ae(l.$$.fragment,C),ae(h.$$.fragment,C),ae(_.$$.fragment,C),g=!1},d(C){C&&ge(e),Oe(l),Oe(h),Oe(_),b=!1,Qt(x)}}}function A_(i){let e,t,n=i[1].existing_furniture_heading+"",r,s,o,a,l,c;const u=[T_,E_],h=[];function f(m,_){return m[0].length>0?0:1}return a=f(i),l=h[a]=u[a](i),{c(){e=de("div"),t=de("p"),r=Ze(n),s=Re(),o=de("div"),l.c(),H(t,"class","heading"),H(o,"class","existing-items-wrapper")},m(m,_){be(m,e,_),te(e,t),te(t,r),te(e,s),te(e,o),h[a].m(o,null),c=!0},p(m,[_]){(!c||_&2)&&n!==(n=m[1].existing_furniture_heading+"")&&lt(r,n);let d=a;a=f(m),a===d?h[a].p(m,_):(Nt(),ae(h[d],1,1,()=>{h[d]=null}),Ot(),l=h[a],l?l.p(m,_):(l=h[a]=u[a](m),l.c()),ne(l,1),l.m(o,null))},i(m){c||(ne(l),c=!0)},o(m){ae(l),c=!1},d(m){m&&ge(e),h[a].d()}}}function C_(i,e,t){let n,r;const s=tr();let o,{isDev:a,locales:l}=Qn;Ce(i,a,d=>t(10,n=d)),Ce(i,l,d=>t(1,r=d)),Ji.subscribe(d=>{t(0,o=d)});async function c(d){n||await un("furniture:editFurniture",d)}async function u(d){n||await un("viewExistingItem",d)}function h(d){s("delete-item",d)}return[o,r,a,l,c,u,h,d=>u(d),d=>c(d),d=>h(d)]}class L_ extends st{constructor(e){super(),rt(this,e,C_,A_,tt,{})}}function P_(i){const e=i-1;return e*e*e+1}function Ml(i,{delay:e=0,duration:t=400,easing:n=P_,axis:r="y"}={}){const s=getComputedStyle(i),o=+s.opacity,a=r==="y"?"height":"width",l=parseFloat(s[a]),c=r==="y"?["top","bottom"]:["left","right"],u=c.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),h=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),m=parseFloat(s[`margin${u[0]}`]),_=parseFloat(s[`margin${u[1]}`]),d=parseFloat(s[`border${u[0]}Width`]),p=parseFloat(s[`border${u[1]}Width`]);return{delay:e,duration:t,easing:n,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*o};${a}: ${g*l}px;padding-${c[0]}: ${g*h}px;padding-${c[1]}: ${g*f}px;margin-${c[0]}: ${g*m}px;margin-${c[1]}: ${g*_}px;border-${c[0]}-width: ${g*d}px;border-${c[1]}-width: ${g*p}px;`}}function wl(i,e,t){const n=i.slice();return n[19]=e[t],n}function Sl(i,e,t){const n=i.slice();return n[22]=e[t],n}function D_(i){let e,t;return e=new No({props:{idValue:"furniture-list-loading"}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p:qe,i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function R_(i){let e,t=i[5].furniture_list_heading+"",n,r,s,o,a,l,c,u,h,f=(i[3]?i[5].expand:i[5].collapse)+"",m,_,d,p,g,b,x,y;c=new Wi({props:{icon:i[3]?vl:ml,class:"full-collapse-icon"}});const E=[F_,I_],S=[];function C(v,M){return v[0]&&v[0].length>0?0:1}return p=C(i),g=S[p]=E[p](i),{c(){e=de("p"),n=Ze(t),r=Re(),s=de("input"),a=Re(),l=de("div"),Ge(c.$$.fragment),u=Re(),h=de("p"),m=Ze(f),_=Re(),d=de("div"),g.c(),H(e,"class","heading"),H(s,"class","search-input"),H(s,"type","text"),H(s,"placeholder",o=i[5].search_furniture_list),H(l,"class","full-collapse-wrapper"),H(d,"class","furniture-list-body-wrapper")},m(v,M){be(v,e,M),te(e,n),be(v,r,M),be(v,s,M),jo(s,i[2]),be(v,a,M),be(v,l,M),Ne(c,l,null),te(l,u),te(l,h),te(h,m),be(v,_,M),be(v,d,M),S[p].m(d,null),b=!0,x||(y=[et(s,"input",i[12]),et(s,"keyup",i[8]),et(l,"click",i[13])],x=!0)},p(v,M){(!b||M&32)&&t!==(t=v[5].furniture_list_heading+"")&&lt(n,t),(!b||M&32&&o!==(o=v[5].search_furniture_list))&&H(s,"placeholder",o),M&4&&s.value!==v[2]&&jo(s,v[2]);const A={};M&8&&(A.icon=v[3]?vl:ml),c.$set(A),(!b||M&40)&&f!==(f=(v[3]?v[5].expand:v[5].collapse)+"")&&lt(m,f);let D=p;p=C(v),p===D?S[p].p(v,M):(Nt(),ae(S[D],1,1,()=>{S[D]=null}),Ot(),g=S[p],g?g.p(v,M):(g=S[p]=E[p](v),g.c()),ne(g,1),g.m(d,null))},i(v){b||(ne(c.$$.fragment,v),ne(g),b=!0)},o(v){ae(c.$$.fragment,v),ae(g),b=!1},d(v){v&&ge(e),v&&ge(r),v&&ge(s),v&&ge(a),v&&ge(l),Oe(c),v&&ge(_),v&&ge(d),S[p].d(),x=!1,Qt(y)}}}function I_(i){let e,t=i[5].no_items_found+"",n;return{c(){e=de("p"),n=Ze(t),H(e,"class","no-items-found")},m(r,s){be(r,e,s),te(e,n)},p(r,s){s&32&&t!==(t=r[5].no_items_found+"")&&lt(n,t)},i:qe,o:qe,d(r){r&&ge(e)}}}function F_(i){let e,t,n=i[1],r=[];for(let o=0;o<n.length;o+=1)r[o]=Cl(wl(i,n,o));const s=o=>ae(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=vi()},m(o,a){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(o,a);be(o,e,a),t=!0},p(o,a){if(a&3618){n=o[1];let l;for(l=0;l<n.length;l+=1){const c=wl(o,n,l);r[l]?(r[l].p(c,a),ne(r[l],1)):(r[l]=Cl(c),r[l].c(),ne(r[l],1),r[l].m(e.parentNode,e))}for(Nt(),l=n.length;l<r.length;l+=1)s(l);Ot()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ne(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)ae(r[a]);t=!1},d(o){$i(r,o),o&&ge(e)}}}function El(i){let e,t,n,r=i[19].itemsObjects,s=[];for(let o=0;o<r.length;o+=1)s[o]=Al(Sl(i,r,o));return{c(){e=de("div");for(let o=0;o<s.length;o+=1)s[o].c();H(e,"class","category-items-wrapper")},m(o,a){be(o,e,a);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);n=!0},p(o,a){if(a&1570){r=o[19].itemsObjects;let l;for(l=0;l<r.length;l+=1){const c=Sl(o,r,l);s[l]?s[l].p(c,a):(s[l]=Al(c),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=r.length}},i(o){n||(Lr(()=>{!n||(t||(t=qo(e,Ml,{duration:300},!0)),t.run(1))}),n=!0)},o(o){t||(t=qo(e,Ml,{duration:300},!1)),t.run(0),n=!1},d(o){o&&ge(e),$i(s,o),o&&t&&t.end()}}}function Tl(i){let e,t=i[5].place_btn+"",n,r,s,o;function a(){return i[16](i[19],i[22])}return{c(){e=de("button"),n=Ze(t),H(e,"id",r=i[19].categoryName+"-"+i[22].itemLabel+"-place-button"),H(e,"class","item-category-place-button")},m(l,c){be(l,e,c),te(e,n),s||(o=et(e,"click",a),s=!0)},p(l,c){i=l,c&32&&t!==(t=i[5].place_btn+"")&&lt(n,t),c&2&&r!==(r=i[19].categoryName+"-"+i[22].itemLabel+"-place-button")&&H(e,"id",r)},d(l){l&&ge(e),s=!1,o()}}}function Al(i){let e,t,n,r,s,o,a=i[22].itemLabel+"",l,c,u,h,f,m;function _(){return i[15](i[19],i[22])}let d=i[22].isSelected&&Tl(i);return{c(){e=de("div"),t=de("div"),n=de("input"),o=Re(),l=Ze(a),c=Re(),d&&d.c(),u=Re(),H(n,"id",r=i[19].categoryName+"-"+i[22].itemLabel+"-checkbox"),H(n,"type","checkbox"),H(n,"class","item-checkbox"),n.checked=s=i[22].isSelected,H(e,"id",h=i[19].categoryName+"-"+i[22].itemLabel),H(e,"class","item-row")},m(p,g){be(p,e,g),te(e,t),te(t,n),te(t,o),te(t,l),te(e,c),d&&d.m(e,null),te(e,u),f||(m=et(n,"click",_),f=!0)},p(p,g){i=p,g&2&&r!==(r=i[19].categoryName+"-"+i[22].itemLabel+"-checkbox")&&H(n,"id",r),g&2&&s!==(s=i[22].isSelected)&&(n.checked=s),g&2&&a!==(a=i[22].itemLabel+"")&&lt(l,a),i[22].isSelected?d?d.p(i,g):(d=Tl(i),d.c(),d.m(e,u)):d&&(d.d(1),d=null),g&2&&h!==(h=i[19].categoryName+"-"+i[22].itemLabel)&&H(e,"id",h)},d(p){p&&ge(e),d&&d.d(),f=!1,m()}}}function Cl(i){let e,t,n,r=i[19].categoryName+"",s,o,a,l,c,u,h,f,m;a=new Wi({props:{class:"collapse-icon",icon:i[19].isCollapsed?_l:gl}});function _(){return i[14](i[19])}let d=!i[19].isCollapsed&&El(i);return{c(){e=de("div"),t=de("div"),n=de("p"),s=Ze(r),o=Re(),Ge(a.$$.fragment),l=Re(),d&&d.c(),c=Re(),H(t,"class","category-title-wrapper"),ji(t,"border-radius",i[19].isCollapsed?"0.3vw":""),H(e,"id",u=i[19].categoryName),H(e,"class","category-section-wrapper")},m(p,g){be(p,e,g),te(e,t),te(t,n),te(n,s),te(t,o),Ne(a,t,null),te(e,l),d&&d.m(e,null),te(e,c),h=!0,f||(m=et(t,"click",_),f=!0)},p(p,g){i=p,(!h||g&2)&&r!==(r=i[19].categoryName+"")&&lt(s,r);const b={};g&2&&(b.icon=i[19].isCollapsed?_l:gl),a.$set(b),(!h||g&2)&&ji(t,"border-radius",i[19].isCollapsed?"0.3vw":""),i[19].isCollapsed?d&&(Nt(),ae(d,1,1,()=>{d=null}),Ot()):d?(d.p(i,g),g&2&&ne(d,1)):(d=El(i),d.c(),ne(d,1),d.m(e,c)),(!h||g&2&&u!==(u=i[19].categoryName))&&H(e,"id",u)},i(p){h||(ne(a.$$.fragment,p),ne(d),h=!0)},o(p){ae(a.$$.fragment,p),ae(d),h=!1},d(p){p&&ge(e),Oe(a),d&&d.d(),f=!1,m()}}}function z_(i){let e,t,n,r;const s=[R_,D_],o=[];function a(l,c){return l[4]?1:0}return t=a(i),n=o[t]=s[t](i),{c(){e=de("div"),n.c()},m(l,c){be(l,e,c),o[t].m(e,null),r=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(Nt(),ae(o[u],1,1,()=>{o[u]=null}),Ot(),n=o[t],n?n.p(l,c):(n=o[t]=s[t](l),n.c()),ne(n,1),n.m(e,null))},i(l){r||(ne(n),r=!0)},o(l){ae(n),r=!1},d(l){l&&ge(e),o[t].d()}}}function N_(i,e,t){let n,r,{furnitureList:s}=e,{isDev:o,locales:a}=Qn;Ce(i,o,S=>t(18,n=S)),Ce(i,a,S=>t(5,r=S));let l=s,c=s,u="",h=!1,f=!0;Kn(()=>{t(4,f=!0),c=s.map(S=>{S.isCollapsed=!1;let C=[];return S.items.forEach((v,M)=>{C.push({itemId:M,itemName:v.name,isSelected:!1,itemLabel:v.label,itemPrice:v.price,isDoor:v.isDoor||!1})}),S.itemsObjects=C,S}),t(1,l=c),t(4,f=!1)});function m(){t(1,l=c.filter(S=>{const C=S.itemsObjects.filter(v=>v.itemLabel.trim().toLocaleLowerCase().includes(u.trim().toLocaleLowerCase()));return S.categoryName.trim().toLocaleLowerCase().includes(u.trim().toLocaleLowerCase())||C.length>0})),t(1,l=l.map(S=>{const C=S.itemsObjects.filter(v=>v.itemLabel.trim().toLocaleLowerCase().includes(u.trim().toLocaleLowerCase()));return C.length<=0&&S.categoryName.trim().toLocaleLowerCase().includes(u.trim().toLocaleLowerCase())?Object.assign({},S,{itemsObjects:S.itemsObjects}):Object.assign({},S,{itemsObjects:C})}))}function _(S,C,v){c=c.map(M=>{const A=M.itemsObjects.map(D=>(D.itemName===C&&M.categoryName===S&&D.itemId===v?(D.isSelected=!D.isSelected,D.isSelected?un("furniture:selectItem",{itemObj:D,isSelected:!0}):un("furniture:selectItem",{itemObj:D,isSelected:!1})):D.isSelected=!1,D));return M.itemsObjects=A,M}),m()}async function d(S,C){n||await un("furniture:placeItem",{categoryName:S,itemObj:C})}function p(S=""){S!==""?(t(1,l=l.map(C=>(C.categoryName===S&&(C.isCollapsed=!C.isCollapsed),C))),t(3,h=l.every(C=>C.isCollapsed))):(t(3,h=!h),t(1,l=l.map(C=>(C.isCollapsed=h,C))))}function g(){u=this.value,t(2,u)}const b=()=>p(""),x=S=>p(S.categoryName),y=(S,C)=>_(S.categoryName,C.itemName,C.itemId),E=(S,C)=>d(S.categoryName,C);return i.$$set=S=>{"furnitureList"in S&&t(0,s=S.furnitureList)},[s,l,u,h,f,r,o,a,m,_,d,p,g,b,x,y,E]}class O_ extends st{constructor(e){super(),rt(this,e,N_,z_,tt,{furnitureList:0})}}function Xc(i,e){const t=n=>{const{action:r,data:s}=n.data;r===i&&e(s)};Kn(()=>window.addEventListener("message",t)),Ke(()=>window.removeEventListener("message",t))}function Ll(i){let e,t;return e=new S_({props:{item:i[0],existingFurnitureList:i[2]}}),e.$on("cancel-link-clicked",i[6]),e.$on("item-deleted",i[7]),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.item=n[0]),r&4&&(s.existingFurnitureList=n[2]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function U_(i){let e,t,n,r,s,o,a,l;t=new O_({props:{furnitureList:i[1].furnitureList}}),s=new L_({}),s.$on("delete-item",i[5]);let c=i[0]!==null&&Ll(i);return{c(){e=de("div"),Ge(t.$$.fragment),n=Re(),r=de("div"),Ge(s.$$.fragment),o=Re(),c&&c.c(),a=vi(),H(e,"class","furniture-list-base"),H(r,"class","existing-furniture-base")},m(u,h){be(u,e,h),Ne(t,e,null),be(u,n,h),be(u,r,h),Ne(s,r,null),be(u,o,h),c&&c.m(u,h),be(u,a,h),l=!0},p(u,[h]){const f={};h&2&&(f.furnitureList=u[1].furnitureList),t.$set(f),u[0]!==null?c?(c.p(u,h),h&1&&ne(c,1)):(c=Ll(u),c.c(),ne(c,1),c.m(a.parentNode,a)):c&&(Nt(),ae(c,1,1,()=>{c=null}),Ot())},i(u){l||(ne(t.$$.fragment,u),ne(s.$$.fragment,u),ne(c),l=!0)},o(u){ae(t.$$.fragment,u),ae(s.$$.fragment,u),ae(c),l=!1},d(u){u&&ge(e),Oe(t),u&&ge(n),u&&ge(r),Oe(s),u&&ge(o),c&&c.d(u),u&&ge(a)}}}function k_(i,e,t){let n,r;Ce(i,Ji,f=>t(2,r=f));let{furnitureData:s}=en;Ce(i,s,f=>t(1,n=f));let o=null,a=!1;Ji.set(n.existingFurnitureList);function l(f){t(0,o=f)}return Xc("freecamMode",f=>{f==!1&&(a=!1)}),window.addEventListener("keydown",async function(f){switch(f.key){case"z":a=!a,await qi("gizmo:toggleFocus",a);break}}),Ke(()=>{window.removeEventListener("keydown",async function(f){switch(f.key){case"z":await qi("gizmo:toggleFocus");break}})}),[o,n,r,s,l,f=>l(f.detail),()=>l(null),()=>l(null)]}class B_ extends st{constructor(e){super(),rt(this,e,k_,U_,tt,{})}}const wo=je("translate");function Pl(i,e,t){const n=i.slice();return n[13]=e[t],n}function Dl(i,e,t){const n=i.slice();return n[16]=e[t],n}function G_(i){let e,t;return e=new No({props:{idValue:"placement-data-spinner"}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p:qe,i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function V_(i){let e,t,n=i[0],r=[];for(let o=0;o<n.length;o+=1)r[o]=Il(Pl(i,n,o));let s=i[3]&&Fl(i);return{c(){e=de("div");for(let o=0;o<r.length;o+=1)r[o].c();t=Re(),s&&s.c(),H(e,"class","placement-info-wrapper")},m(o,a){be(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);te(e,t),s&&s.m(e,null)},p(o,a){if(a&1){n=o[0];let l;for(l=0;l<n.length;l+=1){const c=Pl(o,n,l);r[l]?r[l].p(c,a):(r[l]=Il(c),r[l].c(),r[l].m(e,t))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}o[3]?s?s.p(o,a):(s=Fl(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:qe,o:qe,d(o){o&&ge(e),$i(r,o),s&&s.d()}}}function Rl(i){let e,t=i[16].value+"",n;return{c(){e=de("p"),n=Ze(t),H(e,"class","text-display"),ji(e,"color",i[16].color)},m(r,s){be(r,e,s),te(e,n)},p(r,s){s&1&&t!==(t=r[16].value+"")&&lt(n,t),s&1&&ji(e,"color",r[16].color)},d(r){r&&ge(e)}}}function Il(i){let e,t=i[13],n=[];for(let r=0;r<t.length;r+=1)n[r]=Rl(Dl(i,t,r));return{c(){e=de("div");for(let r=0;r<n.length;r+=1)n[r].c();H(e,"class","text-wrapper")},m(r,s){be(r,e,s);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(r,s){if(s&1){t=r[13];let o;for(o=0;o<t.length;o+=1){const a=Dl(r,t,o);n[o]?n[o].p(a,s):(n[o]=Rl(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(r){r&&ge(e),$i(n,r)}}}function Fl(i){let e,t,n=i[2].rotate_btn+"",r,s,o,a=i[2].translate_btn+"",l,c,u,h=i[2].confirm_btn+"",f,m,_;return{c(){e=de("div"),t=de("button"),r=Ze(n),s=Re(),o=de("button"),l=Ze(a),c=Re(),u=de("button"),f=Ze(h),H(t,"class","button rotate-btn"),H(o,"class","button translate-btn"),H(u,"class","button confirm-btn"),H(e,"class","button-wrapper")},m(d,p){be(d,e,p),te(e,t),te(t,r),te(e,s),te(e,o),te(o,l),te(e,c),te(e,u),te(u,f),m||(_=[et(t,"click",i[7]),et(o,"click",i[8]),et(u,"click",i[9])],m=!0)},p(d,p){p&4&&n!==(n=d[2].rotate_btn+"")&&lt(r,n),p&4&&a!==(a=d[2].translate_btn+"")&&lt(l,a),p&4&&h!==(h=d[2].confirm_btn+"")&&lt(f,h)},d(d){d&&ge(e),m=!1,Qt(_)}}}function H_(i){let e,t,n=i[2].place_objects+"",r,s,o,a,l;const c=[V_,G_],u=[];function h(f,m){return f[1]?1:0}return o=h(i),a=u[o]=c[o](i),{c(){e=de("div"),t=de("p"),r=Ze(n),s=Re(),a.c(),H(t,"class","heading"),H(e,"class","furniture-placement-base")},m(f,m){be(f,e,m),te(e,t),te(t,r),te(e,s),u[o].m(e,null),l=!0},p(f,[m]){(!l||m&4)&&n!==(n=f[2].place_objects+"")&&lt(r,n);let _=o;o=h(f),o===_?u[o].p(f,m):(Nt(),ae(u[_],1,1,()=>{u[_]=null}),Ot(),a=u[o],a?a.p(f,m):(a=u[o]=c[o](f),a.c()),ne(a,1),a.m(e,null))},i(f){l||(ne(a),l=!0)},o(f){ae(a),l=!1},d(f){f&&ge(e),u[o].d()}}}function W_(i){let e=[],t=i.match(/\[(.*?)\]/);if(t){let n=t[0],r=i.split(n);e=[{value:r[0],color:"white"},{value:n,color:"var(--furniture-highlight)"},{value:r[1],color:"white"}]}else e=[{value:i,color:"white"}];return e}function j_(i,e,t){let n,r,s,o;Ce(i,Ji,p=>t(10,n=p));let{locales:a,isDev:l}=Qn;Ce(i,a,p=>t(2,s=p)),Ce(i,l,p=>t(11,r=p));let{showFurniturePlacement:c}=en;Ce(i,c,p=>t(3,o=p));let u=s.furniture_interaction_text,h=[],f=!1;Kn(()=>{t(1,f=!0),u.forEach(p=>{h.push(W_(p))}),t(0,h),t(1,f=!1)});function m(){wo.set("rotate")}function _(){wo.set("translate")}async function d(){t(1,f=!0);let p={};if(r||(p=await un("furniture:confirmPlacement")),p.status==="ok"){let g=n;p.action==="edit"?g=g.map(b=>(b.id===p.placedItem.id&&(b.entity=p.placedItem.entity),b)):p.action==="add"&&g.push(p.placedItem),g=g,Ji.set(g),en.closeFurniturePlacementUi()}t(1,f=!1)}return[h,f,s,o,a,l,c,m,_,d]}class X_ extends st{constructor(e){super(),rt(this,e,j_,H_,tt,{})}}const q_={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ys{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Y_=new Nc(-1,1,1,-1,0,1),Oo=new Ut;Oo.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3));Oo.setAttribute("uv",new it([0,2,0,0,2,0],2));class Z_{constructor(e){this._mesh=new le(Oo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Y_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Q_ extends ys{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof In?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rc.clone(e.uniforms),this.material=new In({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Z_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zl extends ys{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class K_ extends ys{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class J_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ve);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Q_(q_),this.clock=new Wc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(o instanceof zl?n=!0:o instanceof K_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qc extends ys{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const $_=(i,e,t)=>{i.renderer=new Io({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new J_(i.renderer),i.composer.addPass(new qc(i.scene,Eo(i.camera)))},Nl=(i,e,t)=>{!i.renderer||(e?i.renderer.outputEncoding=Yn:i.renderer.outputEncoding=Je,t?i.renderer.toneMapping=xn:i.renderer.toneMapping=vc)},Ol=(i,e,t)=>{!i.renderer||!i.composer||(i.renderer.setSize?.(e.width,e.height),i.renderer.setPixelRatio?.(t),i.composer.setSize?.(e.width,e.height),i.composer.setPixelRatio?.(t))},Ul=(i,e,t)=>{!i.renderer||(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},vn=i=>i.userData,e0=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},Yc=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),t0=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,n0=(i,e,t)=>{let n;const r=i.camera.subscribe(c=>n=c);Ke(r);let s;const o=i.pointer.subscribe(c=>s=c);Ke(o);let a;const l=c=>{c.preventDefault();const u=c.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,e0(i,c);const h=i0(e,s,n);if(u==="pointerdown"&&(a=h?{object:h.object,instanceId:h.instanceId}:null),u==="click"){if(!r0(h,a)){a=null;return}a=null}!h||vn(h.object).eventDispatcher?.(u,{...h,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function i0(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=Yc(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function r0(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const s0=(i,e)=>{let t;const n=i.pointerOverCanvas.subscribe(c=>t=c);Ke(n);let r;const s=i.camera.subscribe(c=>r=c);Ke(s);let o;const a=i.pointer.subscribe(c=>o=c);return Ke(a),{raycast:()=>{if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Yc(e,o,r,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&t0(e.lastIntersection,u)&&(vn(e.lastIntersection.object).eventDispatcher?.("pointerleave",e.lastIntersection),vn(u.object).eventDispatcher?.("pointerenter",u)):vn(u.object).eventDispatcher?.("pointerenter",u):e.lastIntersection&&vn(e.lastIntersection.object).eventDispatcher?.("pointerleave",e.lastIntersection),e.lastIntersection=u}}},Ms=typeof window<"u",o0=i=>{if(!Ms)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),Ke(()=>{!e||cancelAnimationFrame(e)})},a0=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>(r.order??0)>(s.order??0)?1:-1).forEach(r=>r.fn(i,n)):e.frameHandlers.forEach(r=>r.fn(i,n))},l0=i=>{!i.debugFrameloop||(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},c0=(i,e,t,n)=>{let r=Eo(i.camera);const s=i.camera.subscribe(a=>r=a);Ke(s);const{raycast:o}=s0(i,e);o0(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!r||!i.composer||!i.renderer||(a0(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,r),l0(t),t.frameInvalidated=!1,t.advance=!1))})},u0=()=>{const i=new Yt(75,0,.1,1e3);return vn(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},f0=i=>{const e=i.size.subscribe(t=>{vn(Eo(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const r=n;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),r})});Ke(e)},h0=(i,e,t,n,r,s,o)=>{const a={audioListeners:new Map,addAudioListener:(g,b)=>{if(b=b??"default",a.audioListeners.has(b)){console.warn(`An AudioListener with the id "${b}" has already been added, aborting.`);return}a.audioListeners.set(b,g)},removeAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Au([n,r],([g,b])=>g||b),pointer:je(new Ve),pointerOverCanvas:je(!1),clock:new Wc,camera:je(u0()),scene:new Wg,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:je(e),linear:je(i),dpr:je(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(b=>{b instanceof qc&&(b.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new jc,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{!c.composer||(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{!c.composer||(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}},h={dispose:async(g=!1)=>{await Cr(),!(!h.shouldDispose&&!g)&&(h.disposableObjects.forEach((b,x)=>{(b===0||g)&&(x?.dispose?.(),h.disposableObjects.delete(x))}),h.shouldDispose=!1)},collectDisposableObjects:(g,b)=>{const x=b??[];return g&&(g?.dispose&&typeof g.dispose=="function"&&g.type!=="Scene"&&x.push(g),Object.entries(g).forEach(([y,E])=>{if(y==="parent"||y==="children"||typeof E!="object")return;const S=E;S?.dispose&&h.collectDisposableObjects(S,x)})),x},addDisposableObjects:g=>{g.forEach(b=>{const x=h.disposableObjects.get(b);x?h.disposableObjects.set(b,x+1):h.disposableObjects.set(b,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(b=>{const x=h.disposableObjects.get(b);x&&x>0&&h.disposableObjects.set(b,x-1)}),h.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return an("threlte",c),an("threlte-root",u),an("threlte-render-context",l),an("threlte-audio-context",a),an("threlte-disposal-context",h),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:h,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>h}};function ws(i,e){const t=je(i);let n=i;const r=t.subscribe(a=>n=a);return Ke(r),{...t,set:a=>{if(a?.uuid===n?.uuid)return;const l=n;t.set(a),e?.(a,l)},update:a=>{const l=a(n);if(l?.uuid===n?.uuid)return;const c=n;t.set(l),e?.(l,c)}}}const Mn=()=>yn("threlte");function d0(i){let e;const t=i[8].default,n=Fn(t,i,i[7],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&128)&&Nn(n,t,r,r[7],e?zn(t,r[7],s,null):On(r[7]),null)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}const p0=()=>({onChildMount:yn("threlte-hierarchical-object-on-mount"),onChildDestroy:yn("threlte-hierarchical-object-on-destroy")}),Zc=()=>yn("threlte-hierarchical-parent-context");function m0(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=g=>{a.push(g),t(1,a),l?.(g)};let{onChildDestroy:u=void 0}=e;const h=g=>{const b=a.findIndex(x=>x.uuid===g.uuid);b!==-1&&a.splice(b,1),t(1,a),u?.(g)},{invalidate:f}=Mn(),m=Zc();Ce(i,m,g=>t(6,n=g));let{parent:_=n}=e;const d=p0();o&&(d.onChildMount?.(o),f("HierarchicalObject: object added"));const p=ws(o,(g,b)=>{b&&(d.onChildDestroy?.(b),f("HierarchicalObject: object added")),g&&(d.onChildMount?.(g),f("HierarchicalObject: object removed"))});return Ke(()=>{o&&(d.onChildDestroy?.(o),f("HierarchicalObject: object removed"))}),an("threlte-hierarchical-object-on-mount",c),an("threlte-hierarchical-object-on-destroy",h),an("threlte-hierarchical-parent-context",p),i.$$set=g=>{"object"in g&&t(3,o=g.object),"children"in g&&t(1,a=g.children),"onChildMount"in g&&t(4,l=g.onChildMount),"onChildDestroy"in g&&t(5,u=g.onChildDestroy),"parent"in g&&t(2,_=g.parent),"$$scope"in g&&t(7,s=g.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,_=n),i.$$.dirty&8&&p.set(o)},[m,a,_,o,l,u,n,s,r]}class g0 extends st{constructor(e){super(),rt(this,e,m0,d0,tt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function _0(i){let e;const t=i[1].default,n=Fn(t,i,i[4],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16)&&Nn(n,t,r,r[4],e?zn(t,r[4],s,null):On(r[4]),null)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}function v0(i){let e,t;return e=new g0({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[_0]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.object=n[0]),r&1&&(s.onChildMount=n[2]),r&1&&(s.onChildDestroy=n[3]),r&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function x0(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return i.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,r=l.$$scope)},[s,n,o,a,r]}class Uo extends st{constructor(e){super(),rt(this,e,x0,v0,tt,{object:0})}}const b0=()=>{const i=je({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(o=>e=o);Ke(t);let n;const r=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&i.set({width:a,height:l})},s=o=>{n=o,r(),window.addEventListener("resize",r)};return Ms?(Ke(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:i}):{parentSize:i,parentSizeAction:s}};function kl(i){let e,t;return e=new Uo({props:{object:i[0].scene,$$slots:{default:[y0]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p(n,r){const s={};r[1]&4&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function y0(i){let e;const t=i[29].default,n=Fn(t,i,i[33],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[1]&4)&&Nn(n,t,r,r[33],e?zn(t,r[33],s,null):On(r[33]),null)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}function M0(i){let e,t,n,r,s=i[2]&&kl(i);return{c(){e=de("canvas"),s&&s.c(),H(e,"class","svelte-o3oskp")},m(o,a){be(o,e,a),s&&s.m(e,null),i[30](e),t=!0,n||(r=[hu(i[3].call(null,e)),et(e,"click",i[9]),et(e,"contextmenu",i[10]),et(e,"pointerup",i[13]),et(e,"pointerdown",i[11]),et(e,"pointermove",i[12]),et(e,"pointerenter",i[31]),et(e,"pointerleave",i[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&ne(s,1)):(s=kl(o),s.c(),ne(s,1),s.m(e,null)):s&&(Nt(),ae(s,1,1,()=>{s=null}),Ot())},i(o){t||(ne(s),t=!0)},o(o){ae(s),t=!1},d(o){o&&ge(e),s&&s.d(),i[30](null),n=!1,Qt(r)}}}const Bl=new Set;function w0(i,e,t){let n,r,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=Ms?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:_=!0}=e,{shadowMapType:d=pc}=e,{size:p=void 0}=e,{rendererParameters:g=void 0}=e,b,x=!1;const y=je(p),{parentSize:E,parentSizeAction:S}=b0(),C=h0(h,u,c,y,E,m,f),{getCtx:v,renderCtx:M,disposalCtx:A}=C,{ctx:D,rootCtx:G,audioCtx:P}=C;f0(D),Bl.add(D.invalidate),Ke(()=>{Bl.delete(D.invalidate)});const{size:z,scene:k}=D;Ce(i,z,$=>t(26,r=$));const{flat:Q,linear:R,dpr:V}=G;Ce(i,Q,$=>t(27,s=$)),Ce(i,R,$=>t(28,o=$)),Ce(i,V,$=>t(25,n=$)),an("threlte-parent",je(k)),Kn(()=>{!b||($_(D,b,g),Nl(D,o,s),Ol(D,r,n),Ul(D,_,d),t(2,x=!0))}),c0(D,G,M,A);const{onClick:Y,onContextMenu:J,onPointerDown:fe,onPointerMove:B,onPointerUp:K}=n0(D,G,M);Ke(()=>{A.dispose(!0)});function se($){pi[$?"unshift":"push"](()=>{b=$,t(1,b)})}const O=()=>v().pointerOverCanvas.set(!0),pe=()=>v().pointerOverCanvas.set(!1);return i.$$set=$=>{"dpr"in $&&t(14,c=$.dpr),"flat"in $&&t(15,u=$.flat),"linear"in $&&t(16,h=$.linear),"frameloop"in $&&t(17,f=$.frameloop),"debugFrameloop"in $&&t(18,m=$.debugFrameloop),"shadows"in $&&t(19,_=$.shadows),"shadowMapType"in $&&t(20,d=$.shadowMapType),"size"in $&&t(21,p=$.size),"rendererParameters"in $&&t(22,g=$.rendererParameters),"$$scope"in $&&t(33,l=$.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&y.set(p),i.$$.dirty[0]&65536&&Ln(R,o=h,o),i.$$.dirty[0]&32768&&Ln(Q,s=u,s),i.$$.dirty[0]&16384&&Ln(V,n=c,n),i.$$.dirty[0]&402653184&&Nl(v(),o,s),i.$$.dirty[0]&100663296&&Ol(v(),r,n),i.$$.dirty[0]&1572864&&Ul(v(),_,d)},[D,b,x,S,v,z,Q,R,V,Y,J,fe,B,K,c,u,h,f,m,_,d,p,g,G,P,n,r,s,o,a,se,O,pe,l]}class S0 extends st{constructor(e){super(),rt(this,e,w0,M0,tt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Qc=()=>yn("threlte-root"),E0=()=>yn("threlte-disposal-context");function T0(i){let e;const t=i[9].default,n=Fn(t,i,i[8],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&256)&&Nn(n,t,r,r[8],e?zn(t,r[8],s,null):On(r[8]),null)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}const Gl="threlte-disposable-object-context";function A0(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=E0();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const m=yn(Gl);Ce(i,m,p=>t(7,r=p));const _=je(f??r??!0);Ce(i,_,p=>t(6,n=p)),an(Gl,_);let d=n?a(u):[];return l(d),Ke(()=>{c(d)}),i.$$set=p=>{"object"in p&&t(2,u=p.object),"dispose"in p&&t(3,f=p.dispose),"$$scope"in p&&t(8,o=p.$$scope)},i.$$.update=()=>{i.$$.dirty&136&&_.set(f??r??!0),i.$$.dirty&116&&u!==h&&(c(d),t(5,d=n?a(u):[]),l(d),t(4,h=u))},[m,_,u,f,h,d,n,r,o,s]}class ko extends st{constructor(e){super(),rt(this,e,A0,T0,tt,{object:2,dispose:3})}}function C0(i,e,t){let n,r,{object:s}=e;const o=ws(s);Ce(i,o,c=>t(4,r=c));const a=yn("threlte-layers");Ce(i,a,c=>t(3,n=c));const{invalidate:l}=Mn();return i.$$set=c=>{"object"in c&&t(2,s=c.object)},i.$$.update=()=>{if(i.$$.dirty&4&&o.set(s),i.$$.dirty&24){if(n==="all")r.layers.enableAll();else if(n==="none")r.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?r.layers.enable(c):r.layers.disable(c)}else n!==void 0&&r.layers.set(n);l("LayerableObject")}},[o,a,s,n,r]}class Kc extends st{constructor(e){super(),rt(this,e,C0,null,tt,{object:2})}}const Jc=(i,e)=>{if(!Ms)return{start:()=>{},stop:()=>{},started:Sr(!1)};const t=yn("threlte-render-context"),n={fn:i,order:e?.order,debugFrameloopMessage:e?.debugFrameloopMessage},r=je(!1),s=()=>{t.frameHandlers.delete(n),r.set(!1)},o=()=>{t.frameHandlers.add(n),r.set(!0)};return(e?.autostart??!0)&&o(),Ke(()=>{s()}),{start:o,stop:s,started:{subscribe:r.subscribe}}},$c=()=>{const i=je(!1);return(async()=>{await Cr(),i.set(!0)})(),i};function L0(i,e,t){let n,r,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new I,h=tr(),{invalidate:f}=Mn(),m=$c();Ce(i,m,x=>t(8,r=x));const _=async()=>{r||await Cr(),h("transform")},d=async()=>{f("TransformableObject: transformed"),await _()};vn(s).onTransform=d;const{start:p,stop:g}=Jc(async()=>{c&&!l&&c instanceof gt&&(c.getWorldPosition(u),s.lookAt(u),await _())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=ws(s);return Ce(i,b,x=>t(7,n=x)),i.$$set=x=>{"object"in x&&t(2,s=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},i.$$.update=()=>{i.$$.dirty&4&&b.set(s),i.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),d()),c&&!l&&(c instanceof gt?p():(g(),n.lookAt(c.x??0,c.y??0,c.z??0),d())),c||g()),i.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),d()),i.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),d())},[m,b,s,o,a,l,c,n]}class P0 extends st{constructor(e){super(),rt(this,e,L0,null,tt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function D0(i,e,t){let n,r,s,{object:o}=e,{viewportAware:a=!1}=e;const l=tr(),{camera:c,invalidate:u}=Mn();Ce(i,c,S=>t(8,s=S));const h=new Do,f=new ut,m=S=>S.type==="Mesh",_=new I,d=()=>s?(f.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),h.setFromProjectionMatrix(f),m(o)?h.intersectsObject(o):(o.getWorldPosition(_),h.containsPoint(_))):!0,p=$c();Ce(i,p,S=>t(7,r=S));let{inViewport:g=d()}=e;const b=async S=>{S?(r||await Cr(),l("viewportenter",o)):(r||await Cr(),l("viewportleave",o))},{start:x,stop:y,started:E}=Jc(()=>{const S=d();g===void 0?(t(3,g=d()),b(g)):S!==g&&(b(S),t(3,g=S))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Ce(i,E,S=>t(6,n=S)),u("ViewportAwareObject"),i.$$set=S=>{"object"in S&&t(4,o=S.object),"viewportAware"in S&&t(5,a=S.viewportAware),"inViewport"in S&&t(3,g=S.inViewport)},i.$$.update=()=>{i.$$.dirty&96&&(a&&!n?x():!a&&n&&y())},[c,p,E,g,o,a,n]}class R0 extends st{constructor(e){super(),rt(this,e,D0,null,tt,{object:4,viewportAware:5,inViewport:3})}}function I0(i){let e;const t=i[14].default,n=Fn(t,i,i[18],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&262144)&&Nn(n,t,r,r[18],e?zn(t,r[18],s,null):On(r[18]),null)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}function F0(i){let e,t;return e=new Uo({props:{object:i[1],$$slots:{default:[I0]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.object=n[1]),r&262144&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function z0(i){let e,t,n,r,s,o,a,l,c;e=new Kc({props:{object:i[1]}}),n=new P0({props:{object:i[1],position:i[2],rotation:i[4],scale:i[3],lookAt:i[5]}}),s=new ko({props:{object:i[1],dispose:i[7],$$slots:{default:[F0]},$$scope:{ctx:i}}});function u(f){i[15](f)}let h={object:i[1],viewportAware:i[6]};return i[0]!==void 0&&(h.inViewport=i[0]),a=new R0({props:h}),pi.push(()=>ms(a,"inViewport",u)),a.$on("viewportenter",i[16]),a.$on("viewportleave",i[17]),{c(){Ge(e.$$.fragment),t=Re(),Ge(n.$$.fragment),r=Re(),Ge(s.$$.fragment),o=Re(),Ge(a.$$.fragment)},m(f,m){Ne(e,f,m),be(f,t,m),Ne(n,f,m),be(f,r,m),Ne(s,f,m),be(f,o,m),Ne(a,f,m),c=!0},p(f,[m]){const _={};m&2&&(_.object=f[1]),e.$set(_);const d={};m&2&&(d.object=f[1]),m&4&&(d.position=f[2]),m&16&&(d.rotation=f[4]),m&8&&(d.scale=f[3]),m&32&&(d.lookAt=f[5]),n.$set(d);const p={};m&2&&(p.object=f[1]),m&128&&(p.dispose=f[7]),m&262146&&(p.$$scope={dirty:m,ctx:f}),s.$set(p);const g={};m&2&&(g.object=f[1]),m&64&&(g.viewportAware=f[6]),!l&&m&1&&(l=!0,g.inViewport=f[0],ps(()=>l=!1)),a.$set(g)},i(f){c||(ne(e.$$.fragment,f),ne(n.$$.fragment,f),ne(s.$$.fragment,f),ne(a.$$.fragment,f),c=!0)},o(f){ae(e.$$.fragment,f),ae(n.$$.fragment,f),ae(s.$$.fragment,f),ae(a.$$.fragment,f),c=!1},d(f){Oe(e,f),f&&ge(t),Oe(n,f),f&&ge(r),Oe(s,f),f&&ge(o),Oe(a,f)}}}function N0(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:d=void 0}=e,{visible:p=void 0}=e,{dispose:g=void 0}=e,{userData:b=void 0}=e;const{invalidate:x}=Mn(),y=()=>s;function E(v){h=v,t(0,h)}function S(v){Xi.call(this,i,v)}function C(v){Xi.call(this,i,v)}return i.$$set=v=>{"object"in v&&t(1,s=v.object),"position"in v&&t(2,o=v.position),"scale"in v&&t(3,a=v.scale),"rotation"in v&&t(4,l=v.rotation),"lookAt"in v&&t(5,c=v.lookAt),"viewportAware"in v&&t(6,u=v.viewportAware),"inViewport"in v&&t(0,h=v.inViewport),"castShadow"in v&&t(8,f=v.castShadow),"receiveShadow"in v&&t(9,m=v.receiveShadow),"frustumCulled"in v&&t(10,_=v.frustumCulled),"renderOrder"in v&&t(11,d=v.renderOrder),"visible"in v&&t(12,p=v.visible),"dispose"in v&&t(7,g=v.dispose),"userData"in v&&t(13,b=v.userData),"$$scope"in v&&t(18,r=v.$$scope)},i.$$.update=()=>{i.$$.dirty&16128&&(p!==void 0&&(y().visible=p),f!==void 0&&(y().castShadow=f),m!==void 0&&(y().receiveShadow=m),_!==void 0&&(y().frustumCulled=_),d!==void 0&&(y().renderOrder=d),b!==void 0&&(y().userData={...y().userData,...b}),x("Object3DInstance: props changed"))},[h,s,o,a,l,c,u,g,f,m,_,d,p,b,n,E,S,C,r]}class O0 extends st{constructor(e){super(),rt(this,e,N0,z0,tt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function U0(i){let e;const t=i[17].default,n=Fn(t,i,i[21],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2097152)&&Nn(n,t,r,r[21],e?zn(t,r[21],s,null):On(r[21]),null)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}function k0(i){let e,t,n;function r(o){i[18](o)}let s={object:i[1],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],userData:i[12],dispose:i[13],$$slots:{default:[U0]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new O0({props:s}),pi.push(()=>ms(e,"inViewport",r)),e.$on("viewportenter",i[19]),e.$on("viewportleave",i[20]),{c(){Ge(e.$$.fragment)},m(o,a){Ne(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],ps(()=>t=!1)),e.$set(l)},i(o){n||(ne(e.$$.fragment,o),n=!0)},o(o){ae(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function B0(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:p=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{useCamera:y=!1}=e;const E=ws(o);Ce(i,E,A=>t(16,n=A));const{setCamera:S}=Qc();function C(A){f=A,t(0,f)}function v(A){Xi.call(this,i,A)}function M(A){Xi.call(this,i,A)}return i.$$set=A=>{"camera"in A&&t(1,o=A.camera),"position"in A&&t(2,a=A.position),"scale"in A&&t(3,l=A.scale),"rotation"in A&&t(4,c=A.rotation),"lookAt"in A&&t(5,u=A.lookAt),"viewportAware"in A&&t(6,h=A.viewportAware),"inViewport"in A&&t(0,f=A.inViewport),"castShadow"in A&&t(7,m=A.castShadow),"receiveShadow"in A&&t(8,_=A.receiveShadow),"frustumCulled"in A&&t(9,d=A.frustumCulled),"renderOrder"in A&&t(10,p=A.renderOrder),"visible"in A&&t(11,g=A.visible),"userData"in A&&t(12,b=A.userData),"dispose"in A&&t(13,x=A.dispose),"useCamera"in A&&t(15,y=A.useCamera),"$$scope"in A&&t(21,s=A.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&E.set(o),i.$$.dirty&98304&&y&&S(n)},[f,o,a,l,c,u,h,m,_,d,p,g,b,x,E,y,n,r,C,v,M,s]}class G0 extends st{constructor(e){super(),rt(this,e,B0,k0,tt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function V0(i){let e;const t=i[20].default,n=Fn(t,i,i[24],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16777216)&&Nn(n,t,r,r[24],e?zn(t,r[24],s,null):On(r[24]),null)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}function H0(i){let e,t,n;function r(o){i[21](o)}let s={camera:i[0],position:i[2],scale:i[3],rotation:i[4],castShadow:i[6],receiveShadow:i[7],frustumCulled:i[8],renderOrder:i[9],visible:i[10],userData:i[11],dispose:i[12],viewportAware:i[13],lookAt:i[5],useCamera:i[14],$$slots:{default:[V0]},$$scope:{ctx:i}};return i[1]!==void 0&&(s.inViewport=i[1]),e=new G0({props:s}),pi.push(()=>ms(e,"inViewport",r)),e.$on("viewportenter",i[22]),e.$on("viewportleave",i[23]),{c(){Ge(e.$$.fragment)},m(o,a){Ne(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],ps(()=>t=!1)),e.$set(l)},i(o){n||(ne(e.$$.fragment,o),n=!0)},o(o){ae(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function W0(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:m=void 0}=e,{visible:_=void 0}=e,{userData:d=void 0}=e,{dispose:p=void 0}=e,{viewportAware:g=!1}=e,{inViewport:b=!1}=e,{useCamera:x=!0}=e,{near:y=void 0}=e,{far:E=void 0}=e,{fov:S=void 0}=e;const{size:C,invalidate:v}=Mn();Ce(i,C,P=>t(19,n=P));const M=new Yt(S,n.width/n.height,y,E);function A(P){b=P,t(1,b)}function D(P){Xi.call(this,i,P)}function G(P){Xi.call(this,i,P)}return i.$$set=P=>{"position"in P&&t(2,o=P.position),"scale"in P&&t(3,a=P.scale),"rotation"in P&&t(4,l=P.rotation),"lookAt"in P&&t(5,c=P.lookAt),"castShadow"in P&&t(6,u=P.castShadow),"receiveShadow"in P&&t(7,h=P.receiveShadow),"frustumCulled"in P&&t(8,f=P.frustumCulled),"renderOrder"in P&&t(9,m=P.renderOrder),"visible"in P&&t(10,_=P.visible),"userData"in P&&t(11,d=P.userData),"dispose"in P&&t(12,p=P.dispose),"viewportAware"in P&&t(13,g=P.viewportAware),"inViewport"in P&&t(1,b=P.inViewport),"useCamera"in P&&t(14,x=P.useCamera),"near"in P&&t(16,y=P.near),"far"in P&&t(17,E=P.far),"fov"in P&&t(18,S=P.fov),"$$scope"in P&&t(24,s=P.$$scope)},i.$$.update=()=>{i.$$.dirty&524289&&(t(0,M.aspect=n.width/n.height,M),M.updateProjectionMatrix(),v("PerspectiveCamera: aspect changed")),i.$$.dirty&458753&&(y!==void 0&&t(0,M.near=y,M),E!==void 0&&t(0,M.far=E,M),S!==void 0&&t(0,M.fov=S,M),M.updateProjectionMatrix(),v("PerspectiveCamera: props changed"))},[M,b,o,a,l,c,u,h,f,m,_,d,p,g,x,C,y,E,S,n,r,A,D,G,s]}class j0 extends st{constructor(e){super(),rt(this,e,W0,H0,tt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Vl=[],X0=(i,e)=>{const t=Vl.find(r=>r instanceof i);if(t)return t;const n=e();return Vl.push(n),n},ri=new jc,Gt=new I,Hn=new I,nt=new Ft,Hl={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},ao={type:"change"},Wl={type:"mouseDown"},jl={type:"mouseUp",mode:null},Xl={type:"objectChange"};class q0 extends gt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new $0;this._gizmo=n,this.add(n);const r=new ev;this._plane=r,this.add(r);const s=this;function o(b,x){let y=x;Object.defineProperty(s,b,{get:function(){return y!==void 0?y:x},set:function(E){y!==E&&(y=E,r[b]=E,n[b]=E,s.dispatchEvent({type:b+"-changed",value:E}),s.dispatchEvent(ao))}}),s[b]=x,r[b]=x,n[b]=x}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new I,l=new I,c=new Ft,u=new Ft,h=new I,f=new Ft,m=new I,_=new I,d=new I,p=0,g=new I;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",f),o("pointStart",m),o("pointEnd",_),o("rotationAxis",d),o("rotationAngle",p),o("eye",g),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new Ft,this._parentQuaternionInv=new Ft,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new Ft,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new Ft,this._scaleStart=new I,this._getPointer=Y0.bind(this),this._onPointerDown=Q0.bind(this),this._onPointerHover=Z0.bind(this),this._onPointerMove=K0.bind(this),this._onPointerUp=J0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;ri.setFromCamera(e,this.camera);const t=lo(this._gizmo.picker[this.mode],ri);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){ri.setFromCamera(e,this.camera);const t=lo(this._plane,ri,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Wl.mode=this.mode,this.dispatchEvent(Wl)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;ri.setFromCamera(e,this.camera);const o=lo(this._plane,ri,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(nt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Gt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Gt.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Hn.set(a,a,a)}else Gt.copy(this.pointStart),Hn.copy(this.pointEnd),Gt.applyQuaternion(this._worldQuaternionInv),Hn.applyQuaternion(this._worldQuaternionInv),Hn.divide(Gt),t.search("X")===-1&&(Hn.x=1),t.search("Y")===-1&&(Hn.y=1),t.search("Z")===-1&&(Hn.z=1);r.scale.copy(this._scaleStart).multiply(Hn),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Gt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Gt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Hl[t]),Gt.copy(Hl[t]),s==="local"&&Gt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Gt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ao),this.dispatchEvent(Xl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(jl.mode=this.mode,this.dispatchEvent(jl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ao),this.dispatchEvent(Xl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ri}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Y0(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Z0(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Q0(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function K0(i){!this.enabled||this.pointerMove(this._getPointer(i))}function J0(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function lo(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const rs=new _i,Qe=new I(0,1,0),ql=new I(0,0,0),Yl=new ut,ss=new Ft,cs=new Ft,mn=new I,Zl=new ut,yr=new I(1,0,0),li=new I(0,1,0),Mr=new I(0,0,1),os=new I,gr=new I,_r=new I;class $0 extends gt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new vs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Gc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const d=new Tt(0,.04,.1,12);d.translate(0,.05,0);const p=new ht(.08,.08,.08);p.translate(0,.04,0);const g=new Ut;g.setAttribute("position",new it([0,0,0,1,0,0],3));const b=new Tt(.0075,.0075,.5,3);b.translate(0,.25,0);function x(k,Q){const R=new ui(k,.0075,3,64,Q*Math.PI*2);return R.rotateY(Math.PI/2),R.rotateX(Math.PI/2),R}function y(){const k=new Ut;return k.setAttribute("position",new it([0,0,0,1,1,1],3)),k}const E={X:[[new le(d,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(d,s),[-.5,0,0],[0,0,Math.PI/2]],[new le(b,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new le(d,o),[0,.5,0]],[new le(d,o),[0,-.5,0],[Math.PI,0,0]],[new le(b,o)]],Z:[[new le(d,a),[0,0,.5],[Math.PI/2,0,0]],[new le(d,a),[0,0,-.5],[-Math.PI/2,0,0]],[new le(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new le(new Oi(.1,0),h.clone()),[0,0,0]]],XY:[[new le(new ht(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new le(new ht(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new ht(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new le(new Tt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new Tt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new Tt(.2,0,.6,4),n),[0,.3,0]],[new le(new Tt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new Tt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new Tt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new le(new Oi(.2,0),n)]],XY:[[new le(new ht(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new ht(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new ht(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new le(new Oi(.01,2),r),null,null,null,"helper"]],END:[[new le(new Oi(.01,2),r),null,null,null,"helper"]],DELTA:[[new Vn(y(),r),null,null,null,"helper"]],X:[[new Vn(g,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vn(g,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vn(g,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},v={XYZE:[[new le(x(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new le(x(.5,.5),s)]],Y:[[new le(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new le(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new le(x(.75,1),f),null,[0,Math.PI/2,0]]]},M={AXIS:[[new Vn(g,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},A={XYZE:[[new le(new zo(.25,10,8),n)]],X:[[new le(new ui(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new le(new ui(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new le(new ui(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new le(new ui(.75,.1,2,24),n)]]},D={X:[[new le(p,s),[.5,0,0],[0,0,-Math.PI/2]],[new le(b,s),[0,0,0],[0,0,-Math.PI/2]],[new le(p,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new le(p,o),[0,.5,0]],[new le(b,o)],[new le(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new le(p,a),[0,0,.5],[Math.PI/2,0,0]],[new le(b,a),[0,0,0],[Math.PI/2,0,0]],[new le(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new le(new ht(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new le(new ht(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new ht(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new ht(.1,.1,.1),h.clone())]]},G={X:[[new le(new Tt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new Tt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new Tt(.2,0,.6,4),n),[0,.3,0]],[new le(new Tt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new Tt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new Tt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new le(new ht(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new ht(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new ht(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new ht(.2,.2,.2),n),[0,0,0]]]},P={X:[[new Vn(g,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vn(g,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vn(g,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(k){const Q=new gt;for(const R in k)for(let V=k[R].length;V--;){const Y=k[R][V][0].clone(),J=k[R][V][1],fe=k[R][V][2],B=k[R][V][3],K=k[R][V][4];Y.name=R,Y.tag=K,J&&Y.position.set(J[0],J[1],J[2]),fe&&Y.rotation.set(fe[0],fe[1],fe[2]),B&&Y.scale.set(B[0],B[1],B[2]),Y.updateMatrix();const se=Y.geometry.clone();se.applyMatrix4(Y.matrix),Y.geometry=se,Y.renderOrder=1/0,Y.position.set(0,0,0),Y.rotation.set(0,0,0),Y.scale.set(1,1,1),Q.add(Y)}return Q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(E)),this.add(this.gizmo.rotate=z(v)),this.add(this.gizmo.scale=z(D)),this.add(this.picker.translate=z(S)),this.add(this.picker.rotate=z(A)),this.add(this.picker.scale=z(G)),this.add(this.helper.translate=z(C)),this.add(this.helper.rotate=z(M)),this.add(this.helper.scale=z(P)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:cs;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(nt.setFromEuler(rs.set(0,0,0)),o.quaternion.copy(n).multiply(nt),Math.abs(Qe.copy(yr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(nt.setFromEuler(rs.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(nt),Math.abs(Qe.copy(li).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(nt.setFromEuler(rs.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(nt),Math.abs(Qe.copy(Mr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(nt.setFromEuler(rs.set(0,Math.PI/2,0)),Qe.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Yl.lookAt(ql,Qe,li)),o.quaternion.multiply(nt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Gt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Gt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Gt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Qe.copy(yr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Qe.copy(li).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Qe.copy(Mr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Qe.copy(Mr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Qe.copy(yr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Qe.copy(li).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ss.copy(n),Qe.copy(this.eye).applyQuaternion(nt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Yl.lookAt(this.eye,ql,li)),o.name==="X"&&(nt.setFromAxisAngle(yr,Math.atan2(-Qe.y,Qe.z)),nt.multiplyQuaternions(ss,nt),o.quaternion.copy(nt)),o.name==="Y"&&(nt.setFromAxisAngle(li,Math.atan2(Qe.x,Qe.z)),nt.multiplyQuaternions(ss,nt),o.quaternion.copy(nt)),o.name==="Z"&&(nt.setFromAxisAngle(Mr,Math.atan2(Qe.y,Qe.x)),nt.multiplyQuaternions(ss,nt),o.quaternion.copy(nt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class ev extends le{constructor(){super(new xs(1e5,1e5,2,2),new vs({visible:!1,wireframe:!0,side:Rn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),os.copy(yr).applyQuaternion(t==="local"?this.worldQuaternion:cs),gr.copy(li).applyQuaternion(t==="local"?this.worldQuaternion:cs),_r.copy(Mr).applyQuaternion(t==="local"?this.worldQuaternion:cs),Qe.copy(gr),this.mode){case"translate":case"scale":switch(this.axis){case"X":Qe.copy(this.eye).cross(os),mn.copy(os).cross(Qe);break;case"Y":Qe.copy(this.eye).cross(gr),mn.copy(gr).cross(Qe);break;case"Z":Qe.copy(this.eye).cross(_r),mn.copy(_r).cross(Qe);break;case"XY":mn.copy(_r);break;case"YZ":mn.copy(os);break;case"XZ":Qe.copy(_r),mn.copy(gr);break;case"XYZ":case"E":mn.set(0,0,0);break}break;case"rotate":default:mn.set(0,0,0)}mn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Zl.lookAt(Gt.set(0,0,0),mn,Qe),this.quaternion.setFromRotationMatrix(Zl)),super.updateMatrixWorld(e)}}function tv(i){let e,t,n,r;return e=new ko({props:{dispose:i[0],object:i[1]}}),n=new Kc({props:{object:i[1]}}),{c(){Ge(e.$$.fragment),t=Re(),Ge(n.$$.fragment)},m(s,o){Ne(e,s,o),be(s,t,o),Ne(n,s,o),r=!0},p(s,[o]){const a={};o&1&&(a.dispose=s[0]),o&2&&(a.object=s[1]),e.$set(a);const l={};o&2&&(l.object=s[1]),n.$set(l)},i(s){r||(ne(e.$$.fragment,s),ne(n.$$.fragment,s),r=!0)},o(s){ae(e.$$.fragment,s),ae(n.$$.fragment,s),r=!1},d(s){Oe(e,s),s&&ge(t),Oe(n,s)}}}function nv(i,e,t){let n,r,{autoPauseOrbitControls:s=!0}=e,{mode:o=void 0}=e,{axis:a=null}=e,{dragging:l=!1}=e,{enabled:c=void 0}=e,{translationSnap:u=void 0}=e,{scaleSnap:h=void 0}=e,{rotationSnap:f=void 0}=e,{showX:m=void 0}=e,{showY:_=void 0}=e,{showZ:d=void 0}=e,{size:p=void 0}=e,{space:g=void 0}=e,{dispose:b=void 0}=e;const{camera:x,renderer:y,invalidate:E,scene:S}=Mn();Ce(i,x,R=>t(20,r=R));const C=Zc();if(Ce(i,C,R=>t(19,n=R)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const v=tr(),M=()=>{if(!!r)return vn(r).orbitControls};let A;const D=()=>{if(A!==void 0){const R=M();R&&(R.enabled=A),A=void 0}};Ke(D);const G={change:R=>{n&&vn(n).onTransform?.(),E("TransformControls: change event"),v("change",R)},"camera-changed":R=>v("camera-changed",R),"object-changed":R=>v("object-changed",R),"enabled-changed":R=>v("enabled-changed",R),"axis-changed":R=>{t(4,a=R.value),v("axis-changed",R)},"mode-changed":R=>v("mode-changed",R),"translationSnap-changed":R=>v("translationSnap-changed",R),"rotationSnap-changed":R=>v("rotationSnap-changed",R),"scaleSnap-changed":R=>v("scaleSnap-changed",R),"space-changed":R=>v("space-changed",R),"size-changed":R=>v("size-changed",R),"dragging-changed":R=>{t(5,l=R.value);e:if(s){const V=M();if(!V)break e;const Y=!R.value;if(V.enabled===Y)break e;R.value&&(A=V.enabled),V.enabled=Y}v("dragging-changed",R)},"showX-changed":R=>v("showX-changed",R),"showY-changed":R=>v("showY-changed",R),"showZ-changed":R=>v("showZ-changed",R),"worldPosition-changed":R=>v("worldPosition-changed",R),"worldPositionStart-changed":R=>v("worldPositionStart-changed",R),"worldQuaternion-changed":R=>v("worldQuaternion-changed",R),"worldQuaternionStart-changed":R=>v("worldQuaternionStart-changed",R),"cameraPosition-changed":R=>v("cameraPosition-changed",R),"cameraQuaternion-changed":R=>v("cameraQuaternion-changed",R),"pointStart-changed":R=>v("pointStart-changed",R),"pointEnd-changed":R=>v("pointEnd-changed",R),"rotationAxis-changed":R=>v("rotationAxis-changed",R),"rotationAngle-changed":R=>v("rotationAngle-changed",R),"eye-changed":R=>v("eye-changed",R),mouseDown:()=>v("mouseDown"),mouseUp:()=>v("mouseUp"),objectChange:()=>v("objectChange")};if(!y)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const P=new q0(r,y.domElement),z=()=>P.reset();P.attach(n);const k=()=>{Object.entries(G).forEach(([R,V])=>{P.addEventListener(R,V)})},Q=()=>{Object.entries(G).forEach(([R,V])=>{P.removeEventListener(R,V)})};return k(),S.add(P),Ke(()=>{P.detach(),S.remove(P),Q()}),i.$$set=R=>{"autoPauseOrbitControls"in R&&t(6,s=R.autoPauseOrbitControls),"mode"in R&&t(7,o=R.mode),"axis"in R&&t(4,a=R.axis),"dragging"in R&&t(5,l=R.dragging),"enabled"in R&&t(8,c=R.enabled),"translationSnap"in R&&t(9,u=R.translationSnap),"scaleSnap"in R&&t(10,h=R.scaleSnap),"rotationSnap"in R&&t(11,f=R.rotationSnap),"showX"in R&&t(12,m=R.showX),"showY"in R&&t(13,_=R.showY),"showZ"in R&&t(14,d=R.showZ),"size"in R&&t(15,p=R.size),"space"in R&&t(16,g=R.space),"dispose"in R&&t(0,b=R.dispose)},i.$$.update=()=>{i.$$.dirty&64&&(s||D()),i.$$.dirty&256&&c!==void 0&&t(1,P.enabled=c,P),i.$$.dirty&4096&&m!==void 0&&t(1,P.showX=m,P),i.$$.dirty&8192&&_!==void 0&&t(1,P.showY=_,P),i.$$.dirty&16384&&d!==void 0&&t(1,P.showZ=d,P),i.$$.dirty&130&&o!==void 0&&P.setMode(o),i.$$.dirty&514&&u!==void 0&&P.setTranslationSnap(u),i.$$.dirty&1026&&h!==void 0&&P.setScaleSnap(h),i.$$.dirty&2050&&f!==void 0&&P.setRotationSnap(f),i.$$.dirty&32770&&p!==void 0&&P.setSize(p),i.$$.dirty&65538&&g!==void 0&&P.setSpace(g)},[b,P,x,C,a,l,s,o,c,u,h,f,m,_,d,p,g,z]}class iv extends st{constructor(e){super(),rt(this,e,nv,tv,tt,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}const eu=new gt;eu.scale.set(0,0,0);eu.matrix;new ut().fromArray(new Array(16).fill(0));new Ye(16777215);const tu=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let r=0;r<t.length;r+=1)i=i[t[r]];return{target:i,key:n}}else return{target:i,key:e}},co=Symbol("initialValueBeforeAttach"),rv=()=>{const{invalidate:i}=Mn();let e=!1,t=co,n,r,s;const o=(l,c,u)=>{if(a(),!u){const h=l;(h?.isMaterial||!1)&&(u="material"),(h?.isBufferGeometry||h?.isGeometry||!1)&&(u="geometry")}if(!!u){if(typeof u=="function")n=u(c,l);else{const{target:h,key:f}=tu(c,u);t=h[f],h[f]=l,r=h,s=f}e=!0,i()}},a=()=>{!e||(n?(n(),n=void 0):r&&s&&t!==co&&(r[s]=t,t=co,r=void 0,s=void 0),e=!1,i())};return Ke(()=>{a()}),{update:o}},sv=i=>i&&i.isCamera,nu=i=>i&&i.isOrthographicCamera,iu=i=>i&&i.isPerspectiveCamera,ov=i=>iu(i)||nu(i),av=()=>{const{invalidate:i,size:e}=Mn(),{setCamera:t}=Qc();let n,r;Ke(()=>{r?.()});const s=l=>{!n||(nu(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()):iu(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()))};return{update:(l,c)=>{if(r?.(),c||!ov(l)){n=void 0;return}n=l,r=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!sv(l)||!c||(t(l),i())}}},Ql=i=>!!i?.addEventListener,lv=()=>{const i=tr(),e=er(),t=f=>{f?.type&&i(f.type,f)},n=(f,m)=>{Ql(f)&&m.forEach(_=>{f.removeEventListener(_,t)})},r=(f,m)=>{Ql(f)&&m.forEach(_=>{f.addEventListener(_,t)})};let s=[],o;const a=je([]),l=a.subscribe(f=>{n(o,s),r(o,f),s=f});Ke(l);const c=je(),u=c.subscribe(f=>{n(o,s),r(f,s),o=f});return Ke(u),Ke(()=>{n(o,s)}),Kn(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:f=>{c.set(f)}}},cv=["$$scope","$$slots","type","args","attach","instance"],uv=["fov","aspect","near","far","left","right","top","bottom","zoom"],fv=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,hv=()=>{const{invalidate:i}=Mn(),e=new Map,t=(r,s,o,a)=>{if(fv(o)){const u=e.get(s);if(u&&u.instance===r&&u.value===o)return;e.set(s,{instance:r,value:o})}const{key:l,target:c}=tu(r,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof c[l]?.setScalar=="function")c[l].setScalar(o);else if(typeof c[l]?.set=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;uv.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(r,s,o)=>{for(const a in s)cv.includes(a)||t(r,a,s[a],o),i()}}},dv=i=>({ref:i&1}),Kl=i=>({ref:i[0]}),pv=i=>({ref:i&1}),Jl=i=>({ref:i[0]});function $l(i){let e,t;return e=new ko({props:{object:i[0],dispose:i[1]}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.object=n[0]),r&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function mv(i){let e;const t=i[12].default,n=Fn(t,i,i[13],Kl);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8193)&&Nn(n,t,r,r[13],e?zn(t,r[13],s,dv):On(r[13]),Kl)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}function gv(i){let e,t;return e=new Uo({props:{object:i[0],$$slots:{default:[_v]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.object=n[0]),r&8193&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function _v(i){let e;const t=i[12].default,n=Fn(t,i,i[13],Jl);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8193)&&Nn(n,t,r,r[13],e?zn(t,r[13],s,pv):On(r[13]),Jl)},i(r){e||(ne(n,r),e=!0)},o(r){ae(n,r),e=!1},d(r){n&&n.d(r)}}}function vv(i){let e=i[4](i[0]),t,n,r,s,o,a,l=e&&$l(i);const c=[gv,mv],u=[];function h(f,m){return m&1&&(n=null),n==null&&(n=!!f[3](f[0])),n?0:1}return r=h(i,-1),s=u[r]=c[r](i),{c(){l&&l.c(),t=Re(),s.c(),o=vi()},m(f,m){l&&l.m(f,m),be(f,t,m),u[r].m(f,m),be(f,o,m),a=!0},p(f,[m]){m&1&&(e=f[4](f[0])),e?l?(l.p(f,m),m&1&&ne(l,1)):(l=$l(f),l.c(),ne(l,1),l.m(t.parentNode,t)):l&&(Nt(),ae(l,1,1,()=>{l=null}),Ot());let _=r;r=h(f,m),r===_?u[r].p(f,m):(Nt(),ae(u[_],1,1,()=>{u[_]=null}),Ot(),s=u[r],s?s.p(f,m):(s=u[r]=c[r](f),s.c()),ne(s,1),s.m(o.parentNode,o))},i(f){a||(ne(l),ne(s),a=!0)},o(f){ae(l),ae(s),a=!1},d(f){l&&l.d(f),f&&ge(t),u[r].d(f),f&&ge(o)}}}function xv(i,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let r=Ho(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:m=void 0}=e;const _=yn("threlte-hierarchical-parent-context");Ce(i,_,A=>t(11,s=A));const d=A=>typeof A=="function"&&/^\s*class\s+/.test(A.toString()),p=A=>Array.isArray(A);let{ref:g=d(l)&&p(c)?new l(...c):d(l)?new l:l}=e,b=!1;const x=je(g);an("threlte-hierarchical-parent-context",x);const y=hv(),E=av(),S=rv(),C=lv(),v=A=>!!A.isObject3D,M=A=>A.dispose!==void 0;return i.$$set=A=>{e=uo(uo({},e),fu(A)),t(21,r=Ho(e,n)),"type"in A&&t(5,l=A.type),"args"in A&&t(6,c=A.args),"attach"in A&&t(7,u=A.attach),"manual"in A&&t(8,h=A.manual),"makeDefault"in A&&t(9,f=A.makeDefault),"dispose"in A&&t(1,m=A.dispose),"ref"in A&&t(0,g=A.ref),"$$scope"in A&&t(13,a=A.$$scope)},i.$$.update=()=>{i.$$.dirty&1120&&(b?t(0,g=d(l)&&p(c)?new l(...c):d(l)?new l:l):t(10,b=!0)),i.$$.dirty&1&&x.set(g),y.updateProps(g,r,{manualCamera:h}),i.$$.dirty&257&&E.update(g,h),i.$$.dirty&513&&E.makeDefaultCamera(g,f),i.$$.dirty&2177&&S.update(g,s,u),i.$$.dirty&1&&C.updateRef(g)},[g,m,_,v,M,l,c,u,h,f,b,s,o,a]}class bv extends st{constructor(e){super(),rt(this,e,xv,vv,tt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function yv(i){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class ec extends st{constructor(e){super(),rt(this,e,yv,null,tt,{})}}new Proxy(ec,{get(i,e){return i[e]||ec}});X0(ul,()=>new ul(Vc));function tc(i){let e,t,n;return t=new S0({props:{$$slots:{default:[wv]},$$scope:{ctx:i}}}),{c(){e=de("div"),Ge(t.$$.fragment),H(e,"class","modeler z-[0] absolute h-screen w-screen")},m(r,s){be(r,e,s),Ne(t,e,null),n=!0},p(r,s){const o={};s&1048687&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){n||(ne(t.$$.fragment,r),n=!0)},o(r){ae(t.$$.fragment,r),n=!1},d(r){r&&ge(e),Oe(t)}}}function Mv(i){let e,t;return e=new iv({props:{mode:i[3],translationSnap:Ev,rotationSnap:si.degToRad(Tv),size:.5,space:"local"}}),e.$on("objectChange",i[14]),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p(n,r){const s={};r&8&&(s.mode=n[3]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function wv(i){let e,t,n,r,s;e=new j0({props:{position:i[5],lookAt:i[6],fov:45}});function o(l){i[15](l)}let a={type:le,"position.x":i[1].x,"position.y":i[1].y,"position.z":i[1].z,quaternion:5,geometry:new ht(0,0,0),material:new jg,"rotation.x":i[2].x,"rotation.y":i[2].y,"rotation.z":i[2].z,$$slots:{default:[Mv]},$$scope:{ctx:i}};return i[0]!==void 0&&(a.ref=i[0]),n=new bv({props:a}),pi.push(()=>ms(n,"ref",o)),{c(){Ge(e.$$.fragment),t=Re(),Ge(n.$$.fragment)},m(l,c){Ne(e,l,c),be(l,t,c),Ne(n,l,c),s=!0},p(l,c){const u={};c&32&&(u.position=l[5]),c&64&&(u.lookAt=l[6]),e.$set(u);const h={};c&2&&(h["position.x"]=l[1].x),c&2&&(h["position.y"]=l[1].y),c&2&&(h["position.z"]=l[1].z),c&4&&(h["rotation.x"]=l[2].x),c&4&&(h["rotation.y"]=l[2].y),c&4&&(h["rotation.z"]=l[2].z),c&1048584&&(h.$$scope={dirty:c,ctx:l}),!r&&c&1&&(r=!0,h.ref=l[0],ps(()=>r=!1)),n.$set(h)},i(l){s||(ne(e.$$.fragment,l),ne(n.$$.fragment,l),s=!0)},o(l){ae(e.$$.fragment,l),ae(n.$$.fragment,l),s=!1},d(l){Oe(e,l),l&&ge(t),Oe(n,l)}}}function Sv(i){let e,t,n=i[4]&&tc(i);return{c(){n&&n.c(),e=vi()},m(r,s){n&&n.m(r,s),be(r,e,s),t=!0},p(r,[s]){r[4]?n?(n.p(r,s),s&16&&ne(n,1)):(n=tc(r),n.c(),ne(n,1),n.m(e.parentNode,e)):n&&(Nt(),ae(n,1,1,()=>{n=null}),Ot())},i(r){t||(ne(n),t=!0)},o(r){ae(n),t=!1},d(r){n&&n.d(r),r&&ge(e)}}}let Ev=.01,Tv=1;function Av(i,e,t){let n,r,s,o,a,l;Ce(i,wo,C=>t(13,n=C));const{show:c,cameraPosition:u,cameraLookAt:h,objectPosition:f,objectEuler:m,entity:_}=Hi;Ce(i,c,C=>t(4,o=C)),Ce(i,u,C=>t(5,a=C)),Ce(i,h,C=>t(6,l=C)),Ce(i,f,C=>t(1,r=C)),Ce(i,m,C=>t(2,s=C));let d,p="translate",g=!1;Xc("freecamMode",C=>{C==!1&&(g=!1)}),Kn(()=>{window.addEventListener("keydown",async function(C){switch(C.key){case"z":g=!g,await qi("gizmo:toggleFocus",g);break}})}),Ke(()=>{window.removeEventListener("keydown",async function(C){switch(C.key){case"z":await qi("gizmo:toggleFocus");break}})});function b(C){return C.x!=r.x||C.y!=r.y||C.z!=r.z}function x(C){return C.x!=s.x||C.y!=s.y||C.z!=s.z}function y(){d&&(b(d.position)&&(Ln(f,r.x=d.position.x,r),Ln(f,r.y=d.position.y,r),Ln(f,r.z=d.position.z,r),Hi.sendMovementUpdate(hc(r))),x(d.rotation)&&(Ln(m,s.x=d.rotation.x,s),Ln(m,s.y=d.rotation.y,s),Ln(m,s.z=d.rotation.z,s),Hi.sendRotationUpdate(s)))}const E=C=>{y()};function S(C){d=C,t(0,d)}return i.$$.update=()=>{i.$$.dirty&8199&&(d&&(d.rotation.set(s.x,s.y,s.z,s.order),d.position.set(r.x,r.y,r.z)),n&&t(3,p=n))},[d,r,s,p,o,a,l,c,u,h,f,m,y,n,E,S]}class Cv extends st{constructor(e){super(),rt(this,e,Av,Sv,tt,{})}}function Lv(i){let e,t,n,r,s,o=i[0]&&nc();return t=new B_({}),r=new X_({}),{c(){o&&o.c(),e=Re(),Ge(t.$$.fragment),n=Re(),Ge(r.$$.fragment)},m(a,l){o&&o.m(a,l),be(a,e,l),Ne(t,a,l),be(a,n,l),Ne(r,a,l),s=!0},p(a,l){a[0]?o?l&1&&ne(o,1):(o=nc(),o.c(),ne(o,1),o.m(e.parentNode,e)):o&&(Nt(),ae(o,1,1,()=>{o=null}),Ot())},i(a){s||(ne(o),ne(t.$$.fragment,a),ne(r.$$.fragment,a),s=!0)},o(a){ae(o),ae(t.$$.fragment,a),ae(r.$$.fragment,a),s=!1},d(a){o&&o.d(a),a&&ge(e),Oe(t,a),a&&ge(n),Oe(r,a)}}}function Pv(i){let e,t;return e=new r_({}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},p:qe,i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function nc(i){let e,t;return e=new Cv({}),{c(){Ge(e.$$.fragment)},m(n,r){Ne(e,n,r),t=!0},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){ae(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function Dv(i){let e,t,n,r;const s=[Pv,Lv],o=[];function a(l,c){return l[2]?0:l[1]?1:-1}return~(e=a(i))&&(t=o[e]=s[e](i)),{c(){t&&t.c(),n=vi()},m(l,c){~e&&o[e].m(l,c),be(l,n,c),r=!0},p(l,[c]){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(t&&(Nt(),ae(o[u],1,1,()=>{o[u]=null}),Ot()),~e?(t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),ne(t,1),t.m(n.parentNode,n)):t=null)},i(l){r||(ne(t),r=!0)},o(l){ae(t),r=!1},d(l){~e&&o[e].d(l),l&&ge(n)}}}function Rv(i,e,t){let n,r,s,o,a;Zg(),document.onkeyup=Qn.handleKeyUp;let{isDev:l}=Qn;Ce(i,l,m=>t(9,a=m));let{showElevator:c}=mi;Ce(i,c,m=>t(2,o=m));let{showKeypad:u}=Pr;Ce(i,u,m=>t(8,s=m));let{showFurniture:h,showFurniturePlacement:f}=en;if(Ce(i,h,m=>t(1,r=m)),Ce(i,f,m=>t(0,n=m)),a){const m={floorInfo:[{floorNumber:0,floorRooms:"001 to 050"},{floorNumber:1,floorRooms:"101 to 150"},{floorNumber:2,floorRooms:"201 to 250"},{floorNumber:3,floorRooms:"301 to 350"},{floorNumber:4,floorRooms:"401 to 450"},{floorNumber:5,floorRooms:"501 to 550"},{floorNumber:6,floorRooms:"601 to 650"},{floorNumber:7,floorRooms:"701 to 750"},{floorNumber:48,floorRooms:"801 to 850"},{floorNumber:9,floorRooms:"901 to 950"},{floorNumber:10,floorRooms:"1001 to 1050"},{floorNumber:11,floorRooms:"1101 to 1150"},{floorNumber:12,floorRooms:"1201 to 1250"},{floorNumber:13,floorRooms:"1301 to 1350"},{floorNumber:14,floorRooms:"1401 to 1450"},{floorNumber:15,floorRooms:"1501 to 1550"},{floorNumber:16,floorRooms:"1601 to 1650"},{floorNumber:17,floorRooms:"1701 to 1750"},{floorNumber:18,floorRooms:"1801 to 1850"},{floorNumber:19,floorRooms:"1901 to 1950"}],currentFloor:3};o&&mi.showElevatorUi(m),s&&Pr.showKeypadUi();const _={furnitureList:[{categoryName:"Tables",items:[{name:"Two legged",label:"Two legged",price:""},{name:"Four legged",label:"Four legged",price:""}]},{categoryName:"Chairs",items:[{name:"Plastic",label:"Plastic",price:""},{name:"Wood",label:"Wood",price:""},{name:"Metal",label:"Metal",price:""}]},{categoryName:"Mattress",items:[{name:"Memory Foam",label:"Memory Foam",price:""},{name:"Spring",label:"Spring",price:""},{name:"Cotton",label:"Cotton",price:""},{name:"King",label:"King",price:""},{name:"Queen",label:"Queen",price:""}]},{categoryName:"Mattress1",items:[{name:"Memory Foam",label:"Memory Foam",price:""},{name:"Spring",label:"Spring",price:""},{name:"Cotton",label:"Cotton",price:""},{name:"King",label:"King",price:""},{name:"Queen",label:"Queen",price:""}]},{categoryName:"Mattress2",items:[{name:"Memory Foam",label:"Memory Foam",price:""},{name:"Spring",label:"Spring",price:""},{name:"Cotton",label:"Cotton",price:""},{name:"King",label:"King",price:""},{name:"Queen",label:"Queen",price:""}]},{categoryName:"Mattress3",items:[{name:"Memory Foam",label:"Memory Foam",price:""},{name:"Spring",label:"Spring",price:""},{name:"Cotton",label:"Cotton",price:""},{name:"King",label:"King",price:""},{name:"Queen",label:"Queen",price:""}]}],existingFurnitureList:[{id:1,name:"Plastic"},{id:2,name:"Plastic"},{id:3,name:"King"},{id:4,name:"Plastic"},{id:5,name:"Plastic"},{id:6,name:"King"}]};r&&en.showFurnitureUi(_);const d=[];n&&en.showFurniturePlacementUi(d)}return[n,r,o,l,c,u,h,f]}class Iv extends st{constructor(e){super(),rt(this,e,Rv,Dv,tt,{})}}new Iv({target:document.getElementById("app")});
