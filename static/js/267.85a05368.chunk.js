"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[267],{130:function(e,n,t){var r=t(871),i=t(501),u=t(184);n.Z=function(e){var n=e.movies,t=(0,r.TH)();return(0,u.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"/movies/".concat(n),state:{from:t},children:r})},n)}))})}},672:function(e,n,t){t.d(n,{I7:function(){return o},RW:function(){return c},Zh:function(){return u},dp:function(){return a},z4:function(){return i}});var r="a04463f6e73719e916bcf081dea9993b";function i(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r,"&page=1")).then((function(e){return e.json()}))}function u(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&page=1&include_adult=false&query=").concat(e,"&page=1")).then((function(e){return e.json()}))}function o(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.json()}))}function a(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r,"&language=en-US&page=1")).then((function(e){return e.json()}))}function c(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(e){return e.json()}))}},267:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),i=t(791),u=t(501),o=t(672),a=t(184),c=function(e){var n=e.value,t=e.onSubmit,r=e.onChange;return(0,a.jsxs)("form",{onSubmit:t,children:[(0,a.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)}}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})},f=t(130),s=function(){var e,n=(0,i.useState)([]),t=(0,r.Z)(n,2),s=t[0],h=t[1],l=(0,u.lr)(),v=(0,r.Z)(l,2),g=v[0],p=v[1],d=null!==(e=g.get("query"))&&void 0!==e?e:"",m=(0,i.useState)(d),j=(0,r.Z)(m,2),y=j[0],b=j[1];return(0,i.useEffect)((function(){d&&(0,o.Zh)(d).then((function(e){var n=e.results;if(h(n),0===n.length)return alert("Sorry, there are no movies matching your search query. Please try again.")})).catch((function(e){return console.log(e)}))}),[d]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{value:y,onSubmit:function(e){if(e.preventDefault(),""===y)return alert("Please fill in the field!");p({query:y})},onChange:function(e){b(e)}}),(0,a.jsx)("div",{children:s&&(0,a.jsx)(f.Z,{movies:s})})]})}}}]);
//# sourceMappingURL=267.85a05368.chunk.js.map