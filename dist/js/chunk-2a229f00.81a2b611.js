(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a229f00"],{"8fdb":function(o,a,t){"use strict";t.r(a);var i=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"footer__component"},[t("v-toolbar",{staticClass:"footer__main",attrs:{dense:"",floating:""}},[t("div",{staticClass:"menus"},o._l(o.links,function(a,i){return t("v-btn",{key:i,staticClass:"ma-2 btnicons",attrs:{icon:""},on:{click:function(t){return o.callComponents(a.action)}}},[t("i",{class:a.icon})])}),1)]),t("v-dialog",{attrs:{dark:"","max-width":"320"},model:{value:o.dialogProfile,callback:function(a){o.dialogProfile=a},expression:"dialogProfile"}},[t("Profile",{attrs:{"dialog-profile":o.dialogProfile}})],1),t("v-dialog",{attrs:{dark:"","max-width":"320"},model:{value:o.dialogFavorite,callback:function(a){o.dialogFavorite=a},expression:"dialogFavorite"}},[t("Favorite",{attrs:{"dialog-favorite":o.dialogFavorite}})],1)],1)},e=[],n={components:{Profile:()=>Promise.all([t.e("chunk-4ffdd95a"),t.e("chunk-2c5c3ad6")]).then(t.bind(null,"3ba4")),Favorite:()=>t.e("chunk-2d0deb40").then(t.bind(null,"877b"))},name:"Menus",data:()=>({dialogProfile:!1,dialogFavorite:!1,links:[{icon:"fas fa-sign-out-alt icon",action:"callComponentLogout"},{icon:"fas fa-star bicon",action:"callComponentFavorite"},{icon:"fas fa-user icon",action:"callComponentProfile"}]}),methods:{logout(){this.$store.dispatch("SET_LOGOUT"),setTimeout(()=>{this.$router.push({name:"homepage"}),window.location.reload()},2e3)},callComponents(o){switch(o){case"callComponentProfile":this.dialogProfile=!0;break;case"callComponentLogout":this.logout();break;case"callComponentFavorite":this.dialogFavorite=!0;break}}}},l=n,c=(t("e169"),t("2877")),s=Object(c["a"])(l,i,e,!1,null,"d48c18ac",null);a["default"]=s.exports},e169:function(o,a,t){"use strict";var i=t("f9cb"),e=t.n(i);e.a},f9cb:function(o,a,t){}}]);
//# sourceMappingURL=chunk-2a229f00.81a2b611.js.map