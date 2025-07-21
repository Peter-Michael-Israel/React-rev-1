import React from 'react'
import img from "../../assets/imgi_1_avataaars.svg"
export default function Home() {
    return (
        <>
            <div className="div-img text-white text-center p-5">
                <div className="img pt-5">
                    <img className="" src={img} alt="Avatar" width={250} />
                    <h2 className="text-uppercase fs-1 fw-bolder text-white">start framework</h2>
                    <div className="d-flex justify-content-center align-items-center gap-4 my-3">
                        <div style={{ height: '4px', width: '80px', backgroundColor: 'white' }}></div>
                        <i class="fa-solid fa-star"></i>
                        <div style={{ height: '4px', width: '80px', backgroundColor: 'white' }}></div>
                    </div>
                </div>
                <div className="pb-5">Graphic Artist - Web Designer - Illustrator</div>
            </div>







        </>
    )
}
