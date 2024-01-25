import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.rollog.engineering/v1/",
  timeout: 5000,
});

export default apiInstance;
