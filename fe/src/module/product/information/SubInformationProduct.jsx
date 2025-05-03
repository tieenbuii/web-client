import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";
// import {
//   // FacebookShareButton,
//   PinterestShareButton,
//   TwitterShareButton,
// } from "react-share";
const SubInformationProduct = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);
  const handleAddCart = () => {
    const action = addToCart({
      id: data._id,
      product: data,
      quantity: 1,
    });
    dispatch(action);
  };
  const handleBuy = () => {
    const action = addToCart({
      id: data._id,
      product: data,
      quantity: 1,
    });
    dispatch(action);
    navigate("/cart");
  };
  return (
    <div className="product-info flex flex-col p-6 relative">
      <span
        className="text-xl font-semibold mb-2 line-clamp-2 cursor-pointer"
        title={data?.title}
      >
        {data?.title}
      </span>
      <div className="flex items-center justify-start gap-x-5 mb-4">
        <span className="text-base text-black">
          Thương hiệu:{" "}
          <span className="font-semibold">{data?.brand?.name}</span>
        </span>
        <span>|</span>
        <span className="text-base text-black short-edit">
          SKU: <span className="font-semibold">{data?._id}</span>
        </span>
      </div>
      <div className="text-base text-black  mb-4">
        Mùa khuyên dùng: <span className="font-semibold">{data?.season}</span>
      </div>
      <div className="text-base text-black  mb-4">
        Dung tích: <span className="font-semibold">{data?.capacity} ml</span>
      </div>
      {data?.inventory > 0 && data?.inventory < 5 && (
        <span className="text-tertiary font-medium mb-4">
          Chỉ còn {data?.inventory} sản phẩm
        </span>
      )}
      {data?.inventory === 0 && (
        <span className="text-tertiary font-medium mb-4">
          Sản phẩm hết hàng
        </span>
      )}
      {/* <span className="text-2xl font-semibold text-primary mb-2">
        {formatPrice(data?.promotion)}
      </span>
      <div className="flex items-center mb-6">
        <span className="text-lg line-through text-slate-400 mr-3">
          {formatPrice(data?.price)}
        </span>
        <span className="text-blue text-lg"> - {data?.percent}%</span>
      </div> */}
      <span className="text-2xl font-semibold text-primary mb-2">
        {formatPrice(data?.promotion)}
      </span>

      {data?.promotion !== data?.price && (
        <div className="flex items-center mb-6">
          <span className="text-lg line-through text-slate-400 mr-3">
            {formatPrice(data?.price)}
          </span>
          <span className="text-blue text-lg">- {data?.percent}%</span>
        </div>
      )}
      {/* <span className="w-full border-dotted border-2 mb-6"></span> */}
      {data?.inventory > 0 && (
        <>
          <div className="flex items-center justify-between px-10 option">
            <button
              className="grow py-3 text-center bg-primary text-white text-lg font-medium rounded-md w-[220px] edit mr-2"
              type="button"
              onClick={handleBuy}
            >
              MUA NGAY
            </button>
            <button
              className="px-3 py-3  text-primary text-lg font-medium rounded-md border-2 border-primary edit"
              type="button"
              onClick={handleAddCart}
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
          {/* <span className="w-full border-dotted border-2 my-6"></span> */}
        </>
      )}
    </div>
  );
};

export default SubInformationProduct;
