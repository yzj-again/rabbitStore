(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3204116"],{"01b3":function(e,t,c){},3191:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"d",(function(){return o})),c.d(t,"b",(function(){return l})),c.d(t,"c",(function(){return r})),c.d(t,"e",(function(){return s}));var a=c("b775");function n(){return Object(a["b"])("/home/banner","get")}function o(){return Object(a["b"])("/home/new","get")}function l(e){return Object(a["b"])("/home/brand","get",{limit:e})}function r(){return Object(a["b"])("/home/goods","get")}function s(){return Object(a["b"])("/home/special","get")}},"3d36":function(e,t,c){"use strict";var a=c("7a23");const n=e=>(Object(a["pushScopeId"])("data-v-56740d26"),e=e(),Object(a["popScopeId"])(),e),o={class:"product-img"},l={alt:""},r={class:"product-title"},s={class:"ellipsis"},i={class:"product-desc"},d={class:"ellipsis-2"},b={class:"product-price"},p=n(()=>Object(a["createElementVNode"])("div",{class:"findsame"},[Object(a["createElementVNode"])("p",null,"找相似"),Object(a["createElementVNode"])("p",null,"发现更多宝贝")],-1));function u(e,t,c,n,u,j){const O=Object(a["resolveComponent"])("rprice"),m=Object(a["resolveDirective"])("lazy");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"r-mainproduct-components",onClick:t[0]||(t[0]=(...e)=>n.goUrl&&n.goUrl(...e))},[Object(a["createElementVNode"])("div",o,[Object(a["withDirectives"])(Object(a["createElementVNode"])("img",l,null,512),[[m,c.productData.picture]])]),Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("p",s,Object(a["toDisplayString"])(c.productData.name),1)]),Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("p",d,Object(a["toDisplayString"])(c.productData.desc),1)]),Object(a["createElementVNode"])("div",b,[Object(a["createVNode"])(O,{price:c.productData.price,bold:"700"},null,8,["price"])]),p])}c("14d9");var j=c("6605"),O={name:"rmainproduct",props:{productData:{type:Object,default:()=>({})}},setup(e){const t=Object(j["d"])(),c=()=>{t.push({path:"/goodsdetail/"+e.productData.id})};return{goUrl:c}}},m=(c("8429"),c("d959")),g=c.n(m);const k=g()(O,[["render",u],["__scopeId","data-v-56740d26"]]);t["a"]=k},"496c":function(e,t,c){},"5f3f":function(e,t,c){"use strict";var a=c("7a23");const n=e=>(Object(a["pushScopeId"])("data-v-6abd80cc"),e=e(),Object(a["popScopeId"])(),e),o={class:"carousel-body"},l=["src"],r={key:1,class:"slider"},s=["src"],i={class:"name ellipsis"},d={class:"price"},b=n(()=>Object(a["createElementVNode"])("i",{class:"iconfont icon-previous-icon"},null,-1)),p=[b],u=n(()=>Object(a["createElementVNode"])("i",{class:"iconfont icon-next-icon"},null,-1)),j=[u],O={class:"carousel-indicator"},m=["onClick"];function g(e,t,c,n,b,u){const g=Object(a["resolveComponent"])("RouterLink");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"r-carousel",onMouseenter:t[2]||(t[2]=(...e)=>n.stop&&n.stop(...e)),onMouseleave:t[3]||(t[3]=(...e)=>n.start&&n.start(...e))},[Object(a["createElementVNode"])("ul",o,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.swiperData,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:Object(a["normalizeClass"])(["carousel-item",{fade:n.index===t}]),key:t},[e.imgUrl?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:0,to:"/"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:e.imgUrl,alt:""},null,8,l)]),_:2},1024)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:e.id,to:"/product/"+e.id},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:e.picture,alt:""},null,8,s),Object(a["createElementVNode"])("p",i,Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("p",d,"¥"+Object(a["toDisplayString"])(e.price),1)]),_:2},1032,["to"]))),128))]))],2))),128))]),Object(a["createElementVNode"])("a",{onClick:t[0]||(t[0]=e=>n.toggle(-1)),href:"javascript:;",class:"carousel-btn prev"},p),Object(a["createElementVNode"])("a",{onClick:t[1]||(t[1]=e=>n.toggle(1)),href:"javascript:;",class:"carousel-btn next"},j),Object(a["createElementVNode"])("div",O,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.swiperData,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",{onClick:e=>n.index=t,key:t,class:Object(a["normalizeClass"])({active:n.index===t})},null,10,m))),128))])],32)}var k={name:"rswiper",props:{swiperData:{type:Array,default:()=>[]},autoPlay:{type:Boolean,default:!1},duration:{type:Number,default:3e3}},setup(e){const t=Object(a["ref"])(0);let c=null;const n=()=>{clearInterval(c),c=setInterval(()=>{t.value++,t.value>=e.swiperData.length&&(t.value=0)},e.duration)};Object(a["watch"])(()=>e.swiperData,t=>{t.length&&e.autoPlay&&n()},{immediate:!0});const o=()=>{c&&clearInterval(c)},l=()=>{e.swiperData.length&&e.autoPlay&&n()},r=c=>{const a=t.value+c;a>e.swiperData.length-1?t.value=0:t.value=a<0?e.swiperDatapm.length-1:a};return Object(a["onUnmounted"])(()=>{clearInterval(c)}),{index:t,stop:o,start:l,toggle:r}}},v=(c("a943"),c("d959")),f=c.n(v);const y=f()(k,[["render",g],["__scopeId","data-v-6abd80cc"]]);t["a"]=y},8429:function(e,t,c){"use strict";c("01b3")},a192:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=c("f3f6"),o=c.n(n);const l=e=>(Object(a["pushScopeId"])("data-v-cd6b7b2a"),e=e(),Object(a["popScopeId"])(),e),r={class:"category-page"},s={class:"container"},i={class:"category-bread"},d={class:"category-swiper"},b={class:"category-product"},p={class:"all-category"},u=l(()=>Object(a["createElementVNode"])("div",{class:"category-all-title"},"全部分类",-1)),j={class:"category-all-product"},O=["onClick"],m=["src"],g={class:"catelist"},k={class:"catelist-title"},v=l(()=>Object(a["createElementVNode"])("p",null,"象米商城，您的贴心生活助手",-1)),f={class:"cate-list"},y={key:1,class:"empty"},E=l(()=>Object(a["createElementVNode"])("img",{src:o.a,alt:""},null,-1)),B=l(()=>Object(a["createElementVNode"])("p",null,"暂无数据",-1)),N=[E,B];function h(e,t,c,n,o,l){const E=Object(a["resolveComponent"])("rbreaditem"),B=Object(a["resolveComponent"])("rbread"),h=Object(a["resolveComponent"])("rswiper"),V=Object(a["resolveComponent"])("rskeleton"),w=Object(a["resolveComponent"])("rmainproduct");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(B,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(E,{to:{path:"/"}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("首页")]),_:1}),Object(a["createVNode"])(a["Transition"],{name:"fade-right",mode:"out-in"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(),Object(a["createBlock"])(E,{key:n.categoryData.id,to:"/category/"+n.categoryData.id},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.categoryData.name),1)]),_:1},8,["to"]))]),_:1})]),_:1})]),Object(a["createElementVNode"])("div",d,[n.bannerList.length>0?(Object(a["openBlock"])(),Object(a["createBlock"])(h,{key:0,swiperData:n.bannerList},null,8,["swiperData"])):(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:1,bg:"#e4e4e4",width:"1240px",height:"400px"}))]),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",p,[u,Object(a["createElementVNode"])("div",j,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.categoryData.children,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"all-product-item",key:t,onClick:t=>n.gosubCategory(e)},[Object(a["createElementVNode"])("img",{src:e.picture,alt:""},null,8,m),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.name),1)],8,O))),128))])]),Object(a["createElementVNode"])("div",g,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.catelist.children,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:t,class:"catelist-item"},[Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("h4",null,Object(a["toDisplayString"])(e.name),1),v]),Object(a["createElementVNode"])("div",f,[e.goods.length>0?(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(e.goods,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(w,{productData:e,key:t},null,8,["productData"]))),128)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",y,N))])]))),128))])])])])}c("14d9");var V=c("6605"),w=c("5502"),D=c("5f3f"),C=c("3d36"),x=c("3191"),I=c("c405"),S={name:"category",setup(){const e=Object(a["ref"])([]),t=Object(V["c"])(),c=Object(V["d"])(),n=Object(w["b"])();Object(x["a"])().then(t=>{e.value=t.result});const o=Object(a["computed"])(()=>{let e={};const c=n.state.category.cateList.find(e=>e.id===t.params.id);return c&&(e=c),e}),l=Object(a["ref"])([]),r=async()=>{const{result:e}=await Object(I["a"])(t.params.id);document.title="象米商城 - "+e.name,l.value=e};Object(a["watch"])(()=>t.params.id,e=>{e&&"/category/"+e===t.path&&r()},{immediate:!0});const s=function(e){const{id:t}=e;c.push({path:"/category/sub/"+t})};return{bannerList:e,categoryData:o,catelist:l,gosubCategory:s}},components:{rswiper:D["a"],rmainproduct:C["a"]}},_=(c("c33e"),c("d959")),L=c.n(_);const F=L()(S,[["render",h],["__scopeId","data-v-cd6b7b2a"]]);t["default"]=F},a943:function(e,t,c){"use strict";c("eebf")},c33e:function(e,t,c){"use strict";c("496c")},eebf:function(e,t,c){},f3f6:function(e,t,c){e.exports=c.p+"img/empty.6eb3f647.png"}}]);
//# sourceMappingURL=chunk-f3204116.3b874b52.js.map