import { useContext, useEffect } from "react"
import { Context } from "../../useContext"
import { useNavigate, Link } from "react-router-dom"
import { OrganizatorAllInfo } from "./organizatorAllInfo/organizatorAllInfo"
import axios from "axios"
import { OrganizatorPosts } from "./organizatorPosts/organizatorPosts"
import { OrganizatorComments } from "./organizatorComments/organizatorComments"
export function OrganizatorForUsers(){
    const nav = useNavigate()
    const {getOrganizerOpen,organizerParse, parse, TokenValid, organizatorPosts, getOrganizatorPosts} = useContext(Context)
    
    useEffect(() =>{
        TokenValid(nav)
        getOrganizerOpen(nav)
    }, [parse.user_id])
    useEffect(() =>{
        const func = async() =>{
            const getPosts = await axios.post('http://localhost:3002/api/getOrganizerPosts',{
                organizer_id: organizerParse.organizer_id
            },{withCredentials: true})
          .then(el => el.data)
          getOrganizatorPosts(getPosts)
          console.log(organizerParse)
          }
       func() 
       
    }, [organizerParse])    
    if(organizerParse.organizer_id && parse.user_id)return(
        <>
        <div className="return-text-block">
            <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
        </div>
        <div className="Organizator-page"> 
            <OrganizatorAllInfo organizerParse = {organizerParse}/>
            {organizatorPosts.length > 0 ?<OrganizatorPosts posts = {organizatorPosts} nav = {nav}/> : <></>}
            <OrganizatorComments organizator_id = {organizerParse.organizer_id}/> 
        </div>
        
        </>
    )
}