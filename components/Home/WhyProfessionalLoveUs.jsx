import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const WhyProfessionalLoveUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-11 lg:px-10 lg:py-28 xl:pb-32">
      <h2 className="px-16 text-center font-lora font-medium text-gray-900">
        Why professionals love us
      </h2>

      <div className="relative mt-15 grid items-center gap-10 md:grid-cols-2 lg:mt-25 xl:gap-30">
        <div className="relative px-4 lg:w-[442px] lg:px-8">
          <div className="relative aspect-square pt-4">
            <img
              className="relative z-10 h-full w-full rounded-br-2xl object-cover"
              src="home/professional.png"
              alt=""
            />
            <img className="absolute top-0 -right-4 lg:-right-8" src="home/dots.svg" alt="" />
            <span className="absolute bottom-0 left-0 h-3/4 w-full rounded-2xl bg-[#E8F2FF]"></span>
          </div>

          <div className="absolute bottom-28 left-0 z-20 flex w-full items-center justify-between">
            <button
              type="button"
              className="grid h-9 w-9 place-content-center rounded-full bg-white shadow-home-arrow lg:h-15 lg:w-15"
            >
              <ChevronLeftIcon className="h-5 w-5 lg:h-7 lg:w-7" />
            </button>

            <button
              type="button"
              className="grid h-9 w-9 place-content-center rounded-full bg-white shadow-home-arrow lg:h-15 lg:w-15  "
            >
              <ChevronRightIcon className="h-5 w-5 lg:h-7 lg:w-7" />
            </button>
          </div>
        </div>
        <div className="max-w-xl">
          <img className="w-6" src="icons/quotation.svg" alt="" />
          <div className="mt-3 flex items-center lg:mt-6">
            <img className="h-5 w-5 lg:h-7 lg:w-7" src="icons/star.svg" alt="Star Icon" />
            <img className="h-5 w-5 lg:h-7 lg:w-7" src="icons/star.svg" alt="Star Icon" />
            <img className="h-5 w-5 lg:h-7 lg:w-7" src="icons/star.svg" alt="Star Icon" />
            <img className="h-5 w-5 lg:h-7 lg:w-7" src="icons/star.svg" alt="Star Icon" />
            <img className="h-5 w-5 lg:h-7 lg:w-7" src="icons/star.svg" alt="Star Icon" />
          </div>
          <p className="mt-3 leading-snug -tracking-2 text-gray-600 md:mt-5 lg:text-2xl xl:text-3xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <div className="mt-4">
            <p className="font-bold -tracking-wide lg:text-xl">Dr. Andrew Huberman</p>
            <p className="font-medium -tracking-2 text-gray-600">MSc, PhD(c) in Neuroscience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyProfessionalLoveUs
