import {
    getChannels
} from '@/api/app'
const state = {
    channelsList: '', // 这里存放这个列表和id详细
    currenIndex: 0 // 索引号而已 数据在上面channelsList
}
const mutations = {
    setChannelsList(state, value) {
        state.channelsList = value
    },
    setCurrenIndex(state,value){
        state.currenIndex = value
    }
}
const actions = {
    //调用api接口获取列表信息
    async getChannelsList(store) { // 这个sotre代表的是模块内和跟目录下的state和getters的数据内容通过它可以异步提交mutations内的方法
        const res = await getChannels()
        // 同模块的调用 将异步操作 通过 mutations同步的将请求返回的数据存入state. channelsList
        store.commit('setChannelsList', res.data.channels)
        // 不同模块调用 接口获取列表详情id   开启getters计算属性
        store.dispatch('list/getList', null, {root:true})
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}