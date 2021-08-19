import AxiosInstance from "../helpers/config";
// import { authHeaders, urlApi } from "../helpers/config";
// import axiosInstance from '../helpers/config'
// import { authHeaders } from "../helpers/config";

export const agentService = {
  AgentList,
  AgentCreate,
  AgentUpdate,
  AgentDetail,
  AgentDelete,
};

function AgentList() {
  return AxiosInstance().get(`/api/agent`);
}

function AgentCreate(data) {
  return AxiosInstance().post(`/api/agent/create`, data);
}

function AgentUpdate(id, data) {
  return AxiosInstance().put(`/api/agent/${id}`, data);
}

function AgentDetail(id) {
  return AxiosInstance().get(`/api/agent/${id}`);
}

function AgentDelete(id) {
  return AxiosInstance().delete(`/api/agent/${id}`);
}
