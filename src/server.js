// server.js
const fastify = require('fastify')();

// Inicia o servidor
fastify.listen({
    host: '0.0.0.0',
    port: 3333,
}).then(() => {
    console.log('🚀 HTTP Server Running!')
})
  