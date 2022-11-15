(function(t){function e(e){for(var a,l,c=e[0],o=e[1],u=e[2],d=0,_=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&_.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);r&&r(e);while(_.length)_.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},s=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/hkbj-calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var r=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2644:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("section",{staticClass:"hkbj-calculator__container"},[e("div",{staticClass:"hkbj-calculator__header"},[e("div",{staticClass:"hkbj-calculator__header--wrap"},[e("font-awesome-icon",{staticClass:"settings left",attrs:{icon:"fa-rotate"},on:{click:t.handleResetCart}}),e("h1",{staticClass:"hkbj-calculator__header-title"},[e("strong",{on:{click:t.handleClickDown}},[t._v("홍콩반점 계산기")]),e("span",{on:{click:t.handleClickUp}},[t._v("("+t._s(t.human_cnt)+"명)")])]),e("font-awesome-icon",{staticClass:"settings",attrs:{icon:"fa-gear"},on:{click:function(e){t.is_config_open=!t.is_config_open}}})],1)]),e("article",{staticClass:"hkbj-calculator__window"},[e("div",{staticClass:"hkbj-calculator__menu"},t._l(t.menu_list,(function(n){return e("div",{key:"cagtegory-"+n.id,staticClass:"hkbj-calculator__menu-area"},[e("h3",{staticClass:"hkbj-calculator__menu-area__title"},[t._v(t._s(n.title))]),e("div",{staticClass:"hkbj-calculator__menu-list"},t._l(n.list,(function(a){return e("div",{key:`cagtegory-${n.id}_${a.id}`,staticClass:"hkbj-calculator__menu-list-item",class:[{"is-selected":a.is_selected},{"is-limit":t.checkLimit(a)}],on:{click:function(e){return t.handleClickToggleItem(a)}}},[e("span",[t._v(t._s(a.title))]),e("span",[t._v(t._s(Number(a.amount).toLocaleString()))])])})),0)])})),0)]),e("article",{staticClass:"hkbj-calculator__cart",class:[{is_open:t.is_cart_open}]},[e("div",{staticClass:"hkbj-calculator__cart__total-amount",on:{click:t.handleClickCart}},[e("div",{staticClass:"hkbj-calculator__cart__total-amount-area"},[e("p",[t._v("메뉴 합산 금액 : "+t._s(Number(t.cart_amount).toLocaleString())+" 원")]),e("p",[t._v("차액 : "+t._s(Number(t.used_amount).toLocaleString())+" 원")])])]),e("div",{staticClass:"hkbj-calculator__cart__menu-list--wrap"},[e("p",{staticStyle:{"font-size":"3vw",color:"rosybrown","margin-bottom":"16px"}},[t._v("메뉴를 제거하고 싶으면, 메뉴명을 클릭하거나 메뉴판에서 메뉴를 눌러주세요")]),e("ul",{staticClass:"hkbj-calculator__cart__menu-list"},t._l(t.cart_list,(function(n){return e("li",{key:n.id,staticClass:"hkbj-calculator__cart__menu-list-item"},[e("span",{on:{click:function(e){return t.handleClickDeleteCartItem(n.id)}}},[t._v(t._s(n.title)),e("span",{style:n.amount<=t.used_amount?"color: green":"color: red"},[t._v("("+t._s(Number(n.amount).toLocaleString())+"원)")])]),e("div",{staticClass:"hkbj-calculator__cart__menu-list-item__right-area"},[e("span",[t._v(t._s(Number(n.amount*n.count).toLocaleString())+"원")]),e("amount",{attrs:{is_func:"","decrease-disabled":0===n.count,"increase-disabled":n.amount>t.used_amount},on:{increaseFunction:function(e){return t.handleClickCartItemCountUp(n)},decreaseFunction:function(e){return t.handleClickCartItemCountDown(n)}},model:{value:n.count,callback:function(e){t.$set(n,"count",e)},expression:"item.count"}})],1)])})),0)])]),e("div",{staticClass:"hkbj-calculator__config",class:{"is-open":t.is_config_open}},[e("div",{staticClass:"item cover"},[e("div",[e("strong",[t._v("인원수")]),e("font-awesome-icon",{staticStyle:{"margin-left":"8px"},attrs:{icon:"fa-solid fa-rotate"},on:{click:t.handleResetHumanCnt}})],1),e("amount",{attrs:{"decrease-disabled":0===t.human_cnt},model:{value:t.human_cnt,callback:function(e){t.human_cnt=e},expression:"human_cnt"}})],1),e("div",{staticClass:"cover"},[e("div",{staticStyle:{"margin-top":"16px"}},[e("strong",[t._v("메뉴 금액 변경")]),e("font-awesome-icon",{staticStyle:{"margin-left":"8px"},attrs:{icon:"fa-solid fa-rotate"},on:{click:t.handleResetMenu}})],1),t._l(t.menu_list,(function(n){return e("div",{key:"settings_"+n.id,staticStyle:{padding:"0 16px"}},[e("div",{staticStyle:{"text-align":"center"}},[e("strong",{staticStyle:{"font-size":"14px"}},[t._v(t._s(n.title))])]),t._l(n.list,(function(n){return e("div",{key:"settings_item_"+n.id,staticClass:"item"},[e("span",[t._v(t._s(n.title))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:n.amount,expression:"m.amount",modifiers:{number:!0}}],staticStyle:{"text-align":"right"},attrs:{type:"text"},domProps:{value:n.amount},on:{input:[function(e){e.target.composing||t.$set(n,"amount",t._n(e.target.value))},function(e){return t.handleInputLimit(n,{min:0,max:1e5})}],blur:function(e){return t.$forceUpdate()}}})])}))],2)}))],2)])])])},s=[],l=(n("13d5"),n("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"amount"},[e("button",{attrs:{disabled:t.decreaseDisabled},on:{click:t.handleClickDecrease}},[t._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.native_value,expression:"native_value"}],ref:"input",attrs:{readonly:""},domProps:{value:t.native_value},on:{input:function(e){e.target.composing||(t.native_value=e.target.value)}}}),e("button",{attrs:{disabled:t.increaseDisabled},on:{click:t.handleClickIncrease}},[t._v("+")])])}),c=[],o={props:{value:{type:[Number,String],required:!0},is_func:{type:Boolean,default:!1},increaseDisabled:{type:Boolean,default:!1},decreaseDisabled:{type:Boolean,default:!1}},name:"amount",data(){return{amount:0}},computed:{native_value(){return null===this.value||void 0===this.value?0:this.value}},methods:{handleClickIncrease(){this.is_func?this.$emit("increaseFunction"):this.native_value>=0&&this.$emit("input",this.value+1)},handleClickDecrease(){this.is_func?this.$emit("decreaseFunction"):this.native_value>0&&this.$emit("input",this.value-1)}}},u=o,r=n("2877"),d=Object(r["a"])(u,l,c,!1,null,null,null),_=d.exports;const m=[{id:0,title:"◆ 면류 / 밥류 ◆",list:[{id:"0-0",title:"짜장면",amount:6e3,count:0,is_selected:!1},{id:"0-1",title:"짜장면(곱)",amount:7e3,count:0,is_selected:!1},{id:"0-2",title:"짜장밥",amount:8e3,count:0,is_selected:!1},{id:"0-3",title:"짜장밥(곱)",amount:9e3,count:0,is_selected:!1},{id:"0-4",title:"짬뽕",amount:7e3,count:0,is_selected:!1},{id:"0-5",title:"짬뽕(곱)",amount:8e3,count:0,is_selected:!1},{id:"0-6",title:"짬뽕밥",amount:7500,count:0,is_selected:!1},{id:"0-7",title:"짬뽕밥(곱)",amount:8500,count:0,is_selected:!1},{id:"0-8",title:"고추짜짱",amount:7e3,count:0,is_selected:!1},{id:"0-9",title:"고추짜장(곱)",amount:8e3,count:0,is_selected:!1},{id:"0-10",title:"볶음짬뽕",amount:8e3,count:0,is_selected:!1},{id:"0-11",title:"볶음짬뽕(곱)",amount:9e3,count:0,is_selected:!1}]},{id:1,title:"◆ 튀김류 ◆",list:[{id:"1-0",title:"탕수육(소)",amount:14900,count:0,is_selected:!1},{id:"1-1",title:"탕수육(중)",amount:16900,count:0,is_selected:!1},{id:"1-2",title:"탕수육(대)",amount:19900,count:0,is_selected:!1},{id:"1-3",title:"군만두(반접시)",amount:3500,count:0,is_selected:!1},{id:"1-4",title:"군만두(한접시)",amount:6e3,count:0,is_selected:!1},{id:"1-5",title:"홍콩꽃빵 3개",amount:2e3,count:0,is_selected:!1},{id:"1-6",title:"홍콩꽃빵 5개",amount:3500,count:0,is_selected:!1}]}];var h={name:"App",components:{Amount:_},data(){return{human_unit_amount:1e4,human_cnt:1,is_cart_open:!1,is_config_open:!1,menu_list:[],cart_list:[]}},computed:{available_amount(){return this.human_cnt*this.human_unit_amount},cart_amount(){return this.cart_list.reduce((t,e)=>t+e.amount*e.count,0)},used_amount(){return this.available_amount-this.cart_amount}},created(){this.menu_list=this.deepCopy(m)},methods:{handleResetHumanCnt(){this.human_cnt=1},handleResetMenu(){this.menu_list=this.deepCopy(m)},handleResetCart(){this.cart_list=[],this.menu_list.forEach(t=>{t.list.forEach(t=>{t.is_selected=!1})})},checkLimit(t){return this.used_amount<t.amount},handleClickCart(){this.is_cart_open=!this.is_cart_open},handleClickToggleItem(t){t.is_selected?this.handleClickDeleteCartItem(t.id):this.handleClickAddCardItem(t)},handleClickAddCardItem(t){!t.is_selected&&t.amount<=this.used_amount&&!this.cart_list.some(e=>t.id===e.id)&&(t.is_selected=!0,t.count=1,this.cart_list.push(t))},handleClickDeleteCartItem(t){this.cart_list=this.cart_list.filter(e=>(t===e.id&&(e.is_selected=!1,e.count=0),t!==e.id))},handleClickCartItemCountUp(t){t.amount<=this.used_amount&&t.count++},handleClickCartItemCountDown(t){t.count>=1&&t.count--},deepCopy(t){return"object"!==typeof t||null===t?t:t instanceof Array?t.reduce((t,e,n)=>(t[n]=this.deepCopy(e),t),[]):t instanceof Object?Object.keys(t).reduce((e,n)=>(e[n]=this.deepCopy(t[n]),e),{}):void 0},handleClickUp(){this.human_cnt++},handleClickDown(){this.human_cnt>1&&this.human_cnt--},handleInputLimit(t,e){e.min>t.amount?t.amount=e.min:e.max<t.amount&&(t.amount=e.max)}}},p=h,f=Object(r["a"])(p,i,s,!1,null,null,null),v=f.exports,b=n("3c4e"),C=n.n(b);a["a"].use({install(t){t.prototype.$merge=C.a}});n("f5fa"),n("2644"),n("e33e"),n("ee9b");var k=n("be33"),g=n("11ca"),y=n("ad3d");k["c"].add(g["a"],g["c"],g["b"]),a["a"].component("font-awesome-icon",y["a"]),a["a"].config.productionTip=!1,new a["a"]({render:t=>t(v)}).$mount("#app")},e33e:function(t,e,n){},f5fa:function(t,e,n){}});
//# sourceMappingURL=app.2c7318f8.js.map