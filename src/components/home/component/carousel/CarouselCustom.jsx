import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'

const CarouselCustom = (props) => {
  return (
    <div>
        <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={5000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3200,
                    min: 1024
                  },
                  items: 4
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 1
                }
              }}
              showDots
              sliderClass=""
              slidesToSlide={4}
              swipeable
            >
              {
                props.items
              }
            </Carousel>
    </div>
  )
}

export default CarouselCustom