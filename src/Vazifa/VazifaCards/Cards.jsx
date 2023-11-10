import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Twitter, Facebook, Linkedin } from '../../assets/icon'
import "./style.scss"

const Cards = () => {
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/vazifa"

    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const getData = () =>{
        axios.get(url).then((result)=>{
            console.log(result.data[0])
            setData1(result.data.slice(0,3))
            setData2(result.data.slice(3,6))
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className='cards'>
            <div className='grid'>
                {data1?.map((item)=>{
                    return(
                        <div 
                            className='card1'
                            key={item?.id} 
                        >
                            <img src={item.bg_img} alt='' className="bg_user"/>
                            <div className='card_info'>
                                <img src={item.user_photo} alt='' className="user_photo"/>
                                <h1>{item.first_name}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div className="url">
                                <a href={item.url}><Facebook/></a>
                                <a href={item.url}><Twitter/></a>
                                <a href={item.url}><Linkedin/></a>
                            </div>
                        </div>
                    )
                })}
                {data2?.map((item)=>{
                    return(
                        <div 
                            className='card2'
                            key={item?.id} 
                        >
                            <img src={item.user_photo} alt="rasm" className='user_photo'/>
                            <h1>{item.full_name}</h1>
                            <p>{item.job}</p>
                            <button>Send Request</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
