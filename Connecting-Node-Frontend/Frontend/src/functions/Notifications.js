import { toast } from "react-toastify";

export function toastNotification({content, type}) {
    toast[type](content)
}