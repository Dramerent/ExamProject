import { useContext, useEffect } from "react"
import { Context } from "../useContext"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { Link } from "react-router-dom"
export function Header(){

    const nav = useNavigate()
    const {TokenValid, setParse, parse} = useContext(Context)
      
    return(
        <header className="header">
            <div onClick={() =>{
                TokenValid(nav)
                if(parse){  
                    nav('/userPage')
                }
            }}
            className="user header__user">
                <div className="user-header-photo">
                    <img src={parse.user_photo ? ("http://localhost:3002/" + parse.user_photo) : "./static/defaultImg.png"} alt="тут должно быть фото" />
                </div>
            </div>
            <div className="logo-img header__logo">
                <Link to = '/'>
                    <img src="./static/logo.png" alt="" /> 
                </Link>
            </div>
           
           
           
            
        </header>
    )
}