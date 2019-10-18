<template>
	<main>
		<div class="back">
		  <ul>
		    <li><h4 @click="back()"><img src="../assets/images/new-back.png" alt=""></h4></li>
		    <li><h3>登录</h3></li>
		  </ul>
		</div>
		<form action="#" name="form">
			<header>
				<ul>
					<li @click="change(index)" :class="{color:index==num}" v-for="(v,index) in title">{{v}}</li>
				</ul>
			</header>
			<div class="phone" v-show="num==0">
				<ul>
					<li><div><input type="text" placeholder="手机号" id="phone"><input type="button" value="获取验证码" @click="getchecknum()"></div></li>
					<li><div><input type="text" placeholder="请输入验证码" id="checknum"></div></li>
					<li><input type="button" value="登录" @click="form()"></li>
					<li><h6>新会员限时惊喜 首次登录送百元礼包</h6></li>
				</ul>
			</div>
			<div class="pswd" v-show="num==1">
				<ul>
					<li><div><input type="text" placeholder="手机号/邮箱" id="phone1"></div></li>
					<li><div><input type="password" placeholder="密码" id="pswd"><img src="../assets/images/black.png" alt=""></div></li>
					<li><input type="button" value="登录" @click="form1()"></li>
					<li><h6>忘记密码</h6></li>
				</ul>
			</div>
		</form>
		<div class="others">
			<dl>
				<dt><h4>第三方平台登录</h4></dt>
				<dd><img src="../assets/images/QQ.png" alt=""></dd>
				<dd><img src="../assets/images/pay.png" alt=""></dd>
				<dd><img src="../assets/images/sina.png" alt=""></dd>
				<dd><h6>首次登录表示您同意 <span>优购会员注册协议</span></h6></dd>
			</dl>
		</div>
		<footer>
			<ul>
				<li><img src="../assets/images/ensure.png" alt="">正品保障</li>
				<li><img src="../assets/images/ensure.png" alt="">10天退货</li>
				<li><img src="../assets/images/ensure.png" alt="">10天补差价</li>
			</ul>
		</footer>
	</main>
</template>

<script>
	export default({
		data(){
			return{
				title:['手机号快捷登录','账号密码登录'],
				num:0
			}
		},
		methods:{
			change(index){
				this.num=index;
			},
			back(){
				history.go(-1)
			},
      form(){
        var phone=document.getElementById('phone');
        var checknum=document.getElementById('checknum');

        if(phone.value==''&&checknum.value==''){
          alert('手机号不能为空！');
          return false;
        }else if(phone.value==''){
          alert('手机号不能为空！');
          return false;
        }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone.value))){
          alert('请输入正确的手机号！');
           return false;
        }else if(checknum.value==''){
          alert('验证码不能为空！');
           return false;
        }else if(!(/^\d{6}$/.test(checknum.value))){
         alert('请输入正确的验证码！');
         return false;
        }else{
          alert('登录成功！')
          history.go(-1);
        }
      },
      form1(){
        var phone=document.getElementById('phone1');
        var checknum=document.getElementById('pswd');

        if(phone1.value==''&&pswd.value==''){
          alert('手机号/邮箱不能为空！');
          return false;
        }else if(phone1.value==''){
          alert('手机号/邮箱不能为空！');
          return false;
        }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone1.value))&&!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(phone1.value))){
          alert('请输入正确的手机号/邮箱！');
           return false;
        }
        /* else if(!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(phone1.value))){
          alert('请输入正确的邮箱！');
        } */
        else if(pswd.value==''){
          alert('密码不能为空！');
           return false;
        }else if(!(/^(\w){6,20}$/.test(pswd.value))){
         alert('请输入正确的密码！');
         return false;
        }else{
          alert('登录成功！')
          history.go(-1);
        }
      },
      getchecknum(){
        var timer=setInterval(()=>{
              
        },1000)
      }
		}
	})
</script>

