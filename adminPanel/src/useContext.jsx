import { createContext, useState } from "react"
import axios from "axios"


export const Context = createContext(null)


export const ContextProvider = ({children}) => {
    const [filter, setFilter] = useState('organizers')
    const [bigPhoto, setBigPhoto]= useState(false)
    const [photoURL, setPhotoURL] = useState('')
    const [allOrganizers, setAllOrganizers] = useState({
        null: [],
        false: [],
        all: []
    })
     const [allPosts, setallPosts] = useState({
        null: [],
        false: [],
        all: []
    })

      const [allRefinds, setallRefind] = useState({
        null: [],
        false: [],
    })
const [isRetText, setIsRetText] = useState(false)
    const [nameFilter, setNameFilter] = useState({
        organizer: '',
        post: '',
        refind: ''
    })
 const [err, setErr] = useState('')
     const [reasonText, setReasontext] = useState('')
    const fun1 = async() =>{
        await axios.get('http://localhost:3003/api/getUnSuccessfullOrganizers', {withCredentials: true})
        .then(el => setAllOrganizers((e) =>({...e, null: el.data})))

            await axios.get('http://localhost:3003/api/getFalselOrganizers', {withCredentials: true})
        .then(el => setAllOrganizers((e) =>({...e, false: el.data})))
        
        const allOrganizers = await axios.get('http://localhost:3003/api/getAllOrganizers', {withCredentials: true})
        .then(el => setAllOrganizers((e) => ({...e, all: el.data})))
    }
    const fun2 = async() =>{
        await axios.get('http://localhost:3003/api/getWaitPosts', {withCredentials: true})
        .then(el => setallPosts((e) =>({...e, null: el.data})))

            await axios.get('http://localhost:3003/api/getFalsePosts', {withCredentials: true})
        .then(el => setallPosts((e) =>({...e, false: el.data})))
        
        const allOrganizers = await axios.get('http://localhost:3003/api/getSuccessPosts', {withCredentials: true})
        .then(el => setallPosts((e) => ({...e, all: el.data})))

    }
    const fun3 = async() =>{
        await axios.get('http://localhost:3003/api/getWaitRefind', {withCredentials: true})
            .then(el => setallRefind((e) =>({...e, null: el.data})))
        await axios.get('http://localhost:3003/api/getFalseRefind', {withCredentials: true})
            .then(el => setallRefind((e) =>({...e, false: el.data})))
    }
    const successProfile = async(organizer_id) =>{
        await axios.post('http://localhost:3003/api/successProfile', {
            organizer_id: organizer_id 
        }, {withCredentials: true})
        fun1()
    }

    const sendFalse = async(organizer_id) =>{
           await axios.post('http://localhost:3003/api/postFalseOrganizer', {
                organizer_id: organizer_id,
                organizer_reasonToCancel: reasonText
           })
           .then(setIsRetText(false))
           .catch(err => setErr(err.response.data))
           fun1()
    }


    const successPost = async(post_id) =>{
        await axios.post('http://localhost:3003/api/successPost', {
            post_id: post_id
        }, {withCredentials: true})
        fun2()
    }
     const falsePost = async(post_id) =>{
        await axios.post('http://localhost:3003/api/falsePost', {
            post_id: post_id
        }, {withCredentials: true})
        fun2()
    }


    const successRefind = async(refind_id) =>{
        await axios.post('http://localhost:3003/api/successRefind', {
            refind_id: refind_id
        }, {withCredentials: true})
        fun3()
    }
    const FalseRefind = async(refind_id) =>{
        await axios.post('http://localhost:3003/api/falseRefind', {
            refind_id: refind_id
        }, {withCredentials: true})
        fun3()
    }
        
        
    
    return(
        <Context.Provider value={{
            filter, setFilter,
            bigPhoto, setBigPhoto,
            allOrganizers, setAllOrganizers,
            photoURL, setPhotoURL, successProfile,
            fun1,fun2,sendFalse,
            nameFilter, setNameFilter,
            allPosts, setallPosts,
            successPost, falsePost,
            allRefinds, setallRefind,
            fun3, successRefind, FalseRefind,
            reasonText, setReasontext,
            isRetText, setIsRetText,
            err, setErr
        }}>
            {children}
        </Context.Provider>
    )
}