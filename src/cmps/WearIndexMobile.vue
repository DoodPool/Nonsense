<template>
    <section>
        <WearList v-if="wears" :wears="slicedWears(0, 4)" />

        <article>
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fcoporate_jacket_mobile.72a8af75.webp&f=webp" alt="">
            <div class="display-area left-4">
                <div class="btn-pos-left flex h-full">
                    <div class="btn-container flex">
                        <h1>
                            <p>corporate</p>
                            <p>jacket</p>
                        </h1>
                        <router-link to="/wears/108">
                            <NonsenseBtn class="small-btn" :btnTxt="'Discover now'" />
                        </router-link>
                    </div>
                </div>
            </div>
        </article>

        <WearList v-if="wears" :wears="slicedWears(4, 8)" />

        <article class="full">
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fsandevistan_hoodie_mobile.d3c44e13.webp&f=webp"
                alt="">
            <div class="display-area right-8">
                <div class="btn-pos-right flex h-full">
                    <div class="btn-container flex">
                        <h1>
                            <p>sandevistan</p>
                            <p>hoodie</p>
                        </h1>
                        <router-link to="/wears/101">
                            <NonsenseBtn class="small-btn" :btnTxt="'Discover now'" />
                        </router-link>
                    </div>
                </div>
            </div>
        </article>

        <WearList v-if="wears" :wears="slicedWears(8, 12)" />

        <article>
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fmc_night_jacket.05b8a965.webp&f=webp" alt="">
            <div class="display-area left-8">
                <div class="btn-pos-left flex h-full">
                    <p>now available</p>
                    <div class="btn-container flex">
                        <h1>
                            <p>mc night</p>
                            <p>jacket</p>
                        </h1>
                        <router-link to="/wears/102">
                            <NonsenseBtn class="small-btn" :btnTxt="'Discover now'" />
                        </router-link>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<script>

import { wearService } from '../services/wear.service.local'
import WearList from '../cmps/WearList.vue'
import NonsenseBtn from '../cmps/NonsenseBtn.vue'

export default {
    data() {
        return {
            wears: null,
        }
    },
    methods: {
        slicedWears(startIdx, endIdx) {
            return this.wears.slice(startIdx, endIdx)
        },
    },
    computed: {
    },
    async created() {
        try {
            this.wears = await wearService.query()
            console.log('this.wears', this.wears)
        } catch (err) {
            // eventBus.emit('user-msg', `Couldn't get wears...`)
            console.log(`Couldn't get wears...`);
        }
    },
    components: {
        WearList,
        NonsenseBtn,
    }
}

</script>

<style lang="scss" scoped>
article:not(.full) {
    padding-inline: 1rem;

    // .btn-pos-right,
    // .btn-pos-left {
    //     // padding: 1rem;
    // }
}

img {
    width: 100%;
    user-select: none;
}

article {
    position: relative;
    display: block;

    .display-area {
        position: absolute;

        padding-top: 0;
        animation: fade-in .5s;

        top: 4rem;
        bottom: 4rem;
    }

    .btn-pos-right {
        justify-content: flex-end;
        align-items: flex-end;
    }

    .btn-pos-left {
        justify-content: flex-start;
        align-items: flex-end;
    }

    .btn-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

}

img {
    display: block;
}

h1 {
    color: white;

    line-height: .8em;
    font-size: 2.25rem;
    font-weight: 400;

    text-transform: uppercase;
}

a {
    color: black;
    text-decoration: none;
}
</style>