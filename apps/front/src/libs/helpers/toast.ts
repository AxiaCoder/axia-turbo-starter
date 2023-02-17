import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ApiErrorData } from "@axia/data";

export const toastError = (e: AxiosError<ApiErrorData> | unknown) => {
  let message = "";
  if (!(e instanceof AxiosError)) {
    message = "error";
  } else {
    message = e.response?.data.message ?? "error";
  }

  toast.error(message);
};
