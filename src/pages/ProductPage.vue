<template>
	<div id="product-page">
		<div class="left">
			<div style="width: 35%;margin: 10px auto;">
				<img style="width: 100%;" :src="imgqwe" />
			</div>
			<div class="" style="width: 70%;margin-left: auto;margin-right: auto;margin-bottom: 20px;">
				<ul>
					<router-link tag="li" @click="console.log(this.point[title])" class="left-li" v-for="(point,index) in points" :to="point.url" active-class="on" :key="index">
						{{point.title}}
					</router-link>

			    </ul>
			</div>
			
		</div>
		<div class="right">
			<keep-alive>
			   <router-view></router-view>
			</keep-alive>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'product-page',
		data(){
		    return{
		    	routers:'',
			    points:[
  		           {
  		               title:"开放产品",
  		               url:"/product/goods",
  		               
  		            },
  		            {
  		     	       title:"品牌营销",
  		     	       url:"/product/brand",
  		     	       
  		            },
  		            {
  		     	       title:"使命必达",
  		     	       url:"/product/express",
  		     	       
  		            },
  		            {
  		     	       title:"攀登高峰",
  		     	       url:"/product/mount",
  		     	       
  		            },
  		        ],
  		        pointsimg:{
  		            "/product/goods":require('../assets/timg1.jpg'),
  		            '/product/brand':require('../assets/timg3.jpg'),
  		            "/product/express":require('../assets/timg2.jpg'),
  		            "/product/mount":require('../assets/timg4.jpg'),
  		        }
		    }
		},
		mounted:function(){
			
			//console.log(this.pointsimg[this.$route.path])
		},
		computed:{
            imgqwe:function(){
            	return this.pointsimg[this.$route.path]
            }
		}
	}
</script>

<style>
	#product-page{max-width: 1740px;margin-left: auto;margin-right: auto;}
	.left{width: 20%;background: white;margin: 10px 0.7%;display: inline-block;}
	.left-li{padding-left: 10%;padding-bottom: 5px;padding-top: 5px;cursor: pointer;}
	.left-li:hover{color: white;background: #42B983;}
	.on{color: white;background: #42B983;}
	.right{background: #EFF1F3;width: 78.6%;float: right;margin:10px 0px;}
</style>