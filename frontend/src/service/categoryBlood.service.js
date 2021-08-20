import AxiosInstance from "../helpers/config";

export const categoryService = {
  categoryBloodList,
  categoryBloodDelete,
};

function categoryBloodList() {
  return AxiosInstance().get("/api/donor/category");
}

function categoryBloodDelete(id) {
  return AxiosInstance().delete(`/api/donor/category/${id}`);
}
