import { useContext } from "react"
import { Context } from "../../../useContext"

export function OrganizatorFilters(){
    const {userInfo, setUserInfo } = useContext(Context)
    return(
        <>
            <div className="organizator-filters organizator-filters__organizator-filters">
                <form className="filter"> 
                    <p className="filter-text">
                        Имя: 
                    </p>
                    <input placeholder="Имя..." className="select-type1" type = "text" onChange={(e) =>{
                        setUserInfo((el) =>({...el, userName: e.target.value}))
                    }}/>
                </form>
                <form className="filter"> 
                    <p className="filter-text">
                        фамилия: 
                    </p>
                    <input placeholder="Фамилия..." className="select-type1" type = "text"onChange={(e) =>{
                        setUserInfo((el) =>({...el, userSurname: e.target.value}))
                    }}/>
                </form>
                
            </div>

        </>
    )
}