import { useContext } from "react"
import { Context } from "../../../useContext"
import { Post } from "../../mainPage/Post/Post"
export function OrganizersWaitPosts(){
    const {getOrganizerOpen, organizerParse, parse, TokenValid, organizatorPosts, getOrganizatorPosts } = useContext(Context)

    if(organizatorPosts)return(
        <>
            {
                organizatorPosts.map(el =>{if(el.post_checked != false && el.post_checked != true)return(
                <Post key = {el.post_id}
                        Click = {async() =>{
                            const tf = await getOrganizerOpen(nav)
                            if(!tf) return 0
                            localStorage.setItem('postId', el.post_id)
                            nav("/organizerIsHereS")
                        }}
                        genreName = {el.Genres.Sphere.sphere_name + ' - ' + el.Genres.genre_name}
                        meetingPlace={el.post_meetingPlace}
                        postName = {el.post_name}
                        image={"./backend/" + el.post_image}
                        elem = ' post_shadow post_main'
                        isChecked = {el.post_checked}
                        date={el.post_meetDate}>
                    </Post>
            )})
            }
        </>)
}