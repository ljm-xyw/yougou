<template>
	<main>
		<div class="back">
		  <ul>
		    <li><h4 @click="back()"><img src="../assets/images/new-back.png" alt=""></h4></li>
		    <li><h3>购物车</h3></li>
			<li><router-link to="/my"><h6>登录</h6></router-link></li>
		    <li><img src="../assets/images/ico-menu.png" alt=""></li>
		  </ul>
		</div>
		<div class="content">
			<div v-for="(v,i) in cart">
				<ul>
					<li>
						<span @click="select(i)" :class="{checkbox:cart[i].checked==true}"></span><i>{{v.brand}}</i>
					</li>
					<li>
						<div class="con">
							<dl>
								<dt>{{v.title}}</dt>
								<dd><span :class="{checkbox:cart[i].checked==true}" @click="select(i)"></span></dd>
								<dd><img :src="v.src" alt="" ></dd>
								<dd>
									<p>{{v.color}}</p>
									<p>{{v.size}}</p>
									<p>{{v.from}}</p>
									<p class="number">
										<span @click="decrease(i)">-</span>
										<span>{{v.num}}</span>
										<span @click="add(i)">+</span>
									</p>
								</dd>
								<dd>
									<p>￥{{v.price}}</p>
									<span @click="del(i)"><img src="../assets/images/del.png" alt=""></span>
								</dd>
							</dl>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<footer>
			<ul>
				<li><span @click="selectall()" :class="{checkbox:all}"></span><i>全部</i></li>
				<li>总计：<b>￥{{allprice}}</b>  (不含运费)</li>
				<li>去结算({{allnum}})</li>
			</ul>
		</footer>
	</main>
</template>
<script>
	export	default{
		data(){
			return{
				i:false,
				i1:false,
        cart:[],
        brand:'',
        title:'',
        src:'',
        color:'',
        size:'',
        from:'',
        price:'',
        num:'',
        all:false,
        allnum:0,
        allprice:0
			}
		},
		methods:{
			back(){
				history.go(-1)
			},
			add(i){
        this.cart[i].num++
        this.addPrice()
			},
			decrease(i){
        if(this.cart[i].num>1){
          this.cart[i].num--
          this.addPrice()
        }

			},
			select(i){
        this.cart[i].checked=!this.cart[i].checked
        if(this.cart[0].checked&&this.cart[1].checked){
          this.all=true
          this.addPrice()
        }else{
          this.all=false
          this.addPrice()
        }
			},
      selectall(){
        this.all=!this.all;
        if(this.all){
          for(let i=0;i<this.cart.length;i++){
            this.cart[i].checked=true
            this.addPrice()
          }
        }else{
          for(let i=0;i<this.cart.length;i++){
            this.cart[i].checked=false
            this.addPrice()
          }
        }
      },
      addPrice(){
        this.allnum=0;
        this.allprice=0;
        for(let i=0;i<this.cart.length;i++){
          if(this.cart[i].checked){
            this.allnum += this.cart[i].num;
            this.allprice += this.cart[i].price*this.cart[i].num
          }
        }
      },
      del(i){
        
      }
		},
    mounted(){
    	this.$http.get('./data/shoppingcart.json')
    		  .then((response)=>{
    		  console.log(response);
    		  console.log(this)
    		  this.cart=response.data.cart
    		  })
    		  .catch(function (error) {
    		  console.log(error);
    		  })
    		  .then(function () {
    		  // always executed
    	  });
    }
	}
