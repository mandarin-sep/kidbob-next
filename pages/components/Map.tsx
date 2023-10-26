import { NaverMap } from "@/types/map";
import Script from "next/script";
import React, { useEffect, useRef } from "react";

interface Props {
  onLoad?: (map: NaverMap) => void;
}

const Map = ({ onLoad }: Props) => {
  const mapRef = useRef<NaverMap | null>(null);

  const mapId = "map-id";

  const initializeMap = () => {
    const initialCenter: [number, number] = [37.5262411, 126.99289439];
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: 16,
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
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mlz5iv6gm0`}
        onLoad={initializeMap}
      />
      <div id={mapId} style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export default Map;
