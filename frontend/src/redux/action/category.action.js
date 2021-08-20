import { categoryService } from "../../service/categoryBlood.service";

export const categoryBloodList = () => {
  return (dispatch) => {
    categoryService
      .categoryBloodList()
      .then((res) => {
        dispatch({
          type: "LIST_CATEGORY",
          payload: {
            data: res.data.results,
            erroMessage: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "LIST_CATEGORY",
          payload: {
            data: false,
            erroMessage: err.message,
          },
        });
      });
  };
};

export const categoryBloodDelete = (id) => {
  return (dispatch) => {
    categoryService
      .categoryBloodDelete(id)
      .then((res) => {
        dispatch({
          type: "DELETE_CATEGORY",
          payload: {
            data: res.data,
            erroMessage: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "DELETE_CATEGORY",
          payload: {
            data: false,
            erroMessage: err.message,
          },
        });
      });
  };
};
