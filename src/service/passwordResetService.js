import { forgotPasswordRepositary, resetPasswordRepositary } from '../repositary/passwordResetRepositary.js'

export const forgotPasswordService = async (data) => {
    const result = await forgotPasswordRepositary(data);
    return result;
}

export const resetPasswordService = async(data)=>{
    const result = await resetPasswordRepositary(data);
    return result;
}