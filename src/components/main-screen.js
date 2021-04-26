import React from "react";
import WorkInterval from "./work-control";
import BreakInterval from "./break-control";
import Timer from "./Timer";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            breakTime: 5,
            workTime: 25,
            timerMinute: 25,
            isPlay: false,
        };
        this.onIncreaseBreakTime = this.onIncreaseBreakTime.bind(this);
        this.onDecreaseBreakTime = this.onDecreaseBreakTime.bind(this);
        this.onIncreaseWorkTime = this.onIncreaseWorkTime.bind(this);
        this.onDecreaseWorkTime = this.onDecreaseWorkTime.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    }

    onIncreaseBreakTime() {
        this.setState((prevState) => {
            return {
                breakTime: prevState.breakTime + 1,
            };
        });
    }
    onDecreaseBreakTime() {
        this.setState((prevState) => {
            return {
                breakTime: prevState.breakTime - 1,
            };
        });
    }

    onIncreaseWorkTime() {
        this.setState((prevState) => {
            return {
                workTime: prevState.workTime + 1,
                timerMinute: prevState.timerMinute + 1,
            };
        });
    }

    onDecreaseWorkTime() {
        this.setState((prevState) => {
            return {
                workTime: prevState.workTime - 1,
                timerMinute: prevState.timerMinute - 1,
            };
        });
    }

    onUpdateTimerMinute() {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1,
            };
        });
    }

    onToggleInterval(isWork) {
        if (isWork) {
            this.setState({
                timerMinute: this.state.workTime,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakTime,
            });
        }
    }
    onResetTimer() {
        this.setState({
            timerMinute: this.state.workTime,
        });
    }

    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay: isPlay,
        });
    }

    render() {
        return (
            <main className="main-screen">
                <h2 className="title">Pomodoro Clock</h2>
                <section className="interval-main-container">
                    <WorkInterval
                        isPlay={this.state.isPlay}
                        workInterval={this.state.workTime}
                        increaseWork={this.onIncreaseWorkTime}
                        decreaseWork={this.onDecreaseWorkTime}
                    />
                    <BreakInterval
                        isPlay={this.state.isPlay}
                        breakInterval={this.state.breakTime}
                        increaseBreak={this.onIncreaseBreakTime}
                        decreaseBreak={this.onDecreaseBreakTime}
                    />
                </section>
                <Timer
                    timerMinute={this.state.timerMinute}
                    breakTime={this.state.breakTime}
                    updateTimerMinute={this.onUpdateTimerMinute}
                    toggleInterval={this.onToggleInterval}
                    resetTimer={this.onResetTimer}
                    onPlayStopTimer={this.onPlayStopTimer}
                />
            </main>
        );
    }
}

export default Main;
