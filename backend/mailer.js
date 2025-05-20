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
    html: `<p>Наименование концерта: ${name}</p>
            <p>кол-во билетов: ${ticketCount}</p>
            <p>сумма билета: ${ticketCost}</p>
            <p>дата проведения: ${tickeDate}</p>
            <p>место проведения: ${tickePlace}</p>
            <p>Номер билета: ${ticketUniq}</p>`
            
  });
};