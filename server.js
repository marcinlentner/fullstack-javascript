import express from 'express';
const server = express();

server.listen(8080);
// express will not error, instead returns
// html error page
// if nothing there