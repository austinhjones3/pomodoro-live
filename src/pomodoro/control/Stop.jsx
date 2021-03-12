import React from "react";
/**
 * @function Stop() - grandchild component of Pomodoro, child of Control
 * @param {Object} props - destructured values/setValues state
 * @returns {JSX} - JSX element representing the stop button
 */
export default function Stop({ values, setValues }) {
  const { focusVal, breakVal } = values;

  /**
   * @function stopClickHandler() - handles the processes for when the stop button
   * is clicked.
   */
  const stopClickHandler = () => {
    setValues(() => {
      return {
        ...values,
        running: false,
        focus: true,
        focusCount: focusVal * 60,
        breakCount: breakVal * 60,
        stopClicked: true,
      };
    });
  };
  return (
    <button
      type="button"
      className="btn btn-secondary"
      title="Stop the session"
      onClick={stopClickHandler}
    >
      <span className="oi oi-media-stop" />
    </button>
  );
}
