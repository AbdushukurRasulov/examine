import { Fragment, useState, useRef } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const MobileMenu = ({ navLinks }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [fullHeight, setFullHeight] = useState(0)
  const nav = useRef(null)

  const showLinks = () => {
    setIsShowing(!isShowing)
    setFullHeight(nav.current.clientHeight)
  }
  return (
    <>
      <Transition.Root as={Fragment}>
        <div className="lg:hidden">
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-white" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel className="absolute inset-x-0 top-0 z-1001 mx-auto h-screen w-full origin-top overflow-hidden transition">
              <div className="flex h-full flex-col overflow-y-auto bg-white">
                {/* Header */}
                <div className="sticky top-0 flex items-center justify-between px-7 py-4">
                  {/* logo */}
                  <span>
                    <svg className="h-4 w-18 text-examine-purple-500">
                      <use href="examine-logo.svg#examine-logo"></use>
                    </svg>
                  </span>
                  <div className="-mr-2">
                    <Popover.Button className="p-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 9L9 15"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 9L15 15"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Popover.Button>
                  </div>
                </div>

                {/* Auth: Sign Up/Sign In */}
                <div className="mx-auto -mt-1  flex w-full max-w-md items-center gap-4 px-7">
                  <Link href="/">
                    <a className="block flex-1 rounded-md border border-primary bg-primary py-1 text-center text-white">
                      Sign up
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="block flex-1 rounded-md border border-primary py-1 text-center text-primary">
                      Sign up
                    </a>
                  </Link>
                </div>

                <div className="border-b border-gray-300 px-6 pb-4">
                  <div
                    className="relative mx-auto mt-5 mb-3 max-w-md overflow-hidden transition-all duration-500 md:px-7"
                    style={{
                      height: `${isShowing ? `${fullHeight}px` : '36px'}`,
                    }}
                  >
                    <nav ref={nav} className="space-y-2 leading-9 -tracking-2">
                      {navLinks.map((link, index) => (
                        <Popover.Button as={Link} href={link.href} key={index}>
                          <a className="block">{link.name}</a>
                        </Popover.Button>
                      ))}
                    </nav>
                  </div>
                  <div className="mx-auto max-w-md md:px-7">
                    <button
                      onClick={showLinks}
                      type="button"
                      className="flex w-full items-center justify-between py-1"
                    >
                      <span className="text-examine-green-500">{isShowing ? 'Less' : 'More'}</span>
                      <span className="ml-auto grid h-7 w-7 place-content-center rounded-full bg-examine-purple-100">
                        <ChevronDownIcon
                          className={`h-4 w-4 ${
                            isShowing && '-rotate-180'
                          } transition-transform duration-500`}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </div>
      </Transition.Root>
    </>
  )
}

export default MobileMenu
