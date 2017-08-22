import * as types from '../types'
const app={
    state:{
        searchStatus:false,
        isLogin:false
    },
    mutations:{
        [types.CHANGE_SEARCH_STATUS](state,val){
            state.searchStatus=val
        },
        [types.CHANGE_LOGIN_STATUS](state,val){
            state.isLogin=val
        }
    },
    actions:{

    }
}
export default app