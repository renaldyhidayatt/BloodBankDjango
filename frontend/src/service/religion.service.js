import AxiosInstance from "../helpers/config";

export const religionService = {
  ReligionList,
  ReligionUpdate,
  ReligionDelete,
  ReligonDetail,
};

function ReligionList() {
  return AxiosInstance().get("/api/agent/religion");
}

function ReligonDetail(id) {
  return AxiosInstance().get(`/api/agent/religion/${id}`);
}

function ReligionUpdate(id, data) {
  return AxiosInstance().get(`/api/agent/religion/${id}`, data);
}

function ReligionDelete(id) {
  return AxiosInstance().delete(`/api/agent/religion/${id}`);
}
