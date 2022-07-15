import { Transition } from "@headlessui/react";

export default function ResearchersInfo({ open, setOpen }) {
  return (
    <Transition show={open}>
      <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
      <Transition.Child
        as="div"
        enter="transform transition ease-in-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="absolute right-0 top-1/2 w-full -translate-y-1/2 pl-5 shadow-2xl"
      >
        <>
          <button
            type="button"
            className="absolute top-4 right-4"
            onClick={() => setOpen(!open)}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7842 22.5C18.307 22.5 22.7842 18.0228 22.7842 12.5C22.7842 6.97715 18.307 2.5 12.7842 2.5C7.26133 2.5 2.78418 6.97715 2.78418 12.5C2.78418 18.0228 7.26133 22.5 12.7842 22.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.7842 9.5L9.78418 15.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.78418 9.5L15.7842 15.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="space-y-8 rounded-l-lg bg-examine-purple-500 py-14 text-white xxl:px-12">
            <div className="flex items-center gap-6">
              <div className="h-15 w-15 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
                <img
                  className="h-full w-full object-cover"
                  src="/images/author-1.png"
                  alt=""
                />
              </div>
              <div>
                <p className="inline-block border-b-2 border-white text-menu font-semibold">
                  <span>Kamal Patel, Michael Hull</span>
                </p>
                <p className="mt-2 !text-xs">MBA, MPH, PhD(c) nutrition</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="h-15 w-15 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
                <img
                  className="h-full w-full object-cover"
                  src="/images/author-1.png"
                  alt=""
                />
              </div>
              <div>
                <p className="inline-block border-b-2 border-white text-menu font-semibold">
                  <span>Kamal Patel, Michael Hull</span>
                </p>
                <p className="mt-2 !text-xs">MBA, MPH, PhD(c) nutrition</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="h-15 w-15 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
                <img
                  className="h-full w-full object-cover"
                  src="/images/author-1.png"
                  alt=""
                />
              </div>
              <div>
                <p className="inline-block border-b-2 border-white text-menu font-semibold">
                  <span>Kamal Patel, Michael Hull</span>
                </p>
                <p className="mt-2 !text-xs">MBA, MPH, PhD(c) nutrition</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="h-15 w-15 shrink-0 overflow-hidden rounded-xl drop-shadow-avatar">
                <img
                  className="h-full w-full object-cover"
                  src="/images/author-1.png"
                  alt=""
                />
              </div>
              <div>
                <p className="inline-block border-b-2 border-white text-menu font-semibold">
                  <span>Kamal Patel, Michael Hull</span>
                </p>
                <p className="mt-2 !text-xs">MBA, MPH, PhD(c) nutrition</p>
              </div>
            </div>
          </div>
        </>
      </Transition.Child>
    </Transition>
  );
}
