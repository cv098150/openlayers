import{O as f,T as m,M as y,V as g,f as h,X as w,a as b,b as v,D as L,G as E}from"./vendor.a22294a1.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};O();let i=document.getElementById("change"),c=document.getElementById("draw"),S=document.getElementById("reload"),u=document.getElementById("save"),A=document.getElementById("show"),a=new f,l=new m({source:a});const p=new y({layers:[l],target:"map-container",view:new g({center:h([0,0]),zoom:2})});S.addEventListener("click",function(){window.location.reload()});i.addEventListener("click",function(r){if(i.getAttribute("data-type")=="XYZ"){const o="xa04PgV20nbT2LNRdFnA",s='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';a=new w({url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key="+o,attributions:s,crossOrigin:"anonymous",tileSize:512}),l.setSource(a),i.setAttribute("data-type","OSM")}else a=new f,l.setSource(a),i.setAttribute("data-type","XYZ")});c.addEventListener("click",function(r){c.classList.add("active"),a=new b,l=new v({source:a}),p.addLayer(l),p.addInteraction(new L({type:"Polygon",source:a})),i.setAttribute("disabled","true"),c.setAttribute("disabled","true"),u.removeAttribute("disabled")});let B=new E({featureProjection:"EPSG:3857"});u.addEventListener("click",function(r){c.classList.remove("active");let t=a.getFeatures(),o=B.writeFeatures(t);k(o),c.setAttribute("disabled","true"),u.setAttribute("disabled","true")});A.addEventListener("click",function(){let r=j();return console.log(r),!1});function k(r){let t=JSON.stringify(r);fetch("api/index.php",{method:"POST",cache:"no-cache",body:t}).then(o=>o.json()).catch(o=>console.error("Error:",o)).then(function(s){alert(s.msg)})}function j(){let r;fetch("api/index.php").then(function(t){return t.json()}).then(function(t){r=t}),console.log(r)}
//# sourceMappingURL=index.423f8303.js.map
