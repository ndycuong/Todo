import './App.css';

// import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import Calendar from './components/Calendar';
import AddNewTodo from './components/AddNewTodo';
import Projects from './components/Projects';
import Todos from './components/Todos';
// import EditTodo from './components/EditTodo';
import Player from './components/Player';
import Pomodoro from './components/Pomodoro';



import React, { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const buttonTitle = isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar';
  const mainStyle = {
    marginLeft: isSidebarOpen ? '250px' : '0',
    transition: 'margin-left 0.3s',
    width: isSidebarOpen ? 'calc(100% - 250px)' : '100%', // Adjust the width here
  };
  return (
    <div className="App">
      <button className={`SidebarButton ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar} title={buttonTitle}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      {/* <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i> */}

      <div className={`Sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </div>
    
      {/* <button className={`SidebarButton ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close' : 'Open'} 
      </button> */}
      <Main style={mainStyle}>
        
        <><Player /><Pomodoro /><Todos /></>
        {/* <EditTodo /> */}

        
      </Main>
    </div>
  );
}

export default App;

