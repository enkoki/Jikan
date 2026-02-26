import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Trending from "./components/Anime/Trending";
import AllTimePopular from "./components/Anime/AllTimePopular";
import Upcoming from "./components/Anime/Upcoming";

export default function Home() {
	return(
		<>
			<Navbar />
			<Landing />
			<Trending />
			<Upcoming />
			<AllTimePopular />
		</>
	);
}
