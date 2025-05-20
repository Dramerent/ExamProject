import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { UserTicket } from '../userticket/userTicket';
import { useContext } from 'react';
import { Context } from '../../../useContext';
import { useNavigate } from 'react-router-dom';

export function UserBuyd(){
    const nav = useNavigate()
    const {userBuyd} = useContext(Context)
    if(userBuyd) return(
        <>
        <div className="other-posts-block">
            <div className="other-posts other-posts-block__other-posts">
            {
                   userBuyd.getActualTickets.map(el  =>{
                      return (          
                     
                      <UserTicket key = {el.ticket_id}  post_id = {el.post_id}
                            Click = {() =>{
                                localStorage.setItem('postId', el.post_id)
                            }}
                             nav = {nav}
                            ticketId = {el.ticket_id}
                            ticketCount = {el.ticket_quantity}
                            genre = {el.ticket_sphere + ' - ' + el.ticket_genre}
                            meetPlace={el.ticket_meetPlace}
                            postName = {el.ticket_name}
                            isHere = {el.ticket_isHere}
                            cost = {el.ticket_cost}
                            gte={true}
                            userId={el.user_id}
                            image = {"./backend/" + el.ticket_image}
                            isRefind = {el.ticket_quantity == 0 ? true : false}
                            mettDate = {((el.ticket_date).split("Z")[0]).split("T")[0]}
                            meetTime = {((el.ticket_date).split("Z")[0]).split("T")[1]}>
                        </UserTicket>
                    )})
               }
                {
                   userBuyd.getOldTickets.map(el  =>{
                      return (
                      <UserTicket key = {el.ticket_id}  post_id = {el.post_id}
                            Click = {() =>{
                                localStorage.setItem('postId', el.post_id)
                            }}
                            nav = {nav}
                            ticketId = {el.ticket_id}
                            ticketCount = {el.ticket_quantity}
                            genre = {el.ticket_sphere + ' - ' + el.ticket_genre}
                            meetPlace={el.ticket_meetPlace}
                            postName = {el.ticket_name}
                            isHere = {el.ticket_isHere}
                            cost = {el.ticket_cost}
                            gte={false}
                            mettDate = {((el.ticket_date).split("Z")[0]).split("T")[0]}
                            meetTime = {((el.ticket_date).split("Z")[0]).split("T")[1]}>

                        </UserTicket>  
                    )})
               }
            </div>
            
        </div>
        </>
    )
    else return <></>
}