"use strict";(self["webpackChunkcontrol_panel"]=self["webpackChunkcontrol_panel"]||[]).push([[356],{42541:function(e,s,r){r.r(s),r.d(s,{default:function(){return X}});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("router-view"),r("v-row",[r("v-col",[r("div",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("h2",{staticClass:"display-2"},[e._v(e._s(e.$t("pages.roles.title")))]),r("p",{staticClass:"my-2"},[e._v(e._s(e.$t("pages.roles.subtitle")))])]),r("add-form-route",{attrs:{has:["roles::add"],routeName:"Roles.create"}})],1)])],1),r("v-row",[r("v-col",[r("protected-view",{attrs:{has:["roles::retrieve"]}},[r("roles-list")],1)],1)],1)],1)},i=[],n=r(16198),o=(r(35666),r(53872)),a=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("v-card",{staticClass:"pa-1",attrs:{flat:""}},[r("confirm-delete",{attrs:{show:e.showConfirmDeleteDialog},on:{cancel:function(s){e.showConfirmDeleteDialog=!1,e.roleToDelete=-1},confirm:e.removeRoleFromBackEnd}}),r("v-card-text",[r("search-field",{model:{value:e.search,callback:function(s){e.search=s},expression:"search"}}),r("v-data-table",{attrs:{headers:e.headers,items:e.roles,loading:e.loading,search:e.search},scopedSlots:e._u([{key:"item.name",fn:function(s){var t=s.value,i=s.item;return[r("editable",{attrs:{field:{name:"name",value:t},apiEndPoint:e.getEditRoleNameURL(i.id)},on:{updated:function(e){i.name=e}}})]}},{key:"item.permissions",fn:function(s){var t=s.item;return[r("list-permissions",{attrs:{permissions:t.permissions,role:t},on:{updated:e.loadRoles}})]}},{key:"item.supervisors",fn:function(e){var s=e.item;return[r("list-supervisors",{attrs:{supervisors:s.supervisors}})]}},{key:"item.remove",fn:function(s){var t=s.item;return[r("v-btn",{attrs:{icon:"",color:"error",disabled:t.supervisors.length>0,loading:e.removingRole&&e.roleToDelete==t.id},on:{click:function(s){return e.confirmDeletion(t.id)}}},[r("v-icon",[e._v("mdi-trash-can-outline")])],1)]}}],null,!0)})],1)],1)},l=[],c=r(62032),u=(r(9653),r(57327),r(41539),r(68309),r(74916),r(64765),r(40561),r(99583)),d=r(73821),m=r(27954),p=r(69603),v=r(21359),h=r(54803),f=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("v-dialog",{attrs:{scrollable:"","max-width":"750px",transition:"dialog-transition"},model:{value:e.showAllPermissionsDialog,callback:function(s){e.showAllPermissionsDialog=s},expression:"showAllPermissionsDialog"}},[r("v-card",{attrs:{loading:e.loading,disabled:e.loading}},[r("v-card-title",[r("v-spacer"),r("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(s){e.showAllPermissionsDialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),r("v-divider",{}),r("v-card-text",{staticClass:"pt-4"},[e.showEmptyPermissionsError?r("v-alert",{attrs:{type:"error",border:"bottom",outlined:""}},[e._v(" "+e._s(e.$t("pages.create_role.form.permissions.errors.empty"))+" ")]):e._e(),r("checkboxes-list",{attrs:{"auto-selected":e.supervisorPermissionsNames,fields:e.permissionsList,readonly:!e.editMode&&!e.loading},on:{input:function(s){e.selected=s}}})],1),r("v-divider",{}),r("v-card-actions",{staticClass:"pa-4"},[r("v-spacer"),e.editMode?r("span",[r("v-btn",{attrs:{color:"error"},on:{click:function(s){e.editMode=!1}}},[e._v(" "+e._s(e.$t("components.list_permissions.cancel_edit_btn"))+" ")]),r("span",{staticClass:"mx-2"}),r("v-btn",{attrs:{color:"primary",loading:e.loading},on:{click:e.updatePermissions}},[e._v(" "+e._s(e.$t("components.list_permissions.save_edit_btn"))+" ")])],1):r("v-btn",{attrs:{color:"primary"},on:{click:function(s){e.editMode=!0}}},[e._v(e._s(e.$t("components.list_permissions.edit_btn")))])],1)],1)],1),e._l(e.firstTwoPermissions,(function(s,t){return r("v-chip",{key:t,staticClass:"mx-1",attrs:{color:"success",outlined:"",small:""}},[e._v(" "+e._s(e.$t("permissions."+s.name))+" ")])})),r("v-btn",{attrs:{small:"",rounded:"",color:"success"},on:{click:function(s){e.showAllPermissionsDialog=!0}}},[e.countNotViewedPermissions>0?r("span",[e._v(" +"+e._s(e.countNotViewedPermissions)+" "),r("span",{staticClass:"mx-2"})]):e._e(),r("v-icon",[e._v("mdi-eye")])],1)],2)},w=[],g=r(91761),_=r(34064),x={components:{checkboxesList:_.Z},props:{permissions:{type:Array,default:function(){return[]}},role:{type:Object,default:function(){}}},data:function(){return{editMode:!1,systemPermissions:[],selected:[],showAllPermissionsDialog:!1,loading:!1,showEmptyPermissionsError:!1}},computed:{firstTwoPermissions:function(){var e=[];return this.permissions.length>0&&e.push(this.permissions[0]),this.permissions.length>1&&e.push(this.permissions[1]),e},countNotViewedPermissions:function(){return this.permissions.length-this.firstTwoPermissions.length},permissionsList:function(){var e,s=[],r=(0,c.Z)(this.systemPermissions);try{for(r.s();!(e=r.n()).done;){var t=e.value;s.push({value:t,label:this.$t("permissions.".concat(t))})}}catch(i){r.e(i)}finally{r.f()}return s},supervisorPermissionsNames:function(){var e,s=[],r=(0,c.Z)(this.permissions);try{for(r.s();!(e=r.n()).done;){var t=e.value;s.push(t.name)}}catch(i){r.e(i)}finally{r.f()}return s}},created:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.loadPermissions();case 2:case"end":return s.stop()}}),s)})))()},methods:{loadPermissions:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,(0,g.LN)();case 3:r=s.sent,e.systemPermissions=r.data.data.permissions,s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),alert(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})))()},updatePermissions:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.showEmptyPermissionsError=!1,!(e.selected.length<1)){s.next=4;break}return e.showEmptyPermissionsError=!0,s.abrupt("return");case 4:return e.loading=!0,s.prev=5,s.next=8,(0,u.lO)(e.role.id,e.selected);case 8:r=s.sent,console.log(r),e.showAllPermissionsDialog=!1,e.editMode=!1,e.$emit("updated","API Event"),s.next=18;break;case 15:s.prev=15,s.t0=s["catch"](5),alert(s.t0);case 18:e.loading=!1;case 19:case"end":return s.stop()}}),s,null,[[5,15]])})))()}}},Z=x,b=r(1001),y=r(43453),D=r.n(y),k=r(35098),C=r(63150),R=r(53237),P=r(37118),V=r(95424),$=r(4497),E=r(11418),A=r(96428),T=r(99762),S=(0,b.Z)(Z,f,w,!1,null,null,null),L=S.exports;D()(S,{VAlert:k.Z,VBtn:C.Z,VCard:R.Z,VCardActions:P.h7,VCardText:P.ZB,VCardTitle:P.EB,VChip:V.Z,VDialog:$.Z,VDivider:E.Z,VIcon:A.Z,VSpacer:T.Z});var N=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("v-dialog",{attrs:{scrollable:"","max-width":"750px",transition:"dialog-transition"},model:{value:e.showAllSupervisorsDialog,callback:function(s){e.showAllSupervisorsDialog=s},expression:"showAllSupervisorsDialog"}},[r("v-card",{attrs:{elevation:"","max-width":""}},[r("v-card-title",[r("v-spacer"),r("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(s){e.showAllSupervisorsDialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),r("v-divider",{}),r("v-card-text",[r("checkboxes-list",{attrs:{"auto-selected":e.supervisorsIDs,fields:e.supervisorsList,readonly:!0}})],1)],1)],1),e._l(e.firstTwoSupervisors,(function(s,t){return r("v-chip",{key:t,staticClass:"mx-1",attrs:{color:"primary",outlined:"",small:""}},[e._v(" "+e._s(s.user_name)+" ")])})),e.countNotViewedSupervisors?r("v-btn",{attrs:{small:"",rounded:"",color:"primary"},on:{click:function(s){e.showAllSupervisorsDialog=!0}}},[r("span",[e._v(" +"+e._s(e.countNotViewedSupervisors)+" ")]),r("span",{staticClass:"mx-2"}),r("v-icon",[e._v("mdi-eye")])],1):e._e()],2)},B=[],O=(r(92222),{components:{checkboxesList:_.Z},props:{supervisors:{type:Array,default:function(){return[]}}},data:function(){return{showAllSupervisorsDialog:!1}},computed:{firstTwoSupervisors:function(){var e=[];return this.supervisors.length>0&&e.push(this.supervisors[0]),this.supervisors.length>1&&e.push(this.supervisors[1]),e},countNotViewedSupervisors:function(){return this.supervisors.length-this.firstTwoSupervisors.length},supervisorsList:function(){var e,s=[],r=(0,c.Z)(this.supervisors);try{for(r.s();!(e=r.n()).done;){var t=e.value;s.push({value:t.id,label:"".concat(t.name," (@").concat(t.user_name,")")})}}catch(i){r.e(i)}finally{r.f()}return s},supervisorsIDs:function(){var e,s=[],r=(0,c.Z)(this.supervisors);try{for(r.s();!(e=r.n()).done;){var t=e.value;s.push(t.id)}}catch(i){r.e(i)}finally{r.f()}return s}}}),I=O,M=(0,b.Z)(I,N,B,!1,null,null,null),q=M.exports;D()(M,{VBtn:C.Z,VCard:R.Z,VCardText:P.ZB,VCardTitle:P.EB,VChip:V.Z,VDialog:$.Z,VDivider:E.Z,VIcon:A.Z,VSpacer:T.Z});var F={components:{SearchField:h.Z,ListPermissions:L,ListSupervisors:q,Editable:p.Z,ConfirmDelete:m.Z},data:function(){return{roles:[],loading:!0,search:"",roleToDelete:-1,showConfirmDeleteDialog:!1,removingRole:!1}},computed:{requestParams:function(){var e=this.$permissions().hasOneOf(["roles::view_permissions","roles::set_permissions"]),s=this.$permissions().has(["supervisors::view_permissions"]);return{with_permissions:Number(e),with_supervisors:Number(s)}},headers:function(){var e=this,s=[(0,v.r)(this.$t("pages.roles.datatable.headers.title"),"name"),(0,v.r)(this.$t("pages.roles.datatable.headers.permissions"),"permissions",(function(){return e.requestParams.with_permissions}),{filerable:!1}),(0,v.r)(this.$t("pages.roles.datatable.headers.supervisors"),"supervisors",(function(){return e.requestParams.with_supervisors})),(0,v.r)(this.$t("pages.roles.datatable.headers.remove"),"remove",(function(){return e.$permissions().has(["roles::remove"])}),{align:"rtl"==this.$t("direction").toLowerCase()?"left":"right"})];return s.filter((function(e){return!!e}))}},created:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return d.c.$on("roleCreated",e.loadRoles),s.next=3,e.loadRoles();case 3:case"end":return s.stop()}}),s)})))()},methods:{loadRoles:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.loading=!0,s.next=3,(0,u.xJ)(e.requestParams.with_permissions,e.requestParams.with_supervisors);case 3:r=s.sent,e.roles=r.data.data,e.roles=e.roles.reverse(),e.loading=!1;case 7:case"end":return s.stop()}}),s)})))()},filterPermissions:function(e,s){var r,t=(0,c.Z)(e);try{for(t.s();!(r=t.n()).done;){var i=r.value;if(console.log(this.$t("permissions.".concat(i.name)).toLowerCase(),this.$t("permissions.".concat(i.name)).toLowerCase().search(s)),this.$t("permissions.".concat(i.name)).toLowerCase().search(s)>-1)return!0}}catch(n){t.e(n)}finally{t.f()}return!1},getEditRoleNameURL:function(e){return(0,u.GD)(e)},confirmDeletion:function(e){this.roleToDelete=e,this.showConfirmDeleteDialog=!0},removeRoleFromBackEnd:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var r,t,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.showConfirmDeleteDialog=!1,e.removingRole=!0,s.prev=2,s.next=5,(0,u.l5)(e.roleToDelete);case 5:r=(0,c.Z)(e.roles);try{for(r.s();!(t=r.n()).done;)i=t.value,i.id==e.roleToDelete&&e.roles.splice(e.roles.indexOf(i),1)}catch(n){r.e(n)}finally{r.f()}s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](2),alert(s.t0);case 12:e.roleToDelete=-1,e.removingRole=!1;case 14:case"end":return s.stop()}}),s,null,[[2,9]])})))()}}},z=F,j=r(76277),U=(0,b.Z)(z,a,l,!1,null,null,null),G=U.exports;D()(U,{VBtn:C.Z,VCard:R.Z,VCardText:P.ZB,VDataTable:j.Z,VIcon:A.Z});var J={components:{AddFormRoute:o.Z,RolesList:G},created:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.$permissions().authorizeOneOf(["roles::add","roles::remove","roles::retrieve","roles::update","roles::view_permissions","roles::set_permissions"]),s.next=3,e.loadRoles();case 3:case"end":return s.stop()}}),s)})))()},data:function(){return{filterQuery:""}},mounted:function(){},methods:{authorize:function(){var e=["roles::add","roles::remove","roles::retrieve","roles::update","roles::view_permissions","roles::set_permissions"];this.$permissions().authorizeOneOf(e)},loadRoles:function(){return(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}},Q=J,H=r(82102),K=r(62877),W=(0,b.Z)(Q,t,i,!1,null,null,null),X=W.exports;D()(W,{VCol:H.Z,VRow:K.Z})}}]);
//# sourceMappingURL=roles.index-legacy.9db77402.js.map