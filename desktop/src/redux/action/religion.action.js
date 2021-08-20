import { religionService } from "../../service/religion.service";
import { toast } from "react-toastify";

export const ListReligion = () => {
  return (dispatch) => {
    religionService
      .ReligionList()
      .then((res) => {
        dispatch({
          type: "LIST_RELIGION",
          payload: {
            data: res.data.results,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "LIST_RELIGION",
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
        toast.error(err.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const UpdateReligion = (id, data) => {
  return (dispatch) => {
    religionService
      .ReligionUpdate(id, data)
      .then((res) => {
        dispatch({
          type: "UPDATE_RELIGION",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "UPDATE_RELIGON",
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
        toast.error(err.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const DeleteReligion = (id) => {
  return (dispatch) => {
    religionService
      .ReligionDelete(id)
      .then((res) => {
        dispatch({
          type: "DELETE_RELIGION",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "DELETE_RELIGION",
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
        toast.error(err.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
