import AppLayout from '@/components/Layouts/AppLayout'
import BrandLogos from '@/components/Home/BrandLogos'
import ExploreSlider from '@/components/Home/ExploreSlider'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userInfo } from 'store/slice/authSlice'
import HealthTopicsSD from '@/components/Home/HealthTopicsSD'
import LatestScientifSS from '@/components/Home/LatestScientificSS'
import ResearchBackedNutrition from '@/components/Home/ResearchBackedNutrition'
import ScienceBasedGuides from '@/components/Home/ScienceBasedGuides'
import PeopleLoveUs from '@/components/Home/PeopleLoveUs'
import WhyProfessionalLoveUs from '@/components/Home/WhyProfessionalLoveUs'
import { Link as LinkScroll } from 'react-scroll'

const Home = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(userInfo())
  // }, [])
  return (
    <AppLayout>
      {/* Hero */}
      <div className="relative flex flex-col overflow-hidden bg-hero pt-24 lg:min-h-screen lg:pt-36 wide:min-h-full">
        <div className="mx-auto max-w-lg space-y-6 px-6 text-center lg:max-w-xl xl:max-w-3xl">
          <h1 className="px-6 font-lora -tracking-1 text-examine-purple-700">
            Nutrition information you can trust
          </h1>
          <p className="mx-auto max-w-lg text-gray-600 lg:text-xl">
            We are a team of scientists, analyzing studies on nutrition so you don’t have to.
          </p>

          <form className="pt-3 lg:pt-10">
            <div className="relative overflow-hidden rounded-md">
              <input
                type="text"
                className="w-full rounded-md px-3 py-2 pr-12 lg:py-4 lg:px-5 lg:pr-20"
                placeholder="Search Examine..."
              />

              <button
                type="button"
                className="absolute top-0 right-0 h-full cursor-pointer bg-primary px-3 hover:bg-purple-400 lg:px-6"
              >
                <svg className="h-5 w-5 lg:h-6 lg:w-6" viewBox="0 0 26 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipPath="evenodd"
                    d="M16.6403 15.6636C16.7854 15.5241 16.9577 15.4135 17.1474 15.338C17.3371 15.2625 17.5404 15.2236 17.7458 15.2236C17.9511 15.2236 18.1544 15.2625 18.3441 15.338C18.5338 15.4135 18.7061 15.5241 18.8512 15.6636L24.8669 21.4386C25.16 21.7198 25.3248 22.1014 25.325 22.4993C25.3251 22.8972 25.1606 23.2789 24.8676 23.5603C24.5747 23.8418 24.1772 24 23.7627 24.0001C23.3482 24.0003 22.9507 23.8423 22.6575 23.5611L16.6419 17.7861C16.4966 17.6468 16.3813 17.4813 16.3027 17.2992C16.2241 17.1171 16.1836 16.9219 16.1836 16.7248C16.1836 16.5277 16.2241 16.3325 16.3027 16.1504C16.3813 15.9683 16.4966 15.8029 16.6419 15.6636H16.6403Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipPath="evenodd"
                    d="M10.4824 18C11.611 18 12.7285 17.7866 13.7711 17.372C14.8137 16.9574 15.7611 16.3497 16.5591 15.5836C17.3571 14.8175 17.9901 13.9081 18.422 12.9071C18.8539 11.9062 19.0762 10.8334 19.0762 9.75C19.0762 8.66659 18.8539 7.5938 18.422 6.59286C17.9901 5.59193 17.3571 4.68245 16.5591 3.91637C15.7611 3.15029 14.8137 2.5426 13.7711 2.12799C12.7285 1.71339 11.611 1.5 10.4824 1.5C8.20322 1.5 6.01736 2.36919 4.40572 3.91637C2.79408 5.46354 1.88867 7.56196 1.88867 9.75C1.88867 11.938 2.79408 14.0365 4.40572 15.5836C6.01736 17.1308 8.20322 18 10.4824 18V18ZM20.6387 9.75C20.6387 12.3359 19.5686 14.8158 17.664 16.6443C15.7593 18.4728 13.176 19.5 10.4824 19.5C7.78882 19.5 5.20554 18.4728 3.30087 16.6443C1.3962 14.8158 0.326172 12.3359 0.326172 9.75C0.326172 7.16414 1.3962 4.68419 3.30087 2.85571C5.20554 1.02723 7.78882 0 10.4824 0C13.176 0 15.7593 1.02723 17.664 2.85571C19.5686 4.68419 20.6387 7.16414 20.6387 9.75V9.75Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="relative mx-auto px-9 pt-14 sm:pt-20 md:max-w-2xl lg:max-w-4xl lg:pt-25 xxl:max-w-6xl">
          <LinkScroll
            to="home-sd"
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <figure className="relative z-10 overflow-hidden rounded-t-lg shadow-hero-img">
              <img className="h-full w-full object-cover" src="home/hero-img.png" alt="" />
            </figure>
          </LinkScroll>
          <img
            className="absolute top-14 right-0 w-1/4 sm:-right-12"
            src="home/circle.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-1/3 sm:-left-8 xl:-left-28"
            src="home/rectangle.svg"
            alt=""
          />
        </div>
      </div>

      <BrandLogos />

      {/* Cards */}
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-15 xl:py-24 xl:px-10 xxl:max-w-7xl">
          <div className="grid gap-y-12 gap-x-14 md:grid-cols-3 xl:gap-x-32">
            <div>
              <div>
                <img
                  className="h-50px w-50px xxl:h-19 xxl:w-19"
                  src="icons/information.svg"
                  alt=""
                />
              </div>
              <h4 className="mt-3 font-lora font-medium lg:mt-5">
                Your Source for <br /> Knowledge
              </h4>
              <p className="mt-2 leading-7 text-gray-600 lg:mt-4 lg:text-lg xxl:text-xl">
                Examine is the largest source of nutrition and supplement research on the Internet.
              </p>
            </div>
            <div>
              <div>
                <img className="h-50px w-50px xxl:h-19 xxl:w-19" src="icons/website.svg" alt="" />
              </div>
              <h4 className="mt-3 font-lora font-medium lg:mt-5">
                Clear, Simple, <br /> Concise
              </h4>
              <p className="mt-2 leading-7 text-gray-600 lg:mt-4 lg:text-lg xxl:text-xl">
                Professional or layman, our information is accessible to everyone
              </p>
            </div>
            <div>
              <div>
                <img className="h-50px w-50px xxl:h-19 xxl:w-19" src="icons/web-page.svg" alt="" />
              </div>
              <h4 className="mt-3 font-lora font-medium lg:mt-5">
                Up-to-date <br /> information
              </h4>
              <p className="mt-2 leading-7 text-gray-600 lg:mt-4 lg:text-lg xxl:text-xl">
                Our information is continuously updated by our team of dedicated researchers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Examine */}
      <ExploreSlider />

      {/* Access 1000’s of Health Topics via our Study Database */}
      <HealthTopicsSD />

      {/* Stay up-to-date with the Latest Scientific Study Summaries */}
      <LatestScientifSS />

      {/* Research-Backed Nutrition Information to Improve Your Health */}
      <ResearchBackedNutrition />

      {/* Science-based guides on how to dose, time,  combine supplements to improve your health. */}
      <ScienceBasedGuides />

      {/* PeopleLoveUs */}
      <PeopleLoveUs />

      {/* Why professionals love us */}
      <WhyProfessionalLoveUs />
    </AppLayout>
  )
}

export default Home
