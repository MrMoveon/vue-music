import Vue from 'vue'
const dialogConstructor=Vue.extend(require('./src/dialog.vue'));
let Instance;
// 默认参数
var defaultOption={
        title:'提示',
        text:'',
        cancelText:'取消',
        confirmText:'确定',
        showCancelButton:false,
        showConfirmButton:true,
        maskClose:false,
        maskOpacity:0.6,
        callback:function(){}
}
//创建一个实例
let initInstance=function(){
     if(!Instance){
        Instance=new dialogConstructor({
            el:document.createElement('div')
        });
    }
}
var merge=function(options){
    //合并参数
    var option=Object.assign({},defaultOption,options);
    //设置值
    for (var item in option) {
        Instance[item]=option[item]
    }
}
let dialog={
    /**
     * 弹出框
     * @param {*} options 
     */
    open(options={}){
        initInstance();
        if(typeof options=='string'){
            Instance.showCancelButton=false;
            Instance.text=options;
            Instance.callback=function(){}
        }else{
           merge(options);
        }
        
        //插入到文档
        document.body.appendChild(Instance.$el);
        Vue.nextTick(()=>{
            Instance.visible=true;
        })
    },
  
    /**
     * 关闭
     */
    close(){
        if(!Instance) return;
        Instance.visible=false;
    }
}
export default dialog;