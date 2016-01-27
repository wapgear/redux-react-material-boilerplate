# Isomorphic Redux App

[![build status](https://travis-ci.org/caljrimmer/isomorphic-redux-app.svg?branch=master&style=flat-square)](https://travis-ci.org/caljrimmer/isomorphic-redux-app)

This project serves as a **simple** boilerplate to start building an isomorphic rendering application in React and Redux.

<img src="https://habrastorage.org/files/b75/ae3/93e/b75ae393eb274caa992cc7f313dff23d.png" width="800"/>

# Features

- Async server-side rendering
- Hot reloading middleware
- Redux DevTools and Logging
- Redux Routing
- Reddit API example
- Counter example
- Todo example
- Static content example

## Stack

- React.js
- React-router
- Webpack
- Express
- Redux
- Redux-DevTools
- Babel
- Material UI

## Development Installation

In the project's directory, run the following commands:

```
$ npm install
$ npm start
```

Then Visit

```
http://localhost:3002
```

## Releasing to Production

Production has Devtools, logging and hot reloading middleware removed and the scripts/css compressed. 

In the project's directory, run the following commands:

```
$ npm run build
$ npm run start-prod
```

Then Visit

```
http://localhost:3002
```

## Run Test
```
npm test
```

## Auth
Look at /src/common/api/user.js

You need to put token into cookie with name 'token' and check it into file via axios request.

## Credit

Based on https://github.com/caljrimmer/isomorphic-redux-app

Theme by Material UI Lib https://github.com/callemall/material-ui
