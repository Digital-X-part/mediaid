import axiosInstance from "@/utility/axiosInstance";
import useSwr from "swr";
const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

const useAllProducts = () => {
  const { data, error, mutate, isLoading } = useSwr(`/products`, fetcher);
  return {
    products: data,
    isProductsLoading: isLoading,
    isProductsError: error,
    mutateProducts: mutate,
  };
};

export default useAllProducts;
