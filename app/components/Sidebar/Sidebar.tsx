"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';

import pfp from '@/app/assets/images/profilepic.png'
import SiteLogo from '@/app/assets/images/sitelogo.svg'
import Cross from '@/app/assets/icons/Cross';
import HomeIcon from '@/app/assets/icons/sidebar_icons/Home';
import { usePathname } from 'next/navigation';
import SBItems from './SBItems';
import Link from 'next/link';
import Variant from '../Button/Btn';
import PowerIcon from '@/app/assets/icons/PowerIcon'
import useAvatar from '@/app/hooks/useAvatar';

interface SidebarProps {
  setIsOpen: (open: boolean) => void,
  isOpen: boolean
}

const Sidebar = ({ setIsOpen, isOpen }: SidebarProps) => {
    const { avatar } = useAvatar()
    const pathName = usePathname()

  return (
    <div className="fixed inset-0 z-50 flex text-[#9ba9b9] xl:hidden">
        <div className="absolute inset-0 bg-[#0b1622]/50" onClick={() => setIsOpen(false)} />
            <div className='bg-[#0b1621] min-h-screen w-screen sm:w-100 relative overflow-y-auto z-50 xl:hidden'> {/*bg-[#040404]*/}
                <div className='h-[50px] xsm:h-[60px] md:h-[70px] shadow-md bg-[#0b1622] flex justify-between items-center py-2 px-10'>
                <Image src={SiteLogo} alt="anisync-logo" className='w-10 h-10 xl:w-11 xl:h-11'/>
                <Cross className='cursor-pointer' onclick={() => setIsOpen(false)}/>
            </div>
            <div className={`relative flex ${true ? 'justify-start' : 'justify-center'} items-center p-5 rounded-xl`}>
                {false && (<div className="absolute inset-0 z-50 flex justify-center items-center"><Variant content="Log In" /></div>)}
                <div className={`flex justify-start items-center gap-5 ${false ? 'blur-lg pointer-events-none select-none' : ''}`}>
                <Image src={avatar} width="80" height="80"  alt="profile picture" className='w-15 h-15 sm:w-25 sm:h-25 rounded-full' />
                <div className='flex justify-center items-start flex-col'>
                    <div className='font-black text-[20px]'>Enko</div>
                    <div className='text-[#9F9FA3] font-bold text-[12px]'>UUID: 901446668</div>
                    <div className='cursor-pointer text-[#9ba9b9] font-bold flex flex-col justify-center items-center w-max h-max gap-2'>
                        <Link href="/profile">View Profile</Link>
                    </div>
                </div >
                </div>
            </div>
            <SBItems />
        </div>
    </div>
  )
}

export default Sidebar