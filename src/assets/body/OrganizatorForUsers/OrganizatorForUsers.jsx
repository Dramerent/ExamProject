import { useContext, useEffect } from "react"
import { Context } from "../../useContext"
import { useNavigate, Link } from "react-router-dom"
import { OrganizatorAllInfo } from "./organizatorAllInfo/organizatorAllInfo"
import axios from "axios"
import { OrganizatorPosts } from "./organizatorPosts/organizatorPosts"
import { OrganizatorComments } from "./organizatorComments/organizatorComments"
export function OrganizatorForUsers(){
    const nav = useNavigate()
    const {organizerParse, postValid, parse,pageInfo, TokenValid, organizatorPosts, getOrganizatorPosts} = useContext(Context)
    
    useEffect(() =>{
        TokenValid()
    }, [parse.user_id])
    useEffect(() =>{
        postValid(nav)
    }, [localStorage.getItem('postId')])

    useEffect(() =>{
        console.log(pageInfo.Organizers)
        const func = async() =>{
            const getPosts = await axios.post('http://localhost:3002/api/getOrganizerPosts',{
                organizer_id: pageInfo.Organizers.organizer_id
            },{withCredentials: true})
          .then(el => el.data)
          getOrganizatorPosts(getPosts)
          }
       func() 
       
    }, [pageInfo.Organizers])    
    if(pageInfo.Organizers)return(
        <>
        <div className="return-text-block">
            <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
        </div>
        <div className="Organizator-page"> 
            <OrganizatorAllInfo organizerParse = {pageInfo}/>
            {organizatorPosts.length > 0 ? <OrganizatorPosts posts = {organizatorPosts} nav = {nav}/> : <></>}
            <OrganizatorComments organizator_id = {pageInfo.Organizers.organizer_id}/> 
        </div>
        
        </>
    )
}