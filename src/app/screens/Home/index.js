import React from "react";
import { injectIntl, defineMessages } from "react-intl";
// import { Button } from 'antd'

const messages = defineMessages({
  title: {
    id: "screen.home.welcome",
    defaultMessage: "This is the home screen."
  }
});

const Home = props => {
  const {
    intl: { formatMessage }
  } = props;
  return (
    <div>
      {/* <Button>Button</Button> */}
      {formatMessage(messages.title)}
    </div>
  );
};

export default injectIntl(Home);
