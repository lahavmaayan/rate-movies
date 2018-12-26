# rate-movies
Rate Movie Webapp - BAOT's 30 hours project 

## Frontend

movie-rate infrastructure skeleton was taken from 'create-react-app-light' (NOT create-react-app):
https://github.com/yarindeoh/create-react-app-light

#### Currently includes a technical stack

* React
* babel (transpile latest javascript code to supported browser code) including support of ES6
* webpack (build tool, bundling and packaging javascript code) 
* webpack-dev-server (running in dev mode)
* eslint (lint tool for auto indentation and standards)
* Redux (state management maybe will be changed in the future)
* SASS (maybe will be changed in the future to plain css)
* jest (test framework configuration is set for the future use)

#### Running the code

1) Install all dependencies 

```
yarn install
```

2) Run in locally in dev mode - webpack-dev-server

```
yarn start
```

Optional script - run build

```
yarn build
```

Optional script - fix eslint issues

```
yarn lint-fix
```
#### Configure your IDE(webstorm or others) 

Enable eslint and change it's path to point relatively ro node_modules/eslint


## Backend
