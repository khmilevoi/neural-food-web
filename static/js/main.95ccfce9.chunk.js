(this["webpackJsonpneural-food-web"]=this["webpackJsonpneural-food-web"]||[]).push([[3],{12:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i}));var r=t(2),c=t(3),o=Object(r.c)({name:"loader",initialState:{status:"default",progress:0},reducers:{changeStatus:function(e,n){e.status=n.payload},setProgress:function(e,n){e.progress=n.payload}}}),a=function(e){return e.loader},i=function(){return Object(c.c)(a)}},13:function(e,n,t){"use strict";var r=t(14);t.o(r,"clientSlice")&&t.d(n,"clientSlice",(function(){return r.clientSlice})),t.o(r,"useClient")&&t.d(n,"useClient",(function(){return r.useClient}));var c=t(5);t.d(n,"clientSlice",(function(){return c.a})),t.d(n,"useClient",(function(){return c.b}))},14:function(e,n){},32:function(e,n,t){"use strict";t.r(n);var r,c=t(0),o=t.n(c),a=t(6),i=t.n(a),u={stage:"camera",component:Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,340))}))},s=[{stage:["load-model","load-labels"],component:Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(2)]).then(t.bind(null,339))}))},u,{stage:"prediction",component:Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(2)]).then(t.bind(null,341))}))}],l=t(13),d=t(1),b=function(e){var n,t=e.pages,r=l.useClient(),o=c.useMemo((function(){return t.find((function(e){return e.stage===r.stage||e.stage.includes(r.stage)}))}),[r.stage,t]),a=null!==(n=null===o||void 0===o?void 0:o.component)&&void 0!==n?n:c.Fragment;return Object(d.jsx)(a,{stage:r.stage})},f=t(3),g=t(2),j=t(5),p=t(12),h=Object(g.a)({devTools:!0,reducer:{client:j.a.reducer,loader:p.a.reducer},middleware:Object(g.d)({serializableCheck:!1})}),m=(h.getState(),function(e){var n=e.children;return Object(d.jsx)(f.a,{store:h,children:Object(d.jsx)(c.Suspense,{fallback:"",children:n})})}),O=t(10),v=t(11),y=Object(v.a)(r||(r=Object(O.a)(["\n    body, html, #root {\n      font-family: sans-serif;\n      width: 100%;\n      height: 100%;\n      padding: 0;\n      margin: 0;\n      overscroll-behavior-y: contain;\n    }\n    \n    * {\n      box-sizing: border-box;\n    }\n"])));function S(){return Object(d.jsxs)(m,{children:[Object(d.jsx)(y,{}),Object(d.jsx)(b,{pages:s})]})}i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},5:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i}));var r=t(2),c=t(3),o=Object(r.c)({name:"client",initialState:{stage:"load-model"},reducers:{setModel:function(e,n){e.model=n.payload},setLabels:function(e,n){e.labels=n.payload},changeStage:function(e,n){e.stage=n.payload},setSnapshot:function(e,n){e.snapshot=n.payload}}}),a=function(e){return e.client},i=function(){return Object(c.c)(a)}}},[[32,4,6]]]);
//# sourceMappingURL=main.95ccfce9.chunk.js.map