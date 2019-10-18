<template>
	<main>
		<div class="back">
		  <ul>
		    <li><h4 @click="back()"><img src="../../assets/images/new-back.png" alt=""></h4></li>
		    <li><h3>消息盒子</h3></li>
			<li><router-link to="/my"><h6>登录</h6></router-link></li>
		    <li><img src="../../assets/images/ico-menu.png" alt=""></li>
		  </ul>
		</div>
		<div class="content">
			<h4><span></span><p>时尚风向标</p><span></span></h4>
			<div v-for="(v,i) in find">
				<dl>
					<dt>{{v.title}}</dt>
					<dd class="img"><img :src="v.src" alt=""></dd>
					<dd class="txt">{{v.txt}}</dd>
				</dl>
			</div>
		</div>
	</main>
</template>
<script>
	export	default{
		data(){
			return{
				find:'',
				title:'',
				txt:''
			}
		},
		mounted(){
			this.$http.get('./data/find.json')
				  .then((response)=>{
				  console.log(response);
				  console.log(this)
				  this.find=response.data.find
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
	.back li:nth-of-type(3) a{
		text-decoration: none;
		color: #666;
	}
	.back li:nth-of-type(3) h6{
		font-size: .9rem;
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
		background-color: #eee;
		padding-bottom: 5px;
	}
	.content h4{
		width: 100%;
		padding-top: 10px;
		font-size: .9rem;
		font-weight: normal;
		position: relative;
		margin-bottom: 10px;
	}
	.content h4 span{
		width: 10%;
		display: inline-block;
		border: 1px solid #ddd;
		position: absolute;
	}
	.content h4 span:nth-of-type(1){
		top:70%;
		left: 29%;
	}
	.content h4 span:nth-of-type(2){
		top:70%;
		left: 60%;
	}
	.content>div{
		background-color: #fff;
		box-sizing: border-box;
		padding: 10px 15px;
		margin-bottom: 20px;
	} 
	.content dt{
		text-align: left;
		font-size: .85rem;
		padding: 0px 0 10px;
	}
	.content .img{
		height: 0px;
		padding-bottom: 51.56%;
	}
	.content dd img{
		width: 100%;
	}
	.content .txt{
		font-size: .8rem;
		text-align: left;
		padding: 10px 0;
		line-height: 1.2rem;
		color: #aaa;
	}
</style>