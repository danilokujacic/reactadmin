(this.webpackJsonpreactadmin=this.webpackJsonpreactadmin||[]).push([[0],{331:function(e,t,a){e.exports=a(478)},333:function(e,t,a){},478:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(182),c=a(291),s=a(193),o=a(546),u=a(537),i=a(248),m=a(280),d=a.n(m),b=a(249),E=a.n(b),f=a(192),h=(a(333),a(90)),j=a(549),p=a(555),O=a(556),v=a(51),w=a(547),x=a(548),y=a(550),F=a(543),C=a(551),g=a(554),N=a(544),P=a(545),k=Object(r.createContext)([{},function(){}]),I=Object(i.a)("https://jsonplaceholder.typicode.com"),S=function(){var e=Object(r.useContext)(k),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Boolean(a),o=Object(f.b)({config:{duration:120},from:{width:c?"0%":"80%"},to:{width:c?"80%":"0%"}});return Object(r.useEffect)((function(){return console.log(a)}),[a]),n.a.createElement(f.a.div,{style:o,className:"blade-info"},c?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"blade-header"},n.a.createElement("h1",null,a.title),n.a.createElement(E.a,{onClick:function(){return l(null)}})),n.a.createElement("div",{className:"blade-body"},a.body)):null)},R=function(e){var t=e.currentSort,a=e.className,s=e.resource,o=e.filters,u=e.displayedFilters,i=e.exporter,m=e.filterValues,b=e.permanentFilter,E=(e.hasCreate,e.basePath),f=(e.selectedIds,e.onUnselectItems,e.showFilter),w=e.maxResults,x=e.total,y=Object(c.a)(e,["currentSort","className","resource","filters","displayedFilters","exporter","filterValues","permanentFilter","hasCreate","basePath","selectedIds","onUnselectItems","showFilter","maxResults","total"]);return n.a.createElement(h.a,Object.assign({className:a},Object(j.c)(y)),o&&Object(r.cloneElement)(o,{resource:s,showFilter:f,displayedFilters:u,filterValues:m,context:"button"}),n.a.createElement(p.a,{basePath:E}),n.a.createElement(O.a,{disabled:0===x,resource:s,sort:t,filter:Object(l.a)(Object(l.a)({},m),b),exporter:i,maxResults:w}),n.a.createElement(v.a,{onClick:function(){alert("Your custom action")},label:"Show calendar"},n.a.createElement(d.a,null)))},V=function(e){var t=Object(r.useContext)(k),a=Object(s.a)(t,2),l=(a[0],a[1]);return n.a.createElement(w.a,Object.assign({},e,{actions:n.a.createElement(R,null)}),n.a.createElement(x.a,{rowClick:function(e,t,a){return function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t[2];l(r)}(e,t,a)}},n.a.createElement(y.a,{source:"userId",reference:"users"},n.a.createElement(F.a,{source:"id"})),n.a.createElement(F.a,{source:"id"}),n.a.createElement(F.a,{source:"title"}),n.a.createElement(F.a,{source:"body"})))},J=function(e){return n.a.createElement(C.a,e,n.a.createElement(g.a,null,n.a.createElement(F.a,{source:"title"}),n.a.createElement(F.a,{source:"teaser"}),n.a.createElement(N.a,{source:"body"}),n.a.createElement(P.a,{label:"Publication date",source:"created_at"})))},U=function(){var e=Object(r.useState)(null);return n.a.createElement(k.Provider,{value:e},n.a.createElement(o.a,{dataProvider:I},n.a.createElement(u.a,{name:"posts",show:J,list:V})),n.a.createElement(S,null))},q=a(11),A=document.querySelector("#root");Object(q.render)(n.a.createElement(U,null),A)}},[[331,1,2]]]);
//# sourceMappingURL=main.f31abda8.chunk.js.map