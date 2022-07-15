import FilterBy from '@/components/Forms/FilterBy'
import SidebarSearch from '@/components/Forms/SidebarSearch'
import SortBy from '@/components/Forms/SortBy'
import AppLayout from '@/components/Layouts/AppLayout'
import SidebarRightWrapper from '@/components/Sidebar/SidebarRightWrapper'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/solid'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { categories } from '../../data/categories.json'

const Categories = ({ data }) => {
  const [categories] = useState(data?.data)
  console.log(data)
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
                  <a href="/" className="text-examine-purple-200 hover:text-examine-purple-100">
                    Examine
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
                      All Categories
                    </a>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="space-y-3 text-white lg:mt-5">
              <h1 className="font-lora">All Categories</h1>
              <p className="p-xl max-w-3xl -tracking-2">
                All our Outcomes pages are backed with references to scientific papers. We currently
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
            <div className="grid grid-cols-3 gap-18">
              {categories.map(({ name, icon, slug, description }, index) => (
                <div className="flex flex-col" key={index}>
                  <div>
                    <img className="h-50px w-50px xl:h-18 xl:w-18" src={icon} alt={name} />
                  </div>
                  <h4 className="mt-3 pr-10 font-lora font-medium lg:mt-4">{name}</h4>
                  <p className="mt-4 leading-7 text-gray-600 lg:mt-4 lg:text-lg">
                    {description ||
                      'System neuropathy operation otolaryngologist sebum sulfites vertebrae.'}
                  </p>

                  <div className="mt-2 md:mt-auto">
                    <Link href={`/categories/${slug}`}>
                      <a className="inline-flex items-center font-semibold -tracking-2 text-primary hover:underline  lg:text-lg lg:leading-10">
                        <span>View</span>
                        <span>
                          <ArrowRightIcon className="ml-2 h-4 w-4 stroke-[4px]" />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
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

export default Categories

export const getServerSideProps = async () => {
  const res = await axios.get('https://api.dev.examinenew.com/v1/categories')

  const data = res.data

  return {
    props: { data },
  }
}
