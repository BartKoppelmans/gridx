//>>built
define("dojo/i18n","./_base/kernel,require,./has,./_base/array,./_base/config,./_base/lang,./_base/xhr,./json,module".split(","),function(l,n,o,s,z,p,w,A,B){o.add("dojo-preload-i18n-Api",1);var q=l.i18n={},C=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,D=function(a,c,b,d){for(var h=[b+d],c=c.split("-"),i="",e=0;e<c.length;e++)i+=(i?"-":"")+c[e],(!a||a[i])&&h.push(b+i+"/"+d);return h},g={},x=function(a,c,b){b=b?b.toLowerCase():l.locale;a=a.replace(/\./g,"/");c=c.replace(/\./g,"/");return/root/i.test(b)?
a+"/nls/"+c:a+"/nls/"+b+"/"+c};l.getL10nName=function(a,c,b){return B.id+"!"+x(a,c,b)};var F=function(a,c,b,d,h,i){a([c],function(e){var j=p.clone(e.root),t=D(!e._v1x&&e,h,b,d);a(t,function(){for(var a=1;a<t.length;a++)j=p.mixin(p.clone(j),arguments[a]);g[c+"/"+h]=j;i()})})},G=function(a){var c=z.extraLocale||[],c=p.isArray(c)?c:[c];c.push(a);return c},v=function(a,c,b){if(o("dojo-preload-i18n-Api")){var d=a.split("*"),h="preload"==d[1];h&&(g[a]||(g[a]=1,H(d[2],A.parse(d[3]),1,c)),b(1));if(!(d=h))r&&
u.push([a,c,b]),d=r;if(d)return}var a=C.exec(a),i=a[1]+"/",e=a[5]||a[4],j=i+e,d=(a=a[5]&&a[4])||l.locale,t=j+"/"+d,a=a?[d]:G(d),E=a.length,f=function(){--E||b(p.delegate(g[t]))};s.forEach(a,function(a){var b=j+"/"+a;o("dojo-preload-i18n-Api")&&k(b);g[b]?f():F(c,j,i,e,a,f)})};if(o("dojo-unit-tests"))var I=q.unitTests=[];o("dojo-preload-i18n-Api");var J=q.normalizeLocale=function(a){a=a?a.toLowerCase():l.locale;return"root"==a?"ROOT":a},r=0,u=[],H=q._preloadLocalizations=function(a,c,b,d){function h(a,
c){d.isXdUrl(n.toUrl(a+".js"))||b?d([a],c):y([a],c,d)}function f(a,c){for(var b=a.split("-");b.length;){if(c(b.join("-")))return;b.pop()}c("ROOT")}function e(b){b=J(b);f(b,function(b){if(0<=s.indexOf(c,b)){var d=a.replace(/\./g,"/")+"_"+b;r++;h(d,function(a){for(var c in a)g[n.toAbsMid(c)+"/"+b]=a[c];for(--r;!r&&u.length;)v.apply(null,u.shift())});return!0}return!1})}d=d||n;e();s.forEach(l.config.extraLocale,e)},k=function(){},f={},m=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue",
"var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},\t   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),y=function(a,c,b){var d=[];s.forEach(a,function(a){function c(b){b=m(b,k,a,f);b===f?d.push(g[e]=f.result):(b instanceof Error&&
(console.error("failed to evaluate i18n bundle; url="+e,b),b={}),d.push(g[e]=/nls\/[^\/]+\/[^\/]+$/.test(e)?b:{root:b,_v1x:1}))}var e=b.toUrl(a+".js");if(g[e])d.push(g[e]);else{var j=b.syncLoadNls(a);if(j)d.push(j);else if(w)w.get({url:e,sync:!0,load:c,error:function(){d.push(g[e]={})}});else try{b.getText(e,!0,c)}catch(l){d.push(g[e]={})}}});c&&c.apply(null,d)},k=function(a){for(var c,b=a.split("/"),d=l.global[b[0]],f=1;d&&f<b.length-1;d=d[b[f++]]);d&&((c=d[b[f]])||(c=d[b[f].replace(/-/g,"_")]),
c&&(g[a]=c));return c};q.getLocalization=function(a,c,b){var d,a=x(a,c,b);v(a,!n.isXdUrl(n.toUrl(a+".js"))?function(a,b){y(a,b,n)}:n,function(a){d=a});return d};o("dojo-unit-tests")&&I.push(function(a){a.register("tests.i18n.unit",function(a){var b;b=m("{prop:1}",k,"nonsense",f);a.is({prop:1},b);a.is(void 0,b[1]);b=m("({prop:1})",k,"nonsense",f);a.is({prop:1},b);a.is(void 0,b[1]);b=m("{'prop-x':1}",k,"nonsense",f);a.is({"prop-x":1},b);a.is(void 0,b[1]);b=m("({'prop-x':1})",k,"nonsense",f);a.is({"prop-x":1},
b);a.is(void 0,b[1]);b=m("define({'prop-x':1})",k,"nonsense",f);a.is(f,b);a.is({"prop-x":1},f.result);b=m("define('some/module', {'prop-x':1})",k,"nonsense",f);a.is(f,b);a.is({"prop-x":1},f.result);b=m("this is total nonsense and should throw an error",k,"nonsense",f);a.is(b instanceof Error,!0)})});return p.mixin(q,{dynamic:!0,normalize:function(a,c){return/^\./.test(a)?c(a):a},load:v,cache:g})});