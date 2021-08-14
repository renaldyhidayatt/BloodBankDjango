export const urlApi = "http://localhost:8000";

export const authHeaders = () => {
  let user = JSON.parse(localStorage.getItem("token"));
  if (user && user.token) {
    const headers = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    return headers;
  } else {
    return {};
  }
};
