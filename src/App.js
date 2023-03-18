import { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import { CashierContext } from "./context";
import ItemList from "./Datas/ItemList";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [qty, setQty] = useState(1);
  const [searchRes, setSearchRes] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Empty Search Result if input is empty
    if (search && search !== "") {
      // Search through Item List
      // TODO: MODIFY FILTER SO THAT IT'S NOT SHOWING ADDED ITEM
      let res = ItemList.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchRes(res);
    } else {
      setSearchRes([]);
    }
  }, [search]);

  const onAddItem = (item) => {
    // TODO: ADD Item to Product List
    // console.log("Adding item", item.name);
    setNewItem((prevItem) => [...prevItem, item]);
  };

  const dataContext = {
    newItem,
    setNewItem,
    total,
    setTotal
  };

  return (
    <div className="App pt-4 d-flex flex-column">
      <h1>
        <strong>Cashier App</strong>
      </h1>
      <h5>
        <strong>Search an Item:</strong>
      </h5>
      <div className="form-group px-5">
        <div className="relative">
          <input
            type="text"
            value={search}
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search !== "" && (
            <span
              onClick={() => setSearch("")}
              className={
                "absolute w-5 h-5 text-gray-600 flex justify-center items-center rounded-full cursor-pointer top-2 right-2 bg-gray-200"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          )}
        </div>
        {searchRes.length > 0 && (
          <div className="search-results mt-4">
            <h5 className="mb-4">
              <strong>Search Result:</strong>
            </h5>
            {searchRes.map((i) => (
              <div className="search-result" key={i.id}>
                <div className="flex-grow-1 text-start">{i.name}</div>
                <button
                  className="btn btn-primary"
                  onClick={() => onAddItem(i)}
                >
                  Add Product
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* 
        TODO: Pass data, and necessary functions to 
        add and remove currently selected items 
      */}
      <CashierContext.Provider value={dataContext}>
        <ProductList />
      </CashierContext.Provider>
    </div>
  );
}
