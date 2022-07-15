import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { Swiper, SwiperSlide } from 'swiper/react'

import { explores } from '../../data/home.json'

import SwiperCore, { Pagination, Autoplay } from 'swiper'

SwiperCore.use([Pagination, Autoplay])

const ExploreSlider = () => {
  return (
    <div className="py-10 md:pt-15 xl:pt-24">
      {/* heading */}
      <div className="px-6 text-center">
        <h2 className="font-lora text-2xl font-medium text-gray-900 md:text-40">Explore Examine</h2>
        <p className="mt-2 px-4 text-gray-600 md:px-0 xl:text-xl">
          Search for Conditions, find Interventions, and get Outcomes
        </p>
      </div>
      <div className="relative w-full py-8 md:py-10 lg:py-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4.3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            el: '.explore-examine-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="!h-3 !w-3 bg-gray-400 rounded-full block ' + className + '"></span>'
              )
            },
          }}
          className="exlore-examine-slider"
        >
          {explores.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`space-y-4 p-6 ${!isActive && 'opacity-50'}  ${
                    (isPrev || isNext) && 'xl:opacity-100'
                  }`}
                >
                  <p className="text-xl font-semibold leading-7 lg:text-2xl">{item.title}</p>
                  <p className="text-lg text-gray-600">{item.text}</p>
                  <ul className="space-y-2 pb-4 lg:space-y-3">
                    {item.lists.map((list, idx) => (
                      <li key={idx}>
                        <Link href="/">
                          <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                            <span className="grid h-4 w-4 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 md:h-5 md:w-5 lg:group-hover:bg-primary lg:group-hover:text-white">
                              <svg
                                className="h-2 w-2 md:h-3 md:w-3"
                                viewBox="0 0 11 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span>{list}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/">
                    <a className="inline-flex items-center font-semibold -tracking-2 text-primary hover:underline lg:text-lg lg:leading-10">
                      See All <ArrowRightIcon className="ml-2 h-4 w-4 stroke-[4px]" />
                    </a>
                  </Link>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="explore-examine-pagination flex items-center justify-center !gap-1.5 pt-12 lg:hidden"></div>
      </div>
    </div>
  )
}

export default ExploreSlider
