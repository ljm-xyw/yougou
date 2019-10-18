<template>
	<main id="box">
    <div class="back">
      <ul>
        <li><h4 @click="back()"><img src="../assets/images/new-back.png" alt=""></h4></li>
        <li><input type="text" placeholder="请输入关键字"><span><img src="../../data/images/search-gray.png" alt=""></span></li>
        <li><img src="../assets/images/ico-menu.png" alt=""></li>
      </ul>
    </div>
    <section>
      <div class="listtitle">
        <ul>
          <li @click="msg='allbrand'"><span @click="chcolor(a[0].id)" v-bind:class="{span:active==a[0].id}">全部品牌</span></li>
          <li @click="msg='women'"><span @click="chcolor(a[1].id)" v-bind:class="{span:active==a[1].id}">女鞋</span></li>
          <li @click="msg='man'"><span @click="chcolor(a[2].id)" v-bind:class="{span:active==a[2].id}">男鞋</span></li>
          <li @click="msg='sport'"><span @click="chcolor(a[3].id)" v-bind:class="{span:active==a[3].id}">运动</span></li>
          <li @click="msg='outside'"><span @click="chcolor(a[4].id)" v-bind:class="{span:active==a[4].id}">户外</span></li>
          <li @click="msg='child'"><span @click="chcolor(a[5].id)" v-bind:class="{span:active==a[5].id}">童鞋童装</span></li>
        </ul>
        
      </div>
			<component :is="msg" class="component"></component>

    </section>


  </main>
</template>

<script src="../assets/js/vue.js"></script>
<script>
  import allbrand from './sort/allbrand.vue'
  import women from './sort/women.vue'
  import man from './sort/man.vue'
  import sport from './sort/sport.vue'
  import outside from './sort/outside.vue'
  import child from './sort/child.vue'
  export default({
    data(){
      return {
        msg:'allbrand',
				active:'1',
				a:[
					{
						id:'1'
					},
					{
						id:'2'
					},
					{
						id:'3'
					},
					{
						id:'4'
					},
					{
						id:'5'
					},
					{
						id:'6'
					}
				]
      }
    },
    components:{

          'allbrand':allbrand,

          'women':women,

          'man':man,

          'sport':sport,

          'outside':outside,

          'child':child
		},
		methods:{
			chcolor(a){
				this.active=a
			},
			back(){
				history.go(-1)
			}
		}
  })
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
    position:relative;
  }
  .back input{
    width: 100%;
    outline: none;
    height: 1.4rem;
    padding-left: 5px;
		border: 1px solid #333;
  }
  .back span img{
    width: 15px;
    height: 15px;
    font-size: 12px;
    position: absolute;
    right: 0px;
    top: 7px;
    z-index: 3;
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
  section{
    background-color:#fff;
  }
  .listtitle ul{
    position:fixed;
    left:0px;
    top:45.39px;
    background-color:#eee;
  }
	.listtitle span{
		width: 90px;
		height: 40px;
		line-height: 40px;
		display:inline-block;
	}
	.listtitle .span{
		background-color: #eee;
		color: red;
	}
  .listtitle li{
    width:90px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
  .component{
    width:100%;
    box-sizing:border-box;
    padding:45.39px 0 0 90px;
  }
</style>
