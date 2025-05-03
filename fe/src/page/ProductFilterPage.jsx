import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import FilterProduct from "../module/filter/FilterProduct";
import { useDispatch, useSelector } from "react-redux";
import { action_status } from "../utils/constants/status";
import { useEffect } from "react";
import { getBrand, getProductFilter } from "../redux/product/productSlice";
import { useState } from "react";
import Pagination from "react-js-pagination";
import FilterSort from "../module/filter/FilterSort";
import queryString from "query-string";
import FilterPrice from "../module/filter/FilterPrice";
import Accordion from "../components/accordion/Accordion";
import Filter from "../components/filter/Filter";
import { seasonData } from "../api/seasonData";
import { categoryData } from "../api/categoryData";
import { capacityData } from "../api/capacityData";
import BackToTopButton from "../components/backtotop/BackToTopButton";
import Skeleton from "../components/skeleton/Skeleton";
import SkeletonItem from "../components/skeleton/SkeletonItem";

const ProductFilterPage = () => {
  const params = queryString.parse(location.search);
  const { productFilter, statusFilter, totalPageFilter, statusBrand, brand } =
    useSelector((state) => state.product);
  const keyword = localStorage.getItem("keyword");

  const queryParams = useMemo(() => {
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
      limit: 20,
      sort: params.sort || "promotion",
      promotion_gte: params.promotion_gte || 0,
      promotion_lte: params.promotion_lte || 100000000,
    };
  }, [location.search]);

  const [page, setPage] = useState(queryParams.page);
  const [sort, setSort] = useState(queryParams.sort);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    try {
      let filters = queryParams;
      if (keyword) {
        filters = {
          ...queryParams,
          keyword: keyword,
        };
      }
      dispatch(getProductFilter(filters));
      setSort(queryParams.sort);
    } catch (error) {
      console.log(error.message);
    }
  }, [location.search]);

  useEffect(() => {
    try {
      if (statusBrand === action_status.IDLE) {
        dispatch(getBrand());
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const initFilter = {
    brand: params?.brand?.split(",") || [],
    category: params?.category?.split(",") || [],
    season: params?.season?.split(",") || [],
    capacity: params?.capacity?.split(",") || [],
  };

  const [filter, setFilter] = useState(initFilter);
  const getTotalItems = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      return 5;
    } else if (screenWidth >= 1024) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 2;
    }
  };
  const totalItem = getTotalItems();
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "Brands":
          setFilter({
            ...filter,
            brand: [...filter.brand, item.id],
          });
          break;
        case "Categorys":
          setFilter({
            ...filter,
            category: [...filter.category, item.id],
          });
          break;
        case "Seasons":
          setFilter({
            ...filter,
            season: [...filter.season, item.name],
          });
          break;
        case "Capacitys":
          setFilter({
            ...filter,
            capacity: [...filter.capacity, item.value],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "Brands":
          const newBrands = filter.brand.filter((e) => e !== item.id);
          setFilter({ ...filter, brand: newBrands });
          break;
        case "Categorys":
          const newCategorys = filter.category.filter((e) => e !== item.id);
          setFilter({ ...filter, category: newCategorys });
          break;
        case "Seasons":
          const newSeasons = filter.season.filter((e) => e !== item.name);
          setFilter({ ...filter, season: newSeasons });
          break;
        case "Capacitys":
          const newCapacitys = filter.capacity.filter((e) => e !== item.value);
          setFilter({ ...filter, capacity: newCapacitys });
          break;
        default:
      }
    }
  };

  const handlePageClick = (values) => {
    setPage(values);
    const filters = {
      ...queryParams,
      page: values,
    };
    navigate({
      pathname: "/product",
      search: queryString.stringify(filters),
    });
  };

  const handleClickSort = (values) => {
    setSort(values);
    setPage(1);
  };

  const handleChangePrice = (values) => {
    const filters = { ...queryParams, ...values, page: 1 };
    setPage(1);
    navigate({
      pathname: "/product",
      search: queryString.stringify(filters),
    });
  };

  useEffect(() => {
    if (
      filter.brand.length !== 0 ||
      filter.category.length !== 0 ||
      filter.season.length !== 0 ||
      filter.capacity.length !== 0
    ) {
      const filters = {
        ...queryParams,
        page: 1,
        ...filter,
      };
      setPage(1);
      navigate({
        pathname: "/product",
        search: queryString.stringify(filters, {
          arrayFormat: "comma",
        }),
      });
    } else {
      const filters = {
        ...queryParams,
        ...filter,
      };
      navigate({
        pathname: "/product",
        search: queryString.stringify(filters),
      });
    }
  }, [filter, queryParams]);

  return (
    <>
      <div className="px-[8px] md:px-[20px] mt-2 md:mt-3 lg:mt-5">
        <div className="container">
          {" "}
          <div className="flex items-center">
            <Link
              to="/"
              className=" text-base text-[#000] hover:text-primary flex items-center font-medium"
            >
              Trang chủ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mx-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <span className="text-base text-primary font-medium">
              Nước hoa chính hãng
            </span>
          </div>
          <div className="wrapper-product">
            {statusBrand === action_status.LOADING && (
              <>
                <div className="product-filter w-full  bg-white rounded-lg flex flex-col items-start">
                  <Skeleton className="h-3 w-1/2 rounded-lg ml-4" />
                  <div className="flex items-center justify-between p-4">
                    <Skeleton className="h-2 w-1/4 rounded-md" />
                    <Skeleton className="h-2 w-1/4 rounded-md" />
                  </div>
                  <div className="flex items-center justify-between px-4">
                    <Skeleton className="h-4 w-1/3 rounded-md" />
                    <Skeleton className="h-4 w-1/3 rounded-md" />
                  </div>
                  <Skeleton className="h-3 w-[250px] rounded-lg m-4" />
                  <div className="flex flex-col m-4">
                    <Skeleton className="h-3 w-1/2 rounded-md " />
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                  </div>
                  <div className="flex flex-col m-4">
                    <Skeleton className="h-3 w-1/2 rounded-md " />
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                  </div>
                  <div className="flex flex-col m-4">
                    <Skeleton className="h-3 w-1/2 rounded-md " />
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                  </div>
                  <div className="flex flex-col m-4">
                    <Skeleton className="h-3 w-1/2 rounded-md " />
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                      <Skeleton className="w-4 h-4 rounded-md" />
                      <Skeleton className="w-1/2 h-3 rounded-md" />
                    </div>
                  </div>
                </div>
              </>
            )}
            {statusBrand === action_status.SUCCEEDED && (
              <>
                {" "}
                <div className="product-filter w-full  bg-white rounded-lg flex flex-col  text-black">
                  <FilterPrice onChange={handleChangePrice} />
                  <Accordion title="Thương hiệu" className="true">
                    {brand.length > 0 &&
                      brand.map((item) => {
                        return (
                          <Filter
                            label={item.name}
                            key={item.id}
                            onChange={(input) => {
                              filterSelect("Brands", input.checked, item);
                            }}
                            checked={filter.brand.includes(item.id)}
                          />
                        );
                      })}
                  </Accordion>
                  {/* <Accordion title="Danh mục" className="true">
                    {categoryData.length > 0 &&
                      categoryData.map((item) => {
                        return (
                          <Filter
                            label={item.name}
                            key={item.id}
                            onChange={(input) => {
                              filterSelect("Categorys", input.checked, item);
                            }}
                            checked={filter.category.includes(item.name)}
                          />
                        );
                      })}
                  </Accordion> */}
                  <Accordion title="Danh mục">
                    {categoryData.length > 0 &&
                      categoryData.map((item) => {
                        return (
                          <Filter
                            label={`${item.name}`}
                            key={item.id}
                            onChange={(input) => {
                              filterSelect("Categorys", input.checked, item);
                            }}
                            checked={filter.category.includes(item.id)}
                          />
                        );
                      })}
                  </Accordion>
                  <Accordion title="Mùa khuyên dùng">
                    {seasonData.length > 0 &&
                      seasonData.map((item) => {
                        return (
                          <Filter
                            label={`${item.name}`}
                            key={item.id}
                            onChange={(input) => {
                              filterSelect("Seasons", input.checked, item);
                            }}
                            checked={filter.season.includes(item.name)}
                          />
                        );
                      })}
                  </Accordion>
                  <Accordion title="Dung tích (ml)">
                    {capacityData.length > 0 &&
                      capacityData.map((item) => {
                        return (
                          <Filter
                            label={item.name}
                            key={item.id}
                            onChange={(input) => {
                              filterSelect("Capacitys", input.checked, item);
                            }}
                            checked={filter.capacity.includes(item.value)}
                          />
                        );
                      })}
                  </Accordion>
                </div>
              </>
            )}
            <div className="w-[95vw] xl:w-auto product-list">
              {statusFilter === action_status.LOADING && (
                <div className="flex flex-col container rounded-lg bg-white">
                  <div className="flex items-center p-5 gap-x-5">
                    <Skeleton className="w-[100px] h-5 rounded-md" />
                    <Skeleton className="w-[80px] h-5 rounded-md" />
                    <Skeleton className="w-[80px] h-5 rounded-md" />
                  </div>

                  <SkeletonItem
                    className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5"
                    totalItem={totalItem}
                  />
                  <SkeletonItem
                    className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5"
                    totalItem={totalItem}
                  />
                  <SkeletonItem
                    className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5"
                    totalItem={totalItem}
                  />
                </div>
              )}
              {statusFilter === action_status.SUCCEEDED && (
                <>
                  <div className="flex flex-col container rounded-lg bg-white ">
                    <div className="flex items-center p-5 gap-x-5 ">
                      <span className="font-medium text-base ">
                        Sắp xếp theo
                      </span>
                      <FilterSort onChange={handleClickSort} />
                    </div>
                    <FilterProduct data={productFilter} />
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <Pagination
                      activePage={page}
                      nextPageText={">"}
                      prevPageText={"<"}
                      totalItemsCount={totalPageFilter}
                      itemsCountPerPage={1}
                      firstPageText={"<<"}
                      lastPageText={">>"}
                      linkClass="page-num"
                      onChange={handlePageClick}
                    />
                  </div>
                </>
              )}
              {statusFilter === action_status.FAILED && (
                <div className="w-[98vw] xl:w-auto">
                  <div className="h-[700px] bg-white flex items-center justify-center flex-col gap-y-6">
                    <img
                      src="../images/search.png"
                      alt=""
                      className="w-[200px]"
                    />
                    <span className="text-xl font-medium">
                      Không tìm thấy sản phẩm nào
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </>
  );
};

export default ProductFilterPage;
