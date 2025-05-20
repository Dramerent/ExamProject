import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../useContext"
import axios from "axios"
export function UserTicket({cost,image, gte, userId,isRefind, isHere, nav, ticketId, post_id,ticketCost, ticketCount, postName, genre, sphere, meetPlace, mettDate, meetTime}){
    const {TokenValid, parse} = useContext(Context)

    const refundData = () =>{
        localStorage.setItem('TicketRefund', ticketId)
        TokenValid(nav)
        if(parse){
            nav('/moneyRet')
        }
       
    } 
    const userIsHere = async() =>{
        console.log(ticketId, userId)
        await axios.post('http://localhost:3002/api/userIshere', {
            ticket_id: ticketId,
            user_id: userId
        })
        .then(el => el.data)

        window.location.reload()
    }
    return(
        <div className="ticket-block">
            
            <div className="ticket-head" style={!post_id || !gte || isRefind ? {opacity: 0.5} : {}}>
                <p className="common-text">{mettDate ? mettDate : ""}</p>
                <p className="common-text">{ticketCount} куплено</p>

            </div>
            <div className="ticket-line" />
            <div className="ticket-img" style={!gte || !post_id || isRefind? {opacity: 0.5} : {}}>
                <img src={image} alt="" />
               
            </div>
           
            <div className="ticket-line" />
            <div className="ticket-body" style={!post_id || !gte|| isRefind ? {opacity: 0.5} : {}}>
                <div className="ticket-body-head">
                    <h4>{postName}</h4>   
                </div>
                <div className="ticket-body-main">
                    <p className="common-text">{genre} {sphere}</p>
                    <p className="common-text">{meetPlace}</p>
                    <p className="common-text">{cost}</p>
                </div>
            </div>
            <div className="ticket-line" style={!post_id || !gte || isRefind ? {opacity: 0.5} : {}}/>
            {ticketCost !== 'бесплатно' && gte ? 
            (
                <div  className="ticket-footer">
                    <p>№{ticketId}</p>
                    <div className="dropUpMenu">
                        <div className="dropUpMenu-content">
                        {!isHere && !isRefind ?
                            <button onClick = {() =>{
                                userIsHere()
                            }}className="dropUpLink"><span><p className="filter-text"><b>Я тут!</b></p></span></button> : null}
                            <button onClick = {() =>{
                                localStorage.setItem('postId', post_id)
                                nav('/postPage')
                            }} className="dropUpLink"><span><p className="filter-text">Подробнее</p></span></button>
                          
                            {!isRefind ? <button onClick = {() =>{
                                refundData()}}className="dropUpLink"><span><p className="filter-text">Вернуть</p></span></button> : null
                            }
                        </div>
                        <button className="button-type2 button_dropUpBtn button-type2_bg-blue">
                            <span className="button-text button-text_white">
                            :::
                            </span>
                        </button>
                    </div>
                </div>
            ) : <div className="ticket-footer" style={{opacity: 0.6}}></div>
           
            }
           
        </div>
    )
}