<template>
    <section>
        <WearList v-if="wears" :wears="slicedWears(0, 4)" />

        <article class="full">
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fsmasher_crewneck.65e37ab7.webp&f=webp" alt="">
            <div class="display-area left-4">
                <div class="btn-pos-left flex h-full">
                    <div class="btn-container flex">
                        <h1>
                            <p>smasher</p>
                            <p>crewneck</p>
                        </h1>
                        <NonsenseBtn class="small-btn" :btnTxt="'Discover now'" />
                    </div>
                </div>
            </div>
        </article>

        <WearList v-if="wears" :wears="slicedWears(4, 8)" />

        <article>
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fcorporate_jacket.e7d12d68.webp&f=webp" alt="">
            <div class="display-area right-8">
                <div class="btn-pos-right flex h-full">
                    <div class="btn-container flex">
                        <h1>
                            <p>corporate</p>
                            <p>jacket</p>
                        </h1>
                        <NonsenseBtn class="small-btn" :btnTxt="'Discover now'" />
                    </div>
                </div>
            </div>
        </article>

        <WearList v-if="wears" :wears="slicedWears(8, 12)" />

        <article>
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fcyberarm_gloves.d622d17a.webp&f=webp" alt="">
            <div class="display-area left-8">
                <div class="btn-pos-left flex h-full">
                    <div class="btn-container flex">
                        <h1>
                            <p>cyberarm</p>
                            <p>gloves</p>
                        </h1>
                        <NonsenseBtn class="small-btn" :btnTxt="'Discover now'" />
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
    padding-inline: 64px;

    .btn-pos-right, .btn-pos-left {
        padding: 4rem;
    }
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
    font-size: 4.5rem;
    font-weight: 400;

    text-transform: uppercase;
}
</style>


48
64

80
64

64