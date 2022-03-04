import { loginRepositary, getAccountRepositary } from '../repositary/loginRepositary.js'

export const loginService = async (credentials) => {
    const result = await loginRepositary(credentials)
    return result
}

export const getAccountService = async (token) => {
    const result = await getAccountRepositary(token)
    return result
}