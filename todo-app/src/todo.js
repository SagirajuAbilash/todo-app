
import{useState} from 'react';


const TodoManger=()=>{
    const [CurrentTodo, setCurrentTodo]=useState('')
    const [allTodos,setAllTodos]=useState([])
    const [editingindex,setEditingindex]=useState(undefined);

    const handleOnChange=(event)=>{
        setCurrentTodo(event.target.value)
    }

    const handleSubmit= () => {
        if(editingindex!=undefined){
            const newList =
            allTodos.map((Todo, index)=>{
                if( index == editingindex) return CurrentTodo;
                return Todo

            })
            setAllTodos(newList);
            setEditingindex(undefined)
            setCurrentTodo('')
        }else {
        const newTodolist =[...allTodos,CurrentTodo];
        setAllTodos(newTodolist);
        setCurrentTodo('')
        }
    }

    const handleOnClick =(index)=>{
        setEditingindex(index)
        setCurrentTodo(allTodos[index])
    }
    const handlOnDelete=()=>{
        const removeItem = allTodos.filter((todo)=>{
        
  });
        setAllTodos(  removeItem, )
    }
               




    return(
        <>
        <h1> Todo App</h1>
        <input type="text" value={CurrentTodo} onChange={handleOnChange}></input><br></br>
        <button onClick={handleSubmit}>Submit</button>
        <table style={{width:800, marginTop:20}} className='table table-success table-striped' >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {allTodos.map((Todo,index)=>{
                    return(<tr>
                        <td>{index+1}</td>
                        <td>{Todo}</td>
                        <td>
                            <button onClick={()=>{handleOnClick(index)}}>edit</button>
                            
                        </td>
                    </tr>
                   

                    )
                })}
            </tbody>
        </table>
        <button onClick={()=>{handlOnDelete()}}>delete all</button>
        </>
    )}

export default TodoManger;