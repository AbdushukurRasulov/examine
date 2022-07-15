import React from 'react'

const filters = [
  {
    tag: 'Intervention',
  },
  {
    tag: 'ConflictOfInterest',
  },
  {
    tag: 'Dietitians',
  },
  {
    tag: 'FlawedStudy',
  },
]

const FilterBy = () => {
  return (
    <div>
      <label className="font-lora text-lg font-medium">Filter by</label>

      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        {filters.map(({ tag }, index) => (
          <button
            key={index}
            type="button"
            className="rounded-full border border-gray-400 px-4 py-2 text-sm text-gray-900 transition duration-200 hover:border-primary hover:bg-primary hover:text-white"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBy
