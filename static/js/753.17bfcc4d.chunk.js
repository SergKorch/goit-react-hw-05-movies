"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{6753:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(885),s=r(501),c=r(6871),n=r(2791),o={SearchForm:"MoviesPage_SearchForm__kpN7l",SearchForm__input:"MoviesPage_SearchForm__input__HrmnZ",SearchForm__button:"MoviesPage_SearchForm__button__1PIUV",section__search:"MoviesPage_section__search__NAvDC",search__item:"MoviesPage_search__item__iWLv0"},i=r(4569),_=r.n(i),l=function(e){return console.log(e),_().get("https://api.themoviedb.org/3/search/movie?api_key=564a0ae757c391da2cffbbed742b8161&query=".concat(e))},u=r(184),h=function(){var e=(0,n.useState)(null),t=(0,a.Z)(e,2),r=t[0],i=t[1],_=(0,c.TH)(),h=(0,s.lr)(),m=(0,a.Z)(h,2),f=m[0],d=m[1],v=f.get("query");return(0,n.useEffect)((function(){v?l(v).then(i).catch((function(e){return console.log(e)})):console.log("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e")}),[v]),(0,u.jsxs)("div",{className:o.SearchForm,children:[(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({query:e.currentTarget.elements.query.value})},children:[(0,u.jsx)("input",{className:o.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",name:"query"}),(0,u.jsx)("button",{type:"submit",className:o.SearchForm__button,children:(0,u.jsx)("span",{className:o.SearchForm__button__label,children:"Search"})})]}),r&&(0,u.jsxs)("div",{className:o.section__search,children:[r&&(0,u.jsx)("h2",{className:o.title,children:"Search results"}),(0,u.jsx)("ul",{children:r.data.results.map((function(e){var t=e.id,r=e.original_title;return(0,u.jsx)("li",{className:o.search__item,children:(0,u.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:_},className:o.trending__list,children:r})},t)}))})]})]})}}}]);
//# sourceMappingURL=753.17bfcc4d.chunk.js.map