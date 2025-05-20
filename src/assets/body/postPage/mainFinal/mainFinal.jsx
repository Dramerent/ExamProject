import { useContext } from "react"
import { Context } from "../../../useContext"
import { useNavigate } from "react-router-dom"
export function MainFinal ({getAutorPage}){
    const {TokenValid, pageInfo, parse, getOrganizerForUsers} = useContext(Context)
    const nav = useNavigate()
    

    return(
        <div className="main-final">
            <button className="button-type1 button-type1_bg-blue" onClick={() => {nav('/pay')}}>
                <span>
                    <p className="button-text">
                        купить
                    </p>
                </span>
            </button>
            <div className="autor">
                <div onClick = {() => {nav('/OrganizatorForUsers')}}className="autor-image">
                    <img src={"./backend/" + pageInfo.Organizers.organizer_photo} alt="" />
                </div>
                <p className="user-name-text">{pageInfo.Organizers.organizer_nickname}</p>

            </div>
        </div>
    )
}