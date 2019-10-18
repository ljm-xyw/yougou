<template>
  <main class="main">
    <div :class="top==true?'topfixed':'top'">
      <ul>
        <li><h1><img src="../assets/images/logo.png"></h1></li>
        <li>
         <router-link to="/search">
            <input type="text"><span><img src="../../data/images/search-gray.png"></span>
          </router-link>
          </li>
        <li>
          <router-link to="/news">
            <img src="../../data/images/information-small.png"><br>消息
          </router-link>
        </li>
      </ul>
    </div>
      <swiper :options="swiperOption" class="banner">
        <swiper-slide><img src="../../data/images/banner1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../data/images/banner2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../data/images/banner3.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination a" slot="pagination"></div>
      </swiper>
      <div class="vip">
       <ul>
          <li><router-link to="/signin"><img src="../assets/images/qiandao.png"></router-link></li>
          <li><router-link to="/coupon"><img src="../assets/images/lingjuan.png"></router-link></li>
          <li><router-link to="/my"><img src="../assets/images/vip.png"></router-link></li>
          <li><img src="../assets/images/dingzhi.png"></li>
        </ul>
      </div>
      <div class="gif">
       <ul>
          <li><router-link to="/go"><img src="../../data/images/1568969671209.gif"></router-link></li>
          <li><router-link to="/go"><img src="../../data/images/1568969680567.jpg"></router-link></li>
          <li><router-link to="/go"><img src="../../data/images/1568969690641.jpg"></router-link></li>
          <li><router-link to="/go"><img src="../../data/images/1568969698473.jpg"></router-link></li>
        </ul>
      </div>
      <div class="section">
        <ul>
          <li><router-link to="/go"><img src="../../data/images/1568969611445.jpg"></router-link></li>
          <li><router-link to="/go"><img src="../../data/images/1568969621326.jpg"></router-link></li>
          <li><router-link to="/go"><img src="../../data/images/1568969631657.jpg"></router-link></li>
        </ul>
      </div>
      <div class="hotsort">
        <h4>热门分类</h4>
        <ul>
          <li><img src="../../data/images/1568599199800.jpg"></li>
          <li><img src="../../data/images/1568599208206.jpg"></li>
          <li><img src="../../data/images/1568599215890.jpg"></li>
          <li><img src="../../data/images/1568599229435.jpg"></li>
          <li><img src="../../data/images/1568599343367.jpg"></li>
          <li><img src="../../data/images/1568599351453.jpg"></li>
          <li><img src="../../data/images/1568599360680.jpg"></li>
          <li><img src="../../data/images/1568599368269.jpg"></li>
        </ul>
      </div>
      <div class="plus">
        <ul>
          <li><img src="../../data/images/1565163533784.jpg"></li>
          <li>|</li>
          <li>PLUS会员特权变动通知</li>
        </ul>
      </div>
      <div class="brand">
        <ul>
          <li><img src="../../data/images/1537253123662.png"></li>
          <li><img src="../../data/images/1537253140328.png"></li>
          <li><img src="../../data/images/1537253162890.png"></li>
          <li><img src="../../data/images/1537253177953.png"></li>
          <li><img src="../../data/images/1537253203264.png"></li>
          <li><img src="../../data/images/1537253220254.png"></li>
          <li><img src="../../data/images/1537253238961.png"></li>
          <li><img src="../../data/images/1537253257853.png"></li>
          <li><img src="../../data/images/1537253273217.png"></li>
          <li><img src="../../data/images/1537253289009.png"></li>
        </ul>
      </div>
      <img src="../../data/images/1540553916542.jpg" class="t">
      <div class="limit">
        <div class="limited">
          <h4><img src="../../data/images/1540552313348.jpg"></h4>
          <div class="limleft"><img src="../../data/images/1545122987899.jpg"></div>
          <div class="limright">
            <h5>爆款限时秒杀：</h5>
            <ul>
              <li>
                <p class="txtcolor">鞋靴特卖</p>
                <p>爆款秒杀</p>
                <p>GO></p>
              </li>
              <li>
                <p class="txtcolor">运动休闲</p>
                <p>好货限量</p>
                <p>GO></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="activity">
        <img src="../../data/images/1539570608208.jpg">
        <div class="act">
          <swiper :options="swiperOption0">
            <swiper-slide v-for="(v,i) in list2"><img :src="v.img"></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="brablock">
          <img src="../../data/images/1537254187391.jpg">
          <div class="block">
            <ul>
              <li v-for="(v,i) in list0">
                <div>
                  <img :src="v.images">
                </div>
                <swiper :options="swiperOption1" class="swiper">
                  <swiper-slide v-for="(item,index) in v.block">
                    <div>
                      <span>{{item.span}}</span>
                      <img :src="item.src">
                      <p class="p"><u>{{item.price}}</u>&nbsp;<del>{{item.oprice}}</del></p>
                    </div>

                    </swiper-slide>
                  <swiper-slide class="slide">
                    <div class="more">
                      <p>查看更多</p>
                      <p>MORE+</p>
                    </div>
                  </swiper-slide>
                </swiper>
                <img src="../../data/images/1540553916542.jpg" class="t1">
              </li>
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

      <div class="backtop" v-if="flag" @click="backTop()">
        <img src="../../data/images/top.png" alt="">
      </div>

  </main>
