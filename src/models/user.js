import * as userService from '../services/user'

export default {
  state: {
    user: {}
  },
  reducers: {
    add(state, user) {
      return { ...state, ...user }
    }
  },
  effects: {
    * fetch(action, { call, put }) {
      const user = yield call(userService.user) // array
      yield put({
        type: 'add',
        user
      })
    }
  },
  subscriptions: { // 初始化
    setup({ dispatch }) {
      dispatch({ type: 'fetch' })
    }
  }
}
