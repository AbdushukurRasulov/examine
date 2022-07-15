import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import ReactHtmlParser from 'react-html-parser'

function Study({ study }) {
  const { change, values, duration, notes, title, trial_design } = study
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <div className="flex items-start gap-4">
            <p className=" font-medium leading-7 -tracking-2 text-primary">{title}</p>

            {/* <button type="button" className="group ml-auto">
              <svg
                className="h-6 w-6 fill-white group-hover:fill-primary"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8784 21L13.8784 16L6.87842 21V5C6.87842 4.46957 7.08913 3.96086 7.4642 3.58579C7.83928 3.21071 8.34798 3 8.87842 3H18.8784C19.4089 3 19.9176 3.21071 20.2926 3.58579C20.6677 3.96086 20.8784 4.46957 20.8784 5V21Z"
                  stroke="#5E3B76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}

            <Disclosure.Button
              className={`flex items-center gap-1 whitespace-nowrap rounded border border-primary px-2 py-1 text-sm tracking-1 lg:hover:bg-primary lg:hover:text-white ${
                open ? 'bg-primary text-white' : 'text-primary'
              }`}
            >
              <span className="block">See Study</span>

              {open ? <MinusIcon className="h-3 w-3" /> : <PlusIcon className="h-3 w-3" />}
            </Disclosure.Button>
          </div>

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
              <div className="py-5">
                <p className="leading-8 -tracking-2">{ReactHtmlParser(notes)}</p>

                <div className="divide-y divide-gray-300 pt-6 text-menu -tracking-2">
                  <div className="grid grid-cols-3 py-3">
                    <p className="font-semibold leading-9">Effect</p>
                    <p className="col-span-2 text-primary">{change}</p>
                  </div>
                  <div className="grid grid-cols-3 py-3">
                    <p className="font-semibold leading-9">Values</p>
                    <p className="col-span-2 text-primary">{values}</p>
                  </div>
                  <div className="grid grid-cols-3 py-3">
                    <p className="font-semibold leading-9">Trial Design</p>
                    <p className="col-span-2 text-primary">{trial_design}</p>
                  </div>
                  <div className="grid grid-cols-3 py-3">
                    <p className="font-semibold leading-9">Trial Length</p>
                    <p className="col-span-2 text-primary">{duration}</p>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Study
