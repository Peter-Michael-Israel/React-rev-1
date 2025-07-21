import React from 'react'

export default function About() {
  return (
    <div>
      <div className="div-About text-white">
        <h2 className="text-uppercase fs-1 fw-bolder text-white text-center">about component</h2>
        <div className="d-flex justify-content-center align-items-center gap-4 my-3">
          <div style={{ height: '4px', width: '80px', backgroundColor: 'white' }}></div>
          <i class="fa-solid fa-star"></i>
          <div style={{ height: '4px', width: '80px', backgroundColor: 'white' }}></div>
        </div>
        <div className="pargraphs d-flex gap-3">
          <div className="par1">
            <p>Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>

          <div className="par2">
            <p>Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
