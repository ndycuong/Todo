import React, { useEffect } from 'react';
import {useState, useContext} from 'react';
import Modal from './Modal';
import axios from 'axios';
import moment from 'moment';
// import {Bell, CalendarDay, Clock, ListTask, X} from "react-bootstrap-icons"
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TodoForm from './TodoForm';
import {TodoContext} from '../context';


function AddNewTodo(){
    const {selectedProject} = useContext(TodoContext)

    const[showModal, setShowModal] = useState(false); // useState return current value: here is false and a function updating this state
    const[text, setText] = useState('')
    const[selectedday, setDay] = useState(new Date())
    const[selectedtime, setTime] = useState(new Date())
    const [todoProject, setTodoProject] = useState(selectedProject)
    //context
    const projects =[
        {id:1, name:'personal', numOfTodos:0},
        {id:2, name:'school', numOfTodos:1},
        {id:3, name:'other', numOfTodos:2}
    ]
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // if (text && !calendarItems.includes(todoProject)) {
          try {
            // Make an HTTP POST request to your Node.js server
            const response = await axios.post('/todo/create', {
              text,
              day: moment(selectedday).format('MM/DD/YYYY'),
            //   day: moment(selectedday).format('d'),
              time: moment(selectedtime).format('hh:mm A'),
              checked: false,
              projectName: todoProject,
            });
    
            if (response.status === 201) {
              alert('Todo created successfully');
            }
            else {
                // The request was made, but the server responded with an error status
                alert('Backend request failed with status: ' + response.status);
              }
          } catch (error) {
            if (error.response && error.response.data) {
              alert(error.response.data.error);
            } else {
              alert('An error occurred');
            }
          }
        
          setShowModal(false);
          setText('');
          setDay(new Date());
          setTime(new Date());
        
      };

    useEffect(()=>{
        setTodoProject(selectedProject)
    },[selectedProject])   // for updating todoProject when selectedProject changes

    return(
        <div className='AddNewTodo'>
            <div className='btn'>
                <button onClick={()=>setShowModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                    </svg>
                    <span>    </span>
                    New Todo List
                </button>

            </div>
            
            <Modal showModal={showModal} setShowModal={setShowModal}>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <form>
                        <div className='details'>
                            <h3>Add New Todo</h3>
                            <input
                                type='text'
                                value={text}
                                onChange ={(e)=>setText(e.target.value)}
                                placeholder='new todo'
                                autoFocus
                            />
                        </div> 
                        <div className='remind'>
                            <Bell />
                            <p>Remind me !!!</p>
                        </div> 
                        <div className='pick-day'>
                            <div className='title'>
                                <CalendarDay />
                                <p> Choose a day</p>
                            </div>
                            <DatePicker 
                                value={selectedday}
                                onChange={(day) =>{setDay(day)}}
                            />
                        </div> 
                        <div className='pick-time'>
                            <div className='title'>
                                <Clock />
                                <p> Choose a deadline</p>
                            </div>
                            <TimePicker
                                value={selectedtime}
                                onChange={(time) =>{setTime(time)}} />                          
                        </div>  
                        <div className='pick-project'>
                            <div className='title'>
                                <ListTask /> 
                                <p> Choose a project</p>
                            </div>
                            <div className='projects'>
                                <div className='project active'>
                                    personal
                                </div>
                                <div className='project'>
                                    work
                                </div>
                            </div>
                        </div>
                        <div className='cancel' onClick={()=>setShowModal(false)}>
                            <X size='30' />
                        </div>
                        <div className='confirm'>
                            <button onClick={()=>setShowModal(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 448 512">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                </svg>
                                <span>    </span>
                                <p>Add</p>
                                {/* Add */}
                            {/* </button>
                        </div>
                    </ form>   
                // </LocalizationProvider> */}
                <TodoForm 
                    handleSubmit={handleSubmit} 
                    heading='Add New Todo'
                    text={text}
                    setText={setText}
                    selectedday={selectedday}
                    setDay={setDay}
                    selectedtime={selectedtime}
                    setTime={setTime}
                    todoProject={todoProject}
                    setTodoProject={setTodoProject}
                    projects={projects}
                    setShowModal={setShowModal}
                    showButton={true}
                />
                
            </Modal> 

        </div>
    )
            
            }
export default AddNewTodo;