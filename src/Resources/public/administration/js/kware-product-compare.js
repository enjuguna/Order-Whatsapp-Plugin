!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/bundles/administration/",r(r.s="FFPC")}({"/5Ca":function(e,t){var r=Shopware.Component,n=Shopware.Data,o=n.Criteria,i=n.EntityCollection;r.extend("sw-property-multi-select","sw-entity-multi-select",{props:{entityCollection:{type:Array,required:!0,default:function(){return new i("/property_group","property_group",Shopware.Context.api,new o(1,this.resultLimit))}},entityName:{type:String,required:!1,default:"property_group"}}})},BlEN:function(e,t){e.exports='{% block sw_prduct_cross_selling_form_active_field %}\n    {% parent %}\n    <sw-field\n        v-model="crossSelling.extensions.crossSellingComparable.isComparable"\n        type="switch"\n        class="sw-product-detail-cross-selling__comparable-switch"\n        :label="$tc(\'kware-product-compare.crossSelling.compareLayout\')">\n    </sw-field>\n{% endblock %}\n\n{% block sw_prduct_cross_selling_form_limit_field %}\n    <sw-number-field\n        numberType="int"\n        :disabled="crossSelling.extensions.crossSellingComparable.isComparable"\n        :label="$tc(\'sw-product.crossselling.inputCrossSellingLimit\')"\n        v-model="crossSelling.limit">\n    </sw-number-field>\n{% endblock %}\n'},FFPC:function(e,t,r){"use strict";r.r(t);var n=r("BlEN"),o=r.n(n),i=(r("vaz8"),Shopware),s=i.Component,l=i.Utils;s.override("sw-product-cross-selling-form",{template:o.a,data:function(){return{originalLimit:this.crossSelling.limit}},watch:{"crossSelling.extensions.crossSellingComparable.isComparable":{deep:!0,immediate:!0,handler:function(e){this.crossSelling.limit=e?4:this.originalLimit}}},created:function(){var e=l.get(this.crossSelling,"extensions.crossSellingComparable",null);e||((e=this.repositoryFactory.create("kware_cross_selling_comparable").create(Shopware.Context.api)).isComparable=!1,this.crossSelling.extensions.crossSellingComparable=e),l.get(this.crossSelling,"extensions.crossSellingComparable.isComparable",!1)&&(this.crossSelling.limit=4)}});r("tcvH"),r("dwUd"),r("/5Ca");Shopware.Module.register("kware-product-compare",{type:"plugin",name:"KwareProductCompare",title:"kware-product-compare.generalInformation.mainMenuItemGeneral",description:"kware-product-compare.generalInformation.descriptionTextModule",version:"1.1.0",targetVersion:"1.1.0",color:"#9AA8B5",icon:"default-shopping-paper-bag"})},GkMn:function(e,t,r){},SZ7m:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],l={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(l):r.push(n[s]={id:s,parts:[l]})}return r}r.r(t),r.d(t,"default",(function(){return m}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),l=null,a=0,c=!1,p=function(){},u=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,o){c=r,u=o||{};var s=n(e,t);return g(s),function(t){for(var r=[],o=0;o<s.length;o++){var l=s[o];(a=i[l.id]).refs--,r.push(a)}t?g(s=n(e,t)):s=[];for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}}function g(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(S(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(S(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function S(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(c)return p;n.parentNode.removeChild(n)}if(f){var o=a++;n=l||(l=h()),t=y.bind(null,n,o,!1),r=y.bind(null,n,o,!0)}else n=h(),t=C.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var v,b=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function C(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),u.ssrId&&e.setAttribute(d,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},dwUd:function(e,t){Shopware.Component.override("sw-product-detail",{computed:{productCriteria:function(){var e=this.$super("productCriteria");return e.addAssociation("crossSellings.crossSellingComparable"),e}}})},tcvH:function(e,t){Shopware.Component.override("sw-product-detail-cross-selling",{methods:{onAddCrossSelling:function(){var e=this.repositoryFactory.create(this.product.crossSellings.entity,this.product.crossSellings.source);this.crossSelling=e.create(Shopware.Context.api);var t=this.repositoryFactory.create("kware_cross_selling_comparable").create(Shopware.Context.api);t.isComparable=!1,this.crossSelling.productId=this.product.id,this.crossSelling.position=this.product.crossSellings.length+1,this.crossSelling.type="productStream",this.crossSelling.sortBy="name",this.crossSelling.sortDirection="ASC",this.crossSelling.limit=24,this.crossSelling.extensions.crossSellingComparable=t,this.product.crossSellings.push(this.crossSelling)}}})},vaz8:function(e,t,r){var n=r("GkMn");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("SZ7m").default)("3c6e1b34",n,!0,{})}});