function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Autocue=function(){"use strict";function e(t){_classCallCheck(this,e),this.el=this.__getConsole(t||"#autocue"),this.timer=null}return _createClass(e,[{key:"__getConsole",value:function(e){return document.querySelector(e)}},{key:"showSubtitle",value:function(e){var t=this;console.log(this.el),"string"==typeof e&&(this.el.innerHTML='<span class="autocue-subtitle">'.concat(e,"</span>"),this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.el.innerText&&(t.el.innerText="")}),6e3))}}]),e}();
//# sourceMappingURL=index.38254a2e.js.map
