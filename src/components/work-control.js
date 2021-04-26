import React from "react";

const workInterval = (props) => {
    function increaseCounter() {
        if (props.workInterval == 60) {
            return;
        }
        props.increaseWork();
    }

    function decreaseCounter() {
        if (props.workInterval === 1) {
            return;
        }
        props.decreaseWork();
    }

    return (
        <section>
            <h4>Work Time</h4>
            <section className="interval-container">
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseCounter}>
                    +
                </button>
                <p className="interval-time">{props.workInterval}</p>
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseCounter}>
                    -
                </button>
            </section>
        </section>
    );
};

export default workInterval;
