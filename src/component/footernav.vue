<template>
	<main>
   <!-- <router-view></router-view> -->
   <router-view></router-view>
		<ul class="fv">
			<li>
				<router-link to="/index"><img src="../assets/images/toolbar_home_selected.png" alt=""><br>首页</router-link>
			</li>
			<li>
				<router-link to="/sort"><img src="../assets/images/toolbar_categories_normal.png" alt=""><br>分类</router-link>
			</li>
			<li>
				<router-link to="/find"><img src="../assets/images/toolbar_discover_normal.png" alt=""><br>发现</router-link>
			</li>
			<li>
				<router-link to="/shoppingcart"><img src="../assets/images/toolbar_shopcar_normal.png" alt=""><br>购物车</router-link>
			</li>
			<li>
				<router-link to="/my"><img src="../assets/images/toolbar_personal_normal.png" alt=""><br>我的</router-link>
			</li>
		</ul>
	</main>
</template>
<script></script>
<style scoped>
  .fv>li .router-link-exact-active{
    color: #ff4664;
  }
  body,html{
    width:100%;
  }
  .fv{
   position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    overflow: hidden;
    margin:0px;
    border-top:1px solid #ccc;
    background-color: #FFFFFF;
    z-index:500;
  }
  .fv>li{
    width:20%;
    float:left;
    list-style:none;
    text-align:center;
    cursor:pointer;
    margin:0px;
    font-size:10px;
    padding:8px 0px;
  }
  .fv>li a{
    color:#000;
    display: inline-block;
    width: 57px;
    height: 46px;
    text-decoration:none;
  }
  .fv>li img{
    display:inline-block;
    font-size:10px;
    width:20px;
    height:20px;
  }

</style>
