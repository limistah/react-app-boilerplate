import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "antd";

import Text from "./Text";
import Image from "./Logo";

const ErrorWrapper = styled.section`
  img {
    display: block;
    margin-bottom: 30px;
  }
`;

const RetryButtonWrapper = styled(Button)`
  margin-top: 10px;
`;

const propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  errImgSrc: PropTypes.string.isRequired,
  retry: PropTypes.string.isRequired
};

Text.propTypes = propTypes;

const Err = ({ text, textColor, errImgSrc, retry }) => (
  <ErrorWrapper>
    <Image src={errImgSrc} rounded={false} />
    <Text text={text} textColor={textColor} />;
    {retry && <RetryButtonWrapper onClick={retry}>Retry</RetryButtonWrapper>}
  </ErrorWrapper>
);

export default Err;
