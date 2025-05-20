import axios from "axios"
import { useContext, useEffect } from "react"
import { Context } from "../../useContext"
import { useNavigate } from "react-router-dom"

export function TicketRefunds(){
    const {parse,userBuyd, refinds, setRefinds, TokenValid} = useContext(Context)
    const nav = useNavigate()

    useEffect(() =>{

        const func = async() =>{
            
            const refinds = await axios.post('http://localhost:3002/api/getTicketsRefund', {
                user_id: parse.user_id
            }, {withCredentials: true}).then(el => el.data)
            setRefinds(refinds)
        }
        func()
    }, [])
  return(
        <>
            {

                refinds.map(el =>(
                    <div>
                        <h1>заявка по заказу №{el.ticket_id}</h1>
                        <p><b>причина:</b> {el.ReasonsToRefund.reason_name}</p>
                        <p><b>описание:</b>{el.ticketRefind_description}</p>
                        <p><b>количество купленных билетов: </b>{el.ticketRefund_quantity}</p>
                        <p><b>стоимость заказа/общая стоимость: </b>{el.Tickets.ticket_cost} / {el.Tickets.ticket_cost * el.ticketRefund_quantity}</p>
                        <p><b>одобрено: <span style={
                            el.ticketRefind_isConfirm == false ? {color: 'red'} : 
                            el.ticketRefind_isConfirm == true ? {color: "green"}: {color: 'gray'}}>

                            {el.ticketRefind_isConfirm == false ? 'cancel' : el.ticketRefind_isConfirm == true ? 'confirmed'
                            : 'unchecked'}</span></b></p>
                    </div>
                ))
            }
     
        
        </>
    )
}