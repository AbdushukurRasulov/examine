import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/outline'

const FAQ = () => {
  return (
    <div className="space-y-11">
      <h2 className="text-center font-lora">Let's answer some of your questions.</h2>
      <div className="space-y-6 divide-y divide-gray-300 border-b border-gray-300 ">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

const Item = () => (
  <div className="pt-8 first:pt-0 last:pb-6">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between pr-12">
            <span className={`${open && 'text-primary'} text-2xl font-semibold`}>
              What are the Benefits of Ashwagandha?
            </span>

            <span className="grid h-6 w-6 shrink-0 place-content-center rounded-full border-2 border-primary">
              {open ? (
                <MinusIcon className="h-3.5 w-3.5 stroke-[3px] text-primary" />
              ) : (
                <PlusIcon className="h-3.5 w-3.5 stroke-[3px] text-primary" />
              )}
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
            <Disclosure.Panel static>
              <div className="pt-6 pr-16">
                <p className="text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quis laboriosam
                  nisi, nobis doloremque assumenda aperiam quasi excepturi quaerat a quam eius ipsum
                  quo labore, perspiciatis, corrupti mollitia exercitationem enim.
                </p>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  </div>
)

export default FAQ
