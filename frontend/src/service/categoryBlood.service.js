import AxiosInstance from "../helpers/config";

export const categoryService = {
  categoryBloodList,
};

function categoryBloodList() {
  return AxiosInstance().get("/api/donor/category");
}
