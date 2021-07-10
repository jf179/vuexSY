import request from '@/utils/request'

function getChannels() {
    return request({
        url: '/v1_0/channels'
    })
}

function getListInfo(id) {
    return request({
        url: `/v1_1/articles?channel_id=${id}&timestamp=${Date.now()}&with_top=1`
    })
}
export {
    getChannels,
    getListInfo
}