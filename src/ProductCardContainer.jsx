export const ProductCardContainer = ({
  firstBtnName,
  secondBtnName,
  children,
}) => {
  return (
    <div>
      {children}
      <button>{firstBtnName}</button>
      <button>{secondBtnName}</button>
    </div>
  );
};
