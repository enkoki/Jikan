import PowerIcon from '@/app/assets/icons/PowerIcon'
import AboutIcon from '@/app/assets/icons/sidebar_icons/About'
import AccountIcon from '@/app/assets/icons/sidebar_icons/Account'
import ConnectionIcon from '@/app/assets/icons/sidebar_icons/Connections'
import HomeIcon from '@/app/assets/icons/sidebar_icons/Home'
import ListIcon from '@/app/assets/icons/sidebar_icons/List'
import NotificationsIcon from '@/app/assets/icons/sidebar_icons/Notification'
import SettingsIcon from '@/app/assets/icons/sidebar_icons/Settings'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SBItems = () => {
    const pathName = usePathname()
    const isLoggedIn = true

    return (
        <div className='flex flex-col px-3 py-5 justify-center items-start gap-2 font-bold'>
            <Link href="/" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/" ? "bg-[#151f2e]" : ""}`}>
                    <HomeIcon /> Home
                </div>
            </Link>

            <Link href="/about" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/about" ? "bg-[#151f2e]" : ""}`}>
                    <AboutIcon /> About
                </div>
            </Link>

            <Link href="/connections" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/connections" ? "bg-[#151f2e]" : ""}`}>
                    <ConnectionIcon /> Connections
                </div>
            </Link>

            <Link href="/anime" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/anime" ? "bg-[#151f2e]" : ""}`}>
                    <ListIcon /> Anime List
                </div>
            </Link>

            <Link href="/manga" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/manga" ? "bg-[#151f2e]" : ""}`}>
                    <ListIcon /> Manga List
                </div>
            </Link>

            <Link href="/notifications" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/notifications" ? "bg-[#151f2e]" : ""}`}>
                    <NotificationsIcon /> Notifications
                </div>
            </Link>
            
            <Link href="/account" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/account" ? "bg-[#151f2e]" : ""}`}>
                    <AccountIcon /> Account
                </div>
            </Link>

            <Link href="/settings" className="flex gap-2 w-full">
                <div className={`p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/settings" ? "bg-[#151f2e]" : ""}`}>
                    <SettingsIcon /> Settings
                </div>
            </Link>

            <div className={`cursor-pointer text-red-300 p-3 rounded-xl flex items-center justify-start w-full gap-2 text-[21px] ${pathName === "/settings" ? "bg-[#6200ED]" : ""}`}>
                {isLoggedIn && <><PowerIcon className='fill-red-300' /> <span>Log Out</span></>}
            </div>
        </div>
    )
}

export default SBItems
