import Spinner from '@/app/assets/icons/Spinner';
import { Anime, fetchAllTimePopularAnime } from '@/app/lib/fetchAnimes';
import React, { useEffect, useState } from 'react'
import LBCard from '../Cards/LBCard';

const LB = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAllTimePopular = async () => {
            setLoading(true);
            const res = await fetchAllTimePopularAnime(1, 10);
            setAnimes(res.data);
            setLoading(false);
        };

        const timer = setTimeout(() => {
            loadAllTimePopular();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

  return (
        <>
            <div className='w-full flex justify-center'>
                <div className='text-[#adc0d2] w-full max-w-[1300px] px-4 sm:px-6 md:px-8 flex flex-col'>
                    <div className='flex justify-between items-center mb-4'>
                        <span className='md:text-xl font-bold'>TOP 10 ANIME</span>
                        <span className='text-[10px] md:text-[15px] font-bold text-[#576877]'>View All</span>
                    </div>

                    {loading 
                        ? <Spinner />
                        : <LBCard animes={animes} />}
                </div>
            </div>
        </>
  )
}

export default LB