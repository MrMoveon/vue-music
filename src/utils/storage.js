var storage={
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },
    set(key,val){
        return localStorage.setItem(key,JSON.stringify(val))
    },
    clear(){
        return localStorage.clear()
    }
}
export default storage