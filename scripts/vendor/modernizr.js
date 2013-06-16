window.Modernizr=function(e,t,n){function r(e){w.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&w[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+R.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)P[n[r]]=!!(n[r]in y);return P.list&&(P.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)y.setAttribute("type",o=e[a]),r="text"!==y.type,r&&(y.value=E,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&y.style.WebkitAppearance!==n?(g.appendChild(y),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,g.removeChild(y)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?y.checkValidity&&y.checkValidity()===!1:y.value!=E)),M[e[a]]=!!r;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.6.2",p={},h=!0,g=t.documentElement,v="modernizr",b=t.createElement(v),w=b.style,y=t.createElement("input"),E=":)",T={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",C=x.split(" "),R=x.toLowerCase().split(" "),H={svg:"http://www.w3.org/2000/svg"},k={},M={},P={},j=[],L=j.slice,U=function(e,n,r,o){var i,a,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=i,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!a},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return U("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},F=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty;f=i(D,"undefined")||i(D.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=L.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(L.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(L.call(arguments)))};return r}),k.flexbox=function(){return u("flexWrap")},k.flexboxlegacy=function(){return u("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},k.canvastext=function(){return!(!p.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:U(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!u("indexedDB",e)},k.hashchange=function(){return F("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!(!e.history||!history.pushState)},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(w.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(w.backgroundColor,"rgba")||a(w.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(w.background)},k.backgroundsize=function(){return u("backgroundSize")},k.borderimage=function(){return u("borderImage")},k.borderradius=function(){return u("borderRadius")},k.boxshadow=function(){return u("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(w.opacity)},k.cssanimations=function(){return u("animationName")},k.csscolumns=function(){return u("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),a(w.backgroundImage,"gradient")},k.cssreflections=function(){return u("boxReflect")},k.csstransforms=function(){return!!u("transform")},k.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&U("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return u("transition")},k.fontface=function(){var e;return U('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},k.generatedcontent=function(){var e;return U(["#",v,"{font:0/0 a}#",v,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},k.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(H.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==H.svg},k.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(T.call(t.createElementNS(H.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(T.call(t.createElementNS(H.svg,"clipPath")))};for(var N in k)f(k,N)&&(d=N.toLowerCase(),p[d]=k[N](),j.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,h!==n&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),b=y=null,function(e,t){function r(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function o(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),d)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!m.test(e)?r.frag.appendChild(o):o}function c(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||i(e);for(var r=n.frag.cloneNode(),a=0,c=o(),s=c.length;s>a;a++)r.createElement(c[a]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function u(e){e||(e=t);var n=i(e);return!b.shivCSS||l||n.hasCSS||(n.hasCSS=!!r(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),d||s(e,n),e}var l,d,f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return e.cloneNode===n||e.createDocumentFragment===n||e.createElement===n}()}catch(r){l=!0,d=!0}})();var b={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:d,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:c};e.html5=b,u(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=R,p._cssomPrefixes=C,p.mq=z,p.hasEvent=F,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=U,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+j.join(" "):""),p}(this,this.document);