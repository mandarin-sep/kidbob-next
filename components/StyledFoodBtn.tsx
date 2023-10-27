import React, { Children } from "react";
interface Props {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
}

const StyledFoodBtn = ({ children, onClick, id }: Props) => {
  return (
    <button
      className="hover:text-blue-800 font-semibold rounded-none bg-transparent px-3 pt-3.5 pb-3.5 text-sm"
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};

export default StyledFoodBtn;
