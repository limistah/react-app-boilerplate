import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";

import { IntlProvider, addLocaleData } from "react-intl";
import frLocaleData from "react-intl/locale-data/fr";
import esLocaleData from "react-intl/locale-data/es";
import translations from "./../i18n/locales";

import { appSelector } from "./../store/selectors";
import { authActions, appActions } from "./../store/actions";
import { isAuthenticated } from "../factory/auth";
import Routes from "./routes";
import { LanguageSwitcher } from "./components";

[frLocaleData, esLocaleData].forEach(item => addLocaleData(item));

class App extends Component {
  setAuthorization() {
    const flag = isAuthenticated();
    this.props.dispatch(authActions.updateAuthenticated(flag));
  }

  translationMeta() {
    // Coming from redux
    const locale = this.props.locale;
    return {
      locale,
      messages: translations[locale]
    };
  }

  setAppLocale(locale) {
    // Update language locale
    this.props.dispatch(appActions.updateAppLocale(locale));
  }

  componentWillMount() {
    // Handles updating the authorization on page load
    this.setAuthorization();
  }

  componentDidMount() {
    this.props.dispatch(appActions.setAppInitialized(true));
  }

  render() {
    const { locale, messages } = this.translationMeta();
    const { history } = this.props;
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <React.Fragment>
          <LanguageSwitcher
            switchLocale={locale => this.setAppLocale(locale)}
          />
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </React.Fragment>
      </IntlProvider>
    );
  }
}
App.propTypes = {
  history: PropTypes.object.isRequired
};
function selectors(state) {
  return {
    locale: appSelector(state).locale
  };
}
const Container = connect(selectors)(App);

export default hot(module)(Container);
