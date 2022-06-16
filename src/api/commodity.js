import request from "@/utils/request";

export const addCommodity = (name, price) => request({
    url: '/commodities',
    method: 'post',
    data: {name, price}
})
export const checkName = (name) => request({
    url: '/commodities/check',
    method: 'get',
    params: {name}
})
export const getCommodities = (name, order, by, page, size) => request({
    url: '/commodities',
    method: 'get',
    params: {name, order, by, page, size}
})
export const deleteCommodity = (name) => request({
    url: '/commodities',
    method: 'delete',
    data: {name}
})
export const putCommodity = (name, price) => request({
    url: '/commodities',
    method: 'put',
    data: {name, price}
})