import AxiosInstance from "../helpers/config";

export const donorService = {
  DonorList,
  DonorCreate,
  DonorUpdate,
  DonorDetail,
  DonorDelete,
};

function DonorList() {
  return AxiosInstance().get("/api/donor");
}

function DonorCreate(data) {
  return AxiosInstance().post("/api/donor/create", data);
}

function DonorDetail(id) {
  return AxiosInstance().get(`/api/donor/${id}`);
}

function DonorUpdate(id, data) {
  return AxiosInstance().put(`/api/donor/${id}`, data);
}

function DonorDelete(id) {
  return AxiosInstance().delete(`/api/donor/${id}`);
}
