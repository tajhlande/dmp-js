var TS=Object.defineProperty;var CS=(o,t,i)=>t in o?TS(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var ce=(o,t,i)=>CS(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function DS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kh={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function LS(){if(p_)return al;p_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var c in l)c!=="key"&&(u[c]=l[c])}else u=l;return l=u.ref,{$$typeof:o,type:a,key:h,ref:l!==void 0?l:null,props:u}}return al.Fragment=t,al.jsx=i,al.jsxs=i,al}var m_;function RS(){return m_||(m_=1,Kh.exports=LS()),Kh.exports}var qs=RS(),Jh={exports:{}},Yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function zS(){if(g_)return Yt;g_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function M(R){return R===null||typeof R!="object"?null:(R=y&&R[y]||R["@@iterator"],typeof R=="function"?R:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function S(R,I,Y){this.props=R,this.context=I,this.refs=v,this.updater=Y||w}S.prototype.isReactComponent={},S.prototype.setState=function(R,I){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,I,"setState")},S.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function A(){}A.prototype=S.prototype;function D(R,I,Y){this.props=R,this.context=I,this.refs=v,this.updater=Y||w}var z=D.prototype=new A;z.constructor=D,b(z,S.prototype),z.isPureReactComponent=!0;var C=Array.isArray;function N(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function B(R,I,Y){var ut=Y.ref;return{$$typeof:o,type:R,key:I,ref:ut!==void 0?ut:null,props:Y}}function tt(R,I){return B(R.type,I,R.props)}function ot(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function vt(R){var I={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Y){return I[Y]})}var nt=/\/+/g;function Z(R,I){return typeof R=="object"&&R!==null&&R.key!=null?vt(""+R.key):I.toString(36)}function ht(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(N,N):(R.status="pending",R.then(function(I){R.status==="pending"&&(R.status="fulfilled",R.value=I)},function(I){R.status==="pending"&&(R.status="rejected",R.reason=I)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function G(R,I,Y,ut,yt){var at=typeof R;(at==="undefined"||at==="boolean")&&(R=null);var Rt=!1;if(R===null)Rt=!0;else switch(at){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(R.$$typeof){case o:case t:Rt=!0;break;case g:return Rt=R._init,G(Rt(R._payload),I,Y,ut,yt)}}if(Rt)return yt=yt(R),Rt=ut===""?"."+Z(R,0):ut,C(yt)?(Y="",Rt!=null&&(Y=Rt.replace(nt,"$&/")+"/"),G(yt,I,Y,"",function(wt){return wt})):yt!=null&&(ot(yt)&&(yt=tt(yt,Y+(yt.key==null||R&&R.key===yt.key?"":(""+yt.key).replace(nt,"$&/")+"/")+Rt)),I.push(yt)),1;Rt=0;var Ot=ut===""?".":ut+":";if(C(R))for(var Tt=0;Tt<R.length;Tt++)ut=R[Tt],at=Ot+Z(ut,Tt),Rt+=G(ut,I,Y,at,yt);else if(Tt=M(R),typeof Tt=="function")for(R=Tt.call(R),Tt=0;!(ut=R.next()).done;)ut=ut.value,at=Ot+Z(ut,Tt++),Rt+=G(ut,I,Y,at,yt);else if(at==="object"){if(typeof R.then=="function")return G(ht(R),I,Y,ut,yt);throw I=String(R),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function Q(R,I,Y){if(R==null)return R;var ut=[],yt=0;return G(R,ut,"","",function(at){return I.call(Y,at,yt++)}),ut}function K(R){if(R._status===-1){var I=R._result;I=I(),I.then(function(Y){(R._status===0||R._status===-1)&&(R._status=1,R._result=Y)},function(Y){(R._status===0||R._status===-1)&&(R._status=2,R._result=Y)}),R._status===-1&&(R._status=0,R._result=I)}if(R._status===1)return R._result.default;throw R._result}var W=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},j={map:Q,forEach:function(R,I,Y){Q(R,function(){I.apply(this,arguments)},Y)},count:function(R){var I=0;return Q(R,function(){I++}),I},toArray:function(R){return Q(R,function(I){return I})||[]},only:function(R){if(!ot(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return Yt.Activity=_,Yt.Children=j,Yt.Component=S,Yt.Fragment=i,Yt.Profiler=l,Yt.PureComponent=D,Yt.StrictMode=a,Yt.Suspense=m,Yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Yt.__COMPILER_RUNTIME={__proto__:null,c:function(R){return H.H.useMemoCache(R)}},Yt.cache=function(R){return function(){return R.apply(null,arguments)}},Yt.cacheSignal=function(){return null},Yt.cloneElement=function(R,I,Y){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ut=b({},R.props),yt=R.key;if(I!=null)for(at in I.key!==void 0&&(yt=""+I.key),I)!T.call(I,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&I.ref===void 0||(ut[at]=I[at]);var at=arguments.length-2;if(at===1)ut.children=Y;else if(1<at){for(var Rt=Array(at),Ot=0;Ot<at;Ot++)Rt[Ot]=arguments[Ot+2];ut.children=Rt}return B(R.type,yt,ut)},Yt.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},Yt.createElement=function(R,I,Y){var ut,yt={},at=null;if(I!=null)for(ut in I.key!==void 0&&(at=""+I.key),I)T.call(I,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(yt[ut]=I[ut]);var Rt=arguments.length-2;if(Rt===1)yt.children=Y;else if(1<Rt){for(var Ot=Array(Rt),Tt=0;Tt<Rt;Tt++)Ot[Tt]=arguments[Tt+2];yt.children=Ot}if(R&&R.defaultProps)for(ut in Rt=R.defaultProps,Rt)yt[ut]===void 0&&(yt[ut]=Rt[ut]);return B(R,at,yt)},Yt.createRef=function(){return{current:null}},Yt.forwardRef=function(R){return{$$typeof:c,render:R}},Yt.isValidElement=ot,Yt.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:K}},Yt.memo=function(R,I){return{$$typeof:p,type:R,compare:I===void 0?null:I}},Yt.startTransition=function(R){var I=H.T,Y={};H.T=Y;try{var ut=R(),yt=H.S;yt!==null&&yt(Y,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(N,W)}catch(at){W(at)}finally{I!==null&&Y.types!==null&&(I.types=Y.types),H.T=I}},Yt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Yt.use=function(R){return H.H.use(R)},Yt.useActionState=function(R,I,Y){return H.H.useActionState(R,I,Y)},Yt.useCallback=function(R,I){return H.H.useCallback(R,I)},Yt.useContext=function(R){return H.H.useContext(R)},Yt.useDebugValue=function(){},Yt.useDeferredValue=function(R,I){return H.H.useDeferredValue(R,I)},Yt.useEffect=function(R,I){return H.H.useEffect(R,I)},Yt.useEffectEvent=function(R){return H.H.useEffectEvent(R)},Yt.useId=function(){return H.H.useId()},Yt.useImperativeHandle=function(R,I,Y){return H.H.useImperativeHandle(R,I,Y)},Yt.useInsertionEffect=function(R,I){return H.H.useInsertionEffect(R,I)},Yt.useLayoutEffect=function(R,I){return H.H.useLayoutEffect(R,I)},Yt.useMemo=function(R,I){return H.H.useMemo(R,I)},Yt.useOptimistic=function(R,I){return H.H.useOptimistic(R,I)},Yt.useReducer=function(R,I,Y){return H.H.useReducer(R,I,Y)},Yt.useRef=function(R){return H.H.useRef(R)},Yt.useState=function(R){return H.H.useState(R)},Yt.useSyncExternalStore=function(R,I,Y){return H.H.useSyncExternalStore(R,I,Y)},Yt.useTransition=function(){return H.H.useTransition()},Yt.version="19.2.5",Yt}var __;function hp(){return __||(__=1,Jh.exports=zS()),Jh.exports}var dp=hp();const js=DS(dp);var $h={exports:{}},rl={},td={exports:{}},ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function OS(){return v_||(v_=1,(function(o){function t(G,Q){var K=G.length;G.push(Q);t:for(;0<K;){var W=K-1>>>1,j=G[W];if(0<l(j,Q))G[W]=Q,G[K]=j,K=W;else break t}}function i(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var Q=G[0],K=G.pop();if(K!==Q){G[0]=K;t:for(var W=0,j=G.length,R=j>>>1;W<R;){var I=2*(W+1)-1,Y=G[I],ut=I+1,yt=G[ut];if(0>l(Y,K))ut<j&&0>l(yt,Y)?(G[W]=yt,G[ut]=K,W=ut):(G[W]=Y,G[I]=K,W=I);else if(ut<j&&0>l(yt,K))G[W]=yt,G[ut]=K,W=ut;else break t}}return Q}function l(G,Q){var K=G.sortIndex-Q.sortIndex;return K!==0?K:G.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,c=h.now();o.unstable_now=function(){return h.now()-c}}var m=[],p=[],g=1,_=null,y=3,M=!1,w=!1,b=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function z(G){for(var Q=i(p);Q!==null;){if(Q.callback===null)a(p);else if(Q.startTime<=G)a(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function C(G){if(b=!1,z(G),!w)if(i(m)!==null)w=!0,N||(N=!0,vt());else{var Q=i(p);Q!==null&&ht(C,Q.startTime-G)}}var N=!1,H=-1,T=5,B=-1;function tt(){return v?!0:!(o.unstable_now()-B<T)}function ot(){if(v=!1,N){var G=o.unstable_now();B=G;var Q=!0;try{t:{w=!1,b&&(b=!1,A(H),H=-1),M=!0;var K=y;try{e:{for(z(G),_=i(m);_!==null&&!(_.expirationTime>G&&tt());){var W=_.callback;if(typeof W=="function"){_.callback=null,y=_.priorityLevel;var j=W(_.expirationTime<=G);if(G=o.unstable_now(),typeof j=="function"){_.callback=j,z(G),Q=!0;break e}_===i(m)&&a(m),z(G)}else a(m);_=i(m)}if(_!==null)Q=!0;else{var R=i(p);R!==null&&ht(C,R.startTime-G),Q=!1}}break t}finally{_=null,y=K,M=!1}Q=void 0}}finally{Q?vt():N=!1}}}var vt;if(typeof D=="function")vt=function(){D(ot)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Z=nt.port2;nt.port1.onmessage=ot,vt=function(){Z.postMessage(null)}}else vt=function(){S(ot,0)};function ht(G,Q){H=S(function(){G(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(G){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var K=y;y=Q;try{return G()}finally{y=K}},o.unstable_requestPaint=function(){v=!0},o.unstable_runWithPriority=function(G,Q){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var K=y;y=G;try{return Q()}finally{y=K}},o.unstable_scheduleCallback=function(G,Q,K){var W=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?W+K:W):K=W,G){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=K+j,G={id:g++,callback:Q,priorityLevel:G,startTime:K,expirationTime:j,sortIndex:-1},K>W?(G.sortIndex=K,t(p,G),i(m)===null&&G===i(p)&&(b?(A(H),H=-1):b=!0,ht(C,K-W))):(G.sortIndex=j,t(m,G),w||M||(w=!0,N||(N=!0,vt()))),G},o.unstable_shouldYield=tt,o.unstable_wrapCallback=function(G){var Q=y;return function(){var K=y;y=Q;try{return G.apply(this,arguments)}finally{y=K}}}})(ed)),ed}var y_;function US(){return y_||(y_=1,td.exports=OS()),td.exports}var nd={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function NS(){if(x_)return Mn;x_=1;var o=hp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Mn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Mn.flushSync=function(m){var p=h.T,g=a.p;try{if(h.T=null,a.p=2,m)return m()}finally{h.T=p,a.p=g,a.d.f()}},Mn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Mn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Mn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=c(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=c(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Mn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=c(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=c(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Mn.requestFormReset=function(m){a.d.r(m)},Mn.unstable_batchedUpdates=function(m,p){return m(p)},Mn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.2.5",Mn}var b_;function PS(){if(b_)return nd.exports;b_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nd.exports=NS(),nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function BS(){if(S_)return rl;S_=1;var o=US(),t=hp(),i=PS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function c(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,s=n;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(s=f.return,s!==null){r=s;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return m(f),e;if(d===s)return m(f),n;d=d.sibling}throw Error(a(188))}if(r.return!==s.return)r=f,s=d;else{for(var x=!1,E=f.child;E;){if(E===r){x=!0,r=f,s=d;break}if(E===s){x=!0,s=f,r=d;break}E=E.sibling}if(!x){for(E=d.child;E;){if(E===r){x=!0,r=d,s=f;break}if(E===s){x=!0,s=d,r=f;break}E=E.sibling}if(!x)throw Error(a(189))}}if(r.alternate!==s)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),tt=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function vt(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case v:return"StrictMode";case C:return"Suspense";case N:return"SuspenseList";case B:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case D:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}var ht=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},W=[],j=-1;function R(e){return{current:e}}function I(e){0>j||(e.current=W[j],W[j]=null,j--)}function Y(e,n){j++,W[j]=e.current,e.current=n}var ut=R(null),yt=R(null),at=R(null),Rt=R(null);function Ot(e,n){switch(Y(at,n),Y(yt,e),Y(ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?B0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=B0(n),e=G0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(ut),Y(ut,e)}function Tt(){I(ut),I(yt),I(at)}function wt(e){e.memoizedState!==null&&Y(Rt,e);var n=ut.current,r=G0(n,e.type);n!==r&&(Y(yt,e),Y(ut,r))}function he(e){yt.current===e&&(I(ut),I(yt)),Rt.current===e&&(I(Rt),tl._currentValue=K)}var jt,Ft;function Se(e){if(jt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",Ft=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+Ft}var Be=!1;function Ne(e,n){if(!e||Be)return"";Be=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var rt=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){rt=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),x=d[0],E=d[1];if(x&&E){var P=x.split(`
`),it=E.split(`
`);for(f=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;f<it.length&&!it[f].includes("DetermineComponentFrameRoot");)f++;if(s===P.length||f===it.length)for(s=P.length-1,f=it.length-1;1<=s&&0<=f&&P[s]!==it[f];)f--;for(;1<=s&&0<=f;s--,f--)if(P[s]!==it[f]){if(s!==1||f!==1)do if(s--,f--,0>f||P[s]!==it[f]){var dt=`
`+P[s].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=s&&0<=f);break}}}finally{Be=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Se(r):""}function Tn(e,n){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==n&&n!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return Se("Activity");default:return""}}function Ge(e){try{var n="",r=null;do n+=Tn(e,r),r=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var de=Object.prototype.hasOwnProperty,bn=o.unstable_scheduleCallback,Sn=o.unstable_cancelCallback,U=o.unstable_shouldYield,L=o.unstable_requestPaint,ct=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,St=o.unstable_ImmediatePriority,At=o.unstable_UserBlockingPriority,It=o.unstable_NormalPriority,F=o.unstable_LowPriority,$=o.unstable_IdlePriority,Dt=o.log,zt=o.unstable_setDisableYieldValue,Et=null,Lt=null;function Ut(e){if(typeof Dt=="function"&&zt(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(Et,e)}catch{}}var Wt=Math.clz32?Math.clz32:X,re=Math.log,ye=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(re(e)/ye|0)|0}var pt=256,xt=262144,Ct=4194304;function Bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function le(e,n,r){var s=e.pendingLanes;if(s===0)return 0;var f=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~d,s!==0?f=Bt(s):(x&=E,x!==0?f=Bt(x):r||(r=E&~e,r!==0&&(f=Bt(r))))):(E=s&~d,E!==0?f=Bt(E):x!==0?f=Bt(x):r||(r=s&~e,r!==0&&(f=Bt(r)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:f}function Oe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function on(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oi(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function Me(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function On(e,n,r,s,f,d){var x=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var E=e.entanglements,P=e.expirationTimes,it=e.hiddenUpdates;for(r=x&~r;0<r;){var dt=31-Wt(r),_t=1<<dt;E[dt]=0,P[dt]=-1;var rt=it[dt];if(rt!==null)for(it[dt]=null,dt=0;dt<rt.length;dt++){var lt=rt[dt];lt!==null&&(lt.lane&=-536870913)}r&=~_t}s!==0&&po(e,s,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function po(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Wt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|r&261930}function Rl(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var s=31-Wt(r),f=1<<s;f&n|e[s]&n&&(e[s]|=n),r&=~f}}function zl(e,n){var r=n&-n;return r=(r&42)!==0?1:mo(r),(r&(e.suspendedLanes|n))!==0?0:r}function mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function O(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function st(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function mt(e,n){var r=Q.p;try{return Q.p=e,n()}finally{Q.p=r}}var J=Math.random().toString(36).slice(2),ft="__reactFiber$"+J,Nt="__reactProps$"+J,kt="__reactContainer$"+J,Zt="__reactEvents$"+J,Kt="__reactListeners$"+J,pe="__reactHandles$"+J,te="__reactResources$"+J,ee="__reactMarker$"+J;function De(e){delete e[ft],delete e[Nt],delete e[Zt],delete e[Kt],delete e[pe]}function Un(e){var n=e[ft];if(n)return n;for(var r=e.parentNode;r;){if(n=r[kt]||r[ft]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=X0(e);e!==null;){if(r=e[ft])return r;e=X0(e)}return n}e=r,r=e.parentNode}return null}function Wn(e){if(e=e[ft]||e[kt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ai(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function dn(e){var n=e[te];return n||(n=e[te]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xt(e){e[ee]=!0}var Xi=new Set,Pe={};function qe(e,n){Dn(e,n),Dn(e+"Capture",n)}function Dn(e,n){for(Pe[e]=n,e=0;e<n.length;e++)Xi.add(n[e])}var rr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wr={},ln={};function Yi(e){return de.call(ln,e)?!0:de.call(Wr,e)?!1:rr.test(e)?ln[e]=!0:(Wr[e]=!0,!1)}function ba(e,n,r){if(Yi(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function un(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Xn(e,n,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+s)}}function Nn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function go(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xx(e,n,r){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,d=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(x){r=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kc(e){if(!e._valueTracker){var n=go(e)?"checked":"value";e._valueTracker=xx(e,n,""+e[n])}}function Lp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),s="";return e&&(s=go(e)?e.checked?"true":"false":e.value),e=s,e!==r?(n.setValue(e),!0):!1}function Ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bx=/[\n"\\]/g;function ri(e){return e.replace(bx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wc(e,n,r,s,f,d,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Nn(n)):e.value!==""+Nn(n)&&(e.value=""+Nn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Xc(e,x,Nn(n)):r!=null?Xc(e,x,Nn(r)):s!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Nn(E):e.removeAttribute("name")}function Rp(e,n,r,s,f,d,x,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){kc(e);return}r=r!=null?""+Nn(r):"",n=n!=null?""+Nn(n):r,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??f,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),kc(e)}function Xc(e,n,r){n==="number"&&Ol(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Xr(e,n,r,s){if(e=e.options,n){n={};for(var f=0;f<r.length;f++)n["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=n.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Nn(r),n=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,s&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function zp(e,n,r){if(n!=null&&(n=""+Nn(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Nn(r):""}function Op(e,n,r,s){if(n==null){if(s!=null){if(r!=null)throw Error(a(92));if(ht(s)){if(1<s.length)throw Error(a(93));s=s[0]}r=s}r==null&&(r=""),n=r}r=Nn(n),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s),kc(e)}function Yr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Sx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Up(e,n,r){var s=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,r):typeof r!="number"||r===0||Sx.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Np(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var f in n)s=n[f],n.hasOwnProperty(f)&&r[f]!==s&&Up(e,f,s)}else for(var d in n)n.hasOwnProperty(d)&&Up(e,d,n[d])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return wx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var qc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qr=null,jr=null;function Pp(e){var n=Wn(e);if(n&&(e=n.stateNode)){var r=e[Nt]||null;t:switch(e=n.stateNode,n.type){case"input":if(Wc(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ri(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var s=r[n];if(s!==e&&s.form===e.form){var f=s[Nt]||null;if(!f)throw Error(a(90));Wc(s,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<r.length;n++)s=r[n],s.form===e.form&&Lp(s)}break t;case"textarea":zp(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&Xr(e,!!r.multiple,n,!1)}}}var Zc=!1;function Bp(e,n,r){if(Zc)return e(n,r);Zc=!0;try{var s=e(n);return s}finally{if(Zc=!1,(qr!==null||jr!==null)&&(bu(),qr&&(n=qr,e=jr,jr=qr=null,Pp(n),e)))for(n=0;n<e.length;n++)Pp(e[n])}}function _o(e,n){var r=e.stateNode;if(r===null)return null;var s=r[Nt]||null;if(s===null)return null;r=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(ji)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Qc=!1}var Sa=null,Kc=null,Nl=null;function Gp(){if(Nl)return Nl;var e,n=Kc,r=n.length,s,f="value"in Sa?Sa.value:Sa.textContent,d=f.length;for(e=0;e<r&&n[e]===f[e];e++);var x=r-e;for(s=1;s<=x&&n[r-s]===f[d-s];s++);return Nl=f.slice(e,1<s?1-s:void 0)}function Pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function Hp(){return!1}function Pn(e){function n(r,s,f,d,x){this._reactName=r,this._targetInst=f,this.type=s,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(r=e[E],this[E]=r?r(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Bl:Hp,this.isPropagationStopped=Hp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Pn(sr),yo=_({},sr,{view:0,detail:0}),Ex=Pn(yo),Jc,$c,xo,Hl=_({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Jc=e.screenX-xo.screenX,$c=e.screenY-xo.screenY):$c=Jc=0,xo=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Fp=Pn(Hl),Ax=_({},Hl,{dataTransfer:0}),Tx=Pn(Ax),Cx=_({},yo,{relatedTarget:0}),tf=Pn(Cx),Dx=_({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Pn(Dx),Rx=_({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zx=Pn(Rx),Ox=_({},sr,{data:0}),Ip=Pn(Ox),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Px[e])?!!n[e]:!1}function ef(){return Bx}var Gx=_({},yo,{key:function(e){if(e.key){var n=Ux[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(e){return e.type==="keypress"?Pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hx=Pn(Gx),Fx=_({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Pn(Fx),Ix=_({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),Vx=Pn(Ix),kx=_({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=Pn(kx),Xx=_({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Pn(Xx),qx=_({},sr,{newState:0,oldState:0}),jx=Pn(qx),Zx=[9,13,27,32],nf=ji&&"CompositionEvent"in window,bo=null;ji&&"documentMode"in document&&(bo=document.documentMode);var Qx=ji&&"TextEvent"in window&&!bo,kp=ji&&(!nf||bo&&8<bo&&11>=bo),Wp=" ",Xp=!1;function Yp(e,n){switch(e){case"keyup":return Zx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function Kx(e,n){switch(e){case"compositionend":return qp(n);case"keypress":return n.which!==32?null:(Xp=!0,Wp);case"textInput":return e=n.data,e===Wp&&Xp?null:e;default:return null}}function Jx(e,n){if(Zr)return e==="compositionend"||!nf&&Yp(e,n)?(e=Gp(),Nl=Kc=Sa=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kp&&n.locale!=="ko"?null:n.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$x[e.type]:n==="textarea"}function Zp(e,n,r,s){qr?jr?jr.push(s):jr=[s]:qr=s,n=Cu(n,"onChange"),0<n.length&&(r=new Gl("onChange","change",null,r,s),e.push({event:r,listeners:n}))}var So=null,Mo=null;function tb(e){R0(e,0)}function Fl(e){var n=ai(e);if(Lp(n))return e}function Qp(e,n){if(e==="change")return n}var Kp=!1;if(ji){var af;if(ji){var rf="oninput"in document;if(!rf){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),rf=typeof Jp.oninput=="function"}af=rf}else af=!1;Kp=af&&(!document.documentMode||9<document.documentMode)}function $p(){So&&(So.detachEvent("onpropertychange",tm),Mo=So=null)}function tm(e){if(e.propertyName==="value"&&Fl(Mo)){var n=[];Zp(n,Mo,e,jc(e)),Bp(tb,n)}}function eb(e,n,r){e==="focusin"?($p(),So=n,Mo=r,So.attachEvent("onpropertychange",tm)):e==="focusout"&&$p()}function nb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Mo)}function ib(e,n){if(e==="click")return Fl(n)}function ab(e,n){if(e==="input"||e==="change")return Fl(n)}function rb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:rb;function wo(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),s=Object.keys(n);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var f=r[s];if(!de.call(n,f)||!Yn(e[f],n[f]))return!1}return!0}function em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nm(e,n){var r=em(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=n&&s>=n)return{node:r,offset:n-e};e=s}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=em(r)}}function im(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?im(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function am(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ol(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ol(e.document)}return n}function sf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sb=ji&&"documentMode"in document&&11>=document.documentMode,Qr=null,of=null,Eo=null,lf=!1;function rm(e,n,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;lf||Qr==null||Qr!==Ol(s)||(s=Qr,"selectionStart"in s&&sf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Eo&&wo(Eo,s)||(Eo=s,s=Cu(of,"onSelect"),0<s.length&&(n=new Gl("onSelect","select",null,n,r),e.push({event:n,listeners:s}),n.target=Qr)))}function or(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Kr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},uf={},sm={};ji&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function lr(e){if(uf[e])return uf[e];if(!Kr[e])return e;var n=Kr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in sm)return uf[e]=n[r];return e}var om=lr("animationend"),lm=lr("animationiteration"),um=lr("animationstart"),ob=lr("transitionrun"),lb=lr("transitionstart"),ub=lr("transitioncancel"),cm=lr("transitionend"),fm=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function bi(e,n){fm.set(e,n),qe(n,[e])}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Jr=0,ff=0;function Vl(){for(var e=Jr,n=ff=Jr=0;n<e;){var r=si[n];si[n++]=null;var s=si[n];si[n++]=null;var f=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,s!==null&&f!==null){var x=s.pending;x===null?f.next=f:(f.next=x.next,x.next=f),s.pending=f}d!==0&&hm(r,f,d)}}function kl(e,n,r,s){si[Jr++]=e,si[Jr++]=n,si[Jr++]=r,si[Jr++]=s,ff|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function hf(e,n,r,s){return kl(e,n,r,s),Wl(e)}function ur(e,n){return kl(e,null,null,n),Wl(e)}function hm(e,n,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var f=!1,d=e.return;d!==null;)d.childLanes|=r,s=d.alternate,s!==null&&(s.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&n!==null&&(f=31-Wt(r),e=d.hiddenUpdates,s=e[f],s===null?e[f]=[n]:s.push(n),n.lane=r|536870912),d):null}function Wl(e){if(50<qo)throw qo=0,bh=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $r={};function cb(e,n,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,r,s){return new cb(e,n,r,s)}function df(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var r=e.alternate;return r===null?(r=qn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function dm(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Xl(e,n,r,s,f,d){var x=0;if(s=e,typeof e=="function")df(e)&&(x=1);else if(typeof e=="string")x=mS(e,r,ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case B:return e=qn(31,r,n,f),e.elementType=B,e.lanes=d,e;case b:return cr(r.children,f,d,n);case v:x=8,f|=24;break;case S:return e=qn(12,r,n,f|2),e.elementType=S,e.lanes=d,e;case C:return e=qn(13,r,n,f),e.elementType=C,e.lanes=d,e;case N:return e=qn(19,r,n,f),e.elementType=N,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:x=10;break t;case A:x=9;break t;case z:x=11;break t;case H:x=14;break t;case T:x=16,s=null;break t}x=29,r=Error(a(130,e===null?"null":typeof e,"")),s=null}return n=qn(x,r,n,f),n.elementType=e,n.type=s,n.lanes=d,n}function cr(e,n,r,s){return e=qn(7,e,s,n),e.lanes=r,e}function pf(e,n,r){return e=qn(6,e,null,n),e.lanes=r,e}function pm(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function mf(e,n,r){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var mm=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var r=mm.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Ge(n)},mm.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var ts=[],es=0,Yl=null,Ao=0,li=[],ui=0,Ma=null,Ui=1,Ni="";function Qi(e,n){ts[es++]=Ao,ts[es++]=Yl,Yl=e,Ao=n}function gm(e,n,r){li[ui++]=Ui,li[ui++]=Ni,li[ui++]=Ma,Ma=e;var s=Ui;e=Ni;var f=32-Wt(s)-1;s&=~(1<<f),r+=1;var d=32-Wt(n)+f;if(30<d){var x=f-f%5;d=(s&(1<<x)-1).toString(32),s>>=x,f-=x,Ui=1<<32-Wt(n)+f|r<<f|s,Ni=d+e}else Ui=1<<d|r<<f|s,Ni=e}function gf(e){e.return!==null&&(Qi(e,1),gm(e,1,0))}function _f(e){for(;e===Yl;)Yl=ts[--es],ts[es]=null,Ao=ts[--es],ts[es]=null;for(;e===Ma;)Ma=li[--ui],li[ui]=null,Ni=li[--ui],li[ui]=null,Ui=li[--ui],li[ui]=null}function _m(e,n){li[ui++]=Ui,li[ui++]=Ni,li[ui++]=Ma,Ui=n.id,Ni=n.overflow,Ma=e}var pn=null,Le=null,ue=!1,wa=null,ci=!1,vf=Error(a(519));function Ea(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw To(oi(n,e)),vf}function vm(e){var n=e.stateNode,r=e.type,s=e.memoizedProps;switch(n[ft]=e,n[Nt]=s,r){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(r=0;r<Zo.length;r++)ae(Zo[r],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":ae("invalid",n),Rp(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ae("invalid",n);break;case"textarea":ae("invalid",n),Op(n,s.value,s.defaultValue,s.children)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||s.suppressHydrationWarning===!0||N0(n.textContent,r)?(s.popover!=null&&(ae("beforetoggle",n),ae("toggle",n)),s.onScroll!=null&&ae("scroll",n),s.onScrollEnd!=null&&ae("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ea(e,!0)}function ym(e){for(pn=e.return;pn;)switch(pn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:pn=pn.return}}function ns(e){if(e!==pn)return!1;if(!ue)return ym(e),ue=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Ph(e.type,e.memoizedProps)),r=!r),r&&Le&&Ea(e),ym(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Le=W0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Le=W0(e)}else n===27?(n=Le,Ha(e.type)?(e=Ih,Ih=null,Le=e):Le=n):Le=pn?hi(e.stateNode.nextSibling):null;return!0}function fr(){Le=pn=null,ue=!1}function yf(){var e=wa;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),wa=null),e}function To(e){wa===null?wa=[e]:wa.push(e)}var xf=R(null),hr=null,Ki=null;function Aa(e,n,r){Y(xf,n._currentValue),n._currentValue=r}function Ji(e){e._currentValue=xf.current,I(xf)}function bf(e,n,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===r)break;e=e.return}}function Sf(e,n,r,s){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=f;for(var P=0;P<n.length;P++)if(E.context===n[P]){d.lanes|=r,E=d.alternate,E!==null&&(E.lanes|=r),bf(d.return,r,e),s||(x=null);break t}d=E.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(a(341));x.lanes|=r,d=x.alternate,d!==null&&(d.lanes|=r),bf(x,r,e),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===e){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function is(e,n,r,s){e=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var E=f.type;Yn(f.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(f===Rt.current){if(x=f.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}f=f.return}e!==null&&Sf(n,e,r,s),n.flags|=262144}function ql(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){hr=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mn(e){return xm(hr,e)}function jl(e,n){return hr===null&&dr(e),xm(e,n)}function xm(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ki===null){if(e===null)throw Error(a(308));Ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ki=Ki.next=n;return r}var fb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},hb=o.unstable_scheduleCallback,db=o.unstable_NormalPriority,je={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new fb,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&hb(db,function(){e.controller.abort()})}var Do=null,wf=0,as=0,rs=null;function pb(e,n){if(Do===null){var r=Do=[];wf=0,as=Th(),rs={status:"pending",value:void 0,then:function(s){r.push(s)}}}return wf++,n.then(bm,bm),n}function bm(){if(--wf===0&&Do!==null){rs!==null&&(rs.status="fulfilled");var e=Do;Do=null,as=0,rs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function mb(e,n){var r=[],s={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var f=0;f<r.length;f++)(0,r[f])(n)},function(f){for(s.status="rejected",s.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),s}var Sm=G.S;G.S=function(e,n){r0=ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pb(e,n),Sm!==null&&Sm(e,n)};var pr=R(null);function Ef(){var e=pr.current;return e!==null?e:Te.pooledCache}function Zl(e,n){n===null?Y(pr,pr.current):Y(pr,n.pool)}function Mm(){var e=Ef();return e===null?null:{parent:je._currentValue,pool:e}}var ss=Error(a(460)),Af=Error(a(474)),Ql=Error(a(542)),Kl={then:function(){}};function wm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Em(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(qi,qi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tm(e),e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=s}},function(s){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tm(e),e}throw gr=n,ss}}function mr(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(gr=r,ss):r}}var gr=null;function Am(){if(gr===null)throw Error(a(459));var e=gr;return gr=null,e}function Tm(e){if(e===ss||e===Ql)throw Error(a(483))}var os=null,Lo=0;function Jl(e){var n=Lo;return Lo+=1,os===null&&(os=[]),Em(os,e,n)}function Ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function $l(e,n){throw n.$$typeof===y?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Cm(e){function n(q,V){if(e){var et=q.deletions;et===null?(q.deletions=[V],q.flags|=16):et.push(V)}}function r(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function f(q,V){return q=Zi(q,V),q.index=0,q.sibling=null,q}function d(q,V,et){return q.index=et,e?(et=q.alternate,et!==null?(et=et.index,et<V?(q.flags|=67108866,V):et):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function x(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function E(q,V,et,gt){return V===null||V.tag!==6?(V=pf(et,q.mode,gt),V.return=q,V):(V=f(V,et),V.return=q,V)}function P(q,V,et,gt){var Ht=et.type;return Ht===b?dt(q,V,et.props.children,gt,et.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===T&&mr(Ht)===V.type)?(V=f(V,et.props),Ro(V,et),V.return=q,V):(V=Xl(et.type,et.key,et.props,null,q.mode,gt),Ro(V,et),V.return=q,V)}function it(q,V,et,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=mf(et,q.mode,gt),V.return=q,V):(V=f(V,et.children||[]),V.return=q,V)}function dt(q,V,et,gt,Ht){return V===null||V.tag!==7?(V=cr(et,q.mode,gt,Ht),V.return=q,V):(V=f(V,et),V.return=q,V)}function _t(q,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=pf(""+V,q.mode,et),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return et=Xl(V.type,V.key,V.props,null,q.mode,et),Ro(et,V),et.return=q,et;case w:return V=mf(V,q.mode,et),V.return=q,V;case T:return V=mr(V),_t(q,V,et)}if(ht(V)||vt(V))return V=cr(V,q.mode,et,null),V.return=q,V;if(typeof V.then=="function")return _t(q,Jl(V),et);if(V.$$typeof===D)return _t(q,jl(q,V),et);$l(q,V)}return null}function rt(q,V,et,gt){var Ht=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Ht!==null?null:E(q,V,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===Ht?P(q,V,et,gt):null;case w:return et.key===Ht?it(q,V,et,gt):null;case T:return et=mr(et),rt(q,V,et,gt)}if(ht(et)||vt(et))return Ht!==null?null:dt(q,V,et,gt,null);if(typeof et.then=="function")return rt(q,V,Jl(et),gt);if(et.$$typeof===D)return rt(q,V,jl(q,et),gt);$l(q,et)}return null}function lt(q,V,et,gt,Ht){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return q=q.get(et)||null,E(V,q,""+gt,Ht);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return q=q.get(gt.key===null?et:gt.key)||null,P(V,q,gt,Ht);case w:return q=q.get(gt.key===null?et:gt.key)||null,it(V,q,gt,Ht);case T:return gt=mr(gt),lt(q,V,et,gt,Ht)}if(ht(gt)||vt(gt))return q=q.get(et)||null,dt(V,q,gt,Ht,null);if(typeof gt.then=="function")return lt(q,V,et,Jl(gt),Ht);if(gt.$$typeof===D)return lt(q,V,et,jl(V,gt),Ht);$l(V,gt)}return null}function Pt(q,V,et,gt){for(var Ht=null,me=null,Gt=V,Jt=V=0,oe=null;Gt!==null&&Jt<et.length;Jt++){Gt.index>Jt?(oe=Gt,Gt=null):oe=Gt.sibling;var ge=rt(q,Gt,et[Jt],gt);if(ge===null){Gt===null&&(Gt=oe);break}e&&Gt&&ge.alternate===null&&n(q,Gt),V=d(ge,V,Jt),me===null?Ht=ge:me.sibling=ge,me=ge,Gt=oe}if(Jt===et.length)return r(q,Gt),ue&&Qi(q,Jt),Ht;if(Gt===null){for(;Jt<et.length;Jt++)Gt=_t(q,et[Jt],gt),Gt!==null&&(V=d(Gt,V,Jt),me===null?Ht=Gt:me.sibling=Gt,me=Gt);return ue&&Qi(q,Jt),Ht}for(Gt=s(Gt);Jt<et.length;Jt++)oe=lt(Gt,q,Jt,et[Jt],gt),oe!==null&&(e&&oe.alternate!==null&&Gt.delete(oe.key===null?Jt:oe.key),V=d(oe,V,Jt),me===null?Ht=oe:me.sibling=oe,me=oe);return e&&Gt.forEach(function(Wa){return n(q,Wa)}),ue&&Qi(q,Jt),Ht}function Vt(q,V,et,gt){if(et==null)throw Error(a(151));for(var Ht=null,me=null,Gt=V,Jt=V=0,oe=null,ge=et.next();Gt!==null&&!ge.done;Jt++,ge=et.next()){Gt.index>Jt?(oe=Gt,Gt=null):oe=Gt.sibling;var Wa=rt(q,Gt,ge.value,gt);if(Wa===null){Gt===null&&(Gt=oe);break}e&&Gt&&Wa.alternate===null&&n(q,Gt),V=d(Wa,V,Jt),me===null?Ht=Wa:me.sibling=Wa,me=Wa,Gt=oe}if(ge.done)return r(q,Gt),ue&&Qi(q,Jt),Ht;if(Gt===null){for(;!ge.done;Jt++,ge=et.next())ge=_t(q,ge.value,gt),ge!==null&&(V=d(ge,V,Jt),me===null?Ht=ge:me.sibling=ge,me=ge);return ue&&Qi(q,Jt),Ht}for(Gt=s(Gt);!ge.done;Jt++,ge=et.next())ge=lt(Gt,q,Jt,ge.value,gt),ge!==null&&(e&&ge.alternate!==null&&Gt.delete(ge.key===null?Jt:ge.key),V=d(ge,V,Jt),me===null?Ht=ge:me.sibling=ge,me=ge);return e&&Gt.forEach(function(AS){return n(q,AS)}),ue&&Qi(q,Jt),Ht}function Ae(q,V,et,gt){if(typeof et=="object"&&et!==null&&et.type===b&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var Ht=et.key;V!==null;){if(V.key===Ht){if(Ht=et.type,Ht===b){if(V.tag===7){r(q,V.sibling),gt=f(V,et.props.children),gt.return=q,q=gt;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===T&&mr(Ht)===V.type){r(q,V.sibling),gt=f(V,et.props),Ro(gt,et),gt.return=q,q=gt;break t}r(q,V);break}else n(q,V);V=V.sibling}et.type===b?(gt=cr(et.props.children,q.mode,gt,et.key),gt.return=q,q=gt):(gt=Xl(et.type,et.key,et.props,null,q.mode,gt),Ro(gt,et),gt.return=q,q=gt)}return x(q);case w:t:{for(Ht=et.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){r(q,V.sibling),gt=f(V,et.children||[]),gt.return=q,q=gt;break t}else{r(q,V);break}else n(q,V);V=V.sibling}gt=mf(et,q.mode,gt),gt.return=q,q=gt}return x(q);case T:return et=mr(et),Ae(q,V,et,gt)}if(ht(et))return Pt(q,V,et,gt);if(vt(et)){if(Ht=vt(et),typeof Ht!="function")throw Error(a(150));return et=Ht.call(et),Vt(q,V,et,gt)}if(typeof et.then=="function")return Ae(q,V,Jl(et),gt);if(et.$$typeof===D)return Ae(q,V,jl(q,et),gt);$l(q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(r(q,V.sibling),gt=f(V,et),gt.return=q,q=gt):(r(q,V),gt=pf(et,q.mode,gt),gt.return=q,q=gt),x(q)):r(q,V)}return function(q,V,et,gt){try{Lo=0;var Ht=Ae(q,V,et,gt);return os=null,Ht}catch(Gt){if(Gt===ss||Gt===Ql)throw Gt;var me=qn(29,Gt,null,q.mode);return me.lanes=gt,me.return=q,me}finally{}}}var _r=Cm(!0),Dm=Cm(!1),Ta=!1;function Tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(_e&2)!==0){var f=s.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),s.pending=n,n=Wl(e),hm(e,null,r),n}return kl(e,s,n,r),Wl(e)}function zo(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,Rl(e,r)}}function Df(e,n){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,r=r.next}while(r!==null);d===null?f=d=n:d=d.next=n}else f=d=n;r={baseState:s.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Lf=!1;function Oo(){if(Lf){var e=rs;if(e!==null)throw e}}function Uo(e,n,r,s){Lf=!1;var f=e.updateQueue;Ta=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var P=E,it=P.next;P.next=null,x===null?d=it:x.next=it,x=P;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==x&&(E===null?dt.firstBaseUpdate=it:E.next=it,dt.lastBaseUpdate=P))}if(d!==null){var _t=f.baseState;x=0,dt=it=P=null,E=d;do{var rt=E.lane&-536870913,lt=rt!==E.lane;if(lt?(se&rt)===rt:(s&rt)===rt){rt!==0&&rt===as&&(Lf=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Pt=e,Vt=E;rt=n;var Ae=r;switch(Vt.tag){case 1:if(Pt=Vt.payload,typeof Pt=="function"){_t=Pt.call(Ae,_t,rt);break t}_t=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Vt.payload,rt=typeof Pt=="function"?Pt.call(Ae,_t,rt):Pt,rt==null)break t;_t=_({},_t,rt);break t;case 2:Ta=!0}}rt=E.callback,rt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?(it=dt=lt,P=_t):dt=dt.next=lt,x|=rt;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;lt=E,E=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);dt===null&&(P=_t),f.baseState=P,f.firstBaseUpdate=it,f.lastBaseUpdate=dt,d===null&&(f.shared.lanes=0),Ua|=x,e.lanes=x,e.memoizedState=_t}}function Lm(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Rm(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Lm(r[e],n)}var ls=R(null),tu=R(0);function zm(e,n){e=oa,Y(tu,e),Y(ls,n),oa=e|n.baseLanes}function Rf(){Y(tu,oa),Y(ls,ls.current)}function zf(){oa=tu.current,I(ls),I(tu)}var jn=R(null),fi=null;function La(e){var n=e.alternate;Y(ke,ke.current&1),Y(jn,e),fi===null&&(n===null||ls.current!==null||n.memoizedState!==null)&&(fi=e)}function Of(e){Y(ke,ke.current),Y(jn,e),fi===null&&(fi=e)}function Om(e){e.tag===22?(Y(ke,ke.current),Y(jn,e),fi===null&&(fi=e)):Ra()}function Ra(){Y(ke,ke.current),Y(jn,jn.current)}function Zn(e){I(jn),fi===e&&(fi=null),I(ke)}var ke=R(0);function eu(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Hh(r)||Fh(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,Qt=null,we=null,Ze=null,nu=!1,us=!1,vr=!1,iu=0,No=0,cs=null,gb=0;function He(){throw Error(a(321))}function Uf(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Yn(e[r],n[r]))return!1;return!0}function Nf(e,n,r,s,f,d){return $i=d,Qt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?gg:Qf,vr=!1,d=r(s,f),vr=!1,us&&(d=Nm(n,r,s,f)),Um(e),d}function Um(e){G.H=Go;var n=we!==null&&we.next!==null;if($i=0,Ze=we=Qt=null,nu=!1,No=0,cs=null,n)throw Error(a(300));e===null||Qe||(e=e.dependencies,e!==null&&ql(e)&&(Qe=!0))}function Nm(e,n,r,s){Qt=e;var f=0;do{if(us&&(cs=null),No=0,us=!1,25<=f)throw Error(a(301));if(f+=1,Ze=we=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=_g,d=n(r,s)}while(us);return d}function _b(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?Po(n):n,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(Qt.flags|=1024),n}function Pf(){var e=iu!==0;return iu=0,e}function Bf(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Gf(e){if(nu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}nu=!1}$i=0,Ze=we=Qt=null,us=!1,No=iu=0,cs=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Qt.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function We(){if(we===null){var e=Qt.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=Ze===null?Qt.memoizedState:Ze.next;if(n!==null)Ze=n,we=e;else{if(e===null)throw Qt.alternate===null?Error(a(467)):Error(a(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ze===null?Qt.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var n=No;return No+=1,cs===null&&(cs=[]),e=Em(cs,e,n),n=Qt,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?gg:Qf),e}function ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===D)return mn(e)}throw Error(a(438,String(e)))}function Hf(e){var n=null,r=Qt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var s=Qt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=au(),Qt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),s=0;s<e;s++)r[s]=tt;return n.index++,r}function ta(e,n){return typeof n=="function"?n(e):n}function su(e){var n=We();return Ff(n,we,e)}function Ff(e,n,r){var s=e.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=r;var f=e.baseQueue,d=s.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}n.baseQueue=f=d,s.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{n=f.next;var E=x=null,P=null,it=n,dt=!1;do{var _t=it.lane&-536870913;if(_t!==it.lane?(se&_t)===_t:($i&_t)===_t){var rt=it.revertLane;if(rt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),_t===as&&(dt=!0);else if(($i&rt)===rt){it=it.next,rt===as&&(dt=!0);continue}else _t={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},P===null?(E=P=_t,x=d):P=P.next=_t,Qt.lanes|=rt,Ua|=rt;_t=it.action,vr&&r(d,_t),d=it.hasEagerState?it.eagerState:r(d,_t)}else rt={lane:_t,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},P===null?(E=P=rt,x=d):P=P.next=rt,Qt.lanes|=_t,Ua|=_t;it=it.next}while(it!==null&&it!==n);if(P===null?x=d:P.next=E,!Yn(d,e.memoizedState)&&(Qe=!0,dt&&(r=rs,r!==null)))throw r;e.memoizedState=d,e.baseState=x,e.baseQueue=P,s.lastRenderedState=d}return f===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function If(e){var n=We(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var s=r.dispatch,f=r.pending,d=n.memoizedState;if(f!==null){r.pending=null;var x=f=f.next;do d=e(d,x.action),x=x.next;while(x!==f);Yn(d,n.memoizedState)||(Qe=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,s]}function Pm(e,n,r){var s=Qt,f=We(),d=ue;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var x=!Yn((we||f).memoizedState,r);if(x&&(f.memoizedState=r,Qe=!0),f=f.queue,Wf(Hm.bind(null,s,f,e),[e]),f.getSnapshot!==n||x||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,fs(9,{destroy:void 0},Gm.bind(null,s,f,r,n),null),Te===null)throw Error(a(349));d||($i&127)!==0||Bm(s,n,r)}return r}function Bm(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Qt.updateQueue,n===null?(n=au(),Qt.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Gm(e,n,r,s){n.value=r,n.getSnapshot=s,Fm(n)&&Im(e)}function Hm(e,n,r){return r(function(){Fm(n)&&Im(e)})}function Fm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Yn(e,r)}catch{return!0}}function Im(e){var n=ur(e,2);n!==null&&In(n,e,2)}function Vf(e){var n=Ln();if(typeof e=="function"){var r=e;if(e=r(),vr){Ut(!0);try{r()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function Vm(e,n,r,s){return e.baseState=r,Ff(e,we,typeof s=="function"?s:ta)}function vb(e,n,r,s,f){if(uu(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};G.T!==null?r(!0):d.isTransition=!1,s(d),r=n.pending,r===null?(d.next=n.pending=d,km(n,d)):(d.next=r.next,n.pending=r.next=d)}}function km(e,n){var r=n.action,s=n.payload,f=e.state;if(n.isTransition){var d=G.T,x={};G.T=x;try{var E=r(f,s),P=G.S;P!==null&&P(x,E),Wm(e,n,E)}catch(it){kf(e,n,it)}finally{d!==null&&x.types!==null&&(d.types=x.types),G.T=d}}else try{d=r(f,s),Wm(e,n,d)}catch(it){kf(e,n,it)}}function Wm(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){Xm(e,n,s)},function(s){return kf(e,n,s)}):Xm(e,n,r)}function Xm(e,n,r){n.status="fulfilled",n.value=r,Ym(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,km(e,r)))}function kf(e,n,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=r,Ym(n),n=n.next;while(n!==s)}e.action=null}function Ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function qm(e,n){return n}function jm(e,n){if(ue){var r=Te.formState;if(r!==null){t:{var s=Qt;if(ue){if(Le){e:{for(var f=Le,d=ci;f.nodeType!==8;){if(!d){f=null;break e}if(f=hi(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Le=hi(f.nextSibling),s=f.data==="F!";break t}}Ea(s)}s=!1}s&&(n=r[0])}}return r=Ln(),r.memoizedState=r.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qm,lastRenderedState:n},r.queue=s,r=dg.bind(null,Qt,s),s.dispatch=r,s=Vf(!1),d=Zf.bind(null,Qt,!1,s.queue),s=Ln(),f={state:n,dispatch:null,action:e,pending:null},s.queue=f,r=vb.bind(null,Qt,f,d,r),f.dispatch=r,s.memoizedState=e,[n,r,!1]}function Zm(e){var n=We();return Qm(n,we,e)}function Qm(e,n,r){if(n=Ff(e,n,qm)[0],e=su(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Po(n)}catch(x){throw x===ss?Ql:x}else s=n;n=We();var f=n.queue,d=f.dispatch;return r!==n.memoizedState&&(Qt.flags|=2048,fs(9,{destroy:void 0},yb.bind(null,f,r),null)),[s,d,e]}function yb(e,n){e.action=n}function Km(e){var n=We(),r=we;if(r!==null)return Qm(n,r,e);We(),n=n.memoizedState,r=We();var s=r.queue.dispatch;return r.memoizedState=e,[n,s,!1]}function fs(e,n,r,s){return e={tag:e,create:r,deps:s,inst:n,next:null},n=Qt.updateQueue,n===null&&(n=au(),Qt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,n.lastEffect=e),e}function Jm(){return We().memoizedState}function ou(e,n,r,s){var f=Ln();Qt.flags|=e,f.memoizedState=fs(1|n,{destroy:void 0},r,s===void 0?null:s)}function lu(e,n,r,s){var f=We();s=s===void 0?null:s;var d=f.memoizedState.inst;we!==null&&s!==null&&Uf(s,we.memoizedState.deps)?f.memoizedState=fs(n,d,r,s):(Qt.flags|=e,f.memoizedState=fs(1|n,d,r,s))}function $m(e,n){ou(8390656,8,e,n)}function Wf(e,n){lu(2048,8,e,n)}function xb(e){Qt.flags|=4;var n=Qt.updateQueue;if(n===null)n=au(),Qt.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function tg(e){var n=We().memoizedState;return xb({ref:n,nextImpl:e}),function(){if((_e&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function eg(e,n){return lu(4,2,e,n)}function ng(e,n){return lu(4,4,e,n)}function ig(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ag(e,n,r){r=r!=null?r.concat([e]):null,lu(4,4,ig.bind(null,n,e),r)}function Xf(){}function rg(e,n){var r=We();n=n===void 0?null:n;var s=r.memoizedState;return n!==null&&Uf(n,s[1])?s[0]:(r.memoizedState=[e,n],e)}function sg(e,n){var r=We();n=n===void 0?null:n;var s=r.memoizedState;if(n!==null&&Uf(n,s[1]))return s[0];if(s=e(),vr){Ut(!0);try{e()}finally{Ut(!1)}}return r.memoizedState=[s,n],s}function Yf(e,n,r){return r===void 0||($i&1073741824)!==0&&(se&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=o0(),Qt.lanes|=e,Ua|=e,r)}function og(e,n,r,s){return Yn(r,n)?r:ls.current!==null?(e=Yf(e,r,s),Yn(e,n)||(Qe=!0),e):($i&42)===0||($i&1073741824)!==0&&(se&261930)===0?(Qe=!0,e.memoizedState=r):(e=o0(),Qt.lanes|=e,Ua|=e,n)}function lg(e,n,r,s,f){var d=Q.p;Q.p=d!==0&&8>d?d:8;var x=G.T,E={};G.T=E,Zf(e,!1,n,r);try{var P=f(),it=G.S;if(it!==null&&it(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var dt=mb(P,s);Bo(e,n,dt,Jn(e))}else Bo(e,n,s,Jn(e))}catch(_t){Bo(e,n,{then:function(){},status:"rejected",reason:_t},Jn())}finally{Q.p=d,x!==null&&E.types!==null&&(x.types=E.types),G.T=x}}function bb(){}function qf(e,n,r,s){if(e.tag!==5)throw Error(a(476));var f=ug(e).queue;lg(e,f,n,K,r===null?bb:function(){return cg(e),r(s)})}function ug(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:K},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function cg(e){var n=ug(e);n.next===null&&(n=e.alternate.memoizedState),Bo(e,n.next.queue,{},Jn())}function jf(){return mn(tl)}function fg(){return We().memoizedState}function hg(){return We().memoizedState}function Sb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Jn();e=Ca(r);var s=Da(n,e,r);s!==null&&(In(s,n,r),zo(s,n,r)),n={cache:Mf()},e.payload=n;return}n=n.return}}function Mb(e,n,r){var s=Jn();r={lane:s,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uu(e)?pg(n,r):(r=hf(e,n,r,s),r!==null&&(In(r,e,s),mg(r,n,s)))}function dg(e,n,r){var s=Jn();Bo(e,n,r,s)}function Bo(e,n,r,s){var f={lane:s,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(uu(e))pg(n,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,E=d(x,r);if(f.hasEagerState=!0,f.eagerState=E,Yn(E,x))return kl(e,n,f,0),Te===null&&Vl(),!1}catch{}finally{}if(r=hf(e,n,f,s),r!==null)return In(r,e,s),mg(r,n,s),!0}return!1}function Zf(e,n,r,s){if(s={lane:2,revertLane:Th(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(n)throw Error(a(479))}else n=hf(e,r,s,2),n!==null&&In(n,e,2)}function uu(e){var n=e.alternate;return e===Qt||n!==null&&n===Qt}function pg(e,n){us=nu=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function mg(e,n,r){if((r&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,Rl(e,r)}}var Go={readContext:mn,use:ru,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Go.useEffectEvent=He;var gg={readContext:mn,use:ru,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:mn,useEffect:$m,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,ou(4194308,4,ig.bind(null,n,e),r)},useLayoutEffect:function(e,n){return ou(4194308,4,e,n)},useInsertionEffect:function(e,n){ou(4,2,e,n)},useMemo:function(e,n){var r=Ln();n=n===void 0?null:n;var s=e();if(vr){Ut(!0);try{e()}finally{Ut(!1)}}return r.memoizedState=[s,n],s},useReducer:function(e,n,r){var s=Ln();if(r!==void 0){var f=r(n);if(vr){Ut(!0);try{r(n)}finally{Ut(!1)}}}else f=n;return s.memoizedState=s.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},s.queue=e,e=e.dispatch=Mb.bind(null,Qt,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Vf(e);var n=e.queue,r=dg.bind(null,Qt,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Xf,useDeferredValue:function(e,n){var r=Ln();return Yf(r,e,n)},useTransition:function(){var e=Vf(!1);return e=lg.bind(null,Qt,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var s=Qt,f=Ln();if(ue){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Te===null)throw Error(a(349));(se&127)!==0||Bm(s,n,r)}f.memoizedState=r;var d={value:r,getSnapshot:n};return f.queue=d,$m(Hm.bind(null,s,d,e),[e]),s.flags|=2048,fs(9,{destroy:void 0},Gm.bind(null,s,d,r,n),null),r},useId:function(){var e=Ln(),n=Te.identifierPrefix;if(ue){var r=Ni,s=Ui;r=(s&~(1<<32-Wt(s)-1)).toString(32)+r,n="_"+n+"R_"+r,r=iu++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=gb++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:jf,useFormState:jm,useActionState:jm,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Zf.bind(null,Qt,!0,r),r.dispatch=n,[e,n]},useMemoCache:Hf,useCacheRefresh:function(){return Ln().memoizedState=Sb.bind(null,Qt)},useEffectEvent:function(e){var n=Ln(),r={impl:e};return n.memoizedState=r,function(){if((_e&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Qf={readContext:mn,use:ru,useCallback:rg,useContext:mn,useEffect:Wf,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:su,useRef:Jm,useState:function(){return su(ta)},useDebugValue:Xf,useDeferredValue:function(e,n){var r=We();return og(r,we.memoizedState,e,n)},useTransition:function(){var e=su(ta)[0],n=We().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:Pm,useId:fg,useHostTransitionStatus:jf,useFormState:Zm,useActionState:Zm,useOptimistic:function(e,n){var r=We();return Vm(r,we,e,n)},useMemoCache:Hf,useCacheRefresh:hg};Qf.useEffectEvent=tg;var _g={readContext:mn,use:ru,useCallback:rg,useContext:mn,useEffect:Wf,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:If,useRef:Jm,useState:function(){return If(ta)},useDebugValue:Xf,useDeferredValue:function(e,n){var r=We();return we===null?Yf(r,e,n):og(r,we.memoizedState,e,n)},useTransition:function(){var e=If(ta)[0],n=We().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:Pm,useId:fg,useHostTransitionStatus:jf,useFormState:Km,useActionState:Km,useOptimistic:function(e,n){var r=We();return we!==null?Vm(r,we,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:hg};_g.useEffectEvent=tg;function Kf(e,n,r,s){n=e.memoizedState,r=r(s,n),r=r==null?n:_({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Jf={enqueueSetState:function(e,n,r){e=e._reactInternals;var s=Jn(),f=Ca(s);f.payload=n,r!=null&&(f.callback=r),n=Da(e,f,s),n!==null&&(In(n,e,s),zo(n,e,s))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var s=Jn(),f=Ca(s);f.tag=1,f.payload=n,r!=null&&(f.callback=r),n=Da(e,f,s),n!==null&&(In(n,e,s),zo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Jn(),s=Ca(r);s.tag=2,n!=null&&(s.callback=n),n=Da(e,s,r),n!==null&&(In(n,e,r),zo(n,e,r))}};function vg(e,n,r,s,f,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,x):n.prototype&&n.prototype.isPureReactComponent?!wo(r,s)||!wo(f,d):!0}function yg(e,n,r,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,s),n.state!==e&&Jf.enqueueReplaceState(n,n.state,null)}function yr(e,n){var r=n;if("ref"in n){r={};for(var s in n)s!=="ref"&&(r[s]=n[s])}if(e=e.defaultProps){r===n&&(r=_({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function xg(e){Il(e)}function bg(e){console.error(e)}function Sg(e){Il(e)}function cu(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Mg(e,n,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,n,r){return r=Ca(r),r.tag=3,r.payload={element:null},r.callback=function(){cu(e,n)},r}function wg(e){return e=Ca(e),e.tag=3,e}function Eg(e,n,r,s){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=s.value;e.payload=function(){return f(d)},e.callback=function(){Mg(n,r,s)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Mg(n,r,s),typeof f!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function wb(e,n,r,s,f){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=r.alternate,n!==null&&is(n,r,f,!0),r=jn.current,r!==null){switch(r.tag){case 31:case 13:return fi===null?Su():r.alternate===null&&Fe===0&&(Fe=3),r.flags&=-257,r.flags|=65536,r.lanes=f,s===Kl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([s]):n.add(s),wh(e,s,f)),!1;case 22:return r.flags|=65536,s===Kl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([s]):r.add(s)),wh(e,s,f)),!1}throw Error(a(435,r.tag))}return wh(e,s,f),Su(),!1}if(ue)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,s!==vf&&(e=Error(a(422),{cause:s}),To(oi(e,r)))):(s!==vf&&(n=Error(a(423),{cause:s}),To(oi(n,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,s=oi(s,r),f=$f(e.stateNode,s,f),Df(e,f),Fe!==4&&(Fe=2)),!1;var d=Error(a(520),{cause:s});if(d=oi(d,r),Yo===null?Yo=[d]:Yo.push(d),Fe!==4&&(Fe=2),n===null)return!0;s=oi(s,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=$f(r.stateNode,s,e),Df(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Na===null||!Na.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=wg(f),Eg(f,e,r,s),Df(r,f),!1}r=r.return}while(r!==null);return!1}var th=Error(a(461)),Qe=!1;function gn(e,n,r,s){n.child=e===null?Dm(n,null,r,s):_r(n,e.child,r,s)}function Ag(e,n,r,s,f){r=r.render;var d=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return dr(n),s=Nf(e,n,r,x,d,f),E=Pf(),e!==null&&!Qe?(Bf(e,n,f),ea(e,n,f)):(ue&&E&&gf(n),n.flags|=1,gn(e,n,s,f),n.child)}function Tg(e,n,r,s,f){if(e===null){var d=r.type;return typeof d=="function"&&!df(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Cg(e,n,d,s,f)):(e=Xl(r.type,null,s,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!lh(e,f)){var x=d.memoizedProps;if(r=r.compare,r=r!==null?r:wo,r(x,s)&&e.ref===n.ref)return ea(e,n,f)}return n.flags|=1,e=Zi(d,s),e.ref=n.ref,e.return=n,n.child=e}function Cg(e,n,r,s,f){if(e!==null){var d=e.memoizedProps;if(wo(d,s)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=s=d,lh(e,f))(e.flags&131072)!==0&&(Qe=!0);else return n.lanes=e.lanes,ea(e,n,f)}return eh(e,n,r,s,f)}function Dg(e,n,r,s){var f=s.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(s=n.child=e.child,f=0;s!==null;)f=f|s.lanes|s.childLanes,s=s.sibling;s=f&~d}else s=0,n.child=null;return Lg(e,n,d,r,s)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zl(n,d!==null?d.cachePool:null),d!==null?zm(n,d):Rf(),Om(n);else return s=n.lanes=536870912,Lg(e,n,d!==null?d.baseLanes|r:r,r,s)}else d!==null?(Zl(n,d.cachePool),zm(n,d),Ra(),n.memoizedState=null):(e!==null&&Zl(n,null),Rf(),Ra());return gn(e,n,f,r),n.child}function Ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lg(e,n,r,s,f){var d=Ef();return d=d===null?null:{parent:je._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&Zl(n,null),Rf(),Om(n),e!==null&&is(e,n,s,!0),n.childLanes=f,null}function fu(e,n){return n=du({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Rg(e,n,r){return _r(n,e.child,null,r),e=fu(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function Eb(e,n,r){var s=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ue){if(s.mode==="hidden")return e=fu(n,s),n.lanes=536870912,Ho(null,e);if(Of(n),(e=Le)?(e=k0(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=pm(e),r.return=n,n.child=r,pn=n,Le=null)):e=null,e===null)throw Ea(n);return n.lanes=536870912,null}return fu(n,s)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Of(n),f)if(n.flags&256)n.flags&=-257,n=Rg(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(Qe||is(e,n,r,!1),f=(r&e.childLanes)!==0,Qe||f){if(s=Te,s!==null&&(x=zl(s,r),x!==0&&x!==d.retryLane))throw d.retryLane=x,ur(e,x),In(s,e,x),th;Su(),n=Rg(e,n,r)}else e=d.treeContext,Le=hi(x.nextSibling),pn=n,ue=!0,wa=null,ci=!1,e!==null&&_m(n,e),n=fu(n,s),n.flags|=4096;return n}return e=Zi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function hu(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function eh(e,n,r,s,f){return dr(n),r=Nf(e,n,r,s,void 0,f),s=Pf(),e!==null&&!Qe?(Bf(e,n,f),ea(e,n,f)):(ue&&s&&gf(n),n.flags|=1,gn(e,n,r,f),n.child)}function zg(e,n,r,s,f,d){return dr(n),n.updateQueue=null,r=Nm(n,s,r,f),Um(e),s=Pf(),e!==null&&!Qe?(Bf(e,n,d),ea(e,n,d)):(ue&&s&&gf(n),n.flags|=1,gn(e,n,r,d),n.child)}function Og(e,n,r,s,f){if(dr(n),n.stateNode===null){var d=$r,x=r.contextType;typeof x=="object"&&x!==null&&(d=mn(x)),d=new r(s,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Jf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=s,d.state=n.memoizedState,d.refs={},Tf(n),x=r.contextType,d.context=typeof x=="object"&&x!==null?mn(x):$r,d.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Kf(n,r,x,s),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Jf.enqueueReplaceState(d,d.state,null),Uo(n,s,d,f),Oo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){d=n.stateNode;var E=n.memoizedProps,P=yr(r,E);d.props=P;var it=d.context,dt=r.contextType;x=$r,typeof dt=="object"&&dt!==null&&(x=mn(dt));var _t=r.getDerivedStateFromProps;dt=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||it!==x)&&yg(n,d,s,x),Ta=!1;var rt=n.memoizedState;d.state=rt,Uo(n,s,d,f),Oo(),it=n.memoizedState,E||rt!==it||Ta?(typeof _t=="function"&&(Kf(n,r,_t,s),it=n.memoizedState),(P=Ta||vg(n,r,P,s,rt,it,x))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=it),d.props=s,d.state=it,d.context=x,s=P):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{d=n.stateNode,Cf(e,n),x=n.memoizedProps,dt=yr(r,x),d.props=dt,_t=n.pendingProps,rt=d.context,it=r.contextType,P=$r,typeof it=="object"&&it!==null&&(P=mn(it)),E=r.getDerivedStateFromProps,(it=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==_t||rt!==P)&&yg(n,d,s,P),Ta=!1,rt=n.memoizedState,d.state=rt,Uo(n,s,d,f),Oo();var lt=n.memoizedState;x!==_t||rt!==lt||Ta||e!==null&&e.dependencies!==null&&ql(e.dependencies)?(typeof E=="function"&&(Kf(n,r,E,s),lt=n.memoizedState),(dt=Ta||vg(n,r,dt,s,rt,lt,P)||e!==null&&e.dependencies!==null&&ql(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,lt,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,lt,P)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),d.props=s,d.state=lt,d.context=P,s=dt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),s=!1)}return d=s,hu(e,n),s=(n.flags&128)!==0,d||s?(d=n.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&s?(n.child=_r(n,e.child,null,f),n.child=_r(n,null,r,f)):gn(e,n,r,f),n.memoizedState=d.state,e=n.child):e=ea(e,n,f),e}function Ug(e,n,r,s){return fr(),n.flags|=256,gn(e,n,r,s),n.child}var nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ih(e){return{baseLanes:e,cachePool:Mm()}}function ah(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Kn),e}function Ng(e,n,r){var s=n.pendingProps,f=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),x&&(f=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(ue){if(f?La(n):Ra(),(e=Le)?(e=k0(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=pm(e),r.return=n,n.child=r,pn=n,Le=null)):e=null,e===null)throw Ea(n);return Fh(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,f?(Ra(),f=n.mode,E=du({mode:"hidden",children:E},f),s=cr(s,f,r,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=ih(r),s.childLanes=ah(e,x,r),n.memoizedState=nh,Ho(null,s)):(La(n),rh(n,E))}var P=e.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(d)n.flags&256?(La(n),n.flags&=-257,n=sh(e,n,r)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),E=s.fallback,f=n.mode,s=du({mode:"visible",children:s.children},f),E=cr(E,f,r,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,_r(n,e.child,null,r),s=n.child,s.memoizedState=ih(r),s.childLanes=ah(e,x,r),n.memoizedState=nh,n=Ho(null,s));else if(La(n),Fh(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var it=x.dgst;x=it,s=Error(a(419)),s.stack="",s.digest=x,To({value:s,source:null,stack:null}),n=sh(e,n,r)}else if(Qe||is(e,n,r,!1),x=(r&e.childLanes)!==0,Qe||x){if(x=Te,x!==null&&(s=zl(x,r),s!==0&&s!==P.retryLane))throw P.retryLane=s,ur(e,s),In(x,e,s),th;Hh(E)||Su(),n=sh(e,n,r)}else Hh(E)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Le=hi(E.nextSibling),pn=n,ue=!0,wa=null,ci=!1,e!==null&&_m(n,e),n=rh(n,s.children),n.flags|=4096);return n}return f?(Ra(),E=s.fallback,f=n.mode,P=e.child,it=P.sibling,s=Zi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,it!==null?E=Zi(it,E):(E=cr(E,f,r,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,Ho(null,s),s=n.child,E=e.child.memoizedState,E===null?E=ih(r):(f=E.cachePool,f!==null?(P=je._currentValue,f=f.parent!==P?{parent:P,pool:P}:f):f=Mm(),E={baseLanes:E.baseLanes|r,cachePool:f}),s.memoizedState=E,s.childLanes=ah(e,x,r),n.memoizedState=nh,Ho(e.child,s)):(La(n),r=e.child,e=r.sibling,r=Zi(r,{mode:"visible",children:s.children}),r.return=n,r.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=r,n.memoizedState=null,r)}function rh(e,n){return n=du({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function du(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function sh(e,n,r){return _r(n,e.child,null,r),e=rh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pg(e,n,r){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),bf(e.return,n,r)}function oh(e,n,r,s,f,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:f,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=r,x.tailMode=f,x.treeForkCount=d)}function Bg(e,n,r){var s=n.pendingProps,f=s.revealOrder,d=s.tail;s=s.children;var x=ke.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,Y(ke,x),gn(e,n,s,r),s=ue?Ao:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pg(e,r,n);else if(e.tag===19)Pg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=n.child,f=null;r!==null;)e=r.alternate,e!==null&&eu(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=n.child,n.child=null):(f=r.sibling,r.sibling=null),oh(n,!1,f,r,d,s);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&eu(e)===null){n.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}oh(n,!0,r,null,d,s);break;case"together":oh(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ea(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Ua|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(is(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Zi(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Zi(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function lh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ql(e)))}function Ab(e,n,r){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Aa(n,je,e.memoizedState.cache),fr();break;case 27:case 5:wt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Of(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Ng(e,n,r):(La(n),e=ea(e,n,r),e!==null?e.sibling:null);La(n);break;case 19:var f=(e.flags&128)!==0;if(s=(r&n.childLanes)!==0,s||(is(e,n,r,!1),s=(r&n.childLanes)!==0),f){if(s)return Bg(e,n,r);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Y(ke,ke.current),s)break;return null;case 22:return n.lanes=0,Dg(e,n,r,n.pendingProps);case 24:Aa(n,je,e.memoizedState.cache)}return ea(e,n,r)}function Gg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)Qe=!0;else{if(!lh(e,r)&&(n.flags&128)===0)return Qe=!1,Ab(e,n,r);Qe=(e.flags&131072)!==0}else Qe=!1,ue&&(n.flags&1048576)!==0&&gm(n,Ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=mr(n.elementType),n.type=e,typeof e=="function")df(e)?(s=yr(e,s),n.tag=1,n=Og(null,n,e,s,r)):(n.tag=0,n=eh(null,n,e,s,r));else{if(e!=null){var f=e.$$typeof;if(f===z){n.tag=11,n=Ag(null,n,e,s,r);break t}else if(f===H){n.tag=14,n=Tg(null,n,e,s,r);break t}}throw n=Z(e)||e,Error(a(306,n,""))}}return n;case 0:return eh(e,n,n.type,n.pendingProps,r);case 1:return s=n.type,f=yr(s,n.pendingProps),Og(e,n,s,f,r);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(a(387));s=n.pendingProps;var d=n.memoizedState;f=d.element,Cf(e,n),Uo(n,s,null,r);var x=n.memoizedState;if(s=x.cache,Aa(n,je,s),s!==d.cache&&Sf(n,[je],r,!0),Oo(),s=x.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Ug(e,n,s,r);break t}else if(s!==f){f=oi(Error(a(424)),n),To(f),n=Ug(e,n,s,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=hi(e.firstChild),pn=n,ue=!0,wa=null,ci=!0,r=Dm(n,null,s,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(fr(),s===f){n=ea(e,n,r);break t}gn(e,n,s,r)}n=n.child}return n;case 26:return hu(e,n),e===null?(r=Z0(n.type,null,n.pendingProps,null))?n.memoizedState=r:ue||(r=n.type,e=n.pendingProps,s=Du(at.current).createElement(r),s[ft]=n,s[Nt]=e,_n(s,r,e),Xt(s),n.stateNode=s):n.memoizedState=Z0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return wt(n),e===null&&ue&&(s=n.stateNode=Y0(n.type,n.pendingProps,at.current),pn=n,ci=!0,f=Le,Ha(n.type)?(Ih=f,Le=hi(s.firstChild)):Le=f),gn(e,n,n.pendingProps.children,r),hu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ue&&((f=s=Le)&&(s=nS(s,n.type,n.pendingProps,ci),s!==null?(n.stateNode=s,pn=n,Le=hi(s.firstChild),ci=!1,f=!0):f=!1),f||Ea(n)),wt(n),f=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,s=d.children,Ph(f,d)?s=null:x!==null&&Ph(f,x)&&(n.flags|=32),n.memoizedState!==null&&(f=Nf(e,n,_b,null,null,r),tl._currentValue=f),hu(e,n),gn(e,n,s,r),n.child;case 6:return e===null&&ue&&((e=r=Le)&&(r=iS(r,n.pendingProps,ci),r!==null?(n.stateNode=r,pn=n,Le=null,e=!0):e=!1),e||Ea(n)),null;case 13:return Ng(e,n,r);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=_r(n,null,s,r):gn(e,n,s,r),n.child;case 11:return Ag(e,n,n.type,n.pendingProps,r);case 7:return gn(e,n,n.pendingProps,r),n.child;case 8:return gn(e,n,n.pendingProps.children,r),n.child;case 12:return gn(e,n,n.pendingProps.children,r),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),gn(e,n,s.children,r),n.child;case 9:return f=n.type._context,s=n.pendingProps.children,dr(n),f=mn(f),s=s(f),n.flags|=1,gn(e,n,s,r),n.child;case 14:return Tg(e,n,n.type,n.pendingProps,r);case 15:return Cg(e,n,n.type,n.pendingProps,r);case 19:return Bg(e,n,r);case 31:return Eb(e,n,r);case 22:return Dg(e,n,r,n.pendingProps);case 24:return dr(n),s=mn(je),e===null?(f=Ef(),f===null&&(f=Te,d=Mf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),n.memoizedState={parent:s,cache:f},Tf(n),Aa(n,je,f)):((e.lanes&r)!==0&&(Cf(e,n),Uo(n,null,null,r),Oo()),f=e.memoizedState,d=n.memoizedState,f.parent!==s?(f={parent:s,cache:s},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Aa(n,je,s)):(s=d.cache,Aa(n,je,s),s!==f.cache&&Sf(n,[je],r,!0))),gn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function na(e){e.flags|=4}function uh(e,n,r,s,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(f0())e.flags|=8192;else throw gr=Kl,Af}else e.flags&=-16777217}function Hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n))if(f0())e.flags|=8192;else throw gr=Kl,Af}function pu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oi():536870912,e.lanes|=n,ms|=n)}function Fo(e,n){if(!ue)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(n)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,s|=f.subtreeFlags&65011712,s|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,s|=f.subtreeFlags,s|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=s,e.childLanes=r,n}function Tb(e,n,r){var s=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Re(n),null;case 3:return r=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ji(je),Tt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yf())),Re(n),null;case 26:var f=n.type,d=n.memoizedState;return e===null?(na(n),d!==null?(Re(n),Hg(n,d)):(Re(n),uh(n,f,null,s,r))):d?d!==e.memoizedState?(na(n),Re(n),Hg(n,d)):(Re(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&na(n),Re(n),uh(n,f,e,s,r)),null;case 27:if(he(n),r=at.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(a(166));return Re(n),null}e=ut.current,ns(n)?vm(n):(e=Y0(f,s,r),n.stateNode=e,na(n))}return Re(n),null;case 5:if(he(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(a(166));return Re(n),null}if(d=ut.current,ns(n))vm(n);else{var x=Du(at.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?d.multiple=!0:s.size&&(d.size=s.size);break;default:d=typeof s.is=="string"?x.createElement(f,{is:s.is}):x.createElement(f)}}d[ft]=n,d[Nt]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(_n(d,f,s),f){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&na(n)}}return Re(n),uh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&na(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(a(166));if(e=at.current,ns(n)){if(e=n.stateNode,r=n.memoizedProps,s=null,f=pn,f!==null)switch(f.tag){case 27:case 5:s=f.memoizedProps}e[ft]=n,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||N0(e.nodeValue,r)),e||Ea(n,!0)}else e=Du(e).createTextNode(s),e[ft]=n,n.stateNode=e}return Re(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(s=ns(n),r!==null){if(e===null){if(!s)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[ft]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),e=!1}else r=yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Re(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=ns(n),s!==null&&s.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[ft]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),f=!1}else f=yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=s!==null,e=e!==null&&e.memoizedState!==null,r&&(s=n.child,f=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(f=s.alternate.memoizedState.cachePool.pool),d=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==f&&(s.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),pu(n,n.updateQueue),Re(n),null);case 4:return Tt(),e===null&&Rh(n.stateNode.containerInfo),Re(n),null;case 10:return Ji(n.type),Re(n),null;case 19:if(I(ke),s=n.memoizedState,s===null)return Re(n),null;if(f=(n.flags&128)!==0,d=s.rendering,d===null)if(f)Fo(s,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=eu(e),d!==null){for(n.flags|=128,Fo(s,!1),e=d.updateQueue,n.updateQueue=e,pu(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)dm(r,e),r=r.sibling;return Y(ke,ke.current&1|2),ue&&Qi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&ct()>yu&&(n.flags|=128,f=!0,Fo(s,!1),n.lanes=4194304)}else{if(!f)if(e=eu(d),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,pu(n,e),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!ue)return Re(n),null}else 2*ct()-s.renderingStartTime>yu&&r!==536870912&&(n.flags|=128,f=!0,Fo(s,!1),n.lanes=4194304);s.isBackwards?(d.sibling=n.child,n.child=d):(e=s.last,e!==null?e.sibling=d:n.child=d,s.last=d)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,r=ke.current,Y(ke,f?r&1|2:r&1),ue&&Qi(n,s.treeForkCount),e):(Re(n),null);case 22:case 23:return Zn(n),zf(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(r&536870912)!==0&&(n.flags&128)===0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),r=n.updateQueue,r!==null&&pu(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==r&&(n.flags|=2048),e!==null&&I(pr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(je),Re(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Cb(e,n){switch(_f(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(je),Tt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(a(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(ke),null;case 4:return Tt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Zn(n),zf(),e!==null&&I(pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(je),null;case 25:return null;default:return null}}function Fg(e,n){switch(_f(n),n.tag){case 3:Ji(je),Tt();break;case 26:case 27:case 5:he(n);break;case 4:Tt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:I(ke);break;case 10:Ji(n.type);break;case 22:case 23:Zn(n),zf(),e!==null&&I(pr);break;case 24:Ji(je)}}function Io(e,n){try{var r=n.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var f=s.next;r=f;do{if((r.tag&e)===e){s=void 0;var d=r.create,x=r.inst;s=d(),x.destroy=s}r=r.next}while(r!==f)}}catch(E){be(n,n.return,E)}}function za(e,n,r){try{var s=n.updateQueue,f=s!==null?s.lastEffect:null;if(f!==null){var d=f.next;s=d;do{if((s.tag&e)===e){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,f=n;var P=r,it=E;try{it()}catch(dt){be(f,P,dt)}}}s=s.next}while(s!==d)}}catch(dt){be(n,n.return,dt)}}function Ig(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Rm(n,r)}catch(s){be(e,e.return,s)}}}function Vg(e,n,r){r.props=yr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){be(e,n,s)}}function Vo(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof r=="function"?e.refCleanup=r(s):r.current=s}}catch(f){be(e,n,f)}}function Pi(e,n){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(f){be(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){be(e,n,f)}else r.current=null}function kg(e){var n=e.type,r=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break t;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(f){be(e,e.return,f)}}function ch(e,n,r){try{var s=e.stateNode;Qb(s,e.type,r,n),s[Nt]=n}catch(f){be(e,e.return,f)}}function Wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function fh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hh(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=qi));else if(s!==4&&(s===27&&Ha(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(hh(e,n,r),e=e.sibling;e!==null;)hh(e,n,r),e=e.sibling}function mu(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(s!==4&&(s===27&&Ha(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(mu(e,n,r),e=e.sibling;e!==null;)mu(e,n,r),e=e.sibling}function Xg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var s=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);_n(n,s,r),n[ft]=e,n[Nt]=r}catch(d){be(e,e.return,d)}}var ia=!1,Ke=!1,dh=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,cn=null;function Db(e,n){if(e=e.containerInfo,Uh=Pu,e=am(e),sf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var f=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var x=0,E=-1,P=-1,it=0,dt=0,_t=e,rt=null;e:for(;;){for(var lt;_t!==r||f!==0&&_t.nodeType!==3||(E=x+f),_t!==d||s!==0&&_t.nodeType!==3||(P=x+s),_t.nodeType===3&&(x+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)rt=_t,_t=lt;for(;;){if(_t===e)break e;if(rt===r&&++it===f&&(E=x),rt===d&&++dt===s&&(P=x),(lt=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=lt}r=E===-1||P===-1?null:{start:E,end:P}}else r=null}r=r||{start:0,end:0}}else r=null;for(Nh={focusedElem:e,selectionRange:r},Pu=!1,cn=n;cn!==null;)if(n=cn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,cn=e;else for(;cn!==null;){switch(n=cn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,f=d.memoizedProps,d=d.memoizedState,s=r.stateNode;try{var Pt=yr(r.type,f);e=s.getSnapshotBeforeUpdate(Pt,d),s.__reactInternalSnapshotBeforeUpdate=e}catch(Vt){be(r,r.return,Vt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Gh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,cn=e;break}cn=n.return}}function qg(e,n,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:ra(e,r),s&4&&Io(5,r);break;case 1:if(ra(e,r),s&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(x){be(r,r.return,x)}else{var f=yr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){be(r,r.return,x)}}s&64&&Ig(r),s&512&&Vo(r,r.return);break;case 3:if(ra(e,r),s&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Rm(e,n)}catch(x){be(r,r.return,x)}}break;case 27:n===null&&s&4&&Xg(r);case 26:case 5:ra(e,r),n===null&&s&4&&kg(r),s&512&&Vo(r,r.return);break;case 12:ra(e,r);break;case 31:ra(e,r),s&4&&Qg(e,r);break;case 13:ra(e,r),s&4&&Kg(e,r),s&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Gb.bind(null,r),aS(e,r))));break;case 22:if(s=r.memoizedState!==null||ia,!s){n=n!==null&&n.memoizedState!==null||Ke,f=ia;var d=Ke;ia=s,(Ke=n)&&!d?sa(e,r,(r.subtreeFlags&8772)!==0):ra(e,r),ia=f,Ke=d}break;case 30:break;default:ra(e,r)}}function jg(e){var n=e.alternate;n!==null&&(e.alternate=null,jg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&De(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,Bn=!1;function aa(e,n,r){for(r=r.child;r!==null;)Zg(e,n,r),r=r.sibling}function Zg(e,n,r){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:Ke||Pi(r,n),aa(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ke||Pi(r,n);var s=Ue,f=Bn;Ha(r.type)&&(Ue=r.stateNode,Bn=!1),aa(e,n,r),Ko(r.stateNode),Ue=s,Bn=f;break;case 5:Ke||Pi(r,n);case 6:if(s=Ue,f=Bn,Ue=null,aa(e,n,r),Ue=s,Bn=f,Ue!==null)if(Bn)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(r.stateNode)}catch(d){be(r,n,d)}else try{Ue.removeChild(r.stateNode)}catch(d){be(r,n,d)}break;case 18:Ue!==null&&(Bn?(e=Ue,I0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ms(e)):I0(Ue,r.stateNode));break;case 4:s=Ue,f=Bn,Ue=r.stateNode.containerInfo,Bn=!0,aa(e,n,r),Ue=s,Bn=f;break;case 0:case 11:case 14:case 15:za(2,r,n),Ke||za(4,r,n),aa(e,n,r);break;case 1:Ke||(Pi(r,n),s=r.stateNode,typeof s.componentWillUnmount=="function"&&Vg(r,n,s)),aa(e,n,r);break;case 21:aa(e,n,r);break;case 22:Ke=(s=Ke)||r.memoizedState!==null,aa(e,n,r),Ke=s;break;default:aa(e,n,r)}}function Qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ms(e)}catch(r){be(n,n.return,r)}}}function Kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ms(e)}catch(r){be(n,n.return,r)}}function Lb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Yg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Yg),n;default:throw Error(a(435,e.tag))}}function gu(e,n){var r=Lb(e);n.forEach(function(s){if(!r.has(s)){r.add(s);var f=Hb.bind(null,e,s);s.then(f,f)}})}function Gn(e,n){var r=n.deletions;if(r!==null)for(var s=0;s<r.length;s++){var f=r[s],d=e,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Ha(E.type)){Ue=E.stateNode,Bn=!1;break t}break;case 5:Ue=E.stateNode,Bn=!1;break t;case 3:case 4:Ue=E.stateNode.containerInfo,Bn=!0;break t}E=E.return}if(Ue===null)throw Error(a(160));Zg(d,x,f),Ue=null,Bn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Jg(n,e),n=n.sibling}var Si=null;function Jg(e,n){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Hn(e),s&4&&(za(3,e,e.return),Io(3,e),za(5,e,e.return));break;case 1:Gn(n,e),Hn(e),s&512&&(Ke||r===null||Pi(r,r.return)),s&64&&ia&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var f=Si;if(Gn(n,e),Hn(e),s&512&&(Ke||r===null||Pi(r,r.return)),s&4){var d=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){t:{s=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(s){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ee]||d[ft]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(s),f.head.insertBefore(d,f.querySelector("head > title"))),_n(d,s,r),d[ft]=e,Xt(d),s=d;break t;case"link":var x=J0("link","href",f).get(s+(r.href||""));if(x){for(var E=0;E<x.length;E++)if(d=x[E],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){x.splice(E,1);break e}}d=f.createElement(s),_n(d,s,r),f.head.appendChild(d);break;case"meta":if(x=J0("meta","content",f).get(s+(r.content||""))){for(E=0;E<x.length;E++)if(d=x[E],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){x.splice(E,1);break e}}d=f.createElement(s),_n(d,s,r),f.head.appendChild(d);break;default:throw Error(a(468,s))}d[ft]=e,Xt(d),s=d}e.stateNode=s}else $0(f,e.type,e.stateNode);else e.stateNode=K0(f,s,e.memoizedProps);else d!==s?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,s===null?$0(f,e.type,e.stateNode):K0(f,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ch(e,e.memoizedProps,r.memoizedProps)}break;case 27:Gn(n,e),Hn(e),s&512&&(Ke||r===null||Pi(r,r.return)),r!==null&&s&4&&ch(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Gn(n,e),Hn(e),s&512&&(Ke||r===null||Pi(r,r.return)),e.flags&32){f=e.stateNode;try{Yr(f,"")}catch(Pt){be(e,e.return,Pt)}}s&4&&e.stateNode!=null&&(f=e.memoizedProps,ch(e,f,r!==null?r.memoizedProps:f)),s&1024&&(dh=!0);break;case 6:if(Gn(n,e),Hn(e),s&4){if(e.stateNode===null)throw Error(a(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(Pt){be(e,e.return,Pt)}}break;case 3:if(zu=null,f=Si,Si=Lu(n.containerInfo),Gn(n,e),Si=f,Hn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ms(n.containerInfo)}catch(Pt){be(e,e.return,Pt)}dh&&(dh=!1,$g(e));break;case 4:s=Si,Si=Lu(e.stateNode.containerInfo),Gn(n,e),Hn(e),Si=s;break;case 12:Gn(n,e),Hn(e);break;case 31:Gn(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,gu(e,s)));break;case 13:Gn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vu=ct()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,gu(e,s)));break;case 22:f=e.memoizedState!==null;var P=r!==null&&r.memoizedState!==null,it=ia,dt=Ke;if(ia=it||f,Ke=dt||P,Gn(n,e),Ke=dt,ia=it,Hn(e),s&8192)t:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(r===null||P||ia||Ke||xr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){P=r=n;try{if(d=P.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=P.stateNode;var _t=P.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;E.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Pt){be(P,P.return,Pt)}}}else if(n.tag===6){if(r===null){P=n;try{P.stateNode.nodeValue=f?"":P.memoizedProps}catch(Pt){be(P,P.return,Pt)}}}else if(n.tag===18){if(r===null){P=n;try{var lt=P.stateNode;f?V0(lt,!0):V0(P.stateNode,!1)}catch(Pt){be(P,P.return,Pt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,gu(e,r))));break;case 19:Gn(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,gu(e,s)));break;case 30:break;case 21:break;default:Gn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var r,s=e.return;s!==null;){if(Wg(s)){r=s;break}s=s.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=fh(e);mu(e,d,f);break;case 5:var x=r.stateNode;r.flags&32&&(Yr(x,""),r.flags&=-33);var E=fh(e);mu(e,E,x);break;case 3:case 4:var P=r.stateNode.containerInfo,it=fh(e);hh(e,it,P);break;default:throw Error(a(161))}}catch(dt){be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;$g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qg(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),xr(n);break;case 1:Pi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Vg(n,n.return,r),xr(n);break;case 27:Ko(n.stateNode);case 26:case 5:Pi(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function sa(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,f=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:sa(f,d,r),Io(4,d);break;case 1:if(sa(f,d,r),s=d,f=s.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(it){be(s,s.return,it)}if(s=d,f=s.updateQueue,f!==null){var E=s.stateNode;try{var P=f.shared.hiddenCallbacks;if(P!==null)for(f.shared.hiddenCallbacks=null,f=0;f<P.length;f++)Lm(P[f],E)}catch(it){be(s,s.return,it)}}r&&x&64&&Ig(d),Vo(d,d.return);break;case 27:Xg(d);case 26:case 5:sa(f,d,r),r&&s===null&&x&4&&kg(d),Vo(d,d.return);break;case 12:sa(f,d,r);break;case 31:sa(f,d,r),r&&x&4&&Qg(f,d);break;case 13:sa(f,d,r),r&&x&4&&Kg(f,d);break;case 22:d.memoizedState===null&&sa(f,d,r),Vo(d,d.return);break;case 30:break;default:sa(f,d,r)}n=n.sibling}}function ph(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Co(r))}function mh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Co(e))}function Mi(e,n,r,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)t0(e,n,r,s),n=n.sibling}function t0(e,n,r,s){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,r,s),f&2048&&Io(9,n);break;case 1:Mi(e,n,r,s);break;case 3:Mi(e,n,r,s),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Co(e)));break;case 12:if(f&2048){Mi(e,n,r,s),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,E=d.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){be(n,n.return,P)}}else Mi(e,n,r,s);break;case 31:Mi(e,n,r,s);break;case 13:Mi(e,n,r,s);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Mi(e,n,r,s):ko(e,n):d._visibility&2?Mi(e,n,r,s):(d._visibility|=2,hs(e,n,r,s,(n.subtreeFlags&10256)!==0||!1)),f&2048&&ph(x,n);break;case 24:Mi(e,n,r,s),f&2048&&mh(n.alternate,n);break;default:Mi(e,n,r,s)}}function hs(e,n,r,s,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,E=r,P=s,it=x.flags;switch(x.tag){case 0:case 11:case 15:hs(d,x,E,P,f),Io(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?hs(d,x,E,P,f):ko(d,x):(dt._visibility|=2,hs(d,x,E,P,f)),f&&it&2048&&ph(x.alternate,x);break;case 24:hs(d,x,E,P,f),f&&it&2048&&mh(x.alternate,x);break;default:hs(d,x,E,P,f)}n=n.sibling}}function ko(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,s=n,f=s.flags;switch(s.tag){case 22:ko(r,s),f&2048&&ph(s.alternate,s);break;case 24:ko(r,s),f&2048&&mh(s.alternate,s);break;default:ko(r,s)}n=n.sibling}}var Wo=8192;function ds(e,n,r){if(e.subtreeFlags&Wo)for(e=e.child;e!==null;)e0(e,n,r),e=e.sibling}function e0(e,n,r){switch(e.tag){case 26:ds(e,n,r),e.flags&Wo&&e.memoizedState!==null&&gS(r,Si,e.memoizedState,e.memoizedProps);break;case 5:ds(e,n,r);break;case 3:case 4:var s=Si;Si=Lu(e.stateNode.containerInfo),ds(e,n,r),Si=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Wo,Wo=16777216,ds(e,n,r),Wo=s):ds(e,n,r));break;default:ds(e,n,r)}}function n0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];cn=s,a0(s,e)}n0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i0(e),e=e.sibling}function i0(e){switch(e.tag){case 0:case 11:case 15:Xo(e),e.flags&2048&&za(9,e,e.return);break;case 3:Xo(e);break;case 12:Xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,_u(e)):Xo(e);break;default:Xo(e)}}function _u(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];cn=s,a0(s,e)}n0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:za(8,n,n.return),_u(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,_u(n));break;default:_u(n)}e=e.sibling}}function a0(e,n){for(;cn!==null;){var r=cn;switch(r.tag){case 0:case 11:case 15:za(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Co(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,cn=s;else t:for(r=e;cn!==null;){s=cn;var f=s.sibling,d=s.return;if(jg(s),s===r){cn=null;break t}if(f!==null){f.return=d,cn=f;break t}cn=d}}}var Rb={getCacheForType:function(e){var n=mn(je),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return mn(je).controller.signal}},zb=typeof WeakMap=="function"?WeakMap:Map,_e=0,Te=null,ie=null,se=0,xe=0,Qn=null,Oa=!1,ps=!1,gh=!1,oa=0,Fe=0,Ua=0,br=0,_h=0,Kn=0,ms=0,Yo=null,Fn=null,vh=!1,vu=0,r0=0,yu=1/0,xu=null,Na=null,en=0,Pa=null,gs=null,la=0,yh=0,xh=null,s0=null,qo=0,bh=null;function Jn(){return(_e&2)!==0&&se!==0?se&-se:G.T!==null?Th():st()}function o0(){if(Kn===0)if((se&536870912)===0||ue){var e=xt;xt<<=1,(xt&3932160)===0&&(xt=262144),Kn=e}else Kn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Kn}function In(e,n,r){(e===Te&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(_s(e,0),Ba(e,se,Kn,!1)),Cn(e,r),((_e&2)===0||e!==Te)&&(e===Te&&((_e&2)===0&&(br|=r),Fe===4&&Ba(e,se,Kn,!1)),Bi(e))}function l0(e,n,r){if((_e&6)!==0)throw Error(a(327));var s=!r&&(n&127)===0&&(n&e.expiredLanes)===0||Oe(e,n),f=s?Nb(e,n):Mh(e,n,!0),d=s;do{if(f===0){ps&&!s&&Ba(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!Ob(r)){f=Mh(e,n,!1),d=!1;continue}if(f===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=e;f=Yo;var P=E.current.memoizedState.isDehydrated;if(P&&(_s(E,x).flags|=256),x=Mh(E,x,!1),x!==2){if(gh&&!P){E.errorRecoveryDisabledLanes|=d,br|=d,f=4;break t}d=Fn,Fn=f,d!==null&&(Fn===null?Fn=d:Fn.push.apply(Fn,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){_s(e,0),Ba(e,n,0,!0);break}t:{switch(s=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ba(s,n,Kn,!Oa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(f=vu+300-ct(),10<f)){if(Ba(s,n,Kn,!Oa),le(s,0,!0)!==0)break t;la=n,s.timeoutHandle=H0(u0.bind(null,s,r,Fn,xu,vh,n,Kn,br,ms,Oa,d,"Throttled",-0,0),f);break t}u0(s,r,Fn,xu,vh,n,Kn,br,ms,Oa,d,null,-0,0)}}break}while(!0);Bi(e)}function u0(e,n,r,s,f,d,x,E,P,it,dt,_t,rt,lt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},e0(n,d,_t);var Pt=(d&62914560)===d?vu-ct():(d&4194048)===d?r0-ct():0;if(Pt=_S(_t,Pt),Pt!==null){la=d,e.cancelPendingCommit=Pt(_0.bind(null,e,n,d,r,s,f,x,E,P,dt,_t,null,rt,lt)),Ba(e,d,x,!it);return}}_0(e,n,d,r,s,f,x,E,P)}function Ob(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var f=r[s],d=f.getSnapshot;f=f.value;try{if(!Yn(d(),f))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(e,n,r,s){n&=~_h,n&=~br,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var f=n;0<f;){var d=31-Wt(f),x=1<<d;s[d]=-1,f&=~x}r!==0&&po(e,r,n)}function bu(){return(_e&6)===0?(jo(0),!1):!0}function Sh(){if(ie!==null){if(xe===0)var e=ie.return;else e=ie,Ki=hr=null,Gf(e),os=null,Lo=0,e=ie;for(;e!==null;)Fg(e.alternate,e),e=e.return;ie=null}}function _s(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,$b(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),la=0,Sh(),Te=e,ie=r=Zi(e.current,null),se=n,xe=0,Qn=null,Oa=!1,ps=Oe(e,n),gh=!1,ms=Kn=_h=br=Ua=Fe=0,Fn=Yo=null,vh=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var f=31-Wt(s),d=1<<f;n|=e[f],s&=~d}return oa=n,Vl(),r}function c0(e,n){Qt=null,G.H=Go,n===ss||n===Ql?(n=Am(),xe=3):n===Af?(n=Am(),xe=4):xe=n===th?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,ie===null&&(Fe=1,cu(e,oi(n,e.current)))}function f0(){var e=jn.current;return e===null?!0:(se&4194048)===se?fi===null:(se&62914560)===se||(se&536870912)!==0?e===fi:!1}function h0(){var e=G.H;return G.H=Go,e===null?Go:e}function d0(){var e=G.A;return G.A=Rb,e}function Su(){Fe=4,Oa||(se&4194048)!==se&&jn.current!==null||(ps=!0),(Ua&134217727)===0&&(br&134217727)===0||Te===null||Ba(Te,se,Kn,!1)}function Mh(e,n,r){var s=_e;_e|=2;var f=h0(),d=d0();(Te!==e||se!==n)&&(xu=null,_s(e,n)),n=!1;var x=Fe;t:do try{if(xe!==0&&ie!==null){var E=ie,P=Qn;switch(xe){case 8:Sh(),x=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var it=xe;if(xe=0,Qn=null,vs(e,E,P,it),r&&ps){x=0;break t}break;default:it=xe,xe=0,Qn=null,vs(e,E,P,it)}}Ub(),x=Fe;break}catch(dt){c0(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Ki=hr=null,_e=s,G.H=f,G.A=d,ie===null&&(Te=null,se=0,Vl()),x}function Ub(){for(;ie!==null;)p0(ie)}function Nb(e,n){var r=_e;_e|=2;var s=h0(),f=d0();Te!==e||se!==n?(xu=null,yu=ct()+500,_s(e,n)):ps=Oe(e,n);t:do try{if(xe!==0&&ie!==null){n=ie;var d=Qn;e:switch(xe){case 1:xe=0,Qn=null,vs(e,n,d,1);break;case 2:case 9:if(wm(d)){xe=0,Qn=null,m0(n);break}n=function(){xe!==2&&xe!==9||Te!==e||(xe=7),Bi(e)},d.then(n,n);break t;case 3:xe=7;break t;case 4:xe=5;break t;case 7:wm(d)?(xe=0,Qn=null,m0(n)):(xe=0,Qn=null,vs(e,n,d,7));break;case 5:var x=null;switch(ie.tag){case 26:x=ie.memoizedState;case 5:case 27:var E=ie;if(x?t_(x):E.stateNode.complete){xe=0,Qn=null;var P=E.sibling;if(P!==null)ie=P;else{var it=E.return;it!==null?(ie=it,Mu(it)):ie=null}break e}}xe=0,Qn=null,vs(e,n,d,5);break;case 6:xe=0,Qn=null,vs(e,n,d,6);break;case 8:Sh(),Fe=6;break t;default:throw Error(a(462))}}Pb();break}catch(dt){c0(e,dt)}while(!0);return Ki=hr=null,G.H=s,G.A=f,_e=r,ie!==null?0:(Te=null,se=0,Vl(),Fe)}function Pb(){for(;ie!==null&&!U();)p0(ie)}function p0(e){var n=Gg(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Mu(e):ie=n}function m0(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=zg(r,n,n.pendingProps,n.type,void 0,se);break;case 11:n=zg(r,n,n.pendingProps,n.type.render,n.ref,se);break;case 5:Gf(n);default:Fg(r,n),n=ie=dm(n,oa),n=Gg(r,n,oa)}e.memoizedProps=e.pendingProps,n===null?Mu(e):ie=n}function vs(e,n,r,s){Ki=hr=null,Gf(n),os=null,Lo=0;var f=n.return;try{if(wb(e,f,n,r,se)){Fe=1,cu(e,oi(r,e.current)),ie=null;return}}catch(d){if(f!==null)throw ie=f,d;Fe=1,cu(e,oi(r,e.current)),ie=null;return}n.flags&32768?(ue||s===1?e=!0:ps||(se&536870912)!==0?e=!1:(Oa=e=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),g0(n,e)):Mu(n)}function Mu(e){var n=e;do{if((n.flags&32768)!==0){g0(n,Oa);return}e=n.return;var r=Tb(n.alternate,n,oa);if(r!==null){ie=r;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);Fe===0&&(Fe=5)}function g0(e,n){do{var r=Cb(e.alternate,e);if(r!==null){r.flags&=32767,ie=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ie=e;return}ie=e=r}while(e!==null);Fe=6,ie=null}function _0(e,n,r,s,f,d,x,E,P){e.cancelPendingCommit=null;do wu();while(en!==0);if((_e&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=ff,On(e,r,d,x,E,P),e===Te&&(ie=Te=null,se=0),gs=n,Pa=e,la=r,yh=d,xh=f,s0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fb(It,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=G.T,G.T=null,f=Q.p,Q.p=2,x=_e,_e|=4;try{Db(e,n,r)}finally{_e=x,Q.p=f,G.T=s}}en=1,v0(),y0(),x0()}}function v0(){if(en===1){en=0;var e=Pa,n=gs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=G.T,G.T=null;var s=Q.p;Q.p=2;var f=_e;_e|=4;try{Jg(n,e);var d=Nh,x=am(e.containerInfo),E=d.focusedElem,P=d.selectionRange;if(x!==E&&E&&E.ownerDocument&&im(E.ownerDocument.documentElement,E)){if(P!==null&&sf(E)){var it=P.start,dt=P.end;if(dt===void 0&&(dt=it),"selectionStart"in E)E.selectionStart=it,E.selectionEnd=Math.min(dt,E.value.length);else{var _t=E.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Pt=E.textContent.length,Vt=Math.min(P.start,Pt),Ae=P.end===void 0?Vt:Math.min(P.end,Pt);!lt.extend&&Vt>Ae&&(x=Ae,Ae=Vt,Vt=x);var q=nm(E,Vt),V=nm(E,Ae);if(q&&V&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var et=_t.createRange();et.setStart(q.node,q.offset),lt.removeAllRanges(),Vt>Ae?(lt.addRange(et),lt.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),lt.addRange(et))}}}}for(_t=[],lt=E;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var gt=_t[E];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Pu=!!Uh,Nh=Uh=null}finally{_e=f,Q.p=s,G.T=r}}e.current=n,en=2}}function y0(){if(en===2){en=0;var e=Pa,n=gs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=G.T,G.T=null;var s=Q.p;Q.p=2;var f=_e;_e|=4;try{qg(e,n.alternate,n)}finally{_e=f,Q.p=s,G.T=r}}en=3}}function x0(){if(en===4||en===3){en=0,L();var e=Pa,n=gs,r=la,s=s0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?en=5:(en=0,gs=Pa=null,b0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Na=null),O(r),n=n.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=G.T,f=Q.p,Q.p=2,G.T=null;try{for(var d=e.onRecoverableError,x=0;x<s.length;x++){var E=s[x];d(E.value,{componentStack:E.stack})}}finally{G.T=n,Q.p=f}}(la&3)!==0&&wu(),Bi(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===bh?qo++:(qo=0,bh=e):qo=0,jo(0)}}function b0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Co(n)))}function wu(){return v0(),y0(),x0(),S0()}function S0(){if(en!==5)return!1;var e=Pa,n=yh;yh=0;var r=O(la),s=G.T,f=Q.p;try{Q.p=32>r?32:r,G.T=null,r=xh,xh=null;var d=Pa,x=la;if(en=0,gs=Pa=null,la=0,(_e&6)!==0)throw Error(a(331));var E=_e;if(_e|=4,i0(d.current),t0(d,d.current,x,r),_e=E,jo(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Et,d)}catch{}return!0}finally{Q.p=f,G.T=s,b0(e,n)}}function M0(e,n,r){n=oi(r,n),n=$f(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(Cn(e,2),Bi(e))}function be(e,n,r){if(e.tag===3)M0(e,e,r);else for(;n!==null;){if(n.tag===3){M0(n,e,r);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Na===null||!Na.has(s))){e=oi(r,e),r=wg(2),s=Da(n,r,2),s!==null&&(Eg(r,s,n,e),Cn(s,2),Bi(s));break}}n=n.return}}function wh(e,n,r){var s=e.pingCache;if(s===null){s=e.pingCache=new zb;var f=new Set;s.set(n,f)}else f=s.get(n),f===void 0&&(f=new Set,s.set(n,f));f.has(r)||(gh=!0,f.add(r),e=Bb.bind(null,e,n,r),n.then(e,e))}function Bb(e,n,r){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Te===e&&(se&r)===r&&(Fe===4||Fe===3&&(se&62914560)===se&&300>ct()-vu?(_e&2)===0&&_s(e,0):_h|=r,ms===se&&(ms=0)),Bi(e)}function w0(e,n){n===0&&(n=Oi()),e=ur(e,n),e!==null&&(Cn(e,n),Bi(e))}function Gb(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),w0(e,r)}function Hb(e,n){var r=0;switch(e.tag){case 31:case 13:var s=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(a(314))}s!==null&&s.delete(n),w0(e,r)}function Fb(e,n){return bn(e,n)}var Eu=null,ys=null,Eh=!1,Au=!1,Ah=!1,Ga=0;function Bi(e){e!==ys&&e.next===null&&(ys===null?Eu=ys=e:ys=ys.next=e),Au=!0,Eh||(Eh=!0,Vb())}function jo(e,n){if(!Ah&&Au){Ah=!0;do for(var r=!1,s=Eu;s!==null;){if(e!==0){var f=s.pendingLanes;if(f===0)var d=0;else{var x=s.suspendedLanes,E=s.pingedLanes;d=(1<<31-Wt(42|e)+1)-1,d&=f&~(x&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,C0(s,d))}else d=se,d=le(s,s===Te?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||Oe(s,d)||(r=!0,C0(s,d));s=s.next}while(r);Ah=!1}}function Ib(){E0()}function E0(){Au=Eh=!1;var e=0;Ga!==0&&Jb()&&(e=Ga);for(var n=ct(),r=null,s=Eu;s!==null;){var f=s.next,d=A0(s,n);d===0?(s.next=null,r===null?Eu=f:r.next=f,f===null&&(ys=r)):(r=s,(e!==0||(d&3)!==0)&&(Au=!0)),s=f}en!==0&&en!==5||jo(e),Ga!==0&&(Ga=0)}function A0(e,n){for(var r=e.suspendedLanes,s=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Wt(d),E=1<<x,P=f[x];P===-1?((E&r)===0||(E&s)!==0)&&(f[x]=on(E,n)):P<=n&&(e.expiredLanes|=E),d&=~E}if(n=Te,r=se,r=le(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,r===0||e===n&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Sn(s),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Oe(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(s!==null&&Sn(s),O(r)){case 2:case 8:r=At;break;case 32:r=It;break;case 268435456:r=$;break;default:r=It}return s=T0.bind(null,e),r=bn(r,s),e.callbackPriority=n,e.callbackNode=r,n}return s!==null&&s!==null&&Sn(s),e.callbackPriority=2,e.callbackNode=null,2}function T0(e,n){if(en!==0&&en!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(wu()&&e.callbackNode!==r)return null;var s=se;return s=le(e,e===Te?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(l0(e,s,n),A0(e,ct()),e.callbackNode!=null&&e.callbackNode===r?T0.bind(null,e):null)}function C0(e,n){if(wu())return null;l0(e,n,!0)}function Vb(){tS(function(){(_e&6)!==0?bn(St,Ib):E0()})}function Th(){if(Ga===0){var e=as;e===0&&(e=pt,pt<<=1,(pt&261888)===0&&(pt=256)),Ga=e}return Ga}function D0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function L0(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function kb(e,n,r,s,f){if(n==="submit"&&r&&r.stateNode===f){var d=D0((f[Nt]||null).action),x=s.submitter;x&&(n=(n=x[Nt]||null)?D0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var E=new Gl("action","action",null,s,f);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ga!==0){var P=x?L0(f,x):new FormData(f);qf(r,{pending:!0,data:P,method:f.method,action:d},null,P)}}else typeof d=="function"&&(E.preventDefault(),P=x?L0(f,x):new FormData(f),qf(r,{pending:!0,data:P,method:f.method,action:d},d,P))},currentTarget:f}]})}}for(var Ch=0;Ch<cf.length;Ch++){var Dh=cf[Ch],Wb=Dh.toLowerCase(),Xb=Dh[0].toUpperCase()+Dh.slice(1);bi(Wb,"on"+Xb)}bi(om,"onAnimationEnd"),bi(lm,"onAnimationIteration"),bi(um,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ob,"onTransitionRun"),bi(lb,"onTransitionStart"),bi(ub,"onTransitionCancel"),bi(cm,"onTransitionEnd"),Dn("onMouseEnter",["mouseout","mouseover"]),Dn("onMouseLeave",["mouseout","mouseover"]),Dn("onPointerEnter",["pointerout","pointerover"]),Dn("onPointerLeave",["pointerout","pointerover"]),qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function R0(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],f=s.event;s=s.listeners;t:{var d=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],P=E.instance,it=E.currentTarget;if(E=E.listener,P!==d&&f.isPropagationStopped())break t;d=E,f.currentTarget=it;try{d(f)}catch(dt){Il(dt)}f.currentTarget=null,d=P}else for(x=0;x<s.length;x++){if(E=s[x],P=E.instance,it=E.currentTarget,E=E.listener,P!==d&&f.isPropagationStopped())break t;d=E,f.currentTarget=it;try{d(f)}catch(dt){Il(dt)}f.currentTarget=null,d=P}}}}function ae(e,n){var r=n[Zt];r===void 0&&(r=n[Zt]=new Set);var s=e+"__bubble";r.has(s)||(z0(n,e,2,!1),r.add(s))}function Lh(e,n,r){var s=0;n&&(s|=4),z0(r,e,s,n)}var Tu="_reactListening"+Math.random().toString(36).slice(2);function Rh(e){if(!e[Tu]){e[Tu]=!0,Xi.forEach(function(r){r!=="selectionchange"&&(Yb.has(r)||Lh(r,!1,e),Lh(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tu]||(n[Tu]=!0,Lh("selectionchange",!1,n))}}function z0(e,n,r,s){switch(o_(n)){case 2:var f=xS;break;case 8:f=bS;break;default:f=Yh}r=f.bind(null,n,r,e),f=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),s?f!==void 0?e.addEventListener(n,r,{capture:!0,passive:f}):e.addEventListener(n,r,!0):f!==void 0?e.addEventListener(n,r,{passive:f}):e.addEventListener(n,r,!1)}function zh(e,n,r,s,f){var d=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===f)break;if(x===4)for(x=s.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;E!==null;){if(x=Un(E),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){s=d=x;continue t}E=E.parentNode}}s=s.return}Bp(function(){var it=d,dt=jc(r),_t=[];t:{var rt=fm.get(e);if(rt!==void 0){var lt=Gl,Pt=e;switch(e){case"keypress":if(Pl(r)===0)break t;case"keydown":case"keyup":lt=Hx;break;case"focusin":Pt="focus",lt=tf;break;case"focusout":Pt="blur",lt=tf;break;case"beforeblur":case"afterblur":lt=tf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Vx;break;case om:case lm:case um:lt=Lx;break;case cm:lt=Wx;break;case"scroll":case"scrollend":lt=Ex;break;case"wheel":lt=Yx;break;case"copy":case"cut":case"paste":lt=zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Vp;break;case"toggle":case"beforetoggle":lt=jx}var Vt=(n&4)!==0,Ae=!Vt&&(e==="scroll"||e==="scrollend"),q=Vt?rt!==null?rt+"Capture":null:rt;Vt=[];for(var V=it,et;V!==null;){var gt=V;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||q===null||(gt=_o(V,q),gt!=null&&Vt.push(Qo(V,gt,et))),Ae)break;V=V.return}0<Vt.length&&(rt=new lt(rt,Pt,null,r,dt),_t.push({event:rt,listeners:Vt}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",rt&&r!==qc&&(Pt=r.relatedTarget||r.fromElement)&&(Un(Pt)||Pt[kt]))break t;if((lt||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Pt=r.relatedTarget||r.toElement,lt=it,Pt=Pt?Un(Pt):null,Pt!==null&&(Ae=u(Pt),Vt=Pt.tag,Pt!==Ae||Vt!==5&&Vt!==27&&Vt!==6)&&(Pt=null)):(lt=null,Pt=it),lt!==Pt)){if(Vt=Fp,gt="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Vt=Vp,gt="onPointerLeave",q="onPointerEnter",V="pointer"),Ae=lt==null?rt:ai(lt),et=Pt==null?rt:ai(Pt),rt=new Vt(gt,V+"leave",lt,r,dt),rt.target=Ae,rt.relatedTarget=et,gt=null,Un(dt)===it&&(Vt=new Vt(q,V+"enter",Pt,r,dt),Vt.target=et,Vt.relatedTarget=Ae,gt=Vt),Ae=gt,lt&&Pt)e:{for(Vt=qb,q=lt,V=Pt,et=0,gt=q;gt;gt=Vt(gt))et++;gt=0;for(var Ht=V;Ht;Ht=Vt(Ht))gt++;for(;0<et-gt;)q=Vt(q),et--;for(;0<gt-et;)V=Vt(V),gt--;for(;et--;){if(q===V||V!==null&&q===V.alternate){Vt=q;break e}q=Vt(q),V=Vt(V)}Vt=null}else Vt=null;lt!==null&&O0(_t,rt,lt,Vt,!1),Pt!==null&&Ae!==null&&O0(_t,Ae,Pt,Vt,!0)}}t:{if(rt=it?ai(it):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var me=Qp;else if(jp(rt))if(Kp)me=ab;else{me=nb;var Gt=eb}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Yc(it.elementType)&&(me=Qp):me=ib;if(me&&(me=me(e,it))){Zp(_t,me,r,dt);break t}Gt&&Gt(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&Xc(rt,"number",rt.value)}switch(Gt=it?ai(it):window,e){case"focusin":(jp(Gt)||Gt.contentEditable==="true")&&(Qr=Gt,of=it,Eo=null);break;case"focusout":Eo=of=Qr=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,rm(_t,r,dt);break;case"selectionchange":if(sb)break;case"keydown":case"keyup":rm(_t,r,dt)}var Jt;if(nf)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else Zr?Yp(e,r)&&(oe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(oe="onCompositionStart");oe&&(kp&&r.locale!=="ko"&&(Zr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Zr&&(Jt=Gp()):(Sa=dt,Kc="value"in Sa?Sa.value:Sa.textContent,Zr=!0)),Gt=Cu(it,oe),0<Gt.length&&(oe=new Ip(oe,e,null,r,dt),_t.push({event:oe,listeners:Gt}),Jt?oe.data=Jt:(Jt=qp(r),Jt!==null&&(oe.data=Jt)))),(Jt=Qx?Kx(e,r):Jx(e,r))&&(oe=Cu(it,"onBeforeInput"),0<oe.length&&(Gt=new Ip("onBeforeInput","beforeinput",null,r,dt),_t.push({event:Gt,listeners:oe}),Gt.data=Jt)),kb(_t,e,it,r,dt)}R0(_t,n)})}function Qo(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Cu(e,n){for(var r=n+"Capture",s=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=_o(e,r),f!=null&&s.unshift(Qo(e,f,d)),f=_o(e,n),f!=null&&s.push(Qo(e,f,d))),e.tag===3)return s;e=e.return}return[]}function qb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function O0(e,n,r,s,f){for(var d=n._reactName,x=[];r!==null&&r!==s;){var E=r,P=E.alternate,it=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||it===null||(P=it,f?(it=_o(r,d),it!=null&&x.unshift(Qo(r,it,P))):f||(it=_o(r,d),it!=null&&x.push(Qo(r,it,P)))),r=r.return}x.length!==0&&e.push({event:n,listeners:x})}var jb=/\r\n?/g,Zb=/\u0000|\uFFFD/g;function U0(e){return(typeof e=="string"?e:""+e).replace(jb,`
`).replace(Zb,"")}function N0(e,n){return n=U0(n),U0(e)===n}function Ee(e,n,r,s,f,d){switch(r){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Yr(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Yr(e,""+s);break;case"className":un(e,"class",s);break;case"tabIndex":un(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":un(e,r,s);break;case"style":Np(e,s,d);break;case"data":if(n!=="object"){un(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Ul(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Ee(e,n,"name",f.name,f,null),Ee(e,n,"formEncType",f.formEncType,f,null),Ee(e,n,"formMethod",f.formMethod,f,null),Ee(e,n,"formTarget",f.formTarget,f,null)):(Ee(e,n,"encType",f.encType,f,null),Ee(e,n,"method",f.method,f,null),Ee(e,n,"target",f.target,f,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Ul(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=qi);break;case"onScroll":s!=null&&ae("scroll",e);break;case"onScrollEnd":s!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(a(61));if(r=s.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=Ul(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":ae("beforetoggle",e),ae("toggle",e),ba(e,"popover",s);break;case"xlinkActuate":Xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Xn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Xn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Xn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Xn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ba(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Mx.get(r)||r,ba(e,r,s))}}function Oh(e,n,r,s,f,d){switch(r){case"style":Np(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(a(61));if(r=s.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof s=="string"?Yr(e,s):(typeof s=="number"||typeof s=="bigint")&&Yr(e,""+s);break;case"onScroll":s!=null&&ae("scroll",e);break;case"onScrollEnd":s!=null&&ae("scrollend",e);break;case"onClick":s!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pe.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),n=r.slice(2,f?r.length-7:void 0),d=e[Nt]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,f),typeof s=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,s,f);break t}r in e?e[r]=s:s===!0?e.setAttribute(r,""):ba(e,r,s)}}}function _n(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var s=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var x=r[d];if(x!=null)switch(d){case"src":s=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ee(e,n,d,x,r,null)}}f&&Ee(e,n,"srcSet",r.srcSet,r,null),s&&Ee(e,n,"src",r.src,r,null);return;case"input":ae("invalid",e);var E=d=x=f=null,P=null,it=null;for(s in r)if(r.hasOwnProperty(s)){var dt=r[s];if(dt!=null)switch(s){case"name":f=dt;break;case"type":x=dt;break;case"checked":P=dt;break;case"defaultChecked":it=dt;break;case"value":d=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,n));break;default:Ee(e,n,s,dt,r,null)}}Rp(e,d,E,P,it,x,f,!1);return;case"select":ae("invalid",e),s=x=d=null;for(f in r)if(r.hasOwnProperty(f)&&(E=r[f],E!=null))switch(f){case"value":d=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ee(e,n,f,E,r,null)}n=d,r=x,e.multiple=!!s,n!=null?Xr(e,!!s,n,!1):r!=null&&Xr(e,!!s,r,!0);return;case"textarea":ae("invalid",e),d=f=s=null;for(x in r)if(r.hasOwnProperty(x)&&(E=r[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":f=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Ee(e,n,x,E,r,null)}Op(e,s,f,d);return;case"option":for(P in r)if(r.hasOwnProperty(P)&&(s=r[P],s!=null))switch(P){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ee(e,n,P,s,r,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(s=0;s<Zo.length;s++)ae(Zo[s],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in r)if(r.hasOwnProperty(it)&&(s=r[it],s!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ee(e,n,it,s,r,null)}return;default:if(Yc(n)){for(dt in r)r.hasOwnProperty(dt)&&(s=r[dt],s!==void 0&&Oh(e,n,dt,s,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(s=r[E],s!=null&&Ee(e,n,E,s,r,null))}function Qb(e,n,r,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,E=null,P=null,it=null,dt=null;for(lt in r){var _t=r[lt];if(r.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":P=_t;default:s.hasOwnProperty(lt)||Ee(e,n,lt,null,s,_t)}}for(var rt in s){var lt=s[rt];if(_t=r[rt],s.hasOwnProperty(rt)&&(lt!=null||_t!=null))switch(rt){case"type":d=lt;break;case"name":f=lt;break;case"checked":it=lt;break;case"defaultChecked":dt=lt;break;case"value":x=lt;break;case"defaultValue":E=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,n));break;default:lt!==_t&&Ee(e,n,rt,lt,s,_t)}}Wc(e,x,E,P,it,dt,d,f);return;case"select":lt=x=E=rt=null;for(d in r)if(P=r[d],r.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":lt=P;default:s.hasOwnProperty(d)||Ee(e,n,d,null,s,P)}for(f in s)if(d=s[f],P=r[f],s.hasOwnProperty(f)&&(d!=null||P!=null))switch(f){case"value":rt=d;break;case"defaultValue":E=d;break;case"multiple":x=d;default:d!==P&&Ee(e,n,f,d,s,P)}n=E,r=x,s=lt,rt!=null?Xr(e,!!r,rt,!1):!!s!=!!r&&(n!=null?Xr(e,!!r,n,!0):Xr(e,!!r,r?[]:"",!1));return;case"textarea":lt=rt=null;for(E in r)if(f=r[E],r.hasOwnProperty(E)&&f!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ee(e,n,E,null,s,f)}for(x in s)if(f=s[x],d=r[x],s.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":rt=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Ee(e,n,x,f,s,d)}zp(e,rt,lt);return;case"option":for(var Pt in r)if(rt=r[Pt],r.hasOwnProperty(Pt)&&rt!=null&&!s.hasOwnProperty(Pt))switch(Pt){case"selected":e.selected=!1;break;default:Ee(e,n,Pt,null,s,rt)}for(P in s)if(rt=s[P],lt=r[P],s.hasOwnProperty(P)&&rt!==lt&&(rt!=null||lt!=null))switch(P){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ee(e,n,P,rt,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Vt in r)rt=r[Vt],r.hasOwnProperty(Vt)&&rt!=null&&!s.hasOwnProperty(Vt)&&Ee(e,n,Vt,null,s,rt);for(it in s)if(rt=s[it],lt=r[it],s.hasOwnProperty(it)&&rt!==lt&&(rt!=null||lt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,n));break;default:Ee(e,n,it,rt,s,lt)}return;default:if(Yc(n)){for(var Ae in r)rt=r[Ae],r.hasOwnProperty(Ae)&&rt!==void 0&&!s.hasOwnProperty(Ae)&&Oh(e,n,Ae,void 0,s,rt);for(dt in s)rt=s[dt],lt=r[dt],!s.hasOwnProperty(dt)||rt===lt||rt===void 0&&lt===void 0||Oh(e,n,dt,rt,s,lt);return}}for(var q in r)rt=r[q],r.hasOwnProperty(q)&&rt!=null&&!s.hasOwnProperty(q)&&Ee(e,n,q,null,s,rt);for(_t in s)rt=s[_t],lt=r[_t],!s.hasOwnProperty(_t)||rt===lt||rt==null&&lt==null||Ee(e,n,_t,rt,s,lt)}function P0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),s=0;s<r.length;s++){var f=r[s],d=f.transferSize,x=f.initiatorType,E=f.duration;if(d&&E&&P0(x)){for(x=0,E=f.responseEnd,s+=1;s<r.length;s++){var P=r[s],it=P.startTime;if(it>E)break;var dt=P.transferSize,_t=P.initiatorType;dt&&P0(_t)&&(P=P.responseEnd,x+=dt*(P<E?1:(E-it)/(P-it)))}if(--s,n+=8*(d+x)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uh=null,Nh=null;function Du(e){return e.nodeType===9?e:e.ownerDocument}function B0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ph(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bh=null;function Jb(){var e=window.event;return e&&e.type==="popstate"?e===Bh?!1:(Bh=e,!0):(Bh=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,$b=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(e){return F0.resolve(null).then(e).catch(eS)}:H0;function eS(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function I0(e,n){var r=n,s=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(s===0){e.removeChild(f),Ms(n);return}s--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")s++;else if(r==="html")Ko(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ko(r);for(var d=r.firstChild;d;){var x=d.nextSibling,E=d.nodeName;d[ee]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=x}}else r==="body"&&Ko(e.ownerDocument.body);r=f}while(r);Ms(n)}function V0(e,n){var r=e;e=0;do{var s=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=s}while(r)}function Gh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Gh(r),De(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function nS(e,n,r,s){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ee])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function iS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=hi(e.nextSibling),e===null))return null;return e}function k0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function Hh(e){return e.data==="$?"||e.data==="$~"}function Fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aS(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var s=function(){n(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ih=null;function W0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return hi(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function X0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function Y0(e,n,r){switch(n=Du(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ko(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);De(e)}var di=new Map,q0=new Set;function Lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=Q.d;Q.d={f:rS,r:sS,D:oS,C:lS,L:uS,m:cS,X:hS,S:fS,M:dS};function rS(){var e=ua.f(),n=bu();return e||n}function sS(e){var n=Wn(e);n!==null&&n.tag===5&&n.type==="form"?cg(n):ua.r(e)}var xs=typeof document>"u"?null:document;function j0(e,n,r){var s=xs;if(s&&typeof n=="string"&&n){var f=ri(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),q0.has(f)||(q0.add(f),e={rel:e,crossOrigin:r,href:n},s.querySelector(f)===null&&(n=s.createElement("link"),_n(n,"link",e),Xt(n),s.head.appendChild(n)))}}function oS(e){ua.D(e),j0("dns-prefetch",e,null)}function lS(e,n){ua.C(e,n),j0("preconnect",e,n)}function uS(e,n,r){ua.L(e,n,r);var s=xs;if(s&&e&&n){var f='link[rel="preload"][as="'+ri(n)+'"]';n==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+ri(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+ri(r.imageSizes)+'"]')):f+='[href="'+ri(e)+'"]';var d=f;switch(n){case"style":d=bs(e);break;case"script":d=Ss(e)}di.has(d)||(e=_({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),di.set(d,e),s.querySelector(f)!==null||n==="style"&&s.querySelector(Jo(d))||n==="script"&&s.querySelector($o(d))||(n=s.createElement("link"),_n(n,"link",e),Xt(n),s.head.appendChild(n)))}}function cS(e,n){ua.m(e,n);var r=xs;if(r&&e){var s=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+ri(s)+'"][href="'+ri(e)+'"]',d=f;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ss(e)}if(!di.has(d)&&(e=_({rel:"modulepreload",href:e},n),di.set(d,e),r.querySelector(f)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector($o(d)))return}s=r.createElement("link"),_n(s,"link",e),Xt(s),r.head.appendChild(s)}}}function fS(e,n,r){ua.S(e,n,r);var s=xs;if(s&&e){var f=dn(s).hoistableStyles,d=bs(e);n=n||"default";var x=f.get(d);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(Jo(d)))E.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},r),(r=di.get(d))&&Vh(e,r);var P=x=s.createElement("link");Xt(P),_n(P,"link",e),P._p=new Promise(function(it,dt){P.onload=it,P.onerror=dt}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ru(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},f.set(d,x)}}}function hS(e,n){ua.X(e,n);var r=xs;if(r&&e){var s=dn(r).hoistableScripts,f=Ss(e),d=s.get(f);d||(d=r.querySelector($o(f)),d||(e=_({src:e,async:!0},n),(n=di.get(f))&&kh(e,n),d=r.createElement("script"),Xt(d),_n(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(f,d))}}function dS(e,n){ua.M(e,n);var r=xs;if(r&&e){var s=dn(r).hoistableScripts,f=Ss(e),d=s.get(f);d||(d=r.querySelector($o(f)),d||(e=_({src:e,async:!0,type:"module"},n),(n=di.get(f))&&kh(e,n),d=r.createElement("script"),Xt(d),_n(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(f,d))}}function Z0(e,n,r,s){var f=(f=at.current)?Lu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=bs(r.href),r=dn(f).hoistableStyles,s=r.get(n),s||(s={type:"style",instance:null,count:0,state:null},r.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=bs(r.href);var d=dn(f).hoistableStyles,x=d.get(e);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=f.querySelector(Jo(e)))&&!d._p&&(x.instance=d,x.state.loading=5),di.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},di.set(e,r),d||pS(f,e,r,x.state))),n&&s===null)throw Error(a(528,""));return x}if(n&&s!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(r),r=dn(f).hoistableScripts,s=r.get(n),s||(s={type:"script",instance:null,count:0,state:null},r.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function bs(e){return'href="'+ri(e)+'"'}function Jo(e){return'link[rel="stylesheet"]['+e+"]"}function Q0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function pS(e,n,r,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",r),Xt(n),e.head.appendChild(n))}function Ss(e){return'[src="'+ri(e)+'"]'}function $o(e){return"script[async]"+e}function K0(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+ri(r.href)+'"]');if(s)return n.instance=s,Xt(s),s;var f=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Xt(s),_n(s,"style",f),Ru(s,r.precedence,e),n.instance=s;case"stylesheet":f=bs(r.href);var d=e.querySelector(Jo(f));if(d)return n.state.loading|=4,n.instance=d,Xt(d),d;s=Q0(r),(f=di.get(f))&&Vh(s,f),d=(e.ownerDocument||e).createElement("link"),Xt(d);var x=d;return x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),_n(d,"link",s),n.state.loading|=4,Ru(d,r.precedence,e),n.instance=d;case"script":return d=Ss(r.src),(f=e.querySelector($o(d)))?(n.instance=f,Xt(f),f):(s=r,(f=di.get(d))&&(s=_({},r),kh(s,f)),e=e.ownerDocument||e,f=e.createElement("script"),Xt(f),_n(f,"link",s),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ru(s,r.precedence,e));return n.instance}function Ru(e,n,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=s.length?s[s.length-1]:null,d=f,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)d=E;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var zu=null;function J0(e,n,r){if(zu===null){var s=new Map,f=zu=new Map;f.set(r,s)}else f=zu,s=f.get(r),s||(s=new Map,f.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var d=r[f];if(!(d[ee]||d[ft]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var E=s.get(x);E?E.push(d):s.set(x,[d])}}return s}function $0(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function mS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gS(e,n,r,s){if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=bs(s.href),d=n.querySelector(Jo(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ou.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,Xt(d);return}d=n.ownerDocument||n,s=Q0(s),(f=di.get(f))&&Vh(s,f),d=d.createElement("link"),Xt(d);var x=d;x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),_n(d,"link",s),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Ou.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Wh=0;function _S(e,n){return e.stylesheets&&e.count===0&&Nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var s=setTimeout(function(){if(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Wh===0&&(Wh=62500*Kb());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Wh?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(f)}}:null}function Ou(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uu=null;function Nu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uu=new Map,n.forEach(vS,e),Uu=null,Ou.call(e))}function vS(e,n){if(!(n.state.loading&4)){var r=Uu.get(e);if(r)var s=r.get(null);else{r=new Map,Uu.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),s=x)}s&&r.set(null,s)}f=n.instance,x=f.getAttribute("data-precedence"),d=r.get(x)||s,d===s&&r.set(null,f),r.set(x,f),this.count++,s=Ou.bind(this),f.addEventListener("load",s),f.addEventListener("error",s),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var tl={$$typeof:D,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function yS(e,n,r,s,f,d,x,E,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=s,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function e_(e,n,r,s,f,d,x,E,P,it,dt,_t){return e=new yS(e,n,r,x,P,it,dt,_t,E),n=1,d===!0&&(n|=24),d=qn(3,null,null,n),e.current=d,d.stateNode=e,n=Mf(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:s,isDehydrated:r,cache:n},Tf(d),e}function n_(e){return e?(e=$r,e):$r}function i_(e,n,r,s,f,d){f=n_(f),s.context===null?s.context=f:s.pendingContext=f,s=Ca(n),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=Da(e,s,n),r!==null&&(In(r,e,n),zo(r,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Xh(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function r_(e){if(e.tag===13||e.tag===31){var n=ur(e,67108864);n!==null&&In(n,e,67108864),Xh(e,67108864)}}function s_(e){if(e.tag===13||e.tag===31){var n=Jn();n=mo(n);var r=ur(e,n);r!==null&&In(r,e,n),Xh(e,n)}}var Pu=!0;function xS(e,n,r,s){var f=G.T;G.T=null;var d=Q.p;try{Q.p=2,Yh(e,n,r,s)}finally{Q.p=d,G.T=f}}function bS(e,n,r,s){var f=G.T;G.T=null;var d=Q.p;try{Q.p=8,Yh(e,n,r,s)}finally{Q.p=d,G.T=f}}function Yh(e,n,r,s){if(Pu){var f=qh(s);if(f===null)zh(e,n,s,Bu,r),l_(e,s);else if(MS(f,e,n,r,s))s.stopPropagation();else if(l_(e,s),n&4&&-1<SS.indexOf(e)){for(;f!==null;){var d=Wn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Bt(d.pendingLanes);if(x!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var P=1<<31-Wt(x);E.entanglements[1]|=P,x&=~P}Bi(d),(_e&6)===0&&(yu=ct()+500,jo(0))}}break;case 31:case 13:E=ur(d,2),E!==null&&In(E,d,2),bu(),Xh(d,2)}if(d=qh(s),d===null&&zh(e,n,s,Bu,r),d===f)break;f=d}f!==null&&s.stopPropagation()}else zh(e,n,s,null,r)}}function qh(e){return e=jc(e),jh(e)}var Bu=null;function jh(e){if(Bu=null,e=Un(e),e!==null){var n=u(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=h(n),e!==null)return e;e=null}else if(r===31){if(e=c(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Bu=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case St:return 2;case At:return 8;case It:case F:return 32;case $:return 268435456;default:return 32}default:return 32}}var Zh=!1,Fa=null,Ia=null,Va=null,el=new Map,nl=new Map,ka=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(e,n,r,s,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[f]},n!==null&&(n=Wn(n),n!==null&&r_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function MS(e,n,r,s,f){switch(n){case"focusin":return Fa=il(Fa,e,n,r,s,f),!0;case"dragenter":return Ia=il(Ia,e,n,r,s,f),!0;case"mouseover":return Va=il(Va,e,n,r,s,f),!0;case"pointerover":var d=f.pointerId;return el.set(d,il(el.get(d)||null,e,n,r,s,f)),!0;case"gotpointercapture":return d=f.pointerId,nl.set(d,il(nl.get(d)||null,e,n,r,s,f)),!0}return!1}function u_(e){var n=Un(e.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){e.blockedOn=n,mt(e.priority,function(){s_(r)});return}}else if(n===31){if(n=c(r),n!==null){e.blockedOn=n,mt(e.priority,function(){s_(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=qh(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);qc=s,r.target.dispatchEvent(s),qc=null}else return n=Wn(r),n!==null&&r_(n),e.blockedOn=r,!1;n.shift()}return!0}function c_(e,n,r){Gu(e)&&r.delete(n)}function wS(){Zh=!1,Fa!==null&&Gu(Fa)&&(Fa=null),Ia!==null&&Gu(Ia)&&(Ia=null),Va!==null&&Gu(Va)&&(Va=null),el.forEach(c_),nl.forEach(c_)}function Hu(e,n){e.blockedOn===n&&(e.blockedOn=null,Zh||(Zh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,wS)))}var Fu=null;function f_(e){Fu!==e&&(Fu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fu===e&&(Fu=null);for(var n=0;n<e.length;n+=3){var r=e[n],s=e[n+1],f=e[n+2];if(typeof s!="function"){if(jh(s||r)===null)continue;break}var d=Wn(r);d!==null&&(e.splice(n,3),n-=3,qf(d,{pending:!0,data:f,method:r.method,action:s},s,f))}}))}function Ms(e){function n(P){return Hu(P,e)}Fa!==null&&Hu(Fa,e),Ia!==null&&Hu(Ia,e),Va!==null&&Hu(Va,e),el.forEach(n),nl.forEach(n);for(var r=0;r<ka.length;r++){var s=ka[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ka.length&&(r=ka[0],r.blockedOn===null);)u_(r),r.blockedOn===null&&ka.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var f=r[s],d=r[s+1],x=f[Nt]||null;if(typeof d=="function")x||f_(r);else if(x){var E=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[Nt]||null)E=x.formAction;else if(jh(f)!==null)continue}else E=x.action;typeof E=="function"?r[s+1]=E:(r.splice(s,3),s-=3),f_(r)}}}function h_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),s||setTimeout(r,20)}function r(){if(!s&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Qh(e){this._internalRoot=e}Iu.prototype.render=Qh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,s=Jn();i_(r,s,e,n,null,null)},Iu.prototype.unmount=Qh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),bu(),n[kt]=null}};function Iu(e){this._internalRoot=e}Iu.prototype.unstable_scheduleHydration=function(e){if(e){var n=st();e={blockedOn:null,target:e,priority:n};for(var r=0;r<ka.length&&n!==0&&n<ka[r].priority;r++);ka.splice(r,0,e),r===0&&u_(e)}};var d_=t.version;if(d_!=="19.2.5")throw Error(a(527,d_,"19.2.5"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ES={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Et=Vu.inject(ES),Lt=Vu}catch{}}return rl.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,s="",f=xg,d=bg,x=Sg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=e_(e,1,!1,null,null,r,s,null,f,d,x,h_),e[kt]=n.current,Rh(e),new Qh(n)},rl.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var s=!1,f="",d=xg,x=bg,E=Sg,P=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.formState!==void 0&&(P=r.formState)),n=e_(e,1,!0,n,r??null,s,f,P,d,x,E,h_),n.context=n_(null),r=n.current,s=Jn(),s=mo(s),f=Ca(s),f.callback=null,Da(r,f,s),r=s,n.current.lanes=r,Cn(n,r),Bi(n),e[kt]=n.current,Rh(e),new Iu(n)},rl.version="19.2.5",rl}var M_;function GS(){if(M_)return $h.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$h.exports=BS(),$h.exports}var HS=GS();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="146",ws={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FS=0,w_=1,IS=2,_y=1,VS=2,ml=3,to=0,vi=1,tr=2,nr=0,Zs=1,E_=2,A_=3,T_=4,kS=5,Xs=100,WS=101,XS=102,C_=103,D_=104,YS=200,qS=201,jS=202,ZS=203,vy=204,yy=205,QS=206,KS=207,JS=208,$S=209,t1=210,e1=0,n1=1,i1=2,qd=3,a1=4,r1=5,s1=6,o1=7,xy=0,l1=1,u1=2,va=0,c1=1,f1=2,h1=3,d1=4,p1=5,by=300,eo=301,no=302,jd=303,Zd=304,zc=306,Qd=1e3,Di=1001,Kd=1002,Vn=1003,L_=1004,R_=1005,gi=1006,m1=1007,Oc=1008,Br=1009,g1=1010,_1=1011,Sy=1012,v1=1013,Dr=1014,Lr=1015,wl=1016,y1=1017,x1=1018,Qs=1020,b1=1021,S1=1022,Li=1023,M1=1024,w1=1025,zr=1026,io=1027,E1=1028,A1=1029,T1=1030,C1=1031,D1=1033,id=33776,ad=33777,rd=33778,sd=33779,z_=35840,O_=35841,U_=35842,N_=35843,L1=36196,P_=37492,B_=37496,G_=37808,H_=37809,F_=37810,I_=37811,V_=37812,k_=37813,W_=37814,X_=37815,Y_=37816,q_=37817,j_=37818,Z_=37819,Q_=37820,K_=37821,J_=36492,Gr=3e3,Ve=3001,R1=3200,z1=3201,O1=0,U1=1,ma="srgb",Rr="srgb-linear",od=7680,N1=519,Jd=35044,$_="300 es",$d=1035;class Vr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tv=1234567;const yl=Math.PI/180,Cc=180/Math.PI;function ya(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[a&255]+wn[a>>8&255]+wn[a>>16&255]+wn[a>>24&255]).toLowerCase()}function An(o,t,i){return Math.max(t,Math.min(i,o))}function mp(o,t){return(o%t+t)%t}function P1(o,t,i,a,l){return a+(o-t)*(l-a)/(i-t)}function B1(o,t,i){return o!==t?(i-o)/(t-o):0}function xl(o,t,i){return(1-i)*o+i*t}function G1(o,t,i,a){return xl(o,t,1-Math.exp(-i*a))}function H1(o,t=1){return t-Math.abs(mp(o,t*2)-t)}function F1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function I1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function V1(o,t){return o+Math.floor(Math.random()*(t-o+1))}function k1(o,t){return o+Math.random()*(t-o)}function W1(o){return o*(.5-Math.random())}function X1(o){o!==void 0&&(tv=o);let t=tv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Y1(o){return o*yl}function q1(o){return o*Cc}function tp(o){return(o&o-1)===0&&o!==0}function j1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Dc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Z1(o,t,i,a,l){const u=Math.cos,h=Math.sin,c=u(i/2),m=h(i/2),p=u((t+a)/2),g=h((t+a)/2),_=u((t-a)/2),y=h((t-a)/2),M=u((a-t)/2),w=h((a-t)/2);switch(l){case"XYX":o.set(c*g,m*_,m*y,c*p);break;case"YZY":o.set(m*y,c*g,m*_,c*p);break;case"ZXZ":o.set(m*_,m*y,c*g,c*p);break;case"XZX":o.set(c*g,m*w,m*M,c*p);break;case"YXY":o.set(m*M,c*g,m*w,c*p);break;case"ZYZ":o.set(m*w,m*M,c*g,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function _a(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ce(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Q1=Object.freeze({__proto__:null,DEG2RAD:yl,RAD2DEG:Cc,generateUUID:ya,clamp:An,euclideanModulo:mp,mapLinear:P1,inverseLerp:B1,lerp:xl,damp:G1,pingpong:H1,smoothstep:F1,smootherstep:I1,randInt:V1,randFloat:k1,randFloatSpread:W1,seededRandom:X1,degToRad:Y1,radToDeg:q1,isPowerOfTwo:tp,ceilPowerOfTwo:j1,floorPowerOfTwo:Dc,setQuaternionFromProperEuler:Z1,normalize:Ce,denormalize:_a});class qt{constructor(t=0,i=0){qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*a-h*l+t.x,this.y=u*l+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(){_i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,i,a,l,u,h,c,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=c,g[3]=i,g[4]=u,g[5]=m,g[6]=a,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,u=this.elements,h=a[0],c=a[3],m=a[6],p=a[1],g=a[4],_=a[7],y=a[2],M=a[5],w=a[8],b=l[0],v=l[3],S=l[6],A=l[1],D=l[4],z=l[7],C=l[2],N=l[5],H=l[8];return u[0]=h*b+c*A+m*C,u[3]=h*v+c*D+m*N,u[6]=h*S+c*z+m*H,u[1]=p*b+g*A+_*C,u[4]=p*v+g*D+_*N,u[7]=p*S+g*z+_*H,u[2]=y*b+M*A+w*C,u[5]=y*v+M*D+w*N,u[8]=y*S+M*z+w*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],h=t[4],c=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*c*p-a*u*g+a*c*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],h=t[4],c=t[5],m=t[6],p=t[7],g=t[8],_=g*h-c*p,y=c*m-g*u,M=p*u-h*m,w=i*_+a*y+l*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=_*b,t[1]=(l*p-g*a)*b,t[2]=(c*a-l*h)*b,t[3]=y*b,t[4]=(g*i-l*m)*b,t[5]=(l*u-c*i)*b,t[6]=M*b,t[7]=(a*m-p*i)*b,t[8]=(h*i-a*u)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,u,h,c){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*h+p*c)+h+t,-l*p,l*m,-l*(-p*h+m*c)+c+i,0,0,1),this}scale(t,i){const a=this.elements;return a[0]*=t,a[3]*=t,a[6]*=t,a[1]*=i,a[4]*=i,a[7]*=i,this}rotate(t){const i=Math.cos(t),a=Math.sin(t),l=this.elements,u=l[0],h=l[3],c=l[6],m=l[1],p=l[4],g=l[7];return l[0]=i*u+a*m,l[3]=i*h+a*p,l[6]=i*c+a*g,l[1]=-a*u+i*m,l[4]=-a*h+i*p,l[7]=-a*c+i*g,this}translate(t,i){const a=this.elements;return a[0]+=t*a[2],a[3]+=t*a[5],a[6]+=t*a[8],a[1]+=i*a[2],a[4]+=i*a[5],a[7]+=i*a[8],this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function My(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function El(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Or(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ld={[ma]:{[Rr]:Or},[Rr]:{[ma]:yc}},wi={legacyMode:!0,get workingColorSpace(){return Rr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,i){if(this.legacyMode||t===i||!t||!i)return o;if(ld[t]&&ld[t][i]!==void 0){const a=ld[t][i];return o.r=a(o.r),o.g=a(o.g),o.b=a(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},wy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={r:0,g:0,b:0},Ei={h:0,s:0,l:0},ku={h:0,s:0,l:0};function ud(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}function Wu(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class fe{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,i===void 0&&a===void 0?this.set(t):this.setRGB(t,i,a)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ma){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wi.toWorkingColorSpace(this,i),this}setRGB(t,i,a,l=Rr){return this.r=t,this.g=i,this.b=a,wi.toWorkingColorSpace(this,l),this}setHSL(t,i,a,l=Rr){if(t=mp(t,1),i=An(i,0,1),a=An(a,0,1),i===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+i):a+i-a*i,h=2*a-u;this.r=ud(h,u,t+1/3),this.g=ud(h,u,t),this.b=ud(h,u,t-1/3)}return wi.toWorkingColorSpace(this,l),this}setStyle(t,i=ma){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],c=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(u[1],10))/255,this.g=Math.min(255,parseInt(u[2],10))/255,this.b=Math.min(255,parseInt(u[3],10))/255,wi.toWorkingColorSpace(this,i),a(u[4]),this;if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(u[1],10))/100,this.g=Math.min(100,parseInt(u[2],10))/100,this.b=Math.min(100,parseInt(u[3],10))/100,wi.toWorkingColorSpace(this,i),a(u[4]),this;break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const m=parseFloat(u[1])/360,p=parseFloat(u[2])/100,g=parseFloat(u[3])/100;return a(u[4]),this.setHSL(m,p,g,i)}break}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.r=parseInt(u.charAt(0)+u.charAt(0),16)/255,this.g=parseInt(u.charAt(1)+u.charAt(1),16)/255,this.b=parseInt(u.charAt(2)+u.charAt(2),16)/255,wi.toWorkingColorSpace(this,i),this;if(h===6)return this.r=parseInt(u.charAt(0)+u.charAt(1),16)/255,this.g=parseInt(u.charAt(2)+u.charAt(3),16)/255,this.b=parseInt(u.charAt(4)+u.charAt(5),16)/255,wi.toWorkingColorSpace(this,i),this}return t&&t.length>0?this.setColorName(t,i):this}setColorName(t,i=ma){const a=wy[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}copyLinearToSRGB(t){return this.r=yc(t.r),this.g=yc(t.g),this.b=yc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ma){return wi.fromWorkingColorSpace(Wu(this,nn),t),An(nn.r*255,0,255)<<16^An(nn.g*255,0,255)<<8^An(nn.b*255,0,255)<<0}getHexString(t=ma){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Rr){wi.fromWorkingColorSpace(Wu(this,nn),i);const a=nn.r,l=nn.g,u=nn.b,h=Math.max(a,l,u),c=Math.min(a,l,u);let m,p;const g=(c+h)/2;if(c===h)m=0,p=0;else{const _=h-c;switch(p=g<=.5?_/(h+c):_/(2-h-c),h){case a:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-a)/_+2;break;case u:m=(a-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Rr){return wi.fromWorkingColorSpace(Wu(this,nn),i),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=ma){return wi.fromWorkingColorSpace(Wu(this,nn),t),t!==ma?`color(${t} ${nn.r} ${nn.g} ${nn.b})`:`rgb(${nn.r*255|0},${nn.g*255|0},${nn.b*255|0})`}offsetHSL(t,i,a){return this.getHSL(Ei),Ei.h+=t,Ei.s+=i,Ei.l+=a,this.setHSL(Ei.h,Ei.s,Ei.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Ei),t.getHSL(ku);const a=xl(Ei.h,ku.h,i),l=xl(Ei.s,ku.s,i),u=xl(Ei.l,ku.l,i);return this.setHSL(a,l,u),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}fe.NAMES=wy;let As;class Ey{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{As===void 0&&(As=El("canvas")),As.width=t.width,As.height=t.height;const a=As.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=As}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=El("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Or(u[h]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Or(i[a]/255)*255):i[a]=Or(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ay{constructor(t=null){this.isSource=!0,this.uuid=ya(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,c=l.length;h<c;h++)l[h].isDataTexture?u.push(cd(l[h].image)):u.push(cd(l[h]))}else u=cd(l);a.url=u}return i||(t.images[this.uuid]=a),a}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ey.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K1=0;class yi extends Vr{constructor(t=yi.DEFAULT_IMAGE,i=yi.DEFAULT_MAPPING,a=Di,l=Di,u=gi,h=Oc,c=Li,m=Br,p=1,g=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=ya(),this.name="",this.source=new Ay(t),this.mipmaps=[],this.mapping=i,this.wrapS=a,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _i,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==by)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qd:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qd:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=by;class Ye{constructor(t=0,i=0,a=0,l=1){Ye.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*a+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*a+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*a+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*a+h[11]*l+h[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,u;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],M=m[5],w=m[9],b=m[2],v=m[6],S=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-b)<.01&&Math.abs(w-v)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+b)<.1&&Math.abs(w+v)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,z=(M+1)/2,C=(S+1)/2,N=(g+y)/4,H=(_+b)/4,T=(w+v)/4;return D>z&&D>C?D<.01?(a=0,l=.707106781,u=.707106781):(a=Math.sqrt(D),l=N/a,u=H/a):z>C?z<.01?(a=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),a=N/l,u=T/l):C<.01?(a=.707106781,l=.707106781,u=0):(u=Math.sqrt(C),a=H/u,l=T/u),this.set(a,l,u,i),this}let A=Math.sqrt((v-w)*(v-w)+(_-b)*(_-b)+(y-g)*(y-g));return Math.abs(A)<.001&&(A=1),this.x=(v-w)/A,this.y=(_-b)/A,this.z=(y-g)/A,this.w=Math.acos((p+M+S-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hr extends Vr{constructor(t=1,i=1,a={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ye(0,0,t,i),this.scissorTest=!1,this.viewport=new Ye(0,0,t,i);const l={width:t,height:i,depth:1};this.texture=new yi(l,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.internalFormat=a.internalFormat!==void 0?a.internalFormat:null,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:gi,this.depthBuffer=a.depthBuffer!==void 0?a.depthBuffer:!0,this.stencilBuffer=a.stencilBuffer!==void 0?a.stencilBuffer:!1,this.depthTexture=a.depthTexture!==void 0?a.depthTexture:null,this.samples=a.samples!==void 0?a.samples:0}setSize(t,i,a=1){(this.width!==t||this.height!==i||this.depth!==a)&&(this.width=t,this.height=i,this.depth=a,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=a,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Ay(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ty extends yi{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J1 extends yi{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,u,h,c){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3];const y=u[h+0],M=u[h+1],w=u[h+2],b=u[h+3];if(c===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(c===1){t[i+0]=y,t[i+1]=M,t[i+2]=w,t[i+3]=b;return}if(_!==b||m!==y||p!==M||g!==w){let v=1-c;const S=m*y+p*M+g*w+_*b,A=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const C=Math.sqrt(D),N=Math.atan2(C,S*A);v=Math.sin(v*N)/C,c=Math.sin(c*N)/C}const z=c*A;if(m=m*v+y*z,p=p*v+M*z,g=g*v+w*z,_=_*v+b*z,v===1-c){const C=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=C,p*=C,g*=C,_*=C}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,a,l,u,h){const c=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=u[h],y=u[h+1],M=u[h+2],w=u[h+3];return t[i]=c*w+g*_+m*M-p*y,t[i+1]=m*w+g*y+p*_-c*M,t[i+2]=p*w+g*M+c*y-m*_,t[i+3]=g*w-c*_-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i){const a=t._x,l=t._y,u=t._z,h=t._order,c=Math.cos,m=Math.sin,p=c(a/2),g=c(l/2),_=c(u/2),y=m(a/2),M=m(l/2),w=m(u/2);switch(h){case"XYZ":this._x=y*g*_+p*M*w,this._y=p*M*_-y*g*w,this._z=p*g*w+y*M*_,this._w=p*g*_-y*M*w;break;case"YXZ":this._x=y*g*_+p*M*w,this._y=p*M*_-y*g*w,this._z=p*g*w-y*M*_,this._w=p*g*_+y*M*w;break;case"ZXY":this._x=y*g*_-p*M*w,this._y=p*M*_+y*g*w,this._z=p*g*w+y*M*_,this._w=p*g*_-y*M*w;break;case"ZYX":this._x=y*g*_-p*M*w,this._y=p*M*_+y*g*w,this._z=p*g*w-y*M*_,this._w=p*g*_+y*M*w;break;case"YZX":this._x=y*g*_+p*M*w,this._y=p*M*_+y*g*w,this._z=p*g*w-y*M*_,this._w=p*g*_-y*M*w;break;case"XZY":this._x=y*g*_-p*M*w,this._y=p*M*_-y*g*w,this._z=p*g*w+y*M*_,this._w=p*g*_+y*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],u=i[8],h=i[1],c=i[5],m=i[9],p=i[2],g=i[6],_=i[10],y=a+c+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(a>c&&a>_){const M=2*Math.sqrt(1+a-c-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(c>_){const M=2*Math.sqrt(1+c-a-_);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-a-c);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(An(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,u=t._z,h=t._w,c=i._x,m=i._y,p=i._z,g=i._w;return this._x=a*g+h*c+l*p-u*m,this._y=l*g+h*m+u*c-a*p,this._z=u*g+h*p+a*m-l*c,this._w=h*g-a*c-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,u=this._z,h=this._w;let c=h*t._w+a*t._x+l*t._y+u*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=h,this._x=a,this._y=l,this._z=u,this;const m=1-c*c;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*a+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),g=Math.atan2(p,c),_=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*_+this._w*y,this._x=a*_+this._x*y,this._y=l*_+this._y*y,this._z=u*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=Math.random(),i=Math.sqrt(1-t),a=Math.sqrt(t),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),a*Math.sin(u),a*Math.cos(u),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,i=0,a=0){k.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ev.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ev.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*a+u[6]*l,this.y=u[1]*i+u[4]*a+u[7]*l,this.z=u[2]*i+u[5]*a+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*a+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*a+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*a+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*a+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,u=t.x,h=t.y,c=t.z,m=t.w,p=m*i+h*l-c*a,g=m*a+c*i-u*l,_=m*l+u*a-h*i,y=-u*i-h*a-c*l;return this.x=p*m+y*-u+g*-c-_*-h,this.y=g*m+y*-h+_*-u-p*-c,this.z=_*m+y*-c+p*-h-g*-u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*a+u[8]*l,this.y=u[1]*i+u[5]*a+u[9]*l,this.z=u[2]*i+u[6]*a+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,u=t.z,h=i.x,c=i.y,m=i.z;return this.x=l*m-u*c,this.y=u*h-a*m,this.z=a*c-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return fd.copy(this).projectOnVector(t),this.sub(fd)}reflect(t){return this.sub(fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(An(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(i),this.y=a*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new k,ev=new Fr;class ar{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){let i=1/0,a=1/0,l=1/0,u=-1/0,h=-1/0,c=-1/0;for(let m=0,p=t.length;m<p;m+=3){const g=t[m],_=t[m+1],y=t[m+2];g<i&&(i=g),_<a&&(a=_),y<l&&(l=y),g>u&&(u=g),_>h&&(h=_),y>c&&(c=y)}return this.min.set(i,a,l),this.max.set(u,h,c),this}setFromBufferAttribute(t){let i=1/0,a=1/0,l=1/0,u=-1/0,h=-1/0,c=-1/0;for(let m=0,p=t.count;m<p;m++){const g=t.getX(m),_=t.getY(m),y=t.getZ(m);g<i&&(i=g),_<a&&(a=_),y<l&&(l=y),g>u&&(u=g),_>h&&(h=_),y>c&&(c=y)}return this.min.set(i,a,l),this.max.set(u,h,c),this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=Sr.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0)if(i&&a.attributes!=null&&a.attributes.position!==void 0){const u=a.attributes.position;for(let h=0,c=u.count;h<c;h++)Sr.fromBufferAttribute(u,h).applyMatrix4(t.matrixWorld),this.expandByPoint(Sr)}else a.boundingBox===null&&a.computeBoundingBox(),hd.copy(a.boundingBox),hd.applyMatrix4(t.matrixWorld),this.union(hd);const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sr),Sr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),Xu.subVectors(this.max,sl),Ts.subVectors(t.a,sl),Cs.subVectors(t.b,sl),Ds.subVectors(t.c,sl),Xa.subVectors(Cs,Ts),Ya.subVectors(Ds,Cs),Mr.subVectors(Ts,Ds);let i=[0,-Xa.z,Xa.y,0,-Ya.z,Ya.y,0,-Mr.z,Mr.y,Xa.z,0,-Xa.x,Ya.z,0,-Ya.x,Mr.z,0,-Mr.x,-Xa.y,Xa.x,0,-Ya.y,Ya.x,0,-Mr.y,Mr.x,0];return!dd(i,Ts,Cs,Ds,Xu)||(i=[1,0,0,0,1,0,0,0,1],!dd(i,Ts,Cs,Ds,Xu))?!1:(Yu.crossVectors(Xa,Ya),i=[Yu.x,Yu.y,Yu.z],dd(i,Ts,Cs,Ds,Xu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Sr.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Sr).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ca=[new k,new k,new k,new k,new k,new k,new k,new k],Sr=new k,hd=new ar,Ts=new k,Cs=new k,Ds=new k,Xa=new k,Ya=new k,Mr=new k,sl=new k,Xu=new k,Yu=new k,wr=new k;function dd(o,t,i,a,l){for(let u=0,h=o.length-3;u<=h;u+=3){wr.fromArray(o,u);const c=l.x*Math.abs(wr.x)+l.y*Math.abs(wr.y)+l.z*Math.abs(wr.z),m=t.dot(wr),p=i.dot(wr),g=a.dot(wr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>c)return!1}return!0}const $1=new ar,ol=new k,pd=new k;class uo{constructor(t=new k,i=-1){this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):$1.setFromPoints(t).getCenter(a);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(ol,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(pd)),this.expandByPoint(ol.copy(t.center).sub(pd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fa=new k,md=new k,qu=new k,qa=new k,gd=new k,ju=new k,_d=new k;class Cy{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.direction).multiplyScalar(a).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.direction).multiplyScalar(i).add(this.origin),fa.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){md.copy(t).add(i).multiplyScalar(.5),qu.copy(i).sub(t).normalize(),qa.copy(this.origin).sub(md);const u=t.distanceTo(i)*.5,h=-this.direction.dot(qu),c=qa.dot(this.direction),m=-qa.dot(qu),p=qa.lengthSq(),g=Math.abs(1-h*h);let _,y,M,w;if(g>0)if(_=h*m-c,y=h*c-m,w=u*g,_>=0)if(y>=-w)if(y<=w){const b=1/g;_*=b,y*=b,M=_*(_+h*y+2*c)+y*(h*_+y+2*m)+p}else y=u,_=Math.max(0,-(h*y+c)),M=-_*_+y*(y+2*m)+p;else y=-u,_=Math.max(0,-(h*y+c)),M=-_*_+y*(y+2*m)+p;else y<=-w?(_=Math.max(0,-(-h*u+c)),y=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p):y<=w?(_=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(_=Math.max(0,-(h*u+c)),y=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p);else y=h>0?-u:u,_=Math.max(0,-(h*y+c)),M=-_*_+y*(y+2*m)+p;return a&&a.copy(this.direction).multiplyScalar(_).add(this.origin),l&&l.copy(qu).multiplyScalar(y).add(md),M}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const a=fa.dot(this.direction),l=fa.dot(fa)-a*a,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),c=a-h,m=a+h;return c<0&&m<0?null:c<0?this.at(m,i):this.at(c,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,u,h,c,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(a=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(a=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),a>h||u>l||((u>a||isNaN(a))&&(a=u),(h<l||isNaN(l))&&(l=h),_>=0?(c=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(c=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),a>m||c>l)||((c>a||a!==a)&&(a=c),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,a,l,u){gd.subVectors(i,t),ju.subVectors(a,t),_d.crossVectors(gd,ju);let h=this.direction.dot(_d),c;if(h>0){if(l)return null;c=1}else if(h<0)c=-1,h=-h;else return null;qa.subVectors(this.origin,t);const m=c*this.direction.dot(ju.crossVectors(qa,ju));if(m<0)return null;const p=c*this.direction.dot(gd.cross(qa));if(p<0||m+p>h)return null;const g=-c*qa.dot(_d);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,i,a,l,u,h,c,m,p,g,_,y,M,w,b,v){const S=this.elements;return S[0]=t,S[4]=i,S[8]=a,S[12]=l,S[1]=u,S[5]=h,S[9]=c,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=y,S[3]=M,S[7]=w,S[11]=b,S[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/Ls.setFromMatrixColumn(t,0).length(),u=1/Ls.setFromMatrixColumn(t,1).length(),h=1/Ls.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*u,i[5]=a[5]*u,i[6]=a[6]*u,i[7]=0,i[8]=a[8]*h,i[9]=a[9]*h,i[10]=a[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,u=t.z,h=Math.cos(a),c=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const y=h*g,M=h*_,w=c*g,b=c*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+w*p,i[5]=y-b*p,i[9]=-c*m,i[2]=b-y*p,i[6]=w+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,M=m*_,w=p*g,b=p*_;i[0]=y+b*c,i[4]=w*c-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-c,i[2]=M*c-w,i[6]=b+y*c,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,M=m*_,w=p*g,b=p*_;i[0]=y-b*c,i[4]=-h*_,i[8]=w+M*c,i[1]=M+w*c,i[5]=h*g,i[9]=b-y*c,i[2]=-h*p,i[6]=c,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,M=h*_,w=c*g,b=c*_;i[0]=m*g,i[4]=w*p-M,i[8]=y*p+b,i[1]=m*_,i[5]=b*p+y,i[9]=M*p-w,i[2]=-p,i[6]=c*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,w=c*m,b=c*p;i[0]=m*g,i[4]=b-y*_,i[8]=w*_+M,i[1]=_,i[5]=h*g,i[9]=-c*g,i[2]=-p*g,i[6]=M*_+w,i[10]=y-b*_}else if(t.order==="XZY"){const y=h*m,M=h*p,w=c*m,b=c*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=y*_+b,i[5]=h*g,i[9]=M*_-w,i[2]=w*_-M,i[6]=c*g,i[10]=b*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,eM)}lookAt(t,i,a){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ja.crossVectors(a,$n),ja.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ja.crossVectors(a,$n)),ja.normalize(),Zu.crossVectors($n,ja),l[0]=ja.x,l[4]=Zu.x,l[8]=$n.x,l[1]=ja.y,l[5]=Zu.y,l[9]=$n.y,l[2]=ja.z,l[6]=Zu.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,u=this.elements,h=a[0],c=a[4],m=a[8],p=a[12],g=a[1],_=a[5],y=a[9],M=a[13],w=a[2],b=a[6],v=a[10],S=a[14],A=a[3],D=a[7],z=a[11],C=a[15],N=l[0],H=l[4],T=l[8],B=l[12],tt=l[1],ot=l[5],vt=l[9],nt=l[13],Z=l[2],ht=l[6],G=l[10],Q=l[14],K=l[3],W=l[7],j=l[11],R=l[15];return u[0]=h*N+c*tt+m*Z+p*K,u[4]=h*H+c*ot+m*ht+p*W,u[8]=h*T+c*vt+m*G+p*j,u[12]=h*B+c*nt+m*Q+p*R,u[1]=g*N+_*tt+y*Z+M*K,u[5]=g*H+_*ot+y*ht+M*W,u[9]=g*T+_*vt+y*G+M*j,u[13]=g*B+_*nt+y*Q+M*R,u[2]=w*N+b*tt+v*Z+S*K,u[6]=w*H+b*ot+v*ht+S*W,u[10]=w*T+b*vt+v*G+S*j,u[14]=w*B+b*nt+v*Q+S*R,u[3]=A*N+D*tt+z*Z+C*K,u[7]=A*H+D*ot+z*ht+C*W,u[11]=A*T+D*vt+z*G+C*j,u[15]=A*B+D*nt+z*Q+C*R,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],u=t[12],h=t[1],c=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],M=t[14],w=t[3],b=t[7],v=t[11],S=t[15];return w*(+u*m*_-l*p*_-u*c*y+a*p*y+l*c*M-a*m*M)+b*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*g-u*m*g)+v*(+i*p*_-i*c*M-u*h*_+a*h*M+u*c*g-a*p*g)+S*(-l*c*g-i*m*_+i*c*y+l*h*_-a*h*y+a*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],h=t[4],c=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],M=t[11],w=t[12],b=t[13],v=t[14],S=t[15],A=_*v*p-b*y*p+b*m*M-c*v*M-_*m*S+c*y*S,D=w*y*p-g*v*p-w*m*M+h*v*M+g*m*S-h*y*S,z=g*b*p-w*_*p+w*c*M-h*b*M-g*c*S+h*_*S,C=w*_*m-g*b*m-w*c*y+h*b*y+g*c*v-h*_*v,N=i*A+a*D+l*z+u*C;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/N;return t[0]=A*H,t[1]=(b*y*u-_*v*u-b*l*M+a*v*M+_*l*S-a*y*S)*H,t[2]=(c*v*u-b*m*u+b*l*p-a*v*p-c*l*S+a*m*S)*H,t[3]=(_*m*u-c*y*u-_*l*p+a*y*p+c*l*M-a*m*M)*H,t[4]=D*H,t[5]=(g*v*u-w*y*u+w*l*M-i*v*M-g*l*S+i*y*S)*H,t[6]=(w*m*u-h*v*u-w*l*p+i*v*p+h*l*S-i*m*S)*H,t[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*M+i*m*M)*H,t[8]=z*H,t[9]=(w*_*u-g*b*u-w*a*M+i*b*M+g*a*S-i*_*S)*H,t[10]=(h*b*u-w*c*u+w*a*p-i*b*p-h*a*S+i*c*S)*H,t[11]=(g*c*u-h*_*u-g*a*p+i*_*p+h*a*M-i*c*M)*H,t[12]=C*H,t[13]=(g*b*l-w*_*l+w*a*y-i*b*y-g*a*v+i*_*v)*H,t[14]=(w*c*l-h*b*l-w*a*m+i*b*m+h*a*v-i*c*v)*H,t[15]=(h*_*l-g*c*l+g*a*m-i*_*m-h*a*y+i*c*y)*H,this}scale(t){const i=this.elements,a=t.x,l=t.y,u=t.z;return i[0]*=a,i[4]*=l,i[8]*=u,i[1]*=a,i[5]*=l,i[9]*=u,i[2]*=a,i[6]*=l,i[10]*=u,i[3]*=a,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),u=1-a,h=t.x,c=t.y,m=t.z,p=u*h,g=u*c;return this.set(p*h+a,p*c-l*m,p*m+l*c,0,p*c+l*m,g*c+a,g*m-l*h,0,p*m-l*c,g*m+l*h,u*m*m+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,u,h){return this.set(1,a,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,u=i._x,h=i._y,c=i._z,m=i._w,p=u+u,g=h+h,_=c+c,y=u*p,M=u*g,w=u*_,b=h*g,v=h*_,S=c*_,A=m*p,D=m*g,z=m*_,C=a.x,N=a.y,H=a.z;return l[0]=(1-(b+S))*C,l[1]=(M+z)*C,l[2]=(w-D)*C,l[3]=0,l[4]=(M-z)*N,l[5]=(1-(y+S))*N,l[6]=(v+A)*N,l[7]=0,l[8]=(w+D)*H,l[9]=(v-A)*H,l[10]=(1-(y+b))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let u=Ls.set(l[0],l[1],l[2]).length();const h=Ls.set(l[4],l[5],l[6]).length(),c=Ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ai.copy(this);const p=1/u,g=1/h,_=1/c;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,i.setFromRotationMatrix(Ai),a.x=u,a.y=h,a.z=c,this}makePerspective(t,i,a,l,u,h){const c=this.elements,m=2*u/(i-t),p=2*u/(a-l),g=(i+t)/(i-t),_=(a+l)/(a-l),y=-(h+u)/(h-u),M=-2*h*u/(h-u);return c[0]=m,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,a,l,u,h){const c=this.elements,m=1/(i-t),p=1/(a-l),g=1/(h-u),_=(i+t)*m,y=(a+l)*p,M=(h+u)*g;return c[0]=2*m,c[4]=0,c[8]=0,c[12]=-_,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-y,c[2]=0,c[6]=0,c[10]=-2*g,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const Ls=new k,Ai=new tn,tM=new k(0,0,0),eM=new k(1,1,1),ja=new k,Zu=new k,$n=new k,nv=new tn,iv=new Fr;class Dl{constructor(t=0,i=0,a=0,l=Dl.DefaultOrder){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,u=l[0],h=l[4],c=l[8],m=l[1],p=l[5],g=l[9],_=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(An(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-An(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(An(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-An(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(An(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(c,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nv,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return iv.setFromEuler(this),this.setFromQuaternion(iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Dl.DefaultOrder="XYZ";Dl.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Dy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nM=0;const av=new k,Rs=new Fr,ha=new tn,Qu=new k,ll=new k,iM=new k,aM=new Fr,rv=new k(1,0,0),sv=new k(0,1,0),ov=new k(0,0,1),rM={type:"added"},lv={type:"removed"};class hn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DefaultUp.clone();const t=new k,i=new Dl,a=new Fr,l=new k(1,1,1);function u(){a.setFromEuler(i,!1)}function h(){i.setFromQuaternion(a,void 0,!1)}i._onChange(u),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new _i}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=hn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DefaultMatrixWorldAutoUpdate,this.layers=new Dy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rs.setFromAxisAngle(t,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,i){return Rs.setFromAxisAngle(t,i),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(rv,t)}rotateY(t){return this.rotateOnAxis(sv,t)}rotateZ(t){return this.rotateOnAxis(ov,t)}translateOnAxis(t,i){return av.copy(t).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(rv,t)}translateY(t){return this.translateOnAxis(sv,t)}translateZ(t){return this.translateOnAxis(ov,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?Qu.copy(t):Qu.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(ll,Qu,this.up):ha.lookAt(Qu,ll,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Rs.setFromRotationMatrix(ha),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(rM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(lv)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const i=this.children[t];i.parent=null,i.dispatchEvent(lv)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const h=this.children[a].getObjectByProperty(t,i);if(h!==void 0)return h}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,t,iM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,aM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++){const u=i[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const c=l[u];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function u(c,m){return c[m.uuid]===void 0&&(c[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const m=c.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let m=0,p=this.material.length;m<p;m++)c.push(u(t.materials,this.material[m]));l.material=c}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let c=0;c<this.children.length;c++)l.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let c=0;c<this.animations.length;c++){const m=this.animations[c];l.animations.push(u(t.animations,m))}}if(i){const c=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),y=h(t.skeletons),M=h(t.animations),w=h(t.nodes);c.length>0&&(a.geometries=c),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),y.length>0&&(a.skeletons=y),M.length>0&&(a.animations=M),w.length>0&&(a.nodes=w)}return a.object=l,a;function h(c){const m=[];for(const p in c){const g=c[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}hn.DefaultUp=new k(0,1,0);hn.DefaultMatrixAutoUpdate=!0;hn.DefaultMatrixWorldAutoUpdate=!0;const Ti=new k,da=new k,vd=new k,pa=new k,zs=new k,Os=new k,uv=new k,yd=new k,xd=new k,bd=new k;class Fi{constructor(t=new k,i=new k,a=new k){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),Ti.subVectors(t,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,a,l,u){Ti.subVectors(l,i),da.subVectors(a,i),vd.subVectors(t,i);const h=Ti.dot(Ti),c=Ti.dot(da),m=Ti.dot(vd),p=da.dot(da),g=da.dot(vd),_=h*p-c*c;if(_===0)return u.set(-2,-1,-1);const y=1/_,M=(p*m-c*g)*y,w=(h*g-c*m)*y;return u.set(1-M-w,w,M)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,pa),pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getUV(t,i,a,l,u,h,c,m){return this.getBarycoord(t,i,a,l,pa),m.set(0,0),m.addScaledVector(u,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(c,pa.z),m}static isFrontFacing(t,i,a,l){return Ti.subVectors(a,i),da.subVectors(t,i),Ti.cross(da).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ti.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,a,l,u){return Fi.getUV(t,this.a,this.b,this.c,i,a,l,u)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,u=this.c;let h,c;zs.subVectors(l,a),Os.subVectors(u,a),yd.subVectors(t,a);const m=zs.dot(yd),p=Os.dot(yd);if(m<=0&&p<=0)return i.copy(a);xd.subVectors(t,l);const g=zs.dot(xd),_=Os.dot(xd);if(g>=0&&_<=g)return i.copy(l);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(a).addScaledVector(zs,h);bd.subVectors(t,u);const M=zs.dot(bd),w=Os.dot(bd);if(w>=0&&M<=w)return i.copy(u);const b=M*p-m*w;if(b<=0&&p>=0&&w<=0)return c=p/(p-w),i.copy(a).addScaledVector(Os,c);const v=g*w-M*_;if(v<=0&&_-g>=0&&M-w>=0)return uv.subVectors(u,l),c=(_-g)/(_-g+(M-w)),i.copy(l).addScaledVector(uv,c);const S=1/(v+b+y);return h=b*S,c=y*S,i.copy(a).addScaledVector(zs,h).addScaledVector(Os,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let sM=0;class co extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=Zs,this.side=to,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vy,this.blendDst=yy,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=od,this.stencilZFail=od,this.stencilZPass=od,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn("THREE.Material: '"+i+"' parameter is undefined.");continue}const l=this[i];if(l===void 0){console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.");continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(a.blending=this.blending),this.side!==to&&(a.side=this.side),this.vertexColors&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=this.transparent),a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.stencilWrite=this.stencilWrite,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(a.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(a.wireframe=this.wireframe),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=this.flatShading),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData);function l(u){const h=[];for(const c in u){const m=u[c];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(a.textures=u),h.length>0&&(a.images=h)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let u=0;u!==l;++u)a[u]=i[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gp extends co{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new k,Ku=new qt;class Ri{constructor(t,i,a){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a===!0,this.usage=Jd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Ku.fromBufferAttribute(this,i),Ku.applyMatrix3(t),this.setXY(i,Ku.x,Ku.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(t,i=0){return this.array.set(t,i),this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=_a(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=_a(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=_a(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=_a(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=Ce(i,this.array),a=Ce(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=Ce(i,this.array),a=Ce(a,this.array),l=Ce(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,u){return t*=this.itemSize,this.normalized&&(i=Ce(i,this.array),a=Ce(a,this.array),l=Ce(l,this.array),u=Ce(u,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jd&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ly extends Ri{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class Ry extends Ri{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class xn extends Ri{constructor(t,i,a){super(new Float32Array(t),i,a)}}let oM=0;const pi=new tn,Sd=new hn,Us=new k,ti=new ar,ul=new ar,fn=new k;class ii extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(My(t)?Ry:Ly)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new _i().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,a){return pi.makeTranslation(t,i,a),this.applyMatrix4(pi),this}scale(t,i,a){return pi.makeScale(t,i,a),this.applyMatrix4(pi),this}lookAt(t){return Sd.lookAt(t),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const i=[];for(let a=0,l=t.length;a<l;a++){const u=t[a];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new xn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const u=i[a];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const a=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const c=i[u];ul.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(ti.min,ul.min),ti.expandByPoint(fn),fn.addVectors(ti.max,ul.max),ti.expandByPoint(fn)):(ti.expandByPoint(ul.min),ti.expandByPoint(ul.max))}ti.getCenter(a);let l=0;for(let u=0,h=t.count;u<h;u++)fn.fromBufferAttribute(t,u),l=Math.max(l,a.distanceToSquared(fn));if(i)for(let u=0,h=i.length;u<h;u++){const c=i[u],m=this.morphTargetsRelative;for(let p=0,g=c.count;p<g;p++)fn.fromBufferAttribute(c,p),m&&(Us.fromBufferAttribute(t,p),fn.add(Us)),l=Math.max(l,a.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.array,l=i.position.array,u=i.normal.array,h=i.uv.array,c=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*c),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let tt=0;tt<c;tt++)p[tt]=new k,g[tt]=new k;const _=new k,y=new k,M=new k,w=new qt,b=new qt,v=new qt,S=new k,A=new k;function D(tt,ot,vt){_.fromArray(l,tt*3),y.fromArray(l,ot*3),M.fromArray(l,vt*3),w.fromArray(h,tt*2),b.fromArray(h,ot*2),v.fromArray(h,vt*2),y.sub(_),M.sub(_),b.sub(w),v.sub(w);const nt=1/(b.x*v.y-v.x*b.y);isFinite(nt)&&(S.copy(y).multiplyScalar(v.y).addScaledVector(M,-b.y).multiplyScalar(nt),A.copy(M).multiplyScalar(b.x).addScaledVector(y,-v.x).multiplyScalar(nt),p[tt].add(S),p[ot].add(S),p[vt].add(S),g[tt].add(A),g[ot].add(A),g[vt].add(A))}let z=this.groups;z.length===0&&(z=[{start:0,count:a.length}]);for(let tt=0,ot=z.length;tt<ot;++tt){const vt=z[tt],nt=vt.start,Z=vt.count;for(let ht=nt,G=nt+Z;ht<G;ht+=3)D(a[ht+0],a[ht+1],a[ht+2])}const C=new k,N=new k,H=new k,T=new k;function B(tt){H.fromArray(u,tt*3),T.copy(H);const ot=p[tt];C.copy(ot),C.sub(H.multiplyScalar(H.dot(ot))).normalize(),N.crossVectors(T,ot);const nt=N.dot(g[tt])<0?-1:1;m[tt*4]=C.x,m[tt*4+1]=C.y,m[tt*4+2]=C.z,m[tt*4+3]=nt}for(let tt=0,ot=z.length;tt<ot;++tt){const vt=z[tt],nt=vt.start,Z=vt.count;for(let ht=nt,G=nt+Z;ht<G;ht+=3)B(a[ht+0]),B(a[ht+1]),B(a[ht+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let y=0,M=a.count;y<M;y++)a.setXYZ(y,0,0,0);const l=new k,u=new k,h=new k,c=new k,m=new k,p=new k,g=new k,_=new k;if(t)for(let y=0,M=t.count;y<M;y+=3){const w=t.getX(y+0),b=t.getX(y+1),v=t.getX(y+2);l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,v),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),c.fromBufferAttribute(a,w),m.fromBufferAttribute(a,b),p.fromBufferAttribute(a,v),c.add(g),m.add(g),p.add(g),a.setXYZ(w,c.x,c.y,c.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)fn.fromBufferAttribute(t,i),fn.normalize(),t.setXYZ(i,fn.x,fn.y,fn.z)}toNonIndexed(){function t(c,m){const p=c.array,g=c.itemSize,_=c.normalized,y=new p.constructor(m.length*g);let M=0,w=0;for(let b=0,v=m.length;b<v;b++){c.isInterleavedBufferAttribute?M=m[b]*c.data.stride+c.offset:M=m[b]*g;for(let S=0;S<g;S++)y[w++]=p[M++]}return new Ri(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,a=this.index.array,l=this.attributes;for(const c in l){const m=l[c],p=t(m,a);i.setAttribute(c,p)}const u=this.morphAttributes;for(const c in u){const m=[],p=u[c];for(let g=0,_=p.length;g<_;g++){const y=p[g],M=t(y,a);m.push(M)}i.morphAttributes[c]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let c=0,m=h.length;c<m;c++){const p=h[c];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let y=0,M=_.length;y<M;y++)g.push(_[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new tn,Ns=new Cy,Md=new uo,Za=new k,Qa=new k,Ka=new k,wd=new k,Ed=new k,Ad=new k,Ju=new k,$u=new k,tc=new k,ec=new qt,nc=new qt,ic=new qt,Td=new k,ac=new k;class Vi extends hn{constructor(t=new ii,i=new gp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const c=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}raycast(t,i){const a=this.geometry,l=this.material,u=this.matrixWorld;if(l===void 0||(a.boundingSphere===null&&a.computeBoundingSphere(),Md.copy(a.boundingSphere),Md.applyMatrix4(u),t.ray.intersectsSphere(Md)===!1)||(cv.copy(u).invert(),Ns.copy(t.ray).applyMatrix4(cv),a.boundingBox!==null&&Ns.intersectsBox(a.boundingBox)===!1))return;let h;const c=a.index,m=a.attributes.position,p=a.morphAttributes.position,g=a.morphTargetsRelative,_=a.attributes.uv,y=a.attributes.uv2,M=a.groups,w=a.drawRange;if(c!==null)if(Array.isArray(l))for(let b=0,v=M.length;b<v;b++){const S=M[b],A=l[S.materialIndex],D=Math.max(S.start,w.start),z=Math.min(c.count,Math.min(S.start+S.count,w.start+w.count));for(let C=D,N=z;C<N;C+=3){const H=c.getX(C),T=c.getX(C+1),B=c.getX(C+2);h=rc(this,A,t,Ns,m,p,g,_,y,H,T,B),h&&(h.faceIndex=Math.floor(C/3),h.face.materialIndex=S.materialIndex,i.push(h))}}else{const b=Math.max(0,w.start),v=Math.min(c.count,w.start+w.count);for(let S=b,A=v;S<A;S+=3){const D=c.getX(S),z=c.getX(S+1),C=c.getX(S+2);h=rc(this,l,t,Ns,m,p,g,_,y,D,z,C),h&&(h.faceIndex=Math.floor(S/3),i.push(h))}}else if(m!==void 0)if(Array.isArray(l))for(let b=0,v=M.length;b<v;b++){const S=M[b],A=l[S.materialIndex],D=Math.max(S.start,w.start),z=Math.min(m.count,Math.min(S.start+S.count,w.start+w.count));for(let C=D,N=z;C<N;C+=3){const H=C,T=C+1,B=C+2;h=rc(this,A,t,Ns,m,p,g,_,y,H,T,B),h&&(h.faceIndex=Math.floor(C/3),h.face.materialIndex=S.materialIndex,i.push(h))}}else{const b=Math.max(0,w.start),v=Math.min(m.count,w.start+w.count);for(let S=b,A=v;S<A;S+=3){const D=S,z=S+1,C=S+2;h=rc(this,l,t,Ns,m,p,g,_,y,D,z,C),h&&(h.faceIndex=Math.floor(S/3),i.push(h))}}}}function lM(o,t,i,a,l,u,h,c){let m;if(t.side===vi?m=a.intersectTriangle(h,u,l,!0,c):m=a.intersectTriangle(l,u,h,t.side!==tr,c),m===null)return null;ac.copy(c),ac.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ac);return p<i.near||p>i.far?null:{distance:p,point:ac.clone(),object:o}}function rc(o,t,i,a,l,u,h,c,m,p,g,_){Za.fromBufferAttribute(l,p),Qa.fromBufferAttribute(l,g),Ka.fromBufferAttribute(l,_);const y=o.morphTargetInfluences;if(u&&y){Ju.set(0,0,0),$u.set(0,0,0),tc.set(0,0,0);for(let w=0,b=u.length;w<b;w++){const v=y[w],S=u[w];v!==0&&(wd.fromBufferAttribute(S,p),Ed.fromBufferAttribute(S,g),Ad.fromBufferAttribute(S,_),h?(Ju.addScaledVector(wd,v),$u.addScaledVector(Ed,v),tc.addScaledVector(Ad,v)):(Ju.addScaledVector(wd.sub(Za),v),$u.addScaledVector(Ed.sub(Qa),v),tc.addScaledVector(Ad.sub(Ka),v)))}Za.add(Ju),Qa.add($u),Ka.add(tc)}o.isSkinnedMesh&&(o.boneTransform(p,Za),o.boneTransform(g,Qa),o.boneTransform(_,Ka));const M=lM(o,t,i,a,Za,Qa,Ka,Td);if(M){c&&(ec.fromBufferAttribute(c,p),nc.fromBufferAttribute(c,g),ic.fromBufferAttribute(c,_),M.uv=Fi.getUV(Td,Za,Qa,Ka,ec,nc,ic,new qt)),m&&(ec.fromBufferAttribute(m,p),nc.fromBufferAttribute(m,g),ic.fromBufferAttribute(m,_),M.uv2=Fi.getUV(Td,Za,Qa,Ka,ec,nc,ic,new qt));const w={a:p,b:g,c:_,normal:new k,materialIndex:0};Fi.getNormal(Za,Qa,Ka,w.normal),M.face=w}return M}class Ll extends ii{constructor(t=1,i=1,a=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:u,depthSegments:h};const c=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let y=0,M=0;w("z","y","x",-1,-1,a,i,t,h,u,0),w("z","y","x",1,-1,a,i,-t,h,u,1),w("x","z","y",1,1,t,a,i,l,h,2),w("x","z","y",1,-1,t,a,-i,l,h,3),w("x","y","z",1,-1,t,i,a,l,u,4),w("x","y","z",-1,-1,t,i,-a,l,u,5),this.setIndex(m),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(_,2));function w(b,v,S,A,D,z,C,N,H,T,B){const tt=z/H,ot=C/T,vt=z/2,nt=C/2,Z=N/2,ht=H+1,G=T+1;let Q=0,K=0;const W=new k;for(let j=0;j<G;j++){const R=j*ot-nt;for(let I=0;I<ht;I++){const Y=I*tt-vt;W[b]=Y*A,W[v]=R*D,W[S]=Z,p.push(W.x,W.y,W.z),W[b]=0,W[v]=0,W[S]=N>0?1:-1,g.push(W.x,W.y,W.z),_.push(I/H),_.push(1-j/T),Q+=1}}for(let j=0;j<T;j++)for(let R=0;R<H;R++){const I=y+R+ht*j,Y=y+R+ht*(j+1),ut=y+(R+1)+ht*(j+1),yt=y+(R+1)+ht*j;m.push(I,Y,yt),m.push(Y,ut,yt),K+=6}c.addGroup(M,K,B),M+=K,y+=Q}}static fromJSON(t){return new Ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(o){const t={};for(const i in o){t[i]={};for(const a in o[i]){const l=o[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const a=ao(o[i]);for(const l in a)t[l]=a[l]}return t}function uM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}const _p={clone:ao,merge:zn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends co{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class vp extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ni extends vp{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,a,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(yl*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*a/p,l*=h.width/m,a*=h.height/p}const c=this.filmOffset;c!==0&&(u+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-a,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ps=90,Bs=1;class hM extends hn{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a;const l=new ni(Ps,Bs,t,i);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(1,0,0)),this.add(l);const u=new ni(Ps,Bs,t,i);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new k(-1,0,0)),this.add(u);const h=new ni(Ps,Bs,t,i);h.layers=this.layers,h.up.set(0,0,1),h.lookAt(new k(0,1,0)),this.add(h);const c=new ni(Ps,Bs,t,i);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new k(0,-1,0)),this.add(c);const m=new ni(Ps,Bs,t,i);m.layers=this.layers,m.up.set(0,-1,0),m.lookAt(new k(0,0,1)),this.add(m);const p=new ni(Ps,Bs,t,i);p.layers=this.layers,p.up.set(0,-1,0),p.lookAt(new k(0,0,-1)),this.add(p)}update(t,i){this.parent===null&&this.updateMatrixWorld();const a=this.renderTarget,[l,u,h,c,m,p]=this.children,g=t.getRenderTarget(),_=t.toneMapping,y=t.xr.enabled;t.toneMapping=va,t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0),t.render(i,l),t.setRenderTarget(a,1),t.render(i,u),t.setRenderTarget(a,2),t.render(i,h),t.setRenderTarget(a,3),t.render(i,c),t.setRenderTarget(a,4),t.render(i,m),a.texture.generateMipmaps=M,t.setRenderTarget(a,5),t.render(i,p),t.setRenderTarget(g),t.toneMapping=_,t.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class zy extends yi{constructor(t,i,a,l,u,h,c,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:eo,super(t,i,a,l,u,h,c,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dM extends Hr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new zy(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:gi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.encoding=i.encoding,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ll(5,5,5),u=new ir({name:"CubemapFromEquirect",uniforms:ao(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:vi,blending:nr});u.uniforms.tEquirect.value=i;const h=new Vi(l,u),c=i.minFilter;return i.minFilter===Oc&&(i.minFilter=gi),new hM(1,10,this).update(t,h),i.minFilter=c,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,a,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,a,l);t.setRenderTarget(u)}}const Cd=new k,pM=new k,mM=new _i;class Er{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Cd.subVectors(a,i).cross(pM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,i){const a=t.delta(Cd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(a).multiplyScalar(u).add(t.start)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||mM.getNormalMatrix(t),l=this.coplanarPoint(Cd).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new uo,sc=new k;class Oy{constructor(t=new Er,i=new Er,a=new Er,l=new Er,u=new Er,h=new Er){this.planes=[t,i,a,l,u,h]}set(t,i,a,l,u,h){const c=this.planes;return c[0].copy(t),c[1].copy(i),c[2].copy(a),c[3].copy(l),c[4].copy(u),c[5].copy(h),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t){const i=this.planes,a=t.elements,l=a[0],u=a[1],h=a[2],c=a[3],m=a[4],p=a[5],g=a[6],_=a[7],y=a[8],M=a[9],w=a[10],b=a[11],v=a[12],S=a[13],A=a[14],D=a[15];return i[0].setComponents(c-l,_-m,b-y,D-v).normalize(),i[1].setComponents(c+l,_+m,b+y,D+v).normalize(),i[2].setComponents(c+u,_+p,b+M,D+S).normalize(),i[3].setComponents(c-u,_-p,b-M,D-S).normalize(),i[4].setComponents(c-h,_-g,b-w,D-A).normalize(),i[5].setComponents(c+h,_+g,b+w,D+A).normalize(),this}intersectsObject(t){const i=t.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSprite(t){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(sc.x=l.normal.x>0?t.max.x:t.min.x,sc.y=l.normal.y>0?t.max.y:t.min.y,sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uy(){let o=null,t=!1,i=null,a=null;function l(u,h){i(u,h),a=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function gM(o,t){const i=t.isWebGL2,a=new WeakMap;function l(p,g){const _=p.array,y=p.usage,M=o.createBuffer();o.bindBuffer(g,M),o.bufferData(g,_,y),p.onUploadCallback();let w;if(_ instanceof Float32Array)w=5126;else if(_ instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(_ instanceof Int16Array)w=5122;else if(_ instanceof Uint32Array)w=5125;else if(_ instanceof Int32Array)w=5124;else if(_ instanceof Int8Array)w=5120;else if(_ instanceof Uint8Array)w=5121;else if(_ instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:M,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version}}function u(p,g,_){const y=g.array,M=g.updateRange;o.bindBuffer(_,p),M.count===-1?o.bufferSubData(_,0,y):(i?o.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1)}function h(p){return p.isInterleavedBufferAttribute&&(p=p.data),a.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=a.get(p);g&&(o.deleteBuffer(g.buffer),a.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const y=a.get(p);(!y||y.version<p.version)&&a.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const _=a.get(p);_===void 0?a.set(p,l(p,g)):_.version<p.version&&(u(_.buffer,p,g),_.version=p.version)}return{get:h,remove:c,update:m}}class yp extends ii{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const u=t/2,h=i/2,c=Math.floor(a),m=Math.floor(l),p=c+1,g=m+1,_=t/c,y=i/m,M=[],w=[],b=[],v=[];for(let S=0;S<g;S++){const A=S*y-h;for(let D=0;D<p;D++){const z=D*_-u;w.push(z,-A,0),b.push(0,0,1),v.push(D/c),v.push(1-S/m)}}for(let S=0;S<m;S++)for(let A=0;A<c;A++){const D=A+p*S,z=A+p*(S+1),C=A+1+p*(S+1),N=A+1+p*S;M.push(D,z,N),M.push(z,C,N)}this.setIndex(M),this.setAttribute("position",new xn(w,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(v,2))}static fromJSON(t){return new yp(t.width,t.height,t.widthSegments,t.heightSegments)}}var _M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM="vec3 transformed = vec3( position );",wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,TM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PM=`#define PI 3.141592653589793
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
}`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,GM=`vec3 transformedNormal = objectNormal;
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
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tw=`#ifdef USE_GRADIENTMAP
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
}`,ew=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,rw=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,sw=`#if defined( USE_ENVMAP )
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
#endif`,ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,uw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,fw=`PhysicalMaterial material;
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
#endif`,hw=`struct PhysicalMaterial {
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
}`,dw=`
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,pw=`#if defined( RE_IndirectDiffuse )
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
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Aw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
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
#endif`,Cw=`#ifdef USE_MORPHTARGETS
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
#endif`,Dw=`#ifdef USE_MORPHTARGETS
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
#endif`,Lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Rw=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
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
#endif`,Pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Gw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qw=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Kw=`float getShadowMask() {
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
}`,Jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$w=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
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
#endif`,lE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,pE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gE=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
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
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bE=`#include <common>
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
}`,SE=`#if DEPTH_PACKING == 3200
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
}`,ME=`#define DISTANCE
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
}`,wE=`#define DISTANCE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TE=`uniform float scale;
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
}`,CE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,LE=`uniform vec3 diffuse;
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
}`,RE=`#define LAMBERT
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
}`,zE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,UE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,PE=`#define NORMAL
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
}`,BE=`#define PHONG
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
}`,GE=`#define PHONG
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
}`,HE=`#define STANDARD
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
}`,FE=`#define STANDARD
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
}`,IE=`#define TOON
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
}`,VE=`#define TOON
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
}`,kE=`uniform float size;
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
}`,WE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qE=`uniform float rotation;
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
}`,jE=`uniform vec3 diffuse;
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
}`,ne={alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:yM,alphatest_pars_fragment:xM,aomap_fragment:bM,aomap_pars_fragment:SM,begin_vertex:MM,beginnormal_vertex:wM,bsdfs:EM,iridescence_fragment:AM,bumpmap_pars_fragment:TM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:DM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:RM,color_fragment:zM,color_pars_fragment:OM,color_pars_vertex:UM,color_vertex:NM,common:PM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:GM,displacementmap_pars_vertex:HM,displacementmap_vertex:FM,emissivemap_fragment:IM,emissivemap_pars_fragment:VM,encodings_fragment:kM,encodings_pars_fragment:WM,envmap_fragment:XM,envmap_common_pars_fragment:YM,envmap_pars_fragment:qM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:sw,envmap_vertex:ZM,fog_vertex:QM,fog_pars_vertex:KM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:tw,lightmap_fragment:ew,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:aw,lights_pars_begin:rw,lights_toon_fragment:ow,lights_toon_pars_fragment:lw,lights_phong_fragment:uw,lights_phong_pars_fragment:cw,lights_physical_fragment:fw,lights_physical_pars_fragment:hw,lights_fragment_begin:dw,lights_fragment_maps:pw,lights_fragment_end:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:_w,logdepthbuf_pars_vertex:vw,logdepthbuf_vertex:yw,map_fragment:xw,map_pars_fragment:bw,map_particle_fragment:Sw,map_particle_pars_fragment:Mw,metalnessmap_fragment:ww,metalnessmap_pars_fragment:Ew,morphcolor_vertex:Aw,morphnormal_vertex:Tw,morphtarget_pars_vertex:Cw,morphtarget_vertex:Dw,normal_fragment_begin:Lw,normal_fragment_maps:Rw,normal_pars_fragment:zw,normal_pars_vertex:Ow,normal_vertex:Uw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:Bw,clearcoat_pars_fragment:Gw,iridescence_pars_fragment:Hw,output_fragment:Fw,packing:Iw,premultiplied_alpha_fragment:Vw,project_vertex:kw,dithering_fragment:Ww,dithering_pars_fragment:Xw,roughnessmap_fragment:Yw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:jw,shadowmap_pars_vertex:Zw,shadowmap_vertex:Qw,shadowmask_pars_fragment:Kw,skinbase_vertex:Jw,skinning_pars_vertex:$w,skinning_vertex:tE,skinnormal_vertex:eE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:aE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:oE,uv_pars_fragment:lE,uv_pars_vertex:uE,uv_vertex:cE,uv2_pars_fragment:fE,uv2_pars_vertex:hE,uv2_vertex:dE,worldpos_vertex:pE,background_vert:mE,background_frag:gE,backgroundCube_vert:_E,backgroundCube_frag:vE,cube_vert:yE,cube_frag:xE,depth_vert:bE,depth_frag:SE,distanceRGBA_vert:ME,distanceRGBA_frag:wE,equirect_vert:EE,equirect_frag:AE,linedashed_vert:TE,linedashed_frag:CE,meshbasic_vert:DE,meshbasic_frag:LE,meshlambert_vert:RE,meshlambert_frag:zE,meshmatcap_vert:OE,meshmatcap_frag:UE,meshnormal_vert:NE,meshnormal_frag:PE,meshphong_vert:BE,meshphong_frag:GE,meshphysical_vert:HE,meshphysical_frag:FE,meshtoon_vert:IE,meshtoon_frag:VE,points_vert:kE,points_frag:WE,shadow_vert:XE,shadow_frag:YE,sprite_vert:qE,sprite_frag:jE},Mt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _i},uv2Transform:{value:new _i},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _i}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _i}}},kn={basic:{uniforms:zn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:zn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:zn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:zn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:zn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:zn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:zn([Mt.points,Mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:zn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:zn([Mt.common,Mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:zn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:zn([Mt.sprite,Mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new _i},t2D:{value:null}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:zn([Mt.common,Mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:zn([Mt.lights,Mt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};kn.physical={uniforms:zn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};function ZE(o,t,i,a,l,u,h){const c=new fe(0);let m=u===!0?0:1,p,g,_=null,y=0,M=null;function w(v,S){let A=!1,D=S.isScene===!0?S.background:null;D&&D.isTexture&&(D=(S.backgroundBlurriness>0?i:t).get(D));const z=o.xr,C=z.getSession&&z.getSession();C&&C.environmentBlendMode==="additive"&&(D=null),D===null?b(c,m):D&&D.isColor&&(b(D,1),A=!0),(o.autoClear||A)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===zc)?(g===void 0&&(g=new Vi(new Ll(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:ao(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,H,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,(_!==D||y!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,_=D,y=D.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Vi(new yp(2,2),new ir({name:"BackgroundMaterial",uniforms:ao(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:to,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=D,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||y!==D.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=D,y=D.version,M=o.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null))}function b(v,S){a.buffers.color.setClear(v.r,v.g,v.b,S,h)}return{getClearColor:function(){return c},setClearColor:function(v,S=1){c.set(v),m=S,b(c,m)},getClearAlpha:function(){return m},setClearAlpha:function(v){m=v,b(c,m)},render:w}}function QE(o,t,i,a){const l=o.getParameter(34921),u=a.isWebGL2?null:t.get("OES_vertex_array_object"),h=a.isWebGL2||u!==null,c={},m=v(null);let p=m,g=!1;function _(Z,ht,G,Q,K){let W=!1;if(h){const j=b(Q,G,ht);p!==j&&(p=j,M(p.object)),W=S(Z,Q,G,K),W&&A(Z,Q,G,K)}else{const j=ht.wireframe===!0;(p.geometry!==Q.id||p.program!==G.id||p.wireframe!==j)&&(p.geometry=Q.id,p.program=G.id,p.wireframe=j,W=!0)}K!==null&&i.update(K,34963),(W||g)&&(g=!1,T(Z,ht,G,Q),K!==null&&o.bindBuffer(34963,i.get(K).buffer))}function y(){return a.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(Z){return a.isWebGL2?o.bindVertexArray(Z):u.bindVertexArrayOES(Z)}function w(Z){return a.isWebGL2?o.deleteVertexArray(Z):u.deleteVertexArrayOES(Z)}function b(Z,ht,G){const Q=G.wireframe===!0;let K=c[Z.id];K===void 0&&(K={},c[Z.id]=K);let W=K[ht.id];W===void 0&&(W={},K[ht.id]=W);let j=W[Q];return j===void 0&&(j=v(y()),W[Q]=j),j}function v(Z){const ht=[],G=[],Q=[];for(let K=0;K<l;K++)ht[K]=0,G[K]=0,Q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ht,enabledAttributes:G,attributeDivisors:Q,object:Z,attributes:{},index:null}}function S(Z,ht,G,Q){const K=p.attributes,W=ht.attributes;let j=0;const R=G.getAttributes();for(const I in R)if(R[I].location>=0){const ut=K[I];let yt=W[I];if(yt===void 0&&(I==="instanceMatrix"&&Z.instanceMatrix&&(yt=Z.instanceMatrix),I==="instanceColor"&&Z.instanceColor&&(yt=Z.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;j++}return p.attributesNum!==j||p.index!==Q}function A(Z,ht,G,Q){const K={},W=ht.attributes;let j=0;const R=G.getAttributes();for(const I in R)if(R[I].location>=0){let ut=W[I];ut===void 0&&(I==="instanceMatrix"&&Z.instanceMatrix&&(ut=Z.instanceMatrix),I==="instanceColor"&&Z.instanceColor&&(ut=Z.instanceColor));const yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),K[I]=yt,j++}p.attributes=K,p.attributesNum=j,p.index=Q}function D(){const Z=p.newAttributes;for(let ht=0,G=Z.length;ht<G;ht++)Z[ht]=0}function z(Z){C(Z,0)}function C(Z,ht){const G=p.newAttributes,Q=p.enabledAttributes,K=p.attributeDivisors;G[Z]=1,Q[Z]===0&&(o.enableVertexAttribArray(Z),Q[Z]=1),K[Z]!==ht&&((a.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,ht),K[Z]=ht)}function N(){const Z=p.newAttributes,ht=p.enabledAttributes;for(let G=0,Q=ht.length;G<Q;G++)ht[G]!==Z[G]&&(o.disableVertexAttribArray(G),ht[G]=0)}function H(Z,ht,G,Q,K,W){a.isWebGL2===!0&&(G===5124||G===5125)?o.vertexAttribIPointer(Z,ht,G,K,W):o.vertexAttribPointer(Z,ht,G,Q,K,W)}function T(Z,ht,G,Q){if(a.isWebGL2===!1&&(Z.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;D();const K=Q.attributes,W=G.getAttributes(),j=ht.defaultAttributeValues;for(const R in W){const I=W[R];if(I.location>=0){let Y=K[R];if(Y===void 0&&(R==="instanceMatrix"&&Z.instanceMatrix&&(Y=Z.instanceMatrix),R==="instanceColor"&&Z.instanceColor&&(Y=Z.instanceColor)),Y!==void 0){const ut=Y.normalized,yt=Y.itemSize,at=i.get(Y);if(at===void 0)continue;const Rt=at.buffer,Ot=at.type,Tt=at.bytesPerElement;if(Y.isInterleavedBufferAttribute){const wt=Y.data,he=wt.stride,jt=Y.offset;if(wt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<I.locationSize;Ft++)C(I.location+Ft,wt.meshPerAttribute);Z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Ft=0;Ft<I.locationSize;Ft++)z(I.location+Ft);o.bindBuffer(34962,Rt);for(let Ft=0;Ft<I.locationSize;Ft++)H(I.location+Ft,yt/I.locationSize,Ot,ut,he*Tt,(jt+yt/I.locationSize*Ft)*Tt)}else{if(Y.isInstancedBufferAttribute){for(let wt=0;wt<I.locationSize;wt++)C(I.location+wt,Y.meshPerAttribute);Z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let wt=0;wt<I.locationSize;wt++)z(I.location+wt);o.bindBuffer(34962,Rt);for(let wt=0;wt<I.locationSize;wt++)H(I.location+wt,yt/I.locationSize,Ot,ut,yt*Tt,yt/I.locationSize*wt*Tt)}}else if(j!==void 0){const ut=j[R];if(ut!==void 0)switch(ut.length){case 2:o.vertexAttrib2fv(I.location,ut);break;case 3:o.vertexAttrib3fv(I.location,ut);break;case 4:o.vertexAttrib4fv(I.location,ut);break;default:o.vertexAttrib1fv(I.location,ut)}}}}N()}function B(){vt();for(const Z in c){const ht=c[Z];for(const G in ht){const Q=ht[G];for(const K in Q)w(Q[K].object),delete Q[K];delete ht[G]}delete c[Z]}}function tt(Z){if(c[Z.id]===void 0)return;const ht=c[Z.id];for(const G in ht){const Q=ht[G];for(const K in Q)w(Q[K].object),delete Q[K];delete ht[G]}delete c[Z.id]}function ot(Z){for(const ht in c){const G=c[ht];if(G[Z.id]===void 0)continue;const Q=G[Z.id];for(const K in Q)w(Q[K].object),delete Q[K];delete G[Z.id]}}function vt(){nt(),g=!0,p!==m&&(p=m,M(p.object))}function nt(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:_,reset:vt,resetDefaultState:nt,dispose:B,releaseStatesOfGeometry:tt,releaseStatesOfProgram:ot,initAttributes:D,enableAttribute:z,disableUnusedAttributes:N}}function KE(o,t,i,a){const l=a.isWebGL2;let u;function h(p){u=p}function c(p,g){o.drawArrays(u,p,g),i.update(g,u,1)}function m(p,g,_){if(_===0)return;let y,M;if(l)y=o,M="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[M](u,p,g,_),i.update(g,u,_)}this.setMode=h,this.render=c,this.renderInstances=m}function JE(o,t,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");a=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(H){if(H==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let c=i.precision!==void 0?i.precision:"highp";const m=u(c);m!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);const p=h||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,_=o.getParameter(34930),y=o.getParameter(35660),M=o.getParameter(3379),w=o.getParameter(34076),b=o.getParameter(34921),v=o.getParameter(36347),S=o.getParameter(36348),A=o.getParameter(36349),D=y>0,z=h||t.has("OES_texture_float"),C=D&&z,N=h?o.getParameter(36183):0;return{isWebGL2:h,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:c,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:w,maxAttributes:b,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:D,floatFragmentTextures:z,floatVertexTextures:C,maxSamples:N}}function $E(o){const t=this;let i=null,a=0,l=!1,u=!1;const h=new Er,c=new _i,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y,M){const w=_.length!==0||y||a!==0||l;return l=y,i=g(_,M,0),a=_.length,w},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1,p()},this.setState=function(_,y,M){const w=_.clippingPlanes,b=_.clipIntersection,v=_.clipShadows,S=o.get(_);if(!l||w===null||w.length===0||u&&!v)u?g(null):p();else{const A=u?0:a,D=A*4;let z=S.clippingState||null;m.value=z,z=g(w,y,D,M);for(let C=0;C!==D;++C)z[C]=i[C];S.clippingState=z,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,y,M,w){const b=_!==null?_.length:0;let v=null;if(b!==0){if(v=m.value,w!==!0||v===null){const S=M+b*4,A=y.matrixWorldInverse;c.getNormalMatrix(A),(v===null||v.length<S)&&(v=new Float32Array(S));for(let D=0,z=M;D!==b;++D,z+=4)h.copy(_[D]).applyMatrix4(A,c),h.normal.toArray(v,z),v[z+3]=h.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,v}}function t3(o){let t=new WeakMap;function i(h,c){return c===jd?h.mapping=eo:c===Zd&&(h.mapping=no),h}function a(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const c=h.mapping;if(c===jd||c===Zd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new dM(m.height/2);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const c=h.target;c.removeEventListener("dispose",l);const m=t.get(c);m!==void 0&&(t.delete(c),m.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}class e3 extends vp{constructor(t=-1,i=1,a=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=a-t,h=a+t,c=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,c-=g*this.view.offsetY,m=c-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,c,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ys=4,fv=[.125,.215,.35,.446,.526,.582],Tr=20,Dd=new e3,hv=new fe;let Ld=null;const Ar=(1+Math.sqrt(5))/2,Hs=1/Ar,dv=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Ar,Hs),new k(0,Ar,-Hs),new k(Hs,0,Ar),new k(-Hs,0,Ar),new k(Ar,Hs,0),new k(-Ar,Hs,0)];class pv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100){Ld=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,a,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld),t.scissorTest=!1,oc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===eo||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget();const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:wl,format:Li,encoding:Gr,depthBuffer:!1},l=mv(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(t,i,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n3(u)),this._blurMaterial=i3(u,t,i)}return l}_compileMaterial(t){const i=new Vi(this._lodPlanes[0],t);this._renderer.compile(i,Dd)}_sceneToCubeUV(t,i,a,l){const c=new ni(90,1,i,a),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(hv),g.toneMapping=va,g.autoClear=!1;const M=new gp({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1}),w=new Vi(new Ll,M);let b=!1;const v=t.background;v?v.isColor&&(M.color.copy(v),t.background=null,b=!0):(M.color.copy(hv),b=!0);for(let S=0;S<6;S++){const A=S%3;A===0?(c.up.set(0,m[S],0),c.lookAt(p[S],0,0)):A===1?(c.up.set(0,0,m[S]),c.lookAt(0,p[S],0)):(c.up.set(0,m[S],0),c.lookAt(0,0,p[S]));const D=this._cubeSize;oc(l,A*D,S>2?D:0,D,D),g.setRenderTarget(l),b&&g.render(w,c),g.render(t,c)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=v}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===eo||t.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Vi(this._lodPlanes[0],u),c=u.uniforms;c.envMap.value=t;const m=this._cubeSize;oc(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(h,Dd)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=dv[(l-1)%dv.length];this._blur(t,l-1,l,u,h)}i.autoClear=a}_blur(t,i,a,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,a,l,"latitudinal",u),this._halfBlur(h,t,a,a,l,"longitudinal",u)}_halfBlur(t,i,a,l,u,h,c){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Vi(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[a]-1,w=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Tr-1),b=u/w,v=isFinite(u)?1+Math.floor(g*b):Tr;v>Tr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Tr}`);const S=[];let A=0;for(let H=0;H<Tr;++H){const T=H/b,B=Math.exp(-T*T/2);S.push(B),H===0?A+=B:H<v&&(A+=2*B)}for(let H=0;H<S.length;H++)S[H]=S[H]/A;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=S,y.latitudinal.value=h==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:D}=this;y.dTheta.value=w,y.mipInt.value=D-a;const z=this._sizeLods[l],C=3*z*(l>D-Ys?l-D+Ys:0),N=4*(this._cubeSize-z);oc(i,C,N,3*z,2*z),m.setRenderTarget(i),m.render(_,Dd)}}function n3(o){const t=[],i=[],a=[];let l=o;const u=o-Ys+1+fv.length;for(let h=0;h<u;h++){const c=Math.pow(2,l);i.push(c);let m=1/c;h>o-Ys?m=fv[h-o+Ys-1]:h===0&&(m=0),a.push(m);const p=1/(c-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,w=6,b=3,v=2,S=1,A=new Float32Array(b*w*M),D=new Float32Array(v*w*M),z=new Float32Array(S*w*M);for(let N=0;N<M;N++){const H=N%3*2/3-1,T=N>2?0:-1,B=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];A.set(B,b*w*N),D.set(y,v*w*N);const tt=[N,N,N,N,N,N];z.set(tt,S*w*N)}const C=new ii;C.setAttribute("position",new Ri(A,b)),C.setAttribute("uv",new Ri(D,v)),C.setAttribute("faceIndex",new Ri(z,S)),t.push(C),l>Ys&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function mv(o,t,i){const a=new Hr(o,t,i);return a.texture.mapping=zc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function oc(o,t,i,a,l){o.viewport.set(t,i,a,l),o.scissor.set(t,i,a,l)}function i3(o,t,i){const a=new Float32Array(Tr),l=new k(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xp(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function gv(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function _v(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function a3(o){let t=new WeakMap,i=null;function a(c){if(c&&c.isTexture){const m=c.mapping,p=m===jd||m===Zd,g=m===eo||m===no;if(p||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=t.get(c);return i===null&&(i=new pv(o)),_=p?i.fromEquirectangular(c,_):i.fromCubemap(c,_),t.set(c,_),_.texture}else{if(t.has(c))return t.get(c).texture;{const _=c.image;if(p&&_&&_.height>0||g&&_&&l(_)){i===null&&(i=new pv(o));const y=p?i.fromEquirectangular(c):i.fromCubemap(c);return t.set(c,y),c.addEventListener("dispose",u),y.texture}else return null}}}return c}function l(c){let m=0;const p=6;for(let g=0;g<p;g++)c[g]!==void 0&&m++;return m===p}function u(c){const m=c.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function r3(o){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(a){a.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(a){const l=i(a);return l===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function s3(o,t,i,a){const l={},u=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const w in y.attributes)t.remove(y.attributes[w]);y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function c(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const w in y)t.update(y[w],34962);const M=_.morphAttributes;for(const w in M){const b=M[w];for(let v=0,S=b.length;v<S;v++)t.update(b[v],34962)}}function p(_){const y=[],M=_.index,w=_.attributes.position;let b=0;if(M!==null){const A=M.array;b=M.version;for(let D=0,z=A.length;D<z;D+=3){const C=A[D+0],N=A[D+1],H=A[D+2];y.push(C,N,N,H,H,C)}}else{const A=w.array;b=w.version;for(let D=0,z=A.length/3-1;D<z;D+=3){const C=D+0,N=D+1,H=D+2;y.push(C,N,N,H,H,C)}}const v=new(My(y)?Ry:Ly)(y,1);v.version=b;const S=u.get(_);S&&t.remove(S),u.set(_,v)}function g(_){const y=u.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:c,update:m,getWireframeAttribute:g}}function o3(o,t,i,a){const l=a.isWebGL2;let u;function h(y){u=y}let c,m;function p(y){c=y.type,m=y.bytesPerElement}function g(y,M){o.drawElements(u,M,c,y*m),i.update(M,u,1)}function _(y,M,w){if(w===0)return;let b,v;if(l)b=o,v="drawElementsInstanced";else if(b=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[v](u,M,c,y*m,w),i.update(M,u,w)}this.setMode=h,this.setIndex=p,this.render=g,this.renderInstances=_}function l3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,h,c){switch(i.calls++,h){case 4:i.triangles+=c*(u/3);break;case 1:i.lines+=c*(u/2);break;case 3:i.lines+=c*(u-1);break;case 2:i.lines+=c*u;break;case 0:i.points+=c*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function u3(o,t){return o[0]-t[0]}function c3(o,t){return Math.abs(t[1])-Math.abs(o[1])}function f3(o,t,i){const a={},l=new Float32Array(8),u=new WeakMap,h=new Ye,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function m(p,g,_,y){const M=p.morphTargetInfluences;if(t.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,v=b!==void 0?b.length:0;let S=u.get(g);if(S===void 0||S.count!==v){let G=function(){Z.dispose(),u.delete(g),g.removeEventListener("dispose",G)};var w=G;S!==void 0&&S.texture.dispose();const z=g.morphAttributes.position!==void 0,C=g.morphAttributes.normal!==void 0,N=g.morphAttributes.color!==void 0,H=g.morphAttributes.position||[],T=g.morphAttributes.normal||[],B=g.morphAttributes.color||[];let tt=0;z===!0&&(tt=1),C===!0&&(tt=2),N===!0&&(tt=3);let ot=g.attributes.position.count*tt,vt=1;ot>t.maxTextureSize&&(vt=Math.ceil(ot/t.maxTextureSize),ot=t.maxTextureSize);const nt=new Float32Array(ot*vt*4*v),Z=new Ty(nt,ot,vt,v);Z.type=Lr,Z.needsUpdate=!0;const ht=tt*4;for(let Q=0;Q<v;Q++){const K=H[Q],W=T[Q],j=B[Q],R=ot*vt*4*Q;for(let I=0;I<K.count;I++){const Y=I*ht;z===!0&&(h.fromBufferAttribute(K,I),nt[R+Y+0]=h.x,nt[R+Y+1]=h.y,nt[R+Y+2]=h.z,nt[R+Y+3]=0),C===!0&&(h.fromBufferAttribute(W,I),nt[R+Y+4]=h.x,nt[R+Y+5]=h.y,nt[R+Y+6]=h.z,nt[R+Y+7]=0),N===!0&&(h.fromBufferAttribute(j,I),nt[R+Y+8]=h.x,nt[R+Y+9]=h.y,nt[R+Y+10]=h.z,nt[R+Y+11]=j.itemSize===4?h.w:1)}}S={count:v,texture:Z,size:new qt(ot,vt)},u.set(g,S),g.addEventListener("dispose",G)}let A=0;for(let z=0;z<M.length;z++)A+=M[z];const D=g.morphTargetsRelative?1:1-A;y.getUniforms().setValue(o,"morphTargetBaseInfluence",D),y.getUniforms().setValue(o,"morphTargetInfluences",M),y.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const b=M===void 0?0:M.length;let v=a[g.id];if(v===void 0||v.length!==b){v=[];for(let C=0;C<b;C++)v[C]=[C,0];a[g.id]=v}for(let C=0;C<b;C++){const N=v[C];N[0]=C,N[1]=M[C]}v.sort(c3);for(let C=0;C<8;C++)C<b&&v[C][1]?(c[C][0]=v[C][0],c[C][1]=v[C][1]):(c[C][0]=Number.MAX_SAFE_INTEGER,c[C][1]=0);c.sort(u3);const S=g.morphAttributes.position,A=g.morphAttributes.normal;let D=0;for(let C=0;C<8;C++){const N=c[C],H=N[0],T=N[1];H!==Number.MAX_SAFE_INTEGER&&T?(S&&g.getAttribute("morphTarget"+C)!==S[H]&&g.setAttribute("morphTarget"+C,S[H]),A&&g.getAttribute("morphNormal"+C)!==A[H]&&g.setAttribute("morphNormal"+C,A[H]),l[C]=T,D+=T):(S&&g.hasAttribute("morphTarget"+C)===!0&&g.deleteAttribute("morphTarget"+C),A&&g.hasAttribute("morphNormal"+C)===!0&&g.deleteAttribute("morphNormal"+C),l[C]=0)}const z=g.morphTargetsRelative?1:1-D;y.getUniforms().setValue(o,"morphTargetBaseInfluence",z),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function h3(o,t,i,a){let l=new WeakMap;function u(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);return l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",c)===!1&&m.addEventListener("dispose",c),i.update(m.instanceMatrix,34962),m.instanceColor!==null&&i.update(m.instanceColor,34962)),_}function h(){l=new WeakMap}function c(m){const p=m.target;p.removeEventListener("dispose",c),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Ny=new yi,Py=new Ty,By=new J1,Gy=new zy,vv=[],yv=[],xv=new Float32Array(16),bv=new Float32Array(9),Sv=new Float32Array(4);function fo(o,t,i){const a=o[0];if(a<=0||a>0)return o;const l=t*i;let u=vv[l];if(u===void 0&&(u=new Float32Array(l),vv[l]=u),t!==0){a.toArray(u,0);for(let h=1,c=0;h!==t;++h)c+=i,o[h].toArray(u,c)}return u}function rn(o,t){if(o.length!==t.length)return!1;for(let i=0,a=o.length;i<a;i++)if(o[i]!==t[i])return!1;return!0}function sn(o,t){for(let i=0,a=t.length;i<a;i++)o[i]=t[i]}function Uc(o,t){let i=yv[t];i===void 0&&(i=new Int32Array(t),yv[t]=i);for(let a=0;a!==t;++a)i[a]=o.allocateTextureUnit();return i}function d3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function p3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rn(i,t))return;o.uniform2fv(this.addr,t),sn(i,t)}}function m3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(rn(i,t))return;o.uniform3fv(this.addr,t),sn(i,t)}}function g3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rn(i,t))return;o.uniform4fv(this.addr,t),sn(i,t)}}function _3(o,t){const i=this.cache,a=t.elements;if(a===void 0){if(rn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),sn(i,t)}else{if(rn(i,a))return;Sv.set(a),o.uniformMatrix2fv(this.addr,!1,Sv),sn(i,a)}}function v3(o,t){const i=this.cache,a=t.elements;if(a===void 0){if(rn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),sn(i,t)}else{if(rn(i,a))return;bv.set(a),o.uniformMatrix3fv(this.addr,!1,bv),sn(i,a)}}function y3(o,t){const i=this.cache,a=t.elements;if(a===void 0){if(rn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),sn(i,t)}else{if(rn(i,a))return;xv.set(a),o.uniformMatrix4fv(this.addr,!1,xv),sn(i,a)}}function x3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function b3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rn(i,t))return;o.uniform2iv(this.addr,t),sn(i,t)}}function S3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rn(i,t))return;o.uniform3iv(this.addr,t),sn(i,t)}}function M3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rn(i,t))return;o.uniform4iv(this.addr,t),sn(i,t)}}function w3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function E3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rn(i,t))return;o.uniform2uiv(this.addr,t),sn(i,t)}}function A3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rn(i,t))return;o.uniform3uiv(this.addr,t),sn(i,t)}}function T3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rn(i,t))return;o.uniform4uiv(this.addr,t),sn(i,t)}}function C3(o,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l),i.setTexture2D(t||Ny,l)}function D3(o,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||By,l)}function L3(o,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||Gy,l)}function R3(o,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(o.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||Py,l)}function z3(o){switch(o){case 5126:return d3;case 35664:return p3;case 35665:return m3;case 35666:return g3;case 35674:return _3;case 35675:return v3;case 35676:return y3;case 5124:case 35670:return x3;case 35667:case 35671:return b3;case 35668:case 35672:return S3;case 35669:case 35673:return M3;case 5125:return w3;case 36294:return E3;case 36295:return A3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return C3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return L3;case 36289:case 36303:case 36311:case 36292:return R3}}function O3(o,t){o.uniform1fv(this.addr,t)}function U3(o,t){const i=fo(t,this.size,2);o.uniform2fv(this.addr,i)}function N3(o,t){const i=fo(t,this.size,3);o.uniform3fv(this.addr,i)}function P3(o,t){const i=fo(t,this.size,4);o.uniform4fv(this.addr,i)}function B3(o,t){const i=fo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function G3(o,t){const i=fo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function H3(o,t){const i=fo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function F3(o,t){o.uniform1iv(this.addr,t)}function I3(o,t){o.uniform2iv(this.addr,t)}function V3(o,t){o.uniform3iv(this.addr,t)}function k3(o,t){o.uniform4iv(this.addr,t)}function W3(o,t){o.uniform1uiv(this.addr,t)}function X3(o,t){o.uniform2uiv(this.addr,t)}function Y3(o,t){o.uniform3uiv(this.addr,t)}function q3(o,t){o.uniform4uiv(this.addr,t)}function j3(o,t,i){const a=this.cache,l=t.length,u=Uc(i,l);rn(a,u)||(o.uniform1iv(this.addr,u),sn(a,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Ny,u[h])}function Z3(o,t,i){const a=this.cache,l=t.length,u=Uc(i,l);rn(a,u)||(o.uniform1iv(this.addr,u),sn(a,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||By,u[h])}function Q3(o,t,i){const a=this.cache,l=t.length,u=Uc(i,l);rn(a,u)||(o.uniform1iv(this.addr,u),sn(a,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Gy,u[h])}function K3(o,t,i){const a=this.cache,l=t.length,u=Uc(i,l);rn(a,u)||(o.uniform1iv(this.addr,u),sn(a,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Py,u[h])}function J3(o){switch(o){case 5126:return O3;case 35664:return U3;case 35665:return N3;case 35666:return P3;case 35674:return B3;case 35675:return G3;case 35676:return H3;case 5124:case 35670:return F3;case 35667:case 35671:return I3;case 35668:case 35672:return V3;case 35669:case 35673:return k3;case 5125:return W3;case 36294:return X3;case 36295:return Y3;case 36296:return q3;case 35678:case 36198:case 36298:case 36306:case 35682:return j3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return Q3;case 36289:case 36303:case 36311:case 36292:return K3}}class $3{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.setValue=z3(i.type)}}class tA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.size=i.size,this.setValue=J3(i.type)}}class eA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const c=l[u];c.setValue(t,i[c.id],a)}}}const Rd=/(\w+)(\])?(\[|\.)?/g;function Mv(o,t){o.seq.push(t),o.map[t.id]=t}function nA(o,t,i){const a=o.name,l=a.length;for(Rd.lastIndex=0;;){const u=Rd.exec(a),h=Rd.lastIndex;let c=u[1];const m=u[2]==="]",p=u[3];if(m&&(c=c|0),p===void 0||p==="["&&h+2===l){Mv(i,p===void 0?new $3(c,o,t):new tA(c,o,t));break}else{let _=i.map[c];_===void 0&&(_=new eA(c),Mv(i,_)),i=_}}}class xc{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,35718);for(let l=0;l<a;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);nA(u,h,this)}}setValue(t,i,a,l){const u=this.map[i];u!==void 0&&u.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let u=0,h=i.length;u!==h;++u){const c=i[u],m=a[c.id];m.needsUpdate!==!1&&c.setValue(t,m.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&a.push(h)}return a}}function wv(o,t,i){const a=o.createShader(t);return o.shaderSource(a,i),o.compileShader(a),a}let iA=0;function aA(o,t){const i=o.split(`
`),a=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const c=h+1;a.push(`${c===t?">":" "} ${c}: ${i[h]}`)}return a.join(`
`)}function rA(o){switch(o){case Gr:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Ev(o,t,i){const a=o.getShaderParameter(t,35713),l=o.getShaderInfoLog(t).trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+aA(o.getShaderSource(t),h)}else return l}function sA(o,t){const i=rA(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function oA(o,t){let i;switch(t){case c1:i="Linear";break;case f1:i="Reinhard";break;case h1:i="OptimizedCineon";break;case d1:i="ACESFilmic";break;case p1:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function lA(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gl).join(`
`)}function uA(o){const t=[];for(const i in o){const a=o[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function cA(o,t){const i={},a=o.getProgramParameter(t,35721);for(let l=0;l<a;l++){const u=o.getActiveAttrib(t,l),h=u.name;let c=1;u.type===35674&&(c=2),u.type===35675&&(c=3),u.type===35676&&(c=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:c}}return i}function gl(o){return o!==""}function Av(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(o){return o.replace(fA,hA)}function hA(o,t){const i=ne[t];if(i===void 0)throw new Error("Can not resolve #include <"+t+">");return ep(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(o){return o.replace(dA,pA)}function pA(o,t,i,a){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Dv(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===_y?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===VS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ml&&(t="SHADOWMAP_TYPE_VSM"),t}function gA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case no:t="ENVMAP_TYPE_CUBE";break;case zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _A(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function vA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xy:t="ENVMAP_BLENDING_MULTIPLY";break;case l1:t="ENVMAP_BLENDING_MIX";break;case u1:t="ENVMAP_BLENDING_ADD";break}return t}function yA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function xA(o,t,i,a){const l=o.getContext(),u=i.defines;let h=i.vertexShader,c=i.fragmentShader;const m=mA(i),p=gA(i),g=_A(i),_=vA(i),y=yA(i),M=i.isWebGL2?"":lA(i),w=uA(u),b=l.createProgram();let v,S,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=[w].filter(gl).join(`
`),v.length>0&&(v+=`
`),S=[M,w].filter(gl).join(`
`),S.length>0&&(S+=`
`)):(v=[Dv(i),"#define SHADER_NAME "+i.shaderName,w,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),S=[M,Dv(i),"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==va?"#define TONE_MAPPING":"",i.toneMapping!==va?ne.tonemapping_pars_fragment:"",i.toneMapping!==va?oA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ne.encodings_pars_fragment,sA("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gl).join(`
`)),h=ep(h),h=Av(h,i),h=Tv(h,i),c=ep(c),c=Av(c,i),c=Tv(c,i),h=Cv(h),c=Cv(c),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,S=["#define varying in",i.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=A+v+h,z=A+S+c,C=wv(l,35633,D),N=wv(l,35632,z);if(l.attachShader(b,C),l.attachShader(b,N),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b),o.debug.checkShaderErrors){const B=l.getProgramInfoLog(b).trim(),tt=l.getShaderInfoLog(C).trim(),ot=l.getShaderInfoLog(N).trim();let vt=!0,nt=!0;if(l.getProgramParameter(b,35714)===!1){vt=!1;const Z=Ev(l,C,"vertex"),ht=Ev(l,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,35715)+`

Program Info Log: `+B+`
`+Z+`
`+ht)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(tt===""||ot==="")&&(nt=!1);nt&&(this.diagnostics={runnable:vt,programLog:B,vertexShader:{log:tt,prefix:v},fragmentShader:{log:ot,prefix:S}})}l.deleteShader(C),l.deleteShader(N);let H;this.getUniforms=function(){return H===void 0&&(H=new xc(l,b)),H};let T;return this.getAttributes=function(){return T===void 0&&(T=cA(l,b)),T},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.name=i.shaderName,this.id=iA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=N,this}let bA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(a),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new MA(t),i.set(t,a)),a}}class MA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function wA(o,t,i,a,l,u,h){const c=new Dy,m=new SA,p=[],g=l.isWebGL2,_=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T,B,tt,ot,vt){const nt=ot.fog,Z=vt.geometry,ht=T.isMeshStandardMaterial?ot.environment:null,G=(T.isMeshStandardMaterial?i:t).get(T.envMap||ht),Q=G&&G.mapping===zc?G.image.height:null,K=w[T.type];T.precision!==null&&(M=l.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const W=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,j=W!==void 0?W.length:0;let R=0;Z.morphAttributes.position!==void 0&&(R=1),Z.morphAttributes.normal!==void 0&&(R=2),Z.morphAttributes.color!==void 0&&(R=3);let I,Y,ut,yt;if(K){const he=kn[K];I=he.vertexShader,Y=he.fragmentShader}else I=T.vertexShader,Y=T.fragmentShader,m.update(T),ut=m.getVertexShaderID(T),yt=m.getFragmentShaderID(T);const at=o.getRenderTarget(),Rt=T.alphaTest>0,Ot=T.clearcoat>0,Tt=T.iridescence>0;return{isWebGL2:g,shaderID:K,shaderName:T.type,vertexShader:I,fragmentShader:Y,defines:T.defines,customVertexShaderID:ut,customFragmentShaderID:yt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,instancing:vt.isInstancedMesh===!0,instancingColor:vt.isInstancedMesh===!0&&vt.instanceColor!==null,supportsVertexTextures:y,outputEncoding:at===null?o.outputEncoding:at.isXRRenderTarget===!0?at.texture.encoding:Gr,map:!!T.map,matcap:!!T.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:Q,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===U1,tangentSpaceNormalMap:T.normalMapType===O1,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===Ve,clearcoat:Ot,clearcoatMap:Ot&&!!T.clearcoatMap,clearcoatRoughnessMap:Ot&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:Ot&&!!T.clearcoatNormalMap,iridescence:Tt,iridescenceMap:Tt&&!!T.iridescenceMap,iridescenceThicknessMap:Tt&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===Zs,alphaMap:!!T.alphaMap,alphaTest:Rt,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!Z.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.iridescenceMap||T.iridescenceThicknessMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularColorMap||T.sheen>0||T.sheenColorMap||T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!nt,useFog:T.fog===!0,fogExp2:nt&&nt.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:_,skinning:vt.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:R,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&tt.length>0,shadowMapType:o.shadowMap.type,toneMapping:T.toneMapped?o.toneMapping:va,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===tr,flipSided:T.side===vi,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:g||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||a.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function v(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.customVertexShaderID),B.push(T.customFragmentShaderID)),T.defines!==void 0)for(const tt in T.defines)B.push(tt),B.push(T.defines[tt]);return T.isRawShaderMaterial===!1&&(S(B,T),A(B,T),B.push(o.outputEncoding)),B.push(T.customProgramCacheKey),B.join()}function S(T,B){T.push(B.precision),T.push(B.outputEncoding),T.push(B.envMapMode),T.push(B.envMapCubeUVHeight),T.push(B.combine),T.push(B.vertexUvs),T.push(B.fogExp2),T.push(B.sizeAttenuation),T.push(B.morphTargetsCount),T.push(B.morphAttributeCount),T.push(B.numDirLights),T.push(B.numPointLights),T.push(B.numSpotLights),T.push(B.numSpotLightMaps),T.push(B.numHemiLights),T.push(B.numRectAreaLights),T.push(B.numDirLightShadows),T.push(B.numPointLightShadows),T.push(B.numSpotLightShadows),T.push(B.numSpotLightShadowsWithMaps),T.push(B.shadowMapType),T.push(B.toneMapping),T.push(B.numClippingPlanes),T.push(B.numClipIntersection),T.push(B.depthPacking)}function A(T,B){c.disableAll(),B.isWebGL2&&c.enable(0),B.supportsVertexTextures&&c.enable(1),B.instancing&&c.enable(2),B.instancingColor&&c.enable(3),B.map&&c.enable(4),B.matcap&&c.enable(5),B.envMap&&c.enable(6),B.lightMap&&c.enable(7),B.aoMap&&c.enable(8),B.emissiveMap&&c.enable(9),B.bumpMap&&c.enable(10),B.normalMap&&c.enable(11),B.objectSpaceNormalMap&&c.enable(12),B.tangentSpaceNormalMap&&c.enable(13),B.clearcoat&&c.enable(14),B.clearcoatMap&&c.enable(15),B.clearcoatRoughnessMap&&c.enable(16),B.clearcoatNormalMap&&c.enable(17),B.iridescence&&c.enable(18),B.iridescenceMap&&c.enable(19),B.iridescenceThicknessMap&&c.enable(20),B.displacementMap&&c.enable(21),B.specularMap&&c.enable(22),B.roughnessMap&&c.enable(23),B.metalnessMap&&c.enable(24),B.gradientMap&&c.enable(25),B.alphaMap&&c.enable(26),B.alphaTest&&c.enable(27),B.vertexColors&&c.enable(28),B.vertexAlphas&&c.enable(29),B.vertexUvs&&c.enable(30),B.vertexTangents&&c.enable(31),B.uvsVertexOnly&&c.enable(32),T.push(c.mask),c.disableAll(),B.fog&&c.enable(0),B.useFog&&c.enable(1),B.flatShading&&c.enable(2),B.logarithmicDepthBuffer&&c.enable(3),B.skinning&&c.enable(4),B.morphTargets&&c.enable(5),B.morphNormals&&c.enable(6),B.morphColors&&c.enable(7),B.premultipliedAlpha&&c.enable(8),B.shadowMapEnabled&&c.enable(9),B.physicallyCorrectLights&&c.enable(10),B.doubleSided&&c.enable(11),B.flipSided&&c.enable(12),B.useDepthPacking&&c.enable(13),B.dithering&&c.enable(14),B.specularIntensityMap&&c.enable(15),B.specularColorMap&&c.enable(16),B.transmission&&c.enable(17),B.transmissionMap&&c.enable(18),B.thicknessMap&&c.enable(19),B.sheen&&c.enable(20),B.sheenColorMap&&c.enable(21),B.sheenRoughnessMap&&c.enable(22),B.decodeVideoTexture&&c.enable(23),B.opaque&&c.enable(24),T.push(c.mask)}function D(T){const B=w[T.type];let tt;if(B){const ot=kn[B];tt=_p.clone(ot.uniforms)}else tt=T.uniforms;return tt}function z(T,B){let tt;for(let ot=0,vt=p.length;ot<vt;ot++){const nt=p[ot];if(nt.cacheKey===B){tt=nt,++tt.usedTimes;break}}return tt===void 0&&(tt=new xA(o,B,T,u),p.push(tt)),tt}function C(T){if(--T.usedTimes===0){const B=p.indexOf(T);p[B]=p[p.length-1],p.pop(),T.destroy()}}function N(T){m.remove(T)}function H(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:D,acquireProgram:z,releaseProgram:C,releaseShaderCache:N,programs:p,dispose:H}}function EA(){let o=new WeakMap;function t(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function a(u,h,c){o.get(u)[h]=c}function l(){o=new WeakMap}return{get:t,remove:i,update:a,dispose:l}}function AA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Lv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Rv(){const o=[];let t=0;const i=[],a=[],l=[];function u(){t=0,i.length=0,a.length=0,l.length=0}function h(_,y,M,w,b,v){let S=o[t];return S===void 0?(S={id:_.id,object:_,geometry:y,material:M,groupOrder:w,renderOrder:_.renderOrder,z:b,group:v},o[t]=S):(S.id=_.id,S.object=_,S.geometry=y,S.material=M,S.groupOrder=w,S.renderOrder=_.renderOrder,S.z=b,S.group=v),t++,S}function c(_,y,M,w,b,v){const S=h(_,y,M,w,b,v);M.transmission>0?a.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(_,y,M,w,b,v){const S=h(_,y,M,w,b,v);M.transmission>0?a.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,y){i.length>1&&i.sort(_||AA),a.length>1&&a.sort(y||Lv),l.length>1&&l.sort(y||Lv)}function g(){for(let _=t,y=o.length;_<y;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:a,transparent:l,init:u,push:c,unshift:m,finish:g,sort:p}}function TA(){let o=new WeakMap;function t(a,l){const u=o.get(a);let h;return u===void 0?(h=new Rv,o.set(a,[h])):l>=u.length?(h=new Rv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function CA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new fe};break;case"SpotLight":i={position:new k,direction:new k,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new k,halfWidth:new k,halfHeight:new k};break}return o[t.id]=i,i}}}function DA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let LA=0;function RA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function zA(o,t){const i=new CA,a=DA(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)l.probe.push(new k);const u=new k,h=new tn,c=new tn;function m(g,_){let y=0,M=0,w=0;for(let ot=0;ot<9;ot++)l.probe[ot].set(0,0,0);let b=0,v=0,S=0,A=0,D=0,z=0,C=0,N=0,H=0,T=0;g.sort(RA);const B=_!==!0?Math.PI:1;for(let ot=0,vt=g.length;ot<vt;ot++){const nt=g[ot],Z=nt.color,ht=nt.intensity,G=nt.distance,Q=nt.shadow&&nt.shadow.map?nt.shadow.map.texture:null;if(nt.isAmbientLight)y+=Z.r*ht*B,M+=Z.g*ht*B,w+=Z.b*ht*B;else if(nt.isLightProbe)for(let K=0;K<9;K++)l.probe[K].addScaledVector(nt.sh.coefficients[K],ht);else if(nt.isDirectionalLight){const K=i.get(nt);if(K.color.copy(nt.color).multiplyScalar(nt.intensity*B),nt.castShadow){const W=nt.shadow,j=a.get(nt);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,l.directionalShadow[b]=j,l.directionalShadowMap[b]=Q,l.directionalShadowMatrix[b]=nt.shadow.matrix,z++}l.directional[b]=K,b++}else if(nt.isSpotLight){const K=i.get(nt);K.position.setFromMatrixPosition(nt.matrixWorld),K.color.copy(Z).multiplyScalar(ht*B),K.distance=G,K.coneCos=Math.cos(nt.angle),K.penumbraCos=Math.cos(nt.angle*(1-nt.penumbra)),K.decay=nt.decay,l.spot[S]=K;const W=nt.shadow;if(nt.map&&(l.spotLightMap[H]=nt.map,H++,W.updateMatrices(nt),nt.castShadow&&T++),l.spotLightMatrix[S]=W.matrix,nt.castShadow){const j=a.get(nt);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,l.spotShadow[S]=j,l.spotShadowMap[S]=Q,N++}S++}else if(nt.isRectAreaLight){const K=i.get(nt);K.color.copy(Z).multiplyScalar(ht),K.halfWidth.set(nt.width*.5,0,0),K.halfHeight.set(0,nt.height*.5,0),l.rectArea[A]=K,A++}else if(nt.isPointLight){const K=i.get(nt);if(K.color.copy(nt.color).multiplyScalar(nt.intensity*B),K.distance=nt.distance,K.decay=nt.decay,nt.castShadow){const W=nt.shadow,j=a.get(nt);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,l.pointShadow[v]=j,l.pointShadowMap[v]=Q,l.pointShadowMatrix[v]=nt.shadow.matrix,C++}l.point[v]=K,v++}else if(nt.isHemisphereLight){const K=i.get(nt);K.skyColor.copy(nt.color).multiplyScalar(ht*B),K.groundColor.copy(nt.groundColor).multiplyScalar(ht*B),l.hemi[D]=K,D++}}A>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Mt.LTC_FLOAT_1,l.rectAreaLTC2=Mt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Mt.LTC_HALF_1,l.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=w;const tt=l.hash;(tt.directionalLength!==b||tt.pointLength!==v||tt.spotLength!==S||tt.rectAreaLength!==A||tt.hemiLength!==D||tt.numDirectionalShadows!==z||tt.numPointShadows!==C||tt.numSpotShadows!==N||tt.numSpotMaps!==H)&&(l.directional.length=b,l.spot.length=S,l.rectArea.length=A,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=z,l.directionalShadowMap.length=z,l.pointShadow.length=C,l.pointShadowMap.length=C,l.spotShadow.length=N,l.spotShadowMap.length=N,l.directionalShadowMatrix.length=z,l.pointShadowMatrix.length=C,l.spotLightMatrix.length=N+H-T,l.spotLightMap.length=H,l.numSpotLightShadowsWithMaps=T,tt.directionalLength=b,tt.pointLength=v,tt.spotLength=S,tt.rectAreaLength=A,tt.hemiLength=D,tt.numDirectionalShadows=z,tt.numPointShadows=C,tt.numSpotShadows=N,tt.numSpotMaps=H,l.version=LA++)}function p(g,_){let y=0,M=0,w=0,b=0,v=0;const S=_.matrixWorldInverse;for(let A=0,D=g.length;A<D;A++){const z=g[A];if(z.isDirectionalLight){const C=l.directional[y];C.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(u),C.direction.transformDirection(S),y++}else if(z.isSpotLight){const C=l.spot[w];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(u),C.direction.transformDirection(S),w++}else if(z.isRectAreaLight){const C=l.rectArea[b];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(S),c.identity(),h.copy(z.matrixWorld),h.premultiply(S),c.extractRotation(h),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),b++}else if(z.isPointLight){const C=l.point[M];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(S),M++}else if(z.isHemisphereLight){const C=l.hemi[v];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(S),v++}}}return{setup:m,setupView:p,state:l}}function zv(o,t){const i=new zA(o,t),a=[],l=[];function u(){a.length=0,l.length=0}function h(_){a.push(_)}function c(_){l.push(_)}function m(_){i.setup(a,_)}function p(_){i.setupView(a,_)}return{init:u,state:{lightsArray:a,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:h,pushShadow:c}}function OA(o,t){let i=new WeakMap;function a(u,h=0){const c=i.get(u);let m;return c===void 0?(m=new zv(o,t),i.set(u,[m])):h>=c.length?(m=new zv(o,t),c.push(m)):m=c[h],m}function l(){i=new WeakMap}return{get:a,dispose:l}}class UA extends co{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NA extends co{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
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
}`;function GA(o,t,i){let a=new Oy;const l=new qt,u=new qt,h=new Ye,c=new UA({depthPacking:z1}),m=new NA,p={},g=i.maxTextureSize,_={0:vi,1:to,2:tr},y=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:PA,fragmentShader:BA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const w=new ii;w.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Vi(w,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_y,this.render=function(z,C,N){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||z.length===0)return;const H=o.getRenderTarget(),T=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(nr),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);for(let ot=0,vt=z.length;ot<vt;ot++){const nt=z[ot],Z=nt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const ht=Z.getFrameExtents();if(l.multiply(ht),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ht.x),l.x=u.x*ht.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ht.y),l.y=u.y*ht.y,Z.mapSize.y=u.y)),Z.map===null){const Q=this.type!==ml?{minFilter:Vn,magFilter:Vn}:{};Z.map=new Hr(l.x,l.y,Q),Z.map.texture.name=nt.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const G=Z.getViewportCount();for(let Q=0;Q<G;Q++){const K=Z.getViewport(Q);h.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),tt.viewport(h),Z.updateMatrices(nt,Q),a=Z.getFrustum(),D(C,N,Z.camera,nt,this.type)}Z.isPointLightShadow!==!0&&this.type===ml&&S(Z,N),Z.needsUpdate=!1}v.needsUpdate=!1,o.setRenderTarget(H,T,B)};function S(z,C){const N=t.update(b);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Hr(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(C,null,N,y,b,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(C,null,N,M,b,null)}function A(z,C,N,H,T,B){let tt=null;const ot=N.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(ot!==void 0?tt=ot:tt=N.isPointLight===!0?m:c,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const vt=tt.uuid,nt=C.uuid;let Z=p[vt];Z===void 0&&(Z={},p[vt]=Z);let ht=Z[nt];ht===void 0&&(ht=tt.clone(),Z[nt]=ht),tt=ht}return tt.visible=C.visible,tt.wireframe=C.wireframe,B===ml?tt.side=C.shadowSide!==null?C.shadowSide:C.side:tt.side=C.shadowSide!==null?C.shadowSide:_[C.side],tt.alphaMap=C.alphaMap,tt.alphaTest=C.alphaTest,tt.clipShadows=C.clipShadows,tt.clippingPlanes=C.clippingPlanes,tt.clipIntersection=C.clipIntersection,tt.displacementMap=C.displacementMap,tt.displacementScale=C.displacementScale,tt.displacementBias=C.displacementBias,tt.wireframeLinewidth=C.wireframeLinewidth,tt.linewidth=C.linewidth,N.isPointLight===!0&&tt.isMeshDistanceMaterial===!0&&(tt.referencePosition.setFromMatrixPosition(N.matrixWorld),tt.nearDistance=H,tt.farDistance=T),tt}function D(z,C,N,H,T){if(z.visible===!1)return;if(z.layers.test(C.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&T===ml)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,z.matrixWorld);const ot=t.update(z),vt=z.material;if(Array.isArray(vt)){const nt=ot.groups;for(let Z=0,ht=nt.length;Z<ht;Z++){const G=nt[Z],Q=vt[G.materialIndex];if(Q&&Q.visible){const K=A(z,Q,H,N.near,N.far,T);o.renderBufferDirect(N,null,ot,K,z,G)}}}else if(vt.visible){const nt=A(z,vt,H,N.near,N.far,T);o.renderBufferDirect(N,null,ot,nt,z,null)}}const tt=z.children;for(let ot=0,vt=tt.length;ot<vt;ot++)D(tt[ot],C,N,H,T)}}function HA(o,t,i){const a=i.isWebGL2;function l(){let X=!1;const pt=new Ye;let xt=null;const Ct=new Ye(0,0,0,0);return{setMask:function(Bt){xt!==Bt&&!X&&(o.colorMask(Bt,Bt,Bt,Bt),xt=Bt)},setLocked:function(Bt){X=Bt},setClear:function(Bt,le,Oe,on,Oi){Oi===!0&&(Bt*=on,le*=on,Oe*=on),pt.set(Bt,le,Oe,on),Ct.equals(pt)===!1&&(o.clearColor(Bt,le,Oe,on),Ct.copy(pt))},reset:function(){X=!1,xt=null,Ct.set(-1,0,0,0)}}}function u(){let X=!1,pt=null,xt=null,Ct=null;return{setTest:function(Bt){Bt?Rt(2929):Ot(2929)},setMask:function(Bt){pt!==Bt&&!X&&(o.depthMask(Bt),pt=Bt)},setFunc:function(Bt){if(xt!==Bt){switch(Bt){case e1:o.depthFunc(512);break;case n1:o.depthFunc(519);break;case i1:o.depthFunc(513);break;case qd:o.depthFunc(515);break;case a1:o.depthFunc(514);break;case r1:o.depthFunc(518);break;case s1:o.depthFunc(516);break;case o1:o.depthFunc(517);break;default:o.depthFunc(515)}xt=Bt}},setLocked:function(Bt){X=Bt},setClear:function(Bt){Ct!==Bt&&(o.clearDepth(Bt),Ct=Bt)},reset:function(){X=!1,pt=null,xt=null,Ct=null}}}function h(){let X=!1,pt=null,xt=null,Ct=null,Bt=null,le=null,Oe=null,on=null,Oi=null;return{setTest:function(Me){X||(Me?Rt(2960):Ot(2960))},setMask:function(Me){pt!==Me&&!X&&(o.stencilMask(Me),pt=Me)},setFunc:function(Me,Cn,On){(xt!==Me||Ct!==Cn||Bt!==On)&&(o.stencilFunc(Me,Cn,On),xt=Me,Ct=Cn,Bt=On)},setOp:function(Me,Cn,On){(le!==Me||Oe!==Cn||on!==On)&&(o.stencilOp(Me,Cn,On),le=Me,Oe=Cn,on=On)},setLocked:function(Me){X=Me},setClear:function(Me){Oi!==Me&&(o.clearStencil(Me),Oi=Me)},reset:function(){X=!1,pt=null,xt=null,Ct=null,Bt=null,le=null,Oe=null,on=null,Oi=null}}}const c=new l,m=new u,p=new h,g=new WeakMap,_=new WeakMap;let y={},M={},w=new WeakMap,b=[],v=null,S=!1,A=null,D=null,z=null,C=null,N=null,H=null,T=null,B=!1,tt=null,ot=null,vt=null,nt=null,Z=null;const ht=o.getParameter(35661);let G=!1,Q=0;const K=o.getParameter(7938);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=Q>=2);let W=null,j={};const R=o.getParameter(3088),I=o.getParameter(2978),Y=new Ye().fromArray(R),ut=new Ye().fromArray(I);function yt(X,pt,xt){const Ct=new Uint8Array(4),Bt=o.createTexture();o.bindTexture(X,Bt),o.texParameteri(X,10241,9728),o.texParameteri(X,10240,9728);for(let le=0;le<xt;le++)o.texImage2D(pt+le,0,6408,1,1,0,6408,5121,Ct);return Bt}const at={};at[3553]=yt(3553,3553,1),at[34067]=yt(34067,34069,6),c.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Rt(2929),m.setFunc(qd),Ne(!1),Tn(w_),Rt(2884),Se(nr);function Rt(X){y[X]!==!0&&(o.enable(X),y[X]=!0)}function Ot(X){y[X]!==!1&&(o.disable(X),y[X]=!1)}function Tt(X,pt){return M[X]!==pt?(o.bindFramebuffer(X,pt),M[X]=pt,a&&(X===36009&&(M[36160]=pt),X===36160&&(M[36009]=pt)),!0):!1}function wt(X,pt){let xt=b,Ct=!1;if(X)if(xt=w.get(pt),xt===void 0&&(xt=[],w.set(pt,xt)),X.isWebGLMultipleRenderTargets){const Bt=X.texture;if(xt.length!==Bt.length||xt[0]!==36064){for(let le=0,Oe=Bt.length;le<Oe;le++)xt[le]=36064+le;xt.length=Bt.length,Ct=!0}}else xt[0]!==36064&&(xt[0]=36064,Ct=!0);else xt[0]!==1029&&(xt[0]=1029,Ct=!0);Ct&&(i.isWebGL2?o.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function he(X){return v!==X?(o.useProgram(X),v=X,!0):!1}const jt={[Xs]:32774,[WS]:32778,[XS]:32779};if(a)jt[C_]=32775,jt[D_]=32776;else{const X=t.get("EXT_blend_minmax");X!==null&&(jt[C_]=X.MIN_EXT,jt[D_]=X.MAX_EXT)}const Ft={[YS]:0,[qS]:1,[jS]:768,[vy]:770,[t1]:776,[JS]:774,[QS]:772,[ZS]:769,[yy]:771,[$S]:775,[KS]:773};function Se(X,pt,xt,Ct,Bt,le,Oe,on){if(X===nr){S===!0&&(Ot(3042),S=!1);return}if(S===!1&&(Rt(3042),S=!0),X!==kS){if(X!==A||on!==B){if((D!==Xs||N!==Xs)&&(o.blendEquation(32774),D=Xs,N=Xs),on)switch(X){case Zs:o.blendFuncSeparate(1,771,1,771);break;case E_:o.blendFunc(1,1);break;case A_:o.blendFuncSeparate(0,769,0,1);break;case T_:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Zs:o.blendFuncSeparate(770,771,1,771);break;case E_:o.blendFunc(770,1);break;case A_:o.blendFuncSeparate(0,769,0,1);break;case T_:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,C=null,H=null,T=null,A=X,B=on}return}Bt=Bt||pt,le=le||xt,Oe=Oe||Ct,(pt!==D||Bt!==N)&&(o.blendEquationSeparate(jt[pt],jt[Bt]),D=pt,N=Bt),(xt!==z||Ct!==C||le!==H||Oe!==T)&&(o.blendFuncSeparate(Ft[xt],Ft[Ct],Ft[le],Ft[Oe]),z=xt,C=Ct,H=le,T=Oe),A=X,B=null}function Be(X,pt){X.side===tr?Ot(2884):Rt(2884);let xt=X.side===vi;pt&&(xt=!xt),Ne(xt),X.blending===Zs&&X.transparent===!1?Se(nr):Se(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.premultipliedAlpha),m.setFunc(X.depthFunc),m.setTest(X.depthTest),m.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ct=X.stencilWrite;p.setTest(Ct),Ct&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),de(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Rt(32926):Ot(32926)}function Ne(X){tt!==X&&(X?o.frontFace(2304):o.frontFace(2305),tt=X)}function Tn(X){X!==FS?(Rt(2884),X!==ot&&(X===w_?o.cullFace(1029):X===IS?o.cullFace(1028):o.cullFace(1032))):Ot(2884),ot=X}function Ge(X){X!==vt&&(G&&o.lineWidth(X),vt=X)}function de(X,pt,xt){X?(Rt(32823),(nt!==pt||Z!==xt)&&(o.polygonOffset(pt,xt),nt=pt,Z=xt)):Ot(32823)}function bn(X){X?Rt(3089):Ot(3089)}function Sn(X){X===void 0&&(X=33984+ht-1),W!==X&&(o.activeTexture(X),W=X)}function U(X,pt,xt){xt===void 0&&(W===null?xt=33984+ht-1:xt=W);let Ct=j[xt];Ct===void 0&&(Ct={type:void 0,texture:void 0},j[xt]=Ct),(Ct.type!==X||Ct.texture!==pt)&&(W!==xt&&(o.activeTexture(xt),W=xt),o.bindTexture(X,pt||at[X]),Ct.type=X,Ct.texture=pt)}function L(){const X=j[W];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ct(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function F(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){Y.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Y.copy(X))}function Ut(X){ut.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),ut.copy(X))}function Wt(X,pt){let xt=_.get(pt);xt===void 0&&(xt=new WeakMap,_.set(pt,xt));let Ct=xt.get(X);Ct===void 0&&(Ct=o.getUniformBlockIndex(pt,X.name),xt.set(X,Ct))}function re(X,pt){const Ct=_.get(pt).get(X);g.get(X)!==Ct&&(o.uniformBlockBinding(pt,Ct,X.__bindingPointIndex),g.set(X,Ct))}function ye(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),a===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},W=null,j={},M={},w=new WeakMap,b=[],v=null,S=!1,A=null,D=null,z=null,C=null,N=null,H=null,T=null,B=!1,tt=null,ot=null,vt=null,nt=null,Z=null,Y.set(0,0,o.canvas.width,o.canvas.height),ut.set(0,0,o.canvas.width,o.canvas.height),c.reset(),m.reset(),p.reset()}return{buffers:{color:c,depth:m,stencil:p},enable:Rt,disable:Ot,bindFramebuffer:Tt,drawBuffers:wt,useProgram:he,setBlending:Se,setMaterial:Be,setFlipSided:Ne,setCullFace:Tn,setLineWidth:Ge,setPolygonOffset:de,setScissorTest:bn,activeTexture:Sn,bindTexture:U,unbindTexture:L,compressedTexImage2D:ct,compressedTexImage3D:bt,texImage2D:zt,texImage3D:Et,updateUBOMapping:Wt,uniformBlockBinding:re,texStorage2D:$,texStorage3D:Dt,texSubImage2D:St,texSubImage3D:At,compressedTexSubImage2D:It,compressedTexSubImage3D:F,scissor:Lt,viewport:Ut,reset:ye}}function FA(o,t,i,a,l,u,h){const c=l.isWebGL2,m=l.maxTextures,p=l.maxCubemapSize,g=l.maxTextureSize,_=l.maxSamples,y=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,M=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),w=new WeakMap;let b;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,L){return S?new OffscreenCanvas(U,L):El("canvas")}function D(U,L,ct,bt){let St=1;if((U.width>bt||U.height>bt)&&(St=bt/Math.max(U.width,U.height)),St<1||L===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const At=L?Dc:Math.floor,It=At(St*U.width),F=At(St*U.height);b===void 0&&(b=A(It,F));const $=ct?A(It,F):b;return $.width=It,$.height=F,$.getContext("2d").drawImage(U,0,0,It,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+It+"x"+F+")."),$}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function z(U){return tp(U.width)&&tp(U.height)}function C(U){return c?!1:U.wrapS!==Di||U.wrapT!==Di||U.minFilter!==Vn&&U.minFilter!==gi}function N(U,L){return U.generateMipmaps&&L&&U.minFilter!==Vn&&U.minFilter!==gi}function H(U){o.generateMipmap(U)}function T(U,L,ct,bt,St=!1){if(c===!1)return L;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let At=L;return L===6403&&(ct===5126&&(At=33326),ct===5131&&(At=33325),ct===5121&&(At=33321)),L===33319&&(ct===5126&&(At=33328),ct===5131&&(At=33327),ct===5121&&(At=33323)),L===6408&&(ct===5126&&(At=34836),ct===5131&&(At=34842),ct===5121&&(At=bt===Ve&&St===!1?35907:32856),ct===32819&&(At=32854),ct===32820&&(At=32855)),(At===33325||At===33326||At===33327||At===33328||At===34842||At===34836)&&t.get("EXT_color_buffer_float"),At}function B(U,L,ct){return N(U,ct)===!0||U.isFramebufferTexture&&U.minFilter!==Vn&&U.minFilter!==gi?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function tt(U){return U===Vn||U===L_||U===R_?9728:9729}function ot(U){const L=U.target;L.removeEventListener("dispose",ot),nt(L),L.isVideoTexture&&w.delete(L)}function vt(U){const L=U.target;L.removeEventListener("dispose",vt),ht(L)}function nt(U){const L=a.get(U);if(L.__webglInit===void 0)return;const ct=U.source,bt=v.get(ct);if(bt){const St=bt[L.__cacheKey];St.usedTimes--,St.usedTimes===0&&Z(U),Object.keys(bt).length===0&&v.delete(ct)}a.remove(U)}function Z(U){const L=a.get(U);o.deleteTexture(L.__webglTexture);const ct=U.source,bt=v.get(ct);delete bt[L.__cacheKey],h.memory.textures--}function ht(U){const L=U.texture,ct=a.get(U),bt=a.get(L);if(bt.__webglTexture!==void 0&&(o.deleteTexture(bt.__webglTexture),h.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let St=0;St<6;St++)o.deleteFramebuffer(ct.__webglFramebuffer[St]),ct.__webglDepthbuffer&&o.deleteRenderbuffer(ct.__webglDepthbuffer[St]);else{if(o.deleteFramebuffer(ct.__webglFramebuffer),ct.__webglDepthbuffer&&o.deleteRenderbuffer(ct.__webglDepthbuffer),ct.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ct.__webglMultisampledFramebuffer),ct.__webglColorRenderbuffer)for(let St=0;St<ct.__webglColorRenderbuffer.length;St++)ct.__webglColorRenderbuffer[St]&&o.deleteRenderbuffer(ct.__webglColorRenderbuffer[St]);ct.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ct.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let St=0,At=L.length;St<At;St++){const It=a.get(L[St]);It.__webglTexture&&(o.deleteTexture(It.__webglTexture),h.memory.textures--),a.remove(L[St])}a.remove(L),a.remove(U)}let G=0;function Q(){G=0}function K(){const U=G;return U>=m&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+m),G+=1,U}function W(U){const L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.encoding),L.join()}function j(U,L){const ct=a.get(U);if(U.isVideoTexture&&bn(U),U.isRenderTargetTexture===!1&&U.version>0&&ct.__version!==U.version){const bt=U.image;if(bt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(ct,U,L);return}}i.bindTexture(3553,ct.__webglTexture,33984+L)}function R(U,L){const ct=a.get(U);if(U.version>0&&ct.__version!==U.version){Ot(ct,U,L);return}i.bindTexture(35866,ct.__webglTexture,33984+L)}function I(U,L){const ct=a.get(U);if(U.version>0&&ct.__version!==U.version){Ot(ct,U,L);return}i.bindTexture(32879,ct.__webglTexture,33984+L)}function Y(U,L){const ct=a.get(U);if(U.version>0&&ct.__version!==U.version){Tt(ct,U,L);return}i.bindTexture(34067,ct.__webglTexture,33984+L)}const ut={[Qd]:10497,[Di]:33071,[Kd]:33648},yt={[Vn]:9728,[L_]:9984,[R_]:9986,[gi]:9729,[m1]:9985,[Oc]:9987};function at(U,L,ct){if(ct?(o.texParameteri(U,10242,ut[L.wrapS]),o.texParameteri(U,10243,ut[L.wrapT]),(U===32879||U===35866)&&o.texParameteri(U,32882,ut[L.wrapR]),o.texParameteri(U,10240,yt[L.magFilter]),o.texParameteri(U,10241,yt[L.minFilter])):(o.texParameteri(U,10242,33071),o.texParameteri(U,10243,33071),(U===32879||U===35866)&&o.texParameteri(U,32882,33071),(L.wrapS!==Di||L.wrapT!==Di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,10240,tt(L.magFilter)),o.texParameteri(U,10241,tt(L.minFilter)),L.minFilter!==Vn&&L.minFilter!==gi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const bt=t.get("EXT_texture_filter_anisotropic");if(L.type===Lr&&t.has("OES_texture_float_linear")===!1||c===!1&&L.type===wl&&t.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||a.get(L).__currentAnisotropy)&&(o.texParameterf(U,bt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,l.getMaxAnisotropy())),a.get(L).__currentAnisotropy=L.anisotropy)}}function Rt(U,L){let ct=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",ot));const bt=L.source;let St=v.get(bt);St===void 0&&(St={},v.set(bt,St));const At=W(L);if(At!==U.__cacheKey){St[At]===void 0&&(St[At]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ct=!0),St[At].usedTimes++;const It=St[U.__cacheKey];It!==void 0&&(St[U.__cacheKey].usedTimes--,It.usedTimes===0&&Z(L)),U.__cacheKey=At,U.__webglTexture=St[At].texture}return ct}function Ot(U,L,ct){let bt=3553;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(bt=35866),L.isData3DTexture&&(bt=32879);const St=Rt(U,L),At=L.source;i.bindTexture(bt,U.__webglTexture,33984+ct);const It=a.get(At);if(At.version!==It.__version||St===!0){i.activeTexture(33984+ct),o.pixelStorei(37440,L.flipY),o.pixelStorei(37441,L.premultiplyAlpha),o.pixelStorei(3317,L.unpackAlignment),o.pixelStorei(37443,0);const F=C(L)&&z(L.image)===!1;let $=D(L.image,F,!1,g);$=Sn(L,$);const Dt=z($)||c,zt=u.convert(L.format,L.encoding);let Et=u.convert(L.type),Lt=T(L.internalFormat,zt,Et,L.encoding,L.isVideoTexture);at(bt,L,Dt);let Ut;const Wt=L.mipmaps,re=c&&L.isVideoTexture!==!0,ye=It.__version===void 0||St===!0,X=B(L,$,Dt);if(L.isDepthTexture)Lt=6402,c?L.type===Lr?Lt=36012:L.type===Dr?Lt=33190:L.type===Qs?Lt=35056:Lt=33189:L.type===Lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===zr&&Lt===6402&&L.type!==Sy&&L.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Dr,Et=u.convert(L.type)),L.format===io&&Lt===6402&&(Lt=34041,L.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Qs,Et=u.convert(L.type))),ye&&(re?i.texStorage2D(3553,1,Lt,$.width,$.height):i.texImage2D(3553,0,Lt,$.width,$.height,0,zt,Et,null));else if(L.isDataTexture)if(Wt.length>0&&Dt){re&&ye&&i.texStorage2D(3553,X,Lt,Wt[0].width,Wt[0].height);for(let pt=0,xt=Wt.length;pt<xt;pt++)Ut=Wt[pt],re?i.texSubImage2D(3553,pt,0,0,Ut.width,Ut.height,zt,Et,Ut.data):i.texImage2D(3553,pt,Lt,Ut.width,Ut.height,0,zt,Et,Ut.data);L.generateMipmaps=!1}else re?(ye&&i.texStorage2D(3553,X,Lt,$.width,$.height),i.texSubImage2D(3553,0,0,0,$.width,$.height,zt,Et,$.data)):i.texImage2D(3553,0,Lt,$.width,$.height,0,zt,Et,$.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){re&&ye&&i.texStorage3D(35866,X,Lt,Wt[0].width,Wt[0].height,$.depth);for(let pt=0,xt=Wt.length;pt<xt;pt++)Ut=Wt[pt],L.format!==Li?zt!==null?re?i.compressedTexSubImage3D(35866,pt,0,0,0,Ut.width,Ut.height,$.depth,zt,Ut.data,0,0):i.compressedTexImage3D(35866,pt,Lt,Ut.width,Ut.height,$.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?i.texSubImage3D(35866,pt,0,0,0,Ut.width,Ut.height,$.depth,zt,Et,Ut.data):i.texImage3D(35866,pt,Lt,Ut.width,Ut.height,$.depth,0,zt,Et,Ut.data)}else{re&&ye&&i.texStorage2D(3553,X,Lt,Wt[0].width,Wt[0].height);for(let pt=0,xt=Wt.length;pt<xt;pt++)Ut=Wt[pt],L.format!==Li?zt!==null?re?i.compressedTexSubImage2D(3553,pt,0,0,Ut.width,Ut.height,zt,Ut.data):i.compressedTexImage2D(3553,pt,Lt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?i.texSubImage2D(3553,pt,0,0,Ut.width,Ut.height,zt,Et,Ut.data):i.texImage2D(3553,pt,Lt,Ut.width,Ut.height,0,zt,Et,Ut.data)}else if(L.isDataArrayTexture)re?(ye&&i.texStorage3D(35866,X,Lt,$.width,$.height,$.depth),i.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,zt,Et,$.data)):i.texImage3D(35866,0,Lt,$.width,$.height,$.depth,0,zt,Et,$.data);else if(L.isData3DTexture)re?(ye&&i.texStorage3D(32879,X,Lt,$.width,$.height,$.depth),i.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,zt,Et,$.data)):i.texImage3D(32879,0,Lt,$.width,$.height,$.depth,0,zt,Et,$.data);else if(L.isFramebufferTexture){if(ye)if(re)i.texStorage2D(3553,X,Lt,$.width,$.height);else{let pt=$.width,xt=$.height;for(let Ct=0;Ct<X;Ct++)i.texImage2D(3553,Ct,Lt,pt,xt,0,zt,Et,null),pt>>=1,xt>>=1}}else if(Wt.length>0&&Dt){re&&ye&&i.texStorage2D(3553,X,Lt,Wt[0].width,Wt[0].height);for(let pt=0,xt=Wt.length;pt<xt;pt++)Ut=Wt[pt],re?i.texSubImage2D(3553,pt,0,0,zt,Et,Ut):i.texImage2D(3553,pt,Lt,zt,Et,Ut);L.generateMipmaps=!1}else re?(ye&&i.texStorage2D(3553,X,Lt,$.width,$.height),i.texSubImage2D(3553,0,0,0,zt,Et,$)):i.texImage2D(3553,0,Lt,zt,Et,$);N(L,Dt)&&H(bt),It.__version=At.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function Tt(U,L,ct){if(L.image.length!==6)return;const bt=Rt(U,L),St=L.source;i.bindTexture(34067,U.__webglTexture,33984+ct);const At=a.get(St);if(St.version!==At.__version||bt===!0){i.activeTexture(33984+ct),o.pixelStorei(37440,L.flipY),o.pixelStorei(37441,L.premultiplyAlpha),o.pixelStorei(3317,L.unpackAlignment),o.pixelStorei(37443,0);const It=L.isCompressedTexture||L.image[0].isCompressedTexture,F=L.image[0]&&L.image[0].isDataTexture,$=[];for(let pt=0;pt<6;pt++)!It&&!F?$[pt]=D(L.image[pt],!1,!0,p):$[pt]=F?L.image[pt].image:L.image[pt],$[pt]=Sn(L,$[pt]);const Dt=$[0],zt=z(Dt)||c,Et=u.convert(L.format,L.encoding),Lt=u.convert(L.type),Ut=T(L.internalFormat,Et,Lt,L.encoding),Wt=c&&L.isVideoTexture!==!0,re=At.__version===void 0||bt===!0;let ye=B(L,Dt,zt);at(34067,L,zt);let X;if(It){Wt&&re&&i.texStorage2D(34067,ye,Ut,Dt.width,Dt.height);for(let pt=0;pt<6;pt++){X=$[pt].mipmaps;for(let xt=0;xt<X.length;xt++){const Ct=X[xt];L.format!==Li?Et!==null?Wt?i.compressedTexSubImage2D(34069+pt,xt,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(34069+pt,xt,Ut,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?i.texSubImage2D(34069+pt,xt,0,0,Ct.width,Ct.height,Et,Lt,Ct.data):i.texImage2D(34069+pt,xt,Ut,Ct.width,Ct.height,0,Et,Lt,Ct.data)}}}else{X=L.mipmaps,Wt&&re&&(X.length>0&&ye++,i.texStorage2D(34067,ye,Ut,$[0].width,$[0].height));for(let pt=0;pt<6;pt++)if(F){Wt?i.texSubImage2D(34069+pt,0,0,0,$[pt].width,$[pt].height,Et,Lt,$[pt].data):i.texImage2D(34069+pt,0,Ut,$[pt].width,$[pt].height,0,Et,Lt,$[pt].data);for(let xt=0;xt<X.length;xt++){const Bt=X[xt].image[pt].image;Wt?i.texSubImage2D(34069+pt,xt+1,0,0,Bt.width,Bt.height,Et,Lt,Bt.data):i.texImage2D(34069+pt,xt+1,Ut,Bt.width,Bt.height,0,Et,Lt,Bt.data)}}else{Wt?i.texSubImage2D(34069+pt,0,0,0,Et,Lt,$[pt]):i.texImage2D(34069+pt,0,Ut,Et,Lt,$[pt]);for(let xt=0;xt<X.length;xt++){const Ct=X[xt];Wt?i.texSubImage2D(34069+pt,xt+1,0,0,Et,Lt,Ct.image[pt]):i.texImage2D(34069+pt,xt+1,Ut,Et,Lt,Ct.image[pt])}}}N(L,zt)&&H(34067),At.__version=St.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function wt(U,L,ct,bt,St){const At=u.convert(ct.format,ct.encoding),It=u.convert(ct.type),F=T(ct.internalFormat,At,It,ct.encoding);a.get(L).__hasExternalTextures||(St===32879||St===35866?i.texImage3D(St,0,F,L.width,L.height,L.depth,0,At,It,null):i.texImage2D(St,0,F,L.width,L.height,0,At,It,null)),i.bindFramebuffer(36160,U),de(L)?y.framebufferTexture2DMultisampleEXT(36160,bt,St,a.get(ct).__webglTexture,0,Ge(L)):(St===3553||St>=34069&&St<=34074)&&o.framebufferTexture2D(36160,bt,St,a.get(ct).__webglTexture,0),i.bindFramebuffer(36160,null)}function he(U,L,ct){if(o.bindRenderbuffer(36161,U),L.depthBuffer&&!L.stencilBuffer){let bt=33189;if(ct||de(L)){const St=L.depthTexture;St&&St.isDepthTexture&&(St.type===Lr?bt=36012:St.type===Dr&&(bt=33190));const At=Ge(L);de(L)?y.renderbufferStorageMultisampleEXT(36161,At,bt,L.width,L.height):o.renderbufferStorageMultisample(36161,At,bt,L.width,L.height)}else o.renderbufferStorage(36161,bt,L.width,L.height);o.framebufferRenderbuffer(36160,36096,36161,U)}else if(L.depthBuffer&&L.stencilBuffer){const bt=Ge(L);ct&&de(L)===!1?o.renderbufferStorageMultisample(36161,bt,35056,L.width,L.height):de(L)?y.renderbufferStorageMultisampleEXT(36161,bt,35056,L.width,L.height):o.renderbufferStorage(36161,34041,L.width,L.height),o.framebufferRenderbuffer(36160,33306,36161,U)}else{const bt=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let St=0;St<bt.length;St++){const At=bt[St],It=u.convert(At.format,At.encoding),F=u.convert(At.type),$=T(At.internalFormat,It,F,At.encoding),Dt=Ge(L);ct&&de(L)===!1?o.renderbufferStorageMultisample(36161,Dt,$,L.width,L.height):de(L)?y.renderbufferStorageMultisampleEXT(36161,Dt,$,L.width,L.height):o.renderbufferStorage(36161,$,L.width,L.height)}}o.bindRenderbuffer(36161,null)}function jt(U,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,U),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),j(L.depthTexture,0);const bt=a.get(L.depthTexture).__webglTexture,St=Ge(L);if(L.depthTexture.format===zr)de(L)?y.framebufferTexture2DMultisampleEXT(36160,36096,3553,bt,0,St):o.framebufferTexture2D(36160,36096,3553,bt,0);else if(L.depthTexture.format===io)de(L)?y.framebufferTexture2DMultisampleEXT(36160,33306,3553,bt,0,St):o.framebufferTexture2D(36160,33306,3553,bt,0);else throw new Error("Unknown depthTexture format")}function Ft(U){const L=a.get(U),ct=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if(ct)throw new Error("target.depthTexture not supported in Cube render targets");jt(L.__webglFramebuffer,U)}else if(ct){L.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)i.bindFramebuffer(36160,L.__webglFramebuffer[bt]),L.__webglDepthbuffer[bt]=o.createRenderbuffer(),he(L.__webglDepthbuffer[bt],U,!1)}else i.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=o.createRenderbuffer(),he(L.__webglDepthbuffer,U,!1);i.bindFramebuffer(36160,null)}function Se(U,L,ct){const bt=a.get(U);L!==void 0&&wt(bt.__webglFramebuffer,U,U.texture,36064,3553),ct!==void 0&&Ft(U)}function Be(U){const L=U.texture,ct=a.get(U),bt=a.get(L);U.addEventListener("dispose",vt),U.isWebGLMultipleRenderTargets!==!0&&(bt.__webglTexture===void 0&&(bt.__webglTexture=o.createTexture()),bt.__version=L.version,h.memory.textures++);const St=U.isWebGLCubeRenderTarget===!0,At=U.isWebGLMultipleRenderTargets===!0,It=z(U)||c;if(St){ct.__webglFramebuffer=[];for(let F=0;F<6;F++)ct.__webglFramebuffer[F]=o.createFramebuffer()}else{if(ct.__webglFramebuffer=o.createFramebuffer(),At)if(l.drawBuffers){const F=U.texture;for(let $=0,Dt=F.length;$<Dt;$++){const zt=a.get(F[$]);zt.__webglTexture===void 0&&(zt.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&U.samples>0&&de(U)===!1){const F=At?L:[L];ct.__webglMultisampledFramebuffer=o.createFramebuffer(),ct.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,ct.__webglMultisampledFramebuffer);for(let $=0;$<F.length;$++){const Dt=F[$];ct.__webglColorRenderbuffer[$]=o.createRenderbuffer(),o.bindRenderbuffer(36161,ct.__webglColorRenderbuffer[$]);const zt=u.convert(Dt.format,Dt.encoding),Et=u.convert(Dt.type),Lt=T(Dt.internalFormat,zt,Et,Dt.encoding,U.isXRRenderTarget===!0),Ut=Ge(U);o.renderbufferStorageMultisample(36161,Ut,Lt,U.width,U.height),o.framebufferRenderbuffer(36160,36064+$,36161,ct.__webglColorRenderbuffer[$])}o.bindRenderbuffer(36161,null),U.depthBuffer&&(ct.__webglDepthRenderbuffer=o.createRenderbuffer(),he(ct.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(36160,null)}}if(St){i.bindTexture(34067,bt.__webglTexture),at(34067,L,It);for(let F=0;F<6;F++)wt(ct.__webglFramebuffer[F],U,L,36064,34069+F);N(L,It)&&H(34067),i.unbindTexture()}else if(At){const F=U.texture;for(let $=0,Dt=F.length;$<Dt;$++){const zt=F[$],Et=a.get(zt);i.bindTexture(3553,Et.__webglTexture),at(3553,zt,It),wt(ct.__webglFramebuffer,U,zt,36064+$,3553),N(zt,It)&&H(3553)}i.unbindTexture()}else{let F=3553;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(c?F=U.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(F,bt.__webglTexture),at(F,L,It),wt(ct.__webglFramebuffer,U,L,36064,F),N(L,It)&&H(F),i.unbindTexture()}U.depthBuffer&&Ft(U)}function Ne(U){const L=z(U)||c,ct=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let bt=0,St=ct.length;bt<St;bt++){const At=ct[bt];if(N(At,L)){const It=U.isWebGLCubeRenderTarget?34067:3553,F=a.get(At).__webglTexture;i.bindTexture(It,F),H(It),i.unbindTexture()}}}function Tn(U){if(c&&U.samples>0&&de(U)===!1){const L=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],ct=U.width,bt=U.height;let St=16384;const At=[],It=U.stencilBuffer?33306:36096,F=a.get(U),$=U.isWebGLMultipleRenderTargets===!0;if($)for(let Dt=0;Dt<L.length;Dt++)i.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Dt,36161,null),i.bindFramebuffer(36160,F.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Dt,3553,null,0);i.bindFramebuffer(36008,F.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,F.__webglFramebuffer);for(let Dt=0;Dt<L.length;Dt++){At.push(36064+Dt),U.depthBuffer&&At.push(It);const zt=F.__ignoreDepthValues!==void 0?F.__ignoreDepthValues:!1;if(zt===!1&&(U.depthBuffer&&(St|=256),U.stencilBuffer&&(St|=1024)),$&&o.framebufferRenderbuffer(36008,36064,36161,F.__webglColorRenderbuffer[Dt]),zt===!0&&(o.invalidateFramebuffer(36008,[It]),o.invalidateFramebuffer(36009,[It])),$){const Et=a.get(L[Dt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,Et,0)}o.blitFramebuffer(0,0,ct,bt,0,0,ct,bt,St,9728),M&&o.invalidateFramebuffer(36008,At)}if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),$)for(let Dt=0;Dt<L.length;Dt++){i.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Dt,36161,F.__webglColorRenderbuffer[Dt]);const zt=a.get(L[Dt]).__webglTexture;i.bindFramebuffer(36160,F.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Dt,3553,zt,0)}i.bindFramebuffer(36009,F.__webglMultisampledFramebuffer)}}function Ge(U){return Math.min(_,U.samples)}function de(U){const L=a.get(U);return c&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function bn(U){const L=h.render.frame;w.get(U)!==L&&(w.set(U,L),U.update())}function Sn(U,L){const ct=U.encoding,bt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===$d||ct!==Gr&&(ct===Ve?c===!1?t.has("EXT_sRGB")===!0&&bt===Li?(U.format=$d,U.minFilter=gi,U.generateMipmaps=!1):L=Ey.sRGBToLinear(L):(bt!==Li||St!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ct)),L}this.allocateTextureUnit=K,this.resetTextureUnits=Q,this.setTexture2D=j,this.setTexture2DArray=R,this.setTexture3D=I,this.setTextureCube=Y,this.rebindTextures=Se,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=de}function IA(o,t,i){const a=i.isWebGL2;function l(u,h=null){let c;if(u===Br)return 5121;if(u===y1)return 32819;if(u===x1)return 32820;if(u===g1)return 5120;if(u===_1)return 5122;if(u===Sy)return 5123;if(u===v1)return 5124;if(u===Dr)return 5125;if(u===Lr)return 5126;if(u===wl)return a?5131:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(u===b1)return 6406;if(u===Li)return 6408;if(u===M1)return 6409;if(u===w1)return 6410;if(u===zr)return 6402;if(u===io)return 34041;if(u===E1)return 6403;if(u===S1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(u===$d)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(u===A1)return 36244;if(u===T1)return 33319;if(u===C1)return 33320;if(u===D1)return 36249;if(u===id||u===ad||u===rd||u===sd)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(u===id)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===ad)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===rd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===sd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(u===id)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===ad)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===rd)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===sd)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===z_||u===O_||u===U_||u===N_)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(u===z_)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===O_)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===U_)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===N_)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===L1)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===P_||u===B_)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(u===P_)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(u===B_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===G_||u===H_||u===F_||u===I_||u===V_||u===k_||u===W_||u===X_||u===Y_||u===q_||u===j_||u===Z_||u===Q_||u===K_)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(u===G_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===H_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===F_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===I_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===V_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===k_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===W_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===X_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Y_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===q_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===j_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Z_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Q_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===K_)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===J_)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(u===J_)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return u===Qs?a?34042:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class VA extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class lc extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kA={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,u=null,h=null;const c=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const v=i.getJointPose(b,a);if(p.joints[b.jointName]===void 0){const A=new lc;A.matrixAutoUpdate=!1,A.visible=!1,p.joints[b.jointName]=A,p.add(A)}const S=p.joints[b.jointName];v!==null&&(S.matrix.fromArray(v.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=v.radius),S.visible=v!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),M=.02,w=.005;p.inputState.pinching&&y>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));c!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&u!==null&&(l=u),l!==null&&(c.matrix.fromArray(l.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),l.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(l.linearVelocity)):c.hasLinearVelocity=!1,l.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(l.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(kA)))}return c!==null&&(c.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}}class WA extends yi{constructor(t,i,a,l,u,h,c,m,p,g){if(g=g!==void 0?g:zr,g!==zr&&g!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===zr&&(a=Dr),a===void 0&&g===io&&(a=Qs),super(null,l,u,h,c,m,g,a,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=c!==void 0?c:Vn,this.minFilter=m!==void 0?m:Vn,this.flipY=!1,this.generateMipmaps=!1}}class XA extends Vr{constructor(t,i){super();const a=this;let l=null,u=1,h=null,c="local-floor",m=null,p=null,g=null,_=null,y=null,M=null;const w=i.getContextAttributes();let b=null,v=null;const S=[],A=[],D=new ni;D.layers.enable(1),D.viewport=new Ye;const z=new ni;z.layers.enable(2),z.viewport=new Ye;const C=[D,z],N=new VA;N.layers.enable(1),N.layers.enable(2);let H=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=S[W];return j===void 0&&(j=new zd,S[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=S[W];return j===void 0&&(j=new zd,S[W]=j),j.getGripSpace()},this.getHand=function(W){let j=S[W];return j===void 0&&(j=new zd,S[W]=j),j.getHandSpace()};function B(W){const j=A.indexOf(W.inputSource);if(j===-1)return;const R=S[j];R!==void 0&&R.dispatchEvent({type:W.type,data:W.inputSource})}function tt(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",tt),l.removeEventListener("inputsourceschange",ot);for(let W=0;W<S.length;W++){const j=A[W];j!==null&&(A[W]=null,S[W].disconnect(j))}H=null,T=null,t.setRenderTarget(b),y=null,_=null,g=null,l=null,v=null,K.stop(),a.isPresenting=!1,a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){c=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(b=t.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",tt),l.addEventListener("inputsourceschange",ot),w.xrCompatible!==!0&&await i.makeXRCompatible(),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:l.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,j),l.updateRenderState({baseLayer:y}),v=new Hr(y.framebufferWidth,y.framebufferHeight,{format:Li,type:Br,encoding:t.outputEncoding,stencilBuffer:w.stencil})}else{let j=null,R=null,I=null;w.depth&&(I=w.stencil?35056:33190,j=w.stencil?io:zr,R=w.stencil?Qs:Dr);const Y={colorFormat:32856,depthFormat:I,scaleFactor:u};g=new XRWebGLBinding(l,i),_=g.createProjectionLayer(Y),l.updateRenderState({layers:[_]}),v=new Hr(_.textureWidth,_.textureHeight,{format:Li,type:Br,depthTexture:new WA(_.textureWidth,_.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:w.stencil,encoding:t.outputEncoding,samples:w.antialias?4:0});const ut=t.properties.get(v);ut.__ignoreDepthValues=_.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),m=null,h=await l.requestReferenceSpace(c),K.setContext(l),K.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}};function ot(W){for(let j=0;j<W.removed.length;j++){const R=W.removed[j],I=A.indexOf(R);I>=0&&(A[I]=null,S[I].dispatchEvent({type:"disconnected",data:R}))}for(let j=0;j<W.added.length;j++){const R=W.added[j];let I=A.indexOf(R);if(I===-1){for(let ut=0;ut<S.length;ut++)if(ut>=A.length){A.push(R),I=ut;break}else if(A[ut]===null){A[ut]=R,I=ut;break}if(I===-1)break}const Y=S[I];Y&&Y.dispatchEvent({type:"connected",data:R})}}const vt=new k,nt=new k;function Z(W,j,R){vt.setFromMatrixPosition(j.matrixWorld),nt.setFromMatrixPosition(R.matrixWorld);const I=vt.distanceTo(nt),Y=j.projectionMatrix.elements,ut=R.projectionMatrix.elements,yt=Y[14]/(Y[10]-1),at=Y[14]/(Y[10]+1),Rt=(Y[9]+1)/Y[5],Ot=(Y[9]-1)/Y[5],Tt=(Y[8]-1)/Y[0],wt=(ut[8]+1)/ut[0],he=yt*Tt,jt=yt*wt,Ft=I/(-Tt+wt),Se=Ft*-Tt;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Se),W.translateZ(Ft),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Be=yt+Ft,Ne=at+Ft,Tn=he-Se,Ge=jt+(I-Se),de=Rt*at/Ne*Be,bn=Ot*at/Ne*Be;W.projectionMatrix.makePerspective(Tn,Ge,de,bn,Be,Ne)}function ht(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;N.near=z.near=D.near=W.near,N.far=z.far=D.far=W.far,(H!==N.near||T!==N.far)&&(l.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,T=N.far);const j=W.parent,R=N.cameras;ht(N,j);for(let Y=0;Y<R.length;Y++)ht(R[Y],j);N.matrixWorld.decompose(N.position,N.quaternion,N.scale),W.matrix.copy(N.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const I=W.children;for(let Y=0,ut=I.length;Y<ut;Y++)I[Y].updateMatrixWorld(!0);R.length===2?Z(N,D,z):N.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return N},this.getFoveation=function(){if(_!==null)return _.fixedFoveation;if(y!==null)return y.fixedFoveation},this.setFoveation=function(W){_!==null&&(_.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)};let G=null;function Q(W,j){if(p=j.getViewerPose(m||h),M=j,p!==null){const R=p.views;y!==null&&(t.setRenderTargetFramebuffer(v,y.framebuffer),t.setRenderTarget(v));let I=!1;R.length!==N.cameras.length&&(N.cameras.length=0,I=!0);for(let Y=0;Y<R.length;Y++){const ut=R[Y];let yt=null;if(y!==null)yt=y.getViewport(ut);else{const Rt=g.getViewSubImage(_,ut);yt=Rt.viewport,Y===0&&(t.setRenderTargetTextures(v,Rt.colorTexture,_.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(v))}let at=C[Y];at===void 0&&(at=new ni,at.layers.enable(Y),at.viewport=new Ye,C[Y]=at),at.matrix.fromArray(ut.transform.matrix),at.projectionMatrix.fromArray(ut.projectionMatrix),at.viewport.set(yt.x,yt.y,yt.width,yt.height),Y===0&&N.matrix.copy(at.matrix),I===!0&&N.cameras.push(at)}}for(let R=0;R<S.length;R++){const I=A[R],Y=S[R];I!==null&&Y!==void 0&&Y.update(I,j,m||h)}G&&G(W,j),M=null}const K=new Uy;K.setAnimationLoop(Q),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}function YA(o,t){function i(b,v){b.fogColor.value.copy(v.color),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function a(b,v,S,A,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(b,v):v.isMeshToonMaterial?(l(b,v),g(b,v)):v.isMeshPhongMaterial?(l(b,v),p(b,v)):v.isMeshStandardMaterial?(l(b,v),_(b,v),v.isMeshPhysicalMaterial&&y(b,v,D)):v.isMeshMatcapMaterial?(l(b,v),M(b,v)):v.isMeshDepthMaterial?l(b,v):v.isMeshDistanceMaterial?(l(b,v),w(b,v)):v.isMeshNormalMaterial?l(b,v):v.isLineBasicMaterial?(u(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?c(b,v,S,A):v.isSpriteMaterial?m(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map),v.alphaMap&&(b.alphaMap.value=v.alphaMap),v.bumpMap&&(b.bumpMap.value=v.bumpMap,b.bumpScale.value=v.bumpScale,v.side===vi&&(b.bumpScale.value*=-1)),v.displacementMap&&(b.displacementMap.value=v.displacementMap,b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap),v.normalMap&&(b.normalMap.value=v.normalMap,b.normalScale.value.copy(v.normalScale),v.side===vi&&b.normalScale.value.negate()),v.specularMap&&(b.specularMap.value=v.specularMap),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const S=t.get(v).envMap;if(S&&(b.envMap.value=S,b.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap){b.lightMap.value=v.lightMap;const z=o.physicallyCorrectLights!==!0?Math.PI:1;b.lightMapIntensity.value=v.lightMapIntensity*z}v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity);let A;v.map?A=v.map:v.specularMap?A=v.specularMap:v.displacementMap?A=v.displacementMap:v.normalMap?A=v.normalMap:v.bumpMap?A=v.bumpMap:v.roughnessMap?A=v.roughnessMap:v.metalnessMap?A=v.metalnessMap:v.alphaMap?A=v.alphaMap:v.emissiveMap?A=v.emissiveMap:v.clearcoatMap?A=v.clearcoatMap:v.clearcoatNormalMap?A=v.clearcoatNormalMap:v.clearcoatRoughnessMap?A=v.clearcoatRoughnessMap:v.iridescenceMap?A=v.iridescenceMap:v.iridescenceThicknessMap?A=v.iridescenceThicknessMap:v.specularIntensityMap?A=v.specularIntensityMap:v.specularColorMap?A=v.specularColorMap:v.transmissionMap?A=v.transmissionMap:v.thicknessMap?A=v.thicknessMap:v.sheenColorMap?A=v.sheenColorMap:v.sheenRoughnessMap&&(A=v.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),b.uvTransform.value.copy(A.matrix));let D;v.aoMap?D=v.aoMap:v.lightMap&&(D=v.lightMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),b.uv2Transform.value.copy(D.matrix))}function u(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function c(b,v,S,A){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*S,b.scale.value=A*.5,v.map&&(b.map.value=v.map),v.alphaMap&&(b.alphaMap.value=v.alphaMap),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);let D;v.map?D=v.map:v.alphaMap&&(D=v.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),b.uvTransform.value.copy(D.matrix))}function m(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map),v.alphaMap&&(b.alphaMap.value=v.alphaMap),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);let S;v.map?S=v.map:v.alphaMap&&(S=v.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),b.uvTransform.value.copy(S.matrix))}function p(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function g(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function _(b,v){b.roughness.value=v.roughness,b.metalness.value=v.metalness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap),t.get(v).envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function y(b,v,S){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),b.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===vi&&b.clearcoatNormalScale.value.negate())),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=S.texture,b.transmissionSamplerSize.value.set(S.width,S.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap)}function M(b,v){v.matcap&&(b.matcap.value=v.matcap)}function w(b,v){b.referencePosition.value.copy(v.referencePosition),b.nearDistance.value=v.nearDistance,b.farDistance.value=v.farDistance}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function qA(o,t,i,a){let l={},u={},h=[];const c=i.isWebGL2?o.getParameter(35375):0;function m(A,D){const z=D.program;a.uniformBlockBinding(A,z)}function p(A,D){let z=l[A.id];z===void 0&&(w(A),z=g(A),l[A.id]=z,A.addEventListener("dispose",v));const C=D.program;a.updateUBOMapping(A,C);const N=t.render.frame;u[A.id]!==N&&(y(A),u[A.id]=N)}function g(A){const D=_();A.__bindingPointIndex=D;const z=o.createBuffer(),C=A.__size,N=A.usage;return o.bindBuffer(35345,z),o.bufferData(35345,C,N),o.bindBuffer(35345,null),o.bindBufferBase(35345,D,z),z}function _(){for(let A=0;A<c;A++)if(h.indexOf(A)===-1)return h.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const D=l[A.id],z=A.uniforms,C=A.__cache;o.bindBuffer(35345,D);for(let N=0,H=z.length;N<H;N++){const T=z[N];if(M(T,N,C)===!0){const B=T.value,tt=T.__offset;typeof B=="number"?(T.__data[0]=B,o.bufferSubData(35345,tt,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):B.toArray(T.__data),o.bufferSubData(35345,tt,T.__data))}}o.bindBuffer(35345,null)}function M(A,D,z){const C=A.value;if(z[D]===void 0)return typeof C=="number"?z[D]=C:z[D]=C.clone(),!0;if(typeof C=="number"){if(z[D]!==C)return z[D]=C,!0}else{const N=z[D];if(N.equals(C)===!1)return N.copy(C),!0}return!1}function w(A){const D=A.uniforms;let z=0;const C=16;let N=0;for(let H=0,T=D.length;H<T;H++){const B=D[H],tt=b(B);if(B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=z,H>0){N=z%C;const ot=C-N;N!==0&&ot-tt.boundary<0&&(z+=C-N,B.__offset=z)}z+=tt.storage}return N=z%C,N>0&&(z+=C-N),A.__size=z,A.__cache={},this}function b(A){const D=A.value,z={boundary:0,storage:0};return typeof D=="number"?(z.boundary=4,z.storage=4):D.isVector2?(z.boundary=8,z.storage=8):D.isVector3||D.isColor?(z.boundary=16,z.storage=12):D.isVector4?(z.boundary=16,z.storage=16):D.isMatrix3?(z.boundary=48,z.storage=48):D.isMatrix4?(z.boundary=64,z.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),z}function v(A){const D=A.target;D.removeEventListener("dispose",v);const z=h.indexOf(D.__bindingPointIndex);h.splice(z,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function S(){for(const A in l)o.deleteBuffer(l[A]);h=[],l={},u={}}return{bind:m,update:p,dispose:S}}function jA(){const o=El("canvas");return o.style.display="block",o}function Hy(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:jA(),i=o.context!==void 0?o.context:null,a=o.depth!==void 0?o.depth:!0,l=o.stencil!==void 0?o.stencil:!0,u=o.antialias!==void 0?o.antialias:!1,h=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,c=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,m=o.powerPreference!==void 0?o.powerPreference:"default",p=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let g;i!==null?g=i.getContextAttributes().alpha:g=o.alpha!==void 0?o.alpha:!1;let _=null,y=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gr,this.physicallyCorrectLights=!1,this.toneMapping=va,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const b=this;let v=!1,S=0,A=0,D=null,z=-1,C=null;const N=new Ye,H=new Ye;let T=null,B=t.width,tt=t.height,ot=1,vt=null,nt=null;const Z=new Ye(0,0,B,tt),ht=new Ye(0,0,B,tt);let G=!1;const Q=new Oy;let K=!1,W=!1,j=null;const R=new tn,I=new qt,Y=new k,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return D===null?ot:1}let at=i;function Rt(O,st){for(let mt=0;mt<O.length;mt++){const J=O[mt],ft=t.getContext(J,st);if(ft!==null)return ft}return null}try{const O={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pp}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),at===null){const st=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&st.shift(),at=Rt(st,O),at===null)throw Rt(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}at.getShaderPrecisionFormat===void 0&&(at.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let Ot,Tt,wt,he,jt,Ft,Se,Be,Ne,Tn,Ge,de,bn,Sn,U,L,ct,bt,St,At,It,F,$,Dt;function zt(){Ot=new r3(at),Tt=new JE(at,Ot,o),Ot.init(Tt),F=new IA(at,Ot,Tt),wt=new HA(at,Ot,Tt),he=new l3,jt=new EA,Ft=new FA(at,Ot,wt,jt,Tt,F,he),Se=new t3(b),Be=new a3(b),Ne=new gM(at,Tt),$=new QE(at,Ot,Ne,Tt),Tn=new s3(at,Ne,he,$),Ge=new h3(at,Tn,Ne,he),St=new f3(at,Tt,Ft),L=new $E(jt),de=new wA(b,Se,Be,Ot,Tt,$,L),bn=new YA(b,jt),Sn=new TA,U=new OA(Ot,Tt),bt=new ZE(b,Se,Be,wt,Ge,g,h),ct=new GA(b,Ge,Tt),Dt=new qA(at,he,Tt,wt),At=new KE(at,Ot,he,Tt),It=new o3(at,Ot,he,Tt),he.programs=de.programs,b.capabilities=Tt,b.extensions=Ot,b.properties=jt,b.renderLists=Sn,b.shadowMap=ct,b.state=wt,b.info=he}zt();const Et=new XA(b,at);this.xr=Et,this.getContext=function(){return at},this.getContextAttributes=function(){return at.getContextAttributes()},this.forceContextLoss=function(){const O=Ot.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=Ot.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(O){O!==void 0&&(ot=O,this.setSize(B,tt,!1))},this.getSize=function(O){return O.set(B,tt)},this.setSize=function(O,st,mt){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=O,tt=st,t.width=Math.floor(O*ot),t.height=Math.floor(st*ot),mt!==!1&&(t.style.width=O+"px",t.style.height=st+"px"),this.setViewport(0,0,O,st)},this.getDrawingBufferSize=function(O){return O.set(B*ot,tt*ot).floor()},this.setDrawingBufferSize=function(O,st,mt){B=O,tt=st,ot=mt,t.width=Math.floor(O*mt),t.height=Math.floor(st*mt),this.setViewport(0,0,O,st)},this.getCurrentViewport=function(O){return O.copy(N)},this.getViewport=function(O){return O.copy(Z)},this.setViewport=function(O,st,mt,J){O.isVector4?Z.set(O.x,O.y,O.z,O.w):Z.set(O,st,mt,J),wt.viewport(N.copy(Z).multiplyScalar(ot).floor())},this.getScissor=function(O){return O.copy(ht)},this.setScissor=function(O,st,mt,J){O.isVector4?ht.set(O.x,O.y,O.z,O.w):ht.set(O,st,mt,J),wt.scissor(H.copy(ht).multiplyScalar(ot).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(O){wt.setScissorTest(G=O)},this.setOpaqueSort=function(O){vt=O},this.setTransparentSort=function(O){nt=O},this.getClearColor=function(O){return O.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(O=!0,st=!0,mt=!0){let J=0;O&&(J|=16384),st&&(J|=256),mt&&(J|=1024),at.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),Sn.dispose(),U.dispose(),jt.dispose(),Se.dispose(),Be.dispose(),Ge.dispose(),$.dispose(),Dt.dispose(),de.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ct),Et.removeEventListener("sessionend",Bt),j&&(j.dispose(),j=null),le.stop()};function Lt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const O=he.autoReset,st=ct.enabled,mt=ct.autoUpdate,J=ct.needsUpdate,ft=ct.type;zt(),he.autoReset=O,ct.enabled=st,ct.autoUpdate=mt,ct.needsUpdate=J,ct.type=ft}function Wt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function re(O){const st=O.target;st.removeEventListener("dispose",re),ye(st)}function ye(O){X(O),jt.remove(O)}function X(O){const st=jt.get(O).programs;st!==void 0&&(st.forEach(function(mt){de.releaseProgram(mt)}),O.isShaderMaterial&&de.releaseShaderCache(O))}this.renderBufferDirect=function(O,st,mt,J,ft,Nt){st===null&&(st=ut);const kt=ft.isMesh&&ft.matrixWorld.determinant()<0,Zt=Rl(O,st,mt,J,ft);wt.setMaterial(J,kt);let Kt=mt.index;const pe=mt.attributes.position;if(Kt===null){if(pe===void 0||pe.count===0)return}else if(Kt.count===0)return;let te=1;J.wireframe===!0&&(Kt=Tn.getWireframeAttribute(mt),te=2),$.setup(ft,J,Zt,mt,Kt);let ee,De=At;Kt!==null&&(ee=Ne.get(Kt),De=It,De.setIndex(ee));const Un=Kt!==null?Kt.count:pe.count,Wn=mt.drawRange.start*te,ai=mt.drawRange.count*te,dn=Nt!==null?Nt.start*te:0,Xt=Nt!==null?Nt.count*te:1/0,Xi=Math.max(Wn,dn),Pe=Math.min(Un,Wn+ai,dn+Xt)-1,qe=Math.max(0,Pe-Xi+1);if(qe!==0){if(ft.isMesh)J.wireframe===!0?(wt.setLineWidth(J.wireframeLinewidth*yt()),De.setMode(1)):De.setMode(4);else if(ft.isLine){let Dn=J.linewidth;Dn===void 0&&(Dn=1),wt.setLineWidth(Dn*yt()),ft.isLineSegments?De.setMode(1):ft.isLineLoop?De.setMode(2):De.setMode(3)}else ft.isPoints?De.setMode(0):ft.isSprite&&De.setMode(4);if(ft.isInstancedMesh)De.renderInstances(Xi,qe,ft.count);else if(mt.isInstancedBufferGeometry){const Dn=Math.min(mt.instanceCount,mt._maxInstanceCount);De.renderInstances(Xi,qe,Dn)}else De.render(Xi,qe)}},this.compile=function(O,st){function mt(J,ft,Nt){J.transparent===!0&&J.side===tr?(J.side=vi,J.needsUpdate=!0,On(J,ft,Nt),J.side=to,J.needsUpdate=!0,On(J,ft,Nt),J.side=tr):On(J,ft,Nt)}y=U.get(O),y.init(),w.push(y),O.traverseVisible(function(J){J.isLight&&J.layers.test(st.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights(b.physicallyCorrectLights),O.traverse(function(J){const ft=J.material;if(ft)if(Array.isArray(ft))for(let Nt=0;Nt<ft.length;Nt++){const kt=ft[Nt];mt(kt,O,J)}else mt(ft,O,J)}),w.pop(),y=null};let pt=null;function xt(O){pt&&pt(O)}function Ct(){le.stop()}function Bt(){le.start()}const le=new Uy;le.setAnimationLoop(xt),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(O){pt=O,Et.setAnimationLoop(O),O===null?le.stop():le.start()},Et.addEventListener("sessionstart",Ct),Et.addEventListener("sessionend",Bt),this.render=function(O,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(st),st=Et.getCamera()),O.isScene===!0&&O.onBeforeRender(b,O,st,D),y=U.get(O,w.length),y.init(),w.push(y),R.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),Q.setFromProjectionMatrix(R),W=this.localClippingEnabled,K=L.init(this.clippingPlanes,W,st),_=Sn.get(O,M.length),_.init(),M.push(_),Oe(O,st,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(vt,nt),K===!0&&L.beginShadows();const mt=y.state.shadowsArray;if(ct.render(mt,O,st),K===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(_,O),y.setupLights(b.physicallyCorrectLights),st.isArrayCamera){const J=st.cameras;for(let ft=0,Nt=J.length;ft<Nt;ft++){const kt=J[ft];on(_,O,kt,kt.viewport)}}else on(_,O,st);D!==null&&(Ft.updateMultisampleRenderTarget(D),Ft.updateRenderTargetMipmap(D)),O.isScene===!0&&O.onAfterRender(b,O,st),$.resetDefaultState(),z=-1,C=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,M.pop(),M.length>0?_=M[M.length-1]:_=null};function Oe(O,st,mt,J){if(O.visible===!1)return;if(O.layers.test(st.layers)){if(O.isGroup)mt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(st);else if(O.isLight)y.pushLight(O),O.castShadow&&y.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||Q.intersectsSprite(O)){J&&Y.setFromMatrixPosition(O.matrixWorld).applyMatrix4(R);const kt=Ge.update(O),Zt=O.material;Zt.visible&&_.push(O,kt,Zt,mt,Y.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(O.isSkinnedMesh&&O.skeleton.frame!==he.render.frame&&(O.skeleton.update(),O.skeleton.frame=he.render.frame),!O.frustumCulled||Q.intersectsObject(O))){J&&Y.setFromMatrixPosition(O.matrixWorld).applyMatrix4(R);const kt=Ge.update(O),Zt=O.material;if(Array.isArray(Zt)){const Kt=kt.groups;for(let pe=0,te=Kt.length;pe<te;pe++){const ee=Kt[pe],De=Zt[ee.materialIndex];De&&De.visible&&_.push(O,kt,De,mt,Y.z,ee)}}else Zt.visible&&_.push(O,kt,Zt,mt,Y.z,null)}}const Nt=O.children;for(let kt=0,Zt=Nt.length;kt<Zt;kt++)Oe(Nt[kt],st,mt,J)}function on(O,st,mt,J){const ft=O.opaque,Nt=O.transmissive,kt=O.transparent;y.setupLightsView(mt),Nt.length>0&&Oi(ft,st,mt),J&&wt.viewport(N.copy(J)),ft.length>0&&Me(ft,st,mt),Nt.length>0&&Me(Nt,st,mt),kt.length>0&&Me(kt,st,mt),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Oi(O,st,mt){const J=Tt.isWebGL2;j===null&&(j=new Hr(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")?wl:Br,minFilter:Oc,samples:J&&u===!0?4:0})),b.getDrawingBufferSize(I),J?j.setSize(I.x,I.y):j.setSize(Dc(I.x),Dc(I.y));const ft=b.getRenderTarget();b.setRenderTarget(j),b.clear();const Nt=b.toneMapping;b.toneMapping=va,Me(O,st,mt),b.toneMapping=Nt,Ft.updateMultisampleRenderTarget(j),Ft.updateRenderTargetMipmap(j),b.setRenderTarget(ft)}function Me(O,st,mt){const J=st.isScene===!0?st.overrideMaterial:null;for(let ft=0,Nt=O.length;ft<Nt;ft++){const kt=O[ft],Zt=kt.object,Kt=kt.geometry,pe=J===null?kt.material:J,te=kt.group;Zt.layers.test(mt.layers)&&Cn(Zt,st,mt,Kt,pe,te)}}function Cn(O,st,mt,J,ft,Nt){O.onBeforeRender(b,st,mt,J,ft,Nt),O.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ft.onBeforeRender(b,st,mt,J,O,Nt),ft.transparent===!0&&ft.side===tr?(ft.side=vi,ft.needsUpdate=!0,b.renderBufferDirect(mt,st,J,ft,O,Nt),ft.side=to,ft.needsUpdate=!0,b.renderBufferDirect(mt,st,J,ft,O,Nt),ft.side=tr):b.renderBufferDirect(mt,st,J,ft,O,Nt),O.onAfterRender(b,st,mt,J,ft,Nt)}function On(O,st,mt){st.isScene!==!0&&(st=ut);const J=jt.get(O),ft=y.state.lights,Nt=y.state.shadowsArray,kt=ft.state.version,Zt=de.getParameters(O,ft.state,Nt,st,mt),Kt=de.getProgramCacheKey(Zt);let pe=J.programs;J.environment=O.isMeshStandardMaterial?st.environment:null,J.fog=st.fog,J.envMap=(O.isMeshStandardMaterial?Be:Se).get(O.envMap||J.environment),pe===void 0&&(O.addEventListener("dispose",re),pe=new Map,J.programs=pe);let te=pe.get(Kt);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===kt)return po(O,Zt),te}else Zt.uniforms=de.getUniforms(O),O.onBuild(mt,Zt,b),O.onBeforeCompile(Zt,b),te=de.acquireProgram(Zt,Kt),pe.set(Kt,te),J.uniforms=Zt.uniforms;const ee=J.uniforms;(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ee.clippingPlanes=L.uniform),po(O,Zt),J.needsLights=mo(O),J.lightsStateVersion=kt,J.needsLights&&(ee.ambientLightColor.value=ft.state.ambient,ee.lightProbe.value=ft.state.probe,ee.directionalLights.value=ft.state.directional,ee.directionalLightShadows.value=ft.state.directionalShadow,ee.spotLights.value=ft.state.spot,ee.spotLightShadows.value=ft.state.spotShadow,ee.rectAreaLights.value=ft.state.rectArea,ee.ltc_1.value=ft.state.rectAreaLTC1,ee.ltc_2.value=ft.state.rectAreaLTC2,ee.pointLights.value=ft.state.point,ee.pointLightShadows.value=ft.state.pointShadow,ee.hemisphereLights.value=ft.state.hemi,ee.directionalShadowMap.value=ft.state.directionalShadowMap,ee.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,ee.spotShadowMap.value=ft.state.spotShadowMap,ee.spotLightMatrix.value=ft.state.spotLightMatrix,ee.spotLightMap.value=ft.state.spotLightMap,ee.pointShadowMap.value=ft.state.pointShadowMap,ee.pointShadowMatrix.value=ft.state.pointShadowMatrix);const De=te.getUniforms(),Un=xc.seqWithValue(De.seq,ee);return J.currentProgram=te,J.uniformsList=Un,te}function po(O,st){const mt=jt.get(O);mt.outputEncoding=st.outputEncoding,mt.instancing=st.instancing,mt.skinning=st.skinning,mt.morphTargets=st.morphTargets,mt.morphNormals=st.morphNormals,mt.morphColors=st.morphColors,mt.morphTargetsCount=st.morphTargetsCount,mt.numClippingPlanes=st.numClippingPlanes,mt.numIntersection=st.numClipIntersection,mt.vertexAlphas=st.vertexAlphas,mt.vertexTangents=st.vertexTangents,mt.toneMapping=st.toneMapping}function Rl(O,st,mt,J,ft){st.isScene!==!0&&(st=ut),Ft.resetTextureUnits();const Nt=st.fog,kt=J.isMeshStandardMaterial?st.environment:null,Zt=D===null?b.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Gr,Kt=(J.isMeshStandardMaterial?Be:Se).get(J.envMap||kt),pe=J.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,te=!!J.normalMap&&!!mt.attributes.tangent,ee=!!mt.morphAttributes.position,De=!!mt.morphAttributes.normal,Un=!!mt.morphAttributes.color,Wn=J.toneMapped?b.toneMapping:va,ai=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,dn=ai!==void 0?ai.length:0,Xt=jt.get(J),Xi=y.state.lights;if(K===!0&&(W===!0||O!==C)){const un=O===C&&J.id===z;L.setState(J,O,un)}let Pe=!1;J.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Xi.state.version||Xt.outputEncoding!==Zt||ft.isInstancedMesh&&Xt.instancing===!1||!ft.isInstancedMesh&&Xt.instancing===!0||ft.isSkinnedMesh&&Xt.skinning===!1||!ft.isSkinnedMesh&&Xt.skinning===!0||Xt.envMap!==Kt||J.fog===!0&&Xt.fog!==Nt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==L.numPlanes||Xt.numIntersection!==L.numIntersection)||Xt.vertexAlphas!==pe||Xt.vertexTangents!==te||Xt.morphTargets!==ee||Xt.morphNormals!==De||Xt.morphColors!==Un||Xt.toneMapping!==Wn||Tt.isWebGL2===!0&&Xt.morphTargetsCount!==dn)&&(Pe=!0):(Pe=!0,Xt.__version=J.version);let qe=Xt.currentProgram;Pe===!0&&(qe=On(J,st,ft));let Dn=!1,rr=!1,Wr=!1;const ln=qe.getUniforms(),Yi=Xt.uniforms;if(wt.useProgram(qe.program)&&(Dn=!0,rr=!0,Wr=!0),J.id!==z&&(z=J.id,rr=!0),Dn||C!==O){if(ln.setValue(at,"projectionMatrix",O.projectionMatrix),Tt.logarithmicDepthBuffer&&ln.setValue(at,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),C!==O&&(C=O,rr=!0,Wr=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const un=ln.map.cameraPosition;un!==void 0&&un.setValue(at,Y.setFromMatrixPosition(O.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ln.setValue(at,"isOrthographic",O.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||ft.isSkinnedMesh)&&ln.setValue(at,"viewMatrix",O.matrixWorldInverse)}if(ft.isSkinnedMesh){ln.setOptional(at,ft,"bindMatrix"),ln.setOptional(at,ft,"bindMatrixInverse");const un=ft.skeleton;un&&(Tt.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),ln.setValue(at,"boneTexture",un.boneTexture,Ft),ln.setValue(at,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ba=mt.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&Tt.isWebGL2===!0)&&St.update(ft,mt,J,qe),(rr||Xt.receiveShadow!==ft.receiveShadow)&&(Xt.receiveShadow=ft.receiveShadow,ln.setValue(at,"receiveShadow",ft.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Yi.envMap.value=Kt,Yi.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),rr&&(ln.setValue(at,"toneMappingExposure",b.toneMappingExposure),Xt.needsLights&&zl(Yi,Wr),Nt&&J.fog===!0&&bn.refreshFogUniforms(Yi,Nt),bn.refreshMaterialUniforms(Yi,J,ot,tt,j),xc.upload(at,Xt.uniformsList,Yi,Ft)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(xc.upload(at,Xt.uniformsList,Yi,Ft),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ln.setValue(at,"center",ft.center),ln.setValue(at,"modelViewMatrix",ft.modelViewMatrix),ln.setValue(at,"normalMatrix",ft.normalMatrix),ln.setValue(at,"modelMatrix",ft.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const un=J.uniformsGroups;for(let Xn=0,Nn=un.length;Xn<Nn;Xn++)if(Tt.isWebGL2){const go=un[Xn];Dt.update(go,qe),Dt.bind(go,qe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qe}function zl(O,st){O.ambientLightColor.needsUpdate=st,O.lightProbe.needsUpdate=st,O.directionalLights.needsUpdate=st,O.directionalLightShadows.needsUpdate=st,O.pointLights.needsUpdate=st,O.pointLightShadows.needsUpdate=st,O.spotLights.needsUpdate=st,O.spotLightShadows.needsUpdate=st,O.rectAreaLights.needsUpdate=st,O.hemisphereLights.needsUpdate=st}function mo(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(O,st,mt){jt.get(O.texture).__webglTexture=st,jt.get(O.depthTexture).__webglTexture=mt;const J=jt.get(O);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=mt===void 0,J.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,st){const mt=jt.get(O);mt.__webglFramebuffer=st,mt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(O,st=0,mt=0){D=O,S=st,A=mt;let J=!0,ft=null,Nt=!1,kt=!1;if(O){const Kt=jt.get(O);Kt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(36160,null),J=!1):Kt.__webglFramebuffer===void 0?Ft.setupRenderTarget(O):Kt.__hasExternalTextures&&Ft.rebindTextures(O,jt.get(O.texture).__webglTexture,jt.get(O.depthTexture).__webglTexture);const pe=O.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(kt=!0);const te=jt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(ft=te[st],Nt=!0):Tt.isWebGL2&&O.samples>0&&Ft.useMultisampledRTT(O)===!1?ft=jt.get(O).__webglMultisampledFramebuffer:ft=te,N.copy(O.viewport),H.copy(O.scissor),T=O.scissorTest}else N.copy(Z).multiplyScalar(ot).floor(),H.copy(ht).multiplyScalar(ot).floor(),T=G;if(wt.bindFramebuffer(36160,ft)&&Tt.drawBuffers&&J&&wt.drawBuffers(O,ft),wt.viewport(N),wt.scissor(H),wt.setScissorTest(T),Nt){const Kt=jt.get(O.texture);at.framebufferTexture2D(36160,36064,34069+st,Kt.__webglTexture,mt)}else if(kt){const Kt=jt.get(O.texture),pe=st||0;at.framebufferTextureLayer(36160,36064,Kt.__webglTexture,mt||0,pe)}z=-1},this.readRenderTargetPixels=function(O,st,mt,J,ft,Nt,kt){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=jt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&kt!==void 0&&(Zt=Zt[kt]),Zt){wt.bindFramebuffer(36160,Zt);try{const Kt=O.texture,pe=Kt.format,te=Kt.type;if(pe!==Li&&F.convert(pe)!==at.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ee=te===wl&&(Ot.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(te!==Br&&F.convert(te)!==at.getParameter(35738)&&!(te===Lr&&(Tt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=O.width-J&&mt>=0&&mt<=O.height-ft&&at.readPixels(st,mt,J,ft,F.convert(pe),F.convert(te),Nt)}finally{const Kt=D!==null?jt.get(D).__webglFramebuffer:null;wt.bindFramebuffer(36160,Kt)}}},this.copyFramebufferToTexture=function(O,st,mt=0){const J=Math.pow(2,-mt),ft=Math.floor(st.image.width*J),Nt=Math.floor(st.image.height*J);Ft.setTexture2D(st,0),at.copyTexSubImage2D(3553,mt,0,0,O.x,O.y,ft,Nt),wt.unbindTexture()},this.copyTextureToTexture=function(O,st,mt,J=0){const ft=st.image.width,Nt=st.image.height,kt=F.convert(mt.format),Zt=F.convert(mt.type);Ft.setTexture2D(mt,0),at.pixelStorei(37440,mt.flipY),at.pixelStorei(37441,mt.premultiplyAlpha),at.pixelStorei(3317,mt.unpackAlignment),st.isDataTexture?at.texSubImage2D(3553,J,O.x,O.y,ft,Nt,kt,Zt,st.image.data):st.isCompressedTexture?at.compressedTexSubImage2D(3553,J,O.x,O.y,st.mipmaps[0].width,st.mipmaps[0].height,kt,st.mipmaps[0].data):at.texSubImage2D(3553,J,O.x,O.y,kt,Zt,st.image),J===0&&mt.generateMipmaps&&at.generateMipmap(3553),wt.unbindTexture()},this.copyTextureToTexture3D=function(O,st,mt,J,ft=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Nt=O.max.x-O.min.x+1,kt=O.max.y-O.min.y+1,Zt=O.max.z-O.min.z+1,Kt=F.convert(J.format),pe=F.convert(J.type);let te;if(J.isData3DTexture)Ft.setTexture3D(J,0),te=32879;else if(J.isDataArrayTexture)Ft.setTexture2DArray(J,0),te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}at.pixelStorei(37440,J.flipY),at.pixelStorei(37441,J.premultiplyAlpha),at.pixelStorei(3317,J.unpackAlignment);const ee=at.getParameter(3314),De=at.getParameter(32878),Un=at.getParameter(3316),Wn=at.getParameter(3315),ai=at.getParameter(32877),dn=mt.isCompressedTexture?mt.mipmaps[0]:mt.image;at.pixelStorei(3314,dn.width),at.pixelStorei(32878,dn.height),at.pixelStorei(3316,O.min.x),at.pixelStorei(3315,O.min.y),at.pixelStorei(32877,O.min.z),mt.isDataTexture||mt.isData3DTexture?at.texSubImage3D(te,ft,st.x,st.y,st.z,Nt,kt,Zt,Kt,pe,dn.data):mt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),at.compressedTexSubImage3D(te,ft,st.x,st.y,st.z,Nt,kt,Zt,Kt,dn.data)):at.texSubImage3D(te,ft,st.x,st.y,st.z,Nt,kt,Zt,Kt,pe,dn),at.pixelStorei(3314,ee),at.pixelStorei(32878,De),at.pixelStorei(3316,Un),at.pixelStorei(3315,Wn),at.pixelStorei(32877,ai),ft===0&&J.generateMipmaps&&at.generateMipmap(te),wt.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?Ft.setTextureCube(O,0):O.isData3DTexture?Ft.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Ft.setTexture2DArray(O,0):Ft.setTexture2D(O,0),wt.unbindTexture()},this.resetState=function(){S=0,A=0,D=null,wt.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ZA extends Hy{}ZA.prototype.isWebGL1Renderer=!0;class QA extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.backgroundBlurriness=this.backgroundBlurriness),i}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Fy{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Jd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ya()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,a){t*=this.stride,a*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[a+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ya()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(i,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ya()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new k;class ki{constructor(t,i,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=a,this.normalized=l===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,a=this.data.count;i<a;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}setX(t,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=_a(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=_a(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=_a(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=_a(i,this.array)),i}setXY(t,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ce(i,this.array),a=Ce(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this}setXYZ(t,i,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ce(i,this.array),a=Ce(a,this.array),l=Ce(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,i,a,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ce(i,this.array),a=Ce(a,this.array),l=Ce(l,this.array),u=Ce(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Ri(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ki(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bc extends co{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const cl=new k,Is=new k,Vs=new k,ks=new qt,fl=new qt,Iy=new tn,uc=new k,hl=new k,cc=new k,Ov=new qt,Od=new qt,Uv=new qt;class Ud extends hn{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new ii;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Fy(i,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new ki(a,3,0,!1)),Fs.setAttribute("uv",new ki(a,2,3,!1))}this.geometry=Fs,this.material=t!==void 0?t:new bc,this.center=new qt(.5,.5)}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Iy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Vs.z);const a=this.material.rotation;let l,u;a!==0&&(u=Math.cos(a),l=Math.sin(a));const h=this.center;fc(uc.set(-.5,-.5,0),Vs,h,Is,l,u),fc(hl.set(.5,-.5,0),Vs,h,Is,l,u),fc(cc.set(.5,.5,0),Vs,h,Is,l,u),Ov.set(0,0),Od.set(1,0),Uv.set(1,1);let c=t.ray.intersectTriangle(uc,hl,cc,!1,cl);if(c===null&&(fc(hl.set(-.5,.5,0),Vs,h,Is,l,u),Od.set(0,1),c=t.ray.intersectTriangle(uc,cc,hl,!1,cl),c===null))return;const m=t.ray.origin.distanceTo(cl);m<t.near||m>t.far||i.push({distance:m,point:cl.clone(),uv:Fi.getUV(cl,uc,hl,cc,Ov,Od,Uv,new qt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fc(o,t,i,a,l,u){ks.subVectors(o,i).addScalar(.5).multiply(a),l!==void 0?(fl.x=u*ks.x-l*ks.y,fl.y=l*ks.x+u*ks.y):fl.copy(ks),o.copy(t),o.x+=fl.x,o.y+=fl.y,o.applyMatrix4(Iy)}class Vy extends co{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nv=new k,Pv=new k,Bv=new tn,Nd=new Cy,hc=new uo;class KA extends hn{constructor(t=new ii,i=new Vy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[0];for(let l=1,u=i.count;l<u;l++)Nv.fromBufferAttribute(i,l-1),Pv.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=Nv.distanceTo(Pv);t.setAttribute("lineDistance",new xn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const a=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),hc.copy(a.boundingSphere),hc.applyMatrix4(l),hc.radius+=u,t.ray.intersectsSphere(hc)===!1)return;Bv.copy(l).invert(),Nd.copy(t.ray).applyMatrix4(Bv);const c=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=c*c,p=new k,g=new k,_=new k,y=new k,M=this.isLineSegments?2:1,w=a.index,v=a.attributes.position;if(w!==null){const S=Math.max(0,h.start),A=Math.min(w.count,h.start+h.count);for(let D=S,z=A-1;D<z;D+=M){const C=w.getX(D),N=w.getX(D+1);if(p.fromBufferAttribute(v,C),g.fromBufferAttribute(v,N),Nd.distanceSqToSegment(p,g,y,_)>m)continue;y.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(y);T<t.near||T>t.far||i.push({distance:T,point:_.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let D=S,z=A-1;D<z;D+=M){if(p.fromBufferAttribute(v,D),g.fromBufferAttribute(v,D+1),Nd.distanceSqToSegment(p,g,y,_)>m)continue;y.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(y);N<t.near||N>t.far||i.push({distance:N,point:_.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const c=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}}const Gv=new k,Hv=new k;class JA extends KA{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[];for(let l=0,u=i.count;l<u;l+=2)Gv.fromBufferAttribute(i,l),Hv.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+Gv.distanceTo(Hv);t.setAttribute("lineDistance",new xn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bp extends ii{constructor(t=1,i=32,a=16,l=0,u=Math.PI*2,h=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:a,phiStart:l,phiLength:u,thetaStart:h,thetaLength:c},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const m=Math.min(h+c,Math.PI);let p=0;const g=[],_=new k,y=new k,M=[],w=[],b=[],v=[];for(let S=0;S<=a;S++){const A=[],D=S/a;let z=0;S==0&&h==0?z=.5/i:S==a&&m==Math.PI&&(z=-.5/i);for(let C=0;C<=i;C++){const N=C/i;_.x=-t*Math.cos(l+N*u)*Math.sin(h+D*c),_.y=t*Math.cos(h+D*c),_.z=t*Math.sin(l+N*u)*Math.sin(h+D*c),w.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),v.push(N+z,1-D),A.push(p++)}g.push(A)}for(let S=0;S<a;S++)for(let A=0;A<i;A++){const D=g[S][A+1],z=g[S][A],C=g[S+1][A],N=g[S+1][A+1];(S!==0||h>0)&&M.push(D,z,N),(S!==a-1||m<Math.PI)&&M.push(z,C,N)}this.setIndex(M),this.setAttribute("position",new xn(w,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(v,2))}static fromJSON(t){return new bp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $A extends ii{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],a=new Set,l=new k,u=new k;if(t.index!==null){const h=t.attributes.position,c=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:c.count,materialIndex:0}]);for(let p=0,g=m.length;p<g;++p){const _=m[p],y=_.start,M=_.count;for(let w=y,b=y+M;w<b;w+=3)for(let v=0;v<3;v++){const S=c.getX(w+v),A=c.getX(w+(v+1)%3);l.fromBufferAttribute(h,S),u.fromBufferAttribute(h,A),Fv(l,u,a)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}}else{const h=t.attributes.position;for(let c=0,m=h.count/3;c<m;c++)for(let p=0;p<3;p++){const g=3*c+p,_=3*c+(p+1)%3;l.fromBufferAttribute(h,g),u.fromBufferAttribute(h,_),Fv(l,u,a)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}this.setAttribute("position",new xn(i,3))}}}function Fv(o,t,i){const a=`${o.x},${o.y},${o.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${o.x},${o.y},${o.z}`;return i.has(a)===!0||i.has(l)===!0?!1:(i.add(a),i.add(l),!0)}const Iv={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class t2{constructor(t,i,a){const l=this;let u=!1,h=0,c=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=a,this.itemStart=function(g){c++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,c),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,c),h===c&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,y=p.length;_<y;_+=2){const M=p[_],w=p[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return w}return null}}}const e2=new t2;class ky{constructor(t){this.manager=t!==void 0?t:e2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const a=this;return new Promise(function(l,u){a.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class n2 extends ky{constructor(t){super(t)}load(t,i,a,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=Iv.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0),h;const c=El("img");function m(){g(),Iv.add(t,this),i&&i(this),u.manager.itemEnd(t)}function p(_){g(),l&&l(_),u.manager.itemError(t),u.manager.itemEnd(t)}function g(){c.removeEventListener("load",m,!1),c.removeEventListener("error",p,!1)}return c.addEventListener("load",m,!1),c.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),u.manager.itemStart(t),c.src=t,c}}class Pd extends ky{constructor(t){super(t)}load(t,i,a,l){const u=new yi,h=new n2(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(c){u.image=c,u.needsUpdate=!0,i!==void 0&&i(u)},a,l),u}}class i2 extends ii{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class np extends Fy{constructor(t,i,a=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}class Vv{constructor(t=1,i=0,a=0){return this.radius=t,this.phi=i,this.theta=a,this}set(t,i,a){return this.radius=t,this.phi=i,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,a){return this.radius=Math.sqrt(t*t+i*i+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(An(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kv=new k,dc=new k;class a2{constructor(t=new k,i=new k){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){kv.subVectors(t,this.start),dc.subVectors(this.end,this.start);const a=dc.dot(dc);let u=dc.dot(kv)/a;return i&&(u=An(u,0,1)),u}closestPointToPoint(t,i,a){const l=this.closestPointToPointParameter(t,i);return this.delta(a).multiplyScalar(l).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const pc=new k,Ie=new vp;class r2 extends JA{constructor(t){const i=new ii,a=new Vy({color:16777215,vertexColors:!0,toneMapped:!1}),l=[],u=[],h={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(w,b){m(w),m(b)}function m(w){l.push(0,0,0),u.push(0,0,0),h[w]===void 0&&(h[w]=[]),h[w].push(l.length/3-1)}i.setAttribute("position",new xn(l,3)),i.setAttribute("color",new xn(u,3)),super(i,a),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=h,this.update();const p=new fe(16755200),g=new fe(16711680),_=new fe(43775),y=new fe(16777215),M=new fe(3355443);this.setColors(p,g,_,y,M)}setColors(t,i,a,l,u){const c=this.geometry.getAttribute("color");c.setXYZ(0,t.r,t.g,t.b),c.setXYZ(1,t.r,t.g,t.b),c.setXYZ(2,t.r,t.g,t.b),c.setXYZ(3,t.r,t.g,t.b),c.setXYZ(4,t.r,t.g,t.b),c.setXYZ(5,t.r,t.g,t.b),c.setXYZ(6,t.r,t.g,t.b),c.setXYZ(7,t.r,t.g,t.b),c.setXYZ(8,t.r,t.g,t.b),c.setXYZ(9,t.r,t.g,t.b),c.setXYZ(10,t.r,t.g,t.b),c.setXYZ(11,t.r,t.g,t.b),c.setXYZ(12,t.r,t.g,t.b),c.setXYZ(13,t.r,t.g,t.b),c.setXYZ(14,t.r,t.g,t.b),c.setXYZ(15,t.r,t.g,t.b),c.setXYZ(16,t.r,t.g,t.b),c.setXYZ(17,t.r,t.g,t.b),c.setXYZ(18,t.r,t.g,t.b),c.setXYZ(19,t.r,t.g,t.b),c.setXYZ(20,t.r,t.g,t.b),c.setXYZ(21,t.r,t.g,t.b),c.setXYZ(22,t.r,t.g,t.b),c.setXYZ(23,t.r,t.g,t.b),c.setXYZ(24,i.r,i.g,i.b),c.setXYZ(25,i.r,i.g,i.b),c.setXYZ(26,i.r,i.g,i.b),c.setXYZ(27,i.r,i.g,i.b),c.setXYZ(28,i.r,i.g,i.b),c.setXYZ(29,i.r,i.g,i.b),c.setXYZ(30,i.r,i.g,i.b),c.setXYZ(31,i.r,i.g,i.b),c.setXYZ(32,a.r,a.g,a.b),c.setXYZ(33,a.r,a.g,a.b),c.setXYZ(34,a.r,a.g,a.b),c.setXYZ(35,a.r,a.g,a.b),c.setXYZ(36,a.r,a.g,a.b),c.setXYZ(37,a.r,a.g,a.b),c.setXYZ(38,l.r,l.g,l.b),c.setXYZ(39,l.r,l.g,l.b),c.setXYZ(40,u.r,u.g,u.b),c.setXYZ(41,u.r,u.g,u.b),c.setXYZ(42,u.r,u.g,u.b),c.setXYZ(43,u.r,u.g,u.b),c.setXYZ(44,u.r,u.g,u.b),c.setXYZ(45,u.r,u.g,u.b),c.setXYZ(46,u.r,u.g,u.b),c.setXYZ(47,u.r,u.g,u.b),c.setXYZ(48,u.r,u.g,u.b),c.setXYZ(49,u.r,u.g,u.b),c.needsUpdate=!0}update(){const t=this.geometry,i=this.pointMap,a=1,l=1;Ie.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Xe("c",i,t,Ie,0,0,-1),Xe("t",i,t,Ie,0,0,1),Xe("n1",i,t,Ie,-a,-l,-1),Xe("n2",i,t,Ie,a,-l,-1),Xe("n3",i,t,Ie,-a,l,-1),Xe("n4",i,t,Ie,a,l,-1),Xe("f1",i,t,Ie,-a,-l,1),Xe("f2",i,t,Ie,a,-l,1),Xe("f3",i,t,Ie,-a,l,1),Xe("f4",i,t,Ie,a,l,1),Xe("u1",i,t,Ie,a*.7,l*1.1,-1),Xe("u2",i,t,Ie,-a*.7,l*1.1,-1),Xe("u3",i,t,Ie,0,l*2,-1),Xe("cf1",i,t,Ie,-a,0,1),Xe("cf2",i,t,Ie,a,0,1),Xe("cf3",i,t,Ie,0,-l,1),Xe("cf4",i,t,Ie,0,l,1),Xe("cn1",i,t,Ie,-a,0,-1),Xe("cn2",i,t,Ie,a,0,-1),Xe("cn3",i,t,Ie,0,-l,-1),Xe("cn4",i,t,Ie,0,l,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Xe(o,t,i,a,l,u,h){pc.set(l,u,h).unproject(a);const c=t[o];if(c!==void 0){const m=i.getAttribute("position");for(let p=0,g=c.length;p<g;p++)m.setXYZ(c[p],pc.x,pc.y,pc.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Wi{constructor(t,i,a,l,u="div"){this.parent=t,this.object=i,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(u),this.domElement.classList.add("controller"),this.domElement.classList.add(l),this.$name=document.createElement("div"),this.$name.classList.add("name"),Wi.nextNameID=Wi.nextNameID||0,this.$name.id=`lil-gui-name-${++Wi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class s2 extends Wi{constructor(t,i,a){super(t,i,a,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ip(o){let t,i;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const o2={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:ip,toHexString:ip},Al={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},l2={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,t,i=1){const a=Al.fromHexString(o);t[0]=(a>>16&255)/255*i,t[1]=(a>>8&255)/255*i,t[2]=(a&255)/255*i},toHexString([o,t,i],a=1){a=255/a;const l=o*a<<16^t*a<<8^i*a<<0;return Al.toHexString(l)}},u2={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,i=1){const a=Al.fromHexString(o);t.r=(a>>16&255)/255*i,t.g=(a>>8&255)/255*i,t.b=(a&255)/255*i},toHexString({r:o,g:t,b:i},a=1){a=255/a;const l=o*a<<16^t*a<<8^i*a<<0;return Al.toHexString(l)}},c2=[o2,Al,l2,u2];function f2(o){return c2.find(t=>t.match(o))}class h2 extends Wi{constructor(t,i,a,l){super(t,i,a,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=f2(this.initialValue),this._rgbScale=l,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=ip(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Bd extends Wi{constructor(t,i,a){super(t,i,a,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",l=>{l.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class d2 extends Wi{constructor(t,i,a,l,u,h){super(t,i,a,"number"),this._initInput(),this.min(l),this.max(u);const c=h!==void 0;this.step(c?h:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let A=parseFloat(this.$input.value);isNaN(A)||(this._stepExplicit&&(A=this._snap(A)),this.setValue(this._clamp(A)))},a=A=>{const D=parseFloat(this.$input.value);isNaN(D)||(this._snapClampSetValue(D+A),this.$input.value=this.getValue())},l=A=>{A.key==="Enter"&&this.$input.blur(),A.code==="ArrowUp"&&(A.preventDefault(),a(this._step*this._arrowKeyMultiplier(A))),A.code==="ArrowDown"&&(A.preventDefault(),a(this._step*this._arrowKeyMultiplier(A)*-1))},u=A=>{this._inputFocused&&(A.preventDefault(),a(this._step*this._normalizeMouseWheel(A)))};let h=!1,c,m,p,g,_;const y=5,M=A=>{c=A.clientX,m=p=A.clientY,h=!0,g=this.getValue(),_=0,window.addEventListener("mousemove",w),window.addEventListener("mouseup",b)},w=A=>{if(h){const D=A.clientX-c,z=A.clientY-m;Math.abs(z)>y?(A.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(D)>y&&b()}if(!h){const D=A.clientY-p;_-=D*this._step*this._arrowKeyMultiplier(A),g+_>this._max?_=this._max-g:g+_<this._min&&(_=this._min-g),this._snapClampSetValue(g+_)}p=A.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",b)},v=()=>{this._inputFocused=!0},S=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",l),this.$input.addEventListener("wheel",u,{passive:!1}),this.$input.addEventListener("mousedown",M),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",S)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(S,A,D,z,C)=>(S-A)/(D-A)*(C-z)+z,i=S=>{const A=this.$slider.getBoundingClientRect();let D=t(S,A.left,A.right,this._min,this._max);this._snapClampSetValue(D)},a=S=>{this._setDraggingStyle(!0),i(S.clientX),window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)},l=S=>{i(S.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};let h=!1,c,m;const p=S=>{S.preventDefault(),this._setDraggingStyle(!0),i(S.touches[0].clientX),h=!1},g=S=>{S.touches.length>1||(this._hasScrollBar?(c=S.touches[0].clientX,m=S.touches[0].clientY,h=!0):p(S),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",y))},_=S=>{if(h){const A=S.touches[0].clientX-c,D=S.touches[0].clientY-m;Math.abs(A)>Math.abs(D)?p(S):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",y))}else S.preventDefault(),i(S.touches[0].clientX)},y=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",y)},M=this._callOnFinishChange.bind(this),w=400;let b;const v=S=>{if(Math.abs(S.deltaX)<Math.abs(S.deltaY)&&this._hasScrollBar)return;S.preventDefault();const D=this._normalizeMouseWheel(S)*this._step;this._snapClampSetValue(this.getValue()+D),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(M,w)};this.$slider.addEventListener("mousedown",a),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:a}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,a=-t.wheelDelta/120,a*=this._stepExplicit?1:10),i+-a}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class p2 extends Wi{constructor(t,i,a,l){super(t,i,a,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(l)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const a=document.createElement("option");a.textContent=i,this.$select.appendChild(a)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class m2 extends Wi{constructor(t,i,a){super(t,i,a,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var g2=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function _2(o){const t=document.createElement("style");t.innerHTML=o;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let Wv=!1;class Sp{constructor({parent:t,autoPlace:i=t===void 0,container:a,width:l,title:u="Controls",closeFolders:h=!1,injectStyles:c=!0,touchStyles:m=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),m&&this.domElement.classList.add("allow-touch-styles"),!Wv&&c&&(_2(g2),Wv=!0),a?a.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),l&&this.domElement.style.setProperty("--width",l+"px"),this._closeFolders=h}add(t,i,a,l,u){if(Object(a)===a)return new p2(this,t,i,a);const h=t[i];switch(typeof h){case"number":return new d2(this,t,i,a,l,u);case"boolean":return new s2(this,t,i);case"string":return new m2(this,t,i);case"function":return new Bd(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,h)}addColor(t,i,a=1){return new h2(this,t,i,a)}addFolder(t){const i=new Sp({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(a=>{a instanceof Bd||a._name in t.controllers&&a.load(t.controllers[a._name])}),i&&t.folders&&this.folders.forEach(a=>{a._title in t.folders&&a.load(t.folders[a._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof Bd)){if(a._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);i.controllers[a._name]=a.save()}}),t&&this.folders.forEach(a=>{if(a._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);i.folders[a._title]=a.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const a=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const l=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=l+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(a=>a.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}var Ks=function(){var o=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(g){g.preventDefault(),a(++o%t.children.length)},!1);function i(g){return t.appendChild(g.dom),g}function a(g){for(var _=0;_<t.children.length;_++)t.children[_].style.display=_===g?"block":"none";o=g}var l=(performance||Date).now(),u=l,h=0,c=i(new Ks.Panel("FPS","#0ff","#002")),m=i(new Ks.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=i(new Ks.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:t,addPanel:i,showPanel:a,begin:function(){l=(performance||Date).now()},end:function(){h++;var g=(performance||Date).now();if(m.update(g-l,200),g>=u+1e3&&(c.update(h*1e3/(g-u),100),u=g,h=0,p)){var _=performance.memory;p.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return g},update:function(){l=this.end()},domElement:t,setMode:a}};Ks.Panel=function(o,t,i){var a=1/0,l=0,u=Math.round,h=u(window.devicePixelRatio||1),c=80*h,m=48*h,p=3*h,g=2*h,_=3*h,y=15*h,M=74*h,w=30*h,b=document.createElement("canvas");b.width=c,b.height=m,b.style.cssText="width:80px;height:48px";var v=b.getContext("2d");return v.font="bold "+9*h+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,c,m),v.fillStyle=t,v.fillText(o,p,g),v.fillRect(_,y,M,w),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(_,y,M,w),{dom:b,update:function(S,A){a=Math.min(a,S),l=Math.max(l,S),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,c,y),v.fillStyle=t,v.fillText(u(S)+" "+o+" ("+u(a)+"-"+u(l)+")",p,g),v.drawImage(b,_+h,y,M-h,w,_,y,M-h,w),v.fillRect(_+M-h,y,h,w),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(_+M-h,y,h,u((1-S/A)*w))}}};class v2 extends Ks.Panel{constructor(t,i="GPU MS"){super(i,"#f90","#210");let a=!0,l=t.getExtension("EXT_disjoint_timer_query_webgl2");l===null&&(a=!1,l=t.getExtension("EXT_disjoint_timer_query"),l===null&&console.warn("GPUStatsPanel: disjoint_time_query extension not available.")),this.context=t,this.extension=l,this.maxTime=30,this.activeQueries=0,this.startQuery=function(){const u=this.context,h=this.extension;if(h===null)return;let c;a?(c=u.createQuery(),u.beginQuery(h.TIME_ELAPSED_EXT,c)):(c=h.createQueryEXT(),h.beginQueryEXT(h.TIME_ELAPSED_EXT,c)),this.activeQueries++;const m=()=>{let p,g,_;a?(p=u.getQueryParameter(c,u.QUERY_RESULT_AVAILABLE),g=u.getParameter(h.GPU_DISJOINT_EXT),_=u.getQueryParameter(c,u.QUERY_RESULT)):(p=h.getQueryObjectEXT(c,h.QUERY_RESULT_AVAILABLE_EXT),g=u.getParameter(h.GPU_DISJOINT_EXT),_=h.getQueryObjectEXT(c,h.QUERY_RESULT_EXT));const y=_*1e-6;p?(g||this.update(y,this.maxTime),this.activeQueries--):u.isContextLost()===!1&&requestAnimationFrame(m)};requestAnimationFrame(m)},this.endQuery=function(){const u=this.extension,h=this.context;u!==null&&(a?h.endQuery(u.TIME_ELAPSED_EXT):u.endQueryEXT(u.TIME_ELAPSED_EXT))}}}const Xv={type:"change"},Gd={type:"start"},Yv={type:"end"};class y2 extends Vr{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",Sn),this._domElementKeyEvents=F},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(Xv),a.update(),u=l.NONE},this.update=(function(){const F=new k,$=new Fr().setFromUnitVectors(t.up,new k(0,1,0)),Dt=$.clone().invert(),zt=new k,Et=new Fr,Lt=2*Math.PI;return function(){const Wt=a.object.position;F.copy(Wt).sub(a.target),F.applyQuaternion($),c.setFromVector3(F),a.autoRotate&&u===l.NONE&&B(H()),a.enableDamping?(c.theta+=m.theta*a.dampingFactor,c.phi+=m.phi*a.dampingFactor):(c.theta+=m.theta,c.phi+=m.phi);let re=a.minAzimuthAngle,ye=a.maxAzimuthAngle;return isFinite(re)&&isFinite(ye)&&(re<-Math.PI?re+=Lt:re>Math.PI&&(re-=Lt),ye<-Math.PI?ye+=Lt:ye>Math.PI&&(ye-=Lt),re<=ye?c.theta=Math.max(re,Math.min(ye,c.theta)):c.theta=c.theta>(re+ye)/2?Math.max(re,c.theta):Math.min(ye,c.theta)),c.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=p,c.radius=Math.max(a.minDistance,Math.min(a.maxDistance,c.radius)),a.enableDamping===!0?a.target.addScaledVector(g,a.dampingFactor):a.target.add(g),F.setFromSpherical(c),F.applyQuaternion(Dt),Wt.copy(a.target).add(F),a.object.lookAt(a.target),a.enableDamping===!0?(m.theta*=1-a.dampingFactor,m.phi*=1-a.dampingFactor,g.multiplyScalar(1-a.dampingFactor)):(m.set(0,0,0),g.set(0,0,0)),p=1,_||zt.distanceToSquared(a.object.position)>h||8*(1-Et.dot(a.object.quaternion))>h?(a.dispatchEvent(Xv),zt.copy(a.object.position),Et.copy(a.object.quaternion),_=!1,!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",ct),a.domElement.removeEventListener("pointerdown",Se),a.domElement.removeEventListener("pointercancel",Tn),a.domElement.removeEventListener("wheel",bn),a.domElement.removeEventListener("pointermove",Be),a.domElement.removeEventListener("pointerup",Ne),a._domElementKeyEvents!==null&&a._domElementKeyEvents.removeEventListener("keydown",Sn)};const a=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,c=new Vv,m=new Vv;let p=1;const g=new k;let _=!1;const y=new qt,M=new qt,w=new qt,b=new qt,v=new qt,S=new qt,A=new qt,D=new qt,z=new qt,C=[],N={};function H(){return 2*Math.PI/60/60*a.autoRotateSpeed}function T(){return Math.pow(.95,a.zoomSpeed)}function B(F){m.theta-=F}function tt(F){m.phi-=F}const ot=(function(){const F=new k;return function(Dt,zt){F.setFromMatrixColumn(zt,0),F.multiplyScalar(-Dt),g.add(F)}})(),vt=(function(){const F=new k;return function(Dt,zt){a.screenSpacePanning===!0?F.setFromMatrixColumn(zt,1):(F.setFromMatrixColumn(zt,0),F.crossVectors(a.object.up,F)),F.multiplyScalar(Dt),g.add(F)}})(),nt=(function(){const F=new k;return function(Dt,zt){const Et=a.domElement;if(a.object.isPerspectiveCamera){const Lt=a.object.position;F.copy(Lt).sub(a.target);let Ut=F.length();Ut*=Math.tan(a.object.fov/2*Math.PI/180),ot(2*Dt*Ut/Et.clientHeight,a.object.matrix),vt(2*zt*Ut/Et.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(ot(Dt*(a.object.right-a.object.left)/a.object.zoom/Et.clientWidth,a.object.matrix),vt(zt*(a.object.top-a.object.bottom)/a.object.zoom/Et.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function Z(F){a.object.isPerspectiveCamera?p/=F:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom*F)),a.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function ht(F){a.object.isPerspectiveCamera?p*=F:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/F)),a.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function G(F){y.set(F.clientX,F.clientY)}function Q(F){A.set(F.clientX,F.clientY)}function K(F){b.set(F.clientX,F.clientY)}function W(F){M.set(F.clientX,F.clientY),w.subVectors(M,y).multiplyScalar(a.rotateSpeed);const $=a.domElement;B(2*Math.PI*w.x/$.clientHeight),tt(2*Math.PI*w.y/$.clientHeight),y.copy(M),a.update()}function j(F){D.set(F.clientX,F.clientY),z.subVectors(D,A),z.y>0?Z(T()):z.y<0&&ht(T()),A.copy(D),a.update()}function R(F){v.set(F.clientX,F.clientY),S.subVectors(v,b).multiplyScalar(a.panSpeed),nt(S.x,S.y),b.copy(v),a.update()}function I(F){F.deltaY<0?ht(T()):F.deltaY>0&&Z(T()),a.update()}function Y(F){let $=!1;switch(F.code){case a.keys.UP:nt(0,a.keyPanSpeed),$=!0;break;case a.keys.BOTTOM:nt(0,-a.keyPanSpeed),$=!0;break;case a.keys.LEFT:nt(a.keyPanSpeed,0),$=!0;break;case a.keys.RIGHT:nt(-a.keyPanSpeed,0),$=!0;break}$&&(F.preventDefault(),a.update())}function ut(){if(C.length===1)y.set(C[0].pageX,C[0].pageY);else{const F=.5*(C[0].pageX+C[1].pageX),$=.5*(C[0].pageY+C[1].pageY);y.set(F,$)}}function yt(){if(C.length===1)b.set(C[0].pageX,C[0].pageY);else{const F=.5*(C[0].pageX+C[1].pageX),$=.5*(C[0].pageY+C[1].pageY);b.set(F,$)}}function at(){const F=C[0].pageX-C[1].pageX,$=C[0].pageY-C[1].pageY,Dt=Math.sqrt(F*F+$*$);A.set(0,Dt)}function Rt(){a.enableZoom&&at(),a.enablePan&&yt()}function Ot(){a.enableZoom&&at(),a.enableRotate&&ut()}function Tt(F){if(C.length==1)M.set(F.pageX,F.pageY);else{const Dt=It(F),zt=.5*(F.pageX+Dt.x),Et=.5*(F.pageY+Dt.y);M.set(zt,Et)}w.subVectors(M,y).multiplyScalar(a.rotateSpeed);const $=a.domElement;B(2*Math.PI*w.x/$.clientHeight),tt(2*Math.PI*w.y/$.clientHeight),y.copy(M)}function wt(F){if(C.length===1)v.set(F.pageX,F.pageY);else{const $=It(F),Dt=.5*(F.pageX+$.x),zt=.5*(F.pageY+$.y);v.set(Dt,zt)}S.subVectors(v,b).multiplyScalar(a.panSpeed),nt(S.x,S.y),b.copy(v)}function he(F){const $=It(F),Dt=F.pageX-$.x,zt=F.pageY-$.y,Et=Math.sqrt(Dt*Dt+zt*zt);D.set(0,Et),z.set(0,Math.pow(D.y/A.y,a.zoomSpeed)),Z(z.y),A.copy(D)}function jt(F){a.enableZoom&&he(F),a.enablePan&&wt(F)}function Ft(F){a.enableZoom&&he(F),a.enableRotate&&Tt(F)}function Se(F){a.enabled!==!1&&(C.length===0&&(a.domElement.setPointerCapture(F.pointerId),a.domElement.addEventListener("pointermove",Be),a.domElement.addEventListener("pointerup",Ne)),bt(F),F.pointerType==="touch"?U(F):Ge(F))}function Be(F){a.enabled!==!1&&(F.pointerType==="touch"?L(F):de(F))}function Ne(F){St(F),C.length===0&&(a.domElement.releasePointerCapture(F.pointerId),a.domElement.removeEventListener("pointermove",Be),a.domElement.removeEventListener("pointerup",Ne)),a.dispatchEvent(Yv),u=l.NONE}function Tn(F){St(F)}function Ge(F){let $;switch(F.button){case 0:$=a.mouseButtons.LEFT;break;case 1:$=a.mouseButtons.MIDDLE;break;case 2:$=a.mouseButtons.RIGHT;break;default:$=-1}switch($){case ws.DOLLY:if(a.enableZoom===!1)return;Q(F),u=l.DOLLY;break;case ws.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(a.enablePan===!1)return;K(F),u=l.PAN}else{if(a.enableRotate===!1)return;G(F),u=l.ROTATE}break;case ws.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(a.enableRotate===!1)return;G(F),u=l.ROTATE}else{if(a.enablePan===!1)return;K(F),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&a.dispatchEvent(Gd)}function de(F){switch(u){case l.ROTATE:if(a.enableRotate===!1)return;W(F);break;case l.DOLLY:if(a.enableZoom===!1)return;j(F);break;case l.PAN:if(a.enablePan===!1)return;R(F);break}}function bn(F){a.enabled===!1||a.enableZoom===!1||u!==l.NONE||(F.preventDefault(),a.dispatchEvent(Gd),I(F),a.dispatchEvent(Yv))}function Sn(F){a.enabled===!1||a.enablePan===!1||Y(F)}function U(F){switch(At(F),C.length){case 1:switch(a.touches.ONE){case Es.ROTATE:if(a.enableRotate===!1)return;ut(),u=l.TOUCH_ROTATE;break;case Es.PAN:if(a.enablePan===!1)return;yt(),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(a.touches.TWO){case Es.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;Rt(),u=l.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Ot(),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&a.dispatchEvent(Gd)}function L(F){switch(At(F),u){case l.TOUCH_ROTATE:if(a.enableRotate===!1)return;Tt(F),a.update();break;case l.TOUCH_PAN:if(a.enablePan===!1)return;wt(F),a.update();break;case l.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;jt(F),a.update();break;case l.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Ft(F),a.update();break;default:u=l.NONE}}function ct(F){a.enabled!==!1&&F.preventDefault()}function bt(F){C.push(F)}function St(F){delete N[F.pointerId];for(let $=0;$<C.length;$++)if(C[$].pointerId==F.pointerId){C.splice($,1);return}}function At(F){let $=N[F.pointerId];$===void 0&&($=new qt,N[F.pointerId]=$),$.set(F.pageX,F.pageY)}function It(F){const $=F.pointerId===C[0].pointerId?C[1]:C[0];return N[$.pointerId]}a.domElement.addEventListener("contextmenu",ct),a.domElement.addEventListener("pointerdown",Se),a.domElement.addEventListener("pointercancel",Tn),a.domElement.addEventListener("wheel",bn,{passive:!1}),this.update()}}const qv=new ar,mc=new k;class Wy extends i2{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new xn(t,3)),this.setAttribute("uv",new xn(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,a=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),a.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const a=new np(i,6,1);return this.setAttribute("instanceStart",new ki(a,3,0)),this.setAttribute("instanceEnd",new ki(a,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const a=new np(i,6,1);return this.setAttribute("instanceColorStart",new ki(a,3,0)),this.setAttribute("instanceColorEnd",new ki(a,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new $A(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),qv.setFromBufferAttribute(i),this.boundingBox.union(qv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let l=0;for(let u=0,h=t.count;u<h;u++)mc.fromBufferAttribute(t,u),l=Math.max(l,a.distanceToSquared(mc)),mc.fromBufferAttribute(i,u),l=Math.max(l,a.distanceToSquared(mc));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Mt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new qt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};kn.line={uniforms:_p.merge([Mt.common,Mt.fog,Mt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class kr extends ir{constructor(t){super({type:"LineMaterial",uniforms:_p.clone(kn.line.uniforms),vertexShader:kn.line.vertexShader,fragmentShader:kn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(i){this.uniforms.diffuse.value=i}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(i){i===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(i){this.uniforms.linewidth.value=i}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(i){!!i!="USE_DASH"in this.defines&&(this.needsUpdate=!0),i===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(i){this.uniforms.dashScale.value=i}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(i){this.uniforms.dashSize.value=i}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(i){this.uniforms.dashOffset.value=i}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(i){this.uniforms.gapSize.value=i}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(i){this.uniforms.opacity.value=i}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(i){this.uniforms.resolution.value.copy(i)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(i){!!i!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),i===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const jv=new k,Zv=new k,vn=new Ye,yn=new Ye,Gi=new Ye,Hd=new k,Fd=new tn,En=new a2,Qv=new k,gc=new ar,_c=new uo,Hi=new Ye;let Ii,ap,Xy,Ur;function Kv(o,t,i){return Hi.set(0,0,-t,1).applyMatrix4(o.projectionMatrix),Hi.multiplyScalar(1/Hi.w),Hi.x=Ur/i.width,Hi.y=Ur/i.height,Hi.applyMatrix4(o.projectionMatrixInverse),Hi.multiplyScalar(1/Hi.w),Math.abs(Math.max(Hi.x,Hi.y))}function x2(o,t){for(let i=0,a=ap.count;i<a;i++){En.start.fromBufferAttribute(ap,i),En.end.fromBufferAttribute(Xy,i);const l=new k,u=new k;Ii.distanceSqToSegment(En.start,En.end,u,l),u.distanceTo(l)<Ur*.5&&t.push({point:u,pointOnLine:l,distance:Ii.origin.distanceTo(u),object:o,face:null,faceIndex:i,uv:null,uv2:null})}}function b2(o,t,i){const a=t.projectionMatrix,u=o.material.resolution,h=o.matrixWorld,c=o.geometry,m=c.attributes.instanceStart,p=c.attributes.instanceEnd,g=-t.near;Ii.at(1,Gi),Gi.w=1,Gi.applyMatrix4(t.matrixWorldInverse),Gi.applyMatrix4(a),Gi.multiplyScalar(1/Gi.w),Gi.x*=u.x/2,Gi.y*=u.y/2,Gi.z=0,Hd.copy(Gi),Fd.multiplyMatrices(t.matrixWorldInverse,h);for(let _=0,y=m.count;_<y;_++){if(vn.fromBufferAttribute(m,_),yn.fromBufferAttribute(p,_),vn.w=1,yn.w=1,vn.applyMatrix4(Fd),yn.applyMatrix4(Fd),vn.z>g&&yn.z>g)continue;if(vn.z>g){const A=vn.z-yn.z,D=(vn.z-g)/A;vn.lerp(yn,D)}else if(yn.z>g){const A=yn.z-vn.z,D=(yn.z-g)/A;yn.lerp(vn,D)}vn.applyMatrix4(a),yn.applyMatrix4(a),vn.multiplyScalar(1/vn.w),yn.multiplyScalar(1/yn.w),vn.x*=u.x/2,vn.y*=u.y/2,yn.x*=u.x/2,yn.y*=u.y/2,En.start.copy(vn),En.start.z=0,En.end.copy(yn),En.end.z=0;const w=En.closestPointToPointParameter(Hd,!0);En.at(w,Qv);const b=Q1.lerp(vn.z,yn.z,w),v=b>=-1&&b<=1,S=Hd.distanceTo(Qv)<Ur*.5;if(v&&S){En.start.fromBufferAttribute(m,_),En.end.fromBufferAttribute(p,_),En.start.applyMatrix4(h),En.end.applyMatrix4(h);const A=new k,D=new k;Ii.distanceSqToSegment(En.start,En.end,D,A),i.push({point:D,pointOnLine:A,distance:Ii.origin.distanceTo(D),object:o,face:null,faceIndex:_,uv:null,uv2:null})}}}class S2 extends Vi{constructor(t=new Wy,i=new kr({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,a=t.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let h=0,c=0,m=i.count;h<m;h++,c+=2)jv.fromBufferAttribute(i,h),Zv.fromBufferAttribute(a,h),l[c]=c===0?0:l[c-1],l[c+1]=l[c]+jv.distanceTo(Zv);const u=new np(l,2,1);return t.setAttribute("instanceDistanceStart",new ki(u,1,0)),t.setAttribute("instanceDistanceEnd",new ki(u,1,1)),this}raycast(t,i){const a=this.material.worldUnits,l=t.camera;l===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const u=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ii=t.ray;const h=this.matrixWorld,c=this.geometry,m=this.material;Ur=m.linewidth+u,ap=c.attributes.instanceStart,Xy=c.attributes.instanceEnd,c.boundingSphere===null&&c.computeBoundingSphere(),_c.copy(c.boundingSphere).applyMatrix4(h);let p;if(a)p=Ur*.5;else{const _=Math.max(l.near,_c.distanceToPoint(Ii.origin));p=Kv(l,_,m.resolution)}if(_c.radius+=p,Ii.intersectsSphere(_c)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),gc.copy(c.boundingBox).applyMatrix4(h);let g;if(a)g=Ur*.5;else{const _=Math.max(l.near,gc.distanceToPoint(Ii.origin));g=Kv(l,_,m.resolution)}gc.expandByScalar(g),Ii.intersectsBox(gc)!==!1&&(a?x2(this,i):b2(this,l,i))}}class Js extends Wy{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,a=new Float32Array(2*i);for(let l=0;l<i;l+=3)a[2*l]=t[l],a[2*l+1]=t[l+1],a[2*l+2]=t[l+2],a[2*l+3]=t[l+3],a[2*l+4]=t[l+4],a[2*l+5]=t[l+5];return super.setPositions(a),this}setColors(t){const i=t.length-3,a=new Float32Array(2*i);for(let l=0;l<i;l+=3)a[2*l]=t[l],a[2*l+1]=t[l+1],a[2*l+2]=t[l+2],a[2*l+3]=t[l+3],a[2*l+4]=t[l+4],a[2*l+5]=t[l+5];return super.setColors(a),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class bl extends S2{constructor(t=new Js,i=new kr({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}var Sc={exports:{}},M2=Sc.exports,Jv;function w2(){return Jv||(Jv=1,(function(o){(function(t,i){o.exports?o.exports=i():t.log=i()})(M2,function(){var t=function(){},i="undefined",a=typeof window!==i&&typeof window.navigator!==i&&/Trident\/|MSIE /.test(window.navigator.userAgent),l=["trace","debug","info","warn","error"],u={},h=null;function c(b,v){var S=b[v];if(typeof S.bind=="function")return S.bind(b);try{return Function.prototype.bind.call(S,b)}catch{return function(){return Function.prototype.apply.apply(S,[b,arguments])}}}function m(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function p(b){return b==="debug"&&(b="log"),typeof console===i?!1:b==="trace"&&a?m:console[b]!==void 0?c(console,b):console.log!==void 0?c(console,"log"):t}function g(){for(var b=this.getLevel(),v=0;v<l.length;v++){var S=l[v];this[S]=v<b?t:this.methodFactory(S,b,this.name)}if(this.log=this.debug,typeof console===i&&b<this.levels.SILENT)return"No console available for logging"}function _(b){return function(){typeof console!==i&&(g.call(this),this[b].apply(this,arguments))}}function y(b,v,S){return p(b)||_.apply(this,arguments)}function M(b,v){var S=this,A,D,z,C="loglevel";typeof b=="string"?C+=":"+b:typeof b=="symbol"&&(C=void 0);function N(ot){var vt=(l[ot]||"silent").toUpperCase();if(!(typeof window===i||!C)){try{window.localStorage[C]=vt;return}catch{}try{window.document.cookie=encodeURIComponent(C)+"="+vt+";"}catch{}}}function H(){var ot;if(!(typeof window===i||!C)){try{ot=window.localStorage[C]}catch{}if(typeof ot===i)try{var vt=window.document.cookie,nt=encodeURIComponent(C),Z=vt.indexOf(nt+"=");Z!==-1&&(ot=/^([^;]+)/.exec(vt.slice(Z+nt.length+1))[1])}catch{}return S.levels[ot]===void 0&&(ot=void 0),ot}}function T(){if(!(typeof window===i||!C)){try{window.localStorage.removeItem(C)}catch{}try{window.document.cookie=encodeURIComponent(C)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function B(ot){var vt=ot;if(typeof vt=="string"&&S.levels[vt.toUpperCase()]!==void 0&&(vt=S.levels[vt.toUpperCase()]),typeof vt=="number"&&vt>=0&&vt<=S.levels.SILENT)return vt;throw new TypeError("log.setLevel() called with invalid level: "+ot)}S.name=b,S.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},S.methodFactory=v||y,S.getLevel=function(){return z??D??A},S.setLevel=function(ot,vt){return z=B(ot),vt!==!1&&N(z),g.call(S)},S.setDefaultLevel=function(ot){D=B(ot),H()||S.setLevel(ot,!1)},S.resetLevel=function(){z=null,T(),g.call(S)},S.enableAll=function(ot){S.setLevel(S.levels.TRACE,ot)},S.disableAll=function(ot){S.setLevel(S.levels.SILENT,ot)},S.rebuild=function(){if(h!==S&&(A=B(h.getLevel())),g.call(S),h===S)for(var ot in u)u[ot].rebuild()},A=B(h?h.getLevel():"WARN");var tt=H();tt!=null&&(z=B(tt)),g.call(S)}h=new M,h.getLogger=function(v){if(typeof v!="symbol"&&typeof v!="string"||v==="")throw new TypeError("You must supply a name when creating a logger.");var S=u[v];return S||(S=u[v]=new M(v,h.methodFactory)),S};var w=typeof window!==i?window.log:void 0;return h.noConflict=function(){return typeof window!==i&&window.log===h&&(window.log=w),h},h.getLoggers=function(){return u},h.default=h,h})})(Sc)),Sc.exports}var Mp=w2();const $v="/dmp-js/assets/X-sprite-e6X39Jyk.png",ty="/dmp-js/assets/Y-sprite-pu68vFFI.png",ey="/dmp-js/assets/Z-sprite-B0BzGVvQ.png",mi=Mp.getLogger("axes");mi.setLevel("debug");class xa{constructor(){this.axisLength=50,this.axisThickness=.0012,this.xColor=new fe().setHex(16711680),this.yColor=new fe().setHex(65280),this.zColor=new fe().setHex(2105599),this.ticksEvery=10,this.tickLength=.4,this.tickThickness=.0012}}function wp(o,t){const i=new Js;i.setPositions(o);const a=new bl(i,t);return a.computeLineDistances(),a.scale.set(1,1,1),a}function E2(o=new xa){const t=[];t.push(-o.axisLength,0,0),t.push(0,0,0),t.push(o.axisLength,0,0);const i=new kr({color:o.xColor,linewidth:o.axisThickness,vertexColors:!1,dashed:!1,alphaToCoverage:!0});return wp(t,i)}function A2(o=new xa){const t=[];t.push(0,-o.axisLength,0),t.push(0,0,0),t.push(0,o.axisLength,0);const i=new kr({color:o.yColor,linewidth:o.axisThickness,vertexColors:!1,dashed:!1,alphaToCoverage:!0});return wp(t,i)}function T2(o=new xa){const t=[];t.push(0,0,-o.axisLength),t.push(0,0,0),t.push(0,0,o.axisLength);const i=new kr({color:o.zColor,linewidth:o.axisThickness,vertexColors:!1,dashed:!1,alphaToCoverage:!0});return wp(t,i)}function ro(o,t,i){const a=new kr({color:t,linewidth:i,vertexColors:!1,dashed:!1,alphaToCoverage:!0}),l=new Js;l.setPositions(o);const u=new bl(l,a);return u.computeLineDistances(),u.scale.set(1,1,1),u}function C2(o=new xa){const t=[],i=Math.floor(o.axisLength/o.ticksEvery);if(i<1)return mi.info("No ticks to mark"),t;mi.info(`Number of ticks: ${i}`);const a=o.axisThickness+o.tickLength*2;for(let l=-i;l<=i;l++)if(l!==0){{const u=[];u.push(o.ticksEvery*l,-a,0),u.push(o.ticksEvery*l,a,0),t.push(ro(u,o.xColor,o.tickThickness))}{const u=[];u.push(o.ticksEvery*l,0,-a),u.push(o.ticksEvery*l,0,a),t.push(ro(u,o.xColor,o.tickThickness))}}return t}function D2(o=new xa){const t=[],i=Math.floor(o.axisLength/o.ticksEvery);if(i<1)return t;const a=o.axisThickness+o.tickLength*2;for(let l=-i;l<=i;l++)if(l!==0){{const u=[];u.push(-a,o.ticksEvery*l,0),u.push(a,o.ticksEvery*l,0),t.push(ro(u,o.yColor,o.tickThickness))}{const u=[];u.push(0,o.ticksEvery*l,-a),u.push(0,o.ticksEvery*l,a),t.push(ro(u,o.yColor,o.tickThickness))}}return t}function L2(o=new xa){const t=[],i=Math.floor(o.axisLength/o.ticksEvery);if(i<1)return t;const a=o.axisThickness+o.tickLength*2;for(let l=-i;l<=i;l++)if(l!==0){{const u=[];u.push(-a,0,o.ticksEvery*l),u.push(a,0,o.ticksEvery*l),t.push(ro(u,o.zColor,o.tickThickness))}{const u=[];u.push(0,-a,o.ticksEvery*l),u.push(0,a,o.ticksEvery*l),t.push(ro(u,o.zColor,o.tickThickness))}}return t}function R2(o=new xa){mi.debug(`Loading X sprite from ${$v}`);const t=new Pd().load($v,g=>{mi.debug("X sprite loaded")},null,g=>{mi.debug("Error while loading X sprite"),console.error(g)}),i=new bc({map:t,color:16777215,transparent:!0}),a=new Ud(i);a.scale.setScalar(2),a.position.set(o.axisLength*1.05,0,0),mi.debug(`Loading Y sprite from ${ty}`);const l=new Pd().load(ty,g=>{mi.debug("Y sprite loaded")},null,g=>{mi.debug("Error while loading Y sprite"),console.error(g)}),u=new bc({map:l,color:16777215,transparent:!0}),h=new Ud(u);h.scale.setScalar(2),h.position.set(0,o.axisLength*1.05,0),mi.debug(`Loading Z sprite from ${ey}`);const c=new Pd().load(ey,g=>{mi.debug("Z sprite loaded")},null,g=>{mi.debug("Error while loading Z sprite"),console.error(g)}),m=new bc({map:c,color:16777215,transparent:!0}),p=new Ud(m);return p.scale.setScalar(2),p.position.set(0,0,o.axisLength*1.05),[a,h,p]}function z2(o=new xa){const t=[];return t.push(E2(o)),t.push(A2(o)),t.push(T2(o)),o.ticksEvery>0&&(t.push(...C2(o)),t.push(...D2(o)),t.push(...L2(o))),t.push(...R2(o)),t}var ze="-ms-",Sl="-moz-",ve="-webkit-",Yy="comm",Nc="rule",Ep="decl",O2="@import",U2="@namespace",qy="@keyframes",N2="@layer",jy=Math.abs,Ap=String.fromCharCode,rp=Object.assign;function P2(o,t){return an(o,0)^45?(((t<<2^an(o,0))<<2^an(o,1))<<2^an(o,2))<<2^an(o,3):0}function Zy(o){return o.trim()}function ga(o,t){return(o=t.exec(o))?o[0]:o}function $t(o,t,i){return o.replace(t,i)}function Mc(o,t,i){return o.indexOf(t,i)}function an(o,t){return o.charCodeAt(t)|0}function Ir(o,t,i){return o.slice(t,i)}function Ci(o){return o.length}function Qy(o){return o.length}function _l(o,t){return t.push(o),o}function B2(o,t){return o.map(t).join("")}function ny(o,t){return o.filter(function(i){return!ga(i,t)})}var Pc=1,so=1,Ky=0,xi=0,$e=0,ho="";function Bc(o,t,i,a,l,u,h,c){return{value:o,root:t,parent:i,type:a,props:l,children:u,line:Pc,column:so,length:h,return:"",siblings:c}}function Ja(o,t){return rp(Bc("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},t)}function Ws(o){for(;o.root;)o=Ja(o.root,{children:[o]});_l(o,o.siblings)}function G2(){return $e}function H2(){return $e=xi>0?an(ho,--xi):0,so--,$e===10&&(so=1,Pc--),$e}function zi(){return $e=xi<Ky?an(ho,xi++):0,so++,$e===10&&(so=1,Pc++),$e}function er(){return an(ho,xi)}function wc(){return xi}function Gc(o,t){return Ir(ho,o,t)}function Tl(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F2(o){return Pc=so=1,Ky=Ci(ho=o),xi=0,[]}function I2(o){return ho="",o}function Id(o){return Zy(Gc(xi-1,sp(o===91?o+2:o===40?o+1:o)))}function V2(o){for(;($e=er())&&$e<33;)zi();return Tl(o)>2||Tl($e)>3?"":" "}function k2(o,t){for(;--t&&zi()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Gc(o,wc()+(t<6&&er()==32&&zi()==32))}function sp(o){for(;zi();)switch($e){case o:return xi;case 34:case 39:o!==34&&o!==39&&sp($e);break;case 40:o===41&&sp(o);break;case 92:zi();break}return xi}function W2(o,t){for(;zi()&&o+$e!==57;)if(o+$e===84&&er()===47)break;return"/*"+Gc(t,xi-1)+"*"+Ap(o===47?o:zi())}function X2(o){for(;!Tl(er());)zi();return Gc(o,xi)}function Y2(o){return I2(Ec("",null,null,null,[""],o=F2(o),0,[0],o))}function Ec(o,t,i,a,l,u,h,c,m){for(var p=0,g=0,_=h,y=0,M=0,w=0,b=1,v=1,S=1,A=0,D="",z=l,C=u,N=a,H=D;v;)switch(w=A,A=zi()){case 40:if(w!=108&&an(H,_-1)==58){Mc(H+=$t(Id(A),"&","&\f"),"&\f",jy(p?c[p-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:H+=Id(A);break;case 9:case 10:case 13:case 32:H+=V2(w);break;case 92:H+=k2(wc()-1,7);continue;case 47:switch(er()){case 42:case 47:_l(q2(W2(zi(),wc()),t,i,m),m),(Tl(w||1)==5||Tl(er()||1)==5)&&Ci(H)&&Ir(H,-1,void 0)!==" "&&(H+=" ");break;default:H+="/"}break;case 123*b:c[p++]=Ci(H)*S;case 125*b:case 59:case 0:switch(A){case 0:case 125:v=0;case 59+g:S==-1&&(H=$t(H,/\f/g,"")),M>0&&(Ci(H)-_||b===0&&w===47)&&_l(M>32?ay(H+";",a,i,_-1,m):ay($t(H," ","")+";",a,i,_-2,m),m);break;case 59:H+=";";default:if(_l(N=iy(H,t,i,p,g,l,c,D,z=[],C=[],_,u),u),A===123)if(g===0)Ec(H,t,N,N,z,u,_,c,C);else{switch(y){case 99:if(an(H,3)===110)break;case 108:if(an(H,2)===97)break;default:g=0;case 100:case 109:case 115:}g?Ec(o,N,N,a&&_l(iy(o,N,N,0,0,l,c,D,l,z=[],_,C),C),l,C,_,c,a?z:C):Ec(H,N,N,N,[""],C,0,c,C)}}p=g=M=0,b=S=1,D=H="",_=h;break;case 58:_=1+Ci(H),M=w;default:if(b<1){if(A==123)--b;else if(A==125&&b++==0&&H2()==125)continue}switch(H+=Ap(A),A*b){case 38:S=g>0?1:(H+="\f",-1);break;case 44:c[p++]=(Ci(H)-1)*S,S=1;break;case 64:er()===45&&(H+=Id(zi())),y=er(),g=_=Ci(D=H+=X2(wc())),A++;break;case 45:w===45&&Ci(H)==2&&(b=0)}}return u}function iy(o,t,i,a,l,u,h,c,m,p,g,_){for(var y=l-1,M=l===0?u:[""],w=Qy(M),b=0,v=0,S=0;b<a;++b)for(var A=0,D=Ir(o,y+1,y=jy(v=h[b])),z=o;A<w;++A)(z=Zy(v>0?M[A]+" "+D:$t(D,/&\f/g,M[A])))&&(m[S++]=z);return Bc(o,t,i,l===0?Nc:c,m,p,g,_)}function q2(o,t,i,a){return Bc(o,t,i,Yy,Ap(G2()),Ir(o,2,-2),0,a)}function ay(o,t,i,a,l){return Bc(o,t,i,Ep,Ir(o,0,a),Ir(o,a+1,-1),a,l)}function Jy(o,t,i){switch(P2(o,t)){case 5103:return ve+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ve+o+o;case 4855:return ve+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return Sl+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+o+Sl+o+ze+o+o;case 5936:switch(an(o,t+11)){case 114:return ve+o+ze+$t(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return ve+o+ze+$t(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return ve+o+ze+$t(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return ve+o+ze+o+o;case 6165:return ve+o+ze+"flex-"+o+o;case 5187:return ve+o+$t(o,/(\w+).+(:[^]+)/,ve+"box-$1$2"+ze+"flex-$1$2")+o;case 5443:return ve+o+ze+"flex-item-"+$t(o,/flex-|-self/g,"")+(ga(o,/flex-|baseline/)?"":ze+"grid-row-"+$t(o,/flex-|-self/g,""))+o;case 4675:return ve+o+ze+"flex-line-pack"+$t(o,/align-content|flex-|-self/g,"")+o;case 5548:return ve+o+ze+$t(o,"shrink","negative")+o;case 5292:return ve+o+ze+$t(o,"basis","preferred-size")+o;case 6060:return ve+"box-"+$t(o,"-grow","")+ve+o+ze+$t(o,"grow","positive")+o;case 4554:return ve+$t(o,/([^-])(transform)/g,"$1"+ve+"$2")+o;case 6187:return $t($t($t(o,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),o,"")+o;case 5495:case 3959:return $t(o,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return $t($t(o,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+ze+"flex-pack:$3"),/space-between/,"justify")+ve+o+o;case 4200:if(!ga(o,/flex-|baseline/))return ze+"grid-column-align"+Ir(o,t)+o;break;case 2592:case 3360:return ze+$t(o,"template-","")+o;case 4384:case 3616:return i&&i.some(function(a,l){return t=l,ga(a.props,/grid-\w+-end/)})?~Mc(o+(i=i[t].value),"span",0)?o:ze+$t(o,"-start","")+o+ze+"grid-row-span:"+(~Mc(i,"span",0)?ga(i,/\d+/):+ga(i,/\d+/)-+ga(o,/\d+/))+";":ze+$t(o,"-start","")+o;case 4896:case 4128:return i&&i.some(function(a){return ga(a.props,/grid-\w+-start/)})?o:ze+$t($t(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return $t(o,/(.+)-inline(.+)/,ve+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ci(o)-1-t>6)switch(an(o,t+1)){case 109:if(an(o,t+4)!==45)break;case 102:return $t(o,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+Sl+(an(o,t+3)==108?"$3":"$2-$3"))+o;case 115:return~Mc(o,"stretch",0)?Jy($t(o,"stretch","fill-available"),t,i)+o:o}break;case 5152:case 5920:return $t(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,l,u,h,c,m,p){return ze+l+":"+u+p+(h?ze+l+"-span:"+(c?m:+m-+u)+p:"")+o});case 4949:if(an(o,t+6)===121)return $t(o,":",":"+ve)+o;break;case 6444:switch(an(o,an(o,14)===45?18:11)){case 120:return $t(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(an(o,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+ze+"$2box$3")+o;case 100:return $t(o,":",":"+ze)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $t(o,"scroll-","scroll-snap-")+o}return o}function Lc(o,t){for(var i="",a=0;a<o.length;a++)i+=t(o[a],a,o,t)||"";return i}function j2(o,t,i,a){switch(o.type){case N2:if(o.children.length)break;case O2:case U2:case Ep:return o.return=o.return||o.value;case Yy:return"";case qy:return o.return=o.value+"{"+Lc(o.children,a)+"}";case Nc:if(!Ci(o.value=o.props.join(",")))return""}return Ci(i=Lc(o.children,a))?o.return=o.value+"{"+i+"}":""}function Z2(o){var t=Qy(o);return function(i,a,l,u){for(var h="",c=0;c<t;c++)h+=o[c](i,a,l,u)||"";return h}}function Q2(o){return function(t){t.root||(t=t.return)&&o(t)}}function K2(o,t,i,a){if(o.length>-1&&!o.return)switch(o.type){case Ep:o.return=Jy(o.value,o.length,i);return;case qy:return Lc([Ja(o,{value:$t(o.value,"@","@"+ve)})],a);case Nc:if(o.length)return B2(i=o.props,function(l){switch(ga(l,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ws(Ja(o,{props:[$t(l,/:(read-\w+)/,":"+Sl+"$1")]})),Ws(Ja(o,{props:[l]})),rp(o,{props:ny(i,a)});break;case"::placeholder":Ws(Ja(o,{props:[$t(l,/:(plac\w+)/,":"+ve+"input-$1")]})),Ws(Ja(o,{props:[$t(l,/:(plac\w+)/,":"+Sl+"$1")]})),Ws(Ja(o,{props:[$t(l,/:(plac\w+)/,ze+"input-$1")]})),Ws(Ja(o,{props:[l]})),rp(o,{props:ny(i,a)});break}return""})}}var $s={},Vd,kd;const oo=typeof process<"u"&&$s!==void 0&&($s.REACT_APP_SC_ATTR||$s.SC_ATTR)||"data-styled",$y="active",tx="data-styled-version",Hc="6.4.0",Tp=`/*!sc*/
`,Ml=typeof window<"u"&&typeof document<"u";function ry(o){if(typeof process<"u"&&$s!==void 0){const t=$s[o];if(t!==void 0&&t!=="")return t!=="false"}}const J2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(kd=(Vd=ry("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Vd!==void 0?Vd:ry("SC_DISABLE_SPEEDY"))!==null&&kd!==void 0?kd:typeof process>"u"||$s===void 0),$2="sc-keyframes-";function Fc(o,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${o} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Ac=new Map,Rc=new Map,Tc=1;const vc=o=>{if(Ac.has(o))return Ac.get(o);for(;Rc.has(Tc);)Tc++;const t=Tc++;return Ac.set(o,t),Rc.set(t,o),t},tT=o=>Rc.get(o),eT=(o,t)=>{Tc=t+1,Ac.set(o,t),Rc.set(t,o)},Cp=Object.freeze([]),lo=Object.freeze({});function nT(o,t,i=lo){return o.theme!==i.theme&&o.theme||t||i.theme}const iT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aT=/(^-|-$)/g;function ex(o){return o.replace(iT,"-").replace(aT,"")}const rT=/(a)(d)/gi,sy=o=>String.fromCharCode(o+(o>25?39:97));function nx(o){let t,i="";for(t=Math.abs(o);t>52;t=t/52|0)i=sy(t%52)+i;return(sy(t%52)+i).replace(rT,"$1-$2")}const op=5381,Nr=(o,t)=>{let i=t.length;for(;i;)o=33*o^t.charCodeAt(--i);return o},ix=o=>Nr(op,o);function sT(o){return nx(ix(o)>>>0)}function oT(o){return o.displayName||o.name||"Component"}function lp(o){return typeof o=="string"&&!0}function lT(o){return lp(o)?`styled.${o}`:`Styled(${oT(o)})`}const ax=Symbol.for("react.memo"),uT=Symbol.for("react.forward_ref"),cT={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},fT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hT={[uT]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ax]:rx};function oy(o){return("type"in(t=o)&&t.type.$$typeof)===ax?rx:"$$typeof"in o?hT[o.$$typeof]:cT;var t}const dT=Object.defineProperty,pT=Object.getOwnPropertyNames,mT=Object.getOwnPropertySymbols,gT=Object.getOwnPropertyDescriptor,_T=Object.getPrototypeOf,vT=Object.prototype;function sx(o,t,i){if(typeof t!="string"){const a=_T(t);a&&a!==vT&&sx(o,a,i);const l=pT(t).concat(mT(t)),u=oy(o),h=oy(t);for(let c=0;c<l.length;++c){const m=l[c];if(!(m in fT||i&&i[m]||h&&m in h||u&&m in u)){const p=gT(t,m);try{dT(o,m,p)}catch{}}}}return o}function Ic(o){return typeof o=="function"}function ox(o){return typeof o=="object"&&"styledComponentId"in o}function vl(o,t){return o&&t?o+" "+t:o||t||""}function ly(o,t){return o.join("")}function Cl(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function up(o,t,i=!1){if(!i&&!Cl(o)&&!Array.isArray(o))return t;if(Array.isArray(t))for(let a=0;a<t.length;a++)o[a]=up(o[a],t[a]);else if(Cl(t))for(const a in t)o[a]=up(o[a],t[a]);return o}function lx(o,t){Object.defineProperty(o,"toString",{value:t})}const yT=class{constructor(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o,this._cGroup=0,this._cIndex=0}indexOfGroup(o){if(o===this._cGroup)return this._cIndex;let t=this._cIndex;if(o>this._cGroup)for(let i=this._cGroup;i<o;i++)t+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=o;i--)t-=this.groupSizes[i];return this._cGroup=o,this._cIndex=t,t}insertRules(o,t){if(o>=this.groupSizes.length){const l=this.groupSizes,u=l.length;let h=u;for(;o>=h;)if(h<<=1,h<0)throw Fc(16,`${o}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let c=u;c<h;c++)this.groupSizes[c]=0}let i=this.indexOfGroup(o+1),a=0;for(let l=0,u=t.length;l<u;l++)this.tag.insertRule(i,t[l])&&(this.groupSizes[o]++,i++,a++);a>0&&this._cGroup>o&&(this._cIndex+=a)}clearGroup(o){if(o<this.length){const t=this.groupSizes[o],i=this.indexOfGroup(o),a=i+t;this.groupSizes[o]=0;for(let l=i;l<a;l++)this.tag.deleteRule(i);t>0&&this._cGroup>o&&(this._cIndex-=t)}}getGroup(o){let t="";if(o>=this.length||this.groupSizes[o]===0)return t;const i=this.groupSizes[o],a=this.indexOfGroup(o),l=a+i;for(let u=a;u<l;u++)t+=this.tag.getRule(u)+Tp;return t}},xT=`style[${oo}][${tx}="${Hc}"]`,bT=new RegExp(`^${oo}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),uy=o=>typeof ShadowRoot<"u"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11,cp=o=>{if(!o)return document;if(uy(o))return o;if("getRootNode"in o){const t=o.getRootNode();if(uy(t))return t}return document},ST=(o,t,i)=>{const a=i.split(",");let l;for(let u=0,h=a.length;u<h;u++)(l=a[u])&&o.registerName(t,l)},MT=(o,t)=>{var i;const a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Tp),l=[];for(let u=0,h=a.length;u<h;u++){const c=a[u].trim();if(!c)continue;const m=c.match(bT);if(m){const p=0|parseInt(m[1],10),g=m[2];p!==0&&(eT(g,p),ST(o,g,m[3]),o.getTag().insertRules(p,l)),l.length=0}else l.push(c)}},Wd=o=>{const t=cp(o.options.target).querySelectorAll(xT);for(let i=0,a=t.length;i<a;i++){const l=t[i];l&&l.getAttribute(oo)!==$y&&(MT(o,l),l.parentNode&&l.parentNode.removeChild(l))}};let dl=!1;function wT(){if(dl!==!1)return dl;if(typeof document<"u"){const o=document.head.querySelector('meta[property="csp-nonce"]');if(o)return dl=o.nonce||o.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return dl=t.getAttribute("content")||void 0}return dl=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const ux=(o,t)=>{const i=document.head,a=o||i,l=document.createElement("style"),u=(m=>{const p=Array.from(m.querySelectorAll(`style[${oo}]`));return p[p.length-1]})(a),h=u!==void 0?u.nextSibling:null;l.setAttribute(oo,$y),l.setAttribute(tx,Hc);const c=t||wT();return c&&l.setAttribute("nonce",c),a.insertBefore(l,h),l},ET=class{constructor(o,t){this.element=ux(o,t),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var a;if(i.sheet)return i.sheet;const l=(a=i.getRootNode().styleSheets)!==null&&a!==void 0?a:document.styleSheets;for(let u=0,h=l.length;u<h;u++){const c=l[u];if(c.ownerNode===i)return c}throw Fc(17)})(this.element),this.length=0}insertRule(o,t){try{return this.sheet.insertRule(t,o),this.length++,!0}catch{return!1}}deleteRule(o){this.sheet.deleteRule(o),this.length--}getRule(o){const t=this.sheet.cssRules[o];return t&&t.cssText?t.cssText:""}},AT=class{constructor(o,t){this.element=ux(o,t),this.nodes=this.element.childNodes,this.length=0}insertRule(o,t){if(o<=this.length&&o>=0){const i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[o]||null),this.length++,!0}return!1}deleteRule(o){this.element.removeChild(this.nodes[o]),this.length--}getRule(o){return o<this.length?this.nodes[o].textContent:""}};let cy=Ml;const TT={isServer:!Ml,useCSSOMInjection:!J2};class Vc{static registerId(t){return vc(t)}constructor(t=lo,i={},a){this.options=Object.assign(Object.assign({},TT),t),this.gs=i,this.keyframeIds=new Set,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Ml&&cy&&(cy=!1,Wd(this)),lx(this,()=>(l=>{const u=l.getTag(),{length:h}=u;let c="";for(let m=0;m<h;m++){const p=tT(m);if(p===void 0)continue;const g=l.names.get(p);if(g===void 0||!g.size)continue;const _=u.getGroup(m);if(_.length===0)continue;const y=oo+".g"+m+'[id="'+p+'"]';let M="";for(const w of g)w.length>0&&(M+=w+",");c+=_+y+'{content:"'+M+'"}'+Tp}return c})(this))}rehydrate(){!this.server&&Ml&&Wd(this)}reconstructWithOptions(t,i=!0){const a=new Vc(Object.assign(Object.assign({},this.options),t),this.gs,i&&this.names||void 0);return a.keyframeIds=new Set(this.keyframeIds),!this.server&&Ml&&t.target!==this.options.target&&cp(this.options.target)!==cp(t.target)&&Wd(a),a}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:i,target:a,nonce:l})=>i?new ET(a,l):new AT(a,l))(this.options),new yT(t)));var t}hasNameForId(t,i){var a,l;return(l=(a=this.names.get(t))===null||a===void 0?void 0:a.has(i))!==null&&l!==void 0&&l}registerName(t,i){vc(t),t.startsWith($2)&&this.keyframeIds.add(t);const a=this.names.get(t);a?a.add(i):this.names.set(t,new Set([i]))}insertRules(t,i,a){this.registerName(t,i),this.getTag().insertRules(vc(t),a)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(vc(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const cx=new WeakSet,CT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function DT(o,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||o in CT||o.startsWith("--")?String(t).trim():t+"px"}const LT=o=>o>="A"&&o<="Z";function fy(o){let t="";for(let i=0;i<o.length;i++){const a=o[i];if(i===1&&a==="-"&&o[0]==="-")return o;LT(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}const RT=Symbol.for("sc-keyframes");function zT(o){return typeof o=="object"&&o!==null&&RT in o}function fx(o){return Ic(o)&&!(o.prototype&&o.prototype.isReactComponent)}const hx=o=>o==null||o===!1||o==="",OT=Symbol.for("react.client.reference");function hy(o){return o.$$typeof===OT}const dx=o=>{const t=[];for(const i in o){const a=o[i];o.hasOwnProperty(i)&&!hx(a)&&(Array.isArray(a)&&cx.has(a)||Ic(a)?t.push(fy(i)+":",a,";"):Cl(a)?t.push(i+" {",...dx(a),"}"):t.push(fy(i)+": "+DT(i,a)+";"))}return t};function Pr(o,t,i,a,l=[]){if(hx(o))return l;const u=typeof o;if(u==="string")return l.push(o),l;if(u==="function"){if(hy(o))return l;if(fx(o)&&t){const h=o(t);return Pr(h,t,i,a,l)}return l.push(o),l}if(Array.isArray(o)){for(let h=0;h<o.length;h++)Pr(o[h],t,i,a,l);return l}if(ox(o))return l.push(`.${o.styledComponentId}`),l;if(zT(o))return i?(o.inject(i,a),l.push(o.getName(a))):l.push(o),l;if(hy(o))return l;if(Cl(o)){const h=dx(o);for(let c=0;c<h.length;c++)l.push(h[c]);return l}return l.push(o.toString()),l}const UT=ix(Hc);class NT{constructor(t,i,a){this.rules=t,this.componentId=i,this.baseHash=Nr(UT,i),this.baseStyle=a,Vc.registerId(i)}generateAndInjectStyles(t,i,a){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";{let u="";for(let h=0;h<this.rules.length;h++){const c=this.rules[h];if(typeof c=="string")u+=c;else if(c)if(fx(c)){const m=c(t);typeof m=="string"?u+=m:m!=null&&m!==!1&&(u+=ly(Pr(m,t,i,a)))}else u+=ly(Pr(c,t,i,a))}if(u){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=a.hash?a.hash+u:u;let c=this.dynamicNameCache.get(h);if(!c){if(c=nx(Nr(Nr(this.baseHash,a.hash),u)>>>0),this.dynamicNameCache.size>=200){const m=this.dynamicNameCache.keys().next().value;m!==void 0&&this.dynamicNameCache.delete(m)}this.dynamicNameCache.set(h,c)}if(!i.hasNameForId(this.componentId,c)){const m=a(u,"."+c,void 0,this.componentId);i.insertRules(this.componentId,c,m)}l=vl(l,c)}}return l}}const PT=/&/g,Cr=47;function px(o,t){let i=0;for(;--t>=0&&o.charCodeAt(t)===92;)i++;return!(1&~i)}function Xd(o){const t=o.length;let i="",a=0,l=0,u=0,h=!1,c=!1;for(let m=0;m<t;m++){const p=o.charCodeAt(m);if(u!==0||h||p!==Cr||o.charCodeAt(m+1)!==42)if(h)p===42&&o.charCodeAt(m+1)===Cr&&(h=!1,m++);else if(p!==34&&p!==39||px(o,m)){if(u===0)if(p===123)l++;else if(p===125){if(l--,l<0){c=!0;let g=m+1;for(;g<t;){const _=o.charCodeAt(g);if(_===59||_===10)break;g++}g<t&&o.charCodeAt(g)===59&&g++,l=0,m=g-1,a=g;continue}l===0&&(i+=o.substring(a,m+1),a=m+1)}else p===59&&l===0&&(i+=o.substring(a,m+1),a=m+1)}else u===0?u=p:u===p&&(u=0);else h=!0,m++}return c||l!==0||u!==0?(a<t&&l===0&&u===0&&(i+=o.substring(a)),i):o}function mx(o,t){for(let i=0;i<o.length;i++){const a=o[i];if(a.type==="rule"){a.value=t+" "+a.value,a.value=a.value.replaceAll(",",","+t+" ");const l=a.props,u=[];for(let h=0;h<l.length;h++)u[h]=t+" "+l[h];a.props=u}Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=mx(a.children,t))}return o}function BT({options:o=lo,plugins:t=Cp}=lo){let i,a,l;const u=(y,M,w)=>w.startsWith(a)&&w.endsWith(a)&&w.replaceAll(a,"").length>0?`.${i}`:y,h=t.slice();h.push(y=>{y.type===Nc&&y.value.includes("&")&&(l||(l=new RegExp(`\\${a}\\b`,"g")),y.props[0]=y.props[0].replace(PT,a).replace(l,u))}),o.prefix&&h.push(K2),h.push(j2);let c=[];const m=Z2(h.concat(Q2(y=>c.push(y)))),p=(y,M="",w="",b="&")=>{i=b,a=M,l=void 0;const v=(function(A){const D=A.indexOf("//")!==-1,z=A.indexOf("}")!==-1;if(!D&&!z)return A;if(!D)return Xd(A);const C=A.length;let N="",H=0,T=0,B=0,tt=0,ot=0,vt=!1;for(;T<C;){const nt=A.charCodeAt(T);if(nt!==34&&nt!==39||px(A,T))if(B===0)if(nt===Cr&&T+1<C&&A.charCodeAt(T+1)===42){for(T+=2;T+1<C&&(A.charCodeAt(T)!==42||A.charCodeAt(T+1)!==Cr);)T++;T+=2}else if(nt!==40)if(nt!==41)if(tt>0)T++;else if(nt===42&&T+1<C&&A.charCodeAt(T+1)===Cr)N+=A.substring(H,T),T+=2,H=T,vt=!0;else if(nt===Cr&&T+1<C&&A.charCodeAt(T+1)===Cr){for(N+=A.substring(H,T);T<C&&A.charCodeAt(T)!==10;)T++;H=T,vt=!0}else nt===123?ot++:nt===125&&ot--,T++;else tt>0&&tt--,T++;else tt++,T++;else T++;else B===0?B=nt:B===nt&&(B=0),T++}return vt?(H<C&&(N+=A.substring(H)),ot===0?N:Xd(N)):ot===0?A:Xd(A)})(y);let S=Y2(w||M?w+" "+M+" { "+v+" }":v);return o.namespace&&(S=mx(S,o.namespace)),c=[],Lc(S,m),c},g=o;let _=op;for(let y=0;y<t.length;y++)t[y].name||Fc(15),_=Nr(_,t[y].name);return g!=null&&g.namespace&&(_=Nr(_,g.namespace)),g!=null&&g.prefix&&(_=Nr(_,"p")),p.hash=_!==op?_.toString():"",p}const GT=new Vc,HT=BT(),gx=js.createContext({shouldForwardProp:void 0,styleSheet:GT,stylis:HT,stylisPlugins:void 0});gx.Consumer;function FT(){return js.useContext(gx)}const _x=js.createContext(void 0);_x.Consumer;const dy=Object.prototype.hasOwnProperty,Yd={};function IT(o,t){const i=typeof o!="string"?"sc":ex(o);Yd[i]=(Yd[i]||0)+1;const a=i+"-"+sT(Hc+i+Yd[i]);return t?t+"-"+a:a}function VT(o,t,i){const a=ox(o),l=o,u=!lp(o),{attrs:h=Cp,componentId:c=IT(t.displayName,t.parentComponentId),displayName:m=lT(o)}=t,p=t.displayName&&t.componentId?ex(t.displayName)+"-"+t.componentId:t.componentId||c,g=a&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:_}=t;if(a&&l.shouldForwardProp){const b=l.shouldForwardProp;if(t.shouldForwardProp){const v=t.shouldForwardProp;_=(S,A)=>b(S,A)&&v(S,A)}else _=b}const y=new NT(i,p,a?l.componentStyle:void 0);function M(b,v){return(function(S,A,D){const{attrs:z,componentStyle:C,defaultProps:N,foldedComponentIds:H,styledComponentId:T,target:B}=S,tt=js.useContext(_x),ot=FT(),vt=S.shouldForwardProp||ot.shouldForwardProp,nt=nT(A,tt,N)||lo;let Z,ht;{const W=js.useRef(null),j=W.current;if(j!==null&&j[1]===nt&&j[2]===ot.styleSheet&&j[3]===ot.stylis&&j[7]===C&&(function(R,I,Y){const ut=R,yt=I;let at=0;for(const Rt in yt)if(dy.call(yt,Rt)&&(at++,ut[Rt]!==yt[Rt]))return!1;return at===Y})(j[0],A,j[4]))Z=j[5],ht=j[6];else{Z=(function(I,Y,ut){const yt=Object.assign(Object.assign({},Y),{className:void 0,theme:ut}),at=I.length>1;for(let Rt=0;Rt<I.length;Rt++){const Ot=I[Rt],Tt=Ic(Ot)?Ot(at?Object.assign({},yt):yt):Ot;for(const wt in Tt)wt==="className"?yt.className=vl(yt.className,Tt[wt]):wt==="style"?yt.style=Object.assign(Object.assign({},yt.style),Tt[wt]):wt in Y&&Y[wt]===void 0||(yt[wt]=Tt[wt])}return"className"in Y&&typeof Y.className=="string"&&(yt.className=vl(yt.className,Y.className)),yt})(z,A,nt),ht=(function(I,Y,ut,yt){return I.generateAndInjectStyles(Y,ut,yt)})(C,Z,ot.styleSheet,ot.stylis);let R=0;for(const I in A)dy.call(A,I)&&R++;W.current=[A,nt,ot.styleSheet,ot.stylis,R,Z,ht,C]}}const G=Z.as||B,Q=(function(W,j,R,I){const Y={};for(const ut in W)W[ut]===void 0||ut[0]==="$"||ut==="as"||ut==="theme"&&W.theme===R||(ut==="forwardedAs"?Y.as=W.forwardedAs:I&&!I(ut,j)||(Y[ut]=W[ut]));return Y})(Z,G,nt,vt);let K=vl(H,T);return ht&&(K+=" "+ht),Z.className&&(K+=" "+Z.className),Q[lp(G)&&G.includes("-")?"class":"className"]=K,D&&(Q.ref=D),dp.createElement(G,Q)})(w,b,v)}M.displayName=m;let w=js.forwardRef(M);return w.attrs=g,w.componentStyle=y,w.displayName=m,w.shouldForwardProp=_,w.foldedComponentIds=a?vl(l.foldedComponentIds,l.styledComponentId):"",w.styledComponentId=p,w.target=a?l.target:o,Object.defineProperty(w,"defaultProps",{get(){return this._foldedDefaultProps},set(b){this._foldedDefaultProps=a?(function(v,...S){for(const A of S)up(v,A,!0);return v})({},l.defaultProps,b):b}}),lx(w,()=>`.${w.styledComponentId}`),u&&sx(w,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}var kT=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function py(o,t){const i=[o[0]];for(let a=0,l=t.length;a<l;a+=1)i.push(t[a],o[a+1]);return i}const my=o=>(cx.add(o),o);function WT(o,...t){if(Ic(o)||Cl(o))return my(Pr(py(Cp,[o,...t])));const i=o;return t.length===0&&i.length===1&&typeof i[0]=="string"?Pr(i):my(Pr(py(i,t)))}function fp(o,t,i=lo){if(!t)throw Fc(1,t);const a=(l,...u)=>o(t,i,WT(l,...u));return a.attrs=l=>fp(o,t,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),a.withConfig=l=>fp(o,t,Object.assign(Object.assign({},i),l)),a}const vx=o=>fp(VT,o),Dp=vx;kT.forEach(o=>{Dp[o]=vx(o)});const XT=Dp.div`
  padding: 7px 7px;
  background: black;
  position: absolute;
  bottom: 0;
  //width: 100%;
  font-size: small;
  
  // kicks in on narrow screens, i.e. mobile 
  @media (max-width: 1000px) {
    padding: 7px 7px;
  }
`,YT=Dp.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 10px;
  text-decoration: none;
   
  &:hover {
      color: goldenrod;
      transition: 200ms ease-in;
  }
`,qT=o=>qs.jsx(XT,{children:qs.jsx(YT,{href:o.url,target:"_blank",rel:"noreferrer",children:o.text})}),ei=Mp.getLogger("dmp");ei.setLevel("debug");const $a=new k(.1,.1,.1),gy=[$a.x,$a.y,$a.z,$a.x,$a.y,$a.z],jT={running:!1,iterations:0,maxIterations:1e4,iterationsPerFrame:1,lineThickness:.0024,opacity:1,graphColor:16776960,showAxes:!0,showCursor:!0,cursorTracking:"manual",showRideCameraFrustrum:!1,rideCameraZoom:10},ZT={main_camera_x:0,main_camera_y:0,main_camera_z:0,ride_camera_x:0,ride_camera_y:0,ride_camera_z:0};class QT extends dp.Component{constructor(i){super(i);ce(this,"gui");ce(this,"controlParams",{...jT});ce(this,"statsParams",{...ZT});ce(this,"graphPos");ce(this,"graphPts");ce(this,"graphMaterial");ce(this,"lineGeometry");ce(this,"graphLine");ce(this,"cursor");ce(this,"cursorGeometry");ce(this,"cursorMaterial");ce(this,"scene");ce(this,"renderer");ce(this,"mainCamera");ce(this,"rideCamera");ce(this,"graphRoot");ce(this,"axesRoot");ce(this,"rideCameraHelper");ce(this,"orbitControls");ce(this,"stats");ce(this,"prevGraphPos");ce(this,"resetGraph",()=>{ei.debug("Resetting graph"),this.controlParams.running=!1,this.scene.remove(this.graphRoot),this.graphRoot=new hn,this.scene.add(this.graphRoot),this.graphPos.copy($a),this.graphPts=[],this.graphPts.push(...gy),this.lineGeometry=new Js,this.lineGeometry.setPositions(this.graphPts),this.graphLine=new bl(this.lineGeometry,this.graphMaterial),this.graphRoot.add(this.graphLine),this.controlParams.iterations=0,this.controlParams.cursorTracking="manual",this.renderer.render(this.scene,this.mainCamera)});ce(this,"resetFunctionParametersCallback",()=>{this.controlParams.running=!1,this.resetFunctionParameters()});ce(this,"resetFunctionParameters",()=>{ei.warn("Override resetFunctionParameters()!!")});ce(this,"setGraphColor",()=>{ei.debug(`Setting graph color to ${this.controlParams.graphColor}`),this.graphMaterial.color=new fe().setHex(this.controlParams.graphColor)});ce(this,"setLineThickness",()=>{ei.debug(`Setting line thickness to ${this.controlParams.lineThickness}`),this.graphMaterial.linewidth=this.controlParams.lineThickness});ce(this,"setOpacity",()=>{ei.debug(`Setting opacity to ${this.controlParams.opacity}`),this.graphMaterial.opacity=this.controlParams.opacity});ce(this,"updateCursorVisibility",()=>{ei.debug(`Setting cursor visibility to ${this.controlParams.showCursor}`),this.cursor.visible=this.controlParams.showCursor});ce(this,"updateRideCamHelperVisibility",()=>{ei.debug(`Setting ride camera helper visibility to ${this.controlParams.showRideCameraFrustrum}`),this.rideCameraHelper.visible=this.controlParams.showRideCameraFrustrum});ce(this,"updateAxesVisibility",()=>{ei.debug(`Setting axes visibility to ${this.controlParams.showAxes}`),this.axesRoot.visible=this.controlParams.showAxes});ce(this,"updateDimensions",()=>{ei.debug("Window resized"),this.setState({width:window.innerWidth,height:window.innerHeight}),this.mainCamera.aspect=window.innerWidth/window.innerHeight,this.mainCamera.updateProjectionMatrix(),this.rideCamera.aspect=window.innerWidth/window.innerHeight,this.rideCamera.updateProjectionMatrix(),this.rideCameraHelper.update(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.controlParams.cursorTracking==="ride"?this.renderer.render(this.scene,this.rideCamera):this.renderer.render(this.scene,this.mainCamera)});ce(this,"animate",()=>{if(this.stats.begin(),this.controlParams.running&&this.controlParams.iterations<this.controlParams.maxIterations){for(let l=0;l<this.controlParams.iterationsPerFrame&&this.controlParams.iterations<this.controlParams.maxIterations;l++)this.prevGraphPos=this.graphPos,this.graphPos=this.advanceGraph(this.graphPos),this.graphPts.push(this.graphPos.x,this.graphPos.y,this.graphPos.z),this.controlParams.iterations++;this.lineGeometry=new Js,this.lineGeometry.setPositions(this.graphPts),this.graphRoot.remove(this.graphLine),this.graphLine=new bl(this.lineGeometry,this.graphMaterial),this.graphLine.scale.setScalar(1),this.graphLine.computeLineDistances(),this.graphRoot.add(this.graphLine),this.cursor.position.copy(this.graphPos)}else this.controlParams.iterations>=this.controlParams.maxIterations&&(this.controlParams.running=!1);let i=new k().subVectors(this.prevGraphPos,this.graphPos);i.normalize(),i.multiplyScalar(this.controlParams.rideCameraZoom);let a=new k().addVectors(this.prevGraphPos,i);this.rideCamera.position.copy(a),this.rideCamera.lookAt(this.graphPos),this.statsParams.ride_camera_x=this.rideCamera.position.x,this.statsParams.ride_camera_y=this.rideCamera.position.y,this.statsParams.ride_camera_z=this.rideCamera.position.z,this.rideCameraHelper.update(),this.controlParams.cursorTracking==="follow"?(this.orbitControls.target.copy(this.graphPos),this.orbitControls.update(),this.statsParams.main_camera_x=this.mainCamera.position.x,this.statsParams.main_camera_y=this.mainCamera.position.y,this.statsParams.main_camera_z=this.mainCamera.position.z,this.renderer.render(this.scene,this.mainCamera)):this.controlParams.cursorTracking==="ride"?this.renderer.render(this.scene,this.rideCamera):(this.statsParams.main_camera_x=this.mainCamera.position.x,this.statsParams.main_camera_y=this.mainCamera.position.y,this.statsParams.main_camera_z=this.mainCamera.position.z,this.renderer.render(this.scene,this.mainCamera)),requestAnimationFrame(this.animate),this.stats.end()});this.graphPos=new k().copy($a),this.prevGraphPos=new k().copy(this.graphPos),this.graphPts=[],this.controlParams.resetGraph=this.resetGraph,this.controlParams.resetParameters=this.resetFunctionParametersCallback,this.gui=new Sp,this.graphPts.push(...gy),this.graphMaterial=new kr({color:new fe().setHex(this.controlParams.graphColor),linewidth:this.controlParams.lineThickness,opacity:this.controlParams.opacity,vertexColors:!1,dashed:!1,alphaToCoverage:!0}),this.lineGeometry=new Js,this.lineGeometry.setPositions(this.graphPts),this.graphLine=new bl(this.lineGeometry,this.graphMaterial),this.graphLine.scale.setScalar(1),this.graphLine.computeLineDistances(),this.cursorGeometry=new bp(this.controlParams.lineThickness*200,8,8),this.cursorMaterial=new gp({color:16711935}),this.cursor=new Vi(this.cursorGeometry,this.cursorMaterial),this.cursor.position.copy(this.graphPos),this.scene=new QA,this.renderer=new Hy({antialias:!0}),this.mainCamera=new ni(45,window.innerWidth/window.innerHeight,.1,1e3),this.rideCamera=new ni(45,window.innerWidth/window.innerHeight,.1,1e3),this.rideCamera.position.set(0,0,0),this.graphRoot=new hn,this.axesRoot=new hn,this.rideCameraHelper=new r2(this.rideCamera),this.scene.add(this.rideCamera),this.rideCameraHelper.visible=this.controlParams.showRideCameraFrustrum,this.scene.add(this.rideCameraHelper)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.orbitControls=new y2(this.mainCamera,this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),this.mount.appendChild(this.renderer.domElement);const i=new xa,a=z2(i);this.axesRoot.add(...a),this.scene.add(this.axesRoot),this.scene.add(this.graphRoot),this.graphRoot.add(this.graphLine),this.scene.add(this.cursor),this.mainCamera.position.z=120,this.orbitControls.update(),this.gui.title("Controls");const l=this.gui.addFolder("Simulation");l.add(this.controlParams,"running").name("Running").listen(),l.add(this.controlParams,"iterations").name("Iterations").disable().listen(),l.add(this.controlParams,"maxIterations",[1e3,5e3,1e4,25e3,5e4,75e3,1e5]).name("Max Iterations"),l.add(this.controlParams,"iterationsPerFrame",[1,5,10,25,100]).name("Iterations Per Frame"),l.add(this.controlParams,"resetGraph").name("Reset Graph");const u=this.gui.addFolder("View");u.add(this.controlParams,"lineThickness",1e-4,.01,1e-4).name("Line Thickness").onChange(this.setLineThickness),u.addColor(this.controlParams,"graphColor").name("Graph Color").listen().onChange(this.setGraphColor),u.add(this.controlParams,"opacity",.01,1,.01).name("Opacity").onChange(this.setOpacity),u.add(this.controlParams,"showAxes").name("Show Axes").onChange(this.updateAxesVisibility),u.add(this.controlParams,"showCursor").name("Show Cursor").onChange(this.updateCursorVisibility),u.add(this.controlParams,"cursorTracking",["manual","follow","ride"]).name("Cursor Tracking"),u.add(this.controlParams,"showRideCameraFrustrum").name("Show Ride Cam Frustrum").onChange(this.updateRideCamHelperVisibility),u.add(this.controlParams,"rideCameraZoom",5,100,1).name("Ride Camera Zoom"),this.createFunctionParamsGuiFolder(this.gui).add(this.controlParams,"resetParameters").name("Reset Parameters");const c=this.gui.addFolder("Camera Positions");c.add(this.statsParams,"main_camera_x").name("Main Camera X").disable().listen(),c.add(this.statsParams,"main_camera_y").name("Main Camera Y").disable().listen(),c.add(this.statsParams,"main_camera_z").name("Main Camera Z").disable().listen(),c.add(this.statsParams,"ride_camera_x").name("Ride Camera X").disable().listen(),c.add(this.statsParams,"ride_camera_y").name("Ride Camera Y").disable().listen(),c.add(this.statsParams,"ride_camera_z").name("Ride Camera Z").disable().listen(),c.close(),this.stats=new Ks,document.body.appendChild(this.stats.domElement);const m=new v2(this.renderer.getContext());this.stats.addPanel(m),this.stats.showPanel(0),this.animate()}advanceGraph(i){ei.warn("Override advanceGraph(pos)!")}createFunctionParamsGuiFolder(i){return ei.warn("Override createFunctionParamsGuiFolder(gui)!"),i.addFolder("Function Parameters")}getFooterText(){return ei.info("Override getFooterText()!"),{url:"https://en.wikipedia.org/wiki/Dynamical_system",text:"What are dynamical systems?"}}render(){const i=this.getFooterText();return qs.jsxs("div",{children:[qs.jsx("div",{ref:a=>this.mount=a}),qs.jsx(qT,{url:i.url,text:i.text})]})}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions,!1)}}const yx=Mp.getLogger("lorenz");yx.setLevel("debug");const pl={sigma:10,beta:8/3,rho:28,dt:.01};class KT extends QT{constructor(){super(...arguments);ce(this,"lorenzParams",{...pl});ce(this,"resetFunctionParameters",()=>{yx.debug("Resetting Lorenz parameters to defaults"),this.lorenzParams.sigma=pl.sigma,this.lorenzParams.beta=pl.beta,this.lorenzParams.rho=pl.rho,this.lorenzParams.dt=pl.dt})}advanceGraph(i){const a=this.lorenzParams.sigma*(i.y-i.x),l=i.x*(this.lorenzParams.rho-i.z)-i.y,u=i.x*i.y-this.lorenzParams.beta*i.z;return new k(i.x+a*this.lorenzParams.dt,i.y+l*this.lorenzParams.dt,i.z+u*this.lorenzParams.dt)}createFunctionParamsGuiFolder(i){const a=i.addFolder("Lorenz Parameters");return a.add(this.lorenzParams,"sigma",1e-4,20,.1).name("&sigma;").listen(),a.add(this.lorenzParams,"beta",1e-4,10,.001).name("&beta;").listen(),a.add(this.lorenzParams,"rho",1e-4,100,1).name("&rho;").listen(),a.add(this.lorenzParams,"dt",.001,.03,.001).name("&delta;t").listen(),a}getFooterText(){return{url:"https://en.wikipedia.org/wiki/Lorenz_system",text:"What is the Lorenz attractor?"}}}const JT=document.getElementById("root"),$T=HS.createRoot(JT);$T.render(qs.jsx(KT,{}));
