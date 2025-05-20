import { OrganizersSuccessPosts } from "./organizersSuccessPosts/organizersSuccessPosts"
import { OrganizersWaitPosts } from "./organizersWaitPosts/organizersWaitPosts"
import { OrganizatorPostsFilters } from "./organizatorPostsFilters/organizatorPostsFilters"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef } from "react"
import { Context } from "../../useContext"
export function OrganizersAllPosts(){
    const {clicked} = useContext(Context)
    const nav = useNavigate()
    const {getOrganizerOpen, organizerParse, parse, TokenValid, organizatorPosts, getOrganizatorPosts } = useContext(Context)
    const blockRef = useRef()
    const dropdownRef = useRef()

    useEffect(() =>{
        
        TokenValid(nav)
        getOrganizerOpen(nav)
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
      }, [parse.user_id]
    )
    useEffect(() =>{
        const func = async() =>{
            const getPosts = await axios.post('http://localhost:3002/api/getOrganizerPosts',{
                organizer_id: organizerParse.getSuccessData.organizer_id
            },{withCredentials: true})
            .then(el => el.data)
            
            getOrganizatorPosts(getPosts)
          }
       func() 
    }, [organizerParse.getSuccessData])
 return(
    <>
    <div className="return-text-block">
        <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
    </div>
    <div className="OrganizersAllPosts">
        <OrganizatorPostsFilters />
        {
            clicked == 'Одобренные' || !clicked ?  <OrganizersSuccessPosts /> :
            clicked == 'На проверке' ? <OrganizersWaitPosts /> : null
        }
    </div>
    </>
 )
}