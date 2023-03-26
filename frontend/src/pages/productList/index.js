import { useEffect, useState } from "react";
import Loader from "../../components/common/Loader";
import ProductCard from "../../components/common/ProductCard";
import { useProductList } from "../../context/productListContext";
import { useWishList } from "../../context/wishlistContext";
import { getProductList } from "../../utils/handler";
import { addToWishListHandler } from "../../utils/handler";
import Filter from "../../components/productList/Filter";

export const ProductList = () => {
  const { productState, productDispatch, filteredData } = useProductList();
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    getProductList(productDispatch);
  }, []);

  return (
    <div className="product-list-container">
      <Filter />

      <div className="product-container">
        {productState.loading ? (
          <Loader />
        ) : filteredData.length === 0 ? (
          <h2 className="header-wishlist">No Products Found</h2>
        ) : (
          filteredData.map((data, index) => (
            <ProductCard
              item={data}
              key={index}
              clickHandler={(item) => addToWishListHandler(item)}
            />
          ))
        )}
      </div>

      <div
        className="filter-mobile-bar"
        onClick={() => setFilterOpen(!filterOpen)}
      >
        <span className="material-icons"> expand_less </span>
        <p> Filter</p>
      </div>

      {filterOpen && <Filter filterOpen={filterOpen} />}
    </div>
  );
};
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
