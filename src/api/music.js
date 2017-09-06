import axios from 'axios'
import {commonParams,opts} from './config'
import {jsonp} from '@/utils/jsonp'


export function getSilde(){
    let url='api/slide'
    let data={
        g_tk:5381,
        _:1503197726466
    }
    data=Object.assign({},commonParams,data)
    return axios.get(url,{params:data}).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res)
        })
    })
}
export function getNewSong(){
    let url='https://c.y.qq.com/v8/fcg-bin/album_library'
    let data=Object.assign({},commonParams,{
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        platform:'yqq',
        needNewCode:0,
        cmd:'get_album_info',
        page:0,
        pagesize:20,
        sort:1,
        language:-1,
        genre:0,
        year:1,
        pay:0,
        type:-1,
        company:-1
       
    })
    
    return jsonp(url, data, opts).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res)
        })
    })
}
export function getRecommend(){
    // let url='https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    let data={
        rnd:Math.random(),
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        notice:0,
        inCharset:"utf8",
        outCharset:"utf-8",
        platform:"yqq",
        needNewCode:0,
        categoryId:10000000,
        sortId:5,
        sin:0,
        ein:29,
        format:"json"
       
    }
    data=Object.assign({},commonParams,data)
    return axios.get('api/getRecommend',{params:data}).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res.data)
        })
    })
    //return jsonp(url, data, opts)
}

export function getSinger(){
    let url='https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    let data=Object.assign({},commonParams,{
        channel:"singer",
        page:"list",
        key:"all_all_all",
        pagesize:100,
        pagenum:1,
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        format:"jsonp",
        notice:0,
        platform:"yqq",
        needNewCode:0
    })
    
    return jsonp(url, data, opts).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res)
        })
    })
}
export function getSingerDetail(singermid){
    let url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_album.fcg'
    let data=Object.assign({},commonParams,{
        format:"jsonp",
        platform:"yqq",
        singermid:singermid,
        order:"time",
        begin:0,
        num:100,
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        format:"jsonp",
        notice:0,
        platform:"yqq",
        needNewCode:0
    })
    
    return jsonp(url, data, opts).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res)
        })
    })
}
export function getSingerInfo(albummid){
    let url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg'
    let data=Object.assign({},commonParams,{
        albummid:albummid,
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        format:"jsonp",
        inCharset:"utf8",
        outCharset:"utf-8",
        notice:0,
        platform:"yqq",
        needNewCode:0
    })
    
    return jsonp(url, data, opts).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res)
        })
    })
}
export function getSong(songmid){
    let url='api/getSong'
    let data={
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        format:"jsonp",
        inCharset:"utf8",
        outCharset:"utf-8",
        notice:0,
        platform:"yqq",
        needNewCode:0,
        cid:205361747,
        uin:0,
        songmid:songmid,
        filename:"C400"+songmid+".m4a",
        guid:227092740
    }
    data=Object.assign({},commonParams,data)
    return axios.get(url,{params:data}).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res)
        })
    })
}

// export function getSong(songmid){
//     let url='https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
//     let data=Object.assign({},commonParams,{
//         g_tk:5381,
//         loginUin:0,
//         hostUin:0,
//         format:"jsonp",
//         inCharset:"utf8",
//         outCharset:"utf-8",
//         notice:0,
//         platform:"yqq",
//         needNewCode:0,
//         cid:205361747,
//         uin:0,
//         songmid:songmid,
//         filename:"C400"+songmid+".m4a",
//         guid:227092740,
//     })
    
//     return jsonp(url, data, opts).then(res=>{
//         return new Promise((resolve,reject)=>{
//             resolve(res)
//         })
//     })
// }