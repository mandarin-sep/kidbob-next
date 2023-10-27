import { fetchShops } from "@/api";
import { listItem } from "@/types/store";
import useSWR from "swr";

export default function useStores(location: string, division: string) {
  const { data, isLoading, error } = useSWR(`${location}`, fetchShops);

  return {
    data: isLoading
      ? data
      : data.filter(
          (item: listItem) => item.shopAddr.split(" ")[0] === division
        ),
    isLoading,
    error,
  };
}
