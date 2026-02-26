import React from 'react'

const Trending = () => {
  return (
    <div className='flex justify-between sm:justify-center sm:gap-10 items-center relative bottom-5 bg-[#151f2e] h-[40px] md:h-[55px] xl:h-[60px] z-0 px-10 overflow-x-scroll'>
        <div className='cursor-pointer font-semibold  md:text-[14px] text-[12px] text-[#728aa1]'>Overview</div>
        <div className='cursor-pointer font-semibold  md:text-[14px] text-[12px] text-[#728aa1]'>Anime</div>
        <div className='cursor-pointer font-semibold  md:text-[14px] text-[12px] text-[#728aa1]'>Favorites</div>
        <div className='cursor-pointer font-semibold  md:text-[14px] text-[12px] text-[#728aa1]'>Social</div>
    </div>
  )
}

export default Trending