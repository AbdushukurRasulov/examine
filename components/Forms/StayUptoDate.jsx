const StayUptoDate = ({ classes }) => {
  return (
    <form className={classes}>
      <label className="block text-xl font-bold text-gray-100">Stay up to date</label>
      <div className="relative mt-6 h-10 overflow-hidden rounded bg-white/20">
        <input
          type="text"
          className="h-full w-full border-none bg-transparent px-3 text-sm placeholder-gray-300"
          placeholder="Your email address"
        />

        <button type="button" className="absolute top-1/2 right-0 -translate-y-1/2 p-4">
          <img src="social-icons/telegram.svg" alt="" />
        </button>
      </div>
    </form>
  )
}

export default StayUptoDate
