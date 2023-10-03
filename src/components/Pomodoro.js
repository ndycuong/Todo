import React, { useState, useEffect , useRef} from 'react';
import notification from '../audios/alarm.mp3'

function Pomodoro() {
  const [studyTime, setStudyTime] = useState(0.25 * 60); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(0.25 * 60); // 2 minutes in seconds
  const [isStudying, setIsStudying] = useState(true);
  const [timer, setTimer] = useState(studyTime);
  const [isActive, setIsActive] = useState(false);
  const [cycleCompleted, setCycleCompleted] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false); // Track session completion
  const notificationRef = useRef(null); // Create a ref for the audio element

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      // When the timer reaches 0, switch between study and break time
      setIsStudying((prevIsStudying) => !prevIsStudying);

      // Set the timer based on the new mode (study or break)
      setTimer(isStudying ? breakTime : studyTime);

      if (!isStudying) {
        // If a cycle completes (break time ends), mark it as completed
        setCycleCompleted(true);
        setSessionCompleted(true); // Mark the session as completed
        setIsActive(false); // Stop the timer
        notificationRef.current.play();

      }
      else{
        notificationRef.current.play();
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timer, breakTime, studyTime, isStudying]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    if (sessionCompleted) {
      setSessionCompleted(false); // Reset session completion status
      setIsStudying(true); // Start with study time
      setTimer(studyTime);
      setIsActive(true); // Start the timer
      setCycleCompleted(false); // Reset the cycle completion status
    } else {
      setIsActive(!isActive); // Toggle timer on/off
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsStudying(true);
    setTimer(studyTime);
    setCycleCompleted(false); // Reset the cycle completion status
    setSessionCompleted(false); // Reset the session completion status
  };

  return (
    <div className="Pomodoro">
      <div className="clock">
        <div className='btn'>
            <button onClick={toggleTimer} disabled={isActive || (!isStudying && !cycleCompleted)}>
            {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetTimer}>Reset</button>
        </div>
        <div className="circle-container">
          <svg className="circle">
            <circle
              cx="50"
              cy="50"
              r="45"
              className="circle-background"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="circle-progress"
              style={{ strokeDasharray: `${(timer / (isStudying ? studyTime : breakTime)) * 283} 283` }}
            />
          </svg>
          <div className="timer-text">
            {formatTime(timer)}
          </div>
        </div>
    

      </div>
      <div className='study-text'>
        <h2 >{isStudying ? 'Study Time !' : 'Break Time !'}</h2>
      </div>
      <audio ref={notificationRef} src={notification}></audio>

    </div>
  );
}

export default Pomodoro;
