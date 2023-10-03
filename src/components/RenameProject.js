import React,{useState} from 'react';
import ProjectForm from './ProjectForm';
import axios from 'axios';
import { useContext } from 'react';
import { TodoContext } from '../context';
function RenameProject({project, setShowModal}){
    const { selectedProject, setSelectedProject } = useContext(TodoContext);

    const [newProjectName, setNewProjectName] = useState(project.name);

    // Rename Project
    const renameProject = async (project, newProjectName) => {
      try {
        // Make an HTTP PUT request to your Node.js server to rename the project
        await axios.put(`/project/${project.id}`, { name: newProjectName }); // Replace with the appropriate API endpoint
  
        // Update the context or data source as needed
  
        if (selectedProject === project.name) {
          setSelectedProject(newProjectName);
        }
      } catch (error) {
        console.error(error);
        // Handle errors here, e.g., show an error message to the user
      }
    };
  
    function handleSubmit(e) {
      e.preventDefault();
  
      renameProject(project, newProjectName);
  
      setShowModal(false);
    }
    return(
        <div className='ReNameProject'>
            <ProjectForm 
                handleSubmit={handleSubmit}
                heading='Edit project name'
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
            />
        </div>
    )
}

export default RenameProject;