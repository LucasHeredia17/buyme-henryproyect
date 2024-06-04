const AddToCart: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}> = ({ children, style, onClick }) => {
  return (
    <button
      className="bg-mainColorLight hover:bg-secondaryColor text-background_light font-bold py-2 px-4 rounded mb-2 w-full"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AddToCart;
