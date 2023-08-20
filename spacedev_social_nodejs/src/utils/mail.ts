import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { config } from "dotenv";
config();
interface MailOptionsRegisterType {
  email: string;
  linkVerify: string;
}

interface MailOptionsResetPasswordType {
  email: string;
  url: string;
}

const registerTemplateEmail = fs.readFileSync(
  path.join(__dirname, "../views/email-register.html"),
  "utf8"
);
const forgotPasswordTemplateEmail = fs.readFileSync(
  path.join(__dirname, "../views/email-reset-password.html"),
  "utf8"
);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ACCOUNT_MAIL,
    pass: process.env.PASSWORD_MAIL,
  },
});

export async function registerMail({
  email,
  linkVerify,
}: MailOptionsRegisterType) {
  let newTemplate = registerTemplateEmail.replace(/{LINK_VERIFY}/g, linkVerify);

  return await transporter.sendMail({
    from: "Admin of SpaceDev 👻", // sender address
    to: "thaibao.beu@gmail.com", // list of receivers
    subject: "Verify account", // Subject line
    html: newTemplate,
  });
}

// export async function resetPasswordMail({
//   email,
//   url,
// }: MailOptionsResetPasswordType) {
//   const info = await transporter.sendMail({
//     from: '"Reset password 👻" <foo@example.com>', // sender address
//     to: email, // list of receivers
//     subject: "Task manager reset password", // Subject line
//     html: `
//         <html>
//             <body>
//                 <h3>Reset Password</h3>
//                 <p>Hello,</p>
//                 <p>Please click the link below to reset your password:</p>
//                 <p><a href="${url}">Reset Password</a></p>
//                 <p>If you didn't request a password reset, you can safely ignore this email.</p>
//                 <p>Best regards,</p>
//                 <p>Task Manager Team</p>
//             </body>
//         </html>
//     `, // html body
//   });
//   return info;
// }
