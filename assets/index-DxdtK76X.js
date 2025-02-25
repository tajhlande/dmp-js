var Jx=Object.defineProperty;var tb=(l,t,n)=>t in l?Jx(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n;var de=(l,t,n)=>tb(l,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function o_(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var dh={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function eb(){if(r0)return ne;r0=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function y(T){return T===null||typeof T!="object"?null:(T=_&&T[_]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,x={};function v(T,j,V){this.props=T,this.context=j,this.refs=x,this.updater=V||M}v.prototype.isReactComponent={},v.prototype.setState=function(T,j){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,j,"setState")},v.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function S(){}S.prototype=v.prototype;function A(T,j,V){this.props=T,this.context=j,this.refs=x,this.updater=V||M}var D=A.prototype=new S;D.constructor=A,E(D,v.prototype),D.isPureReactComponent=!0;var z=Array.isArray,w={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function it(T,j,V,I,Y,pt){return V=pt.ref,{$$typeof:l,type:T,key:j,ref:V!==void 0?V:null,props:pt}}function L(T,j){return it(T.type,j,void 0,void 0,void 0,T.props)}function O(T){return typeof T=="object"&&T!==null&&T.$$typeof===l}function k(T){var j={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(V){return j[V]})}var vt=/\/+/g;function St(T,j){return typeof T=="object"&&T!==null&&T.key!=null?k(""+T.key):j.toString(36)}function G(){}function J(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(G,G):(T.status="pending",T.then(function(j){T.status==="pending"&&(T.status="fulfilled",T.value=j)},function(j){T.status==="pending"&&(T.status="rejected",T.reason=j)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function ct(T,j,V,I,Y){var pt=typeof T;(pt==="undefined"||pt==="boolean")&&(T=null);var U=!1;if(T===null)U=!0;else switch(pt){case"bigint":case"string":case"number":U=!0;break;case"object":switch(T.$$typeof){case l:case t:U=!0;break;case g:return U=T._init,ct(U(T._payload),j,V,I,Y)}}if(U)return Y=Y(T),U=I===""?"."+St(T,0):I,z(Y)?(V="",U!=null&&(V=U.replace(vt,"$&/")+"/"),ct(Y,j,V,"",function(wt){return wt})):Y!=null&&(O(Y)&&(Y=L(Y,V+(Y.key==null||T&&T.key===Y.key?"":(""+Y.key).replace(vt,"$&/")+"/")+U)),j.push(Y)),1;U=0;var Ct=I===""?".":I+":";if(z(T))for(var st=0;st<T.length;st++)I=T[st],pt=Ct+St(I,st),U+=ct(I,j,V,pt,Y);else if(st=y(T),typeof st=="function")for(T=st.call(T),st=0;!(I=T.next()).done;)I=I.value,pt=Ct+St(I,st++),U+=ct(I,j,V,pt,Y);else if(pt==="object"){if(typeof T.then=="function")return ct(J(T),j,V,I,Y);throw j=String(T),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return U}function nt(T,j,V){if(T==null)return T;var I=[],Y=0;return ct(T,I,"","",function(pt){return j.call(V,pt,Y++)}),I}function ut(T){if(T._status===-1){var j=T._result;j=j(),j.then(function(V){(T._status===0||T._status===-1)&&(T._status=1,T._result=V)},function(V){(T._status===0||T._status===-1)&&(T._status=2,T._result=V)}),T._status===-1&&(T._status=0,T._result=j)}if(T._status===1)return T._result.default;throw T._result}var K=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function $(){}return ne.Children={map:nt,forEach:function(T,j,V){nt(T,function(){j.apply(this,arguments)},V)},count:function(T){var j=0;return nt(T,function(){j++}),j},toArray:function(T){return nt(T,function(j){return j})||[]},only:function(T){if(!O(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ne.Component=v,ne.Fragment=n,ne.Profiler=o,ne.PureComponent=A,ne.StrictMode=a,ne.Suspense=m,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},ne.cache=function(T){return function(){return T.apply(null,arguments)}},ne.cloneElement=function(T,j,V){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var I=E({},T.props),Y=T.key,pt=void 0;if(j!=null)for(U in j.ref!==void 0&&(pt=void 0),j.key!==void 0&&(Y=""+j.key),j)!F.call(j,U)||U==="key"||U==="__self"||U==="__source"||U==="ref"&&j.ref===void 0||(I[U]=j[U]);var U=arguments.length-2;if(U===1)I.children=V;else if(1<U){for(var Ct=Array(U),st=0;st<U;st++)Ct[st]=arguments[st+2];I.children=Ct}return it(T.type,Y,void 0,void 0,pt,I)},ne.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},ne.createElement=function(T,j,V){var I,Y={},pt=null;if(j!=null)for(I in j.key!==void 0&&(pt=""+j.key),j)F.call(j,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(Y[I]=j[I]);var U=arguments.length-2;if(U===1)Y.children=V;else if(1<U){for(var Ct=Array(U),st=0;st<U;st++)Ct[st]=arguments[st+2];Y.children=Ct}if(T&&T.defaultProps)for(I in U=T.defaultProps,U)Y[I]===void 0&&(Y[I]=U[I]);return it(T,pt,void 0,void 0,null,Y)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(T){return{$$typeof:f,render:T}},ne.isValidElement=O,ne.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:ut}},ne.memo=function(T,j){return{$$typeof:p,type:T,compare:j===void 0?null:j}},ne.startTransition=function(T){var j=w.T,V={};w.T=V;try{var I=T(),Y=w.S;Y!==null&&Y(V,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then($,K)}catch(pt){K(pt)}finally{w.T=j}},ne.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},ne.use=function(T){return w.H.use(T)},ne.useActionState=function(T,j,V){return w.H.useActionState(T,j,V)},ne.useCallback=function(T,j){return w.H.useCallback(T,j)},ne.useContext=function(T){return w.H.useContext(T)},ne.useDebugValue=function(){},ne.useDeferredValue=function(T,j){return w.H.useDeferredValue(T,j)},ne.useEffect=function(T,j){return w.H.useEffect(T,j)},ne.useId=function(){return w.H.useId()},ne.useImperativeHandle=function(T,j,V){return w.H.useImperativeHandle(T,j,V)},ne.useInsertionEffect=function(T,j){return w.H.useInsertionEffect(T,j)},ne.useLayoutEffect=function(T,j){return w.H.useLayoutEffect(T,j)},ne.useMemo=function(T,j){return w.H.useMemo(T,j)},ne.useOptimistic=function(T,j){return w.H.useOptimistic(T,j)},ne.useReducer=function(T,j,V){return w.H.useReducer(T,j,V)},ne.useRef=function(T){return w.H.useRef(T)},ne.useState=function(T){return w.H.useState(T)},ne.useSyncExternalStore=function(T,j,V){return w.H.useSyncExternalStore(T,j,V)},ne.useTransition=function(){return w.H.useTransition()},ne.version="19.0.0",ne}var s0;function wd(){return s0||(s0=1,dh.exports=eb()),dh.exports}var Ps=wd();const sc=o_(Ps);var ph={exports:{}},Go={},mh={exports:{}},gh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function nb(){return o0||(o0=1,function(l){function t(nt,ut){var K=nt.length;nt.push(ut);t:for(;0<K;){var $=K-1>>>1,T=nt[$];if(0<o(T,ut))nt[$]=ut,nt[K]=T,K=$;else break t}}function n(nt){return nt.length===0?null:nt[0]}function a(nt){if(nt.length===0)return null;var ut=nt[0],K=nt.pop();if(K!==ut){nt[0]=K;t:for(var $=0,T=nt.length,j=T>>>1;$<j;){var V=2*($+1)-1,I=nt[V],Y=V+1,pt=nt[Y];if(0>o(I,K))Y<T&&0>o(pt,I)?(nt[$]=pt,nt[Y]=K,$=Y):(nt[$]=I,nt[V]=K,$=V);else if(Y<T&&0>o(pt,K))nt[$]=pt,nt[Y]=K,$=Y;else break t}}return ut}function o(nt,ut){var K=nt.sortIndex-ut.sortIndex;return K!==0?K:nt.id-ut.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();l.unstable_now=function(){return h.now()-f}}var m=[],p=[],g=1,_=null,y=3,M=!1,E=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function D(nt){for(var ut=n(p);ut!==null;){if(ut.callback===null)a(p);else if(ut.startTime<=nt)a(p),ut.sortIndex=ut.expirationTime,t(m,ut);else break;ut=n(p)}}function z(nt){if(x=!1,D(nt),!E)if(n(m)!==null)E=!0,J();else{var ut=n(p);ut!==null&&ct(z,ut.startTime-nt)}}var w=!1,F=-1,it=5,L=-1;function O(){return!(l.unstable_now()-L<it)}function k(){if(w){var nt=l.unstable_now();L=nt;var ut=!0;try{t:{E=!1,x&&(x=!1,S(F),F=-1),M=!0;var K=y;try{e:{for(D(nt),_=n(m);_!==null&&!(_.expirationTime>nt&&O());){var $=_.callback;if(typeof $=="function"){_.callback=null,y=_.priorityLevel;var T=$(_.expirationTime<=nt);if(nt=l.unstable_now(),typeof T=="function"){_.callback=T,D(nt),ut=!0;break e}_===n(m)&&a(m),D(nt)}else a(m);_=n(m)}if(_!==null)ut=!0;else{var j=n(p);j!==null&&ct(z,j.startTime-nt),ut=!1}}break t}finally{_=null,y=K,M=!1}ut=void 0}}finally{ut?vt():w=!1}}}var vt;if(typeof A=="function")vt=function(){A(k)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,G=St.port2;St.port1.onmessage=k,vt=function(){G.postMessage(null)}}else vt=function(){v(k,0)};function J(){w||(w=!0,vt())}function ct(nt,ut){F=v(function(){nt(l.unstable_now())},ut)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(nt){nt.callback=null},l.unstable_continueExecution=function(){E||M||(E=!0,J())},l.unstable_forceFrameRate=function(nt){0>nt||125<nt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):it=0<nt?Math.floor(1e3/nt):5},l.unstable_getCurrentPriorityLevel=function(){return y},l.unstable_getFirstCallbackNode=function(){return n(m)},l.unstable_next=function(nt){switch(y){case 1:case 2:case 3:var ut=3;break;default:ut=y}var K=y;y=ut;try{return nt()}finally{y=K}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(nt,ut){switch(nt){case 1:case 2:case 3:case 4:case 5:break;default:nt=3}var K=y;y=nt;try{return ut()}finally{y=K}},l.unstable_scheduleCallback=function(nt,ut,K){var $=l.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?$+K:$):K=$,nt){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=K+T,nt={id:g++,callback:ut,priorityLevel:nt,startTime:K,expirationTime:T,sortIndex:-1},K>$?(nt.sortIndex=K,t(p,nt),n(m)===null&&nt===n(p)&&(x?(S(F),F=-1):x=!0,ct(z,K-$))):(nt.sortIndex=T,t(m,nt),E||M||(E=!0,J())),nt},l.unstable_shouldYield=O,l.unstable_wrapCallback=function(nt){var ut=y;return function(){var K=y;y=ut;try{return nt.apply(this,arguments)}finally{y=K}}}}(gh)),gh}var l0;function ib(){return l0||(l0=1,mh.exports=nb()),mh.exports}var vh={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function ab(){if(u0)return bn;u0=1;var l=wd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},bn.flushSync=function(m){var p=h.T,g=a.p;try{if(h.T=null,a.p=2,m)return m()}finally{h.T=p,a.p=g,a.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},bn.requestFormReset=function(m){a.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.0.0",bn}var c0;function rb(){if(c0)return vh.exports;c0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),vh.exports=ab(),vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function sb(){if(f0)return Go;f0=1;var l=ib(),t=wd(),n=rb();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),M=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),z=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function L(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case f:return"Portal";case g:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case E:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case S:return i=e.displayName||null,i!==null?i:L(e.type)||"Memo";case A:i=e._payload,e=e._init;try{return L(e(i))}catch{}}return null}var O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=Object.assign,vt,St;function G(e){if(vt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);vt=i&&i[1]||"",St=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+e+St}var J=!1;function ct(e,i){if(!e||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(i){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(dt){var lt=dt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(dt){lt=dt}e.call(bt.prototype)}}else{try{throw Error()}catch(dt){lt=dt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(dt){if(dt&&lt&&typeof dt.stack=="string")return[dt.stack,lt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),b=d[0],C=d[1];if(b&&C){var B=b.split(`
`),q=C.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<q.length&&!q[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===q.length)for(s=B.length-1,c=q.length-1;1<=s&&0<=c&&B[s]!==q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==q[c]){var mt=`
`+B[s].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=s&&0<=c);break}}}finally{J=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?G(r):""}function nt(e){switch(e.tag){case 26:case 27:case 5:return G(e.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return e=ct(e.type,!1),e;case 11:return e=ct(e.type.render,!1),e;case 1:return e=ct(e.type,!0),e;default:return""}}function ut(e){try{var i="";do i+=nt(e),e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function K(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,i.flags&4098&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function $(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function T(e){if(K(e)!==e)throw Error(a(188))}function j(e){var i=e.alternate;if(!i){if(i=K(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,s=i;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){r=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return T(c),e;if(d===s)return T(c),i;d=d.sibling}throw Error(a(188))}if(r.return!==s.return)r=c,s=d;else{for(var b=!1,C=c.child;C;){if(C===r){b=!0,r=c,s=d;break}if(C===s){b=!0,s=c,r=d;break}C=C.sibling}if(!b){for(C=d.child;C;){if(C===r){b=!0,r=d,s=c;break}if(C===s){b=!0,s=d,r=c;break}C=C.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==s)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function V(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=V(e),i!==null)return i;e=e.sibling}return null}var I=Array.isArray,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},U=[],Ct=-1;function st(e){return{current:e}}function wt(e){0>Ct||(e.current=U[Ct],U[Ct]=null,Ct--)}function _t(e,i){Ct++,U[Ct]=e.current,e.current=i}var Ot=st(null),At=st(null),Dt=st(null),ie=st(null);function kt(e,i){switch(_t(Dt,i),_t(At,e),_t(Ot,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?Ug(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=Ug(e),i=Pg(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}wt(Ot),_t(Ot,i)}function Kt(){wt(Ot),wt(At),wt(Dt)}function Yt(e){e.memoizedState!==null&&_t(ie,e);var i=Ot.current,r=Pg(i,e.type);i!==r&&(_t(At,e),_t(Ot,r))}function Jt(e){At.current===e&&(wt(Ot),wt(At)),ie.current===e&&(wt(ie),Po._currentValue=pt)}var re=Object.prototype.hasOwnProperty,me=l.unstable_scheduleCallback,Ve=l.unstable_cancelCallback,N=l.unstable_shouldYield,R=l.unstable_requestPaint,Q=l.unstable_now,yt=l.unstable_getCurrentPriorityLevel,Et=l.unstable_ImmediatePriority,Lt=l.unstable_UserBlockingPriority,Ht=l.unstable_NormalPriority,H=l.unstable_LowPriority,at=l.unstable_IdlePriority,Ut=l.log,Nt=l.unstable_setDisableYieldValue,Rt=null,Pt=null;function Gt(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Rt,e,void 0,(e.current.flags&128)===128)}catch{}}function Zt(e){if(typeof Ut=="function"&&Nt(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Rt,e)}catch{}}var qt=Math.clz32?Math.clz32:gt,be=Math.log,Z=Math.LN2;function gt(e){return e>>>=0,e===0?32:31-(be(e)/Z|0)|0}var Mt=128,zt=4194304;function Ft(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fe(e,i){var r=e.pendingLanes;if(r===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes,b=e.warmLanes;e=e.finishedLanes!==0;var C=r&134217727;return C!==0?(r=C&~c,r!==0?s=Ft(r):(d&=C,d!==0?s=Ft(d):e||(b=C&~b,b!==0&&(s=Ft(b))))):(C=r&~c,C!==0?s=Ft(C):d!==0?s=Ft(d):e||(b=r&~b,b!==0&&(s=Ft(b)))),s===0?0:i!==0&&i!==s&&!(i&c)&&(c=s&-s,b=i&-i,c>=b||c===32&&(b&4194176)!==0)?i:s}function Ue(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function an(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mi(){var e=Mt;return Mt<<=1,!(Mt&4194176)&&(Mt=128),e}function De(){var e=zt;return zt<<=1,!(zt&62914560)&&(zt=4194304),e}function Pn(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function rn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cl(e,i,r,s,c,d){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,B=e.expirationTimes,q=e.hiddenUpdates;for(r=b&~r;0<r;){var mt=31-qt(r),bt=1<<mt;C[mt]=0,B[mt]=-1;var lt=q[mt];if(lt!==null)for(q[mt]=null,mt=0;mt<lt.length;mt++){var dt=lt[mt];dt!==null&&(dt.lane&=-536870913)}r&=~bt}s!==0&&fl(e,s,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~i))}function fl(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var s=31-qt(i);e.entangledLanes|=i,e.entanglements[s]=e.entanglements[s]|1073741824|r&4194218}function hl(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var s=31-qt(r),c=1<<s;c&i|e[s]&i&&(e[s]|=i),r&=~c}}function dl(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function P(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function ot(e,i){var r=Y.p;try{return Y.p=e,i()}finally{Y.p=r}}var ht=Math.random().toString(36).slice(2),tt="__reactFiber$"+ht,ft="__reactProps$"+ht,Vt="__reactContainer$"+ht,jt="__reactEvents$"+ht,ae="__reactListeners$"+ht,ee="__reactHandles$"+ht,ve="__reactResources$"+ht,te="__reactMarker$"+ht;function ue(e){delete e[tt],delete e[ft],delete e[jt],delete e[ae],delete e[ee]}function Se(e){var i=e[tt];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Vt]||r[tt]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Fg(e);e!==null;){if(r=e[tt])return r;e=Fg(e)}return i}e=r,r=e.parentNode}return null}function Dn(e){if(e=e[tt]||e[Vt]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function jn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Nn(e){var i=e[ve];return i||(i=e[ve]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function we(e){e[te]=!0}var _e=new Set,Bi={};function Ee(e,i){Qe(e,i),Qe(e+"Capture",i)}function Qe(e,i){for(Bi[e]=i,e=0;e<i.length;e++)_e.add(i[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lr={},on={};function Fi(e){return re.call(on,e)?!0:re.call(Lr,e)?!1:Ya.test(e)?on[e]=!0:(Lr[e]=!0,!1)}function fa(e,i,r){if(Fi(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var s=i.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function ln(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Bn(e,i,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+s)}}function Ln(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qs(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function j_(e){var i=qs(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),s=""+e[i];if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,d=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(b){s=""+b,d.call(this,b)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function pl(e){e._valueTracker||(e._valueTracker=j_(e))}function Fd(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),s="";return e&&(s=qs(e)?e.checked?"true":"false":e.value),e=s,e!==r?(i.setValue(e),!0):!1}function ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z_=/[\n"\\]/g;function Zn(e){return e.replace(Z_,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cc(e,i,r,s,c,d,b,C){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ln(i)):e.value!==""+Ln(i)&&(e.value=""+Ln(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?fc(e,b,Ln(i)):r!=null?fc(e,b,Ln(r)):s!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Ln(C):e.removeAttribute("name")}function Hd(e,i,r,s,c,d,b,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;r=r!=null?""+Ln(r):"",i=i!=null?""+Ln(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=C?e.checked:!!s,e.defaultChecked=!!s,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function fc(e,i,r){i==="number"&&ml(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Rr(e,i,r,s){if(e=e.options,i){i={};for(var c=0;c<r.length;c++)i["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=i.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Ln(r),i=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function Gd(e,i,r){if(i!=null&&(i=""+Ln(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Ln(r):""}function Id(e,i,r,s){if(i==null){if(s!=null){if(r!=null)throw Error(a(92));if(I(s)){if(1<s.length)throw Error(a(93));s=s[0]}r=s}r==null&&(r=""),i=r}r=Ln(i),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s)}function zr(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var $_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vd(e,i,r){var s=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":s?e.setProperty(i,r):typeof r!="number"||r===0||$_.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function kd(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||i!=null&&i.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in i)s=i[c],i.hasOwnProperty(c)&&r[c]!==s&&Vd(e,c,s)}else for(var d in i)i.hasOwnProperty(d)&&Vd(e,d,i[d])}function hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return K_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var dc=null;function pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Ur=null;function Wd(e){var i=Dn(e);if(i&&(e=i.stateNode)){var r=e[ft]||null;t:switch(e=i.stateNode,i.type){case"input":if(cc(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Zn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var s=r[i];if(s!==e&&s.form===e.form){var c=s[ft]||null;if(!c)throw Error(a(90));cc(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<r.length;i++)s=r[i],s.form===e.form&&Fd(s)}break t;case"textarea":Gd(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Rr(e,!!r.multiple,i,!1)}}}var mc=!1;function Xd(e,i,r){if(mc)return e(i,r);mc=!0;try{var s=e(i);return s}finally{if(mc=!1,(Or!==null||Ur!==null)&&(Jl(),Or&&(i=Or,e=Ur,Ur=Or=null,Wd(i),e)))for(i=0;i<e.length;i++)Wd(e[i])}}function js(e,i){var r=e.stateNode;if(r===null)return null;var s=r[ft]||null;if(s===null)return null;r=s[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var gc=!1;if(sn)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{gc=!1}var ha=null,vc=null,vl=null;function Yd(){if(vl)return vl;var e,i=vc,r=i.length,s,c="value"in ha?ha.value:ha.textContent,d=c.length;for(e=0;e<r&&i[e]===c[e];e++);var b=r-e;for(s=1;s<=b&&i[r-s]===c[d-s];s++);return vl=c.slice(e,1<s?1-s:void 0)}function _l(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function qd(){return!1}function Rn(e){function i(r,s,c,d,b){this._reactName=r,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:qd,this.isPropagationStopped=qd,this}return k(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),i}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Rn(qa),$s=k({},qa,{view:0,detail:0}),J_=Rn($s),_c,yc,Qs,bl=k({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(_c=e.screenX-Qs.screenX,yc=e.screenY-Qs.screenY):yc=_c=0,Qs=e),_c)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),jd=Rn(bl),ty=k({},bl,{dataTransfer:0}),ey=Rn(ty),ny=k({},$s,{relatedTarget:0}),xc=Rn(ny),iy=k({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=Rn(iy),ry=k({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sy=Rn(ry),oy=k({},qa,{data:0}),Zd=Rn(oy),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=cy[e])?!!i[e]:!1}function bc(){return fy}var hy=k({},$s,{key:function(e){if(e.key){var i=ly[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dy=Rn(hy),py=k({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Rn(py),my=k({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),gy=Rn(my),vy=k({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Rn(vy),yy=k({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=Rn(yy),by=k({},qa,{newState:0,oldState:0}),Sy=Rn(by),My=[9,13,27,32],Sc=sn&&"CompositionEvent"in window,Ks=null;sn&&"documentMode"in document&&(Ks=document.documentMode);var wy=sn&&"TextEvent"in window&&!Ks,Qd=sn&&(!Sc||Ks&&8<Ks&&11>=Ks),Kd=" ",Jd=!1;function tp(e,i){switch(e){case"keyup":return My.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function Ey(e,i){switch(e){case"compositionend":return ep(i);case"keypress":return i.which!==32?null:(Jd=!0,Kd);case"textInput":return e=i.data,e===Kd&&Jd?null:e;default:return null}}function Ay(e,i){if(Pr)return e==="compositionend"||!Sc&&tp(e,i)?(e=Yd(),vl=vc=ha=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qd&&i.locale!=="ko"?null:i.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ty[e.type]:i==="textarea"}function ip(e,i,r,s){Or?Ur?Ur.push(s):Ur=[s]:Or=s,i=au(i,"onChange"),0<i.length&&(r=new xl("onChange","change",null,r,s),e.push({event:r,listeners:i}))}var Js=null,to=null;function Cy(e){Dg(e,0)}function Sl(e){var i=jn(e);if(Fd(i))return e}function ap(e,i){if(e==="change")return i}var rp=!1;if(sn){var Mc;if(sn){var wc="oninput"in document;if(!wc){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),wc=typeof sp.oninput=="function"}Mc=wc}else Mc=!1;rp=Mc&&(!document.documentMode||9<document.documentMode)}function op(){Js&&(Js.detachEvent("onpropertychange",lp),to=Js=null)}function lp(e){if(e.propertyName==="value"&&Sl(to)){var i=[];ip(i,to,e,pc(e)),Xd(Cy,i)}}function Dy(e,i,r){e==="focusin"?(op(),Js=i,to=r,Js.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function Ly(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(to)}function Ry(e,i){if(e==="click")return Sl(i)}function zy(e,i){if(e==="input"||e==="change")return Sl(i)}function Oy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Fn=typeof Object.is=="function"?Object.is:Oy;function eo(e,i){if(Fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),s=Object.keys(i);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var c=r[s];if(!re.call(i,c)||!Fn(e[c],i[c]))return!1}return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,i){var r=up(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=i&&s>=i)return{node:r,offset:i-e};e=s}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=up(r)}}function fp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?fp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ml(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=ml(e.document)}return i}function Ec(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function Uy(e,i){var r=hp(i);i=e.focusedElem;var s=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&fp(i.ownerDocument.documentElement,i)){if(s!==null&&Ec(i)){if(e=s.start,r=s.end,r===void 0&&(r=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(r,i.value.length);else if(r=(e=i.ownerDocument||document)&&e.defaultView||window,r.getSelection){r=r.getSelection();var c=i.textContent.length,d=Math.min(s.start,c);s=s.end===void 0?d:Math.min(s.end,c),!r.extend&&d>s&&(c=s,s=d,d=c),c=cp(i,d);var b=cp(i,s);c&&b&&(r.rangeCount!==1||r.anchorNode!==c.node||r.anchorOffset!==c.offset||r.focusNode!==b.node||r.focusOffset!==b.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),r.removeAllRanges(),d>s?(r.addRange(e),r.extend(b.node,b.offset)):(e.setEnd(b.node,b.offset),r.addRange(e)))}}for(e=[],r=i;r=r.parentNode;)r.nodeType===1&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)r=e[i],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Py=sn&&"documentMode"in document&&11>=document.documentMode,Nr=null,Ac=null,no=null,Tc=!1;function dp(e,i,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tc||Nr==null||Nr!==ml(s)||(s=Nr,"selectionStart"in s&&Ec(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),no&&eo(no,s)||(no=s,s=au(Ac,"onSelect"),0<s.length&&(i=new xl("onSelect","select",null,i,r),e.push({event:i,listeners:s}),i.target=Nr)))}function ja(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Br={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Cc={},pp={};sn&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Za(e){if(Cc[e])return Cc[e];if(!Br[e])return e;var i=Br[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in pp)return Cc[e]=i[r];return e}var mp=Za("animationend"),gp=Za("animationiteration"),vp=Za("animationstart"),Ny=Za("transitionrun"),By=Za("transitionstart"),Fy=Za("transitioncancel"),_p=Za("transitionend"),yp=new Map,xp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function hi(e,i){yp.set(e,i),Ee(i,[e])}var $n=[],Fr=0,Dc=0;function Ml(){for(var e=Fr,i=Dc=Fr=0;i<e;){var r=$n[i];$n[i++]=null;var s=$n[i];$n[i++]=null;var c=$n[i];$n[i++]=null;var d=$n[i];if($n[i++]=null,s!==null&&c!==null){var b=s.pending;b===null?c.next=c:(c.next=b.next,b.next=c),s.pending=c}d!==0&&bp(r,c,d)}}function wl(e,i,r,s){$n[Fr++]=e,$n[Fr++]=i,$n[Fr++]=r,$n[Fr++]=s,Dc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Lc(e,i,r,s){return wl(e,i,r,s),El(e)}function da(e,i){return wl(e,null,null,i),El(e)}function bp(e,i,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var c=!1,d=e.return;d!==null;)d.childLanes|=r,s=d.alternate,s!==null&&(s.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;c&&i!==null&&e.tag===3&&(d=e.stateNode,c=31-qt(r),d=d.hiddenUpdates,e=d[c],e===null?d[c]=[i]:e.push(i),i.lane=r|536870912)}function El(e){if(50<Co)throw Co=0,Bf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Hr={},Sp=new WeakMap;function Qn(e,i){if(typeof e=="object"&&e!==null){var r=Sp.get(e);return r!==void 0?r:(i={value:e,source:i,stack:ut(i)},Sp.set(e,i),i)}return{value:e,source:i,stack:ut(i)}}var Gr=[],Ir=0,Al=null,Tl=0,Kn=[],Jn=0,$a=null,Hi=1,Gi="";function Qa(e,i){Gr[Ir++]=Tl,Gr[Ir++]=Al,Al=e,Tl=i}function Mp(e,i,r){Kn[Jn++]=Hi,Kn[Jn++]=Gi,Kn[Jn++]=$a,$a=e;var s=Hi;e=Gi;var c=32-qt(s)-1;s&=~(1<<c),r+=1;var d=32-qt(i)+c;if(30<d){var b=c-c%5;d=(s&(1<<b)-1).toString(32),s>>=b,c-=b,Hi=1<<32-qt(i)+c|r<<c|s,Gi=d+e}else Hi=1<<d|r<<c|s,Gi=e}function Rc(e){e.return!==null&&(Qa(e,1),Mp(e,1,0))}function zc(e){for(;e===Al;)Al=Gr[--Ir],Gr[Ir]=null,Tl=Gr[--Ir],Gr[Ir]=null;for(;e===$a;)$a=Kn[--Jn],Kn[Jn]=null,Gi=Kn[--Jn],Kn[Jn]=null,Hi=Kn[--Jn],Kn[Jn]=null}var En=null,pn=null,ye=!1,di=null,wi=!1,Oc=Error(a(519));function Ka(e){var i=Error(a(418,""));throw ro(Qn(i,e)),Oc}function wp(e){var i=e.stateNode,r=e.type,s=e.memoizedProps;switch(i[tt]=e,i[ft]=s,r){case"dialog":he("cancel",i),he("close",i);break;case"iframe":case"object":case"embed":he("load",i);break;case"video":case"audio":for(r=0;r<Lo.length;r++)he(Lo[r],i);break;case"source":he("error",i);break;case"img":case"image":case"link":he("error",i),he("load",i);break;case"details":he("toggle",i);break;case"input":he("invalid",i),Hd(i,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),pl(i);break;case"select":he("invalid",i);break;case"textarea":he("invalid",i),Id(i,s.value,s.defaultValue,s.children),pl(i)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||s.suppressHydrationWarning===!0||Og(i.textContent,r)?(s.popover!=null&&(he("beforetoggle",i),he("toggle",i)),s.onScroll!=null&&he("scroll",i),s.onScrollEnd!=null&&he("scrollend",i),s.onClick!=null&&(i.onclick=ru),i=!0):i=!1,i||Ka(e)}function Ep(e){for(En=e.return;En;)switch(En.tag){case 3:case 27:wi=!0;return;case 5:case 13:wi=!1;return;default:En=En.return}}function io(e){if(e!==En)return!1;if(!ye)return Ep(e),ye=!0,!1;var i=!1,r;if((r=e.tag!==3&&e.tag!==27)&&((r=e.tag===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||th(e.type,e.memoizedProps)),r=!r),r&&(i=!0),i&&pn&&Ka(e),Ep(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(i===0){pn=mi(e.nextSibling);break t}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;e=e.nextSibling}pn=null}}else pn=En?mi(e.stateNode.nextSibling):null;return!0}function ao(){pn=En=null,ye=!1}function ro(e){di===null?di=[e]:di.push(e)}var so=Error(a(460)),Ap=Error(a(474)),Uc={then:function(){}};function Tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cl(){}function Cp(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Cl,Cl),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===so?Error(a(483)):e;default:if(typeof i.status=="string")i.then(Cl,Cl);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(s){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=s}},function(s){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=s}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===so?Error(a(483)):e}throw oo=i,so}}var oo=null;function Dp(){if(oo===null)throw Error(a(459));var e=oo;return oo=null,e}var Vr=null,lo=0;function Dl(e){var i=lo;return lo+=1,Vr===null&&(Vr=[]),Cp(Vr,e,i)}function uo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ll(e,i){throw i.$$typeof===u?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Lp(e){var i=e._init;return i(e._payload)}function Rp(e){function i(et,W){if(e){var rt=et.deletions;rt===null?(et.deletions=[W],et.flags|=16):rt.push(W)}}function r(et,W){if(!e)return null;for(;W!==null;)i(et,W),W=W.sibling;return null}function s(et){for(var W=new Map;et!==null;)et.key!==null?W.set(et.key,et):W.set(et.index,et),et=et.sibling;return W}function c(et,W){return et=Ea(et,W),et.index=0,et.sibling=null,et}function d(et,W,rt){return et.index=rt,e?(rt=et.alternate,rt!==null?(rt=rt.index,rt<W?(et.flags|=33554434,W):rt):(et.flags|=33554434,W)):(et.flags|=1048576,W)}function b(et){return e&&et.alternate===null&&(et.flags|=33554434),et}function C(et,W,rt,xt){return W===null||W.tag!==6?(W=Df(rt,et.mode,xt),W.return=et,W):(W=c(W,rt),W.return=et,W)}function B(et,W,rt,xt){var Bt=rt.type;return Bt===m?mt(et,W,rt.props.children,xt,rt.key):W!==null&&(W.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===A&&Lp(Bt)===W.type)?(W=c(W,rt.props),uo(W,rt),W.return=et,W):(W=jl(rt.type,rt.key,rt.props,null,et.mode,xt),uo(W,rt),W.return=et,W)}function q(et,W,rt,xt){return W===null||W.tag!==4||W.stateNode.containerInfo!==rt.containerInfo||W.stateNode.implementation!==rt.implementation?(W=Lf(rt,et.mode,xt),W.return=et,W):(W=c(W,rt.children||[]),W.return=et,W)}function mt(et,W,rt,xt,Bt){return W===null||W.tag!==7?(W=lr(rt,et.mode,xt,Bt),W.return=et,W):(W=c(W,rt),W.return=et,W)}function bt(et,W,rt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Df(""+W,et.mode,rt),W.return=et,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case h:return rt=jl(W.type,W.key,W.props,null,et.mode,rt),uo(rt,W),rt.return=et,rt;case f:return W=Lf(W,et.mode,rt),W.return=et,W;case A:var xt=W._init;return W=xt(W._payload),bt(et,W,rt)}if(I(W)||F(W))return W=lr(W,et.mode,rt,null),W.return=et,W;if(typeof W.then=="function")return bt(et,Dl(W),rt);if(W.$$typeof===M)return bt(et,Xl(et,W),rt);Ll(et,W)}return null}function lt(et,W,rt,xt){var Bt=W!==null?W.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Bt!==null?null:C(et,W,""+rt,xt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case h:return rt.key===Bt?B(et,W,rt,xt):null;case f:return rt.key===Bt?q(et,W,rt,xt):null;case A:return Bt=rt._init,rt=Bt(rt._payload),lt(et,W,rt,xt)}if(I(rt)||F(rt))return Bt!==null?null:mt(et,W,rt,xt,null);if(typeof rt.then=="function")return lt(et,W,Dl(rt),xt);if(rt.$$typeof===M)return lt(et,W,Xl(et,rt),xt);Ll(et,rt)}return null}function dt(et,W,rt,xt,Bt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return et=et.get(rt)||null,C(W,et,""+xt,Bt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case h:return et=et.get(xt.key===null?rt:xt.key)||null,B(W,et,xt,Bt);case f:return et=et.get(xt.key===null?rt:xt.key)||null,q(W,et,xt,Bt);case A:var le=xt._init;return xt=le(xt._payload),dt(et,W,rt,xt,Bt)}if(I(xt)||F(xt))return et=et.get(rt)||null,mt(W,et,xt,Bt,null);if(typeof xt.then=="function")return dt(et,W,rt,Dl(xt),Bt);if(xt.$$typeof===M)return dt(et,W,rt,Xl(W,xt),Bt);Ll(W,xt)}return null}function It(et,W,rt,xt){for(var Bt=null,le=null,Wt=W,Xt=W=0,fn=null;Wt!==null&&Xt<rt.length;Xt++){Wt.index>Xt?(fn=Wt,Wt=null):fn=Wt.sibling;var xe=lt(et,Wt,rt[Xt],xt);if(xe===null){Wt===null&&(Wt=fn);break}e&&Wt&&xe.alternate===null&&i(et,Wt),W=d(xe,W,Xt),le===null?Bt=xe:le.sibling=xe,le=xe,Wt=fn}if(Xt===rt.length)return r(et,Wt),ye&&Qa(et,Xt),Bt;if(Wt===null){for(;Xt<rt.length;Xt++)Wt=bt(et,rt[Xt],xt),Wt!==null&&(W=d(Wt,W,Xt),le===null?Bt=Wt:le.sibling=Wt,le=Wt);return ye&&Qa(et,Xt),Bt}for(Wt=s(Wt);Xt<rt.length;Xt++)fn=dt(Wt,et,Xt,rt[Xt],xt),fn!==null&&(e&&fn.alternate!==null&&Wt.delete(fn.key===null?Xt:fn.key),W=d(fn,W,Xt),le===null?Bt=fn:le.sibling=fn,le=fn);return e&&Wt.forEach(function(za){return i(et,za)}),ye&&Qa(et,Xt),Bt}function $t(et,W,rt,xt){if(rt==null)throw Error(a(151));for(var Bt=null,le=null,Wt=W,Xt=W=0,fn=null,xe=rt.next();Wt!==null&&!xe.done;Xt++,xe=rt.next()){Wt.index>Xt?(fn=Wt,Wt=null):fn=Wt.sibling;var za=lt(et,Wt,xe.value,xt);if(za===null){Wt===null&&(Wt=fn);break}e&&Wt&&za.alternate===null&&i(et,Wt),W=d(za,W,Xt),le===null?Bt=za:le.sibling=za,le=za,Wt=fn}if(xe.done)return r(et,Wt),ye&&Qa(et,Xt),Bt;if(Wt===null){for(;!xe.done;Xt++,xe=rt.next())xe=bt(et,xe.value,xt),xe!==null&&(W=d(xe,W,Xt),le===null?Bt=xe:le.sibling=xe,le=xe);return ye&&Qa(et,Xt),Bt}for(Wt=s(Wt);!xe.done;Xt++,xe=rt.next())xe=dt(Wt,et,Xt,xe.value,xt),xe!==null&&(e&&xe.alternate!==null&&Wt.delete(xe.key===null?Xt:xe.key),W=d(xe,W,Xt),le===null?Bt=xe:le.sibling=xe,le=xe);return e&&Wt.forEach(function(Kx){return i(et,Kx)}),ye&&Qa(et,Xt),Bt}function He(et,W,rt,xt){if(typeof rt=="object"&&rt!==null&&rt.type===m&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case h:t:{for(var Bt=rt.key;W!==null;){if(W.key===Bt){if(Bt=rt.type,Bt===m){if(W.tag===7){r(et,W.sibling),xt=c(W,rt.props.children),xt.return=et,et=xt;break t}}else if(W.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===A&&Lp(Bt)===W.type){r(et,W.sibling),xt=c(W,rt.props),uo(xt,rt),xt.return=et,et=xt;break t}r(et,W);break}else i(et,W);W=W.sibling}rt.type===m?(xt=lr(rt.props.children,et.mode,xt,rt.key),xt.return=et,et=xt):(xt=jl(rt.type,rt.key,rt.props,null,et.mode,xt),uo(xt,rt),xt.return=et,et=xt)}return b(et);case f:t:{for(Bt=rt.key;W!==null;){if(W.key===Bt)if(W.tag===4&&W.stateNode.containerInfo===rt.containerInfo&&W.stateNode.implementation===rt.implementation){r(et,W.sibling),xt=c(W,rt.children||[]),xt.return=et,et=xt;break t}else{r(et,W);break}else i(et,W);W=W.sibling}xt=Lf(rt,et.mode,xt),xt.return=et,et=xt}return b(et);case A:return Bt=rt._init,rt=Bt(rt._payload),He(et,W,rt,xt)}if(I(rt))return It(et,W,rt,xt);if(F(rt)){if(Bt=F(rt),typeof Bt!="function")throw Error(a(150));return rt=Bt.call(rt),$t(et,W,rt,xt)}if(typeof rt.then=="function")return He(et,W,Dl(rt),xt);if(rt.$$typeof===M)return He(et,W,Xl(et,rt),xt);Ll(et,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,W!==null&&W.tag===6?(r(et,W.sibling),xt=c(W,rt),xt.return=et,et=xt):(r(et,W),xt=Df(rt,et.mode,xt),xt.return=et,et=xt),b(et)):r(et,W)}return function(et,W,rt,xt){try{lo=0;var Bt=He(et,W,rt,xt);return Vr=null,Bt}catch(Wt){if(Wt===so)throw Wt;var le=ii(29,Wt,null,et.mode);return le.lanes=xt,le.return=et,le}finally{}}}var Ja=Rp(!0),zp=Rp(!1),kr=st(null),Rl=st(0);function Op(e,i){e=Qi,_t(Rl,e),_t(kr,i),Qi=e|i.baseLanes}function Pc(){_t(Rl,Qi),_t(kr,kr.current)}function Nc(){Qi=Rl.current,wt(kr),wt(Rl)}var ti=st(null),Ei=null;function pa(e){var i=e.alternate;_t(Ke,Ke.current&1),_t(ti,e),Ei===null&&(i===null||kr.current!==null||i.memoizedState!==null)&&(Ei=e)}function Up(e){if(e.tag===22){if(_t(Ke,Ke.current),_t(ti,e),Ei===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ei=e)}}else ma()}function ma(){_t(Ke,Ke.current),_t(ti,ti.current)}function Ii(e){wt(ti),Ei===e&&(Ei=null),wt(Ke)}var Ke=st(0);function zl(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Gy=l.unstable_scheduleCallback,Iy=l.unstable_NormalPriority,Je={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new Hy,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&Gy(Iy,function(){e.controller.abort()})}var fo=null,Fc=0,Wr=0,Xr=null;function Vy(e,i){if(fo===null){var r=fo=[];Fc=0,Wr=Xf(),Xr={status:"pending",value:void 0,then:function(s){r.push(s)}}}return Fc++,i.then(Pp,Pp),i}function Pp(){if(--Fc===0&&fo!==null){Xr!==null&&(Xr.status="fulfilled");var e=fo;fo=null,Wr=0,Xr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ky(e,i){var r=[],s={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){s.status="fulfilled",s.value=i;for(var c=0;c<r.length;c++)(0,r[c])(i)},function(c){for(s.status="rejected",s.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),s}var Np=O.S;O.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Vy(e,i),Np!==null&&Np(e,i)};var tr=st(null);function Hc(){var e=tr.current;return e!==null?e:ze.pooledCache}function Ol(e,i){i===null?_t(tr,tr.current):_t(tr,i.pool)}function Bp(){var e=Hc();return e===null?null:{parent:Je._currentValue,pool:e}}var ga=0,se=null,Ae=null,Ye=null,Ul=!1,Yr=!1,er=!1,Pl=0,ho=0,qr=null,Wy=0;function ke(){throw Error(a(321))}function Gc(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Fn(e[r],i[r]))return!1;return!0}function Ic(e,i,r,s,c,d){return ga=d,se=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=e===null||e.memoizedState===null?nr:va,er=!1,d=r(s,c),er=!1,Yr&&(d=Hp(i,r,s,c)),Fp(e),d}function Fp(e){O.H=Ai;var i=Ae!==null&&Ae.next!==null;if(ga=0,Ye=Ae=se=null,Ul=!1,ho=0,qr=null,i)throw Error(a(300));e===null||un||(e=e.dependencies,e!==null&&Wl(e)&&(un=!0))}function Hp(e,i,r,s){se=e;var c=0;do{if(Yr&&(qr=null),ho=0,Yr=!1,25<=c)throw Error(a(301));if(c+=1,Ye=Ae=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=ir,d=i(r,s)}while(Yr);return d}function Xy(){var e=O.H,i=e.useState()[0];return i=typeof i.then=="function"?po(i):i,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(se.flags|=1024),i}function Vc(){var e=Pl!==0;return Pl=0,e}function kc(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Wc(e){if(Ul){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ul=!1}ga=0,Ye=Ae=se=null,Yr=!1,ho=Pl=0,qr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?se.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function qe(){if(Ae===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var i=Ye===null?se.memoizedState:Ye.next;if(i!==null)Ye=i,Ae=e;else{if(e===null)throw se.alternate===null?Error(a(467)):Error(a(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ye===null?se.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}var Nl;Nl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function po(e){var i=ho;return ho+=1,qr===null&&(qr=[]),e=Cp(qr,e,i),i=se,(Ye===null?i.memoizedState:Ye.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?nr:va),e}function Bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===M)return xn(e)}throw Error(a(438,String(e)))}function Xc(e){var i=null,r=se.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var s=se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(i={data:s.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Nl(),se.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),s=0;s<e;s++)r[s]=z;return i.index++,r}function Vi(e,i){return typeof i=="function"?i(e):i}function Fl(e){var i=qe();return Yc(i,Ae,e)}function Yc(e,i,r){var s=e.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=r;var c=e.baseQueue,d=s.pending;if(d!==null){if(c!==null){var b=c.next;c.next=d.next,d.next=b}i.baseQueue=c=d,s.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{i=c.next;var C=b=null,B=null,q=i,mt=!1;do{var bt=q.lane&-536870913;if(bt!==q.lane?(ge&bt)===bt:(ga&bt)===bt){var lt=q.revertLane;if(lt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),bt===Wr&&(mt=!0);else if((ga&lt)===lt){q=q.next,lt===Wr&&(mt=!0);continue}else bt={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},B===null?(C=B=bt,b=d):B=B.next=bt,se.lanes|=lt,Aa|=lt;bt=q.action,er&&r(d,bt),d=q.hasEagerState?q.eagerState:r(d,bt)}else lt={lane:bt,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},B===null?(C=B=lt,b=d):B=B.next=lt,se.lanes|=bt,Aa|=bt;q=q.next}while(q!==null&&q!==i);if(B===null?b=d:B.next=C,!Fn(d,e.memoizedState)&&(un=!0,mt&&(r=Xr,r!==null)))throw r;e.memoizedState=d,e.baseState=b,e.baseQueue=B,s.lastRenderedState=d}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function qc(e){var i=qe(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var s=r.dispatch,c=r.pending,d=i.memoizedState;if(c!==null){r.pending=null;var b=c=c.next;do d=e(d,b.action),b=b.next;while(b!==c);Fn(d,i.memoizedState)||(un=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,s]}function Gp(e,i,r){var s=se,c=qe(),d=ye;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!Fn((Ae||c).memoizedState,r);if(b&&(c.memoizedState=r,un=!0),c=c.queue,$c(kp.bind(null,s,c,e),[e]),c.getSnapshot!==i||b||Ye!==null&&Ye.memoizedState.tag&1){if(s.flags|=2048,jr(9,Vp.bind(null,s,c,r,i),{destroy:void 0},null),ze===null)throw Error(a(349));d||ga&60||Ip(s,i,r)}return r}function Ip(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=se.updateQueue,i===null?(i=Nl(),se.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Vp(e,i,r,s){i.value=r,i.getSnapshot=s,Wp(i)&&Xp(e)}function kp(e,i,r){return r(function(){Wp(i)&&Xp(e)})}function Wp(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Fn(e,r)}catch{return!0}}function Xp(e){var i=da(e,2);i!==null&&An(i,e,2)}function jc(e){var i=zn();if(typeof e=="function"){var r=e;if(e=r(),er){Zt(!0);try{r()}finally{Zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function Yp(e,i,r,s){return e.baseState=r,Yc(e,Ae,typeof s=="function"?s:Vi)}function Yy(e,i,r,s,c){if(Il(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};O.T!==null?r(!0):d.isTransition=!1,s(d),r=i.pending,r===null?(d.next=i.pending=d,qp(i,d)):(d.next=r.next,i.pending=r.next=d)}}function qp(e,i){var r=i.action,s=i.payload,c=e.state;if(i.isTransition){var d=O.T,b={};O.T=b;try{var C=r(c,s),B=O.S;B!==null&&B(b,C),jp(e,i,C)}catch(q){Zc(e,i,q)}finally{O.T=d}}else try{d=r(c,s),jp(e,i,d)}catch(q){Zc(e,i,q)}}function jp(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){Zp(e,i,s)},function(s){return Zc(e,i,s)}):Zp(e,i,r)}function Zp(e,i,r){i.status="fulfilled",i.value=r,$p(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,qp(e,r)))}function Zc(e,i,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do i.status="rejected",i.reason=r,$p(i),i=i.next;while(i!==s)}e.action=null}function $p(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Qp(e,i){return i}function Kp(e,i){if(ye){var r=ze.formState;if(r!==null){t:{var s=se;if(ye){if(pn){e:{for(var c=pn,d=wi;c.nodeType!==8;){if(!d){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){pn=mi(c.nextSibling),s=c.data==="F!";break t}}Ka(s)}s=!1}s&&(i=r[0])}}return r=zn(),r.memoizedState=r.baseState=i,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:i},r.queue=s,r=gm.bind(null,se,s),s.dispatch=r,s=jc(!1),d=ef.bind(null,se,!1,s.queue),s=zn(),c={state:i,dispatch:null,action:e,pending:null},s.queue=c,r=Yy.bind(null,se,c,d,r),c.dispatch=r,s.memoizedState=e,[i,r,!1]}function Jp(e){var i=qe();return tm(i,Ae,e)}function tm(e,i,r){i=Yc(e,i,Qp)[0],e=Fl(Vi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?po(i):i;var s=qe(),c=s.queue,d=c.dispatch;return r!==s.memoizedState&&(se.flags|=2048,jr(9,qy.bind(null,c,r),{destroy:void 0},null)),[i,d,e]}function qy(e,i){e.action=i}function em(e){var i=qe(),r=Ae;if(r!==null)return tm(i,r,e);qe(),i=i.memoizedState,r=qe();var s=r.queue.dispatch;return r.memoizedState=e,[i,s,!1]}function jr(e,i,r,s){return e={tag:e,create:i,inst:r,deps:s,next:null},i=se.updateQueue,i===null&&(i=Nl(),se.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,i.lastEffect=e),e}function nm(){return qe().memoizedState}function Hl(e,i,r,s){var c=zn();se.flags|=e,c.memoizedState=jr(1|i,r,{destroy:void 0},s===void 0?null:s)}function Gl(e,i,r,s){var c=qe();s=s===void 0?null:s;var d=c.memoizedState.inst;Ae!==null&&s!==null&&Gc(s,Ae.memoizedState.deps)?c.memoizedState=jr(i,r,d,s):(se.flags|=e,c.memoizedState=jr(1|i,r,d,s))}function im(e,i){Hl(8390656,8,e,i)}function $c(e,i){Gl(2048,8,e,i)}function am(e,i){return Gl(4,2,e,i)}function rm(e,i){return Gl(4,4,e,i)}function sm(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function om(e,i,r){r=r!=null?r.concat([e]):null,Gl(4,4,sm.bind(null,i,e),r)}function Qc(){}function lm(e,i){var r=qe();i=i===void 0?null:i;var s=r.memoizedState;return i!==null&&Gc(i,s[1])?s[0]:(r.memoizedState=[e,i],e)}function um(e,i){var r=qe();i=i===void 0?null:i;var s=r.memoizedState;if(i!==null&&Gc(i,s[1]))return s[0];if(s=e(),er){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[s,i],s}function Kc(e,i,r){return r===void 0||ga&1073741824?e.memoizedState=i:(e.memoizedState=r,e=fg(),se.lanes|=e,Aa|=e,r)}function cm(e,i,r,s){return Fn(r,i)?r:kr.current!==null?(e=Kc(e,r,s),Fn(e,i)||(un=!0),e):ga&42?(e=fg(),se.lanes|=e,Aa|=e,i):(un=!0,e.memoizedState=r)}function fm(e,i,r,s,c){var d=Y.p;Y.p=d!==0&&8>d?d:8;var b=O.T,C={};O.T=C,ef(e,!1,i,r);try{var B=c(),q=O.S;if(q!==null&&q(C,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=ky(B,s);mo(e,i,mt,Vn(e))}else mo(e,i,s,Vn(e))}catch(bt){mo(e,i,{then:function(){},status:"rejected",reason:bt},Vn())}finally{Y.p=d,O.T=b}}function jy(){}function Jc(e,i,r,s){if(e.tag!==5)throw Error(a(476));var c=hm(e).queue;fm(e,c,i,pt,r===null?jy:function(){return dm(e),r(s)})}function hm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:pt},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function dm(e){var i=hm(e).next.queue;mo(e,i,{},Vn())}function tf(){return xn(Po)}function pm(){return qe().memoizedState}function mm(){return qe().memoizedState}function Zy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Vn();e=xa(r);var s=ba(i,e,r);s!==null&&(An(s,i,r),_o(s,i,r)),i={cache:Bc()},e.payload=i;return}i=i.return}}function $y(e,i,r){var s=Vn();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Il(e)?vm(i,r):(r=Lc(e,i,r,s),r!==null&&(An(r,e,s),_m(r,i,s)))}function gm(e,i,r){var s=Vn();mo(e,i,r,s)}function mo(e,i,r,s){var c={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Il(e))vm(i,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var b=i.lastRenderedState,C=d(b,r);if(c.hasEagerState=!0,c.eagerState=C,Fn(C,b))return wl(e,i,c,0),ze===null&&Ml(),!1}catch{}finally{}if(r=Lc(e,i,c,s),r!==null)return An(r,e,s),_m(r,i,s),!0}return!1}function ef(e,i,r,s){if(s={lane:2,revertLane:Xf(),action:s,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(i)throw Error(a(479))}else i=Lc(e,r,s,2),i!==null&&An(i,e,2)}function Il(e){var i=e.alternate;return e===se||i!==null&&i===se}function vm(e,i){Yr=Ul=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function _m(e,i,r){if(r&4194176){var s=i.lanes;s&=e.pendingLanes,r|=s,i.lanes=r,hl(e,r)}}var Ai={readContext:xn,use:Bl,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke};Ai.useCacheRefresh=ke,Ai.useMemoCache=ke,Ai.useHostTransitionStatus=ke,Ai.useFormState=ke,Ai.useActionState=ke,Ai.useOptimistic=ke;var nr={readContext:xn,use:Bl,useCallback:function(e,i){return zn().memoizedState=[e,i===void 0?null:i],e},useContext:xn,useEffect:im,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Hl(4194308,4,sm.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Hl(4194308,4,e,i)},useInsertionEffect:function(e,i){Hl(4,2,e,i)},useMemo:function(e,i){var r=zn();i=i===void 0?null:i;var s=e();if(er){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[s,i],s},useReducer:function(e,i,r){var s=zn();if(r!==void 0){var c=r(i);if(er){Zt(!0);try{r(i)}finally{Zt(!1)}}}else c=i;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=$y.bind(null,se,e),[s.memoizedState,e]},useRef:function(e){var i=zn();return e={current:e},i.memoizedState=e},useState:function(e){e=jc(e);var i=e.queue,r=gm.bind(null,se,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Qc,useDeferredValue:function(e,i){var r=zn();return Kc(r,e,i)},useTransition:function(){var e=jc(!1);return e=fm.bind(null,se,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var s=se,c=zn();if(ye){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),ze===null)throw Error(a(349));ge&60||Ip(s,i,r)}c.memoizedState=r;var d={value:r,getSnapshot:i};return c.queue=d,im(kp.bind(null,s,d,e),[e]),s.flags|=2048,jr(9,Vp.bind(null,s,d,r,i),{destroy:void 0},null),r},useId:function(){var e=zn(),i=ze.identifierPrefix;if(ye){var r=Gi,s=Hi;r=(s&~(1<<32-qt(s)-1)).toString(32)+r,i=":"+i+"R"+r,r=Pl++,0<r&&(i+="H"+r.toString(32)),i+=":"}else r=Wy++,i=":"+i+"r"+r.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return zn().memoizedState=Zy.bind(null,se)}};nr.useMemoCache=Xc,nr.useHostTransitionStatus=tf,nr.useFormState=Kp,nr.useActionState=Kp,nr.useOptimistic=function(e){var i=zn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=ef.bind(null,se,!0,r),r.dispatch=i,[e,i]};var va={readContext:xn,use:Bl,useCallback:lm,useContext:xn,useEffect:$c,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:um,useReducer:Fl,useRef:nm,useState:function(){return Fl(Vi)},useDebugValue:Qc,useDeferredValue:function(e,i){var r=qe();return cm(r,Ae.memoizedState,e,i)},useTransition:function(){var e=Fl(Vi)[0],i=qe().memoizedState;return[typeof e=="boolean"?e:po(e),i]},useSyncExternalStore:Gp,useId:pm};va.useCacheRefresh=mm,va.useMemoCache=Xc,va.useHostTransitionStatus=tf,va.useFormState=Jp,va.useActionState=Jp,va.useOptimistic=function(e,i){var r=qe();return Yp(r,Ae,e,i)};var ir={readContext:xn,use:Bl,useCallback:lm,useContext:xn,useEffect:$c,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:um,useReducer:qc,useRef:nm,useState:function(){return qc(Vi)},useDebugValue:Qc,useDeferredValue:function(e,i){var r=qe();return Ae===null?Kc(r,e,i):cm(r,Ae.memoizedState,e,i)},useTransition:function(){var e=qc(Vi)[0],i=qe().memoizedState;return[typeof e=="boolean"?e:po(e),i]},useSyncExternalStore:Gp,useId:pm};ir.useCacheRefresh=mm,ir.useMemoCache=Xc,ir.useHostTransitionStatus=tf,ir.useFormState=em,ir.useActionState=em,ir.useOptimistic=function(e,i){var r=qe();return Ae!==null?Yp(r,Ae,e,i):(r.baseState=e,[e,r.queue.dispatch])};function nf(e,i,r,s){i=e.memoizedState,r=r(s,i),r=r==null?i:k({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var af={isMounted:function(e){return(e=e._reactInternals)?K(e)===e:!1},enqueueSetState:function(e,i,r){e=e._reactInternals;var s=Vn(),c=xa(s);c.payload=i,r!=null&&(c.callback=r),i=ba(e,c,s),i!==null&&(An(i,e,s),_o(i,e,s))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var s=Vn(),c=xa(s);c.tag=1,c.payload=i,r!=null&&(c.callback=r),i=ba(e,c,s),i!==null&&(An(i,e,s),_o(i,e,s))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Vn(),s=xa(r);s.tag=2,i!=null&&(s.callback=i),i=ba(e,s,r),i!==null&&(An(i,e,r),_o(i,e,r))}};function ym(e,i,r,s,c,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,b):i.prototype&&i.prototype.isPureReactComponent?!eo(r,s)||!eo(c,d):!0}function xm(e,i,r,s){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,s),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,s),i.state!==e&&af.enqueueReplaceState(i,i.state,null)}function ar(e,i){var r=i;if("ref"in i){r={};for(var s in i)s!=="ref"&&(r[s]=i[s])}if(e=e.defaultProps){r===i&&(r=k({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var Vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function bm(e){Vl(e)}function Sm(e){console.error(e)}function Mm(e){Vl(e)}function kl(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(s){setTimeout(function(){throw s})}}function wm(e,i,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rf(e,i,r){return r=xa(r),r.tag=3,r.payload={element:null},r.callback=function(){kl(e,i)},r}function Em(e){return e=xa(e),e.tag=3,e}function Am(e,i,r,s){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;e.payload=function(){return c(d)},e.callback=function(){wm(i,r,s)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){wm(i,r,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var C=s.stack;this.componentDidCatch(s.value,{componentStack:C!==null?C:""})})}function Qy(e,i,r,s,c){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(i=r.alternate,i!==null&&vo(i,r,c,!0),r=ti.current,r!==null){switch(r.tag){case 13:return Ei===null?Gf():r.alternate===null&&Fe===0&&(Fe=3),r.flags&=-257,r.flags|=65536,r.lanes=c,s===Uc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([s]):i.add(s),Vf(e,s,c)),!1;case 22:return r.flags|=65536,s===Uc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([s]):r.add(s)),Vf(e,s,c)),!1}throw Error(a(435,r.tag))}return Vf(e,s,c),Gf(),!1}if(ye)return i=ti.current,i!==null?(!(i.flags&65536)&&(i.flags|=256),i.flags|=65536,i.lanes=c,s!==Oc&&(e=Error(a(422),{cause:s}),ro(Qn(e,r)))):(s!==Oc&&(i=Error(a(423),{cause:s}),ro(Qn(i,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Qn(s,r),c=rf(e.stateNode,s,c),xf(e,c),Fe!==4&&(Fe=2)),!1;var d=Error(a(520),{cause:s});if(d=Qn(d,r),Ao===null?Ao=[d]:Ao.push(d),Fe!==4&&(Fe=2),i===null)return!0;s=Qn(s,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=rf(r.stateNode,s,e),xf(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ta===null||!Ta.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Em(c),Am(c,e,r,s),xf(r,c),!1}r=r.return}while(r!==null);return!1}var Tm=Error(a(461)),un=!1;function mn(e,i,r,s){i.child=e===null?zp(i,null,r,s):Ja(i,e.child,r,s)}function Cm(e,i,r,s,c){r=r.render;var d=i.ref;if("ref"in s){var b={};for(var C in s)C!=="ref"&&(b[C]=s[C])}else b=s;return sr(i),s=Ic(e,i,r,b,d,c),C=Vc(),e!==null&&!un?(kc(e,i,c),ki(e,i,c)):(ye&&C&&Rc(i),i.flags|=1,mn(e,i,s,c),i.child)}function Dm(e,i,r,s,c){if(e===null){var d=r.type;return typeof d=="function"&&!Cf(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Lm(e,i,d,s,c)):(e=jl(r.type,null,s,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!pf(e,c)){var b=d.memoizedProps;if(r=r.compare,r=r!==null?r:eo,r(b,s)&&e.ref===i.ref)return ki(e,i,c)}return i.flags|=1,e=Ea(d,s),e.ref=i.ref,e.return=i,i.child=e}function Lm(e,i,r,s,c){if(e!==null){var d=e.memoizedProps;if(eo(d,s)&&e.ref===i.ref)if(un=!1,i.pendingProps=s=d,pf(e,c))e.flags&131072&&(un=!0);else return i.lanes=e.lanes,ki(e,i,c)}return sf(e,i,r,s,c)}function Rm(e,i,r){var s=i.pendingProps,c=s.children,d=(i.stateNode._pendingVisibility&2)!==0,b=e!==null?e.memoizedState:null;if(go(e,i),s.mode==="hidden"||d){if(i.flags&128){if(s=b!==null?b.baseLanes|r:r,e!==null){for(c=i.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;i.childLanes=d&~s}else i.childLanes=0,i.child=null;return zm(e,i,s,r)}if(r&536870912)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(i,b!==null?b.cachePool:null),b!==null?Op(i,b):Pc(),Up(i);else return i.lanes=i.childLanes=536870912,zm(e,i,b!==null?b.baseLanes|r:r,r)}else b!==null?(Ol(i,b.cachePool),Op(i,b),ma(),i.memoizedState=null):(e!==null&&Ol(i,null),Pc(),ma());return mn(e,i,c,r),i.child}function zm(e,i,r,s){var c=Hc();return c=c===null?null:{parent:Je._currentValue,pool:c},i.memoizedState={baseLanes:r,cachePool:c},e!==null&&Ol(i,null),Pc(),Up(i),e!==null&&vo(e,i,s,!0),null}function go(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=2097664)}}function sf(e,i,r,s,c){return sr(i),r=Ic(e,i,r,s,void 0,c),s=Vc(),e!==null&&!un?(kc(e,i,c),ki(e,i,c)):(ye&&s&&Rc(i),i.flags|=1,mn(e,i,r,c),i.child)}function Om(e,i,r,s,c,d){return sr(i),i.updateQueue=null,r=Hp(i,s,r,c),Fp(e),s=Vc(),e!==null&&!un?(kc(e,i,d),ki(e,i,d)):(ye&&s&&Rc(i),i.flags|=1,mn(e,i,r,d),i.child)}function Um(e,i,r,s,c){if(sr(i),i.stateNode===null){var d=Hr,b=r.contextType;typeof b=="object"&&b!==null&&(d=xn(b)),d=new r(s,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=af,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=s,d.state=i.memoizedState,d.refs={},_f(i),b=r.contextType,d.context=typeof b=="object"&&b!==null?xn(b):Hr,d.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(nf(i,r,b,s),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&af.enqueueReplaceState(d,d.state,null),xo(i,s,d,c),yo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),s=!0}else if(e===null){d=i.stateNode;var C=i.memoizedProps,B=ar(r,C);d.props=B;var q=d.context,mt=r.contextType;b=Hr,typeof mt=="object"&&mt!==null&&(b=xn(mt));var bt=r.getDerivedStateFromProps;mt=typeof bt=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||q!==b)&&xm(i,d,s,b),ya=!1;var lt=i.memoizedState;d.state=lt,xo(i,s,d,c),yo(),q=i.memoizedState,C||lt!==q||ya?(typeof bt=="function"&&(nf(i,r,bt,s),q=i.memoizedState),(B=ya||ym(i,r,B,s,lt,q,b))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=s,i.memoizedState=q),d.props=s,d.state=q,d.context=b,s=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),s=!1)}else{d=i.stateNode,yf(e,i),b=i.memoizedProps,mt=ar(r,b),d.props=mt,bt=i.pendingProps,lt=d.context,q=r.contextType,B=Hr,typeof q=="object"&&q!==null&&(B=xn(q)),C=r.getDerivedStateFromProps,(q=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==bt||lt!==B)&&xm(i,d,s,B),ya=!1,lt=i.memoizedState,d.state=lt,xo(i,s,d,c),yo();var dt=i.memoizedState;b!==bt||lt!==dt||ya||e!==null&&e.dependencies!==null&&Wl(e.dependencies)?(typeof C=="function"&&(nf(i,r,C,s),dt=i.memoizedState),(mt=ya||ym(i,r,mt,s,lt,dt,B)||e!==null&&e.dependencies!==null&&Wl(e.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,dt,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,dt,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),i.memoizedProps=s,i.memoizedState=dt),d.props=s,d.state=dt,d.context=B,s=mt):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),s=!1)}return d=s,go(e,i),s=(i.flags&128)!==0,d||s?(d=i.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&s?(i.child=Ja(i,e.child,null,c),i.child=Ja(i,null,r,c)):mn(e,i,r,c),i.memoizedState=d.state,e=i.child):e=ki(e,i,c),e}function Pm(e,i,r,s){return ao(),i.flags|=256,mn(e,i,r,s),i.child}var of={dehydrated:null,treeContext:null,retryLane:0};function lf(e){return{baseLanes:e,cachePool:Bp()}}function uf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=ai),e}function Nm(e,i,r){var s=i.pendingProps,c=!1,d=(i.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),b&&(c=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(ye){if(c?pa(i):ma(),ye){var C=pn,B;if(B=C){t:{for(B=C,C=wi;B.nodeType!==8;){if(!C){C=null;break t}if(B=mi(B.nextSibling),B===null){C=null;break t}}C=B}C!==null?(i.memoizedState={dehydrated:C,treeContext:$a!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912},B=ii(18,null,null,0),B.stateNode=C,B.return=i,i.child=B,En=i,pn=null,B=!0):B=!1}B||Ka(i)}if(C=i.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return C.data==="$!"?i.lanes=16:i.lanes=536870912,null;Ii(i)}return C=s.children,s=s.fallback,c?(ma(),c=i.mode,C=ff({mode:"hidden",children:C},c),s=lr(s,c,r,null),C.return=i,s.return=i,C.sibling=s,i.child=C,c=i.child,c.memoizedState=lf(r),c.childLanes=uf(e,b,r),i.memoizedState=of,s):(pa(i),cf(i,C))}if(B=e.memoizedState,B!==null&&(C=B.dehydrated,C!==null)){if(d)i.flags&256?(pa(i),i.flags&=-257,i=hf(e,i,r)):i.memoizedState!==null?(ma(),i.child=e.child,i.flags|=128,i=null):(ma(),c=s.fallback,C=i.mode,s=ff({mode:"visible",children:s.children},C),c=lr(c,C,r,null),c.flags|=2,s.return=i,c.return=i,s.sibling=c,i.child=s,Ja(i,e.child,null,r),s=i.child,s.memoizedState=lf(r),s.childLanes=uf(e,b,r),i.memoizedState=of,i=c);else if(pa(i),C.data==="$!"){if(b=C.nextSibling&&C.nextSibling.dataset,b)var q=b.dgst;b=q,s=Error(a(419)),s.stack="",s.digest=b,ro({value:s,source:null,stack:null}),i=hf(e,i,r)}else if(un||vo(e,i,r,!1),b=(r&e.childLanes)!==0,un||b){if(b=ze,b!==null){if(s=r&-r,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(b.suspendedLanes|r)?0:s,s!==0&&s!==B.retryLane)throw B.retryLane=s,da(e,s),An(b,e,s),Tm}C.data==="$?"||Gf(),i=hf(e,i,r)}else C.data==="$?"?(i.flags|=128,i.child=e.child,i=hx.bind(null,e),C._reactRetry=i,i=null):(e=B.treeContext,pn=mi(C.nextSibling),En=i,ye=!0,di=null,wi=!1,e!==null&&(Kn[Jn++]=Hi,Kn[Jn++]=Gi,Kn[Jn++]=$a,Hi=e.id,Gi=e.overflow,$a=i),i=cf(i,s.children),i.flags|=4096);return i}return c?(ma(),c=s.fallback,C=i.mode,B=e.child,q=B.sibling,s=Ea(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&31457280,q!==null?c=Ea(q,c):(c=lr(c,C,r,null),c.flags|=2),c.return=i,s.return=i,s.sibling=c,i.child=s,s=c,c=i.child,C=e.child.memoizedState,C===null?C=lf(r):(B=C.cachePool,B!==null?(q=Je._currentValue,B=B.parent!==q?{parent:q,pool:q}:B):B=Bp(),C={baseLanes:C.baseLanes|r,cachePool:B}),c.memoizedState=C,c.childLanes=uf(e,b,r),i.memoizedState=of,s):(pa(i),r=e.child,e=r.sibling,r=Ea(r,{mode:"visible",children:s.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function cf(e,i){return i=ff({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ff(e,i){return lg(e,i,0,null)}function hf(e,i,r){return Ja(i,e.child,null,r),e=cf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Bm(e,i,r){e.lanes|=i;var s=e.alternate;s!==null&&(s.lanes|=i),gf(e.return,i,r)}function df(e,i,r,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:c}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=c)}function Fm(e,i,r){var s=i.pendingProps,c=s.revealOrder,d=s.tail;if(mn(e,i,s.children,r),s=Ke.current,s&2)s=s&1|2,i.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bm(e,r,i);else if(e.tag===19)Bm(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(_t(Ke,s),c){case"forwards":for(r=i.child,c=null;r!==null;)e=r.alternate,e!==null&&zl(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=i.child,i.child=null):(c=r.sibling,r.sibling=null),df(i,!1,c,r,d);break;case"backwards":for(r=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&zl(e)===null){i.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}df(i,!0,r,null,d);break;case"together":df(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ki(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Aa|=i.lanes,!(r&i.childLanes))if(e!==null){if(vo(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ea(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ea(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function pf(e,i){return e.lanes&i?!0:(e=e.dependencies,!!(e!==null&&Wl(e)))}function Ky(e,i,r){switch(i.tag){case 3:kt(i,i.stateNode.containerInfo),_a(i,Je,e.memoizedState.cache),ao();break;case 27:case 5:Yt(i);break;case 4:kt(i,i.stateNode.containerInfo);break;case 10:_a(i,i.type,i.memoizedProps.value);break;case 13:var s=i.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(i),i.flags|=128,null):r&i.child.childLanes?Nm(e,i,r):(pa(i),e=ki(e,i,r),e!==null?e.sibling:null);pa(i);break;case 19:var c=(e.flags&128)!==0;if(s=(r&i.childLanes)!==0,s||(vo(e,i,r,!1),s=(r&i.childLanes)!==0),c){if(s)return Fm(e,i,r);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(Ke,Ke.current),s)break;return null;case 22:case 23:return i.lanes=0,Rm(e,i,r);case 24:_a(i,Je,e.memoizedState.cache)}return ki(e,i,r)}function Hm(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)un=!0;else{if(!pf(e,r)&&!(i.flags&128))return un=!1,Ky(e,i,r);un=!!(e.flags&131072)}else un=!1,ye&&i.flags&1048576&&Mp(i,Tl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var s=i.elementType,c=s._init;if(s=c(s._payload),i.type=s,typeof s=="function")Cf(s)?(e=ar(s,e),i.tag=1,i=Um(null,i,s,e,r)):(i.tag=0,i=sf(null,i,s,e,r));else{if(s!=null){if(c=s.$$typeof,c===E){i.tag=11,i=Cm(null,i,s,e,r);break t}else if(c===S){i.tag=14,i=Dm(null,i,s,e,r);break t}}throw i=L(s)||s,Error(a(306,i,""))}}return i;case 0:return sf(e,i,i.type,i.pendingProps,r);case 1:return s=i.type,c=ar(s,i.pendingProps),Um(e,i,s,c,r);case 3:t:{if(kt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));var d=i.pendingProps;c=i.memoizedState,s=c.element,yf(e,i),xo(i,d,null,r);var b=i.memoizedState;if(d=b.cache,_a(i,Je,d),d!==c.cache&&vf(i,[Je],r,!0),yo(),d=b.element,c.isDehydrated)if(c={element:d,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=c,i.memoizedState=c,i.flags&256){i=Pm(e,i,d,r);break t}else if(d!==s){s=Qn(Error(a(424)),i),ro(s),i=Pm(e,i,d,r);break t}else for(pn=mi(i.stateNode.containerInfo.firstChild),En=i,ye=!0,di=null,wi=!0,r=zp(i,null,d,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ao(),d===s){i=ki(e,i,r);break t}mn(e,i,d,r)}i=i.child}return i;case 26:return go(e,i),e===null?(r=Vg(i.type,null,i.pendingProps,null))?i.memoizedState=r:ye||(r=i.type,e=i.pendingProps,s=su(Dt.current).createElement(r),s[tt]=i,s[ft]=e,gn(s,r,e),we(s),i.stateNode=s):i.memoizedState=Vg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&ye&&(s=i.stateNode=Hg(i.type,i.pendingProps,Dt.current),En=i,wi=!0,pn=mi(s.firstChild)),s=i.pendingProps.children,e!==null||ye?mn(e,i,s,r):i.child=Ja(i,null,s,r),go(e,i),i.child;case 5:return e===null&&ye&&((c=s=pn)&&(s=Cx(s,i.type,i.pendingProps,wi),s!==null?(i.stateNode=s,En=i,pn=mi(s.firstChild),wi=!1,c=!0):c=!1),c||Ka(i)),Yt(i),c=i.type,d=i.pendingProps,b=e!==null?e.memoizedProps:null,s=d.children,th(c,d)?s=null:b!==null&&th(c,b)&&(i.flags|=32),i.memoizedState!==null&&(c=Ic(e,i,Xy,null,null,r),Po._currentValue=c),go(e,i),mn(e,i,s,r),i.child;case 6:return e===null&&ye&&((e=r=pn)&&(r=Dx(r,i.pendingProps,wi),r!==null?(i.stateNode=r,En=i,pn=null,e=!0):e=!1),e||Ka(i)),null;case 13:return Nm(e,i,r);case 4:return kt(i,i.stateNode.containerInfo),s=i.pendingProps,e===null?i.child=Ja(i,null,s,r):mn(e,i,s,r),i.child;case 11:return Cm(e,i,i.type,i.pendingProps,r);case 7:return mn(e,i,i.pendingProps,r),i.child;case 8:return mn(e,i,i.pendingProps.children,r),i.child;case 12:return mn(e,i,i.pendingProps.children,r),i.child;case 10:return s=i.pendingProps,_a(i,i.type,s.value),mn(e,i,s.children,r),i.child;case 9:return c=i.type._context,s=i.pendingProps.children,sr(i),c=xn(c),s=s(c),i.flags|=1,mn(e,i,s,r),i.child;case 14:return Dm(e,i,i.type,i.pendingProps,r);case 15:return Lm(e,i,i.type,i.pendingProps,r);case 19:return Fm(e,i,r);case 22:return Rm(e,i,r);case 24:return sr(i),s=xn(Je),e===null?(c=Hc(),c===null&&(c=ze,d=Bc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),i.memoizedState={parent:s,cache:c},_f(i),_a(i,Je,c)):(e.lanes&r&&(yf(e,i),xo(i,null,null,r),yo()),c=e.memoizedState,d=i.memoizedState,c.parent!==s?(c={parent:s,cache:s},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),_a(i,Je,s)):(s=d.cache,_a(i,Je,s),s!==c.cache&&vf(i,[Je],r,!0))),mn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}var mf=st(null),rr=null,Wi=null;function _a(e,i,r){_t(mf,i._currentValue),i._currentValue=r}function Xi(e){e._currentValue=mf.current,wt(mf)}function gf(e,i,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,s!==null&&(s.childLanes|=i)):s!==null&&(s.childLanes&i)!==i&&(s.childLanes|=i),e===r)break;e=e.return}}function vf(e,i,r,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var b=c.child;d=d.firstContext;t:for(;d!==null;){var C=d;d=c;for(var B=0;B<i.length;B++)if(C.context===i[B]){d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),gf(d.return,r,e),s||(b=null);break t}d=C.next}}else if(c.tag===18){if(b=c.return,b===null)throw Error(a(341));b.lanes|=r,d=b.alternate,d!==null&&(d.lanes|=r),gf(b,r,e),b=null}else b=c.child;if(b!==null)b.return=c;else for(b=c;b!==null;){if(b===e){b=null;break}if(c=b.sibling,c!==null){c.return=b.return,b=c;break}b=b.return}c=b}}function vo(e,i,r,s){e=null;for(var c=i,d=!1;c!==null;){if(!d){if(c.flags&524288)d=!0;else if(c.flags&262144)break}if(c.tag===10){var b=c.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var C=c.type;Fn(c.pendingProps.value,b.value)||(e!==null?e.push(C):e=[C])}}else if(c===ie.current){if(b=c.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}c=c.return}e!==null&&vf(i,e,r,s),i.flags|=262144}function Wl(e){for(e=e.firstContext;e!==null;){if(!Fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return Gm(rr,e)}function Xl(e,i){return rr===null&&sr(e),Gm(e,i)}function Gm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Wi===null){if(e===null)throw Error(a(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return r}var ya=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,i,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ne&2){var c=s.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),s.pending=i,i=El(e),bp(e,null,r),i}return wl(e,s,i,r),El(e)}function _o(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194176)!==0)){var s=i.lanes;s&=e.pendingLanes,r|=s,i.lanes=r,hl(e,r)}}function xf(e,i){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=b:d=d.next=b,r=r.next}while(r!==null);d===null?c=d=i:d=d.next=i}else c=d=i;r={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var bf=!1;function yo(){if(bf){var e=Xr;if(e!==null)throw e}}function xo(e,i,r,s){bf=!1;var c=e.updateQueue;ya=!1;var d=c.firstBaseUpdate,b=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var B=C,q=B.next;B.next=null,b===null?d=q:b.next=q,b=B;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==b&&(C===null?mt.firstBaseUpdate=q:C.next=q,mt.lastBaseUpdate=B))}if(d!==null){var bt=c.baseState;b=0,mt=q=B=null,C=d;do{var lt=C.lane&-536870913,dt=lt!==C.lane;if(dt?(ge&lt)===lt:(s&lt)===lt){lt!==0&&lt===Wr&&(bf=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var It=e,$t=C;lt=i;var He=r;switch($t.tag){case 1:if(It=$t.payload,typeof It=="function"){bt=It.call(He,bt,lt);break t}bt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=$t.payload,lt=typeof It=="function"?It.call(He,bt,lt):It,lt==null)break t;bt=k({},bt,lt);break t;case 2:ya=!0}}lt=C.callback,lt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[lt]:dt.push(lt))}else dt={lane:lt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(q=mt=dt,B=bt):mt=mt.next=dt,b|=lt;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;dt=C,C=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);mt===null&&(B=bt),c.baseState=B,c.firstBaseUpdate=q,c.lastBaseUpdate=mt,d===null&&(c.shared.lanes=0),Aa|=b,e.lanes=b,e.memoizedState=bt}}function Im(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Vm(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Im(r[e],i)}function bo(e,i){try{var r=i.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&e)===e){s=void 0;var d=r.create,b=r.inst;s=d(),b.destroy=s}r=r.next}while(r!==c)}}catch(C){Le(i,i.return,C)}}function Sa(e,i,r){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&e)===e){var b=s.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,c=i;var B=r;try{C()}catch(q){Le(c,B,q)}}}s=s.next}while(s!==d)}}catch(q){Le(i,i.return,q)}}function km(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Vm(i,r)}catch(s){Le(e,e.return,s)}}}function Wm(e,i,r){r.props=ar(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){Le(e,i,s)}}function or(e,i){try{var r=e.ref;if(r!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof r=="function"?e.refCleanup=r(c):r.current=c}}catch(d){Le(e,i,d)}}function Hn(e,i){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(c){Le(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Le(e,i,c)}else r.current=null}function Xm(e){var i=e.type,r=e.memoizedProps,s=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break t;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(c){Le(e,e.return,c)}}function Ym(e,i,r){try{var s=e.stateNode;Mx(s,e.type,r,i),s[ft]=i}catch(c){Le(e,e.return,c)}}function qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Sf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mf(e,i,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,i?r.nodeType===8?r.parentNode.insertBefore(e,i):r.insertBefore(e,i):(r.nodeType===8?(i=r.parentNode,i.insertBefore(e,r)):(i=r,i.appendChild(e)),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ru));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(Mf(e,i,r),e=e.sibling;e!==null;)Mf(e,i,r),e=e.sibling}function Yl(e,i,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(Yl(e,i,r),e=e.sibling;e!==null;)Yl(e,i,r),e=e.sibling}var Yi=!1,Be=!1,wf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,cn=null,Zm=!1;function Jy(e,i){if(e=e.containerInfo,Kf=hu,e=hp(e),Ec(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var b=0,C=-1,B=-1,q=0,mt=0,bt=e,lt=null;e:for(;;){for(var dt;bt!==r||c!==0&&bt.nodeType!==3||(C=b+c),bt!==d||s!==0&&bt.nodeType!==3||(B=b+s),bt.nodeType===3&&(b+=bt.nodeValue.length),(dt=bt.firstChild)!==null;)lt=bt,bt=dt;for(;;){if(bt===e)break e;if(lt===r&&++q===c&&(C=b),lt===d&&++mt===s&&(B=b),(dt=bt.nextSibling)!==null)break;bt=lt,lt=bt.parentNode}bt=dt}r=C===-1||B===-1?null:{start:C,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jf={focusedElem:e,selectionRange:r},hu=!1,cn=i;cn!==null;)if(i=cn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,cn=e;else for(;cn!==null;){switch(i=cn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&d!==null){e=void 0,r=i,c=d.memoizedProps,d=d.memoizedState,s=r.stateNode;try{var It=ar(r.type,c,r.elementType===r.type);e=s.getSnapshotBeforeUpdate(It,d),s.__reactInternalSnapshotBeforeUpdate=e}catch($t){Le(r,r.return,$t)}}break;case 3:if(e&1024){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)ih(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,cn=e;break}cn=i.return}return It=Zm,Zm=!1,It}function $m(e,i,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:ji(e,r),s&4&&bo(5,r);break;case 1:if(ji(e,r),s&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(C){Le(r,r.return,C)}else{var c=ar(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(C){Le(r,r.return,C)}}s&64&&km(r),s&512&&or(r,r.return);break;case 3:if(ji(e,r),s&64&&(s=r.updateQueue,s!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{Vm(s,e)}catch(C){Le(r,r.return,C)}}break;case 26:ji(e,r),s&512&&or(r,r.return);break;case 27:case 5:ji(e,r),i===null&&s&4&&Xm(r),s&512&&or(r,r.return);break;case 12:ji(e,r);break;case 13:ji(e,r),s&4&&Jm(e,r);break;case 22:if(c=r.memoizedState!==null||Yi,!c){i=i!==null&&i.memoizedState!==null||Be;var d=Yi,b=Be;Yi=c,(Be=i)&&!b?Ma(e,r,(r.subtreeFlags&8772)!==0):ji(e,r),Yi=d,Be=b}s&512&&(r.memoizedProps.mode==="manual"?or(r,r.return):Hn(r,r.return));break;default:ji(e,r)}}function Qm(e){var i=e.alternate;i!==null&&(e.alternate=null,Qm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ue(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Gn=!1;function qi(e,i,r){for(r=r.child;r!==null;)Km(e,i,r),r=r.sibling}function Km(e,i,r){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Rt,r)}catch{}switch(r.tag){case 26:Be||Hn(r,i),qi(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Be||Hn(r,i);var s=je,c=Gn;for(je=r.stateNode,qi(e,i,r),r=r.stateNode,i=r.attributes;i.length;)r.removeAttributeNode(i[0]);ue(r),je=s,Gn=c;break;case 5:Be||Hn(r,i);case 6:c=je;var d=Gn;if(je=null,qi(e,i,r),je=c,Gn=d,je!==null)if(Gn)try{e=je,s=r.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(b){Le(r,i,b)}else try{je.removeChild(r.stateNode)}catch(b){Le(r,i,b)}break;case 18:je!==null&&(Gn?(i=je,r=r.stateNode,i.nodeType===8?nh(i.parentNode,r):i.nodeType===1&&nh(i,r),Ho(i)):nh(je,r.stateNode));break;case 4:s=je,c=Gn,je=r.stateNode.containerInfo,Gn=!0,qi(e,i,r),je=s,Gn=c;break;case 0:case 11:case 14:case 15:Be||Sa(2,r,i),Be||Sa(4,r,i),qi(e,i,r);break;case 1:Be||(Hn(r,i),s=r.stateNode,typeof s.componentWillUnmount=="function"&&Wm(r,i,s)),qi(e,i,r);break;case 21:qi(e,i,r);break;case 22:Be||Hn(r,i),Be=(s=Be)||r.memoizedState!==null,qi(e,i,r),Be=s;break;default:qi(e,i,r)}}function Jm(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ho(e)}catch(r){Le(i,i.return,r)}}function tx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new jm),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new jm),i;default:throw Error(a(435,e.tag))}}function Ef(e,i){var r=tx(e);i.forEach(function(s){var c=dx.bind(null,e,s);r.has(s)||(r.add(s),s.then(c,c))})}function ei(e,i){var r=i.deletions;if(r!==null)for(var s=0;s<r.length;s++){var c=r[s],d=e,b=i,C=b;t:for(;C!==null;){switch(C.tag){case 27:case 5:je=C.stateNode,Gn=!1;break t;case 3:je=C.stateNode.containerInfo,Gn=!0;break t;case 4:je=C.stateNode.containerInfo,Gn=!0;break t}C=C.return}if(je===null)throw Error(a(160));Km(d,b,c),je=null,Gn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)tg(i,e),i=i.sibling}var pi=null;function tg(e,i){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(i,e),ni(e),s&4&&(Sa(3,e,e.return),bo(3,e),Sa(5,e,e.return));break;case 1:ei(i,e),ni(e),s&512&&(Be||r===null||Hn(r,r.return)),s&64&&Yi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var c=pi;if(ei(i,e),ni(e),s&512&&(Be||r===null||Hn(r,r.return)),s&4){var d=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){t:{s=e.type,r=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":d=c.getElementsByTagName("title")[0],(!d||d[te]||d[tt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(s),c.head.insertBefore(d,c.querySelector("head > title"))),gn(d,s,r),d[tt]=e,we(d),s=d;break t;case"link":var b=Xg("link","href",c).get(s+(r.href||""));if(b){for(var C=0;C<b.length;C++)if(d=b[C],d.getAttribute("href")===(r.href==null?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(C,1);break e}}d=c.createElement(s),gn(d,s,r),c.head.appendChild(d);break;case"meta":if(b=Xg("meta","content",c).get(s+(r.content||""))){for(C=0;C<b.length;C++)if(d=b[C],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(C,1);break e}}d=c.createElement(s),gn(d,s,r),c.head.appendChild(d);break;default:throw Error(a(468,s))}d[tt]=e,we(d),s=d}e.stateNode=s}else Yg(c,e.type,e.stateNode);else e.stateNode=Wg(c,s,e.memoizedProps);else d!==s?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,s===null?Yg(c,e.type,e.stateNode):Wg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ym(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,d=e.memoizedProps;try{for(var B=c.firstChild;B;){var q=B.nextSibling,mt=B.nodeName;B[te]||mt==="HEAD"||mt==="BODY"||mt==="SCRIPT"||mt==="STYLE"||mt==="LINK"&&B.rel.toLowerCase()==="stylesheet"||c.removeChild(B),B=q}for(var bt=e.type,lt=c.attributes;lt.length;)c.removeAttributeNode(lt[0]);gn(c,bt,d),c[tt]=e,c[ft]=d}catch(It){Le(e,e.return,It)}}case 5:if(ei(i,e),ni(e),s&512&&(Be||r===null||Hn(r,r.return)),e.flags&32){c=e.stateNode;try{zr(c,"")}catch(It){Le(e,e.return,It)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Ym(e,c,r!==null?r.memoizedProps:c)),s&1024&&(wf=!0);break;case 6:if(ei(i,e),ni(e),s&4){if(e.stateNode===null)throw Error(a(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(It){Le(e,e.return,It)}}break;case 3:if(uu=null,c=pi,pi=ou(i.containerInfo),ei(i,e),pi=c,ni(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ho(i.containerInfo)}catch(It){Le(e,e.return,It)}wf&&(wf=!1,eg(e));break;case 4:s=pi,pi=ou(e.stateNode.containerInfo),ei(i,e),ni(e),pi=s;break;case 12:ei(i,e),ni(e);break;case 13:ei(i,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Uf=Q()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ef(e,s)));break;case 22:if(s&512&&(Be||r===null||Hn(r,r.return)),B=e.memoizedState!==null,q=r!==null&&r.memoizedState!==null,mt=Yi,bt=Be,Yi=mt||B,Be=bt||q,ei(i,e),Be=bt,Yi=mt,ni(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,s&8192&&(i._visibility=B?i._visibility&-2:i._visibility|1,B&&(i=Yi||Be,r===null||q||i||Zr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(r=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(r===null){q=r=i;try{if(c=q.stateNode,B)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{b=q.stateNode,C=q.memoizedProps.style;var dt=C!=null&&C.hasOwnProperty("display")?C.display:null;b.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(It){Le(q,q.return,It)}}}else if(i.tag===6){if(r===null){q=i;try{q.stateNode.nodeValue=B?"":q.memoizedProps}catch(It){Le(q,q.return,It)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,Ef(e,r))));break;case 19:ei(i,e),ni(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ef(e,s)));break;case 21:break;default:ei(i,e),ni(e)}}function ni(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var r=e.return;r!==null;){if(qm(r)){var s=r;break t}r=r.return}throw Error(a(160))}switch(s.tag){case 27:var c=s.stateNode,d=Sf(e);Yl(e,d,c);break;case 5:var b=s.stateNode;s.flags&32&&(zr(b,""),s.flags&=-33);var C=Sf(e);Yl(e,C,b);break;case 3:case 4:var B=s.stateNode.containerInfo,q=Sf(e);Mf(e,q,B);break;default:throw Error(a(161))}}}catch(mt){Le(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;eg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ji(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$m(e,i.alternate,i),i=i.sibling}function Zr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Sa(4,i,i.return),Zr(i);break;case 1:Hn(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Wm(i,i.return,r),Zr(i);break;case 26:case 27:case 5:Hn(i,i.return),Zr(i);break;case 22:Hn(i,i.return),i.memoizedState===null&&Zr(i);break;default:Zr(i)}e=e.sibling}}function Ma(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var s=i.alternate,c=e,d=i,b=d.flags;switch(d.tag){case 0:case 11:case 15:Ma(c,d,r),bo(4,d);break;case 1:if(Ma(c,d,r),s=d,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(q){Le(s,s.return,q)}if(s=d,c=s.updateQueue,c!==null){var C=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Im(B[c],C)}catch(q){Le(s,s.return,q)}}r&&b&64&&km(d),or(d,d.return);break;case 26:case 27:case 5:Ma(c,d,r),r&&s===null&&b&4&&Xm(d),or(d,d.return);break;case 12:Ma(c,d,r);break;case 13:Ma(c,d,r),r&&b&4&&Jm(c,d);break;case 22:d.memoizedState===null&&Ma(c,d,r),or(d,d.return);break;default:Ma(c,d,r)}i=i.sibling}}function Af(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&co(r))}function Tf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&co(e))}function wa(e,i,r,s){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ng(e,i,r,s),i=i.sibling}function ng(e,i,r,s){var c=i.flags;switch(i.tag){case 0:case 11:case 15:wa(e,i,r,s),c&2048&&bo(9,i);break;case 3:wa(e,i,r,s),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&co(e)));break;case 12:if(c&2048){wa(e,i,r,s),e=i.stateNode;try{var d=i.memoizedProps,b=d.id,C=d.onPostCommit;typeof C=="function"&&C(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Le(i,i.return,B)}}else wa(e,i,r,s);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?wa(e,i,r,s):So(e,i):d._visibility&4?wa(e,i,r,s):(d._visibility|=4,$r(e,i,r,s,(i.subtreeFlags&10256)!==0)),c&2048&&Af(i.alternate,i);break;case 24:wa(e,i,r,s),c&2048&&Tf(i.alternate,i);break;default:wa(e,i,r,s)}}function $r(e,i,r,s,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,b=i,C=r,B=s,q=b.flags;switch(b.tag){case 0:case 11:case 15:$r(d,b,C,B,c),bo(8,b);break;case 23:break;case 22:var mt=b.stateNode;b.memoizedState!==null?mt._visibility&4?$r(d,b,C,B,c):So(d,b):(mt._visibility|=4,$r(d,b,C,B,c)),c&&q&2048&&Af(b.alternate,b);break;case 24:$r(d,b,C,B,c),c&&q&2048&&Tf(b.alternate,b);break;default:$r(d,b,C,B,c)}i=i.sibling}}function So(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,s=i,c=s.flags;switch(s.tag){case 22:So(r,s),c&2048&&Af(s.alternate,s);break;case 24:So(r,s),c&2048&&Tf(s.alternate,s);break;default:So(r,s)}i=i.sibling}}var Mo=8192;function Qr(e){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 26:Qr(e),e.flags&Mo&&e.memoizedState!==null&&Vx(pi,e.memoizedState,e.memoizedProps);break;case 5:Qr(e);break;case 3:case 4:var i=pi;pi=ou(e.stateNode.containerInfo),Qr(e),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Mo,Mo=16777216,Qr(e),Mo=i):Qr(e));break;default:Qr(e)}}function ag(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function wo(e){var i=e.deletions;if(e.flags&16){if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];cn=s,sg(s,e)}ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rg(e),e=e.sibling}function rg(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,ql(e)):wo(e);break;default:wo(e)}}function ql(e){var i=e.deletions;if(e.flags&16){if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];cn=s,sg(s,e)}ag(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Sa(8,i,i.return),ql(i);break;case 22:r=i.stateNode,r._visibility&4&&(r._visibility&=-5,ql(i));break;default:ql(i)}e=e.sibling}}function sg(e,i){for(;cn!==null;){var r=cn;switch(r.tag){case 0:case 11:case 15:Sa(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:co(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,cn=s;else t:for(r=e;cn!==null;){s=cn;var c=s.sibling,d=s.return;if(Qm(s),s===r){cn=null;break t}if(c!==null){c.return=d,cn=c;break t}cn=d}}}function ex(e,i,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,i,r,s){return new ex(e,i,r,s)}function Cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,i){var r=e.alternate;return r===null?(r=ii(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&31457280,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function og(e,i){e.flags&=31457282;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function jl(e,i,r,s,c,d){var b=0;if(s=e,typeof e=="function")Cf(e)&&(b=1);else if(typeof e=="string")b=Gx(e,r,Ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return lr(r.children,c,d,i);case p:b=8,c|=24;break;case g:return e=ii(12,r,i,c|2),e.elementType=g,e.lanes=d,e;case x:return e=ii(13,r,i,c),e.elementType=x,e.lanes=d,e;case v:return e=ii(19,r,i,c),e.elementType=v,e.lanes=d,e;case D:return lg(r,c,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case M:b=10;break t;case y:b=9;break t;case E:b=11;break t;case S:b=14;break t;case A:b=16,s=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),s=null}return i=ii(b,r,i,c),i.elementType=e,i.type=s,i.lanes=d,i}function lr(e,i,r,s){return e=ii(7,e,s,i),e.lanes=r,e}function lg(e,i,r,s){e=ii(22,e,s,i),e.elementType=D,e.lanes=r;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=c._current;if(d===null)throw Error(a(456));if(!(c._pendingVisibility&2)){var b=da(d,2);b!==null&&(c._pendingVisibility|=2,An(b,d,2))}},attach:function(){var d=c._current;if(d===null)throw Error(a(456));if(c._pendingVisibility&2){var b=da(d,2);b!==null&&(c._pendingVisibility&=-3,An(b,d,2))}}};return e.stateNode=c,e}function Df(e,i,r){return e=ii(6,e,null,i),e.lanes=r,e}function Lf(e,i,r){return i=ii(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Zi(e){e.flags|=4}function ug(e,i){if(i.type!=="stylesheet"||i.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qg(i)){if(i=ti.current,i!==null&&((ge&4194176)===ge?Ei!==null:(ge&62914560)!==ge&&!(ge&536870912)||i!==Ei))throw oo=Uc,Ap;e.flags|=8192}}function Zl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?De():536870912,e.lanes|=i,Jr|=i)}function Eo(e,i){if(!ye)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Pe(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(i)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=r,i}function nx(e,i,r){var s=i.pendingProps;switch(zc(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(i),null;case 1:return Pe(i),null;case 3:return r=i.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Xi(Je),Kt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(i)?Zi(i):e===null||e.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,di!==null&&(Ff(di),di=null))),Pe(i),null;case 26:return r=i.memoizedState,e===null?(Zi(i),r!==null?(Pe(i),ug(i,r)):(Pe(i),i.flags&=-16777217)):r?r!==e.memoizedState?(Zi(i),Pe(i),ug(i,r)):(Pe(i),i.flags&=-16777217):(e.memoizedProps!==s&&Zi(i),Pe(i),i.flags&=-16777217),null;case 27:Jt(i),r=Dt.current;var c=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==s&&Zi(i);else{if(!s){if(i.stateNode===null)throw Error(a(166));return Pe(i),null}e=Ot.current,io(i)?wp(i):(e=Hg(c,s,r),i.stateNode=e,Zi(i))}return Pe(i),null;case 5:if(Jt(i),r=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==s&&Zi(i);else{if(!s){if(i.stateNode===null)throw Error(a(166));return Pe(i),null}if(e=Ot.current,io(i))wp(i);else{switch(c=su(Dt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(r,{is:s.is}):c.createElement(r)}}e[tt]=i,e[ft]=s;t:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break t;for(;c.sibling===null;){if(c.return===null||c.return===i)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=e;t:switch(gn(e,r,s),r){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(i)}}return Pe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==s&&Zi(i);else{if(typeof s!="string"&&i.stateNode===null)throw Error(a(166));if(e=Dt.current,io(i)){if(e=i.stateNode,r=i.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[tt]=i,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||Og(e.nodeValue,r)),e||Ka(i)}else e=su(e).createTextNode(s),e[tt]=i,i.stateNode=e}return Pe(i),null;case 13:if(s=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=io(i),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[tt]=i}else ao(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Pe(i),c=!1}else di!==null&&(Ff(di),di=null),c=!0;if(!c)return i.flags&256?(Ii(i),i):(Ii(i),null)}if(Ii(i),i.flags&128)return i.lanes=r,i;if(r=s!==null,e=e!==null&&e.memoizedState!==null,r){s=i.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==c&&(s.flags|=2048)}return r!==e&&r&&(i.child.flags|=8192),Zl(i,i.updateQueue),Pe(i),null;case 4:return Kt(),e===null&&Zf(i.stateNode.containerInfo),Pe(i),null;case 10:return Xi(i.type),Pe(i),null;case 19:if(wt(Ke),c=i.memoizedState,c===null)return Pe(i),null;if(s=(i.flags&128)!==0,d=c.rendering,d===null)if(s)Eo(c,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=i.child;e!==null;){if(d=zl(e),d!==null){for(i.flags|=128,Eo(c,!1),e=d.updateQueue,i.updateQueue=e,Zl(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)og(r,e),r=r.sibling;return _t(Ke,Ke.current&1|2),i.child}e=e.sibling}c.tail!==null&&Q()>$l&&(i.flags|=128,s=!0,Eo(c,!1),i.lanes=4194304)}else{if(!s)if(e=zl(d),e!==null){if(i.flags|=128,s=!0,e=e.updateQueue,i.updateQueue=e,Zl(i,e),Eo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!ye)return Pe(i),null}else 2*Q()-c.renderingStartTime>$l&&r!==536870912&&(i.flags|=128,s=!0,Eo(c,!1),i.lanes=4194304);c.isBackwards?(d.sibling=i.child,i.child=d):(e=c.last,e!==null?e.sibling=d:i.child=d,c.last=d)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=Q(),i.sibling=null,e=Ke.current,_t(Ke,s?e&1|2:e&1),i):(Pe(i),null);case 22:case 23:return Ii(i),Nc(),s=i.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(i.flags|=8192):s&&(i.flags|=8192),s?r&536870912&&!(i.flags&128)&&(Pe(i),i.subtreeFlags&6&&(i.flags|=8192)):Pe(i),r=i.updateQueue,r!==null&&Zl(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048),e!==null&&wt(tr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Xi(Je),Pe(i),null;case 25:return null}throw Error(a(156,i.tag))}function ix(e,i){switch(zc(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Xi(Je),Kt(),e=i.flags,e&65536&&!(e&128)?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Jt(i),null;case 13:if(Ii(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ao()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return wt(Ke),null;case 4:return Kt(),null;case 10:return Xi(i.type),null;case 22:case 23:return Ii(i),Nc(),e!==null&&wt(tr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Xi(Je),null;case 25:return null;default:return null}}function cg(e,i){switch(zc(i),i.tag){case 3:Xi(Je),Kt();break;case 26:case 27:case 5:Jt(i);break;case 4:Kt();break;case 13:Ii(i);break;case 19:wt(Ke);break;case 10:Xi(i.type);break;case 22:case 23:Ii(i),Nc(),e!==null&&wt(tr);break;case 24:Xi(Je)}}var ax={getCacheForType:function(e){var i=xn(Je),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r}},rx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,ze=null,ce=null,ge=0,Oe=0,In=null,$i=!1,Kr=!1,Rf=!1,Qi=0,Fe=0,Aa=0,ur=0,zf=0,ai=0,Jr=0,Ao=null,Ti=null,Of=!1,Uf=0,$l=1/0,Ql=null,Ta=null,Kl=!1,cr=null,To=0,Pf=0,Nf=null,Co=0,Bf=null;function Vn(){if(Ne&2&&ge!==0)return ge&-ge;if(O.T!==null){var e=Wr;return e!==0?e:Xf()}return P()}function fg(){ai===0&&(ai=!(ge&536870912)||ye?Mi():536870912);var e=ti.current;return e!==null&&(e.flags|=32),ai}function An(e,i,r){(e===ze&&Oe===2||e.cancelPendingCommit!==null)&&(ts(e,0),Ki(e,ge,ai,!1)),rn(e,r),(!(Ne&2)||e!==ze)&&(e===ze&&(!(Ne&2)&&(ur|=r),Fe===4&&Ki(e,ge,ai,!1)),Ci(e))}function hg(e,i,r){if(Ne&6)throw Error(a(327));var s=!r&&(i&60)===0&&(i&e.expiredLanes)===0||Ue(e,i),c=s?lx(e,i):If(e,i,!0),d=s;do{if(c===0){Kr&&!s&&Ki(e,i,0,!1);break}else if(c===6)Ki(e,i,0,!$i);else{if(r=e.current.alternate,d&&!sx(r)){c=If(e,i,!1),d=!1;continue}if(c===2){if(d=i,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var C=e;c=Ao;var B=C.current.memoizedState.isDehydrated;if(B&&(ts(C,b).flags|=256),b=If(C,b,!1),b!==2){if(Rf&&!B){C.errorRecoveryDisabledLanes|=d,ur|=d,c=4;break t}d=Ti,Ti=c,d!==null&&Ff(d)}c=b}if(d=!1,c!==2)continue}}if(c===1){ts(e,0),Ki(e,i,0,!0);break}t:{switch(s=e,c){case 0:case 1:throw Error(a(345));case 4:if((i&4194176)===i){Ki(s,i,ai,!$i);break t}break;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if(s.finishedWork=r,s.finishedLanes=i,(i&62914560)===i&&(d=Uf+300-Q(),10<d)){if(Ki(s,i,ai,!$i),fe(s,0)!==0)break t;s.timeoutHandle=Ng(dg.bind(null,s,r,Ti,Ql,Of,i,ai,ur,Jr,$i,2,-0,0),d);break t}dg(s,r,Ti,Ql,Of,i,ai,ur,Jr,$i,0,-0,0)}}break}while(!0);Ci(e)}function Ff(e){Ti===null?Ti=e:Ti.push.apply(Ti,e)}function dg(e,i,r,s,c,d,b,C,B,q,mt,bt,lt){var dt=i.subtreeFlags;if((dt&8192||(dt&16785408)===16785408)&&(Uo={stylesheets:null,count:0,unsuspend:Ix},ig(i),i=kx(),i!==null)){e.cancelPendingCommit=i(xg.bind(null,e,r,s,c,b,C,B,1,bt,lt)),Ki(e,d,b,!q);return}xg(e,r,s,c,b,C,B,mt,bt,lt)}function sx(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var c=r[s],d=c.getSnapshot;c=c.value;try{if(!Fn(d(),c))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ki(e,i,r,s){i&=~zf,i&=~ur,e.suspendedLanes|=i,e.pingedLanes&=~i,s&&(e.warmLanes|=i),s=e.expirationTimes;for(var c=i;0<c;){var d=31-qt(c),b=1<<d;s[d]=-1,c&=~b}r!==0&&fl(e,r,i)}function Jl(){return Ne&6?!0:(Do(0),!1)}function Hf(){if(ce!==null){if(Oe===0)var e=ce.return;else e=ce,Wi=rr=null,Wc(e),Vr=null,lo=0,e=ce;for(;e!==null;)cg(e.alternate,e),e=e.return;ce=null}}function ts(e,i){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Ex(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Hf(),ze=e,ce=r=Ea(e.current,null),ge=i,Oe=0,In=null,$i=!1,Kr=Ue(e,i),Rf=!1,Jr=ai=zf=ur=Aa=Fe=0,Ti=Ao=null,Of=!1,i&8&&(i|=i&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=i;0<s;){var c=31-qt(s),d=1<<c;i|=e[c],s&=~d}return Qi=i,Ml(),r}function pg(e,i){se=null,O.H=Ai,i===so?(i=Dp(),Oe=3):i===Ap?(i=Dp(),Oe=4):Oe=i===Tm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,In=i,ce===null&&(Fe=1,kl(e,Qn(i,e.current)))}function mg(){var e=O.H;return O.H=Ai,e===null?Ai:e}function gg(){var e=O.A;return O.A=ax,e}function Gf(){Fe=4,$i||(ge&4194176)!==ge&&ti.current!==null||(Kr=!0),!(Aa&134217727)&&!(ur&134217727)||ze===null||Ki(ze,ge,ai,!1)}function If(e,i,r){var s=Ne;Ne|=2;var c=mg(),d=gg();(ze!==e||ge!==i)&&(Ql=null,ts(e,i)),i=!1;var b=Fe;t:do try{if(Oe!==0&&ce!==null){var C=ce,B=In;switch(Oe){case 8:Hf(),b=6;break t;case 3:case 2:case 6:ti.current===null&&(i=!0);var q=Oe;if(Oe=0,In=null,es(e,C,B,q),r&&Kr){b=0;break t}break;default:q=Oe,Oe=0,In=null,es(e,C,B,q)}}ox(),b=Fe;break}catch(mt){pg(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Wi=rr=null,Ne=s,O.H=c,O.A=d,ce===null&&(ze=null,ge=0,Ml()),b}function ox(){for(;ce!==null;)vg(ce)}function lx(e,i){var r=Ne;Ne|=2;var s=mg(),c=gg();ze!==e||ge!==i?(Ql=null,$l=Q()+500,ts(e,i)):Kr=Ue(e,i);t:do try{if(Oe!==0&&ce!==null){i=ce;var d=In;e:switch(Oe){case 1:Oe=0,In=null,es(e,i,d,1);break;case 2:if(Tp(d)){Oe=0,In=null,_g(i);break}i=function(){Oe===2&&ze===e&&(Oe=7),Ci(e)},d.then(i,i);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Tp(d)?(Oe=0,In=null,_g(i)):(Oe=0,In=null,es(e,i,d,7));break;case 5:var b=null;switch(ce.tag){case 26:b=ce.memoizedState;case 5:case 27:var C=ce;if(!b||qg(b)){Oe=0,In=null;var B=C.sibling;if(B!==null)ce=B;else{var q=C.return;q!==null?(ce=q,tu(q)):ce=null}break e}}Oe=0,In=null,es(e,i,d,5);break;case 6:Oe=0,In=null,es(e,i,d,6);break;case 8:Hf(),Fe=6;break t;default:throw Error(a(462))}}ux();break}catch(mt){pg(e,mt)}while(!0);return Wi=rr=null,O.H=s,O.A=c,Ne=r,ce!==null?0:(ze=null,ge=0,Ml(),Fe)}function ux(){for(;ce!==null&&!N();)vg(ce)}function vg(e){var i=Hm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,i===null?tu(e):ce=i}function _g(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Om(r,i,i.pendingProps,i.type,void 0,ge);break;case 11:i=Om(r,i,i.pendingProps,i.type.render,i.ref,ge);break;case 5:Wc(i);default:cg(r,i),i=ce=og(i,Qi),i=Hm(r,i,Qi)}e.memoizedProps=e.pendingProps,i===null?tu(e):ce=i}function es(e,i,r,s){Wi=rr=null,Wc(i),Vr=null,lo=0;var c=i.return;try{if(Qy(e,c,i,r,ge)){Fe=1,kl(e,Qn(r,e.current)),ce=null;return}}catch(d){if(c!==null)throw ce=c,d;Fe=1,kl(e,Qn(r,e.current)),ce=null;return}i.flags&32768?(ye||s===1?e=!0:Kr||ge&536870912?e=!1:($i=e=!0,(s===2||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),yg(i,e)):tu(i)}function tu(e){var i=e;do{if(i.flags&32768){yg(i,$i);return}e=i.return;var r=nx(i.alternate,i,Qi);if(r!==null){ce=r;return}if(i=i.sibling,i!==null){ce=i;return}ce=i=e}while(i!==null);Fe===0&&(Fe=5)}function yg(e,i){do{var r=ix(e.alternate,e);if(r!==null){r.flags&=32767,ce=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ce=e;return}ce=e=r}while(e!==null);Fe=6,ce=null}function xg(e,i,r,s,c,d,b,C,B,q){var mt=O.T,bt=Y.p;try{Y.p=2,O.T=null,cx(e,i,r,s,bt,c,d,b,C,B,q)}finally{O.T=mt,Y.p=bt}}function cx(e,i,r,s,c,d,b,C){do ns();while(cr!==null);if(Ne&6)throw Error(a(327));var B=e.finishedWork;if(s=e.finishedLanes,B===null)return null;if(e.finishedWork=null,e.finishedLanes=0,B===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var q=B.lanes|B.childLanes;if(q|=Dc,cl(e,s,q,d,b,C),e===ze&&(ce=ze=null,ge=0),!(B.subtreeFlags&10256)&&!(B.flags&10256)||Kl||(Kl=!0,Pf=q,Nf=r,px(Ht,function(){return ns(),null})),r=(B.flags&15990)!==0,B.subtreeFlags&15990||r?(r=O.T,O.T=null,d=Y.p,Y.p=2,b=Ne,Ne|=4,Jy(e,B),tg(B,e),Uy(Jf,e.containerInfo),hu=!!Kf,Jf=Kf=null,e.current=B,$m(e,B.alternate,B),R(),Ne=b,Y.p=d,O.T=r):e.current=B,Kl?(Kl=!1,cr=e,To=s):bg(e,q),q=e.pendingLanes,q===0&&(Ta=null),Gt(B.stateNode),Ci(e),i!==null)for(c=e.onRecoverableError,B=0;B<i.length;B++)q=i[B],c(q.value,{componentStack:q.stack});return To&3&&ns(),q=e.pendingLanes,s&4194218&&q&42?e===Bf?Co++:(Co=0,Bf=e):Co=0,Do(0),null}function bg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,co(i)))}function ns(){if(cr!==null){var e=cr,i=Pf;Pf=0;var r=dl(To),s=O.T,c=Y.p;try{if(Y.p=32>r?32:r,O.T=null,cr===null)var d=!1;else{r=Nf,Nf=null;var b=cr,C=To;if(cr=null,To=0,Ne&6)throw Error(a(331));var B=Ne;if(Ne|=4,rg(b.current),ng(b,b.current,C,r),Ne=B,Do(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Rt,b)}catch{}d=!0}return d}finally{Y.p=c,O.T=s,bg(e,i)}}return!1}function Sg(e,i,r){i=Qn(r,i),i=rf(e.stateNode,i,2),e=ba(e,i,2),e!==null&&(rn(e,2),Ci(e))}function Le(e,i,r){if(e.tag===3)Sg(e,e,r);else for(;i!==null;){if(i.tag===3){Sg(i,e,r);break}else if(i.tag===1){var s=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){e=Qn(r,e),r=Em(2),s=ba(i,r,2),s!==null&&(Am(r,s,i,e),rn(s,2),Ci(s));break}}i=i.return}}function Vf(e,i,r){var s=e.pingCache;if(s===null){s=e.pingCache=new rx;var c=new Set;s.set(i,c)}else c=s.get(i),c===void 0&&(c=new Set,s.set(i,c));c.has(r)||(Rf=!0,c.add(r),e=fx.bind(null,e,i,r),i.then(e,e))}function fx(e,i,r){var s=e.pingCache;s!==null&&s.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ze===e&&(ge&r)===r&&(Fe===4||Fe===3&&(ge&62914560)===ge&&300>Q()-Uf?!(Ne&2)&&ts(e,0):zf|=r,Jr===ge&&(Jr=0)),Ci(e)}function Mg(e,i){i===0&&(i=De()),e=da(e,i),e!==null&&(rn(e,i),Ci(e))}function hx(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Mg(e,r)}function dx(e,i){var r=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(a(314))}s!==null&&s.delete(i),Mg(e,r)}function px(e,i){return me(e,i)}var eu=null,is=null,kf=!1,nu=!1,Wf=!1,fr=0;function Ci(e){e!==is&&e.next===null&&(is===null?eu=is=e:is=is.next=e),nu=!0,kf||(kf=!0,gx(mx))}function Do(e,i){if(!Wf&&nu){Wf=!0;do for(var r=!1,s=eu;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var d=0;else{var b=s.suspendedLanes,C=s.pingedLanes;d=(1<<31-qt(42|e)+1)-1,d&=c&~(b&~C),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(r=!0,Ag(s,d))}else d=ge,d=fe(s,s===ze?d:0),!(d&3)||Ue(s,d)||(r=!0,Ag(s,d));s=s.next}while(r);Wf=!1}}function mx(){nu=kf=!1;var e=0;fr!==0&&(wx()&&(e=fr),fr=0);for(var i=Q(),r=null,s=eu;s!==null;){var c=s.next,d=wg(s,i);d===0?(s.next=null,r===null?eu=c:r.next=c,c===null&&(is=r)):(r=s,(e!==0||d&3)&&(nu=!0)),s=c}Do(e)}function wg(e,i){for(var r=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-qt(d),C=1<<b,B=c[b];B===-1?(!(C&r)||C&s)&&(c[b]=an(C,i)):B<=i&&(e.expiredLanes|=C),d&=~C}if(i=ze,r=ge,r=fe(e,e===i?r:0),s=e.callbackNode,r===0||e===i&&Oe===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ve(s),e.callbackNode=null,e.callbackPriority=0;if(!(r&3)||Ue(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(s!==null&&Ve(s),dl(r)){case 2:case 8:r=Lt;break;case 32:r=Ht;break;case 268435456:r=at;break;default:r=Ht}return s=Eg.bind(null,e),r=me(r,s),e.callbackPriority=i,e.callbackNode=r,i}return s!==null&&s!==null&&Ve(s),e.callbackPriority=2,e.callbackNode=null,2}function Eg(e,i){var r=e.callbackNode;if(ns()&&e.callbackNode!==r)return null;var s=ge;return s=fe(e,e===ze?s:0),s===0?null:(hg(e,s,i),wg(e,Q()),e.callbackNode!=null&&e.callbackNode===r?Eg.bind(null,e):null)}function Ag(e,i){if(ns())return null;hg(e,i,!0)}function gx(e){Ax(function(){Ne&6?me(Et,e):e()})}function Xf(){return fr===0&&(fr=Mi()),fr}function Tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function Cg(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function vx(e,i,r,s,c){if(i==="submit"&&r&&r.stateNode===c){var d=Tg((c[ft]||null).action),b=s.submitter;b&&(i=(i=b[ft]||null)?Tg(i.formAction):b.getAttribute("formAction"),i!==null&&(d=i,b=null));var C=new xl("action","action",null,s,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(fr!==0){var B=b?Cg(c,b):new FormData(c);Jc(r,{pending:!0,data:B,method:c.method,action:d},null,B)}}else typeof d=="function"&&(C.preventDefault(),B=b?Cg(c,b):new FormData(c),Jc(r,{pending:!0,data:B,method:c.method,action:d},d,B))},currentTarget:c}]})}}for(var Yf=0;Yf<xp.length;Yf++){var qf=xp[Yf],_x=qf.toLowerCase(),yx=qf[0].toUpperCase()+qf.slice(1);hi(_x,"on"+yx)}hi(mp,"onAnimationEnd"),hi(gp,"onAnimationIteration"),hi(vp,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Ny,"onTransitionRun"),hi(By,"onTransitionStart"),hi(Fy,"onTransitionCancel"),hi(_p,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Dg(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],c=s.event;s=s.listeners;t:{var d=void 0;if(i)for(var b=s.length-1;0<=b;b--){var C=s[b],B=C.instance,q=C.currentTarget;if(C=C.listener,B!==d&&c.isPropagationStopped())break t;d=C,c.currentTarget=q;try{d(c)}catch(mt){Vl(mt)}c.currentTarget=null,d=B}else for(b=0;b<s.length;b++){if(C=s[b],B=C.instance,q=C.currentTarget,C=C.listener,B!==d&&c.isPropagationStopped())break t;d=C,c.currentTarget=q;try{d(c)}catch(mt){Vl(mt)}c.currentTarget=null,d=B}}}}function he(e,i){var r=i[jt];r===void 0&&(r=i[jt]=new Set);var s=e+"__bubble";r.has(s)||(Lg(i,e,2,!1),r.add(s))}function jf(e,i,r){var s=0;i&&(s|=4),Lg(r,e,s,i)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[iu]){e[iu]=!0,_e.forEach(function(r){r!=="selectionchange"&&(xx.has(r)||jf(r,!1,e),jf(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[iu]||(i[iu]=!0,jf("selectionchange",!1,i))}}function Lg(e,i,r,s){switch(Jg(i)){case 2:var c=Yx;break;case 8:c=qx;break;default:c=lh}r=c.bind(null,i,r,e),c=void 0,!gc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(i,r,{capture:!0,passive:c}):e.addEventListener(i,r,!0):c!==void 0?e.addEventListener(i,r,{passive:c}):e.addEventListener(i,r,!1)}function $f(e,i,r,s,c){var d=s;if(!(i&1)&&!(i&2)&&s!==null)t:for(;;){if(s===null)return;var b=s.tag;if(b===3||b===4){var C=s.stateNode.containerInfo;if(C===c||C.nodeType===8&&C.parentNode===c)break;if(b===4)for(b=s.return;b!==null;){var B=b.tag;if((B===3||B===4)&&(B=b.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;b=b.return}for(;C!==null;){if(b=Se(C),b===null)return;if(B=b.tag,B===5||B===6||B===26||B===27){s=d=b;continue t}C=C.parentNode}}s=s.return}Xd(function(){var q=d,mt=pc(r),bt=[];t:{var lt=yp.get(e);if(lt!==void 0){var dt=xl,It=e;switch(e){case"keypress":if(_l(r)===0)break t;case"keydown":case"keyup":dt=dy;break;case"focusin":It="focus",dt=xc;break;case"focusout":It="blur",dt=xc;break;case"beforeblur":case"afterblur":dt=xc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=gy;break;case mp:case gp:case vp:dt=ay;break;case _p:dt=_y;break;case"scroll":case"scrollend":dt=J_;break;case"wheel":dt=xy;break;case"copy":case"cut":case"paste":dt=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=$d;break;case"toggle":case"beforetoggle":dt=Sy}var $t=(i&4)!==0,He=!$t&&(e==="scroll"||e==="scrollend"),et=$t?lt!==null?lt+"Capture":null:lt;$t=[];for(var W=q,rt;W!==null;){var xt=W;if(rt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||rt===null||et===null||(xt=js(W,et),xt!=null&&$t.push(Ro(W,xt,rt))),He)break;W=W.return}0<$t.length&&(lt=new dt(lt,It,null,r,mt),bt.push({event:lt,listeners:$t}))}}if(!(i&7)){t:{if(lt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",lt&&r!==dc&&(It=r.relatedTarget||r.fromElement)&&(Se(It)||It[Vt]))break t;if((dt||lt)&&(lt=mt.window===mt?mt:(lt=mt.ownerDocument)?lt.defaultView||lt.parentWindow:window,dt?(It=r.relatedTarget||r.toElement,dt=q,It=It?Se(It):null,It!==null&&(He=K(It),$t=It.tag,It!==He||$t!==5&&$t!==27&&$t!==6)&&(It=null)):(dt=null,It=q),dt!==It)){if($t=jd,xt="onMouseLeave",et="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&($t=$d,xt="onPointerLeave",et="onPointerEnter",W="pointer"),He=dt==null?lt:jn(dt),rt=It==null?lt:jn(It),lt=new $t(xt,W+"leave",dt,r,mt),lt.target=He,lt.relatedTarget=rt,xt=null,Se(mt)===q&&($t=new $t(et,W+"enter",It,r,mt),$t.target=rt,$t.relatedTarget=He,xt=$t),He=xt,dt&&It)e:{for($t=dt,et=It,W=0,rt=$t;rt;rt=as(rt))W++;for(rt=0,xt=et;xt;xt=as(xt))rt++;for(;0<W-rt;)$t=as($t),W--;for(;0<rt-W;)et=as(et),rt--;for(;W--;){if($t===et||et!==null&&$t===et.alternate)break e;$t=as($t),et=as(et)}$t=null}else $t=null;dt!==null&&Rg(bt,lt,dt,$t,!1),It!==null&&He!==null&&Rg(bt,He,It,$t,!0)}}t:{if(lt=q?jn(q):window,dt=lt.nodeName&&lt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&lt.type==="file")var Bt=ap;else if(np(lt))if(rp)Bt=zy;else{Bt=Ly;var le=Dy}else dt=lt.nodeName,!dt||dt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?q&&hc(q.elementType)&&(Bt=ap):Bt=Ry;if(Bt&&(Bt=Bt(e,q))){ip(bt,Bt,r,mt);break t}le&&le(e,lt,q),e==="focusout"&&q&&lt.type==="number"&&q.memoizedProps.value!=null&&fc(lt,"number",lt.value)}switch(le=q?jn(q):window,e){case"focusin":(np(le)||le.contentEditable==="true")&&(Nr=le,Ac=q,no=null);break;case"focusout":no=Ac=Nr=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,dp(bt,r,mt);break;case"selectionchange":if(Py)break;case"keydown":case"keyup":dp(bt,r,mt)}var Wt;if(Sc)t:{switch(e){case"compositionstart":var Xt="onCompositionStart";break t;case"compositionend":Xt="onCompositionEnd";break t;case"compositionupdate":Xt="onCompositionUpdate";break t}Xt=void 0}else Pr?tp(e,r)&&(Xt="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Xt="onCompositionStart");Xt&&(Qd&&r.locale!=="ko"&&(Pr||Xt!=="onCompositionStart"?Xt==="onCompositionEnd"&&Pr&&(Wt=Yd()):(ha=mt,vc="value"in ha?ha.value:ha.textContent,Pr=!0)),le=au(q,Xt),0<le.length&&(Xt=new Zd(Xt,e,null,r,mt),bt.push({event:Xt,listeners:le}),Wt?Xt.data=Wt:(Wt=ep(r),Wt!==null&&(Xt.data=Wt)))),(Wt=wy?Ey(e,r):Ay(e,r))&&(Xt=au(q,"onBeforeInput"),0<Xt.length&&(le=new Zd("onBeforeInput","beforeinput",null,r,mt),bt.push({event:le,listeners:Xt}),le.data=Wt)),vx(bt,e,q,r,mt)}Dg(bt,i)})}function Ro(e,i,r){return{instance:e,listener:i,currentTarget:r}}function au(e,i){for(var r=i+"Capture",s=[];e!==null;){var c=e,d=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=js(e,r),c!=null&&s.unshift(Ro(e,c,d)),c=js(e,i),c!=null&&s.push(Ro(e,c,d))),e=e.return}return s}function as(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rg(e,i,r,s,c){for(var d=i._reactName,b=[];r!==null&&r!==s;){var C=r,B=C.alternate,q=C.stateNode;if(C=C.tag,B!==null&&B===s)break;C!==5&&C!==26&&C!==27||q===null||(B=q,c?(q=js(r,d),q!=null&&b.unshift(Ro(r,q,B))):c||(q=js(r,d),q!=null&&b.push(Ro(r,q,B)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var bx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(bx,`
`).replace(Sx,"")}function Og(e,i){return i=zg(i),zg(e)===i}function ru(){}function Te(e,i,r,s,c,d){switch(r){case"children":typeof s=="string"?i==="body"||i==="textarea"&&s===""||zr(e,s):(typeof s=="number"||typeof s=="bigint")&&i!=="body"&&zr(e,""+s);break;case"className":ln(e,"class",s);break;case"tabIndex":ln(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ln(e,r,s);break;case"style":kd(e,s,d);break;case"data":if(i!=="object"){ln(e,"data",s);break}case"src":case"href":if(s===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=gl(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Te(e,i,"name",c.name,c,null),Te(e,i,"formEncType",c.formEncType,c,null),Te(e,i,"formMethod",c.formMethod,c,null),Te(e,i,"formTarget",c.formTarget,c,null)):(Te(e,i,"encType",c.encType,c,null),Te(e,i,"method",c.method,c,null),Te(e,i,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=gl(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=ru);break;case"onScroll":s!=null&&he("scroll",e);break;case"onScrollEnd":s!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(a(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=gl(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":he("beforetoggle",e),he("toggle",e),fa(e,"popover",s);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":fa(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Q_.get(r)||r,fa(e,r,s))}}function Qf(e,i,r,s,c,d){switch(r){case"style":kd(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(a(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof s=="string"?zr(e,s):(typeof s=="number"||typeof s=="bigint")&&zr(e,""+s);break;case"onScroll":s!=null&&he("scroll",e);break;case"onScrollEnd":s!=null&&he("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ru);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bi.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),i=r.slice(2,c?r.length-7:void 0),d=e[ft]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,c),typeof s=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,s,c);break t}r in e?e[r]=s:s===!0?e.setAttribute(r,""):fa(e,r,s)}}}function gn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var s=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var b=r[d];if(b!=null)switch(d){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Te(e,i,d,b,r,null)}}c&&Te(e,i,"srcSet",r.srcSet,r,null),s&&Te(e,i,"src",r.src,r,null);return;case"input":he("invalid",e);var C=d=b=c=null,B=null,q=null;for(s in r)if(r.hasOwnProperty(s)){var mt=r[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":b=mt;break;case"checked":B=mt;break;case"defaultChecked":q=mt;break;case"value":d=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:Te(e,i,s,mt,r,null)}}Hd(e,d,C,B,q,b,c,!1),pl(e);return;case"select":he("invalid",e),s=b=d=null;for(c in r)if(r.hasOwnProperty(c)&&(C=r[c],C!=null))switch(c){case"value":d=C;break;case"defaultValue":b=C;break;case"multiple":s=C;default:Te(e,i,c,C,r,null)}i=d,r=b,e.multiple=!!s,i!=null?Rr(e,!!s,i,!1):r!=null&&Rr(e,!!s,r,!0);return;case"textarea":he("invalid",e),d=c=s=null;for(b in r)if(r.hasOwnProperty(b)&&(C=r[b],C!=null))switch(b){case"value":s=C;break;case"defaultValue":c=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Te(e,i,b,C,r,null)}Id(e,s,c,d),pl(e);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(s=r[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Te(e,i,B,s,r,null)}return;case"dialog":he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(s=0;s<Lo.length;s++)he(Lo[s],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in r)if(r.hasOwnProperty(q)&&(s=r[q],s!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Te(e,i,q,s,r,null)}return;default:if(hc(i)){for(mt in r)r.hasOwnProperty(mt)&&(s=r[mt],s!==void 0&&Qf(e,i,mt,s,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(s=r[C],s!=null&&Te(e,i,C,s,r,null))}function Mx(e,i,r,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,b=null,C=null,B=null,q=null,mt=null;for(dt in r){var bt=r[dt];if(r.hasOwnProperty(dt)&&bt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":B=bt;default:s.hasOwnProperty(dt)||Te(e,i,dt,null,s,bt)}}for(var lt in s){var dt=s[lt];if(bt=r[lt],s.hasOwnProperty(lt)&&(dt!=null||bt!=null))switch(lt){case"type":d=dt;break;case"name":c=dt;break;case"checked":q=dt;break;case"defaultChecked":mt=dt;break;case"value":b=dt;break;case"defaultValue":C=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==bt&&Te(e,i,lt,dt,s,bt)}}cc(e,b,C,B,q,mt,d,c);return;case"select":dt=b=C=lt=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":dt=B;default:s.hasOwnProperty(d)||Te(e,i,d,null,s,B)}for(c in s)if(d=s[c],B=r[c],s.hasOwnProperty(c)&&(d!=null||B!=null))switch(c){case"value":lt=d;break;case"defaultValue":C=d;break;case"multiple":b=d;default:d!==B&&Te(e,i,c,d,s,B)}i=C,r=b,s=dt,lt!=null?Rr(e,!!r,lt,!1):!!s!=!!r&&(i!=null?Rr(e,!!r,i,!0):Rr(e,!!r,r?[]:"",!1));return;case"textarea":dt=lt=null;for(C in r)if(c=r[C],r.hasOwnProperty(C)&&c!=null&&!s.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Te(e,i,C,null,s,c)}for(b in s)if(c=s[b],d=r[b],s.hasOwnProperty(b)&&(c!=null||d!=null))switch(b){case"value":lt=c;break;case"defaultValue":dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==d&&Te(e,i,b,c,s,d)}Gd(e,lt,dt);return;case"option":for(var It in r)if(lt=r[It],r.hasOwnProperty(It)&&lt!=null&&!s.hasOwnProperty(It))switch(It){case"selected":e.selected=!1;break;default:Te(e,i,It,null,s,lt)}for(B in s)if(lt=s[B],dt=r[B],s.hasOwnProperty(B)&&lt!==dt&&(lt!=null||dt!=null))switch(B){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Te(e,i,B,lt,s,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in r)lt=r[$t],r.hasOwnProperty($t)&&lt!=null&&!s.hasOwnProperty($t)&&Te(e,i,$t,null,s,lt);for(q in s)if(lt=s[q],dt=r[q],s.hasOwnProperty(q)&&lt!==dt&&(lt!=null||dt!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:Te(e,i,q,lt,s,dt)}return;default:if(hc(i)){for(var He in r)lt=r[He],r.hasOwnProperty(He)&&lt!==void 0&&!s.hasOwnProperty(He)&&Qf(e,i,He,void 0,s,lt);for(mt in s)lt=s[mt],dt=r[mt],!s.hasOwnProperty(mt)||lt===dt||lt===void 0&&dt===void 0||Qf(e,i,mt,lt,s,dt);return}}for(var et in r)lt=r[et],r.hasOwnProperty(et)&&lt!=null&&!s.hasOwnProperty(et)&&Te(e,i,et,null,s,lt);for(bt in s)lt=s[bt],dt=r[bt],!s.hasOwnProperty(bt)||lt===dt||lt==null&&dt==null||Te(e,i,bt,lt,s,dt)}var Kf=null,Jf=null;function su(e){return e.nodeType===9?e:e.ownerDocument}function Ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function th(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eh=null;function wx(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,Ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(e){return Bg.resolve(null).then(e).catch(Tx)}:Ng;function Tx(e){setTimeout(function(){throw e})}function nh(e,i){var r=i,s=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(s===0){e.removeChild(c),Ho(i);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=c}while(r);Ho(i)}function ih(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ih(r),ue(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Cx(e,i,r,s){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[te])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function Dx(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=mi(e.nextSibling),e===null))return null;return e}function mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function Fg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return e;i--}else r==="/$"&&i++}e=e.previousSibling}return null}function Hg(e,i,r){switch(i=su(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var ri=new Map,Gg=new Set;function ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ji=Y.d;Y.d={f:Lx,r:Rx,D:zx,C:Ox,L:Ux,m:Px,X:Bx,S:Nx,M:Fx};function Lx(){var e=Ji.f(),i=Jl();return e||i}function Rx(e){var i=Dn(e);i!==null&&i.tag===5&&i.type==="form"?dm(i):Ji.r(e)}var rs=typeof document>"u"?null:document;function Ig(e,i,r){var s=rs;if(s&&typeof i=="string"&&i){var c=Zn(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),Gg.has(c)||(Gg.add(c),e={rel:e,crossOrigin:r,href:i},s.querySelector(c)===null&&(i=s.createElement("link"),gn(i,"link",e),we(i),s.head.appendChild(i)))}}function zx(e){Ji.D(e),Ig("dns-prefetch",e,null)}function Ox(e,i){Ji.C(e,i),Ig("preconnect",e,i)}function Ux(e,i,r){Ji.L(e,i,r);var s=rs;if(s&&e&&i){var c='link[rel="preload"][as="'+Zn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Zn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Zn(r.imageSizes)+'"]')):c+='[href="'+Zn(e)+'"]';var d=c;switch(i){case"style":d=ss(e);break;case"script":d=os(e)}ri.has(d)||(e=k({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),ri.set(d,e),s.querySelector(c)!==null||i==="style"&&s.querySelector(zo(d))||i==="script"&&s.querySelector(Oo(d))||(i=s.createElement("link"),gn(i,"link",e),we(i),s.head.appendChild(i)))}}function Px(e,i){Ji.m(e,i);var r=rs;if(r&&e){var s=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+Zn(s)+'"][href="'+Zn(e)+'"]',d=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=os(e)}if(!ri.has(d)&&(e=k({rel:"modulepreload",href:e},i),ri.set(d,e),r.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Oo(d)))return}s=r.createElement("link"),gn(s,"link",e),we(s),r.head.appendChild(s)}}}function Nx(e,i,r){Ji.S(e,i,r);var s=rs;if(s&&e){var c=Nn(s).hoistableStyles,d=ss(e);i=i||"default";var b=c.get(d);if(!b){var C={loading:0,preload:null};if(b=s.querySelector(zo(d)))C.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":i},r),(r=ri.get(d))&&ah(e,r);var B=b=s.createElement("link");we(B),gn(B,"link",e),B._p=new Promise(function(q,mt){B.onload=q,B.onerror=mt}),B.addEventListener("load",function(){C.loading|=1}),B.addEventListener("error",function(){C.loading|=2}),C.loading|=4,lu(b,i,s)}b={type:"stylesheet",instance:b,count:1,state:C},c.set(d,b)}}}function Bx(e,i){Ji.X(e,i);var r=rs;if(r&&e){var s=Nn(r).hoistableScripts,c=os(e),d=s.get(c);d||(d=r.querySelector(Oo(c)),d||(e=k({src:e,async:!0},i),(i=ri.get(c))&&rh(e,i),d=r.createElement("script"),we(d),gn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function Fx(e,i){Ji.M(e,i);var r=rs;if(r&&e){var s=Nn(r).hoistableScripts,c=os(e),d=s.get(c);d||(d=r.querySelector(Oo(c)),d||(e=k({src:e,async:!0,type:"module"},i),(i=ri.get(c))&&rh(e,i),d=r.createElement("script"),we(d),gn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function Vg(e,i,r,s){var c=(c=Dt.current)?ou(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ss(r.href),r=Nn(c).hoistableStyles,s=r.get(i),s||(s={type:"style",instance:null,count:0,state:null},r.set(i,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ss(r.href);var d=Nn(c).hoistableStyles,b=d.get(e);if(b||(c=c.ownerDocument||c,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=c.querySelector(zo(e)))&&!d._p&&(b.instance=d,b.state.loading=5),ri.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ri.set(e,r),d||Hx(c,e,r,b.state))),i&&s===null)throw Error(a(528,""));return b}if(i&&s!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=os(r),r=Nn(c).hoistableScripts,s=r.get(i),s||(s={type:"script",instance:null,count:0,state:null},r.set(i,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ss(e){return'href="'+Zn(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function kg(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Hx(e,i,r,s){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=e.createElement("link"),s.preload=i,i.addEventListener("load",function(){return s.loading|=1}),i.addEventListener("error",function(){return s.loading|=2}),gn(i,"link",r),we(i),e.head.appendChild(i))}function os(e){return'[src="'+Zn(e)+'"]'}function Oo(e){return"script[async]"+e}function Wg(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var s=e.querySelector('style[data-href~="'+Zn(r.href)+'"]');if(s)return i.instance=s,we(s),s;var c=k({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),we(s),gn(s,"style",c),lu(s,r.precedence,e),i.instance=s;case"stylesheet":c=ss(r.href);var d=e.querySelector(zo(c));if(d)return i.state.loading|=4,i.instance=d,we(d),d;s=kg(r),(c=ri.get(c))&&ah(s,c),d=(e.ownerDocument||e).createElement("link"),we(d);var b=d;return b._p=new Promise(function(C,B){b.onload=C,b.onerror=B}),gn(d,"link",s),i.state.loading|=4,lu(d,r.precedence,e),i.instance=d;case"script":return d=os(r.src),(c=e.querySelector(Oo(d)))?(i.instance=c,we(c),c):(s=r,(c=ri.get(d))&&(s=k({},r),rh(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),we(c),gn(c,"link",s),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&!(i.state.loading&4)&&(s=i.instance,i.state.loading|=4,lu(s,r.precedence,e));return i.instance}function lu(e,i,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,d=c,b=0;b<s.length;b++){var C=s[b];if(C.dataset.precedence===i)d=C;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function ah(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function rh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var uu=null;function Xg(e,i,r){if(uu===null){var s=new Map,c=uu=new Map;c.set(r,s)}else c=uu,s=c.get(r),s||(s=new Map,c.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var d=r[c];if(!(d[te]||d[tt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(i)||"";b=e+b;var C=s.get(b);C?C.push(d):s.set(b,[d])}}return s}function Yg(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function Gx(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function qg(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var Uo=null;function Ix(){}function Vx(e,i,r){if(Uo===null)throw Error(a(475));var s=Uo;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var c=ss(r.href),d=e.querySelector(zo(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=cu.bind(s),e.then(s,s)),i.state.loading|=4,i.instance=d,we(d);return}d=e.ownerDocument||e,r=kg(r),(c=ri.get(c))&&ah(r,c),d=d.createElement("link"),we(d);var b=d;b._p=new Promise(function(C,B){b.onload=C,b.onerror=B}),gn(d,"link",r),i.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(i,e),(e=i.state.preload)&&!(i.state.loading&3)&&(s.count++,i=cu.bind(s),e.addEventListener("load",i),e.addEventListener("error",i))}}function kx(){if(Uo===null)throw Error(a(475));var e=Uo;return e.stylesheets&&e.count===0&&sh(e,e.stylesheets),0<e.count?function(i){var r=setTimeout(function(){if(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r)}}:null}function cu(){if(this.count--,this.count===0){if(this.stylesheets)sh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fu=null;function sh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,i.forEach(Wx,e),fu=null,cu.call(e))}function Wx(e,i){if(!(i.state.loading&4)){var r=fu.get(e);if(r)var s=r.get(null);else{r=new Map,fu.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var b=c[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),s=b)}s&&r.set(null,s)}c=i.instance,b=c.getAttribute("data-precedence"),d=r.get(b)||s,d===s&&r.set(null,c),r.set(b,c),this.count++,s=cu.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var Po={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function Xx(e,i,r,s,c,d,b,C){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.hiddenUpdates=Pn(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function jg(e,i,r,s,c,d,b,C,B,q,mt,bt){return e=new Xx(e,i,r,b,C,B,q,bt),i=1,d===!0&&(i|=24),d=ii(3,null,null,i),e.current=d,d.stateNode=e,i=Bc(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:s,isDehydrated:r,cache:i},_f(d),e}function Zg(e){return e?(e=Hr,e):Hr}function $g(e,i,r,s,c,d){c=Zg(c),s.context===null?s.context=c:s.pendingContext=c,s=xa(i),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=ba(e,s,i),r!==null&&(An(r,e,i),_o(r,e,i))}function Qg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function oh(e,i){Qg(e,i),(e=e.alternate)&&Qg(e,i)}function Kg(e){if(e.tag===13){var i=da(e,67108864);i!==null&&An(i,e,67108864),oh(e,67108864)}}var hu=!0;function Yx(e,i,r,s){var c=O.T;O.T=null;var d=Y.p;try{Y.p=2,lh(e,i,r,s)}finally{Y.p=d,O.T=c}}function qx(e,i,r,s){var c=O.T;O.T=null;var d=Y.p;try{Y.p=8,lh(e,i,r,s)}finally{Y.p=d,O.T=c}}function lh(e,i,r,s){if(hu){var c=uh(s);if(c===null)$f(e,i,s,du,r),t0(e,s);else if(Zx(c,e,i,r,s))s.stopPropagation();else if(t0(e,s),i&4&&-1<jx.indexOf(e)){for(;c!==null;){var d=Dn(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Ft(d.pendingLanes);if(b!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var B=1<<31-qt(b);C.entanglements[1]|=B,b&=~B}Ci(d),!(Ne&6)&&($l=Q()+500,Do(0))}}break;case 13:C=da(d,2),C!==null&&An(C,d,2),Jl(),oh(d,2)}if(d=uh(s),d===null&&$f(e,i,s,du,r),d===c)break;c=d}c!==null&&s.stopPropagation()}else $f(e,i,s,null,r)}}function uh(e){return e=pc(e),ch(e)}var du=null;function ch(e){if(du=null,e=Se(e),e!==null){var i=K(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=$(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return du=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case Et:return 2;case Lt:return 8;case Ht:case H:return 32;case at:return 268435456;default:return 32}default:return 32}}var fh=!1,Ca=null,Da=null,La=null,No=new Map,Bo=new Map,Ra=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(e,i){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":No.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(i.pointerId)}}function Fo(e,i,r,s,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},i!==null&&(i=Dn(i),i!==null&&Kg(i)),e):(e.eventSystemFlags|=s,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function Zx(e,i,r,s,c){switch(i){case"focusin":return Ca=Fo(Ca,e,i,r,s,c),!0;case"dragenter":return Da=Fo(Da,e,i,r,s,c),!0;case"mouseover":return La=Fo(La,e,i,r,s,c),!0;case"pointerover":var d=c.pointerId;return No.set(d,Fo(No.get(d)||null,e,i,r,s,c)),!0;case"gotpointercapture":return d=c.pointerId,Bo.set(d,Fo(Bo.get(d)||null,e,i,r,s,c)),!0}return!1}function e0(e){var i=Se(e.target);if(i!==null){var r=K(i);if(r!==null){if(i=r.tag,i===13){if(i=$(r),i!==null){e.blockedOn=i,ot(e.priority,function(){if(r.tag===13){var s=Vn(),c=da(r,s);c!==null&&An(c,r,s),oh(r,s)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=uh(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);dc=s,r.target.dispatchEvent(s),dc=null}else return i=Dn(r),i!==null&&Kg(i),e.blockedOn=r,!1;i.shift()}return!0}function n0(e,i,r){pu(e)&&r.delete(i)}function $x(){fh=!1,Ca!==null&&pu(Ca)&&(Ca=null),Da!==null&&pu(Da)&&(Da=null),La!==null&&pu(La)&&(La=null),No.forEach(n0),Bo.forEach(n0)}function mu(e,i){e.blockedOn===i&&(e.blockedOn=null,fh||(fh=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,$x)))}var gu=null;function i0(e){gu!==e&&(gu=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var i=0;i<e.length;i+=3){var r=e[i],s=e[i+1],c=e[i+2];if(typeof s!="function"){if(ch(s||r)===null)continue;break}var d=Dn(r);d!==null&&(e.splice(i,3),i-=3,Jc(d,{pending:!0,data:c,method:r.method,action:s},s,c))}}))}function Ho(e){function i(B){return mu(B,e)}Ca!==null&&mu(Ca,e),Da!==null&&mu(Da,e),La!==null&&mu(La,e),No.forEach(i),Bo.forEach(i);for(var r=0;r<Ra.length;r++){var s=Ra[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ra.length&&(r=Ra[0],r.blockedOn===null);)e0(r),r.blockedOn===null&&Ra.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var c=r[s],d=r[s+1],b=c[ft]||null;if(typeof d=="function")b||i0(r);else if(b){var C=null;if(d&&d.hasAttribute("formAction")){if(c=d,b=d[ft]||null)C=b.formAction;else if(ch(c)!==null)continue}else C=b.action;typeof C=="function"?r[s+1]=C:(r.splice(s,3),s-=3),i0(r)}}}function hh(e){this._internalRoot=e}vu.prototype.render=hh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,s=Vn();$g(r,s,e,i,null,null)},vu.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&ns(),$g(e.current,2,null,e,null,null),Jl(),i[Vt]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var i=P();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ra.length&&i!==0&&i<Ra[r].priority;r++);Ra.splice(r,0,e),r===0&&e0(e)}};var a0=t.version;if(a0!=="19.0.0")throw Error(a(527,a0,"19.0.0"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=j(i),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var Qx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:O,findFiberByHostInstance:Se,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Rt=_u.inject(Qx),Pt=_u}catch{}}return Go.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,s="",c=bm,d=Sm,b=Mm,C=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(C=i.unstable_transitionCallbacks)),i=jg(e,1,!1,null,null,r,s,c,d,b,C,null),e[Vt]=i.current,Zf(e.nodeType===8?e.parentNode:e),new hh(i)},Go.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var s=!1,c="",d=bm,b=Sm,C=Mm,B=null,q=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(q=r.formState)),i=jg(e,1,!0,i,r??null,s,c,d,b,C,B,q),i.context=Zg(null),r=i.current,s=Vn(),c=xa(s),c.callback=null,ba(r,c,s),i.current.lanes=s,rn(i,s),Ci(i),e[Vt]=i.current,Zf(e),new vu(i)},Go.version="19.0.0",Go}var h0;function ob(){if(h0)return ph.exports;h0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),ph.exports=sb(),ph.exports}var lb=ob();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ed="146",ls={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ub=0,d0=1,cb=2,l_=1,fb=2,$o=3,Ns=0,ci=1,Ia=2,Va=0,Rs=1,p0=2,m0=3,g0=4,hb=5,Cs=100,db=101,pb=102,v0=103,_0=104,mb=200,gb=201,vb=202,_b=203,u_=204,c_=205,yb=206,xb=207,bb=208,Sb=209,Mb=210,wb=0,Eb=1,Ab=2,ld=3,Tb=4,Cb=5,Db=6,Lb=7,f_=0,Rb=1,zb=2,la=0,Ob=1,Ub=2,Pb=3,Nb=4,Bb=5,h_=300,Bs=301,Fs=302,ud=303,cd=304,oc=306,fd=1e3,xi=1001,hd=1002,On=1003,y0=1004,x0=1005,li=1006,Fb=1007,lc=1008,wr=1009,Hb=1010,Gb=1011,d_=1012,Ib=1013,_r=1014,yr=1015,nl=1016,Vb=1017,kb=1018,zs=1020,Wb=1021,Xb=1022,bi=1023,Yb=1024,qb=1025,br=1026,Hs=1027,jb=1028,Zb=1029,$b=1030,Qb=1031,Kb=1033,_h=33776,yh=33777,xh=33778,bh=33779,b0=35840,S0=35841,M0=35842,w0=35843,Jb=36196,E0=37492,A0=37496,T0=37808,C0=37809,D0=37810,L0=37811,R0=37812,z0=37813,O0=37814,U0=37815,P0=37816,N0=37817,B0=37818,F0=37819,H0=37820,G0=37821,I0=36492,Er=3e3,Ie=3001,tS=3200,eS=3201,nS=0,iS=1,ra="srgb",xr="srgb-linear",Sh=7680,aS=519,dd=35044,V0="300 es",pd=1035;class Cr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let u=0,h=o.length;u<h;u++)o[u].call(this,t);t.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let k0=1234567;const Ko=Math.PI/180,ec=180/Math.PI;function ua(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Sn[l&255]+Sn[l>>8&255]+Sn[l>>16&255]+Sn[l>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[a&255]+Sn[a>>8&255]+Sn[a>>16&255]+Sn[a>>24&255]).toLowerCase()}function wn(l,t,n){return Math.max(t,Math.min(n,l))}function Ad(l,t){return(l%t+t)%t}function rS(l,t,n,a,o){return a+(l-t)*(o-a)/(n-t)}function sS(l,t,n){return l!==t?(n-l)/(t-l):0}function Jo(l,t,n){return(1-n)*l+n*t}function oS(l,t,n,a){return Jo(l,t,1-Math.exp(-n*a))}function lS(l,t=1){return t-Math.abs(Ad(l,t*2)-t)}function uS(l,t,n){return l<=t?0:l>=n?1:(l=(l-t)/(n-t),l*l*(3-2*l))}function cS(l,t,n){return l<=t?0:l>=n?1:(l=(l-t)/(n-t),l*l*l*(l*(l*6-15)+10))}function fS(l,t){return l+Math.floor(Math.random()*(t-l+1))}function hS(l,t){return l+Math.random()*(t-l)}function dS(l){return l*(.5-Math.random())}function pS(l){l!==void 0&&(k0=l);let t=k0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mS(l){return l*Ko}function gS(l){return l*ec}function md(l){return(l&l-1)===0&&l!==0}function vS(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function nc(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function _S(l,t,n,a,o){const u=Math.cos,h=Math.sin,f=u(n/2),m=h(n/2),p=u((t+a)/2),g=h((t+a)/2),_=u((t-a)/2),y=h((t-a)/2),M=u((a-t)/2),E=h((a-t)/2);switch(o){case"XYX":l.set(f*g,m*_,m*y,f*p);break;case"YZY":l.set(m*y,f*g,m*_,f*p);break;case"ZXZ":l.set(m*_,m*y,f*g,f*p);break;case"XZX":l.set(f*g,m*E,m*M,f*p);break;case"YXY":l.set(m*M,f*g,m*E,f*p);break;case"ZYZ":l.set(m*E,m*M,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function sa(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Re(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}var yS=Object.freeze({__proto__:null,DEG2RAD:Ko,RAD2DEG:ec,generateUUID:ua,clamp:wn,euclideanModulo:Ad,mapLinear:rS,inverseLerp:sS,lerp:Jo,damp:oS,pingpong:lS,smoothstep:uS,smootherstep:cS,randInt:fS,randFloat:hS,randFloatSpread:dS,seededRandom:pS,degToRad:mS,radToDeg:gS,isPowerOfTwo:md,ceilPowerOfTwo:vS,floorPowerOfTwo:nc,setQuaternionFromProperEuler:_S,normalize:Re,denormalize:sa});class Qt{constructor(t=0,n=0){Qt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-t.x,h=this.y-t.y;return this.x=u*a-h*o+t.x,this.y=u*o+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(){ui.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,n,a,o,u,h,f,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=u,g[5]=m,g[6]=a,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,h=a[0],f=a[3],m=a[6],p=a[1],g=a[4],_=a[7],y=a[2],M=a[5],E=a[8],x=o[0],v=o[3],S=o[6],A=o[1],D=o[4],z=o[7],w=o[2],F=o[5],it=o[8];return u[0]=h*x+f*A+m*w,u[3]=h*v+f*D+m*F,u[6]=h*S+f*z+m*it,u[1]=p*x+g*A+_*w,u[4]=p*v+g*D+_*F,u[7]=p*S+g*z+_*it,u[2]=y*x+M*A+E*w,u[5]=y*v+M*D+E*F,u[8]=y*S+M*z+E*it,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8];return n*h*g-n*f*p-a*u*g+a*f*m+o*u*p-o*h*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],_=g*h-f*p,y=f*m-g*u,M=p*u-h*m,E=n*_+a*y+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/E;return t[0]=_*x,t[1]=(o*p-g*a)*x,t[2]=(f*a-o*h)*x,t[3]=y*x,t[4]=(g*n-o*m)*x,t[5]=(o*u-f*n)*x,t[6]=M*x,t[7]=(a*m-p*n)*x,t[8]=(h*n-a*u)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,u,h,f){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*h+p*f)+h+t,-o*p,o*m,-o*(-p*h+m*f)+f+n,0,0,1),this}scale(t,n){const a=this.elements;return a[0]*=t,a[3]*=t,a[6]*=t,a[1]*=n,a[4]*=n,a[7]*=n,this}rotate(t){const n=Math.cos(t),a=Math.sin(t),o=this.elements,u=o[0],h=o[3],f=o[6],m=o[1],p=o[4],g=o[7];return o[0]=n*u+a*m,o[3]=n*h+a*p,o[6]=n*f+a*g,o[1]=-a*u+n*m,o[4]=-a*h+n*p,o[7]=-a*f+n*g,this}translate(t,n){const a=this.elements;return a[0]+=t*a[2],a[3]+=t*a[5],a[6]+=t*a[8],a[1]+=n*a[2],a[4]+=n*a[5],a[7]+=n*a[8],this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function p_(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function il(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Sr(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function $u(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Mh={[ra]:{[xr]:Sr},[xr]:{[ra]:$u}},gi={legacyMode:!0,get workingColorSpace(){return xr},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,t,n){if(this.legacyMode||t===n||!t||!n)return l;if(Mh[t]&&Mh[t][n]!==void 0){const a=Mh[t][n];return l.r=a(l.r),l.g=a(l.g),l.b=a(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,t){return this.convert(l,this.workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this.workingColorSpace)}},m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={r:0,g:0,b:0},vi={h:0,s:0,l:0},yu={h:0,s:0,l:0};function wh(l,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(t-l)*6*n:n<1/2?t:n<2/3?l+(t-l)*6*(2/3-n):l}function xu(l,t){return t.r=l.r,t.g=l.g,t.b=l.b,t}class pe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&a===void 0?this.set(t):this.setRGB(t,n,a)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ra){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,gi.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=xr){return this.r=t,this.g=n,this.b=a,gi.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=xr){if(t=Ad(t,1),n=wn(n,0,1),a=wn(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,h=2*a-u;this.r=wh(h,u,t+1/3),this.g=wh(h,u,t),this.b=wh(h,u,t-1/3)}return gi.toWorkingColorSpace(this,o),this}setStyle(t,n=ra){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let u;const h=o[1],f=o[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return this.r=Math.min(255,parseInt(u[1],10))/255,this.g=Math.min(255,parseInt(u[2],10))/255,this.b=Math.min(255,parseInt(u[3],10))/255,gi.toWorkingColorSpace(this,n),a(u[4]),this;if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return this.r=Math.min(100,parseInt(u[1],10))/100,this.g=Math.min(100,parseInt(u[2],10))/100,this.b=Math.min(100,parseInt(u[3],10))/100,gi.toWorkingColorSpace(this,n),a(u[4]),this;break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)){const m=parseFloat(u[1])/360,p=parseFloat(u[2])/100,g=parseFloat(u[3])/100;return a(u[4]),this.setHSL(m,p,g,n)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],h=u.length;if(h===3)return this.r=parseInt(u.charAt(0)+u.charAt(0),16)/255,this.g=parseInt(u.charAt(1)+u.charAt(1),16)/255,this.b=parseInt(u.charAt(2)+u.charAt(2),16)/255,gi.toWorkingColorSpace(this,n),this;if(h===6)return this.r=parseInt(u.charAt(0)+u.charAt(1),16)/255,this.g=parseInt(u.charAt(2)+u.charAt(3),16)/255,this.b=parseInt(u.charAt(4)+u.charAt(5),16)/255,gi.toWorkingColorSpace(this,n),this}return t&&t.length>0?this.setColorName(t,n):this}setColorName(t,n=ra){const a=m_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}copyLinearToSRGB(t){return this.r=$u(t.r),this.g=$u(t.g),this.b=$u(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ra){return gi.fromWorkingColorSpace(xu(this,tn),t),wn(tn.r*255,0,255)<<16^wn(tn.g*255,0,255)<<8^wn(tn.b*255,0,255)<<0}getHexString(t=ra){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=xr){gi.fromWorkingColorSpace(xu(this,tn),n);const a=tn.r,o=tn.g,u=tn.b,h=Math.max(a,o,u),f=Math.min(a,o,u);let m,p;const g=(f+h)/2;if(f===h)m=0,p=0;else{const _=h-f;switch(p=g<=.5?_/(h+f):_/(2-h-f),h){case a:m=(o-u)/_+(o<u?6:0);break;case o:m=(u-a)/_+2;break;case u:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=xr){return gi.fromWorkingColorSpace(xu(this,tn),n),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=ra){return gi.fromWorkingColorSpace(xu(this,tn),t),t!==ra?`color(${t} ${tn.r} ${tn.g} ${tn.b})`:`rgb(${tn.r*255|0},${tn.g*255|0},${tn.b*255|0})`}offsetHSL(t,n,a){return this.getHSL(vi),vi.h+=t,vi.s+=n,vi.l+=a,this.setHSL(vi.h,vi.s,vi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(vi),t.getHSL(yu);const a=Jo(vi.h,yu.h,n),o=Jo(vi.s,yu.s,n),u=Jo(vi.l,yu.l,n);return this.setHSL(a,o,u),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}pe.NAMES=m_;let cs;class g_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cs===void 0&&(cs=il("canvas")),cs.width=t.width,cs.height=t.height;const a=cs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=il("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),u=o.data;for(let h=0;h<u.length;h++)u[h]=Sr(u[h]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Sr(n[a]/255)*255):n[a]=Sr(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class v_{constructor(t=null){this.isSource=!0,this.uuid=ua(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let h=0,f=o.length;h<f;h++)o[h].isDataTexture?u.push(Eh(o[h].image)):u.push(Eh(o[h]))}else u=Eh(o);a.url=u}return n||(t.images[this.uuid]=a),a}}function Eh(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?g_.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xS=0;class fi extends Cr{constructor(t=fi.DEFAULT_IMAGE,n=fi.DEFAULT_MAPPING,a=xi,o=xi,u=li,h=lc,f=bi,m=wr,p=1,g=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=ua(),this.name="",this.source=new v_(t),this.mipmaps=[],this.mapping=n,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ui,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=h_;class Xe{constructor(t=0,n=0,a=0,o=1){Xe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=this.w,h=t.elements;return this.x=h[0]*n+h[4]*a+h[8]*o+h[12]*u,this.y=h[1]*n+h[5]*a+h[9]*o+h[13]*u,this.z=h[2]*n+h[6]*a+h[10]*o+h[14]*u,this.w=h[3]*n+h[7]*a+h[11]*o+h[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,u;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],M=m[5],E=m[9],x=m[2],v=m[6],S=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-x)<.01&&Math.abs(E-v)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+x)<.1&&Math.abs(E+v)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,z=(M+1)/2,w=(S+1)/2,F=(g+y)/4,it=(_+x)/4,L=(E+v)/4;return D>z&&D>w?D<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(D),o=F/a,u=it/a):z>w?z<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(z),a=F/o,u=L/o):w<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(w),a=it/u,o=L/u),this.set(a,o,u,n),this}let A=Math.sqrt((v-E)*(v-E)+(_-x)*(_-x)+(y-g)*(y-g));return Math.abs(A)<.001&&(A=1),this.x=(v-E)/A,this.y=(_-x)/A,this.z=(y-g)/A,this.w=Math.acos((p+M+S-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ar extends Cr{constructor(t=1,n=1,a={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n);const o={width:t,height:n,depth:1};this.texture=new fi(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.internalFormat=a.internalFormat!==void 0?a.internalFormat:null,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:li,this.depthBuffer=a.depthBuffer!==void 0?a.depthBuffer:!0,this.stencilBuffer=a.stencilBuffer!==void 0?a.stencilBuffer:!1,this.depthTexture=a.depthTexture!==void 0?a.depthTexture:null,this.samples=a.samples!==void 0?a.samples:0}setSize(t,n,a=1){(this.width!==t||this.height!==n||this.depth!==a)&&(this.width=t,this.height=n,this.depth=a,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=a,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new v_(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class __ extends fi{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bS extends fi{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,u,h,f){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3];const y=u[h+0],M=u[h+1],E=u[h+2],x=u[h+3];if(f===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(f===1){t[n+0]=y,t[n+1]=M,t[n+2]=E,t[n+3]=x;return}if(_!==x||m!==y||p!==M||g!==E){let v=1-f;const S=m*y+p*M+g*E+_*x,A=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const w=Math.sqrt(D),F=Math.atan2(w,S*A);v=Math.sin(v*F)/w,f=Math.sin(f*F)/w}const z=f*A;if(m=m*v+y*z,p=p*v+M*z,g=g*v+E*z,_=_*v+x*z,v===1-f){const w=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=w,p*=w,g*=w,_*=w}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,u,h){const f=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=u[h],y=u[h+1],M=u[h+2],E=u[h+3];return t[n]=f*E+g*_+m*M-p*y,t[n+1]=m*E+g*y+p*_-f*M,t[n+2]=p*E+g*M+f*y-m*_,t[n+3]=g*E-f*_-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const a=t._x,o=t._y,u=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(a/2),g=f(o/2),_=f(u/2),y=m(a/2),M=m(o/2),E=m(u/2);switch(h){case"XYZ":this._x=y*g*_+p*M*E,this._y=p*M*_-y*g*E,this._z=p*g*E+y*M*_,this._w=p*g*_-y*M*E;break;case"YXZ":this._x=y*g*_+p*M*E,this._y=p*M*_-y*g*E,this._z=p*g*E-y*M*_,this._w=p*g*_+y*M*E;break;case"ZXY":this._x=y*g*_-p*M*E,this._y=p*M*_+y*g*E,this._z=p*g*E+y*M*_,this._w=p*g*_-y*M*E;break;case"ZYX":this._x=y*g*_-p*M*E,this._y=p*M*_+y*g*E,this._z=p*g*E-y*M*_,this._w=p*g*_+y*M*E;break;case"YZX":this._x=y*g*_+p*M*E,this._y=p*M*_+y*g*E,this._z=p*g*E-y*M*_,this._w=p*g*_-y*M*E;break;case"XZY":this._x=y*g*_-p*M*E,this._y=p*M*_-y*g*E,this._z=p*g*E+y*M*_,this._w=p*g*_+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],u=n[8],h=n[1],f=n[5],m=n[9],p=n[2],g=n[6],_=n[10],y=a+f+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-o)*M}else if(a>f&&a>_){const M=2*Math.sqrt(1+a-f-_);this._w=(g-m)/M,this._x=.25*M,this._y=(o+h)/M,this._z=(u+p)/M}else if(f>_){const M=2*Math.sqrt(1+f-a-_);this._w=(u-p)/M,this._x=(o+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-a-f);this._w=(h-o)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(wn(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,u=t._z,h=t._w,f=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+h*f+o*p-u*m,this._y=o*g+h*m+u*f-a*p,this._z=u*g+h*p+a*m-o*f,this._w=h*g-a*f-o*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,u=this._z,h=this._w;let f=h*t._w+a*t._x+o*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=h,this._x=a,this._y=o,this._z=u,this;const m=1-f*f;if(m<=Number.EPSILON){const M=1-n;return this._w=M*h+n*this._w,this._x=M*a+n*this._x,this._y=M*o+n*this._y,this._z=M*u+n*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),g=Math.atan2(p,f),_=Math.sin((1-n)*g)/p,y=Math.sin(n*g)/p;return this._w=h*_+this._w*y,this._x=a*_+this._x*y,this._y=o*_+this._y*y,this._z=u*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=Math.random(),n=Math.sqrt(1-t),a=Math.sqrt(t),o=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(o),a*Math.sin(u),a*Math.cos(u),n*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,a=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(W0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(W0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=t.elements,h=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*h,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*h,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*h,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,u=t.x,h=t.y,f=t.z,m=t.w,p=m*n+h*o-f*a,g=m*a+f*n-u*o,_=m*o+u*a-h*n,y=-u*n-h*a-f*o;return this.x=p*m+y*-u+g*-f-_*-h,this.y=g*m+y*-h+_*-u-p*-f,this.z=_*m+y*-f+p*-h-g*-u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,u=t.z,h=n.x,f=n.y,m=n.z;return this.x=o*m-u*f,this.y=u*h-a*m,this.z=a*f-o*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(wn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(n),this.y=a*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new X,W0=new Tr;class Xa{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){let n=1/0,a=1/0,o=1/0,u=-1/0,h=-1/0,f=-1/0;for(let m=0,p=t.length;m<p;m+=3){const g=t[m],_=t[m+1],y=t[m+2];g<n&&(n=g),_<a&&(a=_),y<o&&(o=y),g>u&&(u=g),_>h&&(h=_),y>f&&(f=y)}return this.min.set(n,a,o),this.max.set(u,h,f),this}setFromBufferAttribute(t){let n=1/0,a=1/0,o=1/0,u=-1/0,h=-1/0,f=-1/0;for(let m=0,p=t.count;m<p;m++){const g=t.getX(m),_=t.getY(m),y=t.getZ(m);g<n&&(n=g),_<a&&(a=_),y<o&&(o=y),g>u&&(u=g),_>h&&(h=_),y>f&&(f=y)}return this.min.set(n,a,o),this.max.set(u,h,f),this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=hr.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0)if(n&&a.attributes!=null&&a.attributes.position!==void 0){const u=a.attributes.position;for(let h=0,f=u.count;h<f;h++)hr.fromBufferAttribute(u,h).applyMatrix4(t.matrixWorld),this.expandByPoint(hr)}else a.boundingBox===null&&a.computeBoundingBox(),Th.copy(a.boundingBox),Th.applyMatrix4(t.matrixWorld),this.union(Th);const o=t.children;for(let u=0,h=o.length;u<h;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hr),hr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),bu.subVectors(this.max,Io),fs.subVectors(t.a,Io),hs.subVectors(t.b,Io),ds.subVectors(t.c,Io),Oa.subVectors(hs,fs),Ua.subVectors(ds,hs),dr.subVectors(fs,ds);let n=[0,-Oa.z,Oa.y,0,-Ua.z,Ua.y,0,-dr.z,dr.y,Oa.z,0,-Oa.x,Ua.z,0,-Ua.x,dr.z,0,-dr.x,-Oa.y,Oa.x,0,-Ua.y,Ua.x,0,-dr.y,dr.x,0];return!Ch(n,fs,hs,ds,bu)||(n=[1,0,0,0,1,0,0,0,1],!Ch(n,fs,hs,ds,bu))?!1:(Su.crossVectors(Oa,Ua),n=[Su.x,Su.y,Su.z],Ch(n,fs,hs,ds,bu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return hr.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(hr).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new X,new X,new X,new X,new X,new X,new X,new X],hr=new X,Th=new Xa,fs=new X,hs=new X,ds=new X,Oa=new X,Ua=new X,dr=new X,Io=new X,bu=new X,Su=new X,pr=new X;function Ch(l,t,n,a,o){for(let u=0,h=l.length-3;u<=h;u+=3){pr.fromArray(l,u);const f=o.x*Math.abs(pr.x)+o.y*Math.abs(pr.y)+o.z*Math.abs(pr.z),m=t.dot(pr),p=n.dot(pr),g=a.dot(pr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>f)return!1}return!0}const SS=new Xa,Vo=new X,Dh=new X;class Ws{constructor(t=new X,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):SS.setFromPoints(t).getCenter(a);let o=0;for(let u=0,h=t.length;u<h;u++)o=Math.max(o,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Vo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Dh)),this.expandByPoint(Vo.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new X,Lh=new X,Mu=new X,Pa=new X,Rh=new X,wu=new X,zh=new X;class y_{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(a).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ea.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ea.copy(this.direction).multiplyScalar(n).add(this.origin),ea.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Lh.copy(t).add(n).multiplyScalar(.5),Mu.copy(n).sub(t).normalize(),Pa.copy(this.origin).sub(Lh);const u=t.distanceTo(n)*.5,h=-this.direction.dot(Mu),f=Pa.dot(this.direction),m=-Pa.dot(Mu),p=Pa.lengthSq(),g=Math.abs(1-h*h);let _,y,M,E;if(g>0)if(_=h*m-f,y=h*f-m,E=u*g,_>=0)if(y>=-E)if(y<=E){const x=1/g;_*=x,y*=x,M=_*(_+h*y+2*f)+y*(h*_+y+2*m)+p}else y=u,_=Math.max(0,-(h*y+f)),M=-_*_+y*(y+2*m)+p;else y=-u,_=Math.max(0,-(h*y+f)),M=-_*_+y*(y+2*m)+p;else y<=-E?(_=Math.max(0,-(-h*u+f)),y=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p):y<=E?(_=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(_=Math.max(0,-(h*u+f)),y=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p);else y=h>0?-u:u,_=Math.max(0,-(h*y+f)),M=-_*_+y*(y+2*m)+p;return a&&a.copy(this.direction).multiplyScalar(_).add(this.origin),o&&o.copy(Mu).multiplyScalar(y).add(Lh),M}intersectSphere(t,n){ea.subVectors(t.center,this.origin);const a=ea.dot(this.direction),o=ea.dot(ea)-a*a,u=t.radius*t.radius;if(o>u)return null;const h=Math.sqrt(u-o),f=a-h,m=a+h;return f<0&&m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,u,h,f,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(a=(t.min.x-y.x)*p,o=(t.max.x-y.x)*p):(a=(t.max.x-y.x)*p,o=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),a>h||u>o||((u>a||isNaN(a))&&(a=u),(h<o||isNaN(o))&&(o=h),_>=0?(f=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(f=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),a>m||f>o)||((f>a||a!==a)&&(a=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,n,a,o,u){Rh.subVectors(n,t),wu.subVectors(a,t),zh.crossVectors(Rh,wu);let h=this.direction.dot(zh),f;if(h>0){if(o)return null;f=1}else if(h<0)f=-1,h=-h;else return null;Pa.subVectors(this.origin,t);const m=f*this.direction.dot(wu.crossVectors(Pa,wu));if(m<0)return null;const p=f*this.direction.dot(Rh.cross(Pa));if(p<0||m+p>h)return null;const g=-f*Pa.dot(zh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,n,a,o,u,h,f,m,p,g,_,y,M,E,x,v){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=o,S[1]=u,S[5]=h,S[9]=f,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=y,S[3]=M,S[7]=E,S[11]=x,S[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/ps.setFromMatrixColumn(t,0).length(),u=1/ps.setFromMatrixColumn(t,1).length(),h=1/ps.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*h,n[9]=a[9]*h,n[10]=a[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,u=t.z,h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const y=h*g,M=h*_,E=f*g,x=f*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=M+E*p,n[5]=y-x*p,n[9]=-f*m,n[2]=x-y*p,n[6]=E+M*p,n[10]=h*m}else if(t.order==="YXZ"){const y=m*g,M=m*_,E=p*g,x=p*_;n[0]=y+x*f,n[4]=E*f-M,n[8]=h*p,n[1]=h*_,n[5]=h*g,n[9]=-f,n[2]=M*f-E,n[6]=x+y*f,n[10]=h*m}else if(t.order==="ZXY"){const y=m*g,M=m*_,E=p*g,x=p*_;n[0]=y-x*f,n[4]=-h*_,n[8]=E+M*f,n[1]=M+E*f,n[5]=h*g,n[9]=x-y*f,n[2]=-h*p,n[6]=f,n[10]=h*m}else if(t.order==="ZYX"){const y=h*g,M=h*_,E=f*g,x=f*_;n[0]=m*g,n[4]=E*p-M,n[8]=y*p+x,n[1]=m*_,n[5]=x*p+y,n[9]=M*p-E,n[2]=-p,n[6]=f*m,n[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,E=f*m,x=f*p;n[0]=m*g,n[4]=x-y*_,n[8]=E*_+M,n[1]=_,n[5]=h*g,n[9]=-f*g,n[2]=-p*g,n[6]=M*_+E,n[10]=y-x*_}else if(t.order==="XZY"){const y=h*m,M=h*p,E=f*m,x=f*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=y*_+x,n[5]=h*g,n[9]=M*_-E,n[2]=E*_-M,n[6]=f*g,n[10]=x*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MS,t,wS)}lookAt(t,n,a){const o=this.elements;return kn.subVectors(t,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Na.crossVectors(a,kn),Na.lengthSq()===0&&(Math.abs(a.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Na.crossVectors(a,kn)),Na.normalize(),Eu.crossVectors(kn,Na),o[0]=Na.x,o[4]=Eu.x,o[8]=kn.x,o[1]=Na.y,o[5]=Eu.y,o[9]=kn.y,o[2]=Na.z,o[6]=Eu.z,o[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,h=a[0],f=a[4],m=a[8],p=a[12],g=a[1],_=a[5],y=a[9],M=a[13],E=a[2],x=a[6],v=a[10],S=a[14],A=a[3],D=a[7],z=a[11],w=a[15],F=o[0],it=o[4],L=o[8],O=o[12],k=o[1],vt=o[5],St=o[9],G=o[13],J=o[2],ct=o[6],nt=o[10],ut=o[14],K=o[3],$=o[7],T=o[11],j=o[15];return u[0]=h*F+f*k+m*J+p*K,u[4]=h*it+f*vt+m*ct+p*$,u[8]=h*L+f*St+m*nt+p*T,u[12]=h*O+f*G+m*ut+p*j,u[1]=g*F+_*k+y*J+M*K,u[5]=g*it+_*vt+y*ct+M*$,u[9]=g*L+_*St+y*nt+M*T,u[13]=g*O+_*G+y*ut+M*j,u[2]=E*F+x*k+v*J+S*K,u[6]=E*it+x*vt+v*ct+S*$,u[10]=E*L+x*St+v*nt+S*T,u[14]=E*O+x*G+v*ut+S*j,u[3]=A*F+D*k+z*J+w*K,u[7]=A*it+D*vt+z*ct+w*$,u[11]=A*L+D*St+z*nt+w*T,u[15]=A*O+D*G+z*ut+w*j,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],u=t[12],h=t[1],f=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],M=t[14],E=t[3],x=t[7],v=t[11],S=t[15];return E*(+u*m*_-o*p*_-u*f*y+a*p*y+o*f*M-a*m*M)+x*(+n*m*M-n*p*y+u*h*y-o*h*M+o*p*g-u*m*g)+v*(+n*p*_-n*f*M-u*h*_+a*h*M+u*f*g-a*p*g)+S*(-o*f*g-n*m*_+n*f*y+o*h*_-a*h*y+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],M=t[11],E=t[12],x=t[13],v=t[14],S=t[15],A=_*v*p-x*y*p+x*m*M-f*v*M-_*m*S+f*y*S,D=E*y*p-g*v*p-E*m*M+h*v*M+g*m*S-h*y*S,z=g*x*p-E*_*p+E*f*M-h*x*M-g*f*S+h*_*S,w=E*_*m-g*x*m-E*f*y+h*x*y+g*f*v-h*_*v,F=n*A+a*D+o*z+u*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const it=1/F;return t[0]=A*it,t[1]=(x*y*u-_*v*u-x*o*M+a*v*M+_*o*S-a*y*S)*it,t[2]=(f*v*u-x*m*u+x*o*p-a*v*p-f*o*S+a*m*S)*it,t[3]=(_*m*u-f*y*u-_*o*p+a*y*p+f*o*M-a*m*M)*it,t[4]=D*it,t[5]=(g*v*u-E*y*u+E*o*M-n*v*M-g*o*S+n*y*S)*it,t[6]=(E*m*u-h*v*u-E*o*p+n*v*p+h*o*S-n*m*S)*it,t[7]=(h*y*u-g*m*u+g*o*p-n*y*p-h*o*M+n*m*M)*it,t[8]=z*it,t[9]=(E*_*u-g*x*u-E*a*M+n*x*M+g*a*S-n*_*S)*it,t[10]=(h*x*u-E*f*u+E*a*p-n*x*p-h*a*S+n*f*S)*it,t[11]=(g*f*u-h*_*u-g*a*p+n*_*p+h*a*M-n*f*M)*it,t[12]=w*it,t[13]=(g*x*o-E*_*o+E*a*y-n*x*y-g*a*v+n*_*v)*it,t[14]=(E*f*o-h*x*o-E*a*m+n*x*m+h*a*v-n*f*v)*it,t[15]=(h*_*o-g*f*o+g*a*m-n*_*m-h*a*y+n*f*y)*it,this}scale(t){const n=this.elements,a=t.x,o=t.y,u=t.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,h=t.x,f=t.y,m=t.z,p=u*h,g=u*f;return this.set(p*h+a,p*f-o*m,p*m+o*f,0,p*f+o*m,g*f+a,g*m-o*h,0,p*m-o*f,g*m+o*h,u*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,u,h){return this.set(1,a,u,0,t,1,h,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,u=n._x,h=n._y,f=n._z,m=n._w,p=u+u,g=h+h,_=f+f,y=u*p,M=u*g,E=u*_,x=h*g,v=h*_,S=f*_,A=m*p,D=m*g,z=m*_,w=a.x,F=a.y,it=a.z;return o[0]=(1-(x+S))*w,o[1]=(M+z)*w,o[2]=(E-D)*w,o[3]=0,o[4]=(M-z)*F,o[5]=(1-(y+S))*F,o[6]=(v+A)*F,o[7]=0,o[8]=(E+D)*it,o[9]=(v-A)*it,o[10]=(1-(y+x))*it,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let u=ps.set(o[0],o[1],o[2]).length();const h=ps.set(o[4],o[5],o[6]).length(),f=ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],_i.copy(this);const p=1/u,g=1/h,_=1/f;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,n.setFromRotationMatrix(_i),a.x=u,a.y=h,a.z=f,this}makePerspective(t,n,a,o,u,h){const f=this.elements,m=2*u/(n-t),p=2*u/(a-o),g=(n+t)/(n-t),_=(a+o)/(a-o),y=-(h+u)/(h-u),M=-2*h*u/(h-u);return f[0]=m,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,n,a,o,u,h){const f=this.elements,m=1/(n-t),p=1/(a-o),g=1/(h-u),_=(n+t)*m,y=(a+o)*p,M=(h+u)*g;return f[0]=2*m,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=-2*g,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ps=new X,_i=new $e,MS=new X(0,0,0),wS=new X(1,1,1),Na=new X,Eu=new X,kn=new X,X0=new $e,Y0=new Tr;class ol{constructor(t=0,n=0,a=0,o=ol.DefaultOrder){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,u=o[0],h=o[4],f=o[8],m=o[1],p=o[5],g=o[9],_=o[2],y=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(wn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(wn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return X0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(X0,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ol.DefaultOrder="XYZ";ol.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class x_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ES=0;const q0=new X,ms=new Tr,na=new $e,Au=new X,ko=new X,AS=new X,TS=new Tr,j0=new X(1,0,0),Z0=new X(0,1,0),$0=new X(0,0,1),CS={type:"added"},Q0={type:"removed"};class dn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DefaultUp.clone();const t=new X,n=new ol,a=new Tr,o=new X(1,1,1);function u(){a.setFromEuler(n,!1)}function h(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $e},normalMatrix:{value:new ui}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=dn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dn.DefaultMatrixWorldAutoUpdate,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ms.setFromAxisAngle(t,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,n){return ms.setFromAxisAngle(t,n),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(j0,t)}rotateY(t){return this.rotateOnAxis(Z0,t)}rotateZ(t){return this.rotateOnAxis($0,t)}translateOnAxis(t,n){return q0.copy(t).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(j0,t)}translateY(t){return this.translateOnAxis(Z0,t)}translateZ(t){return this.translateOnAxis($0,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Au.copy(t):Au.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(ko,Au,this.up):na.lookAt(Au,ko,this.up),this.quaternion.setFromRotationMatrix(na),o&&(na.extractRotation(o.matrixWorld),ms.setFromRotationMatrix(na),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(CS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Q0)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const n=this.children[t];n.parent=null,n.dispatchEvent(Q0)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const h=this.children[a].getObjectByProperty(t,n);if(h!==void 0)return h}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,AS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,TS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++){const u=n[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let u=0,h=o.length;u<h;u++){const f=o[u];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function u(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(u(t.materials,this.material[m]));o.material=f}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(u(t.animations,m))}}if(n){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),y=h(t.skeletons),M=h(t.animations),E=h(t.nodes);f.length>0&&(a.geometries=f),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),y.length>0&&(a.skeletons=y),M.length>0&&(a.animations=M),E.length>0&&(a.nodes=E)}return a.object=o,a;function h(f){const m=[];for(const p in f){const g=f[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}dn.DefaultUp=new X(0,1,0);dn.DefaultMatrixAutoUpdate=!0;dn.DefaultMatrixWorldAutoUpdate=!0;const yi=new X,ia=new X,Oh=new X,aa=new X,gs=new X,vs=new X,K0=new X,Uh=new X,Ph=new X,Nh=new X;class zi{constructor(t=new X,n=new X,a=new X){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),yi.subVectors(t,n),o.cross(yi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,a,o,u){yi.subVectors(o,n),ia.subVectors(a,n),Oh.subVectors(t,n);const h=yi.dot(yi),f=yi.dot(ia),m=yi.dot(Oh),p=ia.dot(ia),g=ia.dot(Oh),_=h*p-f*f;if(_===0)return u.set(-2,-1,-1);const y=1/_,M=(p*m-f*g)*y,E=(h*g-f*m)*y;return u.set(1-M-E,E,M)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,aa),aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getUV(t,n,a,o,u,h,f,m){return this.getBarycoord(t,n,a,o,aa),m.set(0,0),m.addScaledVector(u,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(f,aa.z),m}static isFrontFacing(t,n,a,o){return yi.subVectors(a,n),ia.subVectors(t,n),yi.cross(ia).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),yi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return zi.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,a,o,u){return zi.getUV(t,this.a,this.b,this.c,n,a,o,u)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,u=this.c;let h,f;gs.subVectors(o,a),vs.subVectors(u,a),Uh.subVectors(t,a);const m=gs.dot(Uh),p=vs.dot(Uh);if(m<=0&&p<=0)return n.copy(a);Ph.subVectors(t,o);const g=gs.dot(Ph),_=vs.dot(Ph);if(g>=0&&_<=g)return n.copy(o);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),n.copy(a).addScaledVector(gs,h);Nh.subVectors(t,u);const M=gs.dot(Nh),E=vs.dot(Nh);if(E>=0&&M<=E)return n.copy(u);const x=M*p-m*E;if(x<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(a).addScaledVector(vs,f);const v=g*E-M*_;if(v<=0&&_-g>=0&&M-E>=0)return K0.subVectors(u,o),f=(_-g)/(_-g+(M-E)),n.copy(o).addScaledVector(K0,f);const S=1/(v+x+y);return h=x*S,f=y*S,n.copy(a).addScaledVector(gs,h).addScaledVector(vs,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let DS=0;class Xs extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Rs,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=u_,this.blendDst=c_,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ld,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sh,this.stencilZFail=Sh,this.stencilZPass=Sh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const o=this[n];if(o===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(a.blending=this.blending),this.side!==Ns&&(a.side=this.side),this.vertexColors&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=this.transparent),a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.stencilWrite=this.stencilWrite,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(a.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(a.wireframe=this.wireframe),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=this.flatShading),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData);function o(u){const h=[];for(const f in u){const m=u[f];delete m.metadata,h.push(m)}return h}if(n){const u=o(t.textures),h=o(t.images);u.length>0&&(a.textures=u),h.length>0&&(a.images=h)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Td extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new X,Tu=new Qt;class Si{constructor(t,n,a){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a===!0,this.usage=dd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Tu.fromBufferAttribute(this,n),Tu.applyMatrix3(t),this.setXY(n,Tu.x,Tu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix3(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix4(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Ze.fromBufferAttribute(this,n),Ze.applyNormalMatrix(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Ze.fromBufferAttribute(this,n),Ze.transformDirection(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}set(t,n=0){return this.array.set(t,n),this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=sa(n,this.array)),n}setX(t,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=sa(n,this.array)),n}setY(t,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=sa(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=sa(n,this.array)),n}setW(t,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Re(n,this.array),a=Re(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Re(n,this.array),a=Re(a,this.array),o=Re(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,u){return t*=this.itemSize,this.normalized&&(n=Re(n,this.array),a=Re(a,this.array),o=Re(o,this.array),u=Re(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dd&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class b_ extends Si{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class S_ extends Si{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class yn extends Si{constructor(t,n,a){super(new Float32Array(t),n,a)}}let LS=0;const si=new $e,Bh=new dn,_s=new X,Wn=new Xa,Wo=new Xa,hn=new X;class qn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(p_(t)?S_:b_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ui().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,n,a){return si.makeTranslation(t,n,a),this.applyMatrix4(si),this}scale(t,n,a){return si.makeScale(t,n,a),this.applyMatrix4(si),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const n=[];for(let a=0,o=t.length;a<o;a++){const u=t[a];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new yn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(t){const a=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),n)for(let u=0,h=n.length;u<h;u++){const f=n[u];Wo.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(Wn.min,Wo.min),Wn.expandByPoint(hn),hn.addVectors(Wn.max,Wo.max),Wn.expandByPoint(hn)):(Wn.expandByPoint(Wo.min),Wn.expandByPoint(Wo.max))}Wn.getCenter(a);let o=0;for(let u=0,h=t.count;u<h;u++)hn.fromBufferAttribute(t,u),o=Math.max(o,a.distanceToSquared(hn));if(n)for(let u=0,h=n.length;u<h;u++){const f=n[u],m=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)hn.fromBufferAttribute(f,p),m&&(_s.fromBufferAttribute(t,p),hn.add(_s)),o=Math.max(o,a.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.array,o=n.position.array,u=n.normal.array,h=n.uv.array,f=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*f),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let k=0;k<f;k++)p[k]=new X,g[k]=new X;const _=new X,y=new X,M=new X,E=new Qt,x=new Qt,v=new Qt,S=new X,A=new X;function D(k,vt,St){_.fromArray(o,k*3),y.fromArray(o,vt*3),M.fromArray(o,St*3),E.fromArray(h,k*2),x.fromArray(h,vt*2),v.fromArray(h,St*2),y.sub(_),M.sub(_),x.sub(E),v.sub(E);const G=1/(x.x*v.y-v.x*x.y);isFinite(G)&&(S.copy(y).multiplyScalar(v.y).addScaledVector(M,-x.y).multiplyScalar(G),A.copy(M).multiplyScalar(x.x).addScaledVector(y,-v.x).multiplyScalar(G),p[k].add(S),p[vt].add(S),p[St].add(S),g[k].add(A),g[vt].add(A),g[St].add(A))}let z=this.groups;z.length===0&&(z=[{start:0,count:a.length}]);for(let k=0,vt=z.length;k<vt;++k){const St=z[k],G=St.start,J=St.count;for(let ct=G,nt=G+J;ct<nt;ct+=3)D(a[ct+0],a[ct+1],a[ct+2])}const w=new X,F=new X,it=new X,L=new X;function O(k){it.fromArray(u,k*3),L.copy(it);const vt=p[k];w.copy(vt),w.sub(it.multiplyScalar(it.dot(vt))).normalize(),F.crossVectors(L,vt);const G=F.dot(g[k])<0?-1:1;m[k*4]=w.x,m[k*4+1]=w.y,m[k*4+2]=w.z,m[k*4+3]=G}for(let k=0,vt=z.length;k<vt;++k){const St=z[k],G=St.start,J=St.count;for(let ct=G,nt=G+J;ct<nt;ct+=3)O(a[ct+0]),O(a[ct+1]),O(a[ct+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let y=0,M=a.count;y<M;y++)a.setXYZ(y,0,0,0);const o=new X,u=new X,h=new X,f=new X,m=new X,p=new X,g=new X,_=new X;if(t)for(let y=0,M=t.count;y<M;y+=3){const E=t.getX(y+0),x=t.getX(y+1),v=t.getX(y+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),g.subVectors(h,u),_.subVectors(o,u),g.cross(_),f.fromBufferAttribute(a,E),m.fromBufferAttribute(a,x),p.fromBufferAttribute(a,v),f.add(g),m.add(g),p.add(g),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(x,m.x,m.y,m.z),a.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,M=n.count;y<M;y+=3)o.fromBufferAttribute(n,y+0),u.fromBufferAttribute(n,y+1),h.fromBufferAttribute(n,y+2),g.subVectors(h,u),_.subVectors(o,u),g.cross(_),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)hn.fromBufferAttribute(t,n),hn.normalize(),t.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function t(f,m){const p=f.array,g=f.itemSize,_=f.normalized,y=new p.constructor(m.length*g);let M=0,E=0;for(let x=0,v=m.length;x<v;x++){f.isInterleavedBufferAttribute?M=m[x]*f.data.stride+f.offset:M=m[x]*g;for(let S=0;S<g;S++)y[E++]=p[M++]}return new Si(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,a=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=t(m,a);n.setAttribute(f,p)}const u=this.morphAttributes;for(const f in u){const m=[],p=u[f];for(let g=0,_=p.length;g<_;g++){const y=p[g],M=t(y,a);m.push(M)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,m=h.length;f<m;f++){const p=h[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(o[m]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let y=0,M=_.length;y<M;y++)g.push(_[y].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const J0=new $e,ys=new y_,Fh=new Ws,Ba=new X,Fa=new X,Ha=new X,Hh=new X,Gh=new X,Ih=new X,Cu=new X,Du=new X,Lu=new X,Ru=new Qt,zu=new Qt,Ou=new Qt,Vh=new X,Uu=new X;class Ui extends dn{constructor(t=new qn,n=new Td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=o.length;u<h;u++){const f=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}raycast(t,n){const a=this.geometry,o=this.material,u=this.matrixWorld;if(o===void 0||(a.boundingSphere===null&&a.computeBoundingSphere(),Fh.copy(a.boundingSphere),Fh.applyMatrix4(u),t.ray.intersectsSphere(Fh)===!1)||(J0.copy(u).invert(),ys.copy(t.ray).applyMatrix4(J0),a.boundingBox!==null&&ys.intersectsBox(a.boundingBox)===!1))return;let h;const f=a.index,m=a.attributes.position,p=a.morphAttributes.position,g=a.morphTargetsRelative,_=a.attributes.uv,y=a.attributes.uv2,M=a.groups,E=a.drawRange;if(f!==null)if(Array.isArray(o))for(let x=0,v=M.length;x<v;x++){const S=M[x],A=o[S.materialIndex],D=Math.max(S.start,E.start),z=Math.min(f.count,Math.min(S.start+S.count,E.start+E.count));for(let w=D,F=z;w<F;w+=3){const it=f.getX(w),L=f.getX(w+1),O=f.getX(w+2);h=Pu(this,A,t,ys,m,p,g,_,y,it,L,O),h&&(h.faceIndex=Math.floor(w/3),h.face.materialIndex=S.materialIndex,n.push(h))}}else{const x=Math.max(0,E.start),v=Math.min(f.count,E.start+E.count);for(let S=x,A=v;S<A;S+=3){const D=f.getX(S),z=f.getX(S+1),w=f.getX(S+2);h=Pu(this,o,t,ys,m,p,g,_,y,D,z,w),h&&(h.faceIndex=Math.floor(S/3),n.push(h))}}else if(m!==void 0)if(Array.isArray(o))for(let x=0,v=M.length;x<v;x++){const S=M[x],A=o[S.materialIndex],D=Math.max(S.start,E.start),z=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let w=D,F=z;w<F;w+=3){const it=w,L=w+1,O=w+2;h=Pu(this,A,t,ys,m,p,g,_,y,it,L,O),h&&(h.faceIndex=Math.floor(w/3),h.face.materialIndex=S.materialIndex,n.push(h))}}else{const x=Math.max(0,E.start),v=Math.min(m.count,E.start+E.count);for(let S=x,A=v;S<A;S+=3){const D=S,z=S+1,w=S+2;h=Pu(this,o,t,ys,m,p,g,_,y,D,z,w),h&&(h.faceIndex=Math.floor(S/3),n.push(h))}}}}function RS(l,t,n,a,o,u,h,f){let m;if(t.side===ci?m=a.intersectTriangle(h,u,o,!0,f):m=a.intersectTriangle(o,u,h,t.side!==Ia,f),m===null)return null;Uu.copy(f),Uu.applyMatrix4(l.matrixWorld);const p=n.ray.origin.distanceTo(Uu);return p<n.near||p>n.far?null:{distance:p,point:Uu.clone(),object:l}}function Pu(l,t,n,a,o,u,h,f,m,p,g,_){Ba.fromBufferAttribute(o,p),Fa.fromBufferAttribute(o,g),Ha.fromBufferAttribute(o,_);const y=l.morphTargetInfluences;if(u&&y){Cu.set(0,0,0),Du.set(0,0,0),Lu.set(0,0,0);for(let E=0,x=u.length;E<x;E++){const v=y[E],S=u[E];v!==0&&(Hh.fromBufferAttribute(S,p),Gh.fromBufferAttribute(S,g),Ih.fromBufferAttribute(S,_),h?(Cu.addScaledVector(Hh,v),Du.addScaledVector(Gh,v),Lu.addScaledVector(Ih,v)):(Cu.addScaledVector(Hh.sub(Ba),v),Du.addScaledVector(Gh.sub(Fa),v),Lu.addScaledVector(Ih.sub(Ha),v)))}Ba.add(Cu),Fa.add(Du),Ha.add(Lu)}l.isSkinnedMesh&&(l.boneTransform(p,Ba),l.boneTransform(g,Fa),l.boneTransform(_,Ha));const M=RS(l,t,n,a,Ba,Fa,Ha,Vh);if(M){f&&(Ru.fromBufferAttribute(f,p),zu.fromBufferAttribute(f,g),Ou.fromBufferAttribute(f,_),M.uv=zi.getUV(Vh,Ba,Fa,Ha,Ru,zu,Ou,new Qt)),m&&(Ru.fromBufferAttribute(m,p),zu.fromBufferAttribute(m,g),Ou.fromBufferAttribute(m,_),M.uv2=zi.getUV(Vh,Ba,Fa,Ha,Ru,zu,Ou,new Qt));const E={a:p,b:g,c:_,normal:new X,materialIndex:0};zi.getNormal(Ba,Fa,Ha,E.normal),M.face=E}return M}class ll extends qn{constructor(t=1,n=1,a=1,o=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:h};const f=this;o=Math.floor(o),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,a,n,t,h,u,0),E("z","y","x",1,-1,a,n,-t,h,u,1),E("x","z","y",1,1,t,a,n,o,h,2),E("x","z","y",1,-1,t,a,-n,o,h,3),E("x","y","z",1,-1,t,n,a,o,u,4),E("x","y","z",-1,-1,t,n,-a,o,u,5),this.setIndex(m),this.setAttribute("position",new yn(p,3)),this.setAttribute("normal",new yn(g,3)),this.setAttribute("uv",new yn(_,2));function E(x,v,S,A,D,z,w,F,it,L,O){const k=z/it,vt=w/L,St=z/2,G=w/2,J=F/2,ct=it+1,nt=L+1;let ut=0,K=0;const $=new X;for(let T=0;T<nt;T++){const j=T*vt-G;for(let V=0;V<ct;V++){const I=V*k-St;$[x]=I*A,$[v]=j*D,$[S]=J,p.push($.x,$.y,$.z),$[x]=0,$[v]=0,$[S]=F>0?1:-1,g.push($.x,$.y,$.z),_.push(V/it),_.push(1-T/L),ut+=1}}for(let T=0;T<L;T++)for(let j=0;j<it;j++){const V=y+j+ct*T,I=y+j+ct*(T+1),Y=y+(j+1)+ct*(T+1),pt=y+(j+1)+ct*T;m.push(V,I,pt),m.push(I,Y,pt),K+=6}f.addGroup(M,K,O),M+=K,y+=ut}}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(l){const t={};for(const n in l){t[n]={};for(const a in l[n]){const o=l[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Cn(l){const t={};for(let n=0;n<l.length;n++){const a=Gs(l[n]);for(const o in a)t[o]=a[o]}return t}function zS(l){const t=[];for(let n=0;n<l.length;n++)t.push(l[n].clone());return t}const Cd={clone:Gs,merge:Cn};var OS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=zS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?n.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?n.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[o]={type:"m4",value:h.toArray()}:n.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Dd extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yn extends Dd{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,a,o,u,h){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ko*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*o/m,n-=h.offsetY*a/p,o*=h.width/m,a*=h.height/p}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xs=90,bs=1;class PS extends dn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a;const o=new Yn(xs,bs,t,n);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new X(1,0,0)),this.add(o);const u=new Yn(xs,bs,t,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new X(-1,0,0)),this.add(u);const h=new Yn(xs,bs,t,n);h.layers=this.layers,h.up.set(0,0,1),h.lookAt(new X(0,1,0)),this.add(h);const f=new Yn(xs,bs,t,n);f.layers=this.layers,f.up.set(0,0,-1),f.lookAt(new X(0,-1,0)),this.add(f);const m=new Yn(xs,bs,t,n);m.layers=this.layers,m.up.set(0,-1,0),m.lookAt(new X(0,0,1)),this.add(m);const p=new Yn(xs,bs,t,n);p.layers=this.layers,p.up.set(0,-1,0),p.lookAt(new X(0,0,-1)),this.add(p)}update(t,n){this.parent===null&&this.updateMatrixWorld();const a=this.renderTarget,[o,u,h,f,m,p]=this.children,g=t.getRenderTarget(),_=t.toneMapping,y=t.xr.enabled;t.toneMapping=la,t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0),t.render(n,o),t.setRenderTarget(a,1),t.render(n,u),t.setRenderTarget(a,2),t.render(n,h),t.setRenderTarget(a,3),t.render(n,f),t.setRenderTarget(a,4),t.render(n,m),a.texture.generateMipmaps=M,t.setRenderTarget(a,5),t.render(n,p),t.setRenderTarget(g),t.toneMapping=_,t.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class M_ extends fi{constructor(t,n,a,o,u,h,f,m,p,g){t=t!==void 0?t:[],n=n!==void 0?n:Bs,super(t,n,a,o,u,h,f,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class NS extends Ar{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new M_(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:li}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ll(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Gs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ci,blending:Va});u.uniforms.tEquirect.value=n;const h=new Ui(o,u),f=n.minFilter;return n.minFilter===lc&&(n.minFilter=li),new PS(1,10,this).update(t,h),n.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,n,a,o){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(n,a,o);t.setRenderTarget(u)}}const kh=new X,BS=new X,FS=new ui;class mr{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=kh.subVectors(a,n).cross(BS.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){const a=t.delta(kh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(a).multiplyScalar(u).add(t.start)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||FS.getNormalMatrix(t),o=this.coplanarPoint(kh).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Ws,Nu=new X;class w_{constructor(t=new mr,n=new mr,a=new mr,o=new mr,u=new mr,h=new mr){this.planes=[t,n,a,o,u,h]}set(t,n,a,o,u,h){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(u),f[5].copy(h),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t){const n=this.planes,a=t.elements,o=a[0],u=a[1],h=a[2],f=a[3],m=a[4],p=a[5],g=a[6],_=a[7],y=a[8],M=a[9],E=a[10],x=a[11],v=a[12],S=a[13],A=a[14],D=a[15];return n[0].setComponents(f-o,_-m,x-y,D-v).normalize(),n[1].setComponents(f+o,_+m,x+y,D+v).normalize(),n[2].setComponents(f+u,_+p,x+M,D+S).normalize(),n[3].setComponents(f-u,_-p,x-M,D-S).normalize(),n[4].setComponents(f-h,_-g,x-E,D-A).normalize(),n[5].setComponents(f+h,_+g,x+E,D+A).normalize(),this}intersectsObject(t){const n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSprite(t){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Nu.x=o.normal.x>0?t.max.x:t.min.x,Nu.y=o.normal.y>0?t.max.y:t.min.y,Nu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function E_(){let l=null,t=!1,n=null,a=null;function o(u,h){n(u,h),a=l.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=l.requestAnimationFrame(o),t=!0)},stop:function(){l.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){l=u}}}function HS(l,t){const n=t.isWebGL2,a=new WeakMap;function o(p,g){const _=p.array,y=p.usage,M=l.createBuffer();l.bindBuffer(g,M),l.bufferData(g,_,y),p.onUploadCallback();let E;if(_ instanceof Float32Array)E=5126;else if(_ instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(n)E=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=5123;else if(_ instanceof Int16Array)E=5122;else if(_ instanceof Uint32Array)E=5125;else if(_ instanceof Int32Array)E=5124;else if(_ instanceof Int8Array)E=5120;else if(_ instanceof Uint8Array)E=5121;else if(_ instanceof Uint8ClampedArray)E=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:M,type:E,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version}}function u(p,g,_){const y=g.array,M=g.updateRange;l.bindBuffer(_,p),M.count===-1?l.bufferSubData(_,0,y):(n?l.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):l.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1)}function h(p){return p.isInterleavedBufferAttribute&&(p=p.data),a.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=a.get(p);g&&(l.deleteBuffer(g.buffer),a.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const y=a.get(p);(!y||y.version<p.version)&&a.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const _=a.get(p);_===void 0?a.set(p,o(p,g)):_.version<p.version&&(u(_.buffer,p,g),_.version=p.version)}return{get:h,remove:f,update:m}}class Ld extends qn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const u=t/2,h=n/2,f=Math.floor(a),m=Math.floor(o),p=f+1,g=m+1,_=t/f,y=n/m,M=[],E=[],x=[],v=[];for(let S=0;S<g;S++){const A=S*y-h;for(let D=0;D<p;D++){const z=D*_-u;E.push(z,-A,0),x.push(0,0,1),v.push(D/f),v.push(1-S/m)}}for(let S=0;S<m;S++)for(let A=0;A<f;A++){const D=A+p*S,z=A+p*(S+1),w=A+1+p*(S+1),F=A+1+p*S;M.push(D,z,F),M.push(z,w,F)}this.setIndex(M),this.setAttribute("position",new yn(E,3)),this.setAttribute("normal",new yn(x,3)),this.setAttribute("uv",new yn(v,2))}static fromJSON(t){return new Ld(t.width,t.height,t.widthSegments,t.heightSegments)}}var GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,IS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS="vec3 transformed = vec3( position );",qS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,ZS=`#ifdef USE_IRIDESCENCE
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
#endif`,$S=`#ifdef USE_BUMPMAP
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r1=`#define PI 3.141592653589793
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
}`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o1=`vec3 transformedNormal = objectNormal;
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
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,w1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,C1=`uniform bool receiveShadow;
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
#endif`,D1=`#if defined( USE_ENVMAP )
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
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,U1=`PhysicalMaterial material;
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
#endif`,P1=`struct PhysicalMaterial {
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
}`,N1=`
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,H1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
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
#endif`,Q1=`#ifdef USE_MORPHTARGETS
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
#endif`,K1=`#ifdef USE_MORPHTARGETS
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
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,tM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
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
#endif`,rM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xM=`float getShadowMask() {
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
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SM=`#ifdef USE_SKINNING
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
#endif`,MM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,RM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,OM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,UM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,PM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,NM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,BM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,WM=`#include <common>
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
}`,XM=`#if DEPTH_PACKING == 3200
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
}`,YM=`#define DISTANCE
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
}`,qM=`#define DISTANCE
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$M=`uniform float scale;
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
}`,QM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,JM=`uniform vec3 diffuse;
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
}`,tw=`#define LAMBERT
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
}`,ew=`#define LAMBERT
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
}`,nw=`#define MATCAP
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
}`,iw=`#define MATCAP
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
}`,aw=`#define NORMAL
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
}`,rw=`#define NORMAL
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
}`,sw=`#define PHONG
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
}`,ow=`#define PHONG
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
}`,lw=`#define STANDARD
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
}`,uw=`#define STANDARD
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
}`,cw=`#define TOON
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
}`,fw=`#define TOON
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
}`,hw=`uniform float size;
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
}`,dw=`uniform vec3 diffuse;
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
}`,pw=`#include <common>
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
}`,mw=`uniform vec3 color;
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
}`,gw=`uniform float rotation;
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
}`,vw=`uniform vec3 diffuse;
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
}`,oe={alphamap_fragment:GS,alphamap_pars_fragment:IS,alphatest_fragment:VS,alphatest_pars_fragment:kS,aomap_fragment:WS,aomap_pars_fragment:XS,begin_vertex:YS,beginnormal_vertex:qS,bsdfs:jS,iridescence_fragment:ZS,bumpmap_pars_fragment:$S,clipping_planes_fragment:QS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:t1,color_fragment:e1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:a1,common:r1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:o1,displacementmap_pars_vertex:l1,displacementmap_vertex:u1,emissivemap_fragment:c1,emissivemap_pars_fragment:f1,encodings_fragment:h1,encodings_pars_fragment:d1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:D1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:x1,fog_fragment:b1,fog_pars_fragment:S1,gradientmap_pars_fragment:M1,lightmap_fragment:w1,lightmap_pars_fragment:E1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:T1,lights_pars_begin:C1,lights_toon_fragment:L1,lights_toon_pars_fragment:R1,lights_phong_fragment:z1,lights_phong_pars_fragment:O1,lights_physical_fragment:U1,lights_physical_pars_fragment:P1,lights_fragment_begin:N1,lights_fragment_maps:B1,lights_fragment_end:F1,logdepthbuf_fragment:H1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:I1,logdepthbuf_vertex:V1,map_fragment:k1,map_pars_fragment:W1,map_particle_fragment:X1,map_particle_pars_fragment:Y1,metalnessmap_fragment:q1,metalnessmap_pars_fragment:j1,morphcolor_vertex:Z1,morphnormal_vertex:$1,morphtarget_pars_vertex:Q1,morphtarget_vertex:K1,normal_fragment_begin:J1,normal_fragment_maps:tM,normal_pars_fragment:eM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:rM,clearcoat_normal_fragment_maps:sM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,output_fragment:uM,packing:cM,premultiplied_alpha_fragment:fM,project_vertex:hM,dithering_fragment:dM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:_M,shadowmap_vertex:yM,shadowmask_pars_fragment:xM,skinbase_vertex:bM,skinning_pars_vertex:SM,skinning_vertex:MM,skinnormal_vertex:wM,specularmap_fragment:EM,specularmap_pars_fragment:AM,tonemapping_fragment:TM,tonemapping_pars_fragment:CM,transmission_fragment:DM,transmission_pars_fragment:LM,uv_pars_fragment:RM,uv_pars_vertex:zM,uv_vertex:OM,uv2_pars_fragment:UM,uv2_pars_vertex:PM,uv2_vertex:NM,worldpos_vertex:BM,background_vert:FM,background_frag:HM,backgroundCube_vert:GM,backgroundCube_frag:IM,cube_vert:VM,cube_frag:kM,depth_vert:WM,depth_frag:XM,distanceRGBA_vert:YM,distanceRGBA_frag:qM,equirect_vert:jM,equirect_frag:ZM,linedashed_vert:$M,linedashed_frag:QM,meshbasic_vert:KM,meshbasic_frag:JM,meshlambert_vert:tw,meshlambert_frag:ew,meshmatcap_vert:nw,meshmatcap_frag:iw,meshnormal_vert:aw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:lw,meshphysical_frag:uw,meshtoon_vert:cw,meshtoon_frag:fw,points_vert:hw,points_frag:dw,shadow_vert:pw,shadow_frag:mw,sprite_vert:gw,sprite_frag:vw},Tt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ui},uv2Transform:{value:new ui},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ui}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ui}}},Un={basic:{uniforms:Cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Cn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Cn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Cn([Tt.points,Tt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Cn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Cn([Tt.common,Tt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Cn([Tt.sprite,Tt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ui},t2D:{value:null}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Cn([Tt.common,Tt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Cn([Tt.lights,Tt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Un.physical={uniforms:Cn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};function _w(l,t,n,a,o,u,h){const f=new pe(0);let m=u===!0?0:1,p,g,_=null,y=0,M=null;function E(v,S){let A=!1,D=S.isScene===!0?S.background:null;D&&D.isTexture&&(D=(S.backgroundBlurriness>0?n:t).get(D));const z=l.xr,w=z.getSession&&z.getSession();w&&w.environmentBlendMode==="additive"&&(D=null),D===null?x(f,m):D&&D.isColor&&(x(D,1),A=!0),(l.autoClear||A)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),D&&(D.isCubeTexture||D.mapping===oc)?(g===void 0&&(g=new Ui(new ll(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Gs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,it,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,(_!==D||y!==D.version||M!==l.toneMapping)&&(g.material.needsUpdate=!0,_=D,y=D.version,M=l.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Ui(new Ld(2,2),new Wa({name:"BackgroundMaterial",uniforms:Gs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=D,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||y!==D.version||M!==l.toneMapping)&&(p.material.needsUpdate=!0,_=D,y=D.version,M=l.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null))}function x(v,S){a.buffers.color.setClear(v.r,v.g,v.b,S,h)}return{getClearColor:function(){return f},setClearColor:function(v,S=1){f.set(v),m=S,x(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(v){m=v,x(f,m)},render:E}}function yw(l,t,n,a){const o=l.getParameter(34921),u=a.isWebGL2?null:t.get("OES_vertex_array_object"),h=a.isWebGL2||u!==null,f={},m=v(null);let p=m,g=!1;function _(J,ct,nt,ut,K){let $=!1;if(h){const T=x(ut,nt,ct);p!==T&&(p=T,M(p.object)),$=S(J,ut,nt,K),$&&A(J,ut,nt,K)}else{const T=ct.wireframe===!0;(p.geometry!==ut.id||p.program!==nt.id||p.wireframe!==T)&&(p.geometry=ut.id,p.program=nt.id,p.wireframe=T,$=!0)}K!==null&&n.update(K,34963),($||g)&&(g=!1,L(J,ct,nt,ut),K!==null&&l.bindBuffer(34963,n.get(K).buffer))}function y(){return a.isWebGL2?l.createVertexArray():u.createVertexArrayOES()}function M(J){return a.isWebGL2?l.bindVertexArray(J):u.bindVertexArrayOES(J)}function E(J){return a.isWebGL2?l.deleteVertexArray(J):u.deleteVertexArrayOES(J)}function x(J,ct,nt){const ut=nt.wireframe===!0;let K=f[J.id];K===void 0&&(K={},f[J.id]=K);let $=K[ct.id];$===void 0&&($={},K[ct.id]=$);let T=$[ut];return T===void 0&&(T=v(y()),$[ut]=T),T}function v(J){const ct=[],nt=[],ut=[];for(let K=0;K<o;K++)ct[K]=0,nt[K]=0,ut[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ct,enabledAttributes:nt,attributeDivisors:ut,object:J,attributes:{},index:null}}function S(J,ct,nt,ut){const K=p.attributes,$=ct.attributes;let T=0;const j=nt.getAttributes();for(const V in j)if(j[V].location>=0){const Y=K[V];let pt=$[V];if(pt===void 0&&(V==="instanceMatrix"&&J.instanceMatrix&&(pt=J.instanceMatrix),V==="instanceColor"&&J.instanceColor&&(pt=J.instanceColor)),Y===void 0||Y.attribute!==pt||pt&&Y.data!==pt.data)return!0;T++}return p.attributesNum!==T||p.index!==ut}function A(J,ct,nt,ut){const K={},$=ct.attributes;let T=0;const j=nt.getAttributes();for(const V in j)if(j[V].location>=0){let Y=$[V];Y===void 0&&(V==="instanceMatrix"&&J.instanceMatrix&&(Y=J.instanceMatrix),V==="instanceColor"&&J.instanceColor&&(Y=J.instanceColor));const pt={};pt.attribute=Y,Y&&Y.data&&(pt.data=Y.data),K[V]=pt,T++}p.attributes=K,p.attributesNum=T,p.index=ut}function D(){const J=p.newAttributes;for(let ct=0,nt=J.length;ct<nt;ct++)J[ct]=0}function z(J){w(J,0)}function w(J,ct){const nt=p.newAttributes,ut=p.enabledAttributes,K=p.attributeDivisors;nt[J]=1,ut[J]===0&&(l.enableVertexAttribArray(J),ut[J]=1),K[J]!==ct&&((a.isWebGL2?l:t.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,ct),K[J]=ct)}function F(){const J=p.newAttributes,ct=p.enabledAttributes;for(let nt=0,ut=ct.length;nt<ut;nt++)ct[nt]!==J[nt]&&(l.disableVertexAttribArray(nt),ct[nt]=0)}function it(J,ct,nt,ut,K,$){a.isWebGL2===!0&&(nt===5124||nt===5125)?l.vertexAttribIPointer(J,ct,nt,K,$):l.vertexAttribPointer(J,ct,nt,ut,K,$)}function L(J,ct,nt,ut){if(a.isWebGL2===!1&&(J.isInstancedMesh||ut.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;D();const K=ut.attributes,$=nt.getAttributes(),T=ct.defaultAttributeValues;for(const j in $){const V=$[j];if(V.location>=0){let I=K[j];if(I===void 0&&(j==="instanceMatrix"&&J.instanceMatrix&&(I=J.instanceMatrix),j==="instanceColor"&&J.instanceColor&&(I=J.instanceColor)),I!==void 0){const Y=I.normalized,pt=I.itemSize,U=n.get(I);if(U===void 0)continue;const Ct=U.buffer,st=U.type,wt=U.bytesPerElement;if(I.isInterleavedBufferAttribute){const _t=I.data,Ot=_t.stride,At=I.offset;if(_t.isInstancedInterleavedBuffer){for(let Dt=0;Dt<V.locationSize;Dt++)w(V.location+Dt,_t.meshPerAttribute);J.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Dt=0;Dt<V.locationSize;Dt++)z(V.location+Dt);l.bindBuffer(34962,Ct);for(let Dt=0;Dt<V.locationSize;Dt++)it(V.location+Dt,pt/V.locationSize,st,Y,Ot*wt,(At+pt/V.locationSize*Dt)*wt)}else{if(I.isInstancedBufferAttribute){for(let _t=0;_t<V.locationSize;_t++)w(V.location+_t,I.meshPerAttribute);J.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let _t=0;_t<V.locationSize;_t++)z(V.location+_t);l.bindBuffer(34962,Ct);for(let _t=0;_t<V.locationSize;_t++)it(V.location+_t,pt/V.locationSize,st,Y,pt*wt,pt/V.locationSize*_t*wt)}}else if(T!==void 0){const Y=T[j];if(Y!==void 0)switch(Y.length){case 2:l.vertexAttrib2fv(V.location,Y);break;case 3:l.vertexAttrib3fv(V.location,Y);break;case 4:l.vertexAttrib4fv(V.location,Y);break;default:l.vertexAttrib1fv(V.location,Y)}}}}F()}function O(){St();for(const J in f){const ct=f[J];for(const nt in ct){const ut=ct[nt];for(const K in ut)E(ut[K].object),delete ut[K];delete ct[nt]}delete f[J]}}function k(J){if(f[J.id]===void 0)return;const ct=f[J.id];for(const nt in ct){const ut=ct[nt];for(const K in ut)E(ut[K].object),delete ut[K];delete ct[nt]}delete f[J.id]}function vt(J){for(const ct in f){const nt=f[ct];if(nt[J.id]===void 0)continue;const ut=nt[J.id];for(const K in ut)E(ut[K].object),delete ut[K];delete nt[J.id]}}function St(){G(),g=!0,p!==m&&(p=m,M(p.object))}function G(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:_,reset:St,resetDefaultState:G,dispose:O,releaseStatesOfGeometry:k,releaseStatesOfProgram:vt,initAttributes:D,enableAttribute:z,disableUnusedAttributes:F}}function xw(l,t,n,a){const o=a.isWebGL2;let u;function h(p){u=p}function f(p,g){l.drawArrays(u,p,g),n.update(g,u,1)}function m(p,g,_){if(_===0)return;let y,M;if(o)y=l,M="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[M](u,p,g,_),n.update(g,u,_)}this.setMode=h,this.render=f,this.renderInstances=m}function bw(l,t,n){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");a=l.getParameter(it.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(it){if(it==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";it="mediump"}return it==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let f=n.precision!==void 0?n.precision:"highp";const m=u(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const p=h||t.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,_=l.getParameter(34930),y=l.getParameter(35660),M=l.getParameter(3379),E=l.getParameter(34076),x=l.getParameter(34921),v=l.getParameter(36347),S=l.getParameter(36348),A=l.getParameter(36349),D=y>0,z=h||t.has("OES_texture_float"),w=D&&z,F=h?l.getParameter(36183):0;return{isWebGL2:h,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:u,precision:f,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:D,floatFragmentTextures:z,floatVertexTextures:w,maxSamples:F}}function Sw(l){const t=this;let n=null,a=0,o=!1,u=!1;const h=new mr,f=new ui,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y,M){const E=_.length!==0||y||a!==0||o;return o=y,n=g(_,M,0),a=_.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1,p()},this.setState=function(_,y,M){const E=_.clippingPlanes,x=_.clipIntersection,v=_.clipShadows,S=l.get(_);if(!o||E===null||E.length===0||u&&!v)u?g(null):p();else{const A=u?0:a,D=A*4;let z=S.clippingState||null;m.value=z,z=g(E,y,D,M);for(let w=0;w!==D;++w)z[w]=n[w];S.clippingState=z,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,y,M,E){const x=_!==null?_.length:0;let v=null;if(x!==0){if(v=m.value,E!==!0||v===null){const S=M+x*4,A=y.matrixWorldInverse;f.getNormalMatrix(A),(v===null||v.length<S)&&(v=new Float32Array(S));for(let D=0,z=M;D!==x;++D,z+=4)h.copy(_[D]).applyMatrix4(A,f),h.normal.toArray(v,z),v[z+3]=h.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,v}}function Mw(l){let t=new WeakMap;function n(h,f){return f===ud?h.mapping=Bs:f===cd&&(h.mapping=Fs),h}function a(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const f=h.mapping;if(f===ud||f===cd)if(t.has(h)){const m=t.get(h).texture;return n(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new NS(m.height/2);return p.fromEquirectangularTexture(l,h),t.set(h,p),h.addEventListener("dispose",o),n(p.texture,h.mapping)}else return null}}return h}function o(h){const f=h.target;f.removeEventListener("dispose",o);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}class ww extends Dd{constructor(t=-1,n=1,a=1,o=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-t,h=a+t,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,f-=g*this.view.offsetY,m=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,f,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,tv=[.125,.215,.35,.446,.526,.582],vr=20,Wh=new ww,ev=new pe;let Xh=null;const gr=(1+Math.sqrt(5))/2,Ms=1/gr,nv=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,gr,Ms),new X(0,gr,-Ms),new X(Ms,0,gr),new X(-Ms,0,gr),new X(gr,Ms,0),new X(-gr,Ms,0)];class iv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100){Xh=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,a,o,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xh),t.scissorTest=!1,Bu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Bs||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xh=this._renderer.getRenderTarget();const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:li,minFilter:li,generateMipmaps:!1,type:nl,format:bi,encoding:Er,depthBuffer:!1},o=av(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(t,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ew(u)),this._blurMaterial=Aw(u,t,n)}return o}_compileMaterial(t){const n=new Ui(this._lodPlanes[0],t);this._renderer.compile(n,Wh)}_sceneToCubeUV(t,n,a,o){const f=new Yn(90,1,n,a),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(ev),g.toneMapping=la,g.autoClear=!1;const M=new Td({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),E=new Ui(new ll,M);let x=!1;const v=t.background;v?v.isColor&&(M.color.copy(v),t.background=null,x=!0):(M.color.copy(ev),x=!0);for(let S=0;S<6;S++){const A=S%3;A===0?(f.up.set(0,m[S],0),f.lookAt(p[S],0,0)):A===1?(f.up.set(0,0,m[S]),f.lookAt(0,p[S],0)):(f.up.set(0,m[S],0),f.lookAt(0,0,p[S]));const D=this._cubeSize;Bu(o,A*D,S>2?D:0,D,D),g.setRenderTarget(o),x&&g.render(E,f),g.render(t,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=v}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Bs||t.mapping===Fs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const u=o?this._cubemapMaterial:this._equirectMaterial,h=new Ui(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=t;const m=this._cubeSize;Bu(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(h,Wh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=nv[(o-1)%nv.length];this._blur(t,o-1,o,u,h)}n.autoClear=a}_blur(t,n,a,o,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,n,a,o,"latitudinal",u),this._halfBlur(h,t,a,a,o,"longitudinal",u)}_halfBlur(t,n,a,o,u,h,f){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ui(this._lodPlanes[o],p),y=p.uniforms,M=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vr-1),x=u/E,v=isFinite(u)?1+Math.floor(g*x):vr;v>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${vr}`);const S=[];let A=0;for(let it=0;it<vr;++it){const L=it/x,O=Math.exp(-L*L/2);S.push(O),it===0?A+=O:it<v&&(A+=2*O)}for(let it=0;it<S.length;it++)S[it]=S[it]/A;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=S,y.latitudinal.value=h==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:D}=this;y.dTheta.value=E,y.mipInt.value=D-a;const z=this._sizeLods[o],w=3*z*(o>D-Ds?o-D+Ds:0),F=4*(this._cubeSize-z);Bu(n,w,F,3*z,2*z),m.setRenderTarget(n),m.render(_,Wh)}}function Ew(l){const t=[],n=[],a=[];let o=l;const u=l-Ds+1+tv.length;for(let h=0;h<u;h++){const f=Math.pow(2,o);n.push(f);let m=1/f;h>l-Ds?m=tv[h-l+Ds-1]:h===0&&(m=0),a.push(m);const p=1/(f-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,x=3,v=2,S=1,A=new Float32Array(x*E*M),D=new Float32Array(v*E*M),z=new Float32Array(S*E*M);for(let F=0;F<M;F++){const it=F%3*2/3-1,L=F>2?0:-1,O=[it,L,0,it+2/3,L,0,it+2/3,L+1,0,it,L,0,it+2/3,L+1,0,it,L+1,0];A.set(O,x*E*F),D.set(y,v*E*F);const k=[F,F,F,F,F,F];z.set(k,S*E*F)}const w=new qn;w.setAttribute("position",new Si(A,x)),w.setAttribute("uv",new Si(D,v)),w.setAttribute("faceIndex",new Si(z,S)),t.push(w),o>Ds&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function av(l,t,n){const a=new Ar(l,t,n);return a.texture.mapping=oc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Bu(l,t,n,a,o){l.viewport.set(t,n,a,o),l.scissor.set(t,n,a,o)}function Aw(l,t,n){const a=new Float32Array(vr),o=new X(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function rv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function sv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Rd(){return`

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
	`}function Tw(l){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const m=f.mapping,p=m===ud||m===cd,g=m===Bs||m===Fs;if(p||g)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let _=t.get(f);return n===null&&(n=new iv(l)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),t.set(f,_),_.texture}else{if(t.has(f))return t.get(f).texture;{const _=f.image;if(p&&_&&_.height>0||g&&_&&o(_)){n===null&&(n=new iv(l));const y=p?n.fromEquirectangular(f):n.fromCubemap(f);return t.set(f,y),f.addEventListener("dispose",u),y.texture}else return null}}}return f}function o(f){let m=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&m++;return m===p}function u(f){const m=f.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:h}}function Cw(l){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=l.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(a){a.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(a){const o=n(a);return o===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function Dw(l,t,n,a){const o={},u=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete o[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(_,y){return o[y.id]===!0||(y.addEventListener("dispose",h),o[y.id]=!0,n.memory.geometries++),y}function m(_){const y=_.attributes;for(const E in y)t.update(y[E],34962);const M=_.morphAttributes;for(const E in M){const x=M[E];for(let v=0,S=x.length;v<S;v++)t.update(x[v],34962)}}function p(_){const y=[],M=_.index,E=_.attributes.position;let x=0;if(M!==null){const A=M.array;x=M.version;for(let D=0,z=A.length;D<z;D+=3){const w=A[D+0],F=A[D+1],it=A[D+2];y.push(w,F,F,it,it,w)}}else{const A=E.array;x=E.version;for(let D=0,z=A.length/3-1;D<z;D+=3){const w=D+0,F=D+1,it=D+2;y.push(w,F,F,it,it,w)}}const v=new(p_(y)?S_:b_)(y,1);v.version=x;const S=u.get(_);S&&t.remove(S),u.set(_,v)}function g(_){const y=u.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:f,update:m,getWireframeAttribute:g}}function Lw(l,t,n,a){const o=a.isWebGL2;let u;function h(y){u=y}let f,m;function p(y){f=y.type,m=y.bytesPerElement}function g(y,M){l.drawElements(u,M,f,y*m),n.update(M,u,1)}function _(y,M,E){if(E===0)return;let x,v;if(o)x=l,v="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](u,M,f,y*m,E),n.update(M,u,E)}this.setMode=h,this.setIndex=p,this.render=g,this.renderInstances=_}function Rw(l){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,h,f){switch(n.calls++,h){case 4:n.triangles+=f*(u/3);break;case 1:n.lines+=f*(u/2);break;case 3:n.lines+=f*(u-1);break;case 2:n.lines+=f*u;break;case 0:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function zw(l,t){return l[0]-t[0]}function Ow(l,t){return Math.abs(t[1])-Math.abs(l[1])}function Uw(l,t,n){const a={},o=new Float32Array(8),u=new WeakMap,h=new Xe,f=[];for(let p=0;p<8;p++)f[p]=[p,0];function m(p,g,_,y){const M=p.morphTargetInfluences;if(t.isWebGL2===!0){const x=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,v=x!==void 0?x.length:0;let S=u.get(g);if(S===void 0||S.count!==v){let nt=function(){J.dispose(),u.delete(g),g.removeEventListener("dispose",nt)};var E=nt;S!==void 0&&S.texture.dispose();const z=g.morphAttributes.position!==void 0,w=g.morphAttributes.normal!==void 0,F=g.morphAttributes.color!==void 0,it=g.morphAttributes.position||[],L=g.morphAttributes.normal||[],O=g.morphAttributes.color||[];let k=0;z===!0&&(k=1),w===!0&&(k=2),F===!0&&(k=3);let vt=g.attributes.position.count*k,St=1;vt>t.maxTextureSize&&(St=Math.ceil(vt/t.maxTextureSize),vt=t.maxTextureSize);const G=new Float32Array(vt*St*4*v),J=new __(G,vt,St,v);J.type=yr,J.needsUpdate=!0;const ct=k*4;for(let ut=0;ut<v;ut++){const K=it[ut],$=L[ut],T=O[ut],j=vt*St*4*ut;for(let V=0;V<K.count;V++){const I=V*ct;z===!0&&(h.fromBufferAttribute(K,V),G[j+I+0]=h.x,G[j+I+1]=h.y,G[j+I+2]=h.z,G[j+I+3]=0),w===!0&&(h.fromBufferAttribute($,V),G[j+I+4]=h.x,G[j+I+5]=h.y,G[j+I+6]=h.z,G[j+I+7]=0),F===!0&&(h.fromBufferAttribute(T,V),G[j+I+8]=h.x,G[j+I+9]=h.y,G[j+I+10]=h.z,G[j+I+11]=T.itemSize===4?h.w:1)}}S={count:v,texture:J,size:new Qt(vt,St)},u.set(g,S),g.addEventListener("dispose",nt)}let A=0;for(let z=0;z<M.length;z++)A+=M[z];const D=g.morphTargetsRelative?1:1-A;y.getUniforms().setValue(l,"morphTargetBaseInfluence",D),y.getUniforms().setValue(l,"morphTargetInfluences",M),y.getUniforms().setValue(l,"morphTargetsTexture",S.texture,n),y.getUniforms().setValue(l,"morphTargetsTextureSize",S.size)}else{const x=M===void 0?0:M.length;let v=a[g.id];if(v===void 0||v.length!==x){v=[];for(let w=0;w<x;w++)v[w]=[w,0];a[g.id]=v}for(let w=0;w<x;w++){const F=v[w];F[0]=w,F[1]=M[w]}v.sort(Ow);for(let w=0;w<8;w++)w<x&&v[w][1]?(f[w][0]=v[w][0],f[w][1]=v[w][1]):(f[w][0]=Number.MAX_SAFE_INTEGER,f[w][1]=0);f.sort(zw);const S=g.morphAttributes.position,A=g.morphAttributes.normal;let D=0;for(let w=0;w<8;w++){const F=f[w],it=F[0],L=F[1];it!==Number.MAX_SAFE_INTEGER&&L?(S&&g.getAttribute("morphTarget"+w)!==S[it]&&g.setAttribute("morphTarget"+w,S[it]),A&&g.getAttribute("morphNormal"+w)!==A[it]&&g.setAttribute("morphNormal"+w,A[it]),o[w]=L,D+=L):(S&&g.hasAttribute("morphTarget"+w)===!0&&g.deleteAttribute("morphTarget"+w),A&&g.hasAttribute("morphNormal"+w)===!0&&g.deleteAttribute("morphNormal"+w),o[w]=0)}const z=g.morphTargetsRelative?1:1-D;y.getUniforms().setValue(l,"morphTargetBaseInfluence",z),y.getUniforms().setValue(l,"morphTargetInfluences",o)}}return{update:m}}function Pw(l,t,n,a){let o=new WeakMap;function u(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);return o.get(_)!==p&&(t.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),n.update(m.instanceMatrix,34962),m.instanceColor!==null&&n.update(m.instanceColor,34962)),_}function h(){o=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:h}}const A_=new fi,T_=new __,C_=new bS,D_=new M_,ov=[],lv=[],uv=new Float32Array(16),cv=new Float32Array(9),fv=new Float32Array(4);function Ys(l,t,n){const a=l[0];if(a<=0||a>0)return l;const o=t*n;let u=ov[o];if(u===void 0&&(u=new Float32Array(o),ov[o]=u),t!==0){a.toArray(u,0);for(let h=1,f=0;h!==t;++h)f+=n,l[h].toArray(u,f)}return u}function en(l,t){if(l.length!==t.length)return!1;for(let n=0,a=l.length;n<a;n++)if(l[n]!==t[n])return!1;return!0}function nn(l,t){for(let n=0,a=t.length;n<a;n++)l[n]=t[n]}function uc(l,t){let n=lv[t];n===void 0&&(n=new Int32Array(t),lv[t]=n);for(let a=0;a!==t;++a)n[a]=l.allocateTextureUnit();return n}function Nw(l,t){const n=this.cache;n[0]!==t&&(l.uniform1f(this.addr,t),n[0]=t)}function Bw(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;l.uniform2fv(this.addr,t),nn(n,t)}}function Fw(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(en(n,t))return;l.uniform3fv(this.addr,t),nn(n,t)}}function Hw(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;l.uniform4fv(this.addr,t),nn(n,t)}}function Gw(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(en(n,t))return;l.uniformMatrix2fv(this.addr,!1,t),nn(n,t)}else{if(en(n,a))return;fv.set(a),l.uniformMatrix2fv(this.addr,!1,fv),nn(n,a)}}function Iw(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(en(n,t))return;l.uniformMatrix3fv(this.addr,!1,t),nn(n,t)}else{if(en(n,a))return;cv.set(a),l.uniformMatrix3fv(this.addr,!1,cv),nn(n,a)}}function Vw(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(en(n,t))return;l.uniformMatrix4fv(this.addr,!1,t),nn(n,t)}else{if(en(n,a))return;uv.set(a),l.uniformMatrix4fv(this.addr,!1,uv),nn(n,a)}}function kw(l,t){const n=this.cache;n[0]!==t&&(l.uniform1i(this.addr,t),n[0]=t)}function Ww(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;l.uniform2iv(this.addr,t),nn(n,t)}}function Xw(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;l.uniform3iv(this.addr,t),nn(n,t)}}function Yw(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;l.uniform4iv(this.addr,t),nn(n,t)}}function qw(l,t){const n=this.cache;n[0]!==t&&(l.uniform1ui(this.addr,t),n[0]=t)}function jw(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;l.uniform2uiv(this.addr,t),nn(n,t)}}function Zw(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;l.uniform3uiv(this.addr,t),nn(n,t)}}function $w(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;l.uniform4uiv(this.addr,t),nn(n,t)}}function Qw(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTexture2D(t||A_,o)}function Kw(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||C_,o)}function Jw(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||D_,o)}function tE(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||T_,o)}function eE(l){switch(l){case 5126:return Nw;case 35664:return Bw;case 35665:return Fw;case 35666:return Hw;case 35674:return Gw;case 35675:return Iw;case 35676:return Vw;case 5124:case 35670:return kw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return Yw;case 5125:return qw;case 36294:return jw;case 36295:return Zw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return tE}}function nE(l,t){l.uniform1fv(this.addr,t)}function iE(l,t){const n=Ys(t,this.size,2);l.uniform2fv(this.addr,n)}function aE(l,t){const n=Ys(t,this.size,3);l.uniform3fv(this.addr,n)}function rE(l,t){const n=Ys(t,this.size,4);l.uniform4fv(this.addr,n)}function sE(l,t){const n=Ys(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function oE(l,t){const n=Ys(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function lE(l,t){const n=Ys(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function uE(l,t){l.uniform1iv(this.addr,t)}function cE(l,t){l.uniform2iv(this.addr,t)}function fE(l,t){l.uniform3iv(this.addr,t)}function hE(l,t){l.uniform4iv(this.addr,t)}function dE(l,t){l.uniform1uiv(this.addr,t)}function pE(l,t){l.uniform2uiv(this.addr,t)}function mE(l,t){l.uniform3uiv(this.addr,t)}function gE(l,t){l.uniform4uiv(this.addr,t)}function vE(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);en(a,u)||(l.uniform1iv(this.addr,u),nn(a,u));for(let h=0;h!==o;++h)n.setTexture2D(t[h]||A_,u[h])}function _E(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);en(a,u)||(l.uniform1iv(this.addr,u),nn(a,u));for(let h=0;h!==o;++h)n.setTexture3D(t[h]||C_,u[h])}function yE(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);en(a,u)||(l.uniform1iv(this.addr,u),nn(a,u));for(let h=0;h!==o;++h)n.setTextureCube(t[h]||D_,u[h])}function xE(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);en(a,u)||(l.uniform1iv(this.addr,u),nn(a,u));for(let h=0;h!==o;++h)n.setTexture2DArray(t[h]||T_,u[h])}function bE(l){switch(l){case 5126:return nE;case 35664:return iE;case 35665:return aE;case 35666:return rE;case 35674:return sE;case 35675:return oE;case 35676:return lE;case 5124:case 35670:return uE;case 35667:case 35671:return cE;case 35668:case 35672:return fE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return pE;case 36295:return mE;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return xE}}class SE{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.setValue=eE(n.type)}}class ME{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.size=n.size,this.setValue=bE(n.type)}}class wE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let u=0,h=o.length;u!==h;++u){const f=o[u];f.setValue(t,n[f.id],a)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function hv(l,t){l.seq.push(t),l.map[t.id]=t}function EE(l,t,n){const a=l.name,o=a.length;for(Yh.lastIndex=0;;){const u=Yh.exec(a),h=Yh.lastIndex;let f=u[1];const m=u[2]==="]",p=u[3];if(m&&(f=f|0),p===void 0||p==="["&&h+2===o){hv(n,p===void 0?new SE(f,l,t):new ME(f,l,t));break}else{let _=n.map[f];_===void 0&&(_=new wE(f),hv(n,_)),n=_}}}class Qu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,35718);for(let o=0;o<a;++o){const u=t.getActiveUniform(n,o),h=t.getUniformLocation(n,u.name);EE(u,h,this)}}setValue(t,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let u=0,h=n.length;u!==h;++u){const f=n[u],m=a[f.id];m.needsUpdate!==!1&&f.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,u=t.length;o!==u;++o){const h=t[o];h.id in n&&a.push(h)}return a}}function dv(l,t,n){const a=l.createShader(t);return l.shaderSource(a,n),l.compileShader(a),a}let AE=0;function TE(l,t){const n=l.split(`
`),a=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let h=o;h<u;h++){const f=h+1;a.push(`${f===t?">":" "} ${f}: ${n[h]}`)}return a.join(`
`)}function CE(l){switch(l){case Er:return["Linear","( value )"];case Ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function pv(l,t,n){const a=l.getShaderParameter(t,35713),o=l.getShaderInfoLog(t).trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+TE(l.getShaderSource(t),h)}else return o}function DE(l,t){const n=CE(t);return"vec4 "+l+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function LE(l,t){let n;switch(t){case Ob:n="Linear";break;case Ub:n="Reinhard";break;case Pb:n="OptimizedCineon";break;case Nb:n="ACESFilmic";break;case Bb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RE(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qo).join(`
`)}function zE(l){const t=[];for(const n in l){const a=l[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function OE(l,t){const n={},a=l.getProgramParameter(t,35721);for(let o=0;o<a;o++){const u=l.getActiveAttrib(t,o),h=u.name;let f=1;u.type===35674&&(f=2),u.type===35675&&(f=3),u.type===35676&&(f=4),n[h]={type:u.type,location:l.getAttribLocation(t,h),locationSize:f}}return n}function Qo(l){return l!==""}function mv(l,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(l){return l.replace(UE,PE)}function PE(l,t){const n=oe[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return gd(n)}const NE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(l){return l.replace(NE,BE)}function BE(l,t,n,a){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function _v(l){let t="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function FE(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===l_?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===fb?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===$o&&(t="SHADOWMAP_TYPE_VSM"),t}function HE(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Bs:case Fs:t="ENVMAP_TYPE_CUBE";break;case oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function GE(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function IE(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case f_:t="ENVMAP_BLENDING_MULTIPLY";break;case Rb:t="ENVMAP_BLENDING_MIX";break;case zb:t="ENVMAP_BLENDING_ADD";break}return t}function VE(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function kE(l,t,n,a){const o=l.getContext(),u=n.defines;let h=n.vertexShader,f=n.fragmentShader;const m=FE(n),p=HE(n),g=GE(n),_=IE(n),y=VE(n),M=n.isWebGL2?"":RE(n),E=zE(u),x=o.createProgram();let v,S,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[E].filter(Qo).join(`
`),v.length>0&&(v+=`
`),S=[M,E].filter(Qo).join(`
`),S.length>0&&(S+=`
`)):(v=[_v(n),"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),S=[M,_v(n),"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==la?"#define TONE_MAPPING":"",n.toneMapping!==la?oe.tonemapping_pars_fragment:"",n.toneMapping!==la?LE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",oe.encodings_pars_fragment,DE("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),h=gd(h),h=mv(h,n),h=gv(h,n),f=gd(f),f=mv(f,n),f=gv(f,n),h=vv(h),f=vv(f),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,S=["#define varying in",n.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=A+v+h,z=A+S+f,w=dv(o,35633,D),F=dv(o,35632,z);if(o.attachShader(x,w),o.attachShader(x,F),n.index0AttributeName!==void 0?o.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x),l.debug.checkShaderErrors){const O=o.getProgramInfoLog(x).trim(),k=o.getShaderInfoLog(w).trim(),vt=o.getShaderInfoLog(F).trim();let St=!0,G=!0;if(o.getProgramParameter(x,35714)===!1){St=!1;const J=pv(o,w,"vertex"),ct=pv(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,35715)+`

Program Info Log: `+O+`
`+J+`
`+ct)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||vt==="")&&(G=!1);G&&(this.diagnostics={runnable:St,programLog:O,vertexShader:{log:k,prefix:v},fragmentShader:{log:vt,prefix:S}})}o.deleteShader(w),o.deleteShader(F);let it;this.getUniforms=function(){return it===void 0&&(it=new Qu(o,x)),it};let L;return this.getAttributes=function(){return L===void 0&&(L=OE(o,x)),L},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.name=n.shaderName,this.id=AE++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=F,this}let WE=0;class XE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new YE(t),n.set(t,a)),a}}class YE{constructor(t){this.id=WE++,this.code=t,this.usedTimes=0}}function qE(l,t,n,a,o,u,h){const f=new x_,m=new XE,p=[],g=o.isWebGL2,_=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(L,O,k,vt,St){const G=vt.fog,J=St.geometry,ct=L.isMeshStandardMaterial?vt.environment:null,nt=(L.isMeshStandardMaterial?n:t).get(L.envMap||ct),ut=nt&&nt.mapping===oc?nt.image.height:null,K=E[L.type];L.precision!==null&&(M=o.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const $=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,T=$!==void 0?$.length:0;let j=0;J.morphAttributes.position!==void 0&&(j=1),J.morphAttributes.normal!==void 0&&(j=2),J.morphAttributes.color!==void 0&&(j=3);let V,I,Y,pt;if(K){const Ot=Un[K];V=Ot.vertexShader,I=Ot.fragmentShader}else V=L.vertexShader,I=L.fragmentShader,m.update(L),Y=m.getVertexShaderID(L),pt=m.getFragmentShaderID(L);const U=l.getRenderTarget(),Ct=L.alphaTest>0,st=L.clearcoat>0,wt=L.iridescence>0;return{isWebGL2:g,shaderID:K,shaderName:L.type,vertexShader:V,fragmentShader:I,defines:L.defines,customVertexShaderID:Y,customFragmentShaderID:pt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,instancing:St.isInstancedMesh===!0,instancingColor:St.isInstancedMesh===!0&&St.instanceColor!==null,supportsVertexTextures:y,outputEncoding:U===null?l.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Er,map:!!L.map,matcap:!!L.matcap,envMap:!!nt,envMapMode:nt&&nt.mapping,envMapCubeUVHeight:ut,lightMap:!!L.lightMap,aoMap:!!L.aoMap,emissiveMap:!!L.emissiveMap,bumpMap:!!L.bumpMap,normalMap:!!L.normalMap,objectSpaceNormalMap:L.normalMapType===iS,tangentSpaceNormalMap:L.normalMapType===nS,decodeVideoTexture:!!L.map&&L.map.isVideoTexture===!0&&L.map.encoding===Ie,clearcoat:st,clearcoatMap:st&&!!L.clearcoatMap,clearcoatRoughnessMap:st&&!!L.clearcoatRoughnessMap,clearcoatNormalMap:st&&!!L.clearcoatNormalMap,iridescence:wt,iridescenceMap:wt&&!!L.iridescenceMap,iridescenceThicknessMap:wt&&!!L.iridescenceThicknessMap,displacementMap:!!L.displacementMap,roughnessMap:!!L.roughnessMap,metalnessMap:!!L.metalnessMap,specularMap:!!L.specularMap,specularIntensityMap:!!L.specularIntensityMap,specularColorMap:!!L.specularColorMap,opaque:L.transparent===!1&&L.blending===Rs,alphaMap:!!L.alphaMap,alphaTest:Ct,gradientMap:!!L.gradientMap,sheen:L.sheen>0,sheenColorMap:!!L.sheenColorMap,sheenRoughnessMap:!!L.sheenRoughnessMap,transmission:L.transmission>0,transmissionMap:!!L.transmissionMap,thicknessMap:!!L.thicknessMap,combine:L.combine,vertexTangents:!!L.normalMap&&!!J.attributes.tangent,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUvs:!!L.map||!!L.bumpMap||!!L.normalMap||!!L.specularMap||!!L.alphaMap||!!L.emissiveMap||!!L.roughnessMap||!!L.metalnessMap||!!L.clearcoatMap||!!L.clearcoatRoughnessMap||!!L.clearcoatNormalMap||!!L.iridescenceMap||!!L.iridescenceThicknessMap||!!L.displacementMap||!!L.transmissionMap||!!L.thicknessMap||!!L.specularIntensityMap||!!L.specularColorMap||!!L.sheenColorMap||!!L.sheenRoughnessMap,uvsVertexOnly:!(L.map||L.bumpMap||L.normalMap||L.specularMap||L.alphaMap||L.emissiveMap||L.roughnessMap||L.metalnessMap||L.clearcoatNormalMap||L.iridescenceMap||L.iridescenceThicknessMap||L.transmission>0||L.transmissionMap||L.thicknessMap||L.specularIntensityMap||L.specularColorMap||L.sheen>0||L.sheenColorMap||L.sheenRoughnessMap)&&!!L.displacementMap,fog:!!G,useFog:L.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!L.flatShading,sizeAttenuation:L.sizeAttenuation,logarithmicDepthBuffer:_,skinning:St.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:j,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:L.dithering,shadowMapEnabled:l.shadowMap.enabled&&k.length>0,shadowMapType:l.shadowMap.type,toneMapping:L.toneMapped?l.toneMapping:la,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ia,flipSided:L.side===ci,useDepthPacking:!!L.depthPacking,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionDerivatives:L.extensions&&L.extensions.derivatives,extensionFragDepth:L.extensions&&L.extensions.fragDepth,extensionDrawBuffers:L.extensions&&L.extensions.drawBuffers,extensionShaderTextureLOD:L.extensions&&L.extensions.shaderTextureLOD,rendererExtensionFragDepth:g||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||a.has("EXT_shader_texture_lod"),customProgramCacheKey:L.customProgramCacheKey()}}function v(L){const O=[];if(L.shaderID?O.push(L.shaderID):(O.push(L.customVertexShaderID),O.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)O.push(k),O.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(S(O,L),A(O,L),O.push(l.outputEncoding)),O.push(L.customProgramCacheKey),O.join()}function S(L,O){L.push(O.precision),L.push(O.outputEncoding),L.push(O.envMapMode),L.push(O.envMapCubeUVHeight),L.push(O.combine),L.push(O.vertexUvs),L.push(O.fogExp2),L.push(O.sizeAttenuation),L.push(O.morphTargetsCount),L.push(O.morphAttributeCount),L.push(O.numDirLights),L.push(O.numPointLights),L.push(O.numSpotLights),L.push(O.numSpotLightMaps),L.push(O.numHemiLights),L.push(O.numRectAreaLights),L.push(O.numDirLightShadows),L.push(O.numPointLightShadows),L.push(O.numSpotLightShadows),L.push(O.numSpotLightShadowsWithMaps),L.push(O.shadowMapType),L.push(O.toneMapping),L.push(O.numClippingPlanes),L.push(O.numClipIntersection),L.push(O.depthPacking)}function A(L,O){f.disableAll(),O.isWebGL2&&f.enable(0),O.supportsVertexTextures&&f.enable(1),O.instancing&&f.enable(2),O.instancingColor&&f.enable(3),O.map&&f.enable(4),O.matcap&&f.enable(5),O.envMap&&f.enable(6),O.lightMap&&f.enable(7),O.aoMap&&f.enable(8),O.emissiveMap&&f.enable(9),O.bumpMap&&f.enable(10),O.normalMap&&f.enable(11),O.objectSpaceNormalMap&&f.enable(12),O.tangentSpaceNormalMap&&f.enable(13),O.clearcoat&&f.enable(14),O.clearcoatMap&&f.enable(15),O.clearcoatRoughnessMap&&f.enable(16),O.clearcoatNormalMap&&f.enable(17),O.iridescence&&f.enable(18),O.iridescenceMap&&f.enable(19),O.iridescenceThicknessMap&&f.enable(20),O.displacementMap&&f.enable(21),O.specularMap&&f.enable(22),O.roughnessMap&&f.enable(23),O.metalnessMap&&f.enable(24),O.gradientMap&&f.enable(25),O.alphaMap&&f.enable(26),O.alphaTest&&f.enable(27),O.vertexColors&&f.enable(28),O.vertexAlphas&&f.enable(29),O.vertexUvs&&f.enable(30),O.vertexTangents&&f.enable(31),O.uvsVertexOnly&&f.enable(32),L.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.skinning&&f.enable(4),O.morphTargets&&f.enable(5),O.morphNormals&&f.enable(6),O.morphColors&&f.enable(7),O.premultipliedAlpha&&f.enable(8),O.shadowMapEnabled&&f.enable(9),O.physicallyCorrectLights&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.specularIntensityMap&&f.enable(15),O.specularColorMap&&f.enable(16),O.transmission&&f.enable(17),O.transmissionMap&&f.enable(18),O.thicknessMap&&f.enable(19),O.sheen&&f.enable(20),O.sheenColorMap&&f.enable(21),O.sheenRoughnessMap&&f.enable(22),O.decodeVideoTexture&&f.enable(23),O.opaque&&f.enable(24),L.push(f.mask)}function D(L){const O=E[L.type];let k;if(O){const vt=Un[O];k=Cd.clone(vt.uniforms)}else k=L.uniforms;return k}function z(L,O){let k;for(let vt=0,St=p.length;vt<St;vt++){const G=p[vt];if(G.cacheKey===O){k=G,++k.usedTimes;break}}return k===void 0&&(k=new kE(l,O,L,u),p.push(k)),k}function w(L){if(--L.usedTimes===0){const O=p.indexOf(L);p[O]=p[p.length-1],p.pop(),L.destroy()}}function F(L){m.remove(L)}function it(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:D,acquireProgram:z,releaseProgram:w,releaseShaderCache:F,programs:p,dispose:it}}function jE(){let l=new WeakMap;function t(u){let h=l.get(u);return h===void 0&&(h={},l.set(u,h)),h}function n(u){l.delete(u)}function a(u,h,f){l.get(u)[h]=f}function o(){l=new WeakMap}return{get:t,remove:n,update:a,dispose:o}}function ZE(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function yv(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function xv(){const l=[];let t=0;const n=[],a=[],o=[];function u(){t=0,n.length=0,a.length=0,o.length=0}function h(_,y,M,E,x,v){let S=l[t];return S===void 0?(S={id:_.id,object:_,geometry:y,material:M,groupOrder:E,renderOrder:_.renderOrder,z:x,group:v},l[t]=S):(S.id=_.id,S.object=_,S.geometry=y,S.material=M,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=x,S.group=v),t++,S}function f(_,y,M,E,x,v){const S=h(_,y,M,E,x,v);M.transmission>0?a.push(S):M.transparent===!0?o.push(S):n.push(S)}function m(_,y,M,E,x,v){const S=h(_,y,M,E,x,v);M.transmission>0?a.unshift(S):M.transparent===!0?o.unshift(S):n.unshift(S)}function p(_,y){n.length>1&&n.sort(_||ZE),a.length>1&&a.sort(y||yv),o.length>1&&o.sort(y||yv)}function g(){for(let _=t,y=l.length;_<y;_++){const M=l[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:f,unshift:m,finish:g,sort:p}}function $E(){let l=new WeakMap;function t(a,o){const u=l.get(a);let h;return u===void 0?(h=new xv,l.set(a,[h])):o>=u.length?(h=new xv,u.push(h)):h=u[o],h}function n(){l=new WeakMap}return{get:t,dispose:n}}function QE(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new pe};break;case"SpotLight":n={position:new X,direction:new X,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":n={color:new pe,position:new X,halfWidth:new X,halfHeight:new X};break}return l[t.id]=n,n}}}function KE(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=n,n}}}let JE=0;function tA(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function eA(l,t){const n=new QE,a=KE(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new X);const u=new X,h=new $e,f=new $e;function m(g,_){let y=0,M=0,E=0;for(let vt=0;vt<9;vt++)o.probe[vt].set(0,0,0);let x=0,v=0,S=0,A=0,D=0,z=0,w=0,F=0,it=0,L=0;g.sort(tA);const O=_!==!0?Math.PI:1;for(let vt=0,St=g.length;vt<St;vt++){const G=g[vt],J=G.color,ct=G.intensity,nt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)y+=J.r*ct*O,M+=J.g*ct*O,E+=J.b*ct*O;else if(G.isLightProbe)for(let K=0;K<9;K++)o.probe[K].addScaledVector(G.sh.coefficients[K],ct);else if(G.isDirectionalLight){const K=n.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity*O),G.castShadow){const $=G.shadow,T=a.get(G);T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,o.directionalShadow[x]=T,o.directionalShadowMap[x]=ut,o.directionalShadowMatrix[x]=G.shadow.matrix,z++}o.directional[x]=K,x++}else if(G.isSpotLight){const K=n.get(G);K.position.setFromMatrixPosition(G.matrixWorld),K.color.copy(J).multiplyScalar(ct*O),K.distance=nt,K.coneCos=Math.cos(G.angle),K.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),K.decay=G.decay,o.spot[S]=K;const $=G.shadow;if(G.map&&(o.spotLightMap[it]=G.map,it++,$.updateMatrices(G),G.castShadow&&L++),o.spotLightMatrix[S]=$.matrix,G.castShadow){const T=a.get(G);T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,o.spotShadow[S]=T,o.spotShadowMap[S]=ut,F++}S++}else if(G.isRectAreaLight){const K=n.get(G);K.color.copy(J).multiplyScalar(ct),K.halfWidth.set(G.width*.5,0,0),K.halfHeight.set(0,G.height*.5,0),o.rectArea[A]=K,A++}else if(G.isPointLight){const K=n.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity*O),K.distance=G.distance,K.decay=G.decay,G.castShadow){const $=G.shadow,T=a.get(G);T.shadowBias=$.bias,T.shadowNormalBias=$.normalBias,T.shadowRadius=$.radius,T.shadowMapSize=$.mapSize,T.shadowCameraNear=$.camera.near,T.shadowCameraFar=$.camera.far,o.pointShadow[v]=T,o.pointShadowMap[v]=ut,o.pointShadowMatrix[v]=G.shadow.matrix,w++}o.point[v]=K,v++}else if(G.isHemisphereLight){const K=n.get(G);K.skyColor.copy(G.color).multiplyScalar(ct*O),K.groundColor.copy(G.groundColor).multiplyScalar(ct*O),o.hemi[D]=K,D++}}A>0&&(t.isWebGL2||l.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Tt.LTC_FLOAT_1,o.rectAreaLTC2=Tt.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Tt.LTC_HALF_1,o.rectAreaLTC2=Tt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=y,o.ambient[1]=M,o.ambient[2]=E;const k=o.hash;(k.directionalLength!==x||k.pointLength!==v||k.spotLength!==S||k.rectAreaLength!==A||k.hemiLength!==D||k.numDirectionalShadows!==z||k.numPointShadows!==w||k.numSpotShadows!==F||k.numSpotMaps!==it)&&(o.directional.length=x,o.spot.length=S,o.rectArea.length=A,o.point.length=v,o.hemi.length=D,o.directionalShadow.length=z,o.directionalShadowMap.length=z,o.pointShadow.length=w,o.pointShadowMap.length=w,o.spotShadow.length=F,o.spotShadowMap.length=F,o.directionalShadowMatrix.length=z,o.pointShadowMatrix.length=w,o.spotLightMatrix.length=F+it-L,o.spotLightMap.length=it,o.numSpotLightShadowsWithMaps=L,k.directionalLength=x,k.pointLength=v,k.spotLength=S,k.rectAreaLength=A,k.hemiLength=D,k.numDirectionalShadows=z,k.numPointShadows=w,k.numSpotShadows=F,k.numSpotMaps=it,o.version=JE++)}function p(g,_){let y=0,M=0,E=0,x=0,v=0;const S=_.matrixWorldInverse;for(let A=0,D=g.length;A<D;A++){const z=g[A];if(z.isDirectionalLight){const w=o.directional[y];w.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(u),w.direction.transformDirection(S),y++}else if(z.isSpotLight){const w=o.spot[E];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(u),w.direction.transformDirection(S),E++}else if(z.isRectAreaLight){const w=o.rectArea[x];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(S),f.identity(),h.copy(z.matrixWorld),h.premultiply(S),f.extractRotation(h),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),x++}else if(z.isPointLight){const w=o.point[M];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(S),M++}else if(z.isHemisphereLight){const w=o.hemi[v];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(S),v++}}}return{setup:m,setupView:p,state:o}}function bv(l,t){const n=new eA(l,t),a=[],o=[];function u(){a.length=0,o.length=0}function h(_){a.push(_)}function f(_){o.push(_)}function m(_){n.setup(a,_)}function p(_){n.setupView(a,_)}return{init:u,state:{lightsArray:a,shadowsArray:o,lights:n},setupLights:m,setupLightsView:p,pushLight:h,pushShadow:f}}function nA(l,t){let n=new WeakMap;function a(u,h=0){const f=n.get(u);let m;return f===void 0?(m=new bv(l,t),n.set(u,[m])):h>=f.length?(m=new bv(l,t),f.push(m)):m=f[h],m}function o(){n=new WeakMap}return{get:a,dispose:o}}class iA extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aA extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new X,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
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
}`;function oA(l,t,n){let a=new w_;const o=new Qt,u=new Qt,h=new Xe,f=new iA({depthPacking:eS}),m=new aA,p={},g=n.maxTextureSize,_={0:ci,1:Ns,2:Ia},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ui(E,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l_,this.render=function(z,w,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||z.length===0)return;const it=l.getRenderTarget(),L=l.getActiveCubeFace(),O=l.getActiveMipmapLevel(),k=l.state;k.setBlending(Va),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let vt=0,St=z.length;vt<St;vt++){const G=z[vt],J=G.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const ct=J.getFrameExtents();if(o.multiply(ct),u.copy(J.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/ct.x),o.x=u.x*ct.x,J.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/ct.y),o.y=u.y*ct.y,J.mapSize.y=u.y)),J.map===null){const ut=this.type!==$o?{minFilter:On,magFilter:On}:{};J.map=new Ar(o.x,o.y,ut),J.map.texture.name=G.name+".shadowMap",J.camera.updateProjectionMatrix()}l.setRenderTarget(J.map),l.clear();const nt=J.getViewportCount();for(let ut=0;ut<nt;ut++){const K=J.getViewport(ut);h.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),k.viewport(h),J.updateMatrices(G,ut),a=J.getFrustum(),D(w,F,J.camera,G,this.type)}J.isPointLightShadow!==!0&&this.type===$o&&S(J,F),J.needsUpdate=!1}v.needsUpdate=!1,l.setRenderTarget(it,L,O)};function S(z,w){const F=t.update(x);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ar(o.x,o.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,l.setRenderTarget(z.mapPass),l.clear(),l.renderBufferDirect(w,null,F,y,x,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,l.setRenderTarget(z.map),l.clear(),l.renderBufferDirect(w,null,F,M,x,null)}function A(z,w,F,it,L,O){let k=null;const vt=F.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(vt!==void 0?k=vt:k=F.isPointLight===!0?m:f,l.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const St=k.uuid,G=w.uuid;let J=p[St];J===void 0&&(J={},p[St]=J);let ct=J[G];ct===void 0&&(ct=k.clone(),J[G]=ct),k=ct}return k.visible=w.visible,k.wireframe=w.wireframe,O===$o?k.side=w.shadowSide!==null?w.shadowSide:w.side:k.side=w.shadowSide!==null?w.shadowSide:_[w.side],k.alphaMap=w.alphaMap,k.alphaTest=w.alphaTest,k.clipShadows=w.clipShadows,k.clippingPlanes=w.clippingPlanes,k.clipIntersection=w.clipIntersection,k.displacementMap=w.displacementMap,k.displacementScale=w.displacementScale,k.displacementBias=w.displacementBias,k.wireframeLinewidth=w.wireframeLinewidth,k.linewidth=w.linewidth,F.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(F.matrixWorld),k.nearDistance=it,k.farDistance=L),k}function D(z,w,F,it,L){if(z.visible===!1)return;if(z.layers.test(w.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===$o)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,z.matrixWorld);const vt=t.update(z),St=z.material;if(Array.isArray(St)){const G=vt.groups;for(let J=0,ct=G.length;J<ct;J++){const nt=G[J],ut=St[nt.materialIndex];if(ut&&ut.visible){const K=A(z,ut,it,F.near,F.far,L);l.renderBufferDirect(F,null,vt,K,z,nt)}}}else if(St.visible){const G=A(z,St,it,F.near,F.far,L);l.renderBufferDirect(F,null,vt,G,z,null)}}const k=z.children;for(let vt=0,St=k.length;vt<St;vt++)D(k[vt],w,F,it,L)}}function lA(l,t,n){const a=n.isWebGL2;function o(){let Z=!1;const gt=new Xe;let Mt=null;const zt=new Xe(0,0,0,0);return{setMask:function(Ft){Mt!==Ft&&!Z&&(l.colorMask(Ft,Ft,Ft,Ft),Mt=Ft)},setLocked:function(Ft){Z=Ft},setClear:function(Ft,fe,Ue,an,Mi){Mi===!0&&(Ft*=an,fe*=an,Ue*=an),gt.set(Ft,fe,Ue,an),zt.equals(gt)===!1&&(l.clearColor(Ft,fe,Ue,an),zt.copy(gt))},reset:function(){Z=!1,Mt=null,zt.set(-1,0,0,0)}}}function u(){let Z=!1,gt=null,Mt=null,zt=null;return{setTest:function(Ft){Ft?Ct(2929):st(2929)},setMask:function(Ft){gt!==Ft&&!Z&&(l.depthMask(Ft),gt=Ft)},setFunc:function(Ft){if(Mt!==Ft){switch(Ft){case wb:l.depthFunc(512);break;case Eb:l.depthFunc(519);break;case Ab:l.depthFunc(513);break;case ld:l.depthFunc(515);break;case Tb:l.depthFunc(514);break;case Cb:l.depthFunc(518);break;case Db:l.depthFunc(516);break;case Lb:l.depthFunc(517);break;default:l.depthFunc(515)}Mt=Ft}},setLocked:function(Ft){Z=Ft},setClear:function(Ft){zt!==Ft&&(l.clearDepth(Ft),zt=Ft)},reset:function(){Z=!1,gt=null,Mt=null,zt=null}}}function h(){let Z=!1,gt=null,Mt=null,zt=null,Ft=null,fe=null,Ue=null,an=null,Mi=null;return{setTest:function(De){Z||(De?Ct(2960):st(2960))},setMask:function(De){gt!==De&&!Z&&(l.stencilMask(De),gt=De)},setFunc:function(De,Pn,rn){(Mt!==De||zt!==Pn||Ft!==rn)&&(l.stencilFunc(De,Pn,rn),Mt=De,zt=Pn,Ft=rn)},setOp:function(De,Pn,rn){(fe!==De||Ue!==Pn||an!==rn)&&(l.stencilOp(De,Pn,rn),fe=De,Ue=Pn,an=rn)},setLocked:function(De){Z=De},setClear:function(De){Mi!==De&&(l.clearStencil(De),Mi=De)},reset:function(){Z=!1,gt=null,Mt=null,zt=null,Ft=null,fe=null,Ue=null,an=null,Mi=null}}}const f=new o,m=new u,p=new h,g=new WeakMap,_=new WeakMap;let y={},M={},E=new WeakMap,x=[],v=null,S=!1,A=null,D=null,z=null,w=null,F=null,it=null,L=null,O=!1,k=null,vt=null,St=null,G=null,J=null;const ct=l.getParameter(35661);let nt=!1,ut=0;const K=l.getParameter(7938);K.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(K)[1]),nt=ut>=1):K.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),nt=ut>=2);let $=null,T={};const j=l.getParameter(3088),V=l.getParameter(2978),I=new Xe().fromArray(j),Y=new Xe().fromArray(V);function pt(Z,gt,Mt){const zt=new Uint8Array(4),Ft=l.createTexture();l.bindTexture(Z,Ft),l.texParameteri(Z,10241,9728),l.texParameteri(Z,10240,9728);for(let fe=0;fe<Mt;fe++)l.texImage2D(gt+fe,0,6408,1,1,0,6408,5121,zt);return Ft}const U={};U[3553]=pt(3553,3553,1),U[34067]=pt(34067,34069,6),f.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Ct(2929),m.setFunc(ld),Kt(!1),Yt(d0),Ct(2884),ie(Va);function Ct(Z){y[Z]!==!0&&(l.enable(Z),y[Z]=!0)}function st(Z){y[Z]!==!1&&(l.disable(Z),y[Z]=!1)}function wt(Z,gt){return M[Z]!==gt?(l.bindFramebuffer(Z,gt),M[Z]=gt,a&&(Z===36009&&(M[36160]=gt),Z===36160&&(M[36009]=gt)),!0):!1}function _t(Z,gt){let Mt=x,zt=!1;if(Z)if(Mt=E.get(gt),Mt===void 0&&(Mt=[],E.set(gt,Mt)),Z.isWebGLMultipleRenderTargets){const Ft=Z.texture;if(Mt.length!==Ft.length||Mt[0]!==36064){for(let fe=0,Ue=Ft.length;fe<Ue;fe++)Mt[fe]=36064+fe;Mt.length=Ft.length,zt=!0}}else Mt[0]!==36064&&(Mt[0]=36064,zt=!0);else Mt[0]!==1029&&(Mt[0]=1029,zt=!0);zt&&(n.isWebGL2?l.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function Ot(Z){return v!==Z?(l.useProgram(Z),v=Z,!0):!1}const At={[Cs]:32774,[db]:32778,[pb]:32779};if(a)At[v0]=32775,At[_0]=32776;else{const Z=t.get("EXT_blend_minmax");Z!==null&&(At[v0]=Z.MIN_EXT,At[_0]=Z.MAX_EXT)}const Dt={[mb]:0,[gb]:1,[vb]:768,[u_]:770,[Mb]:776,[bb]:774,[yb]:772,[_b]:769,[c_]:771,[Sb]:775,[xb]:773};function ie(Z,gt,Mt,zt,Ft,fe,Ue,an){if(Z===Va){S===!0&&(st(3042),S=!1);return}if(S===!1&&(Ct(3042),S=!0),Z!==hb){if(Z!==A||an!==O){if((D!==Cs||F!==Cs)&&(l.blendEquation(32774),D=Cs,F=Cs),an)switch(Z){case Rs:l.blendFuncSeparate(1,771,1,771);break;case p0:l.blendFunc(1,1);break;case m0:l.blendFuncSeparate(0,769,0,1);break;case g0:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Rs:l.blendFuncSeparate(770,771,1,771);break;case p0:l.blendFunc(770,1);break;case m0:l.blendFuncSeparate(0,769,0,1);break;case g0:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}z=null,w=null,it=null,L=null,A=Z,O=an}return}Ft=Ft||gt,fe=fe||Mt,Ue=Ue||zt,(gt!==D||Ft!==F)&&(l.blendEquationSeparate(At[gt],At[Ft]),D=gt,F=Ft),(Mt!==z||zt!==w||fe!==it||Ue!==L)&&(l.blendFuncSeparate(Dt[Mt],Dt[zt],Dt[fe],Dt[Ue]),z=Mt,w=zt,it=fe,L=Ue),A=Z,O=null}function kt(Z,gt){Z.side===Ia?st(2884):Ct(2884);let Mt=Z.side===ci;gt&&(Mt=!Mt),Kt(Mt),Z.blending===Rs&&Z.transparent===!1?ie(Va):ie(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.premultipliedAlpha),m.setFunc(Z.depthFunc),m.setTest(Z.depthTest),m.setMask(Z.depthWrite),f.setMask(Z.colorWrite);const zt=Z.stencilWrite;p.setTest(zt),zt&&(p.setMask(Z.stencilWriteMask),p.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),p.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),re(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Ct(32926):st(32926)}function Kt(Z){k!==Z&&(Z?l.frontFace(2304):l.frontFace(2305),k=Z)}function Yt(Z){Z!==ub?(Ct(2884),Z!==vt&&(Z===d0?l.cullFace(1029):Z===cb?l.cullFace(1028):l.cullFace(1032))):st(2884),vt=Z}function Jt(Z){Z!==St&&(nt&&l.lineWidth(Z),St=Z)}function re(Z,gt,Mt){Z?(Ct(32823),(G!==gt||J!==Mt)&&(l.polygonOffset(gt,Mt),G=gt,J=Mt)):st(32823)}function me(Z){Z?Ct(3089):st(3089)}function Ve(Z){Z===void 0&&(Z=33984+ct-1),$!==Z&&(l.activeTexture(Z),$=Z)}function N(Z,gt,Mt){Mt===void 0&&($===null?Mt=33984+ct-1:Mt=$);let zt=T[Mt];zt===void 0&&(zt={type:void 0,texture:void 0},T[Mt]=zt),(zt.type!==Z||zt.texture!==gt)&&($!==Mt&&(l.activeTexture(Mt),$=Mt),l.bindTexture(Z,gt||U[Z]),zt.type=Z,zt.texture=gt)}function R(){const Z=T[$];Z!==void 0&&Z.type!==void 0&&(l.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Q(){try{l.compressedTexImage2D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function yt(){try{l.compressedTexImage3D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{l.texSubImage2D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Lt(){try{l.texSubImage3D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ht(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function H(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function at(){try{l.texStorage2D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(){try{l.texStorage3D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Nt(){try{l.texImage2D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Rt(){try{l.texImage3D.apply(l,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pt(Z){I.equals(Z)===!1&&(l.scissor(Z.x,Z.y,Z.z,Z.w),I.copy(Z))}function Gt(Z){Y.equals(Z)===!1&&(l.viewport(Z.x,Z.y,Z.z,Z.w),Y.copy(Z))}function Zt(Z,gt){let Mt=_.get(gt);Mt===void 0&&(Mt=new WeakMap,_.set(gt,Mt));let zt=Mt.get(Z);zt===void 0&&(zt=l.getUniformBlockIndex(gt,Z.name),Mt.set(Z,zt))}function qt(Z,gt){const zt=_.get(gt).get(Z);g.get(Z)!==zt&&(l.uniformBlockBinding(gt,zt,Z.__bindingPointIndex),g.set(Z,zt))}function be(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),a===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),y={},$=null,T={},M={},E=new WeakMap,x=[],v=null,S=!1,A=null,D=null,z=null,w=null,F=null,it=null,L=null,O=!1,k=null,vt=null,St=null,G=null,J=null,I.set(0,0,l.canvas.width,l.canvas.height),Y.set(0,0,l.canvas.width,l.canvas.height),f.reset(),m.reset(),p.reset()}return{buffers:{color:f,depth:m,stencil:p},enable:Ct,disable:st,bindFramebuffer:wt,drawBuffers:_t,useProgram:Ot,setBlending:ie,setMaterial:kt,setFlipSided:Kt,setCullFace:Yt,setLineWidth:Jt,setPolygonOffset:re,setScissorTest:me,activeTexture:Ve,bindTexture:N,unbindTexture:R,compressedTexImage2D:Q,compressedTexImage3D:yt,texImage2D:Nt,texImage3D:Rt,updateUBOMapping:Zt,uniformBlockBinding:qt,texStorage2D:at,texStorage3D:Ut,texSubImage2D:Et,texSubImage3D:Lt,compressedTexSubImage2D:Ht,compressedTexSubImage3D:H,scissor:Pt,viewport:Gt,reset:be}}function uA(l,t,n,a,o,u,h){const f=o.isWebGL2,m=o.maxTextures,p=o.maxCubemapSize,g=o.maxTextureSize,_=o.maxSamples,y=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,M=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),E=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,R){return S?new OffscreenCanvas(N,R):il("canvas")}function D(N,R,Q,yt){let Et=1;if((N.width>yt||N.height>yt)&&(Et=yt/Math.max(N.width,N.height)),Et<1||R===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Lt=R?nc:Math.floor,Ht=Lt(Et*N.width),H=Lt(Et*N.height);x===void 0&&(x=A(Ht,H));const at=Q?A(Ht,H):x;return at.width=Ht,at.height=H,at.getContext("2d").drawImage(N,0,0,Ht,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ht+"x"+H+")."),at}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function z(N){return md(N.width)&&md(N.height)}function w(N){return f?!1:N.wrapS!==xi||N.wrapT!==xi||N.minFilter!==On&&N.minFilter!==li}function F(N,R){return N.generateMipmaps&&R&&N.minFilter!==On&&N.minFilter!==li}function it(N){l.generateMipmap(N)}function L(N,R,Q,yt,Et=!1){if(f===!1)return R;if(N!==null){if(l[N]!==void 0)return l[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Lt=R;return R===6403&&(Q===5126&&(Lt=33326),Q===5131&&(Lt=33325),Q===5121&&(Lt=33321)),R===33319&&(Q===5126&&(Lt=33328),Q===5131&&(Lt=33327),Q===5121&&(Lt=33323)),R===6408&&(Q===5126&&(Lt=34836),Q===5131&&(Lt=34842),Q===5121&&(Lt=yt===Ie&&Et===!1?35907:32856),Q===32819&&(Lt=32854),Q===32820&&(Lt=32855)),(Lt===33325||Lt===33326||Lt===33327||Lt===33328||Lt===34842||Lt===34836)&&t.get("EXT_color_buffer_float"),Lt}function O(N,R,Q){return F(N,Q)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==li?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function k(N){return N===On||N===y0||N===x0?9728:9729}function vt(N){const R=N.target;R.removeEventListener("dispose",vt),G(R),R.isVideoTexture&&E.delete(R)}function St(N){const R=N.target;R.removeEventListener("dispose",St),ct(R)}function G(N){const R=a.get(N);if(R.__webglInit===void 0)return;const Q=N.source,yt=v.get(Q);if(yt){const Et=yt[R.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&J(N),Object.keys(yt).length===0&&v.delete(Q)}a.remove(N)}function J(N){const R=a.get(N);l.deleteTexture(R.__webglTexture);const Q=N.source,yt=v.get(Q);delete yt[R.__cacheKey],h.memory.textures--}function ct(N){const R=N.texture,Q=a.get(N),yt=a.get(R);if(yt.__webglTexture!==void 0&&(l.deleteTexture(yt.__webglTexture),h.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++)l.deleteFramebuffer(Q.__webglFramebuffer[Et]),Q.__webglDepthbuffer&&l.deleteRenderbuffer(Q.__webglDepthbuffer[Et]);else{if(l.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&l.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&l.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let Et=0;Et<Q.__webglColorRenderbuffer.length;Et++)Q.__webglColorRenderbuffer[Et]&&l.deleteRenderbuffer(Q.__webglColorRenderbuffer[Et]);Q.__webglDepthRenderbuffer&&l.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Et=0,Lt=R.length;Et<Lt;Et++){const Ht=a.get(R[Et]);Ht.__webglTexture&&(l.deleteTexture(Ht.__webglTexture),h.memory.textures--),a.remove(R[Et])}a.remove(R),a.remove(N)}let nt=0;function ut(){nt=0}function K(){const N=nt;return N>=m&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+m),nt+=1,N}function $(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.encoding),R.join()}function T(N,R){const Q=a.get(N);if(N.isVideoTexture&&me(N),N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){const yt=N.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(Q,N,R);return}}n.bindTexture(3553,Q.__webglTexture,33984+R)}function j(N,R){const Q=a.get(N);if(N.version>0&&Q.__version!==N.version){st(Q,N,R);return}n.bindTexture(35866,Q.__webglTexture,33984+R)}function V(N,R){const Q=a.get(N);if(N.version>0&&Q.__version!==N.version){st(Q,N,R);return}n.bindTexture(32879,Q.__webglTexture,33984+R)}function I(N,R){const Q=a.get(N);if(N.version>0&&Q.__version!==N.version){wt(Q,N,R);return}n.bindTexture(34067,Q.__webglTexture,33984+R)}const Y={[fd]:10497,[xi]:33071,[hd]:33648},pt={[On]:9728,[y0]:9984,[x0]:9986,[li]:9729,[Fb]:9985,[lc]:9987};function U(N,R,Q){if(Q?(l.texParameteri(N,10242,Y[R.wrapS]),l.texParameteri(N,10243,Y[R.wrapT]),(N===32879||N===35866)&&l.texParameteri(N,32882,Y[R.wrapR]),l.texParameteri(N,10240,pt[R.magFilter]),l.texParameteri(N,10241,pt[R.minFilter])):(l.texParameteri(N,10242,33071),l.texParameteri(N,10243,33071),(N===32879||N===35866)&&l.texParameteri(N,32882,33071),(R.wrapS!==xi||R.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(N,10240,k(R.magFilter)),l.texParameteri(N,10241,k(R.minFilter)),R.minFilter!==On&&R.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const yt=t.get("EXT_texture_filter_anisotropic");if(R.type===yr&&t.has("OES_texture_float_linear")===!1||f===!1&&R.type===nl&&t.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||a.get(R).__currentAnisotropy)&&(l.texParameterf(N,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy)}}function Ct(N,R){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",vt));const yt=R.source;let Et=v.get(yt);Et===void 0&&(Et={},v.set(yt,Et));const Lt=$(R);if(Lt!==N.__cacheKey){Et[Lt]===void 0&&(Et[Lt]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),Et[Lt].usedTimes++;const Ht=Et[N.__cacheKey];Ht!==void 0&&(Et[N.__cacheKey].usedTimes--,Ht.usedTimes===0&&J(R)),N.__cacheKey=Lt,N.__webglTexture=Et[Lt].texture}return Q}function st(N,R,Q){let yt=3553;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(yt=35866),R.isData3DTexture&&(yt=32879);const Et=Ct(N,R),Lt=R.source;n.bindTexture(yt,N.__webglTexture,33984+Q);const Ht=a.get(Lt);if(Lt.version!==Ht.__version||Et===!0){n.activeTexture(33984+Q),l.pixelStorei(37440,R.flipY),l.pixelStorei(37441,R.premultiplyAlpha),l.pixelStorei(3317,R.unpackAlignment),l.pixelStorei(37443,0);const H=w(R)&&z(R.image)===!1;let at=D(R.image,H,!1,g);at=Ve(R,at);const Ut=z(at)||f,Nt=u.convert(R.format,R.encoding);let Rt=u.convert(R.type),Pt=L(R.internalFormat,Nt,Rt,R.encoding,R.isVideoTexture);U(yt,R,Ut);let Gt;const Zt=R.mipmaps,qt=f&&R.isVideoTexture!==!0,be=Ht.__version===void 0||Et===!0,Z=O(R,at,Ut);if(R.isDepthTexture)Pt=6402,f?R.type===yr?Pt=36012:R.type===_r?Pt=33190:R.type===zs?Pt=35056:Pt=33189:R.type===yr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===br&&Pt===6402&&R.type!==d_&&R.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=_r,Rt=u.convert(R.type)),R.format===Hs&&Pt===6402&&(Pt=34041,R.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=zs,Rt=u.convert(R.type))),be&&(qt?n.texStorage2D(3553,1,Pt,at.width,at.height):n.texImage2D(3553,0,Pt,at.width,at.height,0,Nt,Rt,null));else if(R.isDataTexture)if(Zt.length>0&&Ut){qt&&be&&n.texStorage2D(3553,Z,Pt,Zt[0].width,Zt[0].height);for(let gt=0,Mt=Zt.length;gt<Mt;gt++)Gt=Zt[gt],qt?n.texSubImage2D(3553,gt,0,0,Gt.width,Gt.height,Nt,Rt,Gt.data):n.texImage2D(3553,gt,Pt,Gt.width,Gt.height,0,Nt,Rt,Gt.data);R.generateMipmaps=!1}else qt?(be&&n.texStorage2D(3553,Z,Pt,at.width,at.height),n.texSubImage2D(3553,0,0,0,at.width,at.height,Nt,Rt,at.data)):n.texImage2D(3553,0,Pt,at.width,at.height,0,Nt,Rt,at.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qt&&be&&n.texStorage3D(35866,Z,Pt,Zt[0].width,Zt[0].height,at.depth);for(let gt=0,Mt=Zt.length;gt<Mt;gt++)Gt=Zt[gt],R.format!==bi?Nt!==null?qt?n.compressedTexSubImage3D(35866,gt,0,0,0,Gt.width,Gt.height,at.depth,Nt,Gt.data,0,0):n.compressedTexImage3D(35866,gt,Pt,Gt.width,Gt.height,at.depth,0,Gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?n.texSubImage3D(35866,gt,0,0,0,Gt.width,Gt.height,at.depth,Nt,Rt,Gt.data):n.texImage3D(35866,gt,Pt,Gt.width,Gt.height,at.depth,0,Nt,Rt,Gt.data)}else{qt&&be&&n.texStorage2D(3553,Z,Pt,Zt[0].width,Zt[0].height);for(let gt=0,Mt=Zt.length;gt<Mt;gt++)Gt=Zt[gt],R.format!==bi?Nt!==null?qt?n.compressedTexSubImage2D(3553,gt,0,0,Gt.width,Gt.height,Nt,Gt.data):n.compressedTexImage2D(3553,gt,Pt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?n.texSubImage2D(3553,gt,0,0,Gt.width,Gt.height,Nt,Rt,Gt.data):n.texImage2D(3553,gt,Pt,Gt.width,Gt.height,0,Nt,Rt,Gt.data)}else if(R.isDataArrayTexture)qt?(be&&n.texStorage3D(35866,Z,Pt,at.width,at.height,at.depth),n.texSubImage3D(35866,0,0,0,0,at.width,at.height,at.depth,Nt,Rt,at.data)):n.texImage3D(35866,0,Pt,at.width,at.height,at.depth,0,Nt,Rt,at.data);else if(R.isData3DTexture)qt?(be&&n.texStorage3D(32879,Z,Pt,at.width,at.height,at.depth),n.texSubImage3D(32879,0,0,0,0,at.width,at.height,at.depth,Nt,Rt,at.data)):n.texImage3D(32879,0,Pt,at.width,at.height,at.depth,0,Nt,Rt,at.data);else if(R.isFramebufferTexture){if(be)if(qt)n.texStorage2D(3553,Z,Pt,at.width,at.height);else{let gt=at.width,Mt=at.height;for(let zt=0;zt<Z;zt++)n.texImage2D(3553,zt,Pt,gt,Mt,0,Nt,Rt,null),gt>>=1,Mt>>=1}}else if(Zt.length>0&&Ut){qt&&be&&n.texStorage2D(3553,Z,Pt,Zt[0].width,Zt[0].height);for(let gt=0,Mt=Zt.length;gt<Mt;gt++)Gt=Zt[gt],qt?n.texSubImage2D(3553,gt,0,0,Nt,Rt,Gt):n.texImage2D(3553,gt,Pt,Nt,Rt,Gt);R.generateMipmaps=!1}else qt?(be&&n.texStorage2D(3553,Z,Pt,at.width,at.height),n.texSubImage2D(3553,0,0,0,Nt,Rt,at)):n.texImage2D(3553,0,Pt,Nt,Rt,at);F(R,Ut)&&it(yt),Ht.__version=Lt.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function wt(N,R,Q){if(R.image.length!==6)return;const yt=Ct(N,R),Et=R.source;n.bindTexture(34067,N.__webglTexture,33984+Q);const Lt=a.get(Et);if(Et.version!==Lt.__version||yt===!0){n.activeTexture(33984+Q),l.pixelStorei(37440,R.flipY),l.pixelStorei(37441,R.premultiplyAlpha),l.pixelStorei(3317,R.unpackAlignment),l.pixelStorei(37443,0);const Ht=R.isCompressedTexture||R.image[0].isCompressedTexture,H=R.image[0]&&R.image[0].isDataTexture,at=[];for(let gt=0;gt<6;gt++)!Ht&&!H?at[gt]=D(R.image[gt],!1,!0,p):at[gt]=H?R.image[gt].image:R.image[gt],at[gt]=Ve(R,at[gt]);const Ut=at[0],Nt=z(Ut)||f,Rt=u.convert(R.format,R.encoding),Pt=u.convert(R.type),Gt=L(R.internalFormat,Rt,Pt,R.encoding),Zt=f&&R.isVideoTexture!==!0,qt=Lt.__version===void 0||yt===!0;let be=O(R,Ut,Nt);U(34067,R,Nt);let Z;if(Ht){Zt&&qt&&n.texStorage2D(34067,be,Gt,Ut.width,Ut.height);for(let gt=0;gt<6;gt++){Z=at[gt].mipmaps;for(let Mt=0;Mt<Z.length;Mt++){const zt=Z[Mt];R.format!==bi?Rt!==null?Zt?n.compressedTexSubImage2D(34069+gt,Mt,0,0,zt.width,zt.height,Rt,zt.data):n.compressedTexImage2D(34069+gt,Mt,Gt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?n.texSubImage2D(34069+gt,Mt,0,0,zt.width,zt.height,Rt,Pt,zt.data):n.texImage2D(34069+gt,Mt,Gt,zt.width,zt.height,0,Rt,Pt,zt.data)}}}else{Z=R.mipmaps,Zt&&qt&&(Z.length>0&&be++,n.texStorage2D(34067,be,Gt,at[0].width,at[0].height));for(let gt=0;gt<6;gt++)if(H){Zt?n.texSubImage2D(34069+gt,0,0,0,at[gt].width,at[gt].height,Rt,Pt,at[gt].data):n.texImage2D(34069+gt,0,Gt,at[gt].width,at[gt].height,0,Rt,Pt,at[gt].data);for(let Mt=0;Mt<Z.length;Mt++){const Ft=Z[Mt].image[gt].image;Zt?n.texSubImage2D(34069+gt,Mt+1,0,0,Ft.width,Ft.height,Rt,Pt,Ft.data):n.texImage2D(34069+gt,Mt+1,Gt,Ft.width,Ft.height,0,Rt,Pt,Ft.data)}}else{Zt?n.texSubImage2D(34069+gt,0,0,0,Rt,Pt,at[gt]):n.texImage2D(34069+gt,0,Gt,Rt,Pt,at[gt]);for(let Mt=0;Mt<Z.length;Mt++){const zt=Z[Mt];Zt?n.texSubImage2D(34069+gt,Mt+1,0,0,Rt,Pt,zt.image[gt]):n.texImage2D(34069+gt,Mt+1,Gt,Rt,Pt,zt.image[gt])}}}F(R,Nt)&&it(34067),Lt.__version=Et.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function _t(N,R,Q,yt,Et){const Lt=u.convert(Q.format,Q.encoding),Ht=u.convert(Q.type),H=L(Q.internalFormat,Lt,Ht,Q.encoding);a.get(R).__hasExternalTextures||(Et===32879||Et===35866?n.texImage3D(Et,0,H,R.width,R.height,R.depth,0,Lt,Ht,null):n.texImage2D(Et,0,H,R.width,R.height,0,Lt,Ht,null)),n.bindFramebuffer(36160,N),re(R)?y.framebufferTexture2DMultisampleEXT(36160,yt,Et,a.get(Q).__webglTexture,0,Jt(R)):(Et===3553||Et>=34069&&Et<=34074)&&l.framebufferTexture2D(36160,yt,Et,a.get(Q).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ot(N,R,Q){if(l.bindRenderbuffer(36161,N),R.depthBuffer&&!R.stencilBuffer){let yt=33189;if(Q||re(R)){const Et=R.depthTexture;Et&&Et.isDepthTexture&&(Et.type===yr?yt=36012:Et.type===_r&&(yt=33190));const Lt=Jt(R);re(R)?y.renderbufferStorageMultisampleEXT(36161,Lt,yt,R.width,R.height):l.renderbufferStorageMultisample(36161,Lt,yt,R.width,R.height)}else l.renderbufferStorage(36161,yt,R.width,R.height);l.framebufferRenderbuffer(36160,36096,36161,N)}else if(R.depthBuffer&&R.stencilBuffer){const yt=Jt(R);Q&&re(R)===!1?l.renderbufferStorageMultisample(36161,yt,35056,R.width,R.height):re(R)?y.renderbufferStorageMultisampleEXT(36161,yt,35056,R.width,R.height):l.renderbufferStorage(36161,34041,R.width,R.height),l.framebufferRenderbuffer(36160,33306,36161,N)}else{const yt=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Et=0;Et<yt.length;Et++){const Lt=yt[Et],Ht=u.convert(Lt.format,Lt.encoding),H=u.convert(Lt.type),at=L(Lt.internalFormat,Ht,H,Lt.encoding),Ut=Jt(R);Q&&re(R)===!1?l.renderbufferStorageMultisample(36161,Ut,at,R.width,R.height):re(R)?y.renderbufferStorageMultisampleEXT(36161,Ut,at,R.width,R.height):l.renderbufferStorage(36161,at,R.width,R.height)}}l.bindRenderbuffer(36161,null)}function At(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),T(R.depthTexture,0);const yt=a.get(R.depthTexture).__webglTexture,Et=Jt(R);if(R.depthTexture.format===br)re(R)?y.framebufferTexture2DMultisampleEXT(36160,36096,3553,yt,0,Et):l.framebufferTexture2D(36160,36096,3553,yt,0);else if(R.depthTexture.format===Hs)re(R)?y.framebufferTexture2DMultisampleEXT(36160,33306,3553,yt,0,Et):l.framebufferTexture2D(36160,33306,3553,yt,0);else throw new Error("Unknown depthTexture format")}function Dt(N){const R=a.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");At(R.__webglFramebuffer,N)}else if(Q){R.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)n.bindFramebuffer(36160,R.__webglFramebuffer[yt]),R.__webglDepthbuffer[yt]=l.createRenderbuffer(),Ot(R.__webglDepthbuffer[yt],N,!1)}else n.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=l.createRenderbuffer(),Ot(R.__webglDepthbuffer,N,!1);n.bindFramebuffer(36160,null)}function ie(N,R,Q){const yt=a.get(N);R!==void 0&&_t(yt.__webglFramebuffer,N,N.texture,36064,3553),Q!==void 0&&Dt(N)}function kt(N){const R=N.texture,Q=a.get(N),yt=a.get(R);N.addEventListener("dispose",St),N.isWebGLMultipleRenderTargets!==!0&&(yt.__webglTexture===void 0&&(yt.__webglTexture=l.createTexture()),yt.__version=R.version,h.memory.textures++);const Et=N.isWebGLCubeRenderTarget===!0,Lt=N.isWebGLMultipleRenderTargets===!0,Ht=z(N)||f;if(Et){Q.__webglFramebuffer=[];for(let H=0;H<6;H++)Q.__webglFramebuffer[H]=l.createFramebuffer()}else{if(Q.__webglFramebuffer=l.createFramebuffer(),Lt)if(o.drawBuffers){const H=N.texture;for(let at=0,Ut=H.length;at<Ut;at++){const Nt=a.get(H[at]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=l.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&N.samples>0&&re(N)===!1){const H=Lt?R:[R];Q.__webglMultisampledFramebuffer=l.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer);for(let at=0;at<H.length;at++){const Ut=H[at];Q.__webglColorRenderbuffer[at]=l.createRenderbuffer(),l.bindRenderbuffer(36161,Q.__webglColorRenderbuffer[at]);const Nt=u.convert(Ut.format,Ut.encoding),Rt=u.convert(Ut.type),Pt=L(Ut.internalFormat,Nt,Rt,Ut.encoding,N.isXRRenderTarget===!0),Gt=Jt(N);l.renderbufferStorageMultisample(36161,Gt,Pt,N.width,N.height),l.framebufferRenderbuffer(36160,36064+at,36161,Q.__webglColorRenderbuffer[at])}l.bindRenderbuffer(36161,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=l.createRenderbuffer(),Ot(Q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(36160,null)}}if(Et){n.bindTexture(34067,yt.__webglTexture),U(34067,R,Ht);for(let H=0;H<6;H++)_t(Q.__webglFramebuffer[H],N,R,36064,34069+H);F(R,Ht)&&it(34067),n.unbindTexture()}else if(Lt){const H=N.texture;for(let at=0,Ut=H.length;at<Ut;at++){const Nt=H[at],Rt=a.get(Nt);n.bindTexture(3553,Rt.__webglTexture),U(3553,Nt,Ht),_t(Q.__webglFramebuffer,N,Nt,36064+at,3553),F(Nt,Ht)&&it(3553)}n.unbindTexture()}else{let H=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(f?H=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(H,yt.__webglTexture),U(H,R,Ht),_t(Q.__webglFramebuffer,N,R,36064,H),F(R,Ht)&&it(H),n.unbindTexture()}N.depthBuffer&&Dt(N)}function Kt(N){const R=z(N)||f,Q=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let yt=0,Et=Q.length;yt<Et;yt++){const Lt=Q[yt];if(F(Lt,R)){const Ht=N.isWebGLCubeRenderTarget?34067:3553,H=a.get(Lt).__webglTexture;n.bindTexture(Ht,H),it(Ht),n.unbindTexture()}}}function Yt(N){if(f&&N.samples>0&&re(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],Q=N.width,yt=N.height;let Et=16384;const Lt=[],Ht=N.stencilBuffer?33306:36096,H=a.get(N),at=N.isWebGLMultipleRenderTargets===!0;if(at)for(let Ut=0;Ut<R.length;Ut++)n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Ut,36161,null),n.bindFramebuffer(36160,H.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Ut,3553,null,0);n.bindFramebuffer(36008,H.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,H.__webglFramebuffer);for(let Ut=0;Ut<R.length;Ut++){Lt.push(36064+Ut),N.depthBuffer&&Lt.push(Ht);const Nt=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(Nt===!1&&(N.depthBuffer&&(Et|=256),N.stencilBuffer&&(Et|=1024)),at&&l.framebufferRenderbuffer(36008,36064,36161,H.__webglColorRenderbuffer[Ut]),Nt===!0&&(l.invalidateFramebuffer(36008,[Ht]),l.invalidateFramebuffer(36009,[Ht])),at){const Rt=a.get(R[Ut]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,Rt,0)}l.blitFramebuffer(0,0,Q,yt,0,0,Q,yt,Et,9728),M&&l.invalidateFramebuffer(36008,Lt)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),at)for(let Ut=0;Ut<R.length;Ut++){n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Ut,36161,H.__webglColorRenderbuffer[Ut]);const Nt=a.get(R[Ut]).__webglTexture;n.bindFramebuffer(36160,H.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Ut,3553,Nt,0)}n.bindFramebuffer(36009,H.__webglMultisampledFramebuffer)}}function Jt(N){return Math.min(_,N.samples)}function re(N){const R=a.get(N);return f&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function me(N){const R=h.render.frame;E.get(N)!==R&&(E.set(N,R),N.update())}function Ve(N,R){const Q=N.encoding,yt=N.format,Et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===pd||Q!==Er&&(Q===Ie?f===!1?t.has("EXT_sRGB")===!0&&yt===bi?(N.format=pd,N.minFilter=li,N.generateMipmaps=!1):R=g_.sRGBToLinear(R):(yt!==bi||Et!==wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Q)),R}this.allocateTextureUnit=K,this.resetTextureUnits=ut,this.setTexture2D=T,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=I,this.rebindTextures=ie,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=re}function cA(l,t,n){const a=n.isWebGL2;function o(u,h=null){let f;if(u===wr)return 5121;if(u===Vb)return 32819;if(u===kb)return 32820;if(u===Hb)return 5120;if(u===Gb)return 5122;if(u===d_)return 5123;if(u===Ib)return 5124;if(u===_r)return 5125;if(u===yr)return 5126;if(u===nl)return a?5131:(f=t.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(u===Wb)return 6406;if(u===bi)return 6408;if(u===Yb)return 6409;if(u===qb)return 6410;if(u===br)return 6402;if(u===Hs)return 34041;if(u===jb)return 6403;if(u===Xb)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(u===pd)return f=t.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(u===Zb)return 36244;if(u===$b)return 33319;if(u===Qb)return 33320;if(u===Kb)return 36249;if(u===_h||u===yh||u===xh||u===bh)if(h===Ie)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(u===_h)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===yh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===xh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===bh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(u===_h)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===yh)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===xh)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===bh)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===b0||u===S0||u===M0||u===w0)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(u===b0)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===S0)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===M0)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===w0)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===Jb)return f=t.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===E0||u===A0)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(u===E0)return h===Ie?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(u===A0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===T0||u===C0||u===D0||u===L0||u===R0||u===z0||u===O0||u===U0||u===P0||u===N0||u===B0||u===F0||u===H0||u===G0)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(u===T0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===C0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===D0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===L0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===R0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===z0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===O0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===U0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===P0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===N0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===B0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===F0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===H0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===G0)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===I0)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(u===I0)return h===Ie?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return u===zs?a?34042:(f=t.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):l[u]!==void 0?l[u]:null}return{convert:o}}class fA extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fu extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hA={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,u=null,h=null;const f=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const x of t.hand.values()){const v=n.getJointPose(x,a);if(p.joints[x.jointName]===void 0){const A=new Fu;A.matrixAutoUpdate=!1,A.visible=!1,p.joints[x.jointName]=A,p.add(A)}const S=p.joints[x.jointName];v!==null&&(S.matrix.fromArray(v.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=v.radius),S.visible=v!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(hA)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}}class dA extends fi{constructor(t,n,a,o,u,h,f,m,p,g){if(g=g!==void 0?g:br,g!==br&&g!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===br&&(a=_r),a===void 0&&g===Hs&&(a=zs),super(null,o,u,h,f,m,g,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=f!==void 0?f:On,this.minFilter=m!==void 0?m:On,this.flipY=!1,this.generateMipmaps=!1}}class pA extends Cr{constructor(t,n){super();const a=this;let o=null,u=1,h=null,f="local-floor",m=null,p=null,g=null,_=null,y=null,M=null;const E=n.getContextAttributes();let x=null,v=null;const S=[],A=[],D=new Yn;D.layers.enable(1),D.viewport=new Xe;const z=new Yn;z.layers.enable(2),z.viewport=new Xe;const w=[D,z],F=new fA;F.layers.enable(1),F.layers.enable(2);let it=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let T=S[$];return T===void 0&&(T=new qh,S[$]=T),T.getTargetRaySpace()},this.getControllerGrip=function($){let T=S[$];return T===void 0&&(T=new qh,S[$]=T),T.getGripSpace()},this.getHand=function($){let T=S[$];return T===void 0&&(T=new qh,S[$]=T),T.getHandSpace()};function O($){const T=A.indexOf($.inputSource);if(T===-1)return;const j=S[T];j!==void 0&&j.dispatchEvent({type:$.type,data:$.inputSource})}function k(){o.removeEventListener("select",O),o.removeEventListener("selectstart",O),o.removeEventListener("selectend",O),o.removeEventListener("squeeze",O),o.removeEventListener("squeezestart",O),o.removeEventListener("squeezeend",O),o.removeEventListener("end",k),o.removeEventListener("inputsourceschange",vt);for(let $=0;$<S.length;$++){const T=A[$];T!==null&&(A[$]=null,S[$].disconnect(T))}it=null,L=null,t.setRenderTarget(x),y=null,_=null,g=null,o=null,v=null,K.stop(),a.isPresenting=!1,a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",O),o.addEventListener("selectstart",O),o.addEventListener("selectend",O),o.addEventListener("squeeze",O),o.addEventListener("squeezestart",O),o.addEventListener("squeezeend",O),o.addEventListener("end",k),o.addEventListener("inputsourceschange",vt),E.xrCompatible!==!0&&await n.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const T={antialias:o.renderState.layers===void 0?E.antialias:!0,alpha:E.alpha,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(o,n,T),o.updateRenderState({baseLayer:y}),v=new Ar(y.framebufferWidth,y.framebufferHeight,{format:bi,type:wr,encoding:t.outputEncoding,stencilBuffer:E.stencil})}else{let T=null,j=null,V=null;E.depth&&(V=E.stencil?35056:33190,T=E.stencil?Hs:br,j=E.stencil?zs:_r);const I={colorFormat:32856,depthFormat:V,scaleFactor:u};g=new XRWebGLBinding(o,n),_=g.createProjectionLayer(I),o.updateRenderState({layers:[_]}),v=new Ar(_.textureWidth,_.textureHeight,{format:bi,type:wr,depthTexture:new dA(_.textureWidth,_.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,T),stencilBuffer:E.stencil,encoding:t.outputEncoding,samples:E.antialias?4:0});const Y=t.properties.get(v);Y.__ignoreDepthValues=_.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),m=null,h=await o.requestReferenceSpace(f),K.setContext(o),K.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}};function vt($){for(let T=0;T<$.removed.length;T++){const j=$.removed[T],V=A.indexOf(j);V>=0&&(A[V]=null,S[V].dispatchEvent({type:"disconnected",data:j}))}for(let T=0;T<$.added.length;T++){const j=$.added[T];let V=A.indexOf(j);if(V===-1){for(let Y=0;Y<S.length;Y++)if(Y>=A.length){A.push(j),V=Y;break}else if(A[Y]===null){A[Y]=j,V=Y;break}if(V===-1)break}const I=S[V];I&&I.dispatchEvent({type:"connected",data:j})}}const St=new X,G=new X;function J($,T,j){St.setFromMatrixPosition(T.matrixWorld),G.setFromMatrixPosition(j.matrixWorld);const V=St.distanceTo(G),I=T.projectionMatrix.elements,Y=j.projectionMatrix.elements,pt=I[14]/(I[10]-1),U=I[14]/(I[10]+1),Ct=(I[9]+1)/I[5],st=(I[9]-1)/I[5],wt=(I[8]-1)/I[0],_t=(Y[8]+1)/Y[0],Ot=pt*wt,At=pt*_t,Dt=V/(-wt+_t),ie=Dt*-wt;T.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ie),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const kt=pt+Dt,Kt=U+Dt,Yt=Ot-ie,Jt=At+(V-ie),re=Ct*U/Kt*kt,me=st*U/Kt*kt;$.projectionMatrix.makePerspective(Yt,Jt,re,me,kt,Kt)}function ct($,T){T===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(T.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;F.near=z.near=D.near=$.near,F.far=z.far=D.far=$.far,(it!==F.near||L!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),it=F.near,L=F.far);const T=$.parent,j=F.cameras;ct(F,T);for(let I=0;I<j.length;I++)ct(j[I],T);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),$.matrix.copy(F.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const V=$.children;for(let I=0,Y=V.length;I<Y;I++)V[I].updateMatrixWorld(!0);j.length===2?J(F,D,z):F.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(_!==null)return _.fixedFoveation;if(y!==null)return y.fixedFoveation},this.setFoveation=function($){_!==null&&(_.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)};let nt=null;function ut($,T){if(p=T.getViewerPose(m||h),M=T,p!==null){const j=p.views;y!==null&&(t.setRenderTargetFramebuffer(v,y.framebuffer),t.setRenderTarget(v));let V=!1;j.length!==F.cameras.length&&(F.cameras.length=0,V=!0);for(let I=0;I<j.length;I++){const Y=j[I];let pt=null;if(y!==null)pt=y.getViewport(Y);else{const Ct=g.getViewSubImage(_,Y);pt=Ct.viewport,I===0&&(t.setRenderTargetTextures(v,Ct.colorTexture,_.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(v))}let U=w[I];U===void 0&&(U=new Yn,U.layers.enable(I),U.viewport=new Xe,w[I]=U),U.matrix.fromArray(Y.transform.matrix),U.projectionMatrix.fromArray(Y.projectionMatrix),U.viewport.set(pt.x,pt.y,pt.width,pt.height),I===0&&F.matrix.copy(U.matrix),V===!0&&F.cameras.push(U)}}for(let j=0;j<S.length;j++){const V=A[j],I=S[j];V!==null&&I!==void 0&&I.update(V,T,m||h)}nt&&nt($,T),M=null}const K=new E_;K.setAnimationLoop(ut),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}function mA(l,t){function n(x,v){x.fogColor.value.copy(v.color),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function a(x,v,S,A,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(x,v):v.isMeshToonMaterial?(o(x,v),g(x,v)):v.isMeshPhongMaterial?(o(x,v),p(x,v)):v.isMeshStandardMaterial?(o(x,v),_(x,v),v.isMeshPhysicalMaterial&&y(x,v,D)):v.isMeshMatcapMaterial?(o(x,v),M(x,v)):v.isMeshDepthMaterial?o(x,v):v.isMeshDistanceMaterial?(o(x,v),E(x,v)):v.isMeshNormalMaterial?o(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?f(x,v,S,A):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map),v.alphaMap&&(x.alphaMap.value=v.alphaMap),v.bumpMap&&(x.bumpMap.value=v.bumpMap,x.bumpScale.value=v.bumpScale,v.side===ci&&(x.bumpScale.value*=-1)),v.displacementMap&&(x.displacementMap.value=v.displacementMap,x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap),v.normalMap&&(x.normalMap.value=v.normalMap,x.normalScale.value.copy(v.normalScale),v.side===ci&&x.normalScale.value.negate()),v.specularMap&&(x.specularMap.value=v.specularMap),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const S=t.get(v).envMap;if(S&&(x.envMap.value=S,x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const z=l.physicallyCorrectLights!==!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*z}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity);let A;v.map?A=v.map:v.specularMap?A=v.specularMap:v.displacementMap?A=v.displacementMap:v.normalMap?A=v.normalMap:v.bumpMap?A=v.bumpMap:v.roughnessMap?A=v.roughnessMap:v.metalnessMap?A=v.metalnessMap:v.alphaMap?A=v.alphaMap:v.emissiveMap?A=v.emissiveMap:v.clearcoatMap?A=v.clearcoatMap:v.clearcoatNormalMap?A=v.clearcoatNormalMap:v.clearcoatRoughnessMap?A=v.clearcoatRoughnessMap:v.iridescenceMap?A=v.iridescenceMap:v.iridescenceThicknessMap?A=v.iridescenceThicknessMap:v.specularIntensityMap?A=v.specularIntensityMap:v.specularColorMap?A=v.specularColorMap:v.transmissionMap?A=v.transmissionMap:v.thicknessMap?A=v.thicknessMap:v.sheenColorMap?A=v.sheenColorMap:v.sheenRoughnessMap&&(A=v.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),x.uvTransform.value.copy(A.matrix));let D;v.aoMap?D=v.aoMap:v.lightMap&&(D=v.lightMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),x.uv2Transform.value.copy(D.matrix))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,S,A){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*S,x.scale.value=A*.5,v.map&&(x.map.value=v.map),v.alphaMap&&(x.alphaMap.value=v.alphaMap),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let D;v.map?D=v.map:v.alphaMap&&(D=v.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),x.uvTransform.value.copy(D.matrix))}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map),v.alphaMap&&(x.alphaMap.value=v.alphaMap),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let S;v.map?S=v.map:v.alphaMap&&(S=v.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),x.uvTransform.value.copy(S.matrix))}function p(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.roughness.value=v.roughness,x.metalness.value=v.metalness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap),t.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,S){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),x.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===ci&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap)}function M(x,v){v.matcap&&(x.matcap.value=v.matcap)}function E(x,v){x.referencePosition.value.copy(v.referencePosition),x.nearDistance.value=v.nearDistance,x.farDistance.value=v.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function gA(l,t,n,a){let o={},u={},h=[];const f=n.isWebGL2?l.getParameter(35375):0;function m(A,D){const z=D.program;a.uniformBlockBinding(A,z)}function p(A,D){let z=o[A.id];z===void 0&&(E(A),z=g(A),o[A.id]=z,A.addEventListener("dispose",v));const w=D.program;a.updateUBOMapping(A,w);const F=t.render.frame;u[A.id]!==F&&(y(A),u[A.id]=F)}function g(A){const D=_();A.__bindingPointIndex=D;const z=l.createBuffer(),w=A.__size,F=A.usage;return l.bindBuffer(35345,z),l.bufferData(35345,w,F),l.bindBuffer(35345,null),l.bindBufferBase(35345,D,z),z}function _(){for(let A=0;A<f;A++)if(h.indexOf(A)===-1)return h.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const D=o[A.id],z=A.uniforms,w=A.__cache;l.bindBuffer(35345,D);for(let F=0,it=z.length;F<it;F++){const L=z[F];if(M(L,F,w)===!0){const O=L.value,k=L.__offset;typeof O=="number"?(L.__data[0]=O,l.bufferSubData(35345,k,L.__data)):(L.value.isMatrix3?(L.__data[0]=L.value.elements[0],L.__data[1]=L.value.elements[1],L.__data[2]=L.value.elements[2],L.__data[3]=L.value.elements[0],L.__data[4]=L.value.elements[3],L.__data[5]=L.value.elements[4],L.__data[6]=L.value.elements[5],L.__data[7]=L.value.elements[0],L.__data[8]=L.value.elements[6],L.__data[9]=L.value.elements[7],L.__data[10]=L.value.elements[8],L.__data[11]=L.value.elements[0]):O.toArray(L.__data),l.bufferSubData(35345,k,L.__data))}}l.bindBuffer(35345,null)}function M(A,D,z){const w=A.value;if(z[D]===void 0)return typeof w=="number"?z[D]=w:z[D]=w.clone(),!0;if(typeof w=="number"){if(z[D]!==w)return z[D]=w,!0}else{const F=z[D];if(F.equals(w)===!1)return F.copy(w),!0}return!1}function E(A){const D=A.uniforms;let z=0;const w=16;let F=0;for(let it=0,L=D.length;it<L;it++){const O=D[it],k=x(O);if(O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=z,it>0){F=z%w;const vt=w-F;F!==0&&vt-k.boundary<0&&(z+=w-F,O.__offset=z)}z+=k.storage}return F=z%w,F>0&&(z+=w-F),A.__size=z,A.__cache={},this}function x(A){const D=A.value,z={boundary:0,storage:0};return typeof D=="number"?(z.boundary=4,z.storage=4):D.isVector2?(z.boundary=8,z.storage=8):D.isVector3||D.isColor?(z.boundary=16,z.storage=12):D.isVector4?(z.boundary=16,z.storage=16):D.isMatrix3?(z.boundary=48,z.storage=48):D.isMatrix4?(z.boundary=64,z.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),z}function v(A){const D=A.target;D.removeEventListener("dispose",v);const z=h.indexOf(D.__bindingPointIndex);h.splice(z,1),l.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function S(){for(const A in o)l.deleteBuffer(o[A]);h=[],o={},u={}}return{bind:m,update:p,dispose:S}}function vA(){const l=il("canvas");return l.style.display="block",l}function L_(l={}){this.isWebGLRenderer=!0;const t=l.canvas!==void 0?l.canvas:vA(),n=l.context!==void 0?l.context:null,a=l.depth!==void 0?l.depth:!0,o=l.stencil!==void 0?l.stencil:!0,u=l.antialias!==void 0?l.antialias:!1,h=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,f=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,m=l.powerPreference!==void 0?l.powerPreference:"default",p=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let g;n!==null?g=n.getContextAttributes().alpha:g=l.alpha!==void 0?l.alpha:!1;let _=null,y=null;const M=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Er,this.physicallyCorrectLights=!1,this.toneMapping=la,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const x=this;let v=!1,S=0,A=0,D=null,z=-1,w=null;const F=new Xe,it=new Xe;let L=null,O=t.width,k=t.height,vt=1,St=null,G=null;const J=new Xe(0,0,O,k),ct=new Xe(0,0,O,k);let nt=!1;const ut=new w_;let K=!1,$=!1,T=null;const j=new $e,V=new Qt,I=new X,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return D===null?vt:1}let U=n;function Ct(P,ot){for(let ht=0;ht<P.length;ht++){const tt=P[ht],ft=t.getContext(tt,ot);if(ft!==null)return ft}return null}try{const P={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ed}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",Gt,!1),t.addEventListener("webglcontextcreationerror",Zt,!1),U===null){const ot=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&ot.shift(),U=Ct(ot,P),U===null)throw Ct(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let st,wt,_t,Ot,At,Dt,ie,kt,Kt,Yt,Jt,re,me,Ve,N,R,Q,yt,Et,Lt,Ht,H,at,Ut;function Nt(){st=new Cw(U),wt=new bw(U,st,l),st.init(wt),H=new cA(U,st,wt),_t=new lA(U,st,wt),Ot=new Rw,At=new jE,Dt=new uA(U,st,_t,At,wt,H,Ot),ie=new Mw(x),kt=new Tw(x),Kt=new HS(U,wt),at=new yw(U,st,Kt,wt),Yt=new Dw(U,Kt,Ot,at),Jt=new Pw(U,Yt,Kt,Ot),Et=new Uw(U,wt,Dt),R=new Sw(At),re=new qE(x,ie,kt,st,wt,at,R),me=new mA(x,At),Ve=new $E,N=new nA(st,wt),yt=new _w(x,ie,kt,_t,Jt,g,h),Q=new oA(x,Jt,wt),Ut=new gA(U,Ot,wt,_t),Lt=new xw(U,st,Ot,wt),Ht=new Lw(U,st,Ot,wt),Ot.programs=re.programs,x.capabilities=wt,x.extensions=st,x.properties=At,x.renderLists=Ve,x.shadowMap=Q,x.state=_t,x.info=Ot}Nt();const Rt=new pA(x,U);this.xr=Rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=st.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=st.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(P){P!==void 0&&(vt=P,this.setSize(O,k,!1))},this.getSize=function(P){return P.set(O,k)},this.setSize=function(P,ot,ht){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,k=ot,t.width=Math.floor(P*vt),t.height=Math.floor(ot*vt),ht!==!1&&(t.style.width=P+"px",t.style.height=ot+"px"),this.setViewport(0,0,P,ot)},this.getDrawingBufferSize=function(P){return P.set(O*vt,k*vt).floor()},this.setDrawingBufferSize=function(P,ot,ht){O=P,k=ot,vt=ht,t.width=Math.floor(P*ht),t.height=Math.floor(ot*ht),this.setViewport(0,0,P,ot)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,ot,ht,tt){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,ot,ht,tt),_t.viewport(F.copy(J).multiplyScalar(vt).floor())},this.getScissor=function(P){return P.copy(ct)},this.setScissor=function(P,ot,ht,tt){P.isVector4?ct.set(P.x,P.y,P.z,P.w):ct.set(P,ot,ht,tt),_t.scissor(it.copy(ct).multiplyScalar(vt).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(P){_t.setScissorTest(nt=P)},this.setOpaqueSort=function(P){St=P},this.setTransparentSort=function(P){G=P},this.getClearColor=function(P){return P.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(P=!0,ot=!0,ht=!0){let tt=0;P&&(tt|=16384),ot&&(tt|=256),ht&&(tt|=1024),U.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",Gt,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),Ve.dispose(),N.dispose(),At.dispose(),ie.dispose(),kt.dispose(),Jt.dispose(),at.dispose(),Ut.dispose(),re.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",zt),Rt.removeEventListener("sessionend",Ft),T&&(T.dispose(),T=null),fe.stop()};function Pt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=Ot.autoReset,ot=Q.enabled,ht=Q.autoUpdate,tt=Q.needsUpdate,ft=Q.type;Nt(),Ot.autoReset=P,Q.enabled=ot,Q.autoUpdate=ht,Q.needsUpdate=tt,Q.type=ft}function Zt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qt(P){const ot=P.target;ot.removeEventListener("dispose",qt),be(ot)}function be(P){Z(P),At.remove(P)}function Z(P){const ot=At.get(P).programs;ot!==void 0&&(ot.forEach(function(ht){re.releaseProgram(ht)}),P.isShaderMaterial&&re.releaseShaderCache(P))}this.renderBufferDirect=function(P,ot,ht,tt,ft,Vt){ot===null&&(ot=Y);const jt=ft.isMesh&&ft.matrixWorld.determinant()<0,ae=fl(P,ot,ht,tt,ft);_t.setMaterial(tt,jt);let ee=ht.index;const ve=ht.attributes.position;if(ee===null){if(ve===void 0||ve.count===0)return}else if(ee.count===0)return;let te=1;tt.wireframe===!0&&(ee=Yt.getWireframeAttribute(ht),te=2),at.setup(ft,tt,ae,ht,ee);let ue,Se=Lt;ee!==null&&(ue=Kt.get(ee),Se=Ht,Se.setIndex(ue));const Dn=ee!==null?ee.count:ve.count,jn=ht.drawRange.start*te,Nn=ht.drawRange.count*te,we=Vt!==null?Vt.start*te:0,_e=Vt!==null?Vt.count*te:1/0,Bi=Math.max(jn,we),Ee=Math.min(Dn,jn+Nn,we+_e)-1,Qe=Math.max(0,Ee-Bi+1);if(Qe!==0){if(ft.isMesh)tt.wireframe===!0?(_t.setLineWidth(tt.wireframeLinewidth*pt()),Se.setMode(1)):Se.setMode(4);else if(ft.isLine){let sn=tt.linewidth;sn===void 0&&(sn=1),_t.setLineWidth(sn*pt()),ft.isLineSegments?Se.setMode(1):ft.isLineLoop?Se.setMode(2):Se.setMode(3)}else ft.isPoints?Se.setMode(0):ft.isSprite&&Se.setMode(4);if(ft.isInstancedMesh)Se.renderInstances(Bi,Qe,ft.count);else if(ht.isInstancedBufferGeometry){const sn=Math.min(ht.instanceCount,ht._maxInstanceCount);Se.renderInstances(Bi,Qe,sn)}else Se.render(Bi,Qe)}},this.compile=function(P,ot){function ht(tt,ft,Vt){tt.transparent===!0&&tt.side===Ia?(tt.side=ci,tt.needsUpdate=!0,rn(tt,ft,Vt),tt.side=Ns,tt.needsUpdate=!0,rn(tt,ft,Vt),tt.side=Ia):rn(tt,ft,Vt)}y=N.get(P),y.init(),E.push(y),P.traverseVisible(function(tt){tt.isLight&&tt.layers.test(ot.layers)&&(y.pushLight(tt),tt.castShadow&&y.pushShadow(tt))}),y.setupLights(x.physicallyCorrectLights),P.traverse(function(tt){const ft=tt.material;if(ft)if(Array.isArray(ft))for(let Vt=0;Vt<ft.length;Vt++){const jt=ft[Vt];ht(jt,P,tt)}else ht(ft,P,tt)}),E.pop(),y=null};let gt=null;function Mt(P){gt&&gt(P)}function zt(){fe.stop()}function Ft(){fe.start()}const fe=new E_;fe.setAnimationLoop(Mt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(P){gt=P,Rt.setAnimationLoop(P),P===null?fe.stop():fe.start()},Rt.addEventListener("sessionstart",zt),Rt.addEventListener("sessionend",Ft),this.render=function(P,ot){if(ot!==void 0&&ot.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(ot),ot=Rt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,ot,D),y=N.get(P,E.length),y.init(),E.push(y),j.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),ut.setFromProjectionMatrix(j),$=this.localClippingEnabled,K=R.init(this.clippingPlanes,$,ot),_=Ve.get(P,M.length),_.init(),M.push(_),Ue(P,ot,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(St,G),K===!0&&R.beginShadows();const ht=y.state.shadowsArray;if(Q.render(ht,P,ot),K===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),yt.render(_,P),y.setupLights(x.physicallyCorrectLights),ot.isArrayCamera){const tt=ot.cameras;for(let ft=0,Vt=tt.length;ft<Vt;ft++){const jt=tt[ft];an(_,P,jt,jt.viewport)}}else an(_,P,ot);D!==null&&(Dt.updateMultisampleRenderTarget(D),Dt.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(x,P,ot),at.resetDefaultState(),z=-1,w=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,M.pop(),M.length>0?_=M[M.length-1]:_=null};function Ue(P,ot,ht,tt){if(P.visible===!1)return;if(P.layers.test(ot.layers)){if(P.isGroup)ht=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ot);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ut.intersectsSprite(P)){tt&&I.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);const jt=Jt.update(P),ae=P.material;ae.visible&&_.push(P,jt,ae,ht,I.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Ot.render.frame&&(P.skeleton.update(),P.skeleton.frame=Ot.render.frame),!P.frustumCulled||ut.intersectsObject(P))){tt&&I.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);const jt=Jt.update(P),ae=P.material;if(Array.isArray(ae)){const ee=jt.groups;for(let ve=0,te=ee.length;ve<te;ve++){const ue=ee[ve],Se=ae[ue.materialIndex];Se&&Se.visible&&_.push(P,jt,Se,ht,I.z,ue)}}else ae.visible&&_.push(P,jt,ae,ht,I.z,null)}}const Vt=P.children;for(let jt=0,ae=Vt.length;jt<ae;jt++)Ue(Vt[jt],ot,ht,tt)}function an(P,ot,ht,tt){const ft=P.opaque,Vt=P.transmissive,jt=P.transparent;y.setupLightsView(ht),Vt.length>0&&Mi(ft,ot,ht),tt&&_t.viewport(F.copy(tt)),ft.length>0&&De(ft,ot,ht),Vt.length>0&&De(Vt,ot,ht),jt.length>0&&De(jt,ot,ht),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Mi(P,ot,ht){const tt=wt.isWebGL2;T===null&&(T=new Ar(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")?nl:wr,minFilter:lc,samples:tt&&u===!0?4:0})),x.getDrawingBufferSize(V),tt?T.setSize(V.x,V.y):T.setSize(nc(V.x),nc(V.y));const ft=x.getRenderTarget();x.setRenderTarget(T),x.clear();const Vt=x.toneMapping;x.toneMapping=la,De(P,ot,ht),x.toneMapping=Vt,Dt.updateMultisampleRenderTarget(T),Dt.updateRenderTargetMipmap(T),x.setRenderTarget(ft)}function De(P,ot,ht){const tt=ot.isScene===!0?ot.overrideMaterial:null;for(let ft=0,Vt=P.length;ft<Vt;ft++){const jt=P[ft],ae=jt.object,ee=jt.geometry,ve=tt===null?jt.material:tt,te=jt.group;ae.layers.test(ht.layers)&&Pn(ae,ot,ht,ee,ve,te)}}function Pn(P,ot,ht,tt,ft,Vt){P.onBeforeRender(x,ot,ht,tt,ft,Vt),P.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ft.onBeforeRender(x,ot,ht,tt,P,Vt),ft.transparent===!0&&ft.side===Ia?(ft.side=ci,ft.needsUpdate=!0,x.renderBufferDirect(ht,ot,tt,ft,P,Vt),ft.side=Ns,ft.needsUpdate=!0,x.renderBufferDirect(ht,ot,tt,ft,P,Vt),ft.side=Ia):x.renderBufferDirect(ht,ot,tt,ft,P,Vt),P.onAfterRender(x,ot,ht,tt,ft,Vt)}function rn(P,ot,ht){ot.isScene!==!0&&(ot=Y);const tt=At.get(P),ft=y.state.lights,Vt=y.state.shadowsArray,jt=ft.state.version,ae=re.getParameters(P,ft.state,Vt,ot,ht),ee=re.getProgramCacheKey(ae);let ve=tt.programs;tt.environment=P.isMeshStandardMaterial?ot.environment:null,tt.fog=ot.fog,tt.envMap=(P.isMeshStandardMaterial?kt:ie).get(P.envMap||tt.environment),ve===void 0&&(P.addEventListener("dispose",qt),ve=new Map,tt.programs=ve);let te=ve.get(ee);if(te!==void 0){if(tt.currentProgram===te&&tt.lightsStateVersion===jt)return cl(P,ae),te}else ae.uniforms=re.getUniforms(P),P.onBuild(ht,ae,x),P.onBeforeCompile(ae,x),te=re.acquireProgram(ae,ee),ve.set(ee,te),tt.uniforms=ae.uniforms;const ue=tt.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ue.clippingPlanes=R.uniform),cl(P,ae),tt.needsLights=dl(P),tt.lightsStateVersion=jt,tt.needsLights&&(ue.ambientLightColor.value=ft.state.ambient,ue.lightProbe.value=ft.state.probe,ue.directionalLights.value=ft.state.directional,ue.directionalLightShadows.value=ft.state.directionalShadow,ue.spotLights.value=ft.state.spot,ue.spotLightShadows.value=ft.state.spotShadow,ue.rectAreaLights.value=ft.state.rectArea,ue.ltc_1.value=ft.state.rectAreaLTC1,ue.ltc_2.value=ft.state.rectAreaLTC2,ue.pointLights.value=ft.state.point,ue.pointLightShadows.value=ft.state.pointShadow,ue.hemisphereLights.value=ft.state.hemi,ue.directionalShadowMap.value=ft.state.directionalShadowMap,ue.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,ue.spotShadowMap.value=ft.state.spotShadowMap,ue.spotLightMatrix.value=ft.state.spotLightMatrix,ue.spotLightMap.value=ft.state.spotLightMap,ue.pointShadowMap.value=ft.state.pointShadowMap,ue.pointShadowMatrix.value=ft.state.pointShadowMatrix);const Se=te.getUniforms(),Dn=Qu.seqWithValue(Se.seq,ue);return tt.currentProgram=te,tt.uniformsList=Dn,te}function cl(P,ot){const ht=At.get(P);ht.outputEncoding=ot.outputEncoding,ht.instancing=ot.instancing,ht.skinning=ot.skinning,ht.morphTargets=ot.morphTargets,ht.morphNormals=ot.morphNormals,ht.morphColors=ot.morphColors,ht.morphTargetsCount=ot.morphTargetsCount,ht.numClippingPlanes=ot.numClippingPlanes,ht.numIntersection=ot.numClipIntersection,ht.vertexAlphas=ot.vertexAlphas,ht.vertexTangents=ot.vertexTangents,ht.toneMapping=ot.toneMapping}function fl(P,ot,ht,tt,ft){ot.isScene!==!0&&(ot=Y),Dt.resetTextureUnits();const Vt=ot.fog,jt=tt.isMeshStandardMaterial?ot.environment:null,ae=D===null?x.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Er,ee=(tt.isMeshStandardMaterial?kt:ie).get(tt.envMap||jt),ve=tt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,te=!!tt.normalMap&&!!ht.attributes.tangent,ue=!!ht.morphAttributes.position,Se=!!ht.morphAttributes.normal,Dn=!!ht.morphAttributes.color,jn=tt.toneMapped?x.toneMapping:la,Nn=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,we=Nn!==void 0?Nn.length:0,_e=At.get(tt),Bi=y.state.lights;if(K===!0&&($===!0||P!==w)){const ln=P===w&&tt.id===z;R.setState(tt,P,ln)}let Ee=!1;tt.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Bi.state.version||_e.outputEncoding!==ae||ft.isInstancedMesh&&_e.instancing===!1||!ft.isInstancedMesh&&_e.instancing===!0||ft.isSkinnedMesh&&_e.skinning===!1||!ft.isSkinnedMesh&&_e.skinning===!0||_e.envMap!==ee||tt.fog===!0&&_e.fog!==Vt||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==R.numPlanes||_e.numIntersection!==R.numIntersection)||_e.vertexAlphas!==ve||_e.vertexTangents!==te||_e.morphTargets!==ue||_e.morphNormals!==Se||_e.morphColors!==Dn||_e.toneMapping!==jn||wt.isWebGL2===!0&&_e.morphTargetsCount!==we)&&(Ee=!0):(Ee=!0,_e.__version=tt.version);let Qe=_e.currentProgram;Ee===!0&&(Qe=rn(tt,ot,ft));let sn=!1,Ya=!1,Lr=!1;const on=Qe.getUniforms(),Fi=_e.uniforms;if(_t.useProgram(Qe.program)&&(sn=!0,Ya=!0,Lr=!0),tt.id!==z&&(z=tt.id,Ya=!0),sn||w!==P){if(on.setValue(U,"projectionMatrix",P.projectionMatrix),wt.logarithmicDepthBuffer&&on.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),w!==P&&(w=P,Ya=!0,Lr=!0),tt.isShaderMaterial||tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshStandardMaterial||tt.envMap){const ln=on.map.cameraPosition;ln!==void 0&&ln.setValue(U,I.setFromMatrixPosition(P.matrixWorld))}(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&on.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial||tt.isShadowMaterial||ft.isSkinnedMesh)&&on.setValue(U,"viewMatrix",P.matrixWorldInverse)}if(ft.isSkinnedMesh){on.setOptional(U,ft,"bindMatrix"),on.setOptional(U,ft,"bindMatrixInverse");const ln=ft.skeleton;ln&&(wt.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),on.setValue(U,"boneTexture",ln.boneTexture,Dt),on.setValue(U,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=ht.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&wt.isWebGL2===!0)&&Et.update(ft,ht,tt,Qe),(Ya||_e.receiveShadow!==ft.receiveShadow)&&(_e.receiveShadow=ft.receiveShadow,on.setValue(U,"receiveShadow",ft.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Fi.envMap.value=ee,Fi.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),Ya&&(on.setValue(U,"toneMappingExposure",x.toneMappingExposure),_e.needsLights&&hl(Fi,Lr),Vt&&tt.fog===!0&&me.refreshFogUniforms(Fi,Vt),me.refreshMaterialUniforms(Fi,tt,vt,k,T),Qu.upload(U,_e.uniformsList,Fi,Dt)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Qu.upload(U,_e.uniformsList,Fi,Dt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&on.setValue(U,"center",ft.center),on.setValue(U,"modelViewMatrix",ft.modelViewMatrix),on.setValue(U,"normalMatrix",ft.normalMatrix),on.setValue(U,"modelMatrix",ft.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const ln=tt.uniformsGroups;for(let Bn=0,Ln=ln.length;Bn<Ln;Bn++)if(wt.isWebGL2){const qs=ln[Bn];Ut.update(qs,Qe),Ut.bind(qs,Qe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qe}function hl(P,ot){P.ambientLightColor.needsUpdate=ot,P.lightProbe.needsUpdate=ot,P.directionalLights.needsUpdate=ot,P.directionalLightShadows.needsUpdate=ot,P.pointLights.needsUpdate=ot,P.pointLightShadows.needsUpdate=ot,P.spotLights.needsUpdate=ot,P.spotLightShadows.needsUpdate=ot,P.rectAreaLights.needsUpdate=ot,P.hemisphereLights.needsUpdate=ot}function dl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,ot,ht){At.get(P.texture).__webglTexture=ot,At.get(P.depthTexture).__webglTexture=ht;const tt=At.get(P);tt.__hasExternalTextures=!0,tt.__hasExternalTextures&&(tt.__autoAllocateDepthBuffer=ht===void 0,tt.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,ot){const ht=At.get(P);ht.__webglFramebuffer=ot,ht.__useDefaultFramebuffer=ot===void 0},this.setRenderTarget=function(P,ot=0,ht=0){D=P,S=ot,A=ht;let tt=!0,ft=null,Vt=!1,jt=!1;if(P){const ee=At.get(P);ee.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(36160,null),tt=!1):ee.__webglFramebuffer===void 0?Dt.setupRenderTarget(P):ee.__hasExternalTextures&&Dt.rebindTextures(P,At.get(P.texture).__webglTexture,At.get(P.depthTexture).__webglTexture);const ve=P.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(jt=!0);const te=At.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ft=te[ot],Vt=!0):wt.isWebGL2&&P.samples>0&&Dt.useMultisampledRTT(P)===!1?ft=At.get(P).__webglMultisampledFramebuffer:ft=te,F.copy(P.viewport),it.copy(P.scissor),L=P.scissorTest}else F.copy(J).multiplyScalar(vt).floor(),it.copy(ct).multiplyScalar(vt).floor(),L=nt;if(_t.bindFramebuffer(36160,ft)&&wt.drawBuffers&&tt&&_t.drawBuffers(P,ft),_t.viewport(F),_t.scissor(it),_t.setScissorTest(L),Vt){const ee=At.get(P.texture);U.framebufferTexture2D(36160,36064,34069+ot,ee.__webglTexture,ht)}else if(jt){const ee=At.get(P.texture),ve=ot||0;U.framebufferTextureLayer(36160,36064,ee.__webglTexture,ht||0,ve)}z=-1},this.readRenderTargetPixels=function(P,ot,ht,tt,ft,Vt,jt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=At.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&jt!==void 0&&(ae=ae[jt]),ae){_t.bindFramebuffer(36160,ae);try{const ee=P.texture,ve=ee.format,te=ee.type;if(ve!==bi&&H.convert(ve)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ue=te===nl&&(st.has("EXT_color_buffer_half_float")||wt.isWebGL2&&st.has("EXT_color_buffer_float"));if(te!==wr&&H.convert(te)!==U.getParameter(35738)&&!(te===yr&&(wt.isWebGL2||st.has("OES_texture_float")||st.has("WEBGL_color_buffer_float")))&&!ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=P.width-tt&&ht>=0&&ht<=P.height-ft&&U.readPixels(ot,ht,tt,ft,H.convert(ve),H.convert(te),Vt)}finally{const ee=D!==null?At.get(D).__webglFramebuffer:null;_t.bindFramebuffer(36160,ee)}}},this.copyFramebufferToTexture=function(P,ot,ht=0){const tt=Math.pow(2,-ht),ft=Math.floor(ot.image.width*tt),Vt=Math.floor(ot.image.height*tt);Dt.setTexture2D(ot,0),U.copyTexSubImage2D(3553,ht,0,0,P.x,P.y,ft,Vt),_t.unbindTexture()},this.copyTextureToTexture=function(P,ot,ht,tt=0){const ft=ot.image.width,Vt=ot.image.height,jt=H.convert(ht.format),ae=H.convert(ht.type);Dt.setTexture2D(ht,0),U.pixelStorei(37440,ht.flipY),U.pixelStorei(37441,ht.premultiplyAlpha),U.pixelStorei(3317,ht.unpackAlignment),ot.isDataTexture?U.texSubImage2D(3553,tt,P.x,P.y,ft,Vt,jt,ae,ot.image.data):ot.isCompressedTexture?U.compressedTexSubImage2D(3553,tt,P.x,P.y,ot.mipmaps[0].width,ot.mipmaps[0].height,jt,ot.mipmaps[0].data):U.texSubImage2D(3553,tt,P.x,P.y,jt,ae,ot.image),tt===0&&ht.generateMipmaps&&U.generateMipmap(3553),_t.unbindTexture()},this.copyTextureToTexture3D=function(P,ot,ht,tt,ft=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Vt=P.max.x-P.min.x+1,jt=P.max.y-P.min.y+1,ae=P.max.z-P.min.z+1,ee=H.convert(tt.format),ve=H.convert(tt.type);let te;if(tt.isData3DTexture)Dt.setTexture3D(tt,0),te=32879;else if(tt.isDataArrayTexture)Dt.setTexture2DArray(tt,0),te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,tt.flipY),U.pixelStorei(37441,tt.premultiplyAlpha),U.pixelStorei(3317,tt.unpackAlignment);const ue=U.getParameter(3314),Se=U.getParameter(32878),Dn=U.getParameter(3316),jn=U.getParameter(3315),Nn=U.getParameter(32877),we=ht.isCompressedTexture?ht.mipmaps[0]:ht.image;U.pixelStorei(3314,we.width),U.pixelStorei(32878,we.height),U.pixelStorei(3316,P.min.x),U.pixelStorei(3315,P.min.y),U.pixelStorei(32877,P.min.z),ht.isDataTexture||ht.isData3DTexture?U.texSubImage3D(te,ft,ot.x,ot.y,ot.z,Vt,jt,ae,ee,ve,we.data):ht.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(te,ft,ot.x,ot.y,ot.z,Vt,jt,ae,ee,we.data)):U.texSubImage3D(te,ft,ot.x,ot.y,ot.z,Vt,jt,ae,ee,ve,we),U.pixelStorei(3314,ue),U.pixelStorei(32878,Se),U.pixelStorei(3316,Dn),U.pixelStorei(3315,jn),U.pixelStorei(32877,Nn),ft===0&&tt.generateMipmaps&&U.generateMipmap(te),_t.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Dt.setTextureCube(P,0):P.isData3DTexture?Dt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Dt.setTexture2DArray(P,0):Dt.setTexture2D(P,0),_t.unbindTexture()},this.resetState=function(){S=0,A=0,D=null,_t.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _A extends L_{}_A.prototype.isWebGL1Renderer=!0;class yA extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.backgroundBlurriness=this.backgroundBlurriness),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class R_{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=dd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ua()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,u=this.stride;o<u;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ua()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ua()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new X;class Pi{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix4(t),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyNormalMatrix(t),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.transformDirection(t),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}setX(t,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=sa(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=sa(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=sa(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=sa(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Re(n,this.array),a=Re(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Re(n,this.array),a=Re(a,this.array),o=Re(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,u){return t=t*this.data.stride+this.offset,this.normalized&&(n=Re(n,this.array),a=Re(a,this.array),o=Re(o,this.array),u=Re(u,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return new Si(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[o+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ku extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ws;const Xo=new X,Es=new X,As=new X,Ts=new Qt,Yo=new Qt,z_=new $e,Hu=new X,qo=new X,Gu=new X,Sv=new Qt,jh=new Qt,Mv=new Qt;class Zh extends dn{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new qn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new R_(n,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Pi(a,3,0,!1)),ws.setAttribute("uv",new Pi(a,2,3,!1))}this.geometry=ws,this.material=t!==void 0?t:new Ku,this.center=new Qt(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),z_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);const a=this.material.rotation;let o,u;a!==0&&(u=Math.cos(a),o=Math.sin(a));const h=this.center;Iu(Hu.set(-.5,-.5,0),As,h,Es,o,u),Iu(qo.set(.5,-.5,0),As,h,Es,o,u),Iu(Gu.set(.5,.5,0),As,h,Es,o,u),Sv.set(0,0),jh.set(1,0),Mv.set(1,1);let f=t.ray.intersectTriangle(Hu,qo,Gu,!1,Xo);if(f===null&&(Iu(qo.set(-.5,.5,0),As,h,Es,o,u),jh.set(0,1),f=t.ray.intersectTriangle(Hu,Gu,qo,!1,Xo),f===null))return;const m=t.ray.origin.distanceTo(Xo);m<t.near||m>t.far||n.push({distance:m,point:Xo.clone(),uv:zi.getUV(Xo,Hu,qo,Gu,Sv,jh,Mv,new Qt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Iu(l,t,n,a,o,u){Ts.subVectors(l,n).addScalar(.5).multiply(a),o!==void 0?(Yo.x=u*Ts.x-o*Ts.y,Yo.y=o*Ts.x+u*Ts.y):Yo.copy(Ts),l.copy(t),l.x+=Yo.x,l.y+=Yo.y,l.applyMatrix4(z_)}class O_ extends Xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wv=new X,Ev=new X,Av=new $e,$h=new y_,Vu=new Ws;class xA extends dn{constructor(t=new qn,n=new O_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,u=n.count;o<u;o++)wv.fromBufferAttribute(n,o-1),Ev.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=wv.distanceTo(Ev);t.setAttribute("lineDistance",new yn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,u=t.params.Line.threshold,h=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Vu.copy(a.boundingSphere),Vu.applyMatrix4(o),Vu.radius+=u,t.ray.intersectsSphere(Vu)===!1)return;Av.copy(o).invert(),$h.copy(t.ray).applyMatrix4(Av);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=new X,g=new X,_=new X,y=new X,M=this.isLineSegments?2:1,E=a.index,v=a.attributes.position;if(E!==null){const S=Math.max(0,h.start),A=Math.min(E.count,h.start+h.count);for(let D=S,z=A-1;D<z;D+=M){const w=E.getX(D),F=E.getX(D+1);if(p.fromBufferAttribute(v,w),g.fromBufferAttribute(v,F),$h.distanceSqToSegment(p,g,y,_)>m)continue;y.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(y);L<t.near||L>t.far||n.push({distance:L,point:_.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let D=S,z=A-1;D<z;D+=M){if(p.fromBufferAttribute(v,D),g.fromBufferAttribute(v,D+1),$h.distanceSqToSegment(p,g,y,_)>m)continue;y.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(y);F<t.near||F>t.far||n.push({distance:F,point:_.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=o.length;u<h;u++){const f=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}const Tv=new X,Cv=new X;class bA extends xA{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,u=n.count;o<u;o+=2)Tv.fromBufferAttribute(n,o),Cv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Tv.distanceTo(Cv);t.setAttribute("lineDistance",new yn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zd extends qn{constructor(t=1,n=32,a=16,o=0,u=Math.PI*2,h=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:u,thetaStart:h,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(h+f,Math.PI);let p=0;const g=[],_=new X,y=new X,M=[],E=[],x=[],v=[];for(let S=0;S<=a;S++){const A=[],D=S/a;let z=0;S==0&&h==0?z=.5/n:S==a&&m==Math.PI&&(z=-.5/n);for(let w=0;w<=n;w++){const F=w/n;_.x=-t*Math.cos(o+F*u)*Math.sin(h+D*f),_.y=t*Math.cos(h+D*f),_.z=t*Math.sin(o+F*u)*Math.sin(h+D*f),E.push(_.x,_.y,_.z),y.copy(_).normalize(),x.push(y.x,y.y,y.z),v.push(F+z,1-D),A.push(p++)}g.push(A)}for(let S=0;S<a;S++)for(let A=0;A<n;A++){const D=g[S][A+1],z=g[S][A],w=g[S+1][A],F=g[S+1][A+1];(S!==0||h>0)&&M.push(D,z,F),(S!==a-1||m<Math.PI)&&M.push(z,w,F)}this.setIndex(M),this.setAttribute("position",new yn(E,3)),this.setAttribute("normal",new yn(x,3)),this.setAttribute("uv",new yn(v,2))}static fromJSON(t){return new zd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class SA extends qn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],a=new Set,o=new X,u=new X;if(t.index!==null){const h=t.attributes.position,f=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:f.count,materialIndex:0}]);for(let p=0,g=m.length;p<g;++p){const _=m[p],y=_.start,M=_.count;for(let E=y,x=y+M;E<x;E+=3)for(let v=0;v<3;v++){const S=f.getX(E+v),A=f.getX(E+(v+1)%3);o.fromBufferAttribute(h,S),u.fromBufferAttribute(h,A),Dv(o,u,a)===!0&&(n.push(o.x,o.y,o.z),n.push(u.x,u.y,u.z))}}}else{const h=t.attributes.position;for(let f=0,m=h.count/3;f<m;f++)for(let p=0;p<3;p++){const g=3*f+p,_=3*f+(p+1)%3;o.fromBufferAttribute(h,g),u.fromBufferAttribute(h,_),Dv(o,u,a)===!0&&(n.push(o.x,o.y,o.z),n.push(u.x,u.y,u.z))}}this.setAttribute("position",new yn(n,3))}}}function Dv(l,t,n){const a=`${l.x},${l.y},${l.z}-${t.x},${t.y},${t.z}`,o=`${t.x},${t.y},${t.z}-${l.x},${l.y},${l.z}`;return n.has(a)===!0||n.has(o)===!0?!1:(n.add(a),n.add(o),!0)}const Lv={enabled:!1,files:{},add:function(l,t){this.enabled!==!1&&(this.files[l]=t)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class MA{constructor(t,n,a){const o=this;let u=!1,h=0,f=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.itemStart=function(g){f++,u===!1&&o.onStart!==void 0&&o.onStart(g,h,f),u=!0},this.itemEnd=function(g){h++,o.onProgress!==void 0&&o.onProgress(g,h,f),h===f&&(u=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,y=p.length;_<y;_+=2){const M=p[_],E=p[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return E}return null}}}const wA=new MA;class U_{constructor(t){this.manager=t!==void 0?t:wA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,u){a.load(t,o,n,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class EA extends U_{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=Lv.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){n&&n(h),u.manager.itemEnd(t)},0),h;const f=il("img");function m(){g(),Lv.add(t,this),n&&n(this),u.manager.itemEnd(t)}function p(_){g(),o&&o(_),u.manager.itemError(t),u.manager.itemEnd(t)}function g(){f.removeEventListener("load",m,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",m,!1),f.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),u.manager.itemStart(t),f.src=t,f}}class Qh extends U_{constructor(t){super(t)}load(t,n,a,o){const u=new fi,h=new EA(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(f){u.image=f,u.needsUpdate=!0,n!==void 0&&n(u)},a,o),u}}class AA extends qn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class vd extends R_{constructor(t,n,a=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class Rv{constructor(t=1,n=0,a=0){return this.radius=t,this.phi=n,this.theta=a,this}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(wn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const zv=new X,ku=new X;class TA{constructor(t=new X,n=new X){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){zv.subVectors(t,this.start),ku.subVectors(this.end,this.start);const a=ku.dot(ku);let u=ku.dot(zv)/a;return n&&(u=wn(u,0,1)),u}closestPointToPoint(t,n,a){const o=this.closestPointToPointParameter(t,n);return this.delta(a).multiplyScalar(o).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Wu=new X,Ge=new Dd;class CA extends bA{constructor(t){const n=new qn,a=new O_({color:16777215,vertexColors:!0,toneMapped:!1}),o=[],u=[],h={};f("n1","n2"),f("n2","n4"),f("n4","n3"),f("n3","n1"),f("f1","f2"),f("f2","f4"),f("f4","f3"),f("f3","f1"),f("n1","f1"),f("n2","f2"),f("n3","f3"),f("n4","f4"),f("p","n1"),f("p","n2"),f("p","n3"),f("p","n4"),f("u1","u2"),f("u2","u3"),f("u3","u1"),f("c","t"),f("p","c"),f("cn1","cn2"),f("cn3","cn4"),f("cf1","cf2"),f("cf3","cf4");function f(E,x){m(E),m(x)}function m(E){o.push(0,0,0),u.push(0,0,0),h[E]===void 0&&(h[E]=[]),h[E].push(o.length/3-1)}n.setAttribute("position",new yn(o,3)),n.setAttribute("color",new yn(u,3)),super(n,a),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=h,this.update();const p=new pe(16755200),g=new pe(16711680),_=new pe(43775),y=new pe(16777215),M=new pe(3355443);this.setColors(p,g,_,y,M)}setColors(t,n,a,o,u){const f=this.geometry.getAttribute("color");f.setXYZ(0,t.r,t.g,t.b),f.setXYZ(1,t.r,t.g,t.b),f.setXYZ(2,t.r,t.g,t.b),f.setXYZ(3,t.r,t.g,t.b),f.setXYZ(4,t.r,t.g,t.b),f.setXYZ(5,t.r,t.g,t.b),f.setXYZ(6,t.r,t.g,t.b),f.setXYZ(7,t.r,t.g,t.b),f.setXYZ(8,t.r,t.g,t.b),f.setXYZ(9,t.r,t.g,t.b),f.setXYZ(10,t.r,t.g,t.b),f.setXYZ(11,t.r,t.g,t.b),f.setXYZ(12,t.r,t.g,t.b),f.setXYZ(13,t.r,t.g,t.b),f.setXYZ(14,t.r,t.g,t.b),f.setXYZ(15,t.r,t.g,t.b),f.setXYZ(16,t.r,t.g,t.b),f.setXYZ(17,t.r,t.g,t.b),f.setXYZ(18,t.r,t.g,t.b),f.setXYZ(19,t.r,t.g,t.b),f.setXYZ(20,t.r,t.g,t.b),f.setXYZ(21,t.r,t.g,t.b),f.setXYZ(22,t.r,t.g,t.b),f.setXYZ(23,t.r,t.g,t.b),f.setXYZ(24,n.r,n.g,n.b),f.setXYZ(25,n.r,n.g,n.b),f.setXYZ(26,n.r,n.g,n.b),f.setXYZ(27,n.r,n.g,n.b),f.setXYZ(28,n.r,n.g,n.b),f.setXYZ(29,n.r,n.g,n.b),f.setXYZ(30,n.r,n.g,n.b),f.setXYZ(31,n.r,n.g,n.b),f.setXYZ(32,a.r,a.g,a.b),f.setXYZ(33,a.r,a.g,a.b),f.setXYZ(34,a.r,a.g,a.b),f.setXYZ(35,a.r,a.g,a.b),f.setXYZ(36,a.r,a.g,a.b),f.setXYZ(37,a.r,a.g,a.b),f.setXYZ(38,o.r,o.g,o.b),f.setXYZ(39,o.r,o.g,o.b),f.setXYZ(40,u.r,u.g,u.b),f.setXYZ(41,u.r,u.g,u.b),f.setXYZ(42,u.r,u.g,u.b),f.setXYZ(43,u.r,u.g,u.b),f.setXYZ(44,u.r,u.g,u.b),f.setXYZ(45,u.r,u.g,u.b),f.setXYZ(46,u.r,u.g,u.b),f.setXYZ(47,u.r,u.g,u.b),f.setXYZ(48,u.r,u.g,u.b),f.setXYZ(49,u.r,u.g,u.b),f.needsUpdate=!0}update(){const t=this.geometry,n=this.pointMap,a=1,o=1;Ge.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),We("c",n,t,Ge,0,0,-1),We("t",n,t,Ge,0,0,1),We("n1",n,t,Ge,-1,-1,-1),We("n2",n,t,Ge,a,-1,-1),We("n3",n,t,Ge,-1,o,-1),We("n4",n,t,Ge,a,o,-1),We("f1",n,t,Ge,-1,-1,1),We("f2",n,t,Ge,a,-1,1),We("f3",n,t,Ge,-1,o,1),We("f4",n,t,Ge,a,o,1),We("u1",n,t,Ge,a*.7,o*1.1,-1),We("u2",n,t,Ge,-1*.7,o*1.1,-1),We("u3",n,t,Ge,0,o*2,-1),We("cf1",n,t,Ge,-1,0,1),We("cf2",n,t,Ge,a,0,1),We("cf3",n,t,Ge,0,-1,1),We("cf4",n,t,Ge,0,o,1),We("cn1",n,t,Ge,-1,0,-1),We("cn2",n,t,Ge,a,0,-1),We("cn3",n,t,Ge,0,-1,-1),We("cn4",n,t,Ge,0,o,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function We(l,t,n,a,o,u,h){Wu.set(o,u,h).unproject(a);const f=t[l];if(f!==void 0){const m=n.getAttribute("position");for(let p=0,g=f.length;p<g;p++)m.setXYZ(f[p],Wu.x,Wu.y,Wu.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ed);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Ni{constructor(t,n,a,o,u="div"){this.parent=t,this.object=n,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ni.nextNameID=Ni.nextNameID||0,this.$name.id=`lil-gui-name-${++Ni.nextNameID}`,this.$widget=document.createElement(u),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class DA extends Ni{constructor(t,n,a){super(t,n,a,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function _d(l){let t,n;return(t=l.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?"#"+n:!1}const LA={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:_d,toHexString:_d},al={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},RA={isPrimitive:!1,match:Array.isArray,fromHexString(l,t,n=1){const a=al.fromHexString(l);t[0]=(a>>16&255)/255*n,t[1]=(a>>8&255)/255*n,t[2]=(a&255)/255*n},toHexString([l,t,n],a=1){a=255/a;const o=l*a<<16^t*a<<8^n*a<<0;return al.toHexString(o)}},zA={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,t,n=1){const a=al.fromHexString(l);t.r=(a>>16&255)/255*n,t.g=(a>>8&255)/255*n,t.b=(a&255)/255*n},toHexString({r:l,g:t,b:n},a=1){a=255/a;const o=l*a<<16^t*a<<8^n*a<<0;return al.toHexString(o)}},OA=[LA,al,RA,zA];function UA(l){return OA.find(t=>t.match(l))}class PA extends Ni{constructor(t,n,a,o){super(t,n,a,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=UA(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=_d(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Kh extends Ni{constructor(t,n,a){super(t,n,a,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class NA extends Ni{constructor(t,n,a,o,u,h){super(t,n,a,"number"),this._initInput(),this.min(o),this.max(u);const f=h!==void 0;this.step(f?h:this._getImplicitStep(),f),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},n=S=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+S),this.$input.value=this.getValue())},a=S=>{S.code==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S)*-1))},o=S=>{this._inputFocused&&(S.preventDefault(),n(this._step*this._normalizeMouseWheel(S)))};let u=!1,h,f,m,p,g;const _=5,y=S=>{h=S.clientX,f=m=S.clientY,u=!0,p=this.getValue(),g=0,window.addEventListener("mousemove",M),window.addEventListener("mouseup",E)},M=S=>{if(u){const A=S.clientX-h,D=S.clientY-f;Math.abs(D)>_?(S.preventDefault(),this.$input.blur(),u=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>_&&E()}if(!u){const A=S.clientY-m;g-=A*this._step*this._arrowKeyMultiplier(S),p+g>this._max?g=this._max-p:p+g<this._min&&(g=this._min-p),this._snapClampSetValue(p+g)}m=S.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",E)},x=()=>{this._inputFocused=!0},v=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",v)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(S,A,D,z,w)=>(S-A)/(D-A)*(w-z)+z,n=S=>{const A=this.$slider.getBoundingClientRect();let D=t(S,A.left,A.right,this._min,this._max);this._snapClampSetValue(D)},a=S=>{this._setDraggingStyle(!0),n(S.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",u)},o=S=>{n(S.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",u)};let h=!1,f,m;const p=S=>{S.preventDefault(),this._setDraggingStyle(!0),n(S.touches[0].clientX),h=!1},g=S=>{S.touches.length>1||(this._hasScrollBar?(f=S.touches[0].clientX,m=S.touches[0].clientY,h=!0):p(S),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",y))},_=S=>{if(h){const A=S.touches[0].clientX-f,D=S.touches[0].clientY-m;Math.abs(A)>Math.abs(D)?p(S):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",y))}else S.preventDefault(),n(S.touches[0].clientX)},y=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",y)},M=this._callOnFinishChange.bind(this),E=400;let x;const v=S=>{if(Math.abs(S.deltaX)<Math.abs(S.deltaY)&&this._hasScrollBar)return;S.preventDefault();const D=this._normalizeMouseWheel(S)*this._step;this._snapClampSetValue(this.getValue()+D),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(M,E)};this.$slider.addEventListener("mousedown",a),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${n}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:a}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,a=-t.wheelDelta/120,a*=this._stepExplicit?1:10),n+-a}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){const n=Math.round(t/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class BA extends Ni{constructor(t,n,a,o){super(t,n,a,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this._names.forEach(u=>{const h=document.createElement("option");h.innerHTML=u,this.$select.appendChild(h)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?t:this._names[n],this}}class FA extends Ni{constructor(t,n,a){super(t,n,a,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const HA=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
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
  .lil-gui.allow-touch-styles {
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
.lil-gui.force-touch-styles {
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
.lil-gui .controller.boolean .widget {
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
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
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
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
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

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
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
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
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
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function GA(l){const t=document.createElement("style");t.innerHTML=l;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(t,n):document.head.appendChild(t)}let Ov=!1;class Od{constructor({parent:t,autoPlace:n=t===void 0,container:a,width:o,title:u="Controls",injectStyles:h=!0,touchStyles:f=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",m=>{(m.code==="Enter"||m.code==="Space")&&(m.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),f&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Ov&&h&&(GA(HA),Ov=!0),a?a.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this.domElement.addEventListener("keydown",m=>m.stopPropagation()),this.domElement.addEventListener("keyup",m=>m.stopPropagation())}add(t,n,a,o,u){if(Object(a)===a)return new BA(this,t,n,a);const h=t[n];switch(typeof h){case"number":return new NA(this,t,n,a,o,u);case"boolean":return new DA(this,t,n);case"string":return new FA(this,t,n);case"function":return new Kh(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,h)}addColor(t,n,a=1){return new PA(this,t,n,a)}addFolder(t){return new Od({parent:this,title:t})}load(t,n=!0){return t.controllers&&this.controllers.forEach(a=>{a instanceof Kh||a._name in t.controllers&&a.load(t.controllers[a._name])}),n&&t.folders&&this.folders.forEach(a=>{a._title in t.folders&&a.load(t.folders[a._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof Kh)){if(a._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);n.controllers[a._name]=a.save()}}),t&&this.folders.forEach(a=>{if(a._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);n.folders[a._title]=a.save()}),n}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const a=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const o=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(a=>a.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}var Os=function(){var l=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(g){g.preventDefault(),a(++l%t.children.length)},!1);function n(g){return t.appendChild(g.dom),g}function a(g){for(var _=0;_<t.children.length;_++)t.children[_].style.display=_===g?"block":"none";l=g}var o=(performance||Date).now(),u=o,h=0,f=n(new Os.Panel("FPS","#0ff","#002")),m=n(new Os.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=n(new Os.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:t,addPanel:n,showPanel:a,begin:function(){o=(performance||Date).now()},end:function(){h++;var g=(performance||Date).now();if(m.update(g-o,200),g>=u+1e3&&(f.update(h*1e3/(g-u),100),u=g,h=0,p)){var _=performance.memory;p.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return g},update:function(){o=this.end()},domElement:t,setMode:a}};Os.Panel=function(l,t,n){var a=1/0,o=0,u=Math.round,h=u(window.devicePixelRatio||1),f=80*h,m=48*h,p=3*h,g=2*h,_=3*h,y=15*h,M=74*h,E=30*h,x=document.createElement("canvas");x.width=f,x.height=m,x.style.cssText="width:80px;height:48px";var v=x.getContext("2d");return v.font="bold "+9*h+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,f,m),v.fillStyle=t,v.fillText(l,p,g),v.fillRect(_,y,M,E),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(_,y,M,E),{dom:x,update:function(S,A){a=Math.min(a,S),o=Math.max(o,S),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,f,y),v.fillStyle=t,v.fillText(u(S)+" "+l+" ("+u(a)+"-"+u(o)+")",p,g),v.drawImage(x,_+h,y,M-h,E,_,y,M-h,E),v.fillRect(_+M-h,y,h,E),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(_+M-h,y,h,u((1-S/A)*E))}}};class IA extends Os.Panel{constructor(t,n="GPU MS"){super(n,"#f90","#210");let a=!0,o=t.getExtension("EXT_disjoint_timer_query_webgl2");o===null&&(a=!1,o=t.getExtension("EXT_disjoint_timer_query"),o===null&&console.warn("GPUStatsPanel: disjoint_time_query extension not available.")),this.context=t,this.extension=o,this.maxTime=30,this.activeQueries=0,this.startQuery=function(){const u=this.context,h=this.extension;if(h===null)return;let f;a?(f=u.createQuery(),u.beginQuery(h.TIME_ELAPSED_EXT,f)):(f=h.createQueryEXT(),h.beginQueryEXT(h.TIME_ELAPSED_EXT,f)),this.activeQueries++;const m=()=>{let p,g,_;a?(p=u.getQueryParameter(f,u.QUERY_RESULT_AVAILABLE),g=u.getParameter(h.GPU_DISJOINT_EXT),_=u.getQueryParameter(f,u.QUERY_RESULT)):(p=h.getQueryObjectEXT(f,h.QUERY_RESULT_AVAILABLE_EXT),g=u.getParameter(h.GPU_DISJOINT_EXT),_=h.getQueryObjectEXT(f,h.QUERY_RESULT_EXT));const y=_*1e-6;p?(g||this.update(y,this.maxTime),this.activeQueries--):u.isContextLost()===!1&&requestAnimationFrame(m)};requestAnimationFrame(m)},this.endQuery=function(){const u=this.extension,h=this.context;u!==null&&(a?h.endQuery(u.TIME_ELAPSED_EXT):u.endQueryEXT(u.TIME_ELAPSED_EXT))}}}const Uv={type:"change"},Jh={type:"start"},Pv={type:"end"};class VA extends Cr{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",Ve),this._domElementKeyEvents=H},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(Uv),a.update(),u=o.NONE},this.update=function(){const H=new X,at=new Tr().setFromUnitVectors(t.up,new X(0,1,0)),Ut=at.clone().invert(),Nt=new X,Rt=new Tr,Pt=2*Math.PI;return function(){const Zt=a.object.position;H.copy(Zt).sub(a.target),H.applyQuaternion(at),f.setFromVector3(H),a.autoRotate&&u===o.NONE&&O(it()),a.enableDamping?(f.theta+=m.theta*a.dampingFactor,f.phi+=m.phi*a.dampingFactor):(f.theta+=m.theta,f.phi+=m.phi);let qt=a.minAzimuthAngle,be=a.maxAzimuthAngle;return isFinite(qt)&&isFinite(be)&&(qt<-Math.PI?qt+=Pt:qt>Math.PI&&(qt-=Pt),be<-Math.PI?be+=Pt:be>Math.PI&&(be-=Pt),qt<=be?f.theta=Math.max(qt,Math.min(be,f.theta)):f.theta=f.theta>(qt+be)/2?Math.max(qt,f.theta):Math.min(be,f.theta)),f.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,f.phi)),f.makeSafe(),f.radius*=p,f.radius=Math.max(a.minDistance,Math.min(a.maxDistance,f.radius)),a.enableDamping===!0?a.target.addScaledVector(g,a.dampingFactor):a.target.add(g),H.setFromSpherical(f),H.applyQuaternion(Ut),Zt.copy(a.target).add(H),a.object.lookAt(a.target),a.enableDamping===!0?(m.theta*=1-a.dampingFactor,m.phi*=1-a.dampingFactor,g.multiplyScalar(1-a.dampingFactor)):(m.set(0,0,0),g.set(0,0,0)),p=1,_||Nt.distanceToSquared(a.object.position)>h||8*(1-Rt.dot(a.object.quaternion))>h?(a.dispatchEvent(Uv),Nt.copy(a.object.position),Rt.copy(a.object.quaternion),_=!1,!0):!1}}(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",Q),a.domElement.removeEventListener("pointerdown",ie),a.domElement.removeEventListener("pointercancel",Yt),a.domElement.removeEventListener("wheel",me),a.domElement.removeEventListener("pointermove",kt),a.domElement.removeEventListener("pointerup",Kt),a._domElementKeyEvents!==null&&a._domElementKeyEvents.removeEventListener("keydown",Ve)};const a=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=o.NONE;const h=1e-6,f=new Rv,m=new Rv;let p=1;const g=new X;let _=!1;const y=new Qt,M=new Qt,E=new Qt,x=new Qt,v=new Qt,S=new Qt,A=new Qt,D=new Qt,z=new Qt,w=[],F={};function it(){return 2*Math.PI/60/60*a.autoRotateSpeed}function L(){return Math.pow(.95,a.zoomSpeed)}function O(H){m.theta-=H}function k(H){m.phi-=H}const vt=function(){const H=new X;return function(Ut,Nt){H.setFromMatrixColumn(Nt,0),H.multiplyScalar(-Ut),g.add(H)}}(),St=function(){const H=new X;return function(Ut,Nt){a.screenSpacePanning===!0?H.setFromMatrixColumn(Nt,1):(H.setFromMatrixColumn(Nt,0),H.crossVectors(a.object.up,H)),H.multiplyScalar(Ut),g.add(H)}}(),G=function(){const H=new X;return function(Ut,Nt){const Rt=a.domElement;if(a.object.isPerspectiveCamera){const Pt=a.object.position;H.copy(Pt).sub(a.target);let Gt=H.length();Gt*=Math.tan(a.object.fov/2*Math.PI/180),vt(2*Ut*Gt/Rt.clientHeight,a.object.matrix),St(2*Nt*Gt/Rt.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(vt(Ut*(a.object.right-a.object.left)/a.object.zoom/Rt.clientWidth,a.object.matrix),St(Nt*(a.object.top-a.object.bottom)/a.object.zoom/Rt.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}}();function J(H){a.object.isPerspectiveCamera?p/=H:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom*H)),a.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function ct(H){a.object.isPerspectiveCamera?p*=H:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/H)),a.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function nt(H){y.set(H.clientX,H.clientY)}function ut(H){A.set(H.clientX,H.clientY)}function K(H){x.set(H.clientX,H.clientY)}function $(H){M.set(H.clientX,H.clientY),E.subVectors(M,y).multiplyScalar(a.rotateSpeed);const at=a.domElement;O(2*Math.PI*E.x/at.clientHeight),k(2*Math.PI*E.y/at.clientHeight),y.copy(M),a.update()}function T(H){D.set(H.clientX,H.clientY),z.subVectors(D,A),z.y>0?J(L()):z.y<0&&ct(L()),A.copy(D),a.update()}function j(H){v.set(H.clientX,H.clientY),S.subVectors(v,x).multiplyScalar(a.panSpeed),G(S.x,S.y),x.copy(v),a.update()}function V(H){H.deltaY<0?ct(L()):H.deltaY>0&&J(L()),a.update()}function I(H){let at=!1;switch(H.code){case a.keys.UP:G(0,a.keyPanSpeed),at=!0;break;case a.keys.BOTTOM:G(0,-a.keyPanSpeed),at=!0;break;case a.keys.LEFT:G(a.keyPanSpeed,0),at=!0;break;case a.keys.RIGHT:G(-a.keyPanSpeed,0),at=!0;break}at&&(H.preventDefault(),a.update())}function Y(){if(w.length===1)y.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),at=.5*(w[0].pageY+w[1].pageY);y.set(H,at)}}function pt(){if(w.length===1)x.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),at=.5*(w[0].pageY+w[1].pageY);x.set(H,at)}}function U(){const H=w[0].pageX-w[1].pageX,at=w[0].pageY-w[1].pageY,Ut=Math.sqrt(H*H+at*at);A.set(0,Ut)}function Ct(){a.enableZoom&&U(),a.enablePan&&pt()}function st(){a.enableZoom&&U(),a.enableRotate&&Y()}function wt(H){if(w.length==1)M.set(H.pageX,H.pageY);else{const Ut=Ht(H),Nt=.5*(H.pageX+Ut.x),Rt=.5*(H.pageY+Ut.y);M.set(Nt,Rt)}E.subVectors(M,y).multiplyScalar(a.rotateSpeed);const at=a.domElement;O(2*Math.PI*E.x/at.clientHeight),k(2*Math.PI*E.y/at.clientHeight),y.copy(M)}function _t(H){if(w.length===1)v.set(H.pageX,H.pageY);else{const at=Ht(H),Ut=.5*(H.pageX+at.x),Nt=.5*(H.pageY+at.y);v.set(Ut,Nt)}S.subVectors(v,x).multiplyScalar(a.panSpeed),G(S.x,S.y),x.copy(v)}function Ot(H){const at=Ht(H),Ut=H.pageX-at.x,Nt=H.pageY-at.y,Rt=Math.sqrt(Ut*Ut+Nt*Nt);D.set(0,Rt),z.set(0,Math.pow(D.y/A.y,a.zoomSpeed)),J(z.y),A.copy(D)}function At(H){a.enableZoom&&Ot(H),a.enablePan&&_t(H)}function Dt(H){a.enableZoom&&Ot(H),a.enableRotate&&wt(H)}function ie(H){a.enabled!==!1&&(w.length===0&&(a.domElement.setPointerCapture(H.pointerId),a.domElement.addEventListener("pointermove",kt),a.domElement.addEventListener("pointerup",Kt)),yt(H),H.pointerType==="touch"?N(H):Jt(H))}function kt(H){a.enabled!==!1&&(H.pointerType==="touch"?R(H):re(H))}function Kt(H){Et(H),w.length===0&&(a.domElement.releasePointerCapture(H.pointerId),a.domElement.removeEventListener("pointermove",kt),a.domElement.removeEventListener("pointerup",Kt)),a.dispatchEvent(Pv),u=o.NONE}function Yt(H){Et(H)}function Jt(H){let at;switch(H.button){case 0:at=a.mouseButtons.LEFT;break;case 1:at=a.mouseButtons.MIDDLE;break;case 2:at=a.mouseButtons.RIGHT;break;default:at=-1}switch(at){case ls.DOLLY:if(a.enableZoom===!1)return;ut(H),u=o.DOLLY;break;case ls.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(a.enablePan===!1)return;K(H),u=o.PAN}else{if(a.enableRotate===!1)return;nt(H),u=o.ROTATE}break;case ls.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(a.enableRotate===!1)return;nt(H),u=o.ROTATE}else{if(a.enablePan===!1)return;K(H),u=o.PAN}break;default:u=o.NONE}u!==o.NONE&&a.dispatchEvent(Jh)}function re(H){switch(u){case o.ROTATE:if(a.enableRotate===!1)return;$(H);break;case o.DOLLY:if(a.enableZoom===!1)return;T(H);break;case o.PAN:if(a.enablePan===!1)return;j(H);break}}function me(H){a.enabled===!1||a.enableZoom===!1||u!==o.NONE||(H.preventDefault(),a.dispatchEvent(Jh),V(H),a.dispatchEvent(Pv))}function Ve(H){a.enabled===!1||a.enablePan===!1||I(H)}function N(H){switch(Lt(H),w.length){case 1:switch(a.touches.ONE){case us.ROTATE:if(a.enableRotate===!1)return;Y(),u=o.TOUCH_ROTATE;break;case us.PAN:if(a.enablePan===!1)return;pt(),u=o.TOUCH_PAN;break;default:u=o.NONE}break;case 2:switch(a.touches.TWO){case us.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;Ct(),u=o.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;st(),u=o.TOUCH_DOLLY_ROTATE;break;default:u=o.NONE}break;default:u=o.NONE}u!==o.NONE&&a.dispatchEvent(Jh)}function R(H){switch(Lt(H),u){case o.TOUCH_ROTATE:if(a.enableRotate===!1)return;wt(H),a.update();break;case o.TOUCH_PAN:if(a.enablePan===!1)return;_t(H),a.update();break;case o.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;At(H),a.update();break;case o.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Dt(H),a.update();break;default:u=o.NONE}}function Q(H){a.enabled!==!1&&H.preventDefault()}function yt(H){w.push(H)}function Et(H){delete F[H.pointerId];for(let at=0;at<w.length;at++)if(w[at].pointerId==H.pointerId){w.splice(at,1);return}}function Lt(H){let at=F[H.pointerId];at===void 0&&(at=new Qt,F[H.pointerId]=at),at.set(H.pageX,H.pageY)}function Ht(H){const at=H.pointerId===w[0].pointerId?w[1]:w[0];return F[at.pointerId]}a.domElement.addEventListener("contextmenu",Q),a.domElement.addEventListener("pointerdown",ie),a.domElement.addEventListener("pointercancel",Yt),a.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}const Nv=new Xa,Xu=new X;class P_ extends AA{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new yn(t,3)),this.setAttribute("uv",new yn(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,a=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),a.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new vd(n,6,1);return this.setAttribute("instanceStart",new Pi(a,3,0)),this.setAttribute("instanceEnd",new Pi(a,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new vd(n,6,1);return this.setAttribute("instanceColorStart",new Pi(a,3,0)),this.setAttribute("instanceColorEnd",new Pi(a,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new SA(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Nv.setFromBufferAttribute(n),this.boundingBox.union(Nv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let o=0;for(let u=0,h=t.count;u<h;u++)Xu.fromBufferAttribute(t,u),o=Math.max(o,a.distanceToSquared(Xu)),Xu.fromBufferAttribute(n,u),o=Math.max(o,a.distanceToSquared(Xu));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Tt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Qt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Un.line={uniforms:Cd.merge([Tt.common,Tt.fog,Tt.line]),vertexShader:`
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
		`};class Dr extends Wa{constructor(t){super({type:"LineMaterial",uniforms:Cd.clone(Un.line.uniforms),vertexShader:Un.line.vertexShader,fragmentShader:Un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const Bv=new X,Fv=new X,vn=new Xe,_n=new Xe,Di=new Xe,td=new X,ed=new $e,Mn=new TA,Hv=new X,Yu=new Xa,qu=new Ws,Li=new Xe;let Oi,yd,N_,Mr;function Gv(l,t,n){return Li.set(0,0,-t,1).applyMatrix4(l.projectionMatrix),Li.multiplyScalar(1/Li.w),Li.x=Mr/n.width,Li.y=Mr/n.height,Li.applyMatrix4(l.projectionMatrixInverse),Li.multiplyScalar(1/Li.w),Math.abs(Math.max(Li.x,Li.y))}function kA(l,t){for(let n=0,a=yd.count;n<a;n++){Mn.start.fromBufferAttribute(yd,n),Mn.end.fromBufferAttribute(N_,n);const o=new X,u=new X;Oi.distanceSqToSegment(Mn.start,Mn.end,u,o),u.distanceTo(o)<Mr*.5&&t.push({point:u,pointOnLine:o,distance:Oi.origin.distanceTo(u),object:l,face:null,faceIndex:n,uv:null,uv2:null})}}function WA(l,t,n){const a=t.projectionMatrix,u=l.material.resolution,h=l.matrixWorld,f=l.geometry,m=f.attributes.instanceStart,p=f.attributes.instanceEnd,g=-t.near;Oi.at(1,Di),Di.w=1,Di.applyMatrix4(t.matrixWorldInverse),Di.applyMatrix4(a),Di.multiplyScalar(1/Di.w),Di.x*=u.x/2,Di.y*=u.y/2,Di.z=0,td.copy(Di),ed.multiplyMatrices(t.matrixWorldInverse,h);for(let _=0,y=m.count;_<y;_++){if(vn.fromBufferAttribute(m,_),_n.fromBufferAttribute(p,_),vn.w=1,_n.w=1,vn.applyMatrix4(ed),_n.applyMatrix4(ed),vn.z>g&&_n.z>g)continue;if(vn.z>g){const A=vn.z-_n.z,D=(vn.z-g)/A;vn.lerp(_n,D)}else if(_n.z>g){const A=_n.z-vn.z,D=(_n.z-g)/A;_n.lerp(vn,D)}vn.applyMatrix4(a),_n.applyMatrix4(a),vn.multiplyScalar(1/vn.w),_n.multiplyScalar(1/_n.w),vn.x*=u.x/2,vn.y*=u.y/2,_n.x*=u.x/2,_n.y*=u.y/2,Mn.start.copy(vn),Mn.start.z=0,Mn.end.copy(_n),Mn.end.z=0;const E=Mn.closestPointToPointParameter(td,!0);Mn.at(E,Hv);const x=yS.lerp(vn.z,_n.z,E),v=x>=-1&&x<=1,S=td.distanceTo(Hv)<Mr*.5;if(v&&S){Mn.start.fromBufferAttribute(m,_),Mn.end.fromBufferAttribute(p,_),Mn.start.applyMatrix4(h),Mn.end.applyMatrix4(h);const A=new X,D=new X;Oi.distanceSqToSegment(Mn.start,Mn.end,D,A),n.push({point:D,pointOnLine:A,distance:Oi.origin.distanceTo(D),object:l,face:null,faceIndex:_,uv:null,uv2:null})}}}class XA extends Ui{constructor(t=new P_,n=new Dr({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,a=t.attributes.instanceEnd,o=new Float32Array(2*n.count);for(let h=0,f=0,m=n.count;h<m;h++,f+=2)Bv.fromBufferAttribute(n,h),Fv.fromBufferAttribute(a,h),o[f]=f===0?0:o[f-1],o[f+1]=o[f]+Bv.distanceTo(Fv);const u=new vd(o,2,1);return t.setAttribute("instanceDistanceStart",new Pi(u,1,0)),t.setAttribute("instanceDistanceEnd",new Pi(u,1,1)),this}raycast(t,n){const a=this.material.worldUnits,o=t.camera;o===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const u=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Oi=t.ray;const h=this.matrixWorld,f=this.geometry,m=this.material;Mr=m.linewidth+u,yd=f.attributes.instanceStart,N_=f.attributes.instanceEnd,f.boundingSphere===null&&f.computeBoundingSphere(),qu.copy(f.boundingSphere).applyMatrix4(h);let p;if(a)p=Mr*.5;else{const _=Math.max(o.near,qu.distanceToPoint(Oi.origin));p=Gv(o,_,m.resolution)}if(qu.radius+=p,Oi.intersectsSphere(qu)===!1)return;f.boundingBox===null&&f.computeBoundingBox(),Yu.copy(f.boundingBox).applyMatrix4(h);let g;if(a)g=Mr*.5;else{const _=Math.max(o.near,Yu.distanceToPoint(Oi.origin));g=Gv(o,_,m.resolution)}Yu.expandByScalar(g),Oi.intersectsBox(Yu)!==!1&&(a?kA(this,n):WA(this,o,n))}}class Us extends P_{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,a=new Float32Array(2*n);for(let o=0;o<n;o+=3)a[2*o]=t[o],a[2*o+1]=t[o+1],a[2*o+2]=t[o+2],a[2*o+3]=t[o+3],a[2*o+4]=t[o+4],a[2*o+5]=t[o+5];return super.setPositions(a),this}setColors(t){const n=t.length-3,a=new Float32Array(2*n);for(let o=0;o<n;o+=3)a[2*o]=t[o],a[2*o+1]=t[o+1],a[2*o+2]=t[o+2],a[2*o+3]=t[o+3],a[2*o+4]=t[o+4],a[2*o+5]=t[o+5];return super.setColors(a),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class tl extends XA{constructor(t=new Us,n=new Dr({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}var Ju={exports:{}},YA=Ju.exports,Iv;function qA(){return Iv||(Iv=1,function(l){(function(t,n){l.exports?l.exports=n():t.log=n()})(YA,function(){var t=function(){},n="undefined",a=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function u(x,v){var S=x[v];if(typeof S.bind=="function")return S.bind(x);try{return Function.prototype.bind.call(S,x)}catch{return function(){return Function.prototype.apply.apply(S,[x,arguments])}}}function h(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function f(x){return x==="debug"&&(x="log"),typeof console===n?!1:x==="trace"&&a?h:console[x]!==void 0?u(console,x):console.log!==void 0?u(console,"log"):t}function m(x,v){for(var S=0;S<o.length;S++){var A=o[S];this[A]=S<x?t:this.methodFactory(A,x,v)}this.log=this.debug}function p(x,v,S){return function(){typeof console!==n&&(m.call(this,v,S),this[x].apply(this,arguments))}}function g(x,v,S){return f(x)||p.apply(this,arguments)}function _(x,v,S){var A=this,D;v=v??"WARN";var z="loglevel";typeof x=="string"?z+=":"+x:typeof x=="symbol"&&(z=void 0);function w(O){var k=(o[O]||"silent").toUpperCase();if(!(typeof window===n||!z)){try{window.localStorage[z]=k;return}catch{}try{window.document.cookie=encodeURIComponent(z)+"="+k+";"}catch{}}}function F(){var O;if(!(typeof window===n||!z)){try{O=window.localStorage[z]}catch{}if(typeof O===n)try{var k=window.document.cookie,vt=k.indexOf(encodeURIComponent(z)+"=");vt!==-1&&(O=/^([^;]+)/.exec(k.slice(vt))[1])}catch{}return A.levels[O]===void 0&&(O=void 0),O}}function it(){if(!(typeof window===n||!z)){try{window.localStorage.removeItem(z);return}catch{}try{window.document.cookie=encodeURIComponent(z)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}A.name=x,A.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},A.methodFactory=S||g,A.getLevel=function(){return D},A.setLevel=function(O,k){if(typeof O=="string"&&A.levels[O.toUpperCase()]!==void 0&&(O=A.levels[O.toUpperCase()]),typeof O=="number"&&O>=0&&O<=A.levels.SILENT){if(D=O,k!==!1&&w(O),m.call(A,O,x),typeof console===n&&O<A.levels.SILENT)return"No console available for logging"}else throw"log.setLevel() called with invalid level: "+O},A.setDefaultLevel=function(O){v=O,F()||A.setLevel(O,!1)},A.resetLevel=function(){A.setLevel(v,!1),it()},A.enableAll=function(O){A.setLevel(A.levels.TRACE,O)},A.disableAll=function(O){A.setLevel(A.levels.SILENT,O)};var L=F();L==null&&(L=v),A.setLevel(L,!1)}var y=new _,M={};y.getLogger=function(v){if(typeof v!="symbol"&&typeof v!="string"||v==="")throw new TypeError("You must supply a name when creating a logger.");var S=M[v];return S||(S=M[v]=new _(v,y.getLevel(),y.methodFactory)),S};var E=typeof window!==n?window.log:void 0;return y.noConflict=function(){return typeof window!==n&&window.log===y&&(window.log=E),y},y.getLoggers=function(){return M},y.default=y,y})}(Ju)),Ju.exports}var Ud=qA();const Vv="/assets/X-sprite-e6X39Jyk.png",kv="/assets/Y-sprite-pu68vFFI.png",Wv="/assets/Z-sprite-B0BzGVvQ.png",oi=Ud.getLogger("axes");oi.setLevel("debug");class ca{constructor(){this.axisLength=50,this.axisThickness=.0012,this.xColor=new pe().setHex(16711680),this.yColor=new pe().setHex(65280),this.zColor=new pe().setHex(2105599),this.ticksEvery=10,this.tickLength=.4,this.tickThickness=.0012}}function Pd(l,t){const n=new Us;n.setPositions(l);const a=new tl(n,t);return a.computeLineDistances(),a.scale.set(1,1,1),a}function jA(l=new ca){const t=[];t.push(-l.axisLength,0,0),t.push(0,0,0),t.push(l.axisLength,0,0);const n=new Dr({color:l.xColor,linewidth:l.axisThickness,vertexColors:!1,dashed:!1,alphaToCoverage:!0});return Pd(t,n)}function ZA(l=new ca){const t=[];t.push(0,-l.axisLength,0),t.push(0,0,0),t.push(0,l.axisLength,0);const n=new Dr({color:l.yColor,linewidth:l.axisThickness,vertexColors:!1,dashed:!1,alphaToCoverage:!0});return Pd(t,n)}function $A(l=new ca){const t=[];t.push(0,0,-l.axisLength),t.push(0,0,0),t.push(0,0,l.axisLength);const n=new Dr({color:l.zColor,linewidth:l.axisThickness,vertexColors:!1,dashed:!1,alphaToCoverage:!0});return Pd(t,n)}function Is(l,t,n){const a=new Dr({color:t,linewidth:n,vertexColors:!1,dashed:!1,alphaToCoverage:!0}),o=new Us;o.setPositions(l);const u=new tl(o,a);return u.computeLineDistances(),u.scale.set(1,1,1),u}function QA(l=new ca){const t=[],n=Math.floor(l.axisLength/l.ticksEvery);if(n<1)return oi.info("No ticks to mark"),t;oi.info(`Number of ticks: ${n}`);const a=l.axisThickness+l.tickLength*2;for(let o=-n;o<=n;o++)if(o!==0){{const u=[];u.push(l.ticksEvery*o,-a,0),u.push(l.ticksEvery*o,a,0),t.push(Is(u,l.xColor,l.tickThickness))}{const u=[];u.push(l.ticksEvery*o,0,-a),u.push(l.ticksEvery*o,0,a),t.push(Is(u,l.xColor,l.tickThickness))}}return t}function KA(l=new ca){const t=[],n=Math.floor(l.axisLength/l.ticksEvery);if(n<1)return t;const a=l.axisThickness+l.tickLength*2;for(let o=-n;o<=n;o++)if(o!==0){{const u=[];u.push(-a,l.ticksEvery*o,0),u.push(a,l.ticksEvery*o,0),t.push(Is(u,l.yColor,l.tickThickness))}{const u=[];u.push(0,l.ticksEvery*o,-a),u.push(0,l.ticksEvery*o,a),t.push(Is(u,l.yColor,l.tickThickness))}}return t}function JA(l=new ca){const t=[],n=Math.floor(l.axisLength/l.ticksEvery);if(n<1)return t;const a=l.axisThickness+l.tickLength*2;for(let o=-n;o<=n;o++)if(o!==0){{const u=[];u.push(-a,0,l.ticksEvery*o),u.push(a,0,l.ticksEvery*o),t.push(Is(u,l.zColor,l.tickThickness))}{const u=[];u.push(0,-a,l.ticksEvery*o),u.push(0,a,l.ticksEvery*o),t.push(Is(u,l.zColor,l.tickThickness))}}return t}function tT(l=new ca){oi.debug(`Loading X sprite from ${Vv}`);const t=new Qh().load(Vv,g=>{oi.debug("X sprite loaded")},null,g=>{oi.debug("Error while loading X sprite"),console.error(g)}),n=new Ku({map:t,color:16777215,transparent:!0}),a=new Zh(n);a.scale.setScalar(2),a.position.set(l.axisLength*1.05,0,0),oi.debug(`Loading Y sprite from ${kv}`);const o=new Qh().load(kv,g=>{oi.debug("Y sprite loaded")},null,g=>{oi.debug("Error while loading Y sprite"),console.error(g)}),u=new Ku({map:o,color:16777215,transparent:!0}),h=new Zh(u);h.scale.setScalar(2),h.position.set(0,l.axisLength*1.05,0),oi.debug(`Loading Z sprite from ${Wv}`);const f=new Qh().load(Wv,g=>{oi.debug("Z sprite loaded")},null,g=>{oi.debug("Error while loading Z sprite"),console.error(g)}),m=new Ku({map:f,color:16777215,transparent:!0}),p=new Zh(m);return p.scale.setScalar(2),p.position.set(0,0,l.axisLength*1.05),[a,h,p]}function eT(l=new ca){const t=[];return t.push(jA(l)),t.push(ZA(l)),t.push($A(l)),l.ticksEvery>0&&(t.push(...QA(l)),t.push(...KA(l)),t.push(...JA(l))),t.push(...tT(l)),t}var nd={exports:{}},Ce={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function nT(){if(Xv)return Ce;Xv=1;var l=60103,t=60106,n=60107,a=60108,o=60114,u=60109,h=60110,f=60112,m=60113,p=60120,g=60115,_=60116,y=60121,M=60122,E=60117,x=60129,v=60131;if(typeof Symbol=="function"&&Symbol.for){var S=Symbol.for;l=S("react.element"),t=S("react.portal"),n=S("react.fragment"),a=S("react.strict_mode"),o=S("react.profiler"),u=S("react.provider"),h=S("react.context"),f=S("react.forward_ref"),m=S("react.suspense"),p=S("react.suspense_list"),g=S("react.memo"),_=S("react.lazy"),y=S("react.block"),M=S("react.server.block"),E=S("react.fundamental"),x=S("react.debug_trace_mode"),v=S("react.legacy_hidden")}function A(G){if(typeof G=="object"&&G!==null){var J=G.$$typeof;switch(J){case l:switch(G=G.type,G){case n:case o:case a:case m:case p:return G;default:switch(G=G&&G.$$typeof,G){case h:case f:case _:case g:case u:return G;default:return J}}case t:return J}}}var D=u,z=l,w=f,F=n,it=_,L=g,O=t,k=o,vt=a,St=m;return Ce.ContextConsumer=h,Ce.ContextProvider=D,Ce.Element=z,Ce.ForwardRef=w,Ce.Fragment=F,Ce.Lazy=it,Ce.Memo=L,Ce.Portal=O,Ce.Profiler=k,Ce.StrictMode=vt,Ce.Suspense=St,Ce.isAsyncMode=function(){return!1},Ce.isConcurrentMode=function(){return!1},Ce.isContextConsumer=function(G){return A(G)===h},Ce.isContextProvider=function(G){return A(G)===u},Ce.isElement=function(G){return typeof G=="object"&&G!==null&&G.$$typeof===l},Ce.isForwardRef=function(G){return A(G)===f},Ce.isFragment=function(G){return A(G)===n},Ce.isLazy=function(G){return A(G)===_},Ce.isMemo=function(G){return A(G)===g},Ce.isPortal=function(G){return A(G)===t},Ce.isProfiler=function(G){return A(G)===o},Ce.isStrictMode=function(G){return A(G)===a},Ce.isSuspense=function(G){return A(G)===m},Ce.isValidElementType=function(G){return typeof G=="string"||typeof G=="function"||G===n||G===o||G===x||G===a||G===m||G===p||G===v||typeof G=="object"&&G!==null&&(G.$$typeof===_||G.$$typeof===g||G.$$typeof===u||G.$$typeof===h||G.$$typeof===f||G.$$typeof===E||G.$$typeof===y||G[0]===M)},Ce.typeOf=A,Ce}var Yv;function iT(){return Yv||(Yv=1,nd.exports=nT()),nd.exports}var B_=iT();function aT(l){function t(V,I,Y,pt,U){for(var Ct=0,st=0,wt=0,_t=0,Ot,At,Dt=0,ie=0,kt,Kt=kt=Ot=0,Yt=0,Jt=0,re=0,me=0,Ve=Y.length,N=Ve-1,R,Q="",yt="",Et="",Lt="",Ht;Yt<Ve;){if(At=Y.charCodeAt(Yt),Yt===N&&st+_t+wt+Ct!==0&&(st!==0&&(At=st===47?10:47),_t=wt=Ct=0,Ve++,N++),st+_t+wt+Ct===0){if(Yt===N&&(0<Jt&&(Q=Q.replace(y,"")),0<Q.trim().length)){switch(At){case 32:case 9:case 59:case 13:case 10:break;default:Q+=Y.charAt(Yt)}At=59}switch(At){case 123:for(Q=Q.trim(),Ot=Q.charCodeAt(0),kt=1,me=++Yt;Yt<Ve;){switch(At=Y.charCodeAt(Yt)){case 123:kt++;break;case 125:kt--;break;case 47:switch(At=Y.charCodeAt(Yt+1)){case 42:case 47:t:{for(Kt=Yt+1;Kt<N;++Kt)switch(Y.charCodeAt(Kt)){case 47:if(At===42&&Y.charCodeAt(Kt-1)===42&&Yt+2!==Kt){Yt=Kt+1;break t}break;case 10:if(At===47){Yt=Kt+1;break t}}Yt=Kt}}break;case 91:At++;case 40:At++;case 34:case 39:for(;Yt++<N&&Y.charCodeAt(Yt)!==At;);}if(kt===0)break;Yt++}switch(kt=Y.substring(me,Yt),Ot===0&&(Ot=(Q=Q.replace(_,"").trim()).charCodeAt(0)),Ot){case 64:switch(0<Jt&&(Q=Q.replace(y,"")),At=Q.charCodeAt(1),At){case 100:case 109:case 115:case 45:Jt=I;break;default:Jt=nt}if(kt=t(I,Jt,kt,At,U+1),me=kt.length,0<K&&(Jt=n(nt,Q,re),Ht=f(3,kt,Jt,I,G,St,me,At,U,pt),Q=Jt.join(""),Ht!==void 0&&(me=(kt=Ht.trim()).length)===0&&(At=0,kt="")),0<me)switch(At){case 115:Q=Q.replace(F,h);case 100:case 109:case 45:kt=Q+"{"+kt+"}";break;case 107:Q=Q.replace(A,"$1 $2"),kt=Q+"{"+kt+"}",kt=ct===1||ct===2&&u("@"+kt,3)?"@-webkit-"+kt+"@"+kt:"@"+kt;break;default:kt=Q+kt,pt===112&&(kt=(yt+=kt,""))}else kt="";break;default:kt=t(I,n(I,Q,re),kt,pt,U+1)}Et+=kt,kt=re=Jt=Kt=Ot=0,Q="",At=Y.charCodeAt(++Yt);break;case 125:case 59:if(Q=(0<Jt?Q.replace(y,""):Q).trim(),1<(me=Q.length))switch(Kt===0&&(Ot=Q.charCodeAt(0),Ot===45||96<Ot&&123>Ot)&&(me=(Q=Q.replace(" ",":")).length),0<K&&(Ht=f(1,Q,I,V,G,St,yt.length,pt,U,pt))!==void 0&&(me=(Q=Ht.trim()).length)===0&&(Q="\0\0"),Ot=Q.charCodeAt(0),At=Q.charCodeAt(1),Ot){case 0:break;case 64:if(At===105||At===99){Lt+=Q+Y.charAt(Yt);break}default:Q.charCodeAt(me-1)!==58&&(yt+=o(Q,Ot,At,Q.charCodeAt(2)))}re=Jt=Kt=Ot=0,Q="",At=Y.charCodeAt(++Yt)}}switch(At){case 13:case 10:st===47?st=0:1+Ot===0&&pt!==107&&0<Q.length&&(Jt=1,Q+="\0"),0<K*T&&f(0,Q,I,V,G,St,yt.length,pt,U,pt),St=1,G++;break;case 59:case 125:if(st+_t+wt+Ct===0){St++;break}default:switch(St++,R=Y.charAt(Yt),At){case 9:case 32:if(_t+Ct+st===0)switch(Dt){case 44:case 58:case 9:case 32:R="";break;default:At!==32&&(R=" ")}break;case 0:R="\\0";break;case 12:R="\\f";break;case 11:R="\\v";break;case 38:_t+st+Ct===0&&(Jt=re=1,R="\f"+R);break;case 108:if(_t+st+Ct+J===0&&0<Kt)switch(Yt-Kt){case 2:Dt===112&&Y.charCodeAt(Yt-3)===58&&(J=Dt);case 8:ie===111&&(J=ie)}break;case 58:_t+st+Ct===0&&(Kt=Yt);break;case 44:st+wt+_t+Ct===0&&(Jt=1,R+="\r");break;case 34:case 39:st===0&&(_t=_t===At?0:_t===0?At:_t);break;case 91:_t+st+wt===0&&Ct++;break;case 93:_t+st+wt===0&&Ct--;break;case 41:_t+st+Ct===0&&wt--;break;case 40:if(_t+st+Ct===0){if(Ot===0)switch(2*Dt+3*ie){case 533:break;default:Ot=1}wt++}break;case 64:st+wt+_t+Ct+Kt+kt===0&&(kt=1);break;case 42:case 47:if(!(0<_t+Ct+wt))switch(st){case 0:switch(2*At+3*Y.charCodeAt(Yt+1)){case 235:st=47;break;case 220:me=Yt,st=42}break;case 42:At===47&&Dt===42&&me+2!==Yt&&(Y.charCodeAt(me+2)===33&&(yt+=Y.substring(me,Yt+1)),R="",st=0)}}st===0&&(Q+=R)}ie=Dt,Dt=At,Yt++}if(me=yt.length,0<me){if(Jt=I,0<K&&(Ht=f(2,yt,Jt,V,G,St,me,pt,U,pt),Ht!==void 0&&(yt=Ht).length===0))return Lt+yt+Et;if(yt=Jt.join(",")+"{"+yt+"}",ct*J!==0){switch(ct!==2||u(yt,2)||(J=0),J){case 111:yt=yt.replace(z,":-moz-$1")+yt;break;case 112:yt=yt.replace(D,"::-webkit-input-$1")+yt.replace(D,"::-moz-$1")+yt.replace(D,":-ms-input-$1")+yt}J=0}}return Lt+yt+Et}function n(V,I,Y){var pt=I.trim().split(v);I=pt;var U=pt.length,Ct=V.length;switch(Ct){case 0:case 1:var st=0;for(V=Ct===0?"":V[0]+" ";st<U;++st)I[st]=a(V,I[st],Y).trim();break;default:var wt=st=0;for(I=[];st<U;++st)for(var _t=0;_t<Ct;++_t)I[wt++]=a(V[_t]+" ",pt[st],Y).trim()}return I}function a(V,I,Y){var pt=I.charCodeAt(0);switch(33>pt&&(pt=(I=I.trim()).charCodeAt(0)),pt){case 38:return I.replace(S,"$1"+V.trim());case 58:return V.trim()+I.replace(S,"$1"+V.trim());default:if(0<1*Y&&0<I.indexOf("\f"))return I.replace(S,(V.charCodeAt(0)===58?"":"$1")+V.trim())}return V+I}function o(V,I,Y,pt){var U=V+";",Ct=2*I+3*Y+4*pt;if(Ct===944){V=U.indexOf(":",9)+1;var st=U.substring(V,U.length-1).trim();return st=U.substring(0,V).trim()+st+";",ct===1||ct===2&&u(st,1)?"-webkit-"+st+st:st}if(ct===0||ct===2&&!u(U,1))return U;switch(Ct){case 1015:return U.charCodeAt(10)===97?"-webkit-"+U+U:U;case 951:return U.charCodeAt(3)===116?"-webkit-"+U+U:U;case 963:return U.charCodeAt(5)===110?"-webkit-"+U+U:U;case 1009:if(U.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+U+U;case 978:return"-webkit-"+U+"-moz-"+U+U;case 1019:case 983:return"-webkit-"+U+"-moz-"+U+"-ms-"+U+U;case 883:if(U.charCodeAt(8)===45)return"-webkit-"+U+U;if(0<U.indexOf("image-set(",11))return U.replace(vt,"$1-webkit-$2")+U;break;case 932:if(U.charCodeAt(4)===45)switch(U.charCodeAt(5)){case 103:return"-webkit-box-"+U.replace("-grow","")+"-webkit-"+U+"-ms-"+U.replace("grow","positive")+U;case 115:return"-webkit-"+U+"-ms-"+U.replace("shrink","negative")+U;case 98:return"-webkit-"+U+"-ms-"+U.replace("basis","preferred-size")+U}return"-webkit-"+U+"-ms-"+U+U;case 964:return"-webkit-"+U+"-ms-flex-"+U+U;case 1023:if(U.charCodeAt(8)!==99)break;return st=U.substring(U.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+st+"-webkit-"+U+"-ms-flex-pack"+st+U;case 1005:return E.test(U)?U.replace(M,":-webkit-")+U.replace(M,":-moz-")+U:U;case 1e3:switch(st=U.substring(13).trim(),I=st.indexOf("-")+1,st.charCodeAt(0)+st.charCodeAt(I)){case 226:st=U.replace(w,"tb");break;case 232:st=U.replace(w,"tb-rl");break;case 220:st=U.replace(w,"lr");break;default:return U}return"-webkit-"+U+"-ms-"+st+U;case 1017:if(U.indexOf("sticky",9)===-1)break;case 975:switch(I=(U=V).length-10,st=(U.charCodeAt(I)===33?U.substring(0,I):U).substring(V.indexOf(":",7)+1).trim(),Ct=st.charCodeAt(0)+(st.charCodeAt(7)|0)){case 203:if(111>st.charCodeAt(8))break;case 115:U=U.replace(st,"-webkit-"+st)+";"+U;break;case 207:case 102:U=U.replace(st,"-webkit-"+(102<Ct?"inline-":"")+"box")+";"+U.replace(st,"-webkit-"+st)+";"+U.replace(st,"-ms-"+st+"box")+";"+U}return U+";";case 938:if(U.charCodeAt(5)===45)switch(U.charCodeAt(6)){case 105:return st=U.replace("-items",""),"-webkit-"+U+"-webkit-box-"+st+"-ms-flex-"+st+U;case 115:return"-webkit-"+U+"-ms-flex-item-"+U.replace(L,"")+U;default:return"-webkit-"+U+"-ms-flex-line-pack"+U.replace("align-content","").replace(L,"")+U}break;case 973:case 989:if(U.charCodeAt(3)!==45||U.charCodeAt(4)===122)break;case 931:case 953:if(k.test(V)===!0)return(st=V.substring(V.indexOf(":")+1)).charCodeAt(0)===115?o(V.replace("stretch","fill-available"),I,Y,pt).replace(":fill-available",":stretch"):U.replace(st,"-webkit-"+st)+U.replace(st,"-moz-"+st.replace("fill-",""))+U;break;case 962:if(U="-webkit-"+U+(U.charCodeAt(5)===102?"-ms-"+U:"")+U,Y+pt===211&&U.charCodeAt(13)===105&&0<U.indexOf("transform",10))return U.substring(0,U.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+U}return U}function u(V,I){var Y=V.indexOf(I===1?":":"{"),pt=V.substring(0,I!==3?Y:10);return Y=V.substring(Y+1,V.length-1),$(I!==2?pt:pt.replace(O,"$1"),Y,I)}function h(V,I){var Y=o(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return Y!==I+";"?Y.replace(it," or ($1)").substring(4):"("+I+")"}function f(V,I,Y,pt,U,Ct,st,wt,_t,Ot){for(var At=0,Dt=I,ie;At<K;++At)switch(ie=ut[At].call(g,V,Dt,Y,pt,U,Ct,st,wt,_t,Ot)){case void 0:case!1:case!0:case null:break;default:Dt=ie}if(Dt!==I)return Dt}function m(V){switch(V){case void 0:case null:K=ut.length=0;break;default:if(typeof V=="function")ut[K++]=V;else if(typeof V=="object")for(var I=0,Y=V.length;I<Y;++I)m(V[I]);else T=!!V|0}return m}function p(V){return V=V.prefix,V!==void 0&&($=null,V?typeof V!="function"?ct=1:(ct=2,$=V):ct=0),p}function g(V,I){var Y=V;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),j=Y,Y=[j],0<K){var pt=f(-1,I,Y,Y,G,St,0,0,0,0);pt!==void 0&&typeof pt=="string"&&(I=pt)}var U=t(nt,Y,I,0,0);return 0<K&&(pt=f(-2,U,Y,Y,G,St,U.length,0,0,0),pt!==void 0&&(U=pt)),j="",J=0,St=G=1,U}var _=/^\0+/g,y=/[\0\r\f]/g,M=/: */g,E=/zoo|gra/,x=/([,: ])(transform)/g,v=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,A=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,z=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,F=/\(\s*(.*)\s*\)/g,it=/([\s\S]*?);/g,L=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,k=/stretch|:\s*\w+\-(?:conte|avail)/,vt=/([^-])(image-set\()/,St=1,G=1,J=0,ct=1,nt=[],ut=[],K=0,$=null,T=0,j="";return g.use=m,g.set=p,l!==void 0&&p(l),g}var rT={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function sT(l){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=l(n)),t[n]}}var oT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,qv=sT(function(l){return oT.test(l)||l.charCodeAt(0)===111&&l.charCodeAt(1)===110&&l.charCodeAt(2)<91}),id={exports:{}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function lT(){if(jv)return Me;jv=1;var l=typeof Symbol=="function"&&Symbol.for,t=l?Symbol.for("react.element"):60103,n=l?Symbol.for("react.portal"):60106,a=l?Symbol.for("react.fragment"):60107,o=l?Symbol.for("react.strict_mode"):60108,u=l?Symbol.for("react.profiler"):60114,h=l?Symbol.for("react.provider"):60109,f=l?Symbol.for("react.context"):60110,m=l?Symbol.for("react.async_mode"):60111,p=l?Symbol.for("react.concurrent_mode"):60111,g=l?Symbol.for("react.forward_ref"):60112,_=l?Symbol.for("react.suspense"):60113,y=l?Symbol.for("react.suspense_list"):60120,M=l?Symbol.for("react.memo"):60115,E=l?Symbol.for("react.lazy"):60116,x=l?Symbol.for("react.block"):60121,v=l?Symbol.for("react.fundamental"):60117,S=l?Symbol.for("react.responder"):60118,A=l?Symbol.for("react.scope"):60119;function D(w){if(typeof w=="object"&&w!==null){var F=w.$$typeof;switch(F){case t:switch(w=w.type,w){case m:case p:case a:case u:case o:case _:return w;default:switch(w=w&&w.$$typeof,w){case f:case g:case E:case M:case h:return w;default:return F}}case n:return F}}}function z(w){return D(w)===p}return Me.AsyncMode=m,Me.ConcurrentMode=p,Me.ContextConsumer=f,Me.ContextProvider=h,Me.Element=t,Me.ForwardRef=g,Me.Fragment=a,Me.Lazy=E,Me.Memo=M,Me.Portal=n,Me.Profiler=u,Me.StrictMode=o,Me.Suspense=_,Me.isAsyncMode=function(w){return z(w)||D(w)===m},Me.isConcurrentMode=z,Me.isContextConsumer=function(w){return D(w)===f},Me.isContextProvider=function(w){return D(w)===h},Me.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===t},Me.isForwardRef=function(w){return D(w)===g},Me.isFragment=function(w){return D(w)===a},Me.isLazy=function(w){return D(w)===E},Me.isMemo=function(w){return D(w)===M},Me.isPortal=function(w){return D(w)===n},Me.isProfiler=function(w){return D(w)===u},Me.isStrictMode=function(w){return D(w)===o},Me.isSuspense=function(w){return D(w)===_},Me.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===a||w===p||w===u||w===o||w===_||w===y||typeof w=="object"&&w!==null&&(w.$$typeof===E||w.$$typeof===M||w.$$typeof===h||w.$$typeof===f||w.$$typeof===g||w.$$typeof===v||w.$$typeof===S||w.$$typeof===A||w.$$typeof===x)},Me.typeOf=D,Me}var Zv;function uT(){return Zv||(Zv=1,id.exports=lT()),id.exports}var ad,$v;function cT(){if($v)return ad;$v=1;var l=uT(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[l.ForwardRef]=a,u[l.Memo]=o;function h(E){return l.isMemo(E)?o:u[E.$$typeof]||t}var f=Object.defineProperty,m=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,y=Object.prototype;function M(E,x,v){if(typeof x!="string"){if(y){var S=_(x);S&&S!==y&&M(E,S,v)}var A=m(x);p&&(A=A.concat(p(x)));for(var D=h(E),z=h(x),w=0;w<A.length;++w){var F=A[w];if(!n[F]&&!(v&&v[F])&&!(z&&z[F])&&!(D&&D[F])){var it=g(x,F);try{f(E,F,it)}catch{}}}}return E}return ad=M,ad}var fT=cT();const hT=o_(fT);var Ri={};function oa(){return(oa=Object.assign||function(l){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(l[a]=n[a])}return l}).apply(this,arguments)}var Qv=function(l,t){for(var n=[l[0]],a=0,o=t.length;a<o;a+=1)n.push(t[a],l[a+1]);return n},xd=function(l){return l!==null&&typeof l=="object"&&(l.toString?l.toString():Object.prototype.toString.call(l))==="[object Object]"&&!B_.typeOf(l)},ic=Object.freeze([]),ka=Object.freeze({});function rl(l){return typeof l=="function"}function Kv(l){return l.displayName||l.name||"Component"}function Nd(l){return l&&typeof l.styledComponentId=="string"}var Vs=typeof process<"u"&&(Ri.REACT_APP_SC_ATTR||Ri.SC_ATTR)||"data-styled",Bd=typeof window<"u"&&"HTMLElement"in window,dT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ri.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ri.REACT_APP_SC_DISABLE_SPEEDY!==""?Ri.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ri.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ri.SC_DISABLE_SPEEDY!==void 0&&Ri.SC_DISABLE_SPEEDY!==""&&Ri.SC_DISABLE_SPEEDY!=="false"&&Ri.SC_DISABLE_SPEEDY);function ul(l){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];throw new Error("An error occurred. See https://git.io/JUIaE#"+l+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var pT=function(){function l(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=l.prototype;return t.indexOfGroup=function(n){for(var a=0,o=0;o<n;o++)a+=this.groupSizes[o];return a},t.insertRules=function(n,a){if(n>=this.groupSizes.length){for(var o=this.groupSizes,u=o.length,h=u;n>=h;)(h<<=1)<0&&ul(16,""+n);this.groupSizes=new Uint32Array(h),this.groupSizes.set(o),this.length=h;for(var f=u;f<h;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(n+1),p=0,g=a.length;p<g;p++)this.tag.insertRule(m,a[p])&&(this.groupSizes[n]++,m++)},t.clearGroup=function(n){if(n<this.length){var a=this.groupSizes[n],o=this.indexOfGroup(n),u=o+a;this.groupSizes[n]=0;for(var h=o;h<u;h++)this.tag.deleteRule(o)}},t.getGroup=function(n){var a="";if(n>=this.length||this.groupSizes[n]===0)return a;for(var o=this.groupSizes[n],u=this.indexOfGroup(n),h=u+o,f=u;f<h;f++)a+=this.tag.getRule(f)+`/*!sc*/
`;return a},l}(),tc=new Map,ac=new Map,el=1,ju=function(l){if(tc.has(l))return tc.get(l);for(;ac.has(el);)el++;var t=el++;return tc.set(l,t),ac.set(t,l),t},mT=function(l){return ac.get(l)},gT=function(l,t){t>=el&&(el=t+1),tc.set(l,t),ac.set(t,l)},vT="style["+Vs+'][data-styled-version="5.3.6"]',_T=new RegExp("^"+Vs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),yT=function(l,t,n){for(var a,o=n.split(","),u=0,h=o.length;u<h;u++)(a=o[u])&&l.registerName(t,a)},xT=function(l,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),a=[],o=0,u=n.length;o<u;o++){var h=n[o].trim();if(h){var f=h.match(_T);if(f){var m=0|parseInt(f[1],10),p=f[2];m!==0&&(gT(p,m),yT(l,p,f[3]),l.getTag().insertRules(m,a)),a.length=0}else a.push(h)}}},bT=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},F_=function(l){var t=document.head,n=l||t,a=document.createElement("style"),o=function(f){for(var m=f.childNodes,p=m.length;p>=0;p--){var g=m[p];if(g&&g.nodeType===1&&g.hasAttribute(Vs))return g}}(n),u=o!==void 0?o.nextSibling:null;a.setAttribute(Vs,"active"),a.setAttribute("data-styled-version","5.3.6");var h=bT();return h&&a.setAttribute("nonce",h),n.insertBefore(a,u),a},ST=function(){function l(n){var a=this.element=F_(n);a.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,h=0,f=u.length;h<f;h++){var m=u[h];if(m.ownerNode===o)return m}ul(17)}(a),this.length=0}var t=l.prototype;return t.insertRule=function(n,a){try{return this.sheet.insertRule(a,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var a=this.sheet.cssRules[n];return a!==void 0&&typeof a.cssText=="string"?a.cssText:""},l}(),MT=function(){function l(n){var a=this.element=F_(n);this.nodes=a.childNodes,this.length=0}var t=l.prototype;return t.insertRule=function(n,a){if(n<=this.length&&n>=0){var o=document.createTextNode(a),u=this.nodes[n];return this.element.insertBefore(o,u||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},l}(),wT=function(){function l(n){this.rules=[],this.length=0}var t=l.prototype;return t.insertRule=function(n,a){return n<=this.length&&(this.rules.splice(n,0,a),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},l}(),Jv=Bd,ET={isServer:!Bd,useCSSOMInjection:!dT},H_=function(){function l(n,a,o){n===void 0&&(n=ka),a===void 0&&(a={}),this.options=oa({},ET,{},n),this.gs=a,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Bd&&Jv&&(Jv=!1,function(u){for(var h=document.querySelectorAll(vT),f=0,m=h.length;f<m;f++){var p=h[f];p&&p.getAttribute(Vs)!=="active"&&(xT(u,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}l.registerId=function(n){return ju(n)};var t=l.prototype;return t.reconstructWithOptions=function(n,a){return a===void 0&&(a=!0),new l(oa({},this.options,{},n),this.gs,a&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(a=this.options).isServer,u=a.useCSSOMInjection,h=a.target,n=o?new wT(h):u?new ST(h):new MT(h),new pT(n)));var n,a,o,u,h},t.hasNameForId=function(n,a){return this.names.has(n)&&this.names.get(n).has(a)},t.registerName=function(n,a){if(ju(n),this.names.has(n))this.names.get(n).add(a);else{var o=new Set;o.add(a),this.names.set(n,o)}},t.insertRules=function(n,a,o){this.registerName(n,a),this.getTag().insertRules(ju(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ju(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var a=n.getTag(),o=a.length,u="",h=0;h<o;h++){var f=mT(h);if(f!==void 0){var m=n.names.get(f),p=a.getGroup(h);if(m&&p&&m.size){var g=Vs+".g"+h+'[id="'+f+'"]',_="";m!==void 0&&m.forEach(function(y){y.length>0&&(_+=y+",")}),u+=""+p+g+'{content:"'+_+`"}/*!sc*/
`}}}return u}(this)},l}(),AT=/(a)(d)/gi,t_=function(l){return String.fromCharCode(l+(l>25?39:97))};function bd(l){var t,n="";for(t=Math.abs(l);t>52;t=t/52|0)n=t_(t%52)+n;return(t_(t%52)+n).replace(AT,"$1-$2")}var Ls=function(l,t){for(var n=t.length;n;)l=33*l^t.charCodeAt(--n);return l},G_=function(l){return Ls(5381,l)};function TT(l){for(var t=0;t<l.length;t+=1){var n=l[t];if(rl(n)&&!Nd(n))return!1}return!0}var CT=G_("5.3.6"),DT=function(){function l(t,n,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&TT(t),this.componentId=n,this.baseHash=Ls(CT,n),this.baseStyle=a,H_.registerId(n)}return l.prototype.generateAndInjectStyles=function(t,n,a){var o=this.componentId,u=[];if(this.baseStyle&&u.push(this.baseStyle.generateAndInjectStyles(t,n,a)),this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))u.push(this.staticRulesId);else{var h=ks(this.rules,t,n,a).join(""),f=bd(Ls(this.baseHash,h)>>>0);if(!n.hasNameForId(o,f)){var m=a(h,"."+f,void 0,o);n.insertRules(o,f,m)}u.push(f),this.staticRulesId=f}else{for(var p=this.rules.length,g=Ls(this.baseHash,a.hash),_="",y=0;y<p;y++){var M=this.rules[y];if(typeof M=="string")_+=M;else if(M){var E=ks(M,t,n,a),x=Array.isArray(E)?E.join(""):E;g=Ls(g,x+y),_+=x}}if(_){var v=bd(g>>>0);if(!n.hasNameForId(o,v)){var S=a(_,"."+v,void 0,o);n.insertRules(o,v,S)}u.push(v)}}return u.join(" ")},l}(),LT=/^\s*\/\/.*$/gm,RT=[":","[",".","#"];function zT(l){var t,n,a,o,u=ka,h=u.options,f=h===void 0?ka:h,m=u.plugins,p=m===void 0?ic:m,g=new aT(f),_=[],y=function(x){function v(S){if(S)try{x(S+"}")}catch{}}return function(S,A,D,z,w,F,it,L,O,k){switch(S){case 1:if(O===0&&A.charCodeAt(0)===64)return x(A+";"),"";break;case 2:if(L===0)return A+"/*|*/";break;case 3:switch(L){case 102:case 112:return x(D[0]+A),"";default:return A+(k===0?"/*|*/":"")}case-2:A.split("/*|*/}").forEach(v)}}}(function(x){_.push(x)}),M=function(x,v,S){return v===0&&RT.indexOf(S[n.length])!==-1||S.match(o)?x:"."+t};function E(x,v,S,A){A===void 0&&(A="&");var D=x.replace(LT,""),z=v&&S?S+" "+v+" { "+D+" }":D;return t=A,n=v,a=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),g(S||!v?"":v,z)}return g.use([].concat(p,[function(x,v,S){x===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(a,M))},y,function(x){if(x===-2){var v=_;return _=[],v}}])),E.hash=p.length?p.reduce(function(x,v){return v.name||ul(15),Ls(x,v.name)},5381).toString():"",E}var I_=sc.createContext();I_.Consumer;var V_=sc.createContext(),OT=(V_.Consumer,new H_),Sd=zT();function UT(){return Ps.useContext(I_)||OT}function PT(){return Ps.useContext(V_)||Sd}var NT=function(){function l(t,n){var a=this;this.inject=function(o,u){u===void 0&&(u=Sd);var h=a.name+u.hash;o.hasNameForId(a.id,h)||o.insertRules(a.id,h,u(a.rules,h,"@keyframes"))},this.toString=function(){return ul(12,String(a.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return l.prototype.getName=function(t){return t===void 0&&(t=Sd),this.name+t.hash},l}(),BT=/([A-Z])/,FT=/([A-Z])/g,HT=/^ms-/,GT=function(l){return"-"+l.toLowerCase()};function e_(l){return BT.test(l)?l.replace(FT,GT).replace(HT,"-ms-"):l}var n_=function(l){return l==null||l===!1||l===""};function ks(l,t,n,a){if(Array.isArray(l)){for(var o,u=[],h=0,f=l.length;h<f;h+=1)(o=ks(l[h],t,n,a))!==""&&(Array.isArray(o)?u.push.apply(u,o):u.push(o));return u}if(n_(l))return"";if(Nd(l))return"."+l.styledComponentId;if(rl(l)){if(typeof(p=l)!="function"||p.prototype&&p.prototype.isReactComponent||!t)return l;var m=l(t);return ks(m,t,n,a)}var p;return l instanceof NT?n?(l.inject(n,a),l.getName(a)):l:xd(l)?function g(_,y){var M,E,x=[];for(var v in _)_.hasOwnProperty(v)&&!n_(_[v])&&(Array.isArray(_[v])&&_[v].isCss||rl(_[v])?x.push(e_(v)+":",_[v],";"):xd(_[v])?x.push.apply(x,g(_[v],v)):x.push(e_(v)+": "+(M=v,(E=_[v])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||M in rT?String(E).trim():E+"px")+";"));return y?[y+" {"].concat(x,["}"]):x}(l):l.toString()}var i_=function(l){return Array.isArray(l)&&(l.isCss=!0),l};function IT(l){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return rl(l)||xd(l)?i_(ks(Qv(ic,[l].concat(n)))):n.length===0&&l.length===1&&typeof l[0]=="string"?l:i_(ks(Qv(l,n)))}var VT=function(l,t,n){return n===void 0&&(n=ka),l.theme!==n.theme&&l.theme||t||n.theme},kT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,WT=/(^-|-$)/g;function rd(l){return l.replace(kT,"-").replace(WT,"")}var XT=function(l){return bd(G_(l)>>>0)};function Zu(l){return typeof l=="string"&&!0}var Md=function(l){return typeof l=="function"||typeof l=="object"&&l!==null&&!Array.isArray(l)},YT=function(l){return l!=="__proto__"&&l!=="constructor"&&l!=="prototype"};function qT(l,t,n){var a=l[n];Md(t)&&Md(a)?k_(a,t):l[n]=t}function k_(l){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];for(var o=0,u=n;o<u.length;o++){var h=u[o];if(Md(h))for(var f in h)YT(f)&&qT(l,h[f],f)}return l}var W_=sc.createContext();W_.Consumer;var sd={};function X_(l,t,n){var a=Nd(l),o=!Zu(l),u=t.attrs,h=u===void 0?ic:u,f=t.componentId,m=f===void 0?function(A,D){var z=typeof A!="string"?"sc":rd(A);sd[z]=(sd[z]||0)+1;var w=z+"-"+XT("5.3.6"+z+sd[z]);return D?D+"-"+w:w}(t.displayName,t.parentComponentId):f,p=t.displayName,g=p===void 0?function(A){return Zu(A)?"styled."+A:"Styled("+Kv(A)+")"}(l):p,_=t.displayName&&t.componentId?rd(t.displayName)+"-"+t.componentId:t.componentId||m,y=a&&l.attrs?Array.prototype.concat(l.attrs,h).filter(Boolean):h,M=t.shouldForwardProp;a&&l.shouldForwardProp&&(M=t.shouldForwardProp?function(A,D,z){return l.shouldForwardProp(A,D,z)&&t.shouldForwardProp(A,D,z)}:l.shouldForwardProp);var E,x=new DT(n,_,a?l.componentStyle:void 0),v=x.isStatic&&h.length===0,S=function(A,D){return function(z,w,F,it){var L=z.attrs,O=z.componentStyle,k=z.defaultProps,vt=z.foldedComponentIds,St=z.shouldForwardProp,G=z.styledComponentId,J=z.target,ct=function(pt,U,Ct){pt===void 0&&(pt=ka);var st=oa({},U,{theme:pt}),wt={};return Ct.forEach(function(_t){var Ot,At,Dt,ie=_t;for(Ot in rl(ie)&&(ie=ie(st)),ie)st[Ot]=wt[Ot]=Ot==="className"?(At=wt[Ot],Dt=ie[Ot],At&&Dt?At+" "+Dt:At||Dt):ie[Ot]}),[st,wt]}(VT(w,Ps.useContext(W_),k)||ka,w,L),nt=ct[0],ut=ct[1],K=function(pt,U,Ct,st){var wt=UT(),_t=PT(),Ot=U?pt.generateAndInjectStyles(ka,wt,_t):pt.generateAndInjectStyles(Ct,wt,_t);return Ot}(O,it,nt),$=F,T=ut.$as||w.$as||ut.as||w.as||J,j=Zu(T),V=ut!==w?oa({},w,{},ut):w,I={};for(var Y in V)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?I.as=V[Y]:(St?St(Y,qv,T):!j||qv(Y))&&(I[Y]=V[Y]));return w.style&&ut.style!==w.style&&(I.style=oa({},w.style,{},ut.style)),I.className=Array.prototype.concat(vt,G,K!==G?K:null,w.className,ut.className).filter(Boolean).join(" "),I.ref=$,Ps.createElement(T,I)}(E,A,D,v)};return S.displayName=g,(E=sc.forwardRef(S)).attrs=y,E.componentStyle=x,E.displayName=g,E.shouldForwardProp=M,E.foldedComponentIds=a?Array.prototype.concat(l.foldedComponentIds,l.styledComponentId):ic,E.styledComponentId=_,E.target=a?l.target:l,E.withComponent=function(A){var D=t.componentId,z=function(F,it){if(F==null)return{};var L,O,k={},vt=Object.keys(F);for(O=0;O<vt.length;O++)L=vt[O],it.indexOf(L)>=0||(k[L]=F[L]);return k}(t,["componentId"]),w=D&&D+"-"+(Zu(A)?A:rd(Kv(A)));return X_(A,oa({},z,{attrs:y,componentId:w}),n)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=a?k_({},l.defaultProps,A):A}}),E.toString=function(){return"."+E.styledComponentId},o&&hT(E,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var rc=function(l){return function t(n,a,o){if(o===void 0&&(o=ka),!B_.isValidElementType(a))return ul(1,String(a));var u=function(){return n(a,o,IT.apply(void 0,arguments))};return u.withConfig=function(h){return t(n,a,oa({},o,{},h))},u.attrs=function(h){return t(n,a,oa({},o,{attrs:Array.prototype.concat(o.attrs,h).filter(Boolean)}))},u}(X_,l)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(l){rc[l]=rc(l)});const jT=rc.div`
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
`,ZT=rc.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 10px;
  text-decoration: none;
   
  &:hover {
      color: goldenrod;
      transition: 200ms ease-in;
  }
`;var od={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function $T(){if(a_)return jo;a_=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var f in o)f!=="key"&&(u[f]=o[f])}else u=o;return o=u.ref,{$$typeof:l,type:a,key:h,ref:o!==void 0?o:null,props:u}}return jo.Fragment=t,jo.jsx=n,jo.jsxs=n,jo}var r_;function QT(){return r_||(r_=1,od.exports=$T()),od.exports}var Y_=QT();const sl=Y_.jsx,KT=Y_.jsxs,JT=l=>sl(jT,{children:sl(ZT,{href:l.url,target:"_blank",rel:"noreferrer",children:l.text})}),Xn=Ud.getLogger("dmp");Xn.setLevel("debug");const Ga=new X(.1,.1,.1),s_=[Ga.x,Ga.y,Ga.z,Ga.x,Ga.y,Ga.z],t3={running:!1,iterations:0,maxIterations:1e4,iterationsPerFrame:1,lineThickness:.0024,opacity:1,graphColor:16776960,showAxes:!0,showCursor:!0,cursorTracking:"manual",showRideCameraFrustrum:!1,rideCameraZoom:10},e3={main_camera_x:0,main_camera_y:0,main_camera_z:0,ride_camera_x:0,ride_camera_y:0,ride_camera_z:0};class n3 extends Ps.Component{constructor(n){super(n);de(this,"gui");de(this,"controlParams",{...t3});de(this,"statsParams",{...e3});de(this,"graphPos");de(this,"graphPts");de(this,"graphMaterial");de(this,"lineGeometry");de(this,"graphLine");de(this,"cursor");de(this,"cursorGeometry");de(this,"cursorMaterial");de(this,"scene");de(this,"renderer");de(this,"mainCamera");de(this,"rideCamera");de(this,"graphRoot");de(this,"axesRoot");de(this,"rideCameraHelper");de(this,"orbitControls");de(this,"stats");de(this,"prevGraphPos");de(this,"resetGraph",()=>{Xn.debug("Resetting graph"),this.controlParams.running=!1,this.scene.remove(this.graphRoot),this.graphRoot=new dn,this.scene.add(this.graphRoot),this.graphPos.copy(Ga),this.graphPts=[],this.graphPts.push(...s_),this.lineGeometry=new Us,this.lineGeometry.setPositions(this.graphPts),this.graphLine=new tl(this.lineGeometry,this.graphMaterial),this.graphRoot.add(this.graphLine),this.controlParams.iterations=0,this.controlParams.cursorTracking="manual",this.renderer.render(this.scene,this.mainCamera)});de(this,"resetFunctionParametersCallback",()=>{this.controlParams.running=!1,this.resetFunctionParameters()});de(this,"resetFunctionParameters",()=>{Xn.warn("Override resetFunctionParameters()!!")});de(this,"setGraphColor",()=>{Xn.debug(`Setting graph color to ${this.controlParams.graphColor}`),this.graphMaterial.color=new pe().setHex(this.controlParams.graphColor)});de(this,"setLineThickness",()=>{Xn.debug(`Setting line thickness to ${this.controlParams.lineThickness}`),this.graphMaterial.linewidth=this.controlParams.lineThickness});de(this,"setOpacity",()=>{Xn.debug(`Setting opacity to ${this.controlParams.opacity}`),this.graphMaterial.opacity=this.controlParams.opacity});de(this,"updateCursorVisibility",()=>{Xn.debug(`Setting cursor visibility to ${this.controlParams.showCursor}`),this.cursor.visible=this.controlParams.showCursor});de(this,"updateRideCamHelperVisibility",()=>{Xn.debug(`Setting ride camera helper visibility to ${this.controlParams.showRideCameraFrustrum}`),this.rideCameraHelper.visible=this.controlParams.showRideCameraFrustrum});de(this,"updateAxesVisibility",()=>{Xn.debug(`Setting axes visibility to ${this.controlParams.showAxes}`),this.axesRoot.visible=this.controlParams.showAxes});de(this,"updateDimensions",()=>{Xn.debug("Window resized"),this.setState({width:window.innerWidth,height:window.innerHeight}),this.mainCamera.aspect=window.innerWidth/window.innerHeight,this.mainCamera.updateProjectionMatrix(),this.rideCamera.aspect=window.innerWidth/window.innerHeight,this.rideCamera.updateProjectionMatrix(),this.rideCameraHelper.update(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.controlParams.cursorTracking==="ride"?this.renderer.render(this.scene,this.rideCamera):this.renderer.render(this.scene,this.mainCamera)});de(this,"animate",()=>{if(this.stats.begin(),this.controlParams.running&&this.controlParams.iterations<this.controlParams.maxIterations){for(let o=0;o<this.controlParams.iterationsPerFrame&&this.controlParams.iterations<this.controlParams.maxIterations;o++)this.prevGraphPos=this.graphPos,this.graphPos=this.advanceGraph(this.graphPos),this.graphPts.push(this.graphPos.x,this.graphPos.y,this.graphPos.z),this.controlParams.iterations++;this.lineGeometry=new Us,this.lineGeometry.setPositions(this.graphPts),this.graphRoot.remove(this.graphLine),this.graphLine=new tl(this.lineGeometry,this.graphMaterial),this.graphLine.scale.setScalar(1),this.graphLine.computeLineDistances(),this.graphRoot.add(this.graphLine),this.cursor.position.copy(this.graphPos)}else this.controlParams.iterations>=this.controlParams.maxIterations&&(this.controlParams.running=!1);let n=new X().subVectors(this.prevGraphPos,this.graphPos);n.normalize(),n.multiplyScalar(this.controlParams.rideCameraZoom);let a=new X().addVectors(this.prevGraphPos,n);this.rideCamera.position.copy(a),this.rideCamera.lookAt(this.graphPos),this.statsParams.ride_camera_x=this.rideCamera.position.x,this.statsParams.ride_camera_y=this.rideCamera.position.y,this.statsParams.ride_camera_z=this.rideCamera.position.z,this.rideCameraHelper.update(),this.controlParams.cursorTracking==="follow"?(this.orbitControls.target.copy(this.graphPos),this.orbitControls.update(),this.statsParams.main_camera_x=this.mainCamera.position.x,this.statsParams.main_camera_y=this.mainCamera.position.y,this.statsParams.main_camera_z=this.mainCamera.position.z,this.renderer.render(this.scene,this.mainCamera)):this.controlParams.cursorTracking==="ride"?this.renderer.render(this.scene,this.rideCamera):(this.statsParams.main_camera_x=this.mainCamera.position.x,this.statsParams.main_camera_y=this.mainCamera.position.y,this.statsParams.main_camera_z=this.mainCamera.position.z,this.renderer.render(this.scene,this.mainCamera)),requestAnimationFrame(this.animate),this.stats.end()});this.graphPos=new X().copy(Ga),this.prevGraphPos=new X().copy(this.graphPos),this.graphPts=[],this.controlParams.resetGraph=this.resetGraph,this.controlParams.resetParameters=this.resetFunctionParametersCallback,this.gui=new Od,this.graphPts.push(...s_),this.graphMaterial=new Dr({color:new pe().setHex(this.controlParams.graphColor),linewidth:this.controlParams.lineThickness,opacity:this.controlParams.opacity,vertexColors:!1,dashed:!1,alphaToCoverage:!0}),this.lineGeometry=new Us,this.lineGeometry.setPositions(this.graphPts),this.graphLine=new tl(this.lineGeometry,this.graphMaterial),this.graphLine.scale.setScalar(1),this.graphLine.computeLineDistances(),this.cursorGeometry=new zd(this.controlParams.lineThickness*200,8,8),this.cursorMaterial=new Td({color:16711935}),this.cursor=new Ui(this.cursorGeometry,this.cursorMaterial),this.cursor.position.copy(this.graphPos),this.scene=new yA,this.renderer=new L_({antialias:!0}),this.mainCamera=new Yn(45,window.innerWidth/window.innerHeight,.1,1e3),this.rideCamera=new Yn(45,window.innerWidth/window.innerHeight,.1,1e3),this.rideCamera.position.set(0,0,0),this.graphRoot=new dn,this.axesRoot=new dn,this.rideCameraHelper=new CA(this.rideCamera),this.scene.add(this.rideCamera),this.rideCameraHelper.visible=this.controlParams.showRideCameraFrustrum,this.scene.add(this.rideCameraHelper)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.orbitControls=new VA(this.mainCamera,this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),this.mount.appendChild(this.renderer.domElement);const n=new ca,a=eT(n);this.axesRoot.add(...a),this.scene.add(this.axesRoot),this.scene.add(this.graphRoot),this.graphRoot.add(this.graphLine),this.scene.add(this.cursor),this.mainCamera.position.z=120,this.orbitControls.update(),this.gui.title("Controls");const o=this.gui.addFolder("Simulation");o.add(this.controlParams,"running").name("Running").listen(),o.add(this.controlParams,"iterations").name("Iterations").disable().listen(),o.add(this.controlParams,"maxIterations",[1e3,5e3,1e4,25e3,5e4,75e3,1e5]).name("Max Iterations"),o.add(this.controlParams,"iterationsPerFrame",[1,5,10,25,100]).name("Iterations Per Frame"),o.add(this.controlParams,"resetGraph").name("Reset Graph");const u=this.gui.addFolder("View");u.add(this.controlParams,"lineThickness",1e-4,.01,1e-4).name("Line Thickness").onChange(this.setLineThickness),u.addColor(this.controlParams,"graphColor").name("Graph Color").listen().onChange(this.setGraphColor),u.add(this.controlParams,"opacity",.01,1,.01).name("Opacity").onChange(this.setOpacity),u.add(this.controlParams,"showAxes").name("Show Axes").onChange(this.updateAxesVisibility),u.add(this.controlParams,"showCursor").name("Show Cursor").onChange(this.updateCursorVisibility),u.add(this.controlParams,"cursorTracking",["manual","follow","ride"]).name("Cursor Tracking"),u.add(this.controlParams,"showRideCameraFrustrum").name("Show Ride Cam Frustrum").onChange(this.updateRideCamHelperVisibility),u.add(this.controlParams,"rideCameraZoom",5,100,1).name("Ride Camera Zoom"),this.createFunctionParamsGuiFolder(this.gui).add(this.controlParams,"resetParameters").name("Reset Parameters");const f=this.gui.addFolder("Camera Positions");f.add(this.statsParams,"main_camera_x").name("Main Camera X").disable().listen(),f.add(this.statsParams,"main_camera_y").name("Main Camera Y").disable().listen(),f.add(this.statsParams,"main_camera_z").name("Main Camera Z").disable().listen(),f.add(this.statsParams,"ride_camera_x").name("Ride Camera X").disable().listen(),f.add(this.statsParams,"ride_camera_y").name("Ride Camera Y").disable().listen(),f.add(this.statsParams,"ride_camera_z").name("Ride Camera Z").disable().listen(),f.close(),this.stats=new Os,document.body.appendChild(this.stats.domElement);const m=new IA(this.renderer.getContext());this.stats.addPanel(m),this.stats.showPanel(0),this.animate()}advanceGraph(n){Xn.warn("Override advanceGraph(pos)!")}createFunctionParamsGuiFolder(n){return Xn.warn("Override createFunctionParamsGuiFolder(gui)!"),n.addFolder("Function Parameters")}getFooterText(){return Xn.info("Override getFooterText()!"),{url:"https://en.wikipedia.org/wiki/Dynamical_system",text:"What are dynamical systems?"}}render(){const n=this.getFooterText();return KT("div",{children:[sl("div",{ref:a=>this.mount=a}),sl(JT,{url:n.url,text:n.text})]})}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions,!1)}}const q_=Ud.getLogger("lorenz");q_.setLevel("debug");const Zo={sigma:10,beta:8/3,rho:28,dt:.01};class i3 extends n3{constructor(){super(...arguments);de(this,"lorenzParams",{...Zo});de(this,"resetFunctionParameters",()=>{q_.debug("Resetting Lorenz parameters to defaults"),this.lorenzParams.sigma=Zo.sigma,this.lorenzParams.beta=Zo.beta,this.lorenzParams.rho=Zo.rho,this.lorenzParams.dt=Zo.dt})}advanceGraph(n){const a=this.lorenzParams.sigma*(n.y-n.x),o=n.x*(this.lorenzParams.rho-n.z)-n.y,u=n.x*n.y-this.lorenzParams.beta*n.z;return new X(n.x+a*this.lorenzParams.dt,n.y+o*this.lorenzParams.dt,n.z+u*this.lorenzParams.dt)}createFunctionParamsGuiFolder(n){const a=n.addFolder("Lorenz Parameters");return a.add(this.lorenzParams,"sigma",1e-4,20,.1).name("&sigma;").listen(),a.add(this.lorenzParams,"beta",1e-4,10,.001).name("&beta;").listen(),a.add(this.lorenzParams,"rho",1e-4,100,1).name("&rho;").listen(),a.add(this.lorenzParams,"dt",.001,.03,.001).name("&delta;t").listen(),a}getFooterText(){return{url:"https://en.wikipedia.org/wiki/Lorenz_system",text:"What is the Lorenz attractor?"}}}const a3=document.getElementById("root"),r3=lb.createRoot(a3);r3.render(sl(i3,{}));
