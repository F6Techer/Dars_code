import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Post = () => {
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
        axios.post(url, data).then((res)=>{
            console.log(res)
            if (res.status === 201) {
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        })
    }
    return (
        <div className='form'>
            <h1>POST</h1>
            <input type="text" placeholder='img' onChange={(e)=>setImg(e.target.value)}/>
            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <textarea cols="30" rows="10" onChange={(e)=>setDesc(e.target.value)} placeholder='desctription'></textarea>
            <button onClick={handlePost}>Post</button>
        </div>
    )
}

export default Post
