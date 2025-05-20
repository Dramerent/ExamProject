import { useContext, useState } from "react";
import { Context } from "../../../useContext";
import { OrganizerForm } from "./organizerForm";
export function AllOrganizers(){
        const {allOrganizers, nameFilter} = useContext(Context)
     if(allOrganizers.null)return(
        <>
        <h1>Все</h1>
        <div className="allOrganizers">
        {
            allOrganizers.all.map(el =>{if(el.organizer_nickname.indexOf(nameFilter.organizer.trim()) >= 0)return(
               <OrganizerForm key = {el.organizer_nickname} el = {el}/>
            )})
        }
        </div>
        </>
    )
}