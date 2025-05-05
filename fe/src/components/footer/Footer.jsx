import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-black bg-white mt-5">
      <div className="container px-[8px] md:px-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 pb-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">PINE PERFUME</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/about"} className="text-base hover:text-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="text-base hover:text-primary">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Hỗ trợ</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Các câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Cách thức mua hàng
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Hướng dẫn đặt hàng
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Phương thức thanh toán
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Liên hệ</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Hoạt động: 8h - 22h (Thứ 2 - Thứ 7)
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Địa chỉ: Công viên phần mềm Quang Trung
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Hotline: 0399311529
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-base hover:text-primary">
                  Email: pineperfumenuochoa@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">NƯỚC HOA</h2>
            <ul className="space-y-2">
              <li>
                <Link to={"/product?category=67e0fc5050015c93013a1f09&limit=20&page=1&promotion_gte=0&promotion_lte=100000000&sort=promotion"} className="text-base hover:text-primary">
                  Nước hoa nam
                </Link>
              </li>
              <li>
                <Link to={"/product?category=67e0fc5850015c93013a1f12&limit=20&page=1&promotion_gte=0&promotion_lte=100000000&sort=promotion"} className="text-base hover:text-primary">
                  Nước hoa nữ
                </Link>
              </li>
              <li>
                <Link to={"/product?category=67e0fc5e50015c93013a1f1b&limit=20&page=1&promotion_gte=0&promotion_lte=100000000&sort=promotion"} className="text-base hover:text-primary">
                  Nước hoa unisex
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary py-1 text-sm text-center text-white">
        Copyright 2025 © PINE perfume. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
