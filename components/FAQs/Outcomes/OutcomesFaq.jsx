import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import React, { Fragment } from 'react'
import SubFAQ from './SubFAQ'

const OutcomesFaq = () => {
  return (
    <div className="space-y-5 py-7">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="group flex w-full cursor-pointer items-start justify-between gap-6 text-left">
              <span
                className={`font-lora font-semibold md:text-lg lg:group-hover:text-examine-purple-600 lg:group-hover:underline xl:text-2xl xl:leading-7 ${
                  open ? 'text-primary' : 'text-gray-900'
                }`}
              >
                What are the Benefits of Ashwagandha?
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
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel static className="pb-10">
                <p className="text-xl leading-9 -tracking-2">
                  Ashwagandha is a traditional Indian medicine (Ayurveda) that is known to be
                  associated with male virility and vitality; a common supplement to recommend to
                  men that are feeling past their prime and a traditional medicine with a
                  surprisingly large amount of evidence overall. It does seem to have some
                  anti-stress effects due to the having the properties of an adaptogen.
                  <br />
                  <br />
                  Among the adaptogens and traditional medicine, however, ashwagandha is one of the
                  few associated with masculinity. Since anything that can be named a Testosterone
                  Booster gets praise faster than it gets research, many people are wondering
                  whether ashwagandha can increase testosterone or whether it is overhyped.
                </p>
                <div className="ml-6 mt-6 space-y-11 border-l border-dashed border-gray-400">
                  {/* Sources and Composition of Ashwagandha */}
                  <SubFAQ title="Sources and Composition of Ashwagandha" />
                  {/* Are there Amino Acids in Ashwagandha? */}
                  <SubFAQ title="Are there Amino Acids in Ashwagandha?" />
                  {/* Physicochemical Properties */}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default OutcomesFaq
