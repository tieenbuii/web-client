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
        className="w-full h-[180px] object-cover rounded-lg transition-transform group-hover:scale-105 mb-4"
      />
      <div className="flex flex-col flex-1">
        <h3 className="line-clamp-1 mb-2 text-lg font-medium">
          {product?.title}
        </h3>
        {/* {product?.inventory >= 5 && (
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
        {product?.inventory >= 5 && <span className="mb-8"></span>} */}
        <div className="flex items-center justify-between text-sm  mb-2">
          <span className="text-lg text-primary font-semibold">
            {formatPrice(product?.promotion)}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              {...props}
              className="w-6 h-6 text-primary"
            >
              <path
                fill="currentColor"
                d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
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
            className="px-2 py-1 text-primary border border-solid border-primary rounded-lg text-sm font-medium transition-all"
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
