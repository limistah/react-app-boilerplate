import Superstore from "superstore";
import LoadableComposer from "../app/components/LoadableComposer";
import { injectIntl } from "react-intl";

export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const createStore = () => {
  const storageNamespace = process.env.REACT_APP_LOCALSTORAGE_NAMESPACE;
  return new Superstore("local", storageNamespace);
};

/**
 * @property {function} options.loader A function that returns a dynamic module import function call
 * @property {number} options.delay A time to wait for in millisecond
 * @property {number} options.timeout When the loading will time out. In millisecond
 * @property {string} options.delayedText Text to display when the delay is passed
 * @property {string} options.timedOutText Text to display when the timeout is passed
 * @property {string} options.errorText Error Text do display when there is error loading the component
 *
 * @param {object} options The options required by Loadable composer
 */
export const LoadableComposerHelper = options => {
  return LoadableComposer(options);
};

export const i18nComponent = Component => injectIntl(Component);

export const languageMapper = locale => {
  locale = locale.trim();
  switch (locale) {
    case "en":
      return { locale, lang: "English" };
    case "fr":
      return { locale, lang: "Français" };
    case "es":
      return { locale, lang: "Español" };
    default:
      return { locale: "en", lang: "English" };
  }
};
