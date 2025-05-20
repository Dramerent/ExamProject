export function RefindsFilters({setRefindFilters}){
    return(

        <div className="OrganizerFilters">
            <button onClick = {() =>{setRefindFilters('null')}}type="button">
                не проверенные
            </button>
             <button onClick = {() =>{setRefindFilters('false')}} type="button">
                отклоненные
            </button>
            

        </div>

    )
}