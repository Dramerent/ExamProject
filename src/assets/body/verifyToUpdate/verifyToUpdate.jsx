import axios from "axios"
import { useContext, useEffect } from "react"
import { Context } from "../../useContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function VerifyToUpdate(){
        const nav = useNavigate()
        const{autoraize, setAutoraize,  Err, setErr, TokenValid,parse} = useContext(Context)
    
        useEffect(() =>{
            TokenValid(nav)
        }, [])


        const verify =async() =>{
            const login = await axios.post('http://localhost:3002/api/verifyToUpdate', {
              user_mail: autoraize.mail,
              user_password: autoraize.password,
              user_id:parse.user_id
          }, {withCredentials: true})
          .then(setErr(() => ({...Err, login: ''})))
          .then(el => {
              localStorage.setItem('editVerifyToken', el.data.editVerifyToken)
              nav('/editUserData')})
          .catch(el => {return setErr((e) => ({...e, login: el.response.data.message}))})

        



          
         
      }
    return(
        <>
        <div className="return-text-block">
            <Link to = {'/userPage'} className="toBack-text body-block__toBack-text">Назад</Link>
        </div> 

        <div className="login-form body-block__login-form" >
        {
            Err.login ? <p>{Err.login}</p> : null
        }
            <input type="email" className="input-type1 input-type1_w-100" onChange = {(el) => {setAutoraize((e) =>({...e, mail: el.target.value}))}} placeholder="Введите логин"/>
            <input type="password" className="input-type1 input-type1_w-100" onChange = {(el) => {setAutoraize((e) =>({...e, password: el.target.value}))}} placeholder="Введите пароль"/>
            <button type="button" className="button-type1 button-type1_bg-blue" onClick={() =>{verify()}}>
            <span>
                <p className="button-text">
                   подтвердить! 
                </p>
            </span>
        </button>
        </div>
        
        
        </>
    )
}