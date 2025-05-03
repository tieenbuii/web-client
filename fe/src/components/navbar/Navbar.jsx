import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Profile from "../profile/Profile";
import Swal from "sweetalert2";
import userApi from "../../api/userApi";
import { logout } from "../../redux/auth/userSlice";
import Cart from "../cart/Cart";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { getCart } from "../../redux/cart/cartSlice";
import CartHollow from "../cart/CartHollow";
import Search from "../search/Search";
import useClickOutSide from "../../hooks/useClickOutSide";
import useDebounce from "../../hooks/useDebounce";

const Navbar = () => {
  const loggedInUser = useSelector((state) => state.user.current);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bodyStyle = document.body.style;
  let isLocked = false;
  const hanleMouseOver = () => {
    if (!isLocked) {
      disableBodyScroll(bodyStyle);
      isLocked = true;
    }
  };
  const hanleMouseOut = () => {
    if (isLocked) {
      enableBodyScroll(bodyStyle);
      isLocked = false;
    }
  };

  const isLoggedIn =
    loggedInUser === null ? null : loggedInUser.active === "active";

  const handleLogout = () => {
    Swal.fire({
      title: "Đăng xuất ",
      text: "Bạn có chắc chắn muốn đăng xuất không ?",
      showCancelButton: true,
      icon: "question",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có",
      cancelButtonText: "Không",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const action = logout();
        dispatch(action);
        await userApi.logout();
        navigate("/");
        Swal.fire("Tạm biệt! Hẹn gặp lại quý khách");
      }
    });
  };

  // cart
  let { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!cart) {
      dispatch(getCart());
    }
  }, [cart]);

  //search
  const [keyword, setKeyWord] = useState("");
  const location = useLocation();
  const { show, setShow, nodeRef } = useClickOutSide();
  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    setKeyWord("");
    localStorage.setItem("keyword", keyword);
  }, [location.search]);

  const handleClickSearch = () => {
    if (keyword === "") return;
    localStorage.setItem("keyword", keyword);
    navigate(`/product/?keyword=${keyword}`);
    setShow(false);
  };

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  const search = useDebounce(keyword, 500);

  useEffect(() => {
    if (show === true) {
      // disableBodyScroll(bodyStyle);
    } else {
      enableBodyScroll(bodyStyle);
    }
  }, [show]);

  return (
    <nav className="max-w-full bg-white h-[100px] md:h-[120px] sticky z-[1001] shadow-md transition-all top-0 text-white -translate-y-0.5">
      <div className="container flex items-center h-[70%] justify-between px-[8px] md:px-[20px] py-3">
        <div className="flex items-center justify-center gap-4 md:gap-2">
          <div className="flex items-center justify-center gap-2">
            <Link to="/" className="flex items-center">
              <div className="w-auto md:hidden h-[40px] object-cover">
                <img
                  src="/images/logo-mobie.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                  title="Trang chủ"
                />
              </div>
            </Link>
          </div>
          <Link to="/" className="flex items-center">
            <div className="hidden md:block w-auto md:h-[35px] lg:h-[48px] object-cover">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-full object-cover"
                title="Trang chủ"
              />
            </div>
          </Link>
        </div>

        {/* <div
          className="max-w-full w-[100%] md:w-[530px] xl:w-[600px] flex items-center relative"
          ref={nodeRef}
        >
          <input
            type="text"
            className="py-1 md:py-3 px-4 rounded-l-lg text-base w-[80%] sm:w-[85%] xl:w-[600px] flex-shrink xl:flex-shrink-0 text-black"
            id="search"
            placeholder="Nhập tên nước hoa ..."
            onClick={handleClick}
            onChange={handleChange}
            value={keyword}
          />
          <div
            className="w-[50px] bg-primary h-[32px] md:h-[35px] lg:h-[48px] rounded-r-lg flex items-center justify-center cursor-pointer"
            onClick={handleClickSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          {keyword && show === true && (
            <Search onClickItem={handleClose} keyword={search} />
          )}
        </div> */}
        <div
          className="max-w-full w-[100%] md:w-[590px] xl:w-[650px] flex items-center relative"
          ref={nodeRef}
        >
          <input
            type="text"
            className="py-1 md:py-3 px-4 rounded-l-lg border-[1px] border-gray-400 text-base w-[80%] sm:w-[85%] xl:w-[600px] flex-shrink xl:flex-shrink-0 text-black"
            id="search"
            placeholder="Nhập tên nước hoa ..."
            onClick={handleClick}
            onChange={handleChange}
            value={keyword}
          />
          <div
            className="w-[50px] bg-primary h-[34px] md:h-[50px] border-[1px] border-primary rounded-r-lg flex items-center justify-center cursor-pointer"
            onClick={handleClickSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          {keyword && show === true && (
            <Search onClickItem={handleClose} keyword={search} />
          )}
        </div>
        {!isLoggedIn ? (
          <Link
            to="/sign-in"
            className="items-center justify-center text-black hover:text-primary flex mr-[5px] md:mr-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="px-2 font-medium text-base hidden lg:inline-block">
              Đăng nhập
            </span>
          </Link>
        ) : (
          <Profile data={loggedInUser} />
        )}

        <div className="relative items-center gap-x-3 cart-home cursor-pointer flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-primary cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="flex flex-col items-start justify-between">
            <span className="font-medium text-sm hidden lg:inline-block text-black">
              Giỏ hàng của bạn
            </span>
            <span className="font-medium text-sm hidden lg:inline-block text-black">
              <span className="text-primary mr-1">({cart?.length || 0})</span>
              <span>sản phẩm</span>
            </span>
          </div>
          {cart?.length > 0 ? <Cart /> : <CartHollow />}
        </div>
      </div>
      <div className="w-full bg-primary flex text-white items-center justify-center h-[30%]">
        <Link to="/" className="py-2 px-4 hover:text-secondary transition-all">
          Trang chủ
        </Link>
        <Link
          to="/about"
          className="py-2 px-4 hover:text-secondary transition-all"
        >
          Giới thiệu
        </Link>
        <Link
          to="/product"
          className="py-2 px-4 hover:text-secondary transition-all"
        >
          Sản phẩm
        </Link>
        <Link
          to="/contact"
          className="py-2 px-4 hover:text-secondary transition-all"
        >
          Liên hệ
        </Link>
        <Link
          to="/faq"
          className="py-2 px-4 hover:text-secondary transition-all"
        >
          Hỏi đáp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
