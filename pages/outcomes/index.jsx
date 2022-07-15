import FilterBy from '@/components/Forms/FilterBy'
import SidebarSearch from '@/components/Forms/SidebarSearch'
import SortBy from '@/components/Forms/SortBy'
import AppLayout from '@/components/Layouts/AppLayout'
import SidebarRightWrapper from '@/components/Sidebar/SidebarRightWrapper'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import data from '../../data/conditions.json'

const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const Outcomes = () => {
  const { lists } = data
  return (
    <AppLayout>
      {/* Jumborton */}
      <div className="relative overflow-x-hidden bg-examine-purple-500">
        <div className="mx-auto flex 2xl:justify-end wide:max-w-fixed">
          <div className="w-full max-w-[1085px] px-6 py-10 md:px-12 lg:pb-18 lg:pt-10 xxl:px-19">
            {/* breadcrumbs */}
            <nav className="hidden md:flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-1 leading-10 -tracking-2">
                <li>
                  <a href="#" className="text-examine-purple-200 hover:text-examine-purple-100">
                    Men’s Health
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                      aria-current="page"
                    >
                      Topics
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                      aria-current="page"
                    >
                      Depression
                    </a>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="space-y-3 text-white lg:mt-5">
              <h1 className="font-lora">Outcomes</h1>
              <p className="p-xl max-w-3xl -tracking-2">
                All our outcomes pages are backed with references to scientific papers. We currently
                have over 55,000 references.
              </p>
            </div>
          </div>
          <div className="hidden w-full max-w-md 2xl:block"></div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full wide:max-w-fixed">
        <div className="flex justify-end">
          {/* center */}
          <div className="z-10 w-full space-y-25 bg-white px-6 py-10 shadow-form md:py-14 md:px-12 xl:max-w-[1085px] xxl:px-19">
            {/* Popular Interventions by Outcomes */}
            <div>
              <h2 className="font-lora">
                Popular Interventions <span className="hidden md:inline">by Outcomes</span>
              </h2>

              <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14 lg:mt-16 lg:grid-cols-3">
                {[...Array(5).keys()].map((item) => (
                  <div key={item}>
                    <div>
                      <img
                        className="h-50px w-50px xl:h-18 xl:w-18"
                        src="/icons/information.svg"
                        alt=""
                      />
                    </div>
                    <h4 className="mt-3 pr-10 font-lora font-medium lg:mt-4">
                      Testosterone related conditions
                    </h4>
                    <p className="mt-2 leading-7 text-gray-600 lg:mt-4 lg:text-lg">
                      Cone decongestants farsighted glycemic index lunula pediatric endocrinologist.
                    </p>

                    <ul className="space-y-2 py-5 lg:space-y-3 lg:py-10">
                      {[...Array(3).keys()].map((list, idx) => (
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
                              <span>Magnesium</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/interventions/${item}`}>
                      <a className="inline-flex items-center font-semibold -tracking-2 text-primary hover:underline lg:text-lg lg:leading-10">
                        See All <ArrowRightIcon className="ml-2 h-4 w-4 stroke-[4px]" />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* All Interventions  (A-Z) */}
            <div>
              <h2 className="font-lora font-medium">All Interventions (A-Z)</h2>
              <div className="mt-8 grid grid-cols-5 flex-wrap gap-3 font-lora text-2xl md:grid-cols-12 lg:flex">
                {alphabets.map((item, idx) => (
                  <ScrollLink
                    to={item}
                    key={idx}
                    offset={-30}
                    className="cursor-pointer rounded-2xl bg-gray-100 py-2.5 font-bold uppercase leading-9 -tracking-2 transition-colors duration-200 lg:px-[18px] lg:hover:bg-primary lg:hover:text-white"
                  >
                    <span>{item}</span>
                  </ScrollLink>
                ))}
              </div>

              <div className="space-y-8 py-12 md:space-y-12 xl:py-22">
                {lists.map((list, index) => (
                  <div key={index} id={list.alphabet}>
                    <div className="grid h-14 w-14 place-content-center rounded-2xl bg-primary text-white lg:h-19 lg:w-19">
                      <span className="font-lora text-2xl font-bold uppercase lg:text-3xl">
                        {list.alphabet}
                      </span>
                    </div>
                    <div className="mt-6 gap-5 md:columns-3 lg:mt-8">
                      {list.interventions.map((item, idx) => (
                        <p
                          className="mb-5 flex items-center [&:nth-child(n+7)]:hidden md:[&:nth-child(n+7)]:block"
                          key={idx}
                        >
                          <span>{item.name}</span>
                          {item.new && (
                            <span className="ml-2 rounded-full bg-research-green px-2 text-xs leading-5 tracking-1 text-white">
                              New
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SidebarRightWrapper>
            <div className="px-6 py-12 xl:py-18 xxl:px-12">
              <SidebarSearch />

              <div className="max-w-[290px] space-y-7 py-12">
                {/* Filter */}
                <FilterBy />

                {/* Sort */}
                <SortBy />
              </div>
            </div>
          </SidebarRightWrapper>
        </div>
      </div>
    </AppLayout>
  )
}

export default Outcomes
