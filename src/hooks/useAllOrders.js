
import axiosInstance from "@/utility/axiosInstance";
import useSwr from "swr";
const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

const useAllOrders = () => {
  const { data, error, mutate, isLoading } = useSwr(`/orders`, fetcher);
  return {
    orders: data,
    isOrdersLoading: isLoading,
    isOrdersError: error,
    mutateOrders: mutate,
  };
};

export default useAllOrders;
