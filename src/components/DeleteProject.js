import React, { useContext } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { TodoContext } from '../context';

function DeleteProject({ project, setShowModal }) {
  const { deleteProject } = useContext(TodoContext);

  const handleDelete = async () => {
    try {
      // Make an HTTP DELETE request to your Node.js server to delete the project
      await axios.delete(`/project/${project.id}`); // Replace with the appropriate API endpoint

      // Call a function to delete the project from your context or data source
      deleteProject(project.id); // Replace with the appropriate delete logic

      // Close the modal
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='DeleteProject'>
      <h2>Delete Project "{project.name}"?</h2>
      <p>Are you sure you want to delete this project?</p>
      <div className='button-container'>
        <button onClick={handleDelete} className='delete-button'>
          Delete
        </button>
        <button onClick={() => setShowModal(false)} className='cancel-button'>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteProject;
