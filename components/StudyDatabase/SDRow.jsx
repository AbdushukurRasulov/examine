import React, { useState } from 'react'
import StudyDatabseTable from '.'
import StudiesSidebar from './StudiesSidebar'

// const sdData = {
//   header: {
//     title: 'Osteoarthiritis',
//   },
//   outcomes: {
//     list: ['Bone Mineral Density', 'Fractures'],
//   },
//   eveidence: [
//     {
//       grade: 'a',
//     },
//     {
//       stududies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
//     },
//   ],
//   effect: 'down',
// }

const SDRow = ({ plan, database }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [topic, setTopic] = useState({})

  return (
    <>
      <div className="divide-y divide-gray-300">
        <div className="grid grid-cols-sd-container divide-x divide-gray-300 bg-extra-gray-500">
          <div className="grid place-content-center">
            <p className="">Osteoarthiritis</p>
          </div>
          <div className="grid place-content-center">
            <button type="button" className="mx-auto flex items-center gap-3">
              <p className="">2 Outcomes</p>
              <svg
                className="h-5 w-5"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9255 10.4199V8.51232C14.9255 8.36869 14.8092 8.2522 14.6654 8.2522H11.1394H8.71166H5.18566C5.04195 8.2522 4.92554 8.36869 4.92554 8.51232V10.4199C4.92554 10.5635 5.04195 10.68 5.18566 10.68H8.71166H11.1394H14.6654C14.8092 10.68 14.9255 10.5635 14.9255 10.4199Z"
                  fill="#5E3B76"
                />
                <rect x="1.42554" y="0.966064" width="17" height="17" rx="3.5" stroke="#5F3B76" />
              </svg>
            </button>
          </div>
          <div className="pb-5 pt-9">
            <div className="flex items-start justify-center gap-4">
              <div className="h-10 w-10 shrink-0 rounded bg-research-green text-center font-bold uppercase leading-10 text-white drop-shadow-md">
                a
              </div>
              <div>
                <p className="text-menu -tracking-2">Very Well Researched</p>
                <button
                  type="button"
                  onClick={() => setIsShowing(true)}
                  className="text-sm font-medium text-primary underline"
                >
                  18 Studies
                </button>
              </div>
            </div>
            {plan && (
              <div className="mt-5 text-center">
                <button
                  type="button"
                  className="rounded border border-primary bg-examine-purple-200/40 px-5 py-1 text-menu text-primary lg:hover:bg-primary lg:hover:text-white"
                >
                  Guide on Managing Pain
                </button>
              </div>
            )}
          </div>
          <div className="grid place-content-center"></div>
        </div>
        {database.map(({ name, notes, slug, grade, consensus, arrow }, idx) => (
          <div className=" grid grid-cols-sd-container divide-x divide-gray-300" key={idx}>
            <div className="grid place-content-center text-center"> </div>
            <div className="grid place-content-center text-center">
              {' '}
              <p>{name}</p>
            </div>

            <div className="pb-5 pt-9">
              <div className="flex items-start justify-center gap-4">
                <div className="h-10 w-10 shrink-0 rounded bg-research-green text-center font-bold uppercase leading-10 text-white drop-shadow-md">
                  {grade}
                </div>
                <div>
                  <p className="text-menu -tracking-2">Very Well Researched</p>
                  <button
                    onClick={() => {
                      setTopic({ slug, grade, notes })
                      setIsShowing(true)
                    }}
                    type="button"
                    className="text-sm font-medium text-primary underline"
                  >
                    {consensus.studies} Studies
                  </button>
                </div>
              </div>
            </div>
            <div className="grid place-content-center">
              <div className="text-center">
                <span className="text-red-500">
                  <svg
                    className="mx-auto h-10 w-10"
                    viewBox="0 0 39 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2974 9.46325L6.45024 19.5873L0.603106 9.46325L2.73681 9.46325L2.73681 0.0141607L10.1637 0.0141603L10.1637 9.46325L12.2974 9.46325Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.895 16.2126L19.0479 26.3366L13.2008 16.2126L15.3345 16.2126L15.3345 0.0141606L22.7613 0.0141602L22.7613 16.2126L24.895 16.2126Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M38.3989 22.962L32.5518 33.086L26.7047 22.962L28.8384 22.962L28.8384 0.0141606L36.2652 0.0141602L36.2652 22.962L38.3989 22.962Z"
                      fill="#E2D9F3"
                    />
                  </svg>
                </span>
                <span className="block text-sm">{arrow.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <StudiesSidebar topic={topic} {...{ isShowing, setIsShowing }} />
    </>
  )
}

export default SDRow
