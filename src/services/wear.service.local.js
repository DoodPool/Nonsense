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
                imgUrls: [
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309502_1_c08c7d09-c692-4163-a0d4-f6af9d8e2211.png',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-17.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309502_2_d882881a-2246-4e57-8d1b-271afb4feb39.png',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-18.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-19.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-20.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-21.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309507.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309502.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309506.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309510_1_e467d6a4-cf1b-46fc-a990-7c228e57b0a7.png',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-3.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309510_2_eb7d26eb-d69b-41fa-93f2-088fb7029cb1.png',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-2.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-4.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-6.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/CDPR-ECOM-1.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309516.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309510.jpg',
                    'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309514.jpg',
                ],
                aboutWear: `Meet the Corporate Jacket: 100% polyester and faux leather, decked out with a mix of Teddy and PU patches.
                            Inspired by cyberpunk vibes from various institutions,
                            it adds a cool and comfy edge to your style—like a little souvenir from Night City.`,
                sizeOnModel: `Male model's height: 170cm/5'6" - Female model's height: 164cm/5'4"
                              Male model is wearing: Small - Female model is wearing: X Large`,
                sizeChart: {
                    size: [
                        '',
                        's',
                        'm',
                        'l',
                        'xl',
                        'xxl',
                    ],
                    Length: [
                        '27.1 / 69',
                        '27.5 / 70',
                        '28.7 / 73',
                        '29.5 / 75',
                        '30.3 / 77',
                    ],
                    Shoulder: [
                        '24 / 61',
                        '24.8 / 63',
                        '25.9 / 66',
                        '26.7 / 68',
                        '27.5 / 70',
                    ],
                    'Half Chest': [
                        '22.4 / 57',
                        '23.2 / 59',
                        '24.4 / 62',
                        '25.1 / 64',
                        '25.9 / 66',
                    ],
                    Bottom: [
                        '18.5 / 47',
                        '19.2 / 49',
                        '20.4 / 52',
                        '21.2 / 54',
                        '22 / 56',
                    ],
                    Sleeve: [
                        '21.2 / 54',
                        '21.8 / 55.5',
                        '22.4 / 57',
                        '23 / 58.5',
                        '23.6 / 60',
                    ],
                    Cuff: [
                        '3.5 / 9',
                        '3.7 / 9.5',
                        '3.9 / 10',
                        '4.1 / 10.5',
                        '4.3 / 11',
                    ],
                },
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
