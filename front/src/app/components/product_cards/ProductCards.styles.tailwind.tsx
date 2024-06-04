const ProductCardsContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="grid 2xl:grid-cols-3 gap-5 justify-items-center my-10 mx-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {children}
    </div>
  );
};

export { ProductCardsContainer };
