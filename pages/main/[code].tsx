import { fetchShops } from "@/api";
import { changeToKor } from "@/functions/changeToKor";
import useSWR from "swr";

export default function Main() {
  const { data: stores } = useSWR("/stores");

  console.log(stores);
  return (
    <div>
      {/* <ListContainer /> */}
      {/* <MapSection /> */}
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { code: "북구" } },
      { params: { code: "중구" } },
      { params: { code: "동구" } },
      { params: { code: "서구" } },
      { params: { code: "수성구" } },
      { params: { code: "남구" } },
      { params: { code: "달서구" } },
      { params: { code: "달성군" } },
    ],
    fallback: false,
  };
};

type contextProps = {
  params: { code: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
};

export const getStaticProps = async (context: contextProps) => {
  const { code } = context.params;

  return {
    props: {},
  };
};
