"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[296],{2296:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var i,a=t(885),r=t(501),s=t(6871),o=t(2791),c=t(9135),l=t(168),d=(0,t(2499).Z)(r.rU)(i||(i=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n  margin-bottom: 16px;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #010101;\n  border: 1px solid black;\n  border-radius: 10%;\n  margin: 10px;\n  :hover {\n    color: #2196f3;\n  }\n"]))),h=t(184),u=function(){var e,n,t=(0,s.TH)();return(0,h.jsxs)(d,{to:null!==(e=null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:[(0,h.jsx)(c.x_l,{}),"Go back"]})},p=t(4569),x=t.n(p),v=function(e){return x().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=564a0ae757c391da2cffbbed742b8161"))},f=function(e){return x().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=564a0ae757c391da2cffbbed742b8161"))},m="MovieDetailsPage_section_card__LiYJ9",j="MovieDetailsPage_section_foto__lA9D8",b=(0,o.lazy)((function(){return t.e(392).then(t.bind(t,6392))})),g=(0,o.lazy)((function(){return t.e(587).then(t.bind(t,8587))})),_=function(){var e,n=(0,s.UO)().movieId,t=(0,o.useState)(null),i=(0,a.Z)(t,2),c=i[0],l=i[1],d=(0,o.useState)(null),p=(0,a.Z)(d,2),x=p[0],_=p[1];return(0,o.useEffect)((function(){v(n).then(l).catch((function(e){return console.log(e)})),f(n).then(_).catch((function(e){return console.log(e)}))}),[n]),(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)(u,{}),null!==x&&n&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{className:j,src:x.data.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(x.data.backdrop_path):"",alt:x.data.title}),(0,h.jsx)("h1",{children:x.data.title}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:x.data.overview}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("ul",{children:x.data.genres.map((function(e){var n=e.id,t=e.name;return(0,h.jsxs)("span",{children:[t," "]},n)}))}),(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsx)("p",{children:(0,h.jsx)(r.rU,{to:"cast",children:"Casts"})}),(0,h.jsx)("p",{children:(0,h.jsx)(r.rU,{to:"reviews",children:"Reviews"})}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsxs)(s.Z5,{children:[(0,h.jsx)(s.AW,{path:"cast",element:(0,h.jsx)(b,{cast:null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.cast})}),(0,h.jsx)(s.AW,{path:"reviews",element:(0,h.jsx)(g,{movieId:n})})]})})]})]})}}}]);
//# sourceMappingURL=296.97235934.chunk.js.map