</script>
<style scoped="">
	html{
		position: relative;
	}
	i{
		font-style: normal;
	}
	.checkbox{
		width: 20px;
		height: 20px;
		display: inline-block;
		border-radius: 50%;
		background: url(../assets/images/roundcheck-fill.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
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
	  background:#f8f8f8;
	}
	.back li{
	  float: left;
	  margin: 0px;
	  background:#f8f8f8;
	}
	.back li:nth-of-type(1){
	  width:15%;
	  text-align:left;
	}
	.back li:nth-of-type(1) h4{
	  width: 50%;
	  background:#f8f8f8;
	}
	.back li:nth-of-type(1) img{
	    width: 12px;
	    position:relative;
	    top:2px;
		background:#f8f8f8;
	}
	.back li:nth-of-type(2){
	  width:60%;
	  margin-top: 4px;
	  font-size: 1.2rem;
	  position:relative;
	}
	.back li:nth-of-type(2) h3{
		background:#f8f8f8;
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
		background:#f8f8f8;
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
	   background:#f8f8f8;
	}
	.content{
		margin-top: 42.5px;
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.content1{
		margin-top: 0px;
	}
	.content>div{
		width: 100%;
		text-align: center;
		font-size: .9rem;
	}
	.content>div img{
		width: 15%;
		padding-bottom: 5px;
	}
	.content ul{
		width: 100%;
		background-color: #eee;
		box-sizing: border-box;
		padding: 0  0 15px;
	}
	.content li:nth-of-type(1){
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		padding: 10px;

	}
	.content li:nth-of-type(1) span{
		width: 20px;
		height: 20px;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #ccc;
		float: left;
	}
	.content li:nth-of-type(1) i{
		padding-top: 4px;
		padding-left: 10px;
		float: left;
	}
	.content .con{
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		background-color: #f8f8f8;
	}
	.con dt{
		text-align: left;
		padding-left: 2rem;
		padding-bottom: 10px;
	}
	.con dl{
		overflow: hidden;
		width: 100%;
		position: relative;
	}
	.con dd{
		float: left;
	}
	.con dd:nth-of-type(1){
		width: 10%;
		padding-top: 40px;
	}
	.con dd:nth-of-type(1) span{
		width: 20px;
		height: 20px;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #ccc;
		float: left;
	}
	.con dd:nth-of-type(2){
		width: 36%;
	}
	.con dd:nth-of-type(2) img{
		width: 85%;
	}
	.con dd:nth-of-type(3){
		width: 35%;
		padding: 5px;
		text-align: left;
		color: #666;
		font-size: .8rem;
	}
	.con dd:nth-of-type(3) p{
		line-height: 1.5rem;
	}
	.con dd:nth-of-type(3) .number{
		width: 85px;
		box-sizing: border-box;
		border: 1px solid #ccc;
	}
	.number span:nth-of-type(1){
		border-right: 1px solid #ccc;
	}
	.number span:nth-of-type(2){
		border-right: 1px solid #ccc;
	}
	.number span{
		text-align: center;
		width: 25px;
		height: 25px;
		display: inline-block;
		box-sizing: border-box;
	}
	.con dd:nth-of-type(4){
		width: 14%;

	}
	.con dd:nth-of-type(4) img{
		width: 6%;
		position: absolute;
		right: 20px;
		bottom: 10px;
	}
	.con dd:nth-of-type(4) span{

	}
	footer{
		width: 100%;
		background-color: #eee;
		position: fixed;
		bottom: 0px;
		left: 0px;
		z-index: 15;
	}
	footer ul{
		overflow: hidden;
	}
	footer ul li{
		float: left;
	}
	footer li:nth-of-type(1){
		width: 20%;
		line-height: 50px;
		position: relative;
	}
	footer li:nth-of-type(1) span{
		width: 20px;
		height: 20px;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #999;
		position: absolute;
		top:15px;
		left:10px;
	}
	footer li:nth-of-type(1) i{
		padding-top: 3px;
		padding-left: 35px;
		float: left;
    font-size:.9rem;
	}
	footer li:nth-of-type(2){
		width: 50%;
		font-size: .9rem;
		text-align: right;
		line-height: 50px;
	}
	footer li:nth-of-type(2) b{
		color: red;
	}
	footer li:nth-of-type(3){
		width: 25%;
		line-height: 50px;
		background-color: red;
		color: #fff;
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
