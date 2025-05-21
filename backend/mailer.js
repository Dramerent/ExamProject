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

export const sendTicketEmail = async(to, name, ticketCount, ticketCost, tickeDate, tickePlace, ticketUniq) => {
  return await transporter.sendMail({
    from: 'MeMail@yandex.ru',
    to,
    subject: 'Ваши данные билета:',
    html: `<p style = "font-size: 24px">Наименование концерта: <b>${name}</b></p>
            <p style = "font-size: 18px">кол-во билетов: <b>${ticketCount}</b></p>
            <p style = "font-size: 18px">сумма билета: <b>${ticketCost}</b></p>
            <p style = "font-size: 18px">дата проведения: <b>${tickeDate}</b></p>
            <p style = "font-size: 18px">место проведения: <b>${tickePlace}</b></p>
            <p style = "font-size: 18px">Номер билета: <b>${ticketUniq}</b></p>
            <p>* для возврата билетов зарегистрируйтесь в приложении под аккаунтом, на который был получен данный билет </p>`

            

            
  });
};