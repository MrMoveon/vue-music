import Vue from 'vue';
const ToastConstructor=Vue.extend(require('./src/Toast.vue'));
let tid=1;
let Toast=(options={})=>{
    
    let id = 'toast-' + tid++
    const ToastInstance=new ToastConstructor();
   // ToastInstance.visible=true;                                                       //设置显示
    ToastInstance.msg=typeof options === 'string' ? options : options.msg;              //设置toast组件props的msg
    ToastInstance.position=options.position || 'middle';                                //设置toast组件props的position
    ToastInstance.duration=options.duration || 1500;                                    //设置toast组件props的duration
    ToastInstance.color=options.color || 'rgba(0,0,0,0.6)';                             //设置toast组件props的color
    ToastInstance.icon=options.icon || '';                           //设置toast组件props的icon
    ToastInstance.id=id;                                                                //设置toast组件id
    ToastInstance.tIndex=tid;                                                           //设置toast组件z-index
    ToastInstance.vm = ToastInstance.$mount()                                           // 挂载但是并未插入dom，是一个完整的Vue实例
    document.body.appendChild(ToastInstance.vm.$el)                                     // 将dom插入body
    Vue.nextTick(() => {
      ToastInstance.visible = true;
    });
    return ToastInstance.vm
}

export default {
    install:Vue=>{
        Vue.prototype.$Toast=Toast;
    }
}