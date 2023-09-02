<script>
import { store } from '../store';
export default {

    data() {
        return {
            store
        }
    },

    methods: {
        getImage(img) {
            return new URL(`../assets/img/${img}`, import.meta.url).href
        },

        prevSlide() {

            store.slideIndex--;
            if (store.slideIndex < 0) {
                store.slideIndex = Object.keys(store.slider).length - 1;
            }

        },
        nextSlide() {

            store.slideIndex++;
            if (store.slideIndex > Object.keys(store.slider).length - 1) {
                store.slideIndex = 0;
            }
        },

    },

}
</script>


<template>
    <div class="slider">
        <i class="fa-solid fa-chevron-left arrow" @click="prevSlide()" style="margin-right:180px; margin-left: 30px;
"></i>

        <div class="slider-container">
            <div class="" v-for="(slide, i, index) in store.slider" :key="i" v-show="index === store.slideIndex">
                <h1>{{ slide.h1 }}</h1>
                <h5>{{ slide.description }}</h5>
                <div>{{ index }}</div>

                <div class="slider-btn d-flex justify-content-center gap-4">
                    <button class="my-btn btn-yellow">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        Search courses
                    </button>

                    <button class=" my-btn btn-white">
                        <i class="fa-solid fa-user-plus"></i>
                        Apply for university
                    </button>
                </div>
            </div>
        </div>

        <i class="fa-solid fa-chevron-right arrow" @click="nextSlide()" style="margin-left:180px;     margin-right: 30px;
"></i>

    </div>
</template>








<style lang="scss" scoped>
.slider {
    display: flex;
    justify-content: space-between;
    text-align: center;

    &:hover .arrow {
        opacity: 1;
    }

    .arrow {
        display: flex;
        align-items: center;
        opacity: 0;
        font-size: 40px;
        cursor: pointer;
        transition: all .7s ease-in;
    }

    .slider-container {

        h1,
        h5 {
            margin-bottom: 50px;
        }

        .btn-yellow:hover {
            color: #e56768;
            background-color: white;
        }

        .btn-white:hover {
            background-color: #e9d758;
            color: #ffffff;
        }

    }

    h1 {
        animation: h1 .8s;
    }

    h5 {
        animation: h5 1.4s;
    }

    button {
        animation: btn 2.6s;
    }

    @keyframes h1 {
        0% {
            transform: scale(0);
            opacity: 0
        }

        ;

        100% {
            transform: scale(1);
            opacity: 1
        }
    }

    @keyframes h5 {
        0% {
            transform: scale(0);
            opacity: 0
        }

        ;

        20% {
            transform: scale(0);
            opacity: 0
        }

        ;

        100% {
            transform: scale(1);
            opacity: 1
        }
    }

    @keyframes btn {
        0% {
            transform: scale(0);
            opacity: 0
        }

        ;

        20% {
            transform: scale(0);
            opacity: 0
        }

        ;

        100% {
            transform: scale(1);
            opacity: 1
        }
    }
}
</style>
