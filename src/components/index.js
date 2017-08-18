
import Header from './Header.vue';
import Swiper from './Swiper.vue';
const install=(Vue)=>{
    Vue.component('mui-header',Header);
    Vue.component('mui-swiper',Swiper);

}
export {
    Header,
    Swiper
}

export default install;