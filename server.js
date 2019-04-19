/* eslint-disable no-undef */
const express = require('express')
const next = require('next')
const morgan = require('morgan');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express();
    
    server.use(morgan('dev'));

    server.get('/tags', (req, res) => {
      const actualPage = '/tagsPage'
      app.render(req, res, actualPage, {})
    })

    server.get('/tags/edit/:id', (req, res) => {
      const actualPage = '/tagsFormPage';
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/tags/add', (req, res) => {
      const actualPage = '/tagsFormPage'
      app.render(req, res, actualPage, {})
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
