import axiosInstance from "@/utility/axiosInstance";
import useSwr from "swr";
const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export const useAllOrders = () => {
  const { data, error, mutate, isLoading } = useSwr(`/orders`, fetcher);
  return {
    orders: data,
    isOrdersLoading: isLoading,
    isOrdersError: error,
    mutateOrders: mutate,
  };
};

export const useOrderFromUser = (id) => {
  const { data, error, mutate, isLoading } = useSwr(`/orders/${id}`, fetcher);
  return {
    orders: data,
    isOrdersLoading: isLoading,
    isOrdersError: error,
    mutateOrders: mutate,
  };
};
