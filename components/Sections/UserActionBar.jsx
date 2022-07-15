import { LinkIcon, MailIcon, PlusIcon, ShareIcon } from '@heroicons/react/solid'
import React from 'react'

const UserActionBar = () => {
  return (
    <>
      <div className="pt-16">
        <div className="flex items-center justify-between rounded-md bg-examine-purple-500 py-2.5 text-white xxl:px-24">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
          >
            <ShareIcon className="h-4 w-4" />
            <span className="text-sm lg:text-menu">Share</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
          >
            <LinkIcon className="h-4 w-4" />
            <span className="text-sm lg:text-menu">Link</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
          >
            <PlusIcon className="h-4 w-4" />
            <span className="text-sm lg:text-menu">
              <span className="hidden">Add to</span> Favorites
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
          >
            <MailIcon className="h-4 w-4" />
            <span className="text-sm lg:text-menu">Email</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default UserActionBar
