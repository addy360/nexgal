import React from 'react'

function Category() {
    return (
      <div className="col-6 col-md-6 col-lg-8" data-aos="fade-up">
        <a href="single.html" className="d-block photo-item">
          <img src="/uploads/img_2.jpg" alt="Image" className="img-fluid" />
          <div className="photo-text-more">
            <div className="photo-text-more">
              <h3 className="heading">Photos Title Here</h3>
              <span className="meta">42 Photos</span>
            </div>
          </div>
        </a>
      </div>
    )
}

export default Category
