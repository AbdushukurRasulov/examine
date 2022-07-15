import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'

const SubFAQ = ({ title }) => {
  return (
    <Disclosure as="div" className="pl-6 pt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full cursor-pointer items-start justify-between gap-6 text-left">
            <span className="font-lora font-semibold text-primary md:text-lg  lg:group-hover:text-examine-purple-600 lg:group-hover:underline xl:text-xl">
              {title}
            </span>
            <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary text-primary transition-colors duration-200 lg:group-hover:bg-primary lg:group-hover:text-white">
              {open ? (
                <MinusIcon className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
              ) : (
                <PlusIcon className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
              )}
            </span>
          </Disclosure.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="h-0 opacity-0"
            enterTo="h-auto opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="opacity-100"
            leaveTo="h-0 opacity-0"
          >
            <Disclosure.Panel static>
              <div className="space-y-6 pt-5 text-xl leading-9 -tracking-2">
                <p>
                  Withania somnifera (of the family solanaceae) is a highly esteemed medicinal herb
                  in Ayurveda and most popularized as Ashwagandha although other common names
                  include the King of Ayurveda,[24][25] Indian Ginseng (not at all related to panax
                  ginseng), and Wintercherry.[26] The herb is classified as rasayana in ayurvedic
                  medicine due to being a general tonic and in modern terms it is called an
                  adaptogen for similar reasons,[27] and is also classified as bhalya (Increases
                  strength) and vajikara (aphrodisiac).[28]
                </p>
                <p>
                  The name Ashwagandha comes from the translation 'Smell of Horse', which is thought
                  to be due to two main reasons; the root itself smells like a horse, and the root
                  is supposed to imbibe you with the strength and virility of a horse.[8]
                </p>

                {/* Blockquote */}
                <div className="relative space-y-5 overflow-hidden rounded-xl bg-examine-purple-100 py-10 px-12 before:absolute before:left-0 before:top-0 before:h-full before:w-3 before:bg-examine-purple-500">
                  <div className="flex items-center gap-4">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.1488 2.1543H20.3988C20.7801 2.1543 21.1457 2.30575 21.4153 2.57533C21.6849 2.84491 21.8363 3.21055 21.8363 3.5918V20.8418C21.8363 21.223 21.6849 21.5887 21.4153 21.8583C21.1457 22.1278 20.7801 22.2793 20.3988 22.2793H3.1488C2.76755 22.2793 2.40192 22.1278 2.13234 21.8583C1.86275 21.5887 1.7113 21.223 1.7113 20.8418V3.5918C1.7113 3.21055 1.86275 2.84491 2.13234 2.57533C2.40192 2.30575 2.76755 2.1543 3.1488 2.1543ZM20.3988 0.716797C21.1613 0.716797 21.8926 1.0197 22.4317 1.55886C22.9709 2.09803 23.2738 2.8293 23.2738 3.5918V20.8418C23.2738 21.6043 22.9709 22.3356 22.4317 22.8747C21.8926 23.4139 21.1613 23.7168 20.3988 23.7168H3.1488C2.38631 23.7168 1.65504 23.4139 1.11587 22.8747C0.576705 22.3356 0.273804 21.6043 0.273804 20.8418V3.5918C0.273804 2.8293 0.576705 2.09803 1.11587 1.55886C1.65504 1.0197 2.38631 0.716797 3.1488 0.716797L20.3988 0.716797Z"
                          fill="#2F1E4E"
                          stroke="#2F1E4E"
                          strokeWidth="0.5"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.4613 22.2793V2.1543H6.0238V22.2793H7.4613ZM18.9613 5.74805C18.9613 5.55742 18.8856 5.37461 18.7508 5.23981C18.616 5.10502 18.4332 5.0293 18.2426 5.0293H11.0551C10.8644 5.0293 10.6816 5.10502 10.5468 5.23981C10.412 5.37461 10.3363 5.55742 10.3363 5.74805C10.3363 5.93867 10.412 6.12149 10.5468 6.25628C10.6816 6.39107 10.8644 6.4668 11.0551 6.4668H18.2426C18.4332 6.4668 18.616 6.39107 18.7508 6.25628C18.8856 6.12149 18.9613 5.93867 18.9613 5.74805ZM18.9613 10.0605C18.9613 9.86992 18.8856 9.68711 18.7508 9.55231C18.616 9.41752 18.4332 9.3418 18.2426 9.3418H11.0551C10.8644 9.3418 10.6816 9.41752 10.5468 9.55231C10.412 9.68711 10.3363 9.86992 10.3363 10.0605C10.3363 10.2512 10.412 10.434 10.5468 10.5688C10.6816 10.7036 10.8644 10.7793 11.0551 10.7793H18.2426C18.4332 10.7793 18.616 10.7036 18.7508 10.5688C18.8856 10.434 18.9613 10.2512 18.9613 10.0605ZM18.9613 14.373C18.9613 14.1824 18.8856 13.9996 18.7508 13.8648C18.616 13.73 18.4332 13.6543 18.2426 13.6543H11.0551C10.8644 13.6543 10.6816 13.73 10.5468 13.8648C10.412 13.9996 10.3363 14.1824 10.3363 14.373C10.3363 14.5637 10.412 14.7465 10.5468 14.8813C10.6816 15.0161 10.8644 15.0918 11.0551 15.0918H18.2426C18.4332 15.0918 18.616 15.0161 18.7508 14.8813C18.8856 14.7465 18.9613 14.5637 18.9613 14.373ZM18.9613 18.6855C18.9613 18.4949 18.8856 18.3121 18.7508 18.1773C18.616 18.0425 18.4332 17.9668 18.2426 17.9668H11.0551C10.8644 17.9668 10.6816 18.0425 10.5468 18.1773C10.412 18.3121 10.3363 18.4949 10.3363 18.6855C10.3363 18.8762 10.412 19.059 10.5468 19.1938C10.6816 19.3286 10.8644 19.4043 11.0551 19.4043H18.2426C18.4332 19.4043 18.616 19.3286 18.7508 19.1938C18.8856 19.059 18.9613 18.8762 18.9613 18.6855Z"
                          fill="#2F1E4E"
                          stroke="#2F1E4E"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </span>
                    <span className="font-lora text-3xl font-medium">Does it work?</span>
                  </div>
                  <p>
                    While it is more likely a profertility agent, we cannot deny a possibility that
                    ashwagandha could increase testosterone. However, evidence at this time is quite
                    limited
                  </p>
                </div>
                <p>
                  Beyond those uses, it has been traditional used as an analgesic, astringent,
                  antispasmodic, and immunostimulant while being used to treat inflammation, cancer,
                  stress, fatigue, diabetes, and cardiovascular complications[29][30] while its
                  adaptogenic usage is emphazied for persons with stress related insomnia, debility,
                  and nervous exhaustion.[31] Ashwagandha has also been reported to be an
                  immunostimulant compound, with particular emphasis for a stress-related
                  suppression in immunity.[31]
                </p>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default SubFAQ
