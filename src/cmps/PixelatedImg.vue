<template>
    <div>
        <img ref="img" :src="imgSrc" alt="">
        <canvas width="515.5" height="515.5" ref="canvas"></canvas>
        <!-- <canvas ref="canvas" width="321.25" height="324.25"></canvas> -->
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            required: true,
        }
    },
    data() {
        return {
            canvas: null,
            ctx: null,
            subCanvas: null,
            subCtx: null,

            width: 515.5,
            height: 515.5,
            // width: 321.25,
            // height: 324.25,

            factor: 1,
            hoverFactor: .1,
            percent: 1,
            percentDiff: .04,
            animate: false,

            img: null,
        }
    },
    mounted() {
        this.canvas = this.$refs.canvas

        //On canvas
        this.canvas.addEventListener("mouseover", this.onAnimation)
        this.canvas.addEventListener("touchend", this.offAnimation)
        //Off canvas
        this.canvas.addEventListener("mouseout", this.offAnimation)
        requestAnimationFrame(this.draw.bind(this))

        this.canvas.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
            'image-rendering: -moz-crisp-edges;' + // FireFox
            'image-rendering: -o-crisp-edges;' +  // Opera
            'image-rendering: -webkit-crisp-edges;' + // Chrome
            'image-rendering: crisp-edges;' + // Chrome
            'image-rendering: -webkit-optimize-contrast;' + // Safari
            'image-rendering: pixelated; ' + // Future browsers
            '-ms-interpolation-mode: nearest-neighbor;'; // IE

        this.ctx = this.canvas.getContext('2d')

        this.ctx.webkitImageSmoothingEnabled = false
        this.ctx.mozImageSmoothingEnabled = false
        this.ctx.msImageSmoothingEnabled = false
        this.ctx.imageSmoothingEnabled = false

        if (this.ctx = this.canvas.getContext("2d"), this.subCanvas = document.createElement("canvas"),
            this.subCtx = this.subCanvas.getContext("2d"), !this.ctx || !this.subCtx) return

        this.img = this.$refs.img

        this.canvas.width = this.canvas.clientWidth
        this.canvas.height = this.canvas.clientHeight

        // console.log(this.canvas.clientHeight);
        // console.log(this.img.clientHeight);

        // console.log(this.canvas.clientWidth);
        // console.log(this.img.clientWidth);


        this.draw()

        // console.log('this.canvas', this.canvas);
        // console.log('this.ctx', this.ctx);
        // console.log('this.subCanvas', this.subCanvas);
        // console.log('this.subCtx', this.subCtx);
        // console.log('this.width', this.width);
        // console.log('this.height', this.height);
        // console.log('this.factor', this.factor);
        // console.log('this.hoverFactor', this.hoverFactor);
        // console.log('this.percent', this.percent);
        // console.log('this.percentDiff', this.percentDiff);
        // console.log('this.animate', this.animate);
        // console.log('this.img', this.img);
    },
    created() {
    },
    methods: {
        frameCalc() {
            if (this.percent > this.factor) {
                this.factor = Math.min(this.factor + this.percentDiff)
            } else {
                this.factor = Math.max(this.factor - this.percentDiff)
            }

            this.draw();

            if (Math.abs(this.percent - this.factor) < this.percentDiff) {
                this.factor = this.percent
                this.draw()
                this.animate = false
                return
            }

            requestAnimationFrame(this.frameCalc.bind(this))
        },
        onAnimation() {
            this.percent = this.hoverFactor
            if (!this.animate) {
                this.animate = true
                this.frameCalc()
            }
        },
        offAnimation() {
            this.percent = 1
            if (!this.animate) {
                this.animate = true
                this.frameCalc()
            }
        },
        draw() {
            if (!(!this.ctx || !this.subCtx || !this.subCanvas || !this.img)) {
                if (this.subCanvas.width = this.canvas.width * this.factor,
                    this.subCanvas.height = this.canvas.height * this.factor,
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                    this.subCtx.clearRect(0, 0, this.subCanvas.width, this.subCanvas.height),
                    this.img.naturalWidth >= this.img.naturalHeight) {

                    const t = this.img.naturalWidth / this.img.naturalHeight
                    // this.percent = (this.subCanvas.height - this.subCanvas.width / t) / 2;
                    this.subCtx.drawImage(this.img, 0, this.percent, this.subCanvas.width, this.subCanvas.width / t)
                } else {
                    const t = this.img.naturalWidth / this.img.naturalHeight
                    // this.percent = (this.subCanvas.width - this.subCanvas.height * t) / 2;
                    this.subCtx.drawImage(this.img, this.percent, 0, this.subCanvas.height * t, this.subCanvas.height)
                }
                if (this.ctx.imageSmoothingEnabled = !1,
                    this.subCanvas.width === 0 || this.subCanvas.height === 0) {
                    this.canvas.width = this.canvas.clientWidth
                    this.canvas.height = this.canvas.clientHeight
                    return
                }
                this.ctx.drawImage(this.subCanvas, 0, 0, this.subCanvas.width, this.subCanvas.height, 0, 0, this.canvas.width, this.canvas.height)
                // console.log('this.subCanvas.width', this.subCanvas.width);
                // console.log('this.subCanvas.height', this.subCanvas.height);
                // console.log('this.canvas.width', this.canvas.width);
                // console.log('this.canvas.height', this.canvas.height);
                if (this.factor === 1) {
                    this.canvas.style.opacity = "0"
                    this.img.style.opacity = "1"
                } else {
                    this.canvas.style.opacity = "1"
                    this.img.style.opacity = "0"
                }
            }
        },
    }
}
</script>

<style scoped>
div {
    position: relative;
    /* aspect-ratio: 3 / 4; */
    /* animation: fade-in; */

    img {
        height: 100%;
        width: 100%;
    }

    canvas {
        position: absolute;
        left: 0;
        top: 0;
        height: auto;
        width: 100%;
        cursor: pointer;
    }
}
</style>



bad
before 324 18 324 18
after 32 1 324 18

good
before 324 327 324 327
after 32 32 324 327
