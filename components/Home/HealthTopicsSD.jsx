import { useState } from 'react'
import Link from 'next/link'
import data from '../../data/home.json'

const topics = ['Anxiety', 'Osteoperosis', 'High cholesterol', 'Type 2 diabetes', 'Fibromyalgia']

const HealthTopicsSD = () => {
  const [isActive, setIsActive] = useState(1)

  const { studyDatabase } = data
  return (
    <div id="home-sd" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl  px-6 py-15 lg:py-24 lg:px-10">
        {/* Header */}
        <div className="mx-auto grid max-w-lg gap-2 text-center lg:max-w-full lg:grid-cols-2 lg:gap-12 lg:text-left xl:gap-25">
          <div className="md:px-20 lg:p-0">
            <h2 className="font-lora text-gray-900">
              Access 1000’s of Health Topics via our Study Database
            </h2>
          </div>
          <div>
            <p className="text-gray-600 lg:text-xl">
              Our Study Database is organized by supplement (so you can check the desirable and
              undesirable health effects of fish oil, for instance) and health topic.
            </p>
          </div>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4 lg:py-14 xl:gap-25">
          {studyDatabase.map((item, index) => (
            <div key={index}>
              <p className="text-lg font-bold text-gray-900">{item.title}</p>
              <p className="p-lg mt-1.5 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-8 py-8 lg:mt-0 lg:grid-cols-5 xl:gap-36">
          {/* Mobile */}
          <div className="relative z-20 -m-6 overflow-hidden lg:hidden">
            <div className="relative flex overflow-x-scroll">
              <div className="flex items-center gap-3 whitespace-nowrap p-6">
                {topics.map((item, idx) => (
                  <button
                    onClick={() => setIsActive(idx + 1)}
                    key={idx}
                    className={`flex items-center gap-3 border border-transparent bg-white py-3 pl-2.5 pr-10 ${
                      isActive === idx + 1 ? 'border-examine-purple-100 shadow-home-tab' : ''
                    }`}
                    type="button"
                  >
                    <span className="grid h-15 w-15 shrink-0 place-content-center rounded-lg bg-[#F7F5FF] p-3">
                      <img src="icons/allergy.svg" alt="Allergy Icon" />
                    </span>

                    <span className={`${isActive === idx + 1 && 'text-stroke'}`}>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop */}
          <div className="-ml-4 hidden space-y-2 lg:col-span-2 lg:block">
            {topics.map((item, idx) => (
              <button
                onClick={() => setIsActive(idx + 1)}
                key={idx}
                type="button"
                className={`group flex w-full items-center gap-4 rounded-lg border border-transparent  p-4 text-lg text-primary transition duration-200 hover:border-examine-purple-100 hover:shadow-home-tab xl:gap-6 xl:text-xl ${
                  isActive === idx + 1 && 'border-examine-purple-100 shadow-home-tab'
                }`}
              >
                <span className="grid h-20 w-20 shrink-0 place-content-center rounded-lg bg-[#F7F5FF] p-3 xl:h-25 xl:w-25">
                  <img src="icons/allergy.svg" alt="Allergy Icon" />
                </span>

                <span
                  className={`group-hover:text-stroke ${isActive === idx + 1 && 'text-stroke'}`}
                >
                  {item}
                </span>
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="relative lg:col-span-3">
            <div className="relative z-10 w-full">
              <img src="home/tab-main.png" alt="" />
            </div>

            <img className="absolute top-[-20%] -right-1/3" src="home/circle-large.svg" alt="" />
          </div>
        </div>

        <div className="mt-2 md:text-center lg:mt-8 xxl:mt-14">
          <Link href="/">
            <a className="group flex items-center justify-center rounded-md border border-primary py-1 px-4 text-primary hover:underline md:border-none md:text-lg">
              <span>Learn more about Osteoperosis as a Condition</span>
              <span>
                <img
                  className="ml-5 hidden transition-transform duration-200 group-hover:translate-x-2 md:block"
                  src="icons/arrow-long.svg"
                  alt=""
                />
                <img className="md:hidden" src="icons/arrow-medium.svg" alt="" />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HealthTopicsSD
