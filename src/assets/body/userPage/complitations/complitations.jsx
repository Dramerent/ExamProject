import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Post } from '../../mainPage/Post/Post';
import { useContext, useEffect } from 'react';
import { Context } from '../../../useContext';
import { UserTicket } from '../userticket/userTicket';
import { useNavigate } from 'react-router-dom';


export function Comnplitations({ref}){
  const nav = useNavigate()
    const {userLiked, userBuyd} = useContext(Context)

   useEffect(() =>{console.log(userBuyd)}, [userBuyd])
  
    if(userBuyd) return(  
        <>
        {userBuyd.getActualTickets.length > 0 ? (
           <div ref = {ref} className="other-posts-block">
           <p className="h2-text">купленные билеты</p>
           <div className="other-posts other-posts-block__other-posts ">
           <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Pagination ]}
               spaceBetween={25}
               breakpoints={{
                360:{
                    slidesPerView: 1.2,
                    navigation: false,
                    navigation: {
                        enabled: false
                    }
                },
                600:{
                    slidesPerView: 1.9,
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
                    slidesPerView: 4,
                },
                1700: {
                    slidesPerView: 5,
                    
                }
              }}
               slidesPerGroup = {1}
               navigation
               freeMode = {true}               // pagination={{ clickable: true }}
               // onSwiper={(swiper) => console.log(swiper)}
               // onSlideChange={() => console.log('slide change')}
             > 
               {
                   userBuyd.getActualTickets.map(el  =>{
                      return (
                      
                      <SwiperSlide
                      
                      className='mySwiper'>
                        <UserTicket key = {el.ticket_id}  post_id = {el.post_id}
                            Click = {() =>{
                                localStorage.setItem('postId', el.post_id)
                            }}
                            nav = {nav}
                            ticketId = {el.ticket_id}
                            ticketCount = {el.ticket_quantity}
                            genre = {el.ticket_sphere + ' - ' + el.ticket_genre}
                            meetPlace={el.ticket_meetPlace}
                            postName = {el.ticket_name}
                            isHere = {el.ticket_isHere}
                            cost = {el.ticket_cost}
                            gte={true}
                            userId={el.user_id}
                            image = {"./backend/" + el.ticket_image}
                            isRefind = {el.ticket_quantity == 0 ? true : false}
                            mettDate = {((el.ticket_date).split("Z")[0]).split("T")[0]}
                            meetTime = {((el.ticket_date).split("Z")[0]).split("T")[1]}>
                            
                                
                        </UserTicket>
                      </SwiperSlide>   
                    )})
               }
                {
                   userBuyd.getOldTickets.map(el  =>{
                      return (
                      
                        <SwiperSlide
                      
                        className='mySwiper'>
                     <UserTicket key = {el.ticket_id}  post_id = {el.post_id}
                            Click = {() =>{
                                localStorage.setItem('postId', el.post_id)
                            }}
                            nav = {nav}
                            ticketId = {el.ticket_id}
                            ticketCount = {el.ticket_quantity}
                            genre = {el.ticket_sphere + ' - ' + el.ticket_genre}
                            meetPlace={el.ticket_meetPlace}
                            postName = {el.ticket_name}
                            isHere = {el.ticket_isHere}
                            cost = {el.ticket_cost}
                            gte={false}
                            mettDate = {((el.ticket_date).split("Z")[0]).split("T")[0]}
                            meetTime = {((el.ticket_date).split("Z")[0]).split("T")[1]}>

                        </UserTicket>  
                        </SwiperSlide>  
                      
                        
                    )})
               }
               
               
               </Swiper>
           </div>
          </div>
        ): <></>} 
        {userLiked.length > 0 ?(
          <div ref = {ref}className="other-posts-block">
          <p className="h2-text">Вам понравилось</p>
          <div className="other-posts other-posts-block__other-posts other-posts_BC-gray other-posts_padding">
          <Swiper
              
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={25}
              breakpoints={{
                360:{
                    slidesPerView: 1.2,
                    navigation: false,
                    navigation: {
                        enabled: false
                    }

                },
                700:{
                  slidesPerView: 1.4,
                  navigation: {
                      enabled: true
                  }

              },
              920:{
                slidesPerView: 2,
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
              slidesPerGroup = {1}
              navigation
              // pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
            > 
              {
                  userLiked.map(el =>(
                    <SwiperSlide>
                     {
                      el ?  
                      <Post key = {el.post_id}
                          Click = {() =>{
                              localStorage.setItem('postId', el.post_id)
                              nav('/postPage')
                          }}
                          genreName = {el.Genres.Sphere.sphere_name+ ' - ' + el.Genres.genre_name}
                          meetingPlace={el.post_meetingPlace}
                          postName = {el.post_name}
                          elem = {' post_slider'}
                          image={"./backend/" + el.post_image}
                          >
                          
                      </Post> : 
                      <>
                      Поста не существует
                      </>
                     } 
                     
                    </SwiperSlide>
                      
                  ))
              }
              </Swiper>

          </div>
          
          </div>
        ) : <></>}
        </> 
      
        
    ) 
    else return <></> 
}