export function changeToKor(engName: string) {
  let korName: string;
  switch (engName) {
    case "BukGu":
      return "북구";
    case "JungGu":
      return "중구";
    case "DongGu":
      return "동구";
    case "SeoGu":
      return "서구";
    case "SuSeongGu":
      return "수성구";
    case "NamGu":
      return "남구";
    case "DalSeoGu":
      return "달서구";
    case "DalSungGun":
      return "달성군";
  }
}
