import { ProductCardContainer } from "./ProductCardContainer";
import { FirstProductCard } from "./FirstProductCard";
import { SecondProductCard } from "./SecondProductCard";

function App() {
  return (
    <div className="">
      <ProductCardContainer
        firstBtnName={"Add to card first"}
        secondBtnName={"Add to favorite first"}
      >
        <FirstProductCard />
      </ProductCardContainer>
      <hr />
      <ProductCardContainer
        firstBtnName={"Add to card second"}
        secondBtnName={"Add to favorite seond"}
      >
        <SecondProductCard />
      </ProductCardContainer>
    </div>
  );
}

export default App;
