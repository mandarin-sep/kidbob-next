import Kimbap from "@/public/assests/kimbap.svg";
import Hansik from "@/public/assests/hansik.svg";
import Jjajangmyun from "@/public/assests/jjajangmyun.svg";
import Pizza from "@/public/assests/pizza.svg";
import Hamburger from "@/public/assests/hamburger.svg";
import Dongggas from "@/public/assests/dongggas.svg";
import Dosirock from "@/public/assests/dosirock.svg";
import Cafe from "@/public/assests/cafe.svg";
import Store from "@/public/assests/store.svg";
import StyledFoodBtn from "./StyledFoodBtn";
import { mutate } from "swr";

const FoodBtn = () => {
  //버튼을 클릭하면 해당하는 버튼의 shopBsType에 해당하는 숫자가 store로 dispatch
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.id;
    mutate("/shopType", type);
  };
  return (
    <article className="flex absolute top-[2vh] left-[1vw] bg-white rounded-md shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] z-[999]">
      <StyledFoodBtn id="all" onClick={handleClick}>
        {"   "}
        전체 보기
      </StyledFoodBtn>
      <StyledFoodBtn id="12" onClick={handleClick}>
        <Kimbap width="16" height="16" />
        분식
      </StyledFoodBtn>
      <StyledFoodBtn id="13" onClick={handleClick}>
        <Hansik width="16" height="16" />
        한식
      </StyledFoodBtn>
      <StyledFoodBtn id="11" onClick={handleClick}>
        <Jjajangmyun width="16" height="16" />
        중식
      </StyledFoodBtn>
      <StyledFoodBtn id="15" onClick={handleClick}>
        <Pizza width="16" height="16" />
        피자
      </StyledFoodBtn>
      <StyledFoodBtn id="17" onClick={handleClick}>
        <Hamburger width="16" height="16" />
        패스트푸드
      </StyledFoodBtn>
      <StyledFoodBtn id="18" onClick={handleClick}>
        <Dongggas width="16" height="16" />
        돈까스
      </StyledFoodBtn>
      <StyledFoodBtn id="19" onClick={handleClick}>
        <Dosirock width="16" height="16" />
        도시락/죽
      </StyledFoodBtn>
      <StyledFoodBtn id="20" onClick={handleClick}>
        <Cafe width="16" height="16" />
        카페
      </StyledFoodBtn>
      <StyledFoodBtn id="23" onClick={handleClick}>
        <Store width="16" height="16" />
        편의점
      </StyledFoodBtn>
    </article>
  );
};

export default FoodBtn;
