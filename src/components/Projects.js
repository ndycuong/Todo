import React from 'react';
import AddNewProject from './AddNewProject';
import Project from './Project';
import {ListTask, PencilFill} from "react-bootstrap-icons"
import { useState } from 'react';
function Projects(){
    
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? '#ADC4CE' : 'black';
    const projects =[
        {id:1, name:'personal', numOfTodos:2},
        {id:2, name:'school', numOfTodos:1},
        {id:3, name:'other', numOfTodos:1}
    ]

    return(
        <div className='Projects'>
            <div className='header'>
                <div className='title'>
                    <ListTask size="25"  />
                    <p>Projects</p>
                </div>
                <div className='btns'>
                    {
                        showMenu && projects.length > 0 &&
                            <span className='edit' onClick={() => setEdit(edit => !edit)}>
                                <PencilFill size="15" color={pencilColor} />
                            </span>
                    }
                        <AddNewProject />
                        <span className='arrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </span> 
                </div>

            </div>
            <div className='items'>
                {
                    projects.map(project=>
                        <Project 
                            project={project}
                            key={project.id}
                            edit={edit}
                        />

                    )
                }

            </div>

        </div>
    )
}

export default Projects;