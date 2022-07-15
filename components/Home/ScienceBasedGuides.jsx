import { useState } from 'react'
import { guides } from '../../data/home.json'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ScienceBasedGuides = () => {
  const [isActive, setIsActive] = useState(1)
  const [activeSupplements, setActiveSupplements] = useState(guides[3])

  const checkSupplements = (idx) => {
    setIsActive(idx)
    setActiveSupplements(guides[idx])
  }

  return (
    <div className="bg-hero py-11 lg:py-24 xxl:py-36">
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        {/* heading */}
        <div className="grid items-center gap-10 md:grid-cols-2 xl:gap-32">
          <div>
            <div className="relative text-center md:text-left lg:pr-2">
              <span className="-top-10 rounded bg-examine-yellow px-4 py-0.5 font-black leading-6 md:absolute">
                Examine Plus
              </span>
              <h2 className="mt-3 font-lora text-gray-900">
                Science-based guides on how to{' '}
                <span className="text-examine-purple-400">dose, time, </span>
                <br className="hidden" />
                and
                <span className="text-examine-purple-400"> combine </span> supplements to{' '}
                <span className="text-examine-purple-400">improve your health.</span>
              </h2>
            </div>
          </div>
          <div>
            <ul className="space-y-3 -tracking-2 lg:space-y-5 lg:text-xl">
              <li className="flex items-center gap-3">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                  <rect
                    x="1.79102"
                    y="1.05078"
                    width="6.41877"
                    height="6.26842"
                    rx="3.13421"
                    stroke="#212529"
                    strokeWidth="2"
                  />
                </svg>

                <span className="text-gray-900">
                  Stop wasting money & time on useless supplements
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                  <rect
                    x="1.79102"
                    y="1.05078"
                    width="6.41877"
                    height="6.26842"
                    rx="3.13421"
                    stroke="#212529"
                    strokeWidth="2"
                  />
                </svg>

                <span className="text-gray-900">
                  17 guides, each focused on a specific health topic
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                  <rect
                    x="1.79102"
                    y="1.05078"
                    width="6.41877"
                    height="6.26842"
                    rx="3.13421"
                    stroke="#212529"
                    strokeWidth="2"
                  />
                </svg>

                <span className="text-gray-900">We don't sell products or recommend brands</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                  <rect
                    x="1.79102"
                    y="1.05078"
                    width="6.41877"
                    height="6.26842"
                    rx="3.13421"
                    stroke="#212529"
                    strokeWidth="2"
                  />
                </svg>

                <span className="text-gray-900">
                  Get free lifetime updates with the latest research
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Link */}
        <div className="items-center justify-between gap-20 pt-20 text-center md:flex xxl:gap-0">
          <p className="relative text-left font-lora text-xl font-medium text-gray-900 xl:text-30">
            See what works and what doesn’t in the{' '}
            <span className="relative px-2 font-bold before:absolute before:left-0 before:-bottom-1 before:-z-1 before:h-2/3 before:w-full before:rounded before:bg-info">
              Healthy Aging Guide
            </span>
          </p>

          <Link href="/">
            <a className="mt-8 inline-block rounded-md bg-primary px-4 py-2 font-bold tracking-1 text-white shadow-read-guide transition duration-200 hover:bg-examine-purple-400 hover:shadow-none md:mt-0 md:whitespace-nowrap xl:text-xl">
              Read the full guide for Free
            </a>
          </Link>
        </div>

        {/* Guides */}
        <div className="items-center gap-14 pt-14 lg:grid lg:grid-cols-2 xl:grid-cols-5 xl:gap-28">
          <div className="hidden lg:block xl:col-span-2">
            <div className="relative -mx-8 flex h-[620px] flex-col overflow-hidden after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-10 after:h-[10%] after:w-full after:rotate-180 after:bg-guide-top">
              <div className="scroll-y relative grid flex-1 grid-cols-3 items-start gap-x-12 gap-y-8 overflow-y-auto px-8 pb-12">
                {guides.map((item, idx) => (
                  <button
                    className="text-center"
                    type="button"
                    key={idx}
                    onClick={() => checkSupplements(idx)}
                  >
                    <div
                      className={`mx-auto grid aspect-square h-25 place-content-center rounded-lg border-[1.5px] bg-white shadow-home-tab transition duration-200 hover:border-examine-purple-300 ${
                        isActive === idx && 'border-[1.5px] border-examine-purple-300'
                      }`}
                    >
                      <img src="icons/sleep.svg" alt="" />
                    </div>
                    <p className="p-sm pt-3 tracking-1 text-gray-700">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-3">
            <div className="space-y-7">
              <Supplements supplements={activeSupplements['supplements']} />
            </div>
          </div>
        </div>
      </div>

      {/* dont remove */}
      <div className="bg- hidden border border-examine-teal-300 border-research-brown border-research-red bg-quote-orange/20 bg-examine-teal-100 bg-quote-red/10"></div>
    </div>
  )
}

export default ScienceBasedGuides

const Supplements = ({ supplements }) => {
  return (
    <>
      {supplements.map((item, idx) => {
        let keyTitle = Object.keys(item)[0]
        let title, colors

        if (keyTitle === 'mayWork') {
          title = 'may work'
          colors = ['research-brown', 'quote-orange/20']
        } else if (keyTitle === 'avoid') {
          title = 'avoid'
          colors = ['research-red', 'quote-red/10']
        } else {
          title = 'work'
          colors = ['examine-teal-300', 'examine-teal-100']
        }

        return (
          <div
            className="overflow-hidden rounded-lg bg-white py-4 shadow-home-tab md:py-8"
            key={idx}
          >
            <h4 className="px-4 font-lora font-medium md:px-7">
              {item[keyTitle].length} supplements that {title}
            </h4>
            <div className="relative mt-4 before:absolute before:right-0 before:h-full before:w-1/3 before:bg-home-guide">
              <div className="scroll-x flex snap-x scroll-px-7 items-center gap-3 overflow-x-auto">
                {item[keyTitle].map((supplement, index) => (
                  <div
                    className={`flex h-12 w-20 shrink-0 snap-start items-center justify-center rounded-lg border md:h-22 md:w-32 border-${colors[0]} bg-${colors[1]} text-center first:ml-4 last:mr-4 md:first:ml-7 md:last:mr-7`}
                    key={index}
                  >
                    <span className="text-graybg-red-900 block px-2 text-[10px] md:text-sm">
                      {supplement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
