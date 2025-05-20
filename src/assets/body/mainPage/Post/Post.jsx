export function Post({postName, Click, genreName, meetingPlace, elem, image, isChecked, date}){
    const dates = ((new Date(date) - (new Date())) / (1000 * 60 * 60 * 24)) 
    return(
        <div className={"post " + (elem ? elem : '')}onClick={Click}>
           
            {isChecked !== undefined ? isChecked == true ? <p className="success-text">подтверждено</p> :  
            isChecked == false ? <p className="error-text">отклонено</p> : 
            isChecked == null ? <p className="wait-text">ждет проверки</p>  : "" : ""}
            <p className="error-text">
                {   
                    isChecked !== undefined && isChecked == true ?
                    date !==undefined ? 
                    dates <= 5 && dates > 4 ? "5 дней до концерта!" :  dates==4 ? "4 дня до концерта" :
                    dates <= 4 && dates > 3 ? "3 дня до концерта" :
                    dates <= 3 && dates > 2? "2 дня до концерта" :
                    dates <= 2  && dates > 1? "1 дня до концерта" :
                    dates < 1 ? "СЕГОДНЯ КОНЦЕРТ" : '' :"" :""
                }
           </p>
           
            <p className="post-name-text post-name-text_line-clamp"><b> {postName}</b></p>
            <div className="ghorizontal-double-line" />
            <div className="post__img">
                <img src={image} alt="" />
            </div>
            <div className="ghorizontal-double-line" />
            <p className="post-sphere-text"><b>{genreName}</b><br/> {meetingPlace}</p>
        </div>

    )
}