/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin, CloudMade
*/

(function(t,i,n){var e,o;typeof exports!=n+""?e=exports:(o=t.L,e={},e.noConflict=function(){return t.L=o,this},t.L=e),e.version="0.6-dev",e.Util={extend:function(t){var i,n,e,o,s=Array.prototype.slice.call(arguments,1);for(n=0,e=s.length;e>n;n++){o=s[n]||{};for(i in o)o.hasOwnProperty(i)&&(t[i]=o[i])}return t},bind:function(t,i){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(i,n||arguments)}},stamp:function(){var t=0,i="_leaflet_id";return function(n){return n[i]=n[i]||++t,n[i]}}(),limitExecByInterval:function(t,i,e){var o,s;return function r(){var a=arguments;return o?(s=!0,n):(o=!0,setTimeout(function(){o=!1,s&&(r.apply(e,a),s=!1)},i),t.apply(e,a),n)}},falseFn:function(){return!1},formatNum:function(t,i){var n=Math.pow(10,i||5);return Math.round(t*n)/n},splitWords:function(t){return t.replace(/^\s+|\s+$/g,"").split(/\s+/)},setOptions:function(t,i){return t.options=e.extend({},t.options,i),t.options},getParamString:function(t,i){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")},template:function(t,i){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var e=i[n];if(!i.hasOwnProperty(n))throw Error("No value provided for variable "+t);return e})},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function i(i){var n,e,o=["webkit","moz","o","ms"];for(n=0;o.length>n&&!e;n++)e=t[o[n]+i];return e}function o(i){var n=+new Date,e=Math.max(0,16-(n-s));return s=n+e,t.setTimeout(i,e)}var s=0,r=t.requestAnimationFrame||i("RequestAnimationFrame")||o,a=t.cancelAnimationFrame||i("CancelAnimationFrame")||i("CancelRequestAnimationFrame")||function(i){t.clearTimeout(i)};e.Util.requestAnimFrame=function(i,s,a,h){return i=e.bind(i,s),a&&r===o?(i(),n):r.call(t,i,h)},e.Util.cancelAnimFrame=function(i){i&&a.call(t,i)}}(),e.extend=e.Util.extend,e.bind=e.Util.bind,e.stamp=e.Util.stamp,e.setOptions=e.Util.setOptions,e.Class=function(){},e.Class.extend=function(t){var i=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},n=function(){};n.prototype=this.prototype;var o=new n;o.constructor=i,i.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(i[s]=this[s]);t.statics&&(e.extend(i,t.statics),delete t.statics),t.includes&&(e.Util.extend.apply(null,[o].concat(t.includes)),delete t.includes),t.options&&o.options&&(t.options=e.extend({},o.options,t.options)),e.extend(o,t),o._initHooks=[];var r=this;return i.__super__=r.prototype,o.callInitHooks=function(){if(!this._initHooksCalled){r.prototype.callInitHooks&&r.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;i>t;t++)o._initHooks[t].call(this)}},i},e.Class.include=function(t){e.extend(this.prototype,t)},e.Class.mergeOptions=function(t){e.extend(this.prototype.options,t)},e.Class.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),n="function"==typeof t?t:function(){this[t].apply(this,i)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n)};var s="_leaflet_events";e.Mixin={},e.Mixin.Events={addEventListener:function(t,i,n){var o,r,a,h,l,u,c,m=this[s]=this[s]||{},d=n&&e.stamp(n);if("object"==typeof t){for(o in t)t.hasOwnProperty(o)&&this.addEventListener(o,t[o],i);return this}for(t=e.Util.splitWords(t),r=0,a=t.length;a>r;r++)h={action:i,context:n||this},d?(l=t[r]+"_idx",u=l+"_len",c=m[l]=m[l]||{},c[d]?c[d].push(h):(c[d]=[h],m[u]=(m[u]||0)+1)):(m[t[r]]=m[t[r]]||[],m[t[r]].push(h));return this},hasEventListeners:function(t){return s in this&&(t in this[s]&&this[s][t].length>0||this[s][t+"_idx_len"]>0)},removeEventListener:function(t,i,n){var o,r,a,h,l,u,c,m=this[s],d=n&&e.stamp(n);if("object"==typeof t){for(o in t)t.hasOwnProperty(o)&&this.removeEventListener(o,t[o],i);return this}for(t=e.Util.splitWords(t),r=0,a=t.length;a>r;r++)if(this.hasEventListeners(t[r])){for(u=t[r]+"_idx",h=d&&m[u]?m[u][d]||[]:m[t[r]]||[],l=h.length-1;l>=0;l--)i&&h[l].action!==i||n&&h[l].context!==n||h.splice(l,1);d&&0===h.length&&m[u]&&m[u][d]&&(c=u+"_len",delete m[u][d],m[c]=(m[c]||1)-1)}return this},fireEvent:function(t,i){if(!this.hasEventListeners(t))return this;var n,o,r,a,h,l=e.Util.extend({},i,{type:t,target:this});if(this[s][t])for(n=this[s][t].slice(),o=0,r=n.length;r>o;o++)n[o].action.call(n[o].context||this,l);if(a=this[s][t+"_idx"])for(h in a)if(a.hasOwnProperty(h)&&(n=a[h]))for(o=0,r=n.length;r>o;o++)n[o].action.call(n[o].context||this,l);return this}},e.Mixin.Events.on=e.Mixin.Events.addEventListener,e.Mixin.Events.off=e.Mixin.Events.removeEventListener,e.Mixin.Events.fire=e.Mixin.Events.fireEvent,function(){var o=!!t.ActiveXObject,s=o&&!t.XMLHttpRequest,r=o&&!i.querySelector,a=o&&!i.addEventListener,h=navigator.userAgent.toLowerCase(),l=-1!==h.indexOf("webkit"),u=-1!==h.indexOf("chrome"),c=-1!==h.indexOf("phantom"),m=-1!==h.indexOf("android"),d=-1!==h.search("android [23]"),f=typeof orientation!=n+"",p=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints,_="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=i.documentElement,y=o&&"transition"in g.style,v="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix,L="MozPerspective"in g.style,x="OTransition"in g.style,P=!t.L_DISABLE_3D&&(y||v||L||x)&&!c,T=!t.L_NO_TOUCH&&function(){var t="ontouchstart";if(p||t in g)return!0;var n=i.createElement("div"),e=!1;return n.setAttribute?(n.setAttribute(t,"return;"),"function"==typeof n[t]&&(e=!0),n.removeAttribute(t),n=null,e):!1}();e.Browser={ie:o,ie6:s,ie7:r,ielt9:a,webkit:l,android:m,android23:d,chrome:u,ie3d:y,webkit3d:v,gecko3d:L,opera3d:x,any3d:P,mobile:f,mobileWebkit:f&&l,mobileWebkit3d:f&&v,mobileOpera:f&&t.opera,touch:T,msTouch:p,retina:_}}(),e.Point=function(t,i,n){this.x=n?Math.round(t):t,this.y=n?Math.round(i):i},e.Point.prototype={clone:function(){return new e.Point(this.x,this.y)},add:function(t){return this.clone()._add(e.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(e.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=e.point(t);var i=t.x-this.x,n=t.y-this.y;return Math.sqrt(i*i+n*n)},equals:function(t){return t.x===this.x&&t.y===this.y},contains:function(t){return Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+e.Util.formatNum(this.x)+", "+e.Util.formatNum(this.y)+")"}},e.point=function(t,i,o){return t instanceof e.Point?t:e.Util.isArray(t)?new e.Point(t[0],t[1]):t===n||null===t?t:new e.Point(t,i,o)},e.Bounds=function(t,i){if(t)for(var n=i?[t,i]:t,e=0,o=n.length;o>e;e++)this.extend(n[e])},e.Bounds.prototype={extend:function(t){return t=e.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new e.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new e.Point(this.min.x,this.max.y)},getTopRight:function(){return new e.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,n;return t="number"==typeof t[0]||t instanceof e.Point?e.point(t):e.bounds(t),t instanceof e.Bounds?(i=t.min,n=t.max):i=n=t,i.x>=this.min.x&&n.x<=this.max.x&&i.y>=this.min.y&&n.y<=this.max.y},intersects:function(t){t=e.bounds(t);var i=this.min,n=this.max,o=t.min,s=t.max,r=s.x>=i.x&&o.x<=n.x,a=s.y>=i.y&&o.y<=n.y;return r&&a},isValid:function(){return!(!this.min||!this.max)}},e.bounds=function(t,i){return!t||t instanceof e.Bounds?t:new e.Bounds(t,i)},e.Transformation=function(t,i,n,e){this._a=t,this._b=i,this._c=n,this._d=e},e.Transformation.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new e.Point((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}},e.DomUtil={get:function(t){return"string"==typeof t?i.getElementById(t):t},getStyle:function(t,n){var e=t.style[n];if(!e&&t.currentStyle&&(e=t.currentStyle[n]),(!e||"auto"===e)&&i.defaultView){var o=i.defaultView.getComputedStyle(t,null);e=o?o[n]:null}return"auto"===e?null:e},getViewportOffset:function(t){var n,o=0,s=0,r=t,a=i.body,h=i.documentElement,l=e.Browser.ie7;do{if(o+=r.offsetTop||0,s+=r.offsetLeft||0,o+=parseInt(e.DomUtil.getStyle(r,"borderTopWidth"),10)||0,s+=parseInt(e.DomUtil.getStyle(r,"borderLeftWidth"),10)||0,n=e.DomUtil.getStyle(r,"position"),r.offsetParent===a&&"absolute"===n)break;if("fixed"===n){o+=a.scrollTop||h.scrollTop||0,s+=a.scrollLeft||h.scrollLeft||0;break}r=r.offsetParent}while(r);r=t;do{if(r===a)break;o-=r.scrollTop||0,s-=r.scrollLeft||0,e.DomUtil.documentIsLtr()||!e.Browser.webkit&&!l||(s+=r.scrollWidth-r.clientWidth,l&&"hidden"!==e.DomUtil.getStyle(r,"overflow-y")&&"hidden"!==e.DomUtil.getStyle(r,"overflow")&&(s+=17)),r=r.parentNode}while(r);return new e.Point(s,o)},documentIsLtr:function(){return e.DomUtil._docIsLtrCached||(e.DomUtil._docIsLtrCached=!0,e.DomUtil._docIsLtr="ltr"===e.DomUtil.getStyle(i.body,"direction")),e.DomUtil._docIsLtr},create:function(t,n,e){var o=i.createElement(t);return o.className=n,e&&e.appendChild(o),o},disableTextSelection:function(){i.selection&&i.selection.empty&&i.selection.empty(),this._onselectstart||(this._onselectstart=i.onselectstart||null,i.onselectstart=e.Util.falseFn)},enableTextSelection:function(){i.onselectstart===e.Util.falseFn&&(i.onselectstart=this._onselectstart,this._onselectstart=null)},hasClass:function(t,i){return t.className.length>0&&RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},addClass:function(t,i){e.DomUtil.hasClass(t,i)||(t.className+=(t.className?" ":"")+i)},removeClass:function(t,i){function n(t,n){return n===i?"":t}t.className=t.className.replace(/(\S+)\s*/g,n).replace(/(^\s+|\s+$)/,"")},setOpacity:function(t,i){if("opacity"in t.style)t.style.opacity=i;else if("filter"in t.style){var n=!1,e="DXImageTransform.Microsoft.Alpha";try{n=t.filters.item(e)}catch(o){if(1===i)return}i=Math.round(100*i),n?(n.Enabled=100!==i,n.Opacity=i):t.style.filter+=" progid:"+e+"(opacity="+i+")"}},testProp:function(t){for(var n=i.documentElement.style,e=0;t.length>e;e++)if(t[e]in n)return t[e];return!1},getTranslateString:function(t){var i=e.Browser.webkit3d,n="translate"+(i?"3d":"")+"(",o=(i?",0":"")+")";return n+t.x+"px,"+t.y+"px"+o},getScaleString:function(t,i){var n=e.DomUtil.getTranslateString(i.add(i.multiplyBy(-1*t))),o=" scale("+t+") ";return n+o},setPosition:function(t,i,n){t._leaflet_pos=i,!n&&e.Browser.any3d?(t.style[e.DomUtil.TRANSFORM]=e.DomUtil.getTranslateString(i),e.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden")):(t.style.left=i.x+"px",t.style.top=i.y+"px")},getPosition:function(t){return t._leaflet_pos}},e.DomUtil.TRANSFORM=e.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),e.DomUtil.TRANSITION=e.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),e.DomUtil.TRANSITION_END="webkitTransition"===e.DomUtil.TRANSITION||"OTransition"===e.DomUtil.TRANSITION?e.DomUtil.TRANSITION+"End":"transitionend",e.LatLng=function(t,i){var n=parseFloat(t),e=parseFloat(i);if(isNaN(n)||isNaN(e))throw Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=n,this.lng=e},e.extend(e.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),e.LatLng.prototype={equals:function(t){if(!t)return!1;t=e.latLng(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e.LatLng.MAX_MARGIN>=i},toString:function(t){return"LatLng("+e.Util.formatNum(this.lat,t)+", "+e.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=e.latLng(t);var i=6378137,n=e.LatLng.DEG_TO_RAD,o=(t.lat-this.lat)*n,s=(t.lng-this.lng)*n,r=this.lat*n,a=t.lat*n,h=Math.sin(o/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(r)*Math.cos(a);return 2*i*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,i){var n=this.lng;return t=t||-180,i=i||180,n=(n+i)%(i-t)+(t>n||n===i?i:t),new e.LatLng(this.lat,n)}},e.latLng=function(t,i){return t instanceof e.LatLng?t:e.Util.isArray(t)?new e.LatLng(t[0],t[1]):t===n||null===t?t:"object"==typeof t&&"lat"in t?new e.LatLng(t.lat,"lng"in t?t.lng:t.lon):new e.LatLng(t,i)},e.LatLngBounds=function(t,i){if(t)for(var n=i?[t,i]:t,e=0,o=n.length;o>e;e++)this.extend(n[e])},e.LatLngBounds.prototype={extend:function(t){return t="number"==typeof t[0]||"string"==typeof t[0]||t instanceof e.LatLng?e.latLng(t):e.latLngBounds(t),t instanceof e.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new e.LatLng(t.lat,t.lng),this._northEast=new e.LatLng(t.lat,t.lng)):t instanceof e.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var i=this._southWest,n=this._northEast,o=Math.abs(i.lat-n.lat)*t,s=Math.abs(i.lng-n.lng)*t;return new e.LatLngBounds(new e.LatLng(i.lat-o,i.lng-s),new e.LatLng(n.lat+o,n.lng+s))},getCenter:function(){return new e.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new e.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new e.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof e.LatLng?e.latLng(t):e.latLngBounds(t);var i,n,o=this._southWest,s=this._northEast;return t instanceof e.LatLngBounds?(i=t.getSouthWest(),n=t.getNorthEast()):i=n=t,i.lat>=o.lat&&n.lat<=s.lat&&i.lng>=o.lng&&n.lng<=s.lng},intersects:function(t){t=e.latLngBounds(t);var i=this._southWest,n=this._northEast,o=t.getSouthWest(),s=t.getNorthEast(),r=s.lat>=i.lat&&o.lat<=n.lat,a=s.lng>=i.lng&&o.lng<=n.lng;return r&&a},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=e.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},e.latLngBounds=function(t,i){return!t||t instanceof e.LatLngBounds?t:new e.LatLngBounds(t,i)},e.Projection={},e.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var i=e.LatLng.DEG_TO_RAD,n=this.MAX_LATITUDE,o=Math.max(Math.min(n,t.lat),-n),s=t.lng*i,r=o*i;return r=Math.log(Math.tan(Math.PI/4+r/2)),new e.Point(s,r)},unproject:function(t){var i=e.LatLng.RAD_TO_DEG,n=t.x*i,o=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*i;return new e.LatLng(o,n)}},e.Projection.LonLat={project:function(t){return new e.Point(t.lng,t.lat)},unproject:function(t){return new e.LatLng(t.y,t.x)}},e.CRS={latLngToPoint:function(t,i){var n=this.projection.project(t),e=this.scale(i);return this.transformation._transform(n,e)},pointToLatLng:function(t,i){var n=this.scale(i),e=this.transformation.untransform(t,n);return this.projection.unproject(e)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)}},e.CRS.Simple=e.extend({},e.CRS,{projection:e.Projection.LonLat,transformation:new e.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),e.CRS.EPSG3857=e.extend({},e.CRS,{code:"EPSG:3857",projection:e.Projection.SphericalMercator,transformation:new e.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var i=this.projection.project(t),n=6378137;return i.multiplyBy(n)}}),e.CRS.EPSG900913=e.extend({},e.CRS.EPSG3857,{code:"EPSG:900913"}),e.CRS.EPSG4326=e.extend({},e.CRS,{code:"EPSG:4326",projection:e.Projection.LonLat,transformation:new e.Transformation(1/360,.5,-1/360,.5)}),e.Map=e.Class.extend({includes:e.Mixin.Events,options:{crs:e.CRS.EPSG3857,fadeAnimation:e.DomUtil.TRANSITION&&!e.Browser.android23,trackResize:!0,markerZoomAnimation:e.DomUtil.TRANSITION&&e.Browser.any3d},initialize:function(t,i){i=e.setOptions(this,i),this._initContainer(t),this._initLayout(),this.callInitHooks(),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),i.center&&i.zoom!==n&&this.setView(e.latLng(i.center),i.zoom,!0),this._initLayers(i.layers)},setView:function(t,i){return this._resetView(e.latLng(t),this._limitZoom(i)),this},setZoom:function(t){return this.setView(this.getCenter(),t)},zoomIn:function(t){return this.setZoom(this._zoom+(t||1))},zoomOut:function(t){return this.setZoom(this._zoom-(t||1))},fitBounds:function(t){var i=this.getBoundsZoom(t);return this.setView(e.latLngBounds(t).getCenter(),i)},fitWorld:function(){var t=new e.LatLng(-60,-170),i=new e.LatLng(85,179);return this.fitBounds(new e.LatLngBounds(t,i))},panTo:function(t){return this.setView(t,this._zoom)},panBy:function(t){return this.fire("movestart"),this._rawPanBy(e.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){if(t=e.latLngBounds(t),this.options.maxBounds=t,!t)return this._boundsMinZoom=null,this;var i=this.getBoundsZoom(t,!0);return this._boundsMinZoom=i,this._loaded&&(i>this._zoom?this.setView(t.getCenter(),i):this.panInsideBounds(t)),this},panInsideBounds:function(t){t=e.latLngBounds(t);var i=this.getBounds(),n=this.project(i.getSouthWest()),o=this.project(i.getNorthEast()),s=this.project(t.getSouthWest()),r=this.project(t.getNorthEast()),a=0,h=0;return o.y<r.y&&(h=r.y-o.y),o.x>r.x&&(a=r.x-o.x),n.y>s.y&&(h=s.y-n.y),n.x<s.x&&(a=s.x-n.x),this.panBy(new e.Point(a,h,!0))},addLayer:function(t){var i=e.stamp(t);return this._layers[i]?this:(this._layers[i]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[i]=t,this._updateZoomLevels()),this.options.zoomAnimation&&e.TileLayer&&t instanceof e.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this.whenReady(function(){t.onAdd(this),this.fire("layeradd",{layer:t})},this),this)},removeLayer:function(t){var i=e.stamp(t);if(this._layers[i])return t.onRemove(this),delete this._layers[i],this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels()),this.options.zoomAnimation&&e.TileLayer&&t instanceof e.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this.fire("layerremove",{layer:t})},hasLayer:function(t){if(!t)return!1;var i=e.stamp(t);return this._layers.hasOwnProperty(i)},eachLayer:function(t,i){for(var n in this._layers)this._layers.hasOwnProperty(n)&&t.call(i,this._layers[n]);return this},invalidateSize:function(t){var i=this.getSize();if(this._sizeChanged=!0,this.options.maxBounds&&this.setMaxBounds(this.options.maxBounds),!this._loaded)return this;var n=i._subtract(this.getSize())._divideBy(2)._round();return(0!==n.x||0!==n.y)&&(t===!0?this.panBy(n):(this._rawPanBy(n),this.fire("move"),clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e.bind(this.fire,this,"moveend"),200))),this},addHandler:function(t,i){return i?(this[t]=new i(this),this.options[t]&&this[t].enable(),this):n},remove:function(){return this._loaded&&this.fire("unload"),this._initEvents("off"),delete this._container._leaflet,this},getCenter:function(){return this._checkIfLoaded(),this._moved()?this.layerPointToLatLng(this._getCenterLayerPoint()):this._initialCenter},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),i=this.unproject(t.getBottomLeft()),n=this.unproject(t.getTopRight());return new e.LatLngBounds(i,n)},getMinZoom:function(){var t=this.options.minZoom||0,i=this._layersMinZoom||0,n=this._boundsMinZoom||0;return Math.max(t,i,n)},getMaxZoom:function(){var t=this.options.maxZoom===n?1/0:this.options.maxZoom,i=this._layersMaxZoom===n?1/0:this._layersMaxZoom;return Math.min(t,i)},getBoundsZoom:function(t,i){t=e.latLngBounds(t);var n,o,s,r=this.getSize(),a=this.options.minZoom||0,h=this.getMaxZoom(),l=t.getNorthEast(),u=t.getSouthWest(),c=!0;i&&a--;do a++,o=this.project(l,a),s=this.project(u,a),n=new e.Point(Math.abs(o.x-s.x),Math.abs(s.y-o.y)),c=i?n.x<r.x||n.y<r.y:n.x<=r.x&&n.y<=r.y;while(c&&h>=a);return c&&i?null:i?a:a-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new e.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new e.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var i=this.options.crs;return i.scale(t)/i.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,i){return i=i===n?this._zoom:i,this.options.crs.latLngToPoint(e.latLng(t),i)},unproject:function(t,i){return i=i===n?this._zoom:i,this.options.crs.pointToLatLng(e.point(t),i)},layerPointToLatLng:function(t){var i=e.point(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){var i=this.project(e.latLng(t))._round();return i._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return e.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return e.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(e.point(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(e.latLng(t)))},mouseEventToContainerPoint:function(t){return e.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=e.DomUtil.get(t);if(i._leaflet)throw Error("Map container is already initialized.");i._leaflet=!0},_initLayout:function(){var t=this._container;e.DomUtil.addClass(t,"leaflet-container"),e.Browser.touch&&e.DomUtil.addClass(t,"leaflet-touch"),this.options.fadeAnimation&&e.DomUtil.addClass(t,"leaflet-fade-anim");var i=e.DomUtil.getStyle(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var i=" leaflet-zoom-hide";this.options.markerZoomAnimation||(e.DomUtil.addClass(t.markerPane,i),e.DomUtil.addClass(t.shadowPane,i),e.DomUtil.addClass(t.popupPane,i))},_createPane:function(t,i){return e.DomUtil.create("div",t,i||this._panes.objectsPane)},_initLayers:function(t){t=t?e.Util.isArray(t)?t:[t]:[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0;var i,n;for(i=0,n=t.length;n>i;i++)this.addLayer(t[i])},_resetView:function(t,i,n,o){var s=this._zoom!==i;o||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=i,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),n?this._initialTopLeftPoint._add(this._getMapPanePos()):e.DomUtil.setPosition(this._mapPane,new e.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var r=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!n}),this.fire("move"),(s||o)&&this.fire("zoomend"),this.fire("moveend",{hard:!n}),r&&this.fire("load")},_rawPanBy:function(t){e.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,i=1/0,e=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers)if(this._zoomBoundLayers.hasOwnProperty(t)){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(i=Math.min(i,s.options.minZoom)),isNaN(s.options.maxZoom)||(e=Math.max(e,s.options.maxZoom))}t===n?this._layersMaxZoom=this._layersMinZoom=n:(this._layersMaxZoom=e,this._layersMinZoom=i),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_checkIfLoaded:function(){if(!this._loaded)throw Error("Set map center and zoom first.")},_initEvents:function(i){if(e.DomEvent){i=i||"on",e.DomEvent[i](this._container,"click",this._onMouseClick,this);var n,o,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(n=0,o=s.length;o>n;n++)e.DomEvent[i](this._container,s[n],this._fireMouseEvent,this);this.options.trackResize&&e.DomEvent[i](t,"resize",this._onResize,this)}},_onResize:function(){e.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=e.Util.requestAnimFrame(this.invalidateSize,this,!1,this._container)},_onMouseClick:function(t){!this._loaded||this.dragging&&this.dragging.moved()||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded){var i=t.type;if(i="mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,this.hasEventListeners(i)){"contextmenu"===i&&e.DomEvent.preventDefault(t);var n=this.mouseEventToContainerPoint(t),o=this.containerPointToLayerPoint(n),s=this.layerPointToLatLng(o);this.fire(i,{latlng:s,layerPoint:o,containerPoint:n,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},whenReady:function(t,i){return this._loaded?t.call(i||this,this):this.on("load",t,i),this},_getMapPanePos:function(){return e.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals(new e.Point(0,0))},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,i){var n=this.getSize()._divideBy(2);return this.project(t,i)._subtract(n)._round()},_latLngToNewLayerPoint:function(t,i,n){var e=this._getNewTopLeftPoint(n,i).add(this._getMapPanePos());return this.project(t,i)._subtract(e)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitZoom:function(t){var i=this.getMinZoom(),n=this.getMaxZoom();return Math.max(i,Math.min(n,t))}}),e.map=function(t,i){return new e.Map(t,i)},e.TileLayer=e.Class.extend({includes:e.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:e.Browser.mobile,updateWhenIdle:e.Browser.mobile},initialize:function(t,i){i=e.setOptions(this,i),i.detectRetina&&e.Browser.retina&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomOffset++,i.minZoom>0&&i.minZoom--,this.options.maxZoom--),i.bounds&&(i.bounds=e.latLngBounds(i.bounds)),this._url=t;var n=this.options.subdomains;"string"==typeof n&&(this.options.subdomains=n.split(""))},onAdd:function(t){this._map=t,this._animated=t.options.zoomAnimation&&e.Browser.any3d,this._initContainer(),this._createTileProto(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=e.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,i){return this._url=t,i||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==n&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,i){var n,e,o,s=t.children,r=-i(1/0,-1/0);for(e=0,o=s.length;o>e;e++)s[e]!==this._container&&(n=parseInt(s[e].style.zIndex,10),isNaN(n)||(r=i(r,n)));this.options.zIndex=this._container.style.zIndex=(isFinite(r)?r:0)+i(1,-1)},_updateOpacity:function(){var t,i=this._tiles;if(e.Browser.ielt9)for(t in i)i.hasOwnProperty(t)&&e.DomUtil.setOpacity(i[t],this.options.opacity);else e.DomUtil.setOpacity(this._container,this.options.opacity);if(e.Browser.webkit)for(t in i)i.hasOwnProperty(t)&&(i[t].style.webkitTransform+=" translate(0,0)")},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=e.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var i="leaflet-tile-container leaflet-zoom-animated";this._bgBuffer=e.DomUtil.create("div",i,this._container),this._tileContainer=e.DomUtil.create("div",i,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),1>this.options.opacity&&this._updateOpacity()}},_reset:function(t){var i=this._tiles;for(var n in i)i.hasOwnProperty(n)&&this.fire("tileunload",{tile:i[n]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_update:function(){if(this._map){var t=this._map.getPixelBounds(),i=this._map.getZoom(),n=this.options.tileSize;if(!(i>this.options.maxZoom||this.options.minZoom>i)){var o=new e.Point(Math.floor(t.min.x/n),Math.floor(t.min.y/n)),s=new e.Point(Math.floor(t.max.x/n),Math.floor(t.max.y/n)),r=new e.Bounds(o,s);this._addTilesFromCenterOut(r),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(r)}}},_addTilesFromCenterOut:function(t){var n,o,s,r=[],a=t.getCenter();for(n=t.min.y;t.max.y>=n;n++)for(o=t.min.x;t.max.x>=o;o++)s=new e.Point(o,n),this._tileShouldBeLoaded(s)&&r.push(s);var h=r.length;
if(0!==h){r.sort(function(t,i){return t.distanceTo(a)-i.distanceTo(a)});var l=i.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,o=0;h>o;o++)this._addTile(r[o],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;if(!this.options.continuousWorld){var i=this._getWrapTileNum();if(this.options.noWrap&&(0>t.x||t.x>=i)||0>t.y||t.y>=i)return!1}if(this.options.bounds){var n=this.options.tileSize,o=t.multiplyBy(n),s=o.add(new e.Point(n,n)),r=this._map.unproject(o),a=this._map.unproject(s),h=new e.LatLngBounds([r,a]);if(!this.options.bounds.intersects(h))return!1}return!0},_removeOtherTiles:function(t){var i,n,e,o;for(o in this._tiles)this._tiles.hasOwnProperty(o)&&(i=o.split(":"),n=parseInt(i[0],10),e=parseInt(i[1],10),(t.min.x>n||n>t.max.x||t.min.y>e||e>t.max.y)&&this._removeTile(o))},_removeTile:function(t){var i=this._tiles[t];this.fire("tileunload",{tile:i,url:i.src}),this.options.reuseTiles?(e.DomUtil.removeClass(i,"leaflet-tile-loaded"),this._unusedTiles.push(i)):i.parentNode===this._tileContainer&&this._tileContainer.removeChild(i),e.Browser.android||(i.src=e.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,i){var n=this._getTilePos(t),o=this._getTile();e.DomUtil.setPosition(o,n,e.Browser.chrome||e.Browser.android23),this._tiles[t.x+":"+t.y]=o,this._loadTile(o,t),o.parentNode!==this._tileContainer&&i.appendChild(o)},_getZoomForUrl:function(){var t=this.options,i=this._map.getZoom();return t.zoomReverse&&(i=t.maxZoom-i),i+t.zoomOffset},_getTilePos:function(t){var i=this._map.getPixelOrigin(),n=this.options.tileSize;return t.multiplyBy(n).subtract(i)},getTileUrl:function(t){return e.Util.template(this._url,e.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){return Math.pow(2,this._getZoomForUrl())},_adjustTilePoint:function(t){var i=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%i+i)%i),this.options.tms&&(t.y=i-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_createTileProto:function(){var t=this._tileImg=e.DomUtil.create("img","leaflet-tile");t.style.width=t.style.height=this.options.tileSize+"px",t.galleryimg="no"},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=this._tileImg.cloneNode(!1);return t.onselectstart=t.onmousemove=e.Util.falseFn,e.Browser.ielt9&&this.options.opacity!==n&&e.DomUtil.setOpacity(t,this.options.opacity),t},_loadTile:function(t,i){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(i),t.src=this.getTileUrl(i)},_tileLoaded:function(){this._tilesToLoad--,this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(e.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==e.Util.emptyImageUrl&&(e.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var i=t.options.errorTileUrl;i&&(this.src=i),t._tileLoaded()}}),e.tileLayer=function(t,i){return new e.TileLayer(t,i)},e.Control=e.Class.extend({options:{position:"topright"},initialize:function(t){e.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var i=this._container=this.onAdd(t),n=this.getPosition(),o=t._controlCorners[n];return e.DomUtil.addClass(i,"leaflet-control"),-1!==n.indexOf("bottom")?o.insertBefore(i,o.firstChild):o.appendChild(i),this},removeFrom:function(t){var i=this.getPosition(),n=t._controlCorners[i];return n.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this}}),e.control=function(t){return new e.Control(t)},e.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var r=n+t+" "+n+s;i[t+s]=e.DomUtil.create("div",r,o)}var i=this._controlCorners={},n="leaflet-",o=this._controlContainer=e.DomUtil.create("div",n+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")}}),e.Control.Zoom=e.Control.extend({options:{position:"topleft"},onAdd:function(t){var i="leaflet-control-zoom",n=e.DomUtil.create("div",i+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton("+","Zoom in",i+"-in",n,this._zoomIn,this),this._zoomOutButton=this._createButton("-","Zoom out",i+"-out",n,this._zoomOut,this),t.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,i,n,o,s,r){var a=e.DomUtil.create("a",n,o);a.innerHTML=t,a.href="#",a.title=i;var h=e.DomEvent.stopPropagation;return e.DomEvent.on(a,"click",h).on(a,"mousedown",h).on(a,"dblclick",h).on(a,"click",e.DomEvent.preventDefault).on(a,"click",s,r),a},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";e.DomUtil.removeClass(this._zoomInButton,i),e.DomUtil.removeClass(this._zoomOutButton,i),t._zoom===t.getMinZoom()&&e.DomUtil.addClass(this._zoomOutButton,i),t._zoom===t.getMaxZoom()&&e.DomUtil.addClass(this._zoomInButton,i)}}),e.Map.mergeOptions({zoomControl:!0}),e.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new e.Control.Zoom,this.addControl(this.zoomControl))}),e.control.zoom=function(t){return new e.Control.Zoom(t)},e.DG=e.DG||{},e.DG.TileLayer=e.TileLayer.extend({dgTileLayerUrl:"http://tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=4",options:{subdomains:"0123",errorTileUrl:"http://maps.api.2gis.ru/images/nomap.png"},initialize:function(){var t=this.dgTileLayerUrl,i=e.setOptions(this,this.options);e.TileLayer.prototype.initialize.call(this,t,i)}}),e.DG.tileLayer=function(){return new e.DG.TileLayer},e.Map.mergeOptions({attributionControl:!1,layers:[e.DG.tileLayer()]}),e.Map.addInitHook(function(){var t={position:"bottomright",prefix:'<div class="dg-mapcopyright dg-mapcopyright_lang_ru"><a href="http://2gis.ru/?utm_source=copyright&utm_medium=map&utm_campaign=partners" class="dg-mapcopyright__logolink" target="_blank" alt="ООО  ДубльГИС"><span class="dg-mapcopyright__logo"></span></a><a class="dg-link dg-mapcopyright__apilink" href="http://api.2gis.ru/?utm_source=copyright&utm_medium=map&utm_campaign=partners" target="_blank" alt="Работает на API 2ГИС"></a><a class="dg-link dg-mapcopyright__license" href="http://help.2gis.ru/licensing-agreement/" target="_blank" alt="Лицензионное соглашение"></a></div>'};new e.Control.Attribution(t).addTo(this)})})(this,document);