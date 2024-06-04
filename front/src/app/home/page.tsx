"use client";
import ProductCards from "@/app/components/product_cards";
import banner from "@/utils/banner.jpg";
import Image from "next/image";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Image
        src={banner}
        alt="banner"
        className="lg:w-[1000px] md:w-4/5 w-11/12 h-auto mx-auto mt-10"
        width={1000}
        height={300}
      />
      <ProductCards />
    </>
  );
};

export default Home;
