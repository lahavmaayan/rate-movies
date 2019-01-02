# rate-movies
Rate Movie Webapp - BAOT's 30 hours project 

movie-rate infrastructure skeleton was taken from 'create-react-app-light' (NOT original create-react-app):
https://github.com/yarindeoh/create-react-app-light

## Frontend & Backend technical stack

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

#### Development mode
In the development mode, we will have 2 servers running. The front end code will be served by the webpack dev server which helps with hot and live reloading. The server side Express code will be served by a node server using nodemon which helps in automatically restarting the server whenever server side code changes.

#### Production mode (in the future)
In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick start in Development mode
1) Install all dependencies (backend + frontend)

```
yarn install 
```
OR
```
npm install 
```

***NOTE: run the server and the client in parallel from 2 terminals


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
