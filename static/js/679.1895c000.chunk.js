"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[679],{3679:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(885),a=n(501),r=n(6871),s=n(2791),c=n(4569),o=n.n(c),_=function(){return o().get("https://api.themoviedb.org/3/trending/movie/week?api_key=564a0ae757c391da2cffbbed742b8161")},l="HomePage_section__trending__GXhC2",u="HomePage_title__Iqtik",d="HomePage_trending__item__uz5Ms",h="HomePage_trending__list__5AFqw",m=n(184),f=function(){var e=(0,r.TH)(),t=(0,s.useState)(null),n=(0,i.Z)(t,2),c=n[0],o=n[1];return(0,s.useEffect)((function(){_().then(o).catch((function(e){return console.log(e)}))}),[]),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("h2",{className:u,children:"Trending today"}),(0,m.jsx)("ul",{children:c&&c.data.results.map((function(t){var n=t.id,i=t.original_title;return(0,m.jsx)("li",{className:d,children:(0,m.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:e},className:h,children:i})},n)}))})]})}}}]);
//# sourceMappingURL=679.1895c000.chunk.js.map