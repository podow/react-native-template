import axios from "../../util/api";

export const loginApi = data =>
  axios.post("/api/v1/login", data);
