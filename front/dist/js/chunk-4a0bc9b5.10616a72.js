(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a0bc9b5"],{"0941":function(e,t,s){},"3b46":function(e,t,s){"use strict";var r=s("0941"),a=s.n(r);a.a},"56bd":function(e,t,s){"use strict";s.d(t,"b",function(){return n}),s.d(t,"a",function(){return l}),s.d(t,"c",function(){return c});var r=s("bc3a"),a=s.n(r),i=s("c0d6");const o=()=>a.a.create({baseURL:"https://reqres.in/api/",headers:{"X-Requested-With":"XML HttpRequest",Authorization:`Bearer${i["a"].state.token}`},transformResponse:[e=>{return e=JSON.parse(e),e}],timeout:6e4}),n=e=>o().post("/register",e),l=e=>o().post("/login",e),c=e=>o().put("/users"+e)},"9b3c":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{staticClass:"form"},[s("v-text-field",{attrs:{label:"email",required:""},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}}),s("v-text-field",{attrs:{label:"name",required:""},model:{value:e.register.name,callback:function(t){e.$set(e.register,"name",t)},expression:"register.name"}}),s("v-text-field",{attrs:{type:"password",label:"Senha",rules:e.rulePassword,required:""},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}}),s("v-text-field",{attrs:{type:"password",rules:e.rulePassword,label:"Confirmar Senha",required:""},model:{value:e.register.repassword,callback:function(t){e.$set(e.register,"repassword",t)},expression:"register.repassword"}}),s("v-btn",{staticClass:"btn__register",on:{click:function(t){return t.preventDefault(),e.registerFunction(t)}}},[e._v("Register")])],1)])},a=[],i=s("56bd"),o=s("2f62"),n={components:{},name:"Register",data:()=>({register:{email:"eve.holt@reqres.in",name:"Usuario teste",password:"pistol",repassword:"pistol"}}),computed:{rulePassword(){return[this.register.password===this.register.repassword||"Senha Está diferente"]}},methods:{...Object(o["b"])({SNACKBAR:"SET_SNACKBAR"}),registerFunction(){Object(i["b"])(this.register).then(e=>{console.log(e,"RESPOSTA"),this.$store.dispatch("SET_LOGIN",{id:2,email:"Resposta Email",name:"Resposta nome",token:e.data.token}),this.SNACKBAR({open:!0,timeout:3e3,message:"Registrado com sucesso",color:"teal"})}).catch(e=>{console.log(e)}).finally(()=>{setTimeout(()=>{window.location.reload()},5e3)})}}},l=n,c=(s("3b46"),s("2877")),u=Object(c["a"])(l,r,a,!1,null,"cb945d4e",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4a0bc9b5.10616a72.js.map