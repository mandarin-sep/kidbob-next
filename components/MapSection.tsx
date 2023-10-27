import useMap from "@/hooks/useMap";
import Map from "./Map";
import useSWR from "swr";
import { NaverMap } from "@/types/map";
import Markers from "./Markers";

const MapSection = () => {
  const { data: center } = useSWR("/center");
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} center={center} />
      <Markers />
    </>
  );
};

export default MapSection;
