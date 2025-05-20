import { useContext } from "react"
import { Context } from "../../../useContext"

export function PostInfo(){
    const {pageInfo} = useContext(Context)
    return(
        <div className="post-info">
            <div className="post-info__params">
                <div className="param post-info__param"><b className="param-text">Стоимость: </b><p className="param-text param-text_triple">{pageInfo.post_cost !=0 ? pageInfo.post_cost + "р"  : 'бесплатно'}</p></div>
                <div className="param post-info__param"><b className="param-text">Место встречи: </b><p className="param-text param-text_triple">{pageInfo.post_meetingPlace}</p></div>
                <div className="param post-info__param"><b className="param-text">всего мест: </b><p className="param-text param-text_triple">{pageInfo.post_allSeats}</p></div>
                <div className="param post-info__param"><b className="param-text">Мест осталось: </b><p className="param-text param-text_triple">{pageInfo.post_allSeats - pageInfo.post_buydSeats} </p></div>
                <div className="param post-info__param"><b className="param-text">Дата начала: </b><p className="param-text param-text_triple">{pageInfo.post_meetDate.split('T')[0]}</p></div>
            </div>
            <div className="post-info__vertical-line" />
            <div className="post-description post-info__post-description"> 
                <p className="description-text">{pageInfo.post_fullDescription}</p>
            </div>

        </div>
    )
}