import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./todo.scss"
import { Checkbox, Trash, Edit } from '../../assets/icon'
import { Input, Modal } from 'antd';

const Todo = () => {
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/todo"
    // Todolarni olib kelish
    const [todo, setTodo] = useState([])
    const getTodo = () =>{
        axios.get(url).then((res)=>{
            // console.log(res)
            setTodo(res.data)
        })
    }
    useEffect(()=>{
        getTodo()
    },[])

    // Todo qo'shish
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const addTodo = () =>{
        let data = {
            title: title,
            description: description,
            status: false
        }
        axios.post(url, data).then((res)=>{
            // console.log(res)
            if (res.status === 201) {
                getTodo()
            }
        })
    }

    // Todoga o'zgartirish kiritish
    const [editId, setEditId] = useState(null)
    const [titleEdit, setTitleEdit] = useState("")
    const [descriptionEdit, setDescriptionEdit] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOk = () => {
        setIsModalOpen(false);
        let data = {
            title: titleEdit,
            description: descriptionEdit,
        }
        axios.put(url+"/"+editId, data).then((res)=>{
            // console.log(res)
            if (res.status === 200) {
                getTodo()
            }
        })
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const getOneTodo = (id) =>{
        // console.log(id)
        setEditId(id)
        axios.get(url+"/"+id).then((res)=>{
            // console.log(res)
            setTitleEdit(res.data.title)
            setDescriptionEdit(res.data.description)
            if (res) {
                setIsModalOpen(true);
            }
            // setTodo(res.data)
        })
    }
    // Todo O'chirish
    const deleteTodo = (id) =>{
        axios.delete(url+"/"+id).then((res)=>{
            // console.log(res)
            if (res.status === 200) {
                getTodo()
            }
        })
    }
    // Checkbox
    async function handleCheck(id) {
        // console.log(id)
        let status;
        await axios.get(url+"/"+id).then((res)=>{
            // console.log(res)
            status = res.data.status
        })
        let data = {
            status: !status
        }
        await axios.put(url+"/"+id, data).then((res)=>{
            // console.log(res)
            if (res.status === 200) {
                getTodo()
            }
        })
        // console.log("axios ishladi")
    }
    return (
        <div className='todo'>
            <div className="add">
                <h1>My To-Do App</h1>
                <input type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" placeholder='Description' onChange={(e)=>setDescription(e.target.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <div className="list">
                {todo.map((item)=>{
                    return(
                        <div className="item" key={item.id}>
                            <div className="item_top">
                                <div>
                                    <button onClick={()=>handleCheck(item.id)}><Checkbox status={item.status}/></button>
                                    <p className={item.status ? 'title title_done' : 'title'}>{item.title}</p>
                                    {/* <p className='title title_done'>{item.title}</p> */}
                                </div>
                                <div>
                                    <button onClick={()=>getOneTodo(item.id)}><Edit/></button>
                                    <button onClick={()=>deleteTodo(item.id)}><Trash/></button>
                                </div>
                            </div>
                            <div className="item_bot">
                                <p className={item.status ? 'desc title_done' : 'desc'}>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Modal 
                title="Edit To-Do" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <Input 
                    placeholder='Title' 
                    value={titleEdit} 
                    onChange={(e)=>setTitleEdit(e.target.value)}
                />
                <br /><br />
                <Input 
                    placeholder='Description' 
                    value={descriptionEdit} 
                    onChange={(e)=>setDescriptionEdit(e.target.value)}
                />
            </Modal>
        </div>
    )
}

export default Todo