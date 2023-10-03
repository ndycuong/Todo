import React, {useContext} from 'react';
import {CalendarDate} from 'react-bootstrap-icons'
import { calendarItems } from '../constants';
import{TodoContext} from '../context'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { MDBIcon } from 'mdb-react-ui-kit';

function Calendar(){
    const { setSelectedProject} = useContext(TodoContext)
    return(
        <div className='Calendar'>
            <div className='header'>
                <div className='title'>
                    <CalendarDate size="25"  />
                    <p>Calendar</p>
                </div>
                <div className='btns'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" size='25'/> */}
                        {/* <MDBIcon fas icon="angle-down" /> */}
                        {/* <CaretUp size="25" />    */}
                    </span>
                </div>
            </div>
            <div className='items'>
                {
                    calendarItems.map(item=>
                        <div className='item' key={item}
                            onClick={()=> setSelectedProject(item)}
                        >
                            {item}
                        </div>

                    )
                }

            </div>
        </div>
    )
}

export default Calendar;