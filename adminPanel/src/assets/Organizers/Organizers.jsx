import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../useContext"
import { OrganizerFilters } from "./organizerFilters/organizerFilters"
import { AllNullOrganizers } from "./allNullOrganizers/allNullOrganizers"
import { AllFalseOrganizers } from "./allFalseOrganizers/allFalseOrganizers"
import { AllOrganizers } from "./allOrganizers/allOrganizers"
export function Organizers(){
    const {allOrganizers, nameFilter, setNameFilter, setAllOrganizers, setBigPhoto, photoURL, setPhotoURL, fun1} = useContext(Context)
    useEffect(() =>{
      fun1()
    }, [])
    const [organizerFilters, setOrganizerFilters] = useState('null')

   
    if(allOrganizers) return(
        <>
        <h1>Организаторы</h1>
        <input placeholder = "Никнейм..." type="text" className = "name-filter" name="" id="" onChange={(e) =>{setNameFilter((el) =>({...el, organizer: e.target.value})); console.log(nameFilter.organizer)}}/>
        <OrganizerFilters setOrganizerFilters = {setOrganizerFilters}/>
        {
            organizerFilters == 'null' ? <AllNullOrganizers/> : 
            organizerFilters == 'false' ? <AllFalseOrganizers/> :
            organizerFilters == 'all' ? <AllOrganizers /> 
            : null
        }
        </>
    )
    
}