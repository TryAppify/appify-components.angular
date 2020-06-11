# appify-angular.components
Appify components developed for the Angular platform


## How to install

- Copy the `essentials` folder into your project
- Import the Appify module into your `app.module.ts` file and include it in your imports.

```
import { AppifyModule } from '../essentials/appify.module'

...

imports: [
  BrowserModule,
  AppifyModule
],
```

- Modify your `angular.json` file styles object to add another CSS file

```
"styles": [
  "src/styles.css",
  "src/essentials/styles/global.css"
],
```
