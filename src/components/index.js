
import Header from './Header.vue';
import Slide from './slide/Slide.vue';
import SlideItem from './slide/SlideItem.vue';
const install=(Vue)=>{
    Vue.component('mui-header',Header);
    Vue.component('mui-slide',Slide);
    Vue.component('mui-slide-item',SlideItem);
}
export {
    Header,
    Slide
}

export default install;