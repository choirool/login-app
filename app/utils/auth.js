import { SecureStorage } from "@nativescript/secure-storage";

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