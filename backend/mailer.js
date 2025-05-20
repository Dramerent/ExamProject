import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.MAIL_VERIFI_EMAIL, 
    pass: process.env.MAIL_VERIFI_PASSWORD,    
  },
});  


export const sendConfirmationEmail = async(to, token) => {
  return await transporter.sendMail({
    from: 'MeMail@yandex.ru',
    to,
    subject: 'Подтверждение регистрации',
    html: `<p>проверочный код: : ${token}</p>`,
  });
};