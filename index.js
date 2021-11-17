
const http = require('http');

const port = 3000;

packagejson = require('./package.json');
version = packagejson.version;
apiname = packagejson.name;
hash = process.env.GIT_COMMIT
  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Name: ' + apiname + '\n');
  res.write('Version: ' + version + '\n');
  res.write('Git Hash: ' + hash);
  res.end();
});

server.listen(port)
console.log(`Server running at http://${port}/health`);

