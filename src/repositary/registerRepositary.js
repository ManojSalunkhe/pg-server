import { Register } from "../model/registration.js"
import bcrypt from 'bcryptjs'


export const registerRepositary = async (data) => {
    try {
        let postData = new Register(data);
        let securePassword = await bcrypt.hash(data.password, 10);
        postData.password = securePassword;
        const result = await postData.save();
        return result
    } catch (err) {
        console.log('here error',err)
        return err
    }
}