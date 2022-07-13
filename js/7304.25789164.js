"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[7304],{86418:function(e,t,n){n.a(e,(async function(e,r){try{n(85827),n(26699);var a=n(66252),o=n(2262),l=n(34118),u=n(14809),c=n(27623),i=n(31136),d=n(76496),s=n(21502),f=n(46945),h=n(12746),p=e([c,i,d,s,f]);[c,i,d,s,f]=p.then?(await p)():p;const m=(0,a.Uk)(" 新增 "),g={name:"SystemPermissionRole"};t.Z=(0,a.aZ)({...g,setup(e){const[t,n]=(0,s.x6)(),[r]=(0,f.U)(),p=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.reduce(((t,r)=>{var a;return null!==(a=r.children)&&void 0!==a&&a.length?p(e,r.children,n):e.includes(r.value)&&t.push(r.value),t}),n)},g=async e=>{const[t]=await r({modalProps:{title:(e.id?"编辑":"新增")+"角色",width:"50%",onFinish:async r=>{var a,o;e.id&&(r.roleId=e.id);const l=null==t||null===(a=t.compRefs)||void 0===a?void 0:a.menus,u=null==t||null===(o=t.compRefs)||void 0===o?void 0:o.depts,i={...r,menus:[...l.halfCheckedKeys,...l.checkedKeys],depts:[...u.halfCheckedKeys,...u.checkedKeys]};await(e.id?c.ul:c.fA)(i),null==n||n.reload()}},formProps:{labelWidth:100,schemas:u.y}}),[a,o]=await Promise.all([(0,i.U4)(),(0,d.Af)()]),l=(0,h.bl)(o),s=(0,h.fl)(a);if(null==t||t.updateSchema([{field:"menus",componentProps:{treeData:l}},{field:"depts",componentProps:{treeData:s}}]),e.id){const n=await(0,c.Xt)({roleId:e.id}),r=n.menus.map((e=>e.menuId)),a=n.depts.map((e=>e.departmentId));null==t||t.setFieldsValue({...e,name:n.roleInfo.name,label:n.roleInfo.label,remark:n.roleInfo.remark,menus:p(r,l),depts:p(a,s)})}},y=[...l.f,{title:"操作",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:e=>{let{record:t}=e;return[{label:"编辑",auth:{perm:"sys.role.update",effect:"disable"},onClick:()=>g(t)},{label:"删除",auth:"sys.role.delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>(async e=>{await(0,c.Rd)({roleIds:[e.id]}),null==n||n.reload()})(t)}}]}}];return(e,n)=>{const r=(0,a.up)("a-button");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)((0,o.SU)(t),{"row-key":"id","header-title":"角色管理","data-request":(0,o.SU)(c.$s),columns:y,bordered:"",size:"small"},{toolbar:(0,a.w5)((()=>[(0,a.Wm)(r,{type:"primary",disabled:!e.$auth("sys.role.add"),onClick:n[0]||(n[0]=e=>g({}))},{default:(0,a.w5)((()=>[m])),_:1},8,["disabled"])])),_:1},8,["data-request"])])}}}),r()}catch(e){r(e)}}))},31136:function(e,t,n){n.a(e,(async function(e,r){try{n.d(t,{MB:function(){return i},U4:function(){return u},UJ:function(){return d},aS:function(){return c},m3:function(){return s}});var a=n(4064),o=n(27301),l=e([a]);function u(){return(0,a.W)({url:o.default.list,method:"get"})}function c(e){return(0,a.W)({url:"sys/dept/delete",method:"post",data:e},{successMsg:"删除成功"})}function i(e){return(0,a.W)({url:o.default.update,method:"post",data:e})}function d(e){return(0,a.W)({url:o.default.add,method:"post",data:e})}function s(e){return(0,a.W)({url:o.default.transfer,method:"post",data:e})}a=(l.then?(await l)():l)[0],r()}catch(f){r(f)}}))},76496:function(e,t,n){n.a(e,(async function(e,r){try{n.d(t,{Af:function(){return u},RD:function(){return d},ZT:function(){return c},_8:function(){return i}});var a=n(4064),o=n(57314),l=e([a]);function u(){return(0,a.W)({url:o.default.list,method:"get"})}function c(e){return(0,a.W)({url:o.default.add,method:"post",data:e},{successMsg:"创建成功"})}function i(e){return(0,a.W)({url:o.default.update,method:"post",data:e},{successMsg:"更新成功"})}function d(e){return(0,a.W)({url:o.default.delete,method:"post",data:e},{successMsg:"删除成功"})}a=(l.then?(await l)():l)[0],r()}catch(s){r(s)}}))},27623:function(e,t,n){n.a(e,(async function(e,r){try{n.d(t,{$s:function(){return i},JV:function(){return c},Rd:function(){return f},Xt:function(){return u},fA:function(){return d},ul:function(){return s}});var a=n(4064),o=n(15322),l=e([a]);function u(e){return(0,a.W)({url:o.default.info,method:"get",params:e})}function c(e){return(0,a.W)({url:o.default.list,method:"get",data:e})}function i(e){return(0,a.W)({url:o.default.page,method:"get",params:e})}function d(e){return(0,a.W)({url:o.default.add,method:"post",data:e},{successMsg:"创建角色成功"})}function s(e){return(0,a.W)({url:o.default.update,method:"post",data:e},{successMsg:"更新角色成功"})}function f(e){return(0,a.W)({url:o.default.delete,method:"post",data:e},{successMsg:"删除角色成功"})}a=(l.then?(await l)():l)[0],r()}catch(h){r(h)}}))},12746:function(e,t,n){n.d(t,{BQ:function(){return o},bl:function(){return a},fl:function(){return r}});n(85827);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.filter((e=>e.parentId===t)).map((a=>{const o=n.concat(t||[]),l=r(e,a.id,o);return Object.assign(a,{keyPath:o,title:a.name,key:a.id,value:a.id,formData:a,children:l.length?l:null})}))},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.filter((e=>e.parentId===t)).map((r=>{const o=n.concat(t||[]),l=a(e,r.id,o);return Object.assign(r,{keyPath:o,title:r.name,key:r.id,value:r.id,formData:r,children:l.length?l:null})}))},o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"children";return t.reduce(((t,a)=>{var l;return a[n]===e?a:t||(null!==(l=a[r])&&void 0!==l&&l.length?o(e,a[r],n,r):void 0)}),void 0)}},81170:function(e,t,n){n.d(t,{n:function(){return o}});var r=n(66252),a=n(2262);function o(e,t){return{initSortable:function(){(0,r.Y3)((async()=>{if(!e)return;(await n.e(1474).then(n.bind(n,51474))).default.create((0,a.SU)(e),{animation:500,delay:400,delayOnTouchOnly:!0,...t})}))}}}},72791:function(e,t,n){n.d(t,{T:function(){return d}});var r=n(82482),a=(n(48675),n(3462),n(37380),n(1118),n(93162)),o=n(84105);class l{constructor(){(0,r.Z)(this,"SheetNames",[]),(0,r.Z)(this,"Sheets",{})}}function u(e,t){t&&(e+=1462);return(Date.parse(e)-new Date(Date.UTC(1899,11,30)).getTime())/864e5}function c(e){const t={},n={s:{c:1e7,r:1e7},e:{c:0,r:0}};for(let r=0;r!=e.length;++r)for(let a=0;a!=e[r].length;++a){n.s.r>r&&(n.s.r=r),n.s.c>a&&(n.s.c=a),n.e.r<r&&(n.e.r=r),n.e.c<a&&(n.e.c=a);const l={v:e[r][a],t:"",z:""};if(null==l.v)continue;const c=o.P6.encode_cell({c:a,r:r});"number"==typeof l.v?l.t="n":"boolean"==typeof l.v?l.t="b":l.v instanceof Date?(l.t="n",l.z=o.kS._table[14],l.v=u(l.v)):l.t="s",t[c]=l}return n.s.c<1e7&&(t["!ref"]=o.P6.encode_range(n)),t}function i(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t!=e.length;++t)n[t]=255&e.charCodeAt(t);return t}function d(){let{multiHeader:e=[],header:t=[],data:n=[],filename:r="excel-list",merges:u=[],autoWidth:d=!0,bookType:s="xlsx"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r=r||"excel-list",n=[...n],n.unshift(t);for(let t=e.length-1;t>-1;t--)n.unshift(e[t]);const f="SheetJS",h=new l,p=c(n);if(u.length>0&&(p["!merges"]||(p["!merges"]=[]),u.forEach((e=>{p["!merges"].push(o.P6.decode_range(e))}))),d){const e=n.map((e=>e.map((e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length})))),t=e[0];for(let n=1;n<e.length;n++)for(let r=0;r<e[n].length;r++)t[r].wch<e[n][r].wch&&(t[r].wch=e[n][r].wch);p["!cols"]=t}h.SheetNames.push(f),h.Sheets[f]=p;const m=(0,o.cW)(h,{bookType:s,bookSST:!1,type:"binary"});(0,a.saveAs)(new Blob([i(m)],{type:"application/octet-stream"}),`${r}.${s}`)}},14809:function(e,t,n){n.d(t,{y:function(){return r}});const r=[{field:"name",component:"Input",label:"名称",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"label",component:"Input",label:"标识",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"menus",component:"Tree",label:"菜单权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}},{field:"depts",component:"Tree",label:"部门权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}}]},34118:function(e,t,n){n.d(t,{f:function(){return r}});const r=[{title:"#",dataIndex:"id",width:55,align:"center",hideInSearch:!0},{title:"名称",width:200,align:"center",dataIndex:"name"},{title:"标识",width:80,align:"center",dataIndex:"label"},{title:"备注",dataIndex:"remark",align:"center"},{title:"创建时间",dataIndex:"createdAt",align:"center",hideInSearch:!0},{title:"更新时间",align:"center",dataIndex:"updatedAt",hideInSearch:!0}]},49515:function(e,t,n){n.a(e,(async function(e,r){try{n.r(t);var a=n(51965),o=e([a]);const l=(a=(o.then?(await o)():o)[0]).Z;t.default=l,r()}catch(e){r(e)}}))},51965:function(e,t,n){n.a(e,(async function(e,r){try{n.d(t,{Z:function(){return a.Z}});var a=n(86418),o=e([a]);a=(o.then?(await o)():o)[0],r()}catch(e){r(e)}}))}}]);