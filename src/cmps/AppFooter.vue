<template>
    <section>
        <router-link v-if="isHome" to="/wears" class="link-test">
            <NonsenseBtn class="btn-center " :btnTxt="'Shop all'" />
        </router-link>

        <img :class="{ 'home': isHome }" class="footer-decoration"
            src="https://nonsense.jp/_image?href=%2F_astro%2Ffooter.bb9becd1.svg&f=svg" alt="">
        <footer :class="{ 'not-home': !isHome }" class="app-footer">
            <div class="site-info">
                <ul class="clean-list">
                    <router-link to="/about">
                        <li>About us</li>
                    </router-link>
                    <li>Refund policy</li>
                    <li>shipping policy</li>
                </ul>
            </div>

            <div class="newsletter">
                <h1>Newsletter signup</h1>
                <p v-if="!isMobile">Stay in the loop about the latest nonsense drops and special events.</p>
                <form>
                    <input type="email" placeholder="Your e-mail">
                    <button v-if="isMobile">subscribe</button>
                    <button v-else>Sign up</button>
                </form>
            </div>

            <img v-if="isHome" src="https://nonsense.jp/_image?href=%2F_astro%2Ficon.fc3a7207.svg&f=svg" alt="">
            <img v-else src="https://nonsense.jp/_image?href=%2F_astro%2Ficon_dark.affb8e1b.svg&f=svg" alt="">

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
    props: {
        isHome: {
            required: true,
        },
        isMobile: {
            required: true,
        },
    },
    components: {
        NonsenseBtn,
    },
}
</script>

<style lang="scss" scoped>
.footer-decoration {
    display: block;
    width: 100%;
    background-color: transparent;
    filter: brightness(0);
}

.app-footer {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    @media (max-width: 754px) {
        grid-template-columns: auto;
        padding: 0;

        p {
            padding-block-end: 1.2rem;
            margin-block-start: 1.5rem;
        }
    }

    @media (min-width: 755px) {
        row-gap: 4rem;
    }

    padding-inline: 4rem;
    padding-block: 2rem;

    background-color: rgb(252 238 10);

    &>* {
        text-transform: uppercase;

        @media (max-width: 754px) {
            text-align: center;
            margin: auto;
        }
    }

    .site-info {
        align-self: center;
        line-height: 2.25rem;

        li {
            font-size: 30px;
            transition: 0.2s;
            cursor: pointer;

            @media (max-width: 754px) {
                margin-block-end: 0.5rem;
            }

            &:hover {
                color: lighten($color: black, $amount: 35);
            }
        }

        a {
            color: black;
            text-decoration: none;
        }
    }

    .newsletter {
        @media (max-width: 754px) {
            grid-row: 1;
            width: 100%;
        }

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
        }

        @media (max-width: 754px) {
            padding: 1rem;

            h1 {
                font-size: 1.875rem;
                line-height: 2.25rem;
            }

            form>* {
                display: block;
                width: 100%;
                margin: 0;
                margin-block-end: 0.5rem;
            }

            form button {
                margin: 0;
            }
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
            @media (max-width: 754px) {
                font-size: 1.5rem;
            }

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
        width: 16rem;

        @media (max-width: 754px) {
            width: 11rem;
            margin-block: 1.5rem;
        }

    }

    .social-links-container {
        @media (max-width: 754px) {
            grid-row: 4;
        }

        @media (min-width: 755px) {
            grid-column: 3;
        }

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
    margin-block: 4rem;
}

.home {
    filter: brightness(1);
}

.not-home {
    background-color: black;
    color: white;

    .site-info a {
        color: white;
    }

    form {
        button {
            background-color: #ff3a3a;
            color: white;

            &:hover {
                background-color: white;
                color: #ff3a3a;
            }
        }

        input {
            background-color: black;
            border-color: white;
            color: white;
        }
    }

    .social-links-container a {
        color: white;

        &:hover {
            color: darken($color: white, $amount: 35);
        }
    }
}
</style>
