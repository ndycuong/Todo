import React from 'react';
import {Bell, CalendarDay, Clock, ListTask, X} from "react-bootstrap-icons"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function TodoForm({
    handleSubmit,
    heading=false,
    text,setText,
    selectedday,setDay,
    selectedtime,setTime,
    todoProject, setTodoProject,
    projects,
    showButton=false,
    setShowModal=false
}){
   
    return(
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <form onSubmit={handleSubmit} className='TodoForm'>
                        <div className='details'>
                            {
                                heading && <h3>{heading}</h3>
                            }
                            <input
                                type='text'
                                value={text}
                                onChange ={(e)=>setText(e.target.value)}
                                placeholder='todo ...'
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
                                {
                                    projects.length > 0 ?
                                    projects.map( project =>
                                        <div className={`project ${todoProject ===project.name ? "active" :""}`} key={project.id}
                                            onClick={()=>setTodoProject(project.name)}
                                        >
                                            {project.name}
                                        </div>)
                                        :
                                        <div style={{color: 'red'}}>
                                            Add a project first
                                        </div>
                                }
                            </div>
                        </div>
                        {
                            showButton &&
                            <div>
                                <div className='cancel' onClick={()=>setShowModal(false)}>
                                    <X size='30' />
                                </div>
                                <div className='confirm'>
                                    <button onClick={()=>setShowModal(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                        <span>    </span>
                                        <p>Done</p>
                                {/* Add */}
                                    </button>
                                </div>
                            </div>
}
                    </ form>   
                </LocalizationProvider>
    )
}

export default TodoForm;