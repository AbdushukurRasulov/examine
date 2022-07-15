import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import data from '../../data/navigation.json'
import MainMenuLinks from '../Menu/MainMenuLinks'
import MobileMenu from '../Menu/MobileMenu'

const MainNavigation = () => {
  const [scroll, setScroll] = useState(false)
  const [isShowing, setIsShowing] = useState(false)

  const { pathname } = useRouter()

  const { navLinks } = data

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <Popover as={Fragment}>
      <>
        <header
          className={`${
            pathname === '/' ? 'fixed' : 'sticky !bg-white'
          } top-0 left-0 z-50 w-full bg-examine-purple-600 transition-colors duration-300 ${
            scroll ? 'shadow-header lg:bg-white' : 'lg:bg-transparent'
          }`}
        >
          <nav className="flex items-center py-3 lg:py-6">
            {/* Mobile Menu btn */}
            <Popover.Button className="mx-2.5 h-[30px] w-8 rounded bg-examine-purple-medium p-1.5 md:mx-4 lg:hidden">
              <svg className="w-full text-white" viewBox="0 0 21 15" fill="none">
                <path
                  d="M1.06201 1.31836H19.062"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.06201 7.31836H19.062"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.06201 13.3184H19.062"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Popover.Button>

            {/* Logo */}
            <div className="flex flex-1 shrink-0 items-center lg:px-6">
              <Link href="/">
                <a className="block">
                  <svg className="h-4 w-18 text-white md:h-8 md:w-25 lg:text-primary xxl:w-36">
                    <use href="/examine-logo.svg#examine-logo"></use>
                  </svg>
                </a>
              </Link>
            </div>

            {/* Actions */}
            <div className="relative hidden flex-1 items-center justify-end whitespace-nowrap px-6 lg:flex">
              <Link href="/login">
                <a className="hover:text-stroke text-menu hover:text-primary">Login</a>
              </Link>
              <Link href="/">
                <a className="mx-4 rounded-full bg-premium py-3 px-5 text-menu font-bold text-primary transition-colors hover:bg-primary hover:text-white 2xl:text-base">
                  Sign up
                </a>
              </Link>

              {/* MenuLinks */}
              <MainMenuLinks {...{ navLinks, isShowing }} />

              <button
                type="button"
                onClick={() => setIsShowing(!isShowing)}
                aria-label="Top Navigation Menu"
                className="grid h-5 w-5 shrink-0 place-content-center"
              >
                {isShowing ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70117 1.6123L14.4759 14.387"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.70117 14.3867L14.4759 1.612"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg className="h-4 w-5" viewBox="0 0 21 15" fill="none">
                    <path
                      d="M1.06201 1.31836H19.062"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.06201 7.31836H19.062"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.06201 13.3184H19.062"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Search */}
            <div className="lg:hidden">
              <button
                type="button"
                className="absolute top-1/2 right-5 z-10 -mr-3 -translate-y-1/2 p-3"
              >
                <svg className="h-4 w-4 text-white">
                  <use href="svgs/search.svg#search-icon"></use>
                </svg>
              </button>
            </div>
          </nav>
        </header>

        <MobileMenu {...{ navLinks }} />
      </>
    </Popover>
  )
}

export default MainNavigation
