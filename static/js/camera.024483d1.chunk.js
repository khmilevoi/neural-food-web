(this["webpackJsonpneural-food-web"]=this["webpackJsonpneural-food-web"]||[]).push([[1],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,a,i=n(10),c=n(11),o=Object(c.c)(r||(r=Object(i.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]))),u={FadeIn:c.b.div(a||(a=Object(i.a)(["\n    animation: "," ","s linear 1;\n"])),o,(function(e){return e.duration}))},s=(n(0),n(1)),d=function(e){var t=e.children;return Object(s.jsx)(u.FadeIn,{duration:1,style:{width:"100%",height:"100%"},children:t})}},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(221),a=n(219),i=(n(0),n(1)),c=function(e){var t=e.type;return Object(i.jsx)(a.a,{icon:t})},o=function(){return Object(i.jsx)(c,{type:r.b})},u=function(){return Object(i.jsx)(c,{type:r.c})},s=function(){return Object(i.jsx)(c,{type:r.a})}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(2),a=n(5),i=Object(r.b)("client/change-stage",(function(e,t){setTimeout((function(){setTimeout((function(){t.dispatch(a.a.actions.changeStage(e.stage))}),e.ms)}))})),c=Object(r.b)("client/set-sbapshot",(function(e,t){var n=e.snapshot,r=e.nextStage;t.dispatch(a.a.actions.setSnapshot(n)),t.dispatch(i({stage:r,ms:0}))}))},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(36),a=n(0),i=n.n(a),c=function(){var e=i.a.useState(window.innerWidth),t=Object(r.a)(e,2),n=t[0],a=t[1],c=i.a.useState(window.innerHeight),o=Object(r.a)(c,2),u=o[0],s=o[1];return i.a.useEffect((function(){var e=function(){a(window.innerWidth),s(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[a,s]),[n,u]}},340:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,u,s,d,h,f,b=n(36),l=n(44),p=n.n(l),j=n(45),v=n(54),w=n(49),x=n(0),O=function(){var e=Object(j.a)(p.a.mark((function e(t,n){var r,a,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(v.a)(t),e.prev=1,a.s();case 3:if((i=a.n()).done){e.next=17;break}return c=i.value,e.prev=5,e.next=8,c(n);case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(5),console.error("MediaStreamCreator",e.t0),r=e.t0;case 15:e.next=3;break;case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),a.e(e.t1);case 22:return e.prev=22,a.f(),e.finish(22);case 25:throw r;case 26:case"end":return e.stop()}}),e,null,[[1,19,22,25],[5,11]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t.video){e.next=2;break}return e.abrupt("return",null);case 2:if(n=document.createElement("canvas"),null!=(r=n.getContext("2d"))){e.next=6;break}return e.abrupt("return",null);case 6:return n.width=t.width,n.height=t.height,r.drawImage(t.video,0,0,t.width,t.height),e.next=11,m(n);case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return new Promise((function(t){e.toBlob((function(e){return t(e)}))}))},y=n(136),k=function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"user"},width:t.width,height:t.height}});case 2:return n=e.sent,e.abrupt("return",{stream:n,needToFlip:!0});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"},width:{ideal:t.height},height:{ideal:t.width}}});case 2:return n=e.sent,e.abrupt("return",{stream:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"},width:{ideal:t.width},height:{ideal:t.height}}});case 2:return n=e.sent,e.abrupt("return",{stream:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=n(10),C=n(11),M=C.b.div(r||(r=Object(z.a)(["\n    position: relative;\n    width: ","px;\n    height: ","px;\n    background-color: black;\n"])),(function(e){return e.width}),(function(e){return e.height})),L=C.b.video(a||(a=Object(z.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transform: scaleX(",");\n"])),(function(e){return e.flip?"-1":"1"})),P=C.b.div(i||(i=Object(z.a)(["\n    color: white;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 50px;\n"]))),F=C.b.div(c||(c=Object(z.a)(['\n    width: 100%;\n    position: absolute;\n    bottom: 50px;\n    display: grid;\n\n    grid-template-areas: "left center right";\n']))),T=C.b.div(o||(o=Object(z.a)(["\n    grid-area: left;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]))),B=C.b.div(u||(u=Object(z.a)(["\n    grid-area: center;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: ",";\n    pointer-events: ",";\n"])),(function(e){return e.disabled?.5:1}),(function(e){return e.disabled?"none":"auto"})),D=C.b.input(s||(s=Object(z.a)(["\n    display: none;\n"]))),I=n(1),U=function(e){var t=e.height,n=e.width,r=e.takeSnapshotElement,a=e.loadPhotoElement,i=e.onLoadPhoto,c=x.useRef(null),o=function(e,t){var n=x.useState(null),r=Object(b.a)(n,2),a=r[0],i=r[1],c=x.useState(),o=Object(b.a)(c,2),u=o[0],s=o[1];return x.useEffect((function(){O(e,t).then((function(e){return e&&i(e)})).catch((function(e){return s(e)}))}),[i,s].concat(Object(w.a)(Object.values(t)),Object(w.a)(e))),[a,u]}([S,E,k],{height:t,width:n}),u=Object(b.a)(o,2),s=u[0],d=u[1];x.useEffect((function(){c.current&&s&&(c.current.srcObject=s.stream)}),[s]);var h,f=(h={video:c.current,width:n,height:t},x.useCallback((function(){return g(h)}),[h])),l=x.useCallback(Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:(t=e.sent)&&i(t);case 4:case"end":return e.stop()}}),e)}))),[f,i]);return Object(I.jsxs)(M,{width:n,height:t,children:[Object(I.jsx)(L,{ref:c,flip:!!(null===s||void 0===s?void 0:s.needToFlip),autoPlay:!0}),d&&!(null===s||void 0===s?void 0:s.stream)&&Object(I.jsx)(P,{children:Object(I.jsx)(y.c,{})}),Object(I.jsxs)(F,{children:[Object(I.jsx)(H,{onLoad:i,children:a}),Object(I.jsx)(B,{onClick:l,disabled:!s||!!d,children:r})]})]})},H=function(e){var t=e.children,n=e.onLoad,r=x.useCallback(function(){var e=Object(j.a)(p.a.mark((function e(t){var r,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===(r=t.currentTarget.files)||void 0===r?void 0:r.item(0))){e.next=9;break}return e.t0=Blob,e.next=5,a.arrayBuffer();case 5:e.t1=e.sent,e.t2=[e.t1],i=new e.t0(e.t2),n(i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n]);return Object(I.jsxs)(T,{children:[Object(I.jsx)("label",{htmlFor:"photo",children:t}),Object(I.jsx)(D,{type:"file",id:"photo",accept:"image/*",onChange:r})]})},J=n(137),W=C.b.div(d||(d=Object(z.a)(["\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]))),R=C.b.div(h||(h=Object(z.a)(["\n    --size: 70px;\n\n    background-color: white;\n    width: var(--size);\n    height: var(--size);\n    border-radius: calc(var(--size) / 2);\n\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n\n    &:active {\n        opacity: 0.8;\n    }\n"]))),X=C.b.div(f||(f=Object(z.a)(["\n    color: white;\n    font-size: 25px;\n"]))),q=n(114),A=n(3),G=n(167),K=function(){return Object(I.jsx)(R,{})},N=function(){return Object(I.jsx)(X,{children:Object(I.jsx)(y.b,{})})};t.default=function(){var e=Object(A.b)(),t=x.useCallback((function(t){e(Object(J.b)({snapshot:t,nextStage:"prediction"}))}),[e]),n=Object(G.a)(),r=Object(b.a)(n,2),a=r[0],i=r[1];return Object(I.jsx)(q.a,{children:Object(I.jsx)(W,{children:Object(I.jsx)(U,{width:a,height:i,takeSnapshotElement:Object(I.jsx)(K,{}),loadPhotoElement:Object(I.jsx)(N,{}),onLoadPhoto:t})})})}}}]);
//# sourceMappingURL=camera.024483d1.chunk.js.map