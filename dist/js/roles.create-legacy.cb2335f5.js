"use strict";(self["webpackChunkcontrol_panel"]=self["webpackChunkcontrol_panel"]||[]).push([[194],{99583:function(e,r,t){t.d(r,{GD:function(){return i},_d:function(){return u},l5:function(){return l},lO:function(){return p},xJ:function(){return c}});var n=t(16198),s=(t(35666),t(9653),t(76051)),a="roles/",i=function(e){return a+e+"/"},o=function(e){return a+e},c=function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){var r,t,n,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]&&i[0],t=i.length>1&&void 0!==i[1]&&i[1],e.next=4,s.ZP.get(a,{with_permissions:Number(r),with_supervisors:Number(t)});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(r,t){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:r,permissions:t},i=s.ZP.post(a,n),e.abrupt("return",i);case 3:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.ZP["delete"](o(r)),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=s.ZP.put(i(r),{permissions:t}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},49282:function(e,r,t){t.r(r),t.d(r,{default:function(){return N}});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-dialog",{attrs:{width:"800",scrollable:"",persistent:"",value:!0}},[t("v-card",{attrs:{loading:e.loading,disabled:e.loading}},[t("v-card-title",[t("p",{staticClass:"headline"},[e._v(e._s(e.$t("pages.create_role.title")))]),t("v-spacer"),t("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.goBack}},[t("v-icon",[e._v("mdi-close")])],1)],1),t("v-divider",{}),t("v-card-title",{staticClass:"d-inline-block "},[t("div",[t("v-text-field",{attrs:{type:"text",placeholder:e.$t("pages.create_role.form.name.placeholder"),label:e.$t("pages.create_role.form.name.placeholder"),outlined:"","error-messages":e.nameErrors,block:""},model:{value:e.name,callback:function(r){e.name=r},expression:"name"}}),t("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.$t("pages.create_role.form.permissions.label"))+" ")]),e._v(" ("+e._s(e.$t("pages.create_role.form.permissions.placeholder"))+") ")],1)]),t("v-card-text",{staticClass:"pt-4"},[e.showEmptyPermissionsError?t("v-alert",{attrs:{type:"error",border:"bottom",outlined:""}},[e._v(" "+e._s(e.$t("pages.create_role.form.permissions.errors.empty"))+" ")]):e._e(),t("select-permissions",{staticClass:"mx-auto",on:{input:function(r){e.permissions=r}}})],1),t("v-divider",{}),t("v-card-actions",{staticClass:"pa-2"},[t("v-spacer"),t("v-btn",{attrs:{text:"",large:"",color:"error"},on:{click:e.goBack}},[t("v-icon",[e._v("mdi-cancel")]),t("span",{staticClass:"mx-1"}),t("span",[e._v(e._s(e.$t("pages.create_role.form.cancel")))])],1),t("span",{staticClass:"mx-2"}),t("v-btn",{attrs:{large:"",color:"primary",loading:e.loading},on:{click:e.save}},[t("v-icon",[e._v("mdi-content-save")]),t("span",{staticClass:"mx-2"}),t("span",[e._v(e._s(e.$t("pages.create_role.form.save")))])],1)],1)],1)],1)},s=[],a=t(16198),i=(t(35666),t(73210),t(68309),t(63114)),o=t(99583),c=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"d-inline-block justify-center"},[e.loading?t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):e._e(),t("checkboxes-list",{attrs:{fields:e.permissionsList},on:{input:function(r){e.selected=r}}})],1)},u=[],l=t(62032),p=t(91761),m=t(34064),d={components:{checkboxesList:m.Z},data:function(){return{permissions:[],selected:[],loading:!0}},computed:{permissionsList:function(){var e,r=[],t=(0,l.Z)(this.permissions);try{for(t.s();!(e=t.n()).done;){var n=e.value;r.push({value:n,label:this.$t("permissions.".concat(n))})}}catch(s){t.e(s)}finally{t.f()}return r}},created:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.loadPermissions();case 2:case"end":return r.stop()}}),r)})))()},methods:{loadPermissions:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.lading=!0,r.prev=1,r.next=4,(0,p.LN)();case 4:t=r.sent,e.permissions=t.data.data.permissions,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),alert(r.t0);case 11:e.loading=!1;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},watch:{selected:function(e){this.$emit("input",e)}}},v=d,f=t(1001),h=t(43453),g=t.n(h),_=t(90624),b=(0,f.Z)(v,c,u,!1,null,null,null),w=b.exports;g()(b,{VProgressCircular:_.Z});var x=t(73821),k={components:{SelectPermissions:w},data:function(){return{name:"",dialog:!0,permissions:[],nameErrors:[],loading:!1,showEmptyPermissionsError:!1}},methods:{goBack:function(){window.history.back()},save:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.loading){r.next=2;break}return r.abrupt("return");case 2:if(e.nameErrors=[],e.showEmptyPermissionsError=!1,""!=e.name.trim()){r.next=7;break}return e.nameErrors.push(e.$t("pages.create_role.form.name.errors.empty")),r.abrupt("return");case 7:if(!(e.permissions.length<1)){r.next=10;break}return e.showEmptyPermissionsError=!0,r.abrupt("return");case 10:return e.loading=!0,r.prev=11,r.next=14,(0,o._d)(e.name,e.permissions);case 14:t=r.sent,x.c.$emit("roleCreated",t.data.data.role),e.$emit("roleCreated",t.data.data.role),e.goBack(),r.next=23;break;case 20:r.prev=20,r.t0=r["catch"](11),r.t0.response&&r.t0.response.status==i.Z.HTTP_UNPROCESSABLE_ENTITY&&r.t0.response.data.errors.name?e.nameErrors=r.t0.response.data.errors.name:alert(r.t0);case 23:e.loading=!1;case 24:case"end":return r.stop()}}),r,null,[[11,20]])})))()}}},Z=k,C=t(35098),E=t(63150),y=t(53237),R=t(37118),$=t(4497),P=t(11418),V=t(96428),B=t(99762),T=t(55978),L=(0,f.Z)(Z,n,s,!1,null,null,null),N=L.exports;g()(L,{VAlert:C.Z,VBtn:E.Z,VCard:y.Z,VCardActions:R.h7,VCardText:R.ZB,VCardTitle:R.EB,VDialog:$.Z,VDivider:P.Z,VIcon:V.Z,VSpacer:B.Z,VTextField:T.Z})}}]);
//# sourceMappingURL=roles.create-legacy.cb2335f5.js.map