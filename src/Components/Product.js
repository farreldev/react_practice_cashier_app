import { useContext, useState } from "react";
import { CashierContext } from "../context";
import "../styles.css";

// TODO: Populate data dynamically
// Add onClick on every button
const Product = (props) => {
  const [count, setCount] = useState(1);
  const context = useContext(CashierContext);
  const { itemShow } = props;
  console.log(itemShow);

  function incItem(id, val) {
    console.log(val);
    setCount(val);
  }
  function decItem(id) {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function removeProd(id) {
    const refreshProd = context.newItem.filter(
      (item) => item.id !== itemShow.id
    );
    context.setNewItem(refreshProd);
  }

  return (
    <div className="product">
      {/* The image of the product */}
      <img
        // src="https://cf.shopee.co.id/file/5b774755289e8c04b21e8c2a8d44edf4"
        src={itemShow.image}
        className="prod-img"
        // alt="bimoli"
        alt={itemShow.name}
      />

      <div className="prod-info text-start">
        {/* The name of the product of the product */}
        <h5 className="prod-title">
          <strong>{itemShow.name}</strong>
        </h5>
        {/* Individual Prices of the product */}
        <div className="prod-price">Harga satuan: Rp {itemShow.price}</div>
      </div>

      <div className="prod-stock">
        {/* This will increase the stock */}
        <div className="d-flex align-items-center justify-content-center">
          <button onClick={decItem} className="btn btn-primary btn-stock">
            -
          </button>
          <span className="mx-3">
            <strong>{count}</strong>
          </span>
          <button
            onClick={() => incItem(itemShow.id, count + 1)}
            className="btn btn-primary btn-stock"
          >
            +
          </button>
        </div>
        {/* This is total prices (stock x individual prices) */}
        <span className="d-flex w-100 justify-content-center mt-3 mb-0">
          <strong>Rp {itemShow.price * count}</strong>
        </span>
      </div>

      <div className="prod-del ms-4">
        {/* This will remove an item from the list */}
        <button className="btn btn-del">
          <h3 className="mb-0 text-danger">
            <strong onClick={() => removeProd(itemShow.id)}>X</strong>
          </h3>
        </button>
      </div>
    </div>
  );
};

export default Product;
