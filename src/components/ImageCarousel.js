import React from 'react'
import {CarouselProvider, Image, Slide, Slider} from "pure-react-carousel"
import {Divider} from "semantic-ui-react"
import CustomDotGroup from "../components/CustomDotGroup"

const ImageCarousel = ({listing}) => {
    let sample = listing.photos.slice(0, 14)

    const images = (listing.photos.length > 14 ? sample : listing.photos).map(photo => {
        return (
            <Slide tag="a" index={listing.photos.indexOf(photo)}>
                <Image src={photo.href.slice(0, (photo.href.length)-5)+'xd-w1020_h770_q80.jpg'} />
            </Slide>
        )
    })
    
    return (
        <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={listing.photos.length} // Variable to array.length
  >
    <Slider> 
        {images}
    </Slider>

    <Divider />
    <CustomDotGroup slides={listing.photos.length > 14 ? sample.length : listing.photos.length} />
  </CarouselProvider>
    )
}

export default ImageCarousel
