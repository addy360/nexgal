import React from 'react'

function SingleBlog() {
    return (
             <div className="row justify-content-center">
                <div className="col-md-6 pt-4">
                <figure className="mb-5" data-aos="fade-up">
                    <img src="/uploads/img_1.jpg" alt="Image" className="img-fluid" />
                    <i>Jane Doe</i>
                </figure>
                <h2 className="text-white mb-4" data-aos="fade-up">
                    Blog Details
                </h2>
                <div className="row" data-aos="fade-up">
                    <div className="col-md-12">
                        <p>Excepturi soluta maxime velit vitae tempore corporis, aliquid quidem modi libero! Optio minima esse hic repellendus a dolor perferendis dolore impedit quis et! Minus maxime itaque beatae totam eos reiciendis.
                        Excepturi soluta maxime velit vitae tempore corporis, aliquid quidem modi libero! Optio minima esse hic repellendus a dolor perferendis dolore impedit quis et! Minus maxime itaque beatae totam eos reiciendis.
                        Excepturi soluta maxime velit vitae tempore corporis, aliquid quidem modi libero! Optio minima esse hic repellendus a dolor perferendis dolore impedit quis et! Minus maxime itaque beatae totam eos reiciendis.
                        Excepturi soluta maxime velit vitae tempore corporis, aliquid quidem modi libero! Optio minima esse hic repellendus a dolor perferendis dolore impedit quis et! Minus maxime itaque beatae totam eos reiciendis.
                        </p>
                        <div className="text-right">Jane Doe</div>
                    </div>
                </div>
                </div>
            </div>
    )
}


export const getServerSideProps = (ctx) => {
    
    return {
      props : {}
    }
  }

export default SingleBlog
