import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const WhatDoctorsThink = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-center font-lora">What Doctor’s think of Examine?</h2>
      <div className="relative w-full">
        <Swiper
          modules={[Pagination]}
          loop={true}
          slidesPerView={1}
          spaceBetween={100}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.doctors-pagination',
          }}
        >
          {[...Array(7).keys()].map((item) => (
            <SwiperSlide key={item}>
              <div>
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border border-[#E6E4FF] shadow-lg">
                  <Image layout="fill" src="/home/professional.png" />
                </div>
                <div>
                  <span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 22 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 9.9541V18.9121H9.458V9.9541H3.48602C3.48602 6.66121 6.16512 3.98211 9.458 3.98211V0.996094C4.51826 0.996094 0.5 5.01436 0.5 9.9541Z"
                        fill="#E2D9F3"
                      />
                      <path
                        d="M21.4021 3.98211V0.996094C16.4623 0.996094 12.4441 5.01436 12.4441 9.9541V18.9121H21.4021V9.9541H15.4301C15.4301 6.66121 18.1092 3.98212 21.4021 3.98212V3.98211Z"
                        fill="#E2D9F3"
                      />
                    </svg>
                  </span>
                  <p className="px-5 py-1 pt-1 text-center text-sm -tracking-2">
                    I turn to Examine for quick, reliable data on a whole host of health topics.
                    It's rare to find such guidance that is meticulously researched yet
                    easy-to-digest, but Examine manages to deliver on both. I strongly recommend it
                    as a trusted resource.
                  </p>
                  <span>
                    <svg
                      className="ml-auto h-5 w-5"
                      viewBox="0 0 22 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.402 9.95404V0.996094H12.4441V9.95404H18.416C18.416 13.2469 15.737 15.926 12.4441 15.926V18.912C17.3838 18.912 21.402 14.8938 21.402 9.95404Z"
                        fill="#E2D9F3"
                      />
                      <path
                        d="M0.5 15.926V18.912C5.43973 18.912 9.45796 14.8938 9.45796 9.95404V0.996094H0.5V9.95404H6.47195C6.47195 13.2469 3.79289 15.926 0.5 15.926V15.926Z"
                        fill="#E2D9F3"
                      />
                    </svg>
                  </span>
                </div>
                <div className="pt-10 text-center">
                  <p className="font-semibold">- James M. Gaylor</p>
                  <p className="mt-2 text-sm text-gray-600">
                    MD | Health Policy Fellow, Georgetown | Attending Physician, Department of
                    Emergency Medicine
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="doctors-pagination !static mt-10 flex items-center justify-center"></div>
      </div>
    </div>
  )
}

export default WhatDoctorsThink
