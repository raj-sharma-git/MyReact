/*! For license information please see vendor-babel-a5800fbdb4749a0e1436.js.LICENSE.txt */
(self.webpackChunk_my_react_ssr_example=self.webpackChunk_my_react_ssr_example||[]).push([[798],{2145:(t,r,e)=>{var n=e(95458).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var r={},e=Object.prototype,i=e.hasOwnProperty,u=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),c=new P(n||[]);return u(i,"_invoke",{value:A(t,e,c)}),i}function y(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var h={};function d(){}function v(){}function b(){}var m={};s(m,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(L([])));w&&w!==e&&i.call(w,a)&&(m=w);var O=b.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(o,u,c,a){var f=y(t[o],t,u);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==n(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,c,a)}),(function(t){e("throw",t,c,a)})):r.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,a)}))}a(f.arg)}var o;u(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function A(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var c=_(u,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var a=y(t,r,e);if("normal"===a.type){if(n=e.done?"completed":"suspendedYield",a.arg===h)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(n="completed",e.method="throw",e.arg=a.arg)}}}function _(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=y(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(i.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=b,u(O,"constructor",{value:b,configurable:!0}),u(b,"constructor",{value:v,configurable:!0}),v.displayName=s(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},x(j.prototype),s(j.prototype,f,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var u=new j(p(t,e,n,o),i);return r.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},x(O),s(O,l,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return u.type="throw",u.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],u=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),a=i.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=r,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:L(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},95458:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},28092:(t,r,e)=>{var n=e(2145)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},6696:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},42645:(t,r,e)=>{"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,{A:()=>n})},24621:(t,r,e)=>{"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(r,{A:()=>n})},16167:(t,r,e)=>{"use strict";function n(t,r,e,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void e(t)}c.done?r(a):Promise.resolve(a).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var u=t.apply(r,e);function c(t){n(u,o,i,c,a,"next",t)}function a(t){n(u,o,i,c,a,"throw",t)}c(void 0)}))}}e.d(r,{A:()=>o})},48945:(t,r,e)=>{"use strict";function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}e.d(r,{A:()=>n})},84071:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(57426);function o(t,r,e){return o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,r,e){var o=[null];o.push.apply(o,r);var i=new(Function.bind.apply(t,o));return e&&(0,n.A)(i,e.prototype),i},o.apply(null,arguments)}},33465:(t,r,e)=>{"use strict";e.d(r,{A:()=>i});var n=e(63196);function o(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(0,n.A)(o.key),o)}}function i(t,r,e){return r&&o(t.prototype,r),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}},77343:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(63196);function o(t,r,e){return(r=(0,n.A)(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},32452:(t,r,e)=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},n.apply(this,arguments)}e.d(r,{A:()=>n})},6910:(t,r,e)=>{"use strict";function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.d(r,{A:()=>n})},73137:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(57426);function o(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&(0,n.A)(t,r)}},63810:(t,r,e)=>{"use strict";function n(t){if(null==t)throw new TypeError("Cannot destructure "+t)}e.d(r,{A:()=>n})},16801:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(89399);function o(t,r){if(null==t)return{};var e,o,i=(0,n.A)(t,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(o=0;o<u.length;o++)e=u[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},89399:(t,r,e)=>{"use strict";function n(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(r,{A:()=>n})},41410:(t,r,e)=>{"use strict";e.d(r,{A:()=>i});var n=e(81608),o=e(24621);function i(t,r){if(r&&("object"===(0,n.A)(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.A)(t)}},57426:(t,r,e)=>{"use strict";function n(t,r){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},n(t,r)}e.d(r,{A:()=>n})},61500:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(25692);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,c=[],a=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;a=!1}else for(;!(a=(n=i.call(e)).done)&&(c.push(n.value),c.length!==r);a=!0);}catch(t){f=!0,o=t}finally{try{if(!a&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}(t,r)||(0,n.A)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},30116:(t,r,e)=>{"use strict";function n(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))}e.d(r,{A:()=>n})},2694:(t,r,e)=>{"use strict";e.d(r,{A:()=>i});var n=e(42645),o=e(25692);function i(t){return function(t){if(Array.isArray(t))return(0,n.A)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.A)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63196:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(81608);function o(t){var r=function(t,r){if("object"!==(0,n.A)(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!==(0,n.A)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===(0,n.A)(r)?r:String(r)}},81608:(t,r,e)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.d(r,{A:()=>n})},25692:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(42645);function o(t,r){if(t){if("string"==typeof t)return(0,n.A)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.A)(t,r):void 0}}},76623:(t,r,e)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r,e){return o=function(t,r){if("object"!=n(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),(r="symbol"==n(o)?o:String(o))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t;var o}e.d(r,{A:()=>o})},55682:(t,r,e)=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},n.apply(this,arguments)}e.d(r,{A:()=>n})},59510:(t,r,e)=>{"use strict";function n(t,r){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},n(t,r)}function o(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,n(t,r)}e.d(r,{A:()=>o})},48661:(t,r,e)=>{"use strict";function n(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(r,{A:()=>n})}}]);