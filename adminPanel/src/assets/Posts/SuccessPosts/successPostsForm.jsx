import { useContext } from "react";
import { Context } from "../../../useContext";

export function SuccessPostsForm({el}){
    const {setBigPhoto, setPhotoURL, falsePost} = useContext(Context)
    return(
        <>
        <div className="postForm">
            <div className="postForm__header">
                <h3>{el.post_name}</h3> 
                <h3>{el.post_id}</h3>
            </div>
            
            <div onClick={() =>{setBigPhoto(true); setPhotoURL(el.post_image)}} className="postForm__img">
                <img src={"http://localhost:3002/" + el.post_image} alt="" />
            </div>
            <p>{el.post_description}</p>
            <p>{el.post_fullDescription}</p>
            <p>стоимость: {el.post_cost}</p>
            <p>все места: {el.post_allSeats}</p>
            <p>купленные места: {el.post_buydSeats}</p>
             <p>Дата: {el.post_meetDate.split("T")[0]}</p>
            <p>{el.Genres.genre_name} | {el.Genres.Sphere.sphere_name}</p>
            <div className="buttons-group">
                <button onClick = {()=>{falsePost(el.post_id)}}type="button">отказать</button>
            </div>
        </div>
        </>
    )
}