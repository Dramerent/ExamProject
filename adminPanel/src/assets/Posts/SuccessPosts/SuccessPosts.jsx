import { useContext } from "react"
import { Context } from "../../../useContext"
import { SuccessPostsForm } from "./successPostsForm"
export function SuccessPosts(){
    const {allPosts, nameFilter} = useContext(Context)
     if(allPosts.all)return(
            <>
            <h1>Подтвержденные</h1>
             <div className="Posts">
             
             {
                allPosts.all.map(el =>{if(el.post_name.indexOf(nameFilter.post.trim()) >=0)return(
                    <SuccessPostsForm el = {el} key = {el.post_id}/>
                )})
             }
             </div>
            
            </>
           
        )
}