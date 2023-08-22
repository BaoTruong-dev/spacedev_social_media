import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { config } from "dotenv";
config();
interface MailOptionsLinkType {
  email: string;
  link: string;
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

export async function registerMail({ email, link }: MailOptionsLinkType) {
  let newTemplate = registerTemplateEmail.replace(/{LINK_VERIFY}/g, link);

  return await transporter.sendMail({
    from: "Admin of SpaceDev 👻", // sender address
    to: "thaibao.beu@gmail.com", // list of receivers
    subject: "Verify your account Spacedev", // Subject line
    html: newTemplate,
  });
}

export async function resetPasswordMail({ email, link }: MailOptionsLinkType) {
  let newTemplate = forgotPasswordTemplateEmail.replace(/{LINK_RESET}/g, link);
  return await transporter.sendMail({
    from: '"Reset password 👻" <foo@example.com>', // sender address
    to: "thaibao.beu@gmail.com", // list of receivers
    subject: "Reset your password Spacedev", // Subject line
    html: newTemplate, // html body
  });
}
