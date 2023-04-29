import request from "@/utils/request";

export const addStaff = (name, join_date, sex, attend) => request({
    url: '/staff',
    method: 'post',
    data: {name, join_date, sex, attend}
})
export const getStaff = (id, name, order, by, page, size) => {
    if (id === '') id = undefined
    if (name === '') name = undefined
    if (order === '') order = undefined
    if (by === '') by = undefined
    if (page === '') page = undefined
    if (size === '') size = undefined
    return request({
        url: '/staff',
        method: 'get',
        params: {id, name, order, by, page, size}
    })
}
export const deleteStaff = (id) => request({
    url: '/staff',
    method: 'delete',
    data: {id}
})
export const putStaff = (id, name, birth, sex, attend) => request({
    url: '/staff',
    method: 'put',
    data: {id, name, birth, sex, attend}
})