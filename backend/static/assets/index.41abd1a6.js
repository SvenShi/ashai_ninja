var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,l=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))r.call(a,t)&&n(e,t,a[t]);return e},i=(e,o)=>a(e,t(o));import{o as c,c as d,p as u,a as m,r as p,b as g,w as f,F as y,k as v,d as h,e as w,t as C,f as k,g as b,h as x,u as _,_ as V,i as I,j,l as U,m as z,n as L,q as R,s as S,v as T,x as H,y as K,z as M,A,B as N,C as P}from"./vendor.9ec6f2c8.js";const O={},F={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};O.render=function(e,a){return c(),d("img",F)};const B={components:{Logo:O}},q=f("data-v-47938744");u("data-v-47938744");const D={class:"header"},E={class:"header-wrapper"},W={class:"flex items-center"},G=g("p",{class:"pl-3 select-none"},"Ninja",-1),J=g("a",{style:{float:"right"},href:"https://github.com/sw-ashai/ashai_ninja",target:"_blank","data-hotkey":"g d","aria-label":"Homepage ","data-turbo":"false","data-analytics-event":'{"category":"Header","action":"go to dashboard","label":"icon:logo"}'},[g("svg",{height:"32","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"32","data-view-component":"true",class:"octicon octicon-mark-github v-align-middle"},[g("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])],-1);m();const Q=q(((e,a,t,o,s,r)=>{const n=p("Logo");return c(),d("div",D,[g("div",E,[g("div",W,[g(n,{class:"h-10 w-10"}),G]),J])])}));B.render=Q,B.__scopeId="data-v-47938744";const X={class:"main"},Y={setup:e=>(e,a)=>{const t=p("router-view");return c(),d(y,null,[g(B),g("div",X,[g(t)])],64)}};const Z=v.create({prefixUrl:"/api",retry:{limit:0}});function $(e){return Z.post("update",{json:e}).json()}function ee(e){const a=new URLSearchParams;return a.set("contentName",e),Z.get("getContent",{searchParams:a}).json()}const ae={setup(){const e=_();let a=h({version:"1.1",profileContent:"",usernameContent:"",cookieContent:"",username:"",cookie:"",nickName:void 0,timestamp:void 0,userStatus:void 0});const t=async()=>{try{const e=localStorage.getItem("eid");if("0"===e||!e)return void o();if(e){const t=await function(e){const a=new URLSearchParams;return a.set("eid",e),Z.get("userinfo",{searchParams:a}).json()}(e);if(400===t.code)return void V.error(t.message);if(!t)return V.error("获取用户CK信息失败，请重新登录"),void o();a.nickName=t.data.username,a.userStatus=t.data.status,a.timestamp=new Date(t.data.timestamp).toLocaleString()}}catch(e){console.error(e)}},o=()=>{localStorage.removeItem("eid"),e.push("/login")};return w((()=>{t(),(async()=>{try{a.profileContent=(await ee("profile")).data.content,a.usernameContent=(await ee("updateUsername")).data.content,a.cookieContent=(await ee("updateCookie")).data.content}catch(e){console.error(e)}})(),localStorage.getItem("version")!==a.version&&e.push("/login")})),i(l({},C(a)),{getInfo:t,logout:o,delAccount:async()=>{I.confirm("确定删除账号","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return Z.post("delaccount",{json:e}).json()}({eid:e});200===a.data.code?(V.success(a.data.msg),o()):V.error(a.data.msg||a.message)}catch(e){console.error(e)}}))},updateUsername:async()=>{try{try{if(a.username){const e=localStorage.getItem("eid");if(e){const t=await $({eid:e,ck:null,username:a.username});t.data&&t.data.code&&200===t.data.code?V.success(t.data.msg):V.error(t.data.msg||t.message)}await t()}else V.error("请输入用户名！")}catch(e){console.error(e)}}catch(e){console.error(e)}},updateCookie:async()=>{try{try{if(a.cookie){const e=localStorage.getItem("eid");let o;if(e){const t=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],s=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(!t||!s)return void V.error("cookie 解析失败，请检查后重试！");o="pt_key="+t+";pt_pin="+s+";";const r=await $({eid:e,ck:o,username:null});r.data&&r.data.code&&200===r.data.code?V.success(r.data.msg):V.error(r.data.msg||r.message)}await t()}else V.error("请输入Cookie！")}catch(e){console.error(e)}}catch(e){console.error(e)}},disableCK:async()=>{try{const e=localStorage.getItem("eid");if(e){const a=await function(e){return Z.post("disable",{json:e}).json()}({eid:e});a.data&&a.data.code&&200===a.data.code?V.success(a.msg):V.error(a.data.msg||a.message)}await t()}catch(e){console.error(e)}},enableCK:async()=>{try{const e=localStorage.getItem("eid");if(e){const a=await function(e){return Z.post("enable",{json:e}).json()}({eid:e});a.data&&a.data.code&&200===a.data.code?V.success(a.msg):V.error(a.data.msg||a.message)}await t()}catch(e){console.error(e)}}})}},te=f("data-v-00b05067");u("data-v-00b05067");const oe={class:"content"},se={class:"card"},re=g("div",{class:"card-header"},[g("p",{class:"card-title"},"个人中心")],-1),ne={class:"card-body"},le=j("状态："),ie={key:0,style:{color:"red",display:"inline"}},ce={key:1,style:{color:"green",display:"inline"}},de={class:"card-footer"},ue=j("退出登录"),me=j("删除账号"),pe={class:"card"},ge=g("div",{class:"card-header"},[g("p",{class:"card-title"},"修改用户名")],-1),fe={class:"card-body text-center"},ye={class:"card-footer"},ve=j("修改"),he={class:"card"},we=g("div",{class:"card-header"},[g("p",{class:"card-title"},"更新Cookie")],-1),Ce={class:"card-body text-center"},ke={class:"card-footer"},be=j("更新");m();const xe=te(((e,a,t,o,s,r)=>{const n=p("el-button"),l=p("el-input");return c(),d("div",oe,[g("div",se,[re,g("div",{class:"card-body text-base leading-6",innerHTML:e.profileContent},null,8,["innerHTML"]),g("div",ne,[g("p",null,"用户名："+k(e.nickName),1),g("p",null,"更新时间："+k(e.timestamp),1),g("span",null,[le,1===e.userStatus?(c(),d("p",ie,"过期已禁用")):b("",!0),0===e.userStatus?(c(),d("p",ce,"正常")):b("",!0)])]),g("div",de,[g(n,{size:"small",auto:"",onClick:o.logout},{default:te((()=>[ue])),_:1},8,["onClick"]),g(n,{type:"danger",size:"small",auto:"",onClick:o.delAccount},{default:te((()=>[me])),_:1},8,["onClick"])])]),g("div",pe,[ge,g("div",{class:"card-body text-base leading-6",innerHTML:e.usernameContent},null,8,["innerHTML"]),g("div",fe,[g(l,{modelValue:e.username,"onUpdate:modelValue":a[1]||(a[1]=a=>e.username=a),style:{"min-width":"200px"},onKeyup:x(o.updateUsername,["enter"]),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue","onKeyup"])]),g("div",ye,[g(n,{type:"success",size:"small",auto:"",onClick:o.updateUsername},{default:te((()=>[ve])),_:1},8,["onClick"])])]),g("div",he,[we,g("div",{class:"card-body text-base leading-6",innerHTML:e.cookieContent},null,8,["innerHTML"]),g("div",Ce,[g(l,{modelValue:e.cookie,"onUpdate:modelValue":a[2]||(a[2]=a=>e.cookie=a),style:{"min-width":"300px"},onKeyup:x(o.updateCookie,["enter"]),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue","onKeyup"])]),g("div",ke,[g(n,{type:"success",size:"small",auto:"",onClick:o.updateCookie},{default:te((()=>[be])),_:1},8,["onClick"])])])])}));ae.render=xe,ae.__scopeId="data-v-00b05067";const _e={setup(){const e=_();let a=h({activeName:"slogan",tip:"",login:"",profile:"",register:"",updateCookie:"",updateUsername:""});const t=async()=>{try{200!==(await function(){const e=localStorage.getItem("token");return e?Z.post("verifyToken",{json:{token:e}}).json():{data:{code:444}}}()).data.code&&e.push("/login"),localStorage.removeItem("token")}catch(a){console.error(a)}};return w((async()=>{try{await t(),await(async()=>{try{let e=await ee("tip");a.tip=e.data.content;let t=await ee("login");a.login=t.data.content;let o=await ee("profile");a.profile=o.data.content;let s=await ee("register");a.register=s.data.content;let r=await ee("updateCookie");a.updateCookie=r.data.content;let n=await ee("updateUsername");a.updateUsername=n.data.content}catch(e){console.error(e)}})()}catch(e){console.error(e)}})),i(l({},C(a)),{customContent:async e=>{try{200===(await(t={contentName:e,content:a[e]},Z.post("setContent",{json:t}).json())).data.code?V.success("修改成功"):V.error("修改失败")}catch(o){console.error(o)}var t}})}},Ve=f("data-v-e0f76f92");u("data-v-e0f76f92");const Ie={class:"content"},je={class:"card"},Ue=g("div",{class:"card-header"},[g("p",{class:"card-title"},"Ninja管理")],-1),ze={class:"card-body text-center"},Le={class:"card"},Re=g("div",{class:"card-header"},[g("p",{class:"card-title"},"自定义登录以及注册上方提示")],-1),Se={class:"card-body text-center"},Te={class:"card-footer"},He=j("修改"),Ke={class:"card"},Me=g("div",{class:"card-header"},[g("p",{class:"card-title"},"自定义登录上方提示")],-1),Ae={class:"card-body text-center"},Ne={class:"card-footer"},Pe=j("修改"),Oe={class:"card"},Fe=g("div",{class:"card-header"},[g("p",{class:"card-title"},"自定义注册上方提示")],-1),Be={class:"card-body text-center"},qe={class:"card-footer"},De=j("修改"),Ee={class:"card"},We=g("div",{class:"card-header"},[g("p",{class:"card-title"},"自定义个人中心上方提示")],-1),Ge={class:"card-body text-center"},Je={class:"card-footer"},Qe=j("修改"),Xe={class:"card"},Ye=g("div",{class:"card-header"},[g("p",{class:"card-title"},"自定义修改用户名上方提示")],-1),Ze={class:"card-body text-center"},$e={class:"card-footer"},ea=j("修改"),aa={class:"card"},ta=g("div",{class:"card-header"},[g("p",{class:"card-title"},"自定义修改Cookie上方提示")],-1),oa={class:"card-body text-center"},sa={class:"card-footer"},ra=j("修改"),na=j("敬请期待");m();const la=Ve(((e,a,t,o,s,r)=>{const n=p("el-input"),l=p("el-button"),i=p("el-tab-pane"),u=p("el-tabs");return c(),d("div",Ie,[g("div",je,[Ue,g("div",ze,[g(u,{modelValue:e.activeName,"onUpdate:modelValue":a[13]||(a[13]=a=>e.activeName=a),class:"demo-tabs"},{default:Ve((()=>[g(i,{label:"自定义标语",name:"slogan"},{default:Ve((()=>[g("div",Le,[Re,g("div",Se,[g(n,{modelValue:e.tip,"onUpdate:modelValue":a[1]||(a[1]=a=>e.tip=a),autosize:{minRows:4,maxRows:8},type:"textarea"},null,8,["modelValue"])]),g("div",Te,[g(l,{type:"success",size:"small",auto:"",onClick:a[2]||(a[2]=e=>o.customContent("tip"))},{default:Ve((()=>[He])),_:1})])]),g("div",Ke,[Me,g("div",Ae,[g(n,{modelValue:e.login,"onUpdate:modelValue":a[3]||(a[3]=a=>e.login=a),autosize:{minRows:4,maxRows:8},type:"textarea"},null,8,["modelValue"])]),g("div",Ne,[g(l,{type:"success",size:"small",auto:"",onClick:a[4]||(a[4]=e=>o.customContent("login"))},{default:Ve((()=>[Pe])),_:1})])]),g("div",Oe,[Fe,g("div",Be,[g(n,{modelValue:e.register,"onUpdate:modelValue":a[5]||(a[5]=a=>e.register=a),autosize:{minRows:4,maxRows:8},type:"textarea"},null,8,["modelValue"])]),g("div",qe,[g(l,{type:"success",size:"small",auto:"",onClick:a[6]||(a[6]=e=>o.customContent("register"))},{default:Ve((()=>[De])),_:1})])]),g("div",Ee,[We,g("div",Ge,[g(n,{modelValue:e.profile,"onUpdate:modelValue":a[7]||(a[7]=a=>e.profile=a),autosize:{minRows:4,maxRows:8},type:"textarea"},null,8,["modelValue"])]),g("div",Je,[g(l,{type:"success",size:"small",auto:"",onClick:a[8]||(a[8]=e=>o.customContent("profile"))},{default:Ve((()=>[Qe])),_:1})])]),g("div",Xe,[Ye,g("div",Ze,[g(n,{modelValue:e.updateUsername,"onUpdate:modelValue":a[9]||(a[9]=a=>e.updateUsername=a),autosize:{minRows:4,maxRows:8},type:"textarea"},null,8,["modelValue"])]),g("div",$e,[g(l,{type:"success",size:"small",auto:"",onClick:a[10]||(a[10]=e=>o.customContent("updateUsername"))},{default:Ve((()=>[ea])),_:1})])]),g("div",aa,[ta,g("div",oa,[g(n,{modelValue:e.updateCookie,"onUpdate:modelValue":a[11]||(a[11]=a=>e.updateCookie=a),autosize:{minRows:4,maxRows:8},type:"textarea"},null,8,["modelValue"])]),g("div",sa,[g(l,{type:"success",size:"small",auto:"",onClick:a[12]||(a[12]=e=>o.customContent("updateCookie"))},{default:Ve((()=>[ra])),_:1})])])])),_:1}),g(i,{label:"系统设置",name:"system"},{default:Ve((()=>[na])),_:1})])),_:1},8,["modelValue"])])])])}));_e.render=la,_e.__scopeId="data-v-e0f76f92";const ia={setup(){const e=_(),a=U("");let t=h({version:"1.1",dialogVisible:!1,tipContent:"",loginContent:"",registerContent:"",marginCount:0,allowAdd:!0,showRegister:!1,showLogin:!0,userInfo:{username:void 0,password:"",cookie:"",ptKey:"",ptPin:""},isAdmin:!1,registerRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],cookie:[{required:!0,message:"请输入cookie",trigger:"blur"}]}});const o=async()=>{try{const e=await Z.get("info").json();if(400===e.code)return void V.error(e.message);t.marginCount=e.data.marginCount,t.allowAdd=e.data.allowAdd}catch(e){console.error(e)}};return w((()=>{let a=localStorage.getItem("version")===t.version||(t.dialogVisible=!0,!1);const s=localStorage.getItem("eid");"0"!==s&&s?a&&e.push("/"):o(),(async()=>{try{t.tipContent=(await ee("tip")).data.content,t.loginContent=(await ee("login")).data.content,t.registerContent=(await ee("register")).data.content}catch(e){console.error(e)}})()})),i(l({},C(t)),{getInfo:o,loginUser:async()=>{try{if(t.isAdmin&&(t.userInfo.password||V.error("请输入密码")),t.userInfo.username){const o=await(a=t.userInfo,Z.post("login",{json:a}).json());if(400===o.code)return void V.error(o.message);let s=o.data;0===s.errCode?(localStorage.setItem("eid",s.eid),0===s.eid?(localStorage.setItem("token",s.token),e.push("/manage")):e.push("/")):(1===s.errCode&&(t.isAdmin=!0),2===s.errCode&&V.error("该账号未启用，禁止登录"),404===s.errCode&&V.error("未注册的用户"),500===s.errCode&&V.error("未知错误"))}else V.error("请输入用户名")}catch(o){console.error(o)}var a},registerConfirm:async e=>{e&&e.validate((async e=>{try{if(e){const e=t.userInfo.cookie.match(/pt_key=(.*?);/)&&t.userInfo.cookie.match(/pt_key=(.*?);/)[1],o=t.userInfo.cookie.match(/pt_pin=(.*?);/)&&t.userInfo.cookie.match(/pt_pin=(.*?);/)[1];if(!e||!o)return void V.error("cookie 解析失败，请检查后重试！");t.userInfo.ptKey=e,t.userInfo.ptPin=o;const s=await(a=t.userInfo,Z.post("register",{json:a}).json());if(400===s.code)return void V.error(s.message);const r=s.data;0===r.errCode?(V.success(r.msg),t.showLogin=!0,t.showRegister=!1):(201===r.errCode&&V.error("用户名重复"),500===r.errCode&&V.error("未知错误"))}}catch(o){console.error(o)}var a}))},registerCancel:async()=>{t.showLogin=!0,t.showRegister=!1},openRegister:async()=>{t.showLogin=!1,t.showRegister=!0},registerForm:a,updateLogClick:function(){return t.dialogVisible=!0,!1},handleClose:function(){localStorage.setItem("version",t.version)}})}},ca=f("data-v-12372816");u("data-v-12372816");const da={class:"content"},ua={class:"card"},ma=g("div",{class:"card-header"},[g("div",{class:"flex items-center justify-between"},[g("p",{class:"card-title"},"Ninja提醒您")])],-1),pa=g("div",{class:"card-footet"},null,-1),ga={key:0,class:"card"},fa={class:"card-header"},ya=g("div",{class:"flex items-center justify-between"},[g("p",{class:"card-title"},"登录")],-1),va={style:{padding:"30px"}},ha=j("登录"),wa=j("注册"),Ca={key:1,class:"card"},ka={class:"card-header"},ba={class:"flex items-center justify-between"},xa=g("p",{class:"card-title"},"注册",-1),_a={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Va={style:{padding:"30px"}},Ia=j("确定"),ja=j("返回"),Ua={style:{"text-align":"left","margin-top":"5px"}},za=j("更新日志"),La=g("p",null," 环境变量配置在.env文件中 ",-1),Ra=g("p",null," 1.添加管理功能，在环境变量中配置 ALLOW_ADMIN=true 即可开启管理功能，默认关闭 ",-1),Sa=g("p",null," 2.开启管理功能后,按照环境变量中配置的管理员账号密码登录即可进入管理页面 ",-1),Ta=g("p",null," 3.管理页面添加自定义标语功能 仅支持HTML ",-1),Ha=g("p",null," 4.修复一些小问题，修改提示信息。 ",-1),Ka=j("项目地址"),Ma={class:"dialog-footer"},Aa=j("关闭"),Na=j("确定");m();const Pa=ca(((e,a,t,o,s,r)=>{const n=p("el-input"),l=p("el-form-item"),i=p("el-button"),u=p("el-form"),m=p("el-link"),f=p("el-dialog");return c(),d("div",da,[g("div",ua,[ma,g("div",{class:"card-body text-base leading-6",innerHTML:e.tipContent},null,8,["innerHTML"]),pa]),e.showLogin?(c(),d("div",ga,[g("div",fa,[ya,g("div",{class:"card-body text-base leading-6",innerHTML:e.loginContent},null,8,["innerHTML"])]),g("div",va,[g(u,{model:e.userInfo,"label-width":"30%",size:"small"},{default:ca((()=>[g(l,{label:"用户名",prop:"username"},{default:ca((()=>[g(n,{modelValue:e.userInfo.username,"onUpdate:modelValue":a[1]||(a[1]=a=>e.userInfo.username=a),onKeyup:x(o.loginUser,["enter"]),style:{width:"50%","margin-left":"20px","min-width":"200px"}},null,8,["modelValue","onKeyup"])])),_:1}),e.isAdmin?(c(),d(l,{key:0,label:"密码",prop:"password"},{default:ca((()=>[g(n,{modelValue:e.userInfo.password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.userInfo.password=a),type:"password",onKeyup:x(o.loginUser,["enter"]),style:{width:"50%","margin-left":"20px","min-width":"200px"}},null,8,["modelValue","onKeyup"])])),_:1})):b("",!0),g(l,{style:{"text-align":"center"},"label-width":"0px"},{default:ca((()=>[g(i,{type:"primary",disabled:!e.userInfo.username,size:"small",onClick:o.loginUser},{default:ca((()=>[ha])),_:1},8,["disabled","onClick"]),e.allowAdd?(c(),d(i,{key:0,onClick:o.openRegister,size:"small"},{default:ca((()=>[wa])),_:1},8,["onClick"])):b("",!0)])),_:1})])),_:1},8,["model"])])])):b("",!0),e.showRegister?(c(),d("div",Ca,[g("div",ka,[g("div",ba,[xa,g("span",_a,"余量："+k(e.marginCount),1)]),g("div",{class:"card-body text-base leading-6",innerHTML:e.registerContent},null,8,["innerHTML"])]),g("div",Va,[g(u,{ref:"registerForm",model:e.userInfo,rules:e.registerRules,size:"small","label-width":"30%"},{default:ca((()=>[g(l,{label:"用户名",prop:"username"},{default:ca((()=>[g(n,{modelValue:e.userInfo.username,"onUpdate:modelValue":a[3]||(a[3]=a=>e.userInfo.username=a),onKeyup:a[4]||(a[4]=x((e=>o.registerConfirm(o.registerForm)),["enter"])),style:{width:"50%","margin-left":"20px","min-width":"200px"}},null,8,["modelValue"])])),_:1}),g(l,{label:"Cookie",prop:"cookie"},{default:ca((()=>[g(n,{modelValue:e.userInfo.cookie,"onUpdate:modelValue":a[5]||(a[5]=a=>e.userInfo.cookie=a),onKeyup:a[6]||(a[6]=x((e=>o.registerConfirm(o.registerForm)),["enter"])),style:{width:"70%","margin-left":"20px","min-width":"200px"}},null,8,["modelValue"])])),_:1}),g(l,{style:{"text-align":"center"},"label-width":"0px"},{default:ca((()=>[g(i,{type:"primary",onClick:a[7]||(a[7]=e=>o.registerConfirm(o.registerForm)),size:"small"},{default:ca((()=>[Ia])),_:1}),g(i,{onClick:o.registerCancel,size:"small"},{default:ca((()=>[ja])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])])):b("",!0),g("div",Ua,[g(m,{type:"info",href:"javascript:;",onClick:o.updateLogClick},{default:ca((()=>[za])),_:1},8,["onClick"])]),g(f,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[10]||(a[10]=a=>e.dialogVisible=a),title:"更新内容",width:"35%",onClose:o.handleClose},{footer:ca((()=>[g("span",Ma,[g(i,{onClick:a[8]||(a[8]=a=>e.dialogVisible=!1),size:"small"},{default:ca((()=>[Aa])),_:1}),g(i,{type:"primary",onClick:a[9]||(a[9]=a=>e.dialogVisible=!1),size:"small"},{default:ca((()=>[Na])),_:1})])])),default:ca((()=>[g("div",null,[La,Ra,Sa,Ta,Ha,g(m,{type:"primary",href:"https://github.com/sw-ashai/ashai_ninja",target:"_blank"},{default:ca((()=>[Ka])),_:1})])])),_:1},8,["modelValue","onClose"])])}));ia.render=Pa,ia.__scopeId="data-v-12372816";const Oa=[{path:"/",component:ae},{path:"/manage",component:_e},{path:"/login",component:ia}],Fa=z({history:L(),routes:Oa}),Ba=[S,T,I,V,H,K,M,A,N,P],qa=[V,I],Da=R(Y);Ba.forEach((e=>{Da.component(e.name,e)})),qa.forEach((e=>{Da.use(e)})),Da.use(Fa),Da.mount("#app");