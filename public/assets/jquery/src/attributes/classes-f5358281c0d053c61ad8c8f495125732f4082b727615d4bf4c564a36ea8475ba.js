define(["../core","../core/stripAndCollapse","../var/rnothtmlwhite","../data/var/dataPriv","../core/init"],function(t,s,i,e){"use strict";function n(t){return t.getAttribute&&t.getAttribute("class")||""}t.fn.extend({addClass:function(e){var r,a,o,h,f,c,l,u=0;if(t.isFunction(e))return this.each(function(s){t(this).addClass(e.call(this,s,n(this)))});if("string"==typeof e&&e)for(r=e.match(i)||[];a=this[u++];)if(h=n(a),o=1===a.nodeType&&" "+s(h)+" "){for(c=0;f=r[c++];)o.indexOf(" "+f+" ")<0&&(o+=f+" ");l=s(o),h!==l&&a.setAttribute("class",l)}return this},removeClass:function(e){var r,a,o,h,f,c,l,u=0;if(t.isFunction(e))return this.each(function(s){t(this).removeClass(e.call(this,s,n(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(r=e.match(i)||[];a=this[u++];)if(h=n(a),o=1===a.nodeType&&" "+s(h)+" "){for(c=0;f=r[c++];)for(;o.indexOf(" "+f+" ")>-1;)o=o.replace(" "+f+" "," ");l=s(o),h!==l&&a.setAttribute("class",l)}return this},toggleClass:function(s,r){var a=typeof s;return"boolean"==typeof r&&"string"===a?r?this.addClass(s):this.removeClass(s):t.isFunction(s)?this.each(function(i){t(this).toggleClass(s.call(this,i,n(this),r),r)}):this.each(function(){var r,o,h,f;if("string"===a)for(o=0,h=t(this),f=s.match(i)||[];r=f[o++];)h.hasClass(r)?h.removeClass(r):h.addClass(r);else s!==undefined&&"boolean"!==a||(r=n(this),r&&e.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===s?"":e.get(this,"__className__")||""))})},hasClass:function(t){var i,e,r=0;for(i=" "+t+" ";e=this[r++];)if(1===e.nodeType&&(" "+s(n(e))+" ").indexOf(i)>-1)return!0;return!1}})});