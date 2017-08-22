<template>
    <div class="mui-page music-me">
        <mui-scroll-view class="music-container" ref="meScrollV" name="me-scroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null">
            <mui-scroll-view-item style="height:auto;" class="mui-container">
                
                <me-login></me-login>
                <me-menu></me-menu>
                <mui-media-list 
                    :icon="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" 
                    align="right"
                    title="猜您喜欢" 
                    desc="来听听和【不爱你】一样好听的歌曲吧"
                >
                </mui-media-list>
                <mui-media-list 
                    :icon="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" 
                    title="猜您喜欢" 
                    desc="来听听和【不爱你】一样好听的歌曲吧"
                >
                </mui-media-list>
                <mui-media-list 
                radius
                    :icon="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" 
                    title="猜您喜欢" 
                    desc="来听听和【不爱你】一样好听的歌曲吧"
                >
                </mui-media-list>
                <mui-media-list 
                    :icon="require('../../assets/images/lyric_poster_default_bg6_small.jpg')" 
                    :icon-size="['50px','50px']"
                    title="猜您喜欢" 
                    desc="来听听和【不爱你】一样好听的歌曲吧"
                >
                </mui-media-list>
            </mui-scroll-view-item>
        </mui-scroll-view>

    </div>
</template>

<script>
import MeLogin from './MeLogin'
import MeMenu from './MeMenu'
export default {
    name: 'Me',
    data() {
        return {

        }
    },
    components: {
        MeLogin,
        MeMenu

    }
}
</script>

<style lang='less'>
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';
.music-me .mui-container {
    padding-top: (88+75-4)/@rem;
    overflow: initial;
}

.music-me {
    background: #fff;
}

.music-container {
    height: 100%;
}
</style>
