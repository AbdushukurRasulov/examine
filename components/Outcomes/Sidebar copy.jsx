import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { Fragment, useRef, useState } from 'react'
import { Document, DocumentText, Edit, Home, HowTo, QuestionMark } from '../IconsSvg'

const sidebarLinks = [
  {
    name: 'Overview',
    link: '/',
    icon: <Home />,
    active: true,
    children: [
      {
        name: 'Summary',
        link: '/summary',
      },
      {
        name: 'Benefits',
        link: '/benefits',
      },
      {
        name: 'Side-effects',
        link: '/side-effects',
      },
    ],
  },
  {
    name: 'How to take?',
    link: '/',
    icon: <HowTo />,
  },
  {
    name: 'Latest Studies',
    link: '/',
    icon: <Document />,
  },
  {
    name: 'Study Database',
    link: '/',
    icon: <DocumentText />,
  },
  {
    name: 'FAQs',
    link: '/',
    icon: <QuestionMark />,
    children: [
      {
        name: 'Sources and Composition',
        link: '/summary',
      },
      {
        name: 'Benefits',
        link: '/benefits',
      },
      {
        name: 'Drawbacks',
        link: '/side-effects',
      },
      {
        name: 'Practical Considerations',
        link: '/side-effects',
      },
      {
        name: 'Comparisons',
        link: '/side-effects',
      },
    ],
  },
  {
    name: 'Things to Note',
    link: '/',
    icon: <Edit />,
  },
]

const Sidebar = () => {
  const [isActive, setIsActive] = useState(null)
  const [fullHeight, setFullHeight] = useState(0)
  const content = useRef([])

  const accordionHandler = (idx) => (e) => {
    const active = content.current[idx]
    setIsActive(isActive === idx ? null : idx)
    setFullHeight(active.clientHeight)
  }

  return (
    <>
      <div className="sticky top-20 px-6 py-12 xl:py-18">
        <div className="space-y-1">
          {sidebarLinks.map(({ name, link, icon, children, active }, index) => {
            return (
              <>
                {children ? (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            open ? 'text-gray-900' : 'text-gray-700'
                          } group flex w-full items-center rounded py-1 px-1.5 hover:bg-gray-200/50`}
                        >
                          <span
                            className={`mr-2 grid h-6 w-6 shrink-0 place-content-center ${
                              open ? 'text-examine-teal-500' : ''
                            }`}
                          >
                            {icon}
                          </span>
                          <span className="text-lg leading-9 -tracking-2">{name}</span>

                          {open ? (
                            <MinusIcon className="ml-auto h-3.5 w-3.5 text-examine-teal-500" />
                          ) : (
                            <PlusIcon className="ml-auto h-3.5 w-3.5" />
                          )}
                        </Disclosure.Button>

                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Disclosure.Panel as="div" className="space-y-2 pl-8 pb-6 pt-2">
                            {children.map((link, index) => (
                              <Link href="/" key={index}>
                                <a className="block rounded py-1.5 px-3 text-[17px] -tracking-2 text-gray-600 transition-colors duration-200 lg:hover:bg-examine-purple-100 lg:hover:text-primary">
                                  {link.name}
                                </a>
                              </Link>
                            ))}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <Link href="/" key={index}>
                    <a
                      className={`${
                        active ? 'text-gray-900' : 'text-gray-700'
                      } flex w-full items-center gap-2 rounded py-1 px-1.5 hover:bg-gray-200/50`}
                    >
                      <span className="grid h-6 w-6 shrink-0 place-content-center">{icon}</span>
                      <span className="text-lg leading-9 -tracking-2">{name}</span>
                    </a>
                  </Link>
                )}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar
