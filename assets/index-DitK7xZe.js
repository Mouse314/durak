(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function nT(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ud={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function iT(){if(Xv)return Bl;Xv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:l}}return Bl.Fragment=t,Bl.jsx=n,Bl.jsxs=n,Bl}var Wv;function aT(){return Wv||(Wv=1,Ud.exports=iT()),Ud.exports}var Vt=aT(),Ld={exports:{}},Fl={},Nd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function rT(){return qv||(qv=1,(function(o){function t(F,W){var q=F.length;F.push(W);t:for(;0<q;){var vt=q-1>>>1,yt=F[vt];if(0<s(yt,W))F[vt]=W,F[q]=yt,q=vt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var W=F[0],q=F.pop();if(q!==W){F[0]=q;t:for(var vt=0,yt=F.length,B=yt>>>1;vt<B;){var $=2*(vt+1)-1,xt=F[$],Et=$+1,wt=F[Et];if(0>s(xt,q))Et<yt&&0>s(wt,xt)?(F[vt]=wt,F[Et]=q,vt=Et):(F[vt]=xt,F[$]=q,vt=$);else if(Et<yt&&0>s(wt,q))F[vt]=wt,F[Et]=q,vt=Et;else break t}}return W}function s(F,W){var q=F.sortIndex-W.sortIndex;return q!==0?q:F.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,y=!1,T=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var W=n(d);W!==null;){if(W.callback===null)a(d);else if(W.startTime<=F)a(d),W.sortIndex=W.expirationTime,t(p,W);else break;W=n(d)}}function O(F){if(M=!1,C(F),!T)if(n(p)!==null)T=!0,P||(P=!0,K());else{var W=n(d);W!==null&&ot(O,W.startTime-F)}}var P=!1,N=-1,I=5,A=-1;function D(){return S?!0:!(o.unstable_now()-A<I)}function V(){if(S=!1,P){var F=o.unstable_now();A=F;var W=!0;try{t:{T=!1,M&&(M=!1,L(N),N=-1),y=!0;var q=v;try{e:{for(C(F),g=n(p);g!==null&&!(g.expirationTime>F&&D());){var vt=g.callback;if(typeof vt=="function"){g.callback=null,v=g.priorityLevel;var yt=vt(g.expirationTime<=F);if(F=o.unstable_now(),typeof yt=="function"){g.callback=yt,C(F),W=!0;break e}g===n(p)&&a(p),C(F)}else a(p);g=n(p)}if(g!==null)W=!0;else{var B=n(d);B!==null&&ot(O,B.startTime-F),W=!1}}break t}finally{g=null,v=q,y=!1}W=void 0}}finally{W?K():P=!1}}}var K;if(typeof U=="function")K=function(){U(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ut=et.port2;et.port1.onmessage=V,K=function(){ut.postMessage(null)}}else K=function(){x(V,0)};function ot(F,W){N=x(function(){F(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(F){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var q=v;v=W;try{return F()}finally{v=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=v;v=F;try{return W()}finally{v=q}},o.unstable_scheduleCallback=function(F,W,q){var vt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?vt+q:vt):q=vt,F){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=q+yt,F={id:_++,callback:W,priorityLevel:F,startTime:q,expirationTime:yt,sortIndex:-1},q>vt?(F.sortIndex=q,t(d,F),n(p)===null&&F===n(d)&&(M?(L(N),N=-1):M=!0,ot(O,q-vt))):(F.sortIndex=yt,t(p,F),T||y||(T=!0,P||(P=!0,K()))),F},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(F){var W=v;return function(){var q=v;v=W;try{return F.apply(this,arguments)}finally{v=q}}}})(Od)),Od}var Yv;function sT(){return Yv||(Yv=1,Nd.exports=rT()),Nd.exports}var Pd={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function oT(){if(jv)return oe;jv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function x(B,$,xt){this.props=B,this.context=$,this.refs=S,this.updater=xt||T}x.prototype.isReactComponent={},x.prototype.setState=function(B,$){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,$,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function L(){}L.prototype=x.prototype;function U(B,$,xt){this.props=B,this.context=$,this.refs=S,this.updater=xt||T}var C=U.prototype=new L;C.constructor=U,M(C,x.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function P(){}var N={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function A(B,$,xt){var Et=xt.ref;return{$$typeof:o,type:B,key:$,ref:Et!==void 0?Et:null,props:xt}}function D(B,$){return A(B.type,$,B.props)}function V(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function K(B){var $={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(xt){return $[xt]})}var et=/\/+/g;function ut(B,$){return typeof B=="object"&&B!==null&&B.key!=null?K(""+B.key):$.toString(36)}function ot(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function($){B.status==="pending"&&(B.status="fulfilled",B.value=$)},function($){B.status==="pending"&&(B.status="rejected",B.reason=$)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function F(B,$,xt,Et,wt){var at=typeof B;(at==="undefined"||at==="boolean")&&(B=null);var ct=!1;if(B===null)ct=!0;else switch(at){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(B.$$typeof){case o:case t:ct=!0;break;case _:return ct=B._init,F(ct(B._payload),$,xt,Et,wt)}}if(ct)return wt=wt(B),ct=Et===""?"."+ut(B,0):Et,O(wt)?(xt="",ct!=null&&(xt=ct.replace(et,"$&/")+"/"),F(wt,$,xt,"",function(Xt){return Xt})):wt!=null&&(V(wt)&&(wt=D(wt,xt+(wt.key==null||B&&B.key===wt.key?"":(""+wt.key).replace(et,"$&/")+"/")+ct)),$.push(wt)),1;ct=0;var Dt=Et===""?".":Et+":";if(O(B))for(var Bt=0;Bt<B.length;Bt++)Et=B[Bt],at=Dt+ut(Et,Bt),ct+=F(Et,$,xt,at,wt);else if(Bt=y(B),typeof Bt=="function")for(B=Bt.call(B),Bt=0;!(Et=B.next()).done;)Et=Et.value,at=Dt+ut(Et,Bt++),ct+=F(Et,$,xt,at,wt);else if(at==="object"){if(typeof B.then=="function")return F(ot(B),$,xt,Et,wt);throw $=String(B),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ct}function W(B,$,xt){if(B==null)return B;var Et=[],wt=0;return F(B,Et,"","",function(at){return $.call(xt,at,wt++)}),Et}function q(B){if(B._status===-1){var $=B._result;$=$(),$.then(function(xt){(B._status===0||B._status===-1)&&(B._status=1,B._result=xt)},function(xt){(B._status===0||B._status===-1)&&(B._status=2,B._result=xt)}),B._status===-1&&(B._status=0,B._result=$)}if(B._status===1)return B._result.default;throw B._result}var vt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},yt={map:W,forEach:function(B,$,xt){W(B,function(){$.apply(this,arguments)},xt)},count:function(B){var $=0;return W(B,function(){$++}),$},toArray:function(B){return W(B,function($){return $})||[]},only:function(B){if(!V(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return oe.Activity=g,oe.Children=yt,oe.Component=x,oe.Fragment=n,oe.Profiler=s,oe.PureComponent=U,oe.StrictMode=a,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,oe.__COMPILER_RUNTIME={__proto__:null,c:function(B){return N.H.useMemoCache(B)}},oe.cache=function(B){return function(){return B.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(B,$,xt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Et=M({},B.props),wt=B.key;if($!=null)for(at in $.key!==void 0&&(wt=""+$.key),$)!I.call($,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&$.ref===void 0||(Et[at]=$[at]);var at=arguments.length-2;if(at===1)Et.children=xt;else if(1<at){for(var ct=Array(at),Dt=0;Dt<at;Dt++)ct[Dt]=arguments[Dt+2];Et.children=ct}return A(B.type,wt,Et)},oe.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},oe.createElement=function(B,$,xt){var Et,wt={},at=null;if($!=null)for(Et in $.key!==void 0&&(at=""+$.key),$)I.call($,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(wt[Et]=$[Et]);var ct=arguments.length-2;if(ct===1)wt.children=xt;else if(1<ct){for(var Dt=Array(ct),Bt=0;Bt<ct;Bt++)Dt[Bt]=arguments[Bt+2];wt.children=Dt}if(B&&B.defaultProps)for(Et in ct=B.defaultProps,ct)wt[Et]===void 0&&(wt[Et]=ct[Et]);return A(B,at,wt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(B){return{$$typeof:f,render:B}},oe.isValidElement=V,oe.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:q}},oe.memo=function(B,$){return{$$typeof:d,type:B,compare:$===void 0?null:$}},oe.startTransition=function(B){var $=N.T,xt={};N.T=xt;try{var Et=B(),wt=N.S;wt!==null&&wt(xt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(P,vt)}catch(at){vt(at)}finally{$!==null&&xt.types!==null&&($.types=xt.types),N.T=$}},oe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},oe.use=function(B){return N.H.use(B)},oe.useActionState=function(B,$,xt){return N.H.useActionState(B,$,xt)},oe.useCallback=function(B,$){return N.H.useCallback(B,$)},oe.useContext=function(B){return N.H.useContext(B)},oe.useDebugValue=function(){},oe.useDeferredValue=function(B,$){return N.H.useDeferredValue(B,$)},oe.useEffect=function(B,$){return N.H.useEffect(B,$)},oe.useEffectEvent=function(B){return N.H.useEffectEvent(B)},oe.useId=function(){return N.H.useId()},oe.useImperativeHandle=function(B,$,xt){return N.H.useImperativeHandle(B,$,xt)},oe.useInsertionEffect=function(B,$){return N.H.useInsertionEffect(B,$)},oe.useLayoutEffect=function(B,$){return N.H.useLayoutEffect(B,$)},oe.useMemo=function(B,$){return N.H.useMemo(B,$)},oe.useOptimistic=function(B,$){return N.H.useOptimistic(B,$)},oe.useReducer=function(B,$,xt){return N.H.useReducer(B,$,xt)},oe.useRef=function(B){return N.H.useRef(B)},oe.useState=function(B){return N.H.useState(B)},oe.useSyncExternalStore=function(B,$,xt){return N.H.useSyncExternalStore(B,$,xt)},oe.useTransition=function(){return N.H.useTransition()},oe.version="19.2.0",oe}var Zv;function Lm(){return Zv||(Zv=1,Pd.exports=oT()),Pd.exports}var zd={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function lT(){if(Kv)return zn;Kv=1;var o=Lm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},zn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},zn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},zn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},zn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},zn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},zn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},zn.requestFormReset=function(p){a.d.r(p)},zn.unstable_batchedUpdates=function(p,d){return p(d)},zn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},zn.useFormStatus=function(){return c.H.useHostTransitionStatus()},zn.version="19.2.0",zn}var Qv;function uT(){if(Qv)return zd.exports;Qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zd.exports=lT(),zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function cT(){if(Jv)return Fl;Jv=1;var o=sT(),t=Lm(),n=uT();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,u=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==u.return)r=h,u=m;else{for(var E=!1,R=h.child;R;){if(R===r){E=!0,r=h,u=m;break}if(R===u){E=!0,u=h,r=m;break}R=R.sibling}if(!E){for(R=m.child;R;){if(R===r){E=!0,r=m,u=h;break}if(R===u){E=!0,u=m,r=h;break}R=R.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case I:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ot=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},vt=[],yt=-1;function B(e){return{current:e}}function $(e){0>yt||(e.current=vt[yt],vt[yt]=null,yt--)}function xt(e,i){yt++,vt[yt]=e.current,e.current=i}var Et=B(null),wt=B(null),at=B(null),ct=B(null);function Dt(e,i){switch(xt(at,i),xt(wt,e),xt(Et,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?dv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=dv(i),e=pv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Et),xt(Et,e)}function Bt(){$(Et),$(wt),$(at)}function Xt(e){e.memoizedState!==null&&xt(ct,e);var i=Et.current,r=pv(i,e.type);i!==r&&(xt(wt,e),xt(Et,r))}function pe(e){wt.current===e&&($(Et),$(wt)),ct.current===e&&($(ct),Nl._currentValue=q)}var fn,G;function Ae(e){if(fn===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);fn=i&&i[1]||"",G=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fn+e+G}var ie=!1;function te(e,i){if(!e||ie)return"";ie=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(lt){var it=lt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(lt){it=lt}e.call(mt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],R=m[1];if(E&&R){var H=E.split(`
`),J=R.split(`
`);for(h=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;h<J.length&&!J[h].includes("DetermineComponentFrameRoot");)h++;if(u===H.length||h===J.length)for(u=H.length-1,h=J.length-1;1<=u&&0<=h&&H[u]!==J[h];)h--;for(;1<=u&&0<=h;u--,h--)if(H[u]!==J[h]){if(u!==1||h!==1)do if(u--,h--,0>h||H[u]!==J[h]){var ht=`
`+H[u].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=u&&0<=h);break}}}finally{ie=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Ae(r):""}function Wt(e,i){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==i&&i!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Ae("Activity");default:return""}}function Ge(e){try{var i="",r=null;do i+=Wt(e,r),r=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var kt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,tn=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,z=o.unstable_requestPaint,b=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,At=o.unstable_IdlePriority,Yt=o.log,jt=o.unstable_setDisableYieldValue,Tt=null,Rt=null;function Kt(e){if(typeof Yt=="function"&&jt(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Tt,e)}catch{}}var Pt=Math.clz32?Math.clz32:X,Ut=Math.log,le=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ut(e)/le|0)|0}var bt=256,Ct=262144,zt=4194304;function Mt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,r){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var R=u&134217727;return R!==0?(u=R&~m,u!==0?h=Mt(u):(E&=R,E!==0?h=Mt(E):r||(r=R&~e,r!==0&&(h=Mt(r))))):(R=u&~m,R!==0?h=Mt(R):E!==0?h=Mt(E):r||(r=u&~e,r!==0&&(h=Mt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Ft(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Te(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Gn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,i,r,u,h,m){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,J=e.hiddenUpdates;for(r=E&~r;0<r;){var ht=31-Pt(r),mt=1<<ht;R[ht]=0,H[ht]=-1;var it=J[ht];if(it!==null)for(J[ht]=null,ht=0;ht<it.length;ht++){var lt=it[ht];lt!==null&&(lt.lane&=-536870913)}r&=~mt}u!==0&&Yo(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Yo(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Pt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|r&261930}function Qi(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var u=31-Pt(r),h=1<<u;h&i|e[u]&i&&(e[u]|=i),r&=~h}}function bs(e,i){var r=i&-i;return r=(r&42)!==0?1:As(r),(r&(e.suspendedLanes|i))!==0?0:r}function As(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Bv(e.type))}function jo(e,i){var r=W.p;try{return W.p=e,i()}finally{W.p=r}}var oi=Math.random().toString(36).slice(2),hn="__reactFiber$"+oi,Cn="__reactProps$"+oi,Ya="__reactContainer$"+oi,Zo="__reactEvents$"+oi,bf="__reactListeners$"+oi,Af="__reactHandles$"+oi,vu="__reactResources$"+oi,Br="__reactMarker$"+oi;function w(e){delete e[hn],delete e[Cn],delete e[Zo],delete e[bf],delete e[Af]}function Y(e){var i=e[hn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Ya]||r[hn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=yv(e);e!==null;){if(r=e[hn])return r;e=yv(e)}return i}e=r,r=e.parentNode}return null}function rt(e){if(e=e[hn]||e[Ya]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function st(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Z(e){var i=e[vu];return i||(i=e[vu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gt(e){e[Br]=!0}var Lt=new Set,Ht={};function Ot(e,i){Qt(e,i),Qt(e+"Capture",i)}function Qt(e,i){for(Ht[e]=i,e=0;e<i.length;e++)Lt.add(i[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},me={};function Ue(e){return kt.call(me,e)?!0:kt.call(Jt,e)?!1:ne.test(e)?me[e]=!0:(Jt[e]=!0,!1)}function Ve(e,i,r){if(Ue(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Le(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function _e(e,i,r,u){if(u===null)e.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+u)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(e,i,r){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){r=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function wn(e){if(!e._valueTracker){var i=qe(e)?"checked":"value";e._valueTracker=be(e,i,""+e[i])}}function fa(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return e&&(u=qe(e)?e.checked?"true":"false":e.value),e=u,e!==r?(i.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fr=/[\n"\\]/g;function xe(e){return e.replace(Fr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Pn(e,i,r,u,h,m,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Gt(i)):e.value!==""+Gt(i)&&(e.value=""+Gt(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Sn(e,E,Gt(i)):r!=null?Sn(e,E,Gt(r)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Gt(R):e.removeAttribute("name")}function Vn(e,i,r,u,h,m,E,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){wn(e);return}r=r!=null?""+Gt(r):"",i=i!=null?""+Gt(i):r,R||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=R?e.checked:!!u,e.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),wn(e)}function Sn(e,i,r){i==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function rn(e,i,r,u){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&u&&(e[r].defaultSelected=!0)}else{for(r=""+Gt(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Cs(e,i,r){if(i!=null&&(i=""+Gt(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Gt(r):""}function Ji(e,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if(ot(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=Gt(i),e.defaultValue=r,u=e.textContent,u===r&&u!==""&&u!==null&&(e.value=u),wn(e)}function ws(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Qy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function c_(e,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,r):typeof r!="number"||r===0||Qy.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function f_(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&r[h]!==u&&c_(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&c_(e,m,i[m])}function Rf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$y=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xu(e){return $y.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ha(){}var Cf=null;function wf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Us=null;function h_(e){var i=rt(e);if(i&&(e=i.stateNode)){var r=e[Cn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Pn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xe(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==e&&u.form===e.form){var h=u[Cn]||null;if(!h)throw Error(a(90));Pn(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===e.form&&fa(u)}break t;case"textarea":Cs(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&rn(e,!!r.multiple,i,!1)}}}var Df=!1;function d_(e,i,r){if(Df)return e(i,r);Df=!0;try{var u=e(i);return u}finally{if(Df=!1,(Ds!==null||Us!==null)&&(sc(),Ds&&(i=Ds,e=Us,Us=Ds=null,h_(i),e)))for(i=0;i<e.length;i++)h_(e[i])}}function Ko(e,i){var r=e.stateNode;if(r===null)return null;var u=r[Cn]||null;if(u===null)return null;r=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(da)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Uf=!1}var ja=null,Lf=null,Su=null;function p_(){if(Su)return Su;var e,i=Lf,r=i.length,u,h="value"in ja?ja.value:ja.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var E=r-e;for(u=1;u<=E&&i[r-u]===h[m-u];u++);return Su=h.slice(e,1<u?1-u:void 0)}function yu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Mu(){return!0}function m_(){return!1}function Yn(e){function i(r,u,h,m,E){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Mu:m_,this.isPropagationStopped=m_,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mu)},persist:function(){},isPersistent:Mu}),i}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=Yn(Ir),Jo=g({},Ir,{view:0,detail:0}),tM=Yn(Jo),Nf,Of,$o,Tu=g({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(Nf=e.screenX-$o.screenX,Of=e.screenY-$o.screenY):Of=Nf=0,$o=e),Nf)},movementY:function(e){return"movementY"in e?e.movementY:Of}}),__=Yn(Tu),eM=g({},Tu,{dataTransfer:0}),nM=Yn(eM),iM=g({},Jo,{relatedTarget:0}),Pf=Yn(iM),aM=g({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),rM=Yn(aM),sM=g({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oM=Yn(sM),lM=g({},Ir,{data:0}),g_=Yn(lM),uM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=fM[e])?!!i[e]:!1}function zf(){return hM}var dM=g({},Jo,{key:function(e){if(e.key){var i=uM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=yu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(e){return e.type==="keypress"?yu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pM=Yn(dM),mM=g({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v_=Yn(mM),_M=g({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),gM=Yn(_M),vM=g({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),xM=Yn(vM),SM=g({},Tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yM=Yn(SM),MM=g({},Ir,{newState:0,oldState:0}),EM=Yn(MM),TM=[9,13,27,32],Bf=da&&"CompositionEvent"in window,tl=null;da&&"documentMode"in document&&(tl=document.documentMode);var bM=da&&"TextEvent"in window&&!tl,x_=da&&(!Bf||tl&&8<tl&&11>=tl),S_=" ",y_=!1;function M_(e,i){switch(e){case"keyup":return TM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ls=!1;function AM(e,i){switch(e){case"compositionend":return E_(i);case"keypress":return i.which!==32?null:(y_=!0,S_);case"textInput":return e=i.data,e===S_&&y_?null:e;default:return null}}function RM(e,i){if(Ls)return e==="compositionend"||!Bf&&M_(e,i)?(e=p_(),Su=Lf=ja=null,Ls=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return x_&&i.locale!=="ko"?null:i.data;default:return null}}var CM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!CM[e.type]:i==="textarea"}function b_(e,i,r,u){Ds?Us?Us.push(u):Us=[u]:Ds=u,i=dc(i,"onChange"),0<i.length&&(r=new Eu("onChange","change",null,r,u),e.push({event:r,listeners:i}))}var el=null,nl=null;function wM(e){ov(e,0)}function bu(e){var i=st(e);if(fa(i))return e}function A_(e,i){if(e==="change")return i}var R_=!1;if(da){var Ff;if(da){var If="oninput"in document;if(!If){var C_=document.createElement("div");C_.setAttribute("oninput","return;"),If=typeof C_.oninput=="function"}Ff=If}else Ff=!1;R_=Ff&&(!document.documentMode||9<document.documentMode)}function w_(){el&&(el.detachEvent("onpropertychange",D_),nl=el=null)}function D_(e){if(e.propertyName==="value"&&bu(nl)){var i=[];b_(i,nl,e,wf(e)),d_(wM,i)}}function DM(e,i,r){e==="focusin"?(w_(),el=i,nl=r,el.attachEvent("onpropertychange",D_)):e==="focusout"&&w_()}function UM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(nl)}function LM(e,i){if(e==="click")return bu(i)}function NM(e,i){if(e==="input"||e==="change")return bu(i)}function OM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var li=typeof Object.is=="function"?Object.is:OM;function il(e,i){if(li(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!kt.call(i,h)||!li(e[h],i[h]))return!1}return!0}function U_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L_(e,i){var r=U_(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=i&&u>=i)return{node:r,offset:i-e};e=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=U_(r)}}function N_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?N_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function O_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Tn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Tn(e.document)}return i}function Hf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var PM=da&&"documentMode"in document&&11>=document.documentMode,Ns=null,Gf=null,al=null,Vf=!1;function P_(e,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vf||Ns==null||Ns!==Tn(u)||(u=Ns,"selectionStart"in u&&Hf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),al&&il(al,u)||(al=u,u=dc(Gf,"onSelect"),0<u.length&&(i=new Eu("onSelect","select",null,i,r),e.push({event:i,listeners:u}),i.target=Ns)))}function Hr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Os={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionrun:Hr("Transition","TransitionRun"),transitionstart:Hr("Transition","TransitionStart"),transitioncancel:Hr("Transition","TransitionCancel"),transitionend:Hr("Transition","TransitionEnd")},kf={},z_={};da&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Gr(e){if(kf[e])return kf[e];if(!Os[e])return e;var i=Os[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in z_)return kf[e]=i[r];return e}var B_=Gr("animationend"),F_=Gr("animationiteration"),I_=Gr("animationstart"),zM=Gr("transitionrun"),BM=Gr("transitionstart"),FM=Gr("transitioncancel"),H_=Gr("transitionend"),G_=new Map,Xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xf.push("scrollEnd");function Ii(e,i){G_.set(e,i),Ot(i,[e])}var Au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],Ps=0,Wf=0;function Ru(){for(var e=Ps,i=Wf=Ps=0;i<e;){var r=Ti[i];Ti[i++]=null;var u=Ti[i];Ti[i++]=null;var h=Ti[i];Ti[i++]=null;var m=Ti[i];if(Ti[i++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&V_(r,h,m)}}function Cu(e,i,r,u){Ti[Ps++]=e,Ti[Ps++]=i,Ti[Ps++]=r,Ti[Ps++]=u,Wf|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function qf(e,i,r,u){return Cu(e,i,r,u),wu(e)}function Vr(e,i){return Cu(e,null,null,i),wu(e)}function V_(e,i,r){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Pt(r),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=r|536870912),m):null}function wu(e){if(50<Al)throw Al=0,ed=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var zs={};function IM(e,i,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,i,r,u){return new IM(e,i,r,u)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,i){var r=e.alternate;return r===null?(r=ui(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function k_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Du(e,i,r,u,h,m){var E=0;if(u=e,typeof e=="function")Yf(e)&&(E=1);else if(typeof e=="string")E=XE(e,r,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ui(31,r,i,h),e.elementType=A,e.lanes=m,e;case M:return kr(r.children,h,m,i);case S:E=8,h|=24;break;case x:return e=ui(12,r,i,h|2),e.elementType=x,e.lanes=m,e;case O:return e=ui(13,r,i,h),e.elementType=O,e.lanes=m,e;case P:return e=ui(19,r,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:E=10;break t;case L:E=9;break t;case C:E=11;break t;case N:E=14;break t;case I:E=16,u=null;break t}E=29,r=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=ui(E,r,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function kr(e,i,r,u){return e=ui(7,e,u,i),e.lanes=r,e}function jf(e,i,r){return e=ui(6,e,null,i),e.lanes=r,e}function X_(e){var i=ui(18,null,null,0);return i.stateNode=e,i}function Zf(e,i,r){return i=ui(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var W_=new WeakMap;function bi(e,i){if(typeof e=="object"&&e!==null){var r=W_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ge(i)},W_.set(e,i),i)}return{value:e,source:i,stack:Ge(i)}}var Bs=[],Fs=0,Uu=null,rl=0,Ai=[],Ri=0,Za=null,$i=1,ta="";function ma(e,i){Bs[Fs++]=rl,Bs[Fs++]=Uu,Uu=e,rl=i}function q_(e,i,r){Ai[Ri++]=$i,Ai[Ri++]=ta,Ai[Ri++]=Za,Za=e;var u=$i;e=ta;var h=32-Pt(u)-1;u&=~(1<<h),r+=1;var m=32-Pt(i)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,$i=1<<32-Pt(i)+h|r<<h|u,ta=m+e}else $i=1<<m|r<<h|u,ta=e}function Kf(e){e.return!==null&&(ma(e,1),q_(e,1,0))}function Qf(e){for(;e===Uu;)Uu=Bs[--Fs],Bs[Fs]=null,rl=Bs[--Fs],Bs[Fs]=null;for(;e===Za;)Za=Ai[--Ri],Ai[Ri]=null,ta=Ai[--Ri],Ai[Ri]=null,$i=Ai[--Ri],Ai[Ri]=null}function Y_(e,i){Ai[Ri++]=$i,Ai[Ri++]=ta,Ai[Ri++]=Za,$i=i.id,ta=i.overflow,Za=e}var Dn=null,Ye=null,Me=!1,Ka=null,Ci=!1,Jf=Error(a(519));function Qa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(bi(i,e)),Jf}function j_(e){var i=e.stateNode,r=e.type,u=e.memoizedProps;switch(i[hn]=e,i[Cn]=u,r){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(r=0;r<Cl.length;r++)ve(Cl[r],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),Vn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),Ji(i,u.value,u.defaultValue,u.children)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||fv(i.textContent,r)?(u.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),u.onScroll!=null&&ve("scroll",i),u.onScrollEnd!=null&&ve("scrollend",i),u.onClick!=null&&(i.onclick=ha),i=!0):i=!1,i||Qa(e,!0)}function Z_(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Dn=Dn.return}}function Is(e){if(e!==Dn)return!1;if(!Me)return Z_(e),Me=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||_d(e.type,e.memoizedProps)),r=!r),r&&Ye&&Qa(e),Z_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=Sv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=Sv(e)}else i===27?(i=Ye,fr(e.type)?(e=yd,yd=null,Ye=e):Ye=i):Ye=Dn?Di(e.stateNode.nextSibling):null;return!0}function Xr(){Ye=Dn=null,Me=!1}function $f(){var e=Ka;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Ka=null),e}function sl(e){Ka===null?Ka=[e]:Ka.push(e)}var th=B(null),Wr=null,_a=null;function Ja(e,i,r){xt(th,i._currentValue),i._currentValue=r}function ga(e){e._currentValue=th.current,$(th)}function eh(e,i,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===r)break;e=e.return}}function nh(e,i,r,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var R=m;m=h;for(var H=0;H<i.length;H++)if(R.context===i[H]){m.lanes|=r,R=m.alternate,R!==null&&(R.lanes|=r),eh(m.return,r,e),u||(E=null);break t}m=R.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),eh(E,r,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Hs(e,i,r,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var R=h.type;li(h.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(h===ct.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}h=h.return}e!==null&&nh(i,e,r,u),i.flags|=262144}function Lu(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qr(e){Wr=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return K_(Wr,e)}function Nu(e,i){return Wr===null&&qr(e),K_(e,i)}function K_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},_a===null){if(e===null)throw Error(a(308));_a=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else _a=_a.next=i;return r}var HM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},GM=o.unstable_scheduleCallback,VM=o.unstable_NormalPriority,dn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ih(){return{controller:new HM,data:new Map,refCount:0}}function ol(e){e.refCount--,e.refCount===0&&GM(VM,function(){e.controller.abort()})}var ll=null,ah=0,Gs=0,Vs=null;function kM(e,i){if(ll===null){var r=ll=[];ah=0,Gs=od(),Vs={status:"pending",value:void 0,then:function(u){r.push(u)}}}return ah++,i.then(Q_,Q_),i}function Q_(){if(--ah===0&&ll!==null){Vs!==null&&(Vs.status="fulfilled");var e=ll;ll=null,Gs=0,Vs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function XM(e,i){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var J_=F.S;F.S=function(e,i){P0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&kM(e,i),J_!==null&&J_(e,i)};var Yr=B(null);function rh(){var e=Yr.current;return e!==null?e:ke.pooledCache}function Ou(e,i){i===null?xt(Yr,Yr.current):xt(Yr,i.pool)}function $_(){var e=rh();return e===null?null:{parent:dn._currentValue,pool:e}}var ks=Error(a(460)),sh=Error(a(474)),Pu=Error(a(542)),zu={then:function(){}};function tg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function eg(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(ha,ha),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ig(e),e;default:if(typeof i.status=="string")i.then(ha,ha);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ig(e),e}throw Zr=i,ks}}function jr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Zr=r,ks):r}}var Zr=null;function ng(){if(Zr===null)throw Error(a(459));var e=Zr;return Zr=null,e}function ig(e){if(e===ks||e===Pu)throw Error(a(483))}var Xs=null,ul=0;function Bu(e){var i=ul;return ul+=1,Xs===null&&(Xs=[]),eg(Xs,e,i)}function cl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Fu(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ag(e){function i(j,k){if(e){var Q=j.deletions;Q===null?(j.deletions=[k],j.flags|=16):Q.push(k)}}function r(j,k){if(!e)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function u(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function h(j,k){return j=pa(j,k),j.index=0,j.sibling=null,j}function m(j,k,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<k?(j.flags|=67108866,k):Q):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function E(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,Q,pt){return k===null||k.tag!==6?(k=jf(Q,j.mode,pt),k.return=j,k):(k=h(k,Q),k.return=j,k)}function H(j,k,Q,pt){var $t=Q.type;return $t===M?ht(j,k,Q.props.children,pt,Q.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===I&&jr($t)===k.type)?(k=h(k,Q.props),cl(k,Q),k.return=j,k):(k=Du(Q.type,Q.key,Q.props,null,j.mode,pt),cl(k,Q),k.return=j,k)}function J(j,k,Q,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Zf(Q,j.mode,pt),k.return=j,k):(k=h(k,Q.children||[]),k.return=j,k)}function ht(j,k,Q,pt,$t){return k===null||k.tag!==7?(k=kr(Q,j.mode,pt,$t),k.return=j,k):(k=h(k,Q),k.return=j,k)}function mt(j,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=jf(""+k,j.mode,Q),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return Q=Du(k.type,k.key,k.props,null,j.mode,Q),cl(Q,k),Q.return=j,Q;case T:return k=Zf(k,j.mode,Q),k.return=j,k;case I:return k=jr(k),mt(j,k,Q)}if(ot(k)||K(k))return k=kr(k,j.mode,Q,null),k.return=j,k;if(typeof k.then=="function")return mt(j,Bu(k),Q);if(k.$$typeof===U)return mt(j,Nu(j,k),Q);Fu(j,k)}return null}function it(j,k,Q,pt){var $t=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $t!==null?null:R(j,k,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===$t?H(j,k,Q,pt):null;case T:return Q.key===$t?J(j,k,Q,pt):null;case I:return Q=jr(Q),it(j,k,Q,pt)}if(ot(Q)||K(Q))return $t!==null?null:ht(j,k,Q,pt,null);if(typeof Q.then=="function")return it(j,k,Bu(Q),pt);if(Q.$$typeof===U)return it(j,k,Nu(j,Q),pt);Fu(j,Q)}return null}function lt(j,k,Q,pt,$t){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(Q)||null,R(k,j,""+pt,$t);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return j=j.get(pt.key===null?Q:pt.key)||null,H(k,j,pt,$t);case T:return j=j.get(pt.key===null?Q:pt.key)||null,J(k,j,pt,$t);case I:return pt=jr(pt),lt(j,k,Q,pt,$t)}if(ot(pt)||K(pt))return j=j.get(Q)||null,ht(k,j,pt,$t,null);if(typeof pt.then=="function")return lt(j,k,Q,Bu(pt),$t);if(pt.$$typeof===U)return lt(j,k,Q,Nu(k,pt),$t);Fu(k,pt)}return null}function It(j,k,Q,pt){for(var $t=null,Re=null,qt=k,ce=k=0,ye=null;qt!==null&&ce<Q.length;ce++){qt.index>ce?(ye=qt,qt=null):ye=qt.sibling;var Ce=it(j,qt,Q[ce],pt);if(Ce===null){qt===null&&(qt=ye);break}e&&qt&&Ce.alternate===null&&i(j,qt),k=m(Ce,k,ce),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,qt=ye}if(ce===Q.length)return r(j,qt),Me&&ma(j,ce),$t;if(qt===null){for(;ce<Q.length;ce++)qt=mt(j,Q[ce],pt),qt!==null&&(k=m(qt,k,ce),Re===null?$t=qt:Re.sibling=qt,Re=qt);return Me&&ma(j,ce),$t}for(qt=u(qt);ce<Q.length;ce++)ye=lt(qt,j,ce,Q[ce],pt),ye!==null&&(e&&ye.alternate!==null&&qt.delete(ye.key===null?ce:ye.key),k=m(ye,k,ce),Re===null?$t=ye:Re.sibling=ye,Re=ye);return e&&qt.forEach(function(_r){return i(j,_r)}),Me&&ma(j,ce),$t}function ee(j,k,Q,pt){if(Q==null)throw Error(a(151));for(var $t=null,Re=null,qt=k,ce=k=0,ye=null,Ce=Q.next();qt!==null&&!Ce.done;ce++,Ce=Q.next()){qt.index>ce?(ye=qt,qt=null):ye=qt.sibling;var _r=it(j,qt,Ce.value,pt);if(_r===null){qt===null&&(qt=ye);break}e&&qt&&_r.alternate===null&&i(j,qt),k=m(_r,k,ce),Re===null?$t=_r:Re.sibling=_r,Re=_r,qt=ye}if(Ce.done)return r(j,qt),Me&&ma(j,ce),$t;if(qt===null){for(;!Ce.done;ce++,Ce=Q.next())Ce=mt(j,Ce.value,pt),Ce!==null&&(k=m(Ce,k,ce),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return Me&&ma(j,ce),$t}for(qt=u(qt);!Ce.done;ce++,Ce=Q.next())Ce=lt(qt,j,ce,Ce.value,pt),Ce!==null&&(e&&Ce.alternate!==null&&qt.delete(Ce.key===null?ce:Ce.key),k=m(Ce,k,ce),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return e&&qt.forEach(function(eT){return i(j,eT)}),Me&&ma(j,ce),$t}function Ie(j,k,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var $t=Q.key;k!==null;){if(k.key===$t){if($t=Q.type,$t===M){if(k.tag===7){r(j,k.sibling),pt=h(k,Q.props.children),pt.return=j,j=pt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===I&&jr($t)===k.type){r(j,k.sibling),pt=h(k,Q.props),cl(pt,Q),pt.return=j,j=pt;break t}r(j,k);break}else i(j,k);k=k.sibling}Q.type===M?(pt=kr(Q.props.children,j.mode,pt,Q.key),pt.return=j,j=pt):(pt=Du(Q.type,Q.key,Q.props,null,j.mode,pt),cl(pt,Q),pt.return=j,j=pt)}return E(j);case T:t:{for($t=Q.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){r(j,k.sibling),pt=h(k,Q.children||[]),pt.return=j,j=pt;break t}else{r(j,k);break}else i(j,k);k=k.sibling}pt=Zf(Q,j.mode,pt),pt.return=j,j=pt}return E(j);case I:return Q=jr(Q),Ie(j,k,Q,pt)}if(ot(Q))return It(j,k,Q,pt);if(K(Q)){if($t=K(Q),typeof $t!="function")throw Error(a(150));return Q=$t.call(Q),ee(j,k,Q,pt)}if(typeof Q.then=="function")return Ie(j,k,Bu(Q),pt);if(Q.$$typeof===U)return Ie(j,k,Nu(j,Q),pt);Fu(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(r(j,k.sibling),pt=h(k,Q),pt.return=j,j=pt):(r(j,k),pt=jf(Q,j.mode,pt),pt.return=j,j=pt),E(j)):r(j,k)}return function(j,k,Q,pt){try{ul=0;var $t=Ie(j,k,Q,pt);return Xs=null,$t}catch(qt){if(qt===ks||qt===Pu)throw qt;var Re=ui(29,qt,null,j.mode);return Re.lanes=pt,Re.return=j,Re}finally{}}}var Kr=ag(!0),rg=ag(!1),$a=!1;function oh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function er(e,i,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(De&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=wu(e),V_(e,null,r),i}return Cu(e,u,i,r),wu(e)}function fl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Qi(e,r)}}function uh(e,i){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var ch=!1;function hl(){if(ch){var e=Vs;if(e!==null)throw e}}function dl(e,i,r,u){ch=!1;var h=e.updateQueue;$a=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var H=R,J=H.next;H.next=null,E===null?m=J:E.next=J,E=H;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,R=ht.lastBaseUpdate,R!==E&&(R===null?ht.firstBaseUpdate=J:R.next=J,ht.lastBaseUpdate=H))}if(m!==null){var mt=h.baseState;E=0,ht=J=H=null,R=m;do{var it=R.lane&-536870913,lt=it!==R.lane;if(lt?(Se&it)===it:(u&it)===it){it!==0&&it===Gs&&(ch=!0),ht!==null&&(ht=ht.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var It=e,ee=R;it=i;var Ie=r;switch(ee.tag){case 1:if(It=ee.payload,typeof It=="function"){mt=It.call(Ie,mt,it);break t}mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=ee.payload,it=typeof It=="function"?It.call(Ie,mt,it):It,it==null)break t;mt=g({},mt,it);break t;case 2:$a=!0}}it=R.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=h.callbacks,lt===null?h.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ht===null?(J=ht=lt,H=mt):ht=ht.next=lt,E|=it;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,h.lastBaseUpdate=lt,h.shared.pending=null}}while(!0);ht===null&&(H=mt),h.baseState=H,h.firstBaseUpdate=J,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),sr|=E,e.lanes=E,e.memoizedState=mt}}function sg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function og(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)sg(r[e],i)}var Ws=B(null),Iu=B(0);function lg(e,i){e=Aa,xt(Iu,e),xt(Ws,i),Aa=e|i.baseLanes}function fh(){xt(Iu,Aa),xt(Ws,Ws.current)}function hh(){Aa=Iu.current,$(Ws),$(Iu)}var ci=B(null),wi=null;function nr(e){var i=e.alternate;xt(sn,sn.current&1),xt(ci,e),wi===null&&(i===null||Ws.current!==null||i.memoizedState!==null)&&(wi=e)}function dh(e){xt(sn,sn.current),xt(ci,e),wi===null&&(wi=e)}function ug(e){e.tag===22?(xt(sn,sn.current),xt(ci,e),wi===null&&(wi=e)):ir()}function ir(){xt(sn,sn.current),xt(ci,ci.current)}function fi(e){$(ci),wi===e&&(wi=null),$(sn)}var sn=B(0);function Hu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||xd(r)||Sd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var va=0,ue=null,Be=null,pn=null,Gu=!1,qs=!1,Qr=!1,Vu=0,pl=0,Ys=null,WM=0;function en(){throw Error(a(321))}function ph(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!li(e[r],i[r]))return!1;return!0}function mh(e,i,r,u,h,m){return va=m,ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?qg:Dh,Qr=!1,m=r(u,h),Qr=!1,qs&&(m=fg(i,r,u,h)),cg(e),m}function cg(e){F.H=gl;var i=Be!==null&&Be.next!==null;if(va=0,pn=Be=ue=null,Gu=!1,pl=0,Ys=null,i)throw Error(a(300));e===null||mn||(e=e.dependencies,e!==null&&Lu(e)&&(mn=!0))}function fg(e,i,r,u){ue=e;var h=0;do{if(qs&&(Ys=null),pl=0,qs=!1,25<=h)throw Error(a(301));if(h+=1,pn=Be=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Yg,m=i(r,u)}while(qs);return m}function qM(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?ml(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ue.flags|=1024),i}function _h(){var e=Vu!==0;return Vu=0,e}function gh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function vh(e){if(Gu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Gu=!1}va=0,pn=Be=ue=null,qs=!1,pl=Vu=0,Ys=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ue.memoizedState=pn=e:pn=pn.next=e,pn}function on(){if(Be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=pn===null?ue.memoizedState:pn.next;if(i!==null)pn=i,Be=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},pn===null?ue.memoizedState=pn=e:pn=pn.next=e}return pn}function ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(e){var i=pl;return pl+=1,Ys===null&&(Ys=[]),e=eg(Ys,e,i),i=ue,(pn===null?i.memoizedState:pn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?qg:Dh),e}function Xu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ml(e);if(e.$$typeof===U)return Un(e)}throw Error(a(438,String(e)))}function xh(e){var i=null,r=ue.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=ue.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=ku(),ue.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),u=0;u<e;u++)r[u]=D;return i.index++,r}function xa(e,i){return typeof i=="function"?i(e):i}function Wu(e){var i=on();return Sh(i,Be,e)}function Sh(e,i,r){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var R=E=null,H=null,J=i,ht=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Se&mt)===mt:(va&mt)===mt){var it=J.revertLane;if(it===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Gs&&(ht=!0);else if((va&it)===it){J=J.next,it===Gs&&(ht=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},H===null?(R=H=mt,E=m):H=H.next=mt,ue.lanes|=it,sr|=it;mt=J.action,Qr&&r(m,mt),m=J.hasEagerState?J.eagerState:r(m,mt)}else it={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},H===null?(R=H=it,E=m):H=H.next=it,ue.lanes|=mt,sr|=mt;J=J.next}while(J!==null&&J!==i);if(H===null?E=m:H.next=R,!li(m,e.memoizedState)&&(mn=!0,ht&&(r=Vs,r!==null)))throw r;e.memoizedState=m,e.baseState=E,e.baseQueue=H,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function yh(e){var i=on(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var u=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);li(m,i.memoizedState)||(mn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,u]}function hg(e,i,r){var u=ue,h=on(),m=Me;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var E=!li((Be||h).memoizedState,r);if(E&&(h.memoizedState=r,mn=!0),h=h.queue,Th(mg.bind(null,u,h,e),[e]),h.getSnapshot!==i||E||pn!==null&&pn.memoizedState.tag&1){if(u.flags|=2048,js(9,{destroy:void 0},pg.bind(null,u,h,r,i),null),ke===null)throw Error(a(349));m||(va&127)!==0||dg(u,i,r)}return r}function dg(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ue.updateQueue,i===null?(i=ku(),ue.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function pg(e,i,r,u){i.value=r,i.getSnapshot=u,_g(i)&&gg(e)}function mg(e,i,r){return r(function(){_g(i)&&gg(e)})}function _g(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!li(e,r)}catch{return!0}}function gg(e){var i=Vr(e,2);i!==null&&Jn(i,e,2)}function Mh(e){var i=kn();if(typeof e=="function"){var r=e;if(e=r(),Qr){Kt(!0);try{r()}finally{Kt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},i}function vg(e,i,r,u){return e.baseState=r,Sh(e,Be,typeof u=="function"?u:xa)}function YM(e,i,r,u,h){if(ju(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};F.T!==null?r(!0):m.isTransition=!1,u(m),r=i.pending,r===null?(m.next=i.pending=m,xg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function xg(e,i){var r=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=F.T,E={};F.T=E;try{var R=r(h,u),H=F.S;H!==null&&H(E,R),Sg(e,i,R)}catch(J){Eh(e,i,J)}finally{m!==null&&E.types!==null&&(m.types=E.types),F.T=m}}else try{m=r(h,u),Sg(e,i,m)}catch(J){Eh(e,i,J)}}function Sg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){yg(e,i,u)},function(u){return Eh(e,i,u)}):yg(e,i,r)}function yg(e,i,r){i.status="fulfilled",i.value=r,Mg(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,xg(e,r)))}function Eh(e,i,r){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,Mg(i),i=i.next;while(i!==u)}e.action=null}function Mg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Eg(e,i){return i}function Tg(e,i){if(Me){var r=ke.formState;if(r!==null){t:{var u=ue;if(Me){if(Ye){e:{for(var h=Ye,m=Ci;h.nodeType!==8;){if(!m){h=null;break e}if(h=Di(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ye=Di(h.nextSibling),u=h.data==="F!";break t}}Qa(u)}u=!1}u&&(i=r[0])}}return r=kn(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eg,lastRenderedState:i},r.queue=u,r=kg.bind(null,ue,u),u.dispatch=r,u=Mh(!1),m=wh.bind(null,ue,!1,u.queue),u=kn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,r=YM.bind(null,ue,h,m,r),h.dispatch=r,u.memoizedState=e,[i,r,!1]}function bg(e){var i=on();return Ag(i,Be,e)}function Ag(e,i,r){if(i=Sh(e,i,Eg)[0],e=Wu(xa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=ml(i)}catch(E){throw E===ks?Pu:E}else u=i;i=on();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(ue.flags|=2048,js(9,{destroy:void 0},jM.bind(null,h,r),null)),[u,m,e]}function jM(e,i){e.action=i}function Rg(e){var i=on(),r=Be;if(r!==null)return Ag(i,r,e);on(),i=i.memoizedState,r=on();var u=r.queue.dispatch;return r.memoizedState=e,[i,u,!1]}function js(e,i,r,u){return e={tag:e,create:r,deps:u,inst:i,next:null},i=ue.updateQueue,i===null&&(i=ku(),ue.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,i.lastEffect=e),e}function Cg(){return on().memoizedState}function qu(e,i,r,u){var h=kn();ue.flags|=e,h.memoizedState=js(1|i,{destroy:void 0},r,u===void 0?null:u)}function Yu(e,i,r,u){var h=on();u=u===void 0?null:u;var m=h.memoizedState.inst;Be!==null&&u!==null&&ph(u,Be.memoizedState.deps)?h.memoizedState=js(i,m,r,u):(ue.flags|=e,h.memoizedState=js(1|i,m,r,u))}function wg(e,i){qu(8390656,8,e,i)}function Th(e,i){Yu(2048,8,e,i)}function ZM(e){ue.flags|=4;var i=ue.updateQueue;if(i===null)i=ku(),ue.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Dg(e){var i=on().memoizedState;return ZM({ref:i,nextImpl:e}),function(){if((De&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Ug(e,i){return Yu(4,2,e,i)}function Lg(e,i){return Yu(4,4,e,i)}function Ng(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Og(e,i,r){r=r!=null?r.concat([e]):null,Yu(4,4,Ng.bind(null,i,e),r)}function bh(){}function Pg(e,i){var r=on();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&ph(i,u[1])?u[0]:(r.memoizedState=[e,i],e)}function zg(e,i){var r=on();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&ph(i,u[1]))return u[0];if(u=e(),Qr){Kt(!0);try{e()}finally{Kt(!1)}}return r.memoizedState=[u,i],u}function Ah(e,i,r){return r===void 0||(va&1073741824)!==0&&(Se&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=B0(),ue.lanes|=e,sr|=e,r)}function Bg(e,i,r,u){return li(r,i)?r:Ws.current!==null?(e=Ah(e,r,u),li(e,i)||(mn=!0),e):(va&42)===0||(va&1073741824)!==0&&(Se&261930)===0?(mn=!0,e.memoizedState=r):(e=B0(),ue.lanes|=e,sr|=e,i)}function Fg(e,i,r,u,h){var m=W.p;W.p=m!==0&&8>m?m:8;var E=F.T,R={};F.T=R,wh(e,!1,i,r);try{var H=h(),J=F.S;if(J!==null&&J(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ht=XM(H,u);_l(e,i,ht,pi(e))}else _l(e,i,u,pi(e))}catch(mt){_l(e,i,{then:function(){},status:"rejected",reason:mt},pi())}finally{W.p=m,E!==null&&R.types!==null&&(E.types=R.types),F.T=E}}function KM(){}function Rh(e,i,r,u){if(e.tag!==5)throw Error(a(476));var h=Ig(e).queue;Fg(e,h,i,q,r===null?KM:function(){return Hg(e),r(u)})}function Ig(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Hg(e){var i=Ig(e);i.next===null&&(i=e.alternate.memoizedState),_l(e,i.next.queue,{},pi())}function Ch(){return Un(Nl)}function Gg(){return on().memoizedState}function Vg(){return on().memoizedState}function QM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=pi();e=tr(r);var u=er(i,e,r);u!==null&&(Jn(u,i,r),fl(u,i,r)),i={cache:ih()},e.payload=i;return}i=i.return}}function JM(e,i,r){var u=pi();r={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ju(e)?Xg(i,r):(r=qf(e,i,r,u),r!==null&&(Jn(r,e,u),Wg(r,i,u)))}function kg(e,i,r){var u=pi();_l(e,i,r,u)}function _l(e,i,r,u){var h={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(ju(e))Xg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,R=m(E,r);if(h.hasEagerState=!0,h.eagerState=R,li(R,E))return Cu(e,i,h,0),ke===null&&Ru(),!1}catch{}finally{}if(r=qf(e,i,h,u),r!==null)return Jn(r,e,u),Wg(r,i,u),!0}return!1}function wh(e,i,r,u){if(u={lane:2,revertLane:od(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},ju(e)){if(i)throw Error(a(479))}else i=qf(e,r,u,2),i!==null&&Jn(i,e,2)}function ju(e){var i=e.alternate;return e===ue||i!==null&&i===ue}function Xg(e,i){qs=Gu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Wg(e,i,r){if((r&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Qi(e,r)}}var gl={readContext:Un,use:Xu,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};gl.useEffectEvent=en;var qg={readContext:Un,use:Xu,useCallback:function(e,i){return kn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:wg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,qu(4194308,4,Ng.bind(null,i,e),r)},useLayoutEffect:function(e,i){return qu(4194308,4,e,i)},useInsertionEffect:function(e,i){qu(4,2,e,i)},useMemo:function(e,i){var r=kn();i=i===void 0?null:i;var u=e();if(Qr){Kt(!0);try{e()}finally{Kt(!1)}}return r.memoizedState=[u,i],u},useReducer:function(e,i,r){var u=kn();if(r!==void 0){var h=r(i);if(Qr){Kt(!0);try{r(i)}finally{Kt(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=JM.bind(null,ue,e),[u.memoizedState,e]},useRef:function(e){var i=kn();return e={current:e},i.memoizedState=e},useState:function(e){e=Mh(e);var i=e.queue,r=kg.bind(null,ue,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:bh,useDeferredValue:function(e,i){var r=kn();return Ah(r,e,i)},useTransition:function(){var e=Mh(!1);return e=Fg.bind(null,ue,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var u=ue,h=kn();if(Me){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),ke===null)throw Error(a(349));(Se&127)!==0||dg(u,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,wg(mg.bind(null,u,m,e),[e]),u.flags|=2048,js(9,{destroy:void 0},pg.bind(null,u,m,r,i),null),r},useId:function(){var e=kn(),i=ke.identifierPrefix;if(Me){var r=ta,u=$i;r=(u&~(1<<32-Pt(u)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Vu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=WM++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Ch,useFormState:Tg,useActionState:Tg,useOptimistic:function(e){var i=kn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=wh.bind(null,ue,!0,r),r.dispatch=i,[e,i]},useMemoCache:xh,useCacheRefresh:function(){return kn().memoizedState=QM.bind(null,ue)},useEffectEvent:function(e){var i=kn(),r={impl:e};return i.memoizedState=r,function(){if((De&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Dh={readContext:Un,use:Xu,useCallback:Pg,useContext:Un,useEffect:Th,useImperativeHandle:Og,useInsertionEffect:Ug,useLayoutEffect:Lg,useMemo:zg,useReducer:Wu,useRef:Cg,useState:function(){return Wu(xa)},useDebugValue:bh,useDeferredValue:function(e,i){var r=on();return Bg(r,Be.memoizedState,e,i)},useTransition:function(){var e=Wu(xa)[0],i=on().memoizedState;return[typeof e=="boolean"?e:ml(e),i]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Ch,useFormState:bg,useActionState:bg,useOptimistic:function(e,i){var r=on();return vg(r,Be,e,i)},useMemoCache:xh,useCacheRefresh:Vg};Dh.useEffectEvent=Dg;var Yg={readContext:Un,use:Xu,useCallback:Pg,useContext:Un,useEffect:Th,useImperativeHandle:Og,useInsertionEffect:Ug,useLayoutEffect:Lg,useMemo:zg,useReducer:yh,useRef:Cg,useState:function(){return yh(xa)},useDebugValue:bh,useDeferredValue:function(e,i){var r=on();return Be===null?Ah(r,e,i):Bg(r,Be.memoizedState,e,i)},useTransition:function(){var e=yh(xa)[0],i=on().memoizedState;return[typeof e=="boolean"?e:ml(e),i]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Ch,useFormState:Rg,useActionState:Rg,useOptimistic:function(e,i){var r=on();return Be!==null?vg(r,Be,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:xh,useCacheRefresh:Vg};Yg.useEffectEvent=Dg;function Uh(e,i,r,u){i=e.memoizedState,r=r(u,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Lh={enqueueSetState:function(e,i,r){e=e._reactInternals;var u=pi(),h=tr(u);h.payload=i,r!=null&&(h.callback=r),i=er(e,h,u),i!==null&&(Jn(i,e,u),fl(i,e,u))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var u=pi(),h=tr(u);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=er(e,h,u),i!==null&&(Jn(i,e,u),fl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=pi(),u=tr(r);u.tag=2,i!=null&&(u.callback=i),i=er(e,u,r),i!==null&&(Jn(i,e,r),fl(i,e,r))}};function jg(e,i,r,u,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!il(r,u)||!il(h,m):!0}function Zg(e,i,r,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==e&&Lh.enqueueReplaceState(i,i.state,null)}function Jr(e,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Kg(e){Au(e)}function Qg(e){console.error(e)}function Jg(e){Au(e)}function Zu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function $g(e,i,r){try{var u=e.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Nh(e,i,r){return r=tr(r),r.tag=3,r.payload={element:null},r.callback=function(){Zu(e,i)},r}function t0(e){return e=tr(e),e.tag=3,e}function e0(e,i,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){$g(i,r,u)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){$g(i,r,u),typeof h!="function"&&(or===null?or=new Set([this]):or.add(this));var R=u.stack;this.componentDidCatch(u.value,{componentStack:R!==null?R:""})})}function $M(e,i,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&Hs(i,r,h,!0),r=ci.current,r!==null){switch(r.tag){case 31:case 13:return wi===null?oc():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===zu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),ad(e,u,h)),!1;case 22:return r.flags|=65536,u===zu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),ad(e,u,h)),!1}throw Error(a(435,r.tag))}return ad(e,u,h),oc(),!1}if(Me)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Jf&&(e=Error(a(422),{cause:u}),sl(bi(e,r)))):(u!==Jf&&(i=Error(a(423),{cause:u}),sl(bi(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=bi(u,r),h=Nh(e.stateNode,u,h),uh(e,h),nn!==4&&(nn=2)),!1;var m=Error(a(520),{cause:u});if(m=bi(m,r),bl===null?bl=[m]:bl.push(m),nn!==4&&(nn=2),i===null)return!0;u=bi(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Nh(r.stateNode,u,e),uh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(or===null||!or.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=t0(h),e0(h,e,r,u),uh(r,h),!1}r=r.return}while(r!==null);return!1}var Oh=Error(a(461)),mn=!1;function Ln(e,i,r,u){i.child=e===null?rg(i,null,r,u):Kr(i,e.child,r,u)}function n0(e,i,r,u,h){r=r.render;var m=i.ref;if("ref"in u){var E={};for(var R in u)R!=="ref"&&(E[R]=u[R])}else E=u;return qr(i),u=mh(e,i,r,E,m,h),R=_h(),e!==null&&!mn?(gh(e,i,h),Sa(e,i,h)):(Me&&R&&Kf(i),i.flags|=1,Ln(e,i,u,h),i.child)}function i0(e,i,r,u,h){if(e===null){var m=r.type;return typeof m=="function"&&!Yf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,a0(e,i,m,u,h)):(e=Du(r.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Vh(e,h)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:il,r(E,u)&&e.ref===i.ref)return Sa(e,i,h)}return i.flags|=1,e=pa(m,u),e.ref=i.ref,e.return=i,i.child=e}function a0(e,i,r,u,h){if(e!==null){var m=e.memoizedProps;if(il(m,u)&&e.ref===i.ref)if(mn=!1,i.pendingProps=u=m,Vh(e,h))(e.flags&131072)!==0&&(mn=!0);else return i.lanes=e.lanes,Sa(e,i,h)}return Ph(e,i,r,u,h)}function r0(e,i,r,u){var h=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(u=i.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return s0(e,i,m,r,u)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ou(i,m!==null?m.cachePool:null),m!==null?lg(i,m):fh(),ug(i);else return u=i.lanes=536870912,s0(e,i,m!==null?m.baseLanes|r:r,r,u)}else m!==null?(Ou(i,m.cachePool),lg(i,m),ir(),i.memoizedState=null):(e!==null&&Ou(i,null),fh(),ir());return Ln(e,i,h,r),i.child}function vl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function s0(e,i,r,u,h){var m=rh();return m=m===null?null:{parent:dn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Ou(i,null),fh(),ug(i),e!==null&&Hs(e,i,u,!0),i.childLanes=h,null}function Ku(e,i){return i=Ju({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function o0(e,i,r){return Kr(i,e.child,null,r),e=Ku(i,i.pendingProps),e.flags|=2,fi(i),i.memoizedState=null,e}function tE(e,i,r){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Me){if(u.mode==="hidden")return e=Ku(i,u),i.lanes=536870912,vl(null,e);if(dh(i),(e=Ye)?(e=xv(e,Ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Za!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},r=X_(e),r.return=i,i.child=r,Dn=i,Ye=null)):e=null,e===null)throw Qa(i);return i.lanes=536870912,null}return Ku(i,u)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(dh(i),h)if(i.flags&256)i.flags&=-257,i=o0(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(mn||Hs(e,i,r,!1),h=(r&e.childLanes)!==0,mn||h){if(u=ke,u!==null&&(E=bs(u,r),E!==0&&E!==m.retryLane))throw m.retryLane=E,Vr(e,E),Jn(u,e,E),Oh;oc(),i=o0(e,i,r)}else e=m.treeContext,Ye=Di(E.nextSibling),Dn=i,Me=!0,Ka=null,Ci=!1,e!==null&&Y_(i,e),i=Ku(i,u),i.flags|=4096;return i}return e=pa(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Qu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Ph(e,i,r,u,h){return qr(i),r=mh(e,i,r,u,void 0,h),u=_h(),e!==null&&!mn?(gh(e,i,h),Sa(e,i,h)):(Me&&u&&Kf(i),i.flags|=1,Ln(e,i,r,h),i.child)}function l0(e,i,r,u,h,m){return qr(i),i.updateQueue=null,r=fg(i,u,r,h),cg(e),u=_h(),e!==null&&!mn?(gh(e,i,m),Sa(e,i,m)):(Me&&u&&Kf(i),i.flags|=1,Ln(e,i,r,m),i.child)}function u0(e,i,r,u,h){if(qr(i),i.stateNode===null){var m=zs,E=r.contextType;typeof E=="object"&&E!==null&&(m=Un(E)),m=new r(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Lh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},oh(i),E=r.contextType,m.context=typeof E=="object"&&E!==null?Un(E):zs,m.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Uh(i,r,E,u),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Lh.enqueueReplaceState(m,m.state,null),dl(i,u,m,h),hl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var R=i.memoizedProps,H=Jr(r,R);m.props=H;var J=m.context,ht=r.contextType;E=zs,typeof ht=="object"&&ht!==null&&(E=Un(ht));var mt=r.getDerivedStateFromProps;ht=typeof mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||J!==E)&&Zg(i,m,u,E),$a=!1;var it=i.memoizedState;m.state=it,dl(i,u,m,h),hl(),J=i.memoizedState,R||it!==J||$a?(typeof mt=="function"&&(Uh(i,r,mt,u),J=i.memoizedState),(H=$a||jg(i,r,H,u,it,J,E))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=J),m.props=u,m.state=J,m.context=E,u=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,lh(e,i),E=i.memoizedProps,ht=Jr(r,E),m.props=ht,mt=i.pendingProps,it=m.context,J=r.contextType,H=zs,typeof J=="object"&&J!==null&&(H=Un(J)),R=r.getDerivedStateFromProps,(J=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==mt||it!==H)&&Zg(i,m,u,H),$a=!1,it=i.memoizedState,m.state=it,dl(i,u,m,h),hl();var lt=i.memoizedState;E!==mt||it!==lt||$a||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof R=="function"&&(Uh(i,r,R,u),lt=i.memoizedState),(ht=$a||jg(i,r,ht,u,it,lt,H)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,lt,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,lt,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=lt),m.props=u,m.state=lt,m.context=H,u=ht):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,Qu(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=Kr(i,e.child,null,h),i.child=Kr(i,null,r,h)):Ln(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Sa(e,i,h),e}function c0(e,i,r,u){return Xr(),i.flags|=256,Ln(e,i,r,u),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bh(e){return{baseLanes:e,cachePool:$_()}}function Fh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=di),e}function f0(e,i,r){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Me){if(h?nr(i):ir(),(e=Ye)?(e=xv(e,Ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Za!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},r=X_(e),r.return=i,i.child=r,Dn=i,Ye=null)):e=null,e===null)throw Qa(i);return Sd(e)?i.lanes=32:i.lanes=536870912,null}var R=u.children;return u=u.fallback,h?(ir(),h=i.mode,R=Ju({mode:"hidden",children:R},h),u=kr(u,h,r,null),R.return=i,u.return=i,R.sibling=u,i.child=R,u=i.child,u.memoizedState=Bh(r),u.childLanes=Fh(e,E,r),i.memoizedState=zh,vl(null,u)):(nr(i),Ih(i,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(m)i.flags&256?(nr(i),i.flags&=-257,i=Hh(e,i,r)):i.memoizedState!==null?(ir(),i.child=e.child,i.flags|=128,i=null):(ir(),R=u.fallback,h=i.mode,u=Ju({mode:"visible",children:u.children},h),R=kr(R,h,r,null),R.flags|=2,u.return=i,R.return=i,u.sibling=R,i.child=u,Kr(i,e.child,null,r),u=i.child,u.memoizedState=Bh(r),u.childLanes=Fh(e,E,r),i.memoizedState=zh,i=vl(null,u));else if(nr(i),Sd(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var J=E.dgst;E=J,u=Error(a(419)),u.stack="",u.digest=E,sl({value:u,source:null,stack:null}),i=Hh(e,i,r)}else if(mn||Hs(e,i,r,!1),E=(r&e.childLanes)!==0,mn||E){if(E=ke,E!==null&&(u=bs(E,r),u!==0&&u!==H.retryLane))throw H.retryLane=u,Vr(e,u),Jn(E,e,u),Oh;xd(R)||oc(),i=Hh(e,i,r)}else xd(R)?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,Ye=Di(R.nextSibling),Dn=i,Me=!0,Ka=null,Ci=!1,e!==null&&Y_(i,e),i=Ih(i,u.children),i.flags|=4096);return i}return h?(ir(),R=u.fallback,h=i.mode,H=e.child,J=H.sibling,u=pa(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,J!==null?R=pa(J,R):(R=kr(R,h,r,null),R.flags|=2),R.return=i,u.return=i,u.sibling=R,i.child=u,vl(null,u),u=i.child,R=e.child.memoizedState,R===null?R=Bh(r):(h=R.cachePool,h!==null?(H=dn._currentValue,h=h.parent!==H?{parent:H,pool:H}:h):h=$_(),R={baseLanes:R.baseLanes|r,cachePool:h}),u.memoizedState=R,u.childLanes=Fh(e,E,r),i.memoizedState=zh,vl(e.child,u)):(nr(i),r=e.child,e=r.sibling,r=pa(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=r,i.memoizedState=null,r)}function Ih(e,i){return i=Ju({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ju(e,i){return e=ui(22,e,null,i),e.lanes=0,e}function Hh(e,i,r){return Kr(i,e.child,null,r),e=Ih(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function h0(e,i,r){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),eh(e.return,i,r)}function Gh(e,i,r,u,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=r,E.tailMode=h,E.treeForkCount=m)}function d0(e,i,r){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var E=sn.current,R=(E&2)!==0;if(R?(E=E&1|2,i.flags|=128):E&=1,xt(sn,E),Ln(e,i,u,r),u=Me?rl:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&h0(e,r,i);else if(e.tag===19)h0(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Hu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Gh(i,!1,h,r,m,u);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Hu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Gh(i,!0,r,null,m,u);break;case"together":Gh(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Sa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),sr|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Hs(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=pa(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=pa(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Vh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function eE(e,i,r){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),Ja(i,dn,e.memoizedState.cache),Xr();break;case 27:case 5:Xt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,dh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(nr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?f0(e,i,r):(nr(i),e=Sa(e,i,r),e!==null?e.sibling:null);nr(i);break;case 19:var h=(e.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(Hs(e,i,r,!1),u=(r&i.childLanes)!==0),h){if(u)return d0(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),xt(sn,sn.current),u)break;return null;case 22:return i.lanes=0,r0(e,i,r,i.pendingProps);case 24:Ja(i,dn,e.memoizedState.cache)}return Sa(e,i,r)}function p0(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)mn=!0;else{if(!Vh(e,r)&&(i.flags&128)===0)return mn=!1,eE(e,i,r);mn=(e.flags&131072)!==0}else mn=!1,Me&&(i.flags&1048576)!==0&&q_(i,rl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=jr(i.elementType),i.type=e,typeof e=="function")Yf(e)?(u=Jr(e,u),i.tag=1,i=u0(null,i,e,u,r)):(i.tag=0,i=Ph(null,i,e,u,r));else{if(e!=null){var h=e.$$typeof;if(h===C){i.tag=11,i=n0(null,i,e,u,r);break t}else if(h===N){i.tag=14,i=i0(null,i,e,u,r);break t}}throw i=ut(e)||e,Error(a(306,i,""))}}return i;case 0:return Ph(e,i,i.type,i.pendingProps,r);case 1:return u=i.type,h=Jr(u,i.pendingProps),u0(e,i,u,h,r);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,lh(e,i),dl(i,u,null,r);var E=i.memoizedState;if(u=E.cache,Ja(i,dn,u),u!==m.cache&&nh(i,[dn],r,!0),hl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=c0(e,i,u,r);break t}else if(u!==h){h=bi(Error(a(424)),i),sl(h),i=c0(e,i,u,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Di(e.firstChild),Dn=i,Me=!0,Ka=null,Ci=!0,r=rg(i,null,u,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Xr(),u===h){i=Sa(e,i,r);break t}Ln(e,i,u,r)}i=i.child}return i;case 26:return Qu(e,i),e===null?(r=bv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Me||(r=i.type,e=i.pendingProps,u=pc(at.current).createElement(r),u[hn]=i,u[Cn]=e,Nn(u,r,e),gt(u),i.stateNode=u):i.memoizedState=bv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Xt(i),e===null&&Me&&(u=i.stateNode=Mv(i.type,i.pendingProps,at.current),Dn=i,Ci=!0,h=Ye,fr(i.type)?(yd=h,Ye=Di(u.firstChild)):Ye=h),Ln(e,i,i.pendingProps.children,r),Qu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Me&&((h=u=Ye)&&(u=UE(u,i.type,i.pendingProps,Ci),u!==null?(i.stateNode=u,Dn=i,Ye=Di(u.firstChild),Ci=!1,h=!0):h=!1),h||Qa(i)),Xt(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,u=m.children,_d(h,m)?u=null:E!==null&&_d(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=mh(e,i,qM,null,null,r),Nl._currentValue=h),Qu(e,i),Ln(e,i,u,r),i.child;case 6:return e===null&&Me&&((e=r=Ye)&&(r=LE(r,i.pendingProps,Ci),r!==null?(i.stateNode=r,Dn=i,Ye=null,e=!0):e=!1),e||Qa(i)),null;case 13:return f0(e,i,r);case 4:return Dt(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Kr(i,null,u,r):Ln(e,i,u,r),i.child;case 11:return n0(e,i,i.type,i.pendingProps,r);case 7:return Ln(e,i,i.pendingProps,r),i.child;case 8:return Ln(e,i,i.pendingProps.children,r),i.child;case 12:return Ln(e,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,Ja(i,i.type,u.value),Ln(e,i,u.children,r),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,qr(i),h=Un(h),u=u(h),i.flags|=1,Ln(e,i,u,r),i.child;case 14:return i0(e,i,i.type,i.pendingProps,r);case 15:return a0(e,i,i.type,i.pendingProps,r);case 19:return d0(e,i,r);case 31:return tE(e,i,r);case 22:return r0(e,i,r,i.pendingProps);case 24:return qr(i),u=Un(dn),e===null?(h=rh(),h===null&&(h=ke,m=ih(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:u,cache:h},oh(i),Ja(i,dn,h)):((e.lanes&r)!==0&&(lh(e,i),dl(i,null,null,r),hl()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ja(i,dn,u)):(u=m.cache,Ja(i,dn,u),u!==h.cache&&nh(i,[dn],r,!0))),Ln(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ya(e){e.flags|=4}function kh(e,i,r,u,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(G0())e.flags|=8192;else throw Zr=zu,sh}else e.flags&=-16777217}function m0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dv(i))if(G0())e.flags|=8192;else throw Zr=zu,sh}function $u(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ne():536870912,e.lanes|=i,Js|=i)}function xl(e,i){if(!Me)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=r,i}function nE(e,i,r){var u=i.pendingProps;switch(Qf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return r=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),ga(dn),Bt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Is(i)?ya(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$f())),je(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(ya(i),m!==null?(je(i),m0(i,m)):(je(i),kh(i,h,null,u,r))):m?m!==e.memoizedState?(ya(i),je(i),m0(i,m)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&ya(i),je(i),kh(i,h,e,u,r)),null;case 27:if(pe(i),r=at.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&ya(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=Et.current,Is(i)?j_(i):(e=Mv(h,u,r),i.stateNode=e,ya(i))}return je(i),null;case 5:if(pe(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&ya(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(m=Et.current,Is(i))j_(i);else{var E=pc(at.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?E.createElement(h,{is:u.is}):E.createElement(h)}}m[hn]=i,m[Cn]=u;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Nn(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&ya(i)}}return je(i),kh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&ya(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=at.current,Is(i)){if(e=i.stateNode,r=i.memoizedProps,u=null,h=Dn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[hn]=i,e=!!(e.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||fv(e.nodeValue,r)),e||Qa(i,!0)}else e=pc(e).createTextNode(u),e[hn]=i,i.stateNode=e}return je(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(u=Is(i),r!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[hn]=i}else Xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else r=$f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(fi(i),i):(fi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Is(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[hn]=i}else Xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),h=!1}else h=$f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(fi(i),i):(fi(i),null)}return fi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=u!==null,e=e!==null&&e.memoizedState!==null,r&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),$u(i,i.updateQueue),je(i),null);case 4:return Bt(),e===null&&fd(i.stateNode.containerInfo),je(i),null;case 10:return ga(i.type),je(i),null;case 19:if($(sn),u=i.memoizedState,u===null)return je(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)xl(u,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Hu(e),m!==null){for(i.flags|=128,xl(u,!1),e=m.updateQueue,i.updateQueue=e,$u(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)k_(r,e),r=r.sibling;return xt(sn,sn.current&1|2),Me&&ma(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&b()>ac&&(i.flags|=128,h=!0,xl(u,!1),i.lanes=4194304)}else{if(!h)if(e=Hu(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,$u(i,e),xl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Me)return je(i),null}else 2*b()-u.renderingStartTime>ac&&r!==536870912&&(i.flags|=128,h=!0,xl(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=b(),e.sibling=null,r=sn.current,xt(sn,h?r&1|2:r&1),Me&&ma(i,u.treeForkCount),e):(je(i),null);case 22:case 23:return fi(i),hh(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),r=i.updateQueue,r!==null&&$u(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),e!==null&&$(Yr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ga(dn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function iE(e,i){switch(Qf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ga(dn),Bt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 31:if(i.memoizedState!==null){if(fi(i),i.alternate===null)throw Error(a(340));Xr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(fi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(sn),null;case 4:return Bt(),null;case 10:return ga(i.type),null;case 22:case 23:return fi(i),hh(),e!==null&&$(Yr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ga(dn),null;case 25:return null;default:return null}}function _0(e,i){switch(Qf(i),i.tag){case 3:ga(dn),Bt();break;case 26:case 27:case 5:pe(i);break;case 4:Bt();break;case 31:i.memoizedState!==null&&fi(i);break;case 13:fi(i);break;case 19:$(sn);break;case 10:ga(i.type);break;case 22:case 23:fi(i),hh(),e!==null&&$(Yr);break;case 24:ga(dn)}}function Sl(e,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){u=void 0;var m=r.create,E=r.inst;u=m(),E.destroy=u}r=r.next}while(r!==h)}}catch(R){Pe(i,i.return,R)}}function ar(e,i,r){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var E=u.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,h=i;var H=r,J=R;try{J()}catch(ht){Pe(h,H,ht)}}}u=u.next}while(u!==m)}}catch(ht){Pe(i,i.return,ht)}}function g0(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{og(i,r)}catch(u){Pe(e,e.return,u)}}}function v0(e,i,r){r.props=Jr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(u){Pe(e,i,u)}}function yl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof r=="function"?e.refCleanup=r(u):r.current=u}}catch(h){Pe(e,i,h)}}function ea(e,i){var r=e.ref,u=e.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){Pe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Pe(e,i,h)}else r.current=null}function x0(e){var i=e.type,r=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){Pe(e,e.return,h)}}function Xh(e,i,r){try{var u=e.stateNode;bE(u,e.type,r,i),u[Cn]=i}catch(h){Pe(e,e.return,h)}}function S0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fr(e.type)||e.tag===4}function Wh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||S0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qh(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ha));else if(u!==4&&(u===27&&fr(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(qh(e,i,r),e=e.sibling;e!==null;)qh(e,i,r),e=e.sibling}function tc(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(u!==4&&(u===27&&fr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(tc(e,i,r),e=e.sibling;e!==null;)tc(e,i,r),e=e.sibling}function y0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Nn(i,u,r),i[hn]=e,i[Cn]=r}catch(m){Pe(e,e.return,m)}}var Ma=!1,_n=!1,Yh=!1,M0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function aE(e,i){if(e=e.containerInfo,pd=yc,e=O_(e),Hf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,R=-1,H=-1,J=0,ht=0,mt=e,it=null;e:for(;;){for(var lt;mt!==r||h!==0&&mt.nodeType!==3||(R=E+h),mt!==m||u!==0&&mt.nodeType!==3||(H=E+u),mt.nodeType===3&&(E+=mt.nodeValue.length),(lt=mt.firstChild)!==null;)it=mt,mt=lt;for(;;){if(mt===e)break e;if(it===r&&++J===h&&(R=E),it===m&&++ht===u&&(H=E),(lt=mt.nextSibling)!==null)break;mt=it,it=mt.parentNode}mt=lt}r=R===-1||H===-1?null:{start:R,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(md={focusedElem:e,selectionRange:r},yc=!1,bn=i;bn!==null;)if(i=bn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,bn=e;else for(;bn!==null;){switch(i=bn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var It=Jr(r.type,h);e=u.getSnapshotBeforeUpdate(It,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Pe(r,r.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)vd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,bn=e;break}bn=i.return}}function E0(e,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ta(e,r),u&4&&Sl(5,r);break;case 1:if(Ta(e,r),u&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(E){Pe(r,r.return,E)}else{var h=Jr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Pe(r,r.return,E)}}u&64&&g0(r),u&512&&yl(r,r.return);break;case 3:if(Ta(e,r),u&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{og(e,i)}catch(E){Pe(r,r.return,E)}}break;case 27:i===null&&u&4&&y0(r);case 26:case 5:Ta(e,r),i===null&&u&4&&x0(r),u&512&&yl(r,r.return);break;case 12:Ta(e,r);break;case 31:Ta(e,r),u&4&&A0(e,r);break;case 13:Ta(e,r),u&4&&R0(e,r),u&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=dE.bind(null,r),NE(e,r))));break;case 22:if(u=r.memoizedState!==null||Ma,!u){i=i!==null&&i.memoizedState!==null||_n,h=Ma;var m=_n;Ma=u,(_n=i)&&!m?ba(e,r,(r.subtreeFlags&8772)!==0):Ta(e,r),Ma=h,_n=m}break;case 30:break;default:Ta(e,r)}}function T0(e){var i=e.alternate;i!==null&&(e.alternate=null,T0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&w(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,jn=!1;function Ea(e,i,r){for(r=r.child;r!==null;)b0(e,i,r),r=r.sibling}function b0(e,i,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Tt,r)}catch{}switch(r.tag){case 26:_n||ea(r,i),Ea(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:_n||ea(r,i);var u=Ze,h=jn;fr(r.type)&&(Ze=r.stateNode,jn=!1),Ea(e,i,r),Dl(r.stateNode),Ze=u,jn=h;break;case 5:_n||ea(r,i);case 6:if(u=Ze,h=jn,Ze=null,Ea(e,i,r),Ze=u,jn=h,Ze!==null)if(jn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(r.stateNode)}catch(m){Pe(r,i,m)}else try{Ze.removeChild(r.stateNode)}catch(m){Pe(r,i,m)}break;case 18:Ze!==null&&(jn?(e=Ze,gv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),so(e)):gv(Ze,r.stateNode));break;case 4:u=Ze,h=jn,Ze=r.stateNode.containerInfo,jn=!0,Ea(e,i,r),Ze=u,jn=h;break;case 0:case 11:case 14:case 15:ar(2,r,i),_n||ar(4,r,i),Ea(e,i,r);break;case 1:_n||(ea(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&v0(r,i,u)),Ea(e,i,r);break;case 21:Ea(e,i,r);break;case 22:_n=(u=_n)||r.memoizedState!==null,Ea(e,i,r),_n=u;break;default:Ea(e,i,r)}}function A0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{so(e)}catch(r){Pe(i,i.return,r)}}}function R0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{so(e)}catch(r){Pe(i,i.return,r)}}function rE(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new M0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new M0),i;default:throw Error(a(435,e.tag))}}function ec(e,i){var r=rE(e);i.forEach(function(u){if(!r.has(u)){r.add(u);var h=pE.bind(null,e,u);u.then(h,h)}})}function Zn(e,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],m=e,E=i,R=E;t:for(;R!==null;){switch(R.tag){case 27:if(fr(R.type)){Ze=R.stateNode,jn=!1;break t}break;case 5:Ze=R.stateNode,jn=!1;break t;case 3:case 4:Ze=R.stateNode.containerInfo,jn=!0;break t}R=R.return}if(Ze===null)throw Error(a(160));b0(m,E,h),Ze=null,jn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)C0(i,e),i=i.sibling}var Hi=null;function C0(e,i){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(i,e),Kn(e),u&4&&(ar(3,e,e.return),Sl(3,e),ar(5,e,e.return));break;case 1:Zn(i,e),Kn(e),u&512&&(_n||r===null||ea(r,r.return)),u&64&&Ma&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=Hi;if(Zn(i,e),Kn(e),u&512&&(_n||r===null||ea(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=e.memoizedState,r===null)if(u===null)if(e.stateNode===null){t:{u=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Br]||m[hn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Nn(m,u,r),m[hn]=e,gt(m),u=m;break t;case"link":var E=Cv("link","href",h).get(u+(r.href||""));if(E){for(var R=0;R<E.length;R++)if(m=E[R],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(R,1);break e}}m=h.createElement(u),Nn(m,u,r),h.head.appendChild(m);break;case"meta":if(E=Cv("meta","content",h).get(u+(r.content||""))){for(R=0;R<E.length;R++)if(m=E[R],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(R,1);break e}}m=h.createElement(u),Nn(m,u,r),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[hn]=e,gt(m),u=m}e.stateNode=u}else wv(h,e.type,e.stateNode);else e.stateNode=Rv(h,u,e.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?wv(h,e.type,e.stateNode):Rv(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Xh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Zn(i,e),Kn(e),u&512&&(_n||r===null||ea(r,r.return)),r!==null&&u&4&&Xh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Zn(i,e),Kn(e),u&512&&(_n||r===null||ea(r,r.return)),e.flags&32){h=e.stateNode;try{ws(h,"")}catch(It){Pe(e,e.return,It)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,Xh(e,h,r!==null?r.memoizedProps:h)),u&1024&&(Yh=!0);break;case 6:if(Zn(i,e),Kn(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,r=e.stateNode;try{r.nodeValue=u}catch(It){Pe(e,e.return,It)}}break;case 3:if(gc=null,h=Hi,Hi=mc(i.containerInfo),Zn(i,e),Hi=h,Kn(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{so(i.containerInfo)}catch(It){Pe(e,e.return,It)}Yh&&(Yh=!1,w0(e));break;case 4:u=Hi,Hi=mc(e.stateNode.containerInfo),Zn(i,e),Kn(e),Hi=u;break;case 12:Zn(i,e),Kn(e);break;case 31:Zn(i,e),Kn(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,ec(e,u)));break;case 13:Zn(i,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ic=b()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,ec(e,u)));break;case 22:h=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,J=Ma,ht=_n;if(Ma=J||h,_n=ht||H,Zn(i,e),_n=ht,Ma=J,Kn(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||H||Ma||_n||$r(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){H=r=i;try{if(m=H.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=H.stateNode;var mt=H.memoizedProps.style,it=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;R.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(It){Pe(H,H.return,It)}}}else if(i.tag===6){if(r===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(It){Pe(H,H.return,It)}}}else if(i.tag===18){if(r===null){H=i;try{var lt=H.stateNode;h?vv(lt,!0):vv(H.stateNode,!1)}catch(It){Pe(H,H.return,It)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,ec(e,r))));break;case 19:Zn(i,e),Kn(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,ec(e,u)));break;case 30:break;case 21:break;default:Zn(i,e),Kn(e)}}function Kn(e){var i=e.flags;if(i&2){try{for(var r,u=e.return;u!==null;){if(S0(u)){r=u;break}u=u.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Wh(e);tc(e,m,h);break;case 5:var E=r.stateNode;r.flags&32&&(ws(E,""),r.flags&=-33);var R=Wh(e);tc(e,R,E);break;case 3:case 4:var H=r.stateNode.containerInfo,J=Wh(e);qh(e,J,H);break;default:throw Error(a(161))}}catch(ht){Pe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function w0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;w0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ta(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)E0(e,i.alternate,i),i=i.sibling}function $r(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ar(4,i,i.return),$r(i);break;case 1:ea(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&v0(i,i.return,r),$r(i);break;case 27:Dl(i.stateNode);case 26:case 5:ea(i,i.return),$r(i);break;case 22:i.memoizedState===null&&$r(i);break;case 30:$r(i);break;default:$r(i)}e=e.sibling}}function ba(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:ba(h,m,r),Sl(4,m);break;case 1:if(ba(h,m,r),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(J){Pe(u,u.return,J)}if(u=m,h=u.updateQueue,h!==null){var R=u.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)sg(H[h],R)}catch(J){Pe(u,u.return,J)}}r&&E&64&&g0(m),yl(m,m.return);break;case 27:y0(m);case 26:case 5:ba(h,m,r),r&&u===null&&E&4&&x0(m),yl(m,m.return);break;case 12:ba(h,m,r);break;case 31:ba(h,m,r),r&&E&4&&A0(h,m);break;case 13:ba(h,m,r),r&&E&4&&R0(h,m);break;case 22:m.memoizedState===null&&ba(h,m,r),yl(m,m.return);break;case 30:break;default:ba(h,m,r)}i=i.sibling}}function jh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ol(r))}function Zh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ol(e))}function Gi(e,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)D0(e,i,r,u),i=i.sibling}function D0(e,i,r,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(e,i,r,u),h&2048&&Sl(9,i);break;case 1:Gi(e,i,r,u);break;case 3:Gi(e,i,r,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ol(e)));break;case 12:if(h&2048){Gi(e,i,r,u),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,R=m.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Pe(i,i.return,H)}}else Gi(e,i,r,u);break;case 31:Gi(e,i,r,u);break;case 13:Gi(e,i,r,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Gi(e,i,r,u):Ml(e,i):m._visibility&2?Gi(e,i,r,u):(m._visibility|=2,Zs(e,i,r,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&jh(E,i);break;case 24:Gi(e,i,r,u),h&2048&&Zh(i.alternate,i);break;default:Gi(e,i,r,u)}}function Zs(e,i,r,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,R=r,H=u,J=E.flags;switch(E.tag){case 0:case 11:case 15:Zs(m,E,R,H,h),Sl(8,E);break;case 23:break;case 22:var ht=E.stateNode;E.memoizedState!==null?ht._visibility&2?Zs(m,E,R,H,h):Ml(m,E):(ht._visibility|=2,Zs(m,E,R,H,h)),h&&J&2048&&jh(E.alternate,E);break;case 24:Zs(m,E,R,H,h),h&&J&2048&&Zh(E.alternate,E);break;default:Zs(m,E,R,H,h)}i=i.sibling}}function Ml(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,u=i,h=u.flags;switch(u.tag){case 22:Ml(r,u),h&2048&&jh(u.alternate,u);break;case 24:Ml(r,u),h&2048&&Zh(u.alternate,u);break;default:Ml(r,u)}i=i.sibling}}var El=8192;function Ks(e,i,r){if(e.subtreeFlags&El)for(e=e.child;e!==null;)U0(e,i,r),e=e.sibling}function U0(e,i,r){switch(e.tag){case 26:Ks(e,i,r),e.flags&El&&e.memoizedState!==null&&WE(r,Hi,e.memoizedState,e.memoizedProps);break;case 5:Ks(e,i,r);break;case 3:case 4:var u=Hi;Hi=mc(e.stateNode.containerInfo),Ks(e,i,r),Hi=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=El,El=16777216,Ks(e,i,r),El=u):Ks(e,i,r));break;default:Ks(e,i,r)}}function L0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Tl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];bn=u,O0(u,e)}L0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)N0(e),e=e.sibling}function N0(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&ar(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,nc(e)):Tl(e);break;default:Tl(e)}}function nc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];bn=u,O0(u,e)}L0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ar(8,i,i.return),nc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,nc(i));break;default:nc(i)}e=e.sibling}}function O0(e,i){for(;bn!==null;){var r=bn;switch(r.tag){case 0:case 11:case 15:ar(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ol(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,bn=u;else t:for(r=e;bn!==null;){u=bn;var h=u.sibling,m=u.return;if(T0(u),u===r){bn=null;break t}if(h!==null){h.return=m,bn=h;break t}bn=m}}}var sE={getCacheForType:function(e){var i=Un(dn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Un(dn).controller.signal}},oE=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,ge=null,Se=0,Oe=0,hi=null,rr=!1,Qs=!1,Kh=!1,Aa=0,nn=0,sr=0,ts=0,Qh=0,di=0,Js=0,bl=null,Qn=null,Jh=!1,ic=0,P0=0,ac=1/0,rc=null,or=null,yn=0,lr=null,$s=null,Ra=0,$h=0,td=null,z0=null,Al=0,ed=null;function pi(){return(De&2)!==0&&Se!==0?Se&-Se:F.T!==null?od():zr()}function B0(){if(di===0)if((Se&536870912)===0||Me){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),di=e}else di=536870912;return e=ci.current,e!==null&&(e.flags|=32),di}function Jn(e,i,r){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(to(e,0),ur(e,Se,di,!1)),Gn(e,r),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(ts|=r),nn===4&&ur(e,Se,di,!1)),na(e))}function F0(e,i,r){if((De&6)!==0)throw Error(a(327));var u=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Ft(e,i),h=u?cE(e,i):id(e,i,!0),m=u;do{if(h===0){Qs&&!u&&ur(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!lE(r)){h=id(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var R=e;h=bl;var H=R.current.memoizedState.isDehydrated;if(H&&(to(R,E).flags|=256),E=id(R,E,!1),E!==2){if(Kh&&!H){R.errorRecoveryDisabledLanes|=m,ts|=m,h=4;break t}m=Qn,Qn=h,m!==null&&(Qn===null?Qn=m:Qn.push.apply(Qn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){to(e,0),ur(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ur(u,i,di,!rr);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=ic+300-b(),10<h)){if(ur(u,i,di,!rr),_t(u,0,!0)!==0)break t;Ra=i,u.timeoutHandle=mv(I0.bind(null,u,r,Qn,rc,Jh,i,di,ts,Js,rr,m,"Throttled",-0,0),h);break t}I0(u,r,Qn,rc,Jh,i,di,ts,Js,rr,m,null,-0,0)}}break}while(!0);na(e)}function I0(e,i,r,u,h,m,E,R,H,J,ht,mt,it,lt){if(e.timeoutHandle=-1,mt=i.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},U0(i,m,mt);var It=(m&62914560)===m?ic-b():(m&4194048)===m?P0-b():0;if(It=qE(mt,It),It!==null){Ra=m,e.cancelPendingCommit=It(Y0.bind(null,e,i,m,r,u,h,E,R,H,ht,mt,null,it,lt)),ur(e,m,E,!J);return}}Y0(e,i,m,r,u,h,E,R,H)}function lE(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],m=h.getSnapshot;h=h.value;try{if(!li(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(e,i,r,u){i&=~Qh,i&=~ts,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-Pt(h),E=1<<m;u[m]=-1,h&=~E}r!==0&&Yo(e,r,i)}function sc(){return(De&6)===0?(Rl(0),!1):!0}function nd(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,_a=Wr=null,vh(e),Xs=null,ul=0,e=ge;for(;e!==null;)_0(e.alternate,e),e=e.return;ge=null}}function to(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,CE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ra=0,nd(),ke=e,ge=r=pa(e.current,null),Se=i,Oe=0,hi=null,rr=!1,Qs=Ft(e,i),Kh=!1,Js=di=Qh=ts=sr=nn=0,Qn=bl=null,Jh=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Pt(u),m=1<<h;i|=e[h],u&=~m}return Aa=i,Ru(),r}function H0(e,i){ue=null,F.H=gl,i===ks||i===Pu?(i=ng(),Oe=3):i===sh?(i=ng(),Oe=4):Oe=i===Oh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hi=i,ge===null&&(nn=1,Zu(e,bi(i,e.current)))}function G0(){var e=ci.current;return e===null?!0:(Se&4194048)===Se?wi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===wi:!1}function V0(){var e=F.H;return F.H=gl,e===null?gl:e}function k0(){var e=F.A;return F.A=sE,e}function oc(){nn=4,rr||(Se&4194048)!==Se&&ci.current!==null||(Qs=!0),(sr&134217727)===0&&(ts&134217727)===0||ke===null||ur(ke,Se,di,!1)}function id(e,i,r){var u=De;De|=2;var h=V0(),m=k0();(ke!==e||Se!==i)&&(rc=null,to(e,i)),i=!1;var E=nn;t:do try{if(Oe!==0&&ge!==null){var R=ge,H=hi;switch(Oe){case 8:nd(),E=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var J=Oe;if(Oe=0,hi=null,eo(e,R,H,J),r&&Qs){E=0;break t}break;default:J=Oe,Oe=0,hi=null,eo(e,R,H,J)}}uE(),E=nn;break}catch(ht){H0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,_a=Wr=null,De=u,F.H=h,F.A=m,ge===null&&(ke=null,Se=0,Ru()),E}function uE(){for(;ge!==null;)X0(ge)}function cE(e,i){var r=De;De|=2;var u=V0(),h=k0();ke!==e||Se!==i?(rc=null,ac=b()+500,to(e,i)):Qs=Ft(e,i);t:do try{if(Oe!==0&&ge!==null){i=ge;var m=hi;e:switch(Oe){case 1:Oe=0,hi=null,eo(e,i,m,1);break;case 2:case 9:if(tg(m)){Oe=0,hi=null,W0(i);break}i=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),na(e)},m.then(i,i);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:tg(m)?(Oe=0,hi=null,W0(i)):(Oe=0,hi=null,eo(e,i,m,7));break;case 5:var E=null;switch(ge.tag){case 26:E=ge.memoizedState;case 5:case 27:var R=ge;if(E?Dv(E):R.stateNode.complete){Oe=0,hi=null;var H=R.sibling;if(H!==null)ge=H;else{var J=R.return;J!==null?(ge=J,lc(J)):ge=null}break e}}Oe=0,hi=null,eo(e,i,m,5);break;case 6:Oe=0,hi=null,eo(e,i,m,6);break;case 8:nd(),nn=6;break t;default:throw Error(a(462))}}fE();break}catch(ht){H0(e,ht)}while(!0);return _a=Wr=null,F.H=u,F.A=h,De=r,ge!==null?0:(ke=null,Se=0,Ru(),nn)}function fE(){for(;ge!==null&&!Qe();)X0(ge)}function X0(e){var i=p0(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,i===null?lc(e):ge=i}function W0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=l0(r,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=l0(r,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:vh(i);default:_0(r,i),i=ge=k_(i,Aa),i=p0(r,i,Aa)}e.memoizedProps=e.pendingProps,i===null?lc(e):ge=i}function eo(e,i,r,u){_a=Wr=null,vh(i),Xs=null,ul=0;var h=i.return;try{if($M(e,h,i,r,Se)){nn=1,Zu(e,bi(r,e.current)),ge=null;return}}catch(m){if(h!==null)throw ge=h,m;nn=1,Zu(e,bi(r,e.current)),ge=null;return}i.flags&32768?(Me||u===1?e=!0:Qs||(Se&536870912)!==0?e=!1:(rr=e=!0,(u===2||u===9||u===3||u===6)&&(u=ci.current,u!==null&&u.tag===13&&(u.flags|=16384))),q0(i,e)):lc(i)}function lc(e){var i=e;do{if((i.flags&32768)!==0){q0(i,rr);return}e=i.return;var r=nE(i.alternate,i,Aa);if(r!==null){ge=r;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=e}while(i!==null);nn===0&&(nn=5)}function q0(e,i){do{var r=iE(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);nn=6,ge=null}function Y0(e,i,r,u,h,m,E,R,H){e.cancelPendingCommit=null;do uc();while(yn!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Wf,Ei(e,r,m,E,R,H),e===ke&&(ge=ke=null,Se=0),$s=i,lr=e,Ra=r,$h=m,td=h,z0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mE(ft,function(){return J0(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,h=W.p,W.p=2,E=De,De|=4;try{aE(e,i,r)}finally{De=E,W.p=h,F.T=u}}yn=1,j0(),Z0(),K0()}}function j0(){if(yn===1){yn=0;var e=lr,i=$s,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var u=W.p;W.p=2;var h=De;De|=4;try{C0(i,e);var m=md,E=O_(e.containerInfo),R=m.focusedElem,H=m.selectionRange;if(E!==R&&R&&R.ownerDocument&&N_(R.ownerDocument.documentElement,R)){if(H!==null&&Hf(R)){var J=H.start,ht=H.end;if(ht===void 0&&(ht=J),"selectionStart"in R)R.selectionStart=J,R.selectionEnd=Math.min(ht,R.value.length);else{var mt=R.ownerDocument||document,it=mt&&mt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),It=R.textContent.length,ee=Math.min(H.start,It),Ie=H.end===void 0?ee:Math.min(H.end,It);!lt.extend&&ee>Ie&&(E=Ie,Ie=ee,ee=E);var j=L_(R,ee),k=L_(R,Ie);if(j&&k&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var Q=mt.createRange();Q.setStart(j.node,j.offset),lt.removeAllRanges(),ee>Ie?(lt.addRange(Q),lt.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),lt.addRange(Q))}}}}for(mt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&mt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<mt.length;R++){var pt=mt[R];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}yc=!!pd,md=pd=null}finally{De=h,W.p=u,F.T=r}}e.current=i,yn=2}}function Z0(){if(yn===2){yn=0;var e=lr,i=$s,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var u=W.p;W.p=2;var h=De;De|=4;try{E0(e,i.alternate,i)}finally{De=h,W.p=u,F.T=r}}yn=3}}function K0(){if(yn===4||yn===3){yn=0,z();var e=lr,i=$s,r=Ra,u=z0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yn=5:(yn=0,$s=lr=null,Q0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(or=null),Rs(r),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=F.T,h=W.p,W.p=2,F.T=null;try{for(var m=e.onRecoverableError,E=0;E<u.length;E++){var R=u[E];m(R.value,{componentStack:R.stack})}}finally{F.T=i,W.p=h}}(Ra&3)!==0&&uc(),na(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===ed?Al++:(Al=0,ed=e):Al=0,Rl(0)}}function Q0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ol(i)))}function uc(){return j0(),Z0(),K0(),J0()}function J0(){if(yn!==5)return!1;var e=lr,i=$h;$h=0;var r=Rs(Ra),u=F.T,h=W.p;try{W.p=32>r?32:r,F.T=null,r=td,td=null;var m=lr,E=Ra;if(yn=0,$s=lr=null,Ra=0,(De&6)!==0)throw Error(a(331));var R=De;if(De|=4,N0(m.current),D0(m,m.current,E,r),De=R,Rl(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Tt,m)}catch{}return!0}finally{W.p=h,F.T=u,Q0(e,i)}}function $0(e,i,r){i=bi(r,i),i=Nh(e.stateNode,i,2),e=er(e,i,2),e!==null&&(Gn(e,2),na(e))}function Pe(e,i,r){if(e.tag===3)$0(e,e,r);else for(;i!==null;){if(i.tag===3){$0(i,e,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){e=bi(r,e),r=t0(2),u=er(i,r,2),u!==null&&(e0(r,u,i,e),Gn(u,2),na(u));break}}i=i.return}}function ad(e,i,r){var u=e.pingCache;if(u===null){u=e.pingCache=new oE;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(r)||(Kh=!0,h.add(r),e=hE.bind(null,e,i,r),i.then(e,e))}function hE(e,i,r){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ke===e&&(Se&r)===r&&(nn===4||nn===3&&(Se&62914560)===Se&&300>b()-ic?(De&2)===0&&to(e,0):Qh|=r,Js===Se&&(Js=0)),na(e)}function tv(e,i){i===0&&(i=Ne()),e=Vr(e,i),e!==null&&(Gn(e,i),na(e))}function dE(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),tv(e,r)}function pE(e,i){var r=0;switch(e.tag){case 31:case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),tv(e,r)}function mE(e,i){return se(e,i)}var cc=null,no=null,rd=!1,fc=!1,sd=!1,cr=0;function na(e){e!==no&&e.next===null&&(no===null?cc=no=e:no=no.next=e),fc=!0,rd||(rd=!0,gE())}function Rl(e,i){if(!sd&&fc){sd=!0;do for(var r=!1,u=cc;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,R=u.pingedLanes;m=(1<<31-Pt(42|e)+1)-1,m&=h&~(E&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,av(u,m))}else m=Se,m=_t(u,u===ke?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ft(u,m)||(r=!0,av(u,m));u=u.next}while(r);sd=!1}}function _E(){ev()}function ev(){fc=rd=!1;var e=0;cr!==0&&RE()&&(e=cr);for(var i=b(),r=null,u=cc;u!==null;){var h=u.next,m=nv(u,i);m===0?(u.next=null,r===null?cc=h:r.next=h,h===null&&(no=r)):(r=u,(e!==0||(m&3)!==0)&&(fc=!0)),u=h}yn!==0&&yn!==5||Rl(e),cr!==0&&(cr=0)}function nv(e,i){for(var r=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Pt(m),R=1<<E,H=h[E];H===-1?((R&r)===0||(R&u)!==0)&&(h[E]=re(R,i)):H<=i&&(e.expiredLanes|=R),m&=~R}if(i=ke,r=Se,r=_t(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,r===0||e===i&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&tn(u),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ft(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(u!==null&&tn(u),Rs(r)){case 2:case 8:r=St;break;case 32:r=ft;break;case 268435456:r=At;break;default:r=ft}return u=iv.bind(null,e),r=se(r,u),e.callbackPriority=i,e.callbackNode=r,i}return u!==null&&u!==null&&tn(u),e.callbackPriority=2,e.callbackNode=null,2}function iv(e,i){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(uc()&&e.callbackNode!==r)return null;var u=Se;return u=_t(e,e===ke?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(F0(e,u,i),nv(e,b()),e.callbackNode!=null&&e.callbackNode===r?iv.bind(null,e):null)}function av(e,i){if(uc())return null;F0(e,i,!0)}function gE(){wE(function(){(De&6)!==0?se(dt,_E):ev()})}function od(){if(cr===0){var e=Gs;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),cr=e}return cr}function rv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xu(""+e)}function sv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function vE(e,i,r,u,h){if(i==="submit"&&r&&r.stateNode===h){var m=rv((h[Cn]||null).action),E=u.submitter;E&&(i=(i=E[Cn]||null)?rv(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var R=new Eu("action","action",null,u,h);e.push({event:R,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(cr!==0){var H=E?sv(h,E):new FormData(h);Rh(r,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(R.preventDefault(),H=E?sv(h,E):new FormData(h),Rh(r,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var ld=0;ld<Xf.length;ld++){var ud=Xf[ld],xE=ud.toLowerCase(),SE=ud[0].toUpperCase()+ud.slice(1);Ii(xE,"on"+SE)}Ii(B_,"onAnimationEnd"),Ii(F_,"onAnimationIteration"),Ii(I_,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(zM,"onTransitionRun"),Ii(BM,"onTransitionStart"),Ii(FM,"onTransitionCancel"),Ii(H_,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function ov(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var R=u[E],H=R.instance,J=R.currentTarget;if(R=R.listener,H!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=J;try{m(h)}catch(ht){Au(ht)}h.currentTarget=null,m=H}else for(E=0;E<u.length;E++){if(R=u[E],H=R.instance,J=R.currentTarget,R=R.listener,H!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=J;try{m(h)}catch(ht){Au(ht)}h.currentTarget=null,m=H}}}}function ve(e,i){var r=i[Zo];r===void 0&&(r=i[Zo]=new Set);var u=e+"__bubble";r.has(u)||(lv(i,e,2,!1),r.add(u))}function cd(e,i,r){var u=0;i&&(u|=4),lv(r,e,u,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function fd(e){if(!e[hc]){e[hc]=!0,Lt.forEach(function(r){r!=="selectionchange"&&(yE.has(r)||cd(r,!1,e),cd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[hc]||(i[hc]=!0,cd("selectionchange",!1,i))}}function lv(e,i,r,u){switch(Bv(i)){case 2:var h=ZE;break;case 8:h=KE;break;default:h=Ad}r=h.bind(null,i,r,e),h=void 0,!Uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function hd(e,i,r,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var R=u.stateNode.containerInfo;if(R===h)break;if(E===4)for(E=u.return;E!==null;){var H=E.tag;if((H===3||H===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;R!==null;){if(E=Y(R),E===null)return;if(H=E.tag,H===5||H===6||H===26||H===27){u=m=E;continue t}R=R.parentNode}}u=u.return}d_(function(){var J=m,ht=wf(r),mt=[];t:{var it=G_.get(e);if(it!==void 0){var lt=Eu,It=e;switch(e){case"keypress":if(yu(r)===0)break t;case"keydown":case"keyup":lt=pM;break;case"focusin":It="focus",lt=Pf;break;case"focusout":It="blur",lt=Pf;break;case"beforeblur":case"afterblur":lt=Pf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=__;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=nM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=gM;break;case B_:case F_:case I_:lt=rM;break;case H_:lt=xM;break;case"scroll":case"scrollend":lt=tM;break;case"wheel":lt=yM;break;case"copy":case"cut":case"paste":lt=oM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=v_;break;case"toggle":case"beforetoggle":lt=EM}var ee=(i&4)!==0,Ie=!ee&&(e==="scroll"||e==="scrollend"),j=ee?it!==null?it+"Capture":null:it;ee=[];for(var k=J,Q;k!==null;){var pt=k;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||j===null||(pt=Ko(k,j),pt!=null&&ee.push(wl(k,pt,Q))),Ie)break;k=k.return}0<ee.length&&(it=new lt(it,It,null,r,ht),mt.push({event:it,listeners:ee}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&r!==Cf&&(It=r.relatedTarget||r.fromElement)&&(Y(It)||It[Ya]))break t;if((lt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(It=r.relatedTarget||r.toElement,lt=J,It=It?Y(It):null,It!==null&&(Ie=l(It),ee=It.tag,It!==Ie||ee!==5&&ee!==27&&ee!==6)&&(It=null)):(lt=null,It=J),lt!==It)){if(ee=__,pt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=v_,pt="onPointerLeave",j="onPointerEnter",k="pointer"),Ie=lt==null?it:st(lt),Q=It==null?it:st(It),it=new ee(pt,k+"leave",lt,r,ht),it.target=Ie,it.relatedTarget=Q,pt=null,Y(ht)===J&&(ee=new ee(j,k+"enter",It,r,ht),ee.target=Q,ee.relatedTarget=Ie,pt=ee),Ie=pt,lt&&It)e:{for(ee=ME,j=lt,k=It,Q=0,pt=j;pt;pt=ee(pt))Q++;pt=0;for(var $t=k;$t;$t=ee($t))pt++;for(;0<Q-pt;)j=ee(j),Q--;for(;0<pt-Q;)k=ee(k),pt--;for(;Q--;){if(j===k||k!==null&&j===k.alternate){ee=j;break e}j=ee(j),k=ee(k)}ee=null}else ee=null;lt!==null&&uv(mt,it,lt,ee,!1),It!==null&&Ie!==null&&uv(mt,Ie,It,ee,!0)}}t:{if(it=J?st(J):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Re=A_;else if(T_(it))if(R_)Re=NM;else{Re=UM;var qt=DM}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Rf(J.elementType)&&(Re=A_):Re=LM;if(Re&&(Re=Re(e,J))){b_(mt,Re,r,ht);break t}qt&&qt(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&Sn(it,"number",it.value)}switch(qt=J?st(J):window,e){case"focusin":(T_(qt)||qt.contentEditable==="true")&&(Ns=qt,Gf=J,al=null);break;case"focusout":al=Gf=Ns=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,P_(mt,r,ht);break;case"selectionchange":if(PM)break;case"keydown":case"keyup":P_(mt,r,ht)}var ce;if(Bf)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ls?M_(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(x_&&r.locale!=="ko"&&(Ls||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ls&&(ce=p_()):(ja=ht,Lf="value"in ja?ja.value:ja.textContent,Ls=!0)),qt=dc(J,ye),0<qt.length&&(ye=new g_(ye,e,null,r,ht),mt.push({event:ye,listeners:qt}),ce?ye.data=ce:(ce=E_(r),ce!==null&&(ye.data=ce)))),(ce=bM?AM(e,r):RM(e,r))&&(ye=dc(J,"onBeforeInput"),0<ye.length&&(qt=new g_("onBeforeInput","beforeinput",null,r,ht),mt.push({event:qt,listeners:ye}),qt.data=ce)),vE(mt,e,J,r,ht)}ov(mt,i)})}function wl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function dc(e,i){for(var r=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Ko(e,r),h!=null&&u.unshift(wl(e,h,m)),h=Ko(e,i),h!=null&&u.push(wl(e,h,m))),e.tag===3)return u;e=e.return}return[]}function ME(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function uv(e,i,r,u,h){for(var m=i._reactName,E=[];r!==null&&r!==u;){var R=r,H=R.alternate,J=R.stateNode;if(R=R.tag,H!==null&&H===u)break;R!==5&&R!==26&&R!==27||J===null||(H=J,h?(J=Ko(r,m),J!=null&&E.unshift(wl(r,J,H))):h||(J=Ko(r,m),J!=null&&E.push(wl(r,J,H)))),r=r.return}E.length!==0&&e.push({event:i,listeners:E})}var EE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function cv(e){return(typeof e=="string"?e:""+e).replace(EE,`
`).replace(TE,"")}function fv(e,i){return i=cv(i),cv(e)===i}function Fe(e,i,r,u,h,m){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||ws(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&ws(e,""+u);break;case"className":Le(e,"class",u);break;case"tabIndex":Le(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(e,r,u);break;case"style":f_(e,u,m);break;case"data":if(i!=="object"){Le(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=xu(""+u),e.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Fe(e,i,"name",h.name,h,null),Fe(e,i,"formEncType",h.formEncType,h,null),Fe(e,i,"formMethod",h.formMethod,h,null),Fe(e,i,"formTarget",h.formTarget,h,null)):(Fe(e,i,"encType",h.encType,h,null),Fe(e,i,"method",h.method,h,null),Fe(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=xu(""+u),e.setAttribute(r,u);break;case"onClick":u!=null&&(e.onclick=ha);break;case"onScroll":u!=null&&ve("scroll",e);break;case"onScrollEnd":u!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}r=xu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""+u):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":u===!0?e.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,u):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(r,u):e.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(r):e.setAttribute(r,u);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ve(e,"popover",u);break;case"xlinkActuate":_e(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":_e(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":_e(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":_e(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":_e(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":_e(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":_e(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":_e(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":_e(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ve(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Jy.get(r)||r,Ve(e,r,u))}}function dd(e,i,r,u,h,m){switch(r){case"style":f_(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof u=="string"?ws(e,u):(typeof u=="number"||typeof u=="bigint")&&ws(e,""+u);break;case"onScroll":u!=null&&ve("scroll",e);break;case"onScrollEnd":u!=null&&ve("scrollend",e);break;case"onClick":u!=null&&(e.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ht.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Cn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,u,h);break t}r in e?e[r]=u:u===!0?e.setAttribute(r,""):Ve(e,r,u)}}}function Nn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var u=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,m,E,r,null)}}h&&Fe(e,i,"srcSet",r.srcSet,r,null),u&&Fe(e,i,"src",r.src,r,null);return;case"input":ve("invalid",e);var R=m=E=h=null,H=null,J=null;for(u in r)if(r.hasOwnProperty(u)){var ht=r[u];if(ht!=null)switch(u){case"name":h=ht;break;case"type":E=ht;break;case"checked":H=ht;break;case"defaultChecked":J=ht;break;case"value":m=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Fe(e,i,u,ht,r,null)}}Vn(e,m,R,H,J,E,h,!1);return;case"select":ve("invalid",e),u=E=m=null;for(h in r)if(r.hasOwnProperty(h)&&(R=r[h],R!=null))switch(h){case"value":m=R;break;case"defaultValue":E=R;break;case"multiple":u=R;default:Fe(e,i,h,R,r,null)}i=m,r=E,e.multiple=!!u,i!=null?rn(e,!!u,i,!1):r!=null&&rn(e,!!u,r,!0);return;case"textarea":ve("invalid",e),m=h=u=null;for(E in r)if(r.hasOwnProperty(E)&&(R=r[E],R!=null))switch(E){case"value":u=R;break;case"defaultValue":h=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Fe(e,i,E,R,r,null)}Ji(e,u,h,m);return;case"option":for(H in r)if(r.hasOwnProperty(H)&&(u=r[H],u!=null))switch(H){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Fe(e,i,H,u,r,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(u=0;u<Cl.length;u++)ve(Cl[u],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in r)if(r.hasOwnProperty(J)&&(u=r[J],u!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,J,u,r,null)}return;default:if(Rf(i)){for(ht in r)r.hasOwnProperty(ht)&&(u=r[ht],u!==void 0&&dd(e,i,ht,u,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(u=r[R],u!=null&&Fe(e,i,R,u,r,null))}function bE(e,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,R=null,H=null,J=null,ht=null;for(lt in r){var mt=r[lt];if(r.hasOwnProperty(lt)&&mt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=mt;default:u.hasOwnProperty(lt)||Fe(e,i,lt,null,u,mt)}}for(var it in u){var lt=u[it];if(mt=r[it],u.hasOwnProperty(it)&&(lt!=null||mt!=null))switch(it){case"type":m=lt;break;case"name":h=lt;break;case"checked":J=lt;break;case"defaultChecked":ht=lt;break;case"value":E=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==mt&&Fe(e,i,it,lt,u,mt)}}Pn(e,E,R,H,J,ht,m,h);return;case"select":lt=E=R=it=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":lt=H;default:u.hasOwnProperty(m)||Fe(e,i,m,null,u,H)}for(h in u)if(m=u[h],H=r[h],u.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":it=m;break;case"defaultValue":R=m;break;case"multiple":E=m;default:m!==H&&Fe(e,i,h,m,u,H)}i=R,r=E,u=lt,it!=null?rn(e,!!r,it,!1):!!u!=!!r&&(i!=null?rn(e,!!r,i,!0):rn(e,!!r,r?[]:"",!1));return;case"textarea":lt=it=null;for(R in r)if(h=r[R],r.hasOwnProperty(R)&&h!=null&&!u.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Fe(e,i,R,null,u,h)}for(E in u)if(h=u[E],m=r[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":it=h;break;case"defaultValue":lt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Fe(e,i,E,h,u,m)}Cs(e,it,lt);return;case"option":for(var It in r)if(it=r[It],r.hasOwnProperty(It)&&it!=null&&!u.hasOwnProperty(It))switch(It){case"selected":e.selected=!1;break;default:Fe(e,i,It,null,u,it)}for(H in u)if(it=u[H],lt=r[H],u.hasOwnProperty(H)&&it!==lt&&(it!=null||lt!=null))switch(H){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Fe(e,i,H,it,u,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in r)it=r[ee],r.hasOwnProperty(ee)&&it!=null&&!u.hasOwnProperty(ee)&&Fe(e,i,ee,null,u,it);for(J in u)if(it=u[J],lt=r[J],u.hasOwnProperty(J)&&it!==lt&&(it!=null||lt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:Fe(e,i,J,it,u,lt)}return;default:if(Rf(i)){for(var Ie in r)it=r[Ie],r.hasOwnProperty(Ie)&&it!==void 0&&!u.hasOwnProperty(Ie)&&dd(e,i,Ie,void 0,u,it);for(ht in u)it=u[ht],lt=r[ht],!u.hasOwnProperty(ht)||it===lt||it===void 0&&lt===void 0||dd(e,i,ht,it,u,lt);return}}for(var j in r)it=r[j],r.hasOwnProperty(j)&&it!=null&&!u.hasOwnProperty(j)&&Fe(e,i,j,null,u,it);for(mt in u)it=u[mt],lt=r[mt],!u.hasOwnProperty(mt)||it===lt||it==null&&lt==null||Fe(e,i,mt,it,u,lt)}function hv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),u=0;u<r.length;u++){var h=r[u],m=h.transferSize,E=h.initiatorType,R=h.duration;if(m&&R&&hv(E)){for(E=0,R=h.responseEnd,u+=1;u<r.length;u++){var H=r[u],J=H.startTime;if(J>R)break;var ht=H.transferSize,mt=H.initiatorType;ht&&hv(mt)&&(H=H.responseEnd,E+=ht*(H<R?1:(R-J)/(H-J)))}if(--u,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pd=null,md=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function dv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function _d(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gd=null;function RE(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var mv=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(e){return _v.resolve(null).then(e).catch(DE)}:mv;function DE(e){setTimeout(function(){throw e})}function fr(e){return e==="head"}function gv(e,i){var r=i,u=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(u===0){e.removeChild(h),so(i);return}u--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")u++;else if(r==="html")Dl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Dl(r);for(var m=r.firstChild;m;){var E=m.nextSibling,R=m.nodeName;m[Br]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=E}}else r==="body"&&Dl(e.ownerDocument.body);r=h}while(r);so(i)}function vv(e,i){var r=e;e=0;do{var u=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=u}while(r)}function vd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":vd(r),w(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function UE(e,i,r,u){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Br])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function LE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Di(e.nextSibling),e===null))return null;return e}function xv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Di(e.nextSibling),e===null))return null;return e}function xd(e){return e.data==="$?"||e.data==="$~"}function Sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NE(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var u=function(){i(),r.removeEventListener("DOMContentLoaded",u)};r.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var yd=null;function Sv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Di(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function yv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Mv(e,i,r){switch(i=pc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Dl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);w(e)}var Ui=new Map,Ev=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=W.d;W.d={f:OE,r:PE,D:zE,C:BE,L:FE,m:IE,X:GE,S:HE,M:VE};function OE(){var e=Ca.f(),i=sc();return e||i}function PE(e){var i=rt(e);i!==null&&i.tag===5&&i.type==="form"?Hg(i):Ca.r(e)}var io=typeof document>"u"?null:document;function Tv(e,i,r){var u=io;if(u&&typeof i=="string"&&i){var h=xe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Ev.has(h)||(Ev.add(h),e={rel:e,crossOrigin:r,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Nn(i,"link",e),gt(i),u.head.appendChild(i)))}}function zE(e){Ca.D(e),Tv("dns-prefetch",e,null)}function BE(e,i){Ca.C(e,i),Tv("preconnect",e,i)}function FE(e,i,r){Ca.L(e,i,r);var u=io;if(u&&e&&i){var h='link[rel="preload"][as="'+xe(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+xe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+xe(r.imageSizes)+'"]')):h+='[href="'+xe(e)+'"]';var m=h;switch(i){case"style":m=ao(e);break;case"script":m=ro(e)}Ui.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Ui.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Ul(m))||i==="script"&&u.querySelector(Ll(m))||(i=u.createElement("link"),Nn(i,"link",e),gt(i),u.head.appendChild(i)))}}function IE(e,i){Ca.m(e,i);var r=io;if(r&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+xe(u)+'"][href="'+xe(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ro(e)}if(!Ui.has(m)&&(e=g({rel:"modulepreload",href:e},i),Ui.set(m,e),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ll(m)))return}u=r.createElement("link"),Nn(u,"link",e),gt(u),r.head.appendChild(u)}}}function HE(e,i,r){Ca.S(e,i,r);var u=io;if(u&&e){var h=Z(u).hoistableStyles,m=ao(e);i=i||"default";var E=h.get(m);if(!E){var R={loading:0,preload:null};if(E=u.querySelector(Ul(m)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Ui.get(m))&&Md(e,r);var H=E=u.createElement("link");gt(H),Nn(H,"link",e),H._p=new Promise(function(J,ht){H.onload=J,H.onerror=ht}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,_c(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:R},h.set(m,E)}}}function GE(e,i){Ca.X(e,i);var r=io;if(r&&e){var u=Z(r).hoistableScripts,h=ro(e),m=u.get(h);m||(m=r.querySelector(Ll(h)),m||(e=g({src:e,async:!0},i),(i=Ui.get(h))&&Ed(e,i),m=r.createElement("script"),gt(m),Nn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function VE(e,i){Ca.M(e,i);var r=io;if(r&&e){var u=Z(r).hoistableScripts,h=ro(e),m=u.get(h);m||(m=r.querySelector(Ll(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Ui.get(h))&&Ed(e,i),m=r.createElement("script"),gt(m),Nn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function bv(e,i,r,u){var h=(h=at.current)?mc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ao(r.href),r=Z(h).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ao(r.href);var m=Z(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(Ul(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Ui.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ui.set(e,r),m||kE(h,e,r,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ro(r),r=Z(h).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ao(e){return'href="'+xe(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function Av(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function kE(e,i,r,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Nn(i,"link",r),gt(i),e.head.appendChild(i))}function ro(e){return'[src="'+xe(e)+'"]'}function Ll(e){return"script[async]"+e}function Rv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+xe(r.href)+'"]');if(u)return i.instance=u,gt(u),u;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),gt(u),Nn(u,"style",h),_c(u,r.precedence,e),i.instance=u;case"stylesheet":h=ao(r.href);var m=e.querySelector(Ul(h));if(m)return i.state.loading|=4,i.instance=m,gt(m),m;u=Av(r),(h=Ui.get(h))&&Md(u,h),m=(e.ownerDocument||e).createElement("link"),gt(m);var E=m;return E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),Nn(m,"link",u),i.state.loading|=4,_c(m,r.precedence,e),i.instance=m;case"script":return m=ro(r.src),(h=e.querySelector(Ll(m)))?(i.instance=h,gt(h),h):(u=r,(h=Ui.get(m))&&(u=g({},r),Ed(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),gt(h),Nn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,_c(u,r.precedence,e));return i.instance}function _c(e,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var R=u[E];if(R.dataset.precedence===i)m=R;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Md(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ed(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var gc=null;function Cv(e,i,r){if(gc===null){var u=new Map,h=gc=new Map;h.set(r,u)}else h=gc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(e))return u;for(u.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Br]||m[hn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var R=u.get(E);R?R.push(m):u.set(E,[m])}}return u}function wv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function XE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function WE(e,i,r,u){if(r.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=ao(u.href),m=i.querySelector(Ul(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=vc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,gt(m);return}m=i.ownerDocument||i,u=Av(u),(h=Ui.get(h))&&Md(u,h),m=m.createElement("link"),gt(m);var E=m;E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),Nn(m,"link",u),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=vc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Td=0;function qE(e,i){return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var u=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Td===0&&(Td=62500*AE());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Td?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function Sc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,i.forEach(YE,e),xc=null,vc.call(e))}function YE(e,i){if(!(i.state.loading&4)){var r=xc.get(e);if(r)var u=r.get(null);else{r=new Map,xc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),u=E)}u&&r.set(null,u)}h=i.instance,E=h.getAttribute("data-precedence"),m=r.get(E)||u,m===u&&r.set(null,h),r.set(E,h),this.count++,u=vc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Nl={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function jE(e,i,r,u,h,m,E,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Uv(e,i,r,u,h,m,E,R,H,J,ht,mt){return e=new jE(e,i,r,E,H,J,ht,mt,R),i=1,m===!0&&(i|=24),m=ui(3,null,null,i),e.current=m,m.stateNode=e,i=ih(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:i},oh(m),e}function Lv(e){return e?(e=zs,e):zs}function Nv(e,i,r,u,h,m){h=Lv(h),u.context===null?u.context=h:u.pendingContext=h,u=tr(i),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=er(e,u,i),r!==null&&(Jn(r,e,i),fl(r,e,i))}function Ov(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function bd(e,i){Ov(e,i),(e=e.alternate)&&Ov(e,i)}function Pv(e){if(e.tag===13||e.tag===31){var i=Vr(e,67108864);i!==null&&Jn(i,e,67108864),bd(e,67108864)}}function zv(e){if(e.tag===13||e.tag===31){var i=pi();i=As(i);var r=Vr(e,i);r!==null&&Jn(r,e,i),bd(e,i)}}var yc=!0;function ZE(e,i,r,u){var h=F.T;F.T=null;var m=W.p;try{W.p=2,Ad(e,i,r,u)}finally{W.p=m,F.T=h}}function KE(e,i,r,u){var h=F.T;F.T=null;var m=W.p;try{W.p=8,Ad(e,i,r,u)}finally{W.p=m,F.T=h}}function Ad(e,i,r,u){if(yc){var h=Rd(u);if(h===null)hd(e,i,u,Mc,r),Fv(e,u);else if(JE(h,e,i,r,u))u.stopPropagation();else if(Fv(e,u),i&4&&-1<QE.indexOf(e)){for(;h!==null;){var m=rt(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Mt(m.pendingLanes);if(E!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var H=1<<31-Pt(E);R.entanglements[1]|=H,E&=~H}na(m),(De&6)===0&&(ac=b()+500,Rl(0))}}break;case 31:case 13:R=Vr(m,2),R!==null&&Jn(R,m,2),sc(),bd(m,2)}if(m=Rd(u),m===null&&hd(e,i,u,Mc,r),m===h)break;h=m}h!==null&&u.stopPropagation()}else hd(e,i,u,null,r)}}function Rd(e){return e=wf(e),Cd(e)}var Mc=null;function Cd(e){if(Mc=null,e=Y(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Mc=e,null}function Bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case dt:return 2;case St:return 8;case ft:case Zt:return 32;case At:return 268435456;default:return 32}default:return 32}}var wd=!1,hr=null,dr=null,pr=null,Ol=new Map,Pl=new Map,mr=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(e,i){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ol.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(i.pointerId)}}function zl(e,i,r,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=rt(i),i!==null&&Pv(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function JE(e,i,r,u,h){switch(i){case"focusin":return hr=zl(hr,e,i,r,u,h),!0;case"dragenter":return dr=zl(dr,e,i,r,u,h),!0;case"mouseover":return pr=zl(pr,e,i,r,u,h),!0;case"pointerover":var m=h.pointerId;return Ol.set(m,zl(Ol.get(m)||null,e,i,r,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Pl.set(m,zl(Pl.get(m)||null,e,i,r,u,h)),!0}return!1}function Iv(e){var i=Y(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,jo(e.priority,function(){zv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,jo(e.priority,function(){zv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ec(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Rd(e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);Cf=u,r.target.dispatchEvent(u),Cf=null}else return i=rt(r),i!==null&&Pv(i),e.blockedOn=r,!1;i.shift()}return!0}function Hv(e,i,r){Ec(e)&&r.delete(i)}function $E(){wd=!1,hr!==null&&Ec(hr)&&(hr=null),dr!==null&&Ec(dr)&&(dr=null),pr!==null&&Ec(pr)&&(pr=null),Ol.forEach(Hv),Pl.forEach(Hv)}function Tc(e,i){e.blockedOn===i&&(e.blockedOn=null,wd||(wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$E)))}var bc=null;function Gv(e){bc!==e&&(bc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var i=0;i<e.length;i+=3){var r=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(Cd(u||r)===null)continue;break}var m=rt(r);m!==null&&(e.splice(i,3),i-=3,Rh(m,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function so(e){function i(H){return Tc(H,e)}hr!==null&&Tc(hr,e),dr!==null&&Tc(dr,e),pr!==null&&Tc(pr,e),Ol.forEach(i),Pl.forEach(i);for(var r=0;r<mr.length;r++){var u=mr[r];u.blockedOn===e&&(u.blockedOn=null)}for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)Iv(r),r.blockedOn===null&&mr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],m=r[u+1],E=h[Cn]||null;if(typeof m=="function")E||Gv(r);else if(E){var R=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[Cn]||null)R=E.formAction;else if(Cd(h)!==null)continue}else R=E.action;typeof R=="function"?r[u+1]=R:(r.splice(u,3),u-=3),Gv(r)}}}function Vv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(r,20)}function r(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Dd(e){this._internalRoot=e}Ac.prototype.render=Dd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=pi();Nv(r,u,e,i,null,null)},Ac.prototype.unmount=Dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Nv(e.current,2,null,e,null,null),sc(),i[Ya]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var i=zr();e={blockedOn:null,target:e,priority:i};for(var r=0;r<mr.length&&i!==0&&i<mr[r].priority;r++);mr.splice(r,0,e),r===0&&Iv(e)}};var kv=t.version;if(kv!=="19.2.0")throw Error(a(527,kv,"19.2.0"));W.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var tT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{Tt=Rc.inject(tT),Rt=Rc}catch{}}return Fl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,u="",h=Kg,m=Qg,E=Jg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=Uv(e,1,!1,null,null,r,u,null,h,m,E,Vv),e[Ya]=i.current,fd(e),new Dd(i)},Fl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var u=!1,h="",m=Kg,E=Qg,R=Jg,H=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),i=Uv(e,1,!0,i,r??null,u,h,H,m,E,R,Vv),i.context=Lv(null),r=i.current,u=pi(),u=As(u),h=tr(u),h.callback=null,er(r,h,u),r=u,i.current.lanes=r,Gn(i,r),na(i),e[Ya]=i.current,fd(e),new Ac(i)},Fl.version="19.2.0",Fl}var $v;function fT(){if($v)return Ld.exports;$v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ld.exports=cT(),Ld.exports}var hT=fT(),ji=Lm();const Bd=nT(ji);class vS{id;name;capacity;players;status="free";constructor(t,n){this.id=Date.now().toString(),this.name=t,this.capacity=n,this.players=[]}}function dT({room:o,handleInGame:t}){return Vt.jsxs("div",{className:"room",onClick:()=>{o.players.length<o.capacity&&t()},children:[Vt.jsxs("div",{className:"left",children:[Vt.jsx("h3",{children:o.name}),Vt.jsxs("p",{children:["Вместимость: ",o.capacity]})]}),Vt.jsx("div",{className:"right",children:Vt.jsx("p",{style:{color:o.status==="free"?"lime":"red"},children:o.status==="free"?"доступна":"идёт игра"})})]})}function pT({handleCreateRoom:o,handleCancel:t}){const[n,a]=ji.useState(""),[s,l]=ji.useState(2),c=f=>{f.preventDefault();const p=new vS(n,s);o(p)};return Vt.jsxs("div",{className:"form",children:[Vt.jsxs("div",{className:"title-header",children:[Vt.jsx("h2",{children:"Создать новую комнату"}),Vt.jsx("button",{className:"cancel",onClick:t,title:"отменить",children:"X"})]}),Vt.jsxs("div",{className:"row",children:[Vt.jsx("label",{htmlFor:"roomName",children:"Название комнаты:"}),Vt.jsx("input",{type:"text",id:"roomName",name:"roomName",placeholder:"Игровая комната",value:n,onChange:f=>a(f.target.value)})]}),Vt.jsxs("div",{className:"row",children:[Vt.jsx("label",{htmlFor:"roomCapacity",children:"Вместимость комнаты:"}),Vt.jsxs("div",{className:"buttons-container",children:[Vt.jsx("button",{onClick:()=>l(2),style:{backgroundColor:s===2?"blue":"black"},children:"2"}),Vt.jsx("button",{onClick:()=>l(3),style:{backgroundColor:s===3?"blue":"black"},children:"3"}),Vt.jsx("button",{onClick:()=>l(4),style:{backgroundColor:s===4?"blue":"black"},children:"4"}),Vt.jsx("button",{onClick:()=>l(5),style:{backgroundColor:s===5?"blue":"black"},children:"5"}),Vt.jsx("button",{onClick:()=>l(6),style:{backgroundColor:s===6?"blue":"black"},children:"6"})]})]}),Vt.jsx("button",{type:"submit",onClick:c,children:"Создать"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nm="180",mT=0,tx=1,_T=2,xS=1,gT=2,Oa=3,Ur=0,ti=1,Ia=2,Rr=0,wo=1,ex=2,nx=3,ix=4,vT=5,fs=100,xT=101,ST=102,yT=103,MT=104,ET=200,TT=201,bT=202,AT=203,bp=204,Ap=205,RT=206,CT=207,wT=208,DT=209,UT=210,LT=211,NT=212,OT=213,PT=214,Rp=0,Cp=1,wp=2,Oo=3,Dp=4,Up=5,Lp=6,Np=7,SS=0,zT=1,BT=2,Cr=0,FT=1,IT=2,HT=3,GT=4,VT=5,kT=6,XT=7,yS=300,Po=301,zo=302,Op=303,Pp=304,xf=306,zp=1e3,ds=1001,Bp=1002,Zi=1003,WT=1004,Cc=1005,oa=1006,Fd=1007,ps=1008,Va=1009,MS=1010,ES=1011,Ql=1012,Om=1013,ys=1014,Ha=1015,cu=1016,Pm=1017,zm=1018,Jl=1020,TS=35902,bS=35899,AS=1021,RS=1022,qi=1023,$l=1026,tu=1027,CS=1028,Bm=1029,wS=1030,Fm=1031,Im=1033,tf=33776,ef=33777,nf=33778,af=33779,Fp=35840,Ip=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,Wp=37808,qp=37809,Yp=37810,jp=37811,Zp=37812,Kp=37813,Qp=37814,Jp=37815,$p=37816,tm=37817,em=37818,nm=37819,im=37820,am=37821,rm=36492,sm=36494,om=36495,lm=36283,um=36284,cm=36285,fm=36286,qT=3200,YT=3201,jT=0,ZT=1,Er="",Oi="srgb",Bo="srgb-linear",uf="linear",He="srgb",oo=7680,ax=519,KT=512,QT=513,JT=514,DS=515,$T=516,t1=517,e1=518,n1=519,rx=35044,sx="300 es",la=2e3,cf=2001;class Wo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Id=Math.PI/180,hm=180/Math.PI;function fu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]).toLowerCase()}function he(o,t,n){return Math.max(t,Math.min(n,o))}function i1(o,t){return(o%t+t)%t}function Hd(o,t,n){return(1-n)*o+n*t}function Il(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $n(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ae{constructor(t=0,n=0){ae.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(he(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*s+t.x,this.y=l*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hu{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],g=a[s+3];const v=l[c+0],y=l[c+1],T=l[c+2],M=l[c+3];if(f===0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=T,t[n+3]=M;return}if(g!==M||p!==v||d!==y||_!==T){let S=1-f;const x=p*v+d*y+_*T+g*M,L=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const O=Math.sqrt(U),P=Math.atan2(O,x*L);S=Math.sin(S*P)/O,f=Math.sin(f*P)/O}const C=f*L;if(p=p*S+v*C,d=d*S+y*C,_=_*S+T*C,g=g*S+M*C,S===1-f){const O=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=O,d*=O,_*=O,g*=O}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,l,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],g=l[c],v=l[c+1],y=l[c+2],T=l[c+3];return t[n]=f*T+_*g+p*y-d*v,t[n+1]=p*T+_*v+d*g-f*y,t[n+2]=d*T+_*y+f*v-p*g,t[n+3]=_*T-f*g-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),g=f(l/2),v=p(a/2),y=p(s/2),T=p(l/2);switch(c){case"XYZ":this._x=v*_*g+d*y*T,this._y=d*y*g-v*_*T,this._z=d*_*T+v*y*g,this._w=d*_*g-v*y*T;break;case"YXZ":this._x=v*_*g+d*y*T,this._y=d*y*g-v*_*T,this._z=d*_*T-v*y*g,this._w=d*_*g+v*y*T;break;case"ZXY":this._x=v*_*g-d*y*T,this._y=d*y*g+v*_*T,this._z=d*_*T+v*y*g,this._w=d*_*g-v*y*T;break;case"ZYX":this._x=v*_*g-d*y*T,this._y=d*y*g+v*_*T,this._z=d*_*T-v*y*g,this._w=d*_*g+v*y*T;break;case"YZX":this._x=v*_*g+d*y*T,this._y=d*y*g+v*_*T,this._z=d*_*T-v*y*g,this._w=d*_*g-v*y*T;break;case"XZY":this._x=v*_*g-d*y*T,this._y=d*y*g-v*_*T,this._z=d*_*T+v*y*g,this._w=d*_*g+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(l-d)*y,this._z=(c-s)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-p)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(l-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(c-s)/y,this._x=(l+d)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-l*p,this._y=s*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-l*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*a+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const d=Math.sqrt(p),_=Math.atan2(d,f),g=Math.sin((1-n)*_)/d,v=Math.sin(n*_)/d;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,n=0,a=0){nt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ox.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ox.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-l*s),g=2*(l*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-l*g,this.z=s+p*g+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Gd.copy(this).projectOnVector(t),this.sub(Gd)}reflect(t){return this.sub(Gd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(he(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new nt,ox=new hu;class fe{constructor(t,n,a,s,l,c,f,p,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d)}set(t,n,a,s,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],y=a[5],T=a[8],M=s[0],S=s[3],x=s[6],L=s[1],U=s[4],C=s[7],O=s[2],P=s[5],N=s[8];return l[0]=c*M+f*L+p*O,l[3]=c*S+f*U+p*P,l[6]=c*x+f*C+p*N,l[1]=d*M+_*L+g*O,l[4]=d*S+_*U+g*P,l[7]=d*x+_*C+g*N,l[2]=v*M+y*L+T*O,l[5]=v*S+y*U+T*P,l[8]=v*x+y*C+T*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+s*l*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*l,y=d*l-c*p,T=n*g+a*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=g*M,t[1]=(s*d-_*a)*M,t[2]=(f*a-s*c)*M,t[3]=v*M,t[4]=(_*n-s*p)*M,t[5]=(s*l-f*n)*M,t[6]=y*M,t[7]=(a*p-d*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Vd.makeScale(t,n)),this}rotate(t){return this.premultiply(Vd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Vd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new fe;function US(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function eu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function a1(){const o=eu("canvas");return o.style.display="block",o}const lx={};function nu(o){o in lx||(lx[o]=!0,console.warn(o))}function r1(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const ux=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cx=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s1(){const o={enabled:!0,workingColorSpace:Bo,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===He&&(s.r=Ga(s.r),s.g=Ga(s.g),s.b=Ga(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===He&&(s.r=Do(s.r),s.g=Do(s.g),s.b=Do(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?uf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return nu("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return nu("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Bo]:{primaries:t,whitePoint:a,transfer:uf,toXYZ:ux,fromXYZ:cx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:a,transfer:He,toXYZ:ux,fromXYZ:cx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),o}const we=s1();function Ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Do(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lo;class o1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{lo===void 0&&(lo=eu("canvas")),lo.width=t.width,lo.height=t.height;const s=lo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=lo}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=eu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ga(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ga(n[a]/255)*255):n[a]=Ga(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let l1=0;class Hm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=fu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(kd(s[c].image)):l.push(kd(s[c]))}else l=kd(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function kd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?o1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u1=0;const Xd=new nt;class qn extends Wo{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,a=ds,s=ds,l=oa,c=ps,f=qi,p=Va,d=qn.DEFAULT_ANISOTROPY,_=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=fu(),this.name="",this.source=new Hm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zp:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case Bp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zp:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case Bp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=yS;qn.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,a=0,s=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],y=p[5],T=p[9],M=p[2],S=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(T+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,C=(y+1)/2,O=(x+1)/2,P=(_+v)/4,N=(g+M)/4,I=(T+S)/4;return U>C&&U>O?U<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(U),s=P/a,l=N/a):C>O?C<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),a=P/s,l=I/s):O<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(O),a=N/l,s=I/l),this.set(a,s,l,n),this}let L=Math.sqrt((S-T)*(S-T)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(g-M)/L,this.z=(v-_)/L,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this.w=he(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this.w=he(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c1 extends Wo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n);const s={width:t,height:n,depth:a.depth},l=new qn(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:oa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Hm(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends c1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class LS extends qn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class f1 extends qn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class du{constructor(t=new nt(1/0,1/0,1/0),n=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Vi):Vi.fromBufferAttribute(l,c),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),wc.copy(a.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hl),Dc.subVectors(this.max,Hl),uo.subVectors(t.a,Hl),co.subVectors(t.b,Hl),fo.subVectors(t.c,Hl),gr.subVectors(co,uo),vr.subVectors(fo,co),es.subVectors(uo,fo);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-es.z,es.y,gr.z,0,-gr.x,vr.z,0,-vr.x,es.z,0,-es.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-es.y,es.x,0];return!Wd(n,uo,co,fo,Dc)||(n=[1,0,0,0,1,0,0,0,1],!Wd(n,uo,co,fo,Dc))?!1:(Uc.crossVectors(gr,vr),n=[Uc.x,Uc.y,Uc.z],Wd(n,uo,co,fo,Dc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Vi=new nt,wc=new du,uo=new nt,co=new nt,fo=new nt,gr=new nt,vr=new nt,es=new nt,Hl=new nt,Dc=new nt,Uc=new nt,ns=new nt;function Wd(o,t,n,a,s){for(let l=0,c=o.length-3;l<=c;l+=3){ns.fromArray(o,l);const f=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),p=t.dot(ns),d=n.dot(ns),_=a.dot(ns);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const h1=new du,Gl=new nt,qd=new nt;class Sf{constructor(t=new nt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):h1.setFromPoints(t).getCenter(a);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const n=Gl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Gl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(qd)),this.expandByPoint(Gl.copy(t.center).sub(qd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Da=new nt,Yd=new nt,Lc=new nt,xr=new nt,jd=new nt,Nc=new nt,Zd=new nt;class Gm{constructor(t=new nt,n=new nt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){Yd.copy(t).add(n).multiplyScalar(.5),Lc.copy(n).sub(t).normalize(),xr.copy(this.origin).sub(Yd);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Lc),f=xr.dot(this.direction),p=-xr.dot(Lc),d=xr.lengthSq(),_=Math.abs(1-c*c);let g,v,y,T;if(_>0)if(g=c*p-f,v=c*f-p,T=l*_,g>=0)if(v>=-T)if(v<=T){const M=1/_;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v<=-T?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d):v<=T?(g=0,v=Math.min(Math.max(-l,-p),l),y=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Yd).addScaledVector(Lc,v),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const a=Da.dot(this.direction),s=Da.dot(Da)-a*a,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,a,s,l){jd.subVectors(n,t),Nc.subVectors(a,t),Zd.crossVectors(jd,Nc);let c=this.direction.dot(Zd),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;xr.subVectors(this.origin,t);const p=f*this.direction.dot(Nc.crossVectors(xr,Nc));if(p<0)return null;const d=f*this.direction.dot(jd.cross(xr));if(d<0||p+d>c)return null;const _=-f*xr.dot(Zd);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,n,a,s,l,c,f,p,d,_,g,v,y,T,M,S){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d,_,g,v,y,T,M,S)}set(t,n,a,s,l,c,f,p,d,_,g,v,y,T,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=T,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/ho.setFromMatrixColumn(t,0).length(),l=1/ho.setFromMatrixColumn(t,1).length(),c=1/ho.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,y=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=y+T*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=T+y*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,y=p*g,T=d*_,M=d*g;n[0]=v+M*f,n[4]=T*f-y,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=y*f-T,n[6]=M+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,y=p*g,T=d*_,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=T+y*f,n[1]=y+T*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,y=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=T*d-y,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=y*d-T,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,y=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=T*g+y,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=y*g+T,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,y=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=c*_,n[9]=y*g-T,n[2]=T*g-y,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(d1,t,p1)}lookAt(t,n,a){const s=this.elements;return mi.subVectors(t,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Sr.crossVectors(a,mi),Sr.lengthSq()===0&&(Math.abs(a.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Sr.crossVectors(a,mi)),Sr.normalize(),Oc.crossVectors(mi,Sr),s[0]=Sr.x,s[4]=Oc.x,s[8]=mi.x,s[1]=Sr.y,s[5]=Oc.y,s[9]=mi.y,s[2]=Sr.z,s[6]=Oc.z,s[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],y=a[13],T=a[2],M=a[6],S=a[10],x=a[14],L=a[3],U=a[7],C=a[11],O=a[15],P=s[0],N=s[4],I=s[8],A=s[12],D=s[1],V=s[5],K=s[9],et=s[13],ut=s[2],ot=s[6],F=s[10],W=s[14],q=s[3],vt=s[7],yt=s[11],B=s[15];return l[0]=c*P+f*D+p*ut+d*q,l[4]=c*N+f*V+p*ot+d*vt,l[8]=c*I+f*K+p*F+d*yt,l[12]=c*A+f*et+p*W+d*B,l[1]=_*P+g*D+v*ut+y*q,l[5]=_*N+g*V+v*ot+y*vt,l[9]=_*I+g*K+v*F+y*yt,l[13]=_*A+g*et+v*W+y*B,l[2]=T*P+M*D+S*ut+x*q,l[6]=T*N+M*V+S*ot+x*vt,l[10]=T*I+M*K+S*F+x*yt,l[14]=T*A+M*et+S*W+x*B,l[3]=L*P+U*D+C*ut+O*q,l[7]=L*N+U*V+C*ot+O*vt,l[11]=L*I+U*K+C*F+O*yt,l[15]=L*A+U*et+C*W+O*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],y=t[14],T=t[3],M=t[7],S=t[11],x=t[15];return T*(+l*p*g-s*d*g-l*f*v+a*d*v+s*f*y-a*p*y)+M*(+n*p*y-n*d*v+l*c*v-s*c*y+s*d*_-l*p*_)+S*(+n*d*g-n*f*y-l*c*g+a*c*y+l*f*_-a*d*_)+x*(-s*f*_-n*p*g+n*f*v+s*c*g-a*c*v+a*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],y=t[11],T=t[12],M=t[13],S=t[14],x=t[15],L=g*S*d-M*v*d+M*p*y-f*S*y-g*p*x+f*v*x,U=T*v*d-_*S*d-T*p*y+c*S*y+_*p*x-c*v*x,C=_*M*d-T*g*d+T*f*y-c*M*y-_*f*x+c*g*x,O=T*g*p-_*M*p-T*f*v+c*M*v+_*f*S-c*g*S,P=n*L+a*U+s*C+l*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=L*N,t[1]=(M*v*l-g*S*l-M*s*y+a*S*y+g*s*x-a*v*x)*N,t[2]=(f*S*l-M*p*l+M*s*d-a*S*d-f*s*x+a*p*x)*N,t[3]=(g*p*l-f*v*l-g*s*d+a*v*d+f*s*y-a*p*y)*N,t[4]=U*N,t[5]=(_*S*l-T*v*l+T*s*y-n*S*y-_*s*x+n*v*x)*N,t[6]=(T*p*l-c*S*l-T*s*d+n*S*d+c*s*x-n*p*x)*N,t[7]=(c*v*l-_*p*l+_*s*d-n*v*d-c*s*y+n*p*y)*N,t[8]=C*N,t[9]=(T*g*l-_*M*l-T*a*y+n*M*y+_*a*x-n*g*x)*N,t[10]=(c*M*l-T*f*l+T*a*d-n*M*d-c*a*x+n*f*x)*N,t[11]=(_*f*l-c*g*l-_*a*d+n*g*d+c*a*y-n*f*y)*N,t[12]=O*N,t[13]=(_*M*s-T*g*s+T*a*v-n*M*v-_*a*S+n*g*S)*N,t[14]=(T*f*s-c*M*s-T*a*p+n*M*p+c*a*S-n*f*S)*N,t[15]=(c*g*s-_*f*s+_*a*p-n*g*p-c*a*v+n*f*v)*N,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,c){return this.set(1,a,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,g=f+f,v=l*d,y=l*_,T=l*g,M=c*_,S=c*g,x=f*g,L=p*d,U=p*_,C=p*g,O=a.x,P=a.y,N=a.z;return s[0]=(1-(M+x))*O,s[1]=(y+C)*O,s[2]=(T-U)*O,s[3]=0,s[4]=(y-C)*P,s[5]=(1-(v+x))*P,s[6]=(S+L)*P,s[7]=0,s[8]=(T+U)*N,s[9]=(S-L)*N,s[10]=(1-(v+M))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let l=ho.set(s[0],s[1],s[2]).length();const c=ho.set(s[4],s[5],s[6]).length(),f=ho.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],ki.copy(this);const d=1/l,_=1/c,g=1/f;return ki.elements[0]*=d,ki.elements[1]*=d,ki.elements[2]*=d,ki.elements[4]*=_,ki.elements[5]*=_,ki.elements[6]*=_,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,n.setFromRotationMatrix(ki),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,s,l,c,f=la,p=!1){const d=this.elements,_=2*l/(n-t),g=2*l/(a-s),v=(n+t)/(n-t),y=(a+s)/(a-s);let T,M;if(p)T=l/(c-l),M=c*l/(c-l);else if(f===la)T=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===cf)T=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,c,f=la,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-s),v=-(n+t)/(n-t),y=-(a+s)/(a-s);let T,M;if(p)T=1/(c-l),M=c/(c-l);else if(f===la)T=-2/(c-l),M=-(c+l)/(c-l);else if(f===cf)T=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ho=new nt,ki=new cn,d1=new nt(0,0,0),p1=new nt(1,1,1),Sr=new nt,Oc=new nt,mi=new nt,fx=new cn,hx=new hu;class ka{constructor(t=0,n=0,a=0,s=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-he(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(he(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-he(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(he(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return fx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hx.setFromEuler(this),this.setFromQuaternion(hx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let m1=0;const dx=new nt,po=new hu,Ua=new cn,Pc=new nt,Vl=new nt,_1=new nt,g1=new hu,px=new nt(1,0,0),mx=new nt(0,1,0),_x=new nt(0,0,1),gx={type:"added"},v1={type:"removed"},mo={type:"childadded",child:null},Kd={type:"childremoved",child:null};class ei extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=fu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const t=new nt,n=new ka,a=new hu,s=new nt(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new cn},normalMatrix:{value:new fe}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.multiply(po),this}rotateOnWorldAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.premultiply(po),this}rotateX(t){return this.rotateOnAxis(px,t)}rotateY(t){return this.rotateOnAxis(mx,t)}rotateZ(t){return this.rotateOnAxis(_x,t)}translateOnAxis(t,n){return dx.copy(t).applyQuaternion(this.quaternion),this.position.add(dx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(px,t)}translateY(t){return this.translateOnAxis(mx,t)}translateZ(t){return this.translateOnAxis(_x,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Pc.copy(t):Pc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(Vl,Pc,this.up):Ua.lookAt(Pc,Vl,this.up),this.quaternion.setFromRotationMatrix(Ua),s&&(Ua.extractRotation(s.matrixWorld),po.setFromRotationMatrix(Ua),this.quaternion.premultiply(po.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gx),mo.child=t,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(v1),Kd.child=t,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gx),mo.child=t,this.dispatchEvent(mo),mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,_1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,g1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),T=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),T.length>0&&(a.nodes=T)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}ei.DEFAULT_UP=new nt(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new nt,La=new nt,Qd=new nt,Na=new nt,_o=new nt,go=new nt,vx=new nt,Jd=new nt,$d=new nt,tp=new nt,ep=new un,np=new un,ip=new un;class Wi{constructor(t=new nt,n=new nt,a=new nt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Xi.subVectors(t,n),s.cross(Xi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){Xi.subVectors(s,n),La.subVectors(a,n),Qd.subVectors(t,n);const c=Xi.dot(Xi),f=Xi.dot(La),p=Xi.dot(Qd),d=La.dot(La),_=La.dot(Qd),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(d*p-f*_)*v,T=(c*_-f*p)*v;return l.set(1-y-T,T,y)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,n,a,s,l,c,f,p){return this.getBarycoord(t,n,a,s,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Na.x),p.addScaledVector(c,Na.y),p.addScaledVector(f,Na.z),p)}static getInterpolatedAttribute(t,n,a,s,l,c){return ep.setScalar(0),np.setScalar(0),ip.setScalar(0),ep.fromBufferAttribute(t,n),np.fromBufferAttribute(t,a),ip.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(ep,l.x),c.addScaledVector(np,l.y),c.addScaledVector(ip,l.z),c}static isFrontFacing(t,n,a,s){return Xi.subVectors(a,n),La.subVectors(t,n),Xi.cross(La).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Xi.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Wi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return Wi.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return Wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let c,f;_o.subVectors(s,a),go.subVectors(l,a),Jd.subVectors(t,a);const p=_o.dot(Jd),d=go.dot(Jd);if(p<=0&&d<=0)return n.copy(a);$d.subVectors(t,s);const _=_o.dot($d),g=go.dot($d);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(_o,c);tp.subVectors(t,l);const y=_o.dot(tp),T=go.dot(tp);if(T>=0&&y<=T)return n.copy(l);const M=y*d-p*T;if(M<=0&&d>=0&&T<=0)return f=d/(d-T),n.copy(a).addScaledVector(go,f);const S=_*T-y*g;if(S<=0&&g-_>=0&&y-T>=0)return vx.subVectors(l,s),f=(g-_)/(g-_+(y-T)),n.copy(s).addScaledVector(vx,f);const x=1/(S+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(_o,c).addScaledVector(go,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const NS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},zc={h:0,s:0,l:0};function ap(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class ze{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=we.workingColorSpace){if(t=i1(t,1),n=he(n,0,1),a=he(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=ap(c,l,t+1/3),this.g=ap(c,l,t),this.b=ap(c,l,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,n=Oi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Oi){const a=NS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return we.workingToColorSpace(Fn.copy(this),t),Math.round(he(Fn.r*255,0,255))*65536+Math.round(he(Fn.g*255,0,255))*256+Math.round(he(Fn.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(Fn.copy(this),n);const a=Fn.r,s=Fn.g,l=Fn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(s-l)/g+(s<l?6:0);break;case s:p=(l-a)/g+2;break;case l:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Oi){we.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,a=Fn.g,s=Fn.b;return t!==Oi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+n,yr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(yr),t.getHSL(zc);const a=Hd(yr.h,zc.h,n),s=Hd(yr.s,zc.s,n),l=Hd(yr.l,zc.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new ze;ze.NAMES=NS;let x1=0;class pu extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=fu(),this.name="",this.type="Material",this.blending=wo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Ap,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(a.blending=this.blending),this.side!==Ur&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==bp&&(a.blendSrc=this.blendSrc),this.blendDst!==Ap&&(a.blendDst=this.blendDst),this.blendEquation!==fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ax&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class km extends pu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=SS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gn=new nt,Bc=new ae;let S1=0;class Ki{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=rx,this.updateRanges=[],this.gpuType=Ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Bc.fromBufferAttribute(this,n),Bc.applyMatrix3(t),this.setXY(n,Bc.x,Bc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Il(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=$n(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Il(n,this.array)),n}setX(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Il(n,this.array)),n}setY(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Il(n,this.array)),n}setZ(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Il(n,this.array)),n}setW(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),a=$n(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),a=$n(a,this.array),s=$n(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),a=$n(a,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rx&&(t.usage=this.usage),t}}class OS extends Ki{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class PS extends Ki{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class _s extends Ki{constructor(t,n,a){super(new Float32Array(t),n,a)}}let y1=0;const Li=new cn,rp=new ei,vo=new nt,_i=new du,kl=new du,An=new nt;class qa extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=fu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(US(t)?PS:OS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new fe().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,n,a){return Li.makeTranslation(t,n,a),this.applyMatrix4(Li),this}scale(t,n,a){return Li.makeScale(t,n,a),this.applyMatrix4(Li),this}lookAt(t){return rp.lookAt(t),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new _s(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new du);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];_i.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const a=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];kl.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(_i.min,kl.min),_i.expandByPoint(An),An.addVectors(_i.max,kl.max),_i.expandByPoint(An)):(_i.expandByPoint(kl.min),_i.expandByPoint(kl.max))}_i.getCenter(a);let s=0;for(let l=0,c=t.count;l<c;l++)An.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(An));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)An.fromBufferAttribute(f,d),p&&(vo.fromBufferAttribute(t,d),An.add(vo)),s=Math.max(s,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let I=0;I<a.count;I++)f[I]=new nt,p[I]=new nt;const d=new nt,_=new nt,g=new nt,v=new ae,y=new ae,T=new ae,M=new nt,S=new nt;function x(I,A,D){d.fromBufferAttribute(a,I),_.fromBufferAttribute(a,A),g.fromBufferAttribute(a,D),v.fromBufferAttribute(l,I),y.fromBufferAttribute(l,A),T.fromBufferAttribute(l,D),_.sub(d),g.sub(d),y.sub(v),T.sub(v);const V=1/(y.x*T.y-T.x*y.y);isFinite(V)&&(M.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(V),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(V),f[I].add(M),f[A].add(M),f[D].add(M),p[I].add(S),p[A].add(S),p[D].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let I=0,A=L.length;I<A;++I){const D=L[I],V=D.start,K=D.count;for(let et=V,ut=V+K;et<ut;et+=3)x(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const U=new nt,C=new nt,O=new nt,P=new nt;function N(I){O.fromBufferAttribute(s,I),P.copy(O);const A=f[I];U.copy(A),U.sub(O.multiplyScalar(O.dot(A))).normalize(),C.crossVectors(P,A);const V=C.dot(p[I])<0?-1:1;c.setXYZW(I,U.x,U.y,U.z,V)}for(let I=0,A=L.length;I<A;++I){const D=L[I],V=D.start,K=D.count;for(let et=V,ut=V+K;et<ut;et+=3)N(t.getX(et+0)),N(t.getX(et+1)),N(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ki(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new nt,l=new nt,c=new nt,f=new nt,p=new nt,d=new nt,_=new nt,g=new nt;if(t)for(let v=0,y=t.count;v<y;v+=3){const T=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,S),f.add(_),p.add(_),d.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let y=0,T=0;for(let M=0,S=p.length;M<S;M++){f.isInterleavedBufferAttribute?y=p[M]*f.data.stride+f.offset:y=p[M]*_;for(let x=0;x<_;x++)v[T++]=d[y++]}return new Ki(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qa,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];_.push(y.toJSON(t.data))}_.length>0&&(s[p]=_,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],g=l[d];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xx=new cn,is=new Gm,Fc=new Sf,Sx=new nt,Ic=new nt,Hc=new nt,Gc=new nt,sp=new nt,Vc=new nt,yx=new nt,kc=new nt;class Yi extends ei{constructor(t=new qa,n=new km){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Vc.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],g=l[p];_!==0&&(sp.fromBufferAttribute(g,t),c?Vc.addScaledVector(sp,_):Vc.addScaledVector(sp.sub(n),_))}n.add(Vc)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere),Fc.applyMatrix4(l),is.copy(t.ray).recast(t.near),!(Fc.containsPoint(is.origin)===!1&&(is.intersectSphere(Fc,Sx)===null||is.origin.distanceToSquared(Sx)>(t.far-t.near)**2))&&(xx.copy(l).invert(),is.copy(t.ray).applyMatrix4(xx),!(a.boundingBox!==null&&is.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,is)))}_computeIntersections(t,n,a){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=c[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=L,O=U;C<O;C+=3){const P=f.getX(C),N=f.getX(C+1),I=f.getX(C+2);s=Xc(this,x,t,a,d,_,g,P,N,I),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const L=f.getX(S),U=f.getX(S+1),C=f.getX(S+2);s=Xc(this,c,t,a,d,_,g,L,U,C),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=c[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=L,O=U;C<O;C+=3){const P=C,N=C+1,I=C+2;s=Xc(this,x,t,a,d,_,g,P,N,I),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(p.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const L=S,U=S+1,C=S+2;s=Xc(this,c,t,a,d,_,g,L,U,C),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function M1(o,t,n,a,s,l,c,f){let p;if(t.side===ti?p=a.intersectTriangle(c,l,s,!0,f):p=a.intersectTriangle(s,l,c,t.side===Ur,f),p===null)return null;kc.copy(f),kc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(kc);return d<n.near||d>n.far?null:{distance:d,point:kc.clone(),object:o}}function Xc(o,t,n,a,s,l,c,f,p,d){o.getVertexPosition(f,Ic),o.getVertexPosition(p,Hc),o.getVertexPosition(d,Gc);const _=M1(o,t,n,a,Ic,Hc,Gc,yx);if(_){const g=new nt;Wi.getBarycoord(yx,Ic,Hc,Gc,g),s&&(_.uv=Wi.getInterpolatedAttribute(s,f,p,d,g,new ae)),l&&(_.uv1=Wi.getInterpolatedAttribute(l,f,p,d,g,new ae)),c&&(_.normal=Wi.getInterpolatedAttribute(c,f,p,d,g,new nt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new nt,materialIndex:0};Wi.getNormal(Ic,Hc,Gc,v.normal),_.face=v,_.barycoord=g}return _}class mu extends qa{constructor(t=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,a,n,t,c,l,0),T("z","y","x",1,-1,a,n,-t,c,l,1),T("x","z","y",1,1,t,a,n,s,c,2),T("x","z","y",1,-1,t,a,-n,s,c,3),T("x","y","z",1,-1,t,n,a,s,l,4),T("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(p),this.setAttribute("position",new _s(d,3)),this.setAttribute("normal",new _s(_,3)),this.setAttribute("uv",new _s(g,2));function T(M,S,x,L,U,C,O,P,N,I,A){const D=C/N,V=O/I,K=C/2,et=O/2,ut=P/2,ot=N+1,F=I+1;let W=0,q=0;const vt=new nt;for(let yt=0;yt<F;yt++){const B=yt*V-et;for(let $=0;$<ot;$++){const xt=$*D-K;vt[M]=xt*L,vt[S]=B*U,vt[x]=ut,d.push(vt.x,vt.y,vt.z),vt[M]=0,vt[S]=0,vt[x]=P>0?1:-1,_.push(vt.x,vt.y,vt.z),g.push($/N),g.push(1-yt/I),W+=1}}for(let yt=0;yt<I;yt++)for(let B=0;B<N;B++){const $=v+B+ot*yt,xt=v+B+ot*(yt+1),Et=v+(B+1)+ot*(yt+1),wt=v+(B+1)+ot*yt;p.push($,xt,wt),p.push(xt,Et,wt),q+=6}f.addGroup(y,q,A),y+=q,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Xn(o){const t={};for(let n=0;n<o.length;n++){const a=Fo(o[n]);for(const s in a)t[s]=a[s]}return t}function E1(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function zS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const T1={clone:Fo,merge:Xn};var b1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends pu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b1,this.fragmentShader=A1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fo(t.uniforms),this.uniformsGroups=E1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class BS extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new nt,Mx=new ae,Ex=new ae;class Pi extends BS{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=hm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Id*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hm*2*Math.atan(Math.tan(Id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,n){return this.getViewBounds(t,Mx,Ex),n.subVectors(Ex,Mx)}setViewOffset(t,n,a,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Id*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xo=-90,So=1;class R1 extends ei{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pi(xo,So,t,n);s.layers=this.layers,this.add(s);const l=new Pi(xo,So,t,n);l.layers=this.layers,this.add(l);const c=new Pi(xo,So,t,n);c.layers=this.layers,this.add(c);const f=new Pi(xo,So,t,n);f.layers=this.layers,this.add(f);const p=new Pi(xo,So,t,n);p.layers=this.layers,this.add(p);const d=new Pi(xo,So,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===la)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===cf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,l),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,p),t.setRenderTarget(a,4,s),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class FS extends qn{constructor(t=[],n=Po,a,s,l,c,f,p,d,_){super(t,n,a,s,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class C1 extends Ms{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new FS(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mu(5,5,5),l=new Lr({name:"CubemapFromEquirect",uniforms:Fo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Rr});l.uniforms.tEquirect.value=n;const c=new Yi(s,l),f=n.minFilter;return n.minFilter===ps&&(n.minFilter=oa),new R1(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(l)}}class Wc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w1={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,a),x=this._getHandJoint(d,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,T=.005;d.inputState.pinching&&v>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Wc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class IS extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const lp=new nt,D1=new nt,U1=new fe;class Ba{constructor(t=new nt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=lp.subVectors(a,n).cross(D1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(lp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||U1.getNormalMatrix(t),s=this.coplanarPoint(lp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Sf,L1=new ae(.5,.5),qc=new nt;class HS{constructor(t=new Ba,n=new Ba,a=new Ba,s=new Ba,l=new Ba,c=new Ba){this.planes=[t,n,a,s,l,c]}set(t,n,a,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=la,a=!1){const s=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],g=l[5],v=l[6],y=l[7],T=l[8],M=l[9],S=l[10],x=l[11],L=l[12],U=l[13],C=l[14],O=l[15];if(s[0].setComponents(d-c,y-_,x-T,O-L).normalize(),s[1].setComponents(d+c,y+_,x+T,O+L).normalize(),s[2].setComponents(d+f,y+g,x+M,O+U).normalize(),s[3].setComponents(d-f,y-g,x-M,O-U).normalize(),a)s[4].setComponents(p,v,S,C).normalize(),s[5].setComponents(d-p,y-v,x-S,O-C).normalize();else if(s[4].setComponents(d-p,y-v,x-S,O-C).normalize(),n===la)s[5].setComponents(d+p,y+v,x+S,O+C).normalize();else if(n===cf)s[5].setComponents(p,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);const n=L1.distanceTo(t.center);return as.radius=.7071067811865476+n,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(qc.x=s.normal.x>0?t.max.x:t.min.x,qc.y=s.normal.y>0?t.max.y:t.min.y,qc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class GS extends pu{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tx=new cn,dm=new Gm,Yc=new Sf,jc=new nt;class N1 extends ei{constructor(t=new qa,n=new GS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(s),Yc.radius+=l,t.ray.intersectsSphere(Yc)===!1)return;Tx.copy(s).invert(),dm.copy(t.ray).applyMatrix4(Tx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let T=v,M=y;T<M;T++){const S=d.getX(T);jc.fromBufferAttribute(g,S),bx(jc,S,p,s,t,n,this)}}else{const v=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let T=v,M=y;T<M;T++)jc.fromBufferAttribute(g,T),bx(jc,T,p,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function bx(o,t,n,a,s,l,c){const f=dm.distanceSqToPoint(o);if(f<n){const p=new nt;dm.closestPointToPoint(o,p),p.applyMatrix4(a);const d=s.ray.origin.distanceTo(p);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class VS extends qn{constructor(t,n,a=ys,s,l,c,f=Zi,p=Zi,d,_=$l,g=1){if(_!==$l&&_!==tu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class kS extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _u extends qa{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,g=t/f,v=n/p,y=[],T=[],M=[],S=[];for(let x=0;x<_;x++){const L=x*v-c;for(let U=0;U<d;U++){const C=U*g-l;T.push(C,-L,0),M.push(0,0,1),S.push(U/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<f;L++){const U=L+d*x,C=L+d*(x+1),O=L+1+d*(x+1),P=L+1+d*x;y.push(U,C,P),y.push(C,O,P)}this.setIndex(y),this.setAttribute("position",new _s(T,3)),this.setAttribute("normal",new _s(M,3)),this.setAttribute("uv",new _s(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.width,t.height,t.widthSegments,t.heightSegments)}}class O1 extends pu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P1 extends pu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const up={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class z1{constructor(t,n,a){const s=this;let l=!1,c=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(_){f++,l===!1&&s.onStart!==void 0&&s.onStart(_,c,f),l=!0},this.itemEnd=function(_){c++,s.onProgress!==void 0&&s.onProgress(_,c,f),c===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(_){s.onError!==void 0&&s.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,g){return d.push(_,g),this},this.removeHandler=function(_){const g=d.indexOf(_);return g!==-1&&d.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=d.length;g<v;g+=2){const y=d[g],T=d[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const B1=new z1;class Xm{constructor(t){this.manager=t!==void 0?t:B1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(s,l){a.load(t,s,n,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Xm.DEFAULT_MATERIAL_NAME="__DEFAULT";const yo=new WeakMap;class F1 extends Xm{constructor(t){super(t)}load(t,n,a,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,c=up.get(`image:${t}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(t),setTimeout(function(){n&&n(c),l.manager.itemEnd(t)},0);else{let g=yo.get(c);g===void 0&&(g=[],yo.set(c,g)),g.push({onLoad:n,onError:s})}return c}const f=eu("img");function p(){_(),n&&n(this);const g=yo.get(this)||[];for(let v=0;v<g.length;v++){const y=g[v];y.onLoad&&y.onLoad(this)}yo.delete(this),l.manager.itemEnd(t)}function d(g){_(),s&&s(g),up.remove(`image:${t}`);const v=yo.get(this)||[];for(let y=0;y<v.length;y++){const T=v[y];T.onError&&T.onError(g)}yo.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function _(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),up.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class XS extends Xm{constructor(t){super(t)}load(t,n,a,s){const l=new qn,c=new F1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},a,s),l}}class WS extends BS{constructor(t=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class I1 extends Pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ax=new cn;class pm{constructor(t,n,a=0,s=1/0){this.ray=new Gm(t,n),this.near=a,this.far=s,this.camera=null,this.layers=new Vm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Ax.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ax),this}intersectObject(t,n=!0,a=[]){return mm(t,this,a,n),a.sort(Rx),a}intersectObjects(t,n=!0,a=[]){for(let s=0,l=t.length;s<l;s++)mm(t[s],this,a,n);return a.sort(Rx),a}}function Rx(o,t){return o.distance-t.distance}function mm(o,t,n,a){let s=!0;if(o.layers.test(t.layers)&&o.raycast(t,n)===!1&&(s=!1),s===!0&&a===!0){const l=o.children;for(let c=0,f=l.length;c<f;c++)mm(l[c],t,n,!0)}}const Cx=new nt,Zc=new nt,Mo=new nt,Eo=new nt,cp=new nt,H1=new nt,G1=new nt;class wx{constructor(t=new nt,n=new nt){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){Cx.subVectors(t,this.start),Zc.subVectors(this.end,this.start);const a=Zc.dot(Zc);let l=Zc.dot(Cx)/a;return n&&(l=he(l,0,1)),l}closestPointToPoint(t,n,a){const s=this.closestPointToPointParameter(t,n);return this.delta(a).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,n=H1,a=G1){const s=10000000000000001e-32;let l,c;const f=this.start,p=t.start,d=this.end,_=t.end;Mo.subVectors(d,f),Eo.subVectors(_,p),cp.subVectors(f,p);const g=Mo.dot(Mo),v=Eo.dot(Eo),y=Eo.dot(cp);if(g<=s&&v<=s)return n.copy(f),a.copy(p),n.sub(a),n.dot(n);if(g<=s)l=0,c=y/v,c=he(c,0,1);else{const T=Mo.dot(cp);if(v<=s)c=0,l=he(-T/g,0,1);else{const M=Mo.dot(Eo),S=g*v-M*M;S!==0?l=he((M*y-T*v)/S,0,1):l=0,c=(M*l+y)/v,c<0?(c=0,l=he(-T/g,0,1)):c>1&&(c=1,l=he((M-T)/g,0,1))}}return n.copy(f).add(Mo.multiplyScalar(l)),a.copy(p).add(Eo.multiplyScalar(c)),n.sub(a),n.dot(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Dx(o,t,n,a){const s=V1(a);switch(n){case AS:return o*t;case CS:return o*t/s.components*s.byteLength;case Bm:return o*t/s.components*s.byteLength;case wS:return o*t*2/s.components*s.byteLength;case Fm:return o*t*2/s.components*s.byteLength;case RS:return o*t*3/s.components*s.byteLength;case qi:return o*t*4/s.components*s.byteLength;case Im:return o*t*4/s.components*s.byteLength;case tf:case ef:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nf:case af:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ip:case Gp:return Math.max(o,16)*Math.max(t,8)/4;case Fp:case Hp:return Math.max(o,8)*Math.max(t,8)/2;case Vp:case kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case tm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case im:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case rm:case sm:case om:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lm:case um:return Math.ceil(o/4)*Math.ceil(t/4)*8;case cm:case fm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function V1(o){switch(o){case Va:case MS:return{byteLength:1,components:1};case Ql:case ES:case cu:return{byteLength:2,components:1};case Pm:case zm:return{byteLength:2,components:4};case ys:case Om:case Ha:return{byteLength:4,components:1};case TS:case bS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qS(){let o=null,t=!1,n=null,a=null;function s(l,c){n(l,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function k1(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<g.length;y++){const T=g[v],M=g[y];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,T=g.length;y<T;y++){const M=g[y];o.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:l,update:c}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ib=`#ifdef USE_IRIDESCENCE
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
#endif`,ab=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,db=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,mb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ub=`#ifdef USE_GRADIENTMAP
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
}`,Lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,zb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,kb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$b=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LA=`#ifdef USE_SKINNING
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
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FA=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,WA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,KA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,JA=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lR=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hR=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_R=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,SR=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,MR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:X1,alphahash_pars_fragment:W1,alphamap_fragment:q1,alphamap_pars_fragment:Y1,alphatest_fragment:j1,alphatest_pars_fragment:Z1,aomap_fragment:K1,aomap_pars_fragment:Q1,batching_pars_vertex:J1,batching_vertex:$1,begin_vertex:tb,beginnormal_vertex:eb,bsdfs:nb,iridescence_fragment:ib,bumpmap_pars_fragment:ab,clipping_planes_fragment:rb,clipping_planes_pars_fragment:sb,clipping_planes_pars_vertex:ob,clipping_planes_vertex:lb,color_fragment:ub,color_pars_fragment:cb,color_pars_vertex:fb,color_vertex:hb,common:db,cube_uv_reflection_fragment:pb,defaultnormal_vertex:mb,displacementmap_pars_vertex:_b,displacementmap_vertex:gb,emissivemap_fragment:vb,emissivemap_pars_fragment:xb,colorspace_fragment:Sb,colorspace_pars_fragment:yb,envmap_fragment:Mb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Tb,envmap_pars_vertex:bb,envmap_physical_pars_fragment:zb,envmap_vertex:Ab,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:wb,fog_pars_fragment:Db,gradientmap_pars_fragment:Ub,lightmap_pars_fragment:Lb,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Pb,lights_toon_fragment:Bb,lights_toon_pars_fragment:Fb,lights_phong_fragment:Ib,lights_phong_pars_fragment:Hb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Vb,lights_fragment_begin:kb,lights_fragment_maps:Xb,lights_fragment_end:Wb,logdepthbuf_fragment:qb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:jb,logdepthbuf_vertex:Zb,map_fragment:Kb,map_pars_fragment:Qb,map_particle_fragment:Jb,map_particle_pars_fragment:$b,metalnessmap_fragment:tA,metalnessmap_pars_fragment:eA,morphinstance_vertex:nA,morphcolor_vertex:iA,morphnormal_vertex:aA,morphtarget_pars_vertex:rA,morphtarget_vertex:sA,normal_fragment_begin:oA,normal_fragment_maps:lA,normal_pars_fragment:uA,normal_pars_vertex:cA,normal_vertex:fA,normalmap_pars_fragment:hA,clearcoat_normal_fragment_begin:dA,clearcoat_normal_fragment_maps:pA,clearcoat_pars_fragment:mA,iridescence_pars_fragment:_A,opaque_fragment:gA,packing:vA,premultiplied_alpha_fragment:xA,project_vertex:SA,dithering_fragment:yA,dithering_pars_fragment:MA,roughnessmap_fragment:EA,roughnessmap_pars_fragment:TA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:AA,shadowmap_vertex:RA,shadowmask_pars_fragment:CA,skinbase_vertex:wA,skinning_pars_vertex:DA,skinning_vertex:UA,skinnormal_vertex:LA,specularmap_fragment:NA,specularmap_pars_fragment:OA,tonemapping_fragment:PA,tonemapping_pars_fragment:zA,transmission_fragment:BA,transmission_pars_fragment:FA,uv_pars_fragment:IA,uv_pars_vertex:HA,uv_vertex:GA,worldpos_vertex:VA,background_vert:kA,background_frag:XA,backgroundCube_vert:WA,backgroundCube_frag:qA,cube_vert:YA,cube_frag:jA,depth_vert:ZA,depth_frag:KA,distanceRGBA_vert:QA,distanceRGBA_frag:JA,equirect_vert:$A,equirect_frag:tR,linedashed_vert:eR,linedashed_frag:nR,meshbasic_vert:iR,meshbasic_frag:aR,meshlambert_vert:rR,meshlambert_frag:sR,meshmatcap_vert:oR,meshmatcap_frag:lR,meshnormal_vert:uR,meshnormal_frag:cR,meshphong_vert:fR,meshphong_frag:hR,meshphysical_vert:dR,meshphysical_frag:pR,meshtoon_vert:mR,meshtoon_frag:_R,points_vert:gR,points_frag:vR,shadow_vert:xR,shadow_frag:SR,sprite_vert:yR,sprite_frag:MR},Nt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ra={basic:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Xn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Xn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Xn([Nt.points,Nt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Xn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Xn([Nt.common,Nt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Xn([Nt.sprite,Nt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Xn([Nt.common,Nt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Xn([Nt.lights,Nt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ra.physical={uniforms:Xn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Kc={r:0,b:0,g:0},rs=new ka,ER=new cn;function TR(o,t,n,a,s,l,c){const f=new ze(0);let p=l===!0?0:1,d,_,g=null,v=0,y=null;function T(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function M(U){let C=!1;const O=T(U);O===null?x(f,p):O&&O.isColor&&(x(O,1),C=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,C){const O=T(C);O&&(O.isCubeTexture||O.mapping===xf)?(_===void 0&&(_=new Yi(new mu(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:Fo(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),rs.copy(C.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ER.makeRotationFromEuler(rs)),_.material.toneMapped=we.getTransfer(O.colorSpace)!==He,(g!==O||v!==O.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Yi(new _u(2,2),new Lr({name:"BackgroundMaterial",uniforms:Fo(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=we.getTransfer(O.colorSpace)!==He,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function x(U,C){U.getRGB(Kc,zS(o)),a.buffers.color.setClear(Kc.r,Kc.g,Kc.b,C,c)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,C=1){f.set(U),p=C,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(f,p)},render:M,addToRenderList:S,dispose:L}}function bR(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,c=!1;function f(D,V,K,et,ut){let ot=!1;const F=g(et,K,V);l!==F&&(l=F,d(l.object)),ot=y(D,et,K,ut),ot&&T(D,et,K,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(ot||c)&&(c=!1,C(D,V,K,et),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function p(){return o.createVertexArray()}function d(D){return o.bindVertexArray(D)}function _(D){return o.deleteVertexArray(D)}function g(D,V,K){const et=K.wireframe===!0;let ut=a[D.id];ut===void 0&&(ut={},a[D.id]=ut);let ot=ut[V.id];ot===void 0&&(ot={},ut[V.id]=ot);let F=ot[et];return F===void 0&&(F=v(p()),ot[et]=F),F}function v(D){const V=[],K=[],et=[];for(let ut=0;ut<n;ut++)V[ut]=0,K[ut]=0,et[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:et,object:D,attributes:{},index:null}}function y(D,V,K,et){const ut=l.attributes,ot=V.attributes;let F=0;const W=K.getAttributes();for(const q in W)if(W[q].location>=0){const yt=ut[q];let B=ot[q];if(B===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),yt===void 0||yt.attribute!==B||B&&yt.data!==B.data)return!0;F++}return l.attributesNum!==F||l.index!==et}function T(D,V,K,et){const ut={},ot=V.attributes;let F=0;const W=K.getAttributes();for(const q in W)if(W[q].location>=0){let yt=ot[q];yt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor));const B={};B.attribute=yt,yt&&yt.data&&(B.data=yt.data),ut[q]=B,F++}l.attributes=ut,l.attributesNum=F,l.index=et}function M(){const D=l.newAttributes;for(let V=0,K=D.length;V<K;V++)D[V]=0}function S(D){x(D,0)}function x(D,V){const K=l.newAttributes,et=l.enabledAttributes,ut=l.attributeDivisors;K[D]=1,et[D]===0&&(o.enableVertexAttribArray(D),et[D]=1),ut[D]!==V&&(o.vertexAttribDivisor(D,V),ut[D]=V)}function L(){const D=l.newAttributes,V=l.enabledAttributes;for(let K=0,et=V.length;K<et;K++)V[K]!==D[K]&&(o.disableVertexAttribArray(K),V[K]=0)}function U(D,V,K,et,ut,ot,F){F===!0?o.vertexAttribIPointer(D,V,K,ut,ot):o.vertexAttribPointer(D,V,K,et,ut,ot)}function C(D,V,K,et){M();const ut=et.attributes,ot=K.getAttributes(),F=V.defaultAttributeValues;for(const W in ot){const q=ot[W];if(q.location>=0){let vt=ut[W];if(vt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),vt!==void 0){const yt=vt.normalized,B=vt.itemSize,$=t.get(vt);if($===void 0)continue;const xt=$.buffer,Et=$.type,wt=$.bytesPerElement,at=Et===o.INT||Et===o.UNSIGNED_INT||vt.gpuType===Om;if(vt.isInterleavedBufferAttribute){const ct=vt.data,Dt=ct.stride,Bt=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<q.locationSize;Xt++)x(q.location+Xt,ct.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<q.locationSize;Xt++)S(q.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Xt=0;Xt<q.locationSize;Xt++)U(q.location+Xt,B/q.locationSize,Et,yt,Dt*wt,(Bt+B/q.locationSize*Xt)*wt,at)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<q.locationSize;ct++)x(q.location+ct,vt.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<q.locationSize;ct++)S(q.location+ct);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ct=0;ct<q.locationSize;ct++)U(q.location+ct,B/q.locationSize,Et,yt,B*wt,B/q.locationSize*ct*wt,at)}}else if(F!==void 0){const yt=F[W];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(q.location,yt);break;case 3:o.vertexAttrib3fv(q.location,yt);break;case 4:o.vertexAttrib4fv(q.location,yt);break;default:o.vertexAttrib1fv(q.location,yt)}}}}L()}function O(){I();for(const D in a){const V=a[D];for(const K in V){const et=V[K];for(const ut in et)_(et[ut].object),delete et[ut];delete V[K]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const V=a[D.id];for(const K in V){const et=V[K];for(const ut in et)_(et[ut].object),delete et[ut];delete V[K]}delete a[D.id]}function N(D){for(const V in a){const K=a[V];if(K[D.id]===void 0)continue;const et=K[D.id];for(const ut in et)_(et[ut].object),delete et[ut];delete K[D.id]}}function I(){A(),c=!0,l!==s&&(l=s,d(l.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:I,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function AR(o,t,n){let a;function s(d){a=d}function l(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];n.update(y,a,1)}function p(d,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<d.length;T++)c(d[T],_[T],v[T]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let T=0;for(let M=0;M<g;M++)T+=_[M]*v[M];n.update(T,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function RR(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(N){return!(N!==qi&&a.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const I=N===cu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Va&&a.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ha&&!I)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:O,maxSamples:P}}function CR(o){const t=this;let n=null,a=0,s=!1,l=!1;const c=new Ba,f=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||T===null||T.length===0||l&&!S)l?_(null):d();else{const L=l?0:a,U=L*4;let C=x.clippingState||null;p.value=C,C=_(T,v,U,y);for(let O=0;O!==U;++O)C[O]=n[O];x.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,T){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=p.value,T!==!0||S===null){const x=y+M*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let U=0,C=y;U!==M;++U,C+=4)c.copy(g[U]).applyMatrix4(L,f),c.normal.toArray(S,C),S[C+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function wR(o){let t=new WeakMap;function n(c,f){return f===Op?c.mapping=Po:f===Pp&&(c.mapping=zo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Op||f===Pp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new C1(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Ao=4,Ux=[.125,.215,.35,.446,.526,.582],hs=20,fp=new WS,Lx=new ze;let hp=null,dp=0,pp=0,mp=!1;const us=(1+Math.sqrt(5))/2,To=1/us,Nx=[new nt(-us,To,0),new nt(us,To,0),new nt(-To,0,us),new nt(To,0,us),new nt(0,us,-To),new nt(0,us,To),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],DR=new nt;class Ox{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=DR}=l;hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hp,dp,pp),this._renderer.xr.enabled=mp,t.scissorTest=!1,Qc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Po||t.mapping===zo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:oa,minFilter:oa,generateMipmaps:!1,type:cu,format:qi,colorSpace:Bo,depthBuffer:!1},s=Px(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Px(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UR(l)),this._blurMaterial=LR(l,t,n)}return s}_compileMaterial(t){const n=new Yi(this._lodPlanes[0],t);this._renderer.compile(n,fp)}_sceneToCubeUV(t,n,a,s,l){const p=new Pi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Lx),g.toneMapping=Cr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null));const M=new km({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),S=new Yi(new mu,M);let x=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,x=!0):(M.color.copy(Lx),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(p.up.set(0,d[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[U],l.y,l.z)):C===1?(p.up.set(0,0,d[U]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[U],l.z)):(p.up.set(0,d[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[U]));const O=this._cubeSize;Qc(s,C*O,U>2?O:0,O,O),g.setRenderTarget(s),x&&g.render(S,p),g.render(t,p)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Po||t.mapping===zo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Yi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Qc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,fp)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Nx[(s-l-1)%Nx.length];this._blur(t,l-1,l,c,f)}n.autoClear=a}_blur(t,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",l),this._halfBlur(c,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Yi(this._lodPlanes[s],d),v=d.uniforms,y=this._sizeLods[a]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*hs-1),M=l/T,S=isFinite(l)?1+Math.floor(_*M):hs;S>hs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hs}`);const x=[];let L=0;for(let N=0;N<hs;++N){const I=N/M,A=Math.exp(-I*I/2);x.push(A),N===0?L+=A:N<S&&(L+=2*A)}for(let N=0;N<x.length;N++)x[N]=x[N]/L;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=T,v.mipInt.value=U-a;const C=this._sizeLods[s],O=3*C*(s>U-Ao?s-U+Ao:0),P=4*(this._cubeSize-C);Qc(n,O,P,3*C,2*C),p.setRenderTarget(n),p.render(g,fp)}}function UR(o){const t=[],n=[],a=[];let s=o;const l=o-Ao+1+Ux.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);n.push(f);let p=1/f;c>o-Ao?p=Ux[c-o+Ao-1]:c===0&&(p=0),a.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,M=3,S=2,x=1,L=new Float32Array(M*T*y),U=new Float32Array(S*T*y),C=new Float32Array(x*T*y);for(let P=0;P<y;P++){const N=P%3*2/3-1,I=P>2?0:-1,A=[N,I,0,N+2/3,I,0,N+2/3,I+1,0,N,I,0,N+2/3,I+1,0,N,I+1,0];L.set(A,M*T*P),U.set(v,S*T*P);const D=[P,P,P,P,P,P];C.set(D,x*T*P)}const O=new qa;O.setAttribute("position",new Ki(L,M)),O.setAttribute("uv",new Ki(U,S)),O.setAttribute("faceIndex",new Ki(C,x)),t.push(O),s>Ao&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Px(o,t,n){const a=new Ms(o,t,n);return a.texture.mapping=xf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Qc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function LR(o,t,n){const a=new Float32Array(hs),s=new nt(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wm(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function zx(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wm(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Bx(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Wm(){return`

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
	`}function NR(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Op||p===Pp,_=p===Po||p===zo;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Ox(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||_&&y&&s(y)?(n===null&&(n=new Ox(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function OR(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&nu("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function PR(o,t,n,a){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,T=g.attributes.position;let M=0;if(y!==null){const L=y.array;M=y.version;for(let U=0,C=L.length;U<C;U+=3){const O=L[U+0],P=L[U+1],N=L[U+2];v.push(O,P,P,N,N,O)}}else if(T!==void 0){const L=T.array;M=T.version;for(let U=0,C=L.length/3-1;U<C;U+=3){const O=U+0,P=U+1,N=U+2;v.push(O,P,P,N,N,O)}}else return;const S=new(US(v)?PS:OS)(v,1);S.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,S)}function _(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function zR(o,t,n){let a;function s(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,y){o.drawElements(a,y,l,v*c),n.update(y,a,1)}function d(v,y,T){T!==0&&(o.drawElementsInstanced(a,y,l,v*c,T),n.update(y,a,T))}function _(v,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,l,v,0,T);let S=0;for(let x=0;x<T;x++)S+=y[x];n.update(S,a,1)}function g(v,y,T,M){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,l,v,0,M,0,T);let x=0;for(let L=0;L<T;L++)x+=y[L]*M[L];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function BR(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function FR(o,t,n){const a=new WeakMap,s=new un;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let D=function(){I.dispose(),a.delete(f),f.removeEventListener("dispose",D)};var y=D;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let O=f.attributes.position.count*C,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const N=new Float32Array(O*P*4*g),I=new LS(N,O,P,g);I.type=Ha,I.needsUpdate=!0;const A=C*4;for(let V=0;V<g;V++){const K=x[V],et=L[V],ut=U[V],ot=O*P*4*V;for(let F=0;F<K.count;F++){const W=F*A;T===!0&&(s.fromBufferAttribute(K,F),N[ot+W+0]=s.x,N[ot+W+1]=s.y,N[ot+W+2]=s.z,N[ot+W+3]=0),M===!0&&(s.fromBufferAttribute(et,F),N[ot+W+4]=s.x,N[ot+W+5]=s.y,N[ot+W+6]=s.z,N[ot+W+7]=0),S===!0&&(s.fromBufferAttribute(ut,F),N[ot+W+8]=s.x,N[ot+W+9]=s.y,N[ot+W+10]=s.z,N[ot+W+11]=ut.itemSize===4?s.w:1)}}v={count:g,texture:I,size:new ae(O,P)},a.set(f,v),f.addEventListener("dispose",D)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let T=0;for(let S=0;S<d.length;S++)T+=d[S];const M=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function IR(o,t,n,a){let s=new WeakMap;function l(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const YS=new qn,Fx=new VS(1,1),jS=new LS,ZS=new f1,KS=new FS,Ix=[],Hx=[],Gx=new Float32Array(16),Vx=new Float32Array(9),kx=new Float32Array(4);function qo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=Ix[s];if(l===void 0&&(l=new Float32Array(s),Ix[s]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Mn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function En(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function yf(o,t){let n=Hx[t];n===void 0&&(n=new Int32Array(t),Hx[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function HR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function GR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2fv(this.addr,t),En(n,t)}}function VR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;o.uniform3fv(this.addr,t),En(n,t)}}function kR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4fv(this.addr,t),En(n,t)}}function XR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;kx.set(a),o.uniformMatrix2fv(this.addr,!1,kx),En(n,a)}}function WR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;Vx.set(a),o.uniformMatrix3fv(this.addr,!1,Vx),En(n,a)}}function qR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;Gx.set(a),o.uniformMatrix4fv(this.addr,!1,Gx),En(n,a)}}function YR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function jR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2iv(this.addr,t),En(n,t)}}function ZR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;o.uniform3iv(this.addr,t),En(n,t)}}function KR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4iv(this.addr,t),En(n,t)}}function QR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function JR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2uiv(this.addr,t),En(n,t)}}function $R(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;o.uniform3uiv(this.addr,t),En(n,t)}}function tC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4uiv(this.addr,t),En(n,t)}}function eC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Fx.compareFunction=DS,l=Fx):l=YS,n.setTexture2D(t||l,s)}function nC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||ZS,s)}function iC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||KS,s)}function aC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||jS,s)}function rC(o){switch(o){case 5126:return HR;case 35664:return GR;case 35665:return VR;case 35666:return kR;case 35674:return XR;case 35675:return WR;case 35676:return qR;case 5124:case 35670:return YR;case 35667:case 35671:return jR;case 35668:case 35672:return ZR;case 35669:case 35673:return KR;case 5125:return QR;case 36294:return JR;case 36295:return $R;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return aC}}function sC(o,t){o.uniform1fv(this.addr,t)}function oC(o,t){const n=qo(t,this.size,2);o.uniform2fv(this.addr,n)}function lC(o,t){const n=qo(t,this.size,3);o.uniform3fv(this.addr,n)}function uC(o,t){const n=qo(t,this.size,4);o.uniform4fv(this.addr,n)}function cC(o,t){const n=qo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function fC(o,t){const n=qo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function hC(o,t){const n=qo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function dC(o,t){o.uniform1iv(this.addr,t)}function pC(o,t){o.uniform2iv(this.addr,t)}function mC(o,t){o.uniform3iv(this.addr,t)}function _C(o,t){o.uniform4iv(this.addr,t)}function gC(o,t){o.uniform1uiv(this.addr,t)}function vC(o,t){o.uniform2uiv(this.addr,t)}function xC(o,t){o.uniform3uiv(this.addr,t)}function SC(o,t){o.uniform4uiv(this.addr,t)}function yC(o,t,n){const a=this.cache,s=t.length,l=yf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||YS,l[c])}function MC(o,t,n){const a=this.cache,s=t.length,l=yf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||ZS,l[c])}function EC(o,t,n){const a=this.cache,s=t.length,l=yf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||KS,l[c])}function TC(o,t,n){const a=this.cache,s=t.length,l=yf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||jS,l[c])}function bC(o){switch(o){case 5126:return sC;case 35664:return oC;case 35665:return lC;case 35666:return uC;case 35674:return cC;case 35675:return fC;case 35676:return hC;case 5124:case 35670:return dC;case 35667:case 35671:return pC;case 35668:case 35672:return mC;case 35669:case 35673:return _C;case 5125:return gC;case 36294:return vC;case 36295:return xC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return MC;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return TC}}class AC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=rC(n.type)}}class RC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bC(n.type)}}class CC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const _p=/(\w+)(\])?(\[|\.)?/g;function Xx(o,t){o.seq.push(t),o.map[t.id]=t}function wC(o,t,n){const a=o.name,s=a.length;for(_p.lastIndex=0;;){const l=_p.exec(a),c=_p.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){Xx(n,d===void 0?new AC(f,o,t):new RC(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new CC(f),Xx(n,g)),n=g}}}class rf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const l=t.getActiveUniform(n,s),c=t.getUniformLocation(n,l.name);wC(l,c,this)}}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function Wx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const DC=37297;let UC=0;function LC(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const qx=new fe;function NC(o){we._getMatrix(qx,we.workingColorSpace,o);const t=`mat3( ${qx.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(o)){case uf:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Yx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+LC(o.getShaderSource(t),f)}else return l}function OC(o,t){const n=NC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function PC(o,t){let n;switch(t){case FT:n="Linear";break;case IT:n="Reinhard";break;case HT:n="Cineon";break;case GT:n="ACESFilmic";break;case kT:n="AgX";break;case XT:n="Neutral";break;case VT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jc=new nt;function zC(){we.getLuminanceCoefficients(Jc);const o=Jc.x.toFixed(4),t=Jc.y.toFixed(4),n=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function FC(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function IC(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function Wl(o){return o!==""}function jx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HC=/^[ \t]*#include +<([\w\d./]+)>/gm;function _m(o){return o.replace(HC,VC)}const GC=new Map;function VC(o,t){let n=de[t];if(n===void 0){const a=GC.get(t);if(a!==void 0)n=de[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return _m(n)}const kC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kx(o){return o.replace(kC,XC)}function XC(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function Qx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xS?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===gT?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oa&&(t="SHADOWMAP_TYPE_VSM"),t}function qC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Po:case zo:t="ENVMAP_TYPE_CUBE";break;case xf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case zo:t="ENVMAP_MODE_REFRACTION";break}return t}function jC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case SS:t="ENVMAP_BLENDING_MULTIPLY";break;case zT:t="ENVMAP_BLENDING_MIX";break;case BT:t="ENVMAP_BLENDING_ADD";break}return t}function ZC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function KC(o,t,n,a){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=WC(n),d=qC(n),_=YC(n),g=jC(n),v=ZC(n),y=BC(n),T=FC(l),M=s.createProgram();let S,x,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Wl).join(`
`),x.length>0&&(x+=`
`)):(S=[Qx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),x=[Qx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cr?"#define TONE_MAPPING":"",n.toneMapping!==Cr?de.tonemapping_pars_fragment:"",n.toneMapping!==Cr?PC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,OC("linearToOutputTexel",n.outputColorSpace),zC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wl).join(`
`)),c=_m(c),c=jx(c,n),c=Zx(c,n),f=_m(f),f=jx(f,n),f=Zx(f,n),c=Kx(c),f=Kx(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===sx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=L+S+c,C=L+x+f,O=Wx(s,s.VERTEX_SHADER,U),P=Wx(s,s.FRAGMENT_SHADER,C);s.attachShader(M,O),s.attachShader(M,P),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function N(V){if(o.debug.checkShaderErrors){const K=s.getProgramInfoLog(M)||"",et=s.getShaderInfoLog(O)||"",ut=s.getShaderInfoLog(P)||"",ot=K.trim(),F=et.trim(),W=ut.trim();let q=!0,vt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,O,P);else{const yt=Yx(s,O,"vertex"),B=Yx(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ot+`
`+yt+`
`+B)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(F===""||W==="")&&(vt=!1);vt&&(V.diagnostics={runnable:q,programLog:ot,vertexShader:{log:F,prefix:S},fragmentShader:{log:W,prefix:x}})}s.deleteShader(O),s.deleteShader(P),I=new rf(s,M),A=IC(s,M)}let I;this.getUniforms=function(){return I===void 0&&N(this),I};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(M,DC)),D},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UC++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let QC=0;class JC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new $C(t),n.set(t,a)),a}}class $C{constructor(t){this.id=QC++,this.code=t,this.usedTimes=0}}function t2(o,t,n,a,s,l,c){const f=new Vm,p=new JC,d=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return d.add(A),A===0?"uv":`uv${A}`}function S(A,D,V,K,et){const ut=K.fog,ot=et.geometry,F=A.isMeshStandardMaterial?K.environment:null,W=(A.isMeshStandardMaterial?n:t).get(A.envMap||F),q=W&&W.mapping===xf?W.image.height:null,vt=T[A.type];A.precision!==null&&(y=s.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const yt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,B=yt!==void 0?yt.length:0;let $=0;ot.morphAttributes.position!==void 0&&($=1),ot.morphAttributes.normal!==void 0&&($=2),ot.morphAttributes.color!==void 0&&($=3);let xt,Et,wt,at;if(vt){const Te=ra[vt];xt=Te.vertexShader,Et=Te.fragmentShader}else xt=A.vertexShader,Et=A.fragmentShader,p.update(A),wt=p.getVertexShaderID(A),at=p.getFragmentShaderID(A);const ct=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Bt=et.isInstancedMesh===!0,Xt=et.isBatchedMesh===!0,pe=!!A.map,fn=!!A.matcap,G=!!W,Ae=!!A.aoMap,ie=!!A.lightMap,te=!!A.bumpMap,Wt=!!A.normalMap,Ge=!!A.displacementMap,kt=!!A.emissiveMap,se=!!A.metalnessMap,tn=!!A.roughnessMap,Qe=A.anisotropy>0,z=A.clearcoat>0,b=A.dispersion>0,tt=A.iridescence>0,dt=A.sheen>0,St=A.transmission>0,ft=Qe&&!!A.anisotropyMap,Zt=z&&!!A.clearcoatMap,At=z&&!!A.clearcoatNormalMap,Yt=z&&!!A.clearcoatRoughnessMap,jt=tt&&!!A.iridescenceMap,Tt=tt&&!!A.iridescenceThicknessMap,Rt=dt&&!!A.sheenColorMap,Kt=dt&&!!A.sheenRoughnessMap,Pt=!!A.specularMap,Ut=!!A.specularColorMap,le=!!A.specularIntensityMap,X=St&&!!A.transmissionMap,bt=St&&!!A.thicknessMap,Ct=!!A.gradientMap,zt=!!A.alphaMap,Mt=A.alphaTest>0,_t=!!A.alphaHash,Ft=!!A.extensions;let re=Cr;A.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(re=o.toneMapping);const Ne={shaderID:vt,shaderType:A.type,shaderName:A.name,vertexShader:xt,fragmentShader:Et,defines:A.defines,customVertexShaderID:wt,customFragmentShaderID:at,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&et._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&et.instanceColor!==null,instancingMorph:Bt&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Bo,alphaToCoverage:!!A.alphaToCoverage,map:pe,matcap:fn,envMap:G,envMapMode:G&&W.mapping,envMapCubeUVHeight:q,aoMap:Ae,lightMap:ie,bumpMap:te,normalMap:Wt,displacementMap:v&&Ge,emissiveMap:kt,normalMapObjectSpace:Wt&&A.normalMapType===ZT,normalMapTangentSpace:Wt&&A.normalMapType===jT,metalnessMap:se,roughnessMap:tn,anisotropy:Qe,anisotropyMap:ft,clearcoat:z,clearcoatMap:Zt,clearcoatNormalMap:At,clearcoatRoughnessMap:Yt,dispersion:b,iridescence:tt,iridescenceMap:jt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Rt,sheenRoughnessMap:Kt,specularMap:Pt,specularColorMap:Ut,specularIntensityMap:le,transmission:St,transmissionMap:X,thicknessMap:bt,gradientMap:Ct,opaque:A.transparent===!1&&A.blending===wo&&A.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:_t,combine:A.combine,mapUv:pe&&M(A.map.channel),aoMapUv:Ae&&M(A.aoMap.channel),lightMapUv:ie&&M(A.lightMap.channel),bumpMapUv:te&&M(A.bumpMap.channel),normalMapUv:Wt&&M(A.normalMap.channel),displacementMapUv:Ge&&M(A.displacementMap.channel),emissiveMapUv:kt&&M(A.emissiveMap.channel),metalnessMapUv:se&&M(A.metalnessMap.channel),roughnessMapUv:tn&&M(A.roughnessMap.channel),anisotropyMapUv:ft&&M(A.anisotropyMap.channel),clearcoatMapUv:Zt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:At&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&M(A.sheenRoughnessMap.channel),specularMapUv:Pt&&M(A.specularMap.channel),specularColorMapUv:Ut&&M(A.specularColorMap.channel),specularIntensityMapUv:le&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:bt&&M(A.thicknessMap.channel),alphaMapUv:zt&&M(A.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Wt||Qe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ot.attributes.uv&&(pe||zt),fog:!!ut,useFog:A.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:et.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:$,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:pe&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:kt&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ia,flipSided:A.side===ti,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ft&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&A.extensions.multiDraw===!0||Xt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ne.vertexUv1s=d.has(1),Ne.vertexUv2s=d.has(2),Ne.vertexUv3s=d.has(3),d.clear(),Ne}function x(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)D.push(V),D.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(L(D,A),U(D,A),D.push(o.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function L(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function U(A,D){f.disableAll(),D.supportsVertexTextures&&f.enable(0),D.instancing&&f.enable(1),D.instancingColor&&f.enable(2),D.instancingMorph&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),D.dispersion&&f.enable(20),D.batchingColor&&f.enable(21),D.gradientMap&&f.enable(22),A.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),A.push(f.mask)}function C(A){const D=T[A.type];let V;if(D){const K=ra[D];V=T1.clone(K.uniforms)}else V=A.uniforms;return V}function O(A,D){let V;for(let K=0,et=_.length;K<et;K++){const ut=_[K];if(ut.cacheKey===D){V=ut,++V.usedTimes;break}}return V===void 0&&(V=new KC(o,D,A,l),_.push(V)),V}function P(A){if(--A.usedTimes===0){const D=_.indexOf(A);_[D]=_[_.length-1],_.pop(),A.destroy()}}function N(A){p.remove(A)}function I(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:O,releaseProgram:P,releaseShaderCache:N,programs:_,dispose:I}}function e2(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function n2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Jx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function $x(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,y,T,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:T,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function f(g,v,y,T,M,S){const x=c(g,v,y,T,M,S);y.transmission>0?a.push(x):y.transparent===!0?s.push(x):n.push(x)}function p(g,v,y,T,M,S){const x=c(g,v,y,T,M,S);y.transmission>0?a.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||n2),a.length>1&&a.sort(v||Jx),s.length>1&&s.sort(v||Jx)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:p,finish:_,sort:d}}function i2(){let o=new WeakMap;function t(a,s){const l=o.get(a);let c;return l===void 0?(c=new $x,o.set(a,[c])):s>=l.length?(c=new $x,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function a2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new nt,color:new ze};break;case"SpotLight":n={position:new nt,direction:new nt,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new nt,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new nt,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[t.id]=n,n}}}function r2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let s2=0;function o2(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function l2(o){const t=new a2,n=r2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new nt);const s=new nt,l=new cn,c=new cn;function f(d){let _=0,g=0,v=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let y=0,T=0,M=0,S=0,x=0,L=0,U=0,C=0,O=0,P=0,N=0;d.sort(o2);for(let A=0,D=d.length;A<D;A++){const V=d[A],K=V.color,et=V.intensity,ut=V.distance,ot=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=K.r*et,g+=K.g*et,v+=K.b*et;else if(V.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(V.sh.coefficients[F],et);N++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,a.directionalShadow[y]=q,a.directionalShadowMap[y]=ot,a.directionalShadowMatrix[y]=V.shadow.matrix,L++}a.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(K).multiplyScalar(et),F.distance=ut,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,a.spot[M]=F;const W=V.shadow;if(V.map&&(a.spotLightMap[O]=V.map,O++,W.updateMatrices(V),V.castShadow&&P++),a.spotLightMatrix[M]=W.matrix,V.castShadow){const q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,a.spotShadow[M]=q,a.spotShadowMap[M]=ot,C++}M++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(K).multiplyScalar(et),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=F,S++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const W=V.shadow,q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,a.pointShadow[T]=q,a.pointShadowMap[T]=ot,a.pointShadowMatrix[T]=V.shadow.matrix,U++}a.point[T]=F,T++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(et),F.groundColor.copy(V.groundColor).multiplyScalar(et),a.hemi[x]=F,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const I=a.hash;(I.directionalLength!==y||I.pointLength!==T||I.spotLength!==M||I.rectAreaLength!==S||I.hemiLength!==x||I.numDirectionalShadows!==L||I.numPointShadows!==U||I.numSpotShadows!==C||I.numSpotMaps!==O||I.numLightProbes!==N)&&(a.directional.length=y,a.spot.length=M,a.rectArea.length=S,a.point.length=T,a.hemi.length=x,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+O-P,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=N,I.directionalLength=y,I.pointLength=T,I.spotLength=M,I.rectAreaLength=S,I.hemiLength=x,I.numDirectionalShadows=L,I.numPointShadows=U,I.numSpotShadows=C,I.numSpotMaps=O,I.numLightProbes=N,a.version=s2++)}function p(d,_){let g=0,v=0,y=0,T=0,M=0;const S=_.matrixWorldInverse;for(let x=0,L=d.length;x<L;x++){const U=d[x];if(U.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(U.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const C=a.rectArea[T];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),c.identity(),l.copy(U.matrixWorld),l.premultiply(S),c.extractRotation(l),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const C=a.hemi[M];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(S),M++}}}return{setup:f,setupView:p,state:a}}function tS(o){const t=new l2(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function u2(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new tS(o),t.set(s,[f])):l>=c.length?(f=new tS(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f2=`uniform sampler2D shadow_pass;
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
}`;function h2(o,t,n){let a=new HS;const s=new ae,l=new ae,c=new un,f=new O1({depthPacking:YT}),p=new P1,d={},_=n.maxTextureSize,g={[Ur]:ti,[ti]:Ur,[Ia]:Ia},v=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:c2,fragmentShader:f2}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new qa;T.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Yi(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xS;let x=this.type;this.render=function(P,N,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const A=o.getRenderTarget(),D=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Rr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const et=x!==Oa&&this.type===Oa,ut=x===Oa&&this.type!==Oa;for(let ot=0,F=P.length;ot<F;ot++){const W=P[ot],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const vt=q.getFrameExtents();if(s.multiply(vt),l.copy(q.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(l.x=Math.floor(_/vt.x),s.x=l.x*vt.x,q.mapSize.x=l.x),s.y>_&&(l.y=Math.floor(_/vt.y),s.y=l.y*vt.y,q.mapSize.y=l.y)),q.map===null||et===!0||ut===!0){const B=this.type!==Oa?{minFilter:Zi,magFilter:Zi}:{};q.map!==null&&q.map.dispose(),q.map=new Ms(s.x,s.y,B),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const yt=q.getViewportCount();for(let B=0;B<yt;B++){const $=q.getViewport(B);c.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),K.viewport(c),q.updateMatrices(W,B),a=q.getFrustum(),C(N,I,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===Oa&&L(q,I),q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(A,D,V)};function L(P,N){const I=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ms(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(N,null,I,v,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(N,null,I,y,M,null)}function U(P,N,I,A){let D=null;const V=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)D=V;else if(D=I.isPointLight===!0?p:f,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const K=D.uuid,et=N.uuid;let ut=d[K];ut===void 0&&(ut={},d[K]=ut);let ot=ut[et];ot===void 0&&(ot=D.clone(),ut[et]=ot,N.addEventListener("dispose",O)),D=ot}if(D.visible=N.visible,D.wireframe=N.wireframe,A===Oa?D.side=N.shadowSide!==null?N.shadowSide:N.side:D.side=N.shadowSide!==null?N.shadowSide:g[N.side],D.alphaMap=N.alphaMap,D.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,D.map=N.map,D.clipShadows=N.clipShadows,D.clippingPlanes=N.clippingPlanes,D.clipIntersection=N.clipIntersection,D.displacementMap=N.displacementMap,D.displacementScale=N.displacementScale,D.displacementBias=N.displacementBias,D.wireframeLinewidth=N.wireframeLinewidth,D.linewidth=N.linewidth,I.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const K=o.properties.get(D);K.light=I}return D}function C(P,N,I,A,D){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&D===Oa)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const et=t.update(P),ut=P.material;if(Array.isArray(ut)){const ot=et.groups;for(let F=0,W=ot.length;F<W;F++){const q=ot[F],vt=ut[q.materialIndex];if(vt&&vt.visible){const yt=U(P,vt,A,D);P.onBeforeShadow(o,P,N,I,et,yt,q),o.renderBufferDirect(I,null,et,yt,P,q),P.onAfterShadow(o,P,N,I,et,yt,q)}}}else if(ut.visible){const ot=U(P,ut,A,D);P.onBeforeShadow(o,P,N,I,et,ot,null),o.renderBufferDirect(I,null,et,ot,P,null),P.onAfterShadow(o,P,N,I,et,ot,null)}}const K=P.children;for(let et=0,ut=K.length;et<ut;et++)C(K[et],N,I,A,D)}function O(P){P.target.removeEventListener("dispose",O);for(const I in d){const A=d[I],D=P.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const d2={[Rp]:Cp,[wp]:Lp,[Dp]:Np,[Oo]:Up,[Cp]:Rp,[Lp]:wp,[Np]:Dp,[Up]:Oo};function p2(o,t){function n(){let X=!1;const bt=new un;let Ct=null;const zt=new un(0,0,0,0);return{setMask:function(Mt){Ct!==Mt&&!X&&(o.colorMask(Mt,Mt,Mt,Mt),Ct=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,_t,Ft,re,Ne){Ne===!0&&(Mt*=re,_t*=re,Ft*=re),bt.set(Mt,_t,Ft,re),zt.equals(bt)===!1&&(o.clearColor(Mt,_t,Ft,re),zt.copy(bt))},reset:function(){X=!1,Ct=null,zt.set(-1,0,0,0)}}}function a(){let X=!1,bt=!1,Ct=null,zt=null,Mt=null;return{setReversed:function(_t){if(bt!==_t){const Ft=t.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return bt},setTest:function(_t){_t?ct(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(_t){Ct!==_t&&!X&&(o.depthMask(_t),Ct=_t)},setFunc:function(_t){if(bt&&(_t=d2[_t]),zt!==_t){switch(_t){case Rp:o.depthFunc(o.NEVER);break;case Cp:o.depthFunc(o.ALWAYS);break;case wp:o.depthFunc(o.LESS);break;case Oo:o.depthFunc(o.LEQUAL);break;case Dp:o.depthFunc(o.EQUAL);break;case Up:o.depthFunc(o.GEQUAL);break;case Lp:o.depthFunc(o.GREATER);break;case Np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){Mt!==_t&&(bt&&(_t=1-_t),o.clearDepth(_t),Mt=_t)},reset:function(){X=!1,Ct=null,zt=null,Mt=null,bt=!1}}}function s(){let X=!1,bt=null,Ct=null,zt=null,Mt=null,_t=null,Ft=null,re=null,Ne=null;return{setTest:function(Te){X||(Te?ct(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!X&&(o.stencilMask(Te),bt=Te)},setFunc:function(Te,Gn,Ei){(Ct!==Te||zt!==Gn||Mt!==Ei)&&(o.stencilFunc(Te,Gn,Ei),Ct=Te,zt=Gn,Mt=Ei)},setOp:function(Te,Gn,Ei){(_t!==Te||Ft!==Gn||re!==Ei)&&(o.stencilOp(Te,Gn,Ei),_t=Te,Ft=Gn,re=Ei)},setLocked:function(Te){X=Te},setClear:function(Te){Ne!==Te&&(o.clearStencil(Te),Ne=Te)},reset:function(){X=!1,bt=null,Ct=null,zt=null,Mt=null,_t=null,Ft=null,re=null,Ne=null}}}const l=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,y=[],T=null,M=!1,S=null,x=null,L=null,U=null,C=null,O=null,P=null,N=new ze(0,0,0),I=0,A=!1,D=null,V=null,K=null,et=null,ut=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=W>=2);let vt=null,yt={};const B=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),xt=new un().fromArray(B),Et=new un().fromArray($);function wt(X,bt,Ct,zt){const Mt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Ct;Ft++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(bt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return _t}const at={};at[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ct(o.DEPTH_TEST),c.setFunc(Oo),te(!1),Wt(tx),ct(o.CULL_FACE),Ae(Rr);function ct(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Dt(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Bt(X,bt){return g[X]!==bt?(o.bindFramebuffer(X,bt),g[X]=bt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Xt(X,bt){let Ct=y,zt=!1;if(X){Ct=v.get(bt),Ct===void 0&&(Ct=[],v.set(bt,Ct));const Mt=X.textures;if(Ct.length!==Mt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ft=Mt.length;_t<Ft;_t++)Ct[_t]=o.COLOR_ATTACHMENT0+_t;Ct.length=Mt.length,zt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Ct)}function pe(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const fn={[fs]:o.FUNC_ADD,[xT]:o.FUNC_SUBTRACT,[ST]:o.FUNC_REVERSE_SUBTRACT};fn[yT]=o.MIN,fn[MT]=o.MAX;const G={[ET]:o.ZERO,[TT]:o.ONE,[bT]:o.SRC_COLOR,[bp]:o.SRC_ALPHA,[UT]:o.SRC_ALPHA_SATURATE,[wT]:o.DST_COLOR,[RT]:o.DST_ALPHA,[AT]:o.ONE_MINUS_SRC_COLOR,[Ap]:o.ONE_MINUS_SRC_ALPHA,[DT]:o.ONE_MINUS_DST_COLOR,[CT]:o.ONE_MINUS_DST_ALPHA,[LT]:o.CONSTANT_COLOR,[NT]:o.ONE_MINUS_CONSTANT_COLOR,[OT]:o.CONSTANT_ALPHA,[PT]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(X,bt,Ct,zt,Mt,_t,Ft,re,Ne,Te){if(X===Rr){M===!0&&(Dt(o.BLEND),M=!1);return}if(M===!1&&(ct(o.BLEND),M=!0),X!==vT){if(X!==S||Te!==A){if((x!==fs||C!==fs)&&(o.blendEquation(o.FUNC_ADD),x=fs,C=fs),Te)switch(X){case wo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ex:o.blendFunc(o.ONE,o.ONE);break;case nx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ix:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case wo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ex:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case nx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ix:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,O=null,P=null,N.set(0,0,0),I=0,S=X,A=Te}return}Mt=Mt||bt,_t=_t||Ct,Ft=Ft||zt,(bt!==x||Mt!==C)&&(o.blendEquationSeparate(fn[bt],fn[Mt]),x=bt,C=Mt),(Ct!==L||zt!==U||_t!==O||Ft!==P)&&(o.blendFuncSeparate(G[Ct],G[zt],G[_t],G[Ft]),L=Ct,U=zt,O=_t,P=Ft),(re.equals(N)===!1||Ne!==I)&&(o.blendColor(re.r,re.g,re.b,Ne),N.copy(re),I=Ne),S=X,A=!1}function ie(X,bt){X.side===Ia?Dt(o.CULL_FACE):ct(o.CULL_FACE);let Ct=X.side===ti;bt&&(Ct=!Ct),te(Ct),X.blending===wo&&X.transparent===!1?Ae(Rr):Ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const zt=X.stencilWrite;f.setTest(zt),zt&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function Wt(X){X!==mT?(ct(o.CULL_FACE),X!==V&&(X===tx?o.cullFace(o.BACK):X===_T?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),V=X}function Ge(X){X!==K&&(F&&o.lineWidth(X),K=X)}function kt(X,bt,Ct){X?(ct(o.POLYGON_OFFSET_FILL),(et!==bt||ut!==Ct)&&(o.polygonOffset(bt,Ct),et=bt,ut=Ct)):Dt(o.POLYGON_OFFSET_FILL)}function se(X){X?ct(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function tn(X){X===void 0&&(X=o.TEXTURE0+ot-1),vt!==X&&(o.activeTexture(X),vt=X)}function Qe(X,bt,Ct){Ct===void 0&&(vt===null?Ct=o.TEXTURE0+ot-1:Ct=vt);let zt=yt[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},yt[Ct]=zt),(zt.type!==X||zt.texture!==bt)&&(vt!==Ct&&(o.activeTexture(Ct),vt=Ct),o.bindTexture(X,bt||at[X]),zt.type=X,zt.texture=bt)}function z(){const X=yt[vt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(X){xt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function Kt(X){Et.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Et.copy(X))}function Pt(X,bt){let Ct=d.get(bt);Ct===void 0&&(Ct=new WeakMap,d.set(bt,Ct));let zt=Ct.get(X);zt===void 0&&(zt=o.getUniformBlockIndex(bt,X.name),Ct.set(X,zt))}function Ut(X,bt){const zt=d.get(bt).get(X);p.get(bt)!==zt&&(o.uniformBlockBinding(bt,zt,X.__bindingPointIndex),p.set(bt,zt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},vt=null,yt={},g={},v=new WeakMap,y=[],T=null,M=!1,S=null,x=null,L=null,U=null,C=null,O=null,P=null,N=new ze(0,0,0),I=0,A=!1,D=null,V=null,K=null,et=null,ut=null,xt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ct,disable:Dt,bindFramebuffer:Bt,drawBuffers:Xt,useProgram:pe,setBlending:Ae,setMaterial:ie,setFlipSided:te,setCullFace:Wt,setLineWidth:Ge,setPolygonOffset:kt,setScissorTest:se,activeTexture:tn,bindTexture:Qe,unbindTexture:z,compressedTexImage2D:b,compressedTexImage3D:tt,texImage2D:jt,texImage3D:Tt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:At,texStorage3D:Yt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:Rt,viewport:Kt,reset:le}}function m2(o,t,n,a,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ae,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(z,b){return y?new OffscreenCanvas(z,b):eu("canvas")}function M(z,b,tt){let dt=1;const St=Qe(z);if((St.width>tt||St.height>tt)&&(dt=tt/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(dt*St.width),Zt=Math.floor(dt*St.height);g===void 0&&(g=T(ft,Zt));const At=b?T(ft,Zt):g;return At.width=ft,At.height=Zt,At.getContext("2d").drawImage(z,0,0,ft,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Zt+")."),At}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),z;return z}function S(z){return z.generateMipmaps}function x(z){o.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(z,b,tt,dt,St=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=b;if(b===o.RED&&(tt===o.FLOAT&&(ft=o.R32F),tt===o.HALF_FLOAT&&(ft=o.R16F),tt===o.UNSIGNED_BYTE&&(ft=o.R8)),b===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.R8UI),tt===o.UNSIGNED_SHORT&&(ft=o.R16UI),tt===o.UNSIGNED_INT&&(ft=o.R32UI),tt===o.BYTE&&(ft=o.R8I),tt===o.SHORT&&(ft=o.R16I),tt===o.INT&&(ft=o.R32I)),b===o.RG&&(tt===o.FLOAT&&(ft=o.RG32F),tt===o.HALF_FLOAT&&(ft=o.RG16F),tt===o.UNSIGNED_BYTE&&(ft=o.RG8)),b===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),tt===o.UNSIGNED_INT&&(ft=o.RG32UI),tt===o.BYTE&&(ft=o.RG8I),tt===o.SHORT&&(ft=o.RG16I),tt===o.INT&&(ft=o.RG32I)),b===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),tt===o.UNSIGNED_INT&&(ft=o.RGB32UI),tt===o.BYTE&&(ft=o.RGB8I),tt===o.SHORT&&(ft=o.RGB16I),tt===o.INT&&(ft=o.RGB32I)),b===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),tt===o.BYTE&&(ft=o.RGBA8I),tt===o.SHORT&&(ft=o.RGBA16I),tt===o.INT&&(ft=o.RGBA32I)),b===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),b===o.RGBA){const Zt=St?uf:we.getTransfer(dt);tt===o.FLOAT&&(ft=o.RGBA32F),tt===o.HALF_FLOAT&&(ft=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ft=Zt===He?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(z,b){let tt;return z?b===null||b===ys||b===Jl?tt=o.DEPTH24_STENCIL8:b===Ha?tt=o.DEPTH32F_STENCIL8:b===Ql&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===Jl?tt=o.DEPTH_COMPONENT24:b===Ha?tt=o.DEPTH_COMPONENT32F:b===Ql&&(tt=o.DEPTH_COMPONENT16),tt}function O(z,b){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Zi&&z.minFilter!==oa?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function P(z){const b=z.target;b.removeEventListener("dispose",P),I(b),b.isVideoTexture&&_.delete(b)}function N(z){const b=z.target;b.removeEventListener("dispose",N),D(b)}function I(z){const b=a.get(z);if(b.__webglInit===void 0)return;const tt=z.source,dt=v.get(tt);if(dt){const St=dt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&A(z),Object.keys(dt).length===0&&v.delete(tt)}a.remove(z)}function A(z){const b=a.get(z);o.deleteTexture(b.__webglTexture);const tt=z.source,dt=v.get(tt);delete dt[b.__cacheKey],c.memory.textures--}function D(z){const b=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let St=0;St<b.__webglFramebuffer[dt].length;St++)o.deleteFramebuffer(b.__webglFramebuffer[dt][St]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=z.textures;for(let dt=0,St=tt.length;dt<St;dt++){const ft=a.get(tt[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),c.memory.textures--),a.remove(tt[dt])}a.remove(z)}let V=0;function K(){V=0}function et(){const z=V;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),V+=1,z}function ut(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function ot(z,b){const tt=a.get(z);if(z.isVideoTexture&&se(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&tt.__version!==z.version){const dt=z.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(tt,z,b);return}}else z.isExternalTexture&&(tt.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+b)}function F(z,b){const tt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){at(tt,z,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+b)}function W(z,b){const tt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){at(tt,z,b);return}n.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+b)}function q(z,b){const tt=a.get(z);if(z.version>0&&tt.__version!==z.version){ct(tt,z,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+b)}const vt={[zp]:o.REPEAT,[ds]:o.CLAMP_TO_EDGE,[Bp]:o.MIRRORED_REPEAT},yt={[Zi]:o.NEAREST,[WT]:o.NEAREST_MIPMAP_NEAREST,[Cc]:o.NEAREST_MIPMAP_LINEAR,[oa]:o.LINEAR,[Fd]:o.LINEAR_MIPMAP_NEAREST,[ps]:o.LINEAR_MIPMAP_LINEAR},B={[KT]:o.NEVER,[n1]:o.ALWAYS,[QT]:o.LESS,[DS]:o.LEQUAL,[JT]:o.EQUAL,[e1]:o.GEQUAL,[$T]:o.GREATER,[t1]:o.NOTEQUAL};function $(z,b){if(b.type===Ha&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===oa||b.magFilter===Fd||b.magFilter===Cc||b.magFilter===ps||b.minFilter===oa||b.minFilter===Fd||b.minFilter===Cc||b.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,vt[b.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,vt[b.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,vt[b.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,yt[b.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,B[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zi||b.minFilter!==Cc&&b.minFilter!==ps||b.type===Ha&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function xt(z,b){let tt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",P));const dt=b.source;let St=v.get(dt);St===void 0&&(St={},v.set(dt,St));const ft=ut(b);if(ft!==z.__cacheKey){St[ft]===void 0&&(St[ft]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,tt=!0),St[ft].usedTimes++;const Zt=St[z.__cacheKey];Zt!==void 0&&(St[z.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(b)),z.__cacheKey=ft,z.__webglTexture=St[ft].texture}return tt}function Et(z,b,tt){return Math.floor(Math.floor(z/tt)/b)}function wt(z,b,tt,dt){const ft=z.updateRanges;if(ft.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,tt,dt,b.data);else{ft.sort((Tt,Rt)=>Tt.start-Rt.start);let Zt=0;for(let Tt=1;Tt<ft.length;Tt++){const Rt=ft[Zt],Kt=ft[Tt],Pt=Rt.start+Rt.count,Ut=Et(Kt.start,b.width,4),le=Et(Rt.start,b.width,4);Kt.start<=Pt+1&&Ut===le&&Et(Kt.start+Kt.count-1,b.width,4)===Ut?Rt.count=Math.max(Rt.count,Kt.start+Kt.count-Rt.start):(++Zt,ft[Zt]=Kt)}ft.length=Zt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,Rt=ft.length;Tt<Rt;Tt++){const Kt=ft[Tt],Pt=Math.floor(Kt.start/4),Ut=Math.ceil(Kt.count/4),le=Pt%b.width,X=Math.floor(Pt/b.width),bt=Ut,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),n.texSubImage2D(o.TEXTURE_2D,0,le,X,bt,Ct,tt,dt,b.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function at(z,b,tt){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const St=xt(z,b),ft=b.source;n.bindTexture(dt,z.__webglTexture,o.TEXTURE0+tt);const Zt=a.get(ft);if(ft.version!==Zt.__version||St===!0){n.activeTexture(o.TEXTURE0+tt);const At=we.getPrimaries(we.workingColorSpace),Yt=b.colorSpace===Er?null:we.getPrimaries(b.colorSpace),jt=b.colorSpace===Er||At===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Tt=M(b.image,!1,s.maxTextureSize);Tt=tn(b,Tt);const Rt=l.convert(b.format,b.colorSpace),Kt=l.convert(b.type);let Pt=U(b.internalFormat,Rt,Kt,b.colorSpace,b.isVideoTexture);$(dt,b);let Ut;const le=b.mipmaps,X=b.isVideoTexture!==!0,bt=Zt.__version===void 0||St===!0,Ct=ft.dataReady,zt=O(b,Tt);if(b.isDepthTexture)Pt=C(b.format===tu,b.type),bt&&(X?n.texStorage2D(o.TEXTURE_2D,1,Pt,Tt.width,Tt.height):n.texImage2D(o.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,Rt,Kt,null));else if(b.isDataTexture)if(le.length>0){X&&bt&&n.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let Mt=0,_t=le.length;Mt<_t;Mt++)Ut=le[Mt],X?Ct&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Rt,Kt,Ut.data):n.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Rt,Kt,Ut.data);b.generateMipmaps=!1}else X?(bt&&n.texStorage2D(o.TEXTURE_2D,zt,Pt,Tt.width,Tt.height),Ct&&wt(b,Tt,Rt,Kt)):n.texImage2D(o.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,Rt,Kt,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&bt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,le[0].width,le[0].height,Tt.depth);for(let Mt=0,_t=le.length;Mt<_t;Mt++)if(Ut=le[Mt],b.format!==qi)if(Rt!==null)if(X){if(Ct)if(b.layerUpdates.size>0){const Ft=Dx(Ut.width,Ut.height,b.format,b.type);for(const re of b.layerUpdates){const Ne=Ut.data.subarray(re*Ft/Ut.data.BYTES_PER_ELEMENT,(re+1)*Ft/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,re,Ut.width,Ut.height,1,Rt,Ne)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Tt.depth,Rt,Ut.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,Tt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Tt.depth,Rt,Kt,Ut.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,Tt.depth,0,Rt,Kt,Ut.data)}else{X&&bt&&n.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let Mt=0,_t=le.length;Mt<_t;Mt++)Ut=le[Mt],b.format!==qi?Rt!==null?X?Ct&&n.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Rt,Ut.data):n.compressedTexImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Rt,Kt,Ut.data):n.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Rt,Kt,Ut.data)}else if(b.isDataArrayTexture)if(X){if(bt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,Tt.width,Tt.height,Tt.depth),Ct)if(b.layerUpdates.size>0){const Mt=Dx(Tt.width,Tt.height,b.format,b.type);for(const _t of b.layerUpdates){const Ft=Tt.data.subarray(_t*Mt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*Mt/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Rt,Kt,Ft)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,Kt,Tt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Tt.width,Tt.height,Tt.depth,0,Rt,Kt,Tt.data);else if(b.isData3DTexture)X?(bt&&n.texStorage3D(o.TEXTURE_3D,zt,Pt,Tt.width,Tt.height,Tt.depth),Ct&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,Kt,Tt.data)):n.texImage3D(o.TEXTURE_3D,0,Pt,Tt.width,Tt.height,Tt.depth,0,Rt,Kt,Tt.data);else if(b.isFramebufferTexture){if(bt)if(X)n.texStorage2D(o.TEXTURE_2D,zt,Pt,Tt.width,Tt.height);else{let Mt=Tt.width,_t=Tt.height;for(let Ft=0;Ft<zt;Ft++)n.texImage2D(o.TEXTURE_2D,Ft,Pt,Mt,_t,0,Rt,Kt,null),Mt>>=1,_t>>=1}}else if(le.length>0){if(X&&bt){const Mt=Qe(le[0]);n.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}for(let Mt=0,_t=le.length;Mt<_t;Mt++)Ut=le[Mt],X?Ct&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Rt,Kt,Ut):n.texImage2D(o.TEXTURE_2D,Mt,Pt,Rt,Kt,Ut);b.generateMipmaps=!1}else if(X){if(bt){const Mt=Qe(Tt);n.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}Ct&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,Kt,Tt)}else n.texImage2D(o.TEXTURE_2D,0,Pt,Rt,Kt,Tt);S(b)&&x(dt),Zt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function ct(z,b,tt){if(b.image.length!==6)return;const dt=xt(z,b),St=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+tt);const ft=a.get(St);if(St.version!==ft.__version||dt===!0){n.activeTexture(o.TEXTURE0+tt);const Zt=we.getPrimaries(we.workingColorSpace),At=b.colorSpace===Er?null:we.getPrimaries(b.colorSpace),Yt=b.colorSpace===Er||Zt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Rt=[];for(let _t=0;_t<6;_t++)!jt&&!Tt?Rt[_t]=M(b.image[_t],!0,s.maxCubemapSize):Rt[_t]=Tt?b.image[_t].image:b.image[_t],Rt[_t]=tn(b,Rt[_t]);const Kt=Rt[0],Pt=l.convert(b.format,b.colorSpace),Ut=l.convert(b.type),le=U(b.internalFormat,Pt,Ut,b.colorSpace),X=b.isVideoTexture!==!0,bt=ft.__version===void 0||dt===!0,Ct=St.dataReady;let zt=O(b,Kt);$(o.TEXTURE_CUBE_MAP,b);let Mt;if(jt){X&&bt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){Mt=Rt[_t].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const re=Mt[Ft];b.format!==qi?Pt!==null?X?Ct&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,re.width,re.height,Pt,re.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,le,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,re.width,re.height,Pt,Ut,re.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,le,re.width,re.height,0,Pt,Ut,re.data)}}}else{if(Mt=b.mipmaps,X&&bt){Mt.length>0&&zt++;const _t=Qe(Rt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){X?Ct&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Rt[_t].width,Rt[_t].height,Pt,Ut,Rt[_t].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Rt[_t].width,Rt[_t].height,0,Pt,Ut,Rt[_t].data);for(let Ft=0;Ft<Mt.length;Ft++){const Ne=Mt[Ft].image[_t].image;X?Ct&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Ne.width,Ne.height,Pt,Ut,Ne.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,le,Ne.width,Ne.height,0,Pt,Ut,Ne.data)}}else{X?Ct&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt,Ut,Rt[_t]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Pt,Ut,Rt[_t]);for(let Ft=0;Ft<Mt.length;Ft++){const re=Mt[Ft];X?Ct&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Pt,Ut,re.image[_t]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,le,Pt,Ut,re.image[_t])}}}S(b)&&x(o.TEXTURE_CUBE_MAP),ft.__version=St.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function Dt(z,b,tt,dt,St,ft){const Zt=l.convert(tt.format,tt.colorSpace),At=l.convert(tt.type),Yt=U(tt.internalFormat,Zt,At,tt.colorSpace),jt=a.get(b),Tt=a.get(tt);if(Tt.__renderTarget=b,!jt.__hasExternalTextures){const Rt=Math.max(1,b.width>>ft),Kt=Math.max(1,b.height>>ft);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?n.texImage3D(St,ft,Yt,Rt,Kt,b.depth,0,Zt,At,null):n.texImage2D(St,ft,Yt,Rt,Kt,0,Zt,At,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),kt(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,St,Tt.__webglTexture,0,Ge(b)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,St,Tt.__webglTexture,ft),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(z,b,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,z),b.depthBuffer){const dt=b.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ft=C(b.stencilBuffer,St),Zt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Ge(b);kt(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ft,b.width,b.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,z)}else{const dt=b.textures;for(let St=0;St<dt.length;St++){const ft=dt[St],Zt=l.convert(ft.format,ft.colorSpace),At=l.convert(ft.type),Yt=U(ft.internalFormat,Zt,At,ft.colorSpace),jt=Ge(b);tt&&kt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Yt,b.width,b.height):kt(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Yt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(z,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=a.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ot(b.depthTexture,0);const St=dt.__webglTexture,ft=Ge(b);if(b.depthTexture.format===$l)kt(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(b.depthTexture.format===tu)kt(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function pe(z){const b=a.get(z),tt=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=dt}if(z.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=z.texture.mipmaps;dt&&dt.length>0?Xt(b.__webglFramebuffer[0],z):Xt(b.__webglFramebuffer,z)}else if(tt){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),Bt(b.__webglDepthbuffer[dt],z,!1);else{const St=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}else{const dt=z.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Bt(b.__webglDepthbuffer,z,!1);else{const St=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function fn(z,b,tt){const dt=a.get(z);b!==void 0&&Dt(dt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&pe(z)}function G(z){const b=z.texture,tt=a.get(z),dt=a.get(b);z.addEventListener("dispose",N);const St=z.textures,ft=z.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,c.memory.textures++),ft){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let Yt=0;Yt<b.mipmaps.length;Yt++)tt.__webglFramebuffer[At][Yt]=o.createFramebuffer()}else tt.__webglFramebuffer[At]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)tt.__webglFramebuffer[At]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let At=0,Yt=St.length;At<Yt;At++){const jt=a.get(St[At]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&kt(z)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<St.length;At++){const Yt=St[At];tt.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const jt=l.convert(Yt.format,Yt.colorSpace),Tt=l.convert(Yt.type),Rt=U(Yt.internalFormat,jt,Tt,Yt.colorSpace,z.isXRRenderTarget===!0),Kt=Ge(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Rt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(tt.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){n.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),$(o.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Yt=0;Yt<b.mipmaps.length;Yt++)Dt(tt.__webglFramebuffer[At][Yt],z,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Yt);else Dt(tt.__webglFramebuffer[At],z,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(b)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let At=0,Yt=St.length;At<Yt;At++){const jt=St[At],Tt=a.get(jt);let Rt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Rt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Tt.__webglTexture),$(Rt,jt),Dt(tt.__webglFramebuffer,z,jt,o.COLOR_ATTACHMENT0+At,Rt,0),S(jt)&&x(Rt)}n.unbindTexture()}else{let At=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(At=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(At,dt.__webglTexture),$(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Yt=0;Yt<b.mipmaps.length;Yt++)Dt(tt.__webglFramebuffer[Yt],z,b,o.COLOR_ATTACHMENT0,At,Yt);else Dt(tt.__webglFramebuffer,z,b,o.COLOR_ATTACHMENT0,At,0);S(b)&&x(At),n.unbindTexture()}z.depthBuffer&&pe(z)}function Ae(z){const b=z.textures;for(let tt=0,dt=b.length;tt<dt;tt++){const St=b[tt];if(S(St)){const ft=L(z),Zt=a.get(St).__webglTexture;n.bindTexture(ft,Zt),x(ft),n.unbindTexture()}}}const ie=[],te=[];function Wt(z){if(z.samples>0){if(kt(z)===!1){const b=z.textures,tt=z.width,dt=z.height;let St=o.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=a.get(z),At=b.length>1;if(At)for(let jt=0;jt<b.length;jt++)n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Yt=z.texture.mipmaps;Yt&&Yt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let jt=0;jt<b.length;jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const Tt=a.get(b[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,tt,dt,0,0,tt,dt,St,o.NEAREST),p===!0&&(ie.length=0,te.length=0,ie.push(o.COLOR_ATTACHMENT0+jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ie.push(ft),te.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,te)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let jt=0;jt<b.length;jt++){n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const Tt=a.get(b[jt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,Tt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const b=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ge(z){return Math.min(s.maxSamples,z.samples)}function kt(z){const b=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(z){const b=c.render.frame;_.get(z)!==b&&(_.set(z,b),z.update())}function tn(z,b){const tt=z.colorSpace,dt=z.format,St=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||tt!==Bo&&tt!==Er&&(we.getTransfer(tt)===He?(dt!==qi||St!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Qe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=K,this.setTexture2D=ot,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=fn,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=kt}function _2(o,t){function n(a,s=Er){let l;const c=we.getTransfer(s);if(a===Va)return o.UNSIGNED_BYTE;if(a===Pm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===zm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===TS)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===bS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===MS)return o.BYTE;if(a===ES)return o.SHORT;if(a===Ql)return o.UNSIGNED_SHORT;if(a===Om)return o.INT;if(a===ys)return o.UNSIGNED_INT;if(a===Ha)return o.FLOAT;if(a===cu)return o.HALF_FLOAT;if(a===AS)return o.ALPHA;if(a===RS)return o.RGB;if(a===qi)return o.RGBA;if(a===$l)return o.DEPTH_COMPONENT;if(a===tu)return o.DEPTH_STENCIL;if(a===CS)return o.RED;if(a===Bm)return o.RED_INTEGER;if(a===wS)return o.RG;if(a===Fm)return o.RG_INTEGER;if(a===Im)return o.RGBA_INTEGER;if(a===tf||a===ef||a===nf||a===af)if(c===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===tf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ef)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===nf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===tf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ef)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===nf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===af)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fp||a===Ip||a===Hp||a===Gp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Fp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ip)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Gp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Vp||a===kp||a===Xp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Vp||a===kp)return c===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Xp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wp||a===qp||a===Yp||a===jp||a===Zp||a===Kp||a===Qp||a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Wp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jp)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$p)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===em)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===nm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===im)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===am)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rm||a===sm||a===om)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===rm)return c===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===sm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===om)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===lm||a===um||a===cm||a===fm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===lm)return l.COMPRESSED_RED_RGTC1_EXT;if(a===um)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Jl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class x2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new kS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Lr({vertexShader:g2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yi(new _u(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S2 extends Wo{constructor(t,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,y=null,T=null;const M=typeof XRWebGLBinding<"u",S=new x2,x={},L=n.getContextAttributes();let U=null,C=null;const O=[],P=[],N=new ae;let I=null;const A=new Pi;A.viewport=new un;const D=new Pi;D.viewport=new un;const V=[A,D],K=new I1;let et=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ct=O[at];return ct===void 0&&(ct=new op,O[at]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(at){let ct=O[at];return ct===void 0&&(ct=new op,O[at]=ct),ct.getGripSpace()},this.getHand=function(at){let ct=O[at];return ct===void 0&&(ct=new op,O[at]=ct),ct.getHandSpace()};function ot(at){const ct=P.indexOf(at.inputSource);if(ct===-1)return;const Dt=O[ct];Dt!==void 0&&(Dt.update(at.inputSource,at.frame,d||c),Dt.dispatchEvent({type:at.type,data:at.inputSource}))}function F(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",W);for(let at=0;at<O.length;at++){const ct=P[at];ct!==null&&(P[at]=null,O[at].disconnect(ct))}et=null,ut=null,S.reset();for(const at in x)delete x[at];t.setRenderTarget(U),y=null,v=null,g=null,s=null,C=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(N.width,N.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){l=at,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){f=at,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",F),s.addEventListener("inputsourceschange",W),L.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Bt=null,Xt=null;L.depth&&(Xt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=L.stencil?tu:$l,Bt=L.stencil?Jl:ys);const pe={colorFormat:n.RGBA8,depthFormat:Xt,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(pe),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Ms(v.textureWidth,v.textureHeight,{format:qi,type:Va,depthTexture:new VS(v.textureWidth,v.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Dt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,Dt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ms(y.framebufferWidth,y.framebufferHeight,{format:qi,type:Va,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),wt.setContext(s),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(at){for(let ct=0;ct<at.removed.length;ct++){const Dt=at.removed[ct],Bt=P.indexOf(Dt);Bt>=0&&(P[Bt]=null,O[Bt].disconnect(Dt))}for(let ct=0;ct<at.added.length;ct++){const Dt=at.added[ct];let Bt=P.indexOf(Dt);if(Bt===-1){for(let pe=0;pe<O.length;pe++)if(pe>=P.length){P.push(Dt),Bt=pe;break}else if(P[pe]===null){P[pe]=Dt,Bt=pe;break}if(Bt===-1)break}const Xt=O[Bt];Xt&&Xt.connect(Dt)}}const q=new nt,vt=new nt;function yt(at,ct,Dt){q.setFromMatrixPosition(ct.matrixWorld),vt.setFromMatrixPosition(Dt.matrixWorld);const Bt=q.distanceTo(vt),Xt=ct.projectionMatrix.elements,pe=Dt.projectionMatrix.elements,fn=Xt[14]/(Xt[10]-1),G=Xt[14]/(Xt[10]+1),Ae=(Xt[9]+1)/Xt[5],ie=(Xt[9]-1)/Xt[5],te=(Xt[8]-1)/Xt[0],Wt=(pe[8]+1)/pe[0],Ge=fn*te,kt=fn*Wt,se=Bt/(-te+Wt),tn=se*-te;if(ct.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(tn),at.translateZ(se),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Xt[10]===-1)at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Qe=fn+se,z=G+se,b=Ge-tn,tt=kt+(Bt-tn),dt=Ae*G/z*Qe,St=ie*G/z*Qe;at.projectionMatrix.makePerspective(b,tt,dt,St,Qe,z),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function B(at,ct){ct===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ct.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let ct=at.near,Dt=at.far;S.texture!==null&&(S.depthNear>0&&(ct=S.depthNear),S.depthFar>0&&(Dt=S.depthFar)),K.near=D.near=A.near=ct,K.far=D.far=A.far=Dt,(et!==K.near||ut!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),et=K.near,ut=K.far),K.layers.mask=at.layers.mask|6,A.layers.mask=K.layers.mask&3,D.layers.mask=K.layers.mask&5;const Bt=at.parent,Xt=K.cameras;B(K,Bt);for(let pe=0;pe<Xt.length;pe++)B(Xt[pe],Bt);Xt.length===2?yt(K,A,D):K.projectionMatrix.copy(A.projectionMatrix),$(at,K,Bt)};function $(at,ct,Dt){Dt===null?at.matrix.copy(ct.matrixWorld):(at.matrix.copy(Dt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ct.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=hm*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(at){p=at,v!==null&&(v.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(at){return x[at]};let xt=null;function Et(at,ct){if(_=ct.getViewerPose(d||c),T=ct,_!==null){const Dt=_.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let Bt=!1;Dt.length!==K.cameras.length&&(K.cameras.length=0,Bt=!0);for(let G=0;G<Dt.length;G++){const Ae=Dt[G];let ie=null;if(y!==null)ie=y.getViewport(Ae);else{const Wt=g.getViewSubImage(v,Ae);ie=Wt.viewport,G===0&&(t.setRenderTargetTextures(C,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(C))}let te=V[G];te===void 0&&(te=new Pi,te.layers.enable(G),te.viewport=new un,V[G]=te),te.matrix.fromArray(Ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ie.x,ie.y,ie.width,ie.height),G===0&&(K.matrix.copy(te.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Bt===!0&&K.cameras.push(te)}const Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const G=g.getDepthInformation(Dt[0]);G&&G.isValid&&G.texture&&S.init(G,s.renderState)}if(Xt&&Xt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let G=0;G<Dt.length;G++){const Ae=Dt[G].camera;if(Ae){let ie=x[Ae];ie||(ie=new kS,x[Ae]=ie);const te=g.getCameraImage(Ae);ie.sourceTexture=te}}}}for(let Dt=0;Dt<O.length;Dt++){const Bt=P[Dt],Xt=O[Dt];Bt!==null&&Xt!==void 0&&Xt.update(Bt,ct,d||c)}xt&&xt(at,ct),ct.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ct}),T=null}const wt=new qS;wt.setAnimationLoop(Et),this.setAnimationLoop=function(at){xt=at},this.dispose=function(){}}}const ss=new ka,y2=new cn;function M2(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,zS(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,L,U,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),T(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,L,U):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=t.get(x),U=L.envMap,C=L.envMapRotation;U&&(S.envMap.value=U,ss.copy(C),ss.x*=-1,ss.y*=-1,ss.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),S.envMapRotation.value.setFromMatrix4(y2.makeRotationFromEuler(ss)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,L,U){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=U*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const L=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function E2(o,t,n,a){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const C=U.program;a.uniformBlockBinding(L,C)}function d(L,U){let C=s[L.id];C===void 0&&(T(L),C=_(L),s[L.id]=C,L.addEventListener("dispose",S));const O=U.program;a.updateUBOMapping(L,O);const P=t.render.frame;l[L.id]!==P&&(v(L),l[L.id]=P)}function _(L){const U=g();L.__bindingPointIndex=U;const C=o.createBuffer(),O=L.__size,P=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,O,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,C),C}function g(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=s[L.id],C=L.uniforms,O=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,N=C.length;P<N;P++){const I=Array.isArray(C[P])?C[P]:[C[P]];for(let A=0,D=I.length;A<D;A++){const V=I[A];if(y(V,P,A,O)===!0){const K=V.__offset,et=Array.isArray(V.value)?V.value:[V.value];let ut=0;for(let ot=0;ot<et.length;ot++){const F=et[ot],W=M(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,K+ut,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,ut),ut+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,U,C,O){const P=L.value,N=U+"_"+C;if(O[N]===void 0)return typeof P=="number"||typeof P=="boolean"?O[N]=P:O[N]=P.clone(),!0;{const I=O[N];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return O[N]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function T(L){const U=L.uniforms;let C=0;const O=16;for(let N=0,I=U.length;N<I;N++){const A=Array.isArray(U[N])?U[N]:[U[N]];for(let D=0,V=A.length;D<V;D++){const K=A[D],et=Array.isArray(K.value)?K.value:[K.value];for(let ut=0,ot=et.length;ut<ot;ut++){const F=et[ut],W=M(F),q=C%O,vt=q%W.boundary,yt=q+vt;C+=vt,yt!==0&&O-yt<W.storage&&(C+=O-yt),K.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=C,C+=W.storage}}}const P=C%O;return P>0&&(C+=O-P),L.__size=C,L.__cache={},this}function M(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const C=c.indexOf(U.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[U.id]),delete s[U.id],delete l[U.id]}function x(){for(const L in s)o.deleteBuffer(s[L]);c=[],s={},l={}}return{bind:p,update:d,dispose:x}}class QS{constructor(t={}){const{canvas:n=a1(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=c;const T=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const L=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let O=!1;this._outputColorSpace=Oi;let P=0,N=0,I=null,A=-1,D=null;const V=new un,K=new un;let et=null;const ut=new ze(0);let ot=0,F=n.width,W=n.height,q=1,vt=null,yt=null;const B=new un(0,0,F,W),$=new un(0,0,F,W);let xt=!1;const Et=new HS;let wt=!1,at=!1;const ct=new cn,Dt=new nt,Bt=new un,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function fn(){return I===null?q:1}let G=a;function Ae(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nm}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",Mt,!1),G===null){const Y="webgl2";if(G=Ae(Y,w),G===null)throw Ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,te,Wt,Ge,kt,se,tn,Qe,z,b,tt,dt,St,ft,Zt,At,Yt,jt,Tt,Rt,Kt,Pt,Ut,le;function X(){ie=new OR(G),ie.init(),Pt=new _2(G,ie),te=new RR(G,ie,t,Pt),Wt=new p2(G,ie),te.reversedDepthBuffer&&v&&Wt.buffers.depth.setReversed(!0),Ge=new BR(G),kt=new e2,se=new m2(G,ie,Wt,kt,te,Pt,Ge),tn=new wR(C),Qe=new NR(C),z=new k1(G),Ut=new bR(G,z),b=new PR(G,z,Ge,Ut),tt=new IR(G,b,z,Ge),Tt=new FR(G,te,se),At=new CR(kt),dt=new t2(C,tn,Qe,ie,te,Ut,At),St=new M2(C,kt),ft=new i2,Zt=new u2(ie),jt=new TR(C,tn,Qe,Wt,tt,y,p),Yt=new h2(C,tt,te),le=new E2(G,Ge,te,Wt),Rt=new AR(G,ie,Ge),Kt=new zR(G,ie,Ge),Ge.programs=dt.programs,C.capabilities=te,C.extensions=ie,C.properties=kt,C.renderLists=ft,C.shadowMap=Yt,C.state=Wt,C.info=Ge}X();const bt=new S2(C,G);this.xr=bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(F,W,!1))},this.getSize=function(w){return w.set(F,W)},this.setSize=function(w,Y,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,W=Y,n.width=Math.floor(w*q),n.height=Math.floor(Y*q),rt===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(F*q,W*q).floor()},this.setDrawingBufferSize=function(w,Y,rt){F=w,W=Y,q=rt,n.width=Math.floor(w*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,Y,rt,st){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,Y,rt,st),Wt.viewport(V.copy(B).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,Y,rt,st){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,Y,rt,st),Wt.scissor(K.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){Wt.setScissorTest(xt=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,rt=!0){let st=0;if(w){let Z=!1;if(I!==null){const gt=I.texture.format;Z=gt===Im||gt===Fm||gt===Bm}if(Z){const gt=I.texture.type,Lt=gt===Va||gt===ys||gt===Ql||gt===Jl||gt===Pm||gt===zm,Ht=jt.getClearColor(),Ot=jt.getClearAlpha(),Qt=Ht.r,ne=Ht.g,Jt=Ht.b;Lt?(T[0]=Qt,T[1]=ne,T[2]=Jt,T[3]=Ot,G.clearBufferuiv(G.COLOR,0,T)):(M[0]=Qt,M[1]=ne,M[2]=Jt,M[3]=Ot,G.clearBufferiv(G.COLOR,0,M))}else st|=G.COLOR_BUFFER_BIT}Y&&(st|=G.DEPTH_BUFFER_BIT),rt&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",Mt,!1),jt.dispose(),ft.dispose(),Zt.dispose(),kt.dispose(),tn.dispose(),Qe.dispose(),tt.dispose(),Ut.dispose(),le.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ei),bt.removeEventListener("sessionend",Yo),Qi.stop()};function Ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=Ge.autoReset,Y=Yt.enabled,rt=Yt.autoUpdate,st=Yt.needsUpdate,Z=Yt.type;X(),Ge.autoReset=w,Yt.enabled=Y,Yt.autoUpdate=rt,Yt.needsUpdate=st,Yt.type=Z}function Mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _t(w){const Y=w.target;Y.removeEventListener("dispose",_t),Ft(Y)}function Ft(w){re(w),kt.remove(w)}function re(w){const Y=kt.get(w).programs;Y!==void 0&&(Y.forEach(function(rt){dt.releaseProgram(rt)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,rt,st,Z,gt){Y===null&&(Y=Xt);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ht=Ya(w,Y,rt,st,Z);Wt.setMaterial(st,Lt);let Ot=rt.index,Qt=1;if(st.wireframe===!0){if(Ot=b.getWireframeAttribute(rt),Ot===void 0)return;Qt=2}const ne=rt.drawRange,Jt=rt.attributes.position;let me=ne.start*Qt,Ue=(ne.start+ne.count)*Qt;gt!==null&&(me=Math.max(me,gt.start*Qt),Ue=Math.min(Ue,(gt.start+gt.count)*Qt)),Ot!==null?(me=Math.max(me,0),Ue=Math.min(Ue,Ot.count)):Jt!=null&&(me=Math.max(me,0),Ue=Math.min(Ue,Jt.count));const Ve=Ue-me;if(Ve<0||Ve===1/0)return;Ut.setup(Z,st,Ht,rt,Ot);let Le,_e=Rt;if(Ot!==null&&(Le=z.get(Ot),_e=Kt,_e.setIndex(Le)),Z.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*fn()),_e.setMode(G.LINES)):_e.setMode(G.TRIANGLES);else if(Z.isLine){let Gt=st.linewidth;Gt===void 0&&(Gt=1),Wt.setLineWidth(Gt*fn()),Z.isLineSegments?_e.setMode(G.LINES):Z.isLineLoop?_e.setMode(G.LINE_LOOP):_e.setMode(G.LINE_STRIP)}else Z.isPoints?_e.setMode(G.POINTS):Z.isSprite&&_e.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)nu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Gt=Z._multiDrawStarts,qe=Z._multiDrawCounts,be=Z._multiDrawCount,wn=Ot?z.get(Ot).bytesPerElement:1,fa=kt.get(st).currentProgram.getUniforms();for(let Tn=0;Tn<be;Tn++)fa.setValue(G,"_gl_DrawID",Tn),_e.render(Gt[Tn]/wn,qe[Tn])}else if(Z.isInstancedMesh)_e.renderInstances(me,Ve,Z.count);else if(rt.isInstancedBufferGeometry){const Gt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,qe=Math.min(rt.instanceCount,Gt);_e.renderInstances(me,Ve,qe)}else _e.render(me,Ve)};function Ne(w,Y,rt){w.transparent===!0&&w.side===Ia&&w.forceSinglePass===!1?(w.side=ti,w.needsUpdate=!0,oi(w,Y,rt),w.side=Ur,w.needsUpdate=!0,oi(w,Y,rt),w.side=Ia):oi(w,Y,rt)}this.compile=function(w,Y,rt=null){rt===null&&(rt=w),x=Zt.get(rt),x.init(Y),U.push(x),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),w!==rt&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const st=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const gt=Z.material;if(gt)if(Array.isArray(gt))for(let Lt=0;Lt<gt.length;Lt++){const Ht=gt[Lt];Ne(Ht,rt,Z),st.add(Ht)}else Ne(gt,rt,Z),st.add(gt)}),x=U.pop(),st},this.compileAsync=function(w,Y,rt=null){const st=this.compile(w,Y,rt);return new Promise(Z=>{function gt(){if(st.forEach(function(Lt){kt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){Z(w);return}setTimeout(gt,10)}ie.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Te=null;function Gn(w){Te&&Te(w)}function Ei(){Qi.stop()}function Yo(){Qi.start()}const Qi=new qS;Qi.setAnimationLoop(Gn),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(w){Te=w,bt.setAnimationLoop(w),w===null?Qi.stop():Qi.start()},bt.addEventListener("sessionstart",Ei),bt.addEventListener("sessionend",Yo),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Y),Y=bt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Y,I),x=Zt.get(w,U.length),x.init(Y),U.push(x),ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Et.setFromProjectionMatrix(ct,la,Y.reversedDepth),at=this.localClippingEnabled,wt=At.init(this.clippingPlanes,at),S=ft.get(w,L.length),S.init(),L.push(S),bt.enabled===!0&&bt.isPresenting===!0){const gt=C.xr.getDepthSensingMesh();gt!==null&&bs(gt,Y,-1/0,C.sortObjects)}bs(w,Y,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(vt,yt),pe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,pe&&jt.addToRenderList(S,w),this.info.render.frame++,wt===!0&&At.beginShadows();const rt=x.state.shadowsArray;Yt.render(rt,w,Y),wt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Z=S.transmissive;if(x.setupLights(),Y.isArrayCamera){const gt=Y.cameras;if(Z.length>0)for(let Lt=0,Ht=gt.length;Lt<Ht;Lt++){const Ot=gt[Lt];Rs(st,Z,w,Ot)}pe&&jt.render(w);for(let Lt=0,Ht=gt.length;Lt<Ht;Lt++){const Ot=gt[Lt];As(S,w,Ot,Ot.viewport)}}else Z.length>0&&Rs(st,Z,w,Y),pe&&jt.render(w),As(S,w,Y);I!==null&&N===0&&(se.updateMultisampleRenderTarget(I),se.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(C,w,Y),Ut.resetDefaultState(),A=-1,D=null,U.pop(),U.length>0?(x=U[U.length-1],wt===!0&&At.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function bs(w,Y,rt,st){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Et.intersectsSprite(w)){st&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const Lt=tt.update(w),Ht=w.material;Ht.visible&&S.push(w,Lt,Ht,rt,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Et.intersectsObject(w))){const Lt=tt.update(w),Ht=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Bt.copy(Lt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(Ht)){const Ot=Lt.groups;for(let Qt=0,ne=Ot.length;Qt<ne;Qt++){const Jt=Ot[Qt],me=Ht[Jt.materialIndex];me&&me.visible&&S.push(w,Lt,me,rt,Bt.z,Jt)}}else Ht.visible&&S.push(w,Lt,Ht,rt,Bt.z,null)}}const gt=w.children;for(let Lt=0,Ht=gt.length;Lt<Ht;Lt++)bs(gt[Lt],Y,rt,st)}function As(w,Y,rt,st){const Z=w.opaque,gt=w.transmissive,Lt=w.transparent;x.setupLightsView(rt),wt===!0&&At.setGlobalState(C.clippingPlanes,rt),st&&Wt.viewport(V.copy(st)),Z.length>0&&zr(Z,Y,rt),gt.length>0&&zr(gt,Y,rt),Lt.length>0&&zr(Lt,Y,rt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Rs(w,Y,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new Ms(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?cu:Va,minFilter:ps,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const gt=x.state.transmissionRenderTarget[st.id],Lt=st.viewport||V;gt.setSize(Lt.z*C.transmissionResolutionScale,Lt.w*C.transmissionResolutionScale);const Ht=C.getRenderTarget(),Ot=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(ut),ot=C.getClearAlpha(),ot<1&&C.setClearColor(16777215,.5),C.clear(),pe&&jt.render(rt);const ne=C.toneMapping;C.toneMapping=Cr;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),wt===!0&&At.setGlobalState(C.clippingPlanes,st),zr(w,rt,st),se.updateMultisampleRenderTarget(gt),se.updateRenderTargetMipmap(gt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Ue=0,Ve=Y.length;Ue<Ve;Ue++){const Le=Y[Ue],_e=Le.object,Gt=Le.geometry,qe=Le.material,be=Le.group;if(qe.side===Ia&&_e.layers.test(st.layers)){const wn=qe.side;qe.side=ti,qe.needsUpdate=!0,jo(_e,rt,st,Gt,qe,be),qe.side=wn,qe.needsUpdate=!0,me=!0}}me===!0&&(se.updateMultisampleRenderTarget(gt),se.updateRenderTargetMipmap(gt))}C.setRenderTarget(Ht,Ot,Qt),C.setClearColor(ut,ot),Jt!==void 0&&(st.viewport=Jt),C.toneMapping=ne}function zr(w,Y,rt){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,gt=w.length;Z<gt;Z++){const Lt=w[Z],Ht=Lt.object,Ot=Lt.geometry,Qt=Lt.group;let ne=Lt.material;ne.allowOverride===!0&&st!==null&&(ne=st),Ht.layers.test(rt.layers)&&jo(Ht,Y,rt,Ot,ne,Qt)}}function jo(w,Y,rt,st,Z,gt){w.onBeforeRender(C,Y,rt,st,Z,gt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(C,Y,rt,st,w,gt),Z.transparent===!0&&Z.side===Ia&&Z.forceSinglePass===!1?(Z.side=ti,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,st,Z,w,gt),Z.side=Ur,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,st,Z,w,gt),Z.side=Ia):C.renderBufferDirect(rt,Y,st,Z,w,gt),w.onAfterRender(C,Y,rt,st,Z,gt)}function oi(w,Y,rt){Y.isScene!==!0&&(Y=Xt);const st=kt.get(w),Z=x.state.lights,gt=x.state.shadowsArray,Lt=Z.state.version,Ht=dt.getParameters(w,Z.state,gt,Y,rt),Ot=dt.getProgramCacheKey(Ht);let Qt=st.programs;st.environment=w.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(w.isMeshStandardMaterial?Qe:tn).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Qt===void 0&&(w.addEventListener("dispose",_t),Qt=new Map,st.programs=Qt);let ne=Qt.get(Ot);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===Lt)return Cn(w,Ht),ne}else Ht.uniforms=dt.getUniforms(w),w.onBeforeCompile(Ht,C),ne=dt.acquireProgram(Ht,Ot),Qt.set(Ot,ne),st.uniforms=Ht.uniforms;const Jt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Jt.clippingPlanes=At.uniform),Cn(w,Ht),st.needsLights=bf(w),st.lightsStateVersion=Lt,st.needsLights&&(Jt.ambientLightColor.value=Z.state.ambient,Jt.lightProbe.value=Z.state.probe,Jt.directionalLights.value=Z.state.directional,Jt.directionalLightShadows.value=Z.state.directionalShadow,Jt.spotLights.value=Z.state.spot,Jt.spotLightShadows.value=Z.state.spotShadow,Jt.rectAreaLights.value=Z.state.rectArea,Jt.ltc_1.value=Z.state.rectAreaLTC1,Jt.ltc_2.value=Z.state.rectAreaLTC2,Jt.pointLights.value=Z.state.point,Jt.pointLightShadows.value=Z.state.pointShadow,Jt.hemisphereLights.value=Z.state.hemi,Jt.directionalShadowMap.value=Z.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Jt.spotShadowMap.value=Z.state.spotShadowMap,Jt.spotLightMatrix.value=Z.state.spotLightMatrix,Jt.spotLightMap.value=Z.state.spotLightMap,Jt.pointShadowMap.value=Z.state.pointShadowMap,Jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function hn(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=rf.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Cn(w,Y){const rt=kt.get(w);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Ya(w,Y,rt,st,Z){Y.isScene!==!0&&(Y=Xt),se.resetTextureUnits();const gt=Y.fog,Lt=st.isMeshStandardMaterial?Y.environment:null,Ht=I===null?C.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Bo,Ot=(st.isMeshStandardMaterial?Qe:tn).get(st.envMap||Lt),Qt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ne=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Jt=!!rt.morphAttributes.position,me=!!rt.morphAttributes.normal,Ue=!!rt.morphAttributes.color;let Ve=Cr;st.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ve=C.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_e=Le!==void 0?Le.length:0,Gt=kt.get(st),qe=x.state.lights;if(wt===!0&&(at===!0||w!==D)){const Sn=w===D&&st.id===A;At.setState(st,w,Sn)}let be=!1;st.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==qe.state.version||Gt.outputColorSpace!==Ht||Z.isBatchedMesh&&Gt.batching===!1||!Z.isBatchedMesh&&Gt.batching===!0||Z.isBatchedMesh&&Gt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Gt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Gt.instancing===!1||!Z.isInstancedMesh&&Gt.instancing===!0||Z.isSkinnedMesh&&Gt.skinning===!1||!Z.isSkinnedMesh&&Gt.skinning===!0||Z.isInstancedMesh&&Gt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Gt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Gt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Gt.instancingMorph===!1&&Z.morphTexture!==null||Gt.envMap!==Ot||st.fog===!0&&Gt.fog!==gt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==At.numPlanes||Gt.numIntersection!==At.numIntersection)||Gt.vertexAlphas!==Qt||Gt.vertexTangents!==ne||Gt.morphTargets!==Jt||Gt.morphNormals!==me||Gt.morphColors!==Ue||Gt.toneMapping!==Ve||Gt.morphTargetsCount!==_e)&&(be=!0):(be=!0,Gt.__version=st.version);let wn=Gt.currentProgram;be===!0&&(wn=oi(st,Y,Z));let fa=!1,Tn=!1,Fr=!1;const xe=wn.getUniforms(),Pn=Gt.uniforms;if(Wt.useProgram(wn.program)&&(fa=!0,Tn=!0,Fr=!0),st.id!==A&&(A=st.id,Tn=!0),fa||D!==w){Wt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(G,"projectionMatrix",w.projectionMatrix),xe.setValue(G,"viewMatrix",w.matrixWorldInverse);const rn=xe.map.cameraPosition;rn!==void 0&&rn.setValue(G,Dt.setFromMatrixPosition(w.matrixWorld)),te.logarithmicDepthBuffer&&xe.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&xe.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Tn=!0,Fr=!0)}if(Z.isSkinnedMesh){xe.setOptional(G,Z,"bindMatrix"),xe.setOptional(G,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),xe.setValue(G,"boneTexture",Sn.boneTexture,se))}Z.isBatchedMesh&&(xe.setOptional(G,Z,"batchingTexture"),xe.setValue(G,"batchingTexture",Z._matricesTexture,se),xe.setOptional(G,Z,"batchingIdTexture"),xe.setValue(G,"batchingIdTexture",Z._indirectTexture,se),xe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xe.setValue(G,"batchingColorTexture",Z._colorsTexture,se));const Vn=rt.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Tt.update(Z,rt,wn),(Tn||Gt.receiveShadow!==Z.receiveShadow)&&(Gt.receiveShadow=Z.receiveShadow,xe.setValue(G,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Pn.envMap.value=Ot,Pn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Pn.envMapIntensity.value=Y.environmentIntensity),Tn&&(xe.setValue(G,"toneMappingExposure",C.toneMappingExposure),Gt.needsLights&&Zo(Pn,Fr),gt&&st.fog===!0&&St.refreshFogUniforms(Pn,gt),St.refreshMaterialUniforms(Pn,st,q,W,x.state.transmissionRenderTarget[w.id]),rf.upload(G,hn(Gt),Pn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(rf.upload(G,hn(Gt),Pn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&xe.setValue(G,"center",Z.center),xe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),xe.setValue(G,"normalMatrix",Z.normalMatrix),xe.setValue(G,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Sn=st.uniformsGroups;for(let rn=0,Cs=Sn.length;rn<Cs;rn++){const Ji=Sn[rn];le.update(Ji,wn),le.bind(Ji,wn)}}return wn}function Zo(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function bf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,Y,rt){const st=kt.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),kt.get(w.texture).__webglTexture=Y,kt.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const rt=kt.get(w);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Af=G.createFramebuffer();this.setRenderTarget=function(w,Y=0,rt=0){I=w,P=Y,N=rt;let st=!0,Z=null,gt=!1,Lt=!1;if(w){const Ot=kt.get(w);if(Ot.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(w);else if(Ot.__hasExternalTextures)se.rebindTextures(w,kt.get(w.texture).__webglTexture,kt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Jt=w.depthTexture;if(Ot.__boundDepthTexture!==Jt){if(Jt!==null&&kt.has(Jt)&&(w.width!==Jt.image.width||w.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(w)}}const Qt=w.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Lt=!0);const ne=kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?Z=ne[Y][rt]:Z=ne[Y],gt=!0):w.samples>0&&se.useMultisampledRTT(w)===!1?Z=kt.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?Z=ne[rt]:Z=ne,V.copy(w.viewport),K.copy(w.scissor),et=w.scissorTest}else V.copy(B).multiplyScalar(q).floor(),K.copy($).multiplyScalar(q).floor(),et=xt;if(rt!==0&&(Z=Af),Wt.bindFramebuffer(G.FRAMEBUFFER,Z)&&st&&Wt.drawBuffers(w,Z),Wt.viewport(V),Wt.scissor(K),Wt.setScissorTest(et),gt){const Ot=kt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,rt)}else if(Lt){const Ot=Y;for(let Qt=0;Qt<w.textures.length;Qt++){const ne=kt.get(w.textures[Qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,rt,Ot)}}else if(w!==null&&rt!==0){const Ot=kt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,rt)}A=-1},this.readRenderTargetPixels=function(w,Y,rt,st,Z,gt,Lt,Ht=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Wt.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const Qt=w.textures[Ht],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-st&&rt>=0&&rt<=w.height-Z&&(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ht),G.readPixels(Y,rt,st,Z,Pt.convert(ne),Pt.convert(Jt),gt))}finally{const Qt=I!==null?kt.get(I).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,rt,st,Z,gt,Lt,Ht=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(Y>=0&&Y<=w.width-st&&rt>=0&&rt<=w.height-Z){Wt.bindFramebuffer(G.FRAMEBUFFER,Ot);const Qt=w.textures[Ht],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,me),G.bufferData(G.PIXEL_PACK_BUFFER,gt.byteLength,G.STREAM_READ),w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ht),G.readPixels(Y,rt,st,Z,Pt.convert(ne),Pt.convert(Jt),0);const Ue=I!==null?kt.get(I).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,Ue);const Ve=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await r1(G,Ve,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,me),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,gt),G.deleteBuffer(me),G.deleteSync(Ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,rt=0){const st=Math.pow(2,-rt),Z=Math.floor(w.image.width*st),gt=Math.floor(w.image.height*st),Lt=Y!==null?Y.x:0,Ht=Y!==null?Y.y:0;se.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Lt,Ht,Z,gt),Wt.unbindTexture()};const vu=G.createFramebuffer(),Br=G.createFramebuffer();this.copyTextureToTexture=function(w,Y,rt=null,st=null,Z=0,gt=null){gt===null&&(Z!==0?(nu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=Z,Z=0):gt=0);let Lt,Ht,Ot,Qt,ne,Jt,me,Ue,Ve;const Le=w.isCompressedTexture?w.mipmaps[gt]:w.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Ht=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,ne=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const Vn=Math.pow(2,-Z);Lt=Math.floor(Le.width*Vn),Ht=Math.floor(Le.height*Vn),w.isDataArrayTexture?Ot=Le.depth:w.isData3DTexture?Ot=Math.floor(Le.depth*Vn):Ot=1,Qt=0,ne=0,Jt=0}st!==null?(me=st.x,Ue=st.y,Ve=st.z):(me=0,Ue=0,Ve=0);const _e=Pt.convert(Y.format),Gt=Pt.convert(Y.type);let qe;Y.isData3DTexture?(se.setTexture3D(Y,0),qe=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),qe=G.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),qe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const be=G.getParameter(G.UNPACK_ROW_LENGTH),wn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),fa=G.getParameter(G.UNPACK_SKIP_PIXELS),Tn=G.getParameter(G.UNPACK_SKIP_ROWS),Fr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt);const xe=w.isDataArrayTexture||w.isData3DTexture,Pn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Vn=kt.get(w),Sn=kt.get(Y),rn=kt.get(Vn.__renderTarget),Cs=kt.get(Sn.__renderTarget);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,rn.__webglFramebuffer),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Ji=0;Ji<Ot;Ji++)xe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(w).__webglTexture,Z,Jt+Ji),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(Y).__webglTexture,gt,Ve+Ji)),G.blitFramebuffer(Qt,ne,Lt,Ht,me,Ue,Lt,Ht,G.DEPTH_BUFFER_BIT,G.NEAREST);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||kt.has(w)){const Vn=kt.get(w),Sn=kt.get(Y);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,vu),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Br);for(let rn=0;rn<Ot;rn++)xe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vn.__webglTexture,Z,Jt+rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vn.__webglTexture,Z),Pn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Sn.__webglTexture,gt,Ve+rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Sn.__webglTexture,gt),Z!==0?G.blitFramebuffer(Qt,ne,Lt,Ht,me,Ue,Lt,Ht,G.COLOR_BUFFER_BIT,G.NEAREST):Pn?G.copyTexSubImage3D(qe,gt,me,Ue,Ve+rn,Qt,ne,Lt,Ht):G.copyTexSubImage2D(qe,gt,me,Ue,Qt,ne,Lt,Ht);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(qe,gt,me,Ue,Ve,Lt,Ht,Ot,_e,Gt,Le.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,gt,me,Ue,Ve,Lt,Ht,Ot,_e,Le.data):G.texSubImage3D(qe,gt,me,Ue,Ve,Lt,Ht,Ot,_e,Gt,Le):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,gt,me,Ue,Lt,Ht,_e,Gt,Le.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,gt,me,Ue,Le.width,Le.height,_e,Le.data):G.texSubImage2D(G.TEXTURE_2D,gt,me,Ue,Lt,Ht,_e,Gt,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,be),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,fa),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fr),gt===0&&Y.generateMipmaps&&G.generateMipmap(qe),Wt.unbindTexture()},this.initRenderTarget=function(w){kt.get(w).__webglFramebuffer===void 0&&se.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?se.setTextureCube(w,0):w.isData3DTexture?se.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?se.setTexture2DArray(w,0):se.setTexture2D(w,0),Wt.unbindTexture()},this.resetState=function(){P=0,N=0,I=null,Wt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}function za(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function JS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},qm,On,Ke,zi=1e8,We=1/zi,gm=Math.PI*2,T2=gm/4,b2=0,$S=Math.sqrt,A2=Math.cos,R2=Math.sin,Rn=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},Xa=function(t){return typeof t=="number"},Ym=function(t){return typeof t>"u"},ca=function(t){return typeof t=="object"},ni=function(t){return t!==!1},jm=function(){return typeof window<"u"},$c=function(t){return an(t)||Rn(t)},ty=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,vm=/(?:-?\.?\d|\.)+/gi,ey=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ny=/[+-]=-?[.\d]+/,iy=/[^,'"\[\]\s]+/gi,C2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,aa,xm,Zm,yi={},ff={},ay,ry=function(t){return(ff=Ho(t,yi))&&si},Km=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},iu=function(t,n){return!n&&console.warn(t)},sy=function(t,n){return t&&(yi[t]=n)&&ff&&(ff[t]=n)||yi},au=function(){return 0},w2={suppressEvents:!0,isStart:!0,kill:!1},sf={suppressEvents:!0,kill:!1},D2={suppressEvents:!0},Qm={},wr=[],Sm={},oy,gi={},vp={},eS=30,of=[],Jm="",$m=function(t){var n=t[0],a,s;if(ca(n)||an(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=of.length;s--&&!of[s].targetTest(n););a=of[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Uy(t[s],a)))||t.splice(s,1);return t},gs=function(t){return t._gsap||$m(Bi(t))[0]._gsap},ly=function(t,n,a){return(a=t[n])&&an(a)?t[n]():Ym(a)&&t.getAttribute&&t.getAttribute(n)||a},ii=function(t,n){return(t=t.split(",")).forEach(n)||t},ln=function(t){return Math.round(t*1e5)/1e5||0},xn=function(t){return Math.round(t*1e7)/1e7||0},Uo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},U2=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},hf=function(){var t=wr.length,n=wr.slice(0),a,s;for(Sm={},wr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},t_=function(t){return!!(t._initted||t._startAt||t.add)},uy=function(t,n,a,s){wr.length&&!On&&hf(),t.render(n,a,!!(On&&n<0&&t_(t))),wr.length&&!On&&hf()},cy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(iy).length<2?n:Rn(t)?t.trim():t},fy=function(t){return t},Mi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},L2=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Ho=function(t,n){for(var a in n)t[a]=n[a];return t},nS=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=ca(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},df=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},jl=function(t){var n=t.parent||Je,a=t.keyframes?L2(Hn(t.keyframes)):Mi;if(ni(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},N2=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},hy=function(t,n,a,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},Mf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},Nr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},vs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},O2=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},ym=function(t,n,a,s){return t._startAt&&(On?t._startAt.revert(sf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},P2=function o(t){return!t||t._ts&&o(t.parent)},iS=function(t){return t._repeat?Go(t._tTime,t=t.duration()+t._rDelay)*t:0},Go=function(t,n){var a=Math.floor(t=xn(t/n));return t&&a===t?a-1:a},pf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Ef=function(t){return t._end=xn(t._start+(t._tDur/Math.abs(t._ts||t._rts||We)||0))},Tf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=xn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Ef(t),a._dirty||vs(a,t)),t},dy=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=pf(t.rawTime(),n),(!n._dur||gu(0,n.totalDuration(),a)-n._tTime>We)&&n.render(a,!0)),vs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-We}},sa=function(t,n,a,s){return n.parent&&Nr(n),n._start=xn((Xa(a)?a:a||t!==Je?Ni(t,a,n):t._time)+n._delay),n._end=xn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),hy(t,n,"_first","_last",t._sort?"_start":0),Mm(n)||(t._recent=n),s||dy(t,n),t._ts<0&&Tf(t,t._tTime),t},py=function(t,n){return(yi.ScrollTrigger||Km("scrollTrigger",n))&&yi.ScrollTrigger.create(n,t)},my=function(t,n,a,s,l){if(n_(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!On&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&oy!==vi.frame)return wr.push(t),t._lazy=[l,s],1},z2=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Mm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},B2=function(t,n,a,s){var l=t.ratio,c=n<0||!n&&(!t._start&&z2(t)&&!(!t._initted&&Mm(t))||(t._ts<0||t._dp._ts<0)&&!Mm(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=gu(0,t._tDur,n),_=Go(p,f),t._yoyo&&_&1&&(c=1-c),_!==Go(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||On||s||t._zTime===We||!n&&t._zTime){if(!t._initted&&my(t,n,s,a,p))return;for(g=t._zTime,t._zTime=n||(a?We:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&ym(t,n,a,!0),t._onUpdate&&!a&&xi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&xi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Nr(t,1),!a&&!On&&(xi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},F2=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Vo=function(t,n,a,s){var l=t._repeat,c=xn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:xn(c*(l+1)+t._rDelay*l):c,f>0&&!s&&Tf(t,t._tTime=t._tDur*f),t.parent&&Ef(t),a||vs(t.parent,t),t},aS=function(t){return t instanceof Wn?vs(t):Vo(t,t._dur)},I2={_start:0,endTime:au,totalDuration:au},Ni=function o(t,n,a){var s=t.labels,l=t._recent||I2,c=t.duration()>=zi?l.endTime(!1):t._dur,f,p,d;return Rn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Hn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},Zl=function(t,n,a){var s=Xa(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ni(p.vars.inherit)&&p.parent;c.immediateRender=ni(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new vn(n[0],c,n[l+1])},Pr=function(t,n){return t||t===0?n(t):n},gu=function(t,n,a){return a<t?t:a>n?n:a},In=function(t,n){return!Rn(t)||!(n=C2.exec(t))?"":n[1]},H2=function(t,n,a){return Pr(a,function(s){return gu(t,n,s)})},Em=[].slice,_y=function(t,n){return t&&ca(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ca(t[0]))&&!t.nodeType&&t!==aa},G2=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var l;return Rn(s)&&!n||_y(s,1)?(l=a).push.apply(l,Bi(s)):a.push(s)})||a},Bi=function(t,n,a){return Ke&&!n&&Ke.selector?Ke.selector(t):Rn(t)&&!a&&(xm||!ko())?Em.call((n||Zm).querySelectorAll(t),0):Hn(t)?G2(t,a):_y(t)?Em.call(t,0):t?[t]:[]},Tm=function(t){return t=Bi(t)[0]||iu("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Bi(n,a.querySelectorAll?a:a===t?iu("Invalid scope")||Zm.createElement("div"):t)}},gy=function(t){return t.sort(function(){return .5-Math.random()})},vy=function(t){if(an(t))return t;var n=ca(t)?t:{each:t},a=xs(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,g=s;return Rn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],g=s[1]),function(v,y,T){var M=(T||n).length,S=c[M],x,L,U,C,O,P,N,I,A;if(!S){if(A=n.grid==="auto"?0:(n.grid||[1,zi])[1],!A){for(N=-zi;N<(N=T[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(S=c[M]=[],x=p?Math.min(A,M)*_-.5:s%A,L=A===zi?0:p?M*g/A-.5:s/A|0,N=0,I=zi,P=0;P<M;P++)U=P%A-x,C=L-(P/A|0),S[P]=O=d?Math.abs(d==="y"?C:U):$S(U*U+C*C),O>N&&(N=O),O<I&&(I=O);s==="random"&&gy(S),S.max=N-I,S.min=I,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(A>M?M-1:d?d==="y"?M/A:A:Math.max(A,M/A))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=In(n.amount||n.each)||0,a=a&&M<0?Cy(a):a}return M=(S[v]-S.min)/S.max||0,xn(S.b+(a?a(M):M)*S.v)+S.u}},bm=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=xn(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Xa(a)?0:In(a))}},xy=function(t,n){var a=Hn(t),s,l;return!a&&ca(t)&&(s=a=t.radius||zi,t.values?(t=Bi(t.values),(l=!Xa(t[0]))&&(s*=s)):t=bm(t.increment)),Pr(n,a?an(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=zi,_=0,g=t.length,v,y;g--;)l?(v=t[g].x-f,y=t[g].y-p,v=v*v+y*y):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!s||d<=s?t[_]:c,l||_===c||Xa(c)?_:_+In(c)}:bm(t))},Sy=function(t,n,a,s){return Pr(Hn(t)?!n:a===!0?!!(a=0):!s,function(){return Hn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},V2=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,c){return c(l)},s)}},k2=function(t,n){return function(a){return t(parseFloat(a))+(n||In(a))}},X2=function(t,n,a){return My(t,n,0,1,a)},yy=function(t,n,a){return Pr(a,function(s){return t[~~n(s)]})},W2=function o(t,n,a){var s=n-t;return Hn(t)?yy(t,o(0,t.length),n):Pr(a,function(l){return(s+(l-t)%s)%s+t})},q2=function o(t,n,a){var s=n-t,l=s*2;return Hn(t)?yy(t,o(0,t.length-1),n):Pr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},ru=function(t){for(var n=0,a="",s,l,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?iy:vm),a+=t.substr(n,s-n)+Sy(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},My=function(t,n,a,s,l){var c=n-t,f=s-a;return Pr(l,function(p){return a+((p-t)/c*f||0)})},Y2=function o(t,n,a,s){var l=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!l){var c=Rn(t),f={},p,d,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Hn(t)&&!Hn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,l=function(T){T*=g;var M=Math.min(v,~~T);return _[M](T-M)},a=n}else s||(t=Ho(Hn(t)?[]:{},t));if(!_){for(p in n)e_.call(f,t,p,"get",n[p]);l=function(T){return r_(T,f)||(c?t.p:t)}}}return Pr(a,l)},rS=function(t,n,a){var s=t.labels,l=zi,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},xi=function(t,n,a){var s=t.vars,l=s[n],c=Ke,f=t._ctx,p,d,_;if(l)return p=s[n+"Params"],d=s.callbackScope||t,a&&wr.length&&hf(),f&&(Ke=f),_=p?l.apply(d,p):l.call(d),Ke=c,_},ql=function(t){return Nr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!On),t.progress()<1&&xi(t,"onInterrupt"),t},Co,Ey=[],Ty=function(t){if(t)if(t=!t.name&&t.default||t,jm()||t.headless){var n=t.name,a=an(t),s=n&&!a&&t.init?function(){this._props=[]}:t,l={init:au,render:r_,add:e_,kill:uw,modifier:lw,rawVars:0},c={targetTest:0,get:0,getSetter:a_,aliases:{},register:0};if(ko(),t!==s){if(gi[n])return;Mi(s,Mi(df(t,l),c)),Ho(s.prototype,Ho(l,df(t,c))),gi[s.prop=n]=s,t.targetTest&&(of.push(s),Qm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}sy(n,s),t.register&&t.register(si,s,ai)}else Ey.push(t)},Xe=255,Yl={aqua:[0,Xe,Xe],lime:[0,Xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xe],navy:[0,0,128],white:[Xe,Xe,Xe],olive:[128,128,0],yellow:[Xe,Xe,0],orange:[Xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xe,0,0],pink:[Xe,192,203],cyan:[0,Xe,Xe],transparent:[Xe,Xe,Xe,0]},xp=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*Xe+.5|0},by=function(t,n,a){var s=t?Xa(t)?[t>>16,t>>8&Xe,t&Xe]:0:Yl.black,l,c,f,p,d,_,g,v,y,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Yl[t])s=Yl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Xe,s&Xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Xe,t&Xe]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(vm),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,s.length>3&&(s[3]*=1),s[0]=xp(p+1/3,l,c),s[1]=xp(p,l,c),s[2]=xp(p-1/3,l,c);else if(~t.indexOf("="))return s=t.match(ey),a&&s.length<4&&(s[3]=1),s}else s=t.match(vm)||Yl.transparent;s=s.map(Number)}return n&&!T&&(l=s[0]/Xe,c=s[1]/Xe,f=s[2]/Xe,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?p=d=0:(y=g-v,d=_>.5?y/(2-g-v):y/(g+v),p=g===l?(c-f)/y+(c<f?6:0):g===c?(f-l)/y+2:(l-c)/y+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},Ay=function(t){var n=[],a=[],s=-1;return t.split(Dr).forEach(function(l){var c=l.match(Ro)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},sS=function(t,n,a){var s="",l=(t+s).match(Dr),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!l)return t;if(l=l.map(function(v){return(v=by(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=Ay(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Dr,"1").split(Ro),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(Dr),g=d.length-1;f<g;f++)s+=d[f]+l[f];return s+d[g]},Dr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Yl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),j2=/hsl[a]?\(/,Ry=function(t){var n=t.join(" "),a;if(Dr.lastIndex=0,Dr.test(n))return a=j2.test(n),t[1]=sS(t[1],a),t[0]=sS(t[0],a,Ay(t[1])),!0},su,vi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,l=1e3/240,c=l,f=[],p,d,_,g,v,y,T=function M(S){var x=o()-s,L=S===!0,U,C,O,P;if((x>t||x<0)&&(a+=x-n),s+=x,O=s-a,U=O-c,(U>0||L)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,c+=U+(U>=l?4:l-U),C=1),L||(p=d(M)),C)for(y=0;y<f.length;y++)f[y](O,v,P,S)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){ay&&(!xm&&jm()&&(aa=xm=window,Zm=aa.document||{},yi.gsap=si,(aa.gsapVersions||(aa.gsapVersions=[])).push(si.version),ry(ff||aa.GreenSockGlobals||!aa.gsap&&aa||{}),Ey.forEach(Ty)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(S){return setTimeout(S,c-g.time*1e3+1|0)},su=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),su=0,d=au},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,x,L){var U=x?function(C,O,P,N){S(C,O,P,N),g.remove(U)}:S;return g.remove(S),f[L?"unshift":"push"](U),ko(),U},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g})(),ko=function(){return!su&&vi.wake()},Ee={},Z2=/^[\d.\-M][\d.\-,\s]/,K2=/["']/g,Q2=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(K2,"").trim():+d,s=p.substr(f+1).trim();return n},J2=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},$2=function(t){var n=(t+"").split("("),a=Ee[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[Q2(n[1])]:J2(t).split(",").map(cy)):Ee._CE&&Z2.test(t)?Ee._CE("",t):a},Cy=function(t){return function(n){return 1-t(1-n)}},wy=function o(t,n){for(var a=t._first,s;a;)a instanceof Wn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},xs=function(t,n){return t&&(an(t)?t:Ee[t]||$2(t))||n},Ts=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},c;return ii(t,function(f){Ee[f]=yi[f]=l,Ee[c=f.toLowerCase()]=a;for(var p in l)Ee[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ee[f+"."+p]=l[p]}),l},Dy=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Sp=function o(t,n,a){var s=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/gm*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*R2((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:Dy(f);return l=gm/l,p.config=function(d,_){return o(t,d,_)},p},yp=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Dy(a);return s.config=function(l){return o(t,l)},s};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Ts(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;Ts("Elastic",Sp("in"),Sp("out"),Sp());(function(o,t){var n=1/t,a=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ts("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ts("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ts("Circ",function(o){return-($S(1-o*o)-1)});Ts("Sine",function(o){return o===1?1:-A2(o*T2)+1});Ts("Back",yp("in"),yp("out"),yp());Ee.SteppedEase=Ee.steps=yi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),l=n?1:0,c=1-We;return function(f){return((s*gu(0,c,f)|0)+l)*a}}};Io.ease=Ee["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Jm+=o+","+o+"Params,"});var Uy=function(t,n){this.id=b2++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:ly,this.set=n?n.getSetter:a_},ou=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Vo(this,+n.duration,1,1),this.data=n.data,Ke&&(this._ctx=Ke,Ke.data.push(this)),su||vi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(ko(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Tf(this,a),!l._dp||l.parent||dy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&sa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===We||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),uy(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+iS(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+iS(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?Go(this._tTime,l)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-We?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?pf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-We?0:this._rts,this.totalTime(gu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Ef(this),O2(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==We&&(this._tTime-=We)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&sa(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ni(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=D2);var s=On;return On=a,t_(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),On=s,this},t.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,aS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,aS(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Ni(this,a),ni(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ni(s)),this._dur||(this._zTime=-We),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-We:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-We,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-We)},t.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(l){var c=an(a)?a:fy,f=function(){var d=s.then;s.then=null,an(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=d),l(c),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){ql(this)},o})();Mi(ou.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-We,_prom:0,_ps:!1,_rts:1});var Wn=(function(o){JS(t,o);function t(a,s){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ni(a.sortChildren),Je&&sa(a.parent||Je,za(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&py(za(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return Zl(0,arguments,this),this},n.from=function(s,l,c){return Zl(1,arguments,this),this},n.fromTo=function(s,l,c,f){return Zl(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,jl(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new vn(s,l,Ni(this,c),1),this},n.call=function(s,l,c){return sa(this,vn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new vn(s,c,Ni(this,p)),this},n.staggerFrom=function(s,l,c,f,p,d,_){return c.runBackwards=1,jl(c).immediateRender=ni(c.immediateRender),this.staggerTo(s,l,c,f,p,d,_)},n.staggerFromTo=function(s,l,c,f,p,d,_,g){return f.startAt=c,jl(f).immediateRender=ni(f.immediateRender),this.staggerTo(s,l,f,p,d,_,g)},n.render=function(s,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:xn(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,y,T,M,S,x,L,U,C,O,P,N;if(this!==Je&&_>p&&s>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),v=_,C=this._start,U=this._ts,x=!U,g&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=xn(_%S),_===p?(M=this._repeat,v=d):(O=xn(_/S),M=~~O,M&&M===O&&(v=d,M--),v>d&&(v=d)),O=Go(this._tTime,S),!f&&this._tTime&&O!==M&&this._tTime-O*S-this._dur<=0&&(O=M),P&&M&1&&(v=d-v,N=1),M!==O&&!this._lock){var I=P&&O&1,A=I===(P&&M&1);if(M<O&&(I=!I),f=I?0:_%d?d:_,this._lock=1,this.render(f||(N?0:xn(M*S)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,A&&(this._lock=2,f=I?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;wy(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=F2(this,xn(f),xn(v)),L&&(_-=v-(v=L._start))),this._tTime=_,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&!l&&!O&&(xi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){L=0,T&&(_+=this._zTime=-We);break}}y=T}else{y=this._last;for(var D=s<0?s:v;y;){if(T=y._prev,(y._act||D<=y._end)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(D-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(D-y._start)*y._ts,l,c||On&&t_(y)),v!==this._time||!this._ts&&!x){L=0,T&&(_+=this._zTime=D?-We:We);break}}y=T}}if(L&&!l&&(this.pause(),L.render(v>=f?0:-We)._zTime=v>=f?1:-1,this._ts))return this._start=C,Ef(this),this.render(s,l,c);this._onUpdate&&!l&&xi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Nr(this,1),!l&&!(s<0&&!f)&&(_||f||!p)&&(xi(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(Xa(l)||(l=Ni(this,l,s)),!(s instanceof ou)){if(Hn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Rn(s))return this.addLabel(s,l);if(an(s))s=vn.delayedCall(0,s);else return this}return this!==s?sa(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-zi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof vn?l&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return Rn(s)?this.removeLabel(s):an(s)?this.killTweensOf(s):(s.parent===this&&Mf(this,s),s===this._recent&&(this._recent=this._last),vs(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xn(vi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Ni(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=vn.delayedCall(0,l||au,c);return f.data="isPause",this._hasPause=1,sa(this,f,Ni(this,s))},n.removePause=function(s){var l=this._first;for(s=Ni(this,s);l;)l._start===s&&l.data==="isPause"&&Nr(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Tr!==f[p]&&f[p].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=Bi(s),p=this._first,d=Xa(l),_;p;)p instanceof vn?U2(p._targets,f)&&(d?(!Tr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Ni(c,s),p=l,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,y,T=vn.to(c,Mi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||We,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());T._dur!==S&&Vo(T,S,0,1).render(T._time,!0,!0),y=1}_&&_.apply(T,g||[])}},l));return v?T.render(0):T},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,Mi({startAt:{time:Ni(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),rS(this,Ni(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),rS(this,Ni(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+We)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,d;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=s);return vs(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),vs(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,p=zi,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,sa(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Vo(c,c===Je&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Je._ts&&(uy(Je,pf(s,Je)),oy=vi.frame),vi.frame>=eS){eS+=Si.autoSleep||120;var l=Je._first;if((!l||!l._ts)&&Si.autoSleep&&vi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||vi.sleep()}}},t})(ou);Mi(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tw=function(t,n,a,s,l,c,f){var p=new ai(this._pt,t,n,0,1,By,null,l),d=0,_=0,g,v,y,T,M,S,x,L;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=ru(s)),c&&(L=[a,s],c(L,t,n),a=L[0],s=L[1]),v=a.match(gp)||[];g=gp.exec(s);)T=g[0],M=s.substring(d,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),T!==v[_++]&&(S=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:S,c:T.charAt(1)==="="?Uo(S,T)-S:parseFloat(T)-S,m:y&&y<4?Math.round:0},d=gp.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(ny.test(s)||x)&&(p.e=0),this._pt=p,p},e_=function(t,n,a,s,l,c,f,p,d,_){an(s)&&(s=s(l||0,t,c));var g=t[n],v=a!=="get"?a:an(g)?d?t[n.indexOf("set")||!an(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,y=an(g)?d?rw:Py:i_,T;if(Rn(s)&&(~s.indexOf("random(")&&(s=ru(s)),s.charAt(1)==="="&&(T=Uo(v,s)+(In(v)||0),(T||T===0)&&(s=T))),!_||v!==s||Am)return!isNaN(v*s)&&s!==""?(T=new ai(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?ow:zy,0,y),d&&(T.fp=d),f&&T.modifier(f,this,t),this._pt=T):(!g&&!(n in t)&&Km(n,s),tw.call(this,t,n,v,s,y,p||Si.stringFilter,d))},ew=function(t,n,a,s,l){if(an(t)&&(t=Kl(t,l,n,a,s)),!ca(t)||t.style&&t.nodeType||Hn(t)||ty(t))return Rn(t)?Kl(t,l,n,a,s):t;var c={},f;for(f in t)c[f]=Kl(t[f],l,n,a,s);return c},Ly=function(t,n,a,s,l,c){var f,p,d,_;if(gi[t]&&(f=new gi[t]).init(l,f.rawVars?n[t]:ew(n[t],s,l,c,a),a,s,c)!==!1&&(a._pt=p=new ai(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==Co))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Tr,Am,n_=function o(t,n,a){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,T=t._dur,M=t._startAt,S=t._targets,x=t.parent,L=x&&x.data==="nested"?x.vars.targets:S,U=t._overwrite==="auto"&&!qm,C=t.timeline,O,P,N,I,A,D,V,K,et,ut,ot,F,W;if(C&&(!v||!l)&&(l="none"),t._ease=xs(l,Io.ease),t._yEase=g?Cy(xs(g===!0?l:g,Io.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!C&&!!s.runBackwards,!C||v&&!s.stagger){if(K=S[0]?gs(S[0]).harness:0,F=K&&s[K.prop],O=df(s,Qm),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!y?M.render(-1,!0):M.revert(_&&T?sf:w2),M._lazy=0),c){if(Nr(t._startAt=vn.set(S,Mi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ni(p),startAt:null,delay:0,onUpdate:d&&function(){return xi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On||!f&&!y)&&t._startAt.revert(sf),f&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!M){if(n&&(f=!1),N=Mi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ni(p),immediateRender:f,stagger:0,parent:x},O),F&&(N[K.prop]=F),Nr(t._startAt=vn.set(S,N)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On?t._startAt.revert(sf):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,We,We);else if(!n)return}for(t._pt=t._ptCache=0,p=T&&ni(p)||p&&!T,P=0;P<S.length;P++){if(A=S[P],V=A._gsap||$m(S)[P]._gsap,t._ptLookup[P]=ut={},Sm[V.id]&&wr.length&&hf(),ot=L===S?P:L.indexOf(A),K&&(et=new K).init(A,F||O,t,ot,L)!==!1&&(t._pt=I=new ai(t._pt,A,et.name,0,1,et.render,et,0,et.priority),et._props.forEach(function(q){ut[q]=I}),et.priority&&(D=1)),!K||F)for(N in O)gi[N]&&(et=Ly(N,O,t,ot,A,L))?et.priority&&(D=1):ut[N]=I=e_.call(t,A,N,"get",O[N],ot,L,0,s.stringFilter);t._op&&t._op[P]&&t.kill(A,t._op[P]),U&&t._pt&&(Tr=t,Je.killTweensOf(A,ut,t.globalTime(n)),W=!t.parent,Tr=0),t._pt&&p&&(Sm[V.id]=1)}D&&Fy(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!W,v&&n<=0&&C.render(zi,!0,!0)},nw=function(t,n,a,s,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,y;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Am=1,t.vars[n]="+=0",n_(t,f),Am=0,p?iu(n+" not eligible for reset"):1;d.push(_)}for(y=d.length;y--;)g=d[y],_=g._pt||g,_.s=(s||s===0)&&!l?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=ln(a)+In(g.e)),g.b&&(g.b=_.s+In(g.b))},iw=function(t,n){var a=t[0]?gs(t[0]).harness:0,s=a&&a.aliases,l,c,f,p;if(!s)return n;l=Ho({},n);for(c in s)if(c in l)for(p=s[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},aw=function(t,n,a,s){var l=n.ease||s||"power1.inOut",c,f;if(Hn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},Kl=function(t,n,a,s,l){return an(t)?t.call(n,a,s,l):Rn(t)&&~t.indexOf("random(")?ru(t):t},Ny=Jm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Oy={};ii(Ny+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Oy[o]=1});var vn=(function(o){JS(t,o);function t(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:jl(s))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,y=p.overwrite,T=p.keyframes,M=p.defaults,S=p.scrollTrigger,x=p.yoyoEase,L=s.parent||Je,U=(Hn(a)||ty(a)?Xa(a[0]):"length"in s)?[a]:Bi(a),C,O,P,N,I,A,D,V;if(f._targets=U.length?$m(U):iu("GSAP target "+a+" not found. https://gsap.com",!Si.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,T||v||$c(d)||$c(_)){if(s=f.vars,C=f.timeline=new Wn({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:U}),C.kill(),C.parent=C._dp=za(f),C._start=0,v||$c(d)||$c(_)){if(N=U.length,D=v&&vy(v),ca(v))for(I in v)~Ny.indexOf(I)&&(V||(V={}),V[I]=v[I]);for(O=0;O<N;O++)P=df(s,Oy),P.stagger=0,x&&(P.yoyoEase=x),V&&Ho(P,V),A=U[O],P.duration=+Kl(d,za(f),O,A,U),P.delay=(+Kl(_,za(f),O,A,U)||0)-f._delay,!v&&N===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),C.to(A,P,D?D(O,A,U):0),C._ease=Ee.none;C.duration()?d=_=0:f.timeline=0}else if(T){jl(Mi(C.vars.defaults,{ease:"none"})),C._ease=xs(T.ease||s.ease||"none");var K=0,et,ut,ot;if(Hn(T))T.forEach(function(F){return C.to(U,F,">")}),C.duration();else{P={};for(I in T)I==="ease"||I==="easeEach"||aw(I,T[I],P,T.easeEach);for(I in P)for(et=P[I].sort(function(F,W){return F.t-W.t}),K=0,O=0;O<et.length;O++)ut=et[O],ot={ease:ut.e,duration:(ut.t-(O?et[O-1].t:0))/100*d},ot[I]=ut.v,C.to(U,ot,K),K+=ot.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return y===!0&&!qm&&(Tr=za(f),Je.killTweensOf(U),Tr=0),sa(L,za(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!T&&f._start===xn(L._time)&&ni(g)&&P2(za(f))&&L.data!=="nested")&&(f._tTime=-We,f.render(Math.max(0,-_)||0)),S&&py(za(f),S),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,g=s>p-We&&!_?p:s<We?0:s,v,y,T,M,S,x,L,U,C;if(!d)B2(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,U=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,l,c);if(v=xn(g%M),g===p?(T=this._repeat,v=d):(S=xn(g/M),T=~~S,T&&T===S?(v=d,T--):v>d&&(v=d)),x=this._yoyo&&T&1,x&&(C=this._yEase,v=d-v),S=Go(this._tTime,M),v===f&&!c&&this._initted&&T===S)return this._tTime=g,this;T!==S&&(U&&this._yEase&&wy(U,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(xn(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(my(this,_?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==S))return this;if(d!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(C||this._ease)(v/d),this._from&&(this.ratio=L=1-L),!f&&g&&!l&&!S&&(xi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(L,y.d),y=y._next;U&&U.render(s<0?s:U._dur*U._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(_&&ym(this,s,l,c),xi(this,"onUpdate")),this._repeat&&T!==S&&this.vars.onRepeat&&!l&&this.parent&&xi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&ym(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Nr(this,1),!l&&!(_&&!f)&&(g||f||x)&&(xi(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,p){su||vi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||n_(this,d),_=this._ease(d/this._dur),nw(this,s,l,c,f,_,d,p)?this.resetTo(s,l,c,f,1):(Tf(this,0),this.parent||hy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?ql(this):this.scrollTrigger&&this.scrollTrigger.kill(!!On),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Tr&&Tr.vars.overwrite!==!0)._first||ql(this),this.parent&&c!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?Bi(s):f,d=this._ptLookup,_=this._pt,g,v,y,T,M,S,x;if((!l||l==="all")&&N2(f,p))return l==="all"&&(this._pt=0),ql(this);for(g=this._op=this._op||[],l!=="all"&&(Rn(l)&&(M={},ii(l,function(L){return M[L]=1}),l=M),l=iw(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],l==="all"?(g[x]=l,T=v,y={}):(y=g[x]=g[x]||{},T=l);for(M in T)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Mf(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&_&&ql(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return Zl(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return Zl(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return Je.killTweensOf(s,l,c)},t})(ou);Mi(vn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(o){vn[o]=function(){var t=new Wn,n=Em.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var i_=function(t,n,a){return t[n]=a},Py=function(t,n,a){return t[n](a)},rw=function(t,n,a,s){return t[n](s.fp,a)},sw=function(t,n,a){return t.setAttribute(n,a)},a_=function(t,n){return an(t[n])?Py:Ym(t[n])&&t.setAttribute?sw:i_},zy=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},ow=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},By=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},r_=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},lw=function(t,n,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,a),l=c},uw=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Mf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},cw=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},Fy=function(t){for(var n=t._pt,a,s,l,c;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=l},ai=(function(){function o(n,a,s,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||zy,this.d=p||this,this.set=d||i_,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=cw,this.m=a,this.mt=l,this.tween=s},o})();ii(Jm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Qm[o]=1});yi.TweenMax=yi.TweenLite=vn;yi.TimelineLite=yi.TimelineMax=Wn;Je=new Wn({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=Ry;var Ss=[],lf={},fw=[],oS=0,hw=0,Mp=function(t){return(lf[t]||fw).map(function(n){return n()})},Rm=function(){var t=Date.now(),n=[];t-oS>2&&(Mp("matchMediaInit"),Ss.forEach(function(a){var s=a.queries,l=a.conditions,c,f,p,d;for(f in s)c=aa.matchMedia(s[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),Mp("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),oS=t,Mp("matchMedia"))},Iy=(function(){function o(n,a){this.selector=a&&Tm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=hw++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,l){an(a)&&(l=s,s=a,a=an);var c=this,f=function(){var d=Ke,_=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=Tm(l)),Ke=c,g=s.apply(c,arguments),an(g)&&c._r.push(g),Ke=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===an?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=Ke;Ke=null,a(this),Ke=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof vn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Wn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof vn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ss.length;c--;)Ss[c].id===this.id&&Ss.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),dw=(function(){function o(n){this.contexts=[],this.scope=n,Ke&&Ke.data.push(this)}var t=o.prototype;return t.add=function(a,s,l){ca(a)||(a={matches:a});var c=new Iy(0,l||this.scope),f=c.conditions={},p,d,_;Ke&&!c.selector&&(c.selector=Ke.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=aa.matchMedia(a[d]),p&&(Ss.indexOf(c)<0&&Ss.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Rm):p.addEventListener("change",Rm)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),mf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return Ty(s)})},timeline:function(t){return new Wn(t)},getTweensOf:function(t,n){return Je.getTweensOf(t,n)},getProperty:function(t,n,a,s){Rn(t)&&(t=Bi(t)[0]);var l=gs(t||{}).get,c=a?fy:cy;return a==="native"&&(a=""),t&&(n?c((gi[n]&&gi[n].get||l)(t,n,a,s)):function(f,p,d){return c((gi[f]&&gi[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Bi(t),t.length>1){var s=t.map(function(_){return si.quickSetter(_,n,a)}),l=s.length;return function(_){for(var g=l;g--;)s[g](_)}}t=t[0]||{};var c=gi[n],f=gs(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;Co._pt=0,g.init(t,a?_+a:_,Co,0,[t]),g.render(1,g),Co._pt&&r_(1,Co)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,l=si.to(t,Mi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return Je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=xs(t.ease,Io.ease)),nS(Io,t||{})},config:function(t){return nS(Si,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!gi[f]&&!yi[f]&&iu(n+" effect requires "+f+" plugin.")}),vp[n]=function(f,p,d){return a(Bi(f),Mi(p||{},l),d)},c&&(Wn.prototype[n]=function(f,p,d){return this.add(vp[n](f,ca(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Ee[t]=xs(n)},parseEase:function(t,n){return arguments.length?xs(t,n):Ee},getById:function(t){return Je.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Wn(t),s,l;for(a.smoothChildTiming=ni(t.smoothChildTiming),Je.remove(a),a._dp=0,a._time=a._tTime=Je._time,s=Je._first;s;)l=s._next,(n||!(!s._dur&&s instanceof vn&&s.vars.onComplete===s._targets[0]))&&sa(a,s,s._start-s._delay),s=l;return sa(Je,a,0),a},context:function(t,n){return t?new Iy(t,n):Ke},matchMedia:function(t){return new dw(t)},matchMediaRefresh:function(){return Ss.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Rm()},addEventListener:function(t,n){var a=lf[t]||(lf[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=lf[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:W2,wrapYoyo:q2,distribute:vy,random:Sy,snap:xy,normalize:X2,getUnit:In,clamp:H2,splitColor:by,toArray:Bi,selector:Tm,mapRange:My,pipe:V2,unitize:k2,interpolate:Y2,shuffle:gy},install:ry,effects:vp,ticker:vi,updateRoot:Wn.updateRoot,plugins:gi,globalTimeline:Je,core:{PropTween:ai,globals:sy,Tween:vn,Timeline:Wn,Animation:ou,getCache:gs,_removeLinkedListItem:Mf,reverting:function(){return On},context:function(t){return t&&Ke&&(Ke.data.push(t),t._ctx=Ke),Ke},suppressOverwrites:function(t){return qm=t}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return mf[o]=vn[o]});vi.add(Wn.updateRoot);Co=mf.to({},{duration:0});var pw=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},mw=function(t,n){var a=t._targets,s,l,c;for(s in n)for(l=a.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=pw(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[l],s))},Ep=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var p,d;if(Rn(l)&&(p={},ii(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}mw(f,l)}}}},si=mf.registerPlugin({name:"attr",init:function(t,n,a,s,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)On?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Ep("roundProps",bm),Ep("modifiers"),Ep("snap",xy))||mf;vn.version=Wn.version=si.version="3.13.0";ay=1;jm()&&ko();Ee.Power0;Ee.Power1;Ee.Power2;Ee.Power3;Ee.Power4;Ee.Linear;Ee.Quad;Ee.Cubic;Ee.Quart;Ee.Quint;Ee.Strong;Ee.Elastic;Ee.Back;Ee.SteppedEase;Ee.Bounce;Ee.Sine;Ee.Expo;Ee.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lS,br,Lo,s_,ms,uS,o_,_w=function(){return typeof window<"u"},Wa={},cs=180/Math.PI,No=Math.PI/180,bo=Math.atan2,cS=1e8,l_=/([A-Z])/g,gw=/(left|right|width|margin|padding|x)/i,vw=/[\s,\(]\S/,ua={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},xw=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Sw=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},yw=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},Hy=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},Gy=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},Mw=function(t,n,a){return t.style[n]=a},Ew=function(t,n,a){return t.style.setProperty(n,a)},Tw=function(t,n,a){return t._gsap[n]=a},bw=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},Aw=function(t,n,a,s,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},Rw=function(t,n,a,s,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},$e="transform",ri=$e+"Origin",Cw=function o(t,n){var a=this,s=this.target,l=s.style,c=s._gsap;if(t in Wa&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ua[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Fa(s,f)}):this.tfm[t]=c.x?c[t]:Fa(s,t),t===ri&&(this.tfm.zOrigin=c.zOrigin);else return ua.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf($e)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,n,"")),t=$e}(l||n)&&this.props.push(t,n,l[t])},Vy=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ww=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(l_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=o_(),(!l||!l.isStart)&&!a[$e]&&(Vy(a),s.zOrigin&&a[ri]&&(a[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},ky=function(t,n){var a={target:t,props:[],revert:ww,save:Cw};return t._gsap||si.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},Xy,wm=function(t,n){var a=br.createElementNS?br.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):br.createElement(t);return a&&a.style?a:br.createElement(t)},Fi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(l_,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Xo(n)||n,1)||""},fS="O,Moz,ms,Ms,Webkit".split(","),Xo=function(t,n,a){var s=n||ms,l=s.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(fS[c]+t in l););return c<0?null:(c===3?"ms":c>=0?fS[c]:"")+t},Dm=function(){_w()&&window.document&&(lS=window,br=lS.document,Lo=br.documentElement,ms=wm("div")||{style:{}},wm("div"),$e=Xo($e),ri=$e+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xy=!!Xo("perspective"),o_=si.core.reverting,s_=1)},hS=function(t){var n=t.ownerSVGElement,a=wm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",a.appendChild(s),Lo.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),Lo.removeChild(a),l},dS=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},Wy=function(t){var n,a;try{n=t.getBBox()}catch{n=hS(t),a=1}return n&&(n.width||n.height)||a||(n=hS(t)),n&&!n.width&&!n.x&&!n.y?{x:+dS(t,["x","cx","x1"])||0,y:+dS(t,["y","cy","y1"])||0,width:0,height:0}:n},qy=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Wy(t))},Es=function(t,n){if(n){var a=t.style,s;n in Wa&&n!==ri&&(n=$e),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(l_,"-$1").toLowerCase())):a.removeAttribute(n)}},Ar=function(t,n,a,s,l,c){var f=new ai(t._pt,n,a,0,1,c?Gy:Hy);return t._pt=f,f.b=s,f.e=l,t._props.push(a),f},pS={deg:1,rad:1,turn:1},Dw={grid:1,flex:1},Or=function o(t,n,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=ms.style,p=gw.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",y=s==="%",T,M,S,x;if(s===c||!l||pS[s]||pS[c])return l;if(c!=="px"&&!v&&(l=o(t,n,a,"px")),x=t.getCTM&&qy(t),(y||c==="%")&&(Wa[n]||~n.indexOf("adius")))return T=x?t.getBBox()[p?"width":"height"]:t[_],ln(y?l/T*g:l/100*T);if(f[p?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===br||!M.appendChild)&&(M=br.body),S=M._gsap,S&&y&&S.width&&p&&S.time===vi.time&&!S.uncache)return ln(l/S.width*g);if(y&&(n==="height"||n==="width")){var L=t.style[n];t.style[n]=g+s,T=t[_],L?t.style[n]=L:Es(t,n)}else(y||c==="%")&&!Dw[Fi(M,"display")]&&(f.position=Fi(t,"position")),M===t&&(f.position="static"),M.appendChild(ms),T=ms[_],M.removeChild(ms),f.position="absolute";return p&&y&&(S=gs(M),S.time=vi.time,S.width=M[_]),ln(v?T*l/g:T&&l?g/T*l:0)},Fa=function(t,n,a,s){var l;return s_||Dm(),n in ua&&n!=="transform"&&(n=ua[n],~n.indexOf(",")&&(n=n.split(",")[0])),Wa[n]&&n!=="transform"?(l=uu(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:gf(Fi(t,ri))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=_f[n]&&_f[n](t,n,a)||Fi(t,n)||ly(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Or(t,n,l,a)+a:l},Uw=function(t,n,a,s){if(!a||a==="none"){var l=Xo(n,t,1),c=l&&Fi(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Fi(t,"borderTopColor"))}var f=new ai(this._pt,t.style,n,0,1,By),p=0,d=0,_,g,v,y,T,M,S,x,L,U,C,O;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Fi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=Fi(t,n)||s,M?t.style[n]=M:Es(t,n)),_=[a,s],Ry(_),a=_[0],s=_[1],v=a.match(Ro)||[],O=s.match(Ro)||[],O.length){for(;g=Ro.exec(s);)S=g[0],L=s.substring(p,g.index),T?T=(T+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(T=1),S!==(M=v[d++]||"")&&(y=parseFloat(M)||0,C=M.substr((y+"").length),S.charAt(1)==="="&&(S=Uo(y,S)+C),x=parseFloat(S),U=S.substr((x+"").length),p=Ro.lastIndex-U.length,U||(U=U||Si.units[n]||C,p===s.length&&(s+=U,f.e+=U)),C!==U&&(y=Or(t,n,M,U)||0),f._pt={_next:f._pt,p:L||d===1?L:",",s:y,c:x-y,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?Gy:Hy;return ny.test(s)&&(f.e=0),this._pt=f,f},mS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lw=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=mS[a]||a,n[1]=mS[s]||s,n.join(" ")},Nw=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Wa[f]&&(p=1,f=f==="transformOrigin"?ri:$e),Es(a,f);p&&(Es(a,$e),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",uu(a,1),c.uncache=1,Vy(s)))}},_f={clearProps:function(t,n,a,s,l){if(l.data!=="isFromStart"){var c=t._pt=new ai(t._pt,n,a,0,0,Nw);return c.u=s,c.pr=-10,c.tween=l,t._props.push(a),1}}},lu=[1,0,0,1,0,0],Yy={},jy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_S=function(t){var n=Fi(t,$e);return jy(n)?lu:n.substr(7).match(ey).map(ln)},u_=function(t,n){var a=t._gsap||gs(t),s=t.style,l=_S(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?lu:l):(l===lu&&!t.offsetParent&&t!==Lo&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Lo.appendChild(t)),l=_S(t),p?s.display=p:Es(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Lo.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Um=function(t,n,a,s,l,c){var f=t._gsap,p=l||u_(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=p[0],T=p[1],M=p[2],S=p[3],x=p[4],L=p[5],U=n.split(" "),C=parseFloat(U[0])||0,O=parseFloat(U[1])||0,P,N,I,A;a?p!==lu&&(N=y*S-T*M)&&(I=C*(S/N)+O*(-M/N)+(M*L-S*x)/N,A=C*(-T/N)+O*(y/N)-(y*L-T*x)/N,C=I,O=A):(P=Wy(t),C=P.x+(~U[0].indexOf("%")?C/100*P.width:C),O=P.y+(~(U[1]||U[0]).indexOf("%")?O/100*P.height:O)),s||s!==!1&&f.smooth?(x=C-d,L=O-_,f.xOffset=g+(x*y+L*M)-x,f.yOffset=v+(x*T+L*S)-L):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=O,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ri]="0px 0px",c&&(Ar(c,f,"xOrigin",d,C),Ar(c,f,"yOrigin",_,O),Ar(c,f,"xOffset",g,f.xOffset),Ar(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+O)},uu=function(t,n){var a=t._gsap||new Uy(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Fi(t,ri)||"0",_,g,v,y,T,M,S,x,L,U,C,O,P,N,I,A,D,V,K,et,ut,ot,F,W,q,vt,yt,B,$,xt,Et,wt;return _=g=v=M=S=x=L=U=C=0,y=T=1,a.svg=!!(t.getCTM&&qy(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[$e]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[$e]!=="none"?p[$e]:"")),s.scale=s.rotate=s.translate="none"),N=u_(t,a.svg),a.svg&&(a.uncache?(q=t.getBBox(),d=a.xOrigin-q.x+"px "+(a.yOrigin-q.y)+"px",W=""):W=!n&&t.getAttribute("data-svg-origin"),Um(t,W||d,!!W||a.originIsAbsolute,a.smooth!==!1,N)),O=a.xOrigin||0,P=a.yOrigin||0,N!==lu&&(V=N[0],K=N[1],et=N[2],ut=N[3],_=ot=N[4],g=F=N[5],N.length===6?(y=Math.sqrt(V*V+K*K),T=Math.sqrt(ut*ut+et*et),M=V||K?bo(K,V)*cs:0,L=et||ut?bo(et,ut)*cs+M:0,L&&(T*=Math.abs(Math.cos(L*No))),a.svg&&(_-=O-(O*V+P*et),g-=P-(O*K+P*ut))):(wt=N[6],xt=N[7],yt=N[8],B=N[9],$=N[10],Et=N[11],_=N[12],g=N[13],v=N[14],I=bo(wt,$),S=I*cs,I&&(A=Math.cos(-I),D=Math.sin(-I),W=ot*A+yt*D,q=F*A+B*D,vt=wt*A+$*D,yt=ot*-D+yt*A,B=F*-D+B*A,$=wt*-D+$*A,Et=xt*-D+Et*A,ot=W,F=q,wt=vt),I=bo(-et,$),x=I*cs,I&&(A=Math.cos(-I),D=Math.sin(-I),W=V*A-yt*D,q=K*A-B*D,vt=et*A-$*D,Et=ut*D+Et*A,V=W,K=q,et=vt),I=bo(K,V),M=I*cs,I&&(A=Math.cos(I),D=Math.sin(I),W=V*A+K*D,q=ot*A+F*D,K=K*A-V*D,F=F*A-ot*D,V=W,ot=q),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=ln(Math.sqrt(V*V+K*K+et*et)),T=ln(Math.sqrt(F*F+wt*wt)),I=bo(ot,F),L=Math.abs(I)>2e-4?I*cs:0,C=Et?1/(Et<0?-Et:Et):0),a.svg&&(W=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!jy(Fi(t,$e)),W&&t.setAttribute("transform",W))),Math.abs(L)>90&&Math.abs(L)<270&&(l?(y*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,L+=L<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=ln(y),a.scaleY=ln(T),a.rotation=ln(M)+f,a.rotationX=ln(S)+f,a.rotationY=ln(x)+f,a.skewX=L+f,a.skewY=U+f,a.transformPerspective=C+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ri]=gf(d)),a.xOffset=a.yOffset=0,a.force3D=Si.force3D,a.renderTransform=a.svg?Pw:Xy?Zy:Ow,a.uncache=0,a},gf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Tp=function(t,n,a){var s=In(n);return ln(parseFloat(n)+parseFloat(Or(t,"x",a+"px",s)))+s},Ow=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Zy(t,n)},os="0deg",Xl="0px",ls=") ",Zy=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,T=a.scaleX,M=a.scaleY,S=a.transformPerspective,x=a.force3D,L=a.target,U=a.zOrigin,C="",O=x==="auto"&&t&&t!==1||x===!0;if(U&&(g!==os||_!==os)){var P=parseFloat(_)*No,N=Math.sin(P),I=Math.cos(P),A;P=parseFloat(g)*No,A=Math.cos(P),c=Tp(L,c,N*A*-U),f=Tp(L,f,-Math.sin(P)*-U),p=Tp(L,p,I*A*-U+U)}S!==Xl&&(C+="perspective("+S+ls),(s||l)&&(C+="translate("+s+"%, "+l+"%) "),(O||c!==Xl||f!==Xl||p!==Xl)&&(C+=p!==Xl||O?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ls),d!==os&&(C+="rotate("+d+ls),_!==os&&(C+="rotateY("+_+ls),g!==os&&(C+="rotateX("+g+ls),(v!==os||y!==os)&&(C+="skew("+v+", "+y+ls),(T!==1||M!==1)&&(C+="scale("+T+", "+M+ls),L.style[$e]=C||"translate(0, 0)"},Pw=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,T=a.xOrigin,M=a.yOrigin,S=a.xOffset,x=a.yOffset,L=a.forceCSS,U=parseFloat(c),C=parseFloat(f),O,P,N,I,A;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=No,d*=No,O=Math.cos(p)*g,P=Math.sin(p)*g,N=Math.sin(p-d)*-v,I=Math.cos(p-d)*v,d&&(_*=No,A=Math.tan(d-_),A=Math.sqrt(1+A*A),N*=A,I*=A,_&&(A=Math.tan(_),A=Math.sqrt(1+A*A),O*=A,P*=A)),O=ln(O),P=ln(P),N=ln(N),I=ln(I)):(O=g,I=v,P=N=0),(U&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(U=Or(y,"x",c,"px"),C=Or(y,"y",f,"px")),(T||M||S||x)&&(U=ln(U+T-(T*O+M*N)+S),C=ln(C+M-(T*P+M*I)+x)),(s||l)&&(A=y.getBBox(),U=ln(U+s/100*A.width),C=ln(C+l/100*A.height)),A="matrix("+O+","+P+","+N+","+I+","+U+","+C+")",y.setAttribute("transform",A),L&&(y.style[$e]=A)},zw=function(t,n,a,s,l){var c=360,f=Rn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?cs:1),d=p-s,_=s+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*cS)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*cS)%c-~~(d/c)*c)),t._pt=v=new ai(t._pt,n,a,s,d,xw),v.e=_,v.u="deg",t._props.push(a),v},gS=function(t,n){for(var a in n)t[a]=n[a];return t},Bw=function(t,n,a){var s=gS({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,y,T;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[$e]=n,f=uu(a,1),Es(a,$e),a.setAttribute("transform",d)):(d=getComputedStyle(a)[$e],c[$e]=n,f=uu(a,1),c[$e]=d);for(p in Wa)d=s[p],_=f[p],d!==_&&l.indexOf(p)<0&&(y=In(d),T=In(_),g=y!==T?Or(a,p,d,T):parseFloat(d),v=parseFloat(_),t._pt=new ai(t._pt,f,p,g,v-g,Cm),t._pt.u=T||0,t._props.push(p));gS(f,s)};ii("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",l="Left",c=(t<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return t<2?o+f:"border"+f+o});_f[t>1?"border"+o:o]=function(f,p,d,_,g){var v,y;if(arguments.length<4)return v=c.map(function(T){return Fa(f,T,d)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},c.forEach(function(T,M){return y[T]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,y,g)}});var Ky={name:"css",register:Dm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,y,T,M,S,x,L,U,C,O,P,N,I;s_||Dm(),this.styles=this.styles||ky(t),I=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(gi[M]&&Ly(M,n,a,s,t,l)))){if(y=typeof _,T=_f[M],y==="function"&&(_=_.call(a,s,t,l),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=ru(_)),T)T(this,t,M,_,a)&&(N=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Dr.lastIndex=0,Dr.test(d)||(S=In(d),x=In(_)),x?S!==x&&(d=Or(t,M,d,x)+x):S&&(_+=S),this.add(f,"setProperty",d,_,s,l,0,0,M),c.push(M),I.push(M,0,f[M]);else if(y!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,s,t,l):p[M],Rn(d)&&~d.indexOf("random(")&&(d=ru(d)),In(d+"")||d==="auto"||(d+=Si.units[M]||In(Fa(t,M))||""),(d+"").charAt(1)==="="&&(d=Fa(t,M))):d=Fa(t,M),v=parseFloat(d),L=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),L&&(_=_.substr(2)),g=parseFloat(_),M in ua&&(M==="autoAlpha"&&(v===1&&Fa(t,"visibility")==="hidden"&&g&&(v=0),I.push("visibility",0,f.visibility),Ar(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ua[M],~M.indexOf(",")&&(M=M.split(",")[0]))),U=M in Wa,U){if(this.styles.save(M),y==="string"&&_.substring(0,6)==="var(--"&&(_=Fi(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),C||(O=t._gsap,O.renderTransform&&!n.parseTransform||uu(t,n.parseTransform),P=n.smoothOrigin!==!1&&O.smooth,C=this._pt=new ai(this._pt,f,$e,0,1,O.renderTransform,O,0,-1),C.dep=1),M==="scale")this._pt=new ai(this._pt,O,"scaleY",O.scaleY,(L?Uo(O.scaleY,L+g):g)-O.scaleY||0,Cm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){I.push(ri,0,f[ri]),_=Lw(_),O.svg?Um(t,_,0,P,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==O.zOrigin&&Ar(this,O,"zOrigin",O.zOrigin,x),Ar(this,f,M,gf(d),gf(_)));continue}else if(M==="svgOrigin"){Um(t,_,1,P,0,this);continue}else if(M in Yy){zw(this,O,M,v,L?Uo(v,L+_):_);continue}else if(M==="smoothOrigin"){Ar(this,O,"smooth",O.smooth,_);continue}else if(M==="force3D"){O[M]=_;continue}else if(M==="transform"){Bw(this,_,t);continue}}else M in f||(M=Xo(M)||M);if(U||(g||g===0)&&(v||v===0)&&!vw.test(_)&&M in f)S=(d+"").substr((v+"").length),g||(g=0),x=In(_)||(M in Si.units?Si.units[M]:S),S!==x&&(v=Or(t,M,d,x)),this._pt=new ai(this._pt,U?O:f,M,v,(L?Uo(v,L+g):g)-v,!U&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?yw:Cm),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=Sw);else if(M in f)Uw.call(this,t,M,d,L?L+_:_);else if(M in t)this.add(t,M,d||t[M],L?L+_:_,s,l);else if(M!=="parseTransform"){Km(M,_);continue}U||(M in f?I.push(M,0,f[M]):typeof t[M]=="function"?I.push(M,2,t[M]()):I.push(M,1,d||t[M])),c.push(M)}}N&&Fy(this)},render:function(t,n){if(n.tween._time||!o_())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Fa,aliases:ua,getSetter:function(t,n,a){var s=ua[n];return s&&s.indexOf(",")<0&&(n=s),n in Wa&&n!==ri&&(t._gsap.x||Fa(t,"x"))?a&&uS===a?n==="scale"?bw:Tw:(uS=a||{})&&(n==="scale"?Aw:Rw):t.style&&!Ym(t.style[n])?Mw:~n.indexOf("-")?Ew:a_(t,n)},core:{_removeProperty:Es,_getMatrix:u_}};si.utils.checkPrefix=Xo;si.core.getStyleSaver=ky;(function(o,t,n,a){var s=ii(o+","+t+","+n,function(l){Wa[l]=1});ii(t,function(l){Si.units[l]="deg",Yy[l]=1}),ua[s[13]]=o+","+t,ii(a,function(l){var c=l.split(":");ua[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Si.units[o]="px"});si.registerPlugin(Ky);var Pa=si.registerPlugin(Ky)||si;Pa.core.Tween;class Fw{hand=[];gameController;selectedCard=null;mouseClicked=!1;corners;constructor(t,n){this.gameController=t,this.corners=n}getHand(){return this.hand}createHand(t){return this.hand=t,this.sortHand(),this.hand}getMouseWorld(t){return new ae(t.x*this.corners.width/2,-t.y*this.corners.height/2)}intersectCards(t,n){const a=[];for(const l of this.hand){const c=new pm;c.setFromCamera(t,n),c.intersectObject(l.THREEMesh).length>0&&a.push(l)}const s=Math.max(...a.map(l=>l.depthZ),-1);for(const l of this.hand)l.depthZ===s?(l.selected=!0,this.selectedCard=l,Pa.to(l.THREEMesh.scale,{y:1.2,duration:.2,ease:"power2.out"})):(l.selected=!1,Pa.to(l.THREEMesh.scale,{y:1,duration:.2,ease:"power2.out"}))}handleMouseMove(t,n){const a=this.getMouseWorld(t);if(this.mouseClicked){if(this.selectedCard){const s=this.selectedCard;Pa.to(s.THREEMesh.position,{x:a.x,y:a.y,duration:.2,ease:"power2.out"}),Pa.to(s.THREEMesh.scale,{y:1,duration:.2,ease:"power2.out"}),Pa.to(s.THREEMesh.rotation,{z:0,duration:.2,ease:"power2.out"}),a.x>this.corners.bottomLeft.x&&a.x<this.corners.bottomRight.x&&a.y>this.corners.bottomLeft.y&&a.y<this.corners.bottomLeft.y+3&&this.hand.sort((l,c)=>l.THREEMesh.position.x-c.THREEMesh.position.x)}}else this.intersectCards(new ae(t.x,t.y),n)}handleMouseDown(t,n){this.mouseClicked=!0,this.intersectCards(new ae(t.x,t.y),n)}handleMouseUp(){this.mouseClicked=!1,this.selectedCard=null}placeOnScene(){const t=this.corners,n=.1,a=this.hand.length;if(a===0)return;const s=(t.bottomLeft.x+t.bottomRight.x)/2,l=Math.abs(t.bottomRight.x-t.bottomLeft.x)/2.2,c=t.bottomLeft.y+1,f=Math.PI/3;for(let p=0;p<a;p++){const d=a===1?.5:p/(a-1),_=(d-.5)*f,g=s+l*Math.sin(_),v=c-l*(1-Math.cos(_))*1;this.hand[p].depthZ=n*d,this.hand[p].selected&&this.mouseClicked?Pa.to(this.hand[p].THREEMesh.position,{z:1+n*2,duration:.5,ease:"power2.out"}):(Pa.to(this.hand[p].THREEMesh.position,{x:g,y:v,z:1+this.hand[p].depthZ,duration:.5,ease:"power2.out"}),Pa.to(this.hand[p].THREEMesh.rotation,{z:-_,duration:.5,ease:"power2.out"}))}}sortHand(){this.hand.sort((t,n)=>{let a=t.card.rankValue*5+t.card.suitValue,s=n.card.rankValue*5+n.card.suitValue;return t.card.suit===this.gameController.trump&&(a+=100),n.card.suit===this.gameController.trump&&(s+=100),a-s})}}class Iw{card;isFlipped;depthZ;isDraggable;isHide;selected=!1;THREEMesh=new Yi;constructor(t,n,a){this.card=t,this.isFlipped=!1,this.depthZ=0,this.isDraggable=n,this.isHide=a}async formTHREEMesh(){const n=await new XS().loadAsync(this.isHide?"/cards/card_back.png":this.card.getImage());"colorSpace"in n?n.colorSpace="srgb":"encoding"in n&&(n.encoding=void 0);const a=new ae(n.image.width,n.image.height).normalize().multiplyScalar(1.5),s=new km({map:n,transparent:!0}),l=new _u(a.x,a.y),c=new Yi(l,s);c.position.set(this.THREEMesh.position.x,this.THREEMesh.position.y,0+this.depthZ),c.rotation.z=this.THREEMesh.rotation.z,this.THREEMesh=c}}const Hw={spades:"П",clubs:"К",hearts:"Ч",diamonds:"Б"},Gw={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",jack:"В",queen:"Д",king:"К",ace:"Т"},Vw={2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,jack:11,queen:12,king:13,ace:14},kw={spades:1,clubs:2,diamonds:3,hearts:4};class ia{suit;rank;rankValue;suitValue;textureName;constructor(t,n){this.suit=n,this.rank=t,this.textureName=this.getTextureName(),this.rankValue=Vw[this.rank],this.suitValue=kw[this.suit]}getTextureName(){return`${Gw[this.rank]} ${Hw[this.suit]}.png`}getImage(){return`/cards/52cards/${this.textureName}`}}class vf{topLeft;topRight;bottomLeft;bottomRight;width;height;constructor(t,n,a,s){this.topLeft=t,this.topRight=n,this.bottomLeft=a,this.bottomRight=s,this.width=this.getWidth(),this.height=this.getHeight()}getWidth(){return this.topRight.x-this.topLeft.x}getHeight(){return this.bottomRight.y-this.topRight.y}contains(t,n){return t>=this.topLeft.x&&t<=this.topRight.x&&n>=this.bottomLeft.y&&n<=this.bottomRight.y}static getFromTHREE(t,n=1){if(t.isOrthographicCamera){const a=t,s=new ae(a.left,a.top),l=new ae(a.right,a.top),c=new ae(a.left,a.bottom),f=new ae(a.right,a.bottom);return console.log(s,l,c,f),new vf(s,l,c,f)}else if(t.isPerspectiveCamera){const a=[new ae(-1,-1),new ae(1,-1),new ae(1,1),new ae(-1,1)],s=new Ba(new nt(0,0,1),-n),l=a.map(c=>{const f=new ae(c.x,c.y),p=new pm;p.setFromCamera(f,t);const d=new nt;return s.intersectLine(new wx(p.ray.origin,p.ray.origin.clone().add(p.ray.direction.clone().multiplyScalar(1e4))),d),new ae(d.x,d.y)});return new vf(l[3],l[2],l[0],l[1])}else throw new Error("Unsupported camera type for BoundingBox.getFromTHREE")}static getWorldCursor(t,n,a,s,l=1){const c=n.getBoundingClientRect(),f=(a-c.left)/c.width*2-1,p=-((s-c.top)/c.height)*2+1,d=new ae(f,p);if(t.isOrthographicCamera){const _=t,g=_.left+(f+1)/2*(_.right-_.left),v=_.bottom+(p+1)/2*(_.top-_.bottom);return new ae(g,v)}else if(t.isPerspectiveCamera){const _=new pm;_.setFromCamera(d,t);const g=new Ba(new nt(0,0,1),-l),v=new nt;return g.intersectLine(new wx(_.ray.origin,_.ray.origin.clone().add(_.ray.direction.clone().multiplyScalar(1e4))),v),new ae(v.x,v.y)}else throw new Error("Unsupported camera type for BoundingBox.getWorldCursor")}}class Xw{trump;constructor(){this.trump="hearts"}}function Ww(){const o=ji.useRef(null);return ji.useEffect(()=>{function t(M,S){return new ae(M/window.innerWidth*2-1,-(S/window.innerHeight*2-1))}const n=o.current;if(!n)return;const a=new IS,s=n.clientWidth/n.clientHeight,l=3,c=new WS(-s*l,s*l,1*l,-1*l,.1,1e3);console.log(window.devicePixelRatio),c.position.z=5;const f=new QS({antialias:!0,alpha:!0});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(window.devicePixelRatio);const p=new Xw,d=vf.getFromTHREE(c,1),_=new Fw(p,d),g=[new ia("jack","hearts"),new ia("queen","diamonds"),new ia("king","clubs"),new ia("ace","spades"),new ia("4","hearts"),new ia("5","diamonds"),new ia("6","clubs"),new ia("7","spades"),new ia("4","hearts"),new ia("5","diamonds")];_.createHand(g.map(M=>new Iw(M,!0,!1))),_.placeOnScene(),addEventListener("mousemove",M=>_.handleMouseMove(t(M.clientX,M.clientY),c)),addEventListener("mousedown",M=>_.handleMouseDown(t(M.clientX,M.clientY),c)),addEventListener("mouseup",()=>_.handleMouseUp()),addEventListener("touchstart",M=>_.handleMouseDown(t(M.touches[0].clientX,M.touches[0].clientY),c)),addEventListener("touchmove",M=>_.handleMouseMove(t(M.touches[0].clientX,M.touches[0].clientY),c)),addEventListener("touchend",()=>_.handleMouseUp()),"colorSpace"in f?f.colorSpace="srgb":"outputEncoding"in f&&(f.outputEncoding=void 0),n.appendChild(f.domElement),_.getHand().forEach(async M=>{await M.formTHREEMesh(),a.add(M.THREEMesh)});let v=null;const y=()=>{_.placeOnScene(),f.render(a,c),v=requestAnimationFrame(y)};y();const T=()=>{const M=o.current;M&&(c.updateProjectionMatrix(),f.setSize(M.clientWidth,M.clientHeight,!1),f.setPixelRatio(window.devicePixelRatio))};return window.addEventListener("resize",T),()=>{v!==null&&cancelAnimationFrame(v),window.removeEventListener("resize",T),f.dispose();const M=o.current;M&&M.removeChild(f.domElement)}},[]),Vt.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1}})}function qw({handleBack:o}){return Vt.jsxs("div",{className:"game-ui",children:[Vt.jsx(Ww,{}),Vt.jsxs("div",{className:"ui-wrapper",children:[Vt.jsx("div",{className:"enemies-side",children:Vt.jsx("div",{className:"header",children:Vt.jsx("button",{className:"back",onClick:o,children:"⬅️"})})}),Vt.jsxs("div",{className:"bita-side",children:[Vt.jsx("div",{className:"left-block"}),Vt.jsxs("div",{className:"btn-block",children:[Vt.jsx("button",{children:"Бита"}),Vt.jsx("button",{children:"Снять"})]})]}),Vt.jsx("div",{className:"my-side",children:Vt.jsx("div",{className:"hint-block",children:Vt.jsx("p",{children:"Подсказка: Ходите с меньших карт"})})})]})]})}function Yw(){const[o,t]=ji.useState([new vS("Тестовая комната",2)]),[n,a]=ji.useState(!1),[s,l]=ji.useState(!1),c=p=>{t(d=>[...d,p]),a(!1)},f=()=>{l(!1)};return Vt.jsxs(Vt.Fragment,{children:[!s&&(n?Vt.jsx(pT,{handleCreateRoom:c,handleCancel:()=>a(!1)}):Vt.jsxs("div",{id:"app",children:[Vt.jsx("div",{className:"name-block",children:Vt.jsx("div",{className:"h1",children:Vt.jsx("h1",{children:"♠️Дурак онлайн♠️"})})}),Vt.jsxs("div",{className:"rooms",children:[Vt.jsxs("div",{className:"rooms-title",children:[Vt.jsxs("h2",{children:["Комнаты: ",o.length]}),Vt.jsxs("div",{className:"buttons-block",children:[Vt.jsx("button",{onClick:()=>a(!0),children:"создать комнату"}),Vt.jsx("button",{children:"обновить"})]})]}),Vt.jsx("div",{className:"rooms-container",children:o.map(p=>Vt.jsx(dT,{room:p,handleInGame:()=>l(!0)},p.id))})]})]})),s&&Vt.jsx(qw,{handleBack:f})]})}function jw({onLogin:o}){const[t,n]=ji.useState("");return Vt.jsxs("div",{className:"form",children:[Vt.jsx("h2",{children:"Введите ваш никнейм (любой не пустой): "}),Vt.jsx("input",{type:"text",id:"username",name:"username",value:t,onChange:a=>n(a.target.value)}),Vt.jsx("button",{type:"submit",onClick:()=>{t.trim()?o(t):alert("Пожалуйста, введите не пустой никнейм.")},children:"Войти"})]})}function Zw(){const o=ji.useRef(null);return ji.useEffect(()=>{const t=o.current;if(!t)return;const n=new IS,a=new Pi(75,t.clientWidth/t.clientHeight,.1,1e3);a.position.z=5;const s=new QS({antialias:!0,alpha:!0});s.setSize(t.clientWidth,t.clientHeight),s.setPixelRatio(window.devicePixelRatio),"colorSpace"in s?s.colorSpace="srgb":"outputEncoding"in s&&(s.outputEncoding=void 0),t.appendChild(s.domElement);const l=new XS,c=l.load("/suits/spade.png",S=>{"colorSpace"in S?S.colorSpace="srgb":"encoding"in S&&(S.encoding=void 0)}),f=l.load("/suits/clubs.png",S=>{"colorSpace"in S?S.colorSpace="srgb":"encoding"in S&&(S.encoding=void 0)}),p=l.load("/suits/hearts.png",S=>{"colorSpace"in S?S.colorSpace="srgb":"encoding"in S&&(S.encoding=void 0)}),d=l.load("/suits/diamonds.png",S=>{"colorSpace"in S?S.colorSpace="srgb":"encoding"in S&&(S.encoding=void 0)}),_=1e3,g=[c,f,p,d],v=[];for(let S=0;S<g.length;S++){const x=Math.floor(_/g.length),L=new Float32Array(x*3);for(let P=0;P<x;P++)L.set([(Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10],P*3);const U=new qa;U.setAttribute("position",new Ki(L,3));const C=new GS({color:16777215,size:1,map:g[S],alphaTest:.5,transparent:!0}),O=new N1(U,C);n.add(O),v.push(O)}let y=null;const T=()=>{for(const S of v)S.rotation.x+=2e-4,S.rotation.y+=2e-4;s.render(n,a),y=requestAnimationFrame(T)};T();const M=()=>{const S=o.current;S&&(a.aspect=S.clientWidth/S.clientHeight,a.updateProjectionMatrix(),s.setSize(S.clientWidth,S.clientHeight,!1),s.setPixelRatio(window.devicePixelRatio))};return window.addEventListener("resize",M),()=>{y!==null&&cancelAnimationFrame(y),window.removeEventListener("resize",M),s.dispose();const S=o.current;S&&S.removeChild(s.domElement)}},[]),Vt.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1}})}function Kw(){const[o,t]=Bd.useState(()=>localStorage.getItem("isAuth")==="true"),[n,a]=Bd.useState(()=>localStorage.getItem("username")||""),s=l=>{t(!0),a(l),localStorage.setItem("isAuth","true"),localStorage.setItem("username",l)};return Bd.useEffect(()=>{localStorage.setItem("isAuth",o?"true":"false"),localStorage.setItem("username",n)},[o,n]),Vt.jsxs(Vt.Fragment,{children:[Vt.jsx(Zw,{}),o?Vt.jsx(Yw,{}):Vt.jsx(jw,{onLogin:s})]})}hT.createRoot(document.getElementById("root")).render(Vt.jsx(Kw,{}));
