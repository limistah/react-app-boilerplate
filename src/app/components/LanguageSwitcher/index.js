import React from "react";
import { languageMapper } from "./../../../factory/utils";
import PropTypes from "prop-types";
import styled from "styled-components";

const supported = process.env.REACT_APP_SUPPORTED_LANG.split(",").map(
  languageMapper
);

const ULWrapper = styled.ul`
  list-style-type: none;
  li {
    float: right;
    padding: 5px;
    margin: 0 3px;
  }
`;

const LangSwitcher = props => {
  const Items = props =>
    supported.map(data => {
      return (
        <li
          key={data.locale}
          onClick={() => {
            props.switchLocale(data.locale);
          }}
        >
          {data.lang}
        </li>
      );
    });
  return (
    <ULWrapper>
      <Items switchLocale={props.switchLocale} />
    </ULWrapper>
  );
};

LangSwitcher.propTypes = {
  switchLocale: PropTypes.func.isRequired
};

export function LanguageSwitcher(props) {
  return <LangSwitcher {...props} />;
}

export default LanguageSwitcher;
