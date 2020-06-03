(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-reports"],{"0393":function(e,t,n){"use strict";n("0481"),n("4069");var a=n("5530"),s=(n("210b"),n("604c")),o=n("d9bd");t["a"]=s["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(a["a"])({},s["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(o["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(o["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(a)}}})},"141d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",md:"11",sm:"12"}},[n("v-banner",{attrs:{icon:"description","single-line":""}},[e._v("Allergen Report")])],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("v-menu",{attrs:{"close-on-content-click":"",transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"From Date","prepend-icon":"event",readonly:""},model:{value:e.startTextField,callback:function(t){e.startTextField=t},expression:"startTextField"}},a))]}}]),model:{value:e.startMenu,callback:function(t){e.startMenu=t},expression:"startMenu"}},[n("v-date-picker",{attrs:{max:e.max,color:"green lighten-1","header-color":"primary"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1)],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("v-menu",{attrs:{"close-on-content-click":"",transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"To Date","prepend-icon":"event",readonly:""},model:{value:e.endTextField,callback:function(t){e.endTextField=t},expression:"endTextField"}},a))]}}]),model:{value:e.endMenu,callback:function(t){e.endMenu=t},expression:"endMenu"}},[n("v-date-picker",{attrs:{max:e.max,min:e.startDate,color:"green lighten-1","header-color":"primary"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1),n("v-col",{attrs:{col:"12",sm:"12",md:"4"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"primary"},on:{click:function(t){return t.stopPropagation(),e.getAllergenReport(t)}}},[n("v-icon",{staticClass:"mr-2"},[e._v("search")]),e._v(" Find ")],1)],1),n("v-col",{attrs:{col:"12",sm:"12",md:"11"}},[e.allergens.length?n("v-expansion-panels",e._l(e.allergens,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(e._s(t.group_description))]),n("v-expansion-panel-content",[n("v-expansion-panels",e._l(t.categories,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(e._s(t.category_description))]),n("v-expansion-panel-content",[n("v-expansion-panels",e._l(t.products,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(e._s(t.description))]),n("v-expansion-panel-content",[n("ProductAllergen",{attrs:{product:t}})],1)],1)})),1)],1)],1)})),1)],1)],1)})),1):e._e(),e.allergens.length?n("v-card",{staticClass:"mt-4"},[n("v-card-actions",[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(t){return t.stopPropagation(),e.sendCsv(t)}}},[n("v-icon",{staticClass:"mr-2"},[e._v("email")]),e._v(" Send Report in CSV ")],1)],1)],1):e._e(),e.noData?n("span",{staticClass:"subtile-2 font-weight-medium"},[e._v(" No Data found")]):e._e()],1)],1)],1)},s=[],o=(n("07ac"),n("5530")),i=n("2f62"),r=n("6655"),c=n("c1df"),l=n.n(c),d={name:"AllergenReport",components:{ProductAllergen:r["a"]},data:function(){return{startDate:(new Date).toISOString().substr(0,10),endDate:(new Date).toISOString().substr(0,10),startMenu:!1,endMenu:!1,allergens:[],noData:!1}},computed:Object(o["a"])({},Object(i["c"])(["retrieveUser"]),{max:function(){return(new Date).toISOString().substr(0,10)},startTextField:function(){return l()(this.startDate).format("dddd, MMMM Do YYYY")},endTextField:function(){return l()(this.endDate).format("dddd, MMMM Do YYYY")}}),methods:Object(o["a"])({},Object(i["b"])(["fetchAllergenReport","sendAllergenReportCsv","setSnackbar"]),{getAllergenReport:function(){var e=this,t=Object.assign({},{userId:this.retrieveUser.userNum},{sessionKey:this.retrieveUser.sessionKey},{startTime:this.startDate},{endTime:this.endDate});this.fetchAllergenReport(t).then((function(t){1==t.success?(e.noData=!1,e.allergens=Object.values(t.allergens),0==e.allergens.length&&(e.noData=!0)):console.log("Error Fetching Allergen Report")})).catch((function(e){console.log(e)}))},sendCsv:function(){var e=this,t=Object.assign({},{userId:this.retrieveUser.userNum},{sessionKey:this.retrieveUser.sessionKey},{startTime:this.startDate},{endTime:this.endDate});this.sendAllergenReportCsv(t).then((function(t){1==t.success?e.setSnackbar({text:"Allergen Report Email successfully sent"}):e.setSnackbar({color:"error",text:t.message})})).catch((function(e){console.log(e)}))}})},u=d,p=n("2877"),v=n("6544"),h=n.n(v),f=n("e4e5"),m=n("8336"),x=n("b0af"),b=n("99d9"),g=n("62ad"),w=n("2e4b"),k=n("cd55"),y=n("49e2"),D=n("c865"),_=n("0393"),C=n("132d"),P=n("e449"),O=n("0fd9"),j=n("8654"),V=Object(p["a"])(u,a,s,!1,null,null,null);t["default"]=V.exports;h()(V,{VBanner:f["a"],VBtn:m["a"],VCard:x["a"],VCardActions:b["a"],VCol:g["a"],VDatePicker:w["a"],VExpansionPanel:k["a"],VExpansionPanelContent:y["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:_["a"],VIcon:C["a"],VMenu:P["a"],VRow:O["a"],VTextField:j["a"]})},"210b":function(e,t,n){},"25a5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",md:"11",sm:"12"}},[n("v-banner",{attrs:{icon:"description","single-line":""}},[e._v("Nutrition Report")])],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("v-menu",{attrs:{"close-on-content-click":"",transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"From Date","prepend-icon":"event",readonly:""},model:{value:e.startTextField,callback:function(t){e.startTextField=t},expression:"startTextField"}},a))]}}]),model:{value:e.startMenu,callback:function(t){e.startMenu=t},expression:"startMenu"}},[n("v-date-picker",{attrs:{max:e.max,color:"green lighten-1","header-color":"primary"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1)],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("v-menu",{attrs:{"close-on-content-click":"",transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"To Date","prepend-icon":"event",readonly:""},model:{value:e.endTextField,callback:function(t){e.endTextField=t},expression:"endTextField"}},a))]}}]),model:{value:e.endMenu,callback:function(t){e.endMenu=t},expression:"endMenu"}},[n("v-date-picker",{attrs:{max:e.max,min:e.startDate,color:"green lighten-1","header-color":"primary"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1),n("v-col",{attrs:{col:"12",sm:"12",md:"4"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"primary"},on:{click:function(t){return t.stopPropagation(),e.getNutritionReport(t)}}},[n("v-icon",{staticClass:"mr-2"},[e._v("search")]),e._v(" Find ")],1)],1),n("v-col",{attrs:{col:"12",sm:"12",md:"11"}},[e.nutritions.length?n("v-expansion-panels",e._l(e.nutritions,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(e._s(t.group_description))]),n("v-expansion-panel-content",[n("v-expansion-panels",e._l(t.categories,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(e._s(t.category_description))]),n("v-expansion-panel-content",[n("v-expansion-panels",e._l(t.products,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(e._s(t.description))]),n("v-expansion-panel-content",[n("ProductNutrition",{attrs:{product:t}})],1)],1)})),1)],1)],1)})),1)],1)],1)})),1):e._e(),e.nutritions.length?n("v-card",{staticClass:"mt-4"},[n("v-card-actions",[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(t){return t.stopPropagation(),e.sendCsv(t)}}},[n("v-icon",{staticClass:"mr-2"},[e._v("email")]),e._v(" Send Report in CSV ")],1)],1)],1):e._e(),e.noData?n("span",{staticClass:"subtile-2 font-weight-medium"},[e._v(" No Data found")]):e._e()],1)],1)],1)},s=[],o=(n("07ac"),n("5530")),i=n("2f62"),r=n("c1df"),c=n.n(r),l=n("982d"),d={name:"NutritionReport",components:{ProductNutrition:l["a"]},data:function(){return{startDate:(new Date).toISOString().substr(0,10),endDate:(new Date).toISOString().substr(0,10),startMenu:!1,endMenu:!1,nutritions:[],noData:!1}},computed:Object(o["a"])({},Object(i["c"])(["retrieveUser"]),{max:function(){return(new Date).toISOString().substr(0,10)},startTextField:function(){return c()(this.startDate).format("dddd, MMMM Do YYYY")},endTextField:function(){return c()(this.endDate).format("dddd, MMMM Do YYYY")}}),methods:Object(o["a"])({},Object(i["b"])(["fetchNutritionReport","sendNutritionReportCsv","setSnackbar"]),{getNutritionReport:function(){var e=this,t=Object.assign({},{userId:this.retrieveUser.userNum},{sessionKey:this.retrieveUser.sessionKey},{startTime:this.startDate},{endTime:this.endDate});this.fetchNutritionReport(t).then((function(t){1==t.success?(e.noData=!1,e.nutritions=Object.values(t.nutrition),0==e.nutritions.length&&(e.noData=!0)):console.log("Error Fetching Nutrition Report")})).catch((function(e){console.log(e)}))},sendCsv:function(){var e=this,t=Object.assign({},{userId:this.retrieveUser.userNum},{sessionKey:this.retrieveUser.sessionKey},{startTime:this.startDate},{endTime:this.endDate});this.sendNutritionReportCsv(t).then((function(t){1==t.success?e.setSnackbar({text:"Nutrition Report Email successfully sent"}):e.setSnackbar({color:"error",text:t.message})})).catch((function(e){console.log(e)}))}})},u=d,p=n("2877"),v=n("6544"),h=n.n(v),f=n("e4e5"),m=n("8336"),x=n("b0af"),b=n("99d9"),g=n("62ad"),w=n("2e4b"),k=n("cd55"),y=n("49e2"),D=n("c865"),_=n("0393"),C=n("132d"),P=n("e449"),O=n("0fd9"),j=n("8654"),V=Object(p["a"])(u,a,s,!1,null,null,null);t["default"]=V.exports;h()(V,{VBanner:f["a"],VBtn:m["a"],VCard:x["a"],VCardActions:b["a"],VCol:g["a"],VDatePicker:w["a"],VExpansionPanel:k["a"],VExpansionPanelContent:y["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:_["a"],VIcon:C["a"],VMenu:P["a"],VRow:O["a"],VTextField:j["a"]})},"49e2":function(e,t,n){"use strict";var a=n("0789"),s=n("9d65"),o=n("a9ad"),i=n("3206"),r=n("80d2"),c=n("58df"),l=Object(c["a"])(s["a"],o["a"],Object(i["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=l.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(a["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(r["q"])(t))])]})))}})},c242:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",md:"10",sm:"12"}},[n("v-card",[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card-title",{staticClass:"justify-center"},[n("v-icon",[e._v("lock")]),n("span",{staticClass:"subtitle-1 font-weight-bold ml-2"},[e._v("Change your Password")])],1),n("v-card-text",[n("v-text-field",{attrs:{outlined:"",rules:[e.required("Password")],"prepend-inner-icon":"lock",label:"New Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-text-field",{attrs:{rules:[e.required("Confirm Password"),e.passwordConfirmationRule],label:"Confirm Password",outlined:"","prepend-inner-icon":"lock",type:"password",disabled:!e.password},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),n("v-card-actions",[n("v-btn",{attrs:{block:"","x-large":"",color:"primary",disabled:!e.valid},on:{click:function(t){return t.stopPropagation(),e.changePassword(t)}}},[e._v("Update Password ")])],1)],1)],1)],1)],1)],1)},s=[],o=n("5530"),i=n("2f62"),r={name:"ChangePassword",data:function(){return{valid:!1,password:"",confirmPassword:"",required:function(e){return function(t){return t&&t.length>0||"".concat(e," Required")}}}},computed:Object(o["a"])({},Object(i["c"])(["retrieveUser"]),{passwordConfirmationRule:function(){var e=this;return function(){return e.password===e.confirmPassword||"Password must match"}}}),methods:Object(o["a"])({},Object(i["b"])(["updatePassword","setSnackbar"]),{changePassword:function(){var e=this;this.error=!1,this.errorMessage="";var t=Object.assign({},{userId:this.retrieveUser.userNum},{sessionKey:this.retrieveUser.sessionKey},{password:this.password});this.updatePassword(t).then((function(t){1==t.success?(e.password="",e.confirmPassword="",e.setSnackbar({text:"Password Updated"}),e.$router.push({name:"UserAccount"})):e.setSnackbar({text:t.message,color:"error"})})).catch((function(e){console.log(e)}))}})},c=r,l=n("2877"),d=n("6544"),u=n.n(d),p=n("8336"),v=n("b0af"),h=n("99d9"),f=n("62ad"),m=n("4bd4"),x=n("132d"),b=n("0fd9"),g=n("8654"),w=Object(l["a"])(c,a,s,!1,null,null,null);t["default"]=w.exports;u()(w,{VBtn:p["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:f["a"],VForm:m["a"],VIcon:x["a"],VRow:b["a"],VTextField:g["a"]})},c865:function(e,t,n){"use strict";var a=n("5530"),s=n("0789"),o=n("9d26"),i=n("a9ad"),r=n("3206"),c=n("5607"),l=n("80d2"),d=n("58df"),u=Object(d["a"])(i["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:c["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(l["q"])(this,"actions")||[this.$createElement(o["a"],this.expandIcon)];return this.$createElement(s["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])({},this.$listeners,{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(l["q"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";var a=n("5530"),s=n("4e82"),o=n("3206"),i=n("80d2"),r=n("58df");t["a"]=Object(r["a"])(Object(s["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(o["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(a["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(i["q"])(this))}})}}]);
//# sourceMappingURL=group-reports.71713689.js.map