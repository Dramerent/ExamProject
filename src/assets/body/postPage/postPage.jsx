import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../useContext"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { jwtDecode } from "jwt-decode";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

import { Post } from "../mainPage/Post/Post";
import { PostMainHead } from "./postMainHead/postMainHead";
import { PostInfo } from "./postInfo/postInfo";
import { PostHead } from "./postHead/postHead";
import { MainFinal } from "./mainFinal/mainFinal";


export function PostPage(){
    const nav = useNavigate()
    const { postValid, pageInfo, organierPosts } = useContext(Context)
   
    useEffect(() =>{
        postValid(nav)
    }
    , [localStorage.getItem('postId')])


    
   
    if(pageInfo.post_id) return(
        <> 
            <div className="return-text-block">
                <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
            </div>           
            <div className="post-block body-block__post-block">                
                <PostHead />
                <PostMainHead/>
                <div className="post-main">
                    <PostInfo />
                    <MainFinal/>
                    <div className="other-posts-block">
                        {organierPosts.length > 0 ? (<>
                        <p className="h2-text">Еще от этого автора</p>
                        <div className="other-posts other-posts-block__other-posts other-posts_BC-gray other-posts_padding">
                        <Swiper
                            modules={[Navigation, Pagination, FreeMode]}
                            spaceBetween={25}        
                            breakpoints={{
                                360:{
                                    slidesPerView: 1.3,
                                    navigation: false,
                                    navigation: {
                                        enabled: false
                                    }

                                },
                                920:{
                                    slidesPerView: 2.5,
                                    navigation: {
                                        enabled: false
                                    }

                                },
                                1400:{
                                    slidesPerView: 3.5,
                                },
                                1700: {
                                    slidesPerView: 4,
                                    
                                }

                            }}
                            navigation = {true}
                            freeMode
                            > 
                            {
                                organierPosts.map(el =>(
                                <SwiperSlide>
                                    <Post key = {el.post_id}
                                        Click = {() =>{
                                            localStorage.setItem('postId', el.post_id)
                                            nav('/postPage')
                                        }}
                                        genreName = {el.Genres.Sphere.sphere_name + ' - ' + el.Genres.genre_name}
                                        meetingPlace={el.post_meetingPlace}
                                        postName = {el.post_name}
                                        elem = {' post_slider'}
                                        image={"http://localhost:3002/" + el.post_image}>
                                        
                                    </Post>
                                </SwiperSlide>
                                    
                                ))
                            }
                        </Swiper>
                        </div></>): ''}
                    </div>
                </div>
            </div> 
        </> 
    )
else return(
    <>
    <p>странрца не найдена</p>
    <Link to = "/">домой</Link>
    </>
)
   
}