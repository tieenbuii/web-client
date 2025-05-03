import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-black bg-white mt-5 px-[8px] md:px-[20px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 pb-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">Về chúng tôi</h2>
            <div className="flex items-center space-x-4">
              <Link to={"/"}>
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Hỗ trợ</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Trung tâm hỗ trợ
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Theo dõi đơn hàng của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Tài khoản của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Liên hệ chúng tôi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Thông tin</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Công ty
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Tin tức &amp; Bài báo
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Thông báo pháp lý
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quan hệ đối tác</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Theo dõi đơn hàng của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Tài khoản của bạn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
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
