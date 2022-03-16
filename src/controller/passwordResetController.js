import { forgotPasswordService , resetPasswordService} from '../service/passwordResetService.js';

export const forgotPasswordController = async(req, res) => {
    const data = req.body;
    try{
        const result =  await forgotPasswordService(data);
        return res.json(result);
    }catch(err){
        return res.json(err);
    }
}


export const resetPasswordController = async(req,res)=>{
    const data = req.body;
    try{
        const result = await resetPasswordService(data);
        return res.json(result);
    }catch(err){
        return res.json(err);
    }
}