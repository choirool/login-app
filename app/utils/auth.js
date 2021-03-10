import { SecureStorage } from "@nativescript/secure-storage";

const storage = new SecureStorage();

export function getToken() {
  return storage.getSync({
    key: "token"
  })
}

export function setToken(token) {
  return storage.setSync({
    key: "token",
    value: token
  })
}

export function removeToken() {
  return storage.removeSync({
    key: "token"
  })
}