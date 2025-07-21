import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="div-contact pt-5">
        <div className="text">
          <h2 className="text-uppercase fs-1 fw-bolder text-center">contact section</h2>
          <div className="d-flex justify-content-center align-items-center gap-4 my-3">
            <div style={{ height: '4px', width: '80px', backgroundColor: 'black' }}></div>
            <i className="fa-solid fa-star"></i>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'black' }}></div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-50 pb-5">
          <form>
            <div className="mb-5">
              <input type="text" className="form-control" placeholder="userName"
                style={{
                  border: 'none',
                  borderBottom: '1px solid #c6c6c6',
                  boxShadow: 'none',
                }}
                id="userName" />
            </div>

            <div className="mb-5">
              <input type="text" className="form-control" placeholder="userAge"
                style={{
                  border: 'none',
                  borderBottom: '1px solid #c6c6c6',
                  boxShadow: 'none',
                }}
                id="userAge" />
            </div>

            <div className="mb-5">
              <input type="email" className="form-control" placeholder="userEmail"
                style={{
                  border: 'none',
                  borderBottom: '1px solid #c6c6c6',
                  boxShadow: 'none',
                }}
                id="userEmail" />
            </div>

            <div className="mb-3">
              <input type="password" className="form-control" placeholder="userPassword"
                style={{
                  border: 'none',
                  borderBottom: '1px solid #c6c6c6',
                  boxShadow: 'none',
                }}
                id="userPassword" />
            </div>
            <button className="btn text-white">send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
