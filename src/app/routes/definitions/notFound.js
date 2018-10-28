import Loadable from "react-loadable";

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: "notFound" */ "./../../screens/NotFound"),
  loading: () => null,
  modules: ["notFound"]
});
