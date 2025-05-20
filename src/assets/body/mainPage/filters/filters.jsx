import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../../useContext"
import axios from "axios"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'


export function Filters({blockRef}){
    const 
    {
        setFilter, filter, getGenres,
        
        allExistsGenres, setAllExistsGenres,
        allExistsSpheres, setAllExistsSpheres,
        date, setdate, mobileMenuFilter, 

    } = useContext(Context)
   const [isUsed, setIsUsed] = useState(false)
   const ref1 = useRef()
   const ref2 = useRef()
   const ref3 = useRef()
   const ref4 = useRef()
    useEffect(() =>{
        getGenres()
    }, [date])

    return(
        <> 
            
            <div className="filters posts-block__filters"> 
                <form className="filter"> 
                    <p className="filter-text">
                        До:
                    </p>
                    <input type="date" className="filter-text select-type1" onChange={(el) =>{
                        setdate((e) =>({...e, endDate: el.target.value}))
                    }} />
                </form>
                <form className="filter"> 
                    <p className="filter-text">
                        От:
                    </p>
                    <input  className="filter-text select-type1" type = "date" min = {new Date().toISOString().split("T")[0]}  
                    onChange={(el) =>{setdate((e) =>({...e, startDate: el.target.value}))}} 
                    />
                </form>
                <form className="filter" onChange = {(e) =>{setFilter((el) => ({...el, genre: e.target.value}))}} method="post">
                    <select className="filter-text select-type1">
                        <option hidden disabled selected>          
                                Жанр:
                        </option>
                        {allExistsGenres.map(el => (<option value={el}>{el}</option>))}
                        <option value="">ВСЕ</option>
                    </select>
                </form>
                <form className="filter " onChange = {(e) =>{setFilter((el) => ({...el, sphere: e.target.value}))}}>
                        <select className="filter-text select-type1">
                            <option hidden disabled selected>Сфера</option>
                            {allExistsSpheres.map(el => (<option value={el}>{el}</option>))}
                            <option value="">ВСЕ</option>
                        </select>
                </form>
            </div>
            <div className="mobile-filter">
                {isUsed ?( <button className="button-type1 button-type1_bg-blue">
                <p className="filter-text" onClick={(el) =>{
                    setdate((e) => ({...e, endDate: ''})); 
                    setdate((e) => ({...e, startDate: ''})); 
                    setFilter((e) => ({...e, sphere: ''}));
                    setFilter((e) => ({...e, genre: ''}));setIsUsed(false);
                    }}>Сброс</p>
                    
                     
                </button>) : ''}
                <button type = "button" className="button-type1 button-type1_w-600" onClick={(e) =>{
                mobileMenuFilter.current.style.display = "flex"
                blockRef.current.style.display = "flex"
            }}><p className="filter-text">фильтры</p></button>
  
            </div>
            <div ref={mobileMenuFilter} className="mobile-filters">
            <form className="filter"> 
                    <p className="filter-text">
                        До:
                    </p>
                    <input value = {date.endDate} ref={ref1} type="date" className="filter-text select-type1" onChange={(el) =>{
                        setdate((e) =>({...e, endDate: el.target.value})); setIsUsed(true)
                    }} />
                </form>
                <form className="filter"> 
                    <p className="filter-text">
                        От:
                    </p>
                    <input value = {date.startDate} ref={ref2} className="filter-text select-type1" type = "date" min = {new Date().toISOString().split("T")[0]}  
                    onChange={(el) =>{setdate((e) =>({...e, startDate: el.target.value})); setIsUsed(true)}} 
                    />
                </form>
                <form  ref={ref3} className="filter" onChange = {(e) =>{setFilter((el) => ({...el, genre: e.target.value})); setIsUsed(true)}} method="post">
                    <select value = {filter.genre} className="filter-text select-type1">
                        <option value=''hidden disabled>          
                                Жанр:
                        </option>
                        {allExistsGenres.map(el =>(<option value={el}>{el}</option>))}
                        <option value="">ВСЕ</option>
                    </select>
                </form>
                <form  ref={ref4} className="filter " onChange = {(e) =>{setFilter((el) => ({...el, sphere: e.target.value})); setIsUsed(true)}}>
                        <select  value = {filter.sphere} className="filter-text select-type1">
                            <option value='' hidden disabled selected>
                                Сфера: 
                            </option>
                            {allExistsSpheres.map(el => (<option value={el}>{el}</option>))}
                            <option value="">ВСЕ</option>
                        </select>
                </form>
            </div>
        </>
       
        
    )
}