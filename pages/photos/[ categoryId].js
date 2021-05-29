import React from 'react'
import { getImages } from '../../utils'

function Single({images}) {
  console.log(`images`, images)
    return (
        <div className="row align-items-stretch">
      
      {images.map(function (img) {
        return (
          <div
          className="col-6 col-md-6 "
          key={img}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            href={`/uploads/${img}`}
            className="d-block photo-item"
            data-fancybox="gallery"
          >
            <img src={`/uploads/${img}`} alt="Image" className="img-fluid" />
            <div className="photo-text-more">
              <span className="icon icon-search"></span>
            </div>
          </a>
        </div>
        )
      })  }
        
      </div>
    )
}

export const getServerSideProps = (ctx) => {
  const images = getImages()
  return {
    props : {images}
  }
}


export default Single
