import Content from './Content'

const LatestScientifSS = () => {
  return (
    <div className="py-12 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-y-4 text-center lg:grid-cols-2 lg:gap-x-12 lg:text-left xl:gap-25">
          <div>
            <div className="relative">
              <span className="-top-10 rounded bg-examine-yellow px-4 py-0.5 font-black leading-6 lg:absolute">
                Examine Plus
              </span>
              <h2 className="mt-2 font-lora text-gray-900">
                Stay up-to-date with the Latest Scientific Study Summaries
              </h2>
            </div>
            <div className="mt-9 grid grid-cols-2 -tracking-2">
              <div>
                <p className="text-xl font-semibold text-gray-900  lg:text-40">200+</p>
                <p className="p-lg text-gray-600">Recent studies</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-900 lg:text-40">25</p>
                <p className="p-lg text-gray-600">Health Categories</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 lg:text-xl">
              Every month, we summarize 200+ recent studies across 25 health categories — so you can
              easily keep up to date on the health topics you care about.
              <br />
              <br />
              For this purpose, we provide you with the study’s key details, such as dosage,
              duration, and the characteristics of the participants. We discuss practical
              implications and major caveats, such as design limitations, flawed conclusions, or
              conflicts of interest.
            </p>
          </div>
        </div>

        {/* Content */}
        <Content />
      </div>
    </div>
  )
}

export default LatestScientifSS
