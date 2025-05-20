import { useContext, useEffect } from "react"
import { Comment } from "../../comment/comment"
import { Context } from "../../../useContext"
import axios from "axios"
export function OrganizatorComments({organizator_id}){
    const {comments, setComments} = useContext(Context)

    useEffect(() =>{
        const Getcomments = async() =>{
            const comments = await axios.post('http://localhost:3002/api/getComments', {
                organizator_id: organizator_id
            })
            .then(el => el.data)
            setComments(comments)
        }   
        Getcomments()
    }, [organizator_id])
    if(comments) return(
        <>
            <div className="OrganizatorComments">
                <p className="h2-text">
                    Ваши комментарии
                </p> 
                <div className="comments">
                {
                    comments.map(el =>(
                        <Comment userImage = {"./backend/" + el.Users.user_photo}
                        userName = {el.Users.user_name}
                        commentContent = {el.comment_text}
                        postName = {el.comment_name}/>
                    ))
                }
            </div>
            </div> 
           
        </>
    )
}