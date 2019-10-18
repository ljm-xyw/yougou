<template>
	<main>
		<div class="back">
		  <ul>
		    <li><h4 @click="back()"><img src="../assets/images/new-back.png" alt=""></h4></li>
		    <li><h3>商品详情</h3></li>
		    <li><img src="../assets/images/ico-menu.png" alt=""></li>
		  </ul>
		</div>
		<div class="swiperbanner">
			<swiper :options="swiperOption">
				<swiper-slide><img src="../assets/images/pro1.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../assets/images/pro2.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../assets/images/pro3.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../assets/images/pro4.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../assets/images/pro5.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../assets/images/pro6.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../assets/images/pro7.jpg" alt=""></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			  </swiper>
		</div>
		<div class="mesg">
			<dl>
				<dt>Belle/百丽商场同款牛皮革女短靴马丁靴（黑里单）T1W1DDD8</dt>
				<span>百丽</span><br>
				<dd>￥562</dd>
				<dd><del>￥835</del></dd>
				<dd>可用优惠卷</dd>
			</dl>
			<ul class="mes">
				<li><i>已选</i>&nbsp;&nbsp;黑色(里单) /尺码</li>
				<li><img src="../assets/images/baili.jpg" alt=""><span>百丽</span><br><span>百丽优购</span></li>
				<li>喜欢此商品的人还买了</li>
			</ul>
			<div class="likes">
				<ul>
					<li v-for="(v,i) in pro1">
						<img :src="v.src" alt="">
						<p>Belle/百丽冬...</p>
						<p>{{v.price}}</p>
					</li>
				</ul>
			</div>
		</div>

		<div class="connect">
			<h3><img src="../assets/images/service.png" alt="">联系客服</h3>
			<ul class="title">
				<li v-for="(v,index) in title" @click="change(index)" :class="{bodercolor:index==num}">{{v}}</li>
			</ul>
		</div>

    <div class="more" v-show="num==0">
    	<dl>
        <dt>商品参数</dt>
        <dd>
          <ul class="pro_list">
              <li>商品编号：101050940</li>
              <li>内增高：无</li>
              <li>鞋跟形状：方跟</li>
              <li>36码鞋长参考(女)：24CM</li>
              <li>制作工艺：胶贴皮鞋</li>
              <li>鞋底材质：橡胶底</li>
          </ul>
          <transition name="die">
            <ul class="pro_list" v-show="isActive">
                <li>靴筒内里材质：无内里</li>
                <li>面料图案：纯色</li>
                <li>色系：黑色</li>
                <li>流行元素：纯色</li>
                <li>鞋头：圆头</li>
                <li>款式：马丁靴</li>
                <li>靴筒筒面材质：牛皮革</li>
                <li>闭合方式：系带</li>
                <li>前掌高度：1.5CM</li>
                <li>配跟：无</li>
                <li>鞋垫材质：头层猪皮革</li>
                <li>鞋跟：3CM</li>
                <li>鞋面材质：牛皮革</li>
                <li>性别：女子</li>
                <li>36码鞋宽参考(女)：9CM</li>
                <li>皮质特征：软面皮</li>
                <li>筒高数值：12CM</li>
                <li>季节：冬季</li>
                <li>里料材质：猪皮革</li>
                <li>防水台高度：无</li>
                <li>风格：休闲</li>
                <li>靴筒口围：22CM</li>
            </ul>
          </transition>
          <input @click="isActive = !isActive" type="button" value="展开/折叠" id="sexshare">

        </dd>
      </dl>

      <dl>
        <dt>尺码对照表</dt>
        <dd>
          <table class="pro_tb">
          	<thead>
          		<tr></tr>
          	</thead>
          	<tbody>
          			<tr>
          				<td class="td">法国码</td>
          					<td>32</td>
          					<td>33</td>
          					<td>34</td>
          					<td>35</td>
          					<td>36</td>
          					<td>37</td>
          					<td>38</td>
          					<td>39</td>
          					<td>40</td>
          					<td>41</td>
          					<td>42</td>
          			</tr>
          			<tr>
          				<td class="td">国际码</td>
          					<td>210</td>
          					<td>215</td>
          					<td>220</td>
          					<td>225</td>
          					<td>230</td>
          					<td>235</td>
          					<td>240</td>
          					<td>245</td>
          					<td>250</td>
          					<td>255</td>
          					<td>260</td>
          			</tr>
          	</tbody>
          </table>
        </dd>
      </dl>

      <dl class="pictxt">
        <dt>图文详情</dt>
        <dd>
          <ul>
            <li class="brand">
              <div>
                <span>￥562</span><br>
                <del>￥835</del>
              </div>
              <p>即销售价或因开展不同的优惠活动而设定的即时售价。</p>
              <p>品牌商建议零售价或牌价。</p>
            </li>
            <li><img src="../../data/images/promore1.jpg" alt=""></li>
            <li><img src="../../data/images/promore2.jpg" alt=""></li>
            <li><img src="../../data/images/promore3.jpg" alt=""></li>
            <li><img src="../../data/images/promore4.jpg" alt=""></li>
            <li><img src="../../data/images/promore5.jpg" alt=""></li>
            <li><img src="../../data/images/promore6.jpg" alt=""></li>
            <li><img src="../../data/images/promore7.jpg" alt=""></li>
            <li><img src="../../data/images/promore8.jpg" alt=""></li>
            <li><img src="../../data/images/promore9.jpg" alt=""></li>
            <li><img src="../../data/images/promore10.jpg" alt=""></li>
            <li><img src="../../data/images/promore11.jpg" alt=""></li>
            <li><img src="../../data/images/promore12.jpg" alt=""></li>
            <li><img src="../../data/images/promore13.jpg" alt=""></li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="comment" v-show="num==1">
        <ul>
          <li>
            <div>
              <img src="../assets/images/star-gray.png" alt="">
              <img src="../assets/images/star-gray.png" alt="">
              <img src="../assets/images/star-gray.png" alt="">
              <img src="../assets/images/star-gray.png" alt="">
              <img src="../assets/images/star-gray.png" alt="">
            </div>
            <span>0.0分</span>
            </li>
          <li>
            <span>全部</span>
            <span>晒单(0)</span>
          </li>
        </ul>
        暂无评论
    </div>
    <div class="others" v-show="num==2">
    	<ul>
    		<li v-for="(v,i) in others">
    			<img :src="v.src" alt="">
    			<p>Belle/百丽冬...</p>
    			<p>{{v.price}}</p>
    		</li>
    	</ul>
    </div>

	<div class="backtop">
	  <img src="../../data/images/top.png" alt="">
	</div>
	<footer>
		<ul>
			<li><img src="../assets/images/like.png" alt=""><br>收藏</li>
			<li><router-link to="/shoppingcart"><img src="../assets/images/car1.png" alt=""><br>购物车</router-link></li>
			<li @click="addcar()">加入购物车</li>
			<li @click="buypro()">立即购买</li>
		</ul>
	</footer>
	<div class="shadow" v-show="joincar">
    <div class="addcar">
		<img class="close" @click="close()" src="../assets/images/close1.png" alt="">
        <ul>
          <li class="type">
            <div v-for="(v,i) in img"><img :src="v.src" v-show="i==n" alt=""></div>
            <div>
              <p>￥548</p>
              <p v-for="(v,i) in list" v-show="i==n">{{v}}/尺码</p>
            </div>
          </li>
          <li class="colortype">
              <div>
                <dl>
                  <dt>颜色：</dt>
                  <dd v-for="(v,i) in img" :class="{option:i==n}" @click="option(i)"><img :src="v.src" alt=""></dd>
                </dl>
              </div>
          </li>
		  <li class="size">
			  <div>
                <dl>
                  <dt>尺码：</dt>
                  <dd v-for="(v,i) in opsize" :class="{sizecolor:i==sizenum}" @click="size(i)"><span>{{v}}</span></dd>
                </dl>
              </div>
		  </li>
          <li class="carfooter">
              <div>
                <ul>
                	<li><img src="../assets/images/like.png" alt=""><br>收藏</li>
                	<li><router-link to="/shoppingcart"><img src="../assets/images/car1.png" alt=""><br>购物车</router-link></li>
                	<li @click="openCenter()">确定</li>
                </ul>
              </div>
          </li>
        </ul>
    </div>
	</div>
	<div class="shadow" v-show="buy">
	<div class="addcar buy">
		<img class="close" @click="close1()" src="../assets/images/close1.png" alt="">
	    <ul>
	      <li class="type">
	        <div v-for="(v,i) in img"><img :src="v.src" v-show="i==n" alt=""></div>
	        <div>
	          <p>￥548</p>
	          <p v-for="(v,i) in list" v-show="i==n">{{v}}/尺码</p>
	        </div>
	      </li>
	      <li class="colortype">
	          <div>
	            <dl>
	              <dt>颜色：</dt>
	              <dd v-for="(v,i) in img" :class="{option:i==n}" @click="option(i)"><img :src="v.src" alt=""></dd>
	            </dl>
	          </div>
	      </li>
		  <li class="size">
			  <div>
	            <dl>
	              <dt>尺码：</dt>
	              <dd v-for="(v,i) in opsize" :class="{sizecolor:i==sizenum}" @click="size(i)"><span>{{v}}</span></dd>
	            </dl>
	          </div>
		  </li>
	      <li class="carfooter">
	          <div>
	            <ul>
	            	<li><img src="../assets/images/like.png" alt=""><br>收藏</li>
	            	<li><router-link to="/shoppingcart"><img src="../assets/images/car1.png" alt=""><br>购物车</router-link></li>
	            	<li class="sure"><router-link to="/my">确定</router-link></li>
	            </ul>
	          </div>
	      </li>
	    </ul>
	</div>
	</div>
	</main>
