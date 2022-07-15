import { PlusSmIcon } from "@heroicons/react/solid";

const TwoResearchers = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col">
        <span className="h-13 w-13 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
          <img
            className="h-full w-full object-cover"
            src="/images/author-1.png"
            alt=""
          />
        </span>
        <span className="-mt-5 ml-8 h-13 w-13 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
          <img
            className="h-full w-full object-cover"
            src="/images/author-2.png"
            alt=""
          />
        </span>
      </div>
      <div className="text-sm text-white md:pt-8">
        <p>Contributing researchers: </p>
        <p className="mt-1 border-b border-white font-semibold leading-5">
          <span>Kamal Patel, Michael Hull</span>
        </p>

        <div className="mt-3.5">
          <button
            type="button"
            className="flex items-center rounded border border-info py-1 pr-2.5 pl-1 text-info transition-colors duration-200 hover:bg-white hover:text-primary hover:shadow-lg"
          >
            <PlusSmIcon className="mr-1 h-4 w-4" />
            <span className="text-sm tracking-wide">2 others</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoResearchers;
