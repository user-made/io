var q=Object.defineProperty;var V=(a,e,n)=>e in a?q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var h=(a,e,n)=>V(a,typeof e!="symbol"?e+"":e,n);import{T as z,A as Y,B as G,C as I,s as M}from"./index-CCdNvfV5.js";import{d as D,r as w,b as U,I as s,o as _,f as v,w as g,j as t,t as l,u as i,l as E,c as b,C as L,F as P,_ as p,$ as Q,i as x,a0 as H,a1 as J,a2 as K,M as X,S as d,a3 as Z,G as ee,k as T,J as $,m as A}from"./index-CI1TXeFk.js";import{C as te,B as W,b as B,f as F,D as se,A as ae}from"./error-ByG0LKAC.js";import{P as j}from"./index-BsVT9ERs.js";import{D as re,b as f,w as S,c as R}from"./index.vue_vue_type_style_index_0_scoped_f01006ee_lang-ijOL3OAg.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as N}from"./member-DMif3p8y.js";class oe{constructor(e){h(this,"name",re.EditOrg);h(this,"workspace");h(this,"org");h(this,"updateWs");h(this,"updateOrg");this.workspace=e.workspace,this.org=e.org,this.updateWs=e.updateWs,this.updateOrg=e.updateOrg}}const ne={class:"container"},ie={class:"container__item"},ce={class:"container__item__label"},le={class:"container__item__value mt-xs"},de={class:"container__item"},_e={class:"container__item__label"},ue={class:"container__item__value"},me={class:"container__item__label"},he={class:"container__item__value"},ge={class:"container__item"},ve={class:"container__item__label"},pe={class:"container__item__value"},fe={class:"container__item"},be={class:"container__item__label"},ke={class:"container__item__value"},we=D({__name:"basic-info",props:{workspace:{type:Object,required:!0},org:{type:Object,required:!0}},setup(a){const e=a,n=w(),m=()=>{f.push(new oe({workspace:e.workspace,org:e.org,updateWs:S.update,updateOrg:p.update}))};return U(()=>{n.value={id:"logo-img",src:e.org.imgUrl,alt:s.businessLogo(),size:te.createM()}}),(y,C)=>(_(),v(j,{editable:!0,title:i(s).basicInfo(),onEdit:m},{default:g(()=>[t("div",ne,[t("div",ie,[t("dt",ce,l(i(s).businessLogo()),1),t("dd",le,[n.value?(_(),v(z,{key:0,thumbnail:n.value},null,8,["thumbnail"])):E("",!0)])]),t("div",de,[t("div",_e,l(i(s).wsId()),1),t("div",ue,l(a.workspace.fid),1)]),(_(!0),b(P,null,L(a.org.labeledNames,({label:u,name:k},o)=>(_(),b("div",{class:"container__item",key:o},[t("div",me,l(u),1),t("div",he,l(k),1)]))),128)),t("div",ge,[t("div",ve,l(i(s).tel()),1),t("div",pe,l(a.org.tel),1)]),t("div",fe,[t("div",be,l(i(s).pic()),1),t("div",ke,l(a.org.pic),1)])])]),_:1},8,["title"]))}}),Se=O(we,[["__scopeId","data-v-ff68b10a"]]),Ee="/icon/security.svg",ye=a=>(J("data-v-5081767a"),a=a(),K(),a),Ce={class:"members"},Te={class:"members__member__admin-icon"},xe=["alt"],De={class:"members__member__info"},Oe={class:"members__member__info__name"},Ie={class:"members__member__info__email"},Me=ye(()=>t("div",{class:"members__member__info__email__send-icon"},null,-1)),$e=D({__name:"members",props:{org:{type:Object,required:!0},members:{type:Array,required:!0}},setup(a){const e=a,n=Q.getRouter();if(!n)throw new Error("router is not set");const m=()=>{n.push(H.buildPath([e.org.id.toString()]))};return(y,C)=>(_(),v(j,{editable:!0,title:i(s).members(),onEdit:m},{default:g(()=>[t("div",Ce,[(_(!0),b(P,null,L(a.members,u=>(_(),b("div",{class:"members__member",key:u.uid},[t("div",Te,[u.isAdmin?(_(),b("img",{key:0,src:Ee,alt:i(s).admin()},null,8,xe)):E("",!0)]),t("div",De,[t("div",Oe,l(u.name),1),t("div",Ie,[x(l(u.email)+" ",1),Me])])]))),128))])]),_:1},8,["title"]))}}),Ae=O($e,[["__scopeId","data-v-5081767a"]]),We={class:"container"},Be={class:"heading2 mb-m center"},Fe={class:"container__basic-info"},Re={class:"container__members"},Ne=D({__name:"index",setup(a){const e=w(),n=w(),m=w([]),y=async()=>{f.push(new I({typ:R.Warning,title:s.confirmation(),msg:s.areYouSureToLeaveTheOrg(),onYes:async()=>{if(!e.value){d.handleError($.createUiError("org is not set"));return}const o=await A.getAccount();if(!o.successful){d.handleErrorStack(o.errorStack,s.failedToFetchData());return}const r=await N.deleteMember({oid:e.value.id,targetUid:o.value.id});if(!r.successful){d.handleErrorStack(r.errorStack,s.failedToUpdate());return}const c=await M(o.value);c.successful||d.handleErrorStackQuietly(c.errorStack)},onNo:()=>f.pop()}))},C=async()=>{f.push(new I({typ:R.Warning,title:s.confirmation(),msg:s.warningAboutDeletingTheOrg(),onYes:async()=>{if(!e.value){d.handleError($.createUiError("org is not set"));return}const o=await A.getAccount();if(!o.successful){d.handleErrorStack(o.errorStack,s.failedToFetchData());return}const r=await p.delete(e.value.id);if(!r.successful){d.handleErrorStack(r.errorStack,s.failedToDelete());return}const c=await M(o.value);c.successful||d.handleErrorStackQuietly(c.errorStack)},onNo:()=>f.pop()}))},u=o=>{var r;for(const c of o)if(c.id===((r=n.value)==null?void 0:r.id)){n.value=c;break}},k=o=>{var r;for(const c of o)if(c.id===((r=e.value)==null?void 0:r.id)){e.value=c;break}};return U(()=>{const o=X.getWsp();if(!o){d.handleErrorStack(Z.createFromMsg("views/org.vue failed to get workspace"),s.failedToFetchData());return}p.getByWsId(o.wsId).then(r=>{if(!r.successful){d.handleErrorStack(r.errorStack,s.failedToFetchData());return}e.value=r.value,N.list(e.value.id).then(c=>{if(!c.successful){d.handleErrorStack(c.errorStack,s.failedToFetchData());return}m.value=c.value})}),S.get(o.wsId).then(r=>{if(!r.successful){d.handleErrorStack(r.errorStack,s.failedToFetchData());return}n.value=r.value}),S.subscribeToMinesChangeEvent(u),p.subscribeToMinesChangeEvent(k)}),ee(()=>{S.unsubscribeFromMinesChangeEvent(u),p.unsubscribeFromMinesChangeEvent(k)}),(o,r)=>(_(),v(Y,{"zen-right-bar":!0},{default:g(()=>[t("div",We,[t("h2",Be,l(i(s).org()),1),t("div",Fe,[e.value&&n.value?(_(),v(Se,{key:0,org:e.value,workspace:n.value},null,8,["org","workspace"])):E("",!0)]),t("div",Re,[e.value?(_(),v(Ae,{key:0,org:e.value,members:m.value},null,8,["org","members"])):E("",!0)]),T(G,{direction:i(se).Column,"align-h":i(ae).Left,"tight-gap":!0,class:"account__btn-group"},{default:g(()=>[T(W,{"head-icon":{src:"/icon/person-remove-light-black.svg",darkSrc:"/icon/person-remove-silver.svg",activeSrc:"/icon/person-remove-orange.svg"},theme:i(B).Text,"text-btn-underline-when":i(F).Never,onClick:y},{default:g(()=>[x(l(i(s).leaveOrg()),1)]),_:1},8,["theme","text-btn-underline-when"]),T(W,{"head-icon":{src:"/icon/block-light-black.svg",darkSrc:"/icon/block-silver.svg",activeSrc:"/icon/block-orange.svg"},theme:i(B).Text,"text-btn-underline-when":i(F).Never,onClick:C},{default:g(()=>[x(l(i(s).deleteOrg()),1)]),_:1},8,["theme","text-btn-underline-when"])]),_:1},8,["direction","align-h"])])]),_:1}))}}),Ge=O(Ne,[["__scopeId","data-v-9e6f8a7d"]]);export{Ge as default};
