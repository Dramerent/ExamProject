import { useContext, useEffect, useRef } from "react"
import { Context } from "../../useContext"
import { useNavigate, Link } from "react-router-dom"
import { OrganizatorMenu } from "./organizarorMenu/organizarorMenu"
import { OrganizatorAllInfo } from "./organizatorAllInfo/organizatorAllInfo"
import axios from "axios"
import { OrganizatorPosts } from "./organizatorPosts/organizatorPosts"
import { OrganizatorComments } from "./organizatorComments/organizatorComments"
export function OrganizatorMain(){
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
            else if(tf == 999){
                return nav('/userPage')
            }
          }
          Organizers()
      }, [parse.user_id]
    )
    useEffect(() =>{
        const func = async() =>{
            const getPosts = await axios.post('http://localhost:3002/api/getOrganizerPosts',{
                organizer_id: organizerParse.organizer_id
            },{withCredentials: true})
            .then(el => el.data)
            
            getOrganizatorPosts(getPosts)
          }
       func() 
    }, [organizerParse])
    

    const navToCreatePost = async() =>{
        const tf = await getOrganizerOpen(nav)
        if(tf) nav('/createPost')
    }
    const reductOrganizerOnfo = async() =>{
        getOrganizerOpen(nav)
        const tf = await getOrganizerOpen(nav)
        if(tf) nav('/EditOrganizerData')
    }
   
    
    if(organizerParse.organizer_id && parse.user_id)return(
        <>
        <div ref={blockRef} onClick = {(e) =>{dropdownRef.current.style.display = "none"
        blockRef.current.style.display = 'none'
        mobileMenuFilter.current.style.display = 'none'
      }
      }className="gray-filter" />
        <div className="return-text-block">
            <Link to = "/userPage" className="toBack-text body-block__toBack-text">Назад</Link>
        </div>
        <div className="Organizator-page"> 
            <OrganizatorMenu createPost = {() =>{navToCreatePost()}}
                dropdownRef = {dropdownRef}
                blockRef = {blockRef}
                reductOrganizerOnfo = {() =>{reductOrganizerOnfo()}}
                navToAllPosts = {() =>{nav('/OrganizersAllPosts')}} />
            <OrganizatorAllInfo organizerParse = {organizerParse}/>
            {organizatorPosts.length > 0 ?<OrganizatorPosts posts = {organizatorPosts} nav = {nav}/> : <></>}
            <OrganizatorComments organizator_id = {organizerParse.organizer_id}/> 
        </div>
        
        </>
    )
}