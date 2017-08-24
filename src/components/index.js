
import Header from './Header.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Spinner from './spinner/Spinner.vue';

import Slide from './slide/Slide.vue';
import SlideItem from './slide/SlideItem.vue';

import ScrollView from './scrollView/ScrollView.vue';
import ScrollViewItem from './scrollView/ScrollViewItem.vue';

import Cell from './cell/Cell.vue';
import MediaCell from './cell/MediaCell.vue';
const install=(Vue)=>{
    Vue.component('mui-header',Header);
    Vue.component('mui-button',Button);
    Vue.component('mui-icon',Icon);
    Vue.component('mui-spinner',Spinner);

    Vue.component('mui-slide',Slide);
    Vue.component('mui-slide-item',SlideItem);

    Vue.component('mui-scroll-view',ScrollView);
    Vue.component('mui-scroll-view-item',ScrollViewItem);

    Vue.component('mui-cell',Cell);
    Vue.component('mui-media-cell',MediaCell);
}
export {
    Header,
    Button,
    Icon,
    Spinner,
    Slide,
    SlideItem,
    ScrollView,
    ScrollViewItem,
    Cell,
    MediaCell
}

export default install;