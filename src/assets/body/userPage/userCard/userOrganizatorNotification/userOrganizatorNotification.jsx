import { useContext } from "react"
import { Context } from "../../../../useContext"
export function UserOrganizatorNotification(){
    const { organizerParse } = useContext(Context)
    return(
        <>
        <div className="userOrganizatorNotification">
            <div className="userOrganizatorNotification_header">
            <p> <b>{organizerParse.organizer_nickname}</b></p>
            </div>
            <div className="userOrganizatorNotification_content">
              
                <p className="common-text">Сфера: <b>{organizerParse.Sphere.sphere_name}</b></p>
                
                <p className="common-text">Телефон: <b>{organizerParse.organizer_phoneNum}</b></p>
                <p className="common-text">статус: {organizerParse.organizer_verified == null ? (<b className="wait-text">ждет подтверждения</b> ) :
                organizerParse.organizer_verified == true ?  (<b className="success-text">подтвержден</b> ): 
                (<b className="error-text">отклонен</b>)}</p>
                
                
            </div>
            {organizerParse.organizer_reasonToCancel && <details className="details-notif">
                <summary className="summary-notif">причина отмены</summary>
                <p>{organizerParse.organizer_reasonToCancel}</p>
            </details> }
        </div>
        </>
    )
}