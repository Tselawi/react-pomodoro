import React from "react";
import TimeProvider from "./TimeContext";
import Pomodoro from "./pomodoro";

const Main = () => {
    return (
        <main>
            <TimeProvider>
                <div className="app">
                    <Pomodoro />
                </div>
            </TimeProvider>
        </main>
    );
};

export default Main;
