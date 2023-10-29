import ListContainer from "@/components/ListContainer";
import MapSection from "@/components/MapSection";
import { NextSeo } from "next-seo";

export default function Main() {
  return (
    <div className="flex w-full h-full">
      <NextSeo
        title="Kid Bob"
        description="대구광역시의 아동급식카드 사용처를 간편하게 확인해보세요"
      />
      <ListContainer />
      <MapSection />
    </div>
  );
}
