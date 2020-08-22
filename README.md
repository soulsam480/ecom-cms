# ecom-cms

Open Source standalone CMS (Content Management System) project on top of [@vuejs](https://vuejs.org) for [@firebase](https://firebase.google.com) and [JAMstack](https://jamstack.org) powered e-commerce web apps.

### Setup

```
git clone git@github.com:soulsam480/ecom-cms.git
cd ecom-cms
npm install
```

Put you firebase credentials inside src/firebase/cred.js in the below format

```
const config = {
    apiKey: "API KEY",
    authDomain: "AUTH DOMAIN",
    databaseURL: "DATABASE URL",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGE SENDER ID",
    appId: "APP ID",
  };

  export default config;

```

then

```
npm run serve
```

The project dev server will run on localhost:8080

### Structure

![File Structure](<https://raw.githubusercontent.com/soulsam480/my-static-assets/master/Screenshot%20(520).png>)

#### folder guide

- public folder has all the assets that are to be untouched by webpack while building. They will be injected unmodified.
- src - has all the code which is to be built into dist for deployment.
- src/assets - has all the static assets eg. images, fonts, etc.
- src/components - has all the vue components
- src/firebase - firebase credentials and exported firebase functions
- src/models and src/plugins are currently deprecated.
- src/router - vue router index.js
- src/store - vuex store index.js
- src/styles - single default.scss for default style across the project. Specific components and views have their own styles with a scoped attribute.
- src/views - All views or more precisely views.
- App.vue - Main vue file which is the container of this project. for more reference go to the [reference](#refrence).
- main.js - Javascript file that combines the project. for more reference go to the [reference](#refrence).

#### Configs

- eslint config inside .eslintrc.js file
- babel config inside babel.config.js
- Vue config inside vue.config.js

### Features

##### Current

This CMS does almost all the basic stuff for now. A detailed list of all the features are

- Complete Product Management
  _ Add
  _ Update \* Delete
- Media Management \* Media view and Delete
- Order Management
  _ Order view
  _ Order status Update \* Color-coded Order Status

##### Projected

- Sending Order status mails (Projected)
- Sending invoices (Projected)
- Category Management
- Product Models and Classes management
- Product Specs management

I have these ideas for the project. If you wish to contribute please visit the contributing guide and open a pull request!

### References

- [Vuejs Docs](https://vuejs.org)
- [Vue Router docs](https://router.vuejs.org)
- [Vuex Docs](https://vuex.vuejs.org)
- [Firebase Web Docs](https://firebase.google.com/docs/web/setup)

Thank you. FOr any help or queries reach me

🕊 [twitter](https://twitter.com/sambitsahoojs) / 📧 [mail](mailto:soulsam480@hotmail.com)
