(function(n){"use strict";function t(n){if(n){if("string"==typeof r[n])return n;n=n.charAt(0).toUpperCase()+n.slice(1);for(var t,u=0,f=i.length;f>u;u++)if(t=i[u]+n,"string"==typeof r[t])return t}}var i="Webkit Moz ms Ms O".split(" "),r=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return t}):n.getStyleProperty=t})(window),function(n){"use strict";function i(n){var t=parseFloat(n),i=-1===n.indexOf("%")&&!isNaN(t);return i&&t}function o(){for(var r,i={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},n=0,u=t.length;u>n;n++)r=t[n],i[r]=0;return i}function u(n){function s(n){var s,f,a,c,v,y;if("string"==typeof n&&(n=document.querySelector(n)),n&&"object"==typeof n&&n.nodeType){if(s=e(n),"none"===s.display)return o();f={};f.width=n.offsetWidth;f.height=n.offsetHeight;for(var nt=f.isBorderBox=!(!r||!s[r]||"border-box"!==s[r]),l=0,tt=t.length;tt>l;l++)a=t[l],c=s[a],c=h(n,c),v=parseFloat(c),f[a]=isNaN(v)?0:v;var p=f.paddingLeft+f.paddingRight,w=f.paddingTop+f.paddingBottom,it=f.marginLeft+f.marginRight,rt=f.marginTop+f.marginBottom,b=f.borderLeftWidth+f.borderRightWidth,k=f.borderTopWidth+f.borderBottomWidth,d=nt&&u,g=i(s.width);return g!==!1&&(f.width=g+(d?0:p+b)),y=i(s.height),y!==!1&&(f.height=y+(d?0:w+k)),f.innerWidth=f.width-(p+b),f.innerHeight=f.height-(w+k),f.outerWidth=f.width+it,f.outerHeight=f.height+rt,f}}function h(n,t){if(f||-1===t.indexOf("%"))return t;var i=n.style,e=i.left,r=n.runtimeStyle,u=r&&r.left;return u&&(r.left=n.currentStyle.left),i.left=t,t=i.pixelLeft,i.left=e,u&&(r.left=u),t}var u,r=n("boxSizing");return function(){var n,t,f;r&&(n=document.createElement("div"),n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[r]="border-box",t=document.body||document.documentElement,t.appendChild(n),f=e(n),u=200===i(f.width),t.removeChild(n))}(),s}var r=document.defaultView,f=r&&r.getComputedStyle,e=f?function(n){return r.getComputedStyle(n,null)}:function(n){return n.currentStyle},t=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property/get-style-property"],u):n.getSize=u(n.getStyleProperty)}(window),function(n){"use strict";var t=document.documentElement,r=function(){},i,u;t.addEventListener?r=function(n,t,i){n.addEventListener(t,i,!1)}:t.attachEvent&&(r=function(t,i,r){t[i+r]=r.handleEvent?function(){var t=n.event;t.target=t.target||t.srcElement;r.handleEvent.call(r,t)}:function(){var i=n.event;i.target=i.target||i.srcElement;r.call(t,i)};t.attachEvent("on"+i,t[i+r])});i=function(){};t.removeEventListener?i=function(n,t,i){n.removeEventListener(t,i,!1)}:t.detachEvent&&(i=function(n,t,i){n.detachEvent("on"+t,n[t+i]);try{delete n[t+i]}catch(r){n[t+i]=void 0}});u={bind:r,unbind:i};"function"==typeof define&&define.amd?define(u):n.eventie=u}(this),function(n){"use strict";function t(n){"function"==typeof n&&(t.isReady?n():u.push(n))}function i(n){var o="readystatechange"===n.type&&"complete"!==r.readyState,i,f,e;if(!t.isReady&&!o)for(t.isReady=!0,i=0,f=u.length;f>i;i++)e=u[i],e()}function f(u){return u.bind(r,"DOMContentLoaded",i),u.bind(r,"readystatechange",i),u.bind(n,"load",i),t}var r=n.document,u=[];t.isReady=!1;"function"==typeof define&&define.amd?(t.isReady="function"==typeof requirejs,define(["eventie/eventie"],f)):n.docReady=f(n.eventie)}(this),function(){"use strict";function i(){}function r(n,t){for(var i=n.length;i--;)if(n[i].listener===t)return i;return-1}function t(n){return function(){return this[n].apply(this,arguments)}}var n=i.prototype;n.getListeners=function(n){var r,t,i=this._getEvents();if("object"==typeof n){r={};for(t in i)i.hasOwnProperty(t)&&n.test(t)&&(r[t]=i[t])}else r=i[n]||(i[n]=[]);return r};n.flattenListeners=function(n){for(var i=[],t=0;n.length>t;t+=1)i.push(n[t].listener);return i};n.getListenersAsObject=function(n){var t,i=this.getListeners(n);return i instanceof Array&&(t={},t[n]=i),t||i};n.addListener=function(n,t){var i,u=this.getListenersAsObject(n),f="object"==typeof t;for(i in u)u.hasOwnProperty(i)&&-1===r(u[i],t)&&u[i].push(f?t:{listener:t,once:!1});return this};n.on=t("addListener");n.addOnceListener=function(n,t){return this.addListener(n,{listener:t,once:!0})};n.once=t("addOnceListener");n.defineEvent=function(n){return this.getListeners(n),this};n.defineEvents=function(n){for(var t=0;n.length>t;t+=1)this.defineEvent(n[t]);return this};n.removeListener=function(n,t){var f,i,u=this.getListenersAsObject(n);for(i in u)u.hasOwnProperty(i)&&(f=r(u[i],t),-1!==f&&u[i].splice(f,1));return this};n.off=t("removeListener");n.addListeners=function(n,t){return this.manipulateListeners(!1,n,t)};n.removeListeners=function(n,t){return this.manipulateListeners(!0,n,t)};n.manipulateListeners=function(n,t,i){var r,u,f=n?this.removeListener:this.addListener,e=n?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=i.length;r--;)f.call(this,t,i[r]);else for(r in t)t.hasOwnProperty(r)&&(u=t[r])&&("function"==typeof u?f.call(this,r,u):e.call(this,r,u));return this};n.removeEvent=function(n){var t,r=typeof n,i=this._getEvents();if("string"===r)delete i[n];else if("object"===r)for(t in i)i.hasOwnProperty(t)&&n.test(t)&&delete i[t];else delete this._events;return this};n.removeAllListeners=t("removeEvent");n.emitEvent=function(n,t){var i,f,r,e,u=this.getListenersAsObject(n);for(r in u)if(u.hasOwnProperty(r))for(f=u[r].length;f--;)i=u[r][f],i.once===!0&&this.removeListener(n,i.listener),e=i.listener.apply(this,t||[]),e===this._getOnceReturnValue()&&this.removeListener(n,i.listener);return this};n.trigger=t("emitEvent");n.emit=function(n){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(n,t)};n.setOnceReturnValue=function(n){return this._onceReturnValue=n,this};n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0};n._getEvents=function(){return this._events||(this._events={})};"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof module&&module.exports?module.exports=i:this.EventEmitter=i}.call(this),function(n){"use strict";function i(){}function t(n){function u(t){t.prototype.option||(t.prototype.option=function(t){n.isPlainObject(t)&&(this.options=n.extend(!0,this.options,t))})}function f(i,u){n.fn[i]=function(f){var h,e,s;if("string"==typeof f){for(var c=r.call(arguments,1),o=0,l=this.length;l>o;o++)if(h=this[o],e=n.data(h,i),e)if(n.isFunction(e[f])&&"_"!==f.charAt(0)){if(s=e[f].apply(e,c),void 0!==s)return s}else t("no such method '"+f+"' for "+i+" instance");else t("cannot call methods on "+i+" prior to initialization; attempted to call '"+f+"'");return this}return this.each(function(){var t=n.data(this,i);t?(t.option(f),t._init()):(t=new u(this,f),n.data(this,i,t))})}}if(n){var t="undefined"==typeof console?i:function(n){console.error(n)};n.bridget=function(n,t){u(t);f(n,t)}}}var r=Array.prototype.slice;"function"==typeof define&&define.amd?define(["jquery"],t):t(n.jQuery)}(window),function(n,t){"use strict";function r(n,t){return n[f](t)}function u(n){if(!n.parentNode){var t=document.createDocumentFragment();t.appendChild(n)}}function s(n,t){u(n);for(var r=n.parentNode.querySelectorAll(t),i=0,f=r.length;f>i;i++)if(r[i]===n)return!0;return!1}function h(n,t){return u(n),r(n,t)}var i,f=function(){var u,i;if(t.matchesSelector)return"matchesSelector";for(var r=["webkit","moz","ms","o"],n=0,f=r.length;f>n;n++)if(u=r[n],i=u+"MatchesSelector",t[i])return i}(),e,o;f?(e=document.createElement("div"),o=r(e,"div"),i=o?r:h):i=s;"function"==typeof define&&define.amd?define(function(){return i}):window.matchesSelector=i}(this,Element.prototype),function(n){"use strict";function r(n,t){for(var i in t)n[i]=t[i];return n}function u(n){for(var t in n)return!1;return t=null,!0}function f(n){return n.replace(/([A-Z])/g,function(n){return"-"+n.toLowerCase()})}function i(n,t,i){function o(n,t){n&&(this.element=n,this.layout=t,this.position={x:0,y:0},this._create())}var s=i("transition"),h=i("transform"),w=s&&h,b=!!i("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[s],l=["transform","transition","transitionDuration","transitionProperty"],k=function(){for(var n,t,u={},r=0,f=l.length;f>r;r++)n=l[r],t=i(n),t&&t!==n&&(u[n]=t);return u}(),a,v,y,p;return r(o.prototype,n.prototype),o.prototype._create=function(){this._transition={ingProperties:{},clean:{},onEnd:{}};this.css({position:"absolute"})},o.prototype.handleEvent=function(n){var t="on"+n.type;this[t]&&this[t](n)},o.prototype.getSize=function(){this.size=t(this.element)},o.prototype.css=function(n){var r=this.element.style,t,i;for(t in n)i=k[t]||t,r[i]=n[t]},o.prototype.getPosition=function(){var r=e(this.element),u=this.layout.options,f=u.isOriginLeft,o=u.isOriginTop,n=parseInt(r[f?"left":"right"],10),t=parseInt(r[o?"top":"bottom"],10),i;n=isNaN(n)?0:n;t=isNaN(t)?0:t;i=this.layout.size;n-=f?i.paddingLeft:i.paddingRight;t-=o?i.paddingTop:i.paddingBottom;this.position.x=n;this.position.y=t},o.prototype.layoutPosition=function(){var t=this.layout.size,i=this.layout.options,n={};i.isOriginLeft?(n.left=this.position.x+t.paddingLeft+"px",n.right=""):(n.right=this.position.x+t.paddingRight+"px",n.left="");i.isOriginTop?(n.top=this.position.y+t.paddingTop+"px",n.bottom=""):(n.bottom=this.position.y+t.paddingBottom+"px",n.top="");this.css(n);this.emitEvent("layout",[this])},a=b?function(n,t){return"translate3d("+n+"px, "+t+"px, 0)"}:function(n,t){return"translate("+n+"px, "+t+"px)"},o.prototype._transitionTo=function(n,t){this.getPosition();var e=this.position.x,o=this.position.y,s=parseInt(n,10),h=parseInt(t,10),c=s===this.position.x&&h===this.position.y;if(this.setPosition(n,t),c&&!this.isTransitioning)return this.layoutPosition(),void 0;var i=n-e,r=t-o,u={},f=this.layout.options;i=f.isOriginLeft?i:-i;r=f.isOriginTop?r:-r;u.transform=a(i,r);this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},o.prototype.goTo=function(n,t){this.setPosition(n,t);this.layoutPosition()},o.prototype.moveTo=w?o.prototype._transitionTo:o.prototype.goTo,o.prototype.setPosition=function(n,t){this.position.x=parseInt(n,10);this.position.y=parseInt(t,10)},o.prototype._nonTransition=function(n){this.css(n.to);n.isCleaning&&this._removeStyles(n.to);for(var t in n.onTransitionEnd)n.onTransitionEnd[t].call(this)},o.prototype._transition=function(n){var i,t,r;if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(n),void 0;i=this._transition;for(t in n.onTransitionEnd)i.onEnd[t]=n.onTransitionEnd[t];for(t in n.to)i.ingProperties[t]=!0,n.isCleaning&&(i.clean[t]=!0);n.from&&(this.css(n.from),r=this.element.offsetHeight,r=null);this.enableTransition(n.to);this.css(n.to);this.isTransitioning=!0},v=h&&f(h)+",opacity",o.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:v,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},o.prototype.transition=o.prototype[s?"_transition":"_nonTransition"],o.prototype.onwebkitTransitionEnd=function(n){this.ontransitionend(n)},o.prototype.onotransitionend=function(n){this.ontransitionend(n)},y={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"},o.prototype.ontransitionend=function(n){var t,i,r;n.target===this.element&&(t=this._transition,i=y[n.propertyName]||n.propertyName,(delete t.ingProperties[i],u(t.ingProperties)&&this.disableTransition(),i in t.clean&&(this.element.style[n.propertyName]="",delete t.clean[i]),i in t.onEnd)&&(r=t.onEnd[i],r.call(this),delete t.onEnd[i]),this.emitEvent("transitionEnd",[this]))},o.prototype.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(c,this,!1);this.isTransitioning=!1},o.prototype._removeStyles=function(n){var t={},i;for(i in n)t[i]="";this.css(t)},p={transitionProperty:"",transitionDuration:""},o.prototype.removeTransitionStyles=function(){this.css(p)},o.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element);this.emitEvent("remove",[this])},o.prototype.remove=function(){if(!s||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var n=this;this.on("transitionEnd",function(){return n.removeElem(),!0});this.hide()},o.prototype.reveal=function(){delete this.isHidden;this.css({display:""});var n=this.layout.options;this.transition({from:n.hiddenStyle,to:n.visibleStyle,isCleaning:!0})},o.prototype.hide=function(){this.isHidden=!0;this.css({display:""});var n=this.layout.options;this.transition({from:n.visibleStyle,to:n.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.css({display:"none"})}}})},o.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}var t=document.defaultView,e=t&&t.getComputedStyle?function(n){return t.getComputedStyle(n,null)}:function(n){return n.currentStyle};"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],i):(n.Outlayer={},n.Outlayer.Item=i(n.EventEmitter,n.getSize,n.getStyleProperty))}(window),function(n){"use strict";function t(n,t){for(var i in t)n[i]=t[i];return n}function c(n){return"[object Array]"===a.call(n)}function u(n){var t=[],i,r;if(c(n))t=n;else if(n&&"number"==typeof n.length)for(i=0,r=n.length;r>i;i++)t.push(n[i]);else t.push(n);return t}function e(n,t){var i=v(t,n);-1!==i&&t.splice(i,1)}function l(n){return n.replace(/(.)([A-Z])/g,function(n,t,i){return t+"-"+i}).toLowerCase()}function o(o,c,a,v,y,p){function w(n,i){if("string"==typeof n&&(n=s.querySelector(n)),!n||!f(n))return r&&r.error("Bad "+this.settings.namespace+" element: "+n),void 0;this.element=n;this.options=t({},this.options);this.option(i);var u=++d;this.element.outlayerGUID=u;k[u]=this;this._create();this.options.isInitLayout&&this.layout()}function b(n,i){n.prototype[i]=t({},w.prototype[i])}var d=0,k={};return w.prototype.settings={namespace:"outlayer",item:p},w.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},t(w.prototype,a.prototype),w.prototype.option=function(n){t(this.options,n)},w.prototype._create=function(){this.reloadItems();this.stamps=[];this.stamp(this.options.stamp);t(this.element.style,this.options.containerStyle);this.options.isResizeBound&&this.bindResize()},w.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},w.prototype._itemize=function(n){for(var u,f,i=this._filterFindItemElements(n),e=this.settings.item,r=[],t=0,o=i.length;o>t;t++)u=i[t],f=new e(u,this),r.push(f);return r},w.prototype._filterFindItemElements=function(n){var t;n=u(n);for(var r=this.options.itemSelector,i=[],e=0,h=n.length;h>e;e++)if(t=n[e],f(t))if(r){y(t,r)&&i.push(t);for(var s=t.querySelectorAll(r),o=0,c=s.length;c>o;o++)i.push(s[o])}else i.push(t);return i},w.prototype.getItemElements=function(){for(var t=[],n=0,i=this.items.length;i>n;n++)t.push(this.items[n].element);return t},w.prototype.layout=function(){this._resetLayout();this._manageStamps();var n=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,n);this._isLayoutInited=!0},w.prototype._init=w.prototype.layout,w.prototype._resetLayout=function(){this.getSize()},w.prototype.getSize=function(){this.size=v(this.element)},w.prototype._getMeasurement=function(n,t){var r,i=this.options[n];i?("string"==typeof i?r=this.element.querySelector(i):f(i)&&(r=i),this[n]=r?v(r)[t]:i):this[n]=0},w.prototype.layoutItems=function(n,t){n=this._getItemsForLayout(n);this._layoutItems(n,t);this._postLayout()},w.prototype._getItemsForLayout=function(n){for(var i,r=[],t=0,u=n.length;u>t;t++)i=n[t],i.isIgnored||r.push(i);return r},w.prototype._layoutItems=function(n,t){var u,i;if(!n||!n.length)return this.emitEvent("layoutComplete",[this,n]),void 0;this._itemsOn(n,"layout",function(){this.emitEvent("layoutComplete",[this,n])});for(var f=[],r=0,e=n.length;e>r;r++)u=n[r],i=this._getItemLayoutPosition(u),i.item=u,i.isInstant=t,f.push(i);this._processLayoutQueue(f)},w.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},w.prototype._processLayoutQueue=function(n){for(var t,i=0,r=n.length;r>i;i++)t=n[i],this._positionItem(t.item,t.x,t.y,t.isInstant)},w.prototype._positionItem=function(n,t,i,r){r?n.goTo(t,i):n.moveTo(t,i)},w.prototype._postLayout=function(){var n=this._getContainerSize();n&&(this._setContainerMeasure(n.width,!0),this._setContainerMeasure(n.height,!1))},w.prototype._getContainerSize=h,w.prototype._setContainerMeasure=function(n,t){if(void 0!==n){var i=this.size;i.isBorderBox&&(n+=t?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth);n=Math.max(n,0);this.element.style[t?"width":"height"]=n+"px"}},w.prototype._itemsOn=function(n,t,i){function e(){return u++,u===o&&i.call(s),!0}for(var f,u=0,o=n.length,s=this,r=0,h=n.length;h>r;r++){f=n[r];f.on(t,e)}},w.prototype.ignore=function(n){var t=this.getItem(n);t&&(t.isIgnored=!0)},w.prototype.unignore=function(n){var t=this.getItem(n);t&&delete t.isIgnored},w.prototype.stamp=function(n){var t,i,r;if(n=this._find(n))for(this.stamps=this.stamps.concat(n),t=0,i=n.length;i>t;t++)r=n[t],this.ignore(r)},w.prototype.unstamp=function(n){var t,r,i;if(n=this._find(n))for(t=0,r=n.length;r>t;t++)i=n[t],e(i,this.stamps),this.unignore(i)},w.prototype._find=function(n){if(n)return("string"==typeof n&&(n=this.element.querySelectorAll(n)),n=u(n))},w.prototype._manageStamps=function(){var n,t,i;if(this.stamps&&this.stamps.length)for(this._getBoundingRect(),n=0,t=this.stamps.length;t>n;n++)i=this.stamps[n],this._manageStamp(i)},w.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),n=this.size;this._boundingRect={left:t.left+n.paddingLeft+n.borderLeftWidth,top:t.top+n.paddingTop+n.borderTopWidth,right:t.right-(n.paddingRight+n.borderRightWidth),bottom:t.bottom-(n.paddingBottom+n.borderBottomWidth)}},w.prototype._manageStamp=h,w.prototype._getElementOffset=function(n){var t=n.getBoundingClientRect(),i=this._boundingRect,r=v(n);return{left:t.left-i.left-r.marginLeft,top:t.top-i.top-r.marginTop,right:i.right-t.right-r.marginRight,bottom:i.bottom-t.bottom-r.marginBottom}},w.prototype.handleEvent=function(n){var t="on"+n.type;this[t]&&this[t](n)},w.prototype.bindResize=function(){this.isResizeBound||(o.bind(n,"resize",this),this.isResizeBound=!0)},w.prototype.unbindResize=function(){o.unbind(n,"resize",this);this.isResizeBound=!1},w.prototype.onresize=function(){function t(){n.resize();delete n.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var n=this;this.resizeTimeout=setTimeout(t,100)},w.prototype.resize=function(){var n=v(this.element),t=this.size&&n;t&&n.innerWidth===this.size.innerWidth||this.layout()},w.prototype.addItems=function(n){var t=this._itemize(n);return t.length&&(this.items=this.items.concat(t)),t},w.prototype.appended=function(n){var t=this.addItems(n);t.length&&(this.layoutItems(t,!0),this.reveal(t))},w.prototype.prepended=function(n){var t=this._itemize(n),i;t.length&&(i=this.items.slice(0),this.items=t.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(i))},w.prototype.reveal=function(n){var t,i,r;if(n&&n.length)for(t=0,i=n.length;i>t;t++)r=n[t],r.reveal()},w.prototype.hide=function(n){var t,i,r;if(n&&n.length)for(t=0,i=n.length;i>t;t++)r=n[t],r.hide()},w.prototype.getItem=function(n){for(var i,t=0,r=this.items.length;r>t;t++)if(i=this.items[t],i.element===n)return i},w.prototype.getItems=function(n){var u,i;if(n&&n.length){for(var r=[],t=0,f=n.length;f>t;t++)u=n[t],i=this.getItem(u),i&&r.push(i);return r}},w.prototype.remove=function(n){var t,i,f,r;if(n=u(n),t=this.getItems(n),t&&t.length)for(this._itemsOn(t,"remove",function(){this.emitEvent("removeComplete",[this,t])}),i=0,f=t.length;f>i;i++)r=t[i],r.remove(),e(r,this.items)},w.prototype.destroy=function(){var t=this.element.style,n,r,u;for(t.height="",t.position="",t.width="",n=0,r=this.items.length;r>n;n++)u=this.items[n],u.destroy();this.unbindResize();delete this.element.outlayerGUID;i&&i.removeData(this.element,this.settings.namespace)},w.data=function(n){var t=n&&n.outlayerGUID;return t&&k[t]},w.create=function(n,u){function f(){w.apply(this,arguments)}return t(f.prototype,w.prototype),b(f,"options"),b(f,"settings"),t(f.prototype.options,u),f.prototype.settings.namespace=n,f.data=w.data,f.Item=function(){p.apply(this,arguments)},f.Item.prototype=new p,f.prototype.settings.item=f.Item,c(function(){for(var a,t,e,v,o=l(n),h=s.querySelectorAll(".js-"+o),c="data-"+o+"-options",u=0,y=h.length;y>u;u++){t=h[u];e=t.getAttribute(c);try{a=e&&JSON.parse(e)}catch(p){r&&r.error("Error parsing "+c+" on "+t.nodeName.toLowerCase()+(t.id?"#"+t.id:"")+": "+p);continue}v=new f(t,a);i&&i.data(t,n,v)}}),i&&i.bridget&&i.bridget(n,f),f},w.Item=p,w}var s=n.document,r=n.console,i=n.jQuery,h=function(){},a=Object.prototype.toString,f="object"==typeof HTMLElement?function(n){return n instanceof HTMLElement}:function(n){return n&&"object"==typeof n&&1===n.nodeType&&"string"==typeof n.nodeName},v=Array.prototype.indexOf?function(n,t){return n.indexOf(t)}:function(n,t){for(var i=0,r=n.length;r>i;i++)if(n[i]===t)return i;return-1};"function"==typeof define&&define.amd?define(["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],o):n.Outlayer=o(n.eventie,n.docReady,n.EventEmitter,n.getSize,n.matchesSelector,n.Outlayer.Item)}(window),function(n){"use strict";function t(n,t){var r=n.create("masonry");return r.prototype._resetLayout=function(){this.getSize();this._getMeasurement("columnWidth","outerWidth");this._getMeasurement("gutter","outerWidth");this.measureColumns();var n=this.cols;for(this.colYs=[];n--;)this.colYs.push(0);this.maxY=0},r.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var n=this.items[0],i=n&&n.element;this.columnWidth=i&&t(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter;this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth);this.cols=Math.max(this.cols,1)},r.prototype.getContainerWidth=function(){var i=this.options.isFitWidth?this.element.parentNode:this.element,n=t(i);this.containerWidth=n&&n.innerWidth},r.prototype._getItemLayoutPosition=function(n){var t;n.getSize();t=Math.ceil(n.size.outerWidth/this.columnWidth);t=Math.min(t,this.cols);for(var r=this._getColGroup(t),u=Math.min.apply(Math,r),e=i(r,u),o={x:this.columnWidth*e,y:u},s=u+n.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[e+f]=s;return o},r.prototype._getColGroup=function(n){var r;if(2>n)return this.colYs;for(var i=[],u=this.cols+1-n,t=0;u>t;t++)r=this.colYs.slice(t,t+n),i[t]=Math.max.apply(Math,r);return i},r.prototype._manageStamp=function(n){var e=t(n),r=this._getElementOffset(n),o=this.options.isOriginLeft?r.left:r.right,h=o+e.outerWidth,f=Math.floor(o/this.columnWidth),u,s,i;for(f=Math.max(0,f),u=Math.floor(h/this.columnWidth),u=Math.min(this.cols-1,u),s=(this.options.isOriginTop?r.top:r.bottom)+e.outerHeight,i=f;u>=i;i++)this.colYs[i]=Math.max(s,this.colYs[i])},r.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var n={height:this.maxY};return this.options.isFitWidth&&(n.width=this._getContainerFitWidth()),n},r.prototype._getContainerFitWidth=function(){for(var n=0,t=this.cols;--t&&0===this.colYs[t];)n++;return(this.cols-n)*this.columnWidth-this.gutter},r.prototype.resize=function(){var n=this.containerWidth;this.getContainerWidth();n!==this.containerWidth&&this.layout()},r}var i=Array.prototype.indexOf?function(n,t){return n.indexOf(t)}:function(n,t){for(var u,i=0,r=n.length;r>i;i++)if(u=n[i],u===t)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],t):n.Masonry=t(n.Outlayer,n.getSize)}(window),function(){var t,n=function(n,t){return function(){return n.apply(t,arguments)}};t=function(){function t(t,i){this.loadpage=n(this.loadpage,this);this.registerMasonry=n(this.registerMasonry,this);this.onLayout=n(this.onLayout,this);this.options=$.extend({},r,i);this.target=t}var u,r,f,e,i,o;return r={url:"",page:1,callback:function(){return!0},reload:function(){return!0},seemore:"#see-more",item:"item1",added:"addition",masonrycontainer:"#container",nomoretext:"No More Results",scrollcontainer:""},e={},o={},f={},u={},i=!1,t.prototype.seemore=function(){return $(this.options.seemore)},t.prototype.masoncontainerobject=function(){return $(this.options.masonrycontainer)},t.prototype.addedItems=function(){return $(" ."+this.options.added)},t.prototype.run=function(){return this.addedItems().removeClass(this.options.added),this.registerMasonry(),this.registerEvents()},t.prototype.imageLoader=function(n){var t=this;return this.target.imagesLoaded(function(){return n(t)})},t.prototype.onLayout=function(){return this.addedItems().removeClass(this.options.added)},t.prototype.registerMasonry=function(){return this.container=document.querySelector(this.options.masonrycontainer),this.msnry=new Masonry(this.container,{isFitWidth:!0,gutter:10})},t.prototype.loadpage=function(){var f,t,e,o,n,r,u=this;if(!i)return i=!0,r=this.target,n=this.options,o=this.onLayout,e=this.msnry,this.seemore().remove(),f='<div id="loading" class="base-bar space-bar">Loading Page '+n.page+"....<\/div>",$(r).append(f),t=n.url+n.page,t=t.indexOf("?")>-1?t+"&request=ajax":t+"?request=ajax",$.get(t,function(t){var f,s;return n.page=n.page+1,t.replace("/^s+|s+$/g")!==""?($(n.masonrycontainer).append(t),e.appended($(" ."+n.added)),o(),$("#loading").remove(),s='<a href="#" id="'+n.seemore.replace("#","")+'" class="base-bar space-bar">Load Page '+n.page+"<\/a>",$(r).append(s),i=!1,u.options.reload()):($("#loading").remove(),f='<div id="no-more" class="base-bar">'+u.options.nomoretext+"<\/div>",$(r).append(f),u.options.callback())})},t.prototype.registerEvents=function(){var n,t=this;n=this.loadpage;this.target.on("click",this.options.seemore,function(t){return t.preventDefault(),n()});return this.options.scrollcontainer===""?$(window).scroll(function(){if($(window).scrollTop()+1200>=$(document).height()-$(window).height())return n()}):$(this.options.scrollcontainer).scroll(function(){if($(t.options.scrollcontainer).scrollTop()+1200>=$(t.options.scrollcontainer)[0].scrollHeight)return n()})},t}(),function(n){return n.fn.PinLoader=function(n){return new t(this,n).run()}}(jQuery)}.call(this)