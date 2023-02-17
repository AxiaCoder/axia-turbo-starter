import { AxiosError } from "axios";
import { ApiErrorData } from "../api";

export class ApiErrors extends Error {
  constructor(e: AxiosError<ApiErrorData> | unknown) {
    let message = "";
    if (!(e instanceof AxiosError)) {
      message = "error";
    } else {
      message = e.response?.data.message ?? "error";
    }
    super(message);
  }
}
