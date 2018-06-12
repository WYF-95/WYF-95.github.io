<template>
   <div id="pop-div">
   	  <div id="black-ground"></div>
   	  <div id="pop-content">
   	  	
   	  
      <div class="close" @click="close">
      	X
      </div>
      <div class="content">
      	<slot>内容缺失</slot>
      </div>
      </div>
   	
   </div>
</template>

<script>
	export default {
		name:'pop-div',
		methods:{
			close(){
				this.$emit('close-pop');
                
			}
		}
	}
</script>

<style>
#pop-content{position: fixed;width: 50%;background: white;z-index: 9999999999;top: 25%;left: 30%;border-radius: 20px;overflow: hidden;}
#black-ground{position: fixed;width: 100%;height: 100%;background: black;opacity:0.3;z-index: 9999999999;top: 0px;left: 0px;}
.close{float: right;font-weight: 800;padding-right: 20px;padding-top: 10px;cursor: pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
.content{width: 80%; margin:  20px auto;}
</style>