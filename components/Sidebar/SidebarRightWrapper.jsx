import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const SidebarRightWrapper = ({ children, className }) => {
  const [open, isOpen] = useState(false)
  return (
    <>
      <div
        className={`fixed right-0 top-0 z-1000 h-screen w-80 transition-transform duration-500 lg:w-full lg:max-w-sm xl:static xl:z-0 2xl:max-w-md xxl:h-auto ${
          open ? 'translate-x-0 shadow-lg' : 'translate-x-full xl:translate-x-0'
        }  ${className}`}
      >
        <div className="sticky top-20 block h-full bg-main xxl:h-auto">
          <button
            className="absolute -left-11 top-1/3 z-10 rounded-l-lg bg-primary p-3 xl:hidden"
            onClick={() => isOpen(!open)}
            type="button"
          >
            <span className="grid h-5 w-5 place-content-center rounded border-[1.5px] border-white">
              <ArrowLeftIcon
                className={`h-3 w-3 text-white transition-transform duration-500 ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </span>
          </button>

          {children}
        </div>
      </div>
      {open && <div className="fixed inset-0 z-20" onClick={() => isOpen(false)}></div>}
    </>
  )
}

export default SidebarRightWrapper
