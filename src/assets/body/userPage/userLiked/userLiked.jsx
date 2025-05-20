import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Post } from '../../mainPage/Post/Post';
import { useContext, useEffect } from 'react';
import { Context } from '../../../useContext';
import { Filters } from '../../mainPage/filters/filters';
import { useNavigate } from 'react-router-dom';

export function UserLiked(){
    const nav = useNavigate()
    useEffect(() =>{filter.genre = ''
        filter.sphere = '',
        date.startDate = '0000-00-00'
        date.endDate = '9999-00-00'
    }, [])
    const {userLiked, filter, date} = useContext(Context)
    if(userLiked.length > 0) return (
        <>
        <div className="other-posts-block">
            <Filters />
            <div className="other-posts other-posts-block__other-posts other-posts_padding  other-posts_BC-gray">
            
            {
                userLiked.map(el =>{
                    if (el.Genres.Sphere.sphere_name.indexOf(filter.sphere) == 0 
                        && el.Genres.genre_name.indexOf(filter.genre) == 0
                        && el.post_meetDate > (date.startDate ? date.startDate : '0000-00-00')
                        && el.post_meetDate < (date.endDate ? date.endDate : '9999-00-00')

                    )
                    return(
                    <Post key = {el.post_id}
                        Click = {() =>{
                            localStorage.setItem('postId', el.post_id)
                            nav('/postPage')
                        }}
                        genreName = {el.Genres.Sphere.sphere_name + ' - ' + el.Genres.genre_name}
                        meetingPlace={el.post_meetingPlace}
                        postName = {el.post_name}
                        elem = "post_shadow post_main"
                        image = {"./backend/" + el.post_image}
                        >
                    </Post>
                    
                )})
            }
               

            </div>
            
        </div>
        </>
    )
    else return <></>
}