<script>
export default {

}
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div class="col-4">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/img/theme_eduprime_logo.png" alt="" style="max-width: 270px;">
                    </a>
                </div>
                <div class="col-8">
                    <nav class="navbar navbar-expand-lg">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link active dropdown-toggle" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Home
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Driving School</a></li>
                                        <li><a class="dropdown-item" href="#">High School</a></li>
                                        <li><a class="dropdown-item" href="#">Kinder Garten</a></li>
                                        <li><a class="dropdown-item" href="#">Header Video</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Courses
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Our Courses</a></li>
                                        <li><a class="dropdown-item" href="#">Single Couses</a></li>
                                        <li><a class="dropdown-item" href="#">Instructur Profile</a></li>
                                        <li><a class="dropdown-item" href="#">Become a Teacher</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About Us</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        News
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">EduPrime Blog</a></li>
                                        <li><a class="dropdown-item" href="#">Single Post</a></li>
                                        <li><a class="dropdown-item" href="#">Category Post</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">How it Works</a></li>
                                        <li><a class="dropdown-item" href="#">Single Event</a></li>
                                        <li><a class="dropdown-item" href="#">University Shop</a></li>
                                        <li><a class="dropdown-item" href="#">Single Pruduct</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Purchase</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <button class="btn-header">View Courses</button>


                <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                    <div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" id="carousel-1">
                                <div class="col">
                                    <h1>Key to you succes</h1>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam quia
                                        fugiat
                                        impedit facilis dolorum voluptas modi blanditiis, possimus tenetur. Omnis quidem
                                        officia
                                        quia voluptatem ab nihil, error consequatur quis!</div>
                                </div>
                            </div>
                            <div class="carousel-item" id="carousel-2">
                                <!-- <img src="../assets/img/theme_slider2_bg-1.jpg" class="d-block w-100" alt="..."> -->
                            </div>
                            <div class="carousel-item" id="carousel-3">
                                <!-- <img src="../assets/img/theme_slider3_bg-1.jpg" class="d-block w-100" alt="..."> -->
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" id="carousel-1">
                            <div class="col">
                                <h1>Key to you succes</h1>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam quia fugiat
                                    impedit facilis dolorum voluptas modi blanditiis, possimus tenetur. Omnis quidem officia
                                    quia voluptatem ab nihil, error consequatur quis!</div>
                            </div>
                        </div>
                        <div class="carousel-item" id="carousel-2">
                            <img src="../assets/img/theme_slider2_bg-1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" id="carousel-3">
                             <img src="../assets/img/theme_slider3_bg-1.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div> -->

        </div>
        <div class="w-100 overflow-hidden">
            <img src="../assets/img/Wave-1.png" class="bg-decoration" alt="">
        </div>

    </header>
</template>

<style scoped lang="scss">
@use "../src/assets/styles/partials/variable" as *;

header {
    background-color: #db6b6b;
    font-family: Arial, Helvetica, sans-serif;

    .row {
        padding: 30px 50px;
    }

    #carousel-1 {
        background-image: url(../assets/img/theme_slider1_bg-1.jpg);
        height: 550px;
        // background-color: rgba(219, 107, 107, 0.5);
    }

    #carousel-2 {
        background-image: url(../assets/img/theme_slider2_bg-1.jpg);
        height: 550px;

    }

    #carousel-3 {
        background-image: url(../assets/img/theme_slider3_bg-1.jpg);
        height: 550px;

    }

    .bg-decoration {
        height: 150px;
        transform: translate(-500px, 0px);
    }

    .btn-header {
        background: #E9D758;
        padding: 16px 43px !important;
        border-radius: 50px;
        text-transform: uppercase !important;
        margin-left: 20px;
        letter-spacing: 0.5px;
        color: #fff;
        width: 20%;
        border: none;
    }
}

</style>
