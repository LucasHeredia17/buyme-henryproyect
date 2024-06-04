import Image from "next/image";

const ProductCardContainer: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div
      className="flex flex-col w-80 h-auto bg-background_light p-5 my-1 items-center justify-center rounded border border-secondary text-primary transition-transform hover:shadow-md hover:scale-105"
      style={style}
    >
      {children}
    </div>
  );
};

const ProductImageContainer: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div
      className="w-full h-3/4 flex justify-center items-center overflow-hidden"
      style={style}
    >
      {children}
    </div>
  );
};

const ProductImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}> = ({ src, alt, width, height, style }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className="w-4/5 cursor-pointer"
    />
  );
};

const ProductInfo: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div className="flex flex-col items-center justify-center" style={style}>
      {children}
    </div>
  );
};

const ProductTitle: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <h2
      className="text-xl font-bold m-3 text-mainColorLight text-center hover:text-secondaryColor hover:scale-110 hover:cursor-pointer"
      style={style}
    >
      {children}
    </h2>
  );
};

const ProductPrice: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <p className="text-xl font-bold m-2" style={style}>
      {children}
    </p>
  );
};

const ButtonContainer: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div
      className="flex justify-center items-center flex-col w-[90%]"
      style={style}
    >
      {children}
    </div>
  );
};

export {
  ProductCardContainer,
  ProductImageContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ButtonContainer,
};
