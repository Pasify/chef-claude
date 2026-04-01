import { useMutation, useQueryClient } from "@tanstack/react-query";
import getRecipeFromHuggingFace from "../utilities/huggingFace";

function useRecipeGenerator() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (ingredients) => getRecipeFromHuggingFace(ingredients),
    onSuccess: (data) => {
      queryClient.setQueryData(["recipe"], data);
    },
  });
  return {
    generateRecipe: mutation.mutate,
    ...mutation,
  };
}
export default useRecipeGenerator;
