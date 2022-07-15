import { Fragment, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ArrowDownIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { ArrowUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
import CollectionCard from './CollectionCard'
import { Cardiovascular } from '../SVGs'
import ResearchCard from '../ResearchFeed/ResearchCard'
import Link from 'next/link'

function StudySummaryCard({ category, summaries }) {
  const [expend, setExpend] = useState(false)
  const [expendActive, setExpendActive] = useState(null)
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="group relative flex w-full items-center gap-2 border-b border-dashed border-black pb-2 text-left">
            <span className="absolute -left-7 top-1/2 hidden h-4 w-4 -translate-y-1/2 lg:block">
              <ChevronRightIcon
                className={`${
                  open ? 'rotate-90' : ''
                } absolute h-4 w-4 origin-center stroke-4 transition-transform duration-200 group-hover:rotate-90`}
              />
            </span>
            {/* Summary Icon */}
            <Cardiovascular className="mr-3 hidden h-10 w-10 lg:block" />

            {/* Summary Title */}
            <span className="font-lora text-20 xl:text-30">{category.name}</span>

            {/* mobile arrow icon */}
            <span className="ml-auto grid h-7 w-7 place-content-center rounded-full bg-examine-purple-100 lg:hidden">
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform duration-300 ${
                  open ? '-rotate-180' : 'rotate-0'
                }`}
              />
            </span>
          </Disclosure.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="h-0 opacity-0"
            enterTo="h-auto opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="opacity-100"
            leaveTo="h-0 opacity-0"
          >
            <Disclosure.Panel static>
              {/* Actions */}
              <div className="hidden items-center py-6 text-sm md:flex">
                <Link href={`categories/${category.slug}`}>
                  <button
                    type="button"
                    className="group rounded border border-primary py-1.5 px-3 text-primary transition-colors duration-200 hover:bg-primary hover:text-white active:bg-examine-purple-700"
                  >
                    <span className="flex items-center tracking-1">
                      Go to Category Page
                      <ArrowRightIcon className="ml-2 h-5 w-4 transition-transform duration-300 lg:group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>

                <button
                  onClick={() => setExpend(true)}
                  className={`group ml-auto rounded py-1.5 px-3 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-primary active:bg-gray-200 ${
                    expend && 'text-stroke bg-gray-100 text-primary'
                  }`}
                  type="button"
                >
                  <span className="lg:group-hover:text-stroke flex items-center -tracking-2">
                    Expand All
                    <ArrowDownIcon className={`ml-2 h-3.5 w-4 transition-transform duration-300`} />
                  </span>
                </button>
                <button
                  onClick={() => setExpend(false)}
                  className="group rounded py-1.5 px-3 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-primary active:bg-gray-200"
                  type="button"
                >
                  <span className="lg:group-hover:text-stroke flex items-center -tracking-2">
                    Collapse All
                    <ArrowUpIcon className="ml-2 h-3.5 w-4" />
                  </span>
                </button>
              </div>

              <div className="mt-4 space-y-8 pb-16 xl:space-y-15">
                {summaries.map((data, index) => (
                  <ResearchCard data={data} expend={expend} key={index} />
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default StudySummaryCard
