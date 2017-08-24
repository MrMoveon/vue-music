import axios from 'axios'
import {commonParams,opts} from './config'
import {jsonp} from '@/utils/jsonp'


export function getFound(){
    let url='api/getfound'
    let data={
        g_tk:5381,
        uin:0,
        format:"json",
        notice:0,
        platform:"h5",
        needNewCode:1,
        data:{"magzine":{"method":"get_author_magzine_list","param":{"uin":526824150,"fieldtype":1,"ordertype":1,"versiontype":1,"sin":0,"size":20,"level":[200,300,400],"status":[]},"module":"magzine.MagzineReadServer"}},
        _:1503555062015
    }
    data=Object.assign({},commonParams,data)
    return axios.get(url,{params:data}).then(res=>{
        return new Promise((resolve,reject)=>{
            resolve(res)
        })
    })
}
