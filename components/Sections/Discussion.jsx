import Image from 'next/image'
import React from 'react'
import Accordion from '../Accordions/Accordion'

const Discussion = () => {
  return (
    <>
      {/* Discussion */}
      <Accordion>
        <Accordion.Title>Discussion?</Accordion.Title>
        <Accordion.Panel>
          <div className="divide-y divide-gray-300 ">
            <div className="pb-9 pt-7">
              {/* Head */}
              <div className="flex gap-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image layout="fill" src="/images/author-1.png" alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-bold text-primary">
                    <p>Rowan Atkinson </p>
                    <p className="text-gray-600">commented on</p>
                    <p>Ashwaganda</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-400">
                    <span>12:34pm</span>
                    <span>&#8226;</span>
                    <span>31 July</span>
                  </div>
                </div>
              </div>
              {/* comment */}
              <p className="mt-6 text-xl leading-8 -tracking-2">
                Research findings show that ashwagandha is particularly helpful in boosting men’s
                sexual health. The root extract of this small woody plant is said to boost
                testosterone levels, improve male fertility, and act as an aphrodisiac.
              </p>

              {/* Likes and comments */}
              <div className="flex items-center justify-between">
                {/* Likes counts */}
                <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
                  <span>345 likes</span>
                  <span>&#8226;</span>
                  <span>34 comments</span>
                </div>

                {/* Likes buttons */}
                <div className="flex items-center gap-9">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-xs leading-4 text-primary"
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4219 4.53307C14.2124 4.04813 13.9104 3.60868 13.5328 3.23932C13.1549 2.86886 12.7093 2.57446 12.2203 2.37213C11.7132 2.16149 11.1694 2.05368 10.6203 2.05494C9.85 2.05494 9.09844 2.26588 8.44531 2.66432C8.28906 2.75963 8.14062 2.86432 8 2.97838C7.85938 2.86432 7.71094 2.75963 7.55469 2.66432C6.90156 2.26588 6.15 2.05494 5.37969 2.05494C4.825 2.05494 4.2875 2.16119 3.77969 2.37213C3.28906 2.57526 2.84687 2.86744 2.46719 3.23932C2.08906 3.60826 1.787 4.04781 1.57812 4.53307C1.36094 5.03776 1.25 5.57369 1.25 6.12526C1.25 6.64557 1.35625 7.18776 1.56719 7.73932C1.74375 8.20025 1.99687 8.67838 2.32031 9.16119C2.83281 9.92525 3.5375 10.7221 4.4125 11.5299C5.8625 12.869 7.29844 13.794 7.35938 13.8315L7.72969 14.069C7.89375 14.1737 8.10469 14.1737 8.26875 14.069L8.63906 13.8315C8.7 13.7924 10.1344 12.869 11.5859 11.5299C12.4609 10.7221 13.1656 9.92525 13.6781 9.16119C14.0016 8.67838 14.2562 8.20025 14.4312 7.73932C14.6422 7.18776 14.7484 6.64557 14.7484 6.12526C14.75 5.57369 14.6391 5.03776 14.4219 4.53307ZM8 12.8331C8 12.8331 2.4375 9.269 2.4375 6.12526C2.4375 4.53307 3.75469 3.24244 5.37969 3.24244C6.52187 3.24244 7.5125 3.87994 8 4.81119C8.4875 3.87994 9.47813 3.24244 10.6203 3.24244C12.2453 3.24244 13.5625 4.53307 13.5625 6.12526C13.5625 9.269 8 12.8331 8 12.8331Z"
                        fill="#5E3B76"
                      />
                    </svg>

                    <span>Like</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-2 text-xs leading-4 text-primary"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.95605 6.67993C8.59512 6.67993 8.31543 6.95962 8.31543 7.30493C8.31543 7.65024 8.59512 7.92993 8.95605 7.92993C9.28574 7.92993 9.56543 7.65024 9.56543 7.30493C9.56543 6.95962 9.28574 6.67993 8.95605 6.67993ZM4.58105 6.67993C4.22012 6.67993 3.94043 6.95962 3.94043 7.30493C3.94043 7.65024 4.22012 7.92993 4.58105 7.92993C4.91074 7.92993 5.19043 7.65024 5.19043 7.30493C5.19043 6.95962 4.91074 6.67993 4.58105 6.67993Z"
                        fill="#5E3B76"
                      />
                      <path
                        d="M13.9715 5.49313C13.2199 4.46188 12.1699 3.77282 11.0183 3.46188V3.46344C10.7512 3.16657 10.4496 2.89313 10.1121 2.64938C7.55428 0.790006 3.96366 1.35719 2.09647 3.91501C0.591784 5.99313 0.655846 8.78844 2.19022 10.7744L2.20272 12.8463C2.20272 12.8963 2.21053 12.9463 2.22616 12.9931C2.30897 13.2572 2.59022 13.4025 2.85272 13.3197L4.83085 12.6963C5.35428 12.8822 5.89491 12.9884 6.43241 13.0181L6.4246 13.0244C7.81678 14.0384 9.64178 14.3431 11.3152 13.79L13.3012 14.4369C13.3512 14.4525 13.4027 14.4619 13.4558 14.4619C13.7324 14.4619 13.9558 14.2384 13.9558 13.9619V11.8681C15.3324 9.99938 15.3683 7.41657 13.9715 5.49313ZM5.0496 11.5869L4.8621 11.5088L3.31522 11.9931L3.2996 10.3681L3.1746 10.2275C1.85272 8.61501 1.76522 6.29157 3.00272 4.58688C4.50897 2.52126 7.39647 2.06501 9.45585 3.55563C11.5215 5.05719 11.9793 7.94001 10.4871 9.99313C9.23553 11.7103 6.99491 12.3447 5.0496 11.5869ZM12.9402 11.3213L12.8152 11.4775L12.8308 13.1025L11.2996 12.5869L11.1121 12.665C10.2371 12.99 9.30428 13.0166 8.44022 12.7744L8.4371 12.7728C9.59178 12.4181 10.6387 11.6994 11.3933 10.665C12.5871 9.01969 12.7808 6.95251 12.0871 5.19001L12.0965 5.19626C12.4558 5.45407 12.7855 5.77594 13.0652 6.16501C14.1996 7.72126 14.1355 9.84001 12.9402 11.3213Z"
                        fill="#5E3B76"
                      />
                      <path
                        d="M6.76855 6.67993C6.40762 6.67993 6.12793 6.95962 6.12793 7.30493C6.12793 7.65024 6.40762 7.92993 6.76855 7.92993C7.09824 7.92993 7.37793 7.65024 7.37793 7.30493C7.37793 6.95962 7.09824 6.67993 6.76855 6.67993Z"
                        fill="#5E3B76"
                      />
                    </svg>

                    <span>Comment</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-5 pb-9 pt-7">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                <Image layout="fill" src="/images/author-1.png" alt="" />
              </div>
              <div>
                <p className="font-semibold text-primary">Rowan Atkinson </p>
                <p className="mt-1 text-gray-900">
                  Ashwagandha is believed to have many health benefits, particularly in managing
                  stress. In studies, ashwagandha supplementation has been found to substantially
                  reduce cortisol (stress hormone) levels.
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <span>Like</span>
                  <span>&#8226;</span>
                  <span>Reply</span>
                  <span>&#8226;</span>
                  <span className="text-gray-500">23 min</span>
                </div>
              </div>
            </div>
            <div className="flex gap-5 pb-9 pt-7">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                <Image layout="fill" src="/images/author-1.png" alt="" />
              </div>
              <div>
                <p className="font-semibold text-primary">Rowan Atkinson </p>
                <p className="mt-1 text-gray-900">
                  Ashwagandha is believed to have many health benefits, particularly in managing
                  stress. In studies, ashwagandha supplementation has been found to substantially
                  reduce cortisol (stress hormone) levels.
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <span>Like</span>
                  <span>&#8226;</span>
                  <span>Reply</span>
                  <span>&#8226;</span>
                  <span className="text-gray-500">23 min</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative !mt-5">
            <textarea
              className="peer w-full resize-none px-6 py-7 placeholder-gray-500"
              rows="5"
              placeholder="Reply to a comment"
            ></textarea>
            {/* <button className="bg-primary px-8 font-medium text-white">Add</button> */}
          </div>
        </Accordion.Panel>
      </Accordion>
    </>
  )
}

export default Discussion
