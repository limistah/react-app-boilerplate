### Screens

These are components that acts as the container for all the presentation for a given route.
They should start with capital letter as they export a component.
Export of screens is in the `index.js`. Adding a Screen suffix after the name of the screen.
They can contain a `/component` directory for components that are particular to the screen enclosed in. This can also be a sub-route referencing the root screen as the main route.
These components should be exposed using an `index.js` file.
Duplicating component is highly not recommended. A duplicating component should be pulled to the `~/src/component` folder. Consistency, maintenance and organization is the key here.

They can also include a `/image` directory to include all the local image assets for the screen. Image duplication is not allowed here. In any case where there is a need to pull an image from a screen's component to another's, it is advised to take the image to the asset's `~/src/assets/images` folder and get them referenced from there.

Finally in the root `index.js`, all the top level routes are assigned here.