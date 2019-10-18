<template id="man">
  <main>
    <div class="allbrand">
      <div v-for="(item,index) in man">
        <p>{{item.brandtitle}}</p>
        <ul>
          <li v-for="(v,i) in item.block">
            <img :src="v.src" alt="">
            <span>{{v.lititle}}</span>
           </li>
         </ul>
      </div>
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        man:'',
        brandtitle:'',
        lititle:''
      }
    },
    mounted(){
      this.$http.get('./data/sort.json')
        .then((response)=>{
        console.log(response);
        console.log(this)
        this.man=response.data.man
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
  body{
    color:#666;
  }
  .allbrand{
    width:100%;
    box-sizing:border-box;
    border:5px solid #eee;
  }
  .allbrand p{
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #333;
      padding: 10px 5px 0;
      background-color:#eee;
  }
  .allbrand span{
    font-size:12px;
    display:inline-block;
  }
  .allbrand ul{
    background-color:#fff;
    width:100%;
    overflow:hidden;
  }
  .allbrand ul li{
    float:left;
    text-align:center;
    width:33.33%;
    padding:0px 0 10px;
  }
  .allbrand ul img{
    /* display:inline-block; */
    width:80%;
  }
</style>
