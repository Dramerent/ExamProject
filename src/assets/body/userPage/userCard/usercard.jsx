import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../useContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserOrganizatorNotification } from "./userOrganizatorNotification/userOrganizatorNotification";
export function UserCard({blockRef,updateInfo,logout , Organizers,refinds}){
    const {dropdownRef, organizerParse,getOrganizerOpen, parse, userDataTokenValid, TokenValid, getOrganizer} = useContext(Context)
    const nav = useNavigate()

    return(<>

    <div className="user-menu">
      <button className="button-type1 button-type1_bg-blue" onClick={() => {Organizers()}}>СТРАНИЦА ОРГАНИЗАТОРА</button>
      <button className = "button-type1" onClick={() =>{updateInfo()}}><span></span> редактировать профиль</button>
      <button onClick = {() =>{refinds()}} type="button" className="button-type1">Запросы на возврат</button>
      <button className = "button-type1_bg-blue button-type1" onClick={() => {logout()}}><p className="button-text"></p> выйти</button>
    </div>

      <div className="mobile-menu">
          <button type="button" className="button-type1 button-type1_w-600 button-type1_bg-blue" onClick={(elem) =>{
          blockRef.current.style.display = 'flex'
          dropdownRef.current.style.bottom = '0px'
          dropdownRef.current.style.display = 'flex'
      }}>меню</button>

      </div>
      <div ref={dropdownRef} className="user-dropdown-a">
          <button className="button-type1 button-type1_bg-blue" onClick={() => {Organizers()}}>СТРАНИЦА ОРГАНИЗАТОРА</button>
          <button className = "button-type1" onClick={() =>{updateInfo()}}><span></span> редактировать профиль</button>
          <button onClick = {() =>{ refinds() }} type="button" className="button-type1">Запросы на возврат</button>
          <button className = "button-type1_bg-blue button-type1" onClick={() =>{logout()}}><p className="button-text"></p> выйти</button>
      </div>
      <div className="user-card">
        <div className="user-info user-card__user-info">
          <div className="user-info__main">
            <p className="user-info-text"><b>{parse.user_name} {parse.user_surname}</b></p>
            <p className="user-info-text">{parse.user_mail}</p>
          </div>
          <div className="user-photo">
          <img src = {"http://localhost:3002/"+parse.user_photo} />
        </div>
       

        </div>
        {organizerParse && organizerParse.length != 0 ? (<UserOrganizatorNotification />) : null}
      </div>

    
    </>
    )
}