</template>

<script>
  import collapse from "../assets/js/collapse.js"
	export default {
		data() {
		  return {
			  pro1:'',
			  price:'',
			  title:['详情','评价','推荐'],
			  num:0,
			  n:0,
			  sizenum:0,
			  others:'',
			  isActive:false,
			  swiperOption: {
				  pagination: {
					 el: '.swiper-pagination'
				  }
			  },
			  joincar:false,
			  buy:false,
			  list:['黑单里','黑绒里'],
			  img:[
				  {
					 "src":"./data/images/pro1.jpg" 
				  },
				  {
					  "src":"./data/images/pro2.jpg"
				  }
			  ],
			  opsize:['33','34','35','36','37','38','39','40']	  
		  }
		},
		methods:{
			back(){
				history.go(-1)
			},
			change(index){
				this.num=index;
			},
			openCenter(){
				this.joincar=!this.joincar;
				this.$toast.center('加入购物车成功！');
			},
			addcar(){
				this.joincar=true;
			},
			buypro(){
				this.buy=true;
			},
			option(i){
				this.n=i;
			},
			size(i){
				this.sizenum=i;
			},
			close(){
				this.joincar=!this.joincar;
			},
			close1(){
				this.buy=!this.buy;
			}
		},
		mounted(){
			this.$http.get('./data/go.json')
				  .then((response)=>{
				  console.log(response);
				  console.log(this)
				  this.pro1=response.data.pro1
				  this.others=response.data.others
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
	i{
		font-style: normal;
	}
	.bodercolor{
		border-bottom: 1px solid red;
	}
	html{
		position: relative;
	}
	.back{
	  width:100%;
	  box-sizing:border-box;
	  padding:8px;
	  position:absolute;
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
	.back li:nth-of-type(2) h3{
		font-weight: normal;
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
	.swiperbanner{
		margin-top: 42.5px;
		box-sizing: border-box;
		padding: 0 70px 15px;
	}
	.swiper-slide{
		height: 0px;
		padding-bottom: 100%;

	}
	.swiperbanner img{
		width:100%;
	}
	.mesg{
		width: 100%;
	}
	.mesg dt{
		width: 100%;
		text-align: left;
		font-size: .9rem;
		padding: 0 0px 5px;
		box-sizing: border-box;
		padding: 0 10px;
	}
	.mesg dl span{
		display: inline-block;
		text-align: left;
		width: 100%;
		font-size:.8rem ;
		color: red;
    box-sizing:border-box;
		padding:5px 0 10px 10px;
	}
	.mesg dl{
		overflow: hidden;
	}
	.mesg dd{
		float: left;
		padding: 0 0px 10px;
		border-bottom: 1px solid #ccc;
	}
	.mesg dd:nth-of-type(1){
		width: 20%;
		text-align: left;
		font-size: 1.3rem;
		color: red;
		box-sizing: border-box;
		padding-left: 5px;
	}
	.mesg dd:nth-of-type(2){
		width: 50%;
		text-align: left;
		font-size: .9rem;
		line-height: 20px;
	}
	.mesg dd:nth-of-type(3){
		width: 30%;
		text-align: right;
		font-size: .9rem;
		line-height: 20px;
		padding-right: 10px;
		box-sizing: border-box;
	}
	.mesg .mes{
		overflow: hidden;
	}
	.mes li{
		width: 100%;
		padding: 10px 0;
		text-align: left;
		padding-left: 10px;
		background: url(../assets/images/open.png);
		background-repeat: no-repeat;
		background-size: 3% 30%;
		background-position: 94% 50%;
	}
	.mes li:nth-of-type(1){
		border-bottom: 3px solid #ccc;
		font-size: .9rem;
	}
	.mes li:nth-of-type(2){
		border-bottom: 1px solid #ccc;
		font-size: .7rem;
		background-size: 3% 25%;
	}
	.mes li:nth-of-type(2) img{
		width: 15%;
		padding-right: 5px;
		float: left;
	}
	.mes li:nth-of-type(3){
		border-bottom: 1px solid #ccc;
		font-size: .9rem;
	}
	.likes{
		width: 100%;
		/* background-color: #eee; */
		box-sizing: border-box;
		/* padding: 5px; */
	}
	.likes ul{
		overflow: hidden;
	}
	.likes li{
		float: left;
		width: 33.33333%;
		padding: 5px;
		box-sizing: border-box;
		border: 3px solid #eee;
		/* background-color: #fff; */
		font-size: .9rem;
	}
	.likes li img{
		width: 100%;
		border: 1px solid #ccc;
	}
	.likes li p{
		padding: 2px 0;
	}
	.likes li p:nth-of-type(2){
		text-align: left;
		color: red;
	}
	.connect h3{
		width: 100%;
    box-sizing:border-box;
		padding: 10px 0 10px 10px;
		text-align: left;
		font-weight: normal;
		/* border-top: 3px solid #ccc; */
		border-bottom: 3px solid #ccc;
		background: url(../assets/images/open.png);
		background-repeat: no-repeat;
		background-size: 3% 30%;
		background-position: 92% 50%;
	}
	.connect h3 img{
		width: 5%;
		padding-right: 5px;
	}
	.connect .title{
		overflow: hidden;
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	.connect li{
		float: left;
		padding: 10px 0;
		width: 33.3333%;
		box-sizing: border-box;
		border-right: 1px solid #ccc;
	}
  .connect li:nth-of-type(3){
  	border-right: none;
  }
  .more dt{
    width:100%;
    box-sizing:border-box;
    padding:10px;
    background:url(../assets/images/tibg.jpg);
    text-align:left;
    font-size: 1rem;
  }
  .pro_list{
    overflow:hidden;
  }
  .pro_list li{
    float:left;
    width:50%;
    box-sizing:border-box;
    padding:2px 10px;
    font-size:.7rem;
    border-right: none;
    text-align:left;
    color:#666;
  }

  #sexshare{
    display:inline-block;
    width:100%;
    box-sizing:border-box;
    padding:10px;
    text-align:center;
    border:none;
    background-color:#fff;
    color:red;
    padding-bottom:20px;
  }
  .more{
    box-sizing:border-box;
    padding-bottom:50px;
  }
  .more dl:nth-of-type(2) dd{
    width:100%;
    background-color:#fff;
    box-sizing:border-box;
    padding:10px;
    color:#999;
    font-size:.7rem;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .more .pro_tb td{
    padding:  5px 4px;
   line-height:47px;
    border: 1px solid #ddd;
    padding-top:8px;
  }
  .more .pictxt{
    width:100%;
  }
  .more .pictxt li{
    width:100%;
  }
  .pictxt li img{
    width:100%;
  }
  .pictxt .brand div{
    box-sizing:border-box;
    padding:10px;
    float:left;
    font-size:.8rem;
  }
  .pictxt .brand span{
    color:red;
    font-size:1.2rem;
    display:inline-block;
    padding-bottom:5px;
  }
  .pictxt .brand p{
    text-align:left;
    font-size:.9rem;
    padding:2px 10px 2px 2px;
  }
  .comment{
    width:100%;
    box-sizing:border-box;
    padding-bottom:100px;
    background-color:#eee;
    color:#666;
  }
  .comment li{
    width:100%;
    box-sizing:border-box;
    padding:15px 10px;
    border-bottom:5px solid #eee;
    background-color:#fff;
  }
  .comment li:nth-of-type(1) div{
     width:80%;
     display:inline-block;
     text-align:left;
  }
  .comment li:nth-of-type(1) span{
    width:15%;
    line-height:29px;
    font-size:1.2rem;
    display:inline-block;
    text-align:right;
  }
  .comment li:nth-of-type(2){
    text-align:left;
    margin-bottom:10px;
  }
  .comment li:nth-of-type(2) span{
    width:90px;
    height:27px;
    line-height:27px;
    display:inline-block;
    border:1px solid red;
    border-radius:5px;
    text-align:center;
    color:red;
  }
  .comment li:nth-of-type(2) span:nth-of-type(2){
    border:1px solid #ccc;
    color:#666;
  }
  .others{
    width:100%;
    box-sizing:border-box;
    padding-bottom:80px;
    background-color:#eee;
  }
  .others ul{
    overflow:hidden;
    padding:2px;
  }
  .others li{
  	float: left;
  	width: 33.33333%;
  	padding: 5px;
  	box-sizing: border-box;
  	border: 3px solid #fff;
  	background-color: #eee;
  	font-size: .9rem;
  }
  .others li img{
  	width: 100%;
  	border: 1px solid #ccc;
  }
  .others li p{
  	padding: 2px 0;
  }
  .others li p:nth-of-type(2){
  	text-align: left;
  	color: red;
  }
	.backtop{
	  position:fixed;
	  right:1rem;
	  bottom:4rem;
	  width:2rem;
	  height:2rem;
	  border-radius:50%;
	  background-color:rgba(0,0,0,0.3);
	  z-index:2;
	}
	.backtop img{
	  position:absolute;
	  top:50%;
	  margin-top:-8px;
	  margin-right:-8px;
	  right:50%;
	  width:50%;
	}
	footer{
		width: 100%;
		position: fixed;
		bottom: 0px;
		left: 0px;
		z-index: 16;
		background-color:#fff;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	footer ul{
		overflow: hidden;
	}
	footer li{
		float: left;
	}
	footer li:nth-of-type(1){
		width: 15%;
		font-size:.8rem;
		box-sizing: border-box;
		padding: 10px 0;
	}
	footer li:nth-of-type(2){
		width: 15%;
		font-size:.8rem;
		box-sizing: border-box;
		padding: 10px 0;
	}
    footer li:nth-of-type(2) a{
		text-decoration:none;
		color:#2c3e50;
    }
	footer li:nth-of-type(3){
		width: 35%;
		line-height:45.77px;
		padding-top:5px;
		background-color:#ffbc00;
		color:#fff;
	}
	footer li:nth-of-type(4){
		width: 35%;
		padding-top:5px;
		line-height:45.77px;
		color:#fff;
		background-color:#ff3300;
	}
	footer li img{
		width: 25%;
	}
	.addcar{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 17;
		width: 100%;
		background-color: rgba(255,255,255,1);
		border-top: 1px solid #eee;
	}
	.shadow{
		width: 100vw;
		height: 100vh;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 16;
		background-color: rgba(0,0,0,0.5);
	}
	.addcar .type{
		width: 100%;
		border-bottom: 1px solid #eee;
		overflow: hidden;
		box-sizing: border-box;
		padding-bottom: 30px;
	}
	.addcar .type div{
		float: left;
	}
	.addcar .type div{
		width: 35%;
		background-color: #fff;
	}
	.addcar .type div:nth-of-type(3){
		width: 62%;
		text-align: left;
		float: right;
		box-sizing: border-box;
		padding: 10px;
		
	}
	.addcar .close{
		border:none;
		width: 26px;
		height: 57px;
		display: inline-block;
		position: absolute;
		top: -40px;
		right: 10px;
	}
	.addcar .type img{
		width: 108px;
		height: 108px;
		display: inline-block;
		position: absolute;
		top: -20px;
		left: 15px;
		border: 1px solid #bbb;
		box-sizing: border-box;
		border-radius: 5px;
	}
	.addcar .type p{
		font-size: 0.8rem;
	}
	.addcar .type p:nth-of-type(1){
		color: red;
		font-size: 1.1rem;
		line-height: 2rem;
	}
	
	.addcar .colortype{
		width: 100%;
		border-bottom: 1px solid #eee;
		overflow: hidden;
		box-sizing: border-box;
		padding: 15px;
	}
	.addcar .colortype dt{
		width: 100%;
		text-align: left;
		font-size: 0.8rem;
	}
	.addcar .colortype dd{
		width: 35px;
		height: 35px;
		display: inline-block;
		float: left;
		margin: 10px 15px 0 0;
		
	}
	.addcar .colortype img{
		width: 100%;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}
	.option{
		border:1px solid red;
		box-sizing: border-box;
	}
	.addcar .size{
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		padding: 20px 15px 120px;
	}
	.size dt{
		width: 100%;
		text-align: left;
		font-size: .8rem;
	}
	.size dd{
		width: 10%;
		float: left;
		margin: 10px 5px 10px 0;
		font-size: .7rem;	
	}
	.sizecolor{
		border:1px solid red;
		box-sizing: border-box;
	}
	.size dd span{
		display: inline-block;
		width: 100%;
		height: 100%;
		padding: 5px 8px;
		border:1px solid #ccc;
		box-sizing: border-box;
	}
	.carfooter{
		width: 100%;
	}
	.carfooter ul{
		overflow: hidden;
	}
	.carfooter li{
		float: left;
	}
	.carfooter li:nth-of-type(1){
		width: 20%;
		font-size:.8rem;
		box-sizing: border-box;
		padding: 5px 0;
	}
	.carfooter li:nth-of-type(2){
		width: 20%;
		font-size:.8rem;
		box-sizing: border-box;
		padding: 5px 0;
	}
	.carfooter li:nth-of-type(2) a{
		text-decoration:none;
		color:#2c3e50;
	}
	.carfooter li:nth-of-type(3){
		width: 60%;
		line-height:41px;
		padding-top:5px;
		background: #ff3300;
		color:#fff;
	}
	.carfooter li img{
		width: 30%;
	}
	.buy .sure a{
		color: #fff;
		text-decoration: none;
	}
</style>
