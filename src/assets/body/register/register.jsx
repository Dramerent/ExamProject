import { useContext, useEffect, useState } from "react"
import { Context } from "../../useContext"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
export function Register(){
    const {registr, setRegistr, Err, setErr} = useContext(Context)
    const [prev, setPrev] = useState()
    const [mailVerify, setMailVerify] = useState(false)
    const [ver, setVer ] = useState('')
    const nav = useNavigate()
    
    useEffect(() =>{setErr((el) => ({...el, register: ''})); setVer('')}, [])

    const verReg = async() =>{
        const formData = new FormData()
            setErr((el) => ({...el, register: ''}))
            formData.append('user_name', registr.name)
            formData.append('user_surname', registr.surname)
            formData.append('user_mail', registr.mail)
            formData.append('user_password', registr.password)                  
            formData.append('user_code', registr.code)
            setVer('отправка кода...')
            await axios.post('http://localhost:3002/api/registrVerify', formData,
            {withCredentials: true}) 
            .then((el) => {
                setVer('')
                setMailVerify(true)
                
            })
            .catch((error) =>setErr((el) => ({...el, register: error.response.data ? error.response.data : 'ошибка'})))
        
    }
    const register = async() =>{
        const formData = new FormData()
        formData.append('user_name', registr.name)
        formData.append('user_surname', registr.surname)
        formData.append('user_mail', registr.mail)
        formData.append('user_password', registr.password)                  
        formData.append('user_code', registr.code)
        formData.append('user_photo', registr.photo)

        await axios.post('http://localhost:3002/api/registr',
            formData,
            {withCredentials: true}) 
            .then(() =>{
                setErr(() => ({...Err, login: ''}))
                setRegistr((el) => ({...el, name: ''}))
                setRegistr((el) => ({...el, surname : ''}))
                setRegistr((el) => ({...el, email : ''}))
                setRegistr((el) => ({...el, password : ''}))
                setRegistr((el) => ({...el, image: ''}))

                nav('/login')

            }
            )
            .catch((error) =>setErr((el) => ({...el, register: error.response.data ? error.response.data : 'ошибка'})))


        }
    
    return(
        <>
        <div className="return-text-block">
            <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
        </div>
        <div className="register-form body-block__register-form">
           
            <p className="h2-text">Регистрация</p>
            <input className="input-type1 input-type1_w-100"  type="text" onChange = {(el) => {setRegistr((e) => ({...e, name: el.target.value}))}} placeholder="введите свое имя"/>
            <input className="input-type1 input-type1_w-100" type="text" onChange = {(el) => {setRegistr((e) => ({...e, surname: el.target.value}))}} placeholder="введите свою фамилию"/>
            <input className="input-type1 input-type1_w-100" type="email" onChange =  {(el) => {setRegistr((e) => ({...e, mail: el.target.value}))}} placeholder="введите свой email"/>
            <input className="input-type1 input-type1_w-100" type="password" onChange =  {(el) => {setRegistr((e) => ({...e, password: el.target.value}))}}  placeholder="введите пароль(от 4-х до 25-ти)"/>
          
            <input hidden className="input-type1 input-type1_w-100" type = "file" id="file" accept="image/*" onChange = {
                (el) =>{                    
                if(el.target.files && el.target.files[0]){       
                    console.log(el.target.files[0])        
                    setRegistr((e) =>({...e, photo: el.target.files[0]}))
                    setPrev(URL.createObjectURL(el.target.files[0]))
                }
            }}placeholder="выебире изображение"/>
              
            <label className="button-type1" htmlFor="file">выбрать изображение</label>
                

        
            {prev ? (
                <div className="user-prev">
                    <p className="h2-text">фото профиля</p>
                    <div className="user-photo">
                        <img src={prev} />
                    </div> 
                </div>
               
            ) : null}
               {prev ? (
                <div className="user-prev">
                    <p className="h3-text">мини-фото</p>
                    <div className="user-header-photo">
                        <img src={prev} />
                    </div> 
                </div>
               
            ) : null}
            <button type='button' className = "button-type1 button-type1_bg-blue"onClick={() =>{verReg()}}> <span> <p className="button-text">отправить </p></span> 
            </button>
             {
                Err.register ? <p className="error-text">{Err.register}</p> : null
            }
            {
                ver && Err.register == '' ? <p>{ver}</p> : null
            }
              {
                mailVerify == true ? (
                <>
                <p>отправьте код из почты: </p>
                    <input className="input-type1 input-type1_w-100" type="text" onChange =  {(el) => {setRegistr((e) => ({...e, code: el.target.value}))}} placeholder="введите код..."/>
                    <button type='button' className = "button-type1 button-type1_bg-blue"onClick={() =>{register()}}> <span> <p className="button-text">отправить </p></span> 
                    </button>
                </>) : null
            }
        </div>
       

        
        </>

    )
}