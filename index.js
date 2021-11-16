
const http = require('http');

const hostname = 'localhost';
const port = 3000;

hash = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString();

packagejson = require('./package.json');
version = packagejson.version;
apiname = packagejson.name;
  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Name: ' + apiname + '\n');
  res.write('Version: ' + version + '\n');
  res.write('Git Hash: ' + hash);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/health`);
});
