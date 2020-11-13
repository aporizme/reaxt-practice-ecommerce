//need to "firebase deploy --only functions" in functions
import axios from "axios";

const instance = axios.create({
  //change this baseURL and paste the api from functions of firebase
  baseURL: "http://localhost:5001/e-commerce-react-practice/us-central1/api", //THE API URL
});

export default instance;
