const DetailProduct: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <button
      className="bg-mainColorLight hover:bg-secondaryColor text-background_light font-bold py-2 px-4 rounded mb-2 w-full"
      style={style}
    >
      {children}
    </button>
  );
};

export default DetailProduct;
