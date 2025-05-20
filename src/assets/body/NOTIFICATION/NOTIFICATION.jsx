import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../useContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function NOTIFICATION ({element, blockRef, blockRef1}){
    const {parse, setErr, Err} = useContext(Context)
    const [notificationInfo, setNotificationInfo] = useState({
        user_id: parse.user_id,
        comment_content: '',
        organizer_id: element.organizer_id,
        post_id: element.post_id,
        comment_name: element.ticket_name
    })
    
    useEffect(() =>{    blockRef.current.style.display = "flex"
    }, [])
    const cancel = () =>{
        console.log(element.ticket_id)
        localStorage.getItem(`${element.ticket_id}`) && localStorage.getItem(`${element.ticket_id}`) == 'true' 
        ? localStorage.removeItem(`${element.ticket_id}`) : null
        blockRef.current.remove()
        blockRef1.current.remove()
    }



    const sendComment = async() =>{
        console.log(notificationInfo)
        const sendComment = await axios.post('http://localhost:3002/api/postComment',{
            user_id:notificationInfo.user_id,
            organizer_id: notificationInfo.organizer_id,
            comment_content: notificationInfo.comment_content,      
            post_id: notificationInfo.post_id,
            comment_name: notificationInfo.comment_name
        },{withCredentials: true})
        .then(el => {cancel()})
        .catch((error) => setErr((e) =>({...e, sendComment: error.response.data ? error.response.data : "ошибка"})))
    }
    return(
        <>
        <div onClick={() => cancel()} ref={blockRef} className="gray-filter" />
        <div ref = {blockRef1}className="NOTIFICATION">
            {Err.sendComment ? <p className="error-text">{Err.sendComment}</p> : ""}
            <div className="NOTIFICATION-header">
                <div onClick={() => cancel()} className="cross-img">
                    <img src="" alt="" />
                </div>
                <p className="h3-text">как вам концерт "{element.ticket_name}"?</p>

            </div>
            <p className="description-text">напишите пожалуйста отзыв, насколько сильно вам понравился данный концерт</p>
            <textarea onChange={(el) =>{setNotificationInfo((e) =>({...e, comment_content: el.target.value}))}} name="" id=""></textarea>

            <button onClick = {() =>{sendComment()}} className="button-type1 button-type1_bc-blue">отправить</button>
        </div>
        </>
        
    )
}