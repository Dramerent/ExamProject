import { useContext, useEffect, useState } from "react"
import { Context } from "../../useContext"
import axios, { Axios } from "axios"
import { useNavigate, Link } from "react-router-dom"
export function PayMent(){
    const postId = localStorage.getItem('postId')? localStorage.getItem('postId'): undefined
    const {setErr, Err, pageInfo, setPageInfo,  parse, TokenValid,userBuyd} = useContext(Context)
    const nav = useNavigate()
    const [ticketCount, setTicketCount] = useState(1)
    useEffect(() =>{
        TokenValid()
        const func = async() =>{
            const getPostInfo =  await axios.post('http://localhost:3002/api/getChoicedPost',{
                post_id: parseInt(postId)
            },{withCredentials: true})
            .then(el => el.data)
            setPageInfo(getPostInfo)
        }
        func()
    }, [])

    const pay = async() =>{
        console.log(ticketCount)
        await axios.post('http://localhost:3002/api/postBuyd',{
            user_id: parse.user_id ? parse.user_id : null,
            user_mail: parse.user_id ? parse.user_mail : null,
            post_id: pageInfo.post_id,
            post_meetDate: pageInfo.post_meetDate,
            post_ticketCount: ticketCount,
            organizer_id: pageInfo.organizer_id,
            post_image: pageInfo.post_image
        }).then(el => el.data)
        .then(el => localStorage.setItem(`${el.ticket_id}`, true))
        .then(el => nav('/userPage'))
        .catch(error => setErr((el) => ({...el, buyTicket: error.response && error.response.data ? error.response.data : 'ошибка'})))
    }

    if(pageInfo.post_id) return(
    <>
        <div className="return-text-block">
            <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
        </div>  
        <div className="payForm body-block__payform">
            <div className="payform__personal-info">
                
                <p className="h3-text">Оплата заказа №{pageInfo.post_id}</p> 
                <div className="ghorizontal-double-line" />
                <div className="payForm__user-info">
                    {parse.user_id ? <p className="description-text">Ф.И.О.: <b>{parse.user_name} {parse.user_surname}</b> </p> : null }
                    <p className="description-text">почта: <b>{parse.user_mail}</b></p> 
                </div>
                <div className="ghorizontal-double-line" />
                <div className="payForm__post-info">
                    <p className="description-text">{pageInfo.post_name}</p>
                    <p className="description-text"> {pageInfo.Genres.Sphere.sphere_name} - {pageInfo.Genres.genre_name}</p>
  
                </div>
            <p className="description-text"><b>{(pageInfo.post_meetDate).split('T')[0]}</b></p>

            </div>
            <div className="ticketCount-panel payForm__ticketCount-panel">
                <p className="description-text">Количество:</p>
                {pageInfo.post_cost !=='0' ?

                <>            
                <button onClick={() => {ticketCount > 1 ? setTicketCount(ticketCount - 1) : setTicketCount(1)}}> 
                    <p className="button-text">-
                    </p>  
                </button>
                <p>{ticketCount}</p>
                <button onClick={() => {ticketCount < 5 ? setTicketCount(ticketCount + 1) : setTicketCount(5)}}> <p  className="button-text">+</p></button>
                </>
                :<p  className="button-text">{ticketCount}</p>}
            </div>
            <p className="description-text">стоимость: <b>{pageInfo.post_cost}</b>р.</p> 
            <button onClick={() => {pay()}} className="button-type1 button-type1_bg-blue" type="button">Оплатить</button>
            {Err.buyTicket ? <p className="error-text">{Err.buyTicket}</p> : null}
        </div>
     
    </>
    
    )
    else return <p>пост для оплаты не найден</p>
}