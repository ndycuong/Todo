import moment from "moment";
import { useState, useEffect } from "react"

// const todos=[
//     {
//         id: '1',
//         text:'Homework',
//         time:'10:00 AM',
//         date:'09-09-2023',
//         day:'Monday',
//         checked:false,
//         color: 'red',
//         projectName:'school'
//     },
//     {
//         id: '2',
//         text:'Toeic',
//         time:'10:00 PM',
//         date:'09-09-2023',
//         day:'Monday',
//         checked: true,
//         color: 'red',
//         projectName:'personal'
//     }
// ]
export default function useFilterTodos(todos, selectedProject) {
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        const todayDateFormated= moment().format('MM-DD-YYYY')
        let data;
        if(selectedProject === 'My Day'){
            data = todos.filter(todo =>  todo.date === todayDateFormated)
            }
        else if(selectedProject === 'My Week'){
            data = todos.filter(todo =>{
                const todoDate = moment(todo.date,'MM-DD-YYYY')
                const todayDate = moment(todayDateFormated,'MM-DD-YYYY')
                const diff = todoDate.diff(todayDate, 'days')
                return diff >= 0 && diff <= 7
            })}
        else if(selectedProject === 'All Todos'){
            data = todos
        }
        else{
            data = todos.filter(todo => todo.projectName === selectedProject)
        }
        setFilteredTodos(data)
        
    },[todos, selectedProject])

    return filteredTodos
}