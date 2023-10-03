import  React from 'react';
import { useRef } from 'react';
function Modal({children, showModal,setShowModal }){
    const modalRef = useRef();
    const closeModal=(e) =>{
        //modalRef.current always is Modal and event.target is element that click
        if(e.target === modalRef.current){  // e.target returns element that click
            setShowModal(false)  // for purpose of closing modal when clicks outside of it
        }
    }
    //explain closeModal: modelRef.current is element div with className="Modal" or outside of children in container
    //when click outside of children in container, e.target retuns this outside and now === occured and close Modal
    //when click inside of children in container, e.target retuns children and now !== occured and Modal not close
    //in AddNewTodo children here is form
    return(
        showModal && (
            //pass your ref as the ref attribute to the JSX tag for which you want to get the DOM node:
            //When React creates a DOM node for this <div>, React will put a reference to this node into modalRef.current.
            //This tells React to put this <div>’s DOM node into modalRef.current.
            <div className='Modal' ref={modalRef} onClick={closeModal}> 
                <div className='Container'>
                    {children}
                </div>
            </div>
        )

    )
}

export default Modal;