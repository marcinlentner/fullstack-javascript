// https module can be used both as client and server
import https from 'https';

https.get('https://www.example.com', res => {
  console.log('Response status code: ', res.statusCode); // throws an error if address not found, website down

  res.on('data', chunk => {
    console.log(chunk.toString());
  });
});