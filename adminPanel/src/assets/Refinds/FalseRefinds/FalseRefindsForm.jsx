import { useContext } from "react";
import { Context } from "../../../useContext";

export function FalseRefindsForm({el}){
    const {setBigPhoto, setPhotoURL, successRefind} = useContext(Context)
    return(
        <>
        <div className="postForm">
            <div className="postForm__header">
                <h3>{el.Tickets.ticket_name}</h3> 
                <h3>{el.ticketRefund_id}</h3>
            </div>
            <p>Концерт: {el.Tickets.ticket_name}</p>
            <p>Причина: {el.ReasonsToRefund.reason_name}</p>
            <p>Описание: {el.ticketRefind_description}</p>
            <div className="buttons-group">
                <button onClick={() => {successRefind(el.ticketRefund_id)}} type="button">подтвердить</button>
            </div>
        </div>
        </>
    )
}