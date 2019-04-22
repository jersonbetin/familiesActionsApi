const express = require('express');
const app = express();
const configuration = require('./src');

configuration(app);
