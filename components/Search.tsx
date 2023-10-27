import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border border-blue-600 my-0 mx-3 flex rounded-md">
      <button
        className="w-16 p-0 m-auto bg-transparent
       flex items-center justify-center"
      >
        <BiSearch size="1.25rem" color="#217af4" />
      </button>
      <input
        type="text"
        placeholder="찾고 싶은 가게명"
        className="h-11 w-full text-base border-none outline-none rounded-md"
      />
    </div>
  );
};

export default Search;
