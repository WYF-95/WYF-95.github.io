<template>
  <div id="index-page">
  	
    <div class="left">
    	<div>
    	   <div class="left-title">全部产品</div>
    	   <left-title :datas="pc"></left-title>
    	   <left-title :datas="mb"></left-title>
    	</div>
    	<div>
    	  <div class="left-title">最新消息</div>
    	  <left-title :datas="message"></left-title>
    	</div>
    </div>
    
    
    
    <div class="right">
    <banner :datas="banner"></banner>
    
    	
    	<div class="introduce-flex">
    		<div class="introduce" v-for="(point,index) in points">
    			<div class="introduce-div">
    			    <img class="introduce-img" :src="point.img"/>
    			    <div>
    			    	<h3>{{point.title}}</h3>
    			    	<p>{{point.content}}</p>
    			    	<router-link :to="point.url">
    			    	   <input type="button" value="立即购买"></input>
    			      </router-link>
    			    </div>
    			</div>
    		</div>
    	</div>
    	
    </div>
    
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import Lefttitle from '../components/Lefttitle'
import Banner from '../components/Banner'
export default {
  name: 'index-page',
  data:function(){
  	return {
      banner:[
          {src:require("../assets/1.jpg")},
          {src:require("../assets/2.jpg")},
          {src:require("../assets/3.jpg")},
          {src:require("../assets/4.jpg")},
          
      ],
  	   pc:{
  	    	title:"PC产品",
  		    lists:[
  		       {
  		   	    name:"产品1",
  		   	    url:"https://cn.vuejs.org/v2/guide/plugins.html",
  		   	    hot:false
  		        },
  		       {
  		      	name:"产品2",
  		    	  url:"https://cn.vuejs.org/v2/api/#render",
  		   	    hot:false
  		       },
  		       {
  		   	    name:"产品3",
  		      	url:"https://www.cnblogs.com/yufann/p/Vue-Node10.html",
  		      	hot:true
  		        },
  		        {
  		   	    name:"产品4",
  		   	    url:"https://www.cnblogs.com/ppJuan/p/7151000.html",
  		   	    hot:false
  		        },
  		    ]
  		},
  		mb:{
  	    	title:"移动端产品",
  	    	last:true,
  		    lists:[
  		       {
  		   	    name:"苹果",
  		   	    url:"https://cn.vuejs.org/v2/guide/plugins.html",
  		   	    hot:false
  		        },
  		       {
  		      	name:"坚果",
  		    	  url:"https://cn.vuejs.org/v2/api/#render",
  		   	    hot:false
  		       },
  		       {
  		   	    name:"锤子",
  		     	  url:"https://www.cnblogs.com/yufann/p/Vue-Node10.html",
  		     	  hot:false
  		        },
  		        {
  		   	    name:"核桃",
  		   	    url:"https://www.cnblogs.com/ppJuan/p/7151000.html",
  		   	    hot:true
  		        },
  		    ]
  		},
  		message:{
  			title:false,
  	    last:true,
  		  lists:[
  		    {
  		    	name:"第一条最新消息第一条最新消息第一条最新消息第一条最新消息",
  		    	url:"https://www.baidu.com/",
  		    },
  		    {
  		    	name:"第二条最新消息",
  		    	url:"https://map.baidu.com/",
  		    },
  		    {
  		    	name:"第三条最新消息第三条最新消息第三条最新消息第三条最新消息",
  		    	url:"http://v.baidu.com/",
  		    },
  		    {
  		    	name:"第四条最新消息",
  		    	url:"http://tieba.baidu.com/",
  		    },
  		  ],
  		},
  		points:[
  		    {
  		    	title:"开放产品",
  		    	content:"开放产品是一款开放产品",
  		    	url:"product/goods",
  		    	img:require('../assets/timg1.jpg'),
  		    	even:false
  		    },
  		    {
  		    	title:"品牌营销",
  		    	content:"市场营销使客户形成对企业品牌和产品的认知过程",
  		    	url:"product/brand",
  		    	img:require('../assets/timg3.jpg'),
  		    	even:true
  		    },
  		    {
  		    	title:"使命必达",
  		    	content:"《使命必达》是由葛大为填词，周汤豪演唱的歌曲。",
  		    	url:"product/express",
  		    	img:require('../assets/timg2.jpg'),
  		    	even:false
  		    },
  		    {
  		    	title:"攀登高峰",
  		    	content:"攀登高峰望故乡 黄沙万里长",
  		    	url:"product/mount",
  		    	img:require('../assets/timg4.jpg'),
  		    	even:true
  		    },
  		]
  	}
  },
  components:{
  	'left-title':Lefttitle,
  	'banner':Banner,
  },

}
</script>

<style scoped>
#index-page{max-width: 1740px;margin-left: auto;margin-right: auto;}
.left{width: 20%;background: white;margin: 10px 0.7%;display: inline-block;}
.left-title{width: 100%; background: #42B983;color: white;padding: 10px 0px 10px 5px;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}


.right{background: #EFF1F3;width: 78.6%;float: right;margin:10px 0px;}

.introduce-flex{width: 100%;display: flex;flex-direction:row;flex-wrap: wrap; -webkit-justify-content: space-around;justify-content: space-around;}
.introduce{width: 45%;height: 150px;margin: 10px 10px;min-width: 300px;background: white;}
.introduce-div{height: 100%;display: flex;}
.introduce-img{height: 70%;align-self: center;margin:0px 20px;}
.introduce-div > div{align-self: center;margin-right: 20px;}
.introduce-div h3,.introduce-div p{margin-bottom: 8px;}
.introduce-div input{background: #42B983;color: white;height: 35px;width: 80px;outline: none;border-radius: 5px;}
</style>
