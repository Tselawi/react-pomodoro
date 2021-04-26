import React from "react";

const breakInterval = (props) => {
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    return (
        <section>
            <h4>Break Time</h4>
            <section className="interval-container">
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseCounter}>
                    +
                </button>
                <p className="interval-time">{props.breakInterval}</p>
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseCounter}>
                    -
                </button>
            </section>
        </section>
    );
};

export default breakInterval;
