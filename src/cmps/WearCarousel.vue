<template>
    <swiper :pagination="pagination" :modules="modules" class="mySwiper">
        <swiper-slide v-for="imgUrl in imgUrls" :key="imgUrl">
            <img :src="imgUrl" alt="">
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
// import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default {
    props: {
        imgUrls: {
            type: Array,
            required: true,
        }
    },
    setup() {
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    // return '<span class="' + className + '">' + '1' + '</span>';
                    return '<span class="' + className + '">' + '<img class="imgTest" src="https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309502_1_c08c7d09-c692-4163-a0d4-f6af9d8e2211.png?width=100" alt="">' + '</span>';
                    // return `<span class=" ${className} "><img :src="${imgUrls[index]}" alt=""></span>`;
                },
            },
            modules: [Pagination],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>
  
<style scoped>
.swiper {
    /* width: 100%;
    height: 100%; */
    user-select: none;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    /* background: blue; */

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-pagination-bullet {
    width: 30px;
    height: 30px;
    /* text-align: center; */
    /* line-height: 20px; */
    /* font-size: 12px; */
    /* color: #000; */
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);

    img {
        width: 100px;
    }
}

.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
}

img {
    width: 100%;
}

.mySwiper {
    width: 80%;
}

.imgTest {
    width: 100px;
}

</style>