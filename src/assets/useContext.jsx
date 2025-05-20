import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { jwtDecode } from "jwt-decode"
import { TicketRefunds } from "./body/ticketRefunds/ticketRefunds";
import { useRef } from "react";
export const Context = createContext({})








export const ContextProvider = ({children}) => {   
   
    const [posts, setPosts] = useState([]) // для вывода всех карточек
    const [pageInfo, setPageInfo] = useState({}) // для вывода информации выбранной карточки мероприятиия
    

    // ВСЕ ДЛЯ СОРТИРОВКИ КАРТОЧЕК КОНЦЕРТОВ

    const [allExistsGenres, setAllExistsGenres] = useState([]) // для вывода всех имеющихся жанров и сфер
    const [organizerGenres, setOrganizerGenres] = useState([])
    const [allExistsSpheres, setallExistsSpheres] = useState([]) // для вывода всех имеющихся жанров и сфер

    const [date, setdate] = useState({
        startDate: '',
        endDate: ''
    })
    const [filter, setFilter] = useState({ 
        sphere: '',
        genre: ''
    }) // для выставления фильтров вывода карточек

    // ВСЕ ДЛЯ СОРТИРОВКИ КАРТОЧЕК КОНЦЕРТОВ

    const [autoraize, setAutoraize] = useState({
        mail: '',
        password: ''
    }) // для ввода данных логина
    const[registr, setRegistr] = useState({
        name: '',
        surname: '',
        mail: '',
        password: '',
        photo: '',
        code: ''
    }) // для ввода данных регистрации
    const [organizersRegistr, setOrganizersRegistr] = useState({
      nickname: '',
      description: '',
      photo: '',
      phoneNumber: 0,
      sphere: '',
      callbacks: '',
    }) //для регисмтрации нового аккаунта организатора
    const[updateUserData, setUpdateUserData] = useState({
      id: '',
      name: '',
      surname: '',
      mail: '',
      code: '',
      password: '',
      repeatPassword: '',
      photo: '',
      oldPhoto:''
  }) // для Обновления данных пользователя 
    const [parse, setParse] = useState({}) // для парсинга данных регистрации

    const [Err, setErr] = useState({
      login: '',
      register: '',
      editData: '',
      editPhoto: '',
      editMail: '',
      editPassword: '',
      buyTicket: '',
      moneyRet:'',
      registerOrganizator: '',
      createPost: '',
      sendComment: ''
    }
    ) //для вывода ошибок для всех форм 
    const [guests, setGuests] = useState([]) // для получения всех купивших билет для определенного билета

    const [organierPosts, setOrganierPosts] = useState([]) // для вывода всех концертов организатора
    
    const [userLiked, setUserLiked] = useState([]) // для вывода всех понравившихся концертов организатора
    
    const [userBuyd, setUserBuyd] = useState([]) // для вывода купленных билетов 

    const [reasons, setReasons] = useState([]) // получение причин возврата 
    const [getBuydOne, setGetBuydOne] = useState({}) // получение информации о возвращаемом мероприятии

    const[refindData, setRefindData] = useState({
      ticketRefunds_description: '',
      ticket_id: null,
      user_id: null,
      reason_id: null,
      ticket_quantity: 0 
    }) // для отправки заявки на возврат средств по определенному мероприятию
    const [refinds, setRefinds] = useState([]) // вывод всех заявок на возврат товара(ов)
    const mobileMenuFilter = useRef() // для определения стилей мобидльного меню в главном меню
    const dropdownRef = useRef() // для получения стилей выпадающего меню меню пользователя
    const dropdownRef1 = useRef() // для получения стилей выпадающего меню меню фильтров билетов / понравившегося
    const [notification, setNotification] = useState(false)
    const [clicked, setClidked] = useState()

    
    const [like, setLike] = useState('white') //для выставления беловго или черного цвета у иконки лайка
    const [callbacks, setCallbacks] = useState([]) // получение всех способов ответа
    const [organizerParse, setOrganizerParse] = useState([]) //для хранения данных организатора
    const [organizerParseForUsers, setOrganizerParseForUsers] = useState([]) //для хранения данных организатора

    const [userInfo, setUserInfo] = useState({
      userName: '',
      userSurname: ''
    }) // для поиска определенных купивших билет
    const [allSpheres, setAllSpheres] = useState() //получение всех сфер
    const [organizatorPosts, getOrganizatorPosts] = useState([]) // для хранения постов определенного организатора

    const [comments, setComments] = useState([]) //для хранения коментариев
    const getCallBacks = async() =>{
      const callbacks = await axios.get('http://localhost:3002/api/getCallBacks', {withCredentials: true})
      .then(el => el.data)
      .catch(err => err.response.data)

      setCallbacks(callbacks)
    }
    const getGenres = async() =>{ //получение всех жанров и сфер

      //получение всех жанров
      const allExistsGenresAndSpheres = await axios.get('http://localhost:3002/api/getAllExistsGenresAndspheres', {withCredentials: true})
      .then(el => el.data)

     
      setAllExistsGenres([...new Set (allExistsGenresAndSpheres.map(el => el.Genres.genre_name))])
      setallExistsSpheres([...new Set (allExistsGenresAndSpheres.map(el => el.Genres.Sphere.sphere_name))])

      //получение всех сфер
     
  }
  
    const TokenValid = async(nav) =>{      
      
      try {
        let token
        if(localStorage.getItem("accessToken")){
          token = jwtDecode(localStorage.getItem("accessToken"))
        }
        else{
          token = ''
        }
        const currentDate = Math.floor(Date.now() / 1000);
        const ToF = token.exp <=  currentDate && token !='' ? true : false
        await axios.post('http://localhost:3002/api/valid',
            {
              accessToken: !ToF ? localStorage.getItem("accessToken") : ''
            },
            {withCredentials: true}
          )
          .then((el) =>{
            localStorage.setItem("accessToken", el.data) 
            const parsed = jwtDecode(localStorage.getItem("accessToken")) 
            setParse(parsed)
          }).catch(() =>{
            setParse('')
            nav ? nav('/login') : null
            return false
          })  
  
      } catch (error) {
        setParse('')
        nav ? nav('/login') : null
        return false
      }
      return true
    } //для проверка валидности токенов
    const userDataTokenValid = async(nav) =>{
   
        let token
        if(localStorage.getItem("editVerifyToken")){
          token = jwtDecode(localStorage.getItem("editVerifyToken"))
        }
        else{
          nav ? nav('/verifyToUpdate') : ''
          return false
        }
        const currentDate = Math.floor(Date.now() / 1000);
        const ToF = token.exp <=  currentDate ? true : false
          await axios.post('http://localhost:3002/api/verifyToVerify',
            {
              editVerifyToken: !ToF ? localStorage.getItem("editVerifyToken") : ''
            },{withCredentials: true}
          )
          .then((el) =>{
            localStorage.setItem("editVerifyToken", el.data) 
            nav('/editUserData')
            return true
           
          }
        ).catch(() =>{
            nav ? nav('/verifyToUpdate') : null
            return false 
        })  

        return true
    
    } //для проверка валидности токена редактирования информации о ползователе
    const getOrganizerOpen = async() =>{
      if(parse.user_id !== undefined){
        const postOrganizerInfo = await axios.post('http://localhost:3002/api/getOrganizer', {
          user_id: parse.user_id,
          }, {withCredentials: true})
        .then(el => el.data)
        .catch((error) =>{})
          if(postOrganizerInfo){
            if( postOrganizerInfo.organizer_verified == true){
              setOrganizerParse(postOrganizerInfo)
              return true
            }
            else if( postOrganizerInfo.organizer_verified == null ||
               postOrganizerInfo.organizer_verified == undefined){
              return 5
            }
            else if( postOrganizerInfo.organizer_verified == false){
              setOrganizerParse(postOrganizerInfo)
              return false
            }
          }
          else {
            return 999
          }
      } //получение данных организатора для организатора
    }
    const postValid = async() =>{
        const postId = localStorage.getItem('postId')? localStorage.getItem('postId'): undefined
        if(postId != undefined){
        const func1 = async() =>{

        // получение информации о выбранном посте
        const getPostInfo =  await axios.post('http://localhost:3002/api/getChoicedPost',{
            post_id: parseInt(postId)
        },{withCredentials: true})
        .then(el => el.data) 

        // получение остальных постов концертов этого исполнителя
        const autorConcerts =  await axios.post('http://localhost:3002/api/getAutorConcerts', {
            organizer_id: getPostInfo.Organizers.organizer_id,
            post_id: parseInt(postId)
        }, {withCredentials: true})
        .then(el => el.data)        
  
    
        setOrganierPosts(autorConcerts)
        setPageInfo(getPostInfo)  

        // получение информации о лайкнутых постах  
        const userLikedPost = await axios.post('http://localhost:3002/api/getLiked', {user_id: parse.user_id}, 
            {withCredentials: true}).then(el => el.data)
        setUserLiked(userLikedPost) 

        const isLiked = userLikedPost.some(el => el.post_id == parseInt(postId))
        if(isLiked){return setLike('black')} else { return setLike('white')}
      }    
      func1()
    }
  } // получение данных о выбранном посте
    

    const getAllSpheres = async() =>{
      

      const getAllSpheres = await axios.get('http://localhost:3002/api/getAllSpheres', {withCredentials: true})
      .then(el => el.data)
      .catch(error => console.log(error.response.data))
      setAllSpheres(getAllSpheres)
    }
    return <Context.Provider value = {{
        posts, setPosts,
        pageInfo, setPageInfo,
        filter, setFilter,
        allExistsGenres, setAllExistsGenres,
        allExistsSpheres, setallExistsSpheres,
        date, setdate,

        autoraize, setAutoraize,
        registr, setRegistr,
        Err, setErr,
        parse, setParse, TokenValid,
        organierPosts, setOrganierPosts,
        userLiked, setUserLiked,
        userBuyd, setUserBuyd,
        updateUserData, setUpdateUserData, 
        userDataTokenValid,

        reasons, setReasons,
        getBuydOne, setGetBuydOne,
        refindData, setRefindData,
        refinds, setRefinds,
        notification, setNotification,
        mobileMenuFilter,
        dropdownRef,dropdownRef1, 
        clicked, setClidked,
        getOrganizerOpen,
        organizerParse, setOrganizerParse,
        getGenres,


        organizersRegistr, setOrganizersRegistr,
        allSpheres, setAllSpheres,
        getAllSpheres,
        getCallBacks, callbacks, setCallbacks,
        organizatorPosts, getOrganizatorPosts,
        organizerGenres, setOrganizerGenres,
        comments, setComments,
        organizerParseForUsers, setOrganizerParseForUsers, 
        // getOrganizerForUsers,

        postValid,
        guests, setGuests,
        userInfo, setUserInfo,
        like, setLike

       
    }}>
        {children}

    </Context.Provider>
}
