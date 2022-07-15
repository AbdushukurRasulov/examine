import data from '../../data/home.json'

const ResearchBackedNutrition = () => {
  const { research } = data
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-11 lg:px-10 xl:py-32">
        <div className="grid items-center lg:grid-cols-2 xl:gap-16">
          <div>
            <h2 className="mx-auto max-w-md text-center font-lora text-gray-900 lg:max-w-full lg:text-left">
              Research-Backed Nutrition Information to Improve Your Health
            </h2>

            <div className="relative mx-auto max-w-lg lg:hidden">
              <img src="home/cards.png" alt="" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:py-13 xl:gap-12">
              {research.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <span className="grid h-9 w-9 shrink-0 place-content-center rounded-full bg-primary text-xl font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="p-lg font-bold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative hidden lg:block">
              <img src="home/cards.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchBackedNutrition
