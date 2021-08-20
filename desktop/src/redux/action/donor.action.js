import { toast } from "react-toastify";
import { donorService } from "../../service/donor.service";

export const donorList = () => {
  return (dispatch) => {
    donorService
      .DonorList()
      .then((res) => {
        console.log(res.data.results);
        dispatch({
          type: "LIST_DONOR",
          payload: {
            data: res.data.results,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: "LIST_DONOR",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const donorCreate = (data, history) => {
  return (dispatch) => {
    donorService
      .DonorCreate(data)
      .then((res) => {
        dispatch({
          type: "CREATE_DONOR",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        toast.success("Successfully Create DONOR", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        history.push("/admin/donor");
      })
      .catch((error) => {
        dispatch({
          type: "CREATE_DONOR",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const donorUpdate = (id, data, history) => {
  return (dispatch) => {
    donorService
      .DonorUpdate(id, data)
      .then((res) => {
        dispatch({
          type: "UPDATE_DONOR",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        history.push("/admin/donor");
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_DONOR",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const donorDetail = (id) => {
  return (dispatch) => {
    donorService
      .DonorDetail(id)
      .then((res) => {
        dispatch({
          type: "DETAIL_DONOR",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        console.log(res.data);
      })
      .catch((error) => {
        dispatch({
          type: "DETAIL_DONOR",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const donorDelete = (id) => {
  return (dispatch) => {
    donorService
      .DonorDelete(id)
      .then((res) => {
        dispatch({
          type: "DELETE_DONOR",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        toast.success(`Bisa Delete ${id}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_AGENT",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
