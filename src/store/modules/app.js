import * as types from '../types'
const app={
    state:{
        searchStatus:false
    },
    mutations:{
        [types.CHANGE_SEARCH_STATUS](state,val){
            state.searchStatus=val
        }
    },
    actions:{

    }
}
export default app