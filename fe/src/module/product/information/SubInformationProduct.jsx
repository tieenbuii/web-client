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
        className="text-xl font-semibold mb-2 line-clamp-2"
        title={data?.title}
      >
        {data?.title}
      </span>
      <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-x-5 mb-4">
        <span className="text-base text-black mb-4 md:mb-0">
          Thương hiệu:{" "}
          <span className="font-medium">{data?.brand?.name}</span>
        </span>
        <span className="hidden md:block">|</span>
        <span className="text-base text-black short-edit">
          SKU: <span className="font-medium">{data?._id}</span>
        </span>
      </div>
      <div className="text-base text-black mb-4">
       Danh mục: <span className="font-medium">{data?.category?.name}</span>
      </div>
      <div className="text-base text-black  mb-4">
        Khuyên dùng: <span className="font-medium">Mùa {data?.season}</span>
      </div>
      <div className="text-base text-black  mb-4">
        Dung tích: <span className="font-medium">{data?.capacity} ml</span>
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
          <div className="flex items-center justify-between option">
            <button
              className="basis-1/2 py-3 text-center bg-primary text-white text-lg font-medium rounded-md w-[220px] edit mr-4"
              type="button"
              onClick={handleBuy}
            >
              MUA NGAY
            </button>
            <button
              className="basis-1/2 py-3  text-primary text-lg font-medium rounded-md border-2 border-primary edit"
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
