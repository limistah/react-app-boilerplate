src/
  components/ -> contains reusable, state free components
    SuperButton/ -> component folders must start with a capital letter
      images/ -> components can use images
      components/ -> components can be extended
        Fab/
          index.js
      index.js
  layouts/ -> app layout wrappers. examples: nav-bar layout, single layout, sidebar layout
    Default/ -> the name of the layout must start with a capital, as it exports a component
      index.js -> 
  screens/ -> screens that are rendered on different routes.
    Home/ -> a screen must start with a capital letter
      components/ -> components only available to the home screen.
        Welcome/ -> component
          index.js
      index.js -> use index.js instead of Home.js. AirBNB guidelines, not mine.
    Foo/
      images/ -> images, svgs and other assets
        logo.svg
        banner.png
      scenes/ -> a scene can have other scenes inherited
        Bar -> /Foo/Bar.
      index.js
    router.js -> assigns a route to a scene
  services/ -> redux reducers, actions, apis, function
  index.js -> entry point. Where the app is provided with state and rendered.
  store.js -> createStore, import reducers, middleware, initial state....
  styles.css -> global app stylesheet