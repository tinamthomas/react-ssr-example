import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import Main from './../client/components/Main';

import template from './template.index';

const app = express();

app.use('/', function (req, res) {
    const body = renderToString(<Main />);
    const html = template(body);
    res.send(html);
});


app.get('/hello', function (req, res) {
    res.send('Hello World')
});


app.listen(process.env.PORT || 3001);