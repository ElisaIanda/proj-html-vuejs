<script>
export default {

}
</script>

<template>
    <section>

        <div class="row">
            <div class="col text-center">
                <h1>Faculties available at EduPrime</h1>
                <div style="margin: 30px 380px 45px 380px;">
                    A single university with a load of courses, tailored
                    to satisfy any student’s needs.</div>
            </div>
        </div>


        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active text-center" id="nav-tab1-tab" data-bs-toggle="tab" href="#nav-tab1"
                    role="tab" aria-controls="nav-tab1" aria-selected="true">
                    <img class="w-100 tab-img" src="../assets/img/Gavel-v2.png" alt="">
                    <h5>
                        Law Faculty
                    </h5>
                </a>
                <a class="nav-item nav-link text-center" id="nav-tab2-tab" data-bs-toggle="tab" href="#nav-tab2" role="tab"
                    aria-controls="nav-tab2" aria-selected="false">
                    <img class="w-100 tab-img" src="../assets/img/Coins-tabs-v2.png" alt="">
                    <h5>
                        Economy
                    </h5>
                </a>
                <a class="nav-item nav-link text-center" id="nav-tab3-tab" data-bs-toggle="tab" href="#nav-tab3" role="tab"
                    aria-controls="nav-tab3" aria-selected="false">
                    <img class="w-100 tab-img" src="../assets/img/Medicine-tabs-v2.png" alt="">
                    <h5>
                        Medicine
                    </h5>
                </a>
                <a class="nav-item nav-link text-center" id="nav-tab4-tab" data-bs-toggle="tab" href="#nav-tab4" role="tab"
                    aria-controls="nav-tab4" aria-selected="true">
                    <img class="w-100 tab-img" src="../assets/img/Computer-tabs-v2.png" alt="">
                    <h5>
                        Computer Science
                    </h5>
                </a>
                <a class="nav-item nav-link text-center" id="nav-tab5-tab" data-bs-toggle="tab" href="#nav-tab5" role="tab"
                    aria-controls="nav-tab5" aria-selected="false">
                    <img class="w-100 tab-img" src="../assets/img/Palette-tabs-v2.png" alt="">
                    <h5>
                        Grapich Design
                    </h5>
                </a>
            </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">
                <div class="container mb-5">
                    <div class="d-flex padding-16 align-items-center">
                        <div class="col-6 text-center">
                            <img src="../assets/img/gavel-illustration.png" alt="">
                        </div>
                        <div class="col-6">
                            <h2>Law Faculty</h2>
                            <div class="tabs-description">
                                Learning from world-leading academics and practitioners, you’ll not only receive an
                                outstanding grounding in the theory of law, but you will be able to understand how
                                those
                                principles are applied in practice through a range of student-led activities and
                                competitions.
                            </div>
                            <button class="btn-pink my-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab2-tab">
                <div class="container mb-5">
                    <div class="d-flex padding-16 align-items-center">
                        <div class="col-6 text-center">
                            <img src="../assets/img/Economy.png" alt="">
                        </div>
                        <div class="col-6">
                            <h2>Economy</h2>
                            <div class="tabs-description">
                                Economics focuses on the behaviour and interactions of economic agents and how economies
                                work. Microeconomics analyzes basic elements in the economy, including individual agents and
                                markets, their interactions, and the outcomes of interactions, including unemployment of
                                resource.
                            </div>
                            <button class="btn-pink my-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-tab3" role="tabpanel" aria-labelledby="nav-tab3-tab">
                <div class="container mb-5">
                    <div class="d-flex padding-16 align-items-center">
                        <div class="col-6 text-center">
                            <img src="../assets/img/Medicine.png" alt="">
                        </div>
                        <div class="col-6">
                            <h2>Medicine</h2>
                            <div class="tabs-description">
                                Medicine is the science and practice of establishing the diagnosis, prognosis, treatment,
                                and prevention of disease. Medicine encompasses a variety of health care practices evolved
                                to maintain and restore health by the prevention and treatment of illness.
                            </div>
                            <button class="btn-pink my-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-tab4" role="tabpanel" aria-labelledby="nav-tab1-tab">
                <div class="container mb-5">
                    <div class="d-flex padding-16 align-items-center">
                        <div class="col-6 text-center">
                            <img src="../assets/img/Computer-Science.png" alt="">
                        </div>
                        <div class="col-6">
                            <h2>Computer Science</h2>
                            <div class="tabs-description">
                                Computer science is the study of processes that interact with data and that can be
                                represented as data in the form of programs. It enables the use of algorithms to manipulate,
                                store, and communicate digital information. A computer scientist studies the theory of
                                computation software systems.
                            </div>
                            <button class="btn-pink my-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-tab5" role="tabpanel" aria-labelledby="nav-tab2-tab">
                <div class="container mb-5">
                    <div class="d-flex padding-16 align-items-center">
                        <div class="col-6 text-center">
                            <img src="../assets/img/Graphic-Design.png" alt="">
                        </div>
                        <div class="col-6">
                            <h2>Graphic Design</h2>
                            <div class="tabs-description">
                                Graphic design is the process of visual communication and problem-solving through the use of
                                typography, photography and illustration. The field is considered a subset of visual
                                communication and communication design, but sometimes the term ``graphic design`` is used
                                synonymously.
                            </div>
                            <button class="btn-pink my-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../src/assets/styles/partials/variable" as *;

.container {

    .tab-img {
        padding: 40px;
    }

    .nav {
        flex-wrap: nowrap;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    }

    .nav-item {
        width: 45%;
    }

    h5 {
        color: #E56768;
        line-height: 14px;
        font-weight: 600;
    }

    // .nav-tabs .nav-link {
    //     margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
    //     border: var(--bs-nav-tabs-border-width) solid transparent;
    // }

    .nav-tab {
        --bs-nav-tabs-border-radius: 0;
    }

    .tab-pane {
        margin-top: 70px;
    }

    .active {
        background: #E56768;
        border: none;
    }

    .active>img {
        filter: brightness(3);
    }

    .active>h5 {
        color: white;
    }

    .show {
        background: white;

        h2 {
            color: #434959;
            font-size: 38px;
        }

        .tabs-description {
            color: #8b8b8a;
            margin-top: 45px;
            margin-bottom: 40px;
        }
    }

    .padding-16 {
        padding: 16px;
    }

    .btn-pink:hover {
        background-color: #e9d758;
        color: #ffffff;
    }

}
</style>