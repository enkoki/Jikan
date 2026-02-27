"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';

import SiteLogo from '@/app/assets/images/sitelogo.svg'
import Btn from '../Button/Btn';
import LoggedIn from './LoggedIn';
import Hamburger from '@/app/assets/icons/Hamburger';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = ({isloggedin = true}) => {

    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();
     return (
        <>
            <header className='w-screen h-[50px] xsm:h-[60px] md:h-[70px] py-2 px-10 xl:px-25 flex justify-between items-center bg-[#0b1622]/90 backdrop-blur-md shadow-2xl fixed z-40 text-white'>
                <Link href="/"><Image src={SiteLogo} alt="aniliu-logo" className='w-8 h-8 xsm:w-10 xsm:h-10 xl:w-11 xl:h-11'/></Link>
                <nav className='hidden xl:flex'>
                    <ul className='flex gap-10 font-bold text-[20px] justify-center items-center'>
                        <li className={pathname === '/search' ? 'text-(--primary)' : ''}><Link href="/search">Search</Link></li>
                        <li className={pathname === '/profile' ? 'text-(--primary)' : ''}><Link href="/profile">Profile</Link></li>
                        <li className={pathname === '/' ? 'text-(--primary)' : ''}><Link href="/">Home</Link></li>
                    </ul>
                </nav>
                {isloggedin ? <div className='hidden xl:flex'> <LoggedIn/> </div> : <div className='hidden xl:flex'><Btn content = "Log In" path = "/login" className='flex justify-center items-center font-bold text-xl bg-(--primary) py-2 px-6 rounded-xl transition-opacity duration-300 hover:opacity-85 active:opacity-75' /></div>}
                {isOpen ? null : <Hamburger width = "32" height ="32" className='xl:hidden cursor-pointer relative right-0' onClick = {() => setIsOpen(true)}/>}
            </header>
            {isOpen && <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />}
        </>
    );
}

export default Navbar