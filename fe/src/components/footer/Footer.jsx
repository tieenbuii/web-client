import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-black bg-white mt-5 px-[8px] md:px-[20px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 pb-4">
          {/* <div>
            <h2 className="text-lg font-semibold mb-4">Tải ứng dụng</h2>
            <div className="flex items-center space-x-4">
              <Link to={"/"}>
                <img src="/images/googleplay.png" alt="Google Play" />
              </Link>
              <Link to={"/"}>
                <img src="/images/appstore.png" alt="App Store" />
              </Link>
            </div>
          </div> */}
            <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold">PINE perfume</span>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <Link
                to="/about"
                className="pb-3 text-base hover:text-primary"
              >
                <span>Giới thiệu</span>
              </Link>
              <Link
                to="/contact"
                className="pb-3 text-base hover:text-primary"
              >
                <span>Liên hệ</span>
              </Link>
              <Link
                to="/product"
                className="pb-3 text-base hover:text-primary"
              >
                <span>Sản phẩm</span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Hỗ trợ</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Trung tâm hỗ trợ
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Theo dõi đơn hàng của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Tài khoản của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Liên hệ chúng tôi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Thông tin</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Công ty
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Tin tức &amp; Bài báo
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Thông báo pháp lý
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quan hệ đối tác</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Theo dõi đơn hàng của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Tài khoản của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-blue-600">
                  Liên hệ chúng tôi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
