import { useContext, useState } from "react";
import { Context } from "../../../useContext";
import axios from "axios";

export function OrganizerForm({el}){
    const {setBigPhoto, setPhotoURL, setAllOrganizers,sendFalse, successProfile, fun1} = useContext(Context)
        const [isRetText, setIsRetText] = useState(false)
        const [reasonText, setReasontext] = useState('')
        const [err, setErr] = useState('')
       
        const sendTrue = (organizer_id) =>{
            successProfile(organizer_id)
        }
    return(
         <div className = "organizer" key = {el.organizer_nickname}>
            <h3>{el.organizer_nickname}</h3>
            <p>{el.organizer_description}</p>
            <h4>{el.organizer_phoneNum}</h4>
            <div onClick={() =>{setBigPhoto(true); setPhotoURL(el.organizer_photo)}} className="organizer__img">
                <img src={"http://localhost:3002/" + el.organizer_photo}  alt="Organizer"/>
            </div>
            <h4>{el.Sphere.sphere_name}</h4>
            <h4>{el.callbacks.callback_name}</h4>   
            <div className="buttons-group">
                <button onClick={() =>{
                    setIsRetText(true)
                }} type="button">отклонить</button>
            </div>
            {

                isRetText && el.organizer_id ? 
                <>
                    <br />
                    {}
                    <p>причина отказа:</p>
                    <textarea name="" id="" onChange={(el) =>{setReasontext(el.currentTarget.value)}}></textarea> 
                    <button onClick={() =>{sendFalse(el.organizer_id)}} type="button">отправить</button>
                </>: null
            }

        </div>
    )
}