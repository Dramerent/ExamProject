import { useContext } from "react"
import { Context } from "../../../useContext"
import { FalseRefindsForm } from "./FalseRefindsForm"
export function FalseRefinds(){
    const {allPosts, nameFilter, allRefinds, setallRefind} = useContext(Context)
     if(allPosts.false)return(
        <>
            <h1>отклоненные</h1>
             <div className="Posts">{
            allRefinds.false.map(el =>{if(el.Tickets.ticket_name.indexOf(nameFilter.refind.trim()) >=0)return(
                <FalseRefindsForm el = {el} key = {el.ticketRefund_id}/>
            )})
            }
            </div>
            
        
        </>
        
    )
}