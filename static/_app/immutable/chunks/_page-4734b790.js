import{P as n,s as t,M as c}from"./constants-8a352b13.js";const i=!0,l=!1,m=async({url:a})=>{const r=a.searchParams.get("roomid"),s=await(await fetch(n+"/rooms")).json();if(r){const o=s.find(e=>e.room_id===r);o&&t.set(o.id)}else{const o=s.find(e=>e.users_count<c)||null;t.set(o?o.id:null)}return{rooms:s}},f=Object.freeze(Object.defineProperty({__proto__:null,prerender:i,ssr:l,load:m},Symbol.toStringTag,{value:"Module"}));export{f as _,m as l,i as p,l as s};
