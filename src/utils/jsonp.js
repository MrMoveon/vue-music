import jp from 'jsonp'

export function jsonp(url, data, opts){
    //如果url没有?,就添加?,否则添加& 并加上data参数
    url += (url.indexOf('?') < 0 ? '?' : '&' ) + param(data)
    return new Promise((resolve,reject)=>{
       jp(url, opts, (error,data)=>{
            if(!error){
                resolve(data)
            }else{
                reject(error) 
            }
        })
    })
}
//拼接参数
function param(data){
    let url='';
    for (var key in data) {
        let value = data[key] !== undefined ? data[key] : ''
        url += `&${key}=${encodeURIComponent(value)}`
    }
    return url ? url.slice(1) : '';
}