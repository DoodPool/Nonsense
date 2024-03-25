<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,

            h: null,
            d: null,

            f: null,
            m: null,
            u: null,
            e: null,
        }
    },
    mounted() {
        this.canvas = this.$refs.canvas
        this.canvas.id = "background"
        this.ctx = this.canvas.getContext("webgl")

        if (!this.ctx) {
            console.error("Could not get WebGL context")
            return
        }
        console.log(this.ctx);
        console.log(this.canvas);


        const vertexShaderSource = `
        attribute vec2 position;
        varying vec2 v_position;

        void main() {
            v_position = position;
            gl_Position = vec4(position, 0.0, 1.0);
        }`

        // const s = this.canvas.dataset?.vertex 
        // if (!s) {
        //     console.error("Could not get vertex shader")
        //     return
        // }

        const fragmentShaderSource = `
        precision mediump float;
        varying vec2 v_position;

        void main() {
            float lineWidth = 0.01;
            float lineGap = 0.03;   
            float linePos = fract(v_position.y / (lineWidth + lineGap)); 

            float lineColor = step(lineWidth, linePos);
            gl_FragColor = vec4(vec3(lineColor), 1.0);
        }`

        this.canvas.dataset.fragment = 'avishai'
        // const a = this.canvas.dataset?.fragment 
        // if (!a) {
        //     console.error("Could not get fragment shader")
        //     return
        // }
        const o = this.ctx.createShader(this.ctx.VERTEX_SHADER)
        if (!o) {
            console.error("Could not create vertex shader")
            return
        }

        // this.ctx.shaderSource(o, s)
        this.ctx.shaderSource(o, vertexShaderSource)
        this.ctx.compileShader(o)

        const r = this.ctx.createShader(this.ctx.FRAGMENT_SHADER)
        if (!r) {
            console.error("Could not create fragment shader")
            return
        }

        // this.ctx.shaderSource(r, a)
        this.ctx.shaderSource(r, fragmentShaderSource)
        this.ctx.compileShader(r)

        const i = this.ctx.createProgram()
        if (!i) {
            console.error("Could not create shader program");
            return
        }
        console.log('i', i);

        this.ctx.attachShader(i, o)
        this.ctx.attachShader(i, r)
        this.ctx.linkProgram(i)
        this.ctx.useProgram(i)

        const c = this.ctx.getShaderInfoLog(o)
        const l = this.ctx.getShaderInfoLog(r)
        if (c || l) {
            console.error(`Shader error: ${c} ${l}`)
            return
        }

        this.h = new Float32Array([-1, 3, -1, -1, 3, -1])
        console.log(this.h);

        this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, this.ctx.createBuffer())
        this.ctx.bufferData(this.ctx.ARRAY_BUFFER, this.h, this.ctx.STATIC_DRAW)
        this.d = this.ctx.getAttribLocation(i, "coords")
        console.log('this.d', this.d);

        // this.ctx.vertexAttribPointer(this.d, 2, this.ctx.FLOAT, !1, 0, 0)
        // this.ctx.enableVertexAttribArray(this.d)
        this.ctx.vertexAttribPointer(0, 2, this.ctx.FLOAT, !1, 0, 0)
        this.ctx.enableVertexAttribArray(0)
        this.f = this.ctx.getUniformLocation(i, "resolution")
        this.m = this.ctx.getUniformLocation(i, "time")
        this.u = this.ctx.getUniformLocation(i, "scale")
        this.e = Date.now()

        this.x()
    },
    created() {
    },
    methods: {
        x() {
            if (!this.ctx) return

            this.ctx.uniform2f(this.f, this.canvas.clientWidth, this.canvas.clientHeight)

            const g = Math.ceil(window.devicePixelRatio)
            this.canvas.width = this.canvas.clientWidth * g
            this.canvas.height = this.canvas.clientHeight * g

            this.ctx.uniform1i(this.m, Date.now() - this.e)
            this.ctx.uniform1f(this.u, window.devicePixelRatio)
            this.ctx.viewport(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.clearColor(0, 0, 0, 0)
            this.ctx.drawArrays(this.ctx.TRIANGLES, 0, 3)

            // var v = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) // what am i looking at
            // v || requestAnimationFrame(this.x)
            requestAnimationFrame(this.x.bind(this))
        }
    },
}
</script>

<style scoped>
canvas {
    /* position: absolute; */
    height: 100vh;
    width: 100vw;

    background-color: rgb(0 0 0 / 1);
}
</style>