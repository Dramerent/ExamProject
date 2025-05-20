import { useContext } from "react";
import { Context } from "../../../useContext";

export function OrganizerForm({el}){
        const {setBigPhoto, setPhotoURL, allOrganizers, successProfile} = useContext(Context)

    return(
        <div className="allOrganizers">
           
                   <div className = "organizer" key = {el.organizer_nickname}>
                       <h3>{el.organizer_nickname}</h3>
                       <p>{el.organizer_description}</p>
                       <h4>{el.organizer_phoneNum}</h4>
                       <div onClick={() =>{setBigPhoto(true); setPhotoURL(el.organizer_photo)}} className="organizer__img">
                           <img src={"http://localhost:3002/" + el.organizer_photo}  alt="Organizer"/>
                       </div>
                       <h4>{el.Sphere.sphere_name}</h4>
                       <h4>{el.callbacks.callback_name}</h4>   
                       <div onClick = {()=>{successProfile(el.organizer_id)}}className="buttons-group">
                           <button type="button">подтвердить</button>
                       </div>
                   </div>
           </div>
    )
}