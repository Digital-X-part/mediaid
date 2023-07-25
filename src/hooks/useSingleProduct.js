import axiosInstance from "@/utility/axiosInstance";
import useSwr from "swr";
const fetcher = (url) => axiosInstance.get(url).then(res => res.data)

const useSingleProduct = (id) => {
      const { data, error,mutate,isLoading } = useSwr(`/products/${id}`, fetcher);

  return {
      product: data,
      isProductLoading,
      isProductError: error,
      mutateProduct:mutate
  };
};

export default useSingleProduct;
