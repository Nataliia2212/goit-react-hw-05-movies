"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[156],{436:function(t,e,r){r.d(e,{AX:function(){return o},DF:function(){return p},VQ:function(){return i},cT:function(){return d},cu:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(e),{params:{api_key:"be10d348a4d2768bca02d2487e67ca9d"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},751:function(t,e,r){r.d(e,{i:function(){return u}});var n=r(439),a=r(791),u=function(t,e){var r=(0,a.useState)(null),u=(0,n.Z)(r,2),c=u[0],s=u[1],i=(0,a.useState)(null),o=(0,n.Z)(i,2),p=o[0],d=o[1];return(0,a.useEffect)((function(){t(e).then((function(t){return s(t)})).catch((function(t){return d(t.message)}))}),[t,e]),[c,s,p]}},156:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n=r(439),a=r(791),u=r(87),c=r(689),s="Form_SearchForm__kOI3v",i="Form_SearchFormButton__IoHKr",o="Form_SearchFormButtonLabel__gujM4",p="Form_SearchFormInput__1+cwp",d=r(184),f=function(t){var e=t.onSubmit,r=(0,a.useState)(""),u=(0,n.Z)(r,2),c=u[0],f=u[1];return(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c)},className:s,children:[(0,d.jsx)("input",{value:c,name:"query",type:"text",onChange:function(t){f(t.target.value)},className:p}),(0,d.jsx)("button",{className:i,children:(0,d.jsx)("span",{className:o,children:"Search"})})]})},m=r(436),l=r(751),v="Movies_list__VxpD9",h="Movies_item__CKmNv",_="Movies_link__GdIHV",b=function(){var t=(0,u.lr)(),e=(0,n.Z)(t,2),r=e[0],a=e[1],s=r.get("query")||"",i=(0,l.i)(m.cT,s),o=(0,n.Z)(i,1)[0],p=(0,c.TH)();return o?(0,d.jsxs)("div",{children:[(0,d.jsx)(f,{onSubmit:function(t){a(t?{query:t}:{})}}),(0,d.jsx)("ul",{className:v,children:null===o||void 0===o?void 0:o.map((function(t){return(0,d.jsx)("li",{className:h,children:(0,d.jsxs)(u.rU,{state:{from:p},to:t.id.toString(),className:_,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title,width:"200"}),t.title]})},t.id)}))})]}):(0,d.jsx)("h1",{children:"Loading..."})}}}]);
//# sourceMappingURL=156.836fdb2c.chunk.js.map