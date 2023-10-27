import { NaverMap } from "@/types/map";
import Script from "next/script";
import React, { useEffect, useRef } from "react";

interface Props {
  onLoad?: (map: NaverMap) => void;
  center: [number, number];
}

const Map = ({ onLoad, center }: Props) => {
  const mapRef = useRef<NaverMap | null>(null);
  const NAVER_KEY = process.env.NEXT_PUBLIC_NAVER_KEY;
  const mapId = "map-id";

  const initializeMap = () => {
    let initialCenter: [number, number] = [35.8714354, 128.601445];
    if (!localStorage.getItem("center") && center) {
      localStorage.setItem("center", JSON.stringify(center));
      initialCenter = center;
    } else if (localStorage.getItem("center") && !center) {
      const centerData = JSON.parse(localStorage.getItem("center") as string);
      initialCenter = centerData;
    } else if (localStorage.getItem("center") && center) {
      initialCenter = center;
    }
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: 15,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };
  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_KEY}`}
        onLoad={initializeMap}
      />
      <div id={mapId} style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export default Map;
