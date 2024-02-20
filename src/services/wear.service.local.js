import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'wear'

export const wearService = {
    query,
    get,
}

_createWears()

//  async function query(startIdx, endIdx) {
async function query() {
    var wears = await storageService.query(STORAGE_KEY)

    console.log(wears)
    if (!wears || !wears.length) {
        wears = _createWears()
        await storageService.insert(STORAGE_KEY, wears)
    }
    // return wears.slice(startIdx, endIdx)
    return wears
}

async function get(id) {
    return await storageService.get(STORAGE_KEY, id)
}

function _createWears() {
    let wears = utilService.loadFromStorage(STORAGE_KEY)
    if (!wears || !wears.length) {
        wears = [
            {
                id: '101',
                name: 'sandevistan hoodie',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/1_d6bcd3ef-5c3f-4ddf-9e8f-44e73527575d.png?width=1080',
            },
            {
                id: '102',
                name: 'mc night jacket',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110809767.png?width=1080',
            },
            {
                id: '103',
                name: 'corporate jacket',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309502_1_c08c7d09-c692-4163-a0d4-f6af9d8e2211.png?width=1080',
            },
            {
                id: '104',
                name: 'reflective balaclava',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/20231113103759.png?width=1080',
            },
            {
                id: '105',
                name: 'smasher crewneck',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/1_9d1d39cc-4e04-4683-9ae7-c0795f4737df.png?width=1080',
            },
            {
                id: '106',
                name: 'netizens t',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/1_4b20f499-59ba-4fab-a730-ed8bd940e4cc.png?width=1080',
            },
            {
                id: '107',
                name: 'smasher crewneck',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/3_0c3bb4fc-5255-4781-b534-e1037c7d82ca.png?width=1080',
            },
            {
                id: '108',
                name: 'corporate jacket',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309510_1_e467d6a4-cf1b-46fc-a990-7c228e57b0a7.png?width=1080',
            },
            {
                id: '109',
                name: 'cyberarm gloves',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/20231109152634.png?width=1080',
            },
            {
                id: '110',
                name: 'sandevistan hoodie',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/3_8ea90605-7b7b-4e92-9b53-d69fb79a037c_1.png?width=1080',
            },
            {
                id: '111',
                name: 'night city sweatpants',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/1_2_964d2146-5943-4e3b-ba2e-43c7ec1b5ce3.png?width=1080',
            },
            {
                id: '112',
                name: 'netizens t',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/3_7aaf1f68-88d0-4624-91bd-ab1d0c7d81a6.png?width=1080',
            },
        ]
        utilService.saveToStorage(STORAGE_KEY, wears)
    }
}
