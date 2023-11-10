import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    let params = useParams()
    let navigate = useNavigate()
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/kino"
    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [desc, setDesc ] = useState("")

    const handlePost = () =>{
        let data = {
            img: img,
            name: name,
            description: desc
        }
        axios.put(url+"/"+params.id, data).then((res)=>{
            // console.log(res)
            if (res.status === 200) {
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        })
    }
    const getOneData = () =>{
        axios.get(url+"/"+params.id).then((result)=>{
            console.log(result)
            setImg(result.data.img)
            setName(result.data.name)
            setDesc(result.data.description)
        })
    }
    useEffect(()=>{
        getOneData()
    },[])
    return (
        <div className='form'>
            <h1>EDIT {params.id} malumot</h1>
            <input value={img} type="text" placeholder='img' onChange={(e)=>setImg(e.target.value)}/>
            <input value={name} type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <textarea value={desc} cols="30" rows="10" onChange={(e)=>setDesc(e.target.value)} placeholder='desctription'></textarea>
            <button onClick={handlePost}>Post</button>
        </div>
    )
}

export default Edit
