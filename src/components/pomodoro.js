import React, {useEffect, useContext, useRef} from "react";
import Timer from "./Timer";
import ButtonController from "./buttoncontroller";
// import Progress from "./progress";
import TimeController from "./timecontroller";
import Title from "./title";
import {TimeContext} from "./TimeContext";

const Pomodoro = () => {
    const [timer, setTimer] = useContext(TimeContext);
    // create ref for the audio
    const beep = useRef();

    useEffect(() => {
        if (timer.active && timer.time.currentTime > 0) {
            const interval = setInterval(() => {
                setTimer({
                    ...timer,
                    time: {
                        startingTime: timer.time.startingTime,
                        currentTime: timer.time.currentTime - 1,
                    },
                });
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer.time.currentTime === 0) {
            beep.current.play();
            beep.current.currentTime = 0;
            //    setTimeout(() => {
            if (timer.mode === "work") {
                setTimer({
                    ...timer,
                    time: {
                        currentTime: timer.break,
                        startingTime: timer.break,
                    },
                    mode: "break",
                });
            }
            if (timer.mode === "break") {
                setTimer({
                    ...timer,
                    time: {
                        currentTime: timer.work,
                        startingTime: timer.work,
                    },
                    mode: "work",
                    progress: timer.progress + 1,
                });
            }
            //    }, 2500);
        }
    }, [setTimer, timer]);

    useEffect(() => {
        if (timer.playPause) {
            beep.current.pause();
            beep.current.currentTime = 0;
        }
    });

    return (
        <div className="pomodoro">
            <Title title={timer.name} />
            <Timer time={timer.time} mode={timer.mode} />

            {/* <Progress progress={timer.progress} /> */}

            <TimeController
                durationId={timer.work}
                type="work"
                label={"work"}
                lengthId={"work-length"}
                labelId={"work-label"}
            />
            <TimeController
                durationId={timer.break}
                type="break"
                label={"Break"}
                lengthId={"break-length"}
                labelId={"break-label"}
            />
            <ButtonController playing={timer.active} myRef={beep} />
            <audio
                id="beep"
                preload="auto"
                src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
                ref={beep}></audio>
        </div>
    );
};

export default Pomodoro;
