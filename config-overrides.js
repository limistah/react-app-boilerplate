const ReactLoadablePlugin = require("react-loadable/webpack")
  .ReactLoadablePlugin;
const { compose, injectBabelPlugin } = require("react-app-rewired");
const rewireESLint = require("react-app-rewire-eslint");
const rewireLess = require("react-app-rewire-less");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

const antdThemeOverrides = require("./antd.theme.overrides");

const withReactLoadable =
  process.env.NODE_ENV === "production"
    ? [
        new ReactLoadablePlugin({
          filename: "./build/react-loadable.json"
        })
      ]
    : [];

module.exports = compose(
  rewireESLint,
  config =>
    injectBabelPlugin(["import", { libraryName: "antd", style: true }], config),
  rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: antdThemeOverrides
  }),
  rewireReactHotLoader,
  config => ({
    ...config,
    plugins: [...config.plugins, ...withReactLoadable]
  })
);
