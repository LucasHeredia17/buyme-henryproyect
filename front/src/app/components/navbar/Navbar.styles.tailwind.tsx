import React from "react";

const HeaderContainer: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <header
      className="flex items-center text-center justify-between h-[40px] px-48 py-[0] bg-mainColorLight text-textColor"
      style={style}
    >
      {children}
    </header>
  );
};

const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="mx-4 my-[0] text-2xl lg:text-base text-textColor no-underline font-semibold cursor-pointer hover:text-textColorBlack lg:mx-6">
      {children}
    </span>
  );
};

export { HeaderContainer, Item };
