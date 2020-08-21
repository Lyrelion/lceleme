import axios from '@/api/axios'

// 接口配置文件

export const getBannerData = ()=>{
    return axios.request({
        url:"banner",
        method:'get'
    })
}
// 获取位置
export const getPosiData = () =>{
    return axios.request({
        url:"posi",
        method:"get"
    })
}
// 轮播九宫格菜单
export const getIndexEntryData = () =>{
    return axios.request({
        url:"index_entry",
        method:"get"
    })
}
// 获取餐厅信息
export const getRestaurantsData = () =>{
    return axios.request({
        url:"restaurants",
        method:"get"
    })
}