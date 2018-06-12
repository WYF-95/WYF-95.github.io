<template>
	<div id="banner" @mouseenter="clear" @mouseleave="set">
    	<transition-group name="fadeIn">
			<img class="first" v-for="(list,index) in datas" :src="list.src" v-show="number==index+1" :key="index">
		</transition-group>
		<div class="back" @click="back">
			<p>&lt;</p>
		</div>
		<div class="run" @click="run">
			<p>&gt;</p>
		</div>
		<div class="point">
			<ul class="point_ul">
				<li class="point_li" :id="number==index+1 ? 'point_white':''" v-for="(list,index) in datas" @click="number=index+1"></li>
			</ul>
		</div>
	</div>
		
	</div>
</template>

<script>
export default {
  name: 'banner',
  data:function(){
  	return {
  	    invID:"",
        number:'1',
        lock:'0',
  	}
  },
  props:{
  	datas:{
  		type:Array,
  	},
  },
  mounted:function(){
  	this.set();
  },
  methods:{
  	run:function(){
  		if(this.lock==0){
  			  this.lock=1;
  		    if(this.number==this.datas.length){
  			    this.number=1;
  		    }
  		    else
  		      this.number++;
  		    setTimeout(() => {this.lock=0;}, 1000); 
  		}
  		else
  		    return 0; 
  	},
  	back:function(){
  		if(this.lock==0){
  			this.lock=1;
  		  if(this.number==1)
  		    this.number=this.datas.length;
  		  else
  		    this.number--;
  		  setTimeout(() => {this.lock=0;}, 1000);
  		}
  		else
  		  return 0;
  	},
  	set:function(){
  		this.invID = setInterval(() => {this.run();},5000);
  	},
  	clear:function(){
  		clearInterval(this.invID);
  	},
  }
}
</script>

<style>
#banner{width: 100%; background: #000; position: relative;overflow:hidden;padding-bottom: 32%;}
.first{width: 100%;position: absolute;}

.back{z-index: 9999999;position: absolute;left: 20px;top: 45%;width: 40px;height: 40px; color: #fff;text-align: center;border-radius: 20px; background: rgba(0,0,0,0.5);}
.run{z-index: 9999999;position: absolute;right: 20px;top: 45%;width: 40px;height: 40px; color: #fff;text-align: center;border-radius: 20px; background: rgba(0,0,0,0.5);}
.back > p,.run > p{margin-top:-2px;font-weight:800;font-size:30px;cursor: pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
.point{z-index: 9999999;position: absolute;bottom: 20px;left: 45%;}
.point_ul{background: ;height: 30px;padding: 0px;margin: 0px;}
.point_li{width: 20px;height: 20px;border-radius: 10px; background: rgba(0,0,0,0.7);margin-top: 5px;margin-left: 20px;float: left;cursor: pointer;}
#point_white{background: rgba(255,255,255,0.7)}
/*banner 结束*/
.fadeIn-enter-active,.fadeIn-leave-active {
  transition: all 1s ease ;
}
.fadeIn-enter{
	transform: translateX(95%);
}

.fadeIn-leave-active {
  transform: translateX(-100%)
}
</style>