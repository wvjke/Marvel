"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[973],{749:function(e,a,n){n.r(a),n.d(a,{default:function(){return y}});var s=n(439),r=n(791),t=n(197),c=n(594),i=n(166),l=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=n(184),d=function(e){var a=e.char,n=a.name,s=a.description,r=a.thumbnail,t=a.homepage,c=a.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:n}),(0,o.jsx)("p",{className:"randomchar__descr",children:s}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:t,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:c,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=(0,r.useState)(null),a=(0,s.Z)(e,2),n=a[0],h=a[1],m=(0,i.Z)(),u=m.loading,_=m.error,j=m.getCharacter,v=m.clearError;(0,r.useEffect)((function(){f();var e=setInterval(f,6e4);return function(){clearInterval(e)}}),[]);var x=function(e){h(e)},f=function(){v();var e=Math.floor(400*Math.random())+1011e3;j(e).then(x)},b=_?(0,o.jsx)(c.Z,{}):null,N=u?(0,o.jsx)(t.Z,{}):null,g=u||_||!n?null:(0,o.jsx)(d,{char:n});return(0,o.jsxs)("div",{className:"randomchar",children:[b,N,g,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{onClick:f,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=n(433),u=function(e){var a=(0,r.useState)([]),n=(0,s.Z)(a,2),l=n[0],d=n[1],h=(0,r.useState)(!1),u=(0,s.Z)(h,2),_=u[0],j=u[1],v=(0,r.useState)(210),x=(0,s.Z)(v,2),f=x[0],b=x[1],N=(0,r.useState)(!1),g=(0,s.Z)(N,2),p=g[0],k=g[1],Z=(0,r.useState)(sessionStorage.getItem("activeItem")),y=(0,s.Z)(Z,2),S=y[0],I=y[1],C=(0,i.Z)(),F=C.loading,w=C.error,E=C.getAllCharacters;(0,r.useEffect)((function(){R(f,!0)}),[]);var R=function(e,a){j(!a),E(e).then(A)},A=function(e){var a=!1;e.length<9&&(a=!0),d((function(a){return[].concat((0,m.Z)(a),(0,m.Z)(e))})),j((function(e){return!1})),b((function(e){return e+9})),k((function(e){return a}))},D=function(e){var a=l.filter((function(a){return a.id==e}));sessionStorage.setItem("activeItem",a[0].id)};var M=function(a){var n=a.map((function(a){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(n={objectFit:"unset"}),(0,o.jsxs)("li",{onFocus:function(){D(a.id),I(a.id),e.onCharSelected(a.id)},className:S==a.id?"char__item char__item_selected":"char__item",tabIndex:0,children:[(0,o.jsx)("img",{src:a.thumbnail,alt:a.name,style:n}),(0,o.jsx)("div",{className:"char__name",children:a.name})]},a.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:n})}(l),U=w?(0,o.jsx)(c.Z,{}):null,W=F&&!_?(0,o.jsx)(t.Z,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[U,W,M,(0,o.jsx)("button",{className:"button button__main button__long",disabled:_,style:{display:p?"none":"block"},onClick:function(){return R(f)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},_=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},j=n(87),v=function(e){var a=e.char,n=a.name,s=a.description,r=a.thumbnail,t=a.homepage,c=a.wiki,i=a.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(l={objectFit:"unset"}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:r,alt:"name",style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:n}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:t,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:c,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:s}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,a){var n=+e.resourceURI.substr(43);if(!(a>9))return(0,o.jsx)(j.rU,{to:"/comics/".concat(n),className:"char__comics-item",children:e.name},n)}))]})]})},x=function(e){var a=(0,r.useState)(null),n=(0,s.Z)(a,2),l=n[0],d=n[1],h=(0,i.Z)(),m=h.loading,u=h.error,j=h.getCharacter,x=h.clearError;(0,r.useEffect)((function(){f()}),[]),(0,r.useEffect)((function(){f()}),[e.charId]);var f=function(){var a=e.charId;a&&(x(),j(a).then(b))},b=function(e){d(e)},N=l||m||u?null:(0,o.jsx)(_,{}),g=u?(0,o.jsx)(c.Z,{}):null,p=m?(0,o.jsx)(t.Z,{}):null,k=m||u||!l?null:(0,o.jsx)(v,{char:l});return(0,o.jsxs)("div",{className:"char__info",children:[N,g,p,k]})},f=n(671),b=n(466),N=n(136),g=n(516),p=function(e){(0,N.Z)(n,e);var a=(0,g.Z)(n);function n(){var e;(0,f.Z)(this,n);for(var s=arguments.length,r=new Array(s),t=0;t<s;t++)r[t]=arguments[t];return(e=a.call.apply(a,[this].concat(r))).state={error:!1},e}return(0,b.Z)(n,[{key:"componentDidCatch",value:function(e,a){console.log(e,a),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)(c.Z,{}):this.props.children}}]),n}(r.Component),k=p,Z=n.p+"static/media/vision.067d4ae1936d64a577ce.png",y=function(){var e=(0,r.useState)(+sessionStorage.getItem("activeItem")),a=(0,s.Z)(e,2),n=a[0],t=a[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{children:(0,o.jsx)(h,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(k,{children:(0,o.jsx)(u,{onCharSelected:function(e){t(e)}})}),(0,o.jsx)(k,{children:(0,o.jsx)(x,{charId:n})})]}),(0,o.jsx)("img",{className:"bg-decoration",src:Z,alt:"vision"})]})}}}]);
//# sourceMappingURL=973.a4b2069a.chunk.js.map