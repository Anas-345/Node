import axios from "axios";
import { toastNotification } from "./notifications";

export async function sendRequest(endpoint, user, path, navigate) {
  const msg = await axios.post(`http://localhost:3000/${endpoint}`, user);
  toastNotification(msg.data);
  if (msg.data.type === "success") {
    navigate(path);
  }
}
