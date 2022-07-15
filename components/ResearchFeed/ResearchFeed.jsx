import { Disclosure, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { TooltipInfo } from '../IconsSvg'
import ResearchCard from './ResearchCard'

const ResearchFeed = ({ studySummaries }) => {
  return (
    <div id="research-feed">
      <div className="relative space-y-6">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`relative flex w-full items-center justify-between border-b border-dashed border-current pb-3 text-left  lg:hover:text-primary ${
                  open ? 'text-primary' : 'text-gray-900'
                }`}
              >
                <span className="flex items-center gap-4 font-lora text-20 font-medium xl:text-40">
                  <span>Research Feed</span>
                  <TooltipInfo />
                </span>

                <Link href="/">
                  <a className="text-primar hidden items-center gap-1 rounded border border-primary py-1.5 px-3 hover:bg-primary hover:text-white lg:flex">
                    <span className="y text-sm tracking-1">Read all studies</span>
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.41365 5.68604L3.38465 6.71504C2.96266 7.13703 2.72559 7.70938 2.72559 8.30617C2.72559 8.90295 2.96266 9.4753 3.38465 9.89729C3.80664 10.3193 4.37899 10.5564 4.97578 10.5564C5.57256 10.5564 6.14491 10.3193 6.5669 9.89729L7.9379 8.52554C8.19237 8.27103 8.38208 7.9592 8.49109 7.6162C8.60011 7.27321 8.62526 6.90907 8.56442 6.55434C8.50359 6.19962 8.35855 5.86466 8.14147 5.57759C7.9244 5.29052 7.64163 5.05972 7.3169 4.90454L6.8774 5.34404C6.83278 5.38873 6.79397 5.43888 6.7619 5.49329C7.0128 5.56542 7.24052 5.70178 7.42257 5.88888C7.60462 6.07599 7.73468 6.30737 7.7999 6.56015C7.86512 6.81293 7.86324 7.07835 7.79445 7.33018C7.72566 7.58201 7.59233 7.81153 7.40765 7.99604L6.0374 9.36704C5.75594 9.6485 5.3742 9.80662 4.97615 9.80662C4.57811 9.80662 4.19636 9.6485 3.9149 9.36704C3.63344 9.08558 3.47532 8.70384 3.47532 8.30579C3.47532 7.90774 3.63344 7.526 3.9149 7.24454L4.50965 6.65054C4.42574 6.33609 4.39332 6.01011 4.41365 5.68529V5.68604Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.81612 4.28361C5.56165 4.53811 5.37195 4.84995 5.26293 5.19295C5.15391 5.53594 5.12877 5.90008 5.1896 6.2548C5.25044 6.60953 5.39548 6.94448 5.61255 7.23155C5.82962 7.51862 6.11239 7.74943 6.43712 7.90461L7.01837 7.32261C6.76408 7.2544 6.53223 7.12046 6.3461 6.93426C6.15997 6.74805 6.02613 6.51614 5.95803 6.26182C5.88993 6.0075 5.88996 5.73974 5.95813 5.48544C6.0263 5.23114 6.1602 4.99926 6.34637 4.81311L7.71662 3.44211C7.99808 3.16064 8.37983 3.00252 8.77787 3.00252C9.17592 3.00252 9.55766 3.16064 9.83912 3.44211C10.1206 3.72357 10.2787 4.10531 10.2787 4.50336C10.2787 4.9014 10.1206 5.28314 9.83912 5.56461L9.24437 6.15861C9.32837 6.47361 9.36062 6.79986 9.34037 7.12386L10.3694 6.09486C10.7914 5.67286 11.0284 5.10052 11.0284 4.50373C11.0284 3.90694 10.7914 3.3346 10.3694 2.91261C9.94738 2.49061 9.37504 2.25354 8.77825 2.25354C8.18146 2.25354 7.60912 2.49061 7.18712 2.91261L5.81612 4.28361Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Link>

                <span className="accordion-arrow">
                  <svg
                    className="h-3 w-3 lg:h-4 lg:w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.61665 4.07539C1.49535 4.12572 1.38516 4.19945 1.29236 4.29236L7.29192 11.707L7.64544 11.3544L7.29236 11.7075L7.29213 11.7072C7.38498 11.8003 7.49525 11.8741 7.61665 11.9244C7.73814 11.9749 7.86838 12.0008 7.99992 12.0008C8.13145 12.0008 8.26169 11.9749 8.38318 11.9244C8.50467 11.874 8.61502 11.8002 8.70792 11.707L14.7075 5.70747C14.8004 5.61455 14.8741 5.50425 14.9244 5.38284C14.9747 5.26144 15.0005 5.13132 15.0005 4.99992C15.0005 4.86851 14.9747 4.7384 14.9244 4.61699C14.8741 4.49559 14.8004 4.38528 14.7075 4.29236C14.6146 4.19945 14.5042 4.12574 14.3828 4.07545C14.2614 4.02517 14.1313 3.99929 13.9999 3.99929C13.8685 3.99929 13.7384 4.02517 13.617 4.07545C13.4956 4.12574 13.3853 4.19945 13.2924 4.29236L13.2923 4.29239L7.99992 9.58575L2.70792 4.29281L2.35392 4.64592L2.7075 4.29239L2.70768 4.29257C2.61484 4.19956 2.50457 4.12576 2.38318 4.07539C2.26169 4.02497 2.13145 3.99902 1.99992 3.99902C1.86838 3.99902 1.73814 4.02497 1.61665 4.07539ZM1.29281 5.70792L1.64592 5.35392L1.29236 5.70747L1.29281 5.70792ZM7.99992 10.2929L8.35344 9.93933H7.64639L7.99992 10.2929Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
              </Disclosure.Button>
              <Transition
                as={Fragment}
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel static>
                  <div className="relative z-10 w-full space-y-15 py-4">
                    {studySummaries?.data?.map((data, idx) => (
                      <ResearchCard data={data} key={idx} />
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default ResearchFeed
