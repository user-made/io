import{T as G,s as L,a as S,e as H,B as v,C as f,b as B,c as j,E as F}from"./error-ByG0LKAC.js";import{d as Q,r as o,b as W,e as O,f as k,w as d,A as Y,S as C,I as s,g as J,h as K,o as b,i as u,j as V,k as c,t as p,u as e,l as R,m as q,v as w,n as I,p as y,q as E,x as X}from"./index-CI1TXeFk.js";import"./index.vue_vue_type_style_index_0_scoped_f01006ee_lang-ijOL3OAg.js";import{U as Z,L as ee,P as U}from"./path-CnUNvFmN.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";const se={class:"register"},ae={class:"register__title"},re={class:"register__form"},i="register",oe=Q({__name:"sign-up",setup(ie){let n;const m=o(""),T=o(),g=o(""),z=o(),_=o(""),h=o(),l=o(!1),A=()=>j([T.value,z.value,...l.value?[h.value]:[]]),P=()=>{l.value=!1,_.value="",h.value=void 0},x=async()=>{const a=g.value.trim(),t=await Y.requestOtp(a);if(!t.successful){C.handleErrorStack(t.errorStack,s.failedToRequestOtp());return}l.value=!0,J.add(K.createSuccess(s.otpHasBeenSentTo(a)))},$=G.create({iconSrc:"/icon/refresh-light-black.svg",darkIconSrc:"/icon/refresh-silver.svg",onClick:x}),N=async()=>{const a=await q.register(g.value.trim(),_.value.trim(),m.value.trim(),m.value.trim(),w.langCode);if(!a.successful){C.handleErrorStack(a.errorStack,a.errorStack.hasHttpError({targetErrRespCode:F.ErrRespCodeInvalidOtp})?s.invalidOtp():s.failedToRegister());return}I.push(U.sanitizeAuthedRedirectionPath(atob(n||""),y,E))},M=()=>{I.push(X.path+(n?`?${O}=${n}`:""))},D=async()=>{const a=await q.guestLogIn(w.langCode);if(!a.successful){C.handleErrorStack(a.errorStack,s.failedToLogIn());return}I.push(U.sanitizeAuthedRedirectionPath(atob(n||""),y,E))};return W(()=>{n=new URLSearchParams(window.location.search).get(O)}),(a,t)=>(b(),k(Z,null,{default:d(()=>[u(" looks boring! Make `log in as a guest` option stands out "),V("div",se,[c(ee,{class:"register__logo"}),V("h1",ae,p(e(s).register()),1),V("div",re,[c(S,{id:i+"__username",label:e(s).username(),"err-msg":"",modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=r=>m.value=r),spec:e(L),onValidated:t[1]||(t[1]=r=>T.value=r)},null,8,["id","label","modelValue","spec"]),c(S,{id:i+"__email",label:e(s).email(),"err-msg":"",modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=r=>g.value=r),spec:e(H),onValidated:t[3]||(t[3]=r=>z.value=r),onInput:P},null,8,["id","label","modelValue","spec"]),l.value?(b(),k(S,{key:0,id:i+"__otp",label:e(s).otp(),"tail-btn":e($),modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=r=>_.value=r),spec:e(L),onValidated:t[5]||(t[5]=r=>h.value=r)},null,8,["id","label","tail-btn","modelValue","spec"])):R("",!0)]),l.value?R("",!0):(b(),k(v,{key:0,class:"register__send-otp-btn",id:`${i}__send-otp`,size:e(f).createL(),disabled:!A(),onClick:x},{default:d(()=>[u(p(e(s).requestOtp()),1)]),_:1},8,["id","size","disabled"])),l.value?(b(),k(v,{key:1,class:"register__register-btn",id:`${i}__register`,size:e(f).createL(),disabled:!A(),onClick:N},{default:d(()=>[u(p(e(s).register()),1)]),_:1},8,["id","size","disabled"])):R("",!0),c(v,{class:"register__log-in-btn",id:`${i}__log-in`,size:e(f).createM(),theme:e(B).Text,onClick:M},{default:d(()=>[u(p(e(s).logInWithYourAccount()),1)]),_:1},8,["id","size","theme"]),c(v,{class:"register__guest-btn",id:`${i}__guest`,size:e(f).createM(),theme:e(B).Text,onClick:D},{default:d(()=>[u(p(e(s).continueAsGuest()),1)]),_:1},8,["id","size","theme"])])]),_:1}))}}),pe=te(oe,[["__scopeId","data-v-d5882163"]]);export{pe as default};
