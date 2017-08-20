import axios from 'axios'
import {commonParams} from './common'

export function getSilde(){
    let url='api/slide'
    let data={
        g_tk:5381,
        _:1503197726466
    }
    data=Object.assign({},commonParams,data)
    return axios.get(url,{params:data})
}