import useMap from "@/hooks/useMap";
import Map from "./Map";
import useSWR from "swr";
import { NaverMap } from "@/types/map";
import Markers from "./Markers";
import FoodBtn from "./FoodBtn";

const MapSection = () => {
  const { data: center } = useSWR("/center");
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <div className="w-full h-full relative">
      <FoodBtn />
      <Map onLoad={onLoadMap} center={center} />
      <Markers />
    </div>
  );
};

export default MapSection;
