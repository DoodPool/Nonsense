<template>
    <section :class="{ 'none': shouldHideMenu }">
        <div class="menu-header flex space-between">
            <router-link to="/">
                <img @click="onToggleMenu()" src="https://nonsense.jp/_astro/logo_wide.0473e46d.svg" alt="">
            </router-link>
            <img @click="onToggleMenu()" src="https://nonsense.jp/_astro/cart_x.a9c2ad50.svg" alt="">
        </div>

        <nav>
            <router-link to="/wears" @click="onToggleMenu()">
                <p>Shop</p>
            </router-link>
            <p>Lookbook</p>
            <router-link to="/about" @click="onToggleMenu()">
                <p>About</p>
            </router-link>
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
    top: 0;

    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100vw;
    background-color: black;

    z-index: 10;
    inset: 0;

    color: white;
    animation: fade-in .2s;

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
        display: flex;
        flex-direction: column;

        font-size: 3.75rem;
        line-height: 1.125;
        text-transform: uppercase;

        padding: 2rem;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        animation: slide-in .5s;
    }

    .social-links-container {
        display: flex;
        margin: auto;
        padding: 2rem;
        gap: 1.5rem;

        &>* {
            font-size: 1.25rem;
            line-height: 1.75rem;
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

.none {
    display: none;
}

a {
    color: white;
    text-decoration: none;
}
</style>
