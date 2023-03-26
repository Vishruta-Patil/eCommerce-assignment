import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useProductList } from "../../context/productListContext";
import { useWishList } from "../../context/wishlistContext";
import {
  addToWishListHandler,
  deleteWishListHandler,
  getSingleProduct,
  deleteCartHandler,
  addToCart,
  getProductList,
  getCartItems,
} from "../../utils/handler";

import "./index.css";

export const SingleProduct = () => {
  const params = useParams();
  const navigate = useNavigate;
  const { productState, productDispatch } = useProductList();
  const { state, dispatch } = useWishList();
  const { singleProduct } = productState;

  useEffect(() => {
    getCartItems(dispatch)
    getSingleProduct(params.productId, productDispatch);
  }, []);

  const inCartHandler = (product) => {
    return state.cartData.some(
      (item) => item.product._id === product._id
    );
  };
  const inCart = inCartHandler(singleProduct);

  const inWishListHandler = (product) => {
    return state?.wishListData?.some(
      (item) => item.product._id === product._id
    );
  };
  const inWishlist = inWishListHandler(singleProduct);

  return (
    <div className="cart-display-container flex-column flex-center md-mg">
      <div className="item-container">
        <div>
          <img
            className="single-product-img"
            src={singleProduct.img_url}
            alt={singleProduct.img_name}
          />
        </div>
        <div className="product-content-container flex-column">
          <div className="single-product-cart-title black-color">
            {singleProduct.product_name}
          </div>
          <p className="description-product">{singleProduct.product_desc}</p>
          <div className="price-tag flex price-section">
            <div className="price-amount">₹{singleProduct.product_price}</div>
            <div className="duplicate-price-amount">₹3999</div>
            <div className="price-offer-cart primary-color">
              {singleProduct.product_offer}% off
            </div>
          </div>

          {inCart ? (
            <button
              className="hero-btn remove-cart-btn single-product-hero-btn"
              onClick={() => deleteCartHandler(singleProduct, dispatch)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="hero-btn remove-cart-btn single-product-hero-btn"
              onClick={() => addToCart(singleProduct, dispatch, navigate)}
            >
              Add to Cart
            </button>
          )}

          {!inWishlist ? (
            <button
              className="outline-btn add-wishlist-btn"
              onClick={() =>
                addToWishListHandler(singleProduct, dispatch, navigate)
              }
            >
              Add to Wishlist
            </button>
          ) : (
            <button
              className="outline-btn add-wishlist-btn"
              onClick={() => deleteWishListHandler(dispatch, singleProduct._id)}
            >
              Delete from Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
