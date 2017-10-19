# react_stocks_app

This is a react-redux app which shows data about different stocks. It is hosted via an express server with help of webpack middleware and rest api is exposed with help of express-router.

The basic idea of the app is to convert this into a stock trading app with live stock feed in later stages. As of now, it is just handling the name and image of the stock.

# Development Environment
Dev environment contains sourcemaps for debugging and eslint is enforced. Node express server is used along with webpack middlewares for request serving.

Please follow these steps:

1. npm install
2. npm start
3. go to http://localhost:3000 on browser

# Production Environment
Production environment contains minified bundle file without sourcemaps.

For prod , please follow the following steps:

1.npm install
2.npm run build
3. go to http://localhost:3000 on browser


# Testing Environment
Unit testing has been done with help of Karma runner and Jasmine as a testing framework. 

For testing , please follow the following steps:

1.npm install
2.npm test

Coverage reports are also being generated using istanbul instrumentor. For viewing coverage report please go to coverage folder in root directory and manually launch the index html file as of now. 
