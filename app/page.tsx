"use client"
import React, { Suspense } from "react"; // 1. Import Suspense
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Trending from "./components/Anime/Trending";
import AllTimePopular from "./components/Anime/AllTimePopular";
import Upcoming from "./components/Anime/Upcoming";
import Spinner from "./assets/icons/Spinner"; // Use your spinner for the fallback
import LB from "./components/Leaderboard/LB";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return(
        <>
            <Navbar />
            <Landing />
            {/* 2. Wrap everything that uses Search/useSearchParams in Suspense */}
            <Suspense fallback={<div className="flex justify-center p-10"><Spinner /></div>}>
                <Trending />
            </Suspense>
			<AllTimePopular />
			<Upcoming />
            <LB />
        </>
    );
}