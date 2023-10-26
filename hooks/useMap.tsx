import { NaverMap } from "@/types/map";
import { useCallback } from "react";
import { mutate } from "swr";

export const INITIAL_ZOOM = 10;

export const MAP_KEY = "/map";

export default function useMap() {
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  return {
    initializeMap,
  };
}
