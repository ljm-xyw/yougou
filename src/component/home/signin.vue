<template>
	<main>
		<div class="back">
		  <ul>
		    <li><h4 @click="back()"><img src="../../assets/images/new-back.png" alt=""></h4></li>
		    <li><h3>领积分</h3></li>
		    <li><img src="../../assets/images/ico-menu.png" alt=""></li>
		  </ul>
		</div>
		<div class="sign">
			<ul>
				<li>我的积分</li>
				<li>
					<div>
						<dl>
							<dt>签到</dt>
							<dd></dd>
							<dd>连续0天</dd>
						</dl>
					</div>				
				</li>
				<li>签到规则</li>
			</ul>
			<ol>
				<li>
					<em></em>
					<span><b>+5</b></span>
					<i>10.5</i>
				</li>
				<li>
					<em></em>
					<span><b>+10</b></span>
					<i>10.6</i>
				</li>
				<li>
					<em></em>
					<span><b>+15</b></span>
					<i>10.7</i>
				</li>
				<li>
					<em></em>
					<span><b>+20</b></span>
					<i>10.8</i>
				</li>
				<li>
					<em></em>
					<span><b>+25</b></span>
					<i>10.9</i>
				</li>
			</ol>
		</div>
		<div class="content">
			<div class="hot">
				<h4>热门商品推荐<img src="../../assets/images/open.png" alt=""></h4>
				<ul>
					<li v-for="(v,i) in hot">
						<img :src="v.src" alt="">
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
					</li>
				</ul>
			</div>
			
			<div class="recom">
				<ul>
					<li><h4>专题推荐<img src="../../assets/images/open.png" alt=""></h4></li>
					<li><img src="../../assets/images/tuijian.jpg" alt=""></li>
				</ul>
				
				
			</div>
		</div>
		<div class="footer">
		  <ul>
		    <li>登录</li>
		    <li>|</li>
		    <li>注册</li>
		  </ul>
		  <ol>
		    <li>电脑版</li>
		    <li>客户端</li>
		    <li>微信</li>
		  </ol>
		  <p>百丽国际旗下购物网站<br>Copyright © 2011-2018 优购 m.yougou.com</p>
		</div>
	</main>
</template>

<script>
	export	default{
		data(){
			return{
				hot:'',
				src:'',
				title:'',
				price:''
			}
		},
		mounted(){
			this.$http.get('./data/signin.json')
				  .then((response)=>{
				  console.log(response);
				  console.log(this)
				  this.hot=response.data.hot
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
	  width:70%;
	  margin-top: 4px;
	  font-size: 1.2rem;
	  position:relative;
	}
	.back li:nth-of-type(3){
	  width:15%;
	  text-align:right;
	  position:relative;
	}
	.back li:nth-of-type(3) img{
	   width: 20px;
	   position:absolute;
	   right:0px;
	   top:6.33px;
	}
	.sign{
		width: 100%;
		margin-top: 42.5px;
		background:url(../../assets/images/signbg.png);
		box-sizing: border-box;
		padding: 20px;
	}
	.sign ul{
		overflow: hidden;
	}
	.sign ul li{
		float: left;
		width: 25%;
		color: #fff;
	}
	.sign ul li:nth-of-type(1){
		text-align: left;
		font-size: .9rem;
	}
	.sign ul li:nth-of-type(3){
		text-align: right;
		font-size: .9rem;
	}
	.sign ul li:nth-of-type(2){
		width: 50%;	
		height: 100px;
		margin-top: 20px;
		position: relative;
	}
	.sign ul div{
		box-sizing: border-box;
		width: 100px;
		height: 100px;
		border: 10px solid rgba(255,255,255,.5);
		padding: 10px 30px;
		border-radius: 50%;	
		background-color: #F77B79;
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -50px;
	}
	.sign ul dl{
		width: 60px;
		/* margin-left: -30px; */
		line-height: 1.8rem;
		color: #fff;
		position: absolute;
		top: 12px;
		left: 50%;
		margin-left: -30px;
	}
	.sign ul dd{
		font-size: .7rem;
	}
	.sign ul dd:nth-of-type(1){
		width: 60px;
		border: .5px solid #fa9767;
	}
	.sign ol{
		width: 100%;
		padding: 30px 0 0;
		overflow: hidden;
	}
	.sign ol li{
		width: 20%;
		float: left;
		position: relative;
		overflow: hidden;
		color: #9d9d9d;
		box-sizing: border-box;
	}
	.sign ol em{
		content: '';
		width: 100%;
		height: 2px;
		background: #fff;
		position: absolute;
		top: 12px;
		left: 0px;
		z-index: 9;
	}
	.sign ol li:nth-of-type(1) em{
		width:50%;
		left: 50%;
	}
	.sign ol li:nth-of-type(5) em{
		width:50%;
		right: 50%;
	}
	.sign ol span{
		display: block;
		color: #5C5F68;
		width: 25px;
		height: 25px;
		line-height: 0px;
		text-align: center;
		border-radius: 25px;
		border: 1px solid #eee;
		position: relative;
		z-index: 10;
		margin: 0 auto;
		font-size: 10px;
		box-sizing: border-box;
	}
	.sign ol b{
		display: block;
		width: 100%;
		height: 100%;
		border: 1px solid #fedd81;
		border-radius: 25px;
		box-sizing: border-box;
		background: #fff;
		padding-top: 11px;
	}
	.sign ol i{
		display: block;
		font-size: .5rem;
		text-align: center;
		font-style: normal;
		padding-top: 5px;
		color: #5C5F68;
	}
	.content{
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		background-color: #eee;
	}
	.hot{
		width: 100%;
		background-color: #fff;
	}
	.hot h4{
		box-sizing: border-box;
		padding: 0 10px;
		width: 100%;
		text-align: left;
		font-weight: normal;
		position: relative;
		padding-top: 10px;
	}
	.hot h4 img{
		width: 2.5%;
		position: absolute;
		right: 10px;
	}
	.hot ul{
		overflow: hidden;
		padding: 10px 0 0;
	}
	.hot li{
		width: 33.333333%;
		float: left;
		text-align: center;
		font-size: .8rem;
		box-sizing: border-box;
		border: 1px solid #eee;
		padding-bottom: 5px;
		line-height: 1.2rem;
		padding: 0 2px;
	}
	.hot li img{
		width: 100%;
	}
	.hot li p{
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.hot li span{
		color: red;
	}
	.recom{
		background-color: #fff;
		box-sizing: border-box;
		padding: 10px;
		margin-top: 10px;
	}
	.recom li:nth-of-type(1){
		padding-bottom: 10px;
	}
	.recom li:nth-of-type(1) h4{
		width: 100%;
		text-align: left;
		position: relative;
		font-weight: normal;
	}
	.recom li:nth-of-type(1) img{
		width: 2.5%;
		position: absolute;
		right: 0px;
	}
	.recom li:nth-of-type(2) img{
		width: 100%;
	}
	.footer{
	  background: #f8f8f8;
	  border:1px solid #ddd;
	  padding-bottom: 10px;
	  overflow:hidden;
	}
	.footer li{
	  margin:15px 8px 5px;
	  float:left;
	  font-size:0.9rem;
	}
	.footer ul li{
	  margin:15px 0px 5px 8px;
	}
	.footer ul{
	  float:left;
	  margin:0px;
	  overflow:hidden;
	}
	.footer ol{
	  float:right;
	  margin:0px;
	  overflow:hidden;
	}
	.footer p{
	  line-height:1.5rem;
	  padding-top:3rem;
	  font-size:0.9rem;
	  color:#aaa;
	}
</style>
