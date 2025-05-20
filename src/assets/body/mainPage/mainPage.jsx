import axios from "axios"
import { useContext, useEffect, useRef } from "react"
import { Context } from "../../useContext"
import { Navigate, useNavigate } from "react-router-dom"

import { Post } from "./Post/Post"
import { Filters } from "./filters/filters"
import { Header } from "../../header/header"
export function MainPage(){

    const {posts, setPosts, filter, date, setPrevPage, mobileMenuFilter} = useContext(Context)
    const blockRef = useRef()
    const nav = useNavigate()
    useEffect(() =>{
        const func = async() =>{
          const getPosts = await axios.get('http://localhost:3002/api/getPosts',{withCredentials: true})
        .then(el => el.data)
        setPosts(getPosts)
        }
     func() 
    }, [])
    

   
    return(
        <>
        <div ref = {blockRef} className="gray-filter" onClick = {(e) =>{e.currentTarget.style.display = 'none'; 
           mobileMenuFilter.current.style.display = 'none'}}/>
        <div className="posts-block">
            <div className="posts-part posts-block__posts-part">
                <div className="posts-header">
                    <p className="page-heading posts_header__page-heading">На ваш выбор</p>
                    <Filters blockRef = {blockRef}/>
  
                </div>
                <div className="posts posts-part__posts">
                    
                    {
                       
                        posts.map(el => {
                        if (el.Genres.Sphere.sphere_name.indexOf(filter.sphere) == 0 
                            && el.Genres.genre_name.indexOf(filter.genre) == 0
                            && el.post_meetDate > (date.startDate ? date.startDate : '0000-00-00')
                            && el.post_meetDate < (date.endDate ? date.endDate : '9999-00-00')
                            

                        )
                        return(
                            <Post key = {el.post_id}
                                Click = {() =>{
                                    localStorage.setItem('postId', el.post_id)
                                    console.log("/backend/" + el.post_image)
                                    nav("/postPage")
                                }}
                                genreName = {el.Genres.Sphere.sphere_name + ' - ' + el.Genres.genre_name}
                                meetingPlace={el.post_meetingPlace}
                                postName = {el.post_name}
                                image = {"http://localhost:3002/" + el.post_image}
                                elem = 'posts__post post_shadow post_main'
                                >
                                
                            </Post>
                        )})
                    }
                    
                </div>
            </div>
           
        
        
        </div>
        

        </>
        
    )
    
}