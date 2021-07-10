// 导入需要用到的详情api接口
import {
    getListInfo
} from '@/api/app'
const state = {
    list: []
}
const mutations = {
    setList(state, value) {
        state.list = value
    }
}
const actions = {
    async getList(store) {
        // id 已存入store.catagtory.state内，而使用另一个模块的数据状态就需要使用rootStore(根目录) 😁
        // 为了简化代码 此时就需要用到getters计算属性，设置完毕后需要到catagtory模块进行调用，再在本模块进程存储
        const res = await getListInfo(
            // rootGetters是根目录意思,getters.js内部已经进行了设置并return出来了 这里直接使用即可
            store.rootGetters.getId
        )
        // 获取到的id详情数据 在本模块通过mutations存储到list:[]
        store.commit('setList', res.data.results)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}