import React, { useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { Doc, Grid, User } from '../IconsSvg'
import EvidenceFullInfoPopup from './EvidenceFullInfoPopup'

const EvidenceBoxV2 = ({ total_references }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="mt-12 text-white">
        <div
          className="cursor-pointer space-y-4 rounded-lg bg-examine-purple-700 px-5 py-8 -tracking-2 text-gray-200"
          onClick={() => setOpen(true)}
        >
          <div className="inline-flex items-center gap-2">
            <Doc />
            <span>{total_references} references on this page</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <User />
            <span>130 Participants in 23 Trials</span>
          </div>
          <div className="inline-flex items-center gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Grid />
                <span>Outcomes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4978 0.79511L13.6468 0.64611C13.759 0.534026 13.8921 0.44513 14.0386 0.384496C14.1851 0.323862 14.3421 0.292678 14.5007 0.292725C14.6592 0.292771 14.8162 0.324047 14.9627 0.384767C15.1092 0.445486 15.2422 0.534461 15.3543 0.64661C15.4664 0.758758 15.5553 0.891886 15.6159 1.03839C15.6766 1.18489 15.7078 1.34191 15.7077 1.50046C15.7077 1.65902 15.6764 1.81601 15.6157 1.96248C15.5549 2.10895 15.466 2.24203 15.3538 2.35411L15.2048 2.50211C15.4597 2.78797 15.5956 3.1605 15.5846 3.54334C15.5737 3.92617 15.4167 4.29031 15.1458 4.56111L4.85382 14.8541C4.78948 14.9181 4.70894 14.9634 4.62082 14.9851L0.620824 15.9851C0.537116 16.006 0.449439 16.0048 0.366316 15.9817C0.283194 15.9587 0.207452 15.9145 0.146454 15.8535C0.0854565 15.7925 0.0412778 15.7167 0.0182124 15.6336C-0.00485304 15.5505 -0.00602044 15.4628 0.0148237 15.3791L1.01482 11.3791C1.0367 11.2914 1.08198 11.2112 1.14582 11.1471L10.7878 1.50511C10.6914 1.43724 10.5741 1.40564 10.4566 1.41588C10.3391 1.42613 10.229 1.47757 10.1458 1.56111L6.85382 4.85411C6.80734 4.9006 6.75215 4.93747 6.69141 4.96263C6.63067 4.98779 6.56557 5.00074 6.49982 5.00074C6.43408 5.00074 6.36898 4.98779 6.30824 4.96263C6.2475 4.93747 6.19231 4.9006 6.14582 4.85411C6.09934 4.80762 6.06246 4.75243 6.0373 4.69169C6.01214 4.63095 5.99919 4.56585 5.99919 4.50011C5.99919 4.43437 6.01214 4.36927 6.0373 4.30853C6.06246 4.24779 6.09934 4.1926 6.14582 4.14611L9.43982 0.85411C9.7108 0.583125 10.0752 0.42613 10.4583 0.415345C10.8414 0.404559 11.214 0.540801 11.4998 0.79611C11.7746 0.550548 12.1301 0.414721 12.4986 0.414537C12.8671 0.414353 13.2228 0.549823 13.4978 0.79511V0.79511ZM12.8538 1.56111C12.7601 1.46737 12.6329 1.41472 12.5003 1.41472C12.3677 1.41472 12.2406 1.46737 12.1468 1.56111L1.94982 11.7561L1.18582 14.8131L4.24282 14.0491L14.4398 3.85411C14.4864 3.80766 14.5233 3.75249 14.5485 3.69174C14.5737 3.631 14.5867 3.56588 14.5867 3.50011C14.5867 3.43434 14.5737 3.36922 14.5485 3.30848C14.5233 3.24773 14.4864 3.19256 14.4398 3.14611L12.8548 1.56111H12.8538Z"
                    fill="#98FFDA"
                  />
                </svg>

                <span>Grade</span>
              </div>
            </div>
            <div className="flex gap-2 text-black">
              <div className="flex min-w-[36px] flex-col overflow-hidden rounded text-center text-sm -tracking-2">
                <span className="block bg-grade-a-top px-1.5 py-1 font-semibold">210</span>
                <span className="block bg-grade-a-bottom px-1.5 py-1 font-bold">A</span>
              </div>
              <div className="flex min-w-[36px] flex-col overflow-hidden rounded text-center text-sm -tracking-2">
                <span className="block bg-grade-b-top px-1.5 py-1 font-semibold">15</span>
                <span className="block bg-grade-b-bottom px-1.5 py-1 font-bold">B</span>
              </div>
              <div className="flex min-w-[36px] flex-col overflow-hidden rounded text-center text-sm -tracking-2">
                <span className="block bg-grade-c-top px-1.5 py-1 font-semibold">60</span>
                <span className="block bg-grade-c-bottom px-1.5 py-1 font-bold">C</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EvidenceFullInfoPopup {...{ open, setOpen }} />
    </>
  )
}

export default EvidenceBoxV2
