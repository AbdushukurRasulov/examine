import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/solid'
import data from '../../../data/home.json'
import LatestScientificModal from './Modal'

const Content = () => {
  const [isActive, setIsActive] = useState(1)
  const [modalActive, setModalActive] = useState(false)
  const { latestScientific } = data
  return (
    <>
      <div className="grid gap-y-10 py-20 lg:grid-cols-2 lg:gap-12 xl:grid-cols-5 xl:gap-36">
        {/* Mobile */}
        <div className="relative z-20 -m-6 overflow-hidden lg:hidden">
          <div className="relative flex overflow-x-scroll">
            <div className="flex items-center gap-3 p-6 text-left">
              {latestScientific.map((item, idx) => (
                <button
                  onClick={() => setIsActive(idx + 1)}
                  type="button"
                  key={idx}
                  className={`group flex min-w-[240px] items-center gap-4 rounded-md border border-transparent p-3 text-left text-primary transition duration-200 hover:border-examine-purple-100 hover:bg-white hover:shadow-home-tab ${
                    isActive === idx + 1 && 'border-examine-purple-200 bg-white shadow-home-tab'
                  }`}
                >
                  <span
                    className={`grid h-15 w-15 shrink-0 place-content-center rounded-lg border border-examine-purple-200 bg-[#F7F5FF] p-3 group-hover:border-transparent ${
                      isActive === idx + 1 && '!border-transparent'
                    }`}
                  >
                    <img src="icons/allergy.svg" alt="Allergy Icon" />
                  </span>

                  <span
                    className={`group-hover:text-stroke ${isActive === idx + 1 && 'text-stroke'}`}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="-mx-4 hidden space-y-2 lg:block xl:col-span-2">
          {latestScientific.map((item, idx) => (
            <button
              onClick={() => setIsActive(idx + 1)}
              type="button"
              key={idx}
              className={`group flex w-full items-center gap-4 rounded-lg border border-transparent p-4 text-lg text-primary transition duration-200 hover:bg-white lg:hover:border-examine-purple-100 lg:hover:shadow-home-tab xl:gap-6 ${
                isActive === idx + 1 && 'border-examine-purple-100 bg-white shadow-home-tab'
              }`}
            >
              <span
                className={`grid h-20 w-20 shrink-0 place-content-center rounded-lg border border-examine-purple-200 bg-[#F7F5FF] p-3 group-hover:border-transparent xl:h-25 xl:w-25 ${
                  isActive === idx + 1 && '!border-transparent'
                }`}
              >
                <img src="icons/allergy.svg" alt="Allergy Icon" />
              </span>

              <span className={`group-hover:text-stroke ${isActive === idx + 1 && 'text-stroke'}`}>
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <div className="relative xl:col-span-3">
          <div className="relative z-10 w-full space-y-7">
            {[...Array(3).keys()].map((item, idx) => (
              <div className="rounded-lg bg-white p-5 shadow-home-tab md:p-8" key={idx}>
                <button
                  onClick={() => setModalActive(true)}
                  type="button"
                  className="group flex items-start gap-6 text-left"
                >
                  <span className="cursor-pointer font-medium text-examine-purple-500 hover:text-primary hover:underline md:text-lg lg:text-xl lg:text-gray-900">
                    The acute effects of Lavender oil in hyper-suspension, and it’s anxiolotic
                    effect
                  </span>
                  <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white lg:h-6 lg:w-6 lg:border-2">
                    <PlusIcon className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                  </span>
                </button>
                <div className="mb-1 hidden items-center gap-3 py-2.5 text-sm md:flex lg:text-base xl:text-base">
                  <span className="text-gray-600">January 3 2022</span>
                  <span className="ext-gray-600 hidden md:block">/</span>
                  <p className="mt-1 flex items-center gap-1 font-medium text-examine-green-600 md:mt-0">
                    <a href="#">Men’s Health</a>
                    <span className="last:hidden">•</span>
                    <a href="#">Men’s Health</a>
                  </p>
                </div>
                <p className="mt-3 -tracking-2 text-gray-700 lg:mt-0 xl:text-xl xl:leading-9">
                  Ginger supplementation reduced fasting blood glucose, glycated hemoglobin, and
                  blood pressure in participants with type...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LatestScientificModal {...{ modalActive, setModalActive }} />
    </>
  )
}

export default Content
