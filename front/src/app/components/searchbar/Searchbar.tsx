import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
// import {
//   SearchBarContainer,
//   Input,
//   ButtonSearch,
//   ImageContainer,
// } from "./Searchbar.styles";
import {
  ButtonSearch,
  ImageContainer,
  Input,
  SearchBarContainer,
} from "./Searchbar.styles.tailwind";
import Image from "next/image";
import { ButtonProfile } from "../buttons";
import logo from "@/utils/icon.png";

const Searchbar: React.FC = (): JSX.Element => {
  return (
    <SearchBarContainer>
      <Link href="/">
        <ImageContainer>
          <Image
            src={logo}
            className="h-12 w-auto me-2"
            alt="BuyMe Logo"
            width={500}
            height={500}
          />
          <p className="self-center text-3xl text-textColor font-semibold whitespace-nowrap">
            BuyMe
          </p>
        </ImageContainer>
      </Link>
      <div className="flex flex-row h-full w-[55%] lg:w-[75%]">
        <Input />
        <ButtonSearch>Search</ButtonSearch>
      </div>
      <div className="">
        <ButtonProfile />
      </div>
      <Link href="/cart">
        <FaCartShopping
          className="w-auto h-11 cursor-pointer"
          style={{ color: "var(--secondaryColor)" }}
        />
      </Link>
    </SearchBarContainer>
  );
};

export default Searchbar;
