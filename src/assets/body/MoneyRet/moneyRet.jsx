import { useContext, useEffect, useState } from "react"
import { Context } from "../../useContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
export function MoneyRet(){
    const {parse} = useContext(Context)

    const{Err, setErr, TokenValid, reasons, setReasons,  getBuydOne, setGetBuydOne, refindData, setRefindData } = useContext(Context)
    const [ticketCount, setTicketCount] = useState(1)
    
    const nav = useNavigate()
    useEffect(() =>{console.log(ticketCount)}, [ticketCount])
    useEffect(() =>{
        const tf = TokenValid(nav)
        if(!tf) return 0
        const func = async() =>{ 
             const buydOne = await axios.post('http://localhost:3002/api/getBuydOne', {
                user_id: parse.user_id,
                ticket_id: parseInt(localStorage.getItem('TicketRefund'))

            }, {withCredentials: true}).then(el => el.data)
            setGetBuydOne(buydOne)
            const reasons = await axios.get('http://localhost:3002/api/getReasonsToRefund').then(el => el.data)
            setReasons(reasons)
            setRefindData((el) =>({...el, user_id: parse.user_id}))
            setRefindData((el) =>({...el, ticket_id: parseInt(localStorage.getItem('TicketRefund'))}))
        }
        func()

    }, [parse.user_id])
    const postTicketsRefund = async() =>{
        setRefindData((el) =>({...el, ticket_quantity: ticketCount && ticketCount!=0 ? ticketCount : 1}))
        await axios.post('http://localhost:3002/api/postTicketsRefund', refindData, {withCredentials: true})
        .then(el => nav('/userPage'))
        .catch(el => setErr((e) =>({...e, moneyRet: el.response.data ?  el.response.data : "ошибка"})))

    }
   if(getBuydOne) return(
        <>
        
        <div className="refund-form body-block__refund-form">
            {Err.moneyRet ? <p className="error-text">{Err.moneyRet}</p>: null}
            <p className="h3-text">Номер заказа: <b>{getBuydOne.ticket_id}</b> </p>
            <span>
                <p className="description-text">Название: <b className="description-text_line-clamp">{getBuydOne.ticket_name} </b></p>
                <p className="description-text">Кол-во билетов: <b className="description-text_line-clamp">{getBuydOne.ticket_quantity}</b> </p> 
                <p className="description-text">Стоимость билета: <b className="description-text_line-clamp">{getBuydOne.ticket_cost}</b></p>
                <div className="ticketCount-panel payForm__ticketCount-panel">
                <p className="description-text">Количество:</p>
                {getBuydOne.ticket_cost !=='0' ?

                <>            
                <button onClick={() => {ticketCount > 1 ? setTicketCount(ticketCount - 1) : setTicketCount(1)}}> 
                    <p className="button-text">-
                    </p>  
                </button>
                <p>{ticketCount}</p>
                <button onClick={() => {ticketCount < getBuydOne.ticket_quantity ? setTicketCount(ticketCount + 1) : setTicketCount(getBuydOne.ticket_quantity)}}> <p  className="button-text">+</p></button>
                </>
                :<p  className="button-text">{ticketCount}</p>}
            </div>
            </span>  
            <select className="select-type1" onChange={(e) =>{
                   
                   setRefindData((el) =>({...el, reason_id: parseInt(e.target.value)}))
                }} name="" id="" >
                <option selected hidden disabled >выбирете причину возврата: </option>
                {
                    reasons.map(el =>(
                        <option value = {el.reason_id}>{el.reason_name}</option>
                    ))
                }
            </select>
            <p className="h3-text">опишите причину:</p>
            <textarea className = "reason-textarea" onChange={(e) =>{
                setRefindData((el) =>({...el, ticketRefunds_description: e.target.value}))
            }}></textarea>

            <button onClick={() =>{postTicketsRefund()}} className="button-type1 button-type1_bg-blue"><p className="button-text">отправить</p></button>

        </div>
        
        </>

    )
}