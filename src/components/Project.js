import React, {useState, useContext} from 'react';
import Modal from './Modal';
import { Pencil, XCircle } from 'react-bootstrap-icons';
import RenameProject from './RenameProject';
import { TodoContext } from '../context';
import DeleteProject from './DeleteProject';
function Project({project, edit}){
    const {setSelectedProject} = useContext(TodoContext)
    const [showModal, setShowModal] = useState(false);
    const [showDeleteProject, setShowDeleteProject] = useState(false); // State variable for showing DeleteProject

  // Function to toggle the DeleteProject modal
  const toggleDeleteModal = () => {
    setShowDeleteProject(!showDeleteProject);
    setShowModal(false); // Close the RenameProject modal if open
  };
    return(
        <div className='Project'>
            <div className='name'
                onClick={()=> setSelectedProject(project.name)}
            >
                {project.name}

            </div>
            <div className='btns'>
                {
                    edit ?
                    <div className='edit-delete'>
                        <span className='edit' onClick={()=> setShowModal(true)}>
                            <Pencil size="15" />
                        </span>
                        <span className='delete' onClick={toggleDeleteModal}>
                            <XCircle size="15" />
                        </span>
                    </div>
                    :
                    project.numOfTodos === 0 ?
                    ""
                    :
                    <div className='total-todos'>
                        {project.numOfTodos}
                    </div>
                }
            </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <RenameProject project={project} setShowModal={setShowModal} />
                </Modal>
                {showDeleteProject && (
                <Modal showModal={true} setShowModal={toggleDeleteModal}>
                    <DeleteProject project={project} setShowModal={toggleDeleteModal} />
                </Modal>
                )}

      
            
            
        </div>
    )
}

export default Project;