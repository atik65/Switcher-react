(this.webpackJsonpswithcher=this.webpackJsonpswithcher||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),j=c.n(r),a=(c(11),c.p,c(12),c(4)),i=c.n(a),b=c(6),d=c(2),o=c(0),l=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),j=Object(d.a)(r,2),a=j[0],l=j[1],h=Object(n.useState)(0),O=Object(d.a)(h,2),x=O[0],p=O[1],u=function(){var e=Object(b.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,l(c),s(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error in fetching data from jsonPlaceholder ");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);if(!0===c)return Object(o.jsx)("div",{className:"container pt-5",children:Object(o.jsx)("h1",{className:"display-4 text-center pt-5 mt-5",children:"Loading..."})});var m=a[x],f=m.name,v=m.username,g=m.email,y=m.address,N=m.phone,w=m.website,C=m.company;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-4 py-2",children:a.map((function(e,t){return Object(o.jsx)("div",{class:" card text-left my-3 pointer ".concat(t===x?"bg":""),children:Object(o.jsx)("div",{onClick:function(){return function(e){p(e)}(t)},class:"card-body",children:e.name})},t)}))}),Object(o.jsx)("div",{className:"col-md-8 mt-5",children:Object(o.jsxs)("div",{className:"container  mt-5 p-5",children:[Object(o.jsxs)("h2",{children:["Name : ",f]}),Object(o.jsxs)("h4",{children:[" UserName : ",v]}),Object(o.jsxs)("p",{children:[" ",g]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Address:"})," ",Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[" Street : ",y.street]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[" Suite : ",y.suite]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[" City : ",y.city]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[" Zipcode : ",y.zipcode]}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Phone : "})," ",N," "]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Website : "})," ",w," "]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Company:"})," ",Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[" Name : ",C.name]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[" Catch Phrase : ",C.catchPhrase]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[" Bs : ",C.bs]}),Object(o.jsx)("br",{})]})]})})]})})})};var h=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),r(e),j(e)}))};j.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.72479f12.chunk.js.map