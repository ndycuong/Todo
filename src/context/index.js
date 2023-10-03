import React, {createContext, useState} from 'react'; 
import useFilterTodos from '../filters';
const TodoContext = createContext();
const todos=[
    {
        id: '1',
        text:'Homework',
        time:'10:00 AM',
        date:'09-13-2023',
        day:'3',
        checked:false,
        color: 'red',
        projectName:'school'
    },
    {
        id: '2',
        text:'Toeic',
        time:'10:00 PM',
        date:'09-14-2023',
        day:'4',
        checked: true,
        color: 'red',
        projectName:'other'
    },{
        id: '3',
        text:'English',
        time:'10:00 AM',
        date:'09-17-2023',
        day:'0',
        checked:false,
        color: 'red',
        projectName:'personal'
    },
    {
        id: '4',
        text:'Speaking',
        time:'10:00 PM',
        date:'09-18-2023',
        day:'1',
        checked: true,
        color: 'red',
        projectName:'personal'
    },{
        id: '5',
        text:'Online course',
        time:'10:00 PM',
        date:'09-10-2023',
        day:'0',
        checked: true,
        color: 'blue',
        projectName:'personal'
    }
]
function TodoContextProvider({children}){
    const defaultProject ='All Todos'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const filteredTodos = useFilterTodos(todos,selectedProject)
    const [selectedTodo, setSelectedTodo] = useState(undefined)

    return(
        <TodoContext.Provider 
            value={{
                selectedProject,
                setSelectedProject,
                todos: filteredTodos,
                selectedTodo,
                setSelectedTodo


            }}>
            {children}
        </TodoContext.Provider>


    )
}

export {TodoContextProvider, TodoContext}