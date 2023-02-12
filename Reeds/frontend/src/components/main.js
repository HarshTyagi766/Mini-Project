import React from 'react'
import '../csss/main.css'

export default function Main() {
    return (
        <>
            <div className="sn1">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../images/home.png" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/philosophy.png" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/about.png" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/services.png" class="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                {/* <!-- columns --> */}


                <div class="ce">
                    <div class="container my-5 ">
                        <div class="row">
                            <div class="col">

                                <div class="card photo" >
                                    <img src="../../images/j.jpeg" class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <p class="card-text">Jatin Singh - Frontend, Backend, ideation. Roll Number- 2100320130087</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col order-5">

                                <div class="card photo" >
                                    <img src="../../images/ha.jpeg" class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <p class="card-text">Harsh Tyagi - Frontend,  Backend, ideation. Roll Number- 2100320130078</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col order-1">

                                <div class="card photo">
                                    <img src="../../images/h.jpeg" class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <p class="card-text">Harsh Pandey - Frontend. Roll Number- 21003201300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- footer --> */}

                <div class="container">
                    <footer class="py-3 my-4">
                        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        </ul>
                        <p class="text-center text-muted">© 2023 Secu-Store - All rights reserved. </p>
                    </footer>
                </div>
            </div>

        </>
    )
}