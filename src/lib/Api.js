import axios from "axios";
import { Keys } from './keys'


const apiURL = Keys.APIURL
//const apiURL = 'http://192.168.18.30:3004/api/v1'
const API = axios.create({
  baseURL: apiURL,
  timeout: 60000,
});
export default API;
