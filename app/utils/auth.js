import { SecureStorage } from "@nativescript/secure-storage";
import axios from "redaxios";

const storage = new SecureStorage();

export const getToken = () => {
  return storage.getSync({
    key: "token"
  })
}

export const setToken = (token) => {
  return storage.setSync({
    key: "token",
    value: token
  })
}

export const removeToken = () => {
  return storage.removeSync({
    key: "token"
  })
}

export const getUser = async () => {
  const response = await axios
    .get(`${APP_URL}/api/user`, {
      headers: { accept: "application/json", Authorization: `Bearer ${getToken()}` },
    })

  return response;
}