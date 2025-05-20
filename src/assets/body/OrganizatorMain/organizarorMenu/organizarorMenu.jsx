export function OrganizatorMenu({createPost, reductOrganizerOnfo, dropdownRef, blockRef, navToAllPosts}){
    return(
        <>
        <div className="user-menu">
            <button className="button-type1 button-type1_bg-blue" onClick={createPost}>
                создать мероприятие
            </button>
            <button className="button-type1 " onClick={reductOrganizerOnfo}>
                редактировать профиль
            </button>
            <button className="button-type1 " onClick={navToAllPosts}>
                все мероприятия
            </button>
        </div>
        <div className="mobile-menu">
          <button type="button" className="button-type1 button-type1_w-600 button-type1_bg-blue" onClick={(elem) =>{
          blockRef.current.style.display = 'flex'
          dropdownRef.current.style.bottom = '0px'
          dropdownRef.current.style.display = 'flex'
        }}>меню</button>

        </div>
        <div ref={dropdownRef} className="user-dropdown-a"> 
            <button className="button-type1 button-type1_bg-blue" onClick={createPost}>
                    создать мероприятие
            </button>
            <button className="button-type1 " onClick={reductOrganizerOnfo}>
                редактировать профиль
            </button>
            <button className="button-type1 " onClick={navToAllPosts}>
                все мероприятия
            </button>
        </div>
        </>
    )
}