(this["webpackJsonpneural-food-web"]=this["webpackJsonpneural-food-web"]||[]).push([[1],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,a,i=n(10),c=n(11),o=Object(c.c)(r||(r=Object(i.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]))),u={FadeIn:c.b.div(a||(a=Object(i.a)(["\n    animation: "," ","s linear 1;\n"])),o,(function(e){return e.duration}))},s=(n(0),n(1)),d=function(e){var t=e.children;return Object(s.jsx)(u.FadeIn,{duration:1,style:{width:"100%",height:"100%"},children:t})}},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(220),a=n(218),i=(n(0),n(1)),c=function(e){var t=e.type;return Object(i.jsx)(a.a,{icon:t})},o=function(){return Object(i.jsx)(c,{type:r.b})},u=function(){return Object(i.jsx)(c,{type:r.c})},s=function(){return Object(i.jsx)(c,{type:r.a})}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(2),a=n(5),i=Object(r.b)("client/change-stage",(function(e,t){setTimeout((function(){setTimeout((function(){t.dispatch(a.a.actions.changeStage(e.stage))}),e.ms)}))})),c=Object(r.b)("client/set-sbapshot",(function(e,t){var n=e.snapshot,r=e.nextStage;t.dispatch(a.a.actions.setSnapshot(n)),t.dispatch(i({stage:r,ms:0}))}))},339:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,u,s,d,h,f,b=n(37),l=n(44),p=n.n(l),j=n(45),v=n(54),w=n(49),x=n(0),O=n.n(x),g=function(){var e=Object(j.a)(p.a.mark((function e(t,n){var r,a,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(v.a)(t),e.prev=1,a.s();case 3:if((i=a.n()).done){e.next=17;break}return c=i.value,e.prev=5,e.next=8,c(n);case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(5),console.error("MediaStreamCreator",e.t0),r=e.t0;case 15:e.next=3;break;case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),a.e(e.t1);case 22:return e.prev=22,a.f(),e.finish(22);case 25:throw r;case 26:case"end":return e.stop()}}),e,null,[[1,19,22,25],[5,11]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t.video){e.next=2;break}return e.abrupt("return",null);case 2:if(n=document.createElement("canvas"),null!=(r=n.getContext("2d"))){e.next=6;break}return e.abrupt("return",null);case 6:return n.width=t.width,n.height=t.height,r.drawImage(t.video,0,0,t.width,t.height),e.next=11,y(n);case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return new Promise((function(t){e.toBlob((function(e){return t(e)}))}))},k=n(136),S=function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"user"},width:t.width,height:t.height}});case 2:return n=e.sent,e.abrupt("return",{stream:n,needToFlip:!0});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"},width:t.height,height:t.width}});case 2:return n=e.sent,e.abrupt("return",{stream:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"},width:t.width,height:t.height}});case 2:return n=e.sent,e.abrupt("return",{stream:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n(10),M=n(11),L=M.b.div(r||(r=Object(C.a)(["\n    position: relative;\n    width: ","px;\n    height: ","px;\n    background-color: black;\n"])),(function(e){return e.width}),(function(e){return e.height})),P=M.b.video(a||(a=Object(C.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transform: scaleX(",");\n"])),(function(e){return e.flip?"-1":"1"})),F=M.b.div(i||(i=Object(C.a)(["\n    color: white;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 50px;\n"]))),T=M.b.div(c||(c=Object(C.a)(['\n    width: 100%;\n    position: absolute;\n    bottom: 50px;\n    display: grid;\n\n    grid-template-areas: "left center right";\n']))),B=M.b.div(o||(o=Object(C.a)(["\n    grid-area: left;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]))),D=M.b.div(u||(u=Object(C.a)(["\n    grid-area: center;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: ",";\n    pointer-events: ",";\n"])),(function(e){return e.disabled?.5:1}),(function(e){return e.disabled?"none":"auto"})),I=M.b.input(s||(s=Object(C.a)(["\n    display: none;\n"]))),U=n(1),H=function(e){var t=e.height,n=e.width,r=e.takeSnapshotElement,a=e.loadPhotoElement,i=e.onLoadPhoto,c=x.useRef(null),o=function(e,t){var n=x.useState(null),r=Object(b.a)(n,2),a=r[0],i=r[1],c=x.useState(),o=Object(b.a)(c,2),u=o[0],s=o[1];return x.useEffect((function(){g(e,t).then((function(e){return e&&i(e)})).catch((function(e){return s(e)}))}),[i,s].concat(Object(w.a)(Object.values(t)),Object(w.a)(e))),[a,u]}([E,z,S],{height:t,width:n}),u=Object(b.a)(o,2),s=u[0],d=u[1];x.useEffect((function(){c.current&&s&&(c.current.srcObject=s.stream)}),[s]);var h,f=(h={video:c.current,width:n,height:t},x.useCallback((function(){return m(h)}),[h])),l=x.useCallback(Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:(t=e.sent)&&i(t);case 4:case"end":return e.stop()}}),e)}))),[f,i]);return Object(U.jsxs)(L,{width:n,height:t,children:[Object(U.jsx)(P,{ref:c,flip:!!(null===s||void 0===s?void 0:s.needToFlip),autoPlay:!0}),d&&Object(U.jsx)(F,{children:Object(U.jsx)(k.c,{})}),Object(U.jsxs)(T,{children:[Object(U.jsx)(J,{onLoad:i,children:a}),Object(U.jsx)(D,{onClick:l,disabled:!s||!!d,children:r})]})]})},J=function(e){var t=e.children,n=e.onLoad,r=x.useCallback(function(){var e=Object(j.a)(p.a.mark((function e(t){var r,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===(r=t.currentTarget.files)||void 0===r?void 0:r.item(0))){e.next=9;break}return e.t0=Blob,e.next=5,a.arrayBuffer();case 5:e.t1=e.sent,e.t2=[e.t1],i=new e.t0(e.t2),n(i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n]);return Object(U.jsxs)(B,{children:[Object(U.jsx)("label",{htmlFor:"photo",children:t}),Object(U.jsx)(I,{type:"file",id:"photo",onChange:r})]})},W=n(137),R=M.b.div(d||(d=Object(C.a)(["\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]))),X=M.b.div(h||(h=Object(C.a)(["\n    --size: 70px;\n\n    background-color: white;\n    width: var(--size);\n    height: var(--size);\n    border-radius: calc(var(--size) / 2);\n\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n\n    &:active {\n        opacity: 0.8;\n    }\n"]))),q=M.b.div(f||(f=Object(C.a)(["\n    color: white;\n    font-size: 25px;\n"]))),A=n(114),G=n(3),K=function(){return Object(U.jsx)(X,{})},N=function(){return Object(U.jsx)(q,{children:Object(U.jsx)(k.b,{})})};t.default=function(){var e=Object(G.b)(),t=x.useCallback((function(t){e(Object(W.b)({snapshot:t,nextStage:"prediction"}))}),[e]),n=function(){var e=O.a.useState(window.innerWidth),t=Object(b.a)(e,2),n=t[0],r=t[1],a=O.a.useState(window.innerHeight),i=Object(b.a)(a,2),c=i[0],o=i[1];return O.a.useEffect((function(){var e=function(){r(window.innerWidth),o(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[r,o]),[n,c]}(),r=Object(b.a)(n,2),a=r[0],i=r[1];return Object(U.jsx)(A.a,{children:Object(U.jsx)(R,{children:Object(U.jsx)(H,{width:a,height:i,takeSnapshotElement:Object(U.jsx)(K,{}),loadPhotoElement:Object(U.jsx)(N,{}),onLoadPhoto:t})})})}}}]);
//# sourceMappingURL=camera.2b9b85c4.chunk.js.map