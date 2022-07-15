import React from 'react'
import { twitters } from '../../data/home.json'

const PeopleLoveUs = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-11 lg:py-20 lg:px-10 xl:py-32">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-lora font-medium text-gray-900">10,000+ people love us</h2>
          <p className="p-xl mt-5 -tracking-2 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim
            mollit non deserunt
          </p>
        </div>

        <div className="relative -mx-5 mt-18 overflow-hidden md:mx-0">
          <div className="flex snap-x grid-cols-2 gap-1.5 overflow-x-auto md:grid md:snap-none lg:grid-cols-3 lg:gap-5 xl:gap-8">
            {twitters.map((item, index) => (
              <div
                key={index}
                className="relative w-80 shrink-0 rounded-xl border border-gray-300 bg-white px-5 py-6 first:ml-5 last:mr-5 md:w-auto md:first:ml-0 md:last:mr-0"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full lg:h-10 lg:w-10">
                    <img className="h-full w-full object-cover" src="home/twitter.png" alt="" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 lg:text-lg xl:leading-8">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.position}</p>
                  </div>
                </div>
                <div>
                  <p className="mt-5 -tracking-2 text-[#7C8087]">{item.comment}</p>
                </div>

                <img className="absolute top-0 right-0 m-5" src="icons/twitter.svg" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleLoveUs
