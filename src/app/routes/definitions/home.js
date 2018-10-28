import Loadable from "react-loadable";

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: "homeScreen" */ "./../../screens/Home"),
  loading: () => null,
  modules: ["homeScreen"]
});
