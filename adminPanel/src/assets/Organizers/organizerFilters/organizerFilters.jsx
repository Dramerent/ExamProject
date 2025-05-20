export function OrganizerFilters({setOrganizerFilters}){
    return(

        <div className="OrganizerFilters">
            <button onClick = {() =>{setOrganizerFilters('null')}}type="button">
                не проверенные
            </button>
             <button onClick = {() =>{setOrganizerFilters('false')}} type="button">
                отклоненные
            </button>
              <button onClick = {() =>{setOrganizerFilters('all')}} type="button">
                все
            </button>

        </div>

    )
}