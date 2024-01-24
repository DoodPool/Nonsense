<template>
    <section>
        <WearList v-if="wears" :wears="slicedWears(0, 4)" />
        <article class="full">
            <img src="https://nonsense.jp/_image?href=%2F_astro%2Fsmasher_crewneck.65e37ab7.webp&f=webp" alt="">
            <div class="h-full w-full">
                <div class="test flex h-full w-full">
                    <h1 class="white-space">
                        smasher
                        crewneck
                    </h1>

                    <NonsenseBtn :btnTxt="'Shop all'" />
                </div>
            </div>
        </article>
        <WearList v-if="wears" :wears="slicedWears(4, 8)" />
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Fcorporate_jacket.e7d12d68.webp&f=webp" alt="">
        <WearList v-if="wears" :wears="slicedWears(8, 12)" />
        <img src="https://nonsense.jp/_image?href=%2F_astro%2Fcyberarm_gloves.d622d17a.webp&f=webp" alt="">
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
section>*:not(.full) {
    padding-inline: 64px;
}

h1 {
    color: white;
}


img {
    width: 100%;
    user-select: none;
}


article {
    position: relative;

    img {
        // height: auto;
        display: block;
    }

    div {
        position: absolute;
        // display: block;
        inset: 0;
        padding: 3rem;
        // --tw-text-opacity: 1;

        .test {
            flex-direction: column;
            // inset: 0;
            align-items: start;
            justify-content: end;
            gap: 1rem;
        }

        h1 {
            white-space: pre-line;
            width: 0rem; // is there a better way to do it?
            
            font-size: 4.5rem;
            text-transform: uppercase;
        }
    }
}
</style>
