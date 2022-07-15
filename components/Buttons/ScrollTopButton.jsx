import { ChevronUpIcon } from '@heroicons/react/outline'
import useReadingProgress from 'hooks/useReadingProgress'
import React, { useEffect, useState } from 'react'

const ScrollTopButton = ({ divHeight }) => {
  const completion = useReadingProgress(divHeight)
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })

    const currentProgress = window.scrollY
    const scrollHeight = document.body.scrollHeight - window.innerHeight

    console.log('scrollHeight', scrollHeight)
    console.log('currentProgress', currentProgress)
    console.log('calculation', Number((currentProgress / scrollHeight).toFixed(2)) * 100)
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showTopBtn && (
        <button
          type="button"
          onClick={goToTop}
          className="fixed bottom-8 right-[2%] z-50 h-10 w-10 rounded-full mix-blend-multiply"
        >
          <svg viewBox="0 0 36 36" className="absolute inset-0">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              className="stroke-2"
              fill="none"
            ></path>
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              strokeDasharray={`${completion}, 100`}
              fill="none"
              className="stroke-primary stroke-2"
            ></path>
          </svg>
          <ChevronUpIcon className="absolute top-1/2 left-1/2 -mt-px h-5 w-5 -translate-x-1/2 -translate-y-1/2 stroke-[3px]" />
        </button>
      )}
    </>
  )
}

export default ScrollTopButton
