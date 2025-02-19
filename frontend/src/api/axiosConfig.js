import axios from "axios";

let apiBase = import.meta.env.VITE_API_BASE_URL;

const API = axios.create({
  baseURL: apiBase,
});

export { API };
