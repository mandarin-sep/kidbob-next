import { listItem } from "@/types/store";
import List from "./List";
import LocationSelector from "./LocationSelector";

export default function ListContainer() {
  return (
    <section className="flex w-[23vw] h-full flex-col">
      <div className="h-[3vh] my-4 mx-2">
        <LocationSelector />
      </div>
      <List />
    </section>
  );
}
