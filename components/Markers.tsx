import useMap from "@/hooks/useMap";
import Marker from "./Marker";
import useStores from "@/hooks/useStores";
import { useRouter } from "next/router";
import { listItem } from "@/types/store";

const Markers = () => {
  const router = useRouter();
  const { q, d } = router.query;
  const {
    data: shopData,
    isLoading,
    error,
  } = useStores(q as string, d as string);

  const { map } = useMap();

  if (isLoading) return null;
  return (
    <>
      {shopData!.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={
              new window.naver.maps.LatLng(store.shopLat, store.shopLon)
            }
            shopData={{
              shopId: store.shopId,
              shopName: store.shopName,
              shopBsType: store.shopBsType,
              shopRoadAddr: store.shopRoadAddr,
            }}
            key={store.shopId}
          />
        );
      })}
    </>
  );
};

export default Markers;
