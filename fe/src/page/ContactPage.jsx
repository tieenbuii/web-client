import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-white py-8 px-4 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3 leading-snug">
            Liên hệ với Pine Perfume
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Thông tin liên hệ */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                📍 Địa chỉ cửa hàng
              </h3>
              <p className="text-gray-600">
                Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận
                12, TP HCM.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                📞 Số điện thoại
              </h3>
              <p className="text-gray-600">028 6686 6486</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                📧 Email
              </h3>
              <p className="text-gray-600">pineperfume@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                🌐 Mạng xã hội
              </h3>
              <div className="flex space-x-4 mt-2 text-2xl">
                <a
                  href="#"
                  className="text-primary hover:text-blue-800"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-red-600 hover:text-red-800"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-800"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Gửi lời nhắn cho chúng tôi
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Nội dung liên hệ"
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
              >
                Gửi liên hệ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
