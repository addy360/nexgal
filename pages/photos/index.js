import React from 'react'
import Link from "next/link";
import { getImages } from '../../utils';
import Category from '../../components/Category';


function Photos({images}) {
  return (
    <div className="row align-items-stretch">
      {images.map(function(img) {
        return ( 
          <Category img={img} key={img} />
      )
      }) }
     

    </div>
  )
}

export const getServerSideProps = (ctx) => {
  const images = getImages()
  return {
    props : {images}
  }
}


export default Photos
