/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid'
import Study from './Study'
import { useRouter } from 'next/router'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import ReactTooltip from 'react-tooltip'
import { handleGradeInfo } from 'utils'

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

export default function StudiesSidebar({ topic, isShowing, setIsShowing }) {
  const [activTab, setActiveTab] = useState(1)
  const [studiesData, setStudiesData] = useState()
  const [gradeInfo, setGradeInfo] = useState('')

  const router = useRouter()
  const query = router.query

  const sortHandler = () => {
    if (activTab !== 3) {
      setActiveTab(3)
    } else setActiveTab(1)
  }
  useEffect(() => {
    const fetchStudies = async () => {
      if (Object.keys(query)[0] === 'intervention') {
        const res = await axios.get(
          `https://api.dev.examinenew.com/v1/interventions/${query.intervention}/study-database/${topic.slug}`
        )
        setStudiesData(res.data)
      } else {
        const res = await axios.get(
          `https://api.dev.examinenew.com/v1/interventions/${topic.slug}/study-database/${query.slug}`
        )
        setStudiesData(res.data)
      }
    }
    fetchStudies()

    const gradeInfo = handleGradeInfo(topic.grade)
    setGradeInfo(gradeInfo)
    console.log(gradeInfo)
  }, [topic])

  return (
    <Transition.Root show={isShowing} as={Fragment}>
      <Dialog as="div" className="relative z-1000" onClose={setIsShowing}>
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
                        {studiesData?.studies?.length} Studies Found
                      </Dialog.Title>

                      <button
                        className="inline-flex items-center space-x-2 rounded bg-primary px-2.5 py-1 text-sm text-white transition-colors duration-200"
                        type="button"
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.5 19.4999V5.99989C22.5 5.60206 22.342 5.22053 22.0607 4.93923C21.7794 4.65792 21.3978 4.49989 21 4.49989H15.621C14.8254 4.49972 14.0625 4.18354 13.5 3.62089L12 2.12089L10.5 3.62089C9.93752 4.18354 9.17458 4.49972 8.379 4.49989H3C2.60218 4.49989 2.22064 4.65792 1.93934 4.93923C1.65804 5.22053 1.5 5.60206 1.5 5.99989V19.4999C1.5 19.8977 1.65804 20.2792 1.93934 20.5605C2.22064 20.8419 2.60218 20.9999 3 20.9999H21C21.3978 20.9999 21.7794 20.8419 22.0607 20.5605C22.342 20.2792 22.5 19.8977 22.5 19.4999ZM3 2.99989C2.20435 2.99989 1.44129 3.31596 0.87868 3.87857C0.316071 4.44118 0 5.20424 0 5.99989L0 19.4999C0 20.2955 0.316071 21.0586 0.87868 21.6212C1.44129 22.1838 2.20435 22.4999 3 22.4999H21C21.7956 22.4999 22.5587 22.1838 23.1213 21.6212C23.6839 21.0586 24 20.2955 24 19.4999V5.99989C24 5.20424 23.6839 4.44118 23.1213 3.87857C22.5587 3.31596 21.7956 2.99989 21 2.99989H15.621C15.2232 2.9998 14.8417 2.84171 14.5605 2.56039L12.531 0.530888C12.4613 0.461043 12.3786 0.405628 12.2874 0.367819C12.1963 0.330009 12.0987 0.310547 12 0.310547C11.9013 0.310547 11.8037 0.330009 11.7125 0.367819C11.6214 0.405628 11.5387 0.461043 11.469 0.530888L9.4395 2.56039C9.15826 2.84171 8.77679 2.9998 8.379 2.99989H3Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.5 16.5H1.5V15H22.5V16.5ZM22.5 10.5H1.5V9H22.5V10.5ZM3 18.75C3 18.5511 3.07902 18.3603 3.21967 18.2197C3.36032 18.079 3.55109 18 3.75 18H12.75C12.9489 18 13.1397 18.079 13.2803 18.2197C13.421 18.3603 13.5 18.5511 13.5 18.75C13.5 18.9489 13.421 19.1397 13.2803 19.2803C13.1397 19.421 12.9489 19.5 12.75 19.5H3.75C3.55109 19.5 3.36032 19.421 3.21967 19.2803C3.07902 19.1397 3 18.9489 3 18.75ZM3 12.75C3 12.5511 3.07902 12.3603 3.21967 12.2197C3.36032 12.079 3.55109 12 3.75 12H20.25C20.4489 12 20.6397 12.079 20.7803 12.2197C20.921 12.3603 21 12.5511 21 12.75C21 12.9489 20.921 13.1397 20.7803 13.2803C20.6397 13.421 20.4489 13.5 20.25 13.5H3.75C3.55109 13.5 3.36032 13.421 3.21967 13.2803C3.07902 13.1397 3 12.9489 3 12.75ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H15.75C15.9489 6 16.1397 6.07902 16.2803 6.21967C16.421 6.36032 16.5 6.55109 16.5 6.75C16.5 6.94891 16.421 7.13968 16.2803 7.28033C16.1397 7.42098 15.9489 7.5 15.75 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="text-sm tracking-1">Filters</span>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      {/* Top */}
                      <div className="flex items-center rounded-lg border border-examine-yellow-800/30 bg-examine-yellow-400 p-2.5">
                        <span className="h-7 w-7 shrink-0 rounded bg-research-green text-center text-lg font-bold leading-7 text-white">
                          {topic.grade}
                        </span>
                        <p className="ml-3 font-medium">Very Well Researched</p>

                        <div className="ml-auto">
                          <button type="button" data-tip data-for="grade-info">
                            <svg
                              className=" h-5 w-5"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.99988 17.5742C11.0885 17.5742 13.0915 16.7445 14.5683 15.2677C16.0452 13.7908 16.8749 11.7878 16.8749 9.69922C16.8749 7.61064 16.0452 5.6076 14.5683 4.13075C13.0915 2.6539 11.0885 1.82422 8.99988 1.82422C6.9113 1.82422 4.90826 2.6539 3.43141 4.13075C1.95456 5.6076 1.12488 7.61064 1.12488 9.69922C1.12488 11.7878 1.95456 13.7908 3.43141 15.2677C4.90826 16.7445 6.9113 17.5742 8.99988 17.5742ZM8.99988 18.6992C11.3868 18.6992 13.676 17.751 15.3638 16.0632C17.0517 14.3754 17.9999 12.0862 17.9999 9.69922C17.9999 7.31227 17.0517 5.02309 15.3638 3.33526C13.676 1.64743 11.3868 0.699219 8.99988 0.699219C6.61293 0.699219 4.32374 1.64743 2.63592 3.33526C0.94809 5.02309 -0.00012207 7.31227 -0.00012207 9.69922C-0.00012207 12.0862 0.94809 14.3754 2.63592 16.0632C4.32374 17.751 6.61293 18.6992 8.99988 18.6992Z"
                                fill="#5E3B76"
                              />
                              <path
                                d="M10.0461 8.11084L7.46982 8.43372L7.37757 8.86122L7.88382 8.95459C8.21457 9.03334 8.27982 9.15259 8.20782 9.48222L7.37757 13.3837C7.15932 14.3928 7.4957 14.8676 8.28657 14.8676C8.8997 14.8676 9.61182 14.5841 9.9347 14.1948L10.0337 13.7268C9.8087 13.9248 9.4802 14.0036 9.26195 14.0036C8.95257 14.0036 8.84007 13.7865 8.91995 13.404L10.0461 8.11084Z"
                                fill="#5E3B76"
                              />
                              <path
                                d="M8.99988 6.88672C9.6212 6.88672 10.1249 6.38304 10.1249 5.76172C10.1249 5.1404 9.6212 4.63672 8.99988 4.63672C8.37856 4.63672 7.87488 5.1404 7.87488 5.76172C7.87488 6.38304 8.37856 6.88672 8.99988 6.88672Z"
                                fill="#5E3B76"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <ReactTooltip id="grade-info" className="w-80 bg-black text-white">
                        <span>{gradeInfo}</span>
                      </ReactTooltip>
                      {/* Summary */}
                      <div className="py-5">
                        <h4 className="text-base font-semibold leading-6">Summary</h4>
                        <p className="mt-2 leading-8 -tracking-2">{ReactHtmlParser(topic.notes)}</p>
                      </div>

                      {/* Studies */}
                      <ul className="divide-y divide-gray-300 border-y border-gray-300">
                        {studiesData?.studies?.map((study, idx) => (
                          <li className="pt-6 pb-4" key={idx}>
                            <Study study={study} />
                          </li>
                        ))}
                      </ul>
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
