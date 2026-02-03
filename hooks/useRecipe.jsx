import { useQuery } from "@tanstack/react-query";

function useRecipe() {
  const { data, isSuccess, ...otherProps } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => null,
    enabled: false, // Don't fetch, just read from cache
  });
  return {
    data,
    isSuccess,
    ...otherProps,
  };
}
export default useRecipe;
