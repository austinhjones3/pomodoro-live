import React from "react";
import Duration from "../../utils/duration/index";
import Button from "./Button";

/**
 * @function ChangeDurations() - child component of Pomodoro encompassing the
 * +/- buttons and their displays
 * @param {Object} props - destructured values/setValues
 * @returns {JSX} - JSX element representing the +/- buttons for focus and break times
 */
export default function ChangeDurations({ values, setValues }) {
  const { focusVal, breakVal } = values;
  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {Duration.minutesToDuration(focusVal)}
          </span>
          <div className="input-group-append">
            <Button
              // increase={false}
              // focus={true}
              type={"decrease-focus"}
              values={values}
              setValues={setValues}
            />
            <Button
              // increase={true}
              // focus={true}
              type={"increase-focus"}
              values={values}
              setValues={setValues}
            />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {Duration.minutesToDuration(breakVal)}
            </span>
            <div className="input-group-append">
              <Button
                // increase={false}
                // focus={false}
                type={"decrease-break"}
                values={values}
                setValues={setValues}
              />
              <Button
                // increase={true}
                // focus={false}
                type={"increase-break"}
                values={values}
                setValues={setValues}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
