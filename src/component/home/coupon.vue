<template>
	<main>
		<div class="back">
		  <ul>
		    <li><h4 @click="back()"><img src="../../assets/images/new-back.png" alt=""></h4></li>
		    <li><h3>积分兑换</h3></li>
			<li><h6>说明</h6></li>
		    <li><img src="../../assets/images/ico-menu.png" alt=""></li>
		  </ul>
		</div>
		<div class="content">
			<div v-for="(v,i) in coupon">
				<dl>
					<dd>
						<span class="price">{{v.price}}</span>
						<span class="full">{{v.full}}</span>
					</dd>
					<dd>
						<p>{{v.title}}</p>
						<p>有效期至2019-10-08 10：00</p>
						<span>20积分兑换</span>
					</dd>
				</dl>
			</div>
			<h4>没有更多</h4>
		</div>
	</main>
</template>
<script>
	export	default{
		data(){
			return{
				coupon:'',
				price:'',
				full:'',
				title:''
			}
		},
		mounted(){
			this.$http.get('./data/coupon.json')
				  .then((response)=>{
				  console.log(response);
				  console.log(this)
				  this.coupon=response.data.coupon
				  })
				  .catch(function (error) {
				  console.log(error);
				  })
				  .then(function () {
				  // always executed
			  });
		},
		methods:{
			back(){
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
	  width:15%;
	  text-align:left;
	}
	.back li:nth-of-type(1) h4{
	  width: 50%;
	}
	.back li:nth-of-type(1) img{
	    width: 12px;
	    position:relative;
	    top:2px;
	}
	.back li:nth-of-type(2){
	  width:60%;
	  margin-top: 4px;
	  font-size: 1.2rem;
	  position:relative;
	}
	.back li:nth-of-type(2) h3{
		font-weight: normal;
	}
	.back li:nth-of-type(3){
	  width:10%;
	  font-size: .1rem;
	  margin-top: .9rem;
	}
	.back li:nth-of-type(3) h6{
		font-size: .9rem;
		font-weight: normal;
	}
	.back li:nth-of-type(4){
	  width:15%;
	  text-align:right;
	  position:relative;
	}
	.back li:nth-of-type(4) img{
	   width: 20px;
	   position:absolute;
	   right:0px;
	   top:6.33px;
	}
	.content{
		margin-top: 42.5px;
		box-sizing: border-box;
		padding: 5px 15px 0;
	}
	.content>div{
		background: url(../../assets/images/coupon.jpg);
		background-size: 100% 100%;
		margin: 10px 0;
		padding: 20px 0 0;
	}
	.content dl{
		overflow: hidden;
	}
	.content dd{
		float: left;
	}
	.content dd:nth-of-type(1){
		width: 40%;
		font-size: .8rem;
		color: #fff;
	}
	.content dd:nth-of-type(1) span:nth-of-type(1){
		font-size: 2rem;
		line-height: 2.5rem;
	}
	.content dd:nth-of-type(2){
		width: 59%;
		font-size: .85rem;
		line-height: 1.2rem;
		padding-right: 2px;
	}
	.content dd:nth-of-type(2) p:nth-of-type(1){
		width: 100%;
		word-break:break-all;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		overflow:hidden;
		margin-bottom: 8px;
	}
	.content dd:nth-of-type(2) p:nth-of-type(2){
		color: #ccc;
		padding-bottom: 5px;
	}
	.content dd:nth-of-type(2) span{
		width: 100px;
		line-height: 1.3rem;
		text-align: center;
		float: right;
		margin-right: 10px;
		border: 1px solid  #f6659a;
		color: #f6659a;
		border-radius: 20px;
		margin-bottom: 5px;
	}
	.content span{
		display: block;
	}
	.content h4{
		font-weight: normal;
		padding: 10px 0 20px;
	}
</style>