import * as React from 'react';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import Main from './../client/components/Main';
const app = express();
// app.use('/', express.static(path.join(__dirname, '../../dist')));
import * as ReactDOMServer from 'react-dom/server'


app.get('/hello', function (req, res) {
    res.send('Hello World')
});

app.get('/', (req, res) => {
    fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return res.status(500).send('An error occurred')
        }
        return res.send(
          data.replace(
            '<div id="example"></div>',
            `<div id="example">${ReactDOMServer.renderToString(<Main />)}</div>`
          )
        )
      })
});


app.listen(process.env.PORT || 3001);