// import React from "react";
// import { useDispatch } from "react-redux";
// import { removeFromCart, setQuantity } from "../../redux/cart/cartSlice";
// import Swal from "sweetalert2";
// const QuantityCard = ({ data }) => {
//   const dispatch = useDispatch();
//   const handleDecreaseQuantity = (id, quantity) => {
//     const newQty = quantity - 1;
//     if (newQty <= 0) {
//       return;
//     }
//     const action = setQuantity({
//       id: id,
//       quantity: newQty,
//     });
//     dispatch(action);
//   };

//   const handleIncreaseQuantity = (id, quantity, inventory) => {
//     const newQty = quantity + 1;
//     if (newQty > inventory) {
//       return;
//     }
//     const action = setQuantity({
//       id: id,
//       quantity: newQty,
//     });
//     dispatch(action);
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Chú ý ",
//       text: "Bạn muốn xóa sản phẩm này ra khỏi giỏ hàng ?",
//       showCancelButton: true,
//       icon: "question",
//       cancelButtonColor: "#d33",
//       confirmButtonColor: "#3085d6",
//       cancelButtonText: "Hủy bỏ",
//       confirmButtonText: "Đồng ý",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         dispatch(removeFromCart(id));
//       }
//     });
//   };
//   return (
//     <div className="flex flex-col justify-center gap-y-3 items-center">
//       <div className="flex items-center">
//         <span
//           className="inline-block p-2 bg-[#f8f8fc] cursor-pointer"
//           onClick={() => handleDecreaseQuantity(data.id, data.quantity)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="bold"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-4 h-4"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
//           </svg>
//         </span>
//         <input
//           type="number"
//           value={data.quantity}
//           readOnly
//           // min={1}
//           className="p-1 bg-[#f8f8fc] w-[50px] text-center count"
//         ></input>
//         <span
//           className="inline-block p-2 bg-[#f8f8fc] cursor-pointer"
//           onClick={() =>
//             handleIncreaseQuantity(
//               data.id,
//               data.quantity,
//               data.product.inventory
//             )
//           }
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="bold"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-4 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v12m6-6H6"
//             />
//           </svg>
//         </span>
//       </div>
//       <span
//         className="text-sm font-semibold text-primary hover:text-red-700 cursor-pointer"
//         onClick={() => handleDelete(data.id)}
//       >
//         Xóa
//       </span>
//     </div>
//   );
// };

// export default QuantityCard;
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, setQuantity } from "../../redux/cart/cartSlice";
import Swal from "sweetalert2";

const QuantityCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (newQty < 1) return;

    dispatch(setQuantity({ id, quantity: newQty }));
  };

  const handleIncreaseQuantity = (id, quantity, inventory) => {
    const newQty = quantity + 1;
    if (newQty > inventory) return;

    dispatch(setQuantity({ id, quantity: newQty }));
  };

  const handleInputChange = (e, id, inventory) => {
    let value = e.target.value;

    // Cho phép xóa tạm thời input mà không crash
    if (value === "") {
      dispatch(setQuantity({ id, quantity: 1 }));
      return;
    }

    value = parseInt(value, 10);

    // Kiểm tra giá trị hợp lệ
    if (isNaN(value) || value < 1) {
      value = 1;
    } else if (value > inventory) {
      value = inventory;
    }

    dispatch(setQuantity({ id, quantity: value }));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Chú ý",
      text: "Bạn muốn xóa sản phẩm này ra khỏi giỏ hàng?",
      showCancelButton: true,
      icon: "question",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Hủy bỏ",
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
      }
    });
  };

  return (
    <div className="flex flex-col justify-center gap-y-3 items-center">
      <div className="flex items-center">
        <span
          className="inline-block p-2 bg-[#f8f8fc] cursor-pointer"
          onClick={() => handleDecreaseQuantity(data.id, data.quantity)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="bold"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </span>

        <input
          type="number"
          value={data.quantity}
          min={1}
          max={data.product.inventory}
          onChange={(e) =>
            handleInputChange(e, data.id, data.product.inventory)
          }
          className="p-1 bg-[#f8f8fc] w-[50px] text-center count"
        />

        <span
          className="inline-block p-2 bg-[#f8f8fc] cursor-pointer"
          onClick={() =>
            handleIncreaseQuantity(
              data.id,
              data.quantity,
              data.product.inventory
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="bold"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
      </div>

      <span
        className="text-sm font-semibold text-primary hover:text-red-700 cursor-pointer"
        onClick={() => handleDelete(data.id)}
      >
        Xóa
      </span>
    </div>
  );
};

export default QuantityCard;
