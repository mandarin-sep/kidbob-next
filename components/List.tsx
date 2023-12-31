import Loading from "./Loading";
import ListItem from "./ListItem";
import Search from "./Search";
import useStores from "@/hooks/useStores";
import { useRouter } from "next/router";
import useSWR from "swr";

const List = () => {
  const router = useRouter();
  const { data: shopType } = useSWR("/shopType");
  const { data: search } = useSWR("/search");
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

  const searchedShopList =
    search === "" || !search
      ? newShopList
      : newShopList?.filter((item) => item.shopName.includes(search));

  return (
    <>
      <Search />
      <ul className="overflow-y-scroll h-full whitespace-nowrap list-none p-0 relative overflow-x-hidden m-0 divide-y divide-gray-200">
        {searchedShopList?.length === 0 ? (
          <div className="h-[40vh] flex justify-center items-center text-center font-extrabold text-3xl text-blue-600">
            조건에 맞는 가게가 <br /> 없습니다.
          </div>
        ) : (
          <></>
        )}
        {!isLoading ? (
          searchedShopList!.map((item) => {
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
