import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='flex items-center justify-between'>
                {/* Logo & Title section  */}
                <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='w-6 h-6 text-blue-600' />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
                </Link>
                {/* Nav section  */}
                <ul className='item-center hidden space-x-8 md:flex'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            About Us
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile NavBar Section  */}
                <div className='md:hidden'>
                    {/* Dropdown Open Button  */}
                    <button
                        aria-aria-label='Open Menu'
                        title='Menu Bar'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button Section  */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <BoltIcon className='h-6 w-6 text-blue=500' />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>nextPage</span>
                                        </Link>
                                    </div>
                                    {/* Dropdown Menu Close Button  */}
                                    <div>
                                        <button
                                            aria-aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Sections  */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                Books
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                About Us
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;