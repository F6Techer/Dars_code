import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Category = () => {
    let params = useParams()
    console.log(params)
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
            <div className='grid'>
                {data.map((item)=>{
                    if (params.category === "all") {
                        return(
                            <div className='card' key={item.id}>
                                <h1>{item.title}</h1>
                                <h2>{item.category}</h2>
                            </div>
                        )
                    } else if(item.category.includes(params.category)){
                        return(
                            <div className='card' key={item.id}>
                                <h1>{item.title}</h1>
                                <h2>{item.category}</h2>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Category
