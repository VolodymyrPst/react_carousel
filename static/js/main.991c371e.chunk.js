(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),c=n(1),r=n(5),s=n(6),o=n(9),u=n(7),l=n(2),m=n.n(l),b=(n(14),n(8)),j=n(0),h=function(e){var t=e.labelFor,n=e.name,a=e.type,i=e.value,c=e.max,r=e.method;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:t,children:n}),Object(j.jsx)("input",{min:"0",max:c,name:n,type:a,id:t,value:i,onChange:function(e){r({value:e.target.value,type:n})}})]})},p=(n(16),function(e){var t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,c=e.animationDuration,r=e.infinite,s=e.changeState,o=Object(l.useRef)(null),u=Object(l.useState)(0),m=Object(b.a)(u,2),p=m[0],d=m[1],f=function(){Math.abs(p)<(t.length-+n)*+i?d((function(){return p-+n*+i})):r&&d(0)},O=function(e){switch(e){case"Prev":p<0&&d((function(){return p+ +n*+i}));break;case"Next":f()}};return Object(l.useEffect)((function(){return r&&(o.current=setInterval((function(){f()}),+c)),function(){o.current&&clearInterval(o.current)}}),[p]),Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("div",{className:"Carousel__wrapper",style:{width:"".concat(+a*+i,"px")},children:Object(j.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(p,"px)"),transition:"transform ".concat(c,"ms")},children:t.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:e,alt:"".concat(t),className:"Carousel__image",style:{width:"".concat(i,"px"),height:"".concat(i,"px")}},e)})}))})}),Object(j.jsxs)("div",{className:"Carousel__controls",children:[Object(j.jsx)("button",{type:"button",className:0===p?"Carousel__end":"Carousel__btn",onClick:function(){return O("Prev")},children:"Prev"}),Object(j.jsx)("div",{className:"Carousel__inputs",children:Object(j.jsxs)("form",{action:"",className:"Carousel__form",children:[Object(j.jsx)(h,{labelFor:"item-width",type:"number",name:"Item width",max:"260",value:i,method:s},"Item width"),Object(j.jsx)(h,{labelFor:"frame-size",type:"number",name:"Frame size",max:"13",value:a,method:s},"Frame size"),Object(j.jsx)(h,{labelFor:"step",type:"number",name:"Step",max:"6",value:n,method:s},"Step"),Object(j.jsx)(h,{labelFor:"animation-duration",type:"number",name:"Duration",max:"10000",value:c,method:s},"Duration"),Object(j.jsx)("label",{htmlFor:"cyclic",children:"Infinite"}),Object(j.jsx)("input",{id:"cyclic",name:"cyclic",type:"checkbox",onChange:function(){return s({type:"infinite",bool:!r})}},"cyclic")]})}),Object(j.jsx)("button",{type:"button","data-cy":"next",className:Math.abs(p)>=(t.length-+n)*+i?"Carousel__end":"Carousel__btn",onClick:function(){return O("Next")},children:"Next"})]})]})}),d=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:"130",frameSize:"3",step:"2",animationDuration:"1000",infinite:!1},e.stateHandler=function(t){switch(t.type){case"infinite":e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{infinite:t.bool})}));break;case"Item width":e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{itemWidth:t.value})}));break;case"Frame size":e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{frameSize:t.value})}));break;case"Step":e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{step:t.value})}));break;case"Duration":e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{animationDuration:t.value})}))}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.itemWidth,a=e.frameSize,i=e.step,c=e.animationDuration,r=e.infinite;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(j.jsx)(p,{images:t,step:i,frameSize:a,itemWidth:n,animationDuration:c,infinite:r,changeState:this.stateHandler})]})}}]),n}(m.a.Component),f=d;i.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.991c371e.chunk.js.map