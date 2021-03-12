import React from "react";
import Duration from "../../utils/duration/index";

/**
 * @function Timer() - child component of Pomodoro. Contains the timer elements
 * and all of their functionality
 * @param {Object} props - destructured values
 * @returns {JSX} - JSX element representing the timer elements, including
 * the PAUSED notification, the loading bar, and the "time remaining"
 */
export default function Timer({ values }) {
  const {
    focusVal,
    focusCount,
    breakVal,
    breakCount,
    focus,
    running,
    stopClicked,
  } = values;
  /* toPercent() converts two integers into a percentage */
  const toPercent = (part, whole) => 100 - Math.floor((part / whole) * 100);

  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {focus
              ? `Focusing for ${Duration.minutesToDuration(focusVal)}`
              : `On Break for ${Duration.minutesToDuration(breakVal)}`}{" "}
            minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {focus
              ? `${Duration.secondsToDuration(focusCount)}`
              : `${Duration.secondsToDuration(breakCount)}`}{" "}
            remaining
          </p>
        </div>
      </div>
      {!stopClicked && !running ? <h2 className="col">PAUSED</h2> : null}
      <div className="row mb-2">
        <div className="col">
          {!stopClicked ? (
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                  focus
                    ? toPercent(values.focusCount, values.focusVal * 60)
                    : toPercent(values.breakCount, values.breakVal * 60)
                }
                style={{
                  width: `${
                    focus
                      ? toPercent(values.focusCount, values.focusVal * 60)
                      : toPercent(values.breakCount, values.breakVal * 60)
                  }%`,
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
