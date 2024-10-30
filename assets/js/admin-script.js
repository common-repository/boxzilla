/*! For license information please see admin-script.js.LICENSE.txt */
(()=>{var e={242:(e,t,n)=>{const o=window.jQuery,r=n(212),i=document.getElementById("boxzilla-box-options-controls"),l=o(i),s=document.createTextNode(" logged in"),a=new(n(210)),u=n(504)(o,r,a),c=window.wp.template("rule-row-template"),p=window.boxzilla_i18n,d=document.getElementById("boxzilla-rule-comparison"),h=document.getElementById("boxzilla-box-rules"),f=window.ajaxurl;function y(){var e="any"===d.value?p.or:p.and;o(".boxzilla-andor").text(e)}function g(){l.find(".boxzilla-trigger-options").toggle(""!==this.value)}function m(){var e=o(this).parents("tr");e.prev().remove(),e.remove()}function v(){var e="tr"===this.tagName.toLowerCase()?this:o(this).parents("tr").get(0),t=e.querySelector(".boxzilla-rule-condition").value,n=e.querySelector(".boxzilla-rule-value"),r=e.querySelector(".boxzilla-rule-qualifier"),i=n.cloneNode(!0),l=o(i);switch(o(e.querySelectorAll(".boxzilla-helper")).remove(),i.removeAttribute("name"),i.className=i.className+" boxzilla-helper",n.parentNode.insertBefore(i,n.nextSibling),l.change((function(){n.value=this.value})),i.style.display="",n.style.display="none",r.style.display="",r.querySelector('option[value="not_contains"]').style.display="none",r.querySelector('option[value="contains"]').style.display="none",s.parentNode&&s.parentNode.removeChild(s),t){default:i.placeholder=p.enterCommaSeparatedValues;break;case"":case"everywhere":r.value="1",n.value="",i.style.display="none",r.style.display="none";break;case"is_single":case"is_post":i.placeholder=p.enterCommaSeparatedPosts,l.suggest(f+"?action=boxzilla_autocomplete&type=post",{multiple:!0,multipleSep:","});break;case"is_page":i.placeholder=p.enterCommaSeparatedPages,l.suggest(f+"?action=boxzilla_autocomplete&type=page",{multiple:!0,multipleSep:","});break;case"is_post_type":i.placeholder=p.enterCommaSeparatedPostTypes,l.suggest(f+"?action=boxzilla_autocomplete&type=post_type",{multiple:!0,multipleSep:","});break;case"is_url":r.querySelector('option[value="contains"]').style.display="",r.querySelector('option[value="not_contains"]').style.display="",i.placeholder=p.enterCommaSeparatedRelativeUrls;break;case"is_post_in_category":l.suggest(f+"?action=boxzilla_autocomplete&type=category",{multiple:!0,multipleSep:","});break;case"is_post_with_tag":l.suggest(f+"?action=boxzilla_autocomplete&type=post_tag",{multiple:!0,multipleSep:","});break;case"is_user_logged_in":i.style.display="none",n.parentNode.insertBefore(s,n.nextSibling);break;case"is_referer":r.querySelector('option[value="contains"]').style.display="",r.querySelector('option[value="not_contains"]').style.display=""}}function b(){var e={key:i.querySelectorAll(".boxzilla-rule-row").length,andor:"any"===d.value?p.or:p.and},t=c(e);return o(h).append(t),!1}o(window).on("load",(function(){void 0===window.tinyMCE&&(document.getElementById("notice-notinymce").style.display=""),l.on("click",".boxzilla-add-rule",b),l.on("click",".boxzilla-remove-rule",m),l.on("change",".boxzilla-rule-condition",v),l.find(".boxzilla-auto-show-trigger").on("change",g),o(d).change(y),o(".boxzilla-rule-row").each(v)})),e.exports={Designer:u,Option:r,events:a}},504:e=>{e.exports=function(e,t,n){var o,r,i,l=document.getElementById("post_ID").value||0,s={},a=!1,u=e("#boxzilla-box-appearance-controls");function c(){return!!a&&(window.setTimeout((()=>{i.css({"border-color":s.borderColor.getColorValue(),"border-width":s.borderWidth.getPxValue(),"border-style":s.borderStyle.getValue(),"background-color":s.backgroundColor.getColorValue(),width:s.width.getPxValue(),color:s.color.getColorValue()}),n.trigger("editor.styles.apply")}),10),!0)}return u.find("input.boxzilla-color-field").wpColorPicker({change:c,clear:c}),u.find(":input").not(".boxzilla-color-field").change(c),n.on("editor.init",c),{init:function(){"object"==typeof window.tinyMCE&&null!==window.tinyMCE.get("content")&&(s.borderColor=new t("border-color"),s.borderWidth=new t("border-width"),s.borderStyle=new t("border-style"),s.backgroundColor=new t("background-color"),s.width=new t("width"),s.color=new t("color"),r=e("#content_ifr"),(o=r.contents().find("html")).css({background:"white"}),(i=o.find("#tinymce")).addClass("boxzilla boxzilla-"+l),i.css({margin:0,background:"white",display:"inline-block",width:"auto","min-width":"240px",position:"relative"}),i.get(0).style.cssText+=";padding: 25px !important;",a=!0,n.trigger("editor.init"))},resetStyles:function(){for(var e in s)"theme"!==e.substring(0,5)&&s[e].clear();c(),n.trigger("editor.styles.reset")},options:s}}},212:e=>{var t=window.jQuery,n=function(e){"string"==typeof e&&(e=document.getElementById("boxzilla-"+e)),e||console.error("Unable to find option element."),this.element=e};n.prototype.getColorValue=function(){return this.element.value.length>0?t(this.element).hasClass("wp-color-field")?t(this.element).wpColorPicker("color"):this.element.value:""},n.prototype.getPxValue=function(e){return this.element.value.length>0?parseInt(this.element.value)+"px":e||""},n.prototype.getValue=function(e){return this.element.value.length>0?this.element.value:e||""},n.prototype.clear=function(){this.element.value=""},n.prototype.setValue=function(e){this.element.value=e},e.exports=n},210:function(e,t,n){var o;!function(t){"use strict";function r(){}var i=r.prototype,l=t.EventEmitter;function s(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function a(e){return function(){return this[e].apply(this,arguments)}}function u(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&u(e.listener)}i.getListeners=function(e){var t,n,o=this._getEvents();if(e instanceof RegExp)for(n in t={},o)o.hasOwnProperty(n)&&e.test(n)&&(t[n]=o[n]);else t=o[e]||(o[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&((t={})[e]=n),t||n},i.addListener=function(e,t){if(!u(t))throw new TypeError("listener must be a function");var n,o=this.getListenersAsObject(e),r="object"==typeof t;for(n in o)o.hasOwnProperty(n)&&-1===s(o[n],t)&&o[n].push(r?t:{listener:t,once:!1});return this},i.on=a("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=a("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,t){var n,o,r=this.getListenersAsObject(e);for(o in r)r.hasOwnProperty(o)&&-1!==(n=s(r[o],t))&&r[o].splice(n,1);return this},i.off=a("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var o,r,i=e?this.removeListener:this.addListener,l=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(o=n.length;o--;)i.call(this,t,n[o]);else for(o in t)t.hasOwnProperty(o)&&(r=t[o])&&("function"==typeof r?i.call(this,o,r):l.call(this,o,r));return this},i.removeEvent=function(e){var t,n=typeof e,o=this._getEvents();if("string"===n)delete o[e];else if(e instanceof RegExp)for(t in o)o.hasOwnProperty(t)&&e.test(t)&&delete o[t];else delete this._events;return this},i.removeAllListeners=a("removeEvent"),i.emitEvent=function(e,t){var n,o,r,i,l=this.getListenersAsObject(e);for(i in l)if(l.hasOwnProperty(i))for(n=l[i].slice(0),r=0;r<n.length;r++)!0===(o=n[r]).once&&this.removeListener(e,o.listener),o.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,o.listener);return this},i.trigger=a("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},i._getEvents=function(){return this._events||(this._events={})},r.noConflict=function(){return t.EventEmitter=l,r},void 0===(o=function(){return r}.call(t,n,t,e))||(e.exports=o)}("undefined"!=typeof window?window:this||{})}},t={};window.Boxzilla_Admin=function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(242)})();