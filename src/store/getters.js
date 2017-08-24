const getters={
    isLogin(state){
        return state.app.isLogin
    },
    loginViewVisibel(state){
        return state.app.loginViewVisibel
    },
    loginTransition(state){
        return state.app.loginTransition
    }
}

export default getters