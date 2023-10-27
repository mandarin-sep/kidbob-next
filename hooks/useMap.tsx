import { NaverMap } from "@/types/map";
import { useCallback } from "react";
import useSWR, { mutate } from "swr";

export const INITIAL_ZOOM = 10;

export const MAP_KEY = "/map";

export default function useMap() {
  const { data: map } = useSWR(MAP_KEY);
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);
  const updateMapOption = useCallback(
    (center: [number, number], zoom: number) => {
      map.morph(new naver.maps.LatLng(...center), zoom);
      localStorage.setItem("center", JSON.stringify(center));
    },

    [map]
  );

  return {
    map,
    initializeMap,
    updateMapOption,
  };
}
