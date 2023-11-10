import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dars14 = () => {
    let navigate = useNavigate()
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/kino"
    // fetch(url)
    //     .then(response => response.json())
    //     .then(result => console.log(result))

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const getData = () =>{
        setLoad(true)
        axios.get(url).then((result)=>{
            console.log(result)
            setData(result.data)
            if (result.status === 200) {
                setTimeout(() => {
                    setLoad(false)
                }, 2000);
            }
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <React.Fragment>
            {load ? <div className="loading"></div> : ""}
            <div className='grid'>
                {data?.map((item, index, array)=>{
                    return(
                        <div 
                            className='card' 
                            key={item?.id} 
                            onClick={()=>navigate("/news/"+item?.id)}
                        >
                            <img src={item.img} alt="rasm"  height={250}/>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
                
            </div>
        </React.Fragment>
    )
}

export default Dars14
