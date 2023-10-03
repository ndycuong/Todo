import React, {useState} from 'react';
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons';
import { useContext } from 'react';
import { TodoContext } from '../context';
import moment from 'moment';
import EditTodo from './EditTodo';
import Modal from './Modal';
function Todo({todo}){
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false);


    // const handleDe = todo => {
    //     deleteTodo(todo)
    //   };
    const {selectedTodo, setSelectedTodo} = useContext(TodoContext)
    
    const deleteTodo = todo => {
    }
    const checkTodo = todo => {
    }
    const repeatNextDay = todo => {
    }
    
    const handleDelete = (todo) => {
        deleteTodo(todo)
        if(selectedTodo === todo){ 
            setSelectedTodo(false)
        }
    }

    return(
        <div className='Todo' >
            <div className='todo-container'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className='check-todo'
                    onClick={()=> checkTodo(todo)}
                >
                    {
                        todo.checked ?
                        <span className='checked'>
                            <CheckCircleFill color='#EAB2A0' />
                        </span>
                        :
                        <span className='unchecked'>
                            <Circle color={todo.color} />
                        </span>
                    }
                </div>
                <div className='text' 
                onClick={()=>setSelectedTodo(todo)}
                >
                    <p  onClick={()=> setShowModal(true)}
                    style={{color : todo.checked ? 'black': '#EAB2A0',
                                textDecoration: todo.checked ? 'line-through' : 'none'
                            }}>
                        {todo.text}
                    </p>
                    <span style={{color : todo.checked ? 'black': '#EAB2A0'}}>{todo.time} - {todo.date} </span>
                    <div className=''>

                    </div>
                </div>
                <div className='add-to-next-day'
                    onClick={()=> repeatNextDay(todo)}
                    >
                    {
                        todo.checked && 
                        <span>
                            <ArrowClockwise />
                        </span>
                    }

                </div>
                <div className='delete-todo'
                onClick={()=> handleDelete(todo)}
                >
                    {
                        (hover || todo.checked) && 
                        <span>
                            <Trash />
                        </span>
                    }

                </div>

            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <EditTodo todo ={selectedTodo} setShowModal={setShowModal}/>
            </Modal>
        </div>
    )
}

export default Todo;