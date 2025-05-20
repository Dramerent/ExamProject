import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { Context } from "../../useContext"
import { useNavigate } from "react-router-dom"

export function CreatePost(){
    const [isReady, setIsReady] = useState(false)
    const {Err,  organizerGenres, setOrganizerGenres, setErr, getOrganizerOpen,organizerParse, parse, TokenValid } = useContext(Context)
    const nav = useNavigate()
    useEffect(() =>{
        TokenValid(nav)
        const Organizers = async () =>{
            const tf = await getOrganizerOpen(nav)    
            if(tf == true) return 
            else if(tf == false) {return}
            else if(tf == 5 && window.location.pathname != '/userPage') return nav('/userPage')
          }
          Organizers()
    }, [parse.user_id])
    useEffect(() =>{
        const getGenres = async() =>{
            const a =  await axios.post('http://localhost:3002/api/getGenres', {
                sphere_id: 1
            }).then(el => (el.data))
            setOrganizerGenres(a) 
        }
        getGenres() 
        setIsReady(true)
    
    }, [organizerParse])
    const [createPost, setCreatePost] = useState({
        post_name: '',
        post_description: '',
        post_fullDesctiption: '',
        post_cost: 0,
        post_freeSeats: 0,
        post_genre: '',
        post_meetDate: '',
        post_meetPlace: '',
        post_image: '',
        organizer_id: null
    })
    useEffect(() =>{console.log(createPost.post_cost)}, [createPost.post_cost])

    const postPostInfo = async()=>{
        console.log(createPost.post_freeSeats)
        setErr((e) =>({...e, createPost: ''}))
        const formdata = new FormData()
        formdata.append('post_name', createPost.post_name)
        formdata.append('post_decription', createPost.post_description)
        formdata.append('post_fullDecription', createPost.post_fullDesctiption)
        formdata.append('post_cost', createPost.post_cost)
        formdata.append('post_allSeats', createPost.post_freeSeats)
        formdata.append('post_genre', createPost.post_genre)
        formdata.append('post_meetDate', createPost.post_meetDate)
        formdata.append('post_meetPlace', createPost.post_meetPlace)
        formdata.append('post_image', createPost.post_image)
        formdata.append('organizer_id', organizerParse.organizer_id)   
        setCreatePost((el) =>({...el, organizer_id: organizerParse.organizer_id}))
        await axios.post('http://localhost:3002/api/postOrganizerPosts', formdata, {withCredentials: true})
        .then(el => nav('/organizatorMain'))
        .catch((error) => setErr((e) =>({...e, createPost:  error.response && error.response.data ? error.response.data : 'ошибка'})))
    }


   
   if(isReady) return(
        <>
           <div className="organizer-form body-block__organizer-form">
                {Err.createPost ? <p className="error-text">{Err.createPost}</p> : ''}
                <p className="h2-text">создание мероприятия</p>
                <input className="input-type1 input-type1_w-100" onChange={(e) =>{setCreatePost((el) =>({...el, post_name: e.target.value}))}} type="text" placeholder="Наименование"/>
                <input className="input-type1 input-type1_w-100" type="text" onChange={(e) =>{setCreatePost((el) =>({...el, post_description: e.target.value}))}} placeholder="Краткое описание"/> 
                <textarea className="input-type1 input-type1_w-100" type="text" onChange={(e) =>{setCreatePost((el) =>({...el, post_fullDesctiption: e.target.value}))}} placeholder="Полное описание"/>
                <select className="select-type1" onChange={(e) =>{setCreatePost((el) =>({...el, post_genre: e.target.value}))}} name="" id="">
                    <option selected disabled hidden value="">Жанр:</option>
                    {organizerGenres.map(el =>(
                        <option value={el.genre_id}>{el.genre_name}</option>
                    ))}
                </select>
                <input className="input-type1 input-type1_w-100" type="date" onChange={(e) =>{setCreatePost((el) =>({...el, post_meetDate: e.target.value}))}} placeholder="дата встречи"/> 
                <input className="input-type1 input-type1_w-100" onChange={(e) =>{setCreatePost((el) =>({...el, post_meetPlace: e.target.value}))}} type="text" placeholder="место встречи"/>
                <input hidden onChange={(e) =>{setCreatePost((el) =>({...el, post_image: e.target.files[0]}))}} type="file" id="file" accept="image/*"/>
                <input className="input-type1 input-type1_w-100" type="number" onChange={(e) =>{setCreatePost((el) =>({...el, post_freeSeats: e.target.value}))}} placeholder="Свободные места"/>
                <input className="input-type1 input-type1_w-100" type="number" onChange={(e) =>{setCreatePost((el) =>({...el, post_cost: e.target.value}))}} placeholder="стоимость"/>

                <label className="button-type1 " htmlFor="file">выбрать изображение</label>
                <button type="button" onClick  = {() => postPostInfo()}className="button-type1 button-type1_bg-blue">отправить</button>

            </div> 
        </>
    )
}