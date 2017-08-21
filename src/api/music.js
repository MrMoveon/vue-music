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