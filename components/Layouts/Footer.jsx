import Link from 'next/link'
import data from '../../data/footer.json'
import StayUptoDate from '../Forms/StayUptoDate'

const Footer = ({ refHeight }) => {
  const { socials, navLinks } = data
  return (
    <footer
      ref={refHeight}
      className="z-20 bg-examine-purple-600 py-12 px-5 text-white xl:px-10 xl:py-22 xxl:px-18"
    >
      <div className="mx-auto w-full text-center md:text-left lg:pb-16 wide:max-w-fixed">
        <div className="grid gap-5 gap-y-11 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:grid-cols-5">
          <div className="order-2 md:order-none">
            <div className="flex justify-center md:block">
              <svg className="h-8 w-36 text-white ">
                <use href="examine-logo.svg#examine-logo"></use>
              </svg>
            </div>
            <p className="mt-6 text-sm">
              <span>Copyright 2010 - 2021 Examine Inc.</span>
              <span className="mt-1.5 block">All rights reserved</span>
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
              {socials.map((link, index) => (
                <Link href={link.href} key={index}>
                  <a className="grid h-8 w-8 shrink-0 place-content-center rounded-full bg-white/10">
                    <img src={`/social-icons/${link.icon}.svg`} alt="" />
                  </a>
                </Link>
              ))}
            </div>

            <StayUptoDate classes="mt-10 hidden lg:block xl:hidden" />
          </div>
          <div className="order-1 grid gap-y-10 text-center md:col-span-2 md:grid-cols-3 md:gap-5 md:text-left lg:order-none lg:col-span-3">
            {navLinks.map((nav, index) => (
              <div className="text-gray-100" key={index}>
                <p className="text-xl font-bold">{nav.section}</p>
                <ul className="space-y-4 py-4 xl:py-6">
                  {nav.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <a className="group inline-flex items-center justify-center gap-2 md:justify-start">
                          <span className="group-hover:underline">{link.name}</span>
                          {link.trail && (
                            <span className="block rounded-full bg-premium px-3 text-[13px] font-semibold leading-5 text-primary">
                              {link.trail}
                            </span>
                          )}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="px-5 lg:hidden lg:px-0 xl:block">
            <StayUptoDate />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
