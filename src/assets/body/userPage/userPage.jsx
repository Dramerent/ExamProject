import { useNavigate, Link } from "react-router-dom"
import { Context } from "../../useContext"
import { useContext, useEffect, useRef, useState} from "react"
import axios from "axios"


import { UserCard } from "./userCard/usercard";
import { Comnplitations } from "./complitations/complitations";
import { UserLiked } from "./userLiked/userLiked";
import { Filters } from "../mainPage/filters/filters";
import { UserBuyd } from "./userBuyd/userBuyd";
import { UserFilters } from "./userFilters/userFilters";
export function UserPage(){
    const nav = useNavigate()
    const {parse} = useContext(Context)
    const blockRef = useRef()
    const { getOrganizerOpen, userDataTokenValid, setOrganizerParse,TokenValid, clicked, mobileMenuFilter, dropdownRef, userLiked, setUserLiked, userBuyd, setUserBuyd} = useContext(Context)

    useEffect(() => {
      TokenValid(nav)
      const likeBuyd = async() =>{
          const userLikedPost = await axios.post('http://localhost:3002/api/getLiked', {
              user_id: parse.user_id
          }, {withCredentials: true})
          .then(el => setUserLiked(el.data))
         
          const userBuyd = await axios.post('http://localhost:3002/api/getBuyd', {
            user_id: parse.user_id
          },{withCredentials: true})
          .then(el => setUserBuyd(el.data))
          
      }
      const getOrganizers = async() =>{
        const postOrganizerInfo = await axios.post('http://localhost:3002/api/getOrganizer', {
          user_id: parse.user_id,
          }, {withCredentials: true})
          .then((el) => setOrganizerParse(el.data))
         
      }
      getOrganizers()
      likeBuyd()
   
    }, [parse.user_id]) 

    
    const updateInfo = async() =>{
      const valid = await TokenValid(nav)
      if(!valid) return 0
      userDataTokenValid(nav)
    }
    
    const logout = async() =>{
      await axios.get('http://localhost:3002/api/logout', {withCredentials: true})
      .then((el) => {localStorage.removeItem('accessToken'); TokenValid(nav); nav('/')})
      .catch(el => console.log('ошибка', el)) 
    } 

    const Organizers = async () =>{
      const tf = await getOrganizerOpen()    
      if(tf == true) return nav('/organizatorMain')
      else if(tf == 999) return nav('/OrganizerForm')
      else if(tf == false) {
        if(window.location.pathname == '/userPage') { 
          return nav('/EditOrganizerData') 
        }
        else { return nav('/userPage')}
      }
      else return 0
    }

    const refinds = async() =>{
      const valid = await TokenValid(nav)
      if(valid){ nav('/ticketRefunds')}
    }
    

  
   if(userBuyd.getActualTickets)return(
    <>
    <div ref={blockRef} onClick = {(e) =>{dropdownRef.current.style.display = "none"
        blockRef.current.style.display = 'none'
        mobileMenuFilter.current.style.display = 'none'
      }
      }className="gray-filter" />
        <div className="return-text-block">
          <Link to = "/" className="toBack-text body-block__toBack-text">Назад</Link>
        </div>
       
        <div className="user-page body-block__user-page">
        <UserCard blockRef = {blockRef} updateInfo = {updateInfo}logout = {logout} Organizers = {Organizers} refinds = {refinds}/>
        <UserFilters />
                
        {
          clicked == 'все' || !clicked ? <Comnplitations /> : clicked == 'понравившиеся' ? (
          <>
          {userLiked ? <UserLiked />: <></>}
          
          </>
         ): clicked == 'купленные' ? <UserBuyd /> : ''
        } 
          
         
        </div>
    

    </>

    )
}