(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{4425:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(5321).Z,n=r(1322).Z,i=r(6687).Z,a=r(6239).Z,l=i(r(959)),s=n(r(1659)),c=r(5547),d=r(8912),u=r(8571);r(5404);var f=n(r(9425));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function b(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,i,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let h=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:p,placeholder:b,loading:g,srcString:h,config:v,unoptimized:y,loader:w,onLoadRef:x,onLoadingCompleteRef:k,setBlurComplete:z,setShowAltText:C,onLoad:j,onError:E}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,r,{width:i,height:n,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:g,style:o({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&m(e,h,b,x,k,z,y))},[h,b,x,k,z,E,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,h,b,x,k,z,y)},onError:e=>{C(!0),"blur"===b&&z(!0),E&&E(e)}})))}),v=l.forwardRef((e,t)=>{let r,n;var i,{src:m,sizes:v,unoptimized:y=!1,priority:w=!1,loading:x,className:k,quality:z,width:C,height:j,fill:E,style:S,onLoad:I,onLoadingComplete:_,placeholder:N="empty",blurDataURL:G,layout:R,objectFit:O,objectPosition:P,lazyBoundary:M,lazyRoot:A}=e,T=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let W=l.useContext(u.ImageConfigContext),L=l.useMemo(()=>{let e=p||W||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:r})},[W]),B=T,D=B.loader||f.default;delete B.loader;let q="__next_img_default"in D;if(q){if("custom"===L.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:r}=t,o=a(t,["config"]);return e(o)}}if(R){"fill"===R&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(S=o({},S,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!v&&(v=t)}let F="",$=g(C),Z=g(j);if("object"==typeof(i=m)&&(b(i)||void 0!==i.src)){let e=b(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,G=G||e.blurDataURL,F=e.src,!E){if($||Z){if($&&!Z){let t=$/e.width;Z=Math.round(e.height*t)}else if(!$&&Z){let t=Z/e.height;$=Math.round(e.width*t)}}else $=e.width,Z=e.height}}let U=!w&&("lazy"===x||void 0===x);((m="string"==typeof m?m:F).startsWith("data:")||m.startsWith("blob:"))&&(y=!0,U=!1),L.unoptimized&&(y=!0),q&&m.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(y=!0);let[V,J]=l.useState(!1),[H,K]=l.useState(!1),Q=g(z),X=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},H?{}:{color:"transparent"},S),Y="blur"===N&&G&&!V?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:$,heightInt:Z,blurWidth:r,blurHeight:n,blurDataURL:G}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:i,sizes:a,loader:l}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let i=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:i,kind:"x"}}(t,n,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,o)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:o+1).concat(c)).join(", "),src:l({config:t,src:r,quality:i,width:s[d]})}}({config:L,src:m,unoptimized:y,width:$,quality:Q,sizes:v,loader:D}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},eo=l.useRef(I);l.useEffect(()=>{eo.current=I},[I]);let en=l.useRef(_);l.useEffect(()=>{en.current=_},[_]);let ei=o({isLazy:U,imgAttributes:ee,heightInt:Z,widthInt:$,qualityInt:Q,className:k,imgStyle:X,blurStyle:Y,loading:x,config:L,fill:E,unoptimized:y,placeholder:N,loader:D,srcString:et,onLoadRef:eo,onLoadingCompleteRef:en,setBlurComplete:J,setShowAltText:K},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(h,Object.assign({},ei,{ref:t})),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5547:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:i}=e,a=o||t,l=n||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9425:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},787:function(e,t,r){e.exports=r(4425)},4e3:function(e,t,r){"use strict";r.d(t,{m:function(){return R}});var o=/^\[(.+)\]$/;function n(e,t){var r=e;return t.split("-").forEach(function(e){r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}var i=/\s+/;function a(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){if("string"==typeof t)return t;for(var r,o="",n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);return o}(e))&&(o&&(o+=" "),o+=t);return o}function l(e){var t=function(t){return t[e]||[]};return t.isThemeGetter=!0,t}var s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,p=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function b(e){return w(e)||d.has(e)||c.test(e)||g(e)}function g(e){return E(e,"length",S)}function m(e){return E(e,"size",I)}function h(e){return E(e,"position",I)}function v(e){return E(e,"url",_)}function y(e){return E(e,"number",w)}function w(e){return!Number.isNaN(Number(e))}function x(e){return N(e)||E(e,"number",N)}function k(e){return s.test(e)}function z(){return!0}function C(e){return u.test(e)}function j(e){return E(e,"",G)}function E(e,t,r){var o=s.exec(e);return!!o&&(o[1]?o[1]===t:r(o[2]))}function S(e){return f.test(e)}function I(){return!1}function _(e){return e.startsWith("url(")}function N(e){return Number.isInteger(Number(e))}function G(e){return p.test(e)}var R=function(){for(var e,t,r,l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];var d=function(i){var a=s[0];return t=(e=function(e){var t,r,i,a,l;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var t=0,r=new Map,o=new Map;function n(n,i){r.set(n,i),++t>e&&(t=0,o=r,r=new Map)}return{get:function(e){var t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set:function(e,t){r.has(e)?r.set(e,t):n(e,t)}}}(e.cacheSize),splitModifiers:(t=e.separator||":",function(e){for(var r=0,o=[],n=0,i=0;i<e.length;i++){var a=e[i];0===r&&a===t[0]&&(1===t.length||e.slice(i,i+t.length)===t)&&(o.push(e.slice(n,i)),n=i+t.length),"["===a?r++:"]"===a&&r--}var l=0===o.length?e:e.substring(n),s=l.startsWith("!"),c=s?l.substring(1):l;return{modifiers:o,hasImportantModifier:s,baseClassName:c}}),...(r=e.theme,i=e.prefix,a={nextPart:new Map,validators:[]},(l=Object.entries(e.classGroups),i?l.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?i+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[i+e[0],e[1]]})):e})]}):l).forEach(function(e){var t=e[0];(function e(t,r,o,i){t.forEach(function(t){if("string"==typeof t){(""===t?r:n(r,t)).classGroupId=o;return}if("function"==typeof t){if(t.isThemeGetter){e(t(i),r,o,i);return}r.validators.push({validator:t,classGroupId:o});return}Object.entries(t).forEach(function(t){var a=t[0];e(t[1],n(r,a),o,i)})})})(e[1],a,t,r)}),{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(t,r){if(0===t.length)return r.classGroupId;var o=t[0],n=r.nextPart.get(o),i=n?e(t.slice(1),n):void 0;if(i)return i;if(0!==r.validators.length){var a=t.join("-");return r.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(t,a)||function(e){if(o.test(e)){var t=o.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(t){return e.conflictingClassGroups[t]||[]}})}}(s.slice(1).reduce(function(e,t){return t(e)},a()))).cache.get,r=e.cache.set,d=u,u(i)};function u(o){var n,a,l,s,c,d=t(o);if(d)return d;var u=(a=(n=e).splitModifiers,l=n.getClassGroupId,s=n.getConflictingClassGroupIds,c=new Set,o.trim().split(i).map(function(e){var t=a(e),r=t.modifiers,o=t.hasImportantModifier,n=l(t.baseClassName);if(!n)return{isTailwindClass:!1,originalClassName:e};var i=(function(e){if(e.length<=1)return e;var t=[],r=[];return e.forEach(function(e){"["===e[0]?(t.push.apply(t,r.sort().concat([e])),r=[]):r.push(e)}),t.push.apply(t,r.sort()),t})(r).join(":");return{isTailwindClass:!0,modifierId:o?i+"!":i,classGroupId:n,originalClassName:e}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var t=e.modifierId,r=e.classGroupId,o=t+r;return!c.has(o)&&(c.add(o),s(r).forEach(function(e){return c.add(t+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return r(o,u),u}return function(){return d(a.apply(null,arguments))}}(function(){var e=l("colors"),t=l("spacing"),r=l("blur"),o=l("brightness"),n=l("borderColor"),i=l("borderRadius"),a=l("borderSpacing"),s=l("borderWidth"),c=l("contrast"),d=l("grayscale"),u=l("hueRotate"),f=l("invert"),p=l("gap"),E=l("gradientColorStops"),S=l("inset"),I=l("margin"),_=l("opacity"),N=l("padding"),G=l("saturate"),R=l("scale"),O=l("sepia"),P=l("skew"),M=l("space"),A=l("translate"),T=function(){return["auto","contain","none"]},W=function(){return["auto","hidden","clip","visible","scroll"]},L=function(){return["auto",t]},B=function(){return["",b]},D=function(){return["auto",w,k]},q=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},F=function(){return["solid","dashed","dotted","double","none"]},$=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Z=function(){return["start","end","center","between","around","evenly"]},U=function(){return["","0",k]},V=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},J=function(){return[w,y]},H=function(){return[w,k]};return{cacheSize:500,theme:{colors:[z],spacing:[b],blur:["none","",C,g],brightness:J(),borderColor:[e],borderRadius:["none","","full",C,g],borderSpacing:[t],borderWidth:B(),contrast:J(),grayscale:U(),hueRotate:H(),invert:U(),gap:[t],gradientColorStops:[e],inset:L(),margin:L(),opacity:J(),padding:[t],saturate:J(),scale:J(),sepia:U(),skew:H(),space:[t],translate:[t]},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(q(),[k])}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",x]}],basis:[{basis:[t]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",x]}],"grid-cols":[{"grid-cols":[z]}],"col-start-end":[{col:["auto",{span:[x]},k]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[z]}],"row-start-end":[{row:["auto",{span:[x]},k]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:Z()}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(Z(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Z(),["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[N]}],px:[{px:[N]}],py:[{py:[N]}],pt:[{pt:[N]}],pr:[{pr:[N]}],pb:[{pb:[N]}],pl:[{pl:[N]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",t]}],"min-w":[{"min-w":["min","max","fit",b]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[C]},C,g]}],h:[{h:[t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",b]}],"max-h":[{"max-h":[t,"min","max","fit"]}],"font-size":[{text:["base",C,g]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",g]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",b]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(F(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",b]}],"underline-offset":[{"underline-offset":["auto",b]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[t]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",g]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(q(),[h])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",m]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},v]}],"bg-color":[{bg:[e]}],"gradient-from":[{from:[E]}],"gradient-via":[{via:[E]}],"gradient-to":[{to:[E]}],rounded:[{rounded:[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[].concat(F(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:F()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(F())}],"outline-offset":[{"outline-offset":[b]}],"outline-w":[{outline:[b]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[b]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,j]}],"shadow-color":[{shadow:[z]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":$()}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",C,k]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[G]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[G]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[x,k]}],"translate-x":[{"translate-x":[A]}],"translate-y":[{"translate-y":[A]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[t]}],"scroll-mx":[{"scroll-mx":[t]}],"scroll-my":[{"scroll-my":[t]}],"scroll-mt":[{"scroll-mt":[t]}],"scroll-mr":[{"scroll-mr":[t]}],"scroll-mb":[{"scroll-mb":[t]}],"scroll-ml":[{"scroll-ml":[t]}],"scroll-p":[{"scroll-p":[t]}],"scroll-px":[{"scroll-px":[t]}],"scroll-py":[{"scroll-py":[t]}],"scroll-pt":[{"scroll-pt":[t]}],"scroll-pr":[{"scroll-pr":[t]}],"scroll-pb":[{"scroll-pb":[t]}],"scroll-pl":[{"scroll-pl":[t]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[b,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}})}}]);