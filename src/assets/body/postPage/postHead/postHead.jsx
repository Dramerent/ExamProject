import { useContext } from "react"
import { Context } from "../../../useContext"

export function PostHead(){
    const {pageInfo} = useContext(Context)

    return(
        <div className="post-head" >
            <div className="post-head__img">
                <img src={'./backend/' + pageInfo.post_image} alt="" />
            </div>
            <div className="post-head__text">
                <p className="h1-text h1-text_white">{pageInfo.post_name}</p>
                <p className="type-text">- {pageInfo.Genres.Sphere.sphere_name} - {pageInfo.Genres.genre_name} </p>
            </div>
            <div className="post-head__text">
                <p className="small-descriprion-text">{pageInfo.post_description}</p>                
            </div>
        </div>
    )
}