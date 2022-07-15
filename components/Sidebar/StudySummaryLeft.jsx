import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Collections, Document, DocumentText, Edit, Filter, QuestionMark, Star } from '../IconsSvg'
import PreviousStudies from '../StudySummaries/PreviousStudies'
import Customize from '../StudySummaries/Cutomize'

const sidebarLinks = [
  {
    name: 'Latest Studies',
    href: '/',
    icon: <Document />,
    active: true,
    link: true,
  },
  {
    name: 'Previous Studies',
    href: '/',
    icon: <Collections />,
    link: false,
    handleClick: 'previousStudy',
  },
  {
    name: 'Customize',
    href: '/',
    icon: <Filter />,
    link: false,
    handleClick: 'customizeHandle',
  },
  {
    name: 'Favorites',
    href: '/',
    icon: <Star />,
    link: true,
  },
  {
    name: 'Continuing Education',
    href: '/',
    icon: <DocumentText />,
    link: true,
  },
  {
    name: 'How to use',
    href: '/',
    icon: <QuestionMark />,
    link: true,
  },
  {
    name: 'Corrections',
    href: '/',
    icon: <Edit />,
    link: true,
  },
]

function StudySummaryLeft({ setArchiveMonth, archiveMonth, category, setCategory }) {
  const [previousStudies, setPreviousStudies] = useState(false)
  const [customize, setCustomize] = useState(false)

  const previousStudy = () => setPreviousStudies(!previousStudies)
  const customizeHandle = () => setCustomize(!customize)

  return (
    <>
      <div className="space-y-1">
        {sidebarLinks.map(({ name, href, link, icon, active, handleClick }, index) => {
          return (
            <Fragment key={index}>
              {link ? (
                // Link
                <Link href="/">
                  <a
                    className={`${
                      active ? 'text-stroke bg-gray-200 text-examine-purple-500' : 'text-gray-700'
                    } hover:text-stroke flex items-center gap-2 rounded py-2  px-1.5 hover:bg-gray-200 hover:text-examine-purple-500 active:bg-transparent`}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-content-center">{icon}</span>

                    <span className="whitespace-nowrap -tracking-2">{name}</span>
                  </a>
                </Link>
              ) : (
                // Button
                <button
                  className="hover:text-stroke flex w-full items-center gap-2 rounded py-2 px-1.5 text-gray-700 hover:bg-gray-200 hover:text-examine-purple-500 active:bg-transparent"
                  onClick={eval(handleClick)}
                  type="button"
                >
                  <span className="grid h-6 w-6 shrink-0 place-content-center">{icon}</span>

                  <span className="whitespace-nowrap -tracking-2">{name}</span>
                </button>
              )}
            </Fragment>
          )
        })}
      </div>

      <PreviousStudies
        previousStudies={previousStudies}
        setPreviousStudies={setPreviousStudies}
        setArchiveMonth={setArchiveMonth}
        archiveMonth={archiveMonth}
        category={category}
        setCategory={setCategory}
      />

      <Customize customize={customize} setCustomize={setCustomize} />
    </>
  )
}

export default StudySummaryLeft
