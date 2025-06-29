import { useState } from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
    const [showOurProducts, setShowOurProducts] = useState(false);
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const ourProductsLinkClickHandler = () => {
        setShowOurProducts(prev => !prev);
    }

    const crossButtonClickHandler = () => {
        setShowMobileNavbar(false);
    }

    const openButtonClickHandler = () => {
        setShowMobileNavbar(true);
    }

    return (
        <header className="absolute w-full z-10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white/30 backdrop-blur-md rounded-lg my-2 mx-4 lg:mx-auto shadow-lg" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={openButtonClickHandler}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-700 hover:text-gray-900 cursor-pointer" aria-expanded="false" onClick={ourProductsLinkClickHandler}>
                            Our Products
                            <svg className="size-5 flex-none cursor-pointer" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {showOurProducts && <div className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-gray-900/5 overflow-y">
                            <div className="p-4">
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-auto">
                                        <Link to="#" className="block font-semibold text-gray-900">
                                            Create Webapp
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Create webapps in minutes.</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                                        </svg>
                                    </div>
                                    <div className="flex-auto">
                                        <Link to="#" className="block font-semibold text-gray-900">
                                            Engagement
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Speak directly to your customers</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                                        </svg>
                                    </div>
                                    <div className="flex-auto">
                                        <Link to="#" className="block font-semibold text-gray-900">
                                            Security
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Your customers' data will be safe and secure</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-auto">
                                        <Link to="#" className="block font-semibold text-gray-900">
                                            Integrations
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Connect with third-party tools</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </div>
                                    <div className="flex-auto">
                                        <Link to="#" className="block font-semibold text-gray-900">
                                            Automations
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Build strategic funnels that will convert</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                <Link to="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                                    <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clipRule="evenodd" />
                                    </svg>
                                    Watch demo
                                </Link>
                                <Link to="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                                    <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                                    </svg>
                                    Contact sales
                                </Link>
                            </div>
                        </div>}
                    </div>

                    <Link to="#" className="text-sm/6 font-semibold text-gray-700 hover:text-gray-900">Features</Link>
                    <Link to="#" className="text-sm/6 font-semibold text-gray-700 hover:text-gray-900">Marketplace</Link>
                    <Link to="#" className="text-sm/6 font-semibold text-gray-700 hover:text-gray-900">Company</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="#" className="text-sm/6 font-semibold text-gray-700 hover:text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu open state. */}
            {showMobileNavbar && <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm"></div>
                <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white/90 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </Link>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={crossButtonClickHandler}>
                            <span className="sr-only">Close menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div className="-mx-3">
                                    <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                                        Product

                                        {/* Expand/collapse icon, toggle classes based on menu open state.

                                        Open: "rotate-180", Closed: "" */}

                                        <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {/* 'Product' sub-menu, show/hide based on menu state.  */}
                                    <div className="mt-2 space-y-2" id="disclosure-1">
                                        <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Analytics</Link>
                                        <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Engagement</Link>
                                        <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Security</Link>
                                        <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Integrations</Link>
                                        <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Automations</Link>
                                        <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Watch demo</Link>
                                        <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Contact sales</Link>
                                    </div>
                                </div>
                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</Link>
                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</Link>
                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</Link>
                            </div>
                            <div className="py-6">
                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </header>
    );
}

export default MainHeader;