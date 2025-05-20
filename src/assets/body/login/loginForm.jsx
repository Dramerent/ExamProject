import axios from "axios"
import { useContext, useEffect } from "react"
import { Context } from "../../useContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function LoginForm(){
    const{autoraize, setAutoraize,  Err, setErr} = useContext(Context)
    const nav = useNavigate()
    
    useEffect(() =>{setErr ((el) => ({...el, login: ''}))}, [])
     
     const autorize = async() =>{
        const login = await axios.post('http://localhost:3002/api/login', {
            user_mail: autoraize.mail,
            user_password: autoraize.password
        }, {withCredentials: true})
        .then(setErr(('')))
        .then((el) => {localStorage.setItem('accessToken', el.data.accessToken)
            window.location.replace('/')
        })
        .catch((error) => setErr((el) => ({...el, login: error.response.data})))

     }
     const pasteAutorizeInfoMail = (el) =>{
        setAutoraize((e) =>({...e, mail: el.target.value}))
     }
    const  pasteAutorizeInfoPassword = (el) =>{
        setAutoraize((e) =>({...e, password: el.target.value}))
     }
     


    return(
        <>
         <div className="return-text-block">
            <Link to = {-1} className="toBack-text body-block__toBack-text">Назад</Link>
        </div>
        <div className="login-form body-block__login-form" >
        {
            Err.login ? <p className="error-text">{Err.login}</p> : null
        }
            <p className="h2-text">Вход</p>
            <input type="email" className="input-type1 input-type1_w-100" onChange = {(el) => {pasteAutorizeInfoMail(el)}} placeholder="Введите логин"/>
            <input type="password" className="input-type1 input-type1_w-100" onChange = {(el) => {pasteAutorizeInfoPassword(el)}} placeholder="Введите пароль"/>
            <button type="button" className="button-type1 button-type1_bg-blue" onClick={() =>autorize()}>
            <span>
                <p className="button-text">
                   подтвердить! 
                </p>
            </span>
        </button>
        <Link to = "/register">не зарегестрированы?</Link>

        </div>
        
        
        </>
    )
}