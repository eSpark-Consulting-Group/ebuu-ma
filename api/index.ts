import { create } from "apisauce";

// const USER_TOKEN: any = userStore?.token?.get();
const BASE_URL: string = "http://192.168.18.14:3000/";

export const api = create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: USER_TOKEN ? `Bearer ${USER_TOKEN}` : "",
  },
});

export const xApi = create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "secret-key":
      "$2b$05$ky1vYfR2/ONKyeE56lt8deqTxfyEusNm8QJBMD6418cv2cLoPsyA2",
  },
});
