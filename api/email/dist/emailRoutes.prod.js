"use strict";var mongoose=require("mongoose"),EmailModel=require("./emailSchema");console.log(EmailModel);var postEmail=function(r,e,n){var o,t,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(r.body);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})},console.log(o),t=new EmailModel({email:o}),console.log(t),e.next=8,regeneratorRuntime.awrap(t.save());case 8:a=e.sent,console.log(a),n();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("PostEmail: ",e.t0.message);case 16:case"end":return e.stop()}},null,null,[[0,13]])};