!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r,a,c,s){try{var o=e[c](s),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var s=e.apply(t,n);function o(e){r(s,a,c,o,i,"next",e)}function i(e){r(s,a,c,o,i,"throw",e)}o(void 0)}))}}n.r(t);var c=$("#email"),s=function(){var e=a(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"get"},e.next=4,fetch("/email",t);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log(r),i(r),e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),alert("Unexpected error: ".concat(e.t0.message,". Please try again"));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=a(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"post",body:JSON.stringify({email:c.val()}),headers:{"Content-Type":"application/json; charset=utf-8"}},e.next=4,fetch("/email",t);case 4:return n=e.sent,e.next=7,n.json();case 7:if((r=e.sent).error){e.next=10;break}return e.abrupt("return",r);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Unexpected error: ".concat(e.t0.message,". Please try again"));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),i=function(e){emails=Object.values(e).email,console.log(emails),e&&(c.prop("disabled",!0),c.val(c))};function u(e,t,n,r,a,c,s){try{var o=e[c](s),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function s(e){u(c,r,a,s,o,"next",e)}function o(e){u(c,r,a,s,o,"throw",e)}s(void 0)}))}}var d=$("#rss-list"),p=$("#rss-input"),f=function(){var e=l(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"get"},e.next=4,fetch("/rss",t);case 4:return n=e.sent,e.next=7,n.json();case 7:return(r=e.sent)&&h(r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),alert("Unexpected error: ".concat(e.t0.message,". Please try again"));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),v=function(e){return{editId:"edit-".concat(e._id),deleteId:"delete-".concat(e._id),rssListItemId:"list-item-".concat(e._id),rssLinkId:"rss-".concat(e._id)}},m=function(e,t){return'\n    <li id="'.concat(t.rssListItemId,'" class="list-group-item">\n      <div class="row">\n         <div id="').concat(t.rssLinkId,'" class="col-md-4">').concat(e.rss,'</div>\n         <div class="col-md-4"></div>\n         <div class="col-md-4 text-right">\n          <button id="').concat(t.editId,'" class="btn btn-secondary rss-list__button">Edit</button>\n          <button id="').concat(t.deleteId,'" class="btn btn-danger rss-list__button">Delete</button>\n        </div>\n      </div>\n    </li>')},h=function(e){e.forEach((function(e){if(e.rss){var t=v(e);d.append(m(e,t)),y(e,t.rssLinkId,t.editId),b(e,t.rssListItemId,t.deleteId)}}))},g=function(){var e=l(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/rss",{method:"post",body:JSON.stringify({rss:p.val()}),headers:{"Content-Type":"application/json; charset=utf-8"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return(n=e.sent)&&(r=v(n),d.append(m(n,r)),y(n,r.rssLinkId,r.editId),b(n,r.rssListItemId,r.deleteId)),d.val(""),e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),alert("Unexpected error: ".concat(e.t0.message,". Please try again"));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),b=function(e,t,n){$("#".concat(n)).click(l(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/rss/".concat(e._id),{method:"delete"});case 3:return r=n.sent,n.next=6,r.json();case 6:n.sent&&$("#".concat(t)).remove(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),alert("Unexpected error: ".concat(n.t0.message,". Please try again"));case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))))},y=function(e,t,n){$("#".concat(n)).click(l(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/rss/".concat(e._id),{method:"put",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({rss:p.val()})});case 3:return r=n.sent,n.next=6,r.json();case 6:(a=n.sent)&&$("#".concat(t)).html(a.rss),console.log(a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),alert("Unexpected error: ".concat(n.t0.message,". Please try again"));case 14:case"end":return n.stop()}}),n,null,[[0,11]])}))))},x=$("#rss-input"),I=$("#email");x.change((function(){""===x.val()&&$("#save").prop("disabled",!0)})),I.change((function(){console.log(here),""===I.val()&&$("#save").prop("disabled",!0)})),$(document).ready((function(){var e=$("#rss-email-form");s(),f(),e.submit((function(e){e.preventDefault(),g(),o()}))}))}]);