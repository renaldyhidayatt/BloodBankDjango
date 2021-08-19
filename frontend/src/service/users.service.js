import AxiosInstance from "../helpers/config";

export const UserService = {
  UserList,
  UserByToken,

  UserUpdate,
  UserDelete,
};

function UserList() {
  return AxiosInstance().get(`/api/users`);
}

function UserByToken() {
  return AxiosInstance().get("/api/users/getUser");
}

function UserUpdate(id, data) {
  return AxiosInstance().put(`/api/users/${id}`, data);
}

function UserDelete(id) {
  return AxiosInstance().delete(`/api/users/${id}`);
}
