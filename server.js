const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cons = require('consolidate');

express()
   .use(express.static(path.join(__dirname, 'builds')))
   .get('/', function (req, res) {
       res.sendFile(path.join(__dirname, 'builds', 'index.html'));
   })
   .get('/static/css/*', function (req, res) {
     res.sendFile(path.join(__dirname, 'builds', req.path));
   })
   .get('/static/js/*', function (req, res) {
     res.sendFile(path.join(__dirname, 'builds', req.path));
   })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
