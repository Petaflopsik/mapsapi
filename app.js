//Web app of 2GIS Maps API 2.0
var express = require('express'),
    cluster = require('cluster'),
    cors = require('cors'),
    cpuCount = require('os').cpus().length,
    clc = require('cli-color'),
    config = require(__dirname + '/build/config.js').appConfig;

//Init application
var app = express();

//General configuration of the application
app.set('port', config.PORT || '3000');
app.set('host', config.HOST || null);
app.use(cors());
app.use(express.static(__dirname + '/public'));

//Routes
function getParams(req, resp, next) {
    req.query.isDebug = (req.query.mode === 'debug');
    req.query.sprite = (req.query.sprite === 'true');
    req.query.mobile = (req.query.mobile === 'true');
    var contentType = (req.path === '/js/') ? 'application/javascript; charset=utf-8' : 'text/css';

    req.dgCallback = function (stream, response) {
        response.set('Cache-Control', 'public, max-age=604800');
        response.set('X-Powered-By', '2GIS Maps API Server');
        response.set('Content-Type', contentType);

        stream.on('data', function (file) {
            var directWrite = response.write(file.contents.toString('utf8'));
            if (!directWrite) {
                stream.pause();
                response.once('drain', function () {
                    stream.resume();
                });
            }
        });
        stream.on('end', function () {
            response.end();
        });
    };
    next();
}

process.env.isRuntime = true;
var gulp = require(__dirname + '/gulpfile.js');

app.get('/js', getParams, function (req, res) {
    var jsStream = gulp.getJS(req.query, req.get('X-SSL'));
    req.dgCallback(jsStream, res);
});

app.get('/css', getParams, function (req, res) {
    var cssStream = gulp.getCSS(req.query, req.get('X-SSL'));
    req.dgCallback(cssStream, res);
});

//Start server
var host = app.get('host'),
    port = app.get('port');

if (cluster.isMaster) {
    cluster
        .on('death', function (worker) {
            console.log('PID #' + worker.process.pid + ' died. spawning a new process...');
            cluster.fork();
        })
        .on('fork', function (worker) {
            console.log('PID #' + worker.process.pid + ' started!');
        });

    console.log('Maps API 2.0 server will run in ' + cpuCount + ' threads. Spawning the new processes...');
    for (var i = 0; i < cpuCount; i++) {
        cluster.fork({number: i});
    }
} else {
    app.listen(port, host, function () {
        (process.env.number == 0) && console.log(clc.green('Maps API 2.0 server listening on ' + (host ? host + ':' : '') + app.get('port')));
    });
}
