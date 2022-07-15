import { Link as LinkScroll } from 'react-scroll'

import { Document, DocumentText, Share, Bookmark } from '../IconsSvg'
import Tooltip from '../Tooltip'

const QuickLinks = ({ links }) => {
  return (
    <div className="!mt-auto hidden items-center gap-2 text-xs lg:flex xl:text-base xxl:gap-3.5">
      {links?.map((link, idx) => (
        <LinkScroll
          key={idx}
          to={link.name}
          spy={true}
          offset={-140}
          smooth={true}
          duration={500}
          activeClass="isActive-link"
          className="inline-flex cursor-pointer items-center gap-1 rounded bg-examine-purple-700 px-4 py-3 transition-colors duration-200 hover:bg-examine-purple-400"
        >
          <span className="grid h-4 w-4 shrink-0 place-content-center xl:h-6 xl:w-6">
            {link.icon}
          </span>
          <span>{link.title}</span>
        </LinkScroll>
      ))}

      <button
        type="button"
        className="inline-flex items-center gap-1 rounded bg-examine-purple-700 px-3.5 py-3 transition-colors duration-200 hover:bg-examine-purple-400"
      >
        <span className="grid h-4 w-4 shrink-0 place-content-center xl:h-6 xl:w-6">
          <Share className="h-full w-full" />
        </span>
      </button>

      {/* <Tooltip
        label={
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded bg-examine-purple-700 px-3.5 py-3 transition-colors duration-200 hover:bg-examine-purple-400"
          >
            <span className="grid h-4 w-4 shrink-0 place-content-center xl:h-6 xl:w-6">
              <Bookmark className="h-full w-full" />
            </span>
          </button>
        }
        place="bottom"
      >
        Save
      </Tooltip> */}
    </div>
  )
}

export default QuickLinks
