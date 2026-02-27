export interface Anime {
  mal_id: number;
  title: string;
  title_english?: string | null;

  score: number | null; 
  episodes: number | null;

  images: {
    jpg: {
      image_url: string;
    };
  };

  genres: {
    mal_id: number;
    name: string;
  }[];
}

export const fetchTrendingAnime = async (limit: number = 6): Promise<Anime[]> => {
    try {
        const res = await fetch("https://api.jikan.moe/v4/seasons/now");
        const data = await res.json();
        return (data.data ?? []).slice(0, limit);
    } catch (err) {
        console.error("Error fetching trending anime:", err);
        return [];
    }
}

export const fetchUpcoming = async (limit: number = 6): Promise<Anime[]> => {
    try {
        const res = await fetch("https://api.jikan.moe/v4/seasons/upcoming");
        const data = await res.json();
        return (data.data ?? []).slice(0, limit);
    } catch (err) {
        console.error("Error fetching popular anime:", err);
        return [];
    }
}

export const fetchAllTimePopularAnime = async (
  page: number = 1,
  limit: number = 24
) => {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&page=${page}&limit=${limit}`
    );
    const data = await res.json();
    return {
      data: data.data ?? [],
      pagination: data.pagination ?? { last_visible_page: 1 }
    };
  } catch (err) {
    console.error("Error fetching all-time popular anime:", err);
    return { data: [], pagination: { last_visible_page: 1 } };
  }
};

export const fetchSearchAnime = async (query: string, page: number = 1, limit: number = 12) => {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
    );
    const data = await res.json();
    return {
      data: data.data ?? [],
      pagination: data.pagination ?? { last_visible_page: 1 }
    };
  } catch (err) {
    console.error("Error searching anime:", err);
    return { data: [], pagination: { last_visible_page: 1 } };
  }
};