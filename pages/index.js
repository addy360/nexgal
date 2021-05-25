import React from 'react'
import Category from '../components/Category'
import Nav from '../components/Nav'

function index() {
  const cats = [ 1,2,3,4,5,6,7 ];
  return (
   
        <div className="container-fluid photos">
          <div className="row align-items-stretch">

          { cats.map((_,index)=> (<Category key = { index } /> ) ) }
          
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 text-center py-5">
              <p>
                Copyright &copy;
                
                All rights reserved
              </p>
            </div>
          </div>
        </div>
     
  )
}

export default index
