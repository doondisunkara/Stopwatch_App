import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {currentTime: 0}

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(prev => ({currentTime: prev.currentTime + 1}))
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({currentTime: 0})
  }

  render() {
    const {currentTime} = this.state
    const min = Math.floor(currentTime / 60)
    const seconds = currentTime % 60
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="app-heading">Stopwatch</h1>
          <div className="stop-watch-card">
            <div className="timer-heading-sec">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-title">Timer</p>
            </div>
            <h1 className="timer-count">{`${
              min < 10 ? `0${min}` : min.toString()
            }:${seconds < 10 ? `0${seconds}` : seconds.toString()}`}</h1>
            <div className="buttons-section">
              <button
                type="button"
                className="btn start"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
