import React from "react";
import PropTypes from "prop-types";
// import Spinner from "react-spinkit";
import styled from "styled-components";
import { Spin } from "antd";

import Logo from "./components/Logo";
import Text from "./components/Text";
import Err from "./components/Err";

const ScreenWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${props => props.bgColor || "#ffffff"};
  transition: opacity 0.4s, visibility -0.3s linear 0.5s;
`;
const LoadingComponents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// const LoadableData = styled.div`
//   display: ${props => props.loading ? 'none' : 'block'};
// `

const propTypes = {
  bgColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  textColor: PropTypes.string,
  loading: PropTypes.bool,
  logoSrc: PropTypes.string,
  text: PropTypes.string,
  timedOut: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  retry: PropTypes.func
};

function LoadingScreen({
  bgColor,
  spinnerColor,
  textColor,
  loading,
  logoSrc,
  logoRounded,
  text,
  timedOut,
  error,
  retry
}) {
  const logoTest = logoSrc && !(timedOut || error);
  const errorTest = error && !timedOut && retry && text;
  const timedOutTest = timedOut && !error && retry && text;
  return (
    <div>
      <ScreenWrapper bgColor={bgColor}>
        <LoadingComponents>
          {logoTest && <Logo src={logoSrc} rounded={logoRounded} />}

          {loading && <Spin name="ball-beat" color={spinnerColor} />}

          {text && <Text text={text} textColor={textColor} />}

          {timedOutTest && (
            <Err text={text} textColor={textColor} errImgSrc={logoSrc} />
          )}

          {errorTest && (
            <Err
              text={text}
              textColor={textColor}
              errImgSrc={logoSrc}
              retry={retry}
            />
          )}
        </LoadingComponents>
      </ScreenWrapper>
    </div>
  );
}

LoadingScreen.propTypes = propTypes;

export default LoadingScreen;
