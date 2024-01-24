<template>
    <section>
        <NonsenseBtn :btnTxt="'Shop all'" />

        <img class="footer-decoration" src="https://nonsense.jp/_image?href=%2F_astro%2Ffooter.bb9becd1.svg&f=svg" alt="">
        <footer class="app-footer">
            <div class="site-info">
                <ul class="clean-list">
                    <li class="white-space">About us</li>
                    <li>Refund policy</li>
                    <li>shipping policy</li>
                </ul>
            </div>

            <div class="newsletter">
                <h1>Newsletter signup</h1>
                <p>Stay in the loop about the latest nonsense drops and special events.</p>
                <form>
                    <input type="email" placeholder="Your e-mail">
                    <button>Sign up</button>
                </form>
            </div>

            <img src="https://nonsense.jp/_image?href=%2F_astro%2Ficon.fc3a7207.svg&f=svg" alt="">

            <p><span class="tx-cap">Copyright</span> © 2023 nonsense japan</p>

            <div class="social-links-container clean-list">
                <a href="https://twitter.com/nonsensejapan"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a href="https://www.instagram.com/nonsense_jp"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="https://www.tiktok.com/@nonsense_jp"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
                <a href="mailto:connect@nonsense.jp"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
            </div>
        </footer>
    </section>
</template>

<script>
    import NonsenseBtn from './NonsenseBtn.vue'

export default {
    components: {
        NonsenseBtn,
    }
}
</script>

<style lang="scss" scoped>
.footer-decoration {
    display: block;
    width: 100%;
}

.app-footer {
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    grid-template-columns: 1fr 2fr 1fr;
    row-gap: 70px;

    padding-inline: 4rem;
    padding-block-end: 2.25rem;
    padding-block-start: 1.75rem;

    background-color: rgb(252 238 10);

    &>* {
        text-transform: uppercase;
    }

    .site-info {
        align-self: center;
        line-height: 2.25rem;

        li {
            font-size: 30px;
            transition: 0.2s;
            cursor: pointer;

            &:hover {
                color: lighten($color: black, $amount: 35);
            }
        }
    }

    .newsletter {
        text-align: center;
        align-self: center;
        line-height: 1.75rem;

        h1 {
            font-size: 3.75rem;
            line-height: 1;
            font-weight: inherit;
        }

        p {
            font-size: 20px;
            // padding-block: 8px;
        }
    }

    form {
        padding-block: 1rem;

        input {
            background-color: rgb(252 238 10);
            border: 1px black solid;
            font-family: inherit;
            font-size: 1.25rem;
            line-height: 1.75rem;
            padding-inline: 0.75rem;
        }

        button {
            background-color: black;
            color: white;
            border: none;

            font-family: inherit;
            font-size: 1.3rem;
            text-transform: uppercase;

            padding-inline: 1.4rem;
            padding-block: 0.3rem;
            margin-inline-start: 10px;

            transition: 0.2s;
            cursor: pointer;

            &:hover {
                background-color: #ff3a3ae0;
            }
        }
    }

    img {
        margin-inline-start: auto;
    }

    .social-links-container {
        grid-column: 3;

        display: flex;
        width: 16rem;
        justify-content: center;
        margin-inline-start: auto;

        gap: 1.25rem;

        &>* {
            font-size: 1.125rem;
            line-height: 1.75rem;
            color: black;
            transition: 0.2s;

            &:hover {
                color: lighten($color: black, $amount: 35);
            }
        }
    }
}

.discover-btn {
    margin-block-start: 4rem;
    margin-block-end: 2.5rem;
}
</style>
