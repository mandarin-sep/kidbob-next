import { listItem } from "@/types/store";
import shopType from "@/functions/shopType";

type ListItemPropsType = {
  item: listItem;
};

const ListItem = ({ item }: ListItemPropsType) => {
  // const newCenter = new window.naver.maps.LatLng(shopLat, shopLon);

  // const { map } = useMap();
  // const { markers } = useMarker();
  // const markerData = markers.find((item) => item.id === Number(shopId));

  // //InfoWindow Data
  // const infoWindowString = `<div style="box-sizing: border-box; padding: 8px;">
  // <div>
  // <h3 style="font-weight: 700; color: #0068c3; margin: 0 6px 0 0; line-height: 14px; display: inline;">
  // ${shopName}
  // </h3>
  // <span style="color: #8f8f8f; font-size: 14px;">${shopType(shopBsType)}</span>
  // </div>
  // <div>${shopRoadAddr}</div>
  // </div>
  // `;

  // const infoWindow = new naver.maps.InfoWindow({
  //   content: infoWindowString,
  // });

  // //가게 정보를 클릭했을때 해당 가게를 지도의 중심으로 이동
  // const handleClick = () => {
  //   map?.setCenter(newCenter);
  //   map?.setZoom(18);
  //   if (map) {
  //     infoWindow.open(map, markerData?.marker);
  //   }
  // };
  const {
    shopName,
    shopRoadAddr,
    shopTel,
    shopAddr,
    shopLat,
    shopLon,
    shopBsType,
    wdFrTime,
    wdToTime,
    shopId,
  } = item;

  //평일 영업시간
  let shopTime;
  if (wdToTime === "0000" && wdFrTime === "0000") {
    shopTime = "연중무휴";
  } else {
    const start = wdFrTime.split("");
    const end = wdToTime.split("");
    shopTime = `${start[0]}${start[1]}:${start[2]}${start[3]} ~ ${end[0]}${end[1]}:${end[2]}${end[3]}`;
  }

  return (
    <li
      key={item.shopId}
      className="px-6 pt-5 pb-4 cursor-pointer hover:bg-slate-200/60"
    >
      <div>
        <h3 className="font-bold text-lg text-blue-600 my-0 mr-[6px] ml-0 inline">
          {shopName}
        </h3>
        <span className="text-sm text-stone-600 before:content-[] before:border-r-stone-600 before:border-r m-1.5">
          {shopType(shopBsType)}
        </span>
      </div>

      <div style={{ marginTop: "8px" }}>
        <span className="box-border border-gray-500 border text-xs mt-0.5 mr-1.5 ml-0 mb-0 text-stone-600 py-[1px] px-0.5 text-center">
          지번
        </span>
        {shopAddr}
      </div>
      <div>
        <span className="box-border border-gray-500 border text-xs mt-0.5 mr-1.5 ml-0 mb-0 text-stone-600 py-[1px] px-0.5 text-center">
          도로명
        </span>
        {shopRoadAddr}
      </div>
      <div>
        <span className="box-border border-gray-500 border text-xs mt-0.5 mr-1.5 ml-0 mb-0 text-stone-600 py-[1px] px-0.5 text-center">
          Phone
        </span>
        {shopTel}
      </div>

      <div>
        <span className="box-border border-gray-500 border text-xs mt-0.5 mr-1.5 ml-0 mb-0 text-stone-600 py-[1px] px-0.5 text-center">
          영업시간
        </span>
        {shopTime}
      </div>
    </li>
  );
};

export default ListItem;
