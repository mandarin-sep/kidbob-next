import { useCallback } from "react";
import useSWR, { mutate } from "swr";

export default function useShopType() {
  const { data: shopType } = useSWR("/shopType");

  const resetShopType = useCallback(() => {
    mutate("/shopType", "all");
  }, []);

  return {
    resetShopType,
    shopType,
  };
}
