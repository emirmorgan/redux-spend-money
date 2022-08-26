import Item from "./Item";
import { useSelector } from "react-redux";

function ItemList() {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="row mt-4">
      {console.log(typeof products)}
      {products.map((product, index) => (
        <Item
          key={index}
          itemImage={product.image}
          itemPrice={product.productPrice}
          itemName={product.productName}
        />
      ))}
    </div>
  );
}

export default ItemList;
