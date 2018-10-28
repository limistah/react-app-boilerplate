### Components

This is the folder for re-usable state free components.
These components do not interact directly with the store, and should not depend _directly_ on the store's state. They can maintain a local state.

They are directories that must start with a capital letter. **THIS IS A RULE**
They can be nested, but not another copy of a repeating component and still maintain the capital letter rule.
They can have  `/images` folder. For images particular to this component. Image duplication is not allowed, duplicating images should be pulled up to the `~/src/assets/images` folder.

And an `index.js` that exposes the component to other components.

A root `index.js` file is used to expose the components to the whole components to the rest component.