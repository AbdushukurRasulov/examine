/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/outline'

import data from '../../data/archiveMonths.json'
import axios from 'axios'
import Image from 'next/image'

export default function PreviousStudies({
  previousStudies,
  setPreviousStudies,
  setArchiveMonth,
  archiveMonth,
  category,
  setCategory,
}) {
  const [categories, setCategories] = useState()

  useState(() => {
    const fetchCategories = async () => {
      const res = await axios.get('https://api.dev.examinenew.com/v1/categories')

      setCategories(res.data)
    }
    fetchCategories()
  }, [])

  return (
    <Transition.Root show={previousStudies} as={Fragment}>
      <Dialog as="div" className="relative z-1000" onClose={setPreviousStudies}>
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
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[500px]">
                  <div className="flex h-full flex-col overflow-y-auto bg-white px-5 pb-16 shadow-sidebar">
                    {/* header */}
                    <div className="sticky top-0 z-10 flex items-start justify-between border-b border-dashed border-black bg-white pb-3 pt-7    ">
                      <Dialog.Title className="font-lora text-25 font-semibold leading-8 text-gray-900">
                        Archive
                      </Dialog.Title>

                      <button
                        type="button"
                        className="absolute top-0 -right-2 p-2 focus-visible:outline-none"
                        onClick={() => setPreviousStudies(false)}
                      >
                        <XCircleIcon className="h-7 w-7" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="relative mt-7">
                      <div>
                        <p className="text-lg font-bold leading-8 -tracking-2 text-examine-purple-500">
                          Archives by Month
                        </p>

                        <div className="grid grid-cols-2 py-8">
                          <div className="space-y-2">
                            {data.archiveMonths.slice(0, 6).map((item) => (
                              <div
                                key={item.slug}
                                onClick={() => {
                                  setArchiveMonth(item.slug)
                                  setPreviousStudies(false)
                                }}
                                className={
                                  archiveMonth === item.slug
                                    ? 'cursor-pointer font-bold'
                                    : 'cursor-pointer'
                                }
                              >
                                {item.name}{' '}
                                {item.new && (
                                  <span className="ml-1 rounded-full bg-research-green px-2 py-1 text-small uppercase text-white">
                                    new
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="space-y-2">
                            {data.archiveMonths.slice(6, data.archiveMonths.length).map((item) => (
                              <div
                                key={item.slug}
                                onClick={() => {
                                  setArchiveMonth(item.slug)
                                  setPreviousStudies(false)
                                }}
                                className={
                                  archiveMonth === item.slug
                                    ? 'cursor-pointer font-bold'
                                    : 'cursor-pointer'
                                }
                              >
                                {item.name}{' '}
                                {item.new && (
                                  <span className="ml-1 rounded-full bg-research-green px-2 py-1 text-small uppercase text-white">
                                    new
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-lg font-bold leading-8 -tracking-2 text-examine-purple-500">
                          Archives by Categories
                        </p>

                        <div className="grid grid-cols-3 gap-x-7 gap-y-4 py-4">
                          {categories?.data?.map(({ name, icon, slug }) => (
                            <div
                              key={slug}
                              onClick={() => {
                                setCategory(slug)
                                setPreviousStudies(false)
                              }}
                            >
                              <div
                                className={`grid h-30 cursor-pointer place-content-center rounded-t-lg bg-examine-green-500 bg-opacity-10 ${
                                  category === slug ? 'border-2 border-gray-400' : ''
                                } `}
                              >
                                <img className="h-24 w-24" src={icon} alt={slug} />
                              </div>
                              <p className="mt-1.5 text-xs leading-normal">{name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
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
