import React, {useState, createContext} from "react";

export const TimeContext = createContext();

const TimeProvider = (props) => {
    const [timer, setTimer] = useState({
        work: 1500,
        break: 300,
        mode: "work",
        time: {currentTime: 1500, startingTime: 1500},
        active: false,
        name: "Pomodoro Timer",
        progress: 0,
    });

    return (
        <TimeContext.Provider value={[timer, setTimer]}>
            {props.children}
        </TimeContext.Provider>
    );
};

export default TimeProvider;
