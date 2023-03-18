import { useContext } from "react";
import { CashierContext } from "../context";
import "../styles.css";
import Product from "./Product";

// TODO: Populate data dynamically
// Add onClick on every button
// const ProductList = (props) => {
const ProductList = () => {
  const context = useContext(CashierContext);
  const newArray = context.newItem.map((i) => i);
  return (
    <div className="prod-list mt-4">
      <div className="prod-list-wrap">
        <h3 className="mb-0">
          <strong>Product List:</strong>
        </h3>
        <div className="listing prod-scroll">
          {/* Replace this with dynamic function */}
          {newArray.map((i) => {
            return <Product key={i.id} itemShow={i} />;
          })}
        </div>
      </div>
      <div className="total">
        <h3 className="mb-0 flex-grow-1 text-start">
          <strong>Total:</strong>
        </h3>
        {/* Total item prices */}
        <h3 className="mb-0 px-3 text-primary">
          {/* <strong>Rp 55000</strong> */}
          <strong>Rp 0</strong>
        </h3>
      </div>
    </div>
  );
};

export default ProductList;
