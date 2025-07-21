import React from 'react'

export default function Footer() {
    return (

        <>
            <footer className="footer-section text-white">
                <div className="container py-5">
                    <div className="row justify-content-center text-center">

                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase fw-bold">Location</h5>
                            <p className="mb-0">2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase fw-bold">Around the Web</h5>
                            <div className="d-flex justify-content-center  gap-3 pt-2">

                                <div className="icon-circle">
                                    <i className="fa-brands fa-facebook fa-lg"></i>
                                </div>

                                <div className="icon-circle">
                                    <i class="fa-brands fa-twitter fa-lg"></i>
                                </div>

                                <div className="icon-circle">
                                    <i class="fa-brands fa-linkedin-in fa-lg"></i>
                                </div>

                                <div className="icon-circle">
                                    <i class="fa-solid fa-globe fa-lg"></i>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase fw-bold">About Freelancer</h5>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>


                </div>
                <div className="footer text-center p-4  mt-4">
                    <small className="mb-0">Copyright © Your Website 2021</small>
                </div>
            </footer>


        </>
    )
}
