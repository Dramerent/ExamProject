import { useContext } from "react"
import { WaitPostsForm } from "./waitPostsForm"
import { Context } from "../../../useContext"
export function WaitPosts(){
    const {allPosts, setallPosts, nameFilter, setNameFilter} = useContext(Context)
    if(allPosts.null)return(
        <>
         <h1>В ожидании</h1>
         <div className="Posts">
          {
            allPosts.null.map(el =>{if(el.post_name.indexOf(nameFilter.post.trim()) >=0)return(
                <WaitPostsForm el = {el} key = {el.post_id}/>
            )})
         }  
         </div>
         
        
        </>
       
    )
}