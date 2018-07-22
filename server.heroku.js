const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cons = require('consolidate');

express()
   .use(express.static(path.join(__dirname, 'build')))
   .get('/', function (req, res) {
       console.log('***** GET HTML *****');
       console.log(__dirname);
       res.sendFile(path.join(__dirname, 'build', 'index.html'));
   })
   .get('/static/css/*', function (req, res) {
      
     res.sendFile(path.join(__dirname, 'build', req.path));
   })
   .get('/static/js/*', function (req, res) {
     console.log('***** GET JS *****');

     res.sendFile(path.join(__dirname, 'build', req.path));
   })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))