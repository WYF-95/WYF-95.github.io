<template>
  <div id="layout">
      <div id="headers">
      	<div class="headers-left">
      		<img class="logo-img" src="../assets/logo.png"/>
      	</div>
      	<div style="display: inline-block;color: white;font-size: 12px;">信息：{{city+" "+today+" "+weather}}</div>
      	<div class="headers-right">
      	  <span @click="showLog=!showLog">登录</span>丨<span @click="showReg=!showReg">注册</span>丨<span @click="showAbout=!showAbout">关于</span>
      	</div>
      </div>
      <div id="content">
      	<keep-alive>
      	   <router-view></router-view>
      	</keep-alive>
      </div>
      <div id="foots"><b>&copy;</b>2018.06.08 test</div>
      <pop-div v-if="showLog" @close-pop="showLog=!showLog">
      	<log-font></log-font>
      </pop-div>
      <pop-div v-if="showReg" @close-pop="showReg=!showReg">
      	<reg-font></reg-font>
      </pop-div>
      
      <pop-div v-if="showAbout" @close-pop="showAbout=!showAbout">
      	关于：Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。
另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。
      </pop-div>
      
  </div>
</template>

<script>

	import PopDiv from '../components/PopDiv'
	import LogFont from '../components/LogFont'
	import RegFont from '../components/RegFont'
export default {
  name: 'layout',
  data:function(){
  	return {
  		city:"",
  		today:"",
  		weather:"",
  		showAbout:false,
  		showLog:false,
  		showReg:false,
  	}
  },
  components:{
  	'pop-div':PopDiv,
  	'log-font':LogFont,
  	'reg-font':RegFont,
  },
  beforeMount:function(){
  		this.$http.jsonp("http://api.asilu.com/weather/")
  		.then((response)=>{
  			this.city=response.data.city;
  			this.today=response.data.weather[0].date;
  			this.weather=response.data.weather[0].weather;
  		})
  	}
}
</script>

<style>
#layout{}	
#content{background:#EFF1F3;}
#headers{width: 100%;background: #2F2F2F;margin: 0px;padding: 5px 0px 5px 0px;}
.headers-left{display: inline-block;margin-left: 10px;}
.logo-img{width: 50px;}
.headers-right{color: white;float: right;margin-top: 15px;margin-right: 10px;cursor: pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
#foots{width: 100%;background: #E1E3E7;text-align: center;padding: 20px 0px;font-size: 16px;font-weight: 400;}
</style>
