import { UserDTO } from "../dtos/UserDTO";
import { USER_STORAGE, USER_TOKEN } from "./storageConfig";

export function setUserStorageAndToken(user: UserDTO, token: string) {
    localStorage.setItem(USER_STORAGE, JSON.stringify(user));
    localStorage.setItem(USER_TOKEN, token);
}

export function getUserStoraged() {
    const user = localStorage.getItem(USER_STORAGE);

    if (user) {
        return JSON.parse(user);
    }

    return null;
}

export function getTokenStoraged() {
    const token = localStorage.getItem(USER_TOKEN);

    if (token) {
        return token;
    }

    return null;
}


export function removeUserStorage() {
    localStorage.removeItem(USER_STORAGE);
}