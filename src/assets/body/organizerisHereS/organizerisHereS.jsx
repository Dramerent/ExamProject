import { useContext, useEffect, useState } from "react"
import { PostHead } from "../postPage/postHead/postHead"
import { PostInfo } from "../postPage/postInfo/postInfo"
import { Context } from "../../useContext"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"


import { OrganizatorFilters } from "./organizatorFilters/organizatorFilters"
export function organizerisHereS(){
    const {postValid, pageInfo, guests, 
        setGuests, parse, TokenValid, getOrganizerOpen, organizerParse,
        userInfo, setUserInfo } = useContext(Context)
    const nav = useNavigate()
    
    useEffect(() =>{
        TokenValid(nav)
        getOrganizerOpen(nav)  
        postValid(nav)
    }, [parse.user_id])
    useEffect(() =>{
        const Organizers = async () =>{
            const tf = await getOrganizerOpen(nav)    
            if(tf == true) return 
            else if(tf == false) {
              if(window.location.pathname == '/userPage') { 
                return nav('/EditOrganizerData') 
              }
              else { return nav('/userPage')}
            }
            else if(tf == 5 && window.location.pathname != '/userPage') return nav('/userPage')
            }
          Organizers()
    }, [organizerParse.organizer_id])
    const getOrganizerGuests = async() =>{
        const guests = await axios.post('http://localhost:3002/api/getBuydPostTickets', {
            post_id: localStorage.getItem['postId'],
            organizer_id: organizerParse.organizer_id
        }, {withCredentials: true})
        .then(el => el.data)
        .catch(el => console.log(el.response.data))
        setGuests(guests)
    }
    getOrganizerGuests()
    if(pageInfo.post_id && guests)return(
        <>
            <div className="return-text-block">
                <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
            </div>    
            <div className="post-block body-block__post-block">        
                <PostHead />
                <div className="post-main">
                    <PostInfo />
                   
                </div>
                <div className="post-isHeres-block">
                    <OrganizatorFilters />
                    <div className="post-isHeres"> 
                        
                        <table className="post-isHeres__table">
                            <tr>
                                <th><p className="param-text param-text_triple">номер</p></th>
                                <th><p className="param-text param-text_triple">фото</p></th>
                                <th><p className="param-text param-text_triple">имя фамилия</p></th>
                                
                                <th><p className="param-text param-text_triple">кол-во билетов</p></th>
                                <th><p className="param-text param-text_triple">отмечен</p></th>
                            </tr>
                        {
                        guests.map(el =>{
                            if(el.Users.user_name.indexOf(userInfo.userName.trim()) >= 0 &&
                            el.Users.user_surname.indexOf(userInfo.userSurname.trim()) >= 0)  return(
                        <tr key={el.ticket_id}>
                            <td><p className="param-text param-text_triple">{el.ticket_id}</p></td>
                            <td><img className="comment__img" src={"./backend/" + el.Users.user_photo} alt="" /></td>
                            <td><p className="param-text param-text_triple">{el.Users.user_name + " " + el.Users.user_surname}</p></td>
                            <td><p className="param-text param-text_triple">{el.ticket_quantity}</p></td>
                            
                            <td>{el.ticket_isHere ? 
                                <p className="success-text success-text_line-clamp">подтверждено</p> : 
                                <p className="error-text error-text_line-clamp">не подтверждено</p>}</td>
                            </tr>
                        
                        )})
                        }
                        </table>
                    </div>

                </div>

                
               
            </div>
        </>
    )
    else return <p>даные получаются...</p>
}