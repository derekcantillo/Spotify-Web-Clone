import{r as j,u as L,d as V,b as M,a as b,j as o}from"./index.b4829431.js";import{u as Q,C}from"./useChannels.33fe8584.js";import{N as T}from"./NavBar.6cf0d452.js";import{c as I}from"./http-commons.9070e3fd.js";const H=c=>{const[d,f]=j.exports.useState(),[m,N]=j.exports.useState(),[y,h]=j.exports.useState(!0);j.exports.useEffect(()=>{u(),O()},[c]);const u=async()=>{const g=await I.get(`audio_clips?find[query]=${c}`);f(g.data.body),h(!1)},O=async()=>{const g=await I.get(`channels?find[title]=${c}`);N(g.data.body),h(!1)};return{audios:d,channels:m,isloading:y}};var D={},z=c=>encodeURIComponent(c).replace(/[!'()*]/g,d=>`%${d.charCodeAt(0).toString(16).toUpperCase()}`),B="%[a-f0-9]{2}",_=new RegExp(B,"gi"),U=new RegExp("("+B+")+","gi");function E(c,d){try{return decodeURIComponent(c.join(""))}catch{}if(c.length===1)return c;d=d||1;var f=c.slice(0,d),m=c.slice(d);return Array.prototype.concat.call([],E(f),E(m))}function G(c){try{return decodeURIComponent(c)}catch{for(var d=c.match(_),f=1;f<d.length;f++)c=E(d,f).join(""),d=c.match(_);return c}}function J(c){for(var d={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},f=U.exec(c);f;){try{d[f[0]]=decodeURIComponent(f[0])}catch{var m=G(f[0]);m!==f[0]&&(d[f[0]]=m)}f=U.exec(c)}d["%C2"]="\uFFFD";for(var N=Object.keys(d),y=0;y<N.length;y++){var h=N[y];c=c.replace(new RegExp(h,"g"),d[h])}return c}var K=function(c){if(typeof c!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof c+"`");try{return c=c.replace(/\+/g," "),decodeURIComponent(c)}catch{return J(c)}},P=(c,d)=>{if(!(typeof c=="string"&&typeof d=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(d==="")return[c];const f=c.indexOf(d);return f===-1?[c]:[c.slice(0,f),c.slice(f+d.length)]},W=function(c,d){for(var f={},m=Object.keys(c),N=Array.isArray(d),y=0;y<m.length;y++){var h=m[y],u=c[h];(N?d.indexOf(h)!==-1:d(h,u,c))&&(f[h]=u)}return f};(function(c){const d=z,f=K,m=P,N=W,y=r=>r==null,h=Symbol("encodeFragmentIdentifier");function u(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const a=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[i(e,r),"[",a,"]"].join("")]:[...t,[i(e,r),"[",i(a,r),"]=",i(n,r)].join("")]};case"bracket":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[i(e,r),"[]"].join("")]:[...t,[i(e,r),"[]=",i(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[i(e,r),":list="].join("")]:[...t,[i(e,r),":list=",i(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||r.skipNull&&a===null||r.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[i(t,r),e,i(a,r)].join("")]:[[n,i(a,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,i(e,r)]:[...t,[i(e,r),"=",i(n,r)].join("")]}}function O(r){let e;switch(r.arrayFormat){case"index":return(t,n,a)=>{if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][e[1]]=n};case"bracket":return(t,n,a)=>{if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"colon-list-separator":return(t,n,a)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"comma":case"separator":return(t,n,a)=>{const l=typeof n=="string"&&n.includes(r.arrayFormatSeparator),s=typeof n=="string"&&!l&&S(n,r).includes(r.arrayFormatSeparator);n=s?S(n,r):n;const F=l||s?n.split(r.arrayFormatSeparator).map(q=>S(q,r)):n===null?n:S(n,r);a[t]=F};case"bracket-separator":return(t,n,a)=>{const l=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!l){a[t]=n&&S(n,r);return}const s=n===null?[]:n.split(r.arrayFormatSeparator).map(F=>S(F,r));if(a[t]===void 0){a[t]=s;return}a[t]=[].concat(a[t],s)};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[].concat(a[t],n)}}}function g(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function i(r,e){return e.encode?e.strict?d(r):encodeURIComponent(r):r}function S(r,e){return e.decode?f(r):r}function p(r){return Array.isArray(r)?r.sort():typeof r=="object"?p(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function A(r){const e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function R(r){let e="";const t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function $(r){r=A(r);const e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function x(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function w(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),g(e.arrayFormatSeparator);const t=O(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;for(const a of r.split("&")){if(a==="")continue;let[l,s]=m(e.decode?a.replace(/\+/g," "):a,"=");s=s===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?s:S(s,e),t(S(l,e),s,n)}for(const a of Object.keys(n)){const l=n[a];if(typeof l=="object"&&l!==null)for(const s of Object.keys(l))l[s]=x(l[s],e);else n[a]=x(l,e)}return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((a,l)=>{const s=n[l];return Boolean(s)&&typeof s=="object"&&!Array.isArray(s)?a[l]=p(s):a[l]=s,a},Object.create(null))}c.extract=$,c.parse=w,c.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),g(e.arrayFormatSeparator);const t=s=>e.skipNull&&y(r[s])||e.skipEmptyString&&r[s]==="",n=u(e),a={};for(const s of Object.keys(r))t(s)||(a[s]=r[s]);const l=Object.keys(a);return e.sort!==!1&&l.sort(e.sort),l.map(s=>{const F=r[s];return F===void 0?"":F===null?i(s,e):Array.isArray(F)?F.length===0&&e.arrayFormat==="bracket-separator"?i(s,e)+"[]":F.reduce(n(s),[]).join("&"):i(s,e)+"="+i(F,e)}).filter(s=>s.length>0).join("&")},c.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);const[t,n]=m(r,"#");return Object.assign({url:t.split("?")[0]||"",query:w($(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:S(n,e)}:{})},c.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[h]:!0},e);const t=A(r.url).split("?")[0]||"",n=c.extract(r.url),a=c.parse(n,{sort:!1}),l=Object.assign(a,r.query);let s=c.stringify(l,e);s&&(s=`?${s}`);let F=R(r.url);return r.fragmentIdentifier&&(F=`#${e[h]?i(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${t}${s}${F}`},c.pick=(r,e,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[h]:!1},t);const{url:n,query:a,fragmentIdentifier:l}=c.parseUrl(r,t);return c.stringifyUrl({url:n,query:N(a,e),fragmentIdentifier:l},t)},c.exclude=(r,e,t)=>{const n=Array.isArray(e)?a=>!e.includes(a):(a,l)=>!e(a,l);return c.pick(r,n,t)}})(D);const v=()=>{const c=L(),d=V(),{channelsRecommended:f}=Q();M(i=>i.ui);const m=i=>{c(`/channel/${i}`)},N=i=>{c(`/episode/${i}`)},{q:y=""}=D.parse(d.search),h=y,{audios:u,isloading:O,channels:g}=H(h);return b("div",{className:"_searchbar search-content",children:[o(T,{}),o("div",{className:"_home home-sections",children:h===""?b("section",{children:[o("div",{className:"_home section-title",children:o("h1",{children:"Description"})}),o("div",{className:"_home recommended-content",children:!O&&f.map(i=>o("div",{onClick:()=>m(i.id),children:o(C,{channel:i})},i.id))})]}):b("div",{children:[o("div",{className:"_home section-title",children:b("h1",{children:["Search results: ",b("small",{children:['"',h,'"']})]})}),b("section",{children:[o("div",{className:"_home section-title",children:o("h1",{children:"Channels"})}),o("div",{className:"_home recommended-channels-content",children:g&&(g==null?void 0:g.channels.length)>0?g==null?void 0:g.channels.map(i=>o("div",{onClick:()=>m(i.id),children:o(C,{channel:i})},i.id)):o("div",{className:"_home section-title",children:o("h2",{children:"No channels found..."})})}),o("div",{className:"_home section-title",children:o("h1",{children:"Episodes"})}),u&&(u==null?void 0:u.audio_clips.length)>0?o("div",{className:"_home results-content",children:h!=""&&(u==null?void 0:u.audio_clips.map(i=>o("div",{onClick:()=>N(i.id),children:o(C,{audio:i})},i.id)))}):o("div",{className:"_home section-title",children:o("h2",{children:"No episodes found..."})})]})]})})]})};export{v as default};