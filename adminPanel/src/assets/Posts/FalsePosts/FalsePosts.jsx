import { useContext } from "react"
import { Context } from "../../../useContext"
import {FalsePostsForm} from "./FalsePostsForm"
export function FalsePosts(){
    const {allPosts, nameFilter} = useContext(Context)
     if(allPosts.false)return(
        <>
            <h1>отклоненные</h1>
             <div className="Posts">{
            allPosts.false.map(el =>{if(el.post_name.indexOf(nameFilter.post.trim()) >=0)return(
                <FalsePostsForm el = {el} key = {el.post_id}/>
            )})
            }
            </div>
            
        
        </>
        
    )
}