const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// 404 hatası için middleware
app.use(function(req, res, next) {
    res.status(404).json({ error: 'Not Found' });
});

// Genel hata yakalayıcı middleware
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    });
});

const { connectKafka } = require('./config/kafka');
connectKafka();

module.exports = app;
