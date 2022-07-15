import { useState } from 'react'
import { PlusSmIcon } from '@heroicons/react/solid'
import ResearchersInfo from './ResearchersInfoPopup'

const FourResearchers = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="flex cursor-pointer items-center gap-4">
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
          <img className="h-full w-full object-cover" src="/images/author-1.png" alt="" />
        </div>
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
          <img className="h-full w-full object-cover" src="/images/author-2.png" alt="" />
        </div>
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
          <img className="h-full w-full object-cover" src="/images/author-1.png" alt="" />
        </div>
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
          <img className="h-full w-full object-cover" src="/images/author-2.png" alt="" />
        </div>
      </div>
      <div className="mt-3.5 text-white">
        <p>Contributing researchers: </p>
        <p className="mt-1 font-semibold leading-5">
          <span>Kamal Patel, Michael Hull</span>
        </p>
        <div className="mt-3.5">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="flex items-center rounded border border-info py-1 pr-2.5 pl-1 text-info transition-colors duration-200 hover:bg-white hover:text-primary hover:shadow-lg"
          >
            <PlusSmIcon className="mr-1 h-4 w-4" />
            <span className="text-sm tracking-wide">2 others</span>
          </button>
        </div>
      </div>

      <ResearchersInfo {...{ open, setOpen }} />
    </div>
  )
}

export default FourResearchers
