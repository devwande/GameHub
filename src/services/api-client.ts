import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
 //const axiosInstance is declaring it as a local constant in this module
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e7ff4816be3c4c708867208b7e44bcba",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
