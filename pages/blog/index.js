import React from 'react'
import Link from "next/link";

function Blog() {
  return (
    <div className="row justify-content-center">
    <div className="col-md-8 pt-4">
      <div className="row mb-5" data-aos="fade-up">
        <div className="col-12">
          <h2 className="text-white mb-4 text-center">My Blog</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 " data-aos="fade-up">
          <div className="d-flex blog-entry blog__item  align-items-start">
            <div className="mr-5 img-wrap">
              <Link href="/blog/single" >
              <a 
                ><img
                  src="/uploads/blog_1.jpg"
                  alt="Image"
                  className="img-fluid blog__item--img"
              /></a>
              </Link>
              
            </div>
            <div>
              <h2 className="mt-0 mb-2 blog__item--title ">
              <Link href="/blog/single" >
                <a 
                  >An amazing gallery, Feel free to post your memorable pictures for world to see</a
                >
                </Link>
              </h2>
              <div className="meta blog__item--meta mb-3">
                Posted by John on
                <Link href="/blog/single" >
                <a>Feb. 24, 2020</a>
                </Link>
              </div>
              <p className ="blog__item--para " >
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Officiis aliquid doloremque qui, saepe alias eum?
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 " data-aos="fade-up">
          <div className="d-flex blog-entry blog__item  align-items-start">
            <div className="mr-5 img-wrap">
              <Link href="/blog/single" >
              <a 
                ><img
                  src="/uploads/blog_1.jpg"
                  alt="Image"
                  className="img-fluid blog__item--img"
              /></a>
              </Link>
              
            </div>
            <div>
              <h2 className="mt-0 mb-2 blog__item--title ">
              <Link href="/blog/single" >
                <a 
                  >An amazing gallery, Feel free to post your memorable pictures for world to see</a
                >
                </Link>
              </h2>
              <div className="meta blog__item--meta mb-3">
                Posted by John on
                <Link href="/blog/single" >
                <a>Feb. 24, 2020</a>
                </Link>
              </div>
              <p className ="blog__item--para " >
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Officiis aliquid doloremque qui, saepe alias eum?
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 " data-aos="fade-up">
          <div className="d-flex blog-entry blog__item  align-items-start">
            <div className="mr-5 img-wrap">
              <Link href="/blog/single" >
              <a 
                ><img
                  src="/uploads/blog_1.jpg"
                  alt="Image"
                  className="img-fluid blog__item--img"
              /></a>
              </Link>
              
            </div>
            <div>
              <h2 className="mt-0 mb-2 blog__item--title ">
              <Link href="/blog/single" >
                <a 
                  >An amazing gallery, Feel free to post your memorable pictures for world to see</a
                >
                </Link>
              </h2>
              <div className="meta blog__item--meta mb-3">
                Posted by John on
                <Link href="/blog/single" >
                <a>Feb. 24, 2020</a>
                </Link>
              </div>
              <p className ="blog__item--para " >
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Officiis aliquid doloremque qui, saepe alias eum?
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 " data-aos="fade-up">
          <div className="d-flex blog-entry blog__item  align-items-start">
            <div className="mr-5 img-wrap">
              <Link href="/blog/single" >
              <a 
                ><img
                  src="/uploads/blog_1.jpg"
                  alt="Image"
                  className="img-fluid blog__item--img"
              /></a>
              </Link>
              
            </div>
            <div>
              <h2 className="mt-0 mb-2 blog__item--title ">
              <Link href="/blog/single" >
                <a 
                  >An amazing gallery, Feel free to post your memorable pictures for world to see</a
                >
                </Link>
              </h2>
              <div className="meta blog__item--meta mb-3">
                Posted by John on
                <Link href="/blog/single" >
                <a>Feb. 24, 2020</a>
                </Link>
              </div>
              <p className ="blog__item--para " >
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Officiis aliquid doloremque qui, saepe alias eum?
              </p>
            </div>
          </div>
        </div>
        
       
        <div className="col-12 text-center">
          <div className="custom-pagination">
            <span>1</span>
            <a href="blog.html#">2</a>
            <a href="blog.html#">3</a>
            <span>...</span>
            <a href="blog.html#">7</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog
