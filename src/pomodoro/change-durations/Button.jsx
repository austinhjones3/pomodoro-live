import React from "react";

/**
 * @function Button() - grandchild component of Pomodoro, child of ChangeDurations.
 * Button generator for ChangeDurations.
 * @param {Object} props - destructured values, setValues, increase, focus
 * @returns {JSX} - JSX element representing each of the 4 +/- buttons
 */
export default function Button({ values, setValues, type }) {
  const { focusVal, breakVal, stopClicked, running } = values;

  /* clamp() clamps n between its min and max (focusVal and breakVal are clamped) */
  const clamp = (n, min, max) => (n > max ? max : n < min ? min : n);

  /**
   * @function btnClickHandler() - uses conditionals to control the click event
   * and reassign the correct state properties based on which button is clicked
   * @param {event} - destructured to just the event target
   */
  const btnClickHandler = ({ target }) => {
    let newTarget;
    if (target.nodeName === "SPAN") {
      newTarget = target.parentNode;
    } else {
      newTarget = target;
    }

    let newVal = 0;
    if (newTarget.id === "increase-focus") {
      newVal = clamp(focusVal + 5, 5, 60);
      setValues(() => {
        return { ...values, focusVal: newVal, focusCount: newVal * 60 };
      });
    } else if (newTarget.id === "increase-break") {
      newVal = clamp(breakVal + 1, 1, 15);
      setValues(() => {
        return { ...values, breakVal: newVal, breakCount: newVal * 60 };
      });
    } else if (newTarget.id === "decrease-break") {
      newVal = clamp(breakVal - 1, 1, 15);
      setValues(() => {
        return { ...values, breakVal: newVal, breakCount: newVal * 60 };
      });
    } else if (newTarget.id === "decrease-focus") {
      newVal = clamp(focusVal - 5, 5, 60);
      setValues(() => {
        return { ...values, focusVal: newVal, focusCount: newVal * 60 };
      });
    }
  };

  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid={type}
      id={type}
      disabled={stopClicked && !running ? false : true}
      onClick={btnClickHandler}
    >
      <span className={type.includes("increase") ? "oi oi-plus" : "oi oi-minus"} />
    </button>
  );
}
