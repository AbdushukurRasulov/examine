import BrandLogos from '@/components/Home/BrandLogos'
import { Book } from '@/components/IconsSvg'
import AppLayout from '@/components/Layouts/AppLayout'
import FAQ from '@/components/Sales/FAQ'
import OurUsers from '@/components/Sales/OurUsers'
import WhatDoctorsThink from '@/components/Sales/WhatDoctorsThink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const anniversarySales = [
  {
    off: '34',
    plan: 'Monthly',
    'old-price': 29,
    'sale-price': 19,
  },
  {
    off: '27',
    plan: 'Yearly',
    'old-price': 198,
    'sale-price': 144,
  },
  {
    off: '39',
    plan: 'Lifetime',
    'old-price': 987,
    'sale-price': 699,
  },
]

const plans = [
  {
    plan: 'Monthly',
    title: 'Standard',
    info: `Risk-free trial. Cancel any time. <span class="text-primary text-base font-bold">Unconditional 60-day money-back guarantee.</span> No questions asked. For institutional access with multiple users, <a class="font-bold text-primary hover:underline">contact us.</a>`,
  },
  {
    plan: 'annual',
    title: 'Standard Plus',
    info: `Risk-free trial. Cancel any time. <span class="text-primary text-base font-bold">Unconditional 60-day money-back guarantee.</span> No questions asked. For institutional access with multiple users, <a class="font-bold text-primary hover:underline">contact us.</a>`,
  },
  {
    plan: 'lifetime',
    title: 'Extended',
    info: `Risk-free trial. Cancel any time. <span class="text-primary text-base font-bold">Unconditional 60-day money-back guarantee.</span> No questions asked. For institutional access with multiple users, <a class="font-bold text-primary hover:underline">contact us.</a>`,
  },
]

