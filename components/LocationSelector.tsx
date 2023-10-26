import { useState } from "react";
import latlng from "@/public/assests/LatLng.json";

import DistrictSelector from "./DistrictSelector";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { fetchShops } from "@/api";

const LocationSelector = () => {
  const [value, setValue] = useState("");
  const [division, setDivision] = useState("");
  const [validation, setValidation] = useState({
    isvalidate: true,
    message: "",
  });
  const router = useRouter();

  const handleDataFetch = () => {
    if (value === "") {
      setValidation({
        isvalidate: false,
        message: "찾길 원하는 행정구역을 선택해주세요",
      });
      return;
    }

    if (division.length === 0) {
      setValidation({ isvalidate: false, message: "동/읍/면을 선택하세요" });
      return;
    }

    //동/읍/면의 중심 좌표 설정할 함수
    const centerValue = latlng.filter((item) => {
      return item.sgg_nm === value && item.emd_nm === division;
    });
    const centerPosition = new window.naver.maps.LatLng(
      centerValue[0].center_lati,
      centerValue[0].center_long
    );

    router.push(`main/${value}`);
    const data = fetchShops(value);
    mutate("/stores", data);
  };
  return (
    <>
      <div className="w-full h-full flex justify-between">
        <select
          className="w-9/12 h-full rounded mr-1 text-base"
          name="area"
          id="area-select"
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">찾고 싶은 행정구역을 선택해주세요</option>
          <option value="북구" id="BukGu">
            북구
          </option>
          <option value="중구" id="JungGu">
            중구
          </option>
          <option value="동구" id="DongGu">
            동구
          </option>
          <option value="서구" id="SeoGu">
            서구
          </option>
          <option value="수성구" id="SuSeongGu">
            수성구
          </option>
          <option value="남구" id="NamGu">
            남구
          </option>
          <option value="달서구" id="DalSeoGu">
            달서구
          </option>
          <option value="달성군" id="DalSungGun">
            달성군
          </option>
        </select>
        <DistrictSelector location={value} setDivision={setDivision} />
        <button
          className="text-sm w-1/5 h-full bg-blue-400 p-0.5 text-white text-center box-border rounded transition duration-200 ease-in-out hover:scale-110 "
          onClick={handleDataFetch}
        >
          찾아보기
        </button>
      </div>
      {!validation.isvalidate && (
        <div className="w-full text-red-600 text-center mt-2 font-bold">
          {validation.message}
        </div>
      )}
    </>
  );
};

export default LocationSelector;
