import { useContext } from "react";
import { Context } from "../../../useContext";

export function WaitRefindsForm({el}){
    const {setBigPhoto, setPhotoURL, successRefind, FalseRefind} = useContext(Context)
    return(
        <>
        <div className="postForm">
            <div className="postForm__header">
                <h3>{el.Tickets.ticket_name}</h3> 
                <h3>{el.ticketRefund_id}</h3>
            </div>
            <p>Причина: {el.ReasonsToRefund.reason_name}</p>
            <p>Описание: {el.ticketRefind_description}</p>
            <p>количество: {el.ticketRefund_quantity}</p>
            <p>итоговая стоимость: {el.ticketRefund_quantity * el.Tickets.ticket_cost}</p>
          
             <div className="buttons-group">
                <button onClick = {() =>{successRefind(el.ticketRefund_id)}}type="button">подтвердить</button>
                <button onClick = {() =>{FalseRefind(el.ticketRefund_id)}} type="button">отказать</button>
            </div>
        </div>
        </>
    )
}