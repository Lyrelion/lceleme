// 模拟后台数据
import Mock from 'mockjs';
import position from '@/api/mockServerData/position'
import index_entry from '@/api/mockServerData/index_entry'
import restaurants from '@/api/mockServerData/restaurants'

// 模拟请求网络延时
Mock.setup({
    timeout:1000
})

Mock.mock('/api/posi',position)
Mock.mock('/api/index_entry',index_entry)
Mock.mock('/api/restaurants',restaurants)

// 字符串匹配路径 
// Mock.mock('/api/user',{
//     username:"Lyrelion",
//     age:21,
//     gender:"女",
//     type:"我这么美我不能死"
// })

// 正则匹配路径
// Mock.mock(/\/api\/user/igs,{
//     username:"Lyrelion",
//     "mtime":"@datetime",
//     "score|1-800":800,
//     "rank|1-100":100,
//     "nickname":"@cname",
//     "address":"@url",
//     "imgUrl":"@image",
//     'email':"@email"
// })




