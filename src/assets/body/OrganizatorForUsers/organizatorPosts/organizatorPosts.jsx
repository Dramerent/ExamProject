import { useContext } from "react"
import { Context } from "../../../useContext"
import { Post } from "../../mainPage/Post/Post"
export function OrganizatorPosts({posts,nav}){
    const {getOrganizerOpen} = useContext(Context)
    return(
        <div className="other-posts-block">
            <p className="h2-text">Ваши мероприятия</p>
            <div className="other-posts other-posts-block__other-posts">
            {
                posts.map(el =>(
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
                    date={el.post_meetDate}
                    >
                </Post>
                ))
            }

            </div>
            
        </div>
    )
}