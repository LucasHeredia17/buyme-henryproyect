import React from "react";

const ImageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex justify-center items-center">{children}</div>;
};

const Input: React.FC = () => {
  return (
    <input
      className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-base outline-none"
      placeholder="Search..."
      type="text"
      name="search"
      id="search"
    />
  );
};

const ButtonSearch: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button className="bg-secondaryColor text-textColor font-semibold border border-secondaryColor px-4 py-2 rounded-r-md cursor-pointer text-base outline-none transition duration-200 hover:bg-secondaryColorStrong hover:border-secondaryColorStrong">
      {children}
    </button>
  );
};

const SearchBarContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex justify-between items-center xl:px-56 lg:px-32 md:px-28 bg-mainColor py-2 sm:px-14 px-6">
      {children}
    </div>
  );
};

export { ImageContainer, Input, ButtonSearch, SearchBarContainer };
