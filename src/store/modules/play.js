import * as types from '../types'
import storage from '../../utils/storage'
import _ from 'underscore'
const play={
    state:{
        fullScreen:false,//是否全屏
        playState:false,//播放状态
        currentIndex:-1,//当前播放的歌曲索引
        playList:[],//歌曲列表
        sequenceList:[],//播放列表
        playMode:0      //0顺序播放,1循环播放,2单曲循环
    },
    mutations: {
        [types.SET_FULL_SCREEN](state,val){
            state.fullScreen=val
        },
        [types.SET_PLAY_STATE](state,val){
            state.playState=val
        },
        [types.SET_CURRENT_INDEX](state,val){
            state.currentIndex=val
        },
        [types.SET_PLAY_LIST](state,list){
            state.playList.push(list)
        },
        [types.SET_SEQUENCE_LIST](state,list){
            state.sequenceList=list
        },
        [types.SET_PLAY_MODE](state,val){
            state.playMode=val
        }
    },
    actions: {
        fullScreenPlay({commit,dispatch,state},song){
         commit(types.SET_FULL_SCREEN,true)
         commit(types.SET_PLAY_STATE,true)
         commit(types.SET_PLAY_LIST,song)
         commit(types.SET_CURRENT_INDEX,state.playList.length-1)
         
       }
    }
}
export default play