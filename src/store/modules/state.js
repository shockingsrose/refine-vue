const state = {
  count: 0,
  name: 'stateName'
}
// mutations 只能调用同步的方法
const mutations = {
  add(state, n) {
    state.count += n
  },
  minus() {
    state.count--
  }
}
// actions 可以调用异步方法
const actions = {
  commitAdd: ({
    commit
  }, n) => {
    commit('add', n)
  },
  commitMinus: ({
    commit
  }) => {
    commit('minus')
  }
}
const getters = {
  numCount: () => {
    state.count = state.count > 0 ? state.count : 0
    return state.count
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
