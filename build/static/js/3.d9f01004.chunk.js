"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[3],{1820:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var c=t(3433),i=t(9439),s=t(4203),r=t(2791),a=t(594),l=t(4197),o=t(1087),u=t(184),m=function(){var n=(0,r.useState)([]),e=(0,i.Z)(n,2),t=e[0],m=e[1],d=(0,r.useState)(!1),f=(0,i.Z)(d,2),h=f[0],j=f[1],x=(0,r.useState)(!1),_=(0,i.Z)(x,2),v=_[0],g=_[1],Z=(0,r.useState)(0),b=(0,i.Z)(Z,2),p=b[0],N=b[1],k=(0,s.Z)(),C=k.loading,w=k.error,S=k.getAllComics;(0,r.useEffect)((function(){y(p,!0)}),[]);var y=function(n,e){j(!e),S(n).then(q)},q=function(n){var e=!1;n.length<8&&(e=!0),m((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(n))})),j((function(n){return!1})),N((function(n){return n+8})),g((function(n){return e}))};var A=function(n){var e=n.map((function(n,e){return(0,u.jsx)("li",{className:"comics__item",item:"comic",children:(0,u.jsxs)(o.rU,{to:"/comics/".concat(n.id),children:[(0,u.jsx)("img",{src:n.thumbnail,alt:"ultimate war",className:"comics__item-img"}),(0,u.jsx)("div",{className:"comics__item-name",children:n.title}),(0,u.jsx)("div",{className:"comics__item-price",children:n.price})]})},e)}));return(0,u.jsx)("ul",{className:"comics__grid",children:e})}(t),E=w?(0,u.jsx)(a.Z,{}):null,F=C&&!h?(0,u.jsx)(l.Z,{}):null;return(0,u.jsxs)("div",{className:"comics__list",item:"comic",children:[E,F,A,(0,u.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:v?"none":"block"},onClick:function(){return y(p)},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},d=t(6966),f=t(4270),h=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(f.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Page with comics list"}),(0,u.jsx)("title",{children:"Comics page"})]}),(0,u.jsx)(d.Z,{}),(0,u.jsx)(m,{})]})}}}]);
//# sourceMappingURL=3.d9f01004.chunk.js.map