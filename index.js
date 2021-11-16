const http = require('http');

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


server.listen(port);
console.log(`Running on http://${port}/health`);
