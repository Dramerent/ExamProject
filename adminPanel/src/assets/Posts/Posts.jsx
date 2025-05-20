import { useContext, useEffect, useState } from "react"
import { Context } from "../../useContext"
import { PostFilters } from "./postFilter/postFilter"
import { WaitPosts } from "./waitPosts/waitPosts"
import { SuccessPosts } from "./SuccessPosts/SuccessPosts"
import { FalsePosts } from "./FalsePosts/FalsePosts"
export function Posts(){
    const {fun2, setNameFilter} = useContext(Context)
    useEffect(() =>{fun2()}, [])


    const [postFilters, setPostFilters] = useState('null')
    return(
        <>
        <h1>Посты</h1>
        <input placeholder = "Наименование..." type="text" className = "name-filter" name="" id="" onChange={(e) =>{setNameFilter((el) =>({...el, post: e.target.value}))}}/>
        <PostFilters setPostFilters = {setPostFilters}/>
        {
            postFilters == "null" ? <WaitPosts /> : 
            postFilters == "all" ? <SuccessPosts /> : 
            postFilters =="false"? <FalsePosts /> : null
        }
        </>
    )
}