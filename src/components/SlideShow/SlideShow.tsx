import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import './SlideShow.scss'

import { Autoplay, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
  data?: {
    url: string
    to: string
  }[]
}

const SlideShow = (props: Props) => {
  const { className, data } = props

  return (
    <>
      <Swiper
        wrapperClass={className}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={item.to}>
                <img srcSet={item.url} alt="banner-img" />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default SlideShow
