import { useContext, useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Context } from "../../useContext"
import axios from "axios"
export function EditOrganizerData(){
    const nav = useNavigate()
    const { Err, setErr,organizerParse, organizersRegistr,getOrganizerOpen, TokenValid, setOrganizersRegistr, allSpheres, getAllSpheres, callbacks, parse, getCallBacks} = useContext(Context)
    const [prev, setPrev] = useState() 
    useEffect(() =>{
        TokenValid(nav)
        getOrganizerOpen(nav)
        getAllSpheres()
        getCallBacks()
    }, [parse.user_id])

    useEffect(() =>{
        const Organizers = async () =>{
            const tf = await getOrganizerOpen(nav)
            if(tf == true) return 
            else if(tf == false) {
              return 0
            }
            
            else if(tf == 5 && window.location.pathname != '/userPage'){ 
                return nav('/userPage')
            }
        }
        Organizers()
    }, [organizerParse])
const changeOrganizerInfo = async() =>{
    const tf = await TokenValid(nav)
    if(!tf) return 0
    getOrganizerOpen(nav)
    setErr((el) =>({...el, registerOrganizator: ''}))
    const formData = new FormData()
    formData.append('nickname', organizersRegistr.nickname ? organizersRegistr.nickname : organizerParse.organizer_nickname)
    formData.append('description', organizersRegistr.description ? organizersRegistr.description : organizerParse.organizer_description)
    formData.append('phoneNumber', organizersRegistr.phoneNumber ? organizersRegistr.phoneNumber : organizerParse.organizer_phoneNum)
    formData.append('callback', organizersRegistr.callbacks ? organizersRegistr.callbacks : organizerParse.callback_id)
    formData.append('sphere', organizersRegistr.sphere ? organizersRegistr.sphere : organizerParse.sphere_id)
    formData.append('id', organizerParse.organizer_id)

    const postOrganizerInfo = await axios.post('http://localhost:3002/api/updateOrganizerInfo', formData , {withCredentials: true})
    .then(el => el.data)
    .then(nav('/userPage'))
    .catch(el =>{return console.log('ошибка')})
    }


    const changeOrganizerPhoto = async() =>{
        const formData = new FormData()
        formData.append('id', organizerParse.organizer_id)
        formData.append('photo', organizersRegistr.photo ? organizersRegistr.photo : '')
        formData.append('oldPhoto', organizerParse.organizer_photo)
        await axios.post('http://localhost:3002/api/updateOrganizerPhoto',
            formData,
            {withCredentials: true}) 
            .then(nav('/userPage'))
            .catch((error) =>{ return setErr((el) => ({...el, registerOrganizator: error.response.data ? error.response.data : 'ошибка'}))})
        }

    if(allSpheres && organizerParse || allSpheres && organizerParse && organizerParse.organizer_verified == false)return(
        <>
            <div className="return-text-block">
                <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
            </div>     
            <div className="organizer-form body-block__organizer-form">
                {Err.registerOrganizator && <p className="error-text">{Err.registerOrganizator}</p>}
                <p className="h2-text"> главная информация  </p>
                    <input placeholder="никнейм..." className="input-type1 input-type1_w-100" onChange={(e) =>{setOrganizersRegistr((el) =>({...el, nickname: e.target.value }))}} type="text"/>
                    <textarea placeholder="описание..."  onChange={(e) =>{setOrganizersRegistr((el) =>({...el, description: e.target.value }))}} type="text"  />
                    <input placeholder="номер телефона..." className="input-type1 input-type1_w-100"  onChange={(e) =>{setOrganizersRegistr((el) =>({...el, phoneNumber: e.target.value }))}}type="number"/>
                    <select className="select-type1" onChange={(e) =>{setOrganizersRegistr((el) =>({...el, callbacks: e.target.value }))}} name="" id="">
                        <option disabled hidden selected value="">Связь:</option>
                        {
                            callbacks.map(el =>(
                                <option value={el.callback_id}>{el.callback_name}</option>
                            ))
                        }
                    </select>
                    <select className="select-type1" onChange={(e) =>{setOrganizersRegistr((el) =>({...el, sphere: e.target.value }))}} name="" id="">
                        <option  disabled hidden selected value="">Сфера:</option>
                        {
                            allSpheres.map(el =>(
                                <option value={el.sphere_id}>{el.sphere_name}</option>
                            ))
                        }
                    </select>
                    <button onClick = {() =>{changeOrganizerInfo()}}type="button" className="button-type1 button-type1_bg-blue">отправить</button>

                    <div className="ghorizontal-double-line" />

                    
                    <input hidden type="file" id="file" accept="image/*" onChange={(elem) =>{ 
                    if(elem.target.files && elem.target.files[0]){         
                        setOrganizersRegistr((e) =>({...e, photo: elem.target.files[0]}))
                        setPrev(URL.createObjectURL(elem.target.files[0]))
                }}} />
                    <label className="button-type1" htmlFor="file">выбрать изображение</label>                    
                    {prev ? (
                        <div  className="user-prev">
                            <p className="h3-text">фото профиля</p>
                            <div className="Organizator-page__img">
                                <img src={prev} />
                            </div> 
                            <p className="h3-text">фото ссылки</p>
                            <div className="autor-image">
                                <img src={prev} />
                            </div>
                        </div>                    
                    ) : null}
                    <button onClick = {() =>{(changeOrganizerPhoto())}}type="button" className="button-type1 button-type1_bg-blue">отправить</button>

          
             
                
            </div>
        </>
    )
}