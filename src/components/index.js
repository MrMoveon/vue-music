
import Header from './Header.vue';

import Slide from './slide/Slide.vue';
import SlideItem from './slide/SlideItem.vue';

import ScrollView from './scrollView/ScrollView.vue';
import ScrollViewItem from './scrollView/ScrollViewItem.vue';

import MediaList from './mediaList/MediaList.vue';
const install=(Vue)=>{
    Vue.component('mui-header',Header);

    Vue.component('mui-slide',Slide);
    Vue.component('mui-slide-item',SlideItem);

    Vue.component('mui-scroll-view',ScrollView);
    Vue.component('mui-scroll-view-item',ScrollViewItem);

    Vue.component('mui-media-list',MediaList);
}
export {
    Header,
    Slide,
    SlideItem,
    ScrollView,
    ScrollViewItem,
    MediaList
}

export default install;