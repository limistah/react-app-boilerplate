import React, { Component } from "react";
import Styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";

const SectionWrapper = Styled.section`
  background: #fff;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  -webkit-transition: all .2s;
  transition: all .2s;
  
  & .code-expand-icon {
    position: absolute;
    right: 16px;
    bottom: 23px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
  }

  & .highlight-wrapper {
    display: ${props => (props.showCode ? "block" : "none")};
    overflow: auto;
    border-radius: 0 0 2px 2px;
  }

  & .highlight {
    position: relative;
  }

  & .highlight pre {
    margin: 0;
    padding: 0;
    background: #fff;
  }

  & pre {
    margin: 0;
    width: auto;
  }
`;

const SectionBoxDemo = Styled.section`
  border-bottom: 1px solid #ebedf0;
  padding: 42px 24px 50px;
  color: rgba(0, 0, 0, 0.65);
`;

const SectionBoxMeta = Styled.section`
  
  position: relative;
  padding: 18px 32px;
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
  width: 100%;
  font-size: 14px;
  color: #314659;
  line-height: 2;
  border-radius: ${props => (props.showCode ? "0 0 2px 2px" : "0")};
  border-bottom: ${props => (props.showCode ? "1px dashed #ebedf0" : "0")};
`;

const DivBoxMetaTitle = Styled.div`
  position: absolute;
  top: -14px;
  padding: 1px 8px;
  margin-left: -8px;
  color: #777;
  border-radius: 2px 2px 0 0;
  background: #fff;
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
`;

const SpanBoxExpandIcon = Styled.span`
  position: absolute;
  right: 16px;
  bottom: 23px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;

  .code-expand-icon-show {
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    max-width: 100%;
    width: 100%;
    vertical-align: baseline;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .code-expand-icon-hide {
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    max-width: 100%;
    width: 100%;
    vertical-align: baseline;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

`;

export default class CodeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCode: false
    };
  }

  handleToggleCode(e) {
    this.setState({ showCode: !this.state.showCode });
  }

  getIconCode() {
    return this.state.showCode ? (
      <img
        alt="expand code"
        src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
        className="code-expand-icon-show"
      />
    ) : (
      <img
        alt="expand code"
        src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
        className="code-expand-icon-hide"
      />
    );
  }

  render() {
    const {
      codeBoxResult,
      codeBoxMeta,
      codeBoxCode,
      codeBoxMetaTitle
    } = this.props;
    const showCode = this.state.showCode;
    return (
      <SectionWrapper showCode={showCode}>
        <SectionBoxDemo>{codeBoxResult}</SectionBoxDemo>
        <SectionBoxMeta showCode={showCode}>
          <DivBoxMetaTitle>{codeBoxMetaTitle}</DivBoxMetaTitle>
          {codeBoxMeta}
          <SpanBoxExpandIcon onClick={e => this.handleToggleCode(e)}>
            {this.getIconCode()}
          </SpanBoxExpandIcon>
        </SectionBoxMeta>
        <section className="highlight-wrapper">
          <div className="highlight">
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeBoxCode}
            </SyntaxHighlighter>
          </div>
        </section>
      </SectionWrapper>
    );
  }
}
