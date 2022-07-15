import AppLayout from '@/components/Layouts/AppLayout'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import { ChevronRightIcon } from '@heroicons/react/outline'
import data from '../../data/about.json'
import SidebarRightWrapper from '@/components/Sidebar/SidebarRightWrapper'
import SidebarSearch from '@/components/Forms/SidebarSearch'

const About = () => {
  const { tableOfContent } = data
  return (
    <AppLayout>
      {/* Jumborton */}
      <div className="relative overflow-x-hidden bg-examine-purple-500">
        <div className="mx-auto flex 2xl:justify-end wide:max-w-fixed">
          <div className="hidden w-full max-w-xs"></div>
          <div className="w-full max-w-base px-6 py-10 md:px-12 lg:pb-18 lg:pt-10 xxl:px-19">
            {/* breadcrumbs */}
            <nav className="hidden md:flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-1 leading-10 -tracking-2">
                <li>
                  <a href="#" className="text-examine-purple-200 hover:text-examine-purple-100">
                    Examine
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-examine-purple-200 hover:text-examine-purple-100"
                      aria-current="page"
                    >
                      About us
                    </a>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="space-y-3 text-white lg:mt-5">
              <h1 className="font-lora">About Us</h1>
              <p className="p-xl max-w-3xl -tracking-2">
                We're an independent and unbiased encyclopedia on supplementation and nutrition.
              </p>
            </div>
          </div>
          <div className="hidden w-full max-w-md 2xl:block"></div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-1 wide:max-w-fixed">
        <div className="hidden w-full max-w-xs py-15 px-7 xl:block">
          <div className="sticky top-40">
            <h4 className="font-lora font-medium">Table of Contents</h4>
            <ul className="space-y-6 py-8 text-sm xl:text-menu 2xl:space-y-7 2xl:text-[17px]">
              {tableOfContent.map((title, idx) => {
                let el = title.split(' ').join('-').toLowerCase()

                console.log(el)
                return (
                  <li key={idx}>
                    <LinkScroll
                      to={el}
                      spy={true}
                      offset={-140}
                      smooth={true}
                      duration={500}
                      activeClass="isActive-link"
                      className="group flex cursor-pointer items-center gap-2 text-gray-700 transition-colors duration-200 hover:text-examine-green-500"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-content-center rounded-md border-2 border-examine-green-500 text-sm font-bold leading-4 text-examine-green-500 ">
                        {idx + 1}
                      </span>
                      <span>{title}</span>
                    </LinkScroll>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="flex-1 bg-white px-6 py-10 !pb-96 md:px-12 xxl:p-18">
          <div className="space-y-8 -tracking-2 lg:space-y-14 xl:text-xl xl:leading-9 xxl:space-y-19">
            {/* Mission Statement */}
            <div id="mission-statement">
              <h2 className="border-b border-dashed border-black pb-2 font-lora">
                Mission Statement
              </h2>
              <div className="py-5">
                <p>
                  We are dedicated to empowering you with the best answers to your most pressing
                  questions, from understanding infectious diseases to managing a new diagnosis and
                  everything in between.
                </p>
              </div>
            </div>

            {/* What Is Examine? */}
            <div id="what-is-examine?">
              <h2 className="border-b border-dashed border-black pb-2 font-lora">
                What Is Examine?
              </h2>
              <div className="space-y-7 py-5">
                <p>
                  Examine is the largest database of nutrition and supplement research on the
                  Internet. Founded in early 2011, our mission is to analyze the full body of
                  evidence to help you make healthy choices. As an educational organization, we are
                  not affiliated with any supplement or food company, nor are any members of our
                  research team.
                </p>

                {/* Video */}
                <div className="aspect-video">
                  <img src="/about/video.png" alt="" />
                </div>

                <p>
                  All of our evidence summaries are fully referenced, on topics ranging from popular
                  supplements like fish oil and vitamin D to the more controversial nutrition topics
                  like soy or saturated fat.
                  <br />
                  <br />
                  We also take an evidence-based approach to common questions our readers ask, such
                  as the optimum amount of daily protein, and the evidence (or lack thereof) for
                  common nutrition myths and fads such as detoxes.
                </p>

                <div className="border-l-2 border-info p-5 text-primary md:p-6">
                  <p>
                    At Examine, we’re not here to tell you what to do. Instead, we simply tell you
                    what the evidence says. And in cases where the research is mixed, we make that
                    clear, too.
                  </p>
                </div>
              </div>
            </div>

            {/* How is Examine funded? */}
            <div id="how-is-examine-funded?">
              <h2 className="border-b border-dashed border-black pb-2 font-lora">
                How is Examine funded?
              </h2>
              <div className="space-y-6 py-5">
                <p className="">
                  Examine is an entirely independent organization, and does not accept any money
                  from outside sources.
                  <br />
                  <br />
                  For the vast majority of nutrition websites, revenue is directly proportional to
                  pageviews or products sold—whether they be supplement bottles or diet plans. Thus,
                  rather than an evenhanded and thorough interpretation of the evidence, for many
                  websites, sensationalism sells (read more on sensationalism).
                  <br />
                  <br />
                  Rather, 100% of our revenue is generated from additional research syntheses that
                  we sell to both health professionals and laypeople. All of the information on the
                  website is freely accessible; these additional informational products are meant
                  for those looking for added depth and step-by-step instructions.
                </p>

                <ul className="list-inside list-circle">
                  <li>Examine Membership</li>
                  <li>Supplement Guides</li>
                  <li>Fitness Guide</li>
                  <li>Whey Guide</li>
                  <li>Evidence-based Keto</li>
                </ul>

                <p>We do not allow:</p>
                <ul className="list-inside list-circle">
                  <li>Donors</li>
                  <li>Sponsors</li>
                  <li>Consulting clients</li>
                  <li>Advertisements</li>
                  <li>Affiliations</li>
                </ul>

                <p>
                  We have a very strict no-gift policy for our staff members. Even books that are
                  sent our way are simply deposited into recycling.
                </p>
              </div>
            </div>

            {/*  Praise and Accolades */}
            <div id="praise-and-accolades">
              <h2 className="border-b border-dashed border-black pb-2 font-lora">
                Praise and Accolades
              </h2>
              <div className="space-y-6 py-5">
                <p>Our work has been shared by, quoted in, and used by organizations including:</p>

                <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-between">
                  {[...Array(6).keys()].map((item) => (
                    <img
                      className="opacity-50 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                      src={`home/logos/icon-${item + 1}.png`}
                      key={item}
                    />
                  ))}
                </div>

                <p>
                  FastCompany chose us as one of the most innovative companies in health and
                  fitness, and Men’s Fitness named us a{' '}
                  <Link href="/about-us">
                    <a className="text-primary hover:underline">
                      game-changer in the world of nutrition.
                    </a>
                  </Link>
                  <br />
                  <br />
                  Professionals also turn to us when they need unbiased and trustworthy nutrition
                  info.
                </p>
              </div>
            </div>

            {/* How and why did Examine start? */}
            <div id="how-&-why-did-examine-start?">
              <h2 className="border-b border-dashed border-black pb-2 font-lora">
                How and why did Examine start?
              </h2>
              <div className="space-y-6 py-5">
                <p>
                  Examine is our answer to a fundamental problem: given that nutrition science is
                  incredibly complex and constantly evolving, how can you separate the wheat from
                  the chaff? If a website cites a study, how do you know it’s not cherry-picked or,
                  on the flipside, methodologically flawed?
                </p>

                <p>
                  For more, see
                  <Link href="/about-us">
                    <a className="text-primary hover:underline"> Our Story.</a>
                  </Link>
                </p>

                <p>In other words, who can you trust to be completely objective?</p>

                <p className="font-semibold">
                  In other words, who can you trust to be completely objective?
                </p>

                <p>
                  We decided to address this problem by building a systematic and objective
                  database, free from advertising or industry partnerships. We never start with an
                  objective, like low-carb or high-carb, pro-supplement or anti-supplement. Rather,
                  we simply report on all the evidence that’s been published. We also regularly
                  update a page on our mistakes in order to be as transparent as possible.
                </p>

                <p>
                  For more, see
                  <Link href="/about-us">
                    <a className="text-primary hover:underline"> Our Mistakes.</a>
                  </Link>
                </p>
              </div>
            </div>

            {/* Editors */}
            <div id="our-team">
              <h2 className="border-b border-dashed border-black pb-2 font-lora">Editors</h2>
              <div className="py-5">
                <p>
                  Researchers are tasked with poring over primary research and helping collate it.
                </p>

                <div className="space-y-7 pt-6">
                  {[...Array(2).keys()].map((item) => (
                    <div className="space-y-5" key={item}>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full drop-shadow-avatar xxl:h-24 xxl:w-24">
                          <img
                            className="h-full w-full object-cover"
                            src="/images/author-1.png"
                            alt=""
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="leading-5">
                            <strong className="border-b border-white">Kamal Patel</strong>
                          </p>
                          <p className="text-base font-semibold leading-5 text-primary">Director</p>
                          <p className="text-base font-medium leading-5 text-gray-600">
                            MBA, MPH, PhD(c) in nutrition
                          </p>
                        </div>
                      </div>
                      <p>
                        Kamal is cofounder and director of Examine. He holds two master’s degrees
                        from Johns Hopkins University, in business and in public health, and is on
                        hiatus from a PhD in nutrition for which he investigated links between diet
                        and chronic pain. He’s published peer-reviewed articles on vitamin D and
                        calcium, as well as on a variety of clinical research topics, and was
                        recognized by Men's Health UK in 2020 as one of the most influential men in
                        health and fitness. He’s also been involved in research on fructose and
                        liver health, on nutrition in low-income areas, and on mindfulness
                        meditation.
                      </p>
                      <div className="flex items-center gap-2.5">
                        <Link href="/">
                          <a className="text-gray-600 transition duration-200 hover:-translate-y-1 hover:text-gray-700">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path
                                d="M19.9945 3.56249L15.9998 3.55107C15.999 3.6961 15.9986 3.86989 15.9963 3.98371C16.3357 3.99166 17.2043 4.15138 17.4766 4.86632L13.6502 13.6981C13.4627 13.2598 11.6832 9.30691 11.4801 8.7986L13.3305 4.96015C13.7126 4.37616 14.4432 3.99962 15.1496 3.97229L15.1476 3.57086L11.3044 3.56739C11.2953 3.66917 11.3046 3.88315 11.2906 3.98942C12.3747 4.01879 12.7623 4.26153 12.5024 4.90895C12.0736 5.88315 11.1745 7.72874 10.9987 8.0655C10.4488 6.91609 10.0991 6.03144 9.50046 4.78881C9.24222 4.21298 9.81234 3.98881 10.4153 3.97208V3.568L5.96451 3.55434C5.96777 3.74403 5.96022 3.85031 5.96022 3.98901C6.58052 3.99839 7.38562 4.06469 7.70668 4.60482C8.13238 5.43358 9.55145 8.72394 9.98083 9.60513C9.43315 10.6562 8.1028 13.1423 7.62611 14.0749C6.94319 12.5593 4.41713 6.59115 3.70321 5.05071C3.43723 4.39432 4.46446 4.01512 5.05885 3.98738L5.06272 3.54924L0 3.54883C0.00101989 3.6806 0.00550739 3.89763 0.00591535 3.99493C0.826925 3.98738 2.02692 5.33567 2.36961 6.17402C3.84722 9.60309 5.37195 13.0122 6.84243 16.4441C6.84283 16.45 7.3026 16.4561 7.3077 16.4457C8.26986 14.4767 9.39419 12.4076 10.4094 10.4161L12.9705 16.4488C12.9715 16.4496 13.3952 16.452 13.3974 16.4502C15.0215 12.7386 17.455 7.04317 18.2509 5.24511C18.5748 4.47672 19.1168 4.00819 19.9935 3.98167L20 3.58269L19.9945 3.56249Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="text-gray-600 transition duration-200 hover:-translate-y-1 hover:text-gray-700">
                            <svg
                              width="33"
                              height="33"
                              viewBox="0 0 33 33"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.7667 10.5278C11.7431 9.4596 10.9793 8.646 9.73885 8.646C8.49844 8.646 7.6875 9.4596 7.6875 10.5278C7.6875 11.5739 8.47447 12.4109 9.69179 12.4109H9.71496C10.9793 12.4109 11.7667 11.5739 11.7667 10.5278Z"
                                fill="currentColor"
                              />
                              <path
                                d="M11.5279 13.8979H7.90192V24.7924H11.5279V13.8979Z"
                                fill="currentColor"
                              />
                              <path
                                d="M20.4296 13.6421C22.8156 13.6421 24.6044 15.1995 24.6044 18.5458L24.6043 24.7924H20.9785V18.9638C20.9785 17.4998 20.4538 16.5008 19.1412 16.5008C18.1394 16.5008 17.5428 17.1743 17.2807 17.8248C17.1848 18.0579 17.1613 18.3827 17.1613 18.7083V24.7927H13.5349C13.5349 24.7927 13.5827 14.9205 13.5349 13.8982H17.1613V15.4413C17.6425 14.6995 18.5045 13.6421 20.4296 13.6421Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="text-gray-600 transition duration-200 hover:-translate-y-1 hover:text-gray-700">
                            <svg
                              width="33"
                              height="33"
                              viewBox="0 0 33 33"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.7415 13.651L15.7751 14.2046L15.2155 14.1368C13.1786 13.8769 11.3991 12.9956 9.88826 11.5155L9.14961 10.7811L8.95935 11.3234C8.55645 12.5324 8.81386 13.8092 9.65324 14.6679C10.1009 15.1424 10.0002 15.2102 9.22795 14.9277C8.95935 14.8373 8.72433 14.7695 8.70194 14.8034C8.6236 14.8825 8.8922 15.9107 9.10484 16.3175C9.39583 16.8824 9.98899 17.436 10.6381 17.7637L11.1865 18.0236L10.5374 18.0349C9.91065 18.0349 9.88826 18.0462 9.95541 18.2834C10.1792 19.0179 11.0634 19.7975 12.0483 20.1364L12.7421 20.3737L12.1378 20.7353C11.2425 21.255 10.1904 21.5488 9.13842 21.5714C8.63479 21.5827 8.2207 21.6279 8.2207 21.6617C8.2207 21.7747 9.58609 22.4075 10.3807 22.656C12.7645 23.3904 15.596 23.0741 17.7224 21.8199C19.2333 20.9273 20.7442 19.1534 21.4493 17.436C21.8298 16.5208 22.2103 14.8486 22.2103 14.0464C22.2103 13.5267 22.2439 13.4589 22.8706 12.8375C23.2399 12.4759 23.5869 12.0805 23.654 11.9675C23.7659 11.7528 23.7547 11.7528 23.184 11.9449C22.2327 12.2838 22.0984 12.2386 22.5684 11.7302C22.9154 11.3686 23.3295 10.7133 23.3295 10.5212C23.3295 10.4873 23.1616 10.5438 22.9713 10.6455C22.7699 10.7585 22.3222 10.928 21.9865 11.0297L21.3821 11.2218L20.8337 10.8489C20.5315 10.6455 20.1063 10.4195 19.8824 10.3518C19.3116 10.1936 18.4387 10.2162 17.9239 10.3969C16.5249 10.9054 15.6408 12.216 15.7415 13.651Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Researchers */}
            <div id="why-can-you-trust-examine?">
              <h2 className="border-b border-dashed border-black pb-2 font-lora">Researchers</h2>
              <div className="py-5">
                <p>
                  The editors of Examine perform the primary job of collating scientific research
                  into a cohesive picture.
                </p>

                <div className=" divide-y divide-gray-400">
                  {[...Array(2).keys()].map((item) => (
                    <div className="space-y-5 py-6" key={item}>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full drop-shadow-avatar xxl:h-24 xxl:w-24">
                          <img
                            className="h-full w-full object-cover"
                            src="/images/author-1.png"
                            alt=""
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="leading-5">
                            <strong className="border-b border-white">Kamal Patel</strong>
                          </p>
                          <p className="text-base font-medium leading-5 text-gray-600">
                            MBA, MPH, PhD(c) in nutrition
                          </p>
                        </div>
                      </div>
                      <p>
                        An avid member of the fitness industry for the past score years, Bill is a
                        postdoctoral fellow at the Ohio State University, where he’s researching the
                        role of metabolic stress in the control of protein synthesis and
                        inflammation.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SidebarRightWrapper className="xl:max-w-xs">
          <div className="px-6 py-12 xl:py-18 xxl:px-12">
            <SidebarSearch />
          </div>
        </SidebarRightWrapper>
      </div>
    </AppLayout>
  )
}

export default About
