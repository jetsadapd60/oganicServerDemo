const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./configs/main');
const errorHandler = require('./middleware/errorHandler');
const password = require('passport');

const app = express();

// CORS Middleware
app.use(cors({ origin: '*' }));

// connect DB
mongoose.connect(config.DB,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(password.initialize());

app.use('/users', require('./routes/users.routes'));
app.use('/products', require('./routes/products.routes'));
app.use('/address', require('./routes/address.routes'));
app.use('/cart', require('./routes/cart.routes'));
app.use('/category', require('./routes/category.routes'));
app.use('/brand', require('./routes/brand.routes'));
app.use('/orders', require('./routes/orders.routes'));


app.use(errorHandler);
module.exports = app;