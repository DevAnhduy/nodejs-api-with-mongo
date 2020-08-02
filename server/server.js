const app = require('express')();
const loaders = require('./loaders/index');
const server = require('http').createServer(app);

(async() => { // Start server
    await loaders(app);
    server.listen(__port, () => console.log(`Server started on:  ${__port}`));
})();