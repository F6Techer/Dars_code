import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SinglePage = () => {
    let params = useParams()
    let navigate = useNavigate()
    
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/kino"
    const [oneData, setOneData] = useState({})
    const getOneData = () =>{
        axios.get(url+"/"+params.id).then((result)=>{
            console.log(result)
            setOneData(result.data)
        })
    }
    useEffect(()=>{
        getOneData()
    },[])
    return (
        <div>
            <h1>Single Page {params.id}</h1>
            <div className='card'>
                <img src={oneData?.img} alt="rasm" />
                <button onClick={()=>navigate("/edit/"+oneData?.id)}>EDIT</button>
                <h1>{oneData?.name}</h1>
                <p>{oneData?.description}</p>
            </div>
        </div>
    )
}

export default SinglePage
