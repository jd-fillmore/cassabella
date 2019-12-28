import React from "react"

import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"

import ImageGallery from "react-image-gallery"
import image1 from "../../../images/pic.jpg"

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image1,
    thumbnail: image1,
  },
]

const FeaturedHome = () => {
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  )
}

export default FeaturedHome
