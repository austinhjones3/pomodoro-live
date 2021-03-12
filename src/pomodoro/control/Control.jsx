import React from "react";
import classNames from "../../utils/class-names";
import Stop from "./Stop";

/**
 * @function Control() - child component of Pomodoro containing the functionality
 * and JSX for the play/pause button
 * @param {Object} props - destructured values/setValues state and playPause function
 * @returns {JSX} - JSX element representing the play/pause button
 */
export default function Control({ values, setValues, playPause }) {
  const { running } = values;
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !running,
                "oi-media-pause": running,
              })}
            />
          </button>
          <Stop values={values} setValues={setValues} />
        </div>
      </div>
    </div>
  );
}
