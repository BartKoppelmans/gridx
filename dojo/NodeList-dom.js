//>>built
define("dojo/NodeList-dom","./_base/kernel,./query,./_base/array,./_base/lang,./dom-class,./dom-construct,./dom-geometry,./dom-attr,./dom-style".split(","),function(i,g,s,j,k,l,m,n,t){function o(a){return function(b,c,d){return 2==arguments.length?a["string"==typeof c?"get":"set"](b,c):a.set(b,c,d)}}var p=function(a){return 1==a.length&&"string"==typeof a[0]},u=function(a){var b=a.parentNode;b&&b.removeChild(a)},e=g.NodeList,q=e._adaptWithCondition,f=e._adaptAsForEach,r=e._adaptAsMap;j.extend(e,{_normalize:function(a,
b){var c=!0===a.parse;if("string"==typeof a.template)var d=a.templateFunc||i.string&&i.string.substitute,a=d?d(a.template,a):a;d=typeof a;"string"==d||"number"==d?(a=l.toDom(a,b&&b.ownerDocument),a=11==a.nodeType?j._toArray(a.childNodes):[a]):j.isArrayLike(a)?j.isArray(a)||(a=j._toArray(a)):a=[a];if(c)a._runParse=!0;return a},_cloneNode:function(a){return a.cloneNode(!0)},_place:function(a,b,c,d){if(!(1!=b.nodeType&&"only"==c))for(var h,g=a.length,e=g-1;0<=e;e--){var f=d?this._cloneNode(a[e]):a[e];
if(a._runParse&&i.parser&&i.parser.parse){h||(h=b.ownerDocument.createElement("div"));h.appendChild(f);i.parser.parse(h);for(f=h.firstChild;h.firstChild;)h.removeChild(h.firstChild)}e==g-1?l.place(f,b,c):b.parentNode.insertBefore(f,b);b=f}},position:r(m.position),attr:q(o(n),p),style:q(o(t),p),addClass:f(k.add),removeClass:f(k.remove),toggleClass:f(k.toggle),replaceClass:f(k.replace),empty:f(l.empty),removeAttr:f(n.remove),marginBox:r(m.getMarginBox),place:function(a,b){var c=g(a)[0];return this.forEach(function(a){l.place(a,
c,b)})},orphan:function(a){return(a?g._filterResult(this,a):this).forEach(u)},adopt:function(a,b){return g(a).place(this[0],b)._stash(this)},query:function(a){if(!a)return this;var b=new e;this.map(function(c){g(a,c).forEach(function(a){void 0!==a&&b.push(a)})});return b._stash(this)},filter:function(a){var b=arguments,c=this,d=0;if("string"==typeof a){c=g._filterResult(this,b[0]);if(1==b.length)return c._stash(this);d=1}return this._wrap(s.filter(c,b[d],b[d+1]),this)},addContent:function(a,b){for(var a=
this._normalize(a,this[0]),c=0,d;d=this[c];c++)this._place(a,d,b,0<c);return this}});return e});