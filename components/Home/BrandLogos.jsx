// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const BrandLogos = () => {
  return (
    <>
      <div className="bg-white">
        <div className="home-brands relative mx-auto w-full overflow-hidden py-8 px-6 md:py-10 lg:max-w-7xl lg:py-14">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 6,
              },
              1440: {
                slidesPerView: 7,
              },
            }}
          >
            {[...Array(7).keys()].map((item) => (
              <SwiperSlide key={item}>
                <img
                  className="mx-auto opacity-75 grayscale hover:opacity-100 hover:grayscale-0"
                  src={`home/logos/icon-${item + 1}.png`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default BrandLogos
