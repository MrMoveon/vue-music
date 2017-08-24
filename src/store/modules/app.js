import * as types from '../types'
const app={
    state:{
        searchStatus:false,         //顶部搜索的状态
        isLogin:false,              //判断是否登录
        loginViewVisibel:false,     //登录界面显示状态
        loginTransition:'slide-top', //登录的过渡动画
        mainTransition:'slide-left'
    },
    mutations:{
        [types.CHANGE_SEARCH_STATUS](state,val){
            state.searchStatus=val
        },
        [types.CHANGE_LOGIN_STATUS](state,val){
            state.isLogin=val
        },
        [types.CHANGE_LOGINVIEW_STATUS](state,val){
            state.loginViewVisibel=val
        },
        [types.CHANGE_LOGINTRANSTION](state,val){
            state.loginTransition=val
        },
        [types.CHANGE_MAINTRANSTION](state,val){
            state.mainTransition=val
        }
    },
    actions:{

    }
}
export default app