import request from "@/utils/request";

export const addCustomer = (name, birth, sex) => request({
    url: '/customers',
    method: 'post',
    data: {name, birth, sex}
})
export const getCustomer = (id, name, order, by, page, size) => {
    if (id === '') id = undefined
    if (name === '') name = undefined
    if (order === '') order = undefined
    if (by === '') by = undefined
    if (page === '') page = undefined
    if (size === '') size = undefined
    return request({
        url: '/customers',
        method: 'get',
        params: {id, name, order, by, page, size}
    })
}
export const deleteCustomer = (id) => request({
    url: '/customers',
    method: 'delete',
    data: {id}
})
export const putCustomer = (id, name, birth, sex) => request({
    url: '/customers',
    method: 'put',
    data: {id, name, birth, sex}
})