<template>
    <section :class="{ 'none': shouldHideMenu }">
        <div class="menu-header flex space-between">
            <router-link to="/">
                <img @click="onToggleMenu()" src="https://nonsense.jp/_astro/logo_wide.0473e46d.svg" alt="">
            </router-link>
            <img @click="onToggleMenu()" src="https://nonsense.jp/_astro/cart_x.a9c2ad50.svg" alt="">
        </div>

        <nav>
            <p>Shop</p>
            <p>Lookbook</p>
            <p>About</p>
        </nav>

        <div class="social-links-container clean-list">
            <a href="https://twitter.com/nonsensejapan"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="https://www.instagram.com/nonsense_jp"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="https://www.tiktok.com/@nonsense_jp"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
            <a href="mailto:connect@nonsense.jp"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
        </div>

    </section>
</template>

<script>
export default {
    props: {
        shouldHideMenu: {
            required: true,
        },
        onToggleMenu: {
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
section {
    position: fixed;

    display: grid;
    grid-template-rows: 5rem 1fr 5rem;

    height: 100vh;
    width: 100vw;
    background-color: black;

    z-index: 10;

    color: white;

    .menu-header {
        padding-inline: 2rem;
        padding-block-start: 2.5rem;

        a img {
            height: 1.25rem;
        }

        img {
            height: 1.75rem;
        }
    }

    nav {
        align-self: center;
        text-align: center;
        font-size: 3.75rem;
        text-transform: uppercase;
        line-height: 1.125;
        // animation: slide-in .5s;
    }

    .social-links-container {
        display: flex;
        width: 16rem;
        justify-content: center;
        margin: auto;

        gap: 1.35rem;

        &>* {
            font-size: 1.25rem;
            line-height: 1.75rem;
            color: white;
            transition: 0.2s;

            &:hover {
                color: lighten($color: black, $amount: 65);
            }
        }
    }

}

img {
    cursor: pointer;
}

.grid {
    display: grid;
}

.none {
    display: none;
}
</style>
