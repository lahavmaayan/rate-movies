# rate-movies
Rate Movie Webapp - BAOT's 30 hours project 

movie-rate infrastructure skeleton was taken from 'create-react-app-light' (NOT original create-react-app):
https://github.com/yarindeoh/create-react-app-light

#### Frontend & Backend technical stack

* React (JavaScript library for building user interfaces)
* babel (transpile latest javascript code to supported browser code) including support of ES6 
* webpack (build tool, bundling and packaging javascript code) 
* webpack-dev-server (running in dev mode)
* eslint (lint tool for auto indentation and standards)
* Redux (state management maybe will be changed in the future)
* SASS (maybe will be changed in the future to plain css)
* jest (test framework configuration is set for the future use)
* nodemon (monitor node changes and automatically restart the server)
* express (web application framework for Node.js)

#### What you need on your computer 
- nodejs (latest version)
- npm/yarn as you wish
- IDE such as webstorm 

#### Configure your IDE(webstorm or others) to use code indent standard
In settings look for eslint option: enable and change it's path to point relatively to node_modules/eslint

#### Running the code in development
1) Install all dependencies (backend + frontend)

```
yarn install 
```
OR
```
npm install 
```

***NOTE: In order to run the app, run the server and the client in parallel from 2 terminals:


2) Run frontend locally in dev mode using webpack-dev-server running on port 9000

```
yarn dev-client
```
OR
```
npm run dev-client 
```

3) Run backend locally in dev mode using nodemon running on port 3000

```
yarn dev-server
```
OR
```
npm run dev-server 
```

Optional script for fixing  lint issues  using eslint

```
yarn lint-fix
```

#### Running the code in production
In the future ...
