import { useContext } from "react"
import { Context } from "../../../useContext"

import { WaitRefindsForm } from './waitRefindsForm'
export function WaitRefinds(){
    const {allPosts, setallPosts, nameFilter, setNameFilter, allRefinds, setallRefind} = useContext(Context)
    if(allRefinds.null)return(
        <>
         <h1>В ожидании</h1>
         <div className="Posts">
          {
            allRefinds.null.map(el =>{if(el.Tickets.ticket_name.indexOf(nameFilter.refind.trim()) >=0)return(
                <WaitRefindsForm el = {el} key = {el.ticketRefund_id}/>
            )})
         }  
         </div>
         
        
        </>
       
    )
}