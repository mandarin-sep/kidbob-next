import axios from "axios";

export async function fetchShops(value: string) {
  try {
    const res = await axios.get(
      `https://apis.data.go.kr/6270000/dgMealCardShop/getGugunList?serviceKey=${process.env.NEXT_PUBLIC_DAEGU_KEY}&type=json&numOfRows=1000&pageNo=1&gugunName=${value}`
    );
    return res.data;
  } catch (e) {
    return [];
  }
}
