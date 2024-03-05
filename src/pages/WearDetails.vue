<template>
    <section>
        <div class="test">
            <WearCarousel :imgUrls="wear.imgUrls" />
            <!-- <canvas ref="canvas" width="600" height="600"></canvas> -->
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
                    <p class="fw-700">*In light of the holiday season and associated logistical challenges, we
                        anticipate
                        shipping this
                        particular
                        item in the early to mid-January timeframe, ensuring a smooth and timely delivery to you.</p>
                    <p>{{ wear.sizeOnModel }}</p>
                </article>

                <WearSizeChart :chart="wear.sizeChart" />

                <p class="fw-700 tx-upper">For all international orders, customers will be responsible for any
                    additional
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
            console.log(`Couldn't get wears...`)
        }
    },
    // mounted() {
    //     this.drawPixelatedImage()
    // },
    methods: {
        drawPixelatedImage() {
            const canvas = this.$refs.canvas

            canvas.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
                'image-rendering: -moz-crisp-edges;' + // FireFox
                'image-rendering: -o-crisp-edges;' +  // Opera
                'image-rendering: -webkit-crisp-edges;' + // Chrome
                'image-rendering: crisp-edges;' + // Chrome
                'image-rendering: -webkit-optimize-contrast;' + // Safari
                'image-rendering: pixelated; ' + // Future browsers
                '-ms-interpolation-mode: nearest-neighbor;'; // IE

            const context = canvas.getContext('2d')

            const image = new Image()
            image.src = 'https://cdn.shopify.com/s/files/1/0649/5197/6159/files/23110309502_1_c08c7d09-c692-4163-a0d4-f6af9d8e2211.png'
            image.onload = () => {
                context.webkitImageSmoothingEnabled = false
                context.mozImageSmoothingEnabled = false
                context.msImageSmoothingEnabled = false
                context.imageSmoothingEnabled = false

                var percent = 0.1
                var scaledWidth = canvas.width * percent
                var scaledHeight = canvas.height * percent

                context.drawImage(image, 0, 0, scaledWidth, scaledHeight)
                context.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, canvas.width, canvas.height)
                context.clearRect(0, 0, scaledWidth, scaledHeight);
            }
        },
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
    max-width: 728px;
    min-width: 500px;
    margin-inline-start: 100px;
}
</style>