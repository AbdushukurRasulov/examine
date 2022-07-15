/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ExaminePlus from '@/components/Blockquotes/ExaminePlus'

export default function LatestScientificModal({ modalActive, setModalActive }) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={modalActive} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setModalActive}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative max-w-3xl  transform overflow-hidden rounded-md bg-white px-5 py-8 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-14 xl:max-w-4xl">
                <div className="relative mb-12 space-y-6 before:absolute before:bottom-0 before:h-1/3 before:w-full before:bg-gradient-to-t before:from-white">
                  <div>
                    <h4 className="cursor-pointer font-medium text-primary">
                      The acute effects of Lavender oil in hyper-suspension, and it’s anxiolotic
                      effect
                    </h4>
                    <div className="mb-1 hidden items-center gap-3 py-2.5 text-sm md:flex lg:text-base xl:text-base">
                      <span className="text-gray-600">January 3 2022</span>
                      <span className="ext-gray-600 hidden md:block">/</span>
                      <p className="mt-1 flex items-center gap-1 font-medium text-examine-green-600 md:mt-0">
                        <a href="#">Men’s Health</a>
                        <span className="last:hidden">•</span>
                        <a href="#">Men’s Health</a>
                      </p>
                    </div>
                  </div>
                  <div className="border-l-4 border-info py-2 pl-4 text-primary xl:pl-6 xl:text-xl">
                    In this meta-analysis of prospective cohort studies, higher intakes of several
                    flavonoid subclasses (anthocyanins, proanthocyanidins, flavonols, flavones, and
                    isoflavones) were associated with a lower risk of coronary heart disease.
                  </div>
                  <div className="space-y-4 -tracking-2 xl:text-xl xl:leading-9">
                    <p className="mb-4 text-lg font-bold">Background</p>
                    <p>
                      Flavonoids are a class of polyphenolic compounds found in a large number of
                      plants, many of which are regularly consumed by humans. Flavonoids can be
                      categorized into various subclasses, which include flavonols, flavones,
                      flavan-3-ols, anthocyanins, flavanones, and isoflavones.
                    </p>
                  </div>
                  {[...Array(2).keys()].map((item) => (
                    <div key={item} className="space-y-4 -tracking-2 xl:text-xl xl:leading-9">
                      <p className="mb-4 text-lg font-bold">The study</p>
                      <p>
                        Flavonoids are a class of polyphenolic compounds found in a large number of
                        plants, many of which are regularly consumed by humans. Flavonoids can be
                        categorized into various subclasses, which include flavonols, flavones,
                        flavan-3-ols, anthocyanins, flavanones, and isoflavones.
                      </p>
                    </div>
                  ))}
                </div>
                <ExaminePlus />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
