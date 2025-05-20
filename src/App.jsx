import { useContext,useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Context } from './assets/useContext'
import './App.css'

import { MainPage } from './assets/body/mainPage/mainPage'
import { PostPage } from './assets/body/postPage/postPage'
import { Header } from './assets/header/header'
import { LoginForm } from './assets/body/login/loginForm'
import { Register } from './assets/body/register/register'
import { UserPage } from './assets/body/userPage/userPage'
import { ScrollToTop } from './assets/scrollTop'
import { PayMent } from './assets/body/payment/payment'
import { EditUserData } from './assets/body/editUserData/editUserData'
import { VerifyToUpdate } from './assets/body/verifyToUpdate/verifyToUpdate'
import { MoneyRet } from './assets/body/MoneyRet/moneyRet'
import { TicketRefunds } from './assets/body/ticketRefunds/ticketRefunds'
import { NOTIFICATION } from './assets/body/NOTIFICATION/NOTIFICATION'
import { OrganizerForm } from './assets/body/organizerRegister/organizerForm'
import { OrganizatorMain } from './assets/body/OrganizatorMain/OrganizatorMain'
import { CreatePost } from './assets/body/createPost/createPost'
import { EditOrganizerData } from './assets/body/editOrganizerData/editOrganizerData'
import { OrganizatorForUsers } from './assets/body/OrganizatorForUsers/OrganizatorForUsers'
import { organizerisHereS } from './assets/body/organizerisHereS/organizerisHereS'
import { OrganizersAllPosts } from './assets/body/organizersAllPosts/organizersAllPosts'

import axios from 'axios'
export function App() {
  const {TokenValid, userDataTokenValid, setErr} = useContext(Context)
  const {userLiked, parse, userBuyd, posts, setPost,setUserBuyd} = useContext(Context)
  const blockRef = useRef()
  const blockRef1 = useRef()
  useEffect(() => {
    TokenValid()
    userDataTokenValid()
    setErr('')
  const buyd = async() =>{
    const userBuyd = await axios.post('http://localhost:3002/api/getBuyd', {
        user_id: parse.user_id
      },{withCredentials: true})
      .then(el => el.data)
      setUserBuyd(userBuyd)

    

  }
  buyd()
  }, [])
  
  return (
    <>
      <BrowserRouter>
      <>
     <ScrollToTop />
     {
      userBuyd.getOldTickets ? userBuyd.getOldTickets.map(el =>{
        if(localStorage.getItem(el.ticket_id) && el.ticket_isHere == true && el.post_id && parse.user_name) 
           {
            return(
              <>             
                <NOTIFICATION blockRef1 = {blockRef1} blockRef = {blockRef} element = {el}/>
              </>
           )
          }
      }) : null
     }
        <Header />
        <div className="body-block">
       
          <Routes>      
              <Route path='/userPage' Component={UserPage} />
              <Route path='/' Component={MainPage}/>
              <Route path='/postPage' Component={PostPage} />
              <Route path='/login' Component={LoginForm} />
              <Route path='/register' Component={Register}/>
              <Route path='/pay' Component={PayMent}/>
              <Route path='/editUserData' Component={EditUserData} />
              <Route path='/verifyToUpdate' Component = {VerifyToUpdate} />
              <Route path='/moneyRet' Component={MoneyRet}/>
              <Route path='/ticketRefunds' Component={TicketRefunds}/>
              <Route path='/OrganizerForm' Component={OrganizerForm}/>
              <Route path='/OrganizatorMain' Component = {OrganizatorMain}/>
              <Route path='/CreatePost' Component={CreatePost} />
              <Route path='/EditOrganizerData' Component = {EditOrganizerData}/>
              <Route path='/OrganizatorForUsers' Component={OrganizatorForUsers}/>
              <Route path='/organizerIsHereS' Component={organizerisHereS}/>
              <Route path='/OrganizersAllPosts' Component={OrganizersAllPosts}/>
          </Routes>
        </div>    
    </>
   
    </BrowserRouter>
    
      
     
    
  
    </>
  )
}

