import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Manga {
  id_book: number;
  avatar: string;
  name: string;
  rss_chapter: string;
}

const Manga = () => {
  const [mangaList, setMangaList] = useState<Manga[]>([]);

  useEffect(() => {
    void fetchMangaList();
  }, []);

  const fetchMangaList = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const apiUrl = "https://cmangaaz.com/api/rss_new";
      const response = await fetch(proxyUrl + apiUrl);

      if (response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: Manga[] = await response.json();
        setMangaList(data);
      } else {
        throw new Error("Failed to fetch manga");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mangaList.map((manga) => (
          <div
            className="manga-card overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
            key={manga.id_book}
          >
            <div className="manga-image">
              <img
                src={manga.avatar}
                alt={manga.name}
                className="h-56 w-full object-cover sm:h-64 md:h-72"
              />
            </div>
            <h2 className="mb-2 mt-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-300">
              <a
                href={manga.rss_chapter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {manga.name}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manga;
