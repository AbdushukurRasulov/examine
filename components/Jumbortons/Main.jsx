import { ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { Info } from '../IconsSvg'
import EvidenceBoxV2 from './EvidenceBox-v2'
import FourResearchers from './FourResearchers'
import QuickLinks from './QuickLinks'

const MainJumbortons = () => {
  return (
    <div className="relative overflow-x-hidden bg-examine-purple-500 before:absolute before:inset-0 before:bg-examine-purple-700/40">
      <div className="relative z-10 mx-auto flex 2xl:justify-end wide:max-w-fixed">
        <div className="hidden w-full max-w-xs 2xl:block"></div>
        <div className="flex w-full flex-1 flex-col bg-examine-purple-500 px-6 py-10 md:px-12 lg:pb-18 lg:pt-10 xxl:px-19">
          {/* breadcrumbs */}
          <nav className="hidden md:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-1 leading-10 -tracking-2">
              <li>
                <a href="#" className="text-examine-purple-200 hover:text-examine-purple-100">
                  Examine
                </a>
              </li>
              <li>
                <a href="#" className="text-examine-purple-200 hover:text-examine-purple-100">
                  Category
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <a
                    href="/interventions"
                    className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                    aria-current="page"
                  >
                    Men’s Health
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <a
                    href="/interventions"
                    className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                    aria-current="page"
                  >
                    Interventions
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <a href="#" className="ml-1 text-examine-purple-100 " aria-current="page">
                    Ashwaganda
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <div className="flex flex-1 flex-col space-y-3 text-white lg:mt-7">
            <h1 className="font-lora">Ashwagandha</h1>
            <p className="p-xl max-w-3xl pt-4 -tracking-2">
              Ashwagandha has been called the king of Ayurvedic herbs. Limited research suggests
              that it works well for reducing stress and anxiety. It may also modestly enhance
              strength performance, improve glucose metabolism, and increase testosterone levels,
              but more research is needed to confirm this.
            </p>

            <QuickLinks />
          </div>
        </div>
        <div className="hidden w-full max-w-md 2xl:block">
          <div className="relative px-6 lg:py-15 2xl:px-9">
            <FourResearchers />

            <div className="mt-6 inline-flex items-center gap-2 -tracking-2  text-white">
              <span className=" font-semibold">Last Updated:</span>
              <p>Jan 27th, 2022</p>
              <button type="button">
                <Info />
              </button>
            </div>

            <EvidenceBoxV2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainJumbortons
