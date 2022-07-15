import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <ul className="space-y-2 py-5 lg:space-y-3 lg:py-10">
      {[...Array(3).keys()].map((list, idx) => (
        <li key={idx}>
          <Link href="/">
            <a className="group inline-flex items-center gap-2 -tracking-2 text-primary lg:gap-3 lg:text-lg lg:hover:underline xl:text-xl">
              <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary transition-colors duration-300 lg:group-hover:bg-primary lg:group-hover:text-white">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.00756836 4.65753C0.00756836 4.82329 0.0734165 4.98226 0.190627 5.09947C0.307837 5.21668 0.466808 5.28253 0.632568 5.28253H7.87382L5.19007 7.96503C5.13196 8.02314 5.08586 8.09212 5.05441 8.16805C5.02297 8.24397 5.00678 8.32535 5.00678 8.40753C5.00678 8.48971 5.02297 8.57108 5.05441 8.64701C5.08586 8.72293 5.13196 8.79192 5.19007 8.85003C5.24818 8.90814 5.31716 8.95423 5.39309 8.98568C5.46901 9.01713 5.55039 9.03332 5.63257 9.03332C5.71475 9.03332 5.79612 9.01713 5.87205 8.98568C5.94797 8.95423 6.01696 8.90814 6.07507 8.85003L9.82507 5.10003C9.88327 5.04197 9.92945 4.973 9.96096 4.89707C9.99247 4.82114 10.0087 4.73974 10.0087 4.65753C10.0087 4.57532 9.99247 4.49392 9.96096 4.41799C9.92945 4.34205 9.88327 4.27309 9.82507 4.21503L6.07507 0.465028C6.01696 0.406918 5.94797 0.360823 5.87205 0.329374C5.79612 0.297925 5.71475 0.281738 5.63257 0.281738C5.55039 0.281738 5.46901 0.297925 5.39309 0.329374C5.31716 0.360823 5.24818 0.406918 5.19007 0.465028C5.13196 0.523138 5.08586 0.592124 5.05441 0.668049C5.02297 0.743973 5.00678 0.825348 5.00678 0.907528C5.00678 0.989708 5.02297 1.07108 5.05441 1.14701C5.08586 1.22293 5.13196 1.29192 5.19007 1.35003L7.87382 4.03253H0.632568C0.466808 4.03253 0.307837 4.09838 0.190627 4.21559C0.0734165 4.3328 0.00756836 4.49177 0.00756836 4.65753Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>Magnesium</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default index