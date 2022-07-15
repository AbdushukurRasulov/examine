import Link from 'next/link'
import { Transition } from '@headlessui/react'
const MainMenuLinks = ({ navLinks, isShowing }) => {
  return (
    <Transition
      show={isShowing}
      as="div"
      enterFrom="opacity-0 w-0"
      enterTo="opacity-100 w-full"
      leaveFrom="opacity-100 w-full"
      leaveTo="opacity-0 w-0"
      className="relative flex items-center overflow-hidden transition-all duration-700"
    >
      {navLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="hover:text-stroke py-1 px-3 text-menu hover:text-primary hover:underline">
            {link.name}
          </a>
        </Link>
      ))}
      <span className="px-2"></span>
    </Transition>
  )
}

export default MainMenuLinks
