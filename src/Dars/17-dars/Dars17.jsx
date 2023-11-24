import React, { useEffect, useState } from 'react'
import Search from './Search'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Category from './Category'
import axios from 'axios'

const Dars17 = () => {
    let navigate = useNavigate()
    const [data, setData] =useState([])
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/category"

    const getData = () =>{
        axios.get(url).then((result)=>{
            console.log(result)
            setData(result.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            <div className='navbar'>
                <NavLink to={"/"}>Search</NavLink>
                <NavLink to={"/category"}>Hammasi</NavLink>
                <NavLink to={"/category/May"}>May</NavLink>
                <NavLink to={"/category/January"}>January</NavLink>
                <NavLink to={"/category/September"}>September</NavLink>
                <NavLink to={"/category/February"}>February</NavLink>
                <NavLink to={"/category/July"}>July</NavLink>
            </div>
            <Routes>
                <Route index element={<Search />}/>
                <Route path='category' element={
                    <div className='grid'>
                        {data.map((item)=>{
                            return(
                                <div className='card' key={item.id}>
                                    <h1>{item.title}</h1>
                                    <h2 onClick={()=>navigate(`category/${item.category}`)}>{item.category}</h2>
                                </div>
                            )
                        })}
                    </div>
                }/>
                <Route path='category/:category' element={<Category />}/>
            </Routes>
            
        </div>
    )
}

export default Dars17
