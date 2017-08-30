
import * as types from '../types'
import storage from '../../utils/storage'
import _ from 'underscore'
const app={
    state:{
        searchStatus:false,         //顶部搜索的状态
        isLogin:false,              //判断是否登录
        loginViewVisibel:false,     //登录界面显示状态
        loginTransition:'slide-top', //登录的过渡动画
        mainTransition:'slide-left', //主页tab切换
        focusSinger:[]              //关注的歌手
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
        },
        [types.SET_FOCUS_SINGER](state,val){
            // if(status==='cancel'){
            //     state.focusSinger.forEach(function(element,index) {
            //         if(element.Fsinger_name===val){
            //             // 删除
            //             return state.focusSinger.splice(index,1)
            //         }
            //     }, this);
            //     return
            // }
            state.focusSinger.push(val)
        }
    },
    actions:{
        //关注歌手
        focusSinger({dispatch,commit,state},val){
            
            return new Promise((resolve,reject)=>{
                var status=state.isLogin
                if(status){
                    commit(types.SET_FOCUS_SINGER,val)
                    // 
                    setTimeout(()=> {
                        resolve(status)
                    }, 1000);
                    
                }else{
                    reject(status)
                }
                
            })
            
            
        },
        //打开页面的时候检测登录
        checkLogin({commit,state}){
            return new Promise((resolve,reject)=>{
                if(storage.get('uid')){
                    resolve(true)
                }else{
                    reject(false)
                }
            })
        },
        // 登录
        login({dispatch,commit,state}){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    //登录状态
                    commit(types.CHANGE_LOGIN_STATUS,true)
                    //登录界面
                    dispatch('loginView',false)
                    //设置登录uid
                    storage.set('uid',1)
                    resolve(true)
                }, 1000);
            })
        },
        // 登录界面显示隐藏
        loginView({commit,state},status){
            if(!status){
                commit(types.CHANGE_LOGINTRANSTION,'slide-bottom')
                setTimeout(()=> {
                    commit(types.CHANGE_LOGINVIEW_STATUS,false)
                }, 20);
            }else{
                commit(types.CHANGE_LOGINTRANSTION,'slide-top')
                setTimeout(()=> {
                    commit(types.CHANGE_LOGINVIEW_STATUS,true)
                }, 20);
            }
            
        }
        

    }
}
export default app