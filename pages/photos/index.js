import React from 'react'
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";

function Photos({images}) {
  console.log(`images`, images)
  return (
    <div className="row align-items-stretch">
      {images.map(function(img) {
        return ( 
        <div className="col-6 col-md-6 col-lg-4" key={img} data-aos="fade-up">
          <Link href="/photos/single">
            <a  className="d-block photo-item">
              <img src={`/uploads/${img}`} alt="Image" className="img-fluid" />
              <div className="photo-text-more">
                <div className="photo-text-more">
                  <h3 className="heading">Photos Title Here</h3>
                  <span className="meta">42 Photos</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      )
      }) }
     

    </div>
  )
}

export const getServerSideProps = (ctx) => {
  const images = readdirSync( join( process.cwd(), 'public', 'uploads' ) )
  return {
    props : {images}
  }
}


export default Photos
