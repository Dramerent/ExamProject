export function PostFilters({setPostFilters}){
    return(

        <div className="OrganizerFilters">
            <button onClick = {() =>{setPostFilters('null')}}type="button">
                не проверенные
            </button>
             <button onClick = {() =>{setPostFilters('false')}} type="button">
                отклоненные
            </button>
              <button onClick = {() =>{setPostFilters('all')}} type="button">
                все
            </button>

        </div>

    )
}