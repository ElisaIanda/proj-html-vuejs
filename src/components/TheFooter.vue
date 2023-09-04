<script>
import { store } from "../store"

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row align-items-baseline">
                <div class="col-3">
                    <div>
                        <img class="w-100" src="../assets/img/theme_eduprime_logo.png" alt="logo">
                        <p class="text-white">EduPrime is the most versatile WordPress theme for educational purposes,
                            showcasing universities,
                            courses, secondary schools etc.</p>
                        <div class="d-flex">
                            <div class="circle text-center">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>

                            <div class="circle text-center">
                                <i class="fa-brands fa-twitter"></i>
                            </div>

                            <div class="circle text-center">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-2 flex-grow-1" v-for="(menu, i) in store.footerMenu">
                    <ul style="list-style: none;">
                        <h3 class="text-white pb-3" id="title">{{ menu.title }}</h3>
                        <li class=" my-2" id="hover" v-for="(li, menuItem) in menu.menu">
                            <a class="text-white" style="text-decoration:none;" href="#">{{ li }}</a>
                        </li>
                    </ul>
                </div>

                <div class="col-3 flex-grow-1">
                    <div class="">
                        <div class="input-group flex-nowrap mb-3">
                            <input type="text" class="form-control email-input" placeholder="Email Address"
                                aria-label="Username" aria-describedby="addon-wrapping">
                            <span class="input-group-text lente " id="addon-wrapping">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                    </div>
                    <div class="categories">
                        <h5 class="text-white">Search categories</h5>

                        <div class="d-flex flex-wrap justify-content-end">
                            <div class="tag-borders" v-for="(tag, i) in store.footerTag" :key="i">
                                <a class="text-white" href="#">{{ tag }}</a>
                            </div>
                        </div>

                        <span class="privacy">ModelTheme. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #e56768;
    padding-top: 90px;
    padding-bottom: 60px;

    .circle {
        background: transparent;
        border: 2px solid #E9D758;
        border-radius: 50%;
        line-height: 48px;
        color: #fff !important;
        width: 50px;
        height: 50px;
        font-size: 18px;
        margin: 0 5px;
    }

    #title {
        font-size: 20px;
        font-weight: 700;
    }


    .email-input {
        border-radius: 35px;
        height: 70px;
        font-size: 15px;
        border: 0 none;
        float: left;
        padding: 25px;
        width: 100%;
        font-weight: 400;
        outline: 0;
    }


    .lente {
        position: absolute;
        top: -1px;
        padding: 21px 28px;
        background: #E9D758;
        border-radius: 50%;
        right: -1px;
        color: #fff;
        font-size: 20px;
        box-shadow: none;
        display: block;
        border: 0;
        outline: 0;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    }

    .input-group> :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    }

    .tag-borders {
        border: 1px solid white;
        border-radius: 30px;
        font-weight: 400;
        padding: 6px 15px;
        font-size: 12px;
        float: right;
        text-transform: uppercase;
        margin: 10px 0 0 10px;
    }

    .privacy {
        display: flex;
        color: #E9D758;
        justify-content: end;
        margin-top: 20px;
    }


}

.input-group:not(.has-validation)> :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,
.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select {
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
}
</style>