const socials = [
  {
    name: 'google',
  },
  {
    name: 'apple',
  },
  {
    name: 'facebook',
  },
]

const SocialAuth = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        {socials.map(({ name }) => (
          <button
            key={name}
            type="button"
            className="grid h-10 w-12 flex-shrink-0 place-content-center rounded-lg p-4 shadow-social-icon transition-transform duration-300 hover:-translate-y-1 lg:h-13 lg:w-16 lg:p-0"
          >
            <img src={`./social-icons/${name}.svg`} alt={name} />
          </button>
        ))}
      </div>

      <div className="relative mt-5 mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-light" />
        </div>
        <div className="relative flex justify-center text-sm uppercase">
          <span className="bg-white px-6 text-sm text-gray-600">Or</span>
        </div>
      </div>
    </>
  )
}

export default SocialAuth
