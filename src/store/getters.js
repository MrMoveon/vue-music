const getters = {
    sidebarShow(state){
        return state.app.sidebarShow
    },
    isLogin(state) {
        return state.app.isLogin
    },
    loginViewVisibel(state) {
        return state.app.loginViewVisibel
    },
    loginTransition(state) {
        return state.app.loginTransition
    },
    mainTransition(state) {
        return state.app.mainTransition
    },
    focusSinger(state) {
        return state.app.focusSinger
    },
    fullScreen(state){
        return state.play.fullScreen
    },
    playState(state){
        return state.play.playState
    },
    currentIndex(state){
        return state.play.currentIndex
    },
    currentSong(state){
        return state.play.playList[state.play.currentIndex] || []
    },
    playList(state){
        return state.play.playList
    },
    sequenceList(state){
        return state.play.sequenceList
    },
    playMode(state){
        return state.play.playMode
    }
    
}

export default getters


// fullScreen:false,//是否全屏
// playState:false,//播放状态
// currentIndex:-1,//当前播放的歌曲索引
// playList:[],//歌曲列表
// sequenceList:[],//播放列表
// playMode:0      //0顺序播放,1循环播放,2单曲循环