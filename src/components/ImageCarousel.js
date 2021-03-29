import React from 'react'
import {CarouselProvider, Image, Slide, Slider} from "pure-react-carousel"
import {Divider} from "semantic-ui-react"
import CustomDotGroup from "../components/CustomDotGroup"

const ImageCarousel = ({listing}) => {
    const images = listing.photos.map(photo => {
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
      {/* map over slides with imageArray */}
    <Slider> 
        {images}
      {/* <Slide tag="a" index={0}>
        <Image src="https://lorempixel.com/800/800/cats/0" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://lorempixel.com/800/800/cats/1" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://lorempixel.com/800/800/cats/2" />
      </Slide> */}
    </Slider>

    <Divider />
    <CustomDotGroup slides={listing.photos.length} />
  </CarouselProvider>
    )
}

export default ImageCarousel
