"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[666],{6666:function(e,i,s){s.r(i),s.d(i,{default:function(){return g}});var n=s(885),t=s(501),a=s(6871),r=s(2791),c=s(9135),l="BackLink_link__Echxs",o=s(184),d=function(){var e,i,s=(0,a.TH)();return(0,o.jsx)("div",{className:l,children:(0,o.jsxs)(t.rU,{to:null!==(e=null===(i=s.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/",children:[(0,o.jsx)(c.x_l,{}),"Go back"]})})},h=s(4569),v=s.n(h),_=function(e){return v().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=564a0ae757c391da2cffbbed742b8161"))},u="MovieDetailsPage_section_card__CHh-E",x="MovieDetailsPage_section_foto__r6S3m",j="MovieDetailsPage_section_info__-ESOf",f="MovieDetailsPage_section_film__WlAL7",m=(0,r.lazy)((function(){return s.e(747).then(s.bind(s,5747))})),p=(0,r.lazy)((function(){return s.e(81).then(s.bind(s,4081))})),g=function(){var e=(0,a.UO)().movieId,i=(0,r.useState)(null),s=(0,n.Z)(i,2),c=s[0],l=s[1];return(0,r.useEffect)((function(){_(e).then(l).catch((function(e){return console.log(e)}))}),[e]),(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)(d,{}),null!==c&&e&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("img",{className:x,src:c.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(c.data.poster_path):"",alt:c.data.title}),(0,o.jsxs)("div",{className:j,children:[(0,o.jsx)("h1",{children:c.data.title}),(0,o.jsxs)("p",{children:["User Score: ",10*c.data.vote_average,"%"]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:c.data.overview}),(0,o.jsx)("h2",{children:"Genres"}),(0,o.jsx)("ul",{children:c.data.genres.map((function(e){var i=e.id,s=e.name;return(0,o.jsxs)("span",{children:[s," "]},i)}))})]})]}),(0,o.jsx)("h2",{children:"Additional information"}),(0,o.jsx)("p",{children:(0,o.jsx)(t.rU,{to:"cast",children:"Casts"})}),(0,o.jsx)("p",{children:(0,o.jsx)(t.rU,{to:"reviews",children:"Reviews"})}),(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsxs)(a.Z5,{children:[(0,o.jsx)(a.AW,{path:"cast",element:(0,o.jsx)(m,{movieId:e})}),(0,o.jsx)(a.AW,{path:"reviews",element:(0,o.jsx)(p,{movieId:e})})]})})]})]})}}}]);
//# sourceMappingURL=666.35f224b4.chunk.js.map