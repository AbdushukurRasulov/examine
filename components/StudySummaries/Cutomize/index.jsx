/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/outline'
import CategoriesSelection from './CategoriesSelection'
import Settings from './Settings'
import { CategoriesSort } from './CategoriesSort'

const categories = [
  {
    title: 'Autoimmune Disease & Allergies',
  },
  {
    title: 'Gut Health',
  },
  {
    title: 'Depression, Anxiety & Stress',
  },
  {
    title: 'Diabetes & Blood Sugar',
  },
  {
    title: "Editor's Picks",
  },
  {
    title: 'Anxiety issues',
  },
  {
    title: 'Fat Loss',
  },
  {
    title: 'Diets & Foods',
  },
  {
    title: 'Belly problems',
  },
  {
    title: 'Muscle gain',
  },
  {
    title: 'Fat Loss',
  },
]

export default function CutomizeWrapper({ customize, setCustomize }) {
  const [activTab, setActiveTab] = useState(1)

  const sortHandler = () => {
    if (activTab !== 3) {
      setActiveTab(3)
    } else setActiveTab(1)
  }

  return (
    <Transition.Root show={customize} as={Fragment}>
      <Dialog as="div" className="relative z-1000" onClose={setCustomize}>
        <Transition.Child
          as="div"
          enter="transition-opacity ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ransition-opacity ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-black/20"
        ></Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[500px]">
                  <div className="flex h-full flex-col overflow-y-auto bg-white px-5 pb-8 shadow-sidebar">
                    {/* header */}
                    <div className="sticky top-0 z-10 flex items-start justify-between border-b border-dashed border-black bg-white pb-3 pt-7">
                      <Dialog.Title className="font-lora text-25 font-semibold leading-8 text-gray-900">
                        Customize
                      </Dialog.Title>

                      <button
                        type="button"
                        className="absolute top-0 -right-2 p-2 focus-visible:outline-none"
                        // onClick={() => setCustomize(false)}
                      >
                        <XCircleIcon className="h-7 w-7" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Tab links */}
                    <div className="mt-8 flex items-center gap-10">
                      <button
                        className={`text-lg leading-8 -tracking-2  ${
                          activTab === 1
                            ? 'font-bold text-examine-purple-500 underline'
                            : 'font-medium text-gray-600'
                        }`}
                        onClick={() => setActiveTab(1)}
                        type="button"
                      >
                        Categories Selection
                      </button>

                      <button
                        className={`text-lg leading-8 -tracking-2  ${
                          activTab === 2 && activTab !== 3
                            ? 'font-bold text-examine-purple-500 underline'
                            : 'font-medium text-gray-600'
                        }`}
                        onClick={() => setActiveTab(2)}
                        type="button"
                      >
                        Settings
                      </button>

                      {activTab !== 2 && (
                        <button
                          className={`ml-auto inline-flex items-center gap-1 rounded border border-primary px-2 py-1 transition-colors duration-200 hover:bg-primary hover:text-white ${
                            activTab === 3 ? 'bg-primary text-white' : 'text-primary'
                          }`}
                          onClick={sortHandler}
                          type="button"
                        >
                          <span className="text-sm tracking-1">
                            {activTab === 3 ? 'Finish Ordering' : 'Sort Order'}
                          </span>
                          <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.75 9.125C3.75 9.02554 3.78951 8.93016 3.85984 8.85983C3.93016 8.78951 4.02554 8.75 4.125 8.75H10.875C10.9745 8.75 11.0698 8.78951 11.1402 8.85983C11.2105 8.93016 11.25 9.02554 11.25 9.125C11.25 9.22446 11.2105 9.31984 11.1402 9.39017C11.0698 9.46049 10.9745 9.5 10.875 9.5H4.125C4.02554 9.5 3.93016 9.46049 3.85984 9.39017C3.78951 9.31984 3.75 9.22446 3.75 9.125ZM3.75 6.125C3.75 6.02554 3.78951 5.93016 3.85984 5.85984C3.93016 5.78951 4.02554 5.75 4.125 5.75H10.875C10.9745 5.75 11.0698 5.78951 11.1402 5.85984C11.2105 5.93016 11.25 6.02554 11.25 6.125C11.25 6.22446 11.2105 6.31984 11.1402 6.39016C11.0698 6.46049 10.9745 6.5 10.875 6.5H4.125C4.02554 6.5 3.93016 6.46049 3.85984 6.39016C3.78951 6.31984 3.75 6.22446 3.75 6.125ZM3.75 3.125C3.75 3.02554 3.78951 2.93016 3.85984 2.85984C3.93016 2.78951 4.02554 2.75 4.125 2.75H10.875C10.9745 2.75 11.0698 2.78951 11.1402 2.85984C11.2105 2.93016 11.25 3.02554 11.25 3.125C11.25 3.22446 11.2105 3.31984 11.1402 3.39016C11.0698 3.46049 10.9745 3.5 10.875 3.5H4.125C4.02554 3.5 3.93016 3.46049 3.85984 3.39016C3.78951 3.31984 3.75 3.22446 3.75 3.125ZM1.5 3.875C1.69891 3.875 1.88968 3.79598 2.03033 3.65533C2.17098 3.51468 2.25 3.32391 2.25 3.125C2.25 2.92609 2.17098 2.73532 2.03033 2.59467C1.88968 2.45402 1.69891 2.375 1.5 2.375C1.30109 2.375 1.11032 2.45402 0.96967 2.59467C0.829018 2.73532 0.75 2.92609 0.75 3.125C0.75 3.32391 0.829018 3.51468 0.96967 3.65533C1.11032 3.79598 1.30109 3.875 1.5 3.875ZM1.5 6.875C1.69891 6.875 1.88968 6.79598 2.03033 6.65533C2.17098 6.51468 2.25 6.32391 2.25 6.125C2.25 5.92609 2.17098 5.73532 2.03033 5.59467C1.88968 5.45402 1.69891 5.375 1.5 5.375C1.30109 5.375 1.11032 5.45402 0.96967 5.59467C0.829018 5.73532 0.75 5.92609 0.75 6.125C0.75 6.32391 0.829018 6.51468 0.96967 6.65533C1.11032 6.79598 1.30109 6.875 1.5 6.875ZM1.5 9.875C1.69891 9.875 1.88968 9.79598 2.03033 9.65533C2.17098 9.51468 2.25 9.32391 2.25 9.125C2.25 8.92609 2.17098 8.73532 2.03033 8.59467C1.88968 8.45402 1.69891 8.375 1.5 8.375C1.30109 8.375 1.11032 8.45402 0.96967 8.59467C0.829018 8.73532 0.75 8.92609 0.75 9.125C0.75 9.32391 0.829018 9.51468 0.96967 9.65533C1.11032 9.79598 1.30109 9.875 1.5 9.875Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Content */}
                    <div className="py-4">
                      {activTab === 1 ? (
                        <CategoriesSelection categories={categories} />
                      ) : activTab === 2 ? (
                        <Settings />
                      ) : (
                        activTab && <CategoriesSort categories={categories} />
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
