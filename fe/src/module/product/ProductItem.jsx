import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";
const ProductItem = ({
  product,
  onClickItem,
  className = "",
  addToCompare,
  removeFromCompare,
  selected,
}) => {
  const handleRemove = (e, product) => {
    e.stopPropagation();
    removeFromCompare(product);
  };

  const handleAdd = (e, product) => {
    e.stopPropagation();
    addToCompare(product);
  };

  return (
    <div
      className={`group flex flex-col rounded-lg p-3 bg-white h-full mx-2 cursor-pointer  ${className}`}
      onClick={onClickItem}
    >
      <img
        src={
          product?.images[0] ||
          "https://lh3.googleusercontent.com/ZQFbZeosDa1ODQnaaunB72fejXPcl_hg7rfEcgVlZSkgtOTAHQH1M4RxVrH2cLN6gjqJvOAq1b8CeE92gjqDN2W3b2HsMkxb=rw"
        }
        alt=""
        className="w-full h-[180px] object-cover rounded-lg mb-5 transition-transform group-hover:scale-105"
      />
      <div className="flex flex-col flex-1">
        <h3 className="line-clamp-1 mb-2 text-lg font-medium hover:text-primary transition-all">
          {product?.title}
        </h3>
        {product?.inventory >= 5 && (
          <span className="sm:hidden h-2 text-tertiary font-medium mb-2 text-sm"></span>
        )}
        {product?.inventory < 5 && product?.inventory > 0 && (
          <span className="sm:h-auto h-10 text-tertiary font-medium mb-2 text-sm">
            Chỉ còn {product?.inventory} sản phẩm
          </span>
        )}
        {product?.inventory === 0 && (
          <span className="text-tertiary font-medium mb-2 text-sm">
            Sản phẩm hết hàng
          </span>
        )}
        {product?.inventory >= 5 && <span className="mb-8"></span>}
        <div className="flex items-center justify-between text-sm  mb-2">
          <span className="text-lg text-primary font-semibold">
            {formatPrice(product?.promotion)}
          </span>
          <span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-primary cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              ></path>
            </svg>
          </span>
        </div>
        <div></div>
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center">
            <span className="hidden sm:block text-sm line-through text-slate-400">
              {formatPrice(product?.price)}
            </span>

            <span className="sm:hidden text-sm line-through text-slate-400">
              {product?.price / 1000000 + " tr "}
            </span>
            <span className="text-blue text-sm"> - {product?.percent}%</span>
          </div> */}
          <div className="flex items-center">
            {product?.promotion !== product?.price ? (
              <>
                <span className="hidden sm:block text-sm line-through text-slate-400 mr-2">
                  {formatPrice(product?.price)}
                </span>

                <span className="sm:hidden text-sm line-through text-slate-400 mr-2">
                  {product?.price / 1000000 + " tr "}
                </span>

                <span className="text-blue text-sm">
                  {" "}
                  - {product?.percent}%
                </span>
              </>
            ) : (
              <>
                <span className="hidden sm:block text-sm invisible">--</span>
                <span className="sm:hidden text-sm invisible">--</span>
                <span className="text-sm invisible">--</span>
              </>
            )}
          </div>
          {/* {selected && selected.includes(product) ? (
            <button
              className="sm:p-2 text-red-600 border border-solid border-red-600 rounded-lg text-sm font-medium transition-all "
              onClick={(e) => handleRemove(e, product)}
            >
              Hủy
            </button>
          ) : (
            <button
              className="sm:p-2 text-secondary border border-solid border-green-600 rounded-lg text-sm font-medium transition-all"
              onClick={(e) => handleAdd(e, product)}
            >
              So sánh
            </button>
          )} */}
          <Link
            className="px-2 py-1 text-primary bg-white hover:text-white hover:bg-primary border border-solid border-primary rounded-lg text-sm font-medium transition-all"
            to={`/product/${product?.id}`}
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
