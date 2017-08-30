const getters={
    isLogin(state){
        return state.app.isLogin
    },
    loginViewVisibel(state){
        return state.app.loginViewVisibel
    },
    loginTransition(state){
        return state.app.loginTransition
    },
    mainTransition(state){
        return state.app.mainTransition
    },
    focusSinger(state){
        return state.app.focusSinger
    }
}

export default getters