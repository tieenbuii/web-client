import { Collapse } from "antd";
const { Panel } = Collapse;

const faqData = [
  {
    question: "Làm thế nào để kéo dài độ lưu hương của nước hoa khi dùng?",
    answer: `Bí quyết để có một mùi hương nước hoa bám lâu hơn trên da đó là "Layering", bằng cách sử dụng các dạng khác nhau của cùng một loại hương thơm như xà bông, dầu tắm, gel, sữa dưỡng thể, kem dưỡng thể hoặc là nước hoa cho tóc cùng với loại nước hoa bạn đang dùng. Ngày nay, nắm bắt được tâm lý của khách hàng, rất nhiều hãng nước hoa cho ra đời các line sản phẩm đa dạng, có thể bán rời hoặc bán kèm, bán theo set, để khách hàng có thể sử dụng được các sản phẩm theo cùng mùi hương mà mình yêu thích, từ đó có thể tăng cường độ bám mùi hương trên cơ thể.
    Một cách phổ biến và dễ sử dụng nhất đó là dùng kem dưỡng thể mùi nước hoa (Body Lotion), kem dưỡng thể giữ được độ ẩm trên da, xịt nước hoa lên phần thoa kem dưỡng thể sẽ khiến nước hoa bám được tốt hơn nhiều lần. Một số cách khác như xịt nước hoa lên quần áo, lên tóc cũng có thể cải thiện phần nào độ lưu hương của nước hoa, tuy nhiên nó không đảm báo được sự chính xác, bởi quần áo có thể chịu nhiều tác động từ bên ngoài, và xịt nước hoa lên tóc có thể khiến tóc bị khô và hư tổn nếu không chăm sóc kỹ.`,
  },
  {
    question: "Bảo quản nước hoa như thế nào là đúng cách?",
    answer:
      "Hãy luôn giữ nước hoa của bạn ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và các nguồn tỏa nhiệt. Nhiệt độ quá cao hoặc quá lạnh sẽ làm đảo lộn sự cân bằng tinh tế của các nhóm hương dẫn đến việc thay đổi mùi hương của chúng. Khi nước hoa được mở ra và sử dụng, việc bay hơi của nước hoa tuy ko nhiều nhưng cũng sẽ xuất hiện, do đó, nơi tốt nhất để lưu giữ nước hoa là trong các tủ kệ nơi mát mẻ, ngăn kéo.",
  },
  {
    question: "Tôi nên xịt nước hoa ở chỗ nào trên cở thể?",
    answer:
      "Theo một số nghiên cứu, nơi nào da có thân nhiệt ấm áp và nơi có lưu thông các mạch máu tốt là nơi nên dùng nước hoa, bởi nhiệt độ sẽ giúp khuếch tán và phóng đại mùi hương của nước hoa. Bên cạnh đó, các mạch máu tạo ra các xung nhịp trên cơ thể, giúp kích hoạt hoàn hảo cho nước hoa. Một số điểm thích hợp để sử dụng nước hoa như Cổ tay, Khuỷu tay, khuỷu chân, sau tai, dưới cổ họng. Phần sau gáy ngay trên chân tóc là nơi có nhiệt độ và phạm vi tỏa mùi hương rất tốt, nên đó cũng là một vị trí rất tuyệt vời để sử dụng nước hoa.",
  },
  {
    question: "Nhiều nơi pha trộn giữa nước hoa giả và thật để bán?",
    answer:
      "Điều này hoàn toàn không có thật, bởi nước hoa được thiết kế với các thành phần mùi hương phức tạp, tinh xảo bởi các chuyên gia nước hoa hàng đầu cùng với các thương hiệu danh tiếng, việc pha trộn nước hoa chính hãng và nước hay với nước hoa giả sẽ khiến mùi hương bị thay đổi, biến dạng, không còn giữ được các mùi hương chính xác.",
  },
  {
    question: "Hạn sử dụng của nước hoa là bao lâu?",
    answer:
      "Có rất nhiều bộ sưu tập nước hoa cổ, điều đó củng cố thêm thông tin rằng hạn sử dụng của nước hoa là rất lâu, thậm chí nếu bảo quản đúng cách nó sẽ không hư hỏng. Một số hãng in trên bao bì chai nước hoa hạn sử dụng là 24 đến 36 tháng tính từ thời điểm chai nước hoa đó được sử dụng, đó có thể là một khuyến cáo về thời gian sử dụng tốt nhất của chai nước hoa đó, và cũng có một số hãng được yêu cầu phải ghi hạn sử dụng theo quy định của một số quốc gia đối với các sản phẩm được lưu hành. Do đó việc hạn sử dụng nước hoa là bao lâu tùy thuộc rất lớn vào việc bạn bảo quản nó như thế nào.",
  },
];

export default function FaqPage() {
  return (
    <section className="bg-white py-8 px-4 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3 leading-snug">
            Câu hỏi thường gặp
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Những thắc mắc phổ biến của khách hàng khi mua nước hoa tại Pine
            Perfume.
          </p>
        </div>

        <Collapse
          accordion
          bordered={false}
          className="bg-white rounded-xl shadow-lg"
          expandIconPosition="right"
        >
          {faqData.map((item, index) => (
            <Panel
              header={
                <span className="text-lg sm:text-xl font-medium text-gray-800">
                  {item.question}
                </span>
              }
              key={index}
            >
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </section>
  );
}
