const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cons = require('consolidate');

express()
  .engine('html', cons.swig)
  .set('view engine', 'html')
  .use(express.static(path.join(__dirname, 'build')))
  .get('/', (req, res) => res.render('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
