import axios from "axios";

//criando uma instância para pesonalizar a url e evitar repetição ao realizar as requests
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
