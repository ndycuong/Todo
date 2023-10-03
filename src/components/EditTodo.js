


import React, {useState, useContext, useEffect} from 'react';
import TodoForm from './TodoForm';
import { TodoContext } from '../context';
import moment from 'moment';
import axios from 'axios';

function EditTodo({todo,setShowModal}){
    const {selectedTodo} = useContext(TodoContext)
    const[text, setText] = useState('')
    const[selectedday, setDay] = useState('')
    const[selectedtime, setTime] = useState('')
    const [todoProject, setTodoProject] = useState('')
    // const[selectedday, setDay] = useState(selectedTodo)
    // const[selectedtime, setTime] = useState(selectedTodo)
    // const [todoProject, setTodoProject] = useState(selectedTodo)
    const projects =[
        {id:1, name:'personal', numOfTodos:0},
        {id:2, name:'school', numOfTodos:1},
        {id:3, name:'other', numOfTodos:2}
    ]
    
    //context
 
    useEffect(()=>{
        if(selectedTodo){
            setText(selectedTodo.text)
            setDay(moment(selectedTodo.selectedday).format('mm-dd-yyyy'))
            setTime(moment(selectedTodo.selectedtime).format('hh:mm aa'))
            setTodoProject(selectedTodo.projectName)
        }

    },[ selectedTodo])

    useEffect(() => {
        async function updateTodo() {
          if (todo) {
            try {
              // Make an HTTP PUT request to your Node.js server to update the todo
              await axios.put(`/todo/${todo.id}`, {
                text,
                date: moment(selectedday).format('MM/DD/YYYY'),
                day: moment(selectedday).format('d'),
                time: moment(selectedtime).format('hh:mm A'),
                projectName: todoProject,
              });
    
              // Handle the success or update context/data source as needed
            } catch (error) {
              console.error(error);
              // Handle errors here, e.g., show an error message to the user
            }
          }
        }
    
        updateTodo();
      }, [text, selectedday, selectedtime, todoProject]);
    
      function handleSubmit(e) {
        e.preventDefault();
        // Handle form submission if needed
      }

    return(
        <div>
        {
                selectedTodo &&
  
            <div className='EditTodo' >

                <div className='container'>
                        <TodoForm 
                                handleSubmit={handleSubmit} 
                                heading='Edit Todo'
                                text={text}
                                setText={setText}
                                selectedday={selectedday}
                                setDay={setDay}
                                selectedtime={selectedtime}
                                setTime={setTime}
                                todoProject={todoProject}
                                setTodoProject={setTodoProject}
                                // showModal={showModal}
                                setShowModal={setShowModal}
                                projects={projects}
                                showButton={true}
                        />
                        
                </div>
             
            </div>
        }
        </div>
    )
}

export default EditTodo;