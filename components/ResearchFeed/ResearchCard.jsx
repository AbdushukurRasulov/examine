import React, { Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import moment from 'moment'
import UserActionBar from '../Sections/UserActionBar'

const ResearchCard = ({ data, expend }) => {
  const {
    headline,
    updated_date,
    primary_category,
    summary: { blurb, additional, study, results, bigpicture, background },
  } = data

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            {/* Accordion Content */}
            <div className="relative py-2.5">
              <Disclosure.Button className="group flex w-full items-start justify-between gap-6">
                <span className="cursor-pointer font-medium text-examine-purple-500 md:text-lg lg:text-gray-900 lg:group-hover:text-primary lg:group-hover:underline xl:text-xl">
                  {ReactHtmlParser(headline)}
                </span>
                <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary text-primary transition-colors duration-200 lg:group-hover:bg-primary lg:group-hover:text-white xl:h-6 xl:w-6 xl:border-2">
                  {open || expend ? (
                    <MinusIcon className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
                  ) : (
                    <PlusIcon className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
                  )}
                </span>
              </Disclosure.Button>

              <div className="hidden items-center gap-3 py-2.5 text-sm md:flex xl:text-menu">
                <span className="text-gray-600"> {moment(updated_date).format('MMMM D YYYY')}</span>
                <span className="hidden text-gray-600 md:block">/</span>
                <p className="mt-1 flex items-center gap-1 font-medium text-examine-green-600 md:mt-0">
                  <a href="#">{primary_category?.name}</a>
                  <span className="last:hidden">•</span>
                </p>
              </div>
              {!open && (
                <div className="mt-3 -tracking-2 text-gray-700 lg:mt-1 xl:text-xl xl:leading-9">
                  {ReactHtmlParser(blurb)}
                </div>
              )}

              {/* Saved */}
              <div className="absolute right-0 z-10 flex flex-col items-center gap-5 rounded-md bg-white px-2 py-3 opacity-0 shadow-lg transition-opacity duration-300  lg:group-hover:opacity-100">
                <button type="button">
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    className="transition-all duration-200"
                  >
                    <path
                      d="M12.6539 18.8799L6.92228 13.8799L1.19067 18.8799V2.87988C1.19067 2.34945 1.36321 1.84074 1.67032 1.46567C1.97743 1.0906 2.39396 0.879883 2.82827 0.879883H11.0163C11.4506 0.879883 11.8671 1.0906 12.1742 1.46567C12.4813 1.84074 12.6539 2.34945 12.6539 2.87988V18.8799Z"
                      stroke="#5E3B76"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button type="button" className="cursor-pointer">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
                    <path
                      d="M12.6779 6.15403C12.3425 6.15403 12.0706 6.42425 12.0706 6.75764V9.48938C12.0706 10.3268 11.385 11.0083 10.5426 11.0083H3.30015C2.4577 11.0083 1.77232 10.3268 1.77232 9.48938V3.60579C1.77232 2.76838 2.4577 2.0871 3.30015 2.0871H7.1329C7.4683 2.0871 7.74014 1.81689 7.74014 1.48349C7.74014 1.1501 7.4683 0.879883 7.1329 0.879883H3.29995C1.7879 0.879883 0.557617 2.1028 0.557617 3.60579V9.48959C0.557617 10.9928 1.7879 12.2157 3.29995 12.2157H10.5424C12.0546 12.2157 13.2849 10.9928 13.2849 9.48959V6.75764C13.2851 6.42445 13.0133 6.15403 12.6779 6.15403Z"
                      fill="black"
                    />
                    <path
                      d="M13.2853 1.4678C13.2844 1.43863 13.2814 1.40965 13.2763 1.38048C13.2268 1.09698 12.9656 0.883706 12.6786 0.879883H9.90652C9.57112 0.879883 9.29928 1.1501 9.29928 1.48349C9.29928 1.81689 9.57112 2.0871 9.90652 2.0871H11.1208L6.72272 6.10373C6.47578 6.32928 6.45958 6.71117 6.68649 6.95643C6.80612 7.08601 6.96967 7.1516 7.13383 7.1516C7.28058 7.1516 7.42774 7.09889 7.54433 6.99245L12.0722 2.85771V4.13153C12.0722 4.46493 12.344 4.73515 12.6794 4.73515C13.0148 4.73515 13.2867 4.46493 13.2867 4.13153V1.48349C13.2867 1.47806 13.2853 1.47323 13.2853 1.4678Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>

              <Transition
                show={open || expend}
                as={Fragment}
                enter="transition duration-300 ease-out"
                enterFrom="h-0 opacity-0"
                enterTo="h-auto opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="opacity-100"
                leaveTo="h-0 opacity-0"
              >
                <Disclosure.Panel static>
                  <div className="max-w-4xl space-y-7 bg-white lg:pt-7 xl:pb-24">
                    {/* Quotation block */}
                    {additional && (
                      <div className="border-l-4 border-info py-2 pl-4 text-primary xl:pl-6 xl:text-xl">
                        {additional && ReactHtmlParser(additional)}
                      </div>
                    )}

                    {/* Background */}
                    {background && (
                      <div className="space-y-4 -tracking-2 xl:text-xl xl:leading-9">
                        <p className="mb-4 text-lg font-bold">Background</p>
                        {ReactHtmlParser(background)}
                      </div>
                    )}

                    {/* The study */}
                    {study && (
                      <div className="space-y-4 -tracking-2 lg:space-y-6 xl:text-xl xl:leading-9">
                        <p className="!mb-4 text-lg font-bold">The study</p>
                        <div>{ReactHtmlParser(study)}</div>
                      </div>
                    )}

                    {/* The results */}
                    {results && (
                      <div className="space-y-4 -tracking-2 lg:space-y-6 xl:text-xl xl:leading-9">
                        <p className="!mb-4 text-lg font-bold">The results</p>
                        {results && ReactHtmlParser(results)}
                      </div>
                    )}

                    {/* The big picture */}
                    {bigpicture && (
                      <div className="-tracking-2 xl:text-xl xl:leading-9">
                        <p className="mb-4 text-lg font-bold">The big picture</p>
                        {bigpicture && ReactHtmlParser(bigpicture)}
                      </div>
                    )}

                    <UserActionBar />
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default ResearchCard
