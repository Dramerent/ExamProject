import { useContext } from "react";
import { Context } from "../../../useContext";
import { OrganizerForm } from "./FalseorganizerForm";
export function AllFalseOrganizers(){
    const {setBigPhoto, photoURL, setPhotoURL, setNameFilter, nameFilter, allOrganizers} = useContext(Context)
       return(
           <>
           <h1>Отклоненные</h1>
           {
            allOrganizers.false.map(el => {if(el.organizer_nickname.indexOf(nameFilter.organizer.trim()) >= 0)return(
               <OrganizerForm key = {el.organizer_nickname} el = {el}/>
            )})
           }
            
           </>
       )
}