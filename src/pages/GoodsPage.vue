<template>
	<div id="goods-page" >
		<div class="goods-content">
			<h3>开放产品</h3>
			<p>开发产品是指企业已经完成全部开发建设过程，并已验收合格，符合国家建设标准和设计要求，可以按照合同规定的条件移交订购单位，或者作为对外销售、出租的产品，包括土地（建设场地）、房屋、配套设施和代建工程。已完工开发产品实际上是开发建设过程的结束和销售过程的开始。</p>
			<div class="" style="margin-top: 20px;">
				<table border="0px" >
					<tr>
						<td>产品数量：</td>
						<td>
							<button style="width: 15px;height: 19px;" @click="sub">-</button>
							<input type="number" style="width: 50px;margin-right:3px ;" value="0" v-model="goodsNumber"/>
							<button style="width: 15px;height: 19px;" @click="add">+</button> </td>
					</tr>
					<tr>
						<td>产品类型：</td>
						<td>
							<select name="">
								<option value="" disabled="disabled">请选择</option>
								<option value="">入门级</option>
								<option value="">初级级</option>
								<option value="">高级级</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>有效时间：</td>
						<td>
							<select name="">
								<option value="" disabled="disabled">请选择</option>
								<option value="">一年</option>
								<option value="">三年</option>
								<option value="">五年</option>
							</select>
						</td>
					</tr>
					
					
				</table>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'goods-page',
		data:function(){
			return {
				goodsNumber:0,
			}
		},
		methods:{
			add(){
				this.goodsNumber++;
			},
			sub(){
				if(this.goodsNumber>1){
					this.goodsNumber--;
				}
				else
				   return 0;
			},
		}
	}
</script>

<style>
	.goods-content{width: 99%;background: white;padding: 20px;box-sizing:border-box;}
	.goods-content > h3{margin-bottom: 10px;}
	input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance: none !important;margin: 0;}  
</style>