const Sales = () => {
  const [isActive, setIsActive] = useState(2)
  return (
    <>
      <div className="bg-examine-yellow-premium py-1.5">
        <p className="flex items-center justify-center gap-2 font-medium">
          <b>Anniversary Sale!</b>
          Save up to 34% off.
          <Link href="/">
            <a className="inline-block border-b border-black">Buy Now!</a>
          </Link>
        </p>
      </div>
      <AppLayout>
        {/* Hero */}
        <div className="bg-sales-bg py-14">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-lora text-5xl ">
              Stay on the <span className="font-semibold text-primary">cutting edge</span> of
              nutrition and supplement research
            </h1>

            <form className="mx-auto mt-13 max-w-2xl space-y-9 px-6 md:px-8">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  className="h-14 flex-1 border-2 !border-examine-purple-200 shadow-search"
                  placeholder="Enter your email address"
                />
                <button
                  type="button"
                  className="h-14 rounded bg-primary px-5 py-3.5 font-bold text-white hover:bg-examine-purple-400"
                >
                  Start free trial
                </button>
              </div>
              <p className="font-bold text-gray-900">
                Try Examine free for 14 days, no credit card required. By entering your email, you
                agree to receive marketing emails from Examine.
              </p>
            </form>
          </div>

          <div className="mx-auto mt-16 flex max-w-7xl gap-10">
            <div className="w-80">
              <ul className="space-y-5">
                {[...Array(4).keys()].map((item) => (
                  <li
                    onClick={() => setIsActive(item)}
                    className={`group cursor-pointer rounded-md px-7 py-6 shadow-sales-card transition-colors duration-200 hover:bg-primary ${
                      item === isActive ? 'bg-primary' : 'bg-white'
                    }`}
                    key={item}
                  >
                    <p
                      className={`text-xl font-semibold  group-hover:text-white ${
                        item === isActive ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Anxiety
                    </p>
                    <p
                      className={`mt-2 text-lg group-hover:text-white ${
                        item === isActive ? 'text-white' : 'text-gray-600'
                      }`}
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex-1 overflow-hidden rounded-30 border-[15px] border-black bg-white">
                <div className="relative h-full w-full">
                  <Image layout="fill" src="/sales/sd-table.png" className="scale-105" />
                </div>
              </div>
              <div className="-mt-2 h-8 rounded-[50%] bg-gray-900 opacity-60 blur-lg"></div>
            </div>
          </div>
        </div>

        <BrandLogos />

        {/* Your Examine Membership unlocks */}
        <div
          className="bg-[#EFE1EB] bg-contain bg-no-repeat"
          style={{ backgroundImage: 'url(/sales/membership-unlocks.png)' }}
        >
          <div className="mx-auto max-w-7xl pt-22 pb-32">
            <div className="ml-auto w-full max-w-4xl px-6 md:px-14">
              <h2 className="font-lora font-medium">
                Your Examine <br /> Membership unlocks
              </h2>
              <div className="grid grid-cols-2 gap-8 py-10">
                <div className="">
                  <div className="space-y-4 pb-8">
                    <div className="h-14 w-14">
                      <Book className="h-full w-full" />
                    </div>
                    <h4 className="font-lora font-medium text-examine-purple-800">
                      Study Database
                    </h4>
                    <p>
                      Our massive, sortable database contains thousands of study results across 400+
                      supplements and 700+ health outcomes. Understand the whole body of nutrition
                      and supplement evidence at a glance.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-4 pb-8 pl-14">
                    <div className="h-14 w-14">
                      <Book className="h-full w-full" />
                    </div>
                    <h4 className="font-lora font-medium text-examine-purple-800">
                      Study Summaries
                    </h4>
                    <p>
                      Pick the health categories you care about. Each month, you’ll get dozens of
                      easy-to-read summaries of new studies within your areas of interest.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="h-14 w-14">
                      <Book className="h-full w-full" />
                    </div>
                    <h4 className="font-lora font-medium text-examine-purple-800">
                      Supplement Guides
                    </h4>
                    <p>
                      Browse the 83 issues of Study Deep Dives, with their evidence overviews,
                      analyses of pivotal studies, explorations of biological mechanisms, and more!
                    </p>
                    <div className="pt-5">
                      <button
                        type="button"
                        className="h-12 rounded-md bg-primary px-5 py-2.5 font-bold text-white hover:bg-examine-purple-400"
                      >
                        Try Free for 2 weeks!
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4  pl-14 pt-8">
                    <div className="h-14 w-14">
                      <Book className="h-full w-full" />
                    </div>
                    <h4 className="font-lora font-medium text-examine-purple-800">
                      Continuing Education Credits
                    </h4>
                    <p>
                      Maintain your certifications for free with new credits every month. We are
                      approved for the Academy of Nutrition and Dietetics (AND) and the National
                      Academy of Sports Medicine (NASM)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unbiased research */}
        <div className="bg-sales-bg py-25">
          <div className="mx-auto max-w-4xl space-y-9">
            <div className="text-center font-lora font-medium">
              <h2>Unbiased research</h2>
              <p className="mt-2.5 text-3xl text-primary">
                No to industry ties, yes to meticulous analysis
              </p>
            </div>

            <div className="relative h-[480px] w-full">
              <Image layout="fill" src="/sales/video.png" />
            </div>
            <div className="space-y-8 text-center">
              <p className="text-sm leading-6 -tracking-2">
                Thousands of nutrition and supplement trials are conducted each year.{' '}
                <span className="text-xl font-bold leading-7 text-primary">
                  Misinformation easily creeps in, from oversimplified media reports to flawed
                  studies.
                </span>{' '}
                Study details are locked away in undecipherable journal articles.
                <br />
                <br />
                We cut through all that with our no-nonsense analysis on both big topics and
                individual studies. Plus, all Examine researchers are contractually required to have
                zero industry ties, to stay as unbiased as possible.
              </p>
              <button
                type="button"
                className="h-12 rounded-md bg-primary px-5 py-2.5 font-bold text-white hover:bg-examine-purple-400"
              >
                Try Free for 2 weeks!
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white pt-25 pb-40">
          <div className="mx-auto w-full max-w-[1386px] space-y-40 px-6">
            <div className="flex items-center gap-15">
              <div className="w-full max-w-3xl shrink-0">
                <div className="h-[680px] w-full overflow-hidden rounded-30 border-[15px] border-black bg-white">
                  <div className="relative h-full w-full">
                    <Image layout="fill" src="/sales/select-all-areas.png" objectFit="none" />
                  </div>
                </div>
                <div className="-mt-2 h-8 rounded-[50%] bg-gray-900 opacity-60 blur-lg"></div>
              </div>
              <div>
                <h2 className="font-lora font-medium">Personalized updates</h2>
                <h3 className="mt-2.5 font-lora font-medium text-primary">
                  Pick your categories, get dozens of study summaries each month
                </h3>
                <p className="mt-8">
                  Using a personalized dashboard, Examine members select any or all of 25 health
                  categories they want to keep up to date on. They can easily save summaries and
                  share them with others.
                  <br />
                  <br />
                  <span className="text-lg font-bold text-primary">
                    Personalization is important because everyone’s unique.
                  </span>{' '}
                  You might be chronically low on sleep, while your dad has diabetes, and your kid
                  struggles with acne. Make sure not to miss out on the latest findings for topics
                  you care about.
                </p>
              </div>
            </div>

            <div className="mx-auto flex max-w-7xl items-center gap-8 px-5">
              <div className="max-w-xl shrink-0">
                <h2 className="font-lora font-medium">
                  Healthier you <br />{' '}
                  <span className="text-primary">Knowledge truly is half the battle</span>
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-lg leading-8">
                  Your body is amazingly complex. To tackle your health goals optimally, you’d need
                  to have a dozen different graduate degrees and spend all your time reading
                  studies.
                  <br />
                  <br />
                  Which precisely describes Examine. We’re a dedicated team of nerds who analyze
                  studies all day. Our researchers have graduate degrees in nutrition, medicine,
                  biochemistry, public health, pharmacology, toxicology, biophysics, and more.
                </p>
                <button
                  type="button"
                  className="h-12 rounded-md bg-primary px-5 py-2.5 font-bold text-white hover:bg-examine-purple-400"
                >
                  Try Free for 2 weeks!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F3F1FF] py-25">
          <div className="text-center font-lora font-medium">
            <h2>Unlock research-backed health information</h2>
            <h3>Try Examine free for 14 days, no credit card required</h3>
          </div>

          <div className="py-21 text-center">
            <div>
              <span className="text-40 font-semibold">🎉</span>
              <h2 className="font-lora font-medium">Anniversary Sale!</h2>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-3 gap-10 py-4 text-left">
              {anniversarySales.map((plan) => (
                <div
                  key={plan.plan}
                  className="shadow-sales-card-2 space-y-2 rounded-2xl bg-white p-7 font-semibold"
                >
                  <p className="text-13 uppercase tracking-wider  text-gray-400">{plan.off}% off</p>
                  <p className="text-xl">{plan.plan}</p>
                  <p className="flex items-center gap-2 text-2xl text-examine-green-500">
                    <span className="line-through">${plan['old-price']} </span>
                    <span className="text-gray-600 ">→</span>
                    <span> ${plan['sale-price']}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-6 text-lg text-gray-900">
              <p>
                Risk-free trial. Cancel any time.{' '}
                <span className="text-base font-bold text-primary">
                  Unconditional 60-day money-back guarantee.
                </span>{' '}
                No questions asked.
              </p>
              <p>
                We offer 50% off for{' '}
                <span className="text-base font-bold text-primary">
                  currently enrolled students
                </span>{' '}
                and{' '}
                <span className="text-base font-bold text-primary">seniors age 64 and over.</span>
              </p>
              <p>
                For institutional access with multiple users,{' '}
                <Link href="/contact-us">
                  <a className="font-bold text-primary hover:underline">contact us.</a>
                </Link>
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-11">
            <div className="grid grid-cols-3 gap-10">
              {plans.map((plan) => (
                <div className="shadow-sales-card-2 rounded-2xl bg-white p-10">
                  <p className="text-13 font-semibold uppercase tracking-wider text-gray-500">
                    {plan.plan}
                  </p>
                  <h3 className="mt-4 font-lora">{plan.title}</h3>
                  <p className="py-10 text-lg" dangerouslySetInnerHTML={{ __html: plan.info }}></p>

                  <button className="h-12 w-full rounded-md border border-primary bg-white text-xl text-primary transition duration-200 hover:bg-primary hover:text-white hover:shadow-xl">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-2xl bg-white px-11 py-10 text-center">
              <h2>Buy Membership Lite</h2>
              <p>
                Risk-free trial. Cancel any time.{' '}
                <span className="text-base font-bold text-primary">
                  Unconditional 60-day money-back guarantee.
                </span>{' '}
                No questions asked.
              </p>

              <div className="flex items-center justify-center gap-4 pt-6">
                <p className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.21674 15.249C7.98577 15.2482 7.76547 15.1517 7.60841 14.9823L3.55841 10.674C3.24314 10.338 3.25993 9.81007 3.59591 9.49481C3.93188 9.17954 4.45981 9.19633 4.77507 9.53231L8.20841 13.1906L15.2167 5.52397C15.4105 5.28265 15.7221 5.16861 16.0259 5.22781C16.3297 5.28701 16.5756 5.5097 16.6646 5.80613C16.7536 6.10256 16.671 6.4239 16.4501 6.64064L8.83341 14.974C8.67781 15.1464 8.45731 15.2461 8.22507 15.249H8.21674Z"
                      fill="#20C997"
                    />
                  </svg>

                  <span>Choose upto 3 Categories</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.21674 15.249C7.98577 15.2482 7.76547 15.1517 7.60841 14.9823L3.55841 10.674C3.24314 10.338 3.25993 9.81007 3.59591 9.49481C3.93188 9.17954 4.45981 9.19633 4.77507 9.53231L8.20841 13.1906L15.2167 5.52397C15.4105 5.28265 15.7221 5.16861 16.0259 5.22781C16.3297 5.28701 16.5756 5.5097 16.6646 5.80613C16.7536 6.10256 16.671 6.4239 16.4501 6.64064L8.83341 14.974C8.67781 15.1464 8.45731 15.2461 8.22507 15.249H8.21674Z"
                      fill="#20C997"
                    />
                  </svg>

                  <span>Study Database</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.21674 15.249C7.98577 15.2482 7.76547 15.1517 7.60841 14.9823L3.55841 10.674C3.24314 10.338 3.25993 9.81007 3.59591 9.49481C3.93188 9.17954 4.45981 9.19633 4.77507 9.53231L8.20841 13.1906L15.2167 5.52397C15.4105 5.28265 15.7221 5.16861 16.0259 5.22781C16.3297 5.28701 16.5756 5.5097 16.6646 5.80613C16.7536 6.10256 16.671 6.4239 16.4501 6.64064L8.83341 14.974C8.67781 15.1464 8.45731 15.2461 8.22507 15.249H8.21674Z"
                      fill="#20C997"
                    />
                  </svg>

                  <span>Study Summaries</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.21674 15.249C7.98577 15.2482 7.76547 15.1517 7.60841 14.9823L3.55841 10.674C3.24314 10.338 3.25993 9.81007 3.59591 9.49481C3.93188 9.17954 4.45981 9.19633 4.77507 9.53231L8.20841 13.1906L15.2167 5.52397C15.4105 5.28265 15.7221 5.16861 16.0259 5.22781C16.3297 5.28701 16.5756 5.5097 16.6646 5.80613C16.7536 6.10256 16.671 6.4239 16.4501 6.64064L8.83341 14.974C8.67781 15.1464 8.45731 15.2461 8.22507 15.249H8.21674Z"
                      fill="#20C997"
                    />
                  </svg>

                  <span>Discussions</span>
                </p>
              </div>
              <button className="h-12 w-full rounded-md border border-primary bg-white text-xl text-primary transition duration-200 hover:bg-primary hover:text-white hover:shadow-xl">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <OurUsers />

        <div className="bg-sales-bg py-25">
          <div className="text-center font-lora font-medium">
            <h2>What is Examine?</h2>
            <h3 className="mt-3 text-primary">And why should you trust us?</h3>
          </div>
          <div className="mx-auto max-w-4xl space-y-8 py-8 px-6 text-center">
            <div className="relative h-[480px]">
              <Image layout="fill" src="/about/video.png" />
            </div>

            <button
              type="button"
              className="h-12 rounded-md bg-primary px-5 py-2.5 font-bold text-white hover:bg-examine-purple-400"
            >
              Try Free for 2 weeks!
            </button>
          </div>
        </div>

        <div className="bg-white py-25">
          <div className="mx-auto max-w-3xl space-y-25">
            <FAQ />

            <WhatDoctorsThink />
          </div>
        </div>
      </AppLayout>
    </>
  )
}

export default Sales