</template>

<script>
   export default {
      data() {
        return {
          list0:'',
          list1:'',
          list2:'',
          span:'',
          flag:'',
					top:'',
          swiperOption: {
            spaceBetween: 30,
            centeredSlides: true,
            loop : true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          },
          swiperOption0:{
            slidesPerView: 2.5,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          },
          swiperOption1:{
            slidesPerView: 3.8,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          }
        }
      },
      mounted(){
        this.$http.get('./data/indexlist.json')
        .then((response)=>{
        console.log(response);
        console.log(this)
        this.list0=response.data.pros0,
        this.list2=response.data.pros2
        // this.list1=response.data.pros0
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        // always executed
        });
				// 事件监听滚动条
        window.addEventListener('scroll', this.scrollToTop)
				window.addEventListener('scroll', this.watchScroll)
      },
      destroyed(){
        window.removeEventListener('scroll', this.scrollToTop)
				window.removeEventListener('scroll', this.watchScroll)
      },
      methods:{
				watchScroll(){
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					//  当滚动超过 50 时，实现吸顶效果
					if (scrollTop > 40) {
						this.top = true
					} else {
						this.top = false
					}
				},
        backTop () {
              const that = this
              let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                  clearInterval(timer)
                }
              }, 16)
          },

          // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
          scrollToTop () {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 60) {
              that.flag = true
            } else {
              that.flag = false
            }
        }
    },
  }
</script>

