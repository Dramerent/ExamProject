import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../../useContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export function PostMainHead(){
    const {pageInfo, parse, TokenValid, postValid, like, setLike} = useContext(Context)
    const nav = useNavigate()
    const likeRef = useRef()
    useEffect(() =>{
        const func = async() =>{
            await TokenValid()
            postValid(nav)
        }
        func()
    }, [likeRef])

    const postLike = async() =>{
        TokenValid(nav)
        if(parse.user_id){
            await axios.post('http://localhost:3002/api/postLiked', {
            user_postliked: parseInt(pageInfo.post_id),
            user_id: parseInt(parse.user_id)
            }, {withCredentials: true})
        }
        postValid(nav)
    }
    if(like) return(
        <div className="post-main-head">
            <div className="like" style = {{backgroundColor: like}} onClick={() =>{postLike()}}>      
            </div>
        <p className="h2-text"> О концерте</p>
    </div>
    )
}