import './App.css'
import { Organizers } from './assets/Organizers/Organizers'
import { Filters } from './assets/filters/filters'
import { useContext, useEffect, useState } from 'react'
import { Context } from './useContext'
import { Posts } from './assets/Posts/Posts'
import { Refinds } from './assets/Refinds/Refinds'
export function App() {
  const {filter, setFilter, bigPhoto, setBigPhoto, allOrganizers, photoURL} = useContext(Context)

  return (
   
    <> 
    
      {
        bigPhoto && photoURL ? 
        <> 
          <div className="gray-filter" onClick={() =>{setBigPhoto(false)}}>
            <div className="big-img gray-filter__big-img">
              <img src={"http://localhost:3002/" + photoURL} alt="" />
            </div> 
          </div>

        </> : null
        
      }
    <div className='header'>
      <h1>админ панель</h1>
      <Filters/>
    </div>
    <div className="body">
      {
        filter == 'organizers' ? <Organizers /> : 
        filter == 'posts' ? <Posts /> :  
        filter == 'refinds' ? <Refinds /> : 
        null
      }
    </div>
    
    </>
  )
}



