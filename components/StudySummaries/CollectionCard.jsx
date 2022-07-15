import { Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import {
  LinkIcon,
  PlusIcon,
  MailIcon,
  ShareIcon,
  MinusIcon,
} from "@heroicons/react/outline";

function CollectionCard({ title, date, categories, text, content, expend }) {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            {/* Accordion Content */}
            <div className="relative py-2.5">
              <Disclosure.Button className="group flex items-start gap-6 text-left">
                <span className="cursor-pointer font-medium text-examine-purple-500 md:text-lg lg:text-gray-900 lg:group-hover:text-primary lg:group-hover:underline xl:text-xl">
                  {title}
                </span>
                <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary text-primary transition-colors duration-200 lg:group-hover:bg-primary lg:group-hover:text-white xl:h-6 xl:w-6 xl:border-2">
                  {open ? (
                    <MinusIcon className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
                  ) : (
                    <PlusIcon className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
                  )}
                </span>
              </Disclosure.Button>

              {/* Saved */}
              <div className="absolute right-0 z-10 flex flex-col items-center gap-5 rounded-md bg-white px-2 py-3 opacity-0 shadow-lg transition-opacity duration-300  lg:group-hover:opacity-100">
                <button type="button">
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    className="transition-all duration-200"
                  >
                    <path
                      d="M12.6539 18.8799L6.92228 13.8799L1.19067 18.8799V2.87988C1.19067 2.34945 1.36321 1.84074 1.67032 1.46567C1.97743 1.0906 2.39396 0.879883 2.82827 0.879883H11.0163C11.4506 0.879883 11.8671 1.0906 12.1742 1.46567C12.4813 1.84074 12.6539 2.34945 12.6539 2.87988V18.8799Z"
                      stroke="#5E3B76"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button type="button" className="cursor-pointer">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
                    <path
                      d="M12.6779 6.15403C12.3425 6.15403 12.0706 6.42425 12.0706 6.75764V9.48938C12.0706 10.3268 11.385 11.0083 10.5426 11.0083H3.30015C2.4577 11.0083 1.77232 10.3268 1.77232 9.48938V3.60579C1.77232 2.76838 2.4577 2.0871 3.30015 2.0871H7.1329C7.4683 2.0871 7.74014 1.81689 7.74014 1.48349C7.74014 1.1501 7.4683 0.879883 7.1329 0.879883H3.29995C1.7879 0.879883 0.557617 2.1028 0.557617 3.60579V9.48959C0.557617 10.9928 1.7879 12.2157 3.29995 12.2157H10.5424C12.0546 12.2157 13.2849 10.9928 13.2849 9.48959V6.75764C13.2851 6.42445 13.0133 6.15403 12.6779 6.15403Z"
                      fill="black"
                    />
                    <path
                      d="M13.2853 1.4678C13.2844 1.43863 13.2814 1.40965 13.2763 1.38048C13.2268 1.09698 12.9656 0.883706 12.6786 0.879883H9.90652C9.57112 0.879883 9.29928 1.1501 9.29928 1.48349C9.29928 1.81689 9.57112 2.0871 9.90652 2.0871H11.1208L6.72272 6.10373C6.47578 6.32928 6.45958 6.71117 6.68649 6.95643C6.80612 7.08601 6.96967 7.1516 7.13383 7.1516C7.28058 7.1516 7.42774 7.09889 7.54433 6.99245L12.0722 2.85771V4.13153C12.0722 4.46493 12.344 4.73515 12.6794 4.73515C13.0148 4.73515 13.2867 4.46493 13.2867 4.13153V1.48349C13.2867 1.47806 13.2853 1.47323 13.2853 1.4678Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>

              <div className="max-w-4xl">
                {/* Accordion Panel */}
                <div className="mb-1 flex items-center justify-between py-2.5 ">
                  <div className="items-center gap-3 text-sm md:flex xl:text-base">
                    <span className="text-gray-600">{date}</span>
                    <span className="hidden text-gray-600 md:block">/</span>
                    <p className="mt-1 flex items-center gap-1 font-medium text-examine-green-600 md:mt-0">
                      {categories.map((category, index) => (
                        <Fragment key={index}>
                          <a href="#">{category}</a>
                          <span className="last:hidden">•</span>
                        </Fragment>
                      ))}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 lg:hidden">
                    <button type="button">
                      <svg
                        viewBox="0 0 14 20"
                        fill="none"
                        className="h-4 w-4 transition-all duration-200"
                      >
                        <path
                          d="M12.6539 18.8799L6.92228 13.8799L1.19067 18.8799V2.87988C1.19067 2.34945 1.36321 1.84074 1.67032 1.46567C1.97743 1.0906 2.39396 0.879883 2.82827 0.879883H11.0163C11.4506 0.879883 11.8671 1.0906 12.1742 1.46567C12.4813 1.84074 12.6539 2.34945 12.6539 2.87988V18.8799Z"
                          stroke="#5E3B76"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <button type="button" className="cursor-pointer">
                      <svg className="h-4 w-4" viewBox="0 0 14 13" fill="none">
                        <path
                          d="M12.6779 6.15403C12.3425 6.15403 12.0706 6.42425 12.0706 6.75764V9.48938C12.0706 10.3268 11.385 11.0083 10.5426 11.0083H3.30015C2.4577 11.0083 1.77232 10.3268 1.77232 9.48938V3.60579C1.77232 2.76838 2.4577 2.0871 3.30015 2.0871H7.1329C7.4683 2.0871 7.74014 1.81689 7.74014 1.48349C7.74014 1.1501 7.4683 0.879883 7.1329 0.879883H3.29995C1.7879 0.879883 0.557617 2.1028 0.557617 3.60579V9.48959C0.557617 10.9928 1.7879 12.2157 3.29995 12.2157H10.5424C12.0546 12.2157 13.2849 10.9928 13.2849 9.48959V6.75764C13.2851 6.42445 13.0133 6.15403 12.6779 6.15403Z"
                          fill="black"
                        />
                        <path
                          d="M13.2853 1.4678C13.2844 1.43863 13.2814 1.40965 13.2763 1.38048C13.2268 1.09698 12.9656 0.883706 12.6786 0.879883H9.90652C9.57112 0.879883 9.29928 1.1501 9.29928 1.48349C9.29928 1.81689 9.57112 2.0871 9.90652 2.0871H11.1208L6.72272 6.10373C6.47578 6.32928 6.45958 6.71117 6.68649 6.95643C6.80612 7.08601 6.96967 7.1516 7.13383 7.1516C7.28058 7.1516 7.42774 7.09889 7.54433 6.99245L12.0722 2.85771V4.13153C12.0722 4.46493 12.344 4.73515 12.6794 4.73515C13.0148 4.73515 13.2867 4.46493 13.2867 4.13153V1.48349C13.2867 1.47806 13.2853 1.47323 13.2853 1.4678Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {!open && !expend && (
                  <p className="-tracking-2 text-gray-700 xl:text-xl xl:leading-9">
                    {text}
                  </p>
                )}

                <Transition
                  show={open || expend}
                  as={Fragment}
                  enter="transition duration-300 ease-out"
                  enterFrom="h-0 opacity-0"
                  enterTo="h-auto opacity-100"
                  leave="transition duration-300 ease-out"
                  leaveFrom="opacity-100"
                  leaveTo="h-0 opacity-0"
                >
                  <Disclosure.Panel static>
                    <div className="space-y-7 bg-white lg:pt-7 xl:pb-24">
                      {/* Quotation block */}
                      <div className="border-l-4 border-info py-2 pl-4 xl:pl-6">
                        <p className="text-primary xl:text-xl">
                          {content?.quotation}
                        </p>
                      </div>

                      {/* Background */}
                      <div className="-tracking-2 xl:text-xl xl:leading-9">
                        <p className="mb-4 text-lg font-bold -tracking-2 xl:text-xl xl:leading-9">
                          Background
                        </p>
                        <p>{content?.background[0].p}</p>
                        <div className="my-6">
                          <img src="images/background.png" alt="" />
                        </div>
                        <p>{content?.background[1].p}</p>
                      </div>

                      {/* The study */}
                      <div className="space-y-4 -tracking-2 lg:space-y-6 xl:text-xl xl:leading-9">
                        <p className="!mb-4 text-lg font-bold -tracking-2 xl:text-xl xl:leading-9">
                          The study
                        </p>
                        {content?.study.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </div>

                      {/* The results */}
                      <div className="space-y-4 -tracking-2 lg:space-y-6 xl:text-xl xl:leading-9">
                        <p className="!mb-4 text-lg font-bold -tracking-2 xl:text-xl xl:leading-9">
                          The results
                        </p>
                        {content?.result.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                        <div className="my-6">
                          <img src="images/result.png" alt="" />
                        </div>
                      </div>

                      {/* The big picture */}
                      <div className="-tracking-2 xl:text-xl xl:leading-9">
                        <p className="mb-4 text-lg font-bold -tracking-2 xl:text-xl xl:leading-9">
                          The big picture
                        </p>
                        <p>
                          Due to the observational nature of the research, these
                          results can’t be used to claim that specific
                          flavonoids actually reduce the risk of coronary heart
                          disease. This kind of claim requires randomized
                          controlled trials, and there are no trials that test
                          the isolated effect of these flavonoids on the risk of
                          CHD. However, several meta-analyses of clinical trials
                          have demonstrated that most of these flavonoids can
                          improve intermediate risk factors for CHD:
                        </p>
                        <ul className="my-4 space-y-4 text-primary">
                          {content?.lists.map((item, index) => (
                            <li
                              className="flex items-start gap-2.5"
                              key={index}
                            >
                              <span className="mt-1 lg:mt-1.5">
                                <svg
                                  className="h-4 w-4 md:h-5 md:w-5"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.3242 19.6819C12.6449 19.6819 14.8705 18.76 16.5114 17.1191C18.1523 15.4781 19.0742 13.2525 19.0742 10.9319C19.0742 8.61124 18.1523 6.38564 16.5114 4.7447C14.8705 3.10376 12.6449 2.18188 10.3242 2.18188C8.00357 2.18188 5.77798 3.10376 4.13703 4.7447C2.49609 6.38564 1.57422 8.61124 1.57422 10.9319C1.57422 13.2525 2.49609 15.4781 4.13703 17.1191C5.77798 18.76 8.00357 19.6819 10.3242 19.6819ZM10.3242 20.9319C12.9764 20.9319 15.5199 19.8783 17.3953 18.003C19.2707 16.1276 20.3242 13.5841 20.3242 10.9319C20.3242 8.27972 19.2707 5.73618 17.3953 3.86082C15.5199 1.98545 12.9764 0.931885 10.3242 0.931885C7.67205 0.931885 5.12851 1.98545 3.25315 3.86082C1.37779 5.73618 0.324219 8.27972 0.324219 10.9319C0.324219 13.5841 1.37779 16.1276 3.25315 18.003C5.12851 19.8783 7.67205 20.9319 10.3242 20.9319Z"
                                    fill="#5E3B76"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.32422 10.9321C5.32422 11.0978 5.39007 11.2568 5.50728 11.374C5.62449 11.4912 5.78346 11.5571 5.94922 11.5571H13.1905L10.5067 14.2396C10.4486 14.2977 10.4025 14.3667 10.3711 14.4426C10.3396 14.5185 10.3234 14.5999 10.3234 14.6821C10.3234 14.7642 10.3396 14.8456 10.3711 14.9215C10.4025 14.9975 10.4486 15.0665 10.5067 15.1246C10.5648 15.1827 10.6338 15.2288 10.7097 15.2602C10.7857 15.2917 10.867 15.3079 10.9492 15.3079C11.0314 15.3079 11.1128 15.2917 11.1887 15.2602C11.2646 15.2288 11.3336 15.1827 11.3917 15.1246L15.1417 11.3746C15.1999 11.3165 15.2461 11.2475 15.2776 11.1716C15.3091 11.0957 15.3253 11.0143 15.3253 10.9321C15.3253 10.8499 15.3091 10.7685 15.2776 10.6925C15.2461 10.6166 15.1999 10.5476 15.1417 10.4896L11.3917 6.73956C11.3336 6.68145 11.2646 6.63536 11.1887 6.60391C11.1128 6.57246 11.0314 6.55627 10.9492 6.55627C10.867 6.55627 10.7857 6.57246 10.7097 6.60391C10.6338 6.63536 10.5648 6.68145 10.5067 6.73956C10.4486 6.79767 10.4025 6.86666 10.3711 6.94258C10.3396 7.01851 10.3234 7.09988 10.3234 7.18206C10.3234 7.26424 10.3396 7.34562 10.3711 7.42154C10.4025 7.49747 10.4486 7.56645 10.5067 7.62456L13.1905 10.3071H5.94922C5.78346 10.3071 5.62449 10.3729 5.50728 10.4901C5.39007 10.6073 5.32422 10.7663 5.32422 10.9321Z"
                                    fill="#5E3B76"
                                  />
                                </svg>
                              </span>
                              <span className="text-sm md:text-base xl:text-xl">
                                {item.title}
                                <sup className="text-xs">
                                  <a href="" className="font-bold">
                                    [{item.reference}]
                                  </a>
                                </sup>
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p>
                          While the present study is observational and caution
                          is warranted when interpreting these results, the fact
                          that previous RCTs show positive changes to risk
                          factors following supplementation with
                          proanthocyanidins, flavonols, anthocyanins, and
                          isoflavones does lend some credence to the possibility
                          that there may be some casual relationship between
                          these flavonoids (flavones excluded) and a reduced
                          risk of CHD.
                        </p>
                      </div>

                      {/* share bar */}
                      <div className="flex items-center justify-between rounded-md bg-examine-purple-500 py-2.5 text-white xxl:px-24">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
                        >
                          <ShareIcon className="h-4 w-4" />
                          <span className="text-sm lg:text-menu">Share</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
                        >
                          <LinkIcon className="h-4 w-4" />
                          <span className="text-sm lg:text-menu">Link</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
                        >
                          <PlusIcon className="h-4 w-4" />
                          <span className="text-sm lg:text-menu">
                            <span className="hidden">Add to</span> Favorites
                          </span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded px-3 py-1 -tracking-2 transition-colors duration-200 hover:bg-white/10 md:gap-2"
                        >
                          <MailIcon className="h-4 w-4" />
                          <span className="text-sm lg:text-menu">Email</span>
                        </button>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default CollectionCard;
