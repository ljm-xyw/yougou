import VueRouter from 'vue-router'
import footernav from '../../component/footernav.vue'
import index from '../../component/index.vue'
import sort from '../../component/sort.vue'
import find from '../../component/find.vue'
import shoppingcart from '../../component/shoppingcart.vue'
import my from '../../component/my.vue'
import search from '../../component/home/search.vue'
import news from '../../component/home/news.vue'
import signin from '../../component/home/signin.vue'
import coupon from '../../component/home/coupon.vue'
import go from '../../component/home/go.vue'
import product from '../../component/product.vue'

export default new VueRouter({
  routes:[
    {
    	path:'/',component:footernav,
    	children:[
    		{
    			path:'/index',component:index
    		},
    	],
    	redirect:'/index'
    },
    {
    	path:'/sort',component:sort
    },
    {
        path:'/find',component:find
    },
    {
    	path:'/shoppingcart',component:shoppingcart
    },
    {
    	path:'/my',component:my
    },
    {
    	path:'/search',component:search
    },
    {
    	path:'/news',component:news
    },
    {
    	path:'/signin',component:signin
    },
    {
    	path:'/coupon',component:coupon
    },
    {
    	path:'/go',component:go
    },
	{
		path:'/product',component:product
	},
    {
    	path:'/*',redirect:'/index'
    }
  ]
})
