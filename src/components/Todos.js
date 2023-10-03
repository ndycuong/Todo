import React, { useContext,useEffect } from 'react';
import Todo from './Todo';
import Next7Days from './Next7Days';
import { TodoContext } from '../context';
import { useState } from 'react';
import EditTodo from './EditTodo';
import Modal from './Modal';
import axios from 'axios';
function Todos(){


    const [showModal, setShowModal] = useState(false); // useState return current value: here is false and a function updating this state
    // const [selectedTodo, setSelectedTodo] = useState(null); // Initialize with null or undefined

    const handleTodoClick = (todo) =>{
        // console.log('handleTodoClick called');
        // setSelectedTodo(todo)
        setShowModal(true)
    }
    const { todos } = useContext(TodoContext)
    const { selectedTodo,selectedProject} = useContext(TodoContext)
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data from your backend API
      axios.get('/todo')
        .then((response) => {
          setData(response.data); // Assuming your API returns an array of data
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    todos.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

    return(
    <div>

        <div className='Todos'>
            <div className='selected-project'>
                {data.projectName}

            </div>
            <div className='todos'>
                {
                    selectedProject === "My Week" ?
                    <Next7Days todos={todos} />
                    :
                    todos.map(todo => 
                        <div className='handle' onClick={handleTodoClick} setShowModal={setShowModal}>
                            <Todo key={todo.id} todo={todo}  />

                        </div>
                    )
                }
            </div>
        </div>
        {/* <div> */}
            {/* {showModal &&  */}
            {/* <Modal showModal={showModal} setShowModal={setShowModal}>
                <EditTodo todo ={selectedTodo} setShowModal={setShowModal}/>
            </Modal> */}
    
        

        {/* </div> */}
    </div> 
       
    )
}

export default Todos;