import React from "react";
import Loadable from "react-loadable";
import LoadingComponent from "./../LoadingComponent";
import logo from "./../../../assets/images/logo.png";

/**
 *
 * options should have:
 * @property {function} options.loader A function that returns a dynamic module import function call
 * @property {number} options.delay A time to wait for in millisecond
 * @property {number} options.timeout When the loading will time out. In millisecond
 * @property {string} options.delayedText Text to display when the delay is passed
 * @property {string} options.timedOutText Text to display when the timeout is passed
 * @property {string} options.errorText Error Text do display when there is error loading the component
 *
 * @param {object} options The options required by Loadable composer
 */
export default ({
  loader,
  timeout,
  delay,
  delayedText,
  timedOutText,
  errorText
}) => {
  if (typeof loader !== "function") {
    throw new Error("loader should be function that returns a dynamic import");
  }
  delayedText =
    delayedText ||
    "Loading has taken longer than expected. Kinkly try again please...";
  timedOutText =
    timedOutText ||
    "Loading has taken longer than expected. Kinkly try again please...";
  errorText =
    errorText ||
    "You are not lucky with the initialization, an error occured while loading the App. Try again please...";

  const spinnerColor = "";
  const logoRounded = false;

  return Loadable({
    loader: loader,
    loading: props => {
      if (props.error) {
        return (
          <LoadingComponent
            logoSrc={logo}
            bgColor="lightred"
            retry={props.retry}
            error={true}
            timedOut={false}
            spinnerColor={spinnerColor}
            logoRounded={logoRounded}
            text={errorText}
          />
        );
      } else if (props.timedOut) {
        return (
          <LoadingComponent
            logoSrc={logo}
            bgColor="red"
            retry={props.retry}
            error={false}
            timedOut={true}
            spinnerColor=""
            logoRounded={logoRounded}
            text={timedOutText}
          />
        );
      } else if (props.pastDelay) {
        return (
          <LoadingComponent
            bgColor="red"
            logoSrc={logo}
            error={false}
            timedOut={false}
            spinnerColor=""
            logoRounded={logoRounded}
            text={delayedText}
          />
        );
      } else {
        return true;
      }
    },
    delay: delay || 200,
    timeout: timeout || 10000
  });
};
