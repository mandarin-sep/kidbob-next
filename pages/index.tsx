import LocationSelector from "@/components/LocationSelector";
import Image from "next/image";
import Badge from "@/public/assests/Symbol_of_Daegu.svg";
import backGround from "@/public/assests/Daegu.jpg";

export default function Home() {
  return (
    <>
      <main className={"w-screen h-screen relative flex flex-col"}>
        <div className="overflow-hidden rounded-full mt-20 mx-auto mb-0 w-80 h-80 z-99 shadow-[5px_5px_8px_1px_rgba(0,0,0,0.3)] bg-green-200">
          <Badge width={320} height={320} />
        </div>
        <h1 className="font-bold mx-auto my-8 z-99 text-5xl">
          대구 광역시 아동급식카드 사용처
        </h1>
        <section className="w-[30rem] h-7 z-99 mx-auto my-0 text-3xl">
          <LocationSelector />
        </section>
        <Image
          src={backGround}
          alt="배경이미지"
          className="opacity-30 absolute top-0 left-0 w-full h-full -z-50"
        />
      </main>
    </>
  );
}
