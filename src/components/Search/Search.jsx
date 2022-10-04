import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { POSTS_SEARCH } from "../../constants/routes";

export const Search = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [searchValue, setSearchValue] = useState(params.get("value") || "");

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchValue && navigate(`${POSTS_SEARCH}/?value=${searchValue}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[30rem] mb-5 flex items-center justify-between rounded-xl shadow-md border border-1"
    >
      <input
        className="bg-transparent p-2 w-full outline-0"
        onChange={onSearch}
        value={searchValue}
        placeholder="Enter post name..."
      />
      <button className="bg-orange-500 w-[10rem] p-2 text-white rounded-tr-xl rounded-br-xl">
        Search
      </button>
    </form>
  );
};
