const { Client } = require('@elastic/elasticsearch');
const fs = require('fs');

const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: process.env.ELASTIC_PASSWORD
  },
  tls: {
    ca: fs.readFileSync('./certs/http_ca.crt'),
    rejectUnauthorized: false
  }
})

module.exports = client;