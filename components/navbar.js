import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#',  current: true },
  { name: 'Geschichte', href: '/geschichte', icon: CalendarIcon, current: false },
  { name: 'Soziologie', href: '#', icon: UserGroupIcon, current: false }
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex min-h-screen">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-green-200 focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <span>Logo</span>
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-zinc-600 text-gray-200'
                                : 'text-gray-600 hover:bg-zinc-600 hover:text-gray-200',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                            )}
                          >
                            
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <span>Logo</span>
                        </div>
                     
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col border-gray-200 bg-zinc-600">
              <div className="flex flex-1 flex-col pt-5 pb-4">
                
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="space-y-1 px-2 pt-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-zinc-600 text-gray-200'
                            : 'text-gray-300 hover:bg-zinc-600 hover:text-gray-200',
                          'group flex items-center px-2 py-2 font-medium rounded-md'
                        )}
                      >
                       
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-zinc-800 px-4 py-1.5">
              
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="min-h-screen rounded-lg p-6 2xl:w-1/2">
                  {props.mobile}
                  {props.right}
                    
                </div>
                
              </div>
              {/* End main area */}
            </main>
            <aside className="relative hidden w-96 flex-shrink-0 overflow border-r-4 border-r-purple-200 xl:order-first xl:flex xl:flex-col">
              {/* Start secondary column (hidden on smaller screens) */}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full rounded-lg pt-3">
                 {props.left}

                </div>
                <div className="absolute h-screen w-5 right-0 bg-gray-600 top-0">
                  
                </div>
                <div className="top-1/2 w-[100PX] right-4 bg-gray-600 absolute text-xs flex flex-row justify-center items-center ">
                  <div>1000 nach C.</div>

                  </div>
                  <div className="top-1/4 w-[100PX] right-4 bg-gray-600 absolute text-xs flex flex-row justify-center items-center ">
                   <div className="">500 nach C.</div>

                  </div>
                
              </div>
              {/* End secondary column */}
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
