"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[252],{354:function(t,e,r){r.d(e,{Z:function(){return o}});r(791);var n=r(689),a=r(87),u="FilmsList_list__mdOd2",c="FilmsList_item__JuRbF",s="FilmsList_link__++tms",i=r(184),o=function(t){var e=t.films,r=t.path,o=(0,n.TH)();return(0,i.jsx)("ul",{className:u,children:null===e||void 0===e?void 0:e.map((function(t){return(0,i.jsx)("li",{className:c,children:(0,i.jsxs)(a.rU,{state:{from:o},to:r?"".concat(r,"+").concat(t.id.toString()):t.id.toString(),className:s,children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title,width:"200"}),t.title]})},t.id)}))})}},436:function(t,e,r){r.d(e,{AX:function(){return o},DF:function(){return f},VQ:function(){return i},cT:function(){return d},cu:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(e),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},751:function(t,e,r){r.d(e,{i:function(){return u}});var n=r(439),a=r(791),u=function(t,e){var r=(0,a.useState)(null),u=(0,n.Z)(r,2),c=u[0],s=u[1],i=(0,a.useState)(null),o=(0,n.Z)(i,2),f=o[0],d=o[1];return(0,a.useEffect)((function(){t(e).then((function(t){return s(t)})).catch((function(t){return d(t.message)}))}),[t,e]),[c,s,f]}},252:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(439),a=r(791),u=r(87),c="Form_SearchForm__xnVJ6",s="Form_SearchFormButton__XH-cE",i="Form_SearchFormButtonLabel__FZYs0",o="Form_SearchFormInput__EQwfW",f=r(184),d=function(t){var e=t.onSubmit,r=(0,a.useState)(""),u=(0,n.Z)(r,2),d=u[0],p=u[1];return(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(d)},className:c,children:[(0,f.jsx)("input",{value:d,name:"query",type:"text",onChange:function(t){p(t.target.value)},className:o}),(0,f.jsx)("button",{className:s,children:(0,f.jsx)("span",{className:i,children:"Search"})})]})},p=r(354),m=r(436),l=r(751),h=function(){var t=(0,u.lr)(),e=(0,n.Z)(t,2),r=e[0],a=e[1],c=r.get("query")||"",s=(0,l.i)(m.cT,c),i=(0,n.Z)(s,1)[0];return i?(0,f.jsxs)("div",{children:[(0,f.jsx)(d,{onSubmit:function(t){a(t?{query:t}:{})}}),(0,f.jsx)(p.Z,{films:i})]}):(0,f.jsx)("h1",{children:"Loading..."})}}}]);
//# sourceMappingURL=252.bbd26c0d.chunk.js.map