import { useState, useEffect } from "react";
import Loading from "./Loading";
import ListItem from "./ListItem";
import { listItem } from "@/types/store";
import Search from "./Search";
import useSWR from "swr";
import useShopType from "@/hooks/useShopType";
import useStores from "@/hooks/useStores";
import { useRouter } from "next/router";

const List = () => {
  const router = useRouter();
  const { q, d } = router.query;
  const {
    data: shopData,
    isLoading,
    error,
  } = useStores(q as string, d as string);

  const { shopType } = useShopType();

  // useEffect(() => {
  //   if (shopType !== "") {
  //     setShopList(
  //       filteredShopList.filter((shop) => shop.shopBsType === shopType)
  //     );
  //   }
  //   if (shopType === "all") setShopList(filteredShopList);
  // }, [filteredShopList, shopType]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* <Search stores={stores} /> */}
      <ul className="overflow-y-scroll h-full whitespace-nowrap list-none p-0 relative overflow-x-hidden m-0 divide-y divide-gray-300">
        {shopData?.length === 0 ? (
          <div className="h-[40vh] flex justify-center items-center text-center font-extrabold text-3xl text-blue-600">
            조건에 맞는 가게가 <br /> 없습니다.
          </div>
        ) : (
          <></>
        )}
        {shopData ? (
          shopData.map((item) => {
            return <ListItem item={item} key={item.shopId} />;
          })
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
};

export default List;
