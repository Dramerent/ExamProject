import { useContext } from "react"
import { Context } from "../../../useContext"

export function OrganizatorPostsFilters(){
    const {setClidked} = useContext(Context)
       const changeColor = (el) =>{
           const curID = Array.prototype.indexOf.call(el.currentTarget.parentNode.children, el.currentTarget)
           for(let i = 0; i < el.currentTarget.parentNode.childElementCount; i++){
             if(i !== curID){
               el.currentTarget.parentNode.children[i].style.backgroundColor = ""
             el.currentTarget.parentNode.children[i].querySelector('.filter-text').style.color = ""
   
             }
             else{
               el.currentTarget.parentNode.children[i].style.backgroundColor = "rgba(0, 174, 255, 0.509)"
               el.currentTarget.parentNode.children[i].querySelector('.filter-text').style.color = "white"
             }
           }
       }
       return(
           <>
           <div className="filters">
               <button onClick={(el) =>{ setClidked('Одобренные'); changeColor(el)}} className="button-type1"><span><p className="filter-text">Одобренные</p></span></button>
               <button onClick={(el) =>{ setClidked('На проверке'); changeColor(el)}}className="button-type1"><span><p className="filter-text">На проверке</p></span></button>
           </div>
           </>
    )
}