import { useContext } from "react"
import { Context } from "../../useContext"
export function Filters(){
    const {filter, setFilter} = useContext(Context)
    return(
        <div className="filters">
            <button onClick={() => {setFilter('organizers')}} type="button">
                организаторы
            </button>
            <button onClick={() => {setFilter('posts')}} type="button">
                посты
            </button>
             <button onClick={() => {setFilter('refinds')}} type="button">
                запросы на возврат
            </button>
            
        </div>
       
        
    )
}