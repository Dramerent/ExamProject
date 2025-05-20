import { useContext, useEffect, useState } from "react"
import { Context } from "../../useContext"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
export function OrganizerForm(){

    const nav = useNavigate()
    const { Err, setErr,getOrganizerOpen,organizerParse, organizersRegistr, TokenValid, setOrganizersRegistr, allSpheres, getAllSpheres, callbacks, parse, getCallBacks} = useContext(Context)
    const [prev, setPrev] = useState()
    useEffect(() =>{
        TokenValid(nav)
        getAllSpheres()
        getCallBacks()
    }, [])
    useEffect(() =>{
    const Organizers = async () =>{
        const tf = await getOrganizerOpen(nav)   
        console.log(tf) 
        if(tf == true) return nav('/organizatorMain')
        else if(tf == 999) return nav('/OrganizerForm')
        else if(tf == false) {
            if(window.location.pathname == '/userPage') { 
            return nav('/EditOrganizerData') 
            }
            else { return nav('/userPage')}
        }
        else return
        } 
        Organizers()   
    }, [organizerParse])
    
    const registerOrganizer = async() =>{
        const tf = await TokenValid(nav)
        if(!tf) console.log(tf)
            
        setErr((el) =>({...el, registerOrganizator: ''}))
        const formData = new FormData()
        formData.append('nickname', organizersRegistr.nickname)
        formData.append('description', organizersRegistr.description)
        formData.append('phoneNumber', organizersRegistr.phoneNumber)
        formData.append('callback', organizersRegistr.callbacks)
        formData.append('photo', organizersRegistr.photo)
        formData.append('sphere', organizersRegistr.sphere)
        formData.append('id', parse.user_id)

        const postOrganizerInfo = await axios.post('http://localhost:3002/api/registerOrganizer', formData , {withCredentials: true})
        .then(el => {el.data;   nav('/userPage')})
        .catch((err) => {return setErr((el) => ({...el, registerOrganizator: err.response.data ? err.response.data : 'ошибка'}))})
        
    }

    if(allSpheres && callbacks) return(
        <>
            <div className="return-text-block">
                <Link to ={'/userPage'}className="toBack-text body-block__toBack-text">Назад</Link>
            </div>
            <div className="organizer-form body-block__organizer-form">
                {Err.registerOrganizator ? <p className="error-text">{Err.registerOrganizator}</p> : null}
                <p className="h2-text">регистрация организатора</p>
                <input className="input-type1 input-type1_w-100" type="text" placeholder="Никнейм" onChange={(elem) =>{setOrganizersRegistr((el) =>({...el, nickname: elem.target.value}))}}/>
                <textarea placeholder="Описание" onChange={(elem) =>{setOrganizersRegistr((el) =>({...el, description: elem.target.value}))}}/>
            
                <input hidden type="file" id="file" accept="image/*" onChange={(elem) =>{ 
                    if(elem.target.files && elem.target.files[0]){         
                        setOrganizersRegistr((e) =>({...e, photo: elem.target.files[0]}))
                        setPrev(URL.createObjectURL(elem.target.files[0]))
                }}} />
          
             
                <input className="input-type1 input-type1_w-100" type="text" placeholder="номер телефона" onChange={(elem) =>{setOrganizersRegistr((el) =>({...el, phoneNumber: elem.target.value}))}}/>
                <select className="select-type1" type="text" placeholder="сфера" onChange={(elem) =>{setOrganizersRegistr((el) =>({...el, sphere: elem.target.value}))}}>
                    <option hidden disabled selected value="">выбирете сферу</option>
                    {
                        allSpheres.map(el =>(
                            <option value={el.sphere_id}>{el.sphere_name}</option>
                        ))
                    }
                </select>
                <select className="select-type1" type="text" placeholder="способ связи" onChange={(elem) =>{setOrganizersRegistr((el) =>({...el, callbacks: elem.target.value}))}}>
                    <option disabled hidden selected value="" >выбирете способ связи</option>
                    {
                      callbacks.map(el =>(
                        <option value={el.callback_id}>{el.callback_name}</option>
                      ))   
                    }
                </select>
                <label className="button-type1" htmlFor="file">выбрать изображение</label>
                {prev ? (
                <div  className="user-prev">
                    <p className="h3-text">фото профиля</p>
                    <div className="Organizator-page_img">
                        <img src={prev} />
                    </div> 
                    <p className="h3-text">фото ссылки</p>
                    <div className="autor-image">
                        <img src={prev} />
                    </div>
                </div>
               
            ) : null}
                <button className="button-type1 button-type1_bg-blue" onClick={() =>{registerOrganizer()}}>отправить заявку</button>
            </div>

        </>
    )
}