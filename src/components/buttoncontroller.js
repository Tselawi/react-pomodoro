import React, {useContext} from "react";
import Button from "./button";
import {TimeContext} from "./TimeContext";

const ButtonController = (props) => {
    const [timer, setTimer] = useContext(TimeContext);

    const resetTime = () => {
        console.log(timer);
        setTimer({
            ...timer,
            work: 1500,
            break: 300,
            mode: "work",
            time: {currentTime: 1500, startingTime: 1500},
            active: false,
            name: "Pomodoro Timer",
            progress: 0,
        });
        props.myRef.current.pause();
        props.myRef.current.currentTime = 0;
    };

    const setActive = () => {
        setTimer({
            ...timer,
            active: !timer.active,
        });
    };

    return (
        <div className="ButtonController">
            <Button
                buttonId="reset"
                type="reset"
                actionClick={() => resetTime()}>
                <i className="fas fa-undo-alt"></i>
            </Button>
            <Button
                buttonId="start_stop"
                type="play"
                actionClick={() => setActive()}>
                <i
                    className={`fas ${
                        timer.active ? "fa-pause" : "fa-play"
                    }`}></i>
            </Button>
        </div>
    );
};

export default ButtonController;
