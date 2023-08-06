import axiosInstance from "@/utility/axiosInstance";
import useSwr from "swr";

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export const useAllUsers = () => {
  const { data, error, mutate, isLoading } = useSwr("/users", fetcher);
  return {
    users: data,
    isUserLoading: isLoading,
    isUserError: error,
    mutateUser: mutate,
  };
};
