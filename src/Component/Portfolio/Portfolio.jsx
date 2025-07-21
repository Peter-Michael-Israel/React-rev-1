import React , {useState,useEffect} from 'react'
import image from "../../assets/imgi_1_poert1.png"
import image2 from "../../assets/imgi_2_port2.png"
import image3 from "../../assets/imgi_3_port3.png"
export default function Portfolio() {

  return (
    <>
      <div className="div-portfolio pt-5">
        <div className="text">
          <h2 className="text-uppercase fs-1 fw-bolder text-center">portfolio component</h2>
          <div className="d-flex justify-content-center align-items-center gap-4 my-3">
            <div style={{ height: '4px', width: '80px', backgroundColor: 'black' }}></div>
            <i className="fa-solid fa-star"></i>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'black' }}></div>
          </div>
        </div>
      </div>

      <div className="images pb-5">
        <div className="container">
          <div className="row d-flex gy-5 gx-5">
            <div className="col-md-4">
              <div className="img position-relative">
                <img src={image} alt="Avatar" className="w-100 rounded-3"/>
                <div className="inner position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3">
                  <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img position-relative">
                <img src={image2} alt="Avatar" className="w-100 rounded-3"/>
                <div className="inner position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3">
                  <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="img position-relative">
                <img src={image3} alt="Avatar" className="w-100 rounded-3"/>
                <div className="inner position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3">
                  <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="img position-relative">
                <img src={image} alt="Avatar" className="w-100 rounded-3"/>
                <div className="inner position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3">
                  <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="img position-relative">
                <img src={image2} alt="Avatar" className="w-100 rounded-3"/>
                <div className="inner position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3">
                  <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="img position-relative">
                <img src={image3} alt="Avatar" className="w-100 rounded-3"/>
                <div className="inner position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center rounded-3">
                  <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}
