import { Disclosure, Transition } from '@headlessui/react'

const Accordion = ({ children }) => {
  return (
    <div className="relative space-y-6">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`relative flex w-full items-center justify-between border-b border-dashed border-current pb-3 text-left  lg:hover:text-primary ${
                open ? 'text-primary' : 'text-gray-900'
              }`}
            >
              <span className="block font-lora text-20 font-medium lg:text-30 xxl:text-40">
                {children[0]}
              </span>

              <span className="accordion-arrow">
                <svg
                  className="h-3 w-3 lg:h-4 lg:w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.61665 4.07539C1.49535 4.12572 1.38516 4.19945 1.29236 4.29236L7.29192 11.707L7.64544 11.3544L7.29236 11.7075L7.29213 11.7072C7.38498 11.8003 7.49525 11.8741 7.61665 11.9244C7.73814 11.9749 7.86838 12.0008 7.99992 12.0008C8.13145 12.0008 8.26169 11.9749 8.38318 11.9244C8.50467 11.874 8.61502 11.8002 8.70792 11.707L14.7075 5.70747C14.8004 5.61455 14.8741 5.50425 14.9244 5.38284C14.9747 5.26144 15.0005 5.13132 15.0005 4.99992C15.0005 4.86851 14.9747 4.7384 14.9244 4.61699C14.8741 4.49559 14.8004 4.38528 14.7075 4.29236C14.6146 4.19945 14.5042 4.12574 14.3828 4.07545C14.2614 4.02517 14.1313 3.99929 13.9999 3.99929C13.8685 3.99929 13.7384 4.02517 13.617 4.07545C13.4956 4.12574 13.3853 4.19945 13.2924 4.29236L13.2923 4.29239L7.99992 9.58575L2.70792 4.29281L2.35392 4.64592L2.7075 4.29239L2.70768 4.29257C2.61484 4.19956 2.50457 4.12576 2.38318 4.07539C2.26169 4.02497 2.13145 3.99902 1.99992 3.99902C1.86838 3.99902 1.73814 4.02497 1.61665 4.07539ZM1.29281 5.70792L1.64592 5.35392L1.29236 5.70747L1.29281 5.70792ZM7.99992 10.2929L8.35344 9.93933H7.64639L7.99992 10.2929Z"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </svg>
              </span>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {children[1]}
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default Accordion

const Title = ({ children }) => {
  return <> {children}</>
}

const Panel = ({ children }) => {
  return (
    <>
      <Disclosure.Panel static>
        <div className="space-y-9 pb-8">{children}</div>
      </Disclosure.Panel>
    </>
  )
}

Accordion.Title = Title
Accordion.Panel = Panel
