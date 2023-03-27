import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition, Menu } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, BookOpenIcon } from '@heroicons/react/20/solid'
import SwitchTheme from "../components/theme";
import Container from "../components/container";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar({categories}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <Container>
            <nav className="mx-auto flex max-w-screen-lg items-center justify-between p-6 lg:px-8" aria-label="Global">
                {/* Website Logo */}
                <div className="flex lg:flex-1">
                    <div className="text-lg font-medium leading-6">
                        <a href="/">
                            <span >Tech Blogs </span>
                            <BookOpenIcon className="h-6 w-6 inline-block" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                {/* Hidden toggle button for mobile nav */}
                <div className="flex lg:hidden md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {/* Nav Item Container */}
                <div className="hidden lg:flex lg:gap-x-12 relative  md:flex md:gap-x-12">
                    {/* Nav Items */}
                    <a href="/" className="text-medium font-medium leading-6  text-gray-600 dark:text-gray-400">
                        Home
                    </a>
                    <a href="/about" className="text-medium font-medium leading-6 text-gray-600 dark:text-gray-400">
                        About
                    </a>
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex items-center gap-x-1 text-medium font-medium leading-6  text-gray-600 dark:text-gray-400">
                                Blog Categories
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
                                {
                                    categories.map(category => {
                                        return (
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href={`/category/${category}`}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-medium font-medium text-gray-600 dark:text-gray-400 uppercase')}
                                                    >
                                                        {category}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <SwitchTheme></SwitchTheme>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-14 py-14 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-black dark:text-gray-400">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold leading-6 -m-1.5 p-1.5">
                            <span className="sr-only">Logo</span>
                            <a href="/">
                                <span >Tech Blogs </span>
                                <BookOpenIcon className="h-6 w-6 inline-block" aria-hidden="true" />
                            </a>
                        </div>

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-medium font-medium leading-6  text-gray-600 dark:text-gray-400 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-medium font-medium leading-6  text-gray-600 dark:text-gray-400 hover:bg-gray-50"
                                >
                                    About
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-medium font-medium leading-6 text-gray-600 dark:text-gray-400 hover:bg-gray-50">
                                                Blog Categories
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {categories.map((blogCategorie) => (
                                                    <Disclosure.Button
                                                        key={blogCategorie}
                                                        as="a"
                                                        href={`/category/${blogCategorie}`}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-medium font-medium leading-6  text-gray-600 dark:text-gray-400 hover:bg-gray-50 uppercase"
                                                    >
                                                        {blogCategorie}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <SwitchTheme></SwitchTheme>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </Container>
    )
}
