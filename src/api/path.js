import request from '../utils/request.js'

// 判断用户是否已经填写表单 {true为已填写}
export function deterUserIsForm(params) {
    return request({
        url: '/help/form',
        method: 'GET',
        params
    })
}
