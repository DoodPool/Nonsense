<template>
    <section>
        <div class="test">
            <WearCarousel :imgUrls="wear.imgUrls"/>
        </div>
        <div class="wear-info">
            <h1 class="tx-upper">NØИSENSE x cyberpunk: edgerunners - {{ wear.name }} </h1>
            <p class="price">$98.99</p>
            <p class="tax">Tax included.</p>
            <article>
                <h2>color:</h2>
                <button class="tx-cap">gun metal</button>
                <button class="tx-cap">deep blue</button>
            </article>
            <article>
                <h2>size:</h2>
                <button class="tx-upper">s</button>
                <button class="tx-upper">m</button>
                <button class="tx-upper">l</button>
                <button class="tx-upper">xl</button>
                <button class="tx-upper">xxl</button>
            </article>
            <button class="add-btn tx-upper">add to bag</button>
            <div class="mw-32">
                <article>
                    <p>{{ wear.aboutWear }}</p>
                    <p class="fw-700">*In light of the holiday season and associated logistical challenges, we anticipate
                        shipping this
                        particular
                        item in the early to mid-January timeframe, ensuring a smooth and timely delivery to you.</p>
                    <p>{{ wear.sizeOnModel }}</p>
                </article>

                <WearSizeChart :chart="wear.sizeChart" />

                <p class="fw-700 tx-upper">For all international orders, customers will be responsible for any additional
                    local
                    customs
                    fees and duties.
                </p>
            </div>
        </div>
    </section>
</template>
  
<script>
import { wearService } from '../services/wear.service.local'
import WearSizeChart from '../cmps/WearSizeChart.vue'
import WearCarousel from '../cmps/WearCarousel.vue'

export default {
    data() {
        return {
            wear: null,
        }
    },
    async created() {
        try {
            const wearId = this.$route.params.wearId
            console.log('wearId', wearId)
            this.wear = await wearService.get(wearId)
            // this.wear = this.wears.find(wear => wear._id === wearId)
        } catch (err) {
            console.log(`Couldn't get wears...`);
        }
    },
    components: {
        WearSizeChart,
        WearCarousel,
    },
}
</script>
  
<style scoped>
section {
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-block-start: 5rem;

    .wear-info {

        h1 {
            font-size: 1.5rem;
            line-height: 2rem;
            font-family: vt323, monospace;
            font-weight: 400;
        }

        .price {
            font-size: 1rem;
            line-height: 1.5rem;
            font-family: mattone;
        }

        .tax {
            font-size: 1rem;
            line-height: 12px;
        }

        h2 {
            font-size: 20px;
            line-height: 28px;
            font-weight: 400;
        }

        button {
            background-color: white;
            border: 1px black solid;

            font-size: 1.25rem;
            line-height: 1.75rem;
            padding-inline: 1rem;
            margin-inline-end: 7px;
            font-family: vt323;

            transition: 0.2s;
            cursor: pointer;

            &:hover {
                background-color: #ff3a3ae0;
                border-color: #ff3a3ae0;
                color: white;
            }

        }

        article p,
        p:last-child {
            margin-block: 1rem;
            line-height: 28px;
            font-size: 18px;
        }

        .add-btn {
            font-size: 1.5rem;
            line-height: 2rem;

            background-color: black;
            color: white;

            padding-block: 0.5rem;
            padding-inline: 5rem;
            margin-block: 1rem;
        }
    }
}

img {
    width: 100%;
}

.test {
    width: 728px;
}
</style>