import{j as r,a as c,t as h,r as p,S as g,b as v,c as u,R as N,d as _}from"./vendor.24053a39.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}};b();const y=()=>r("p",{children:"Coming soon..."}),S="_tagline_dqd48_1";var E={tagline:S};const f={title:"Gender Predictor \u{1F64E}\u200D\u2642\uFE0F\u{1F64E}\u200D\u2640\uFE0F",description:"Predict the gender of Vietnamese names"},L=()=>r("div",{children:c("p",{className:E.tagline,children:[r("span",{children:f.title}),r("br",{}),r("span",{className:h.muted,children:f.description})]})});var s;(function(n){n.SINGLE="single",n.BATCH="batch"})(s||(s={}));const x=()=>{const[n,o]=p.exports.useState(s.SINGLE);return{mode:n,setMode:o}},F=n=>{const o=[{value:s.SINGLE,label:"Single"},{value:s.BATCH,label:"Batch"}];return r(g,{options:o,value:n.prefs.mode,setValue:n.prefs.setMode})},P=()=>r("p",{children:"Coming soon..."}),B="_container_44n5x_1",I="_card_44n5x_7",j="_children_44n5x_14";var a={container:B,card:I,children:j};const d={container:a.container,card:[a.card,v.strong,u.strong,u.radius].join(" "),children:a.children},A=()=>{const n=x();return c("div",{className:d.container,children:[r(L,{}),c("div",{className:d.card,children:[r(F,{prefs:n}),c("div",{className:d.children,children:[n.mode===s.SINGLE&&r(P,{}),n.mode===s.BATCH&&r(y,{})]})]})]})};N.render(r(_.StrictMode,{children:r(A,{})}),document.getElementById("root"));
