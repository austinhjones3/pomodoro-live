import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import ChangeDurations from "./change-durations/ChangeDurations";
import Control from "./control/Control";
import Timer from "./timer/Timer";

/**
 * @function Pomodoro() - main component of the app
 * @param {values, setValues} - a state of type object to hold and manage all of the
 * app's processing data
 * @returns {JSX} - JSX components containing all of the app's render information
 */
export default function Pomodoro() {
  const [values, setValues] = useState({
    focusVal: 25,
    focusInc: 5,
    focusMin: 5,
    focusMax: 60,
    focusCount: 1500,
    breakVal: 5,
    breakInc: 1,
    breakMin: 1,
    breakMax: 15,
    breakCount: 300,
    focus: true,
    running: false,
    stopClicked: true,
  });

  const { focusVal, breakVal, focusCount, breakCount, running, focus } = values;
  /**
   * @function useInterval() is called here from utils folder. This is the
   * function that runs the timer. values is updated with setValues() based
   * on the status of some values.
   */
  useInterval(
    () => {
      switch (true) {
        case focusCount === 0: {
          setValues(() => {
            return { ...values, focusCount: focusVal * 60, focus: false };
          });
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          break;
        }
        case breakCount === 0: {
          setValues(() => {
            return { ...values, breakCount: breakVal * 60, focus: true };
          });
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          break;
        }
        case focus: {
          setValues(() => {
            return { ...values, focusCount: focusCount - 1 };
          });
          break;
        }
        case !focus: {
          setValues(() => {
            return { ...values, breakCount: breakCount - 1 };
          });
          break;
        }
        default:
          break;
      }
    },
    running ? 1000 : null
  );

  /**
   * @function playPause() - manages the process behind clicking play/pause.
   * setValues() is called to swap the boolean value of running and to explicitly
   * make sure that stopClicked is false.
   */
  function playPause() {
    const swap = !running;
    setValues(() => {
      return { ...values, running: swap, stopClicked: false };
    });
  }

  return (
    <div className="pomodoro">
      <ChangeDurations values={values} setValues={setValues} />
      <Control values={values} setValues={setValues} playPause={playPause} />
      <Timer values={values} />
    </div>
  );
}
