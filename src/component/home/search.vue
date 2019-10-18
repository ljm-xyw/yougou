<template>
	<main>
		<div class="back">
			<ul>
				<li><h4 @click="close()"><img src="../../assets/images/ico-close.png" alt=""></h4></li>
				<li><input type="text"><input type="button"></li>
			</ul>
		</div>
		<div class="hot">
			<h4>热门搜索</h4>
			<ul>
				<li>新款单鞋</li>
				<li>老爹鞋</li>
				<li>小白鞋</li>
				<li>休闲鞋</li>
				<li>跑步鞋</li>
				<li>百丽</li>
				<li>思加图</li>
				<li>阿迪</li>
				<li>天美意</li>
				<li>卫衣</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			close(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped="">
	.back{
	  width:100%;
	  box-sizing:border-box;
	  padding:8px;
	  position:fixed;
	  top:0px;
	  left:0px;
	  background:#f8f8f8;
	  border-bottom: 1px solid #ddd;
	}
	.back ul{
	  overflow:hidden;
	}
	.back li{
	  float: left;
	  margin: 0px;
	}
	.back li:nth-of-type(1){
	  width:10%;
	  text-align:left;
	}
	.back li:nth-of-type(1) h4{
	  width: 50%;
	}
	.back li:nth-of-type(1) img{
	    width: 90%;
	    position:relative;
	    top:10px;
	}
	.back li:nth-of-type(2){
	  width: 89%;
	  margin-top: 4px;
	  font-size: 1.2rem;
	  position:relative;
	  border: 1px solid #aaa;
	  overflow: hidden;
	}
	.back li:nth-of-type(2) input{
		float: left;
	}
	.back li:nth-of-type(2) input:nth-of-type(1){
		width: 85%;
		height: 28px;
		border:none;
		box-sizing: border-box;
		padding-left: 5px;
	}
	.back li:nth-of-type(2) input:nth-of-type(2){
		width: 15%;
		height: 30px;
		border: none;
		background: url(../../assets/images/ico-srch.png) no-repeat;
		background-size: 40%;
		background-position: 15px 5px;
	}
	.hot{
		margin-top: 55px;
		width: 100%;
		box-sizing: border-box;
		padding: 10px 10px 0;
	}
	.hot h4{
		font-weight: normal;
		font-size: .9rem;
		width: 100%;
		text-align: left;
		padding-left: 18px;
		background: url(../../assets/images/hot.png) no-repeat;
		background-size: 3%;
		background-position: 0px 0px;
	}
	.hot ul{
		overflow: hidden;	
	}
	.hot ul li{
		float: left;
		width: 22%;
		margin: 20px 5px 0;
		padding: 10px 0;
		/* margin: 20px 5px 10px; */
		background-color: #eee;
	}
</style>
