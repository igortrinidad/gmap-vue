(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{411:function(e,t,r){var i=r(1),s=r(207).values;i({target:"Object",stat:!0},{values:function(e){return s(e)}})},416:function(e,t,r){"use strict";r.r(t);r(16),r(198),r(126),r(32),r(14),r(411),r(49),r(199),r(94),r(10),r(15),r(53),r(2),r(54),r(44),r(17);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}var n={name:"set-valid-api-key",props:{libraries:String},data:function(){return{options:{key:"",libraries:"places",installComponents:!0},stateProcess:""}},methods:{setValidKey:function(){this.stateProcess="Procesing, please wait...";var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.options);e.libraries=e.libraries.replace(/\s/,""),e.callback="vueGoogleMapsInit";var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"),r="".concat("https://maps.googleapis.com/","maps/api/js?").concat(t),n=document.getElementsByTagName("script"),a=Object.values(n).filter((function(e){return e.src.includes("https://maps.googleapis.com/maps/api/js")}));if(a.length)a[0].src=r;else{var o=document.createElement("script");o.setAttribute("src",r),o.setAttribute("async",""),o.setAttribute("defer",""),document.head.appendChild(o)}this.stateProcess="Gmap is ready :)",this.$emit("is-valid",!0)}},mounted:function(){this.libraries&&(this.options.libraries=this.libraries)}},a=r(9),o=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("For live examples set a valid gmap api key")]),e._v(" "),r("label",{attrs:{for:"gmap_key"}},[e._v("\n    gmap api key "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.options.key,expression:"options.key"}],attrs:{type:"text",name:"gmap_key",id:"gmap_key"},domProps:{value:e.options.key},on:{input:function(t){t.target.composing||e.$set(e.options,"key",t.target.value)}}})]),e._v(" "),r("br"),r("br"),e._v(" "),r("label",{attrs:{for:"libraries"}},[e._v("\n    libraries "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.options.libraries,expression:"options.libraries"}],attrs:{type:"text",name:"libraries",id:"libraries"},domProps:{value:e.options.libraries},on:{input:function(t){t.target.composing||e.$set(e.options,"libraries",t.target.value)}}}),e._v(" "),r("br"),e._v(" "),r("small",[e._v("Eg: places,routes,drawing,visualization depending on your requirements")])]),e._v(" "),r("br"),r("br"),e._v(" "),r("button",{on:{click:e.setValidKey}},[e._v("set gmap key")]),e._v(" "),r("br"),r("br"),e._v(" "),r("p",[e._v(e._s(e.stateProcess))])])}),[],!1,null,null,null);t.default=o.exports}}]);