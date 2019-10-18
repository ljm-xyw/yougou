import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


// 状态/数据管理
export default new Vuex.Store({
	// state类似于之前的data this.$store.state.数据名
	state:{
		num:1
	},
	// mutations类似于之前的方法 this.$store.commit('方法名',参数)
	mutations:{
		add(state){
			state.num++
		},
		sub(state){
			if(state.num>1){
				state.num--
			}
			
		}
	}
})