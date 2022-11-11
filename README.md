# Design Daily Challenge

Just a frontend practice. Currently, it is in React but I try to be framework-agnostic in these exercises.

## Scripts

**Starting the server**

If you want to run a development server and look at my work, you can run:

```bash
npm run start
```

**Generating a component**

If you want to start your own design daily challenge, you can use a small CLI that I've built. Currently, it's written in python so make sure to have at least Python 2.8 installed! The CLI is currently in its very early phase, so right now, it can only generate boilerplates. Just run the following command:

```bash
python3 generate.py ComponentName
```

_Note: Make sure that the name follows proper React Component naming practices._

### Example

```bash
python3 generate.py Mycomponent
```

This will generate 2 files: `MyComponent.jsx` and a `styles.module.css`. You can find them in the `src/components/MyComponent` folder (do not rename the folders!). This will also rewrite `components/index.js` to import and export the necessary files. Just refer to `App.js` to see how these are used.