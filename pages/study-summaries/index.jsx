import AppLayout from '@/components/Layouts/AppLayout'
import { ChevronRightIcon } from '@heroicons/react/solid'
import TwoResearchers from '@/components/Jumbortons/TwoResearcher'
import SidebarSearch from '@/components/Forms/SidebarSearch'
import SidebarRightWrapper from '@/components/Sidebar/SidebarRightWrapper'
import StudySummaryCard from '@/components/StudySummaries/StudySummaryCard'
import StudySummaryLeft from '@/components/Sidebar/StudySummaryLeft'
import TableOfContentSelect from '@/components/Forms/TableOfContentSelect'
import FilterBy from '@/components/Forms/FilterBy'
import SortBy from '@/components/Forms/SortBy'
import { Download } from '@/components/IconsSvg'
import axios from 'axios'
import { useAuthSelector } from 'store/slice/authSlice'
import { useEffect, useState } from 'react'

function StudySummary() {
  const [summariesData, setSummariesData] = useState()
  const [archiveMonth, setArchiveMonth] = useState('june-2021')
  const [category, setCategory] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useAuthSelector()

  useEffect(() => {
    const fetchSummaries = async () => {
      if (category) {
        // const res = await axios.get(
        //   `https://api.dev.examinenew.com/v1/study-summaries/categories/${category}`,
        // {
        //     headers: { Authorization: `Bearer ${user.data.token} ` },
        //   }
        // )
        // setSummariesData(res.data)
      } else {
        setIsLoading(true)
        const res = await axios.get(
          `https://api.dev.examinenew.com/v1/study-summaries/issue/${archiveMonth}`,
          {
            headers: { Authorization: `Bearer ${user.data.token} ` },
          }
        )
        setIsLoading(false)
        setSummariesData(res.data)
      }
    }
    fetchSummaries()
  }, [archiveMonth])

  return (
    <>
      <AppLayout>
        {/* Jumborton */}
        <div className="relative overflow-x-hidden bg-examine-purple-500">
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
                      Study Summaries
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
                        Men’s Health
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                      <a
                        href="/interventions"
                        className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                        aria-current="page"
                      >
                        Interventions
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
                        Ashwaganda
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="flex flex-1 flex-col space-y-3 text-white lg:mt-7">
                <h1 className="font-lora capitalize">Study Summaries of the {archiveMonth}</h1>
              </div>
            </div>
            <div className="hidden w-full max-w-md 2xl:block">
              <div className="relative px-6 lg:py-15 2xl:px-9">
                <TwoResearchers />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full wide:max-w-fixed">
          <div className="hidden w-full max-w-xs py-15 px-7 2xl:block">
            <div className="sticky top-40">
              <StudySummaryLeft
                setArchiveMonth={setArchiveMonth}
                archiveMonth={archiveMonth}
                category={category}
                setCategory={setCategory}
              />
            </div>
          </div>
          {/* center */}
          <div className="z-10 w-full flex-1 space-y-25 bg-white px-6 py-10 shadow-form md:py-14 md:px-12 xxl:px-19">
            <div className="space-y-5 pb-96">
              {!isLoading ? (
                summariesData?.data?.summaries?.map((data, index) => (
                  <StudySummaryCard {...data} key={index} />
                ))
              ) : (
                <div className="flex items-center justify-center text-2xl font-medium ">
                  Loading...
                </div>
              )}
            </div>
          </div>

          <SidebarRightWrapper>
            <div className="space-y-7 px-6 py-12 lg:space-y-10 xl:py-18 xxl:px-12">
              <SidebarSearch />

              {/* Table of Content */}
              <TableOfContentSelect />

              <div className="max-w-[284px] space-y-7">
                {/* Filter */}
                <FilterBy />

                {/* Sort */}
                <SortBy />

                {/* Download */}

                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-dashed border-primary bg-info  py-3 text-primary transition duration-200 hover:bg-primary hover:text-white"
                >
                  <Download />
                  <span className="ml-2">Download guide</span>
                </button>
              </div>
            </div>
          </SidebarRightWrapper>
        </div>
      </AppLayout>
    </>
  )
}

export default StudySummary
