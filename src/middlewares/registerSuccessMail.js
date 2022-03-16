import nodemailer from 'nodemailer';

const registerSuccessMail = (req, res, next) => {
    const email = req.body.email

    const output = `
        <p>You have registered with the following credentials</p>
        <ul>
             <li>First Name : ${req.body.firstName}</li>
             <li>Last Name : ${req.body.lastName}</li>
             <li>Mobile :${req.body.mobile}</li>
             <li>Email ${req.body.email}</li>
        </ul>
    `


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
        subject: 'Register Success',
        text: 'Hello World',
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

    next();

}


export default registerSuccessMail;