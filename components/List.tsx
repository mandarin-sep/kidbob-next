import { useState, useEffect } from "react";
import Loading from "./Loading";
import ListItem from "./ListItem";
import Search from "./Search";
import useShopType from "@/hooks/useShopType";
import useStores from "@/hooks/useStores";
import { useRouter } from "next/router";
import FoodBtn from "./FoodBtn";
import { listItem } from "@/types/store";
import useSWR from "swr";

const List = () => {
  const router = useRouter();
  const { data: shopType } = useSWR("/shopType");
  const { q, d } = router.query;
  const {
    data: shopData,
    isLoading,
    error,
  } = useStores(q as string, d as string);

  const newShopList =
    shopType === "all" || !shopType
      ? shopData
      : shopData?.filter((item) => item.shopBsType === shopType);

  return (
    <>
      <Search />
      <ul className="overflow-y-scroll h-full whitespace-nowrap list-none p-0 relative overflow-x-hidden m-0 divide-y divide-gray-200">
        {newShopList?.length === 0 ? (
          <div className="h-[40vh] flex justify-center items-center text-center font-extrabold text-3xl text-blue-600">
            조건에 맞는 가게가 <br /> 없습니다.
          </div>
        ) : (
          <></>
        )}
        {!isLoading ? (
          newShopList!.map((item) => {
            return <ListItem item={item} key={item.shopId} />;
          })
        ) : (
          <div className="w-full h-full">
            <Loading />
          </div>
        )}
      </ul>
    </>
  );
};

export default List;
