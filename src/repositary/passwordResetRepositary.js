import { Register } from "../model/registration.js";
import { Otp } from "../model/otp.js";
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';

export const forgotPasswordRepositary = async (data) => {
    let email = data.email;
    try {
        const userMail = await Register.findOne({
            email: email
        })

        if (userMail) {
            let otpCode = Math.floor(Math.random() * 10000 + 1);
            let otpData = new Otp({
                email: email,
                otp: otpCode
            })
            let result = await otpData.save();
            mailer(email, otpCode);
            return result;
        } else {
            return 'Specified email does not exist'
        }

    } catch (err) {
        return err
    }
}


const mailer = (email, otp) => {

    const output = `
    <ul>
        <li>Email : ${email}</li>
        <li>Otp : ${otp}</li>
    </ul>`

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'salunkhem807@gmail.com',
            pass: 'Oneplus@6t'
        }
    })


    let mailOptions = {
        from: '"Manoj" <salunkhem807@gmail.com>',
        to: email,
        subject: 'OTP for password reset',
        text: 'Thank you',
        html: output
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('err occured', error)
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.send('mail has been sent');
    })
}


export const resetPasswordRepositary     = async (data) => {

    let email = data.email;
    let otp = data.otp;


    const otpCheck = await Otp.findOne({email:email, otp : otp});

    console.log(otpCheck)
    if (otpCheck) {
        let user = await Register.findOne({
            email: email
        })

        if (!user) return 'Email is incorrect';

        let securePassword = await bcrypt.hash(data.password, 10);
        user.password = securePassword;
        const result = await user.save();
        if (result) return 'Password has been successfully updated';
    }
    else{
        return 'otp is invalid'
    }
}