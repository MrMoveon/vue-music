import Vue from 'vue';

const IndicatorConstructor=Vue.extend(require('./src/Indicator.vue'));
let IndicatorInstance;

export default {
    /**
     * Indicator显示方法
     * @param {*} options `text`,`spinnerType`
     */
    open(options={}) {
        if(!IndicatorInstance){
            //如果不存在，将indicator模版挂载到创建的div里面
            IndicatorInstance=new IndicatorConstructor({
                el: document.createElement('div')
            });
        }
        //如果显示，返回
        if(IndicatorInstance.visible) return;   
        //设置传递的参数
        IndicatorInstance.text = typeof options ==='string' ? options : options.text;
        IndicatorInstance.spinnerType=options.spinnerType || 'default';
        //插入到body里面
        document.body.appendChild(IndicatorInstance.$el);
        //dom更新后，显示
        Vue.nextTick(() => {
            IndicatorInstance.visible = true;
        });
    },
    /**
     * 关闭方法
     */
    close() {
        if(!IndicatorInstance) return;
        IndicatorInstance.visible = false;
    }
}


