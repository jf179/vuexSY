// getters 的四大属性 state,getters,rootState,rootGetters
// 分别代表 当前模块和根目录模块 的 state和getters数据状态，用来简化数据管理和代码量
export default {
    getId(state, getters, rootState) {
        // 访问catagtory模块内的state数据channelsList从中获取id属性
        return rootState.catagtory.channelsList.length ? rootState.catagtory.channelsList[rootState.catagtory.currenIndex].id : null
        // 为了避免有时候未拿到数据报错，设置length长度不为0就正常取值，否则就null
    }
}