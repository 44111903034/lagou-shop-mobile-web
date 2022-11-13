import request from '../utils/request'

// 请求首页默认数据
export const getDefaultData = () => request({
    method: 'GET',
    url: '/v2/diy/get_diy/moren'
})

// 请求logo图
export const getLogo = () => request({
    method: 'GET',
    url: '/wechat/get_logo'
})
