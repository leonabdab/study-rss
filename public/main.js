!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function a(e){r(c,o,i,a,s,"next",e)}function s(e){r(c,o,i,a,s,"throw",e)}a(void 0)}))}}n.r(t);var i=$("#rss-list"),c=$("#rss-input"),a=e=>({editId:"edit-".concat(e._id),deleteId:"delete-".concat(e._id),rssListItemId:"list-item-".concat(e._id),rssLinkId:"rss-".concat(e._id)}),s=(e,t,n)=>{$("#".concat(n)).click(o((function*(){try{var n=yield fetch("/rss/".concat(e._id),{method:"delete"});(yield n.json())&&$("#".concat(t)).remove()}catch(e){console.error("Unexpected error: ".concat(e.message,". Please try again"))}})))},d=(e,t,n)=>{$("#".concat(n)).click(o((function*(){try{var n=yield fetch("/rss/".concat(e._id),{method:"put",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({rss:c.val()})}),r=yield n.json();r&&$("#".concat(t)).html(r.rss)}catch(e){console.error("Unexpected error: ".concat(e.message,". Please try again"))}})))};var l=$("#email");function u(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){u(i,r,o,c,a,"next",e)}function a(e){u(i,r,o,c,a,"throw",e)}c(void 0)}))}}var v=$("#email"),p=$("#rss-input"),y=function(){var e=f((function*(){try{var e=JSON.stringify({rss:p.val(),email:v.val()}),t=yield fetch("/user",{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}),n=yield t.json();if(n){var r=a(n);return i.append(h(n,r)),p.val(""),d(n,r.rssLinkId,r.editId),s(n,r.rssListItemId,r.deleteId),n}}catch(e){console.error("Unexpected error: ".concat(e.message,". Try again"))}}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=f((function*(){try{var e=yield fetch("/user/all",{method:"get"}),t=yield e.json();if(t)return g(t),(e=>{var t=Object.values(e).find(e=>e.email);if(t){var n=t.email;l.prop("disabled",!0),l.attr("value",n),l.val(n)}})(t),t}catch(e){console.error("Unexpected error: ".concat(e.message,". Try again"))}}));return function(){return e.apply(this,arguments)}}(),h=(e,t)=>'\n    <li id="'.concat(t.rssListItemId,'" class="list-group-item">\n      <div class="row">\n         <div id="').concat(t.rssLinkId,'" class="col-md-4">').concat(e.rss,'</div>\n         <div class="col-md-4"></div>\n         <div class="col-md-4 text-right">\n          <button id="').concat(t.editId,'" class="btn btn-secondary rss-list__button">Edit</button>\n          <button id="').concat(t.deleteId,'" class="btn btn-danger rss-list__button">Delete</button>\n        </div>\n      </div>\n    </li>'),b=function(){var e=f((function*(){try{var e=yield fetch("/user/parser/email",{method:"get",headers:{"Content-Type":"text/html"}}),t=yield e.text(),n=$("#email-preview");t?n.html(t):n.html("<h2>Nothing to send</h2>")}catch(e){console.error("RssPreview: ",e.message)}}));return function(){return e.apply(this,arguments)}}(),g=e=>{e.forEach(e=>{if(e.rss){var t=a(e);i.append(h(e,t)),d(e,t.rssLinkId,t.editId),s(e,t.rssListItemId,t.deleteId)}})};function I(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,o)}$(document).ready(()=>{var e=$("#rss-email-form");m(),e.submit(e=>{e.preventDefault(),y()})}),$("#send").click(()=>{var e;(e=function*(){return yield b()},function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){I(i,r,o,c,a,"next",e)}function a(e){I(i,r,o,c,a,"throw",e)}c(void 0)}))})()})}]);