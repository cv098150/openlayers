import{O as f,T as g,M as h,V as w,f as L,X as S,a as p,b as y,D as b,G as m}from"./vendor.a22294a1.js";const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};v();let o=new f,s=new g({source:o});const u=new h({layers:[s],target:"map-container",view:new w({center:L([0,0]),zoom:2})});let i=document.getElementById("change");i.addEventListener("click",function(a){if(i.getAttribute("data-type")=="XYZ"){const t="xa04PgV20nbT2LNRdFnA",c='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';o=new S({url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key="+t,attributions:c,crossOrigin:"anonymous",tileSize:512}),s.setSource(o),i.setAttribute("data-type","OSM")}else o=new f,s.setSource(o),i.setAttribute("data-type","XYZ")});let d=document.getElementById("draw");d.addEventListener("click",function(a){let e=d.getAttribute("data-status");d.setAttribute("data-status","true"),e&&(o=new p,s=new y({source:o}),u.addLayer(s),u.addInteraction(new b({type:"Polygon",source:o})))});let E=document.getElementById("clear");E.addEventListener("click",function(){o.clear()});let O=document.getElementById("save"),k=new m({featureProjection:"EPSG:3857"});O.addEventListener("click",function(a){let e=o.getFeatures(),t=k.writeFeatures(e);B(t)});let P=document.getElementById("show");P.addEventListener("click",function(a){let e=JSON.parse(j()),t=new y({source:new p({features:new m().readFeatures(e,{dataProjection:"EPSG: 3857",featureProjection:"EPSG: 3857"})})});u.addLayer(t)});function B(a){let e=JSON.stringify(a);fetch("../api/index.php",{method:"POST",cache:"no-cache",body:e}).then(t=>t.json()).catch(t=>console.error("Error:",t)).then(t=>console.log("Success:",t))}function j(){return fetch("../api/index.php").then(function(e){if(e.status!==200){console.log("Looks like there was a problem. Status Code: "+e.status);return}e.json().then(function(t){return t})}).catch(function(e){console.log("Fetch Error :-S",e)})}
//# sourceMappingURL=index.4225fd22.js.map
