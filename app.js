const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const routes = require('./server');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use('/items', routes);
app.use('/data', express.static(path.join(__dirname, '/data')));

if (isDeveloping) {
    const config = require('./webpack/dev.config.js');
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler,
        {
            publicPath: config.output.publicPath,
            contentBase: 'src',
            stats: {
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }
        });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    const indexPath = path.join(__dirname, 'index.html');

} else {
    app.use(express.static(path.join(__dirname, '/dist')));
}

// app.get('/details/:id', function response(req, res) {
//     console.log('detail route hit',req.params.id);
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('*', function response(req, res) {
     console.log(req.params);
    console.log('star route hit', path.join(__dirname, 'index.html'));

    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.log('listening on port 3000');
});
