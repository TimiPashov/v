import { login, register } from "../services/userService";



export function onDetailsClick(state, setState) {

    setState(!state);
}

export async function loginHandler(data) {

    const result = await login(data);
    if (result.code === 403) {
        throw new Error(result.message)
    }
    return result;
}

export async function registerHandler(data) {
    if (data.password != data.repass) {
        throw new Error('Passwords must match');
    }
    const result = await register(data);
    if (result.code === 409 || result.code === 400) {
        throw new Error(result.message)
    }
    return result;
}