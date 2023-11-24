import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [data, setData] =useState([])
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/search"

    const [word, setWord] = useState("")
    const [search, setSearch] = useState(false)

    const getData = () =>{
        axios.get(url).then((result)=>{
            console.log(result)
            setData(result.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    
    useEffect(()=>{
        if (word !== "") {
            setSearch(true)
        }else{
            setSearch(false)
        }
    },[word])
    return (
        <div className="search">
            <div className='form'>
                <input type="text" placeholder='Qidiruv...' onChange={(e)=>setWord(e.target.value)}/>
            </div>
            <div className='grid'>
                {data?.map((item, index, array)=>{
                    if (search === false) {
                        return(
                            <div className='card' key={item?.id} >
                                <img src={item.img} alt="rasm"  height={250}/>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    } else if(item.title.toLowerCase().includes(word.toLowerCase())){
                        return(
                            <div className='card' key={item?.id} >
                                <img src={item.img} alt="rasm"  height={250}/>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    } else if(item.description.toLowerCase().includes(word.toLowerCase())){
                        return(
                            <div className='card' key={item?.id} >
                                <img src={item.img} alt="rasm"  height={250}/>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    }
                })}
                
            </div>
        </div>
    )
}

export default Search
