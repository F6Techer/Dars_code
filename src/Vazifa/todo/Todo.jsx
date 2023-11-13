import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./todo.scss"

const Todo = () => {
    let url = "https://6548bfb3dd8ebcd4ab2383ef.mockapi.io/todo"
    const [todo, setTodo] = useState([])
    const getTodo = () =>{
        axios.get(url).then((res)=>{
            console.log(res)
            setTodo(res.data)
        })
    }
    const addTodo = () =>{



        getTodo()
    }
    useEffect(()=>{
        getTodo()
    },[])
    return (
        <div className='todo'>
            <div className="add">
                <h1>My To-Do App</h1>
                <input type="text" placeholder='Title'/>
                <input type="text" placeholder='Description'/>
                <button>Add</button>
            </div>
            <div className="list">
                {todo.map((item)=>{
                    return(
                        <div className="item" key={item.id}>
                            <div className="item_top">
                                <div>
                                    <button>{item.status ? "bajarildi" : "Bajarilmagan"}</button>
                                    <p className={item.status ? 'title title_done' : 'title'}>{item.title}</p>
                                    <p className='title title_done'>{item.title}</p>
                                </div>
                                <div>
                                    <button>edit</button>
                                    <button>delete</button>
                                </div>
                            </div>
                            <div className="item_bot">
                                <p className='desc'>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo
