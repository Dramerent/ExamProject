import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../useContext"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { Link } from "react-router-dom"
import axios from "axios"
export function EditUserData(){
    const {updateUserData, setUpdateUserData, Err, setErr, parse, userDataTokenValid,TokenValid} = useContext(Context)
    const [prev, setPrev] = useState()
    const imageRef = useRef()
    const nav = useNavigate()
    const [mailVerify, setMailVerify] = useState(false)
    const [ver, setVer ] = useState('')
    useEffect(() => {   
        userDataTokenValid(nav)
        setErr((el) => ({...el, register: ''}))
        setUpdateUserData((el) =>({...el, id: parse.user_id}))
        

    }, [])
    const postUserMail = async() =>{
        try {
            const f = await userDataTokenValid(nav)
            if(!f) return 
            setErr((el) => ({...el, editMail: ''}))
            setVer('отправление кода...')
            const formData = new FormData()
            formData.append('user_mail', updateUserData.mail ? updateUserData.mail : '')
            formData.append('user_id', updateUserData.id)
            await axios.post('http://localhost:3002/api/updateUserMailVerify',
                formData,
                {withCredentials: true}) 
              .then((el) => {
                setErr((el) => ({...el, editMail: ''}))
                setMailVerify(true)
                setVer('')
            })
            .catch((error) => setErr((el) => ({...el, editMail: error.response.data ? error.response.data : 'ошибка'})))
  
        } catch (err) {
            TokenValid(nav)
        }

 
    }
      const postMail = async() =>{
        try {
            
            const f = await userDataTokenValid(nav)
            if(!f) return 
           
            setErr((el) => ({...el, editMail: ''}))
            setVer('')
            const formData = new FormData()
            formData.append('user_code', updateUserData.code ? updateUserData.code : 0)
            formData.append('user_mail', updateUserData.mail ? updateUserData.mail : parse.user_mail)
            formData.append('user_id', parse.user_id)
            await axios.post('http://localhost:3002/api/updateUserMail',
                formData,
                {withCredentials: true}) 
                .then((el) =>{
                    localStorage.setItem('accessToken', el.data.accessToken)
                    setErr((el) => ({...el, editMail: ''}))
                    setMailVerify(false)
                    setVer('')
                    setUpdateUserData((el) => ({...el, name: ''}))
                    setUpdateUserData((el) => ({...el, surname : ''}))
                    setUpdateUserData((el) => ({...el, email : ''}))
                    
                }
                )
            .catch((error) => setErr((el) => ({...el, editMail: error.response.data ? error.response.data : 'ошибка'})))
      
        } catch (error) {
            TokenValid(nav)
        }
    }
    const postMainInfo = async() =>{
        try {
            
            const f = await userDataTokenValid(nav)
            if(!f) return 
           
            
            const formData = new FormData()
            formData.append('user_name', updateUserData.name ? updateUserData.name : parse.user_name)
            formData.append('user_surname', updateUserData.surname ? updateUserData.surname : parse.user_surname)
            formData.append('user_id', updateUserData.id)
            await axios.post('http://localhost:3002/api/updateUserMainInfo',
                formData,
                {withCredentials: true}) 
                .then((el) =>{
                    console.log(el.data)
                    localStorage.setItem('accessToken', el.data.accessToken)
                    setErr((el) => ({...el, editData: ''}))
                    setUpdateUserData((el) => ({...el, name: ''}))
                    setUpdateUserData((el) => ({...el, surname : ''}))
                    
                }
                )
            .catch((error) => setErr((el) => ({...el, editData: error.response.data ? error.response.data : 'ошибка'})))
      
        } catch (error) {
            TokenValid(nav)
        }
    }
    const postImage = async() =>{
        try {
            const f = await userDataTokenValid(nav)
            if(!f) return

            const formData = new FormData()
            formData.append('user_id', parse.user_id)
            formData.append('user_photo', updateUserData.photo)
            formData.append('user_oldPhoto', parse.user_photo)
            await axios.post('http://localhost:3002/api/updateUserPhoto',
                formData,
                {withCredentials: true}) 
            .then((el) =>{
                localStorage.setItem('accessToken', el.data.accessToken)
                setErr((el) => ({...el, editPhoto: ''}))
                setUpdateUserData((e) =>({...e, photo: ''}))
                setPrev()
            }
            )
            .catch((error) => setErr((el) => ({...el, editPhoto: error.response.data ? error.response.data : 'ошибка'})))
        } catch (error) {
            console.log(error)  
            TokenValid(nav) 
        }
    }
    const postPassword = async() =>{
        const f = await userDataTokenValid(nav)
        if(!f) return 


        else console.log('все норм')
        
        const formData = new FormData()
        formData.append('user_password', updateUserData.password)
        formData.append('user_repeatPassword', updateUserData.repeatPassword)
        formData.append('user_id', parse.user_id)
        await axios.post('http://localhost:3002/api/updateUserPassword',
            formData,
            {withCredentials: true}) 
            .then((el) =>{
                localStorage.clear()   
                setErr((el) => ({...el, editPassword: ''}))
                setUpdateUserData((el) => ({...el, password : ''}))
                return TokenValid(nav)   
            }
            )
            .catch((error) => setErr((el) => ({...el, editPassword: error.response.data ? error.response.data : 'ошибка'})))
    }
    return(
        <>
        <div className="return-text-block">
            <Link to = {'/userPage'} className="toBack-text body-block__toBack-text">Назад</Link>
        </div> 
        
        <div className="register-form body-block__register-form">
        <p className="h3-text">Смена основных данных</p>
            {Err.editData ? <p className="error-text">{Err.editData}</p> : null}
            <input className="input-type1 input-type1_w-100" type="text" onChange = {(el) => {setUpdateUserData((e) => ({...e, name: el.target.value}))}} placeholder="введите свое имя(от 4-х)"/>
            <input className="input-type1 input-type1_w-100" type="text" onChange = {(el) => {setUpdateUserData((e) => ({...e, surname: el.target.value}))}} placeholder="введите свою фамилию"/>
             <button type='button' className = "button-form button-form_bg-blue"onClick={() =>{postMainInfo()}}> <span> <p className="button-text">изменить</p></span> 
            </button>
            <div className="ghorizontal-double-line" />
            {Err.editMail ? <p className="error-text">{Err.editMail}</p> : null}

            <p className="h3-text">Смена почты</p>

            <input className="input-type1 input-type1_w-100" type="email" onChange =  {(el) => {setUpdateUserData((e) => ({...e, mail: el.target.value}))}} placeholder="введите свой email"/>
            <button type='button' className = "button-form button-form_bg-blue"onClick={() =>{postUserMail()}}> <span> <p className="button-text">изменить</p></span> 
            </button>
             {
                ver ? <p>{ver}</p> : null
            }
              {
                mailVerify == true ? (
                <>
                <p>отправьте код из почты: </p>
                    <input className="input-type1 input-type1_w-100" type="text" onChange =  {(el) => {setUpdateUserData((e) => ({...e, code: el.target.value}))}} placeholder="введите код..."/>
                    <button type='button' className = "button-type1 button-type1_bg-blue"onClick={() =>{postMail()}}> <span> <p className="button-text">отправить </p></span> 
                    </button>
                </>) : null
            }

            <div className="ghorizontal-double-line" />
            <p className="h3-text">Смена фотографии профиля</p>
            {Err.editPhoto ? <p className="error-text">{Err.editPhoto}</p> : null}
            <input hidden className="input-type1 input-type1_w-100" type = "file" id="file" accept="image/*" onChange = {
                (el) =>{                    
                if(el.target.files && el.target.files[0]){       
                    console.log(el.target.files[0])        
                    setUpdateUserData((e) =>({...e, photo: el.target.files[0]}))
                    setPrev(URL.createObjectURL(el.target.files[0]))
                }
            }}placeholder="выебире изображение"/>
       
            {prev ? (
                <div className="user-prev">
                    <h3>фото профиля</h3>
                    <div className="user-photo">
                        <img ref = {imageRef} src={prev} />
                    </div> 
                </div>
               
            ) : null}
               {prev ? (
                <div className="user-prev">
                    <h3>мини-фото</h3>
                    <div className="user-header-photo">
                        <img  ref = {imageRef} src={prev} />
                    </div> 
                </div>
               
            ) : null}
            
                <label className="button-form" htmlFor="file">выбрать</label>
            <button type='button' className = "button-form button-form_bg-blue"onClick={async() =>{postImage()}}> <span> <p className="button-text">изменить</p></span> 
            </button>

            <div className="ghorizontal-double-line" />

            <p className="h3-text">Смена пароля</p>
            {Err.editPassword ? <p className="error-text">{Err.editPassword}</p> : null}
            <p>введите пароль</p>

            <input className="input-type1 input-type1_w-100" type="password" onChange =  {(el) => {setUpdateUserData((e) => ({...e, password: el.target.value}))}}  placeholder="введите пароль"/>
            
            <p>повторите пароль</p>
            
            <input className="input-type1 input-type1_w-100" type="password" onChange =  {(el) => {setUpdateUserData((e) => ({...e, repeatPassword: el.target.value}))}}  placeholder="Повторите пароль"/>
            
            <button type='button' className = "button-form button-form_bg-blue"onClick={async() =>{postPassword()}}> <span> <p className="button-text">Изменить </p></span> 
            </button>  
        </div>

         
        
       
    </>

    )
}