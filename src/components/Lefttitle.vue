<template>
	<div id="left-title">
		<h4 v-if="datas.title" style="margin-left: 10px;">{{datas.title}}</h4>
    	   <ul class="list">
    	   	   <li :class="!datas.title ? 'new-message':'' " v-for="(list,index) in datas.lists">
    	   		  <a :href="list.url">{{list.name}}</a>
    	   		  <p v-if="list.hot" class="hot">HOT</p>
    	   	   </li>
    	   	   <hr v-if="!datas.last"/>
    	   </ul>
	</div>
</template>

<script>
export default {
  name: 'left-title',
  props:{
  	datas:{
  		type:Object,
  	}
  }
}
</script>

<style scoped>
h4{margin-top: 10px;}
.list{margin:5px 15px;}
.list > li{margin-bottom: 15px;line-height: 20px;}
#left-title{margin-top: 15px;}
.hot{display: inline-block;background: red;color: white;border-radius: 5px;}
.new-message{white-space: nowrap;text-overflow: ellipsis;width: 100%;overflow: hidden;}
</style>