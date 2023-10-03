import React, {useState} from 'react';
import Modal from './Modal';
import {Plus} from "react-bootstrap-icons"
import ProjectForm from './ProjectForm';
import axios from 'axios';
function AddNewProject(){
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    // function handleSubmit(e){

    // }
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (projectName) {
        console.log(projectName);
        try {
          // Make an HTTP POST request to your Node.js server
          const response = await axios.post('http://localhost:3001/project/create', { projectName: projectName });
  
          if (response.status === 201) {
            alert('Project created successfully');
          }
          else {
            // The request was made, but the server responded with an error status
            alert('Backend request failed with status: ' + response.status);
          }

        } catch (error) {
          if (error.response && error.response.data) {
            alert('An error occurred: ' + error.response.data.message);
          } else {
            alert('An error occurred');
          }
        }
  
        setShowModal(false);
        setProjectName('');
      }
    };
    return(
        <div className='AddNewProject'>
            <div className='add-button'>
                <span onClick={()=>setShowModal(true)}>
                    <Plus size="25" />
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm 
                handleSubmit={handleSubmit}
                heading='New project'
                value={projectName}
                setValue={setProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Add Project'
                />
                
            </Modal>
        </div>
    )
}

export default AddNewProject;