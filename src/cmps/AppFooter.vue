<template>
    <img class="footer-decoration" src="https://nonsense.jp/_image?href=%2F_astro%2Ffooter.bb9becd1.svg&f=svg" alt="">
    <footer class="app-footer">
        <div>
            <ul class="clean-list">
                <li>About us</li>
                <li>Refund policy</li>
                <li>shipping policy</li>
            </ul>
        </div>

        <div class="newsletter">
            <h1>Newsletter signup</h1>
            <p>Stay in the loop about the latest nonsense drops and special eveants.</p>
            <form>
                <input type="email" placeholder="Your e-mail">
                <button>Sign up</button>
            </form>
        </div>

        <img src="https://nonsense.jp/_image?href=%2F_astro%2Ficon.fc3a7207.svg&f=svg" alt="">
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-decoration {
    width: 100%;
}

.app-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    padding: 3rem;
    background-color: rgb(252 238 10);

    &>* {
        text-transform: uppercase;

    }

    li {
        font-size: 30px;
    }

    .newsletter {
        text-align: center;

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 20px;
            padding-block: 8px;
        }
    }

    img {
        margin-left: auto;
    }
}
</style>
