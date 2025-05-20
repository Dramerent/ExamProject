import { useContext, useEffect, useState } from "react"
import { Context } from "../../useContext"
import { RefindsFilters } from "./RefindsFilter/RefindsFilter"
import { WaitRefinds } from "./waitRefinds/waitRefinds"
import { FalseRefinds } from "./FalseRefinds/FalseRefinds"
export function Refinds(){
    const {fun3, setNameFilter} = useContext(Context)
    useEffect(() =>{fun3()}, [])


    const [RefindFilters, setRefindFilters] = useState('null')
    return(
        <>
        <h1>Посты</h1>
        <input placeholder = "Наименование..." type="text" className = "name-filter" name="" id="" onChange={(e) =>{setNameFilter((el) =>({...el, refind: e.target.value}))}}/>
        <RefindsFilters setRefindFilters = {setRefindFilters}/>
        {
            RefindFilters == "null" ? <WaitRefinds /> : 
            RefindFilters =="false"? <FalseRefinds /> : null
        }
        </>
    )
}