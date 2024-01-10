<template>
    <section>

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

            <p>Copyright © 2023 nonsense japan</p>

            <ul class="social-links-container clean-list">
                <p>social-links</p>
            </ul>
        </footer>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-decoration {
    display: block;
    width: 100%;
}

.app-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;

    padding-inline: 3rem;
    padding-block: 3.5rem;
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
            font-size: 3.75rem;
            line-height: 1;
            font-weight: inherit;
        }

        p {
            font-size: 20px;
            padding-block: 8px;
        }
    }

    form {

        input {
            background-color: rgb(252 238 10);
            border: 1px black solid;
            // font-family: inherit;
        }

        button {
            background-color: black;
            color: white;
            border: none;

            font-family: inherit;
            font-size: 1.3rem;
            text-transform: uppercase;

            padding-inline: 1.3rem;
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
        text-align: center;
        width: 254px;
        margin-inline-start: auto;
    }
}
</style>