<style scoped>
  .mian{
    position: relative;
		overflow: hidden;
  }
  .top{
    box-sizing: border-box;
    padding: 8px 10px 4px;
    width: 100%;
		height: 50px;;
    position: absolute;
    z-index: 2;
  }
	.topfixed{
		box-sizing: border-box;
		padding: 8px 10px 4px;
		width: 100%;
		position: fixed;
		top:0px;
		left:0px;
		background-color: red;
		z-index: 2;
	}
  .top ul{
    overflow: hidden;
  }
	.topfixed ul{
		overflow: hidden;
	}
  .top li{
    float: left;
    margin: 0px;
  }
	.topfixed li{
	  float: left;
	  margin: 0px;
	}
  .top li:nth-of-type(1){
    width: 16%;
		text-align: left;
  }
	.topfixed li:nth-of-type(1){
	  width: 16%;
		text-align: left;
	}
  .top li:nth-of-type(1) img{
    width: 50px;
  }
	.topfixed li:nth-of-type(1) img{
	  width: 50px;
	}
  .top li:nth-of-type(2){
    width: 74%;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
  }
	.topfixed li:nth-of-type(2){
	  width: 74%;
	  overflow: hidden;
	  position: relative;
	  border-radius: 8px;
	}
  .top input{
    width: 100%;
    outline: none;
    height: 27px;
    padding-left: 5px;
    border: none;
  }
	.topfixed input{
	  width: 100%;
	  outline: none;
	  height: 27px;
	  padding-left: 5px;
	  border: none;
	}
  .top span img{
    width: 15px;
    height: 15px;
    font-size: 12px;
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 3;
  }
	.topfixed span img{
	  width: 15px;
	  height: 15px;
	  font-size: 12px;
	  position: absolute;
	  left: 5px;
	  top: 5px;
	  z-index: 3;
	}
  .top li:nth-of-type(3){
    width: 10%;
  }
	.topfixed li:nth-of-type(3){
	  width: 10%;
	}
  .top li:nth-of-type(3) a{
    color: #FFFFFF;
    font-size: 12px;
    text-decoration: none;
  }
	.topfixed li:nth-of-type(3) a{
	  color: #FFFFFF;
	  font-size: 12px;
	  text-decoration: none;
	}
  .top li:nth-of-type(3) img{
    width: 15px;
    height: 15px;
    display: inline-block;
  }
	.topfixed li:nth-of-type(3) img{
	  width: 15px;
	  height: 15px;
	  display: inline-block;
	}
  .banner .swiper-slide{
    height:0px;
    padding-bottom:82.81%;
  }
  .banner img{
    width:100%;
  }
  .swiper-pagination{
    --swiper-pagination-color: red;
  }
  .vip{
    width: 100%;
  }
  .vip ul{
    overflow: hidden;
  }
  .vip li{
    float: left;
    margin: 0px;
    width: 25%;
    text-align: center;
  }
  .vip li img{
    width: 100%;
  }
  .gif{
    width: 100%;
  }
  .gif ul{
    overflow: hidden;
  }
  .gif li{
    float: left;
    margin: 0px;
    width: 25%;
    text-align: center;
  }
  .gif li img{
    width: 100%;
  }
  .section{
    width: 100%;
  }
  .section ul{
    overflow: hidden;
  }
  .section li{
    float: left;
    margin: 0px;
    width: 33.33%;
    text-align: center;
  }
  .section li img{
    width: 100%;
  }
  .hotsort{
    width: 100%;
  }
  .hotsort h4{
    text-align: left;
    padding: 0 15px;
  }
  .hotsort ul{
    overflow: hidden;
  }
  .hotsort li{
    float: left;
    margin: 0px;
    width: 25%;
    text-align: center;
  }
  .hotsort li img{
    width: 100%;
  }
  .plus{
    width: 100%;
    box-sizing:border-box;
    padding:0px 15px;
  }
  .plus ul{
    overflow:hidden;
  }
  .plus li{
    float:left;
    margin:0px;
  }
  .plus li:nth-of-type(1){
    display: inline-block;
    width: 20%;
  }
  .plus img{
    width: 100%;
  }
  .plus li:nth-of-type(2){
    width:5%;
    color:#666;
    text-align:center;
  }
  .plus li:nth-of-type(3){
    text-align:left;
    width: 70%;
  }
  .plus li:nth-of-type(3) a{
    color:#666;
    font-size:14px;
    text-decoration:none;
  }
  .brand{
    width: 100%;
  }
  .brand ul{
    overflow: hidden;
  }
  .brand li{
    float: left;
    margin: 0px;
    width: 20%;
    text-align: center;
  }
  .brand li img{
    width: 100%;
  }
  .t{
    width:100%;
  }
  .limit{
    width:100%;
    box-sizing:border-box;
    padding:0 5px;
    margin-top:-4px;
    border:5px solid #f6f6f6;
  }
  .limited{
    width:100%;
    margin:0px 5px;
    padding-bottom:20px;
    background-color:#fff;
    overflow:hidden;
    border-radius:2px;
  }
  .limited img{
    width:100%;
  }
  .limited>div{
    float:left;
  }
  .limleft{
    width:47%;
    margin:5px 0px 0px;
  }
  .limleft img{
    width:100%;
  }
  .limright{
    width:49%;
    text-align:left;
  }
  .limright h5{
    padding-top:5px;
    padding-left:10px;
    color:#666;
    font-size:12px;
  }
  .limright li{
    width:98%;
    padding-top: 10px;
    margin-left:10px;
  }
  .limright li p{
    font-size:12px;
    line-height:22px;
  }
  .limright li:nth-of-type(1) .txtcolor{
    font-size:16px;
    color:#9446FF;
  }
  .limright li:nth-of-type(2) .txtcolor{
    font-size:16px;
    color:#FF4664;
  }
  .limright li:nth-of-type(1){
    background:url(../../data/images/101193953_01_mb.jpg) no-repeat 100%;
    background-size:50%;
    border-bottom:1px solid #ccc;
    background-position: 80px -20px;
    padding-bottom:10px;
  }
  .limright li:nth-of-type(2){
    background:url(../../data/images/101226466_01_mb.jpg) no-repeat 100%;
    background-size:50%;
    background-position: 80px 5px;
    padding-top:15px;
  }
  .activity{
    width:100%;
    box-sizing:border-box;
    border:5px solid #f6f6f6;
  }
  .act{
    box-sizing:border-box;
    padding:5px 10px 25px;
  }
  .activity img{
    width:100%;
  }
  .brablock{
    width:100%;
    overflow:hidden;
    box-sizing:border-box;
    border:5px solid #f6f6f6;
  }
  .block li{
    box-sizing:border-box;
    padding:5px 10px 15px;
    position:relative;
  }
  .block li .swiper{
    padding-top:10px;
    padding-bottom:20px;
    position:relative;
  }
  .brablock img{
    width:100%;
  }
  .brablock .t1{
       display: inline-block;
       width: 100%;
       height:6px;
       left: 0%;
       position: absolute;
  }
  .block .swiper-slide img{
    width:94px;
    height:94px;
    padding-bottom:5px;
  }
  .block .p{
    padding-left:.4rem;
  }
  .block span{
    position:absolute;
    right:-1.3rem;
    top:-.2rem;
    text-align:center;
    font-size:.10rem;
    color:#FFFFFF;
    background-color: #ff4664;
  }
  .block u{
    text-decoration:none;
    color:#333;
    font-size:.7rem;
  }
  .block del{
    color:#999;
    font-size:.7rem;
  }
  .more{
    padding-top:3rem;
    font-size:.6rem;
  }
  .footer{
    background: #f8f8f8;
    border:1px solid #ddd;
    padding-bottom:80px;
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
  .backtop{
    position:fixed;
    right:1rem;
    bottom:5rem;
    width:3rem;
    height:3rem;
    border-radius:50%;
    background-color:rgba(0,0,0,0.8);
    z-index:2;
  }
  .backtop img{
    position:absolute;
    top:50%;
    margin-top:-13px;
    margin-right:-12px;
    right:50%;
    width:50%;
  }

</style>
