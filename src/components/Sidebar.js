// import React, {useEffect, useRef} from 'react';
// import { useContext } from 'react';
// import { TodoContext } from '../context';   

// function Sidebar({children}){
//     const {setSelectedTodo} = useContext(TodoContext)
//     const sidebarRef = useRef()
//     useEffect(()=>{
//         document.addEventListener('click', handleClick)
//         return () =>  document.removeEventListener('click', handleClick)
        
//     })
//     const handleClick = e => {
//         if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
//             setSelectedTodo(undefined)
//         }
//     }
//     return(
//         <div className='Sidebar'
//         ref={sidebarRef}
//         >
//             {children}
//         </div>
//     )
// }

// export default Sidebar;

import React, { useEffect, useRef, useContext } from 'react';
import { TodoContext } from '../context';

function Sidebar({ children, isOpen }) {
  const sidebarRef = useRef();
  const { setSelectedTodo } = useContext(TodoContext);

  useEffect(() => {
    const handleClick = (e) => {
      if (isOpen && (e.target === sidebarRef.current || sidebarRef.current.contains(e.target))) {
        setSelectedTodo(undefined);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, setSelectedTodo]);

  return (
    <div className={`Sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      {children}
    </div>
  );
}

export default Sidebar;
