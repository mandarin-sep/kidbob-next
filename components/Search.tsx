import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { mutate } from "swr";

const Search = () => {
  const [shopName, setShopName] = useState<string>("");

  const handleShopNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopName(e.currentTarget.value);
  };

  const handleSearchSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    //빈창으로 검색할 경우 전체 List 보여줌
    if (shopName === "") {
      mutate("/search", "");
      return;
    }

    mutate("/search", shopName);
  };
  return (
    <form
      className="border border-blue-600 my-0 mx-3 flex rounded-md"
      onSubmit={handleSearchSubmit}
    >
      <button
        className="w-16 p-0 m-auto bg-transparent
       flex items-center justify-center"
        type="submit"
        aria-label="가게명 검색 버튼"
      >
        <BiSearch size="1.25rem" color="#217af4" />
      </button>
      <input
        type="text"
        placeholder="찾고 싶은 가게명"
        className="h-11 w-full text-base border-none outline-none rounded-md"
        onChange={handleShopNameChange}
      />
    </form>
  );
};

export default Search;
