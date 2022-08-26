import { useEffect, useState } from "react";

import { LibraryItem } from "./LibraryItem";

export const LibrariesList = () => {
  const [librariesList, setLibrariesList] = useState([]);

  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=react")
      .then((response) => response.json())
      .then((data) => setLibrariesList(data.results));
  }, []);

  return (
    <ul>
      {librariesList.map(({ searchScore, package: library }) => (
        <LibraryItem key={searchScore} name={library.name} />
      ))}
    </ul>
  );
};
