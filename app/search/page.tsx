"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import { useSearchParams } from 'next/navigation';
import { Anime, fetchSearchAnime, fetchAllTimePopularAnime } from '../lib/fetchAnimes';
import AnimeGrid from '../components/Cards/HomeGrid';
import Spinner from '../assets/icons/Spinner';
import Footer from '../components/Footer/Footer';

const SearchResults = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const [anime, setAnime] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadAnime = async () => {
            setLoading(true);
            let res;
            if (!query) {
                res = await fetchAllTimePopularAnime(pageNum, 21);
            } else {
                res = await fetchSearchAnime(query, pageNum, 12);
            }
            setAnime(res.data);
            setTotalPages(res.pagination.last_visible_page);
            setLoading(false);
        };

        loadAnime();
    }, [query, pageNum]);

    return (
        <>
            <div className="px-4 sm:px-6 md:px-8 text-[#adc0d2] flex flex-col justify-center items-start">
                {!query && <h2 className="text-xl mb-4 font-bold self-start">Most Popular Anime</h2>}
                {query && (
                    <h2 className="text-xl mb-4 font-bold self-start">
                        Results for <span className='bg-[#868fc3] text-white px-2 py-1 rounded-md font-semibold'>{query}</span>
                    </h2>
                )}
                {loading && <Spinner />}
                {!loading && <AnimeGrid animes={anime} />}
            </div>

            {!loading && (
                <div className='flex justify-center items-center gap-5 mb-5'>
                    <button
                        onClick={() => setPageNum(prev => Math.max(prev - 1, 1))}
                        disabled={pageNum === 1 || loading}
                        className={`cursor-pointer transition-all duration-200 flex justify-center items-center text-white font-bold px-2 py-1 rounded-md w-max ${
                            pageNum === 1 || loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#868fc3] hover:bg-[#b0bcff]"
                        }`}
                    >
                        &#8592;
                    </button>

                    <button
                        onClick={() => setPageNum(prev => Math.min(prev + 1, totalPages))}
                        disabled={pageNum === totalPages || loading}
                        className={`cursor-pointer transition-all duration-200 flex justify-center items-center text-white font-bold px-2 py-1 rounded-md w-max ${
                            pageNum === totalPages || loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#868fc3] hover:bg-[#b0bcff]"
                        }`}
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </>
    );
};

const SearchPage = () => {
    return (
        <>
            <Navbar />
            <div className='h-[60px] md:h-[80px]'></div>
            <Search />
            
            <Suspense fallback={<div className="flex justify-center p-10"><Spinner /></div>}>
                <SearchResults />
            </Suspense>
        </>
    );
};

export default SearchPage;