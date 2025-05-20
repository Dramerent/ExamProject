export function Comment({userImage, userName, commentContent, postName}){
    return(
        <>
        <div className="comment">
            <div className="comment__header">
            <p className="user-info-text">
                {postName}
              </p>
              <div className="user-info">
                <div className="comment__user-name">
                    <p className="user-info-text"><b>{userName} </b></p>
                </div>
                <div className="comment__img">
                    <img src={userImage} alt="" />
                </div>
              </div>
              
                
            </div>
            <div className="ghorizontal-double-line" />
            <div className="comment-body">
                <p className="common-text">{commentContent}</p>
            </div>

        </div>
        
        </>
    )
}