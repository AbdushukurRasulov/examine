import Link from 'next/link'

const MenuItems = ({ navLinks, isShowing }) => {
  return (
    <div
      className={`absolute left-0 flex w-full translate-y-0 overflow-hidden bg-white transition-[height] duration-300
            ${isShowing ? 'h-15 border-t border-gray-200 shadow-header' : 'h-0'}`}
    >
      <div className="mx-auto  flex h-full w-full max-w-4xl items-center justify-between gap-5 px-9 py-4 text-sm xl:max-w-base xl:text-menu 2xl:ml-auto 2xl:mr-0">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index}>
            <a className="rounded-md py-1 px-3 hover:text-primary hover:underline">{link.name}</a>
          </Link>
        ))}
      </div>
      <div className="shrink-0 2xl:w-1/4"></div>
    </div>
  )
}

export default MenuItems
