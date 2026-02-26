import Image from 'next/image'
import React from 'react'
import pfp from '@/app/assets/images/profilepic.png'
import Dropdown from './Dropdown'
import useAvatar from '@/app/hooks/useAvatar'

const LoggedIn = () => {
  const {avatar} = useAvatar()
  return (
    <div className='flex justify-center items-center gap-5'>
        <p className='font-bold text-[18px]'>Enko</p>
        <Image src={avatar} alt="user profile picture" width="52" height= "52" className='rounded-full w-10 h-10'></Image>
        <Dropdown />
    </div>
  )
}

export default LoggedIn