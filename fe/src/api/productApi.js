import { get } from "lodash";
import axiosClient from "./axiosClient";

const productApi = {
  getAllProduct(query) {
    const url = `/api/v1/products?${query}`;
    return axiosClient.get(url);
  },
  getProductId(id) {
    const url = `/api/v1/products/${id}`;
    return axiosClient.get(url);
  },
  getBrand() {
    const url = `/api/v1/brands`;
    return axiosClient.get(url);
  },
  getCategory() {
    const url = `/api/v1/categories`;
    return axiosClient.get(url);
  }
};
export default productApi;
