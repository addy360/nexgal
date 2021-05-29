import React from 'react'
import Link from "next/link";

function Category({img}) {
    let heading = img.split('.')
    heading.pop()
    heading = heading.join(" ")
    return (
      <div className="col-6 col-md-6 col-lg-4"  data-aos="fade-up">
        <Link href="/photos/single">
          <a  className="d-block photo-item">
            <img src={`/uploads/${img}`} alt="Image" className="img-fluid" />
            <div className="photo-text-more">
              <div className="photo-text-more">
                <h3 className="heading">{`${heading}`}</h3>
                <span className="meta">42 Photos</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    )
}

export default Category
