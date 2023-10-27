import DistrictData from "@/public/assests/District.json";

type DistrictPropsType = {
  location: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
};

const DistrictSelector = ({ location, setDivision }: DistrictPropsType) => {
  const district: { [key: string]: string[] } = DistrictData;
  if (!district[location]) return <></>;
  return (
    <select
      className="w-[30%] h-full mr-1 rounded text-base border border-black"
      onChange={(e) => setDivision(e.target.value)}
    >
      {district[location].map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default DistrictSelector;
