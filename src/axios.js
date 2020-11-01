import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-commerce-react-practice/us-central1/api", //THE API URL
});

export default instance;
