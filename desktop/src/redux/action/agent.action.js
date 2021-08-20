import { toast } from "react-toastify";
import { agentService } from "../../service/agent.service";

export const agenList = () => {
  return (dispatch) => {
    agentService
      .AgentList()
      .then((res) => {
        console.log(res.data.results);
        dispatch({
          type: "LIST_AGENT",
          payload: {
            data: res.data.results,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: "LIST_AGENT",
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

export const agentCreate = (data, history) => {
  return (dispatch) => {
    agentService
      .AgentCreate(data)
      .then((res) => {
        dispatch({
          type: "CREATE_AGENT",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        history.push("/admin/agent");
      })
      .catch((error) => {
        dispatch({
          type: "CREATE_AGENT",
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

export const agentUpdate = (id, data, history) => {
  return (dispatch) => {
    agentService
      .AgentUpdate(id, data)
      .then((res) => {
        dispatch({
          type: "UPDATE_AGENT",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        history.push("/admin/agent");
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_AGENT",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const AgentDetail = (id) => {
  return (dispatch) => {
    agentService
      .AgentDetail(id)
      .then((res) => {
        dispatch({
          type: "DETAIL_AGENT",
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
        console.log(res.data);
      })
      .catch((error) => {
        dispatch({
          type: "DETAIL_AGENT",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const AgentDelete = (id) => {
  return (dispatch) => {
    agentService
      .AgentDelete(id)
      .then((res) => {
        dispatch({
          type: "DELETE_AGENT",
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