<style scoped="">
	body{
		position: relative;
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
		width: 80%;
	}
	.back li:nth-of-type(2) h3{
		padding-top: .5rem;
	}
	form{
		padding-top: 70px;
	}
	header{
		width: 100%;

	}
	header ul{
		overflow: hidden;
		padding: 0px 15px;
	}
	header ul li{
		list-style: none;
		float: left;
		width: 50%;
		font-size: .9rem;
		padding-bottom: 10px;
	}
	.color{
		color:red;
		border-bottom: 1px solid red;
	}
	.phone{
		width: 100%;
	}
	.phone li:nth-of-type(1){
		box-sizing: border-box;
		padding: 0 15px;
	}
	.phone li:nth-of-type(1)>div{
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding: 5px 0;
	}
	.phone li:nth-of-type(1) input{
		height: 2rem;
		border: none;
		background-color: rgba(0,0,0,0);
	}
	.phone li:nth-of-type(1) input:nth-of-type(1){
		width: 60%;
		border-right: 1px solid #ccc;
	}
	.phone li:nth-of-type(1) input:nth-of-type(2){
		width: 30%;
		text-align: center;
		padding-left: 15px;
		color: #333;
	}
	.phone li:nth-of-type(2){
		box-sizing: border-box;
		padding: 0 15px;
	}
	.phone li:nth-of-type(2)>div{
		border-bottom: 1px solid #ccc;
		padding: 5px 0;
	}
	.phone li:nth-of-type(2) input{
		padding-left: 15px;
		width: 100%;
		height: 2rem;
		border: none;
	}
	.phone li:nth-of-type(3){
		box-sizing: border-box;
		padding: 2.5rem 15px 0px;
	}
	.phone li:nth-of-type(3) input{
		width: 100%;
		height: 2.5rem;
		background-color: #999;
		outline: none;
		border: none;
		color: #fff;
		font-size: 1.1rem;
	}
	.phone li:nth-of-type(4){
		box-sizing: border-box;
		padding: .8rem 15px 0px;
		font-size: .5rem;
		color: #ff4664;
	}
	.pswd{
		width: 100%;
	}
	.pswd li{
		box-sizing: border-box;
		padding: 0px 15px;
	}
	.pswd li input{
		border: none;
	}
	.pswd li:nth-of-type(1) input{
		width: 100%;
		height: 2rem;
		padding-left: 10px;
	}
	.pswd li:nth-of-type(1)>div{
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding: 5px 0;

	}
	.pswd li:nth-of-type(2)>div{
		border-bottom: 1px solid #ccc;
		padding: 5px 0;
		position: relative;
	}
	.pswd li:nth-of-type(2) input{
		width: 100%;
		height: 2rem;
		padding-left: 10px;
	}
	.pswd li:nth-of-type(2) img{
		width: 7%;
		position: absolute;
		right: 20px;
		bottom: 1rem;
	}
	.pswd li:nth-of-type(3){
		box-sizing: border-box;
		padding: 2.5rem 15px 0px;
	}
	.pswd li:nth-of-type(3) input{
		width: 100%;
		height: 2.5rem;
		background-color: #999;
		outline: none;
		border: none;
		color: #fff;
		font-size: 1.1rem;
	}
	.pswd li:nth-of-type(4){
		box-sizing: border-box;
		padding: .8rem 15px 0px;
		font-size: .5rem;
		text-align: right;
		color: #999;
	}
	.others{
		padding-top: 80px;
		font-size: .7rem;
	}
	.others dl{
		overflow: hidden;
		box-sizing: border-box;
		padding: 0 50px;
	}
	.others dt{
		color: #aaa;
	}
	.others dd{
		float: left;
		width: 33%;
		padding: 15px 0 5px;
	}
	.others dd img{
		width: 40%;
	}
	.others dd:nth-of-type(4){
		width: 100%;
		color: #777;
	}
	.others dd:nth-of-type(4) span{
		color: #ff4664;
		text-decoration: underline;
	}
	footer{
		width: 100%;
		position: absolute;
		bottom: 2.5rem;
		left: 0;
		box-sizing: border-box;
		padding: 0 50px;
	}
	footer ul{
		overflow: hidden;
	}
	footer ul li{
		float: left;
		width: 33%;
		font-size: .6rem;
	}
	footer ul li img{
		width: 15%;
	}
</style>
