"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[587],{8587:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var i=t(885),r=t(2791),c=t(4569),u=t.n(c),o=function(e){return u().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=564a0ae757c391da2cffbbed742b8161"))},s=t(184),l=function(e){var n,t,c=e.movieId,u=(0,r.useState)(null),l=(0,i.Z)(u,2),a=l[0],d=l[1];return(0,r.useEffect)((function(){o(c).then(d).catch((function(e){return console.log(e)}))}),[c]),(0,s.jsxs)("div",{children:[c&&0===(null===a||void 0===a||null===(n=a.data)||void 0===n||null===(t=n.results)||void 0===t?void 0:t.length)&&(0,s.jsx)("h2",{children:"No reviews"}),(0,s.jsx)("ul",{children:a&&c&&a.data.results.map((function(e){var n=e.id,t=e.author,i=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:t}),(0,s.jsx)("p",{children:i})]},n)}))})]})}}}]);
//# sourceMappingURL=587.c38ea52a.chunk.js.map