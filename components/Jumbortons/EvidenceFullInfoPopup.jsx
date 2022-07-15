import { Transition } from '@headlessui/react'
import { Doc, Grid, User } from '../IconsSvg'

const EvidenceFullInfoPopup = ({ open, setOpen }) => {
  return (
    <Transition show={open}>
      <div className="fixed inset-0" onClick={() => setOpen(false)}></div>
      <Transition.Child
        as="div"
        enter="transition-opacity ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-500"
        leav
        eFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute top-0 left-1/2 flex h-full w-80 -translate-x-1/2 items-center md:-left-8 md:transform-none xxl:left-9"
      >
        <div className="space-y-8 divide-y divide-[#656565] rounded-lg bg-examine-purple-700 py-8 px-3 shadow-2xl md:pr-5 md:pl-6">
          <div className="flex items-start gap-4">
            <Doc className="mt-1.5 h-6 w-5 shrink-0" />
            <div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-400">Total Studies</p>
                <p className="p-lg text-gray-100">328</p>
              </div>
              <p className="p-sm mt-1 w-40 text-gray-500">
                The number studies our researchers analyzed for this intervention
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-6">
            <User className="mt-1.5 h-6 w-5 shrink-0" />
            <div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-400">Total Participants</p>
                <p className="p-lg text-gray-100">328</p>
              </div>
              <p className="p-sm mt-1 w-40 text-gray-500">Across all the studies we analyzed</p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-6">
            <Grid className="mt-1.5 h-6 w-5 shrink-0" />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="font-bold text-gray-400">Parameters</p>
                <p className="p-sm mt-1  text-gray-500">
                  We extracted from the studies and the quality of that data
                </p>
              </div>
              <div className="space-y-1.5 text-gray-900">
                <p className="bg-grade-a-bottom flex items-center overflow-hidden rounded">
                  <strong className="bg-grade-a-top w-6 shrink-0 text-center">A</strong>
                  <span className="p-sm  px-2">21 Studies</span>
                </p>
                <p className="bg-grade-b-bottom flex items-center overflow-hidden rounded">
                  <strong className="bg-grade-b-top w-6 shrink-0 text-center">B</strong>
                  <span className="p-sm px-2">21 Studies</span>
                </p>
                <p className="bg-grade-c-bottom flex items-center overflow-hidden rounded">
                  <strong className="bg-grade-c-top w-6 shrink-0 text-center">C</strong>
                  <span className="p-sm px-2">21 Studies</span>
                </p>
                <p className="bg-grade-d-bottom flex items-center overflow-hidden rounded">
                  <strong className="bg-grade-d-top w-6 shrink-0 text-center">D</strong>
                  <span className="p-sm px-2">21 Studies</span>
                </p>
                <p className="bg-grade-f-bottom flex items-center overflow-hidden rounded">
                  <strong className="bg-grade-f-top w-6 shrink-0 text-center">F</strong>
                  <span className="p-sm px-2">21 Studies</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-20  -right-14 flex gap-8 bg-examine-purple-800 p-2 md:flex-col md:rounded-r-lg md:pt-5 md:pb-6">
              <button type="button" className="text-examine-purple-300 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M11.7169 14.5039L17.1414 10.6077C17.2691 10.5322 17.375 10.4247 17.4486 10.2958C17.5221 10.1669 17.5608 10.0211 17.5608 9.87265C17.5608 9.72424 17.5221 9.57839 17.4486 9.44949C17.375 9.32059 17.2691 9.21309 17.1414 9.13758L11.7169 5.2414C11.5876 5.16534 11.4404 5.12485 11.2904 5.12404C11.1404 5.12322 10.9928 5.16211 10.8627 5.23677C10.7326 5.31142 10.6245 5.41917 10.5495 5.54908C10.4745 5.67899 10.4352 5.82644 10.4355 5.97646V7.49765C8.6543 7.49765 3.31055 7.49765 2.12305 16.9976C5.0918 11.6539 10.4355 12.2476 10.4355 12.2476V13.7688C10.4355 14.4338 11.1552 14.8352 11.7169 14.5051V14.5039Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="grid h-5 w-5 place-content-center text-examine-purple-300 hover:text-white"
              >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.43555 0.015625C1.90511 0.015625 1.39641 0.226339 1.02133 0.601411C0.646261 0.976484 0.435547 1.48519 0.435547 2.01562L0.435547 14.0156C0.435547 14.5461 0.646261 15.0548 1.02133 15.4298C1.39641 15.8049 1.90511 16.0156 2.43555 16.0156L14.4355 16.0156C14.966 16.0156 15.4747 15.8049 15.8498 15.4298C16.2248 15.0548 16.4355 14.5461 16.4355 14.0156V2.01563C16.4355 1.48519 16.2248 0.976484 15.8498 0.601411C15.4747 0.226339 14.966 0.015625 14.4355 0.015625L2.43555 0.015625ZM8.93555 4.51563C8.93555 4.38302 8.88287 4.25584 8.7891 4.16207C8.69533 4.0683 8.56816 4.01563 8.43555 4.01563C8.30294 4.01563 8.17576 4.0683 8.08199 4.16207C7.98823 4.25584 7.93555 4.38302 7.93555 4.51563L7.93555 10.3086L5.78955 8.16162C5.69566 8.06774 5.56832 8.01499 5.43555 8.01499C5.30277 8.01499 5.17543 8.06774 5.08155 8.16162C4.98766 8.25551 4.93492 8.38285 4.93492 8.51562C4.93492 8.6484 4.98766 8.77574 5.08155 8.86963L8.08155 11.8696C8.12799 11.9162 8.18317 11.9531 8.24391 11.9783C8.30466 12.0035 8.36978 12.0165 8.43555 12.0165C8.50131 12.0165 8.56643 12.0035 8.62718 11.9783C8.68793 11.9531 8.7431 11.9162 8.78955 11.8696L11.7895 8.86963C11.8834 8.77574 11.9362 8.6484 11.9362 8.51563C11.9362 8.38285 11.8834 8.25551 11.7895 8.16162C11.6957 8.06774 11.5683 8.01499 11.4355 8.01499C11.3028 8.01499 11.1754 8.06774 11.0815 8.16162L8.93555 10.3086L8.93555 4.51563Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  )
}

export default EvidenceFullInfoPopup
