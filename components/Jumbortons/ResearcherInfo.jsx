import moment from 'moment'
import Image from 'next/image'
import React from 'react'

const ResearcherInfo = ({ authors, date }) => {
  console.log(authors)
  return (
    <div className="text-white">
      {authors?.map((author, idx) => (
        <div className="flex items-center gap-4 xxl:gap-10" key={idx}>
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar xxl:h-21 xxl:w-21">
            <Image
              className="h-full w-full object-cover"
              src={author.image || '/images/author-1.png'}
              alt={author.name}
              layout="responsive"
              width={64}
              height={64}
            />
          </div>
          <div className="space-y-1 text-sm">
            <p>Research led by </p>
            <p>
              <strong className="border-b border-white leading-5">
                {author.name || 'Kamal Patel'}
              </strong>
            </p>
            <p>MBA, MPH, PhD(c) nutrition</p>
          </div>
        </div>
      ))}

      {/* <div className="mt-4 flex items-center gap-6 text-sm lg:mt-6">
        <p className="font-semibold">Reviewed By</p>
        <p>Examine Team</p>
      </div> */}
      <div className="mt-2 flex items-center gap-5 text-sm lg:mt-3.5">
        <p className="font-semibold">Last Updated</p>
        <p>{moment(date).format('MMMM D YYYY')}</p>
      </div>
    </div>
  )
}

export default ResearcherInfo
