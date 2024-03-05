<template>
    <swiper :pagination=pagination :keyboard=keyboard :autoplay=autoplay :lazy="true" :modules="modules" :loop="true"
        class="mySwiper">
        <swiper-slide v-for="imgUrl in imgUrls" :key="imgUrl">
            <img :src="imgUrl" alt="">
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default {
    data() {
        return {
            pagination: {
                type: 'progressbar'
            },
            keyboard: {
                enabled: true,
            },
            autoplay: {
                delay: 3000
            },
        }
    },
    props: {
        imgUrls: {
            type: Array,
            required: true,
        }
    },
    setup(props) {
        return {
            // pagination: {
            //     clickable: true,
            //     renderBullet: function (idx, className) {
            //         return '<span class="' + className + '">' + (idx + 1) + '</span>'
            //         // return `<span class=" ${className} "> <img src="${props.imgUrls[idx]}?height=64&width=64" alt=""> </span>`;
            //     },
            // },
            modules: [Pagination, Keyboard, Autoplay],
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
    user-select: none;
    margin: 0;
    z-index: 0;
    width: 100%;
}

.swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
}

/* .swiper-pagination-bullet {
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
    border: 1px solid black;
} */
</style>