(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0767":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("h3",{staticClass:"title"},[t._v("The team")]),a("div",{staticClass:"bg"},[t._m(0),a("p",[t._v("The team members are:")]),a("div",{staticClass:"members"},[a("img",{attrs:{alt:"Team members illustration",src:s("8316")}}),a("div",{staticClass:"group"},t._l(t.members,(function(e,s){return a("div",{key:s,staticClass:"person"},[a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"position"},[t._v(t._s(e.position))])])})),0)])]),t._m(1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("CocoMaterial")]),t._v(" is an idea of Esther Moreno for "),s("a",{staticClass:"link",attrs:{href:"https://kaleidos.net/",target:"_blank"}},[t._v("Kaleidos’")]),t._v(" "),s("a",{staticClass:"link",attrs:{href:"https://piweek.com/",target:"_blank"}},[t._v("PIWEEK ")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"contact"},[t._v("Feel free to "),s("a",{staticClass:"highlight",attrs:{href:"mailto:esther.moreno@kaleidos.net"}},[t._v("contact us")])])}],i={name:"Team",data:function(){return{members:[{name:"Marina López",position:"Front-End Developer"},{name:"Natacha Menjibar",position:"UX/UI Designer"},{name:"Esther Moreno",position:"Creator & Illustrator"},{name:"Yamila Moreno",position:"Back-End Developer"}]}}},n=i,r=(s("33ba"),s("2877")),l=Object(r["a"])(n,a,o,!1,null,"5cd8b310",null);e["default"]=l.exports},"102a":function(t,e,s){},1295:function(t,e,s){},"33ba":function(t,e,s){"use strict";var a=s("1295"),o=s.n(a);o.a},"35ee":function(t,e,s){"use strict";var a=s("6b7b"),o=s.n(a);o.a},"6b7b":function(t,e,s){},"6c19":function(t,e,s){t.exports=s.p+"img/coco.6d579ec8.svg"},7180:function(t,e,s){"use strict";var a=s("102a"),o=s.n(a);o.a},"81d5":function(t,e,s){"use strict";var a=s("7b0b"),o=s("23cb"),i=s("50c4");t.exports=function(t){var e=a(this),s=i(e.length),n=arguments.length,r=o(n>1?arguments[1]:void 0,s),l=n>2?arguments[2]:void 0,c=void 0===l?s:o(l,s);while(c>r)e[r++]=t;return e}},8316:function(t,e,s){t.exports=s.p+"img/team.e1648445.svg"},"999e":function(t,e,s){},"99af":function(t,e,s){"use strict";var a=s("23e7"),o=s("d039"),i=s("e8b5"),n=s("861d"),r=s("7b0b"),l=s("50c4"),c=s("8418"),u=s("65f0"),d=s("1dde"),h=s("b622"),f=s("2d00"),v=h("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",g=f>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=d("concat"),C=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},_=!g||!b;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,s,a,o,i,n=r(this),d=u(n,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?n:arguments[e],C(i)){if(o=l(i.length),h+o>m)throw TypeError(p);for(s=0;s<o;s++,h++)s in i&&c(d,h,i[s])}else{if(h>=m)throw TypeError(p);c(d,h++,i)}return d.length=h,d}})},b3c3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"results"},[a("aside",{staticClass:"tags"},[a("p",[t._v("Popular tags")]),a("ul",{staticClass:"tags-list"},[a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["face"])}}},[t._v("Face")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["transportation"])}}},[t._v("Transportation")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["social"])}}},[t._v("Social")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["nature"])}}},[t._v("Nature")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["food"])}}},[t._v("Food")])])])]),a("section",{staticClass:"results-data"},[a("div",{staticClass:"menu"},[a("form",{staticClass:"search",attrs:{autocomplete:"off",onsubmit:"return false;"}},[a("label",{attrs:{for:"search"}},[t._v("Search results for: ")]),a("div",{staticClass:"relative"},[a("div",{staticClass:"search-input-wrapper"},[t._l(t.searchTags,(function(e,s){return a("span",{key:s,staticClass:"tag",on:{click:function(s){return t.removeTag(e)}}},[t._v("x "+t._s(e))])})),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",attrs:{id:"search",type:"text"},domProps:{value:t.search},on:{keyup:t.autocompleteSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}})],2),t.autocompleteResults.length?a("div",{ref:"results",staticClass:"autocomplete-results"},t._l(t.autocompleteResults,(function(e,s){return a("span",{key:s,on:{click:function(s){return t.addTag(e.slug)}}},[t._v(" "+t._s(e.slug)+" ")])})),0):t._e()])]),t.filteredVectorsList.length?a("span",{staticClass:"info-text"},[t._v("Showing "+t._s(t.filteredVectorsList.length)+" results")]):t._e(),t.filteredVectorsList.length?a("div",{staticClass:"vectors-actions"},[a("button",{staticClass:"btn-color",on:{click:function(e){return t.showModal(t.filteredVectorsList[0],!0,0)}}},[a("img",{attrs:{alt:"Palette icon",src:s("d168")}}),a("span",[t._v("Customize all")])]),a("a",{staticClass:"btn-download",attrs:{href:t.downloadAllSvg,target:"_blank"}},[t._v("Download all SVG")])]):t._e()]),t.filteredVectorsList.length?a("div",{staticClass:"results-list"},t._l(t.filteredVectorsList,(function(e,s){return a("div",{key:s,staticClass:"vector-container"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{id:s,alt:e.name,src:e.svg},on:{load:function(e){return t.loaded(s)}}})]),a("div",{staticClass:"download-btn"},[a("a",{staticClass:"btn svg",attrs:{href:t.downloadSvg(e),target:"_blank"}},[t._v("SVG")]),a("button",{staticClass:"btn png",on:{click:function(a){return t.showModal(e,!1,s)}}},[t._v("PNG")])])])})),0):a("div",{staticClass:"no-results"},[a("img",{attrs:{alt:"Coconut illustration",src:s("6c19")}}),a("h3",[t._v("Sorry, this coconut is empty")]),t.searchTags.length?a("div",[a("span",[t._v("We didn't find any result matching \"")]),a("span",{staticClass:"highlight"},t._l(t.searchTags,(function(e,s){return a("span",{key:s},[t._v(" "+t._s(e)+" ")])})),0),a("span",[t._v('".')])]):t._e(),t._m(0)])]),t.isModalVisible&&t.filteredVectorsList.length?a("modal",{attrs:{vector:t.svgCode,customizeBulk:t.customizeBulk,vectors:t.filteredVectorsList.length,vectorId:t.selectedVector.id,tags:t.searchTags,isHorizontal:t.isHorizontal},on:{close:t.closeModal}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Please try a different search term or look within our "),s("strong",[t._v("popular tags")])])}],i=(s("4de4"),s("caad"),s("a15b"),s("ac1f"),s("2532"),s("841c"),s("5530")),n=s("2f62"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal"},[s("header",{staticClass:"modal-header"},[t._t("header",[s("div",{staticClass:"title-container"},[s("span",{staticClass:"title"},[t._v(" "+t._s(t.customizeBulk?"Customize selection":"Customize illustration")+" ")]),t.customizeBulk?s("span",{staticClass:"subtitle"},[t._v(" ("),s("strong",[t._v(t._s(t.vectors)+" illustrations ")]),t._v("selected for bulk edit) ")]):t._e()]),s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v(" x ")])])],2),s("section",{staticClass:"modal-body"},[t._t("body",[s("div",{staticClass:"preview-container"},[t.customizeBulk?s("span",{staticClass:"preview-title"},[t._v("Example illustation for reference")]):t._e(),s("div",{ref:"preview",class:"preview "+(t.isHorizontal?"horizontal":"vertical"),domProps:{innerHTML:t._s(t.vector)}})]),s("div",{staticClass:"colors"},[s("div",{staticClass:"stroke"},[s("label",{staticClass:"title",attrs:{for:"strokeHex"}},[t._v(" Color ")]),s("div",{staticClass:"color-options"},[t._l(t.strokeColor,(function(e,a){return s("span",{key:a,class:"round "+(t.strokeHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(s){return t.selectStroke(e)}}})})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeHexValue,expression:"strokeHexValue"}],staticClass:"hex",attrs:{name:"strokeHex",type:"text",placeholder:"HEX"},domProps:{value:t.strokeHexValue},on:{keyup:function(e){return t.selectStroke(t.strokeHexValue)},input:function(e){e.target.composing||(t.strokeHexValue=e.target.value)}}})],2)]),s("div",{staticClass:"fill"},[s("label",{staticClass:"title",attrs:{for:"fillHex"}},[t._v(" Background ")]),s("div",{staticClass:"color-options"},[t._l(t.fillColor,(function(e,a){return s("span",{key:a,class:"round "+(t.backgroundHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(s){return t.selectFill(e)}}})})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundHexValue,expression:"backgroundHexValue"}],staticClass:"hex",attrs:{name:"fillHex",type:"text",placeholder:"HEX"},domProps:{value:t.backgroundHexValue},on:{keyup:function(e){return t.selectFill(t.backgroundHexValue)},input:function(e){e.target.composing||(t.backgroundHexValue=e.target.value)}}})],2)]),s("div",{staticClass:"download"},[s("div",{staticClass:"title-container"},[s("span",{staticClass:"title"},[t._v("Download PNG")]),t.customizeBulk?s("span",{staticClass:"subtitle"},[t._v("( "+t._s(t.vectors)+" illustrations)")]):t._e()]),s("div",{staticClass:"buttons"},[s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("128")}},[t._v("S")]),s("span",{staticClass:"size"},[t._v("128px")])]),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("256")}},[t._v("M")]),s("span",{staticClass:"size"},[t._v("256px")])]),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("512")}},[t._v("L")]),s("span",{staticClass:"size"},[t._v("512px")])])])])])])],2)])])])},l=[],c=(s("99af"),s("cb29"),{name:"modal",props:{vector:null,vectorId:null,customizeBulk:null,vectors:null,tags:null,isHorizontal:null},data:function(){return{fillColor:["#FFFFFF","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF"],strokeColor:["#1C2541","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF"],svgCode:null,strokeHexValue:"#1C2541",backgroundHexValue:"#FFFFFF"}},methods:{close:function(){this.$emit("close")},selectStroke:function(t){7===t.length?(this.$refs.preview.firstElementChild.lastElementChild.style.fill=t,this.strokeHexValue=t):this.$refs.preview.firstElementChild.lastElementChild.style.fill="#000000"},selectFill:function(t){7===t.length?(this.$refs.preview.firstElementChild.firstElementChild.style.fill=t,this.backgroundHexValue=t):this.$refs.preview.firstElementChild.firstElementChild.style.fill="transparent"},downloadPng:function(t){return this.customizeBulk?"https://cocomaterial.com/api/download/?tags=".concat(this.tags.join(),"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue:"000000","&fill=").concat(this.backgroundHexValue?this.backgroundHexValue:"none","&size=").concat(t):"https://cocomaterial.com/api/download/?id=".concat(this.vectorId,"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue:"000000","&fill=").concat(this.backgroundHexValue?this.backgroundHexValue:"none","&size=").concat(t)}}}),u=c,d=(s("35ee"),s("2877")),h=Object(d["a"])(u,r,l,!1,null,"257c0574",null),f=h.exports,v={name:"Results",components:{modal:f},data:function(){return{search:"",isModalVisible:!1,selectedVector:null,svgCode:null,autocompleteResults:[],customizeBulk:!1,isHorizontal:!0}},beforeMount:function(){!this.searchTags.length&&this.getTags()},computed:Object(i["a"])(Object(i["a"])({},Object(n["c"])({filteredVectorsList:"filteredVectorsList",searchTags:"searchTags",tagsList:"tagsList"})),{},{downloadAllSvg:function(){return"https://cocomaterial.com/api/download/?tags=".concat(this.searchTags.join(),"&img_format=svg")}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(n["b"])({getTags:"getTags",getVectorsByTag:"getVectorByTag"})),Object(n["d"])({clearFilteredVectors:"clearFilteredVectors",updateSearchTags:"updateSearchTags",removeSearchTag:"removeSearchTag"})),{},{showModal:function(t,e,s){this.selectedVector=t;var a=new XMLHttpRequest;a.open("GET",t.url,!1),a.send(null);var o=document.getElementById("".concat(s)).clientHeight,i=document.getElementById("".concat(s)).clientWidth;this.isHorizontal=o<i,this.svgCode=JSON.parse(a.responseText).svg_content,this.customizeBulk=e,this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},loaded:function(t){var e=document.getElementById("".concat(t)).clientHeight,s=document.getElementById("".concat(t)).clientWidth;document.getElementById(t).className=e>s?"vertical":"horizontal"},autocompleteSearch:function(){var t=this;this.autocompleteResults=this.tagsList.filter((function(e){return e.slug.includes(t.search)}))},closeAutocomplete:function(){this.autocompleteResults=[]},addTag:function(t){this.search="",this.$refs.search.focus(),this.autocompleteResults=[],this.updateSearchTags(t),this.$store.dispatch("getVectorByTag",this.searchTags)},removeTag:function(t){this.removeSearchTag(t),this.searchTags.length?this.$store.dispatch("getVectorByTag",this.searchTags):this.clearFilteredVectors()},downloadSvg:function(t){var e=t.id;return"https://cocomaterial.com/api/download/?id=".concat(e,"&img_format=svg")},searchVector:function(t){this.$store.dispatch("getVectorByTag",t)}})},m=v,p=(s("7180"),Object(d["a"])(m,a,o,!1,null,"5fc1529a",null));e["default"]=p.exports},bff3:function(t,e,s){"use strict";var a=s("999e"),o=s.n(a);o.a},cb29:function(t,e,s){var a=s("23e7"),o=s("81d5"),i=s("44d2");a({target:"Array",proto:!0},{fill:o}),i("fill")},d168:function(t,e,s){t.exports=s.p+"img/palette.301da43b.svg"},e70f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"license"},[s("h3",{staticClass:"title"},[t._v("License")]),s("p",[t._v("All illustrations published on CocoMaterial can be used for free. You can use them for commercial and non-commercial purposes. You do not need to ask permission from or provide credit to CocoMaterial, although it is appreciated when possible. CocoMaterial grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use creations made on CocoMaterial for free, including for commercial purposes, without permission from or attributing the illustrator.")]),s("p",[t._v("This license does not include the right to compile illustrations from CocoMaterial to replicate a similar or competing service.")])])}],i={name:"License"},n=i,r=(s("bff3"),s("2877")),l=Object(r["a"])(n,a,o,!1,null,"0ed13dd8",null);e["default"]=l.exports}}]);
//# sourceMappingURL=about.ab13f434.js.map