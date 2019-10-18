<template>
	<main>
		<div class="back">
			<ul>
				<li><h4 @click="back()"><img src="../../assets/images/new-back.png" alt=""></h4></li>
				<li><input type="text" placeholder="请输入关键词"><input type="button"></li>
				<li><img src="../../assets/images/ico-menu.png" alt=""></li>
			</ul>
		</div>
		<div class="img">
			<img src="../../../data/images/101.jpg" alt="">
		</div>
		<div class="content">
			<ul class="tnav">
				<li @click="change(index)" :class="{color:index==num}" v-for="(v,index) in tnav">{{v}}</li>
				<li>筛选</li>
			</ul>
			<div v-show="num==0" class="con">
				<ul>
					<li v-for="(v,i) in con0"><router-link to="/product">
						<img :src="v.src" alt="">
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
						<del>{{v.oprice}}</del>
						<span><img src="../../assets/images/ticketIcon.png" alt=""></span>
					</router-link></li>
				</ul>
			</div>
			<div v-show="num==1" class="con">
				<ul>
					<li v-for="(v,i) in con1"><router-link to="/product">
						<img :src="v.src" alt="">
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
						<del>{{v.oprice}}</del>
						<span><img src="../../assets/images/ticketIcon.png" alt=""></span>
					</router-link></li>
				</ul>
			</div>
			<div v-show="num==2" class="con">
				<ul>
					<li v-for="(v,i) in con2"><router-link to="/product">
						<img :src="v.src" alt="">
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
						<del>{{v.oprice}}</del>
						<span><img src="../../assets/images/ticketIcon.png" alt=""></span>
					</router-link></li>
				</ul>
			</div>
			<div v-show="num==3" class="con">
				<ul>
					<li v-for="(v,i) in con3"><router-link to="/product">
						<img :src="v.src" alt="">
						<p>{{v.title}}</p>
						<span>{{v.price}}</span>
						<del>{{v.oprice}}</del>
						<span><img src="../../assets/images/ticketIcon.png" alt=""></span>
					</router-link></li>
				</ul>
			</div>
		</div>

		<div class="car"><router-link to="/shoppingcart"><div><img src="../../assets/images/car-white.png" alt=""></div></router-link></div>
	</main>
</template>

<script>
	export default({
		data(){
			return{
				tnav:['综合','销量','价格','新品'],
				num:0,
				con0:'',
				con1:'',
				con2:'',
				con3:'',
				title:'',
				price:'',
				oprice:''
			}
		},
		mounted(){
			this.$http.get('./data/go.json')
				  .then((response)=>{
				  console.log(response);
				  console.log(this)
				  this.con0=response.data.con0
				  this.con1=response.data.con1
				  this.con2=response.data.con2
				  this.con3=response.data.con3
				  })
				  .catch(function (error) {
				  console.log(error);
				  })
				  .then(function () {
				  // always executed
			  });
		},
		methods:{
			change(index){
				this.num=index;
			},
			back(){
				history.go(-1)
			}
		}
	})
</script>

<style scoped="">
	body{
		position: relative;
	}
	.color{
		color:red;
	}
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
	    width: 12px;
	    position:relative;
	    top:2px;
	}
	.back li:nth-of-type(2){
	  width: 79%;
	  font-size: 1.2rem;
	  position:relative;
	  border: 1px solid #aaa;
	  overflow: hidden;
	}
	.back li:nth-of-type(2) input{
		float: left;
	}
	.back li:nth-of-type(2) input:nth-of-type(1){
		width: 80%;
		height: 28px;
		padding-left: 10px;
		border:none;
	}
	.back li:nth-of-type(2) input:nth-of-type(2){
		width: 15%;
		height: 30px;
		border: none;
		background: url(../../assets/images/ico-srch.png) no-repeat;
		background-size: 40%;
		background-position: 20px 5px;
		background-color: #fff;
	}
	.back li:nth-of-type(3){
	  width:10%;
	  text-align:right;
	  position:relative;
	}
	.back li:nth-of-type(3) img{
	   width: 20px;
	   position:absolute;
	   right:0px;
	   top:6.33px;
	}
	.img{
		width: 100%;
		padding-top: 49px;
	}
	.img img{
		width: 100%;
	}
	.content{
		width: 100%;
	}
	.content .tnav{
		width: 100%;
		box-sizing: border-box;
		padding: 15px 20px;
		overflow: hidden;
		color: #999;
	}
	.content .tnav li{
		float: left;
		width: 20%;
		font-size: .8rem;
	}
	.tnav li:nth-of-type(3){
		background: url(../../assets/images/gray.png);
		background-repeat: no-repeat;
		background-size: 15% 100%;
		background-position: 50px 0px;
	}
	.tnav li:nth-of-type(5){
		background: url(../../assets/images/select.png);
		background-repeat: no-repeat;
		background-size: 15% 100%;
		background-position: 50px 0px;
	}
	.content .con{
		width: 100%;
		background-color: #eee;
		box-sizing: border-box;
		padding: 4px;
	}
	.con ul{
		overflow: hidden;
	}
	.con li{
		float: left;
		box-sizing: border-box;
		width: 50%;
		border: 3px solid #eee;
		padding-bottom: 20px;
		background-color: #fff;
	}
	.con a{
		color: #666;
		text-decoration: none;
		font-size: .8rem;
	}
	.con li p{
		line-height: 1.8rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	.con li img{
		width: 100%;
	}
	.con li span:nth-of-type(1){
		color: red;
		font-size: .9rem;
		float: left;
		padding-left: 15px;
	}
	.con span img{
		width: 10%;
	}
	.car img{
		width: 65%;
		position: absolute;
		top: 7px;
		left: 7px;
		display: inline-block;
	}
	.car div{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #bbb;
		position: fixed;
		right: 20px;
		bottom: 50px;
		z-index: 10;
	}
</style>
