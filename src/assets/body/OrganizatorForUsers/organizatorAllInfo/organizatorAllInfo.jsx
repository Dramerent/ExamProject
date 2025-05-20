export function OrganizatorAllInfo({organizerParse}){
    return(
        <>
        <div className="organizer-page__all-info">
              
                <div className="organizer-page__info">
                    <div className="organizer-page__img">
                        <img src = {"./backend/" + organizerParse.organizer_photo} alt="" />
                    </div>
                    <div className="organizer-page__nickname">
                        <p className="h2-text"><p>{organizerParse.organizer_nickname}</p></p>
                    </div>
                    <div className="organizer-page__main-info">
                        <div className="organizer-page__second-info">
                            <div className="param "><b className="param-text">Сфера:</b> <p className="param-text">{organizerParse.Sphere.sphere_name}</p></div>
                            <div className="param "><b className="param-text">телефон:</b> <p className="param-text">+7 {organizerParse.organizer_phoneNum}</p></div>
                            <div className="param "><b className="param-text">Связь:</b> <p className="param-text">{organizerParse.callbacks.callback_name}</p></div>
                        </div>
                        <div className="organizer-page__description">
                            <p className="description-text">{organizerParse.organizer_description}</p>
                        </div>   
                    </div>
             
                </div>
            </div>
        
        </>
    )
}