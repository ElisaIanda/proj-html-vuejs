<script>
import { store } from '../store';
import HeaderSlider from './HeaderSlider.vue';
export default {

    components: {
        HeaderSlider
    },

    data() {
        return {
            store
        }
    },

    methods: {
        getImage(img) {
            return new URL(`../assets/img/${img}`, import.meta.url).href
        }
    }
}
</script>

<template>
    <header class="">
        <!-- Stampo img -->
        <img class="slider-img" :src="getImage(`theme_slider${store.slideIndex}_bg-1.jpg`)">

        <div class="row justify-content-between bg-color">
            <div class="header-container d-flex flex-wrap align-items-center justify-content-center"
                style="padding: 30px 50px">
                <div class="col-4">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/img/theme_eduprime_logo.png" alt="" style="max-width: 270px;">
                    </a>
                </div>
                <div class="col-8 nav-bar">
                    <nav>
                        <ul>
                            <li class="dropdown d-flex" v-for="(li, i) in store.navMenu" :key="i">
                                <div class="drop-menu" href="#">{{ li.name }}</div>
                                <i class="fa-solid fa-caret-down" v-if="li.menu"></i>
                                <ul class="dropdown-menu" v-if="li.menu">
                                    <li class="dropdown-item" v-for="(liMenu, menu) in li.menu" :key="menu">
                                        <a href="#" class="drop-menu menu-down">{{ liMenu }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button class="my-btn btn-yellow" style="margin-left: 420px;">VIEW COURSES</button>
                </div>

                <HeaderSlider />
            </div>
            <div class="w-100 overflow-hidden">
                <img src="../assets/img/Wave-1.png" class="bg-decoration" alt="">
            </div> 
        </div>
    </header>
</template>




<style lang="scss" scoped>
.slider-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    animation: img 1s;
}

@keyframes img {
    0% {
        opacity: 0
    }

    ;

    100% {
        opacity: 1
    }
}


header {
    position: relative;
    color: white;
    overflow: hidden;
}


.bg-color {
    background-color: #e56767d8;
}

.bg-decoration {
    height: 150px;
    transform: translate(-500px, 0px);
    margin-top: 45px;
}

.nav-bar {
    display: flex;

    nav {
        display: flex;
        font-size: 17px;

        ul {
            display: flex;
            margin-bottom: 0;
            padding-left: 0;
            list-style: none;

            li:hover{
                color:#e9d758;
            }

            .dropdown {
                padding: 35px 15px;

                .a {
                    text-decoration: none;
                }

                &:hover {
                    color: white;
                }

                &:hover>.dropdown-menu {
                    display: block;
                }

                .fa-solid {
                    padding: 8px;
                }

                .dropdown-menu {
                    display: none;
                    border: none;
                    margin-top: 50px;

                    .menu-down {
                        color: #5c5e6c;
                        font-weight: 500;
                    }
                }

                .drop-menu:hover {
                    color: #e56767d8;
                    ;
                }

            }
        }
    }

}
</style> 
