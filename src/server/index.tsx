import * as React from 'react';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import Main from './../client/components/Main';
const app = express();

import * as ReactDOMServer from 'react-dom/server'

app.get('/hello', function (req, res) {
    res.send('Hello World')
});

app.get('/home', (req, res) => {
    console.log("called twice");
    fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return res.status(500).send('An error occurred')
        }
        const mainAsString = ReactDOMServer.renderToString(<Main />);
        console.log("***************", req.url);
        const data1 = 
          data.replace(
            '<div id="example"></div>',
            `<div id="example">${mainAsString}</div>`
          );
          console.log(data1);
          res.send(data1);
        
      })
});
app.use('/build', express.static(path.join(__dirname, '../../dist')));

app.listen(process.env.PORT || 3001);