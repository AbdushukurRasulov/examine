import { ChevronRightIcon, PlusSmIcon } from "@heroicons/react/solid";
import React from "react";
import { Info } from "../IconsSvg";
import EvidenceBox from "./EvidenceBox";
import FourResearchers from "./FourResearchers";
import QuickLinks from "./QuickLinks";
import ResearcherInfo from "./ResearcherInfo";
import TwoResearchers from "./TwoResearcher";

const Testing = () => {
  return (
    <div className="relative flex-1 overflow-x-hidden bg-examine-purple-500">
      <div className="flex">
        <div className="flex-1"></div>
        <div className="mx-auto w-full max-w-base px-6 pb-18 pt-10 xxl:pl-10 xxl:pr-15">
          {/* breadcrumbs */}
          <nav className="hidden md:flex" aria-label="Breadcrumb">
            <ol
              role="list"
              className="flex items-center space-x-1 leading-10 -tracking-2"
            >
              <li>
                <a
                  href="#"
                  className="text-examine-purple-200 hover:text-examine-purple-100"
                >
                  Examine
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <a
                    href="#"
                    className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                    aria-current="page"
                  >
                    Category
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <a
                    href="#"
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
                    href="#"
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
                  <a
                    href="#"
                    className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                    aria-current="page"
                  >
                    Ashwaganda
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mt-5 space-y-3 text-white">
            {/* Category */}
            {/* <h4 className="font-lora text-premium">Category</h4> */}

            <h1 className="font-lora">Ashwagandha</h1>
            <p className="p-xl max-w-3xl -tracking-2 xxl:max-w-4xl">
              Ashwagandha has been called the king of Ayurvedic herbs. Limited
              research suggests that it works well for reducing stress and
              anxiety. It may also modestly enhance strength performance,
              improve glucose metabolism, and increase testosterone levels, but
              more research is needed to confirm this.
            </p>

            <QuickLinks />
          </div>
        </div>
        <div className="relative flex flex-1 flex-col justify-center bg-examine-purple-700/40 ">
          <div className="px-6 2xl:px-9">
            <TwoResearchers />
            {/* <ResearcherInfo /> */}
            {/* <FourResearchers /> */}

            {/* Last Update */}
            <div className="mt-6 inline-flex items-center gap-2 -tracking-2  text-white">
              <span className=" font-semibold">Last Updated:</span>
              <p>Jan 27th, 2022</p>
              <button type="button">
                <Info />
              </button>
            </div>

            <EvidenceBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
