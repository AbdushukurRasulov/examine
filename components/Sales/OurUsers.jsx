// Import Swiper React components
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

const OurUsers = () => {
  return (
    <div className="bg-white py-25">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-lora font-medium">What Our Users are Saying</h2>
        <p className="text-lg text-gray-600">
          Method handles compliance requirements, identity verification, and bank partnerships so
          you can focus on building.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl">
        <Users />
      </div>
    </div>
  )
}

const Users = () => (
  <>
    <div className="mx-auto max-w-6xl px-8">
      <Swiper
        className="users-saying"
        navigation={{
          prevEl: '#prev_slide',
          nextEl: '#next_slide',
        }}
        modules={[Navigation]}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={10}

        // breakpoints={{
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },
        //   1280: {
        //     slidesPerView: 6,
        //   },
        //   1440: {
        //     slidesPerView: 2.5,
        //   },
        // }}
      >
        {[...Array(7).keys()].map((item) => (
          <SwiperSlide key={item} className="transition-transform duration-200">
            <div className="rounded-2xl border border-gray-300 p-3">
              <div className="flex gap-4 pb-5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image layout="fill" src="/home/twitter.png" />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-1">
                    <p className="text-menu font-bold">Jorge Mckinney</p>
                    <span>
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5 12.749C22.5 11.169 21.625 9.79902 20.352 9.14902C20.506 8.71402 20.59 8.24402 20.59 7.74902C20.59 5.53902 18.88 3.75102 16.772 3.75102C16.302 3.75102 15.852 3.83502 15.436 4.00102C14.818 2.66402 13.51 1.74902 12 1.74902C10.49 1.74902 9.18402 2.66602 8.56302 3.99902C8.14802 3.83402 7.69702 3.74902 7.22702 3.74902C5.11702 3.74902 3.40902 5.53902 3.40902 7.74902C3.40902 8.24302 3.49202 8.71302 3.64602 9.14902C2.37402 9.79902 1.49902 11.167 1.49902 12.749C1.49902 14.244 2.28102 15.547 3.44102 16.235C3.42102 16.405 3.40902 16.575 3.40902 16.749C3.40902 18.959 5.11702 20.749 7.22702 20.749C7.69702 20.749 8.14702 20.663 8.56202 20.499C9.18202 21.833 10.488 22.749 11.999 22.749C13.511 22.749 14.817 21.833 15.436 20.499C15.851 20.662 16.301 20.747 16.772 20.747C18.882 20.747 20.59 18.957 20.59 16.747C20.59 16.573 20.578 16.403 20.557 16.234C21.715 15.547 22.5 14.244 22.5 12.75V12.749ZM15.884 9.41502L11.55 15.915C11.405 16.132 11.168 16.249 10.925 16.249C10.782 16.249 10.637 16.209 10.509 16.123L10.394 16.029L7.97902 13.614C7.68602 13.321 7.68602 12.846 7.97902 12.554C8.27202 12.262 8.74702 12.26 9.03902 12.554L10.809 14.321L14.634 8.58102C14.864 8.23602 15.33 8.14502 15.674 8.37402C16.02 8.60402 16.114 9.07002 15.884 9.41402V9.41502Z"
                          fill="#1DA1F2"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-600">@Travis Wade • 14s</span>
                  </div>
                  <p className="mt-2 text-lg">
                    Examine’s updates help me to stay on top of current research on supplements and
                    diet trends. Their in-depth summaries are a great way to get “the lay of the
                    land” quickly and efficiently.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-gray-300 pt-5">
                <button type="button">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0345 1.9306L7.92352 1.9231H7.92202C4.64152 1.9231 2.07202 4.49335 2.07202 7.7746C2.07202 10.8481 4.46152 13.1791 7.67077 13.3021V16.1731C7.67077 16.2541 7.70377 16.3876 7.76077 16.4753C7.86727 16.6441 8.04877 16.7356 8.23477 16.7356C8.33827 16.7356 8.44252 16.7071 8.53627 16.6471C8.73427 16.5211 13.391 13.5421 14.6023 12.5176C16.0288 11.3101 16.8823 9.5401 16.8845 7.7836V7.77085C16.88 4.4956 14.312 1.9306 11.0345 1.92985V1.9306ZM13.8748 11.6596C13.0243 12.3796 10.2283 14.2133 8.79577 15.1418V12.7516C8.79577 12.4411 8.54452 12.1891 8.23327 12.1891H7.93627C5.19127 12.1891 3.19777 10.3321 3.19777 7.7746C3.19777 5.1241 5.27377 3.0481 7.92277 3.0481L11.033 3.0556H11.0345C13.6835 3.0556 15.7595 5.1301 15.761 7.7776C15.7588 9.2101 15.0545 10.6606 13.8755 11.6596H13.8748Z"
                      fill="#828282"
                    />
                  </svg>
                </button>
                <button type="button">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3274 12.0015C18.1084 11.7817 17.7522 11.7817 17.5324 12.0015L15.8674 13.6665V5.98646C15.8674 4.43546 14.6052 3.17396 13.0549 3.17396H8.66742C8.35692 3.17396 8.10492 3.42596 8.10492 3.73646C8.10492 4.04696 8.35692 4.29896 8.66742 4.29896H13.0549C13.9849 4.29896 14.7424 5.05646 14.7424 5.98646V13.6665L13.0774 12.0015C12.8577 11.7817 12.5014 11.7817 12.2824 12.0015C12.0634 12.2212 12.0619 12.5775 12.2824 12.7965L14.9074 15.4215C15.0162 15.5317 15.1602 15.5865 15.3049 15.5865C15.4497 15.5865 15.5922 15.5325 15.7024 15.4215L18.3274 12.7965C18.5479 12.5775 18.5479 12.2212 18.3274 12.0015ZM10.3324 14.4615H5.94492C5.01492 14.4615 4.25742 13.704 4.25742 12.774V5.09396L5.92242 6.75896C6.03342 6.86921 6.17742 6.92396 6.32142 6.92396C6.46542 6.92396 6.60942 6.86921 6.71892 6.75896C6.93867 6.53921 6.93867 6.18296 6.71892 5.96396L4.09392 3.33896C3.87417 3.11846 3.51792 3.11846 3.29892 3.33896L0.67392 5.96396C0.45342 6.18296 0.45342 6.53921 0.67392 6.75896C0.89442 6.97871 1.24917 6.97871 1.46892 6.75896L3.13392 5.09396V12.774C3.13392 14.325 4.39617 15.5865 5.94642 15.5865H10.3339C10.6444 15.5865 10.8964 15.3345 10.8964 15.024C10.8964 14.7135 10.6437 14.4615 10.3339 14.4615H10.3324Z"
                      fill="#828282"
                    />
                  </svg>
                </button>
                <button type="button">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.4999 16.4775H9.4894C7.55215 16.4415 1.9624 11.391 1.9624 6.60749C1.9624 4.30949 3.85615 2.29199 6.01465 2.29199C7.73215 2.29199 8.88715 3.47699 9.49915 4.33949C10.1097 3.47849 11.2647 2.29199 12.9829 2.29199C15.1429 2.29199 17.0359 4.30949 17.0359 6.60824C17.0359 11.3902 11.4454 16.4407 9.50815 16.476H9.4999V16.4775ZM6.0154 3.41774C4.4554 3.41774 3.08815 4.90874 3.08815 6.60899C3.08815 10.914 8.36365 15.306 9.50065 15.3525C10.6392 15.306 15.9132 10.9147 15.9132 6.60899C15.9132 4.90874 14.5459 3.41774 12.9859 3.41774C11.0899 3.41774 10.0309 5.61974 10.0219 5.64149C9.8494 6.06299 9.1549 6.06299 8.98165 5.64149C8.97115 5.61899 7.9129 3.41774 6.01615 3.41774H6.0154Z"
                      fill="#828282"
                    />
                  </svg>
                </button>
                <button type="button">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6474 5.85158L9.89739 2.10158C9.67764 1.88183 9.32139 1.88183 9.10239 2.10158L5.35239 5.85158C5.13189 6.07133 5.13189 6.42758 5.35239 6.64658C5.57289 6.86558 5.92764 6.86708 6.14739 6.64658L8.93739 3.85658V11.4991C8.93739 11.8096 9.18939 12.0616 9.49989 12.0616C9.81039 12.0616 10.0624 11.8096 10.0624 11.4991V3.85658L12.8524 6.64658C12.9619 6.75683 13.1059 6.81158 13.2499 6.81158C13.3939 6.81158 13.5379 6.75758 13.6474 6.64658C13.8671 6.42683 13.8671 6.07133 13.6474 5.85158Z"
                      fill="#828282"
                    />
                    <path
                      d="M15.281 16.707H3.719C2.771 16.707 2 15.936 2 14.988V10.749C2 10.4385 2.252 10.1865 2.5625 10.1865C2.873 10.1865 3.125 10.4385 3.125 10.749V14.988C3.125 15.3158 3.39125 15.582 3.719 15.582H15.281C15.6088 15.582 15.875 15.3158 15.875 14.988V10.749C15.875 10.4385 16.127 10.1865 16.4375 10.1865C16.748 10.1865 17 10.4385 17 10.749V14.988C17 15.936 16.229 16.707 15.281 16.707Z"
                      fill="#828282"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="absolute top-1/2 z-30 flex w-full -translate-y-1/2 items-center justify-between">
      <button
        id="prev_slide"
        className="drop-shadow-sales-slide-btn grid h-13 w-13 place-content-center rounded-full bg-primary hover:bg-examine-purple-600"
      >
        <svg
          className="mr-1"
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.5046C12 0.354359 10.727 -0.314461 9.81256 0.355974L1.54453 6.41978C1.36123 6.55426 1.2129 6.73258 1.11249 6.93919C1.01208 7.1458 0.962633 7.37441 0.968475 7.60506C0.974317 7.83571 1.03527 8.06139 1.146 8.2624C1.25674 8.46342 1.4139 8.63365 1.60376 8.75823L9.87179 14.1831C10.7918 14.7865 12 14.1112 12 12.9933V1.5046Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        id="next_slide"
        className="drop-shadow-sales-slide-btn grid h-13 w-13 place-content-center rounded-full bg-primary hover:bg-examine-purple-600"
      >
        <svg
          className="ml-1"
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.5046C0 0.354359 1.27298 -0.314461 2.18744 0.355974L10.4555 6.41978C10.6388 6.55426 10.7871 6.73258 10.8875 6.93919C10.9879 7.1458 11.0374 7.37441 11.0315 7.60506C11.0257 7.83571 10.9647 8.06139 10.854 8.2624C10.7433 8.46342 10.5861 8.63365 10.3962 8.75823L2.12821 14.1831C1.20822 14.7865 0 14.1112 0 12.9933V1.5046Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </>
)

export default OurUsers