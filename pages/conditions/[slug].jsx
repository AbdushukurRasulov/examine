import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import Breadcrumbs from 'nextjs-breadcrumbs'

import Accordion from '@/components/Accordions/Accordion'
import OutcomesFaq from '@/components/FAQs/Outcomes/OutcomesFaq'
import SidebarSearch from '@/components/Forms/SidebarSearch'
import { Document, DocumentText, Home, HowTo, Info, QuestionMark } from '@/components/IconsSvg'
import EvidenceBoxV2 from '@/components/Jumbortons/EvidenceBox-v2'
import ResearcherInfo from '@/components/Jumbortons/ResearcherInfo'
import QuickLinks from '@/components/Jumbortons/QuickLinks'
import MainLayout from '@/components/Layouts/MainLayout'
import Discussion from '@/components/Sections/Discussion'
import ResearchFeed from '@/components/ResearchFeed/ResearchFeed'
import Sidebar from '@/components/Outcomes/Sidebar'
import SidebarRightWrapper from '@/components/Sidebar/SidebarRightWrapper'
import StudyDatabaseTable from '@/components/StudyDatabase'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Condition = ({ data, studySummaries, examineDatabase }) => {
  const {
    overview,
    summary_tree,
    slug,
    dosage,
    updated_date,
    legacy_content,
    total_references,
    authors,
    synonyms,
    main_image,
    other_used_for,
    meta_description,
    summary_sidebar,
    not_synonyms,
    used_for,
  } = data?.data
  const router = useRouter()
  useEffect(() => {
    const fetchStudySummaries = async () => {
      const summariesResponse = await axios.get(
        `https://api.dev.examinenew.com/v1/topics/${router.query.slug}/study-database`
      )
      console.log(summariesResponse)
    }
    fetchStudySummaries()
  }, [])
  console.log(data)
  const quickLinks = [
    {
      name: 'overview',
      icon: <HowTo className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'Overview',
    },
    {
      name: 'causes',
      icon: <DocumentText className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'Causes',
    },
    {
      name: 'symptoms',
      icon: <Document className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'Symtoms',
    },
    {
      name: 'diagnosis',
      icon: <Document className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'Diagnosis',
    },
    {
      name: 'treatments',
      icon: <Document className="h-4 w-4 xl:h-5 xl:w-5" />,
      title: 'Treatments',
    },
  ]

  const overviewLinks = summary_sidebar?.map((item) => ({
    name: item.type,
    link: item.id,
  }))

  const sidebarLinks = [
    {
      name: 'Overview',
      link: '/',
      icon: <Home />,
      active: true,
      children: overviewLinks,
    },
    {
      name: 'Diagnosis',
      link: 'diagnosis',
      icon: <HowTo />,
    },
    {
      name: 'Treatments',
      link: 'treatments',
      icon: <Document />,
    },
    {
      name: 'Examine Database',
      link: 'examine-database',
      icon: <DocumentText />,
    },
    {
      name: 'Research Feed',
      link: 'research-feed',
      icon: <Document />,
    },
    !legacy_content && {
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

  return (
    <MainLayout>
      {/* Jumborton */}
      <div className="relative overflow-x-hidden bg-examine-purple-500 before:absolute before:inset-0 before:bg-examine-purple-700/40">
        <div className="relative z-10 mx-auto flex 2xl:justify-end wide:max-w-fixed">
          <div className="hidden w-full max-w-xs items-center justify-center 2xl:flex">
            {/* <img src={main_image} /> */}
            {/* <p>{meta_description}</p> */}
          </div>
          <div className="flex w-full flex-1 flex-col bg-examine-purple-500 px-6 py-10 md:px-12 lg:pb-18 lg:pt-10 xxl:px-19">
            {/* breadcrumbs */}
            <Breadcrumbs useDefaultStyle />

            <div className="flex flex-1 flex-col space-y-3 text-white lg:mt-7">
              <h1 className="font-lora capitalize">{slug.replace(/-/g, ' ')}</h1>
              <div className="p-xl max-w-3xl pt-4 -tracking-2">{ReactHtmlParser(overview)}</div>

              <QuickLinks links={quickLinks} />
            </div>
          </div>
          <div className="hidden w-full max-w-md 2xl:block">
            <div className="relative px-6 lg:py-15 2xl:px-9">
              <ResearcherInfo authors={authors} date={updated_date} />

              <EvidenceBoxV2 total_references={total_references} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex w-full wide:max-w-fixed">
        <div className="hidden w-full max-w-xs 2xl:block">
          <Sidebar sidebarLinks={sidebarLinks} />
        </div>
        {/* center */}
        <div className="z-10 w-full flex-1 space-y-25 bg-white px-6 py-10 shadow-form md:py-14 md:px-12 xxl:px-19">
          <div className="space-y-12 pb-96">
            {/* Overview */}
            {summary_tree.map((item, idx) => (
              <div id={item.id} key={idx}>
                <Accordion>
                  <Accordion.Title>{item.text}</Accordion.Title>
                  <Accordion.Panel>
                    <div className="accordian-content leading-7 -tracking-2 xl:text-xl xl:leading-9">
                      {ReactHtmlParser(item.content)}
                    </div>
                  </Accordion.Panel>
                </Accordion>
              </div>
            ))}

            {/* SD */}
            <StudyDatabaseTable examineDatabase={examineDatabase} />

            {/* Research Feed  */}
            <ResearchFeed studySummaries={studySummaries} />

            {/* FAQs about Depression */}

            {!legacy_content && (
              <Accordion>
                <Accordion.Title>FAQs about Depression</Accordion.Title>
                <Accordion.Panel>
                  <div className="divide-y divide-gray-200 border-b border-gray-200">
                    <OutcomesFaq />
                    <OutcomesFaq />
                    <OutcomesFaq />
                    <OutcomesFaq />
                  </div>
                </Accordion.Panel>
              </Accordion>
            )}

            {/* Discussion */}
            {/* <Discussion /> */}
          </div>
        </div>

        <SidebarRightWrapper>
          <div className="px-6 py-12 xl:py-18 xxl:px-12">
            <SidebarSearch />

            <div className="space-y-11 py-50px">
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Primary Area</strong>
                </p>
                <p className="-tracking-2 text-primary">{used_for}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Other Areas</strong>
                </p>
                <ul className="space-y-5 -tracking-2 text-primary">
                  {other_used_for?.map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Also known as</strong>
                </p>
                <div className="-tracking-2">
                  {synonyms?.map((item, idx) => (
                    <p key={idx}>{ReactHtmlParser(item)}</p>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-9">
                <p>
                  <strong>Do not confuse with</strong>
                </p>
                <p className="-tracking-2">
                  {' '}
                  {not_synonyms?.map((item, idx) => (
                    <p key={idx}>{ReactHtmlParser(item)}</p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </SidebarRightWrapper>
      </div>
    </MainLayout>
  )
}

export default Condition

export const getServerSideProps = async ({ params: { slug } }) => {
  console.log(slug)
  const res = await axios.get(`https://api.dev.examinenew.com/v1/topics/${slug}`)
  //   const summariesResponse = await axios.get(
  //     `https://api.dev.examinenew.com/v1/topics/${slug}/study-summaries/`
  //   )
  const databaseResponse = await axios.get(
    `https://api.dev.examinenew.com/v1/topics/${slug}/study-database`
  )
  //   console.log(summariesResponse)
  const data = res.data
  const summariesData = {}
  const databaseData = databaseResponse.data
  return {
    props: { data, studySummaries: summariesData, examineDatabase: databaseData },
  }
}
