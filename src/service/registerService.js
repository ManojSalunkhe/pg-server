import {registerRepositary} from '../repositary/registerRepositary.js'


export const registerService = async (data) => {
    const result = await registerRepositary(data)
    return result
}