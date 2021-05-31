import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon, CogIcon } from '@heroicons/react/outline';
import classes from './Header.module.css';
import {logout} from "../../requests/utils";

const navigation = ['Dashboard', 'Team', 'Projects', 'Calendar', 'Reports']
const profile = ['Your Profile', 'Settings', 'Sair']


const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const mapNavigation = () => {
    return navigation.map((item, itemIdx) => {
        return itemIdx === 0 ? (
            <Fragment key={item}>
                <a href="#" className="bg-indigo-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                    {item}
                </a>
            </Fragment>
        ) : (
            <a key={item} href="#" className="text-gray-300 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                {item}
            </a>
        )
    })
}

const mapProfileMenu = () => {
    return profile.map((item) => {
        let rota = '#';
        let action = () => {}
        if(item === 'Sair') {
            rota = '/login';
            action = logout;
        }
        return (
            <Menu.Item key={item}>
                {({active}) => (
                    <Link
                        to={rota}
                        onClick={action}
                        className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                        )}
                    >
                        {item}
                    </Link>
                )}
            </Menu.Item>
        )
    })
}

const mapProfileMenuMobile = () => {
    return profile.map((item) => {
        let rota = '#';
        let action = () => {}
        if(item === 'Sair') {
            rota = '/login';
            action = logout;
        }
        return (
            <Link
                key={item}
                to={rota}
                onClick={action}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-indigo-700"
            >
                {item}
            </Link>
        )
    })
}


const Header = () => {
    return (
        <div>
            <Disclosure as="nav" className="bg-indigo-600">
                {({open}) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 w-12 rounded-full px-1 py-1"
                                            alt="Scholemberg Logo"
                                            src="https://i.ibb.co/pd483Yv/logo.png"
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {mapNavigation()}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <Menu as="div" className="md-3 relative">
                                        {({open}) => (
                                            <>
                                                <div className="flex space-x-4">
                                                    <div className="text-white text-sm font-medium">Ian Pinto de Almeida</div>
                                                    <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <CogIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition ease-out duration 100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        static
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    >
                                                        {mapProfileMenu()}
                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile Button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navigation.map((item, itemIdx) =>
                                    itemIdx === 0 ? (
                                        <Fragment key={item}>
                                            <a href="#" className="bg-indigo-800 text-white block px-3 py-2 rounded-md text-base font-medium">
                                                {item}
                                            </a>
                                        </Fragment>
                                    ) : (
                                        <a
                                            key={item}
                                            href="#"
                                            className="text-gray-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                <div className="flex items-center px-5">
                                    <div className="ml-3 space-y-1">
                                        <div className="text-base font-medium leading-none text-white">Ian Pinto de Almeida</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">ianpalmeida30@gmail.com</div>
                                    </div>
                                </div>
                                <div className="mt-3 px-2 space-y-1">
                                    {mapProfileMenuMobile()}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            {/*<header className="bg-white shadow">*/}
            {/*    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">*/}
            {/*        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>*/}
            {/*    </div>*/}
            {/*</header>*/}
            {/*<main>*/}
            {/*    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">*/}
            {/*        /!* Replace with your content *!/*/}
            {/*        <div className="px-4 py-6 sm:px-0">*/}
            {/*            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />*/}
            {/*        </div>*/}
            {/*        /!* /End replace *!/*/}
            {/*    </div>*/}
            {/*</main>*/}
        </div>
    )
}

export default Header;