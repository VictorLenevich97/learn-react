import { useState, useEffect } from "react";

export const PostsList = () => {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://60f699f318254c00176e0362.mockapi.io/posts"
      ).then((res) => res.json());

      setPostsList(response);
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <span>Error! Something happens...</span>
      </div>
    );
  }

  return (
    <ul>
      {postsList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
