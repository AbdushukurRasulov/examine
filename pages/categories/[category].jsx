import Accordion from '@/components/Accordions/Accordion'
import OutcomesFaq from '@/components/FAQs/Outcomes/OutcomesFaq'
import SidebarSearch from '@/components/Forms/SidebarSearch'
import { Home, DocumentText, HowTo, Info, QuestionMark, Document } from '@/components/IconsSvg'
import EvidenceBoxV2 from '@/components/Jumbortons/EvidenceBox-v2'
import FourResearchers from '@/components/Jumbortons/FourResearchers'
import MainJumbortons from '@/components/Jumbortons/Main'
import QuickLinks from '@/components/Jumbortons/QuickLinks'
import MainLayout from '@/components/Layouts/MainLayout'
import Sidebar from '@/components/Sidebar'
import SidebarRightWrapper from '@/components/Sidebar/SidebarRightWrapper'
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/outline'
import { ArrowRightIcon } from '@heroicons/react/solid'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const sidebarLinks = [
  {
    name: 'Conditions',
    link: '/',
    icon: <Home />,
    active: true,
    children: [
      {
        name: 'Interventions',
        link: '/interventions',
      },
      {
        name: 'Outcomes',
        link: '/outcomes',
      },
      {
        name: 'Guides',
        link: '/guides',
      },
    ],
  },
  {
    name: 'Prostate Cancer',
    link: '/',
    icon: <HowTo />,
    active: true,
    children: [
      {
        name: 'Summary',
        link: '/summary',
      },
      {
        name: 'Causes',
        link: '/benefits',
      },
      {
        name: 'Symptoms',
        link: '/side-effects',
      },
    ],
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
]

// Testing List
const testosterone = [
  'Overview of Testosterone',
  'How are Testosterone Levels assessed?',
  'What are the symptoms of abnormal testosterone levels?',
  'What affects testosterone?',
]

const conditions = ['Hair Loss', 'Mood', 'Libido', 'Muscle Loss', 'Anxiety', 'Osteoperosis']

const Category = ({ data }) => {
  console.log(data)
  const quickLinks = [
    {
      name: 'how-to-take',
      icon: <HowTo className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'How to take',
    },
    {
      name: 'examine-database',
      icon: <DocumentText className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'Examine Database',
    },
    {
      name: 'research-feed',
      icon: <Document className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'Research Feed',
    },
  ]
  return (
    <MainLayout>
      {/* Jumborton */}
      <div className="relative overflow-x-hidden bg-examine-purple-500 before:absolute before:inset-0 before:bg-examine-purple-700/40">
        <div className="relative z-10 mx-auto flex 2xl:justify-end wide:max-w-fixed">
          <div className="hidden w-full max-w-xs 2xl:block"></div>
          <div className="flex w-full flex-1 flex-col bg-examine-purple-500 px-6 py-10 md:px-12 lg:pb-18 lg:pt-10 xxl:px-19">
            {/* breadcrumbs */}
            <nav className="hidden md:flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-1 leading-10 -tracking-2">
                <li>
                  <a href="#" className="text-examine-purple-200 hover:text-examine-purple-100">
                    Examine
                  </a>
                </li>
                <li>
                  <a href="#" className="text-examine-purple-200 hover:text-examine-purple-100">
                    Categories
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                    <a
                      href="/interventions"
                      className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                      aria-current="page"
                    >
                      {data?.name}
                    </a>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="flex flex-1 flex-col space-y-3 text-white lg:mt-7">
              <h4 className="font-lora text-premium">Category</h4>
              <h1 className="font-lora">{data.name}</h1>
              <p className="p-xl max-w-3xl pt-4 -tracking-2">
                Affect aspects of health relevant to biological males, such as through effects on
                testosterone, the testes, sperm quality and spermogenesis, and the prostate such as
                through effects on testosterone, the testes, sperm quality and spermogenesis, and
                the prostate.
              </p>

              <QuickLinks links={quickLinks} />
            </div>
          </div>
          <div className="hidden w-full max-w-sm 2xl:max-w-md xxl:block">
            <div className="relative px-6 lg:py-15 2xl:px-9">
              <FourResearchers />

              <div className="mt-6 inline-flex items-center gap-2 -tracking-2  text-white">
                <span className=" font-semibold">Last Updated:</span>
                <p>Jan 27th, 2022</p>
                <button type="button">
                  <Info />
                </button>
              </div>

              <EvidenceBoxV2 />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex w-full wide:max-w-fixed">
        <div className="hidden w-full max-w-xs xxl:block">
          <Sidebar sidebarLinks={sidebarLinks} />
        </div>
        {/* center */}
        <div className="z-10 w-full flex-1 space-y-25 bg-white px-6 py-10 shadow-form md:py-14 md:px-12 2xl:px-19">
          <div className="space-y-12 pb-96">
            {/* Understanding Testosterone */}
            <Accordion>
              <Accordion.Title>Understanding Testosterone</Accordion.Title>
              <Accordion.Panel>
                <p className="leading-7 -tracking-2 xl:text-xl xl:leading-9">
                  Testosterone is a hormone produced primarily in the testes in men and the ovaries
                  in women. It is the best-known androgen (male hormone), females produce it too. In
                  both sexes, low testosterone can reduce libido and cause fat gain, muscle loss,
                  and bone loss.
                </p>
                <div>
                  <h4 className="font-lora font-medium">Learn More about Testosterone</h4>
                  <ul className="space-y-2 py-5 lg:space-y-3">
                    {testosterone.map((list, idx) => (
                      <li key={idx}>
                        <Link href="/">
                          <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                            <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 11 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span>{list}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-15">
                  {/* Conditions */}
                  <div>
                    <div className="relative">
                      <p className="relative z-10 inline-block bg-white pr-3 text-xl font-semibold text-primary">
                        Conditions
                      </p>
                      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 border border-dashed border-primary/20"></div>
                    </div>
                    <h4 className="mt-3 font-lora font-medium">
                      Top Conditions related to Testosterone
                    </h4>
                    <p className="mt-6 text-lg leading-8">
                      Affect aspects of health relevant to biological males, such as through effects
                      on testosterone, the testes, sperm quality and spermogenesis, and the
                      prostate.
                    </p>

                    <div className="py-6">
                      <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        {conditions.map((list, idx) => (
                          <li key={idx}>
                            <Link href="/">
                              <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                                <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                                  <svg
                                    width="11"
                                    height="10"
                                    viewBox="0 0 11 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                <span>{list}</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 sm:mt-2">
                        <Link href="/">
                          <a className="inline-flex items-center font-semibold -tracking-2 text-primary hover:underline  lg:text-lg lg:leading-10">
                            <span>See All</span>
                            <span>
                              <ArrowRightIcon className="ml-2 h-4 w-4 stroke-[4px]" />
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Interventions */}
                  <div>
                    <div className="relative">
                      <p className="relative z-10 inline-block bg-white pr-3 text-xl font-semibold text-primary">
                        Interventions
                      </p>
                      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 border border-dashed border-primary/20"></div>
                    </div>
                    <h4 className="mt-3 font-lora font-medium">
                      Interventions related to Testosterone
                    </h4>
                    <p className="mt-6 text-lg leading-8">
                      Affect aspects of health relevant to biological males, such as through effects
                      on testosterone, the testes, sperm quality and spermogenesis, and the
                      prostate.
                    </p>

                    <div className="py-6">
                      <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        {conditions.map((list, idx) => (
                          <li key={idx}>
                            <Link href="/">
                              <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                                <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                                  <svg
                                    width="11"
                                    height="10"
                                    viewBox="0 0 11 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                <span>{list}</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <div className="relative">
                      <p className="relative z-10 inline-block bg-white pr-3 text-xl font-semibold text-primary">
                        Outcomes
                      </p>
                      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 border border-dashed border-primary/20"></div>
                    </div>

                    <div className="grid gap-10 py-3 sm:grid-cols-2">
                      <div className="space-y-5">
                        <h4 className="font-lora font-medium">Libido</h4>
                        <p className="text-lg leading-9 -tracking-2">
                          When it comes to increasing your testosterone, quality sleep, physical
                          activity, and weight management come first. A few supplements can help
                          sustain healthy testosterone levels, but most supplements marketed.
                        </p>
                        <Link href="/">
                          <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                            <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 11 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span>Read about Libido in Men</span>
                          </a>
                        </Link>
                      </div>
                      <div className="space-y-5">
                        <h4 className="font-lora font-medium">Hairloss</h4>
                        <p className="text-lg leading-9 -tracking-2">
                          When it comes to increasing your testosterone, quality sleep, physical
                          activity, and weight management come first. A few supplements can help
                          sustain healthy testosterone levels, but most supplements marketed.
                        </p>
                        <Link href="/">
                          <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                            <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 11 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span>Read about Alopecia in Men</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Supplement Guide */}
                  <div>
                    <div className="relative">
                      <p className="relative z-10 inline-block bg-white pr-3 text-xl font-semibold text-primary">
                        Supplement Guide
                      </p>
                      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 border border-dashed border-primary/20"></div>
                    </div>
                    <h4 className="mt-3 font-lora font-medium">Guide to Boosting Testosterone</h4>
                    <p className="mt-6 text-lg leading-8">
                      Healthy testosterone levels are critical for men's health, but confusion
                      abounds. "Normal" ranges vary depending on the lab and health practitioner,
                      and levels don't always correspond to symptoms. A few simple steps can help
                      you maintain healthy levels.
                    </p>

                    <div className="my-6 border-l-4 border-info py-2 pl-4 xl:pl-6">
                      <p className="text-primary xl:text-xl">
                        Testosterone is often seen as the holy grail of hormones for males, but it
                        also impacts females. And like the holy grail, it’s shrouded in mystery. If
                        you take the time to understand the concepts laid out here, you’ll be ready
                        for step-by-step recommendations to help support healthy testosterone
                        levels.
                      </p>
                    </div>

                    <Link href="/">
                      <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                        <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span>Read our guide to Boosting Testosterone</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion>
            {/* Prostate Cancer */}
            <Accordion>
              <Accordion.Title>Prostate Cancer</Accordion.Title>
              <Accordion.Panel>
                <p className="leading-7 -tracking-2 xl:text-xl xl:leading-9">
                  Prostate cancer risk is thought to be reduce with some supplements or foods, and
                  is usually measured either with survey data or by measuring prostate specific
                  antigen doubling time and looking for a reduction.
                </p>
                <Link href="/">
                  <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                    <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>Read about Libido in Men</span>
                  </a>
                </Link>
                <div className="space-y-15">
                  {/* Interventions */}
                  <div>
                    <div className="relative">
                      <p className="relative z-10 inline-block bg-white pr-3 text-xl font-semibold text-primary">
                        Interventions
                      </p>
                      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 border border-dashed border-primary/20"></div>
                    </div>
                    <h4 className="mt-3 font-lora font-medium">
                      Interventions related to Testosterone
                    </h4>
                    <p className="mt-6 text-lg leading-8">
                      Affect aspects of health relevant to biological males, such as through effects
                      on testosterone, the testes, sperm quality and spermogenesis, and the
                      prostate.
                    </p>

                    <div className="py-6">
                      <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        {conditions.map((list, idx) => (
                          <li key={idx}>
                            <Link href="/">
                              <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                                <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                                  <svg
                                    width="11"
                                    height="10"
                                    viewBox="0 0 11 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                <span>{list}</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <div className="relative">
                      <p className="relative z-10 inline-block bg-white pr-3 text-xl font-semibold text-primary">
                        Outcomes
                      </p>
                      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 border border-dashed border-primary/20"></div>
                    </div>

                    <div className="grid gap-10 py-3 sm:grid-cols-2">
                      <div className="space-y-5">
                        <h4 className="font-lora font-medium">Prostate Cancer Risk</h4>
                        <p className="text-lg leading-9 -tracking-2">
                          When it comes to increasing your testosterone, quality sleep, physical
                          activity, and weight management come first. A few supplements can help
                          sustain healthy testosterone levels, but most supplements marketed.
                        </p>
                        <Link href="/">
                          <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                            <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 11 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span>Read More</span>
                          </a>
                        </Link>
                      </div>
                      <div className="space-y-5">
                        <h4 className="font-lora font-medium">Apoptosis</h4>
                        <p className="text-lg leading-9 -tracking-2">
                          When it comes to increasing your testosterone, quality sleep, physical
                          activity, and weight management come first. A few supplements can help
                          sustain healthy testosterone levels, but most supplements marketed.
                        </p>
                        <Link href="/">
                          <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                            <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 11 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span>Read More</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Supplement Guide */}
                  <div>
                    <div className="relative">
                      <p className="relative z-10 inline-block bg-white pr-3 text-xl font-semibold text-primary">
                        Supplement Guide
                      </p>
                      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 border border-dashed border-primary/20"></div>
                    </div>
                    <h4 className="mt-3 font-lora font-medium">
                      Guide to Healthy Aging and Managing Cancer Risk
                    </h4>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div className="space-y-9">
                        <p className="text-lg leading-8 -tracking-2">
                          Ever notice how differently people seem to age, appearance-wise? For every
                          35-year-old who looks 50, there is a 50-year-old trending toward mid 30s
                          in appearance. <br />
                          <br />
                          Although we all experience time in the same way, the months, days, and
                          years seem to be more kind to some than others. The good news is that we
                          can partially control the effects of time on our bodies. And this is
                          precisely why we wrote this guide. We can’t stop the forward march of
                          time, but we do have a say in the resilience of our minds and bodies.
                        </p>

                        <Link href="/">
                          <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
                            <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 11 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span>Read Full Guide on Healthy Aging</span>
                          </a>
                        </Link>
                      </div>
                      <div>
                        <div className="relative h-80">
                          <Image
                            layout="fill"
                            objectFit="contain"
                            src="/images/image-category.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>

        <SidebarRightWrapper>
          <div className="px-6 py-12 xl:py-18 2xl:px-12">
            <SidebarSearch />

            <div className="space-y-11 py-50px">
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Primary Area</strong>
                </p>
                <p className="-tracking-2 text-primary">Mood</p>
              </div>
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Other Areas</strong>
                </p>
                <ul className="space-y-5 -tracking-2 text-primary">
                  <li>Cognitive Function and Brain Health</li>
                  <li>Muscle Gain and Exercise</li>
                  <li>Cardiovascular</li>
                  <li>General Health</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Also known as</strong>
                </p>
                <p className="-tracking-2">
                  Withania Somnifera, Indian Ginseng, Smell of Horse, Winter Cherry, Dunal,
                  Solanaceae
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Do not confuse with</strong>
                </p>
                <p className="-tracking-2">Stress, Anxiety</p>
              </div>
            </div>
          </div>
        </SidebarRightWrapper>
      </div>
    </MainLayout>
  )
}

export default Category

export const getServerSideProps = async ({ params: { category } }) => {
  const res = await axios.get(`https://api.dev.examinenew.com/v1/categories/${category}`)

  return {
    props: { data: res.data.data },
  }
}
