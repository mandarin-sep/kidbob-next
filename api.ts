export function fetchShops(value: string) {
  return fetch(
    `https://apis.data.go.kr/6270000/dgMealCardShop/getGugunList?serviceKey=${process.env.NEXT_PUBLIC_DAEGU_KEY}&type=json&numOfRows=1000&pageNo=1&gugunName=${value}`
  )
    .then((res) => res.json())
    .then((res) => res.body.items.item);
}
