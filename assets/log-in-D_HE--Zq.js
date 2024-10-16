import{U as H,L as M,P as E}from"./path-CnUNvFmN.js";import{d as D,r as n,b as F,e as b,f as m,A as G,S,I as a,g as j,h as Q,w as d,o as _,i as c,j as C,k as f,t as u,u as e,l as R,m as z,n as I,p as A,q as x,L as J,s as B,v as K}from"./index-CI1TXeFk.js";import{T as W,e as X,a as O,s as Y,B as h,C as k,b as q,c as Z,E as w}from"./error-ByG0LKAC.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";const te={class:"log-in"},ae={class:"log-in__title"},se={class:"log-in__form"},l="log-in",oe=D({__name:"log-in",setup(ie){let o;const p=n(""),T=n(),g=n(""),v=n(),r=n(!1),V=()=>Z([T.value,...r.value?[v.value]:[]]),y=()=>{r.value=!1,g.value="",v.value=void 0},L=async()=>{const s=p.value.trim(),t=await G.requestOtp(s);if(!t.successful){S.handleErrorStack(t.errorStack,a.failedToRequestOtp());return}r.value=!0,j.add(Q.createSuccess(a.otpHasBeenSentTo(s)))},$=W.create({iconSrc:"/icon/refresh-light-black.svg",darkIconSrc:"/icon/refresh-silver.svg",onClick:L}),N=async()=>{const s=await z.logIn(p.value.trim(),g.value.trim());if(!s.successful){let t=a.failedToLogIn();s.errorStack.hasHttpError({targetErrRespCode:w.ErrRespCodeInvalidOtp})?t=a.invalidOtp():s.errorStack.hasHttpError({targetErrRespCode:w.ErrRespCodeEmailNotRegistered})&&(t=a.emailNotRegistered()),S.handleErrorStack(s.errorStack,t);return}I.push(E.sanitizeAuthedRedirectionPath(atob(o||""),A,x))},P=()=>{J.debugInfo(B.path+(o?`?${b}=${o}`:"")),I.push(B.path+(o?`?${b}=${o}`:""))},U=async()=>{const s=await z.guestLogIn(K.langCode);if(!s.successful){S.handleErrorStack(s.errorStack,a.failedToLogIn());return}I.push(E.sanitizeAuthedRedirectionPath(atob(o||""),A,x))};return F(()=>{o=new URLSearchParams(window.location.search).get(b)}),(s,t)=>(_(),m(H,null,{default:d(()=>[c(" looks boring! Make `log in as a guest` option stands out "),C("div",te,[f(M,{class:"log-in__logo"}),C("h1",ae,u(e(a).logIn()),1),C("div",se,[f(O,{id:l+"__email",label:e(a).email(),modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=i=>p.value=i),spec:e(X),onValidated:t[1]||(t[1]=i=>T.value=i),onInput:y},null,8,["id","label","modelValue","spec"]),r.value?(_(),m(O,{key:0,id:l+"__otp",label:e(a).otp(),"tail-btn":e($),modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=i=>g.value=i),spec:e(Y),onValidated:t[3]||(t[3]=i=>v.value=i)},null,8,["id","label","tail-btn","modelValue","spec"])):R("",!0)]),r.value?R("",!0):(_(),m(h,{key:0,class:"log-in__send-otp-btn",id:`${l}__send-otp`,size:e(k).createL(),disabled:!V(),onClick:L},{default:d(()=>[c(u(e(a).requestOtp()),1)]),_:1},8,["id","size","disabled"])),r.value?(_(),m(h,{key:1,class:"log-in__log-in-btn",id:`${l}__log-in`,size:e(k).createL(),disabled:!V(),onClick:N},{default:d(()=>[c(u(e(a).logIn()),1)]),_:1},8,["id","size","disabled"])):R("",!0),f(h,{class:"log-in__register-btn",id:`${l}__register`,size:e(k).createM(),theme:e(q).Text,onClick:P},{default:d(()=>[c(u(e(a).registerFromHere()),1)]),_:1},8,["id","size","theme"]),f(h,{class:"log-in__guest-btn",id:`${l}__guest`,size:e(k).createM(),theme:e(q).Text,onClick:U},{default:d(()=>[c(u(e(a).continueAsGuest()),1)]),_:1},8,["id","size","theme"])])]),_:1}))}}),ce=ee(oe,[["__scopeId","data-v-5921c1b6"]]);export{ce as